import React, {useState} from 'react'
import { CgArrowsExchangeV } from 'react-icons/cg'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { dummyData } from '../../static/dummy'
import EventItem from './itemActivity/EventItem'

const styles = {
  app__wrapper: `w-full mt-8 border border-[#151b22] rounded-xl bg-[#303339] overflow-hidden`,
  app__title: `bg-[#262b2f] px-6 py-4 flex items-center`,
  app__titleLeft: `flex-1 flex items-center text-xl font-bold`,
  app__titleIcon: `text-3xl mr-2`,
  app__titleRight: `text-xl`,
  app__filter: `flex items-center border border-[#151b22] mx-4 my-6 px-3 py-4 rounded-xl bg-[#363840] overflow-x-hidden`,
  app__filterTitle: `flex-1`,
  app__tableHeader: `flex w-full bg-[#262b2f] border-y border-[#151b22] mt-8 px-4 py-1`,
  app__eventItem: `flex px-4`,
  app__ethLogo: `h-5 mr-2`,
  app__accent: `text-[#2081e2]`,
}

const ItemActivity = () => {
    const [toggle, setToggle] = useState(true);
  return (
    <div className={styles.app__wrapper}>
        <div className={styles.app__title} onClick={() => setToggle(!toggle)}>
            <div className={styles.app__titleLeft}>
                <span className={styles.app__titleIcon}>
                    <CgArrowsExchangeV/>
                </span>
                Item Activity
            </div>
            <div className={styles.app__titleRight}>
                {toggle ? <AiOutlineUp/>: <AiOutlineDown/>}
            </div>
        </div>
        {toggle && (
            <div className={styles.activityTable}>
                <div className={styles.app__filter}>
                    <div className={styles.app__filterTitle}>FIlter</div>
                    <div className={styles.filterIcon}>
                        {'  '}
                        <AiOutlineDown/> {'  '}
                    </div>
                </div>
                <div className={styles.app__tableHeader}>
                <div className={`${styles.tableHeaderElement} flex-[2]`}>Event</div>
                <div className={`${styles.tableHeaderElement} flex-[2]`}>Price</div>
                <div className={`${styles.tableHeaderElement} flex-[3]`}>From</div>
               <div className={`${styles.tableHeaderElement} flex-[3]`}>To</div>
               <div className={`${styles.tableHeaderElement} flex-[2]`}>Date</div>
                </div>
                {dummyData.map((item, id) => (
                    <EventItem key={id} item ={item} />
                ))}
            </div>
        )}
    </div>
  )
}

export default ItemActivity