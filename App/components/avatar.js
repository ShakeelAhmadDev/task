import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const UCard = () =>{
    return(
        <View style={styles.container}>
            <Image
            style={styles.avatar}
            source={require('../../assets/man1.jpg')}
            />
            <Text style={styles.txt}>
                @Mdn
                </Text>
            </View>
    )
};

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        padding:10,
        justifyContent:'center',
        alignContent:'center',
        width:wp('30%'),
        backgroundColor:'black'
    },
    avatar:{
        height:50,
        width:50,
        borderRadius:200/2,
    },
    txt:{
        color:'white'
    }
});

export default UCard;
