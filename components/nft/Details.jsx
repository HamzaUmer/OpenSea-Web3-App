import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { MdRefresh } from 'react-icons/md'
import { RiShareBoxLine } from 'react-icons/ri'
import { FiMoreVertical } from 'react-icons/fi'
import { GiShare } from 'react-icons/gi'

const styles = {
  app__wrapper: `flex`,
  app__infoContainer: `h-36 flex flex-col flex-1 justify-between mb-6`,
  app__accent: `text-[#2081e2]`,
  app__nftTitle: `text-3xl font-extrabold`,
  app__otherInfo: `flex`,
  app__ownedBy: `text-[#8a939b] mr-4`,
  app__likes: `flex items-center text-[#8a939b]`,
  app__likeIcon: `mr-1`,
  app__actionButtonsContainer: `w-44`,
  app__actionButtons: `flex container justify-between text-[1.4rem] border-2 rounded-lg`,
  app__actionButton: `my-2`,
  app__divider: `border-r-2`,
}

const Details = ({selected}) => {
  return (
    <div className={styles.app__wrapper}>
        <div className={styles.app__infoContainer}>
            <div className={styles.app__accent}>Mutant Ape Yacht Club</div>
            <div className={styles.app__nftTitle}>{selected?.name}</div>
            <div className={styles.app__otherInfo}>
                <div className={styles.app__ownedBy}>
                    Owned by <span className={styles.app__accent}>mutayyab123</span>
                </div>
                <div className={styles.app__likes}>
                    <AiFillHeart className={styles.app__likeIcon}/> 7.1k favourites
                </div>
            </div>
        </div>
        <div className={styles.app__actionButtonsContainer}>
            <div className={styles.app__actionButtons}>
                <div className={`${styles.app__actionButton} ml-2`}>
                    <MdRefresh/>
                </div>
                <div className={styles.app__divider}/>
                <div className={styles.app__actionButton}>
                    <RiShareBoxLine/>
                </div>
                <div className={styles.app__divider}/>
                <div className={styles.app__actionButton}>
                    <GiShare/>
                </div>
                <div className={styles.app__divider}/>
                <div className={`${styles.app__actionButton} mr-2`}>
                    <FiMoreVertical/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details