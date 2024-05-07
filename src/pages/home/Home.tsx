import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonContent,
  IonDatetime,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonModal,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonSkeletonText,
  IonTitle,
  IonToolbar,
  useIonAlert,
  useIonToast,
  useIonViewWillEnter,
} from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const modal = useRef<HTMLIonModalElement>(null);
  // const [showAlert] = useIonAlert();
  // const [showToast] = useIonToast();

  const page = useRef(null);

  const [activeSegment, setActiveSegment] = useState<any>('details');

  useIonViewWillEnter(async () => {
    const products = await getProducts();
    setProducts(products);
    setLoading(false);
  });

  const getProducts = async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const products = await data.json();
    console.log(products);
    return products;
  };

  const doRefresh = async (event: any) => {
    const data = await getProducts();
    setProducts(data);
    event.detail.complete();
  };

  function SampleCard() {
    return (
      <IonCard>
        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>
  
        <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
      </IonCard>
    );
  }

  return (
    <IonPage ref={page}>
      <IonHeader>
        <IonToolbar color={'transparent'}>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
          
        </IonToolbar>

        <IonToolbar color={'transparent'}>
          <IonSearchbar />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={(ev) => doRefresh(ev)}>
          <IonRefresherContent />
        </IonRefresher>

        {loading &&
          [...Array(10)].map((_, index) => (
            <IonCard key={index}>
              <IonCardContent className="ion-no-padding">
                <IonItem lines="none">
                  <IonCard>
                    <IonSkeletonText />
                  </IonCard>
                  <IonLabel>
                    <IonSkeletonText animated style={{ width: '150px' }} />
                    <p>
                      <IonSkeletonText />
                    </p>
                  </IonLabel>
                  <IonChip slot="end" color={'primary'}></IonChip>
                </IonItem>
              </IonCardContent>
            </IonCard>
          ))}

        {products.map((product, index) => (
          <IonCard key={index} onClick={() => setSelectedProduct(product)}>
            <IonCardContent className="ion-no-padding">
              <IonItem lines="none">
                <IonAvatar slot="start">
                  <IonImg src={product.image} />
                </IonAvatar>
                <IonLabel>
                  {product.title}
                  <p>{product.description}</p>
                </IonLabel>
                <IonChip slot="end" color={'primary'}>
                  {product.price}
                </IonChip>
              </IonItem>
            </IonCardContent>
          </IonCard>
        ))}

        <IonModal breakpoints={[0, 0.5, 0.8]} initialBreakpoint={0.5} ref={modal} isOpen={selectedUser !== null} onIonModalDidDismiss={() => setSelectedUser(null)}>
          <IonHeader>
            <IonToolbar color={'light'}>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>Close</IonButton>
              </IonButtons>
              <IonTitle>
                {selectedProduct?.title}
              </IonTitle>
            </IonToolbar>
            <IonToolbar color={'light'}>
              <IonSegment value={activeSegment} onIonChange={(e) => setActiveSegment(e.detail.value!)}>
                <IonSegmentButton value="details">Details</IonSegmentButton>
                <IonSegmentButton value="calendar">Calendar</IonSegmentButton>
              </IonSegment>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            {activeSegment === 'details' && (
              <IonCard>
                <IonAvatar slot="start">
                  <IonImg src={selectedProduct?.image} />
                </IonAvatar>
                <IonCardContent className="ion-no-padding">
                  <IonItem lines="none">
                    <IonLabel class="ion-text-wrap">
                      {selectedProduct?.title}
                      <p>{selectedProduct?.price}</p>
                    </IonLabel>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            )}
            {activeSegment === 'calendar' && <IonDatetime />}
          </IonContent>
        </IonModal>
      </IonContent>

    </IonPage>
  );
};

export default Home;