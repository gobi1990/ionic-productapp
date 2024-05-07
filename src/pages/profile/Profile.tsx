import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Profile: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
        <IonToolbar color={'transparent'}>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Profile</IonTitle>   
        </IonToolbar>
      </IonHeader>
            <IonContent className="ion-padding">
                <h1>Profile</h1>
            </IonContent>
        </IonPage>
    );
};

export default Profile;