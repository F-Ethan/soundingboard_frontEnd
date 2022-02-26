import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel} from '@ionic/react';
import StockOverview from './StockOverview';

interface ContainerProps {
  name: string;
}

let StockInfo: Array<string> = ['TSLA', 'ARKK', 'LMND', 'FUV'];

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
    {if (name === "Overview"){
      return(
      <div className="container">
      <IonPage>
        <IonContent>
          {/*-- Default Item --*/}
          
          {StockInfo.map((stock, i) => {
            return(
              <StockOverview Stock={stock} i={i} /> 
            )
            })}
        </IonContent>
      </IonPage>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
      )} else {
        return(
      <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
        )}
  }
    
};

export default ExploreContainer;

