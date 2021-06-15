import React from 'react'
import '../App.css'
import HeaderItem from './HeaderItem'
import { IoPersonOutline,IoHomeOutline ,IoSearchOutline,IoAlbumsOutline,IoFlashOutline} from "react-icons/io5";

const Header = () => {
    
    
    return (
        <div className="header" >
        <div className="header_item_container">
            <HeaderItem link='/' title="home" Icon={<IoHomeOutline className="icons"/>}/>
            <HeaderItem title="trending" Icon={<IoFlashOutline className="icons"/>}/>
            <HeaderItem title="collection" Icon={<IoAlbumsOutline className="icons"/>}/>
            <HeaderItem title="search" Icon={<IoSearchOutline className="icons"/>}/>
            <HeaderItem title="account" Icon={<IoPersonOutline className="icons"/>}/>
            
        </div>
           <img  src='https://download.logo.wine/logo/Hulu/Hulu-Logo.wine.png' alt=''/>
        </div>
    )
}

export default Header
