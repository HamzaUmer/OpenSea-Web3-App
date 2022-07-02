import React from 'react'
import {IoMdSnow}  from 'react-icons/io'
import { AiOutlineHeart } from 'react-icons/ai'

const styles = {
    app__topBar: `bg-[#303339] p-2 rounded-t-lg border-[#151c22] border`,
    app__topBarContent: `flex items-center`,
    app__likesCounter: `flex-1 flex items-center justify-end`,
    app__nftImg: `w-full object-cover rounded-none`,
}

const NFTImage = ({selected}) => {
  return (
    <div>
        <div className={styles.app__topBar}>
            <div className={styles.app__topBarContent}>
            <IoMdSnow/>
            <div className={styles.app__likesCounter}>
                <AiOutlineHeart/>
                7.1k
            </div>
            </div>
        </div>
        <div>
            <img src={selected?.image} alt="nft" className={styles.app__nftImg}/>
        </div>
    </div>
  )
}

export default NFTImage