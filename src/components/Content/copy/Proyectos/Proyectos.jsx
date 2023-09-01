import style from './Proyectos.module.css';

const Proyectos = () => {
  return (
    <div className={style.pageContainer}>

      <section className={style.header}>
        <h1>VIAJESTION</h1>
        <img src={''} alt='no image'/>
      </section>

      <section className={style.content}>
        <div className={style.textDiv}>
          <h1>cosas con cosasasd</h1>
          <h2>asfdasfafasgasgfas agasg 
          asgasgas agsasg asgas agag</h2>
          <h3>afagasgn asfgjkiasf asfjkas asj</h3>
        </div>
        <div className={style.imgDiv}></div>
      </section>

      <section className={style.solutions}>
        <div className={style.card}>
          <h1>Gestionar Clientes</h1>
        </div>
        <div className={style.card}>
          <h1>Gestionar Clientes</h1>
        </div>
        <div className={style.card}>
          <h1>Gestionar Clientes</h1>
        </div>
        <div className={style.card}>
          <h1>Gestionar Clientes</h1>
        </div>
      </section>

      <section className={style.screens}>

      </section>

    </div>
  );
}

export default Proyectos;
