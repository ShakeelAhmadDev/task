import React from 'react';
import {View,StyleSheet,TextInput , Text} from 'react-native';
import  Ic  from 'react-native-vector-icons/Feather';
import  Icon  from 'react-native-vector-icons/FontAwesome';

const SubHeader = () =>{
    return(
        <View style={styles.container}>
            <Ic name="menu" style = {styles.icon}/>
            <TextInput
            placeholder="search"
            style={styles.search}
            />
            <Icon name="search"
            style={styles.ic}/>
            </View>
    )
};

export default SubHeader;

const styles = StyleSheet.create({
    icon:{
        fontSize:50,
        marginHorizontal:5
        },
    container:{
        flexDirection:'row'
    },
    search:{
        // borderWidth:1,
        // borderRadius:180,
        flex:1,
        padding:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 0.27,

        elevation: 3,
    },
    ic:{
        fontSize:30,
        marginHorizontal:5,
        marginTop:7
        },
});