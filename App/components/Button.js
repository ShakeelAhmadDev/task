import React from 'react';
import {Text,View,StyleSheet,Dimensions} from 'react-native';
import Ic from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ico from 'react-native-vector-icons/Zocial';
import In from 'react-native-vector-icons/Feather';
var {width, height} = Dimensions.get('window');
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Buttons= () =>{
    return(
        <View style={styles.container}>
            <View style={styles.sub}>
                <Ic
                name="organization"
                style={styles.icon}
                />
                <Text style={styles.txt}>
                    Inventory
                    </Text>
            </View>
            <View style={styles.sub}>
                <Icon
                name = "address-book"
                style={styles.icon}
                />
                <Text style={styles.txt}>
                    Address
                    </Text>
            </View>
            <View style={styles.sub}>
            <Icon
                name = "credit-card"
                style={styles.icon}
                />
                <Text style={styles.txt}>
                    My Cards
                    </Text>
            </View>
            <View style={styles.sub}>
                <Ico
                name="email"
                style={styles.icon}
                />
                <Text style={styles.txt}>
                    Email
                    </Text>
            </View>
            <View style={styles.sub}>
                <In
                name="activity"
                style = {styles.icon}/>
                <Text style={styles.txt}>
                   Activity
                    </Text>
            </View>
            </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:15,
        marginTop:30,
        // flex:1,
        width:wp('90%')
    },
    icon:{
        fontSize:14,
        right:2,
        paddingTop:2
    },
    sub:{
        flexDirection:'row',
        borderWidth:0.1,
        padding:10,
        // borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 0.39,

        elevation: 2,
        
    },
    txt:{
        fontSize:12
    }
});

export default Buttons;

