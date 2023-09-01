import style from './Proyectos.module.css';
import bannerImg from './images/pricing-illustration.svg'
import descriptionImage1 from './images/feature-icon-01.svg'
import descriptionImage2 from './images/feature-icon-02.svg'
import descriptionImage3 from './images/feature-icon-03.svg'
import descriptionImage4 from './images/feature-icon-04.svg'
import descriptionImage5 from './images/feature-icon-05.svg'
import descriptionImage6 from './images/feature-icon-06.svg'
import ux from './images/ux.jpg'
import functions from './images/functions.jpeg'
import marketing from './images/marketing.jpg'
import topo from './images/topo.png'
import ignacio from './images/ignacio.png'

import { useState } from 'react';

const Proyectos = () => {

  const [solutionState, setSolutionState] = useState(false);
  const [aboutState, setAboutState] = useState(false);
  const [financeState, setFinanceState] = useState(false)

  return (
    <div className={style.pageContainer}>
      <section className={style.banner}>
        <div className={style.bannerText}>
          <h1>TRIP MANAGER</h1>
          <h3 className={style.software}>SOFTWARE DE GESTIÓN:</h3>
          <h2>Solución integral para la gestión de clientes en agencias de viajes.</h2>
          <h2>Elimina el uso de papel y automatiza de procesos.</h2>
        </div>
        <div className={style.bannerImg}>
          <img className={style.bannerImg1} src={bannerImg} alt='no found'/>
        </div>
      </section>
      <section onClick={() => setSolutionState(!solutionState)} className={style.sectionTitle}>
        <h2>{''}</h2>
        <h1>SOLUCIONES</h1>
        {solutionState
        ? <h2>{'⌄'}</h2>
        : <h2>{'>'}</h2>} 
      </section>

      {
        solutionState
        ?       
        <div>
          <section className={style.content}>
            <div className={style.card}>
              <img src={descriptionImage1} alt='nt found'/>
              <h1>Eliminación del uso de papel</h1>
              <h2>Elimina por completo el excesivo uso de papel
               que se hace en este sector.</h2>
            </div>
            <div className={style.card}>
              <img src={descriptionImage2} alt='nt found'/>
              <h1>Automatización</h1>
              <h2>Muchos de los procesos que se realizan en este sector 
              , como el aviso de check-in, se pueden automatizar.</h2>
            </div>
          </section>

          <section className={style.content}>
            <div className={style.card}>
              <img src={descriptionImage3} alt='nt found'/>
              <h1>Contabilidad</h1>
              <h2>Prescinde del uso de un software externo 
              para gestionar la contabilidad y evita duplicidad de tareas.</h2>
            </div>
            <div className={style.card}>
              <img src={descriptionImage4} alt='nt found'/>
              <h1>Facturas</h1>
              <h2>Genera facturas de forma automática y personalizadas para 
              cada cliente.</h2>
            </div>
          </section>

          <section className={style.content}>
            <div className={style.card}>
              <img src={descriptionImage5} alt='nt found'/>
              <h1>Productividad</h1>
              <h2>Aumenta el volumen de ventas agilizando la organización
               y planificación de viajes para tus clientes.</h2>
            </div>
            <div className={style.card}>
              <img src={descriptionImage6} alt='nt found'/>
              <h1>Centralización</h1>
              <h2>Ten el control absoluto de todos tus clientes, viajes
               y facturas en una sola plataforma.</h2>
            </div>
          </section>
        </div> 
      : null
      }


    <section onClick={() => setAboutState(!aboutState)} className={style.sectionTitle}>
      <h2>{''}</h2>
      <h1>ACERCA DEL PROYECTO</h1>
      {aboutState
      ? <h2>{'⌄'}</h2>
      : <h2>{'>'}</h2>} 
    </section>

    {aboutState
      ? 
    <div>
      <section className={style.cardProject}>
        <div className={style.textProject}>
          <h1>Diseño UX/UI</h1>
          <h2>El <span style={{'color':'#ff6'}}>diseño</span> y experiencia de usuario de la plataforma corre a cuenta de
           Ignacio Nieto, UX/UI Designer. El diseño pretende ser <span style={{'color':'#ff6'}}>accesible e intuitivo </span>
            para usuarios de cualquier tipo, esten o no familiarizados con entornos online.</h2>
        </div>
        <img src={ux} alt='not found'/>
      </section>

      <section className={style.cardProject}>
      <img src={functions} alt='not found'/>

        <div className={style.textProject}>
          <h1>Desarrollo</h1>
          <h2>El desarrollo de la interfaz y el backend de la aplicación los estoy
           desarrollando yo. La parte del cliente está construida con <span style={{'color':'#ff6'}}>React</span> y la parte
            backend esta desarrollada con <span style={{'color':'#ff6'}}>ExpressJS</span> y <span style={{'color':'#ff6'}}>PostgreSQL</span></h2>
        </div>
      </section>

      <section className={style.cardProject}>
        <div className={style.textProject}>
          <h1>Inversores</h1>
          <h2>Actualmente disponemos de un <span style={{'color':'#ff6'}}>inversor privado</span> quien está <span style={{'color':'#ff6'}}>financiando </span>
           el desarrollo de la plataforma. Esperamos en un futuro poder acceder a más fuentes
            de ingresos para poder llevar a cabo el proyecto.</h2>
        </div>
        <img src={marketing} alt='not found'/>
      </section>
    </div> 
    : null
    }

    <section onClick={() => setFinanceState(!financeState)} className={style.sectionTitle}>
      <h2>{''}</h2>
      <h1>CONTACTO</h1>
      {financeState
      ? <h2>{'⌄'}</h2>
      : <h2>{'>'}</h2>} 
    </section>

    {financeState
    ?
      <div className={style.contactContainer}>
        <section className={style.contact}>
          <img src={topo} alt='profile-img'/>
          <div className={style.contactText}>
            <h1>Antonio Corbalán Navarro</h1>
            <h4 style={{'color':'#7c7c7c'}}>Software Developer</h4>
            <h3>antoniocn1996@gmail.com</h3>
            <h3>+34 603 014 586</h3>
          </div>

        </section>
        <section className={style.contact}>
          <img src={ignacio} alt='profile-img'/>
          <h1>Ignacio Nieto Iniesta</h1>
          <h4 style={{'color':'#7c7c7c'}}>UX/UI Designer</h4>
          <h3>nacholofsiu@gmail.com</h3>
          <h3>+34 647 36 48 85</h3>
        </section>
      </div>
    : null}

    </div>
  );
}

export default Proyectos;
