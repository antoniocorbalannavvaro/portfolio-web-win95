import loadingIcon from '../../assets/loading-circle.gif';
import style from './LoadingPage.module.css';

const LoadingPage = ( { background }) => {
  return (
    <div style={background} className={style.mainPage}>
      <img 
        style={{'position': 'absolute', 'bottom': '40px'}} 
        height={'50px'} 
        src={loadingIcon} 
        alt=""/>
    </div>
  );
}

export default LoadingPage;
