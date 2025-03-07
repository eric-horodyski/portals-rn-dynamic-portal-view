import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import ShopPage from "./pages/ShopPage";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

export interface AppContext {
  startingRoute: string;
}

const App: React.FC<{ context: AppContext }> = ({
  context: { startingRoute },
}) => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/">
            {startingRoute !== "/" ? (
              <Redirect to={startingRoute} />
            ) : (
              <ShopPage />
            )}
          </Route>
          <Route path="/shop" exact component={ShopPage} />
          <Route path="/profile" exact component={ProfilePage} />
          <Route path="/cart" exact component={CartPage} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
