import React from 'react';
import { View } from 'react-native';
import { Text } from '../../components/StyledText';
import { Button } from '../../components';
class CheckinCard extends React.Component {
  render() {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <Text>Last Time Checked</Text>
          <Text>Mar. 21</Text>
        </View>
        <View style={styles.cardDetail}>
          <View>
            <Text>6.5</Text>
          </View>
          <View>
            <View>I've been on UX meeting with Bancolombia UX Leader.</View>
            <View>
              <View>
                <Text>Bancolombia S.A.</Text>
                <Text>Prometeo</Text>
              </View>
            </View>
          </View>
          <View>
            <Button
              style={styles.loginButton}
              primary
              bgColor="#0BD8A2"
              caption="Sign in"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  checkinTab: {
    width: 51,
    height: 84,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#9fb3b4',
    borderRadius: 5,
    backgroundColor: '#ebf6f3',
    flexDirection: 'column',
  },
  weekDays: {
    color: '#9fb3b4',
    fontFamily: 'GTWalsheimRegular',
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 15,
    textAlign: 'center',
    letterSpacing: -0.2444444,
  },
  time: {
    color: '#9fb3b4',
    fontFamily: 'GTWalsheimBold',
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 32,
    textAlign: 'center',
    letterSpacing: -0.15,
  },
  hours: {
    color: '#9fb3b4',
    fontFamily: 'GTWalsheimBold',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 13,
    textAlign: 'center',
    letterSpacing: -0.2222223,
  },
};

export default CheckinCard;
