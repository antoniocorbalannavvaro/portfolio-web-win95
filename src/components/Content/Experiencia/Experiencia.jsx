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
            <h2 className={style.descriptionTitle}>Decripción:</h2>
            <div className={style.textContent}>
              <h5>Convolutional Port es una start-up con sede en Murcia.</h5>
              <h5>El proyecto que desarrollamos soluciona uno de los problemas más recurrentes</h5>
              <h5>en los puertos de recreo españoles; registrar las entradas y salidas</h5>
              <h5>de los barcos en los puertos y la monitorización en tiempo real de</h5>
              <h5>la ocupación de los puntos de amarre de los mismos.</h5>
              <br></br>
              <h5>El sistema funciona mediante la colocación de una cámara con un sensor PIR</h5>
              <h5>en la entrada del puerto. Estas fotos se envían a un servidor donde se aplica</h5>
              <h5>un modelo de OCR para extraer la matrícula de la embarcación y otro modelo</h5>
              <h5>de detección de objeto para determinar si el barco entra o sale.</h5>
              <h5>Todos estos datos se envían a una aplicación frontend donde puedes ver</h5>
              <h5>el estado de puerto, así como el histórico de entradas y salidas por fecha.</h5>
              <br></br>
              <h5>Este software dispone también de un aviso temprano a marineria para asistir</h5>
              <h5>al amarre de las embarcaciones. De esta forma, cuando una embarcación entra</h5>
              <h5>en el puerto, salta una alarma con la matrícula y punto de amarre correspondiente</h5>
              <h5>para poder asistir correctamente al amarre y evitar posibles accidentes.</h5>
              <br></br>
              <h5>Este proyecto se realizó a petición de PANDORA GLOBAL SL, principal proveedora</h5>
              <h5>de software de gestión portuaria en España.</h5>
            </div>
          </div>
        </section>
    </div>

    <div className={style.unnitationSection}>
      <section className={style.section}>
          <div className={style.header}>
            <h1>UNNITATION</h1>
            <h3>Fullstack Developer</h3>
          </div>

          <div className={style.content}>
            <h2 className={style.descriptionTitle}>Decripción:</h2>
            <div className={style.textContent}>
              <h5>UNNITATION es una Annotation Tool orientada al etiquetado de emociones humanas</h5>
              <h5>en videos de reuniones online de negocios en las principales plataformas de meeting:</h5>
              <h5>Google Meet, Microsoft Team, Skype...</h5>
              <h5>Este proyecto se realizó para UNIPHORE, empresa de Silicon Valley con sede en</h5>
              <h5>Valencia.</h5>
              <br/>
              <h5>UNIPHORE comercializa un software capaz de valorar, mediante un modelo de</h5>
              <h5>inteligencia artificial, si una reunión de negocios ha sido satisfactoria o</h5>
              <h5>si por lo contrario, se ha producido un desacuerdo. Para ello su modelo detecta</h5>
              <h5>las emociones de los participantes de la reunión.</h5>
              <br/>
              <h5>Ante la falta de datos de entrenamiento y los elevados costes que conlleva</h5>
              <h5>la contratación de una empresa externa para etiquetar los videos de las reuniones</h5>
              <h5>nace UNNITATION.</h5>
              <br/>
              <h5>Esta Annotation Tool, de uso interno, hace que sean los propios empleados los</h5>
              <h5>que dediquen de 10 a 15 minutos al día al etiquetado de videos.</h5>
              <h5>Esta plataforma convierte los eventos de etiquetado en Datasets (CSVs) tratados</h5>
              <h5>de manera específica para el entrenamiento de sus modelos.</h5>
            </div>
          </div>
        </section>
    </div>
    </div>
  );
}

export default Experiencia;
