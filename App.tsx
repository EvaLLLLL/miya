import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from './src/components/Icon'
import { faSdCard } from '@fortawesome/free-solid-svg-icons'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Icon icon={faSdCard} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
