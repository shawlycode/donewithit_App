import React from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-elements/dist/buttons/Button';

const CheckOutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/check.jpg')} style={styles.img} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={35} color="tomato" />
        </TouchableOpacity>
        <View><Text style={{ fontSize: 20, marginLeft: 40, color: 'tomato' }}> Payment Method</Text></View>
        <TouchableOpacity onPress={() => navigation.navigate('payment')}><Text style={{ fontSize: 20, marginLeft: 80, color: 'tomato' }}>Done</Text></TouchableOpacity>

      </View>
      <View style={styles.formCon}>
        <TextInput placeholder='email' style={styles.input} />
        <TextInput placeholder='card number' style={styles.input} />
        <View style={{ flexDirection: "row", }}>
          <View style={styles.inputCvc}><TextInput placeholder='mm/yy' style={{ fontSize: 24 }} />
          </View>
          <View style={styles.inputCvc1}>
            <TextInput placeholder='| cvc' style={{ fontSize: 24 }} />
          </View>
        </View>
        <TextInput placeholder='card number' style={styles.input} />
        <TouchableOpacity
          onPress={() => navigation.navigate('payment')}
          style={styles.btn}>
          <Text style={{ fontSize: 24, color: "#fff" }}>Check out</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default CheckOutScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute"

  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 50,
    left: 30
  },
  formCon: {
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "tomato",
    width: "90%",
    height: 450,
    padding: 30

  },
  input: {
    height: 50,
    backgroundColor: "#E2EBEC",
    color: "tomato",
    borderRadius: 5,
    paddingHorizontal: 20,
    fontSize: 30,
    marginBottom: 15
  },
  inputCvc: {
    height: 50,
    backgroundColor: "#E2EBEC",
    color: "tomato",
    borderRadius: 5,
    paddingHorizontal: 20,
    width: 150,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15
  },
  inputCvc1: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "#E2EBEC",
    color: "tomato",
    borderRadius: 5,
    paddingHorizontal: 20,
    fontSize: 24,
    textAlign: "center",
    marginLeft: 30,
    marginBottom: 20,
    width: 100
  },
  btn: {
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 5,
    marginTop: 30
  }
})
