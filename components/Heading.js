import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Heading({children}) {
  return (
      <Text style={styles.text}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 'bold',
    }
})