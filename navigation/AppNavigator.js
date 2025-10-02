import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screen/common/WelcomeScreen";
import LanguageSelectScreen from "../screen/UserScreeens/LanguageSelectScreen";
import FarmerRegistrationScreen from "../screen/RegistrationScreen/FarmerRegistrationScreen";
import FarmerDashboard from "../FarmerDashboard/FarmerDashboard";
import ReatilerDashboard from "../RetailerDashboard/RetailerDashboard";
import WholesalerDashboard from "../WholesalerDashboard/WholesalerDashboard";
import CommonLoginScreen from "../screen/CommonLoginScreen/CommonLoginScreen";



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
      <Stack.Screen name="Login Here" component={CommonLoginScreen} />
      <Stack.Screen name="FarmerDashboard" component={FarmerDashboard} />
      <Stack.Screen name="RetailerDashboard" component={ReatilerDashboard} />
      <Stack.Screen name="WholesalerDashboard" component={WholesalerDashboard} />
      <Stack.Screen name="CommonLoginScreen" component={CommonLoginScreen} />
    
      
    </Stack.Navigator>
  );
};

export default AppNavigator;
