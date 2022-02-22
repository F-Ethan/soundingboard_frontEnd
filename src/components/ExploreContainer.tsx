// import './ExploreContainer.css';

// interface ContainerProps {
//   name: string;
// }

// const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
//   return (
//     <div className="container">
//       <strong>{name}</strong>
//       <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
//     </div>
//   );
// };

// export default ExploreContainer;




import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonText, IonAvatar, IonThumbnail, IonButton, IonIcon, IonDatetime, IonSelect, IonSelectOption, IonToggle, IonInput, IonCheckbox, IonRange, IonNote } from '@ionic/react';
import { closeCircle, home, star, navigate, informationCircle, checkmarkCircle, shuffle } from 'ionicons/icons';
import StockOverview from './StockOverview';


let StockInfo: Array<string> = ['TSLA', 'ARKK', 'LMND', 'FUV'];

const ExploreContainer: React.FC = () => {
  return (
    







    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>right here</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/*-- Default Item --*/}
        
        {StockInfo.map((stock, i) => {
          return(
            <StockOverview Stock={stock} i={i} /> 
          )
        })}

        
       
        {/* <IonItem>
          <IonLabel>
            Icon End
          </IonLabel>
          <IonIcon icon={informationCircle} slot="end" />
        </IonItem> */}
        
      </IonContent>
    </IonPage>
  );
};

export default ExploreContainer;

