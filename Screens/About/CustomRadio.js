import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const CustomRadio = ({ options, onChangeSelect, selected, index }) => {
  return (
    <ScrollView
      horizontal={true}
      bounces={false}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity
        onPress={() => onChangeSelect(options, index)}
        style={styles.container}
      >
        <View style={styles.outlinedCircle}>
          {selected === index && <View style={styles.innerCircle} />}
        </View>
        <Text
          style={[
            styles.txtRadio,
            { color: selected === index ? '#444' : '#777' },
          ]}
        >
          {options}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CustomRadio;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  outlinedCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#5c4b4d',
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#5c4b4d',
  },
  txtRadio: {
    padding: 3,
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
