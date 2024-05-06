import React, { useState } from 'react';
import { IonContent, IonInput, IonButton, IonText, IonToast, IonCard, IonCardContent, IonCol, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { AuthController } from '../../controllers/authController';
import { logInOutline, personCircleOutline } from 'ionicons/icons';
import { UserModel } from '../../models/user';
import './Login.css';
import Logo from '../../assets/logo.png';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const login = () => {
    if (!AuthController.validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      setShowToast(true);
      return;
    }

    if (!AuthController.validatePassword(password)) {
      setErrorMessage('Please enter your password.');
      setShowToast(true);
      return;
    }
    
    const userModel = (email: string, password: string) => ({ email, password });
    const isAuthenticated = AuthController.login(userModel(email, password));

    if (isAuthenticated) {
      console.log('Login successful');
    } else {
      setErrorMessage('Invalid email or password.');
      setShowToast(true);
    }
  };

  return (
    <IonPage className="login-container">
    <IonContent scrollY={false} className="ion-paddingHorizontal">
      <IonGrid fixed>
        <IonRow class="ion-justify-content-center">
          <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4" >
            <div className="ion-text-center ion-padding ion-margin-top">
              <img src={Logo} alt="Logo" width={'50%'} />
            </div>
          </IonCol>
        </IonRow>
        <IonRow className="ion-justify-content-center">
          <IonCol>
            <IonCard>
              <IonCardContent>
                <form onSubmit={login}>
                  <IonInput mode="md" fill="outline" labelPlacement="floating" label="Email" type="email" placeholder="Enter Email"></IonInput>
                  <IonInput mode="md" className="ion-margin-top" fill="outline" labelPlacement="floating" label="Password" type="password" placeholder="Enter Password"></IonInput>
                  <IonRow className="ion-justify-content-end">
                  <IonButton size="small" fill="clear">Forgot Password</IonButton>
                  </IonRow>
                  <IonButton type="submit" expand="block" className="login-btn">
                    Login
                    <IonIcon icon={logInOutline} slot="start" />
                  </IonButton>
                  <IonButton routerLink="/register" color={'secondary'} type="button" expand="block" className="ion-margin-top">
                    Create account
                    <IonIcon icon={personCircleOutline} slot="start" />
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

export default Login;
