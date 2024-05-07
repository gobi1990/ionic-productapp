import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const ShoppingCart: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
        <IonToolbar color={'transparent'}>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Shopping Cart</IonTitle>   
        </IonToolbar>
      </IonHeader>
            <IonContent className="ion-padding">
                Shopping Cart
            </IonContent>
        </IonPage>
    );
};

export default ShoppingCart;