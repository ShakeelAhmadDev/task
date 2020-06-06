import React from 'react';
import {View,Text,Dimensions,StyleSheet,ImageBackground,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
var {width, height} = Dimensions.get('window');

const User = ({star}) =>{
   
    return(
        <View style={styles.conainter}>
            <ImageBackground
            style={styles.img}
            source={require('../../assets/man1.jpg')}>
                <View style={{justifyContent:'space-between',flex:1}} >
                    <View style = {styles.sub}>
                                <Icon
                                name ="star"
                                style={styles.icon}/>
                            <Text style={styles.txt}>
                                {star}
                                </Text>
                        </View>
                        <View>
                                <Image
                                source={require('../../assets/m0.jpg') }
                                style = {styles.simg}
                        />
                        </View>
                    </View>
                </ImageBackground>
                
            
            </View>
    )
};

const styles = StyleSheet.create({
    conainter:{
        // borderWidth:0.5,
        // flex:1,
        // marginTop:10,
        
        // padding:4,
        // marginHorizontal:5,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 0,
        // },
        // shadowOpacity: 0.34,
        // shadowRadius: 0.27,
        // elevation: 5,
        width:wp('30%')
    },
    img:{
        height:hp('19%'),
        width:wp('30%'),
        backgroundColor:'grey',
        // position:'relative',
    },
    sub:{
        flexDirection:'row',
        marginHorizontal:5,
    },
    icon:{
        fontSize:15,
        color:'white'
    },
    txt:{
        color:'white',
        fontSize:12
    },
    simg:{
        height:wp('7%'),
        width:wp('6%'),
        marginHorizontal:5,
        marginBottom:2,
    }
});

export default User;