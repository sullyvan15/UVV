import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";

import Untitled from "./src/screens/Untitled";
import Home from "./src/screens/Home";
import HomeCopy4 from "./src/screens/HomeCopy4";
import Number from "./src/screens/Number";
import NumberCopy from "./src/screens/NumberCopy";
import HomeCopy from "./src/screens/HomeCopy";
import HomeCopy2 from "./src/screens/HomeCopy2";
import HomeCopy3 from "./src/screens/HomeCopy3";
import HomeCopy5 from "./src/screens/HomeCopy5";
import Scene from "./src/screens/Scene";

const DrawerNavigation = createDrawerNavigator({
  Untitled: Untitled,
  Home: Home,
  HomeCopy4: HomeCopy4,
  Number: Number,
  NumberCopy: NumberCopy,
  HomeCopy: HomeCopy,
  HomeCopy2: HomeCopy2,
  HomeCopy3: HomeCopy3,
  HomeCopy5: HomeCopy5,
  Scene: Scene
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Untitled: Untitled,
    Home: Home,
    HomeCopy4: HomeCopy4,
    Number: Number,
    NumberCopy: NumberCopy,
    HomeCopy: HomeCopy,
    HomeCopy2: HomeCopy2,
    HomeCopy3: HomeCopy3,
    HomeCopy5: HomeCopy5,
    Scene: Scene
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
  await Promise.all([Font.loadAsync({})]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
