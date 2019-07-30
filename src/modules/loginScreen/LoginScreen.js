import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';
import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import { Button } from '../../components';

export default class LoginScreen extends React.Component {
  state = { user: null };
  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };
  getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      console.log("userInfo", userInfo);
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
        try {
          await GoogleSignin.hasPlayServices();

          const newUserInfo = await GoogleSignin.signIn();
          console.log('el user info', newUserInfo);
          this.setState({ userInfo:newUserInfo });
        } catch (error) {
          console.log(error);
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (f.e. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.checkinsLogoContainer}>
          <Image
            style={styles.checkinsLogo}
            source={require('../../../assets/images/checkins_koombea_logo.png')}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.signInWith}>Sign in with your</Text>
          <View style={styles.borderContainer}>
            <Text style={styles.koombea}>Koombea</Text>
          </View>
          <Text style={styles.signInWith}>account</Text>
        </View>
        <View style={styles.btnContainer}>
          <Button
            style={styles.loginButton}
            primary
            bgColor="#0BD8A2"
            caption="Sign in"
            onPress={async () => {
              GoogleSignin.configure({
                webClientId:
                  '722358003023-taap7e646ol6om6vt3fu8o1ev5g4k4pl.apps.googleusercontent.com',
                offlineAccess: true,
              });

              await this.getCurrentUserInfo();
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#00343D',
    justifyContent: 'flex-start',
    height: '100%',
    paddingLeft: 30,
    paddingRight: 52,
  },
  checkinsLogo: {
    width: 116,
    height: 39,
  },
  signInWith: {
    width: 300,
    color: '#ffffff',
    fontFamily: 'GTWalsheimBold',
    fontSize: 40,
    fontWeight: '400',
    lineHeight: 38,
    letterSpacing: -0.8888889,
  },
  btnContainer: {
    marginTop: 'auto',
    marginBottom: 30,
    marginLeft: 8,
  },
  checkinsLogoContainer: {
    marginTop: 34,
    marginBottom: 36.8,
  },

  checkin: {
    color: '#f7fcfb',
    fontFamily: 'GTWalsheimBold',
    fontSize: 35,
    fontWeight: '400',
    marginTop: 15,
    lineHeight: 47,
    alignSelf: 'center',
    letterSpacing: -1.229105,
  },
  borderContainer: {
    borderBottomColor: '#0BD8A2',
    borderBottomWidth: 4,
    width: 170,
    position: 'relative',
    left: 95,
  },
  koombea: {
    width: 300,
    fontFamily: 'GTWalsheimBold',
    fontSize: 40,
    fontWeight: '400',
    lineHeight: 38,
    letterSpacing: -0.8888889,
    color: '#0BD8A2',
    position: 'relative',
    left: -95,
  },
  loginButton: {
    width: '100%',
    height: 51,
    backgroundColor: '#0BD8A2',
    borderRadius: 8,
  },
  textContainer: {
    paddingTop: 15,
  },
});
