import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories Screen</Text>
      <Button title="Go to Bread" onPress={() => navigation.navigate("Bread")}/>
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF724C",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Tillana",
  }
})