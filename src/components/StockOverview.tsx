import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonText, IonAvatar, IonThumbnail, IonButton, IonIcon, IonDatetime, IonSelect, IonSelectOption, IonToggle, IonInput, IonCheckbox, IonRange, IonNote } from '@ionic/react';
import { closeCircle, home, star, navigate, informationCircle, checkmarkCircle, shuffle } from 'ionicons/icons';



interface StockInfo {
  Symbol: string;
  Upper: Number;
  Lower: Number;
}

interface Props {
    Stock: string;
    i: number;
}

const StockOverview: React.FC<Props> = ({Stock, i}) => {

    const [ listItems, setListItems ] = useState<any>([]);



      // React.useEffect(() => {
      // sendRequest().then((data: any) => {
      //         setListItems(data)
      // });
      // }, []);

      var options = {
        method: 'GET',
        url: 'https://yh-finance.p.rapidapi.com/stock/v2/get-summary',
        params: {symbol: Stock, region: 'US'},
        headers: {
          'x-rapidapi-host': 'yh-finance.p.rapidapi.com',
          'x-rapidapi-key': '63a51f3279msh18e8edbbf2f8ab4p136b71jsnb9c98ca45e18'
        }
      };


      const sendRequest = () => {
      return axios.request(options).then((response: any) => {
      // console.log(response);
      return response.data;
      })
      };


    var axios = require("axios").default;

    console.log(listItems);

  return (
 
        
        
        <IonItem key={i}>
          <IonButton slot="start" color={listItems.color}>
          {listItems.trade}
          </IonButton>
          <IonLabel> {listItems.company} </IonLabel>
          <IonButton slot="end">
          ${listItems.price}
          </IonButton>
        </IonItem>

  );
};

export default StockOverview;

