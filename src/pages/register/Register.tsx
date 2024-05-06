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
  import './Register.css';
  import Avatar from '../../assets/avatar.png';
  
  const Register: React.FC = () => {
    const router = useIonRouter();
  
    const doRegister = (event: any) => {
      event.preventDefault();
      console.log('doRegister');
      router.goBack();
    };
  
    return (
      <IonPage>
        <IonHeader>
        <IonToolbar color={'transparent'}>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Create Account</IonTitle>
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
                    <form onSubmit={doRegister}>
                    <IonInput mode="md" fill="outline" labelPlacement="floating" label="Full Name" type="text" placeholder="Enter FullName"></IonInput>
                    <IonInput mode="md" className="ion-margin-top" fill="outline" labelPlacement="floating" label="Email" type="email" placeholder="Enter Email"></IonInput>
                    <IonInput mode="md" className="ion-margin-top" fill="outline" labelPlacement="floating" label="Password" type="password" placeholder="Enter Password"></IonInput>
                      <IonButton type="submit" expand="block" className="create-acc-btn">
                        Create my account
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
  
  export default Register;