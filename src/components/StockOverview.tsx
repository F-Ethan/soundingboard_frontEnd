import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonText, IonAvatar, IonThumbnail, IonButton, IonIcon, IonDatetime, IonSelect, IonSelectOption, IonToggle, IonInput, IonCheckbox, IonRange, IonNote } from '@ionic/react';
import { closeCircle, home, star, navigate, informationCircle, checkmarkCircle, shuffle } from 'ionicons/icons';



interface listItems {
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



      React.useEffect(() => {
      sendRequest().then((data: any) => {
              setListItems(data)
      });
      }, []);

      // Yahoo finace API 
      // var options = {
      //   method: 'GET',
      //   url: 'https://yh-finance.p.rapidapi.com/stock/v2/get-summary',
      //   params: {symbol: Stock, region: 'US'},
      //   headers: {
      //     'x-rapidapi-host': 'yh-finance.p.rapidapi.com',
      //     'x-rapidapi-key': '63a51f3279msh18e8edbbf2f8ab4p136b71jsnb9c98ca45e18'
      //   }
      // };

      var options = {
        method: 'GET',
        url: 'http://localhost:3000/',
        params: {symbol: Stock},
       
      };


      const sendRequest = () => {
      console.log("Sending Get request")
      return axios.request(options).then((response: any) => {
      return response.data[0];
      })
      };


    var axios = require("axios").default;

    console.log(listItems);

  return (
 
        
        
        <IonItem key={i}>
          <IonButton slot="start" color="primary">
          {listItems.lowwer}
          </IonButton>
          <IonLabel color="primary"> {listItems.Symbol} </IonLabel>
          <IonButton slot="end">
          ${listItems.Upper}
          </IonButton>
        </IonItem>

        // <IonItem color="secondary">
        // <IonLabel>
        //   Secondary Color Item
        // </IonLabel>
        // </IonItem>

  );
};

export default StockOverview;

