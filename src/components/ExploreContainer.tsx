import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonText, IonAvatar, IonThumbnail, IonButton, IonIcon, IonDatetime, IonSelect, IonSelectOption, IonToggle, IonInput, IonCheckbox, IonRange, IonNote } from '@ionic/react';
import { closeCircle, home, star, navigate, informationCircle, checkmarkCircle, shuffle } from 'ionicons/icons';
import StockOverview from './StockOverview';


interface StockInfo {
  Symbol: string;
  Upper: Number;
  Lower: Number;
}

const stockInfo: StockInfo[] = [
  {
    Symbol: 'TSLA',
    Upper: 1500,
    Lower: 1000,
  },
  {
    Symbol: 'ARKK',
    Upper: 900,
    Lower: 700,
  },
  {
    Symbol: 'LMND',
    Upper: 90,
    Lower: 50,
  },
  {
    Symbol: 'FUV',
    Upper: 10,
    Lower: 5,
  },

];


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
        
        {stockInfo.map((stock, i) => {
          return(
            <StockOverview Stock={stock.Symbol} i={i} /> 
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

