
import React from 'react';
import { View, Text, Button } from 'react-native';

const home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the App!</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Go to Signup" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

export default home;
