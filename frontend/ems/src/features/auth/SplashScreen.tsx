import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import { useNavigation } from '@react-navigation/native';
import LogoImage1 from "../../assets/images/Logo.png";
import { Colors } from '../../utils/Constants';
import { resetAndNavigate } from '../../utils/NavigationUtils';


const SplashScreenComponent = () => {
    // const navigation = useNavigation();

    useEffect(() => {
        // Set a timeout for 3 seconds
        const timer = setTimeout(() => {
          // Navigate to the CustomerLogin screen
          resetAndNavigate("StudentDashboard");
        }, 3000); // 3000 milliseconds = 3 seconds
    
        // Clear the timer when the component unmounts
        return () => clearTimeout(timer);
      }, []);
    return (

        <View style={styles.container}>
            <LinearGradient
                colors={["#2855AE", "#7292CF"]}
                style={styles.background} />
            <View>
                <Image source={LogoImage1} />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },
    imgContainer:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        // gap: 
    },
    img: {
        flex: 1,
        width: "100%",
        height: 30,
        resizeMode: 'contain',
    }
});



export default SplashScreenComponent;

