import { View, StyleSheet, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import MyButton from './src/component/myButton';
import NewInput from './src/component/newInput';

export default function App() {

  const [name, setName] = useState([]);
  const [mobileNum, setMobileNum] = useState([]);
  const [email, setEmail] = useState([]);
  const [message, setMessage] = useState([]);
  const [errorName, setErrorName] = useState(false);
  const [errorMob, setErrorMob] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMes, setErrorMes] = useState(false);

  const onChangeTextName = (text) => {
    if (/^[a-zA-Z\-]+$/.test(text) === false) {
      setErrorName(true)
    } else {
      setName(text);
      setErrorName(false)
    }
  }
  const onChangeTextMob = (text) => {
    if (/^(0|[+91]{3})?[7-9][0-9]{9}$/.test(text) === false) {
      setErrorMob(true)
    } else {
      setMobileNum(text);
      setErrorMob(false)
    }
  }
  const onChangeTextEmail = (text) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text) === false) {
      setErrorEmail(true)
    } else {
      setEmail(text);
      setErrorEmail(false)
    }
  }
  const onChangeTextMesg = (text) => {
    if (/^[a-zA-Z\-]+$/.test(text) === false) {
      setErrorMes(true)
    } else {
      setMessage(text);
      setErrorMes(false)
    }
  }

  const handleSubmit = () => {
    console.log(name, mobileNum, email, message);
  }
  return (
    <View style={styles.container}>
      <NewInput placeholder="Name" onChangeText={(text) => onChangeTextName(text)} error={errorName} />
      <NewInput placeholder="Mobile Number" onChangeText={(text) => onChangeTextMob(text)} error={errorMob} keyboardType="phone-pad" />
      <NewInput placeholder="Email" onChangeText={(text) => onChangeTextEmail(text)} error={errorEmail} keyboardType="email-address" />
      <NewInput placeholder="Message" onChangeText={(text) => onChangeTextMesg(text)} error={errorMes} />
      <MyButton title="Submit" onPress={handleSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})