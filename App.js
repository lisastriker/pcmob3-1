import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const arrayName = ["Aaran",
"Aaren",
"Aarez",
"Aarman",
"Aaron",
"Aaron-James",
"Aarron",
"Aaryan",
"Aaryn",
"Aayan",
"Aazaan",
"Abaan",
"Abbas",
"Abdallah",
"Abdalroof",
"Abdihakim",
"Abdirahman",
"Abdisalam",
"Abdul",
"Abdul-Aziz",
"Abdulbasir",
"Abdulkadir",
"Abdulkarem",]
export default function App() {
  return (
    <View style={styles.container}>
      {arrayName.map((item, key)=><Text key={key}>{item}{key}</Text>)}
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
