import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Child from './Child';

export default function App() {
  const [message, setMessage] = useState("");

  
  const handleDataFromChild = (data) => {
    setMessage(data); 
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Message from Child: {message}</Text>
      <Child sendDataToParent={handleDataFromChild} />
    </View>
  );
}


import React from 'react';
import { View, Button } from 'react-native';

export default function Child({ sendDataToParent }) {
  const sendMessage = () => {
    sendDataToParent(" Hello from Child!");
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Button title="Send Message to Parent" onPress={sendMessage} />
    </View>
  );
}

