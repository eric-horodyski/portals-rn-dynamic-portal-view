import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const ShopPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Shop</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Shop</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="ion-padding">I am the Shop page</div>
      </IonContent>
    </IonPage>
  );
};
export default ShopPage;
