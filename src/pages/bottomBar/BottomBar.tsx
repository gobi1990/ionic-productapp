import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';

import {cart, person, search, homeSharp } from 'ionicons/icons';
import Home from '../home/Home';
import Register from '../register/Register';
import Login from '../login/Login';
import ShoppingCart from '../shoppingCart/ShoppingCart';
import Profile from '../profile/Profile';

function BottomBar() {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          <Route path="/home" render={() => <Home />} exact={true} />
          <Route path="/shoppingCart" render={() => <ShoppingCart />} exact={true} />
          <Route path="/profile" render={() => <Profile />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeSharp} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="shoppingCart" href="/shoppingCart">
            <IonIcon icon={cart} />
            <IonLabel>Shopping Cart</IonLabel>
          </IonTabButton>

          <IonTabButton tab="profile" href="/profile">
            <IonIcon icon={person} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>

        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
}
export default BottomBar;