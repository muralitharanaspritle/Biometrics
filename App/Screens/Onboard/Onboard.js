import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {CENTER} from '../../Config/Alignment';
import Button from '../../Components/Button/Button';
import {IMAGES} from '../../Config/Images';
import {COLORS} from '../../Config/Colors';
import {FONTS} from '../../Config/Font';
import Lottie from 'lottie-react-native';
const OnBoard = ({navigation}) => {
  const skip = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{flex: 0.5}}>
        <View style={{flex: 0.2}}></View>
        <View style={{flex: 0.5}}>
          <Image
            source={IMAGES.fmsLogo}
            style={{width: undefined, height: undefined, flex: 1}}
            resizeMode="contain"
          />
        </View>
        <View style={{flex: 0.3, ...CENTER}}>
          <Text
            style={{
              fontSize: FONTS.fontSize.medium,
              fontWeight: FONTS.fontWeight.bold,
            }}>
            R&D
          </Text>
          <Text
            style={{
              fontSize: FONTS.fontSize.xxLarge,
            }}>
            Biometrics
          </Text>
        </View>
      </View>
      <View style={{flex: 0.5}}>
        <View style={{flex: 0.5}}>
          <Lottie
            source={require('../../Animation/Json/aeroplane.json')}
            autoPlay
            loop
          />
        </View>
        <View style={{flex: 0.5, ...CENTER}}>
          <View style={{flex: 0.35}}>
            <Button
              title={'Get Started'}
              style={{flex: 1, width: 200}}
              onPress={skip}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default OnBoard;

const styles = StyleSheet.create({});
