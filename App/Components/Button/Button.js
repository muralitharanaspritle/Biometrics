import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../Config/Colors';
import { CENTER } from '../../Config/Alignment';
import { FONTS } from '../../Config/Font';
const Button = ({title, style, onPress}) => {
  return (
    <TouchableOpacity style={style} onPress={() => onPress()}>
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        colors={['#ffc371', '#ff5f6d']}
        style={{
          flex: 1,
          ...CENTER,
          paddingHorizontal: 15,
          borderRadius: 40,
        }}>
        <Text style={{color:COLORS.white,fontWeight:FONTS.fontWeight.bold}}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
