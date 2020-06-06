import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import  Ic  from 'react-native-vector-icons/Entypo';



const Head =()=> {
    return(
    <View style={styles.maincontainer}>
                <View style = {styles.container}>
                    <Image
                    style={styles.imgicon}
                    source={require('../../assets/b.jpg')}
                    />
                    <Text style ={styles.title}>
                        Blockmerce
                        </Text>
                    </View>
                    <View style={styles.subcontainer}>
                    <Ic name="bell" style={styles.icon}/>
                        <Icon name = "shopping-cart" style={styles.icon}/>
                        
                        </View>
                </View> 
        );
};


const styles = StyleSheet.create({
    title:{
        fontSize:30,
        color:'#3498db',
        marginHorizontal:2,
        fontStyle:'italic',
        fontWeight:'bold'
    },
    imgicon:{
        height:35,
        width:30,
        borderWidth:2,
        borderRadius:200/2
    },
    container:{
        flexDirection:'row',
        marginHorizontal:5,
    },
    maincontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    },
    icon:{
        fontSize:30,
        color:'#3498db',
        marginHorizontal:5
    },
    subcontainer:{
        flexDirection:'row',
    },
    space:{
        marginHorizontal:5
    }
});


export default Head;