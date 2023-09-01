import PropTypes from 'prop-types';
import style from './Folder.module.css'

const Folder = ({ image, text }) => {
  
  return (
    <div className={style.folder}>
      <div className={style.imgContainer}>
        <img src={image} alt='folder'></img>
      </div>
      <div className={style.textContainer}>
        <h2>{text}</h2>
      </div>
    </div>
  );
}

Folder.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string
}

export default Folder;
