import React from 'react';
import { View, Text } from 'react-native';

class CheckinsTab extends React.Component {
  render() {
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <View style={styles.checkinTab}>
        <Text style={styles.weekDays}>{weekDays[this.props.index]}</Text>
        <Text style={styles.time}>{this.props.text}</Text>
        <Text style={styles.hours}>Hours</Text>
      </View>
    );
  }
}

const styles = {
  checkinTab: {
    width: 51,
    height: 84,
    justifyContent: 'center',
    borderWidth:1,
    borderColor:"#9fb3b4",
    borderRadius:5,
    backgroundColor: '#ebf6f3',
    flexDirection: 'column',
  },
  weekDays: {
    color: '#9fb3b4',
    fontFamily: 'GTWalsheimRegular',
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 15,
    textAlign: "center",
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

export default CheckinsTab;
