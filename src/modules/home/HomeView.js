import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import { Button, CheckinsTab } from '../../components';

export default function HomeScreen({ isExtended, setIsExtended }) {
  return (
    <View style={styles.container}>
      <View style={styles.profileDataContainer}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://a.icons8.com/QQndZjei/gvlCzc/group.png' }}
        />
        <Text style={styles.userWelcome}>Hello, Patricio</Text>
        <Button
          style={styles.loginButton}
          primary
          bgColor="#0BD8A2"
          caption="New Check-in"
        />
      </View>
      <View style={styles.todayDate}>
        <Text> Today Friday, Mar 22</Text>
      </View>
      <View style={styles.checkinsList}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <CheckinsTab key={i} text={Math.floor(Math.random() * 8) + 1 } index={i} />
        ))}
      </View>
      <View style={styles.lastCheckinContainer} />
      <View style={styles.checkinForm} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 26,
  },
  profileDataContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 29,
  },
  loginButton: {
    marginLeft: 'auto',
  },
  todayDate: {
    marginBottom: 20,
  },
  profileImage: {
    width: 27,
    height: 27,
  },
  userWelcome: {
    width: 138,
    height: 46,
    color: '#26666b',
    fontFamily: 'GTWalsheimRegular',
    marginLeft: 15,
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 23,
    letterSpacing: -0.5333333,
  },
  checkinsList: {
    display:"flex",
    flexDirection:"row",
    justifyContent: "space-around",
    alignItems: 'center',
  },
  sectionLarge: {
    flex: 2,
    justifyContent: 'space-around',
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    color: '#19e7f7',
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
  },
  price: {
    marginBottom: 5,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
});
