import React, {useState} from 'react';
import { icons } from 'react-icons';
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import './Navbar.css';


function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='LeftNavBar'>
                    <Link to="/" className=''>
                        <img src ="https://d2qgo50yy98y8.cloudfront.net/public/front/img/logo.png" alt="home" width="55" ></img>
                    </Link>
                    <Link to="#" >
                        <FaBars classname='SideBarButton'>
                        </FaBars>
                    </Link>
                    </div>
                    <div className= "RightFloat">
                    
                 
                    
                    <Link to="/" className='DropDownMenus' style={{ textDecoration: 'none',
                                                        color: 'gray',
                                                        fontSize: '14px'}}>
                    <img src ="https://d2qgo50yy98y8.cloudfront.net/public/front/img/explore.png" alt="Explore"></img>
                       Explore
                    </Link>
                    <Link to="/" className='DropDownMenus' style={{ textDecoration: 'none',
                                                        color: 'gray',
                                                        fontSize: '14px'}}>
                    <img src ="https://d2qgo50yy98y8.cloudfront.net/public/front/img/web-browser.png" alt="Dashboard" width="23" height="22"></img>
                        My Dashboard
                        <i class="fa fa-caret-down"></i>
                    </Link>
                    <div class="dropdown-content">
                    <Link to="/">Account</Link>
                    </div>
                    <Link to="/" className='DropDownMenus' style={{ textDecoration: 'none',
                                                        color: 'gray',
                                                        fontSize: '14px'}} >
                    <img src ="https://d2qgo50yy98y8.cloudfront.net/public/front/img/settings.png" alt="Manage" width="23" height="22"></img>
                        Manage
                    </Link>
                    <div class="search-container" width="398" height={38} >
                    <img src="https://d2qgo50yy98y8.cloudfront.net/public/front/img/search_icon.png" alt="searchIcon" className='searchImage' width={20} height={20}></img>
                    <form action="/action_page.php">
                    <input type="text" placeholder="Search Challenges, Labs, Projects and People" name="search" autocomplete='off' width="358" height={38}>
                        
                        </input>
                 </form>
                    </div>
                    <Link to="/" className=''>
                        <img src='https://prepr-media-live.s3.ca-central-1.amazonaws.com/front/img/default-user.png' alt="UserPicture" height={33} width={33}></img>
                    </Link>
                    
                   
                    
  </div>


                </div>
            </nav>
        </>
    )
}

export default Navbar
