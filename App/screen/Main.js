import React from 'react';
import {View,ScrollView,SafeAreaView,Text,StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
import Head from '../components/Header';
import Subheader from '../components/Subheader';
import Profile from '../components/profile';
import Buttons from '../components/Button';
import Card from '../components/Card';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Task from './SecondTask';
var {width, height} = Dimensions.get('window');
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const MainScreen = ({navigation}) => {
    return(
        <SafeAreaView>
        <ScrollView style={styles.container}>
            <Head/>
            <Subheader/>
            <Profile/>
            <Buttons/>
            <View style={{borderWidth:0.5,top:20,borderColor:'black'}}>
                </View>
                <View style={{flexDirection:'row',width:width-10}}>
                <Card/>
                <Card/>
                <Card/>
                    </View>
                    <View style={styles.link}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Tasks')}}>
                        <Text style={styles.txt}>
                            Move to SecondTask screen
                            </Text>
                            </TouchableOpacity>
                        </View>
            </ScrollView>
            </SafeAreaView>
    )
};


const Stack= createStackNavigator({
    Main:{
        screen:MainScreen,
        navigationOptions:{
            headerShown: false
        }
    },
    Tasks:{
        screen:Task,
        navigationOptions:{
            headerShown: false
        }
    }
    },{
    initialRouteName:'Main',
});

const AppContainer = createAppContainer(Stack); 


export default AppContainer;

const styles = StyleSheet.create({
    link:{
        marginTop:30,
       
    },  
    container:{
        // flex:1,
        width:wp('100%'),
        height:hp('100%')
    },
    txt:{
        textAlign:'center'
    }
})