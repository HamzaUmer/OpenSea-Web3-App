import React from 'react'

const styles = {
  app__hero_wrapper: `relative overflow-hidden`,
  app__container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://img.seadn.io/files/0e2bbda52bf0aa96f92f78943332ead0.jpg?fit=max&auto=format&h=550&w=550')] before:bg-cover before:bg-center before:opacity-20 before:blur overflow-hidden`,
  app__contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  app__copyContainer: `w-1/2`,
  app__title: `relative text-white text-[46px] font-semibold`,
  app__description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  app__ctaContainer: `flex`,
  app__accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  app__button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  app__cardContainer: `rounded-[3rem]`,
  app__infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  app__author: `flex flex-col justify-center ml-4`,
  app__name: `font-bold text-md`,
  app__infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
  return (
    <div className={styles.app__hero_wrapper}>
      <div className={styles.app__container}>
        <div className={styles.app__contentWrapper}>
          <div className={styles.app__copyContainer}>
          <div className={styles.app__title}>  
              Discover, collect, and sell <br/> extraordinary NFTs
          </div>
          <div className={styles.app__description}>OpenSea is the world's first and <br /> largest NFT marketplace</div>
        <div className={styles.app__ctaContainer}>
          <button className={styles.app__accentedButton}>Explore</button>
          <button className={styles.app__button}>Create</button>
          </div>
          </div>
          <div className={styles.app__cardContainer}>
            <img src="https://img.seadn.io/files/0e2bbda52bf0aa96f92f78943332ead0.jpg?fit=max&auto=format&h=550&w=550" alt="image" className='rounded-t-lg' />
            <div className={styles.app__infoContainer}>
              <img src="https://lh3.googleusercontent.com/MdzbUk4VGorz-pLhNI9d1NqcXsnpRSyBxyuV7sSv2POaA-LBXt8EhFcoghQMDmSUL3yvYNTCsuQayQM93HHJYmj65i_ccyc-9ikB=s80" 
              alt="image"
              className='h-[2.25rem] rounded-full' />
              <div className={styles.app__author}>
                <div className={styles.app__name}>
                    Butterfly Sunset Queens
                </div>
                <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/11956746333207341175462951814378395463714077073898832059410800077006056718337"
                className='text-[#1868b7]'>
                  JuanaViEs
                </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero