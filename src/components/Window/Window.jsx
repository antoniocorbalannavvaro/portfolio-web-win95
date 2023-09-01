import style from './Window.module.css'
import maxIcon from '../../assets/maximizar.webp'
import minIcon from '../../assets/minimizar.webp'
import closeIcon from '../../assets/cerrar.webp'
import Draggable from 'react-draggable'
import PropTypes from 'prop-types'

import { useState } from 'react'

const Window = ({ Component, title, logo }) => {

  const [ width, setWidth] = useState('800px');
  const [ height, setHeight] = useState('500px');
  const [ positionX, setPositionX ] = useState('20px');
  const [ positionY, setPositionY ] = useState('200px');
  const [ isResized, setIsResized ] = useState(false);
  const [ isOpen, setIsOpen ] = useState(true);

  // defaultPosition={{x: positionX, y: positionY}}
  if (isOpen) {
    return (
      <Draggable>
        <div className={style.window} style={
          {
            'width': `${width}`, 
            'height': `${height}`, 
            'position': 'absolute',
            'top': `${positionX}`,
            'left': `${positionY}`,
            }}>
            
          <nav className={style.navBar}>
            <ul className={style.list}>
              <li className={style.logoContainer}>
                <img src={logo}/>
                <h1>{title}</h1>
              </li>
              <li className={style.iconsContainer}>
                {
                  isResized 
                  ? 
                  <img 
                    onClick={() => {
                      setWidth('800px');
                      setHeight('500px');
                      setPositionX('80px');
                      setPositionY('200px');
                      setIsResized(false)
                    }}
                    src={minIcon}/>
                  : 
                  <img 
                    onClick={() => {
                      setWidth('100vw');
                      setHeight('100vh');
                      setPositionX('-10px');
                      setPositionY('0px');
                      setIsResized(true)
                    }}
                    src={maxIcon}/>
                }
                
                <img onClick={() => setIsOpen(false)} src={closeIcon}/>
              </li>
            </ul>
          </nav>
          <div className={style.box}>
            <Component/>
          </div>
        </div>
      </Draggable>
    );
  } else return null

}

Window.propTypes = {
  Component: PropTypes.func,
  title: PropTypes.string,
  logo: PropTypes.string
}

export default Window;
