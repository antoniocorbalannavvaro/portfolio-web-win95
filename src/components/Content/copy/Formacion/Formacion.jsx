import style from './Formacion.module.css';
import umuImage from '../../../assets/content-images/formacion/umu.jpg';
import theBridgeImage from '../../../assets/content-images/formacion/the-bridge.png';
import obImage from '../../../assets/content-images/formacion/open-bootcamp.jpg';
import expressLogo from '../../../assets/content-images/formacion/expressLogo.webp';
import title from '../../../assets/content-images/formacion/titulo.webp';
import certificate from '../../../assets/content-images/formacion/certificado.webp';

import { Card, CardImg, CardContent, CardTitle, CardCertificates } from './Cards/Cards'

const Formacion = () => {

  return (
    <div className={style.container}>
      <section className={style.header}>
        <Card img={theBridgeImage}/>
      </section>

      <section className={style.content}>
        <CardTitle text='DATA SCIENCE: (BOOTCAMP)'/>
        <CardContent>
          <p>The Bridge es una escuela de formación tecnológica con sede en Madrid.</p>
          <p>Durante los 4 meses que dura el curso intesivo consolidé mis </p>
          <p>conocimientos sobre la ciencia de datos.</p>
          <p>Aprendí extracción, transformación y análisis de datos complejos.</p>
          <p>Trabajé con modelos de machine learning para realizar predicciones.</p>
          <p>Desarrollé y entrené modelos de deep learning para la detección</p>
          <p>de objectos en imágenes y clasificación de las mismas.</p>
          <p>También estudié preprocesamiento y tratamiento de imágenes</p>
          <p>para entrenamiento de redes neuronales convolucionales.</p>
          <p>Por último, entrené con algoritmos sencillos redes neuronales</p>
          <p>capaces de aprender, generación tras generación, a llegar a</p>
          <p>la pantalla de créditos de videojuegos de los 90s.</p>
        </CardContent>
      </section>

      <section className={style.content}>
        <CardTitle text='Certificados:'/>
        <CardCertificates img={title}/>
        <CardCertificates img={certificate}/>
      </section>

      <section className={style.content}>
      <CardTitle text='Tecnologías:'/>
        <section className={style.footer}>
          <CardImg img={expressLogo} text={'ExpressJS'}/>
          <CardImg img={expressLogo} text={'ExpressJS'}/>
          <CardImg img={expressLogo} text={'ExpressJS'}/>
          <CardImg img={expressLogo} text={'ExpressJS'}/>
        </section>
        <section className={style.footer}>
          <CardImg img={expressLogo} text={'ExpressJS'}/>
          <CardImg img={expressLogo} text={'ExpressJS'}/>
          <CardImg img={expressLogo} text={'ExpressJS'}/>
          <CardImg img={expressLogo} text={'ExpressJS'}/>
        </section>
      </section>

      <section className={style.header}>
        <Card img={umuImage}/>
      </section>

      <section className={style.content}>
        <CardTitle text='DESARROLLO DE SOFTWARE: (PROFESOR PARTICULAR)'/>
        <CardContent>
          <p>Durante unos años estuve dando clases particulares</p>
          <p>con un profesor de la Universidad de Murcia quien me enseñó</p>
          <p>los fundamentos del desarrollo de software.</p>
          <p>Estudié buenas prácticas para construir código escalable</p>
          <p>y legible, así como algoritmos de backtracking y patrones 
          de diseño para solucionar</p>
          <p>los problemas más comunes a la hora de desarrollar una APP.</p>
          <p>También desarrollé</p>
        </CardContent>
      </section>

      <section className={style.content}>
        <CardTitle text='Tecnologías:'/>
        <section className={style.footer}>
          <CardImg img={expressLogo} text={'ExpressJS'}/>
          <CardImg img={expressLogo} text={'ExpressJS'}/>
          <CardImg img={expressLogo} text={'ExpressJS'}/>
          <CardImg img={expressLogo} text={'ExpressJS'}/>
        </section>
      </section>


      <section className={style.header}>
        <Card img={obImage}/>
      </section>

      <section className={style.content}>
        <CardTitle text='FULLSTACK: (BOOTCAMP ONLINE)'/>
        <CardContent>
          <p>En el 2018, después de abandonar mis estudios en filología
          hispánica, empecé a estudiar desarrollo web.</p>
          <p>Cursé diferentes bootcamps online de fullstack, entre ellos,
          el que más destaco es OpenBootcamp.</p>
          <p>Con estos bootcamps aprendí a desarrollar aplicaciones
          de principio a fin utilizando Javascript, HTML, CSS, React,
          ExpressJS, mongoDB y PostgreSQL</p>
        </CardContent>
      </section>

      <section className={style.content}>
        <CardTitle text='Tecnologías:'/>
        <section className={style.footer}>
          <CardImg img={expressLogo} text={'ExpressJS'}/>
          <CardImg img={expressLogo} text={'ExpressJS'}/>
          <CardImg img={expressLogo} text={'ExpressJS'}/>
          <CardImg img={expressLogo} text={'ExpressJS'}/>
        </section>
      </section>
    </div>

  );
}

export default Formacion;
