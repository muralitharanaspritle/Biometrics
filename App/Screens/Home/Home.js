import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {COLORS} from '../../Config/Colors';
import Button from '../../Components/Button/Button';
import {AuthContext} from '../../../App';

const Home = () => {
  const authState = useContext(AuthContext);

  const logout = () => {
    authState[0].loggedOut();
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{flex: 0.5}}></View>
      <View style={{flex: 0.5}}>
        <View style={{flex: 0.2, alignItems: 'center'}}>
          <Button
            style={{flex: 1, width: 200}}
            title={'Loggout'}
            onPress={() => logout()}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
