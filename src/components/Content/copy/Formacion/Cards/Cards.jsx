import style from './Cards.module.css';

export const Card = ({ img }) => {

  const background = ( img ) => {
    return {  
    'backgroundImage': `url(${img})`,
    'backgroundPosition': 'center',
    'backgroundSize': 'cover',
    'backgroundRepeat': 'no-repeat'
    }
  }

  return (
    <div style={background(img)} className={style.card}></div>
  );
}

export const CardImg = ({ img, text }) => {
  return (
    <div className={style.cardImg}>
      <img src={img}></img>
      <h3>{text}</h3>
    </div>
  )
}

export const CardContent = ({ children }) => {
  return (
    <div className={style.cardContent}>
      { children }
    </div>
  )
}

export const CardTitle = ({ text }) => {
  return (
    <div className={style.cardTitle}>
      <h3>{ text }</h3>
    </div>
  )
}

export const CardCertificates = ({ img }) => {
  return (
    <div className={style.cardCertificates}>
      <img src={img}/>
    </div>
  )
}