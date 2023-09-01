import style from './SobreMi.module.css'
import bananaGif from '../Proyectos/images/banana-dance.gif'

const SobreMi = () => {
  return (
    <div className={style.aboutMe}>
      <div className={style.content}>
        <h1>Esto mejor te lo cuento otro día echando un café. 😁</h1>
        <h1>Poco a poco...</h1>
      </div>
      <img src={bananaGif} width={'100px'} alt='banana-gif'/>
    </div>
  );
}

export default SobreMi;
