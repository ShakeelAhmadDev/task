import React from 'react';
import {View,SafeAreaView ,Text,StyleSheet,Dimensions,ScrollView,ImageBackground} from 'react-native';
import Slider from '../components/slider';
import User from '../components/User';
import FooterTabs from '../components/Footer';
var {width, height} = Dimensions.get('window');
import UCard from '../components/avatar';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Menu from 'react-native-vector-icons/Fontisto';
import Video from 'react-native-vector-icons/Feather';
import Be from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Task = () =>{
    return(
        <SafeAreaView style={{
           flex:1
        }}>
        
        <ScrollView style={styles.container}>
            {/* <Slider/> */}
            <ImageBackground
            style={styles.img}
            source={require('../../assets/hobbit.jpg')}
            >
                <View style={{flexDirection:'row',
                                // 
                                // flex:1,
                                
                            
                                }}>
                    <View style={styles.plyicon}>
                        <Icon
                        name="google-play"
                        style={styles.icon}/>
                        </View>
                    <View style={styles.br}>
                    <View style={styles.heading}>
                        <Text style={styles.t}>
                            ALL
                            </Text>
                            <Text style={styles.t}>
                        MOVIES
                            </Text>
                            <Text style={[styles.t,styles.t1]}>
                        REVIEWS
                            </Text>
                            <Text style={styles.t}>
                            COMPETITIONS
                            </Text>
                            </View>
                        </View>
                    </View>
            </ImageBackground>
           
            <View style={styles.subtxt} >
                <Text style={styles.txt}>
                    Top Reviews
                    </Text>
                    <Text style={styles.txt}>
                   SEE ALL
                    </Text>
                </View>
                <View style={styles.sub}>
            <User star={10} />
            <User star={8} />
            <User star={7} />
            </View>
            <View style={styles.subtxt}>
            <Text style={styles.txt}>
                Latest Reviews
                </Text>
                <Text style={styles.txt}>
                SEE ALL
                </Text>
                </View>
            <View style={styles.sub}>
                <User star={5} />
                <User star={10}/>
                <User star={9} />
            </View >
            <View >
            <View>
                <View style={styles.subtxt}>
                            <Text style={styles.txt}>
                                Top Reviewers
                                </Text>
                                <Text style={styles.txt}>
                                SEE ALL
                                </Text>
                        </View>
                            <View style={styles.avtar}>
                                <UCard/>
                                <UCard/>
                                <UCard/>
                                <UCard/>
                            </View>
                        </View>
                </View>
            </ScrollView>
            <View style={styles.bottom}>
                <Menu
                name="microsoft"
                style={[styles.bricon,styles.active]}
                />
                <Menu
                name="search"
                style={styles.bricon}
                />
                 <Video
                name="video"
                style={styles.bricon}
                />
                <Be
                name="bells"
                style={styles.bricon}
                />
                <Menu
                name="person"
                style={styles.bricon}
                />
                    
            </View>
           </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    sub:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:wp('100%')
    },
    container:{
        backgroundColor:'#2f3640',
        // flex:1,
        width:width
    },
    foot:{
        width:width,
        height:height-350
    },
    txt:{
        color:'white',
        marginHorizontal:10,
        marginBottom:4,
    },
    subtxt:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    img:{
        width:width,
        height:hp('35%')
    },
    icon:{
        fontSize:hp('10%'),
        color:'blue',
        // backgroundColor:'black',
        marginHorizontal:4
        
    },
    plyicon:{
        borderWidth:1,
        width:wp('20%'),
        borderBottomRightRadius:20,
        backgroundColor:'black',
    
    },
    heading:{
        // backgroundColor: 'black',
        marginTop:10,
        flexDirection:'row',
        // left:30,
        // flex:1,
        // justifyContent:'space-evenly',
      
    },
    t:{
        // color:'#c23616',
        color:'white',
        fontSize:hp('2.5%'),
        marginLeft:12,
        fontWeight:'bold',
    },
    t1:{
        color:'red',
    },
    br:{
        backgroundColor: 'black',
        // flex:1,
        shadowRadius:0.43,
        shadowOpacity:0.5,
        opacity:0.8,
        borderBottomLeftRadius:20,
        width:width,
        alignItems:'flex-start',
        // alignSelf:'flex-end',
        height:hp('12%')
    },
    bottom:{
        width:width,
        height:40,
        backgroundColor:'black',
        flexDirection:'row', 
        justifyContent:'space-around'  
    },
    bricon:{
        paddingTop:4,
        fontSize:20,
        color:'white'
    },
    active:{
        color:'#B33771'
    },
    avtar:{
        flexDirection:'row',
        justifyContent:'space-around'
    }
})

export default Task;

