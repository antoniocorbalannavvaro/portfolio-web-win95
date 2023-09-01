import style from './Formacion.module.css';
import umuImage from '../../../assets/content-images/formacion/umu.jpg';
import theBridgeImage from '../../../assets/content-images/formacion/the-bridge.png';
import obImage from '../../../assets/content-images/formacion/open-bootcamp.jpg';
import pandas from '../../../assets/tecnologias/pandas.png'
import numpy from '../../../assets/tecnologias/numpy.png'
import matplotlib from '../../../assets/tecnologias/matplotlib.png'
import seaborn from '../../../assets/tecnologias/seaborn.png'
import scikitLearn from '../../../assets/tecnologias/scikit-learn.png'
import tensorflow from '../../../assets/tecnologias/tensorflow.png'
import keras from '../../../assets/tecnologias/keras.png'
import openCV from '../../../assets/tecnologias/OpenCV.png'
import flask from '../../../assets/tecnologias/Flask.png'
import aws from '../../../assets/tecnologias/aws.webp'
import sqlite from '../../../assets/tecnologias/sqlite.png'
import fastAPI from '../../../assets/tecnologias/fastAPI.png'

import node from '../../../assets/tecnologias/node.png'
import expressLogo from '../../../assets/content-images/formacion/expressLogo.webp';
import postgres from '../../../assets/tecnologias/postgres.png'
import mongo from '../../../assets/tecnologias/mongo.png'
import git from '../../../assets/tecnologias/git.png'
import bash from '../../../assets/tecnologias/bash.jpg'
import linux from '../../../assets/tecnologias/linux.png'

import javascript from '../../../assets/tecnologias/javascript.png'
import typescript from '../../../assets/tecnologias/typescript.png'
import html from '../../../assets/tecnologias/html.png'
import css from '../../../assets/tecnologias/css.png'
import react from '../../../assets/tecnologias/react.png'
import next from '../../../assets/tecnologias/nextjs.png'
import tailwind from '../../../assets/tecnologias/tailwind.png'
import bootstrap from '../../../assets/tecnologias/Bootstrap.png'

// import title from '../../../assets/content-images/formacion/titulo.webp';
// import certificate from '../../../assets/content-images/formacion/certificado.webp';

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
          <h4>The Bridge es una escuela de formación tecnológica con sede en Madrid.</h4>
          <h4>Durante los 4 meses que dura el curso intesivo consolidé mis conocimientos sobre la ciencia de datos. </h4>
          <h4/>
          <h4>Aprendí visualización, extracción, transformación y análisis de datos complejos.</h4>
          <h4>Trabajé con modelos de machine learning para realizar predicciones.</h4>
          <h4>Desarrollé y entrené modelos de deep learning para la detección de objectos en imágenes y clasificación de las mismas.</h4>
          <h4/>
          <h4>También estudié preprocesamiento y tratamiento de imágenes para entrenamiento de redes neuronales convolucionales.</h4>
          <h4>Por último, entrené con algoritmos sencillos redes neuronales capaces de aprender,</h4>
          <h4>generación tras generación, a llegar a la pantalla de créditos de videojuegos de los 90s.</h4>
          <h4></h4>
        </CardContent>
      </section>

      {/* <section className={style.content}>
        <CardTitle text='Certificados:'/>
        <CardCertificates img={title}/>
        <CardCertificates img={certificate}/>
      </section> */}

      <section className={style.content}>
      <CardTitle text='Tecnologías:'/>
        <section className={style.footer}>
          <CardImg img={numpy} text={'Numpy'}/>
          <CardImg img={pandas} text={'Pandas'}/>
          <CardImg img={matplotlib} text={'Matplotlib'}/>
          <CardImg img={seaborn} text={'Seaborn'}/>
        </section>
        <section className={style.footer}>
          <CardImg img={scikitLearn} text={'Scikit-Learn'}/>
          <CardImg img={tensorflow} text={'Tensor-Flow'}/>
          <CardImg img={keras} text={'Keras'}/>
          <CardImg img={openCV} text={'OpenCV'}/>
        </section>
        <section className={style.footer}>
          <CardImg img={flask} text={'Flask'}/>
          <CardImg img={fastAPI} text={'FastAPI'}/>
          <CardImg img={aws} text={'AWS EC2'}/>
          <CardImg img={sqlite} text={'SQLite 3'}/>
        </section>
      </section>

      <section className={style.header}>
        <Card img={umuImage}/>
      </section>

      <section className={style.content}>
        <CardTitle text='DESARROLLO DE SOFTWARE: (PROFESOR PARTICULAR)'/>
        <CardContent>
          <h4>Durante unos años estuve dando clases particulares con un profesor de la Universidad de Murcia quien me enseñó</h4>
          <h4>los fundamentos del desarrollo de software.</h4>
          <h4>Estudié buenas prácticas para construir código escalable y legible, </h4>
          <h4>así como algoritmos de backtracking y patrones de diseño para solucionar los problemas más comunes</h4>
          <h4>a la hora de desarrollar una APP.</h4>
        </CardContent>
      </section>

      <section className={style.content}>
        <CardTitle text='Tecnologías:'/>
        <section className={style.footer}>
          <CardImg img={node} text={'NodeJS'}/>
          <CardImg img={expressLogo} text={'ExpressJS'}/>
          <CardImg img={postgres} text={'PostgreSQL'}/>
          <CardImg img={mongo} text={'MongoDB'}/>
        </section>
        <section className={style.footer}>
          <CardImg img={linux} text={'Linux OS'}/>
          <CardImg img={bash} text={'Bash'}/>
          <CardImg img={git} text={'Git'}/>
        </section>
      </section>


      <section className={style.header}>
        <Card img={obImage}/>
      </section>

      <section className={style.content}>
        <CardTitle text='FULLSTACK: (BOOTCAMP ONLINE)'/>
        <CardContent>
          <h4>En el 2018, después de abandonar mis estudios en filología
          hispánica, empecé a estudiar desarrollo web.</h4>
          <h4>Cursé diferentes bootcamps online de fullstack, entre ellos,
          el que más destaco es OpenBootcamp.</h4>
          <h4>Con estos bootcamps aprendí a desarrollar aplicaciones
          de principio a fin utilizando Javascript, HTML, CSS,</h4>
          <h4> React, ExpressJS, MongoDB y PostgreSQL</h4>
        </CardContent>
      </section>

      <section className={style.content}>
        <CardTitle text='Tecnologías:'/>
        <section className={style.footer}>
          <CardImg img={javascript} text={'Javascript'}/>
          <CardImg img={typescript} text={'Typescript'}/>
          <CardImg img={html} text={'HTML'}/>
          <CardImg img={css} text={'CSS'}/>
        </section>
        <section className={style.footer}>
          <CardImg img={react} text={'React'}/>
          <CardImg img={next} text={'NextJS'}/>
          <CardImg img={tailwind} text={'Tailwind CSS'}/>
          <CardImg img={bootstrap} text={'Bootstrap 5'}/>
        </section>
      </section>
    </div>

  );
}

export default Formacion;
