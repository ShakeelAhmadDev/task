import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Card = () =>{
    return(
        <View style={styles.conainter}>
            <Image
            style={styles.img}
            />
            <Text>
                  Carpet for all users...
                </Text>
                <StarRating
                disabled={false}
                maxStars={5}
                starSize={22}
                rating={4}
                />
                <View style={styles.sub}>
                    <Text style={styles.txt}>
                        $55 
                        </Text>
                        <Icon name = "shopping-cart" style={styles.icon}/>
                    </View>
            </View>
    )
};

const styles = StyleSheet.create({
    conainter:{
        // borderWidth:0.5,
        marginTop:30,
        width:wp('31%'),
        padding:4,
        marginHorizontal:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.53,
        shadowRadius: 0.57,
        elevation: 1,
    },
    img:{
        height:hp('15%'),
        width:wp('30%'),
        backgroundColor:'grey'
    },
    sub:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:5
    },
    icon:{
        fontSize:18,
        color:'#3498db'
    },
    txt:{
        textAlignVertical:'auto'
    }
});

export default Card;