import React, { Component } from 'react';

import {
  View,
  Dimensions,
  Animated,
  StyleSheet,
  StatusBar

} from 'react-native';
import Svg, { Path, G } from "react-native-svg";
import { interpolate } from 'flubber';


const { width, height } = Dimensions.get('screen');

const finalPath = "M124.39 92.93C124.39 117.36 105.86 137.16 83 137.16C60.14 137.16 41.61 117.36 "
  + "41.61 92.93C41.61 68.49 60.14 48.69 83 11.43C105.86 48.69 124.39 68.49 124.39 92.93Z";


const initialPath = "M112.6 33.44C128.95 33.44 142.2 47.38 142.2 64.58C142.2 112.22 83 135.85 83 137.16C83 137.16 83 137.16 83 137.16C83 135.85 23.8 112.22 23.8 64.58C23.8 "
  + "47.38 37.05 33.44 53.4 33.44C69.75 33.44 83 45.65 83 62.86C83 "
  + "45.66 96.25 33.44 112.6 33.44Z";




export default class Loading extends Component {

  state = {
    animation: new Animated.Value(0),
    _scrollX: new Animated.Value(0),
  }


  constructor(props) {
    super(props);



  }

  componentWillMount() {

    const pathInterpolate = interpolate(initialPath,
      finalPath, {
      maxSegmentLength: 1
    })

    this.state.animation.addListener(({ value }) => {
      const path = pathInterpolate(value);
      this._path.setNativeProps({
        d: path
      })
    })
  }


  handlePress = () => {


    Animated.sequence([

      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 500,

      }),
      Animated.delay(500),
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 500,

      }),

      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 500,

      }),


      Animated.delay(500),
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 500,

      }),


    ]).start();

  };



  render() {

    this.handlePress();




    return (

      <View style={styles.container}>
        <StatusBar backgroundColor={'#ca2929'}></StatusBar>


        <Svg width={width} height={height / 3} viewBox='0 0 163 163'>
          <G>
            <Path stroke='#fff' d={initialPath} fill='#fff' ref={path => this._path = path} />
          </G>
        </Svg>




      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ca2929',
    flex: 1,
    justifyContent: 'center'
  }
}
)