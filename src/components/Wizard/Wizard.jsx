// LIBRARIES:
import { useState } from 'react';

// CONFIGURATION:
import * as TEXT from './Wizard.Config/text.module';
import * as POSITION from './Wizard.Config/position.module';
import * as IMAGE from './Wizard.Config/image.module';

// STYLES:
import styles from './Wizard.module.css';

// COMPONENTS:
import PopUpRating from '../PopUpRating/PopUpRating';

const WizardContainer = () => {

    const globalSize = [300, 300];
    const [wizardDisplay, setWizardDisplay] = useState(true);
    let [pageNum, setPageNum] = useState(0);

    const WizardPage = ({text, textPosition, wizardPosition, image, imageSize, imagePosition = {position:'absolute'} }) => {
    
        return (
            <div>
                {wizardDisplay && pageNum >= 0 ?
                <div className={styles.tourCard} style={wizardPosition}>
                    <div style={imagePosition}><img src={image} alt="" width={globalSize[0]} height={globalSize[1]}/></div>
                    <div className={styles.tourText} style={textPosition}>{text}</div>
        
                    <button onClick={() => {setWizardDisplay(!wizardDisplay)}} className={styles.closeButton}>
                        <img src={IMAGE.closeImage} alt="" width='12' height='12'/>
                    </button>
                </div>
                : null}
            </div>
        );
    }
    
    const WizardButtons = () => {
    
        const buttonAction = (action) => {
    
            if(pageNum < 0){return}
    
            switch (action) {
                case 'back': {if (pageNum === 0) {return} else {setPageNum(pageNum -= 1); return}}
                case 'next': {if (pageNum === 7) {return} else {setPageNum(pageNum += 1); return}}
                case 'close': setPageNum(pageNum = -1); return
            }        
        }
    
        return (
            <div>
                {wizardDisplay && pageNum >= 0 ?
                    <div className={styles.buttonContainer}>
                    <button onClick={() => {buttonAction('close')}} className={styles.wizzardButton}>❌ Cerrar</button>
                    <button onClick={() => {buttonAction('back')}} className={styles.wizzardButton}>⬅ Atrás</button>
                    <button onClick={() => {buttonAction('next')}} className={styles.wizzardButton}>Siguiente ➡</button>
                </div>
                : null}
            </div>
        );
    }

    return (
        <div>
            {pageNum < 0 && null}

            {pageNum === 0 ?
            <div>
                <WizardPage 
                    text={TEXT.formacionText} 
                    textPosition={POSITION.formacionTextPosition} 
                    wizardPosition={POSITION.formacionWizardPosition}
                    image={IMAGE.formacionImage}
                    imageSize={globalSize}
                    imagePosition={POSITION.formacionImagePosition}
                    >
                </WizardPage>
            </div> : null
            }
    
            {pageNum === 1 ?
                <WizardPage 
                    text={TEXT.experienceText} 
                    textPosition={POSITION.experienceTextPosition} 
                    wizardPosition={POSITION.experienceWizardPosition}
                    image={IMAGE.experienceImage}
                    imageSize={globalSize}
                    imagePosition={POSITION.experienceImagePosition}
                    >
                </WizardPage>: null
            }   
    
            {pageNum === 2 ?
                <WizardPage 
                    text={TEXT.projectsText} 
                    textPosition={POSITION.projectsTextPosition} 
                    wizardPosition={POSITION.projectsWizardPosition}
                    image={IMAGE.projectsImage}
                    imageSize={globalSize}
                    imagePosition={POSITION.projectsImagePosition}
                    >
                </WizardPage>: null
            }     
    
            {pageNum === 3 ?
                <WizardPage 
                    text={TEXT.aboutText} 
                    textPosition={POSITION.aboutTextPosition} 
                    wizardPosition={POSITION.aboutWizardPosition}
                    image={IMAGE.aboutImage}
                    imageSize={globalSize}
                    imagePosition={POSITION.aboutImagePosition}
                    >
                </WizardPage>: null
            }
    
            {pageNum === 4 ?
                <WizardPage 
                    text={TEXT.stackText} 
                    textPosition={POSITION.stackTextPosition} 
                    wizardPosition={POSITION.stackWizardPosition}
                    image={IMAGE.stackImage}
                    imageSize={globalSize}
                    imagePosition={POSITION.stackImagePosition}
                    >
                </WizardPage>: null
    
            }
            
            {pageNum === 5 ?
                <WizardPage 
                    text={TEXT.uiText} 
                    textPosition={POSITION.uiTextPosition} 
                    wizardPosition={POSITION.uiInfoWizardPosition}
                    image={IMAGE.uiImage}
                    imageSize={globalSize}
                    imagePosition={POSITION.uiImagePosition}
                    >
                </WizardPage>: null
            }
    
            {pageNum === 6 ?
                <WizardPage 
                    text={TEXT.bunnyText} 
                    textPosition={POSITION.bunnyTextPosition} 
                    wizardPosition={POSITION.bunnyWizardPosition}
                    image={IMAGE.bunnyImage}
                    imageSize={globalSize}
                    imagePosition={POSITION.bunnyImagePosition}
                    >
                </WizardPage>: null
            }

            {pageNum === 7 ?
                <WizardPage 
                    text={<PopUpRating popUpStartMessage='Puntua este Tour' popUpEndMessage='Gracias!!'/>} 
                    textPosition={POSITION.endTourTextPosition} 
                    wizardPosition={POSITION.endTourWizardPosition}
                    image={IMAGE.endTourImage}
                    imageSize={globalSize}
                    imagePosition={POSITION.endTourImagePosition}
                    >
                </WizardPage> : null
            }
            
            <WizardButtons/>
        </div>
        );
}

const WizardComponent = () => {

    const [infoState, setInfoState] = useState(false);

    const showInfo = () => {
        setInfoState(!infoState);
    }

    const ButtonInfo = () => {

        return (
            <div className={styles.tourFolder}>
                <button onClick={() => {showInfo()}} className={styles.question}>
                    <img src={IMAGE.tourImage} alt="img not found"
                    width="30" height="30"/>
                </button>
                <h2 className={styles.questionContainter}>Tour</h2>
            </div>
        );
    }

    return (
        <div>
            <ButtonInfo></ButtonInfo>
            {infoState
                ? <WizardContainer></WizardContainer>
                : null}    
        </div>
    );
}

export default WizardComponent;
