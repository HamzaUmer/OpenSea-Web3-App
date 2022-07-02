import React, {useEffect, useState} from 'react'
import {HiTag} from 'react-icons/hi'
import { IoMdWallet } from 'react-icons/io'
import toast, {Toaster} from 'react-hot-toast'

const styles= {
    app__button: `mr-8 flex items-center py-2 px-12 rounded-lg cursor-pointer`,
    app__buttonIcon: `text-xl`,
    app__buttonText: `ml-2 text-lg font-semibold`,
}

const Buy = ({selected, isListed, listings,  marketPlaceModule}) => {
    const [selectedMNft, setSelectedMNft] = useState();
    const [enableButton, setEnableButton] = useState(false);

    useEffect(() => {
      if (!listings || isListed === 'false') return
      ;(async () => {
        setSelectedMNft(
          listings.find((marketNft) => marketNft.asset?.id === selected.id)
        )
      })()
    }, [selected, listings, isListed])
  
    useEffect(() => {
      if (!selectedMNft || !selected) return
  
      setEnableButton(true)
    }, [selectedMNft, selected])

     const confirmBuying  = (toastHandler = toast) => 
     toastHandler.success(`Purchase Successful!!`, {
        style : {
            background: '#04111d',
            color: '#ffff'
        },
     })
     const buyItem = async (
        listingId = selectedMNft.id,
        quantityDesired = 1,
        module =  marketPlaceModule
      ) => {
        console.log(listingId, quantityDesired, module, 'hamza')
        await module.buyoutDirectListing({
            listingId,
            quantityDesired
          })
    
        confirmBuying()
      }
  return (
<div className="flex h-20 w-full items-center rounded-lg border border-[#151c22] bg-[#303339] px-12">
      <Toaster position="bottom-left" reverseOrder={false} />
      {isListed === 'true' ? (
        <>
          <div
            onClick={() => {
              enableButton ? buyItem(selectedMNft.id, 1) : null
            }}
            className={`${styles.app__button} bg-[#2081e2] hover:bg-[#42a0ff]`}
          >
            <IoMdWallet className={styles.app__buttonIcon} />
            <div className={styles.app__buttonText}>Buy Now</div>
          </div>
          <div
            className={`${styles.app__button} border border-[#151c22]  bg-[#363840] hover:bg-[#4c505c]`}
          >
            <HiTag className={styles.app__buttonIcon} />
            <div className={styles.app__buttonText}>Make Offer</div>
          </div>
        </>
      ) : (
        <div className={`${styles.app__button} bg-[#2081e2] hover:bg-[#42a0ff]`}>
          <IoMdWallet className={styles.app__buttonIcon} />
          <div className={styles.app__buttonText}>List Item</div>
        </div>
      )}
    </div>
  )
}

export default Buy