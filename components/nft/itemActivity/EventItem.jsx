import React from 'react'
import {BsFillCartFill} from 'react-icons/bs'

const styles = {
    app__eventItem: `flex px-4 py-5 font-medium`,
    app__event: `flex items-center`,
    app__eventIcon: `mr-2 text-xl`,
    app__eventName: `text-lg font-semibold`,
    app__eventPrice: `flex items-center`,
    app__eventPriceValue: `text-lg`,
    app__ethLogo: `h-5 mr-2`,
    app__accent: `text-[#2081e2]`,
}

const EventItem = ({item}) => {
  return (
   <div className={styles.app__eventItem}>
    <div className={`${styles.app__event} flex-[2]`}>
        <div className={styles.app__eventIcon}>
            <BsFillCartFill/>
        </div>
        <div className={styles.app__eventName}>Sale</div>
    </div>
    <div className={`${styles.app__eventPrice} flex-[2]`}>
        <img src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" alt="eth" className={styles.app__ethLogo}/>
        <div className={styles.app__eventPriceValue}>{item.price}</div>
    </div>
    <div className={`${styles.app__accent} flex-[3]`}>{item.from}</div>
    <div className={`${styles.app__accent} flex-[3]`}>{item.to}</div>
    <div className={`${styles.app__accent} flex-[2]`}>{item.date}</div>

   </div>
  )
}

export default EventItem