import React, {useEffect, useState} from 'react'
import {BiHeart } from "react-icons/bi"
import Router from 'next/router' 

const styles = {
  app__wrapper: `bg-[#303339] flex-auto w-[14rem] h-[22rem] my-10 mx-5 rounded-2xl overflow-hidden cursor-pointer`,
  app__imgContainer: `h-2/3 w-full overflow-hidden flex justify-center items-center`,
  app__nftImg: `w-full object-cover`,
  app__details: `p-3`,
  app__info: `flex justify-between text-[#e4e8eb] drop-shadow-xl`,
  app__infoLeft: `flex-0.6 flex-wrap`,
  app__collectionName: `font-semibold text-sm text-[#8a939b]`,
  app__assetName: `font-bold text-lg mt-2`,
  app__infoRight: `flex-0.4 text-right`,
  app__priceTag: `font-semibold text-sm text-[#8a939b]`,
  app__priceValue: `flex items-center text-xl font-bold mt-2`,
  app__ethLogo: `h-5 mr-2`,
  app__likes: `text-[#8a939b] font-bold flex items-center w-full justify-end mt-3`,
  app__likeIcon: `text-xl mr-2`,
}

const Card = ({nftItem, title, listings}) => {
  const [isListed, setisListed] = useState(false);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const listing = listings.find((listing) => listing.asset.id === nftItem.id)
    if (Boolean(listing)) {
      setisListed(true)
      setPrice(listing.buyoutCurrencyValuePerToken.displayValue)
    }
  }, [listings, nftItem])
  
  return (
    <div className={styles.app__wrapper}
    onClick = {() => {
      Router.push({
        pathname: `/nfts/${nftItem.id}`,
        query: {isListed: isListed},
      })
    }}
    >
      <div className={styles.app__imgContainer}>
        <img src={nftItem.image} alt={nftItem.name} className={styles.app__nftImg} />
      </div>
        <div className={styles.app__details}>
          <div className={styles.app__info}>
            <div className={styles.app__infoLeft}>
              <div className={styles.app__collectionName}>{title}</div>
              <div className={styles.app__assetName}>{nftItem.name}</div>
            </div>
            {isListed && (
            <div className={styles.app__infoRight}>
              <div className={styles.app__priceTag}>Price</div>
              <div className={styles.app__priceValue}>
                <img
                  src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
                  alt="eth"
                  className={styles.app__ethLogo}
                />
                {price}
              </div>
            </div>
          )}
        </div>
        <div className={styles.app__likes}>
          <span className={styles.app__likeIcon}>
            <BiHeart />
          </span>{' '}
          {nftItem.likes}
        </div>
        </div>
    </div>
  )
}

export default Card