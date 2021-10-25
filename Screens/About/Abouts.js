import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import HeaderTitle from '../../Shared/HeaderTitle';
import Chart from './Chart';
import CustomRadio from './CustomRadio';

import { AntDesign } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import * as Linking from 'expo-linking';

const Abouts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedRadio, setSelectedRadio] = useState(0);
  const [graph, setGraph] = useState();

  var graphOpt = [
    { id: '1', opt: 'By Price' },
    { id: '2', opt: 'By Channels' },
  ];

  const handleContactUs = () => {
    if (name !== '' && email !== '' && message !== '') {
      [
        setName(''),
        setEmail(''),
        setMessage(''),
        Toast.show({
          topOffset: 60,
          type: 'success',
          text1: 'Message Sent!',
          text2: 'Thanks for getting in Contact!',
        }),
      ];
    } else {
      Toast.show({
        topOffset: 60,
        type: 'error',
        text1: 'Fields cannot be empty',
        text2: 'Please try again',
      });
    }
  };

  return (
    <View style={{ alignItems: 'center', marginBottom: 50 }}>
      <HeaderTitle title={'Koala TV'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
        }}
      >
        <View style={{ padding: 10, alignItems: 'center', marginTop: 15 }}>
          <Text style={{ fontSize: 17, textAlign: 'center' }}>
            Koala TV is a new concept of broadcasting channel, a 100% Australian
            private company offering a wide range of content. Our main objective
            is to broadcast quality content with quality transmission service
            bringing a huge variety of channels including TV Series, Sports,
            Movies, News, Weather, and more!
          </Text>
        </View>

        <View style={{ width: '92%', marginTop: 20 }}>
          <Text
            style={{
              fontSize: 21,
              textAlign: 'center',
              marginTop: 10,
              marginBottom: 10,
              fontWeight: 'bold',
            }}
          >
            Why choose Koala TV?
          </Text>
          <Text
            style={{
              fontSize: 17,
              textAlign: 'center',
              marginTop: 10,
              marginBottom: 20,
            }}
          >
            We have the best subscriptions prices in the market added to the
            highest number of channels! Check the graphic bellow!
          </Text>
          <View
            style={{
              marginTop: 5,
              marginBottom: 20,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignSelf: 'center',
              width: '60%',
            }}
          >
            {graphOpt.map((option) => {
              return (
                <CustomRadio
                  options={option.opt}
                  onChangeSelect={(opt, index) => {
                    setSelectedRadio(index);
                    setGraph(opt);
                  }}
                  selected={selectedRadio}
                  index={option.id}
                  key={option.id}
                />
              );
            })}
          </View>
          <View
            style={{
              borderLeftWidth: 2,
              borderBottomWidth: 2,
              height: 230,
              width: '90%',
              alignSelf: 'center',
            }}
          >
            {graph === 'By Price' ? (
              <View>
                <View>
                  <Chart step={24.99} label="Koala TV" type="price" />
                  <Chart step={40} label="ABC" type="price" />
                  <Chart step={35.99} label="SBS" type="price" />
                  <Chart step={58} label="Seven West" type="price" />
                </View>
                <Text
                  style={{
                    textAlign: 'right',
                    padding: 5,
                    marginTop: 7,
                  }}
                >
                  Total Price
                </Text>
              </View>
            ) : null}
            {graph === 'By Channels' ? (
              <View>
                <View>
                  <Chart step={453} label="Koala TV" type="channel" />
                  <Chart step={300} label="ABC" type="channel" />
                  <Chart step={290} label="SBS" type="channel" />
                  <Chart step={350} label="Seven West" type="channel" />
                </View>
                <Text
                  style={{
                    textAlign: 'right',
                    padding: 5,
                    marginTop: 7,
                  }}
                >
                  Total Channels
                </Text>
              </View>
            ) : null}
            {!graph ? (
              <View>
                <View>
                  <Chart step={0} label="Koala TV" type="channel" />
                  <Chart step={0} label="ABC" type="channel" />
                  <Chart step={0} label="SBS" type="channel" />
                  <Chart step={0} label="Seven West" type="channel" />
                </View>
              </View>
            ) : null}
          </View>
        </View>

        <View style={styles.viewContactUs}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
            Contact Us!
          </Text>
          <View style={{ marginTop: 10 }}>
            <TextInput
              name={'name'}
              placeholder="Name"
              style={styles.inputs}
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <TextInput
              name={'email'}
              placeholder="Email"
              style={styles.inputs}
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              name={'message'}
              placeholder="Write your message"
              style={[styles.inputs, { height: 100 }]}
              multiline={true}
              value={message}
              onChangeText={(text) => setMessage(text)}
            />
            <TouchableOpacity
              style={styles.viewSendBtn}
              onPress={() => {
                handleContactUs();
              }}
            >
              <Text
                style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}
              >
                Send
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 30, marginBottom: 10 }}>
          <Text style={{ fontSize: 17, textAlign: 'center' }}>
            You can also contact us through the following social medias!
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 15,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                let url = 'twitter://post?message=${yourMsg}';
                Linking.openURL(url)
                  .then((data) => {
                    console.log('open twitter', data);
                  })
                  .catch(() => {
                    Toast.show({
                      topOffset: 60,
                      type: 'error',
                      text1: 'App is not installed',
                      text2: 'Please try again',
                    });
                  });
              }}
            >
              <AntDesign name="twitter" size={27} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="instagram" size={27} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="facebook-square" size={27} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            marginBottom: 10,
            alignItems: 'center',
            width: '95%',
          }}
        >
          <Text
            style={{ fontSize: 17, textAlign: 'center', fontWeight: 'bold' }}
          >
            This app is for a class assignment and not for commercial purposes
          </Text>
          <Text
            style={{ fontSize: 17, textAlign: 'center', fontWeight: 'bold' }}
          >
            ABN: 123 456 789 10
          </Text>
          <Text
            style={{ fontSize: 17, textAlign: 'center', fontWeight: 'bold' }}
          >
            Koala TV Pty Ltd
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Abouts;

const styles = StyleSheet.create({
  viewContactUs: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 340,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 10,
    marginTop: 65,
    alignItems: 'center',
  },
  inputs: {
    padding: 8,
    borderWidth: 1,
    width: 250,
    height: 40,
    backgroundColor: '#f2f2f2',
    marginTop: 15,
    borderRadius: 5,
  },
  viewSendBtn: {
    padding: 5,
    marginTop: 20,
    backgroundColor: '#58585d',
    borderRadius: 10,
    width: 90,
    height: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
