import React from 'react'
import Image from 'next/image'
import logo from "../assets/logo.png"
import Link from 'next/link'
import {AiOutlineSearch} from "react-icons/ai";
import {CgProfile} from "react-icons/cg";
import {MdOutlineAccountBalanceWallet} from 'react-icons/md';

const styles = {
    app__wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex`,
    app__logoContainer: `flex items-center cursor-pointer`,
    app__logoText: `ml-[0.8rem] text-white font-semibold text-2xl`,
    app__searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
    app__searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    app__searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    app__navbarItems: ` flex items-center justify-end`,
    app__navbarItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
    app__navbarIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
}

const Navbar = () => {
  return (
    <div className={styles.app__wrapper}>
        <Link href='/'>
        <div className={styles.app__logoContainer}>
        <Image src={logo} height={40} width={40}/>
        <div className={styles.app__logoText}>OpenSea</div>
        </div>
        </Link>
        <div className={styles.app__searchBar}>
            <div className={styles.app__searchIcon}>
                <AiOutlineSearch/>
            </div>
            <input className={styles.app__searchInput} placeholder= "Search items, collections, and accounts"/>
        </div>
        <div className={styles.app__navbarItems}>
            <Link href='/explore/0x448d1ce0Ca39AC727C1FC813e4B628e2e1e606bA'>
            <div className={styles.app__navbarItem}>Explore</div>
            </Link>
            <div className={styles.app__navbarItem}>Stats</div>
            <div className={styles.app__navbarItem}>Resources</div>
            <div className={styles.app__navbarItem}>Create</div>
            <div className={styles.app__navbarIcon}><CgProfile/></div>
            <div className={styles.app__navbarIcon}><MdOutlineAccountBalanceWallet/></div>
        </div>
    </div>
  )
}

export default Navbar