import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Animated } from 'react-native';

const Chart = (props) => {
  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;

  // var step = 40;
  var steps = props.step + 100;
  var height = 17;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 1500,
      useNativeDriver: true.valueOf,
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(-width + (width * props.step) / steps);
  }, [props.step, width]);

  return (
    <View style={styles.chart}>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ marginLeft: 15 }}>{props.label}</Text>
          {props.type === 'price' ? (
            <Text style={{ marginRight: 10 }}>${props.step}</Text>
          ) : null}
          {props.type === 'channel' ? (
            <Text style={{ marginRight: 10 }}>{props.step}</Text>
          ) : null}
        </View>

        {/* style={{ borderLeftWidth: 2, borderBottomWidth: 2, height: 300 }} */}
        <View
          onLayout={(e) => {
            const newWidth = e.nativeEvent.layout.width;
            setWidth(newWidth);
          }}
          style={{
            height,
            backgroundColor: '#58585d',
            borderRadius: height,
            overflow: 'hidden',
            marginLeft: 10,
          }}
        >
          <Animated.View
            style={{
              height,
              width: '100%',
              backgroundColor: '#ffdc7d',
              borderRadius: height,
              overflow: 'hidden',
              position: 'absolute',
              left: 0,
              top: 0,
              transform: [
                {
                  translateX: animatedValue,
                },
              ],
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  chart: {
    justifyContent: 'center',
    padding: 10,
    //marginLeft: 10,
    marginRight: 5,
    // marginTop: 10,
  },
});
