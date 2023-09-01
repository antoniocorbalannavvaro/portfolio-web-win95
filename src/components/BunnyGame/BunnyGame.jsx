import { useState } from 'react';
import style from './BunnyGame.module.css';

// ASSETS:
import bunnyGif from '../../assets/bunny.gif';
import dancingPlant from '../../assets/dancingPlant.webp';
import thinkingPopUp from '../../assets/thinkingPopUp.webp';
import carrot from '../../assets/carrotBien.gif';
import questionMark from '../../assets/questionMark.webp';


// COMPONENTS:
import Draggable from 'react-draggable';
import ConfettiExplosion from 'react-confetti-explosion';

const BunnyGame = () => {

  const messages = ['!COMIDA!', '!POR FAVOR!'];
  const [ bunnyPopUp, setBunnyPopUp] = useState(false);
  const [ message, setMessage ] = useState('');
  const [ count, setCount ] = useState(0);
  const [ carrotFound, setCarrotFound ] = useState(false);

  const popUpTimeOut = () => {

    if (carrotFound === true) {
      setMessage('!G R A C I A S!');
      setBunnyPopUp(true);
      
      setTimeout(() => {
        setBunnyPopUp(false)
      },2000)
      return
    }

    if (count === 0) {
      setCount(count + 1)

    } else setCount(count - 1) 

    if (!carrotFound) {
      setBunnyPopUp(true)
      setMessage(messages[count])
      setTimeout(() => {
        setBunnyPopUp(false)
      },4000)
    } else return
  }

  return (
    <div>
      <img
        className={style.bunny} 
        src={bunnyGif} 
        alt="bunny"
        onClick={() => popUpTimeOut()}
        />
      <img className={style.dancingPlant} src={dancingPlant} alt="plant"/>

      {!carrotFound 
        ? (
          <Draggable handle=".handle">
            <div className="handle">
              <div className={style.carrotAndQuestion}>
                <img 
                  draggable="false" 
                  className={style.carrot} 
                  src={carrot} 
                  alt="carrot"
                  onClick={() => {
                  setCarrotFound(true); 
                  setMessage('!G R A C I A S!'); 
                  setBunnyPopUp(true);
                  setTimeout(() => {
                  setBunnyPopUp(false)
                }, 4000)
                }}
                  />
                <img draggable="false" className={style.questionMark} src={questionMark} alt="" />
              </div>
            </div>
          </Draggable>

        )
        : <div className={style.confetti}>
        <ConfettiExplosion force= {1} duration={5500} particleCount={80} width={2000}/></div>
      }

      {bunnyPopUp === true

      ? <div className={style.textBunny}>
          <img 
            className={style.thinkingPopUp} 
            src={thinkingPopUp}
            />
          <h4 className={style.feedMe}>{ message }</h4>
        </div>
      
      : null
      }
    </div>
  );
}

export default BunnyGame;
