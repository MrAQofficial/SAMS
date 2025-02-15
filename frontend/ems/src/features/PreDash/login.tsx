import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

function login() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>
      <View style={{ marginBottom: 20 }}>
        <Text>Username:</Text>
        <TextInput style={{ borderWidth: 1, padding: 10 }} placeholder="Username" />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text>Password:</Text>
        <TextInput style={{ borderWidth: 1, padding: 10 }} placeholder="Password" secureTextEntry />
      </View>
      <Button title="Login" onPress={() => {}} />
    </View>
  )
}

export default login