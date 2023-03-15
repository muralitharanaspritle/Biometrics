import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Lottie from 'lottie-react-native';
import {AuthContext} from '../../../App';
import {COLORS} from '../../Config/Colors';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import Button from '../../Components/Button/Button';
import {CENTER} from '../../Config/Alignment';

const rnBiometrics = new ReactNativeBiometrics({allowDeviceCredentials: true});

const Login = () => {
  const authState = useContext(AuthContext);
  const [biometricsType, setBiometricsType] = useState('');

  useEffect(() => {
    isBiometricsAvailable();
  }, []);

  async function isBiometricsAvailable() {
    try {
      const biometryType = await rnBiometrics.isSensorAvailable();
      if (biometryType.biometryType === BiometryTypes.FaceID) {
        setBiometricsType('FACE_ID');
      }
    } catch (error) {
      console.log(error, 'Error');
    }
  }

  async function promptBiometrics() {
    rnBiometrics
      .simplePrompt({promptMessage: 'Confirm fingerprint'})
      .then(resultObject => {
        const {success} = resultObject;

        if (success) {
          console.log(resultObject);
          console.log('successful biometrics provided');
          login();
        } else {
          console.log('user cancelled biometric prompt');
        }
      })
      .catch(() => {
        console.log('biometrics failed');
      });
  }

  const login = () => {
    authState[0].loggedIn();
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'center'}}>
        <View style={{flex: 0.5}}>
          {biometricsType === 'FACE_ID' ? (
            <Lottie
              source={require('../../Animation/Json/FaceID.json')}
              autoPlay
              loop
            />
          ) : (
            <Lottie
              source={require('../../Animation/Json/fingerprint.json')}
              autoPlay
              loop
            />
          )}
        </View>
      </View>
      <View style={{flex: 0.5, ...CENTER}}>
        <View style={{flex: 0.5}}>
          <View style={{flex: 0.3}}>
            <Button
              title={'Authenticate'}
              style={{flex: 1, width: 200}}
              onPress={() => promptBiometrics()}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
