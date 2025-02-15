import React from "react"
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "../utils/NavigationUtils";
import StudentDashboard from "../features/dashboard/StudentDashboard";
import StudentDashboardTeacher from "../features/dashboard/TeacherDashboard";
import SplashScreenComponent from "../features/auth/SplashScreen";
// import { useNavigation } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName="SplashScreenComponent" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SplashScreenComponent" component={SplashScreenComponent} />
                <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
                {/* <Stack.Screen name="Profile" component={Profile} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;