import React from 'react';
import {Text,View,StyleSheet,Image,Dimensions} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import  Ic  from 'react-native-vector-icons/SimpleLineIcons';
import { Avatar } from "react-native-elements";
var {width, height} = Dimensions.get('window');
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Profile  = () =>{
    return(
        <View style={styles.conainter}>
            <Icon name="send"
            style={styles.icon}
            />
            <View style={styles.subcontainer}>
                <View>
                    <Avatar
                    rounded
                    iconStyle={{marginTop:65,paddingLeft:60}}
                    // overlayContainerStyle={{backgroundColor: 'blue'}}
                    icon={{name:'plus-circle',color:'black',type:'font-awesome',size:25}}
                    containerStyle={styles.img}
                    />
                    {/* <Image
                    style={styles.img}/> */}
                    </View>
                    <View >
                        <View style={styles.txtcontainer}>
                            <Text style={styles.txt}>
                                Panos Panou
                                </Text>
                                <Ic name="options-vertical"
                                style={styles.ic}
                                />
                            </View>
                        <View style={styles.tconatainer}>
                            <View >
                                <Text style={styles.tnumber}>
                                    67
                                    </Text>
                                    <Text style={styles.tx}>
                                        Shop Following
                                        </Text>
                                </View>
                                <View style={{left:14}} >
                                <Text style={styles.tnumber}>
                                    64
                                    </Text>
                                    <Text style={styles.tx}>
                                        Connection
                                        </Text>
                                </View>
                                <View style={{left:27}}>
                                <Text style={styles.tnumber}>
                                    10
                                    </Text>
                                    <Text style={styles.tx}>
                                        Promotion
                                        </Text>
                                </View>
                            </View>
                        </View>
                </View>
            </View>
    )
};

export default Profile;

const styles = StyleSheet.create({
    conainter:{
        flexDirection:'row',
        marginTop:40,
        justifyContent:'flex-start',
        // flex:1,
       width:wp('100%')
    },
    icon:{
        marginTop:20,
        fontSize:30,
        color:'#3498db'
    },
    img:{
        height:100,
        width:100,
        // borderWidth:1,
        borderRadius:250/2,
        backgroundColor:'teal'
    },
    subcontainer:{
        left:15,
        flexDirection:'row'
    },
    ic:{
        fontSize:20,
        color:'#3498db',
        marginTop:9,
        left:5
    },
    txtcontainer:{
        flexDirection:'row',
        marginTop:30,
        marginHorizontal:8,
        width:wp('50%')
    },
    txt:{
        fontSize:25,
    },
    tconatainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        left:8,
        width:wp('20%')
    },
    tx:{
        fontSize:10
    },
    tnumber:{
        textAlign:'center'
    }
})