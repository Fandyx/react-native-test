import React from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';

export default function SplashScreen({ navigation }) {
    setTimeout(() => {
        navigation.navigate({ routeName: 'Login' }) 
    }, 0);
  return (
    <View style={styles.container}>
      <View style={styles.bgImage}>
        <Image
          source={require('../../../assets/images/check_background.png')}
        />
      </View>
      <View style={styles.logo_container}>
        <View style={styles.logo}>
          <Image source={require('../../../assets/images/checkin_logo.png')} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.logo_text}>
            <Text style={styles.checkin}>Check-in</Text>
            <Text style={styles.dot}>.</Text>
          </Text>
        </View>
        <View>
          <Text style={styles.koombea}>
            Koombea
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf:"flex-start",
    width:"100%",
    backgroundColor: '#00343D',
    paddingTop:"30%",
    height: '100%',
  },
  bgImage: {
    flex: 1,
    width: 325,
    height: 324,

    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  logo_container: {
    display: 'flex',
    flexDirection: 'column',
    width:"auto",
    alignItems:"center",
    justifyContent:"center",
  },
  logo: {
    width: 163,
    height: 160,
    alignSelf: 'center',
  },
  checkin: {
    color: '#f7fcfb',
    fontFamily: 'GTWalsheimBold',
    fontSize: 35,
    fontWeight: '400',
    marginTop: 15,
    lineHeight: 47,
    alignSelf:"center",
    letterSpacing: -1.229105,
  },
  dot:{
      color:"#0BD8A2",
      fontSize:35
  },
  koombea:{
    color:"#0BD8A2",
    marginRight:-100,
    fontSize:15,
    fontFamily: 'GTWalsheimBold',
  },
  logo_text: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    paddingTop: 15,
  },
});
