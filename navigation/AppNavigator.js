import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screen/common/WelcomeScreen";
import LanguageSelectScreen from "../screen/UserScreeens/LanguageSelectScreen";
import FarmerRegistrationScreen from "../screen/RegistrationScreen/FarmerRegistrationScreen";
import FarmerLoginScreen from "../screen/FarmerLoginScreen/FarmerLoginScreen";


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="LanguageSelect" component={LanguageSelectScreen} />
      <Stack.Screen name="FarmerRegisterScreen" component={FarmerRegistrationScreen} />
      <Stack.Screen name="FarmerLoginScreen" component={FarmerLoginScreen} />
      
    </Stack.Navigator>
  );
};

export default AppNavigator;
