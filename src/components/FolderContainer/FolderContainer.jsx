import style from './FolderContainer.module.css'
import Folder from "../Folder/Folder";
import pcLogo from '../../assets/pc-logo.webp'
import networkLogo from '../../assets/network-logo.webp'
import explorerLogo from '../../assets/explorer-logo.webp'
import folderLogo from '../../assets/folder-logo.webp'
import fingerArrow from '../../assets/fingerArrow.webp';
import { useState } from 'react';
import Window from '../Window/Window';
import Formacion from '../Content/Formacion/Formacion'
import Experiencia from '../Content/Experiencia/Experiencia'
import Proyectos from '../Content/Proyectos/Proyectos'
import SobreMi from '../Content/SobreMi/SobreMi'
import WizardComponent from '../../components/Wizard/Wizard';

const FolderContainer = () => {

  const [ formacionState, setFormacionState ] = useState(false);
  const [ experienciaState, setExperienciaState ] = useState(false);
  const [ proyectosState, setProyectosState ] = useState(false);
  const [ sobreMiState, setSobreMiState ] = useState(false);
  const [ arrow, setArrow ] = useState(true);

  return (
    <div className={style.container}>

      <div onClick={() => {
        setFormacionState(true);
        setExperienciaState(false);
        setProyectosState(false);
        setSobreMiState(false);
      }}>
        <Folder image={pcLogo} text={'Formación'}/>
      </div>
      
      <div onClick={() => {
        setFormacionState(false);
        setExperienciaState(true);
        setProyectosState(false);
        setSobreMiState(false);
      }}>
        <Folder image={folderLogo} text={'Experiencia'}/>
      </div>

      {/* <Draggable></Draggable> */}

      <div onClick={() => {
        setFormacionState(false);
        setExperienciaState(false);
        setProyectosState(true);
        setSobreMiState(false);
      }}>
        <Folder image={networkLogo} text={'Proyectos'}/>
      </div>

      <div onClick={() => {
        setFormacionState(false);
        setExperienciaState(false);
        setProyectosState(false);
        setSobreMiState(true);
      }}>
        <Folder image={explorerLogo} text={'Sobre mi'}/>
      </div>

      <div onClick={() => setArrow(false)} className={style.wizardFolder}>
        <WizardComponent/>
      </div>
          
      { 
        arrow 
        ? <img className={style.fingerArrow} src={fingerArrow} alt="" /> 
        : null
      }

      {formacionState 
        ? <Window Component={Formacion} logo={pcLogo} title={'Formacion'}/>
        : null
      }

      {experienciaState 
        ? <Window Component={Experiencia} logo={folderLogo} title={'Experiencia'}/>
        : null
      }

      {proyectosState 
        ? <Window Component={Proyectos} logo={networkLogo} title={'Proyectos'}/>
        : null
      }

      {sobreMiState 
        ? <Window Component={SobreMi} logo={explorerLogo} title={'Sobre Mi'}/>
        : null
      }
    </div>
  );
}

export default FolderContainer;
