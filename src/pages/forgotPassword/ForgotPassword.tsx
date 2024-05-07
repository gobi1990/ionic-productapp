import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonInput,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
    useIonRouter,
  } from '@ionic/react';
  import { checkmarkDoneOutline, logInOutline, personCircleOutline } from 'ionicons/icons';
  import React from 'react';
  import './ForgotPassword.css';
  import Avatar from '../../assets/avatar.png';
  
  const ForgotPassword: React.FC = () => {
    const router = useIonRouter();
  
    const forgotPassword = (event: any) => {
      event.preventDefault();
      console.log('ForgotPassword');
      router.goBack();
    };
  
    return (
      <IonPage>
        <IonHeader>
        <IonToolbar color={'transparent'}>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Forgot Password</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent scrollY={false}>
          <IonGrid fixed>
          <IonRow class="ion-justify-content-center">
          <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4" >
            <div className="ion-text-center ">
              <img src={Avatar} alt="Avatar" width={'50%'} />
            </div>
          </IonCol>
        </IonRow>
            <IonRow class="ion-justify-content-center">
              <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                <IonCard>
                  <IonCardContent>
                    <form onSubmit={forgotPassword
                    }>
                    <IonInput mode="md" className="ion-margin-top" fill="outline" labelPlacement="floating" label="Email" type="email" placeholder="Enter Email"></IonInput>
                      <IonButton type="submit" expand="block" className="create-acc-btn">
                        Forgot Password
                        <IonIcon icon={checkmarkDoneOutline} slot="end" />
                      </IonButton>
                    </form>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  };
  
  export default ForgotPassword;