import React from 'react';
import {View,StyleSheet,Text,ImageBackground} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

const Slider = ()=>{
    var images = [require('../../assets/hobbit.jpg'),
                    require('../../assets/hobbit.jpg')
                ]
    return(
        <View>
            <SliderBox
            images = {images}
            sliderBoxHeight={210}
            dotColor="#FFEE58"
            />

            </View>
    )
};

export default Slider;

const styles = StyleSheet.create({

});