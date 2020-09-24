import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Home from "./src/screens/Home";
import InformationSetting from "./src/screens/InformationSetting";
import Inputs from "./src/screens/Inputs";
import Login1 from "./src/screens/Login1";
import MobileGraphs1 from "./src/screens/MobileGraphs1";
import ProductDetail from "./src/screens/ProductDetail";
import ProdutoCarrinho from "./src/screens/ProdutoCarrinho";
import ProdVerMais from "./src/screens/ProdVerMais";
import Profile1 from "./src/screens/Profile1";
import Start from "./src/screens/Start";
import TermsAndCondictionsSetting from "./src/screens/TermsAndCondictionsSetting";
import Untitled from "./src/screens/Untitled";
import Untitled1 from "./src/screens/Untitled1";
import Untitled2 from "./src/screens/Untitled2";
import Untitled3 from "./src/screens/Untitled3";
import YourBag from "./src/screens/YourBag";

const DrawerNavigation = createDrawerNavigator({
  Home: Home,
  InformationSetting: InformationSetting,
  Inputs: Inputs,
  Login1: Login1,
  MobileGraphs1: MobileGraphs1,
  ProductDetail: ProductDetail,
  ProdutoCarrinho: ProdutoCarrinho,
  ProdVerMais: ProdVerMais,
  Profile1: Profile1,
  Start: Start,
  TermsAndCondictionsSetting: TermsAndCondictionsSetting,
  Untitled: Untitled,
  Untitled1: Untitled1,
  Untitled2: Untitled2,
  Untitled3: Untitled3,
  YourBag: YourBag
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Home: Home,
    InformationSetting: InformationSetting,
    Inputs: Inputs,
    Login1: Login1,
    MobileGraphs1: MobileGraphs1,
    ProductDetail: ProductDetail,
    ProdutoCarrinho: ProdutoCarrinho,
    ProdVerMais: ProdVerMais,
    Profile1: Profile1,
    Start: Start,
    TermsAndCondictionsSetting: TermsAndCondictionsSetting,
    Untitled: Untitled,
    Untitled1: Untitled1,
    Untitled2: Untitled2,
    Untitled3: Untitled3,
    YourBag: YourBag
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf"),
      "poppins-600": require("./src/assets/fonts/poppins-600.ttf"),
      "poppins-regular": require("./src/assets/fonts/poppins-regular.ttf"),
      "poppins-700": require("./src/assets/fonts/poppins-700.ttf"),
      "poppins-500": require("./src/assets/fonts/poppins-500.ttf"),
      "roboto-300": require("./src/assets/fonts/roboto-300.ttf"),
      "roboto-500": require("./src/assets/fonts/roboto-500.ttf"),
      "montserrat-200": require("./src/assets/fonts/montserrat-200.ttf"),
      "montserrat-300": require("./src/assets/fonts/montserrat-300.ttf"),
      "roboto-900": require("./src/assets/fonts/roboto-900.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
