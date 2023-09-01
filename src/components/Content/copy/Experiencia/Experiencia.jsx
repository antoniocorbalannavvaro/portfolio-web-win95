import style from './Experiencia.module.css';
import { CardImg } from '../Formacion/Cards/Cards';
import expressLogo from '../../../assets/content-images/formacion/expressLogo.webp';

const Experiencia = () => {
  return (
    <div className={style.pageContainer}>

    <div className={style.convolutionalSection}>
      <section className={style.section}>
          <div className={style.header}>
            <h1>CONVOLUTIONAL PORT</h1>
            <h3>Data Scientist & Fullstack</h3>
          </div>

          <div className={style.content}>
            <h2>Decripción:</h2>
            <div className={style.textContent}>
              <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto uexto</h5>
              <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto uexto</h5>
              <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto uexto</h5>
              <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto uexto</h5>
              <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto uexto</h5>
              <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto uexto</h5>
              <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto uexto</h5>
              <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto uexto</h5>
            </div>
          </div>

          <footer className={style.footer}>
            <h2>Tecnologias:</h2>
            <section className={style.stack}>
              <CardImg img={expressLogo} text={'ExpressJS'}/>
              <CardImg img={expressLogo} text={'ExpressJS'}/>
              <CardImg img={expressLogo} text={'ExpressJS'}/>
              <CardImg img={expressLogo} text={'ExpressJS'}/>
            </section>
          </footer>
        </section>
    </div>

    <div className={style.unnitationSection}>
      <section className={style.section}>
          <div className={style.header}>
            <h1>UNNITATION</h1>
            <h3>Fullstack Developer</h3>
          </div>

          <div className={style.content}>
            <h2>Decripción:</h2>
            <div className={style.textContent}>
              <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto uexto</h5>
              <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto uexto</h5>
              <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto uexto</h5>
              <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto uexto</h5>
              <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto uexto</h5>
              <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto uexto</h5>
              <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto uexto</h5>
              <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto uexto</h5>
            </div>
          </div>

          <footer className={style.footer}>
            <h2>Tecnologias:</h2>
            <section className={style.stack}>
              <CardImg img={expressLogo} text={'ExpressJS'}/>
              <CardImg img={expressLogo} text={'ExpressJS'}/>
              <CardImg img={expressLogo} text={'ExpressJS'}/>
              <CardImg img={expressLogo} text={'ExpressJS'}/>
            </section>
          </footer>
        </section>
    </div>

    <div className={style.aquaSection}>
      <section className={style.section}>
          <div className={style.header}>
            <h1>AQUACORP</h1>
            <h3>Data Scientist</h3>
          </div>

          <div className={style.content}>
            <h2>Decripción:</h2>
            <div className={style.textContent}>
              <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto uexto</h5>
              <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto uexto</h5>
              <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto uexto</h5>
              <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto uexto</h5>
              <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto uexto</h5>
              <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto uexto</h5>
              <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto uexto</h5>
              <h5>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto uexto</h5>
            </div>
          </div>

          <footer className={style.footer}>
            <h2>Tecnologias:</h2>
            <section className={style.stack}>
              <CardImg img={expressLogo} text={'ExpressJS'}/>
              <CardImg img={expressLogo} text={'ExpressJS'}/>
              <CardImg img={expressLogo} text={'ExpressJS'}/>
              <CardImg img={expressLogo} text={'ExpressJS'}/>
            </section>
          </footer>
        </section>
    </div>

    </div>
  );
}

export default Experiencia;
