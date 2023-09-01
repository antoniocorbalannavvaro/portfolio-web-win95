import { useState } from 'react';
import style from './ChangeUIButton.module.css';

// ASSETS:
import modernComputer from '../../assets/modernComputer.webp';
import warningIcon from '../../assets/warningWin95.webp';

const ChangeUIButton = () => {

  const [ winUI, setwinUI ] = useState(true);
  const [ display, setDisplay ] = useState(false);

  const showWarning = () => {
    setDisplay(true)
    setTimeout(() => {
      setDisplay(false);
    }, 3000)
  }
  return (
    <div className={style.textToChangeUIWin} onClick={() => {showWarning()}} >

      <h3 className={style.textUIUbuntu}>Linux</h3>

      <img 
        className={style.modernComputer} 
        src={modernComputer} 
        alt="Computer"
        width={'30px'}
        height={'60px'}
        />
      {
        display ?      
        <div className={style.message}>
          <h1>Esta funcionalidad todavía está en desarrollo.</h1>
        </div>
        : null
      }

        
      <div className={style.beta}>
        <img 
          height={'20px'} 
          width={'20px'} 
          src={warningIcon} 
          alt='Warining'></img>
        <h3>!!Beta!!</h3>
      </div>
      
    </div>
  );
}

export default ChangeUIButton;
