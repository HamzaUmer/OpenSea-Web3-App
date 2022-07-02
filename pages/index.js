import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import { useWeb3 } from "@3rdweb/hooks"
import { useEffect } from "react"
import { client } from "../lib/sanityClient"
import toast, {Toaster} from 'react-hot-toast'

const styles = {
  app__home_wrapper: ``,
  app__walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  app__home_button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-white hover:bg-[#42a0ff] `,
  app__details: `text-lg text-center text-white font-semibold mt-4`,
}

const Home  = () => {
  const {address, connectWallet} = useWeb3();

  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(`Welcome back ${userName !== 'Unnamed' ? `${userName}` : ' '}!`,
    {
      style: {
        background: '#04111d',
        color: '#ffff',
      },
    })
  }

  useEffect(() => {
    if (!address) return
    ;(async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      }

      const result = await client.createIfNotExists(userDoc)
       welcomeUser(result.userName);
    })()
  }, [address])

  
  return (
    <div className={styles.app__home_wrapper}>
      <Toaster position="top-center" reverseOrder={false}/>
      {address ? (
    <>
      <Navbar/>
      <Hero/>
      </>
      ) : (
        <div className={styles.app__walletConnectWrapper}>
         <button className={styles.app__home_button} onClick={() => connectWallet('injected')}>
          Connect Wallet
         </button>
         <div className={styles.app__details}>
               You need Metamask or other wallet to be
               <br /> able to run this app.
         </div>
         </div>
      )}
      </div>
  )
}

export default Home
