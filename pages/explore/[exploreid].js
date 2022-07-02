import React, {useEffect, useMemo, useState} from 'react'
import {useRouter} from 'next/router'
import { useWeb3 } from '@3rdweb/hooks'
import {client} from '../../lib/sanityClient'
import { ThirdwebSDK } from '@3rdweb/sdk'
import Navbar from '../../components/Navbar'
import {CgWebsite} from 'react-icons/cg'
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import {HiDotsVertical} from 'react-icons/hi'
import Card from '../../components/Card'

const styles = {
  app__bannerImageContainer: `h-[20vh] w-screen overflow-hidden flex justify-center items-center`,
  app__bannerImage: `w-full object-cover`,
  app__infoContainer: `w-screen px-4`,
  app__midRow: `w-full flex justify-center text-white`,
  app__endRow: `w-full flex justify-end text-white`,
  app__profileImg: `w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]`,
  app__socialIconsContainer: `flex text-3xl mb-[-2rem]`,
  app__socialIconsWrapper: `w-44`,
  app__socialIconsContent: `flex container justify-between text-[1.4rem] border-2 rounded-lg px-2`,
  app__socialIcon: `my-2`,
  app__divider: `border-r-2`,
  app__title: `text-5xl font-bold mb-4`,
  app__createdBy: `text-lg mb-4`,
  app__statsContainer: `w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4`,
  app__collectionStat: `w-1/4`,
  app__statValue: `text-3xl font-bold w-full flex items-center justify-center`,
  app__ethLogo: `h-6 mr-2`,
  app__statName: `text-lg w-full text-center mt-1`,
  app__description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`,
}

//https://eth-rinkeby.alchemyapi.io/v2/xP6xLVk1I-idnXnxoymUpdRPLPQVmyUx

const Explore = () => {
    const router = useRouter();
    const {provider} = useWeb3();
    const {exploreid} = router.query;
    const [explore, setExplore] = useState({});
    const [nft, setNft] = useState([]);
    const [listings, setListings] = useState([]);
    
    //access from Nft Collection from thirdweb
    const nftModule  = useMemo(() => {
        if (!provider) return

        const sdk = new ThirdwebSDK(
          provider.getSigner(),
          'https://eth-rinkeby.alchemyapi.io/v2/xP6xLVk1I-idnXnxoymUpdRPLPQVmyUx'
        )
        return sdk.getNFTModule(exploreid);
    },[provider])

    //get all nft in the collection from thirdweb
    useEffect(() => {
        if(!nftModule) return
        ;(async () => {
          const nfts = await nftModule.getAll();

          setNft(nfts)
        })()
    }, [nftModule])
    //access from marketplace from thirdweb
    const marketPlaceModule = useMemo(() => {
      if (!provider) return

      const sdk = new ThirdwebSDK(
        provider.getSigner(),
        'https://eth-rinkeby.alchemyapi.io/v2/xP6xLVk1I-idnXnxoymUpdRPLPQVmyUx'
      )
      return sdk.getMarketplaceModule(
        '0xc85feB30668842A1280B59C383bfb62C2De348fD'
      )
    },[provider])

    //get all listings in the collections
    useEffect(() => {
       if (!marketPlaceModule) return
       ;(async () => {
        setListings(await marketPlaceModule.getAllListings())
       })()
    }, [marketPlaceModule])
    
    //get sanity data
    const fetchExploreData = async (sanityClient = client) => {
      const query =`*[_type == "marketItems" && contractAddress == "${exploreid}" ] {
        "imageUrl": profileImage.asset->url,
        "bannerImageUrl": bannerImage.asset->url,
        volumeTraded,
        createdBy,
        contractAddress,
        "creator": createdBy->userName,
        title, floorPrice,
        "allOwners": owners[]->,
        description
      }`

      const exploreData = await sanityClient.fetch(query)
     
      //the query return 1 object inside of an array
      await setExplore(exploreData[0]);
    }

    useEffect(() => {
      fetchExploreData();
    }, [exploreid])
    

  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <div className={styles.app__bannerImageContainer}>
        <img className={styles.app__bannerImage} 
       src={
        explore?.bannerImageUrl
          ? explore.bannerImageUrl
          : 'https://via.placeholder.com/200'
       }
           alt="image"  />
      </div>
      <div className={styles.app__infoContainer}>
        <div className={styles.app__midRow}>
          <img className={styles.app__profileImg} 
          src= {
            explore?.imageUrl 
            ? explore.imageUrl 
            : 'https://via.placeholder.com/200'
          }
           alt="image" />
        </div>
        <div className={styles.app__endRow}>
          <div className={styles.app__socialIconsContainer}>
            <div className={styles.app__socialIconsWrapper}>
              <div className={styles.app__socialIconsContent}>
                <div className={styles.app__socialIcon}>
                  <CgWebsite/>
                </div>
                <div className={styles.app__divider}/>
                <div className={styles.app__socialIcon}>
                  <AiOutlineInstagram/>
                </div>
                <div className={styles.app__divider}/>
                <div className={styles.app__socialIcon}>
                  <AiOutlineTwitter/>
                </div>
                <div className={styles.app__divider}/>
                <div className={styles.app__socialIcon}>
                  <HiDotsVertical/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.app__midRow}>
          <div className={styles.app__title}>
            {explore?.title}
          </div>
        </div>
        <div className={styles.app__midRow}>
          <div className={styles.app__createdBy}>
            Created by{'  '}
            <span className='text-[#2081e2]'>{explore?.creator}</span>
          </div>
        </div>
        <div className={styles.app__midRow}>
          <div className={styles.app__statsContainer}>
            <div className={styles.app__collectionStat}>
              <div className={styles.app__statValue}>{nft.length}</div>
              <div className={styles.app__statName}>Items</div>
            </div>
            <div className={styles.app__collectionStat}>
              <div className={styles.app__statValue}>
                {explore?.allOwners ? explore.allOwners.length : ' '}
              </div>
              <div className={styles.app__statName}>Owners</div>
            </div>   
            <div className={styles.app__collectionStat}>
              <div className={styles.app__statValue}>
                <img src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" alt="image" className={styles.app__ethLogo} />
                {explore?.floorPrice}
              </div>
              <div className={styles.app__statName}>floor Price</div>
            </div> 
            <div className={styles.app__collectionStat}>
              <div className={styles.app__statValue}>
                <img src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" alt="image" className={styles.app__ethLogo} />
                {explore?.volumeTraded}.2K
              </div>
              <div className={styles.app__statName}>total volume</div>
            </div> 
          </div>
        </div>
        <div className={styles.app__midRow}>
          <div className={styles.app__description}>{explore?.description}</div>
        </div>
      </div>
      <div className='flex flex-wrap'>
        {nft.map((nftItem, id)=> (
          <Card
          key={id}
          nftItem = {nftItem}
          title = {explore?.title}
          listings= {listings}
          />
        ))}
      </div>
    </div>
  )
}

export default Explore