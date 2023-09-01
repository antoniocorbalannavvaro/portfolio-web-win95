import style from "./HomeComponent.module.css";
import { useState } from "react";
import language from "../../assets/linkedin.png";
import ddbb from "../../assets/github.png";
import frameworks from "../../assets/spotify.png";
import contact from "../../assets/gmail.png";
import Window from "../Window/Window";
import Formacion from "../Content/Formacion/Formacion";
import Experiencia from "../Content/Experiencia/Experiencia";
import Proyectos from "../Content/Proyectos/Proyectos";
import SobreMi from "../Content/SobreMi/SobreMi";
import winText from "../../assets/Windows_95_logo.webp";

const HomeComponent = () => {
  const [languageState, setLanguageState] = useState(false);
  const [BBDDState, setBBDDState] = useState(false);
  const [frameworksState, setFrameworksState] = useState(false);
  const [contactState, setContactState] = useState(false);

  return (
    <div className={style.homeContainer}>
      <div className={style.box}>
        <img src={winText} />
      </div>
      <ul className={style.unorderedList}>
        <li className={style.list}>
          <img src={language} />
          <a href="https://www.linkedin.com/in/antonio-corbalan-navarro-0ab897232/" target="_blank"><h3>LinkedIn</h3></a>
        </li>

        <li className={style.list}>
          <img src={ddbb} />
          <a href="https://github.com/antoniocorbalannavvaro" target="_blank"><h3>Github</h3></a>
        </li>

        <li className={style.list}>
          <img src={frameworks} />
          <a href="https://open.spotify.com/artist/17mQMqtiJVWFebnFbcHo8C" target="_blank"><h3>Proyecto Musical</h3></a>
          
        </li>

        <li className={style.list}>
          <img src={contact} />
          <a href = "mailto: antoniocn1996@gmail.com"><h3>Contáctame</h3></a>
        </li>
      </ul>

      {languageState ? (
        <Window Component={Formacion} logo={language} title={"Lenguajes"} />
      ) : null}

      {BBDDState ? (
        <Window Component={Experiencia} logo={ddbb} title={"BBDD"} />
      ) : null}

      {frameworksState ? (
        <Window Component={Proyectos} logo={frameworks} title={"Frameworks"} />
      ) : null}

      {contactState ? (
        <Window Component={SobreMi} logo={contact} title={"Contacto"} />
      ) : null}
    </div>
  );
};

export default HomeComponent;
