import React, {useEffect, useState, useMemo} from 'react'
import Navbar from '../../components/Navbar'
import { useWeb3 } from '@3rdweb/hooks'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { useRouter } from 'next/router'
import NFTImage from '../../components/nft/NFTImage'
import Details from '../../components/nft/Details'
import ItemActivity from '../../components/nft/ItemActivity'
import Buy from '../../components/nft/Buy'

const styles = {
  app__wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
  app__container: `container p-6`,
  app__topContent: `flex`,
  app__nftImgContainer: `flex-1 mr-4`,
  app__detailsContainer: `flex-[2] ml-4`,
}

const Nft = () => {
  const {provider } = useWeb3();
  const [selectedNft, setSelectedNft] = useState();
  const [listings, setListings] = useState([]);
  const router = useRouter();

  //access from Nft Collection from thirdweb
  const nftModule  = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      'https://eth-rinkeby.alchemyapi.io/v2/xP6xLVk1I-idnXnxoymUpdRPLPQVmyUx'
      )
    return sdk.getNFTModule('0x448d1ce0Ca39AC727C1FC813e4B628e2e1e606bA');
},[provider])

 //get all nft in the collection from thirdweb
 useEffect(() => {
  if(!nftModule) return
  ;(async () => {
    const nfts = await nftModule.getAll();
    
    const selectedNftItem = nfts.find(
      (nft) => nft.id === router.query.nftId
    )
    setSelectedNft(selectedNftItem);
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

  return (
    <div>
    <Navbar/>
    <div className={styles.app__wrapper}>
      <div className={styles.app__container}>
        <div className={styles.app__topContent}>
          <div className={styles.app__nftImgContainer}>
          <NFTImage selected = {selectedNft}/>
          </div>
          <div className={styles.app__detailsContainer}>
              <Details selected = {selectedNft}/>
              <Buy
              isListed = {router.query.isListed}
              selected = {selectedNft}
              listings = {listings}
              marketPlaceModule = {marketPlaceModule}
              />
          </div>
        </div>
        <ItemActivity/>
      </div>
    </div>
    </div>
  )
}

export default Nft