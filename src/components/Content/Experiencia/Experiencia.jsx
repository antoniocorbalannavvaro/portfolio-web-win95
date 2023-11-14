import style from './Experiencia.module.css';
import { CardImg } from '../Formacion/Cards/Cards';
import expressLogo from '../../../assets/content-images/formacion/expressLogo.webp';

const Experiencia = () => {
  return (
    <div className={style.pageContainer}>

    <div className={style.convolutionalSection}>
      <section className={style.section}>
          <div className={style.header}>
            <h1>UXING</h1>
            <h3>Full-Stack Developer</h3>
          </div>

          <div className={style.content}>
            <h2 className={style.descriptionTitle}>Decripción:</h2>
            <div className={style.textContent}>
              <h5>Uxing es una empresa con sede en Murcia que se dedica principalmente al</h5>
              <h5>desarrollo de plataformas y páginas web para otras empresas.</h5>
              <br></br>
              <h5>Durante mi paso como freelance por la empresa, estuve desarrollando</h5>
              <h5>conjuntamente con el CEO de la empresa, Pablo García, una aplicación para</h5>
              <h5>smart phones.</h5>
              <br></br>
              <h5>La aplicación, llamada "QuedApp", te permite agendar, planificar y realizar planes</h5>
              <h5>con tus amigos. Dispone de diferentes opciones muy intuitivas y personalizables</h5>
              <h5>para crear planes, así como templates de los planes más comunes para que sólo tengas</h5>
              <h5>que añadir a tus amigos al plan y dar un click para que este se cree.</h5>
              <br></br>
              <h5>Mi principal función en el desarrollo de la APP fue crear el backend de la aplicación.</h5>
              <h5>Para la parte del servidor utilicé Javascript con el framework de Express.</h5>
              <h5>En cuanto a la base de datos, decidí usar Postgres dada su robustez y versatilidad.</h5>
              <h5>Para poder conectarte a la APP, el modo de registro utilizado funciona por SMS con tu</h5>
              <h5>número de teléfono. Para ello tuve que integrar en la APP el servicio de SMS de la</h5>
              <h5>plataforma "Twilio", para poder contrastar el código de verificación enviado para registrarte</h5>
              <h5>en la aplicación</h5>
              <br></br>
              <h5>Los principales retos a los que me enfrente fueron: La integración de "Push Notifications"</h5>
              <h5>en la App para avisar de la creación o cambios en los planes en los que estás invitado y </h5>
              <h5>la creación de un Socket para el chat de cada plan.</h5>
              <br></br>
              <h5>A parte del desarrollo del backend, también revisé y corregí la versión de Android, ya que .</h5>
              <h5>la App se estaba desarrollando en IOs y al pasarla a Android algunas funcionalidades y.</h5>
              <h5>componentes presentaban incompatibilidades.</h5>
            </div>
          </div>
        </section>
    </div>

    <div className={style.unnitationSection}>
      <section className={style.section}>
          <div className={style.header}>
            <h1>VIAJES COMBOS</h1>
            <h3>Full-Stack Developer</h3>
          </div>

          <div className={style.content}>
            <h2 className={style.descriptionTitle}>Decripción:</h2>
            <div className={style.textContent}>
              <h5>Viajes Combos es una agencia de viajes Murciana.</h5>
              <h5>Actualmente me encuentro desarrollando una plataforma web centralizada que permita</h5>
              <h5>a los agentes de viajes gestionar sus cuentas y clientes sin tener que utilizar</h5>
              <h5>varios softwares de gestión para cada una de las tareas, llevandoles a duplicar</h5>
              <h5>en muchas ocasiones datos y tareas debido a la cantidad de programas que utilizan.</h5>
              <br/>
              <h5>Esta plataforma también pretende reducir el excesivo uso de papel que se hace en </h5>
              <h5>este sector, ya que en un estudio que realicé con diferentes agencias de viajes,</h5>
              <h5>pude ver que todas tienen un problema con el almacenamiento de documentos, impresos</h5>
              <h5>facturas... que periódicamente tienen que introducir, una a una, en un sistema infórmatico</h5>
              <h5>para su posterior destrucción.</h5>
              <br/>
              <h5>Para el desarrollo de esta plataforma estoy utilizando: React, para la parte del cliente,</h5>
              <h5>y ExpressJS, para la parte del servidor.</h5>
            </div>
          </div>
        </section>
    </div>
    </div>
  );
}

export default Experiencia;
