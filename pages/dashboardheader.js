import Head from 'next/head';
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCaretDown, faCertificate,faChartLine, faComment, faComments, faGraduationCap, faHome, faMoneyBill, faMoneyBillAlt, faMoneyBillWave, faMoneyBillWaveAlt, faMoneyCheck, faMoneyCheckAlt, faPaw, faSearch, faShoppingBasket, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import profile from '../public/profile.jpg';
import Image from 'next/image';
import logo from '../public/logo.png';
import React from 'react';
export default function Header() {
  
  return (
    <div>
      <Head>
        <title>Agricultural dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
      </Head>
      <main >
      <div className = {styles.dashboard__menu}>
        <div className = {styles.dashboard__sidebar}>
          <div className = {styles.dashboard__logo}>
            <Image src={logo} alt = "Company logo"/>
            
          </div>
          <ul>
            <li>
            <FontAwesomeIcon icon={faHome} className = {styles.homeicon}/>
              <a href = "./dashboard">Dashboard</a>
            </li>
            <li>
            <FontAwesomeIcon icon={faChartLine} className = {styles.homeicon}/>
              <a href = "./dashboard">Product Management</a>
            </li>
            <li>
            <FontAwesomeIcon icon={faShoppingCart} className = {styles.homeicon}/>
              <a href = "#">Orders</a>
            </li>
            <li>
            <FontAwesomeIcon icon={faGraduationCap} className = {styles.homeicon}/>
              <a href = "#">Training</a>
            </li>
            <li>
            <FontAwesomeIcon icon={faCertificate} className = {styles.homeicon}/>
              <a href = "#">Recommendations</a>
            </li>
            <li>
            <FontAwesomeIcon icon={faComments} className = {styles.homeicon}/>
              <a href = "#">FAQs</a>
            </li>
          </ul>
        </div>
        <div className ={styles.dashboard__header}>
           <div className ={styles.dashboard__headersearch}>
             <input placeholder = "Search or help center" className = {styles.dashboard__headerinput}/>
              <div>
              <FontAwesomeIcon icon ={faSearch} className = {styles.searchicon}/>
              </div>
           </div>
           <div className = {styles.dashboard__headerprofile}>
             <div className = {styles.dashboard__headerlanguage}>
               <div>
           <input placeholder = "English" className = {styles.dashboard__headerinputlanguage}/>
           </div>
           <FontAwesomeIcon icon={faCaretDown} className = {styles.dropdownicon}/>
           </div>
           <FontAwesomeIcon icon={faComment} className = {styles.headericon}/>
           <FontAwesomeIcon icon={faBell} className = {styles.headericon}/>
             <Image src={profile} alt = "profile picture" width = {50} height = {50} className = {styles.profile__pic}/>
             <span>Veronica</span>
             <FontAwesomeIcon icon={faCaretDown} className = {styles.dropdownicon}/>
           </div>
        </div>
      </div>
      </main>
      </div>
  );
}