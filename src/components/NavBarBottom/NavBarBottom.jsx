import style from './NavBarBottom.module.css'
import winLogo from '../../assets/win95-logo.webp'
import { useState } from 'react';
import HomeComponent from '../HomeComponent/HomeComponent';
import clock from '../../assets/clock.webp'
import Popup from 'reactjs-popup';
import './NavBarBottomPopUp.css';

const NavBarBottom = () => {

  const [ homeClicked, setHomeClicked ] = useState(false);
  const [ time, ] = useState(new Date());

  return (
    <nav className={style.navBarBottom}>
      <ul className={style.list}>
        <li className={style.startButton}>
          <button onClick={() => {setHomeClicked(!homeClicked); console.log('Click')}} className={style.homeButton}>
            <img src={winLogo} alt='Inicio'></img>
            <h1>Inicio</h1>
          </button>
          { homeClicked ? <HomeComponent/> : null}
          
        </li>

        <li className={style.clock}>
          <h1>
          {
            time.toLocaleTimeString("en-US", {
            hour: '2-digit',
            minute: '2-digit'})
          }
          </h1>
        <img 
          className={style.clockLogo} 
          src={clock} 
          alt='Clock'
          width={'14px'}
          height={'17px'}
          />
        </li>
      </ul>
    </nav>
  );
}

export default NavBarBottom;
