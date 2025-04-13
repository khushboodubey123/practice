import React from 'react';
import { View, Button } from 'react-native';

export default function Child({ sendData }) {
  return (
    <View>
      <Button
        title="Send to parents"
        onPress={() => sendData(2)}
      />
    </View>
  );
}
