import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
  ToastAndroid,
  Modal,
} from "react-native";

export default function App() {
  const [number, setNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false)

  const onPressHandler = () => {
    if (number.length > 3) {
      setSubmitted(!submitted);
    } else {
      setShowWarning(true)
    }
  };

  return (
    <View style={styles.container}>


      <Modal 
      visible={showWarning}
      onRequestClose={()=>
      setShowWarning(false)}
      transparent
      animationType="slide  "
      >

        <View style={styles.centered_view}>
        <View style={styles.warning_modal}>

          <View style={styles.warningHeader}>
            <Text style={styles.warningText}>WARNING</Text>
          </View>
          
          <View style={styles.warningBody}>
          <Text style={styles.warningText}>The number must be longer than 3 characters</Text>
          </View>
          <Pressable 
          onPress={()=> setShowWarning(false)}
          style={styles.warningButton}
          android_ripple={{color:"yellow"}}
          >
            <Text style={styles.warningText}> OK</Text>
          </Pressable>


        </View>
        </View>
      
      
      </Modal>
      <Text style={styles.header}>Enter your Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={(value) => setNumber(value)}
        multiline
        keyboardType="phone-pad"
        maxLength={11}
      />

      <Pressable
        onPress={onPressHandler}
        android_ripple={{ color: "blue" }}
        style={({ pressed }) => [styles.button, { backgroundColor: "#00ff00" }]}
      >
        <Text style={styles.text}>{submitted ? "Clear" : "Submit"}</Text>
      </Pressable>

      {submitted ? (
        <Text style={styles.text}>You number is: {number}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  input: {
    borderWidth: 2,
    width: 200,
    height: 50,
    margin: 10,
    textAlign: "center",
    marginBottom: 10,
    fontSize: 20,
  },
  button: {
    width: 150,
    height: 50,

    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    margin: 40,
  },
  warningBody:{
    height: 200,
    justifyContent:'center',
    alignItems:"center"
  },
  warningButton:{
    backgroundColor: "#00ffff",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
    
  },
  warning_modal:{
    width: 300,
    height: 300,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 15
  }, 
  centered_view:{
    flex: 1 ,
    justifyContent:"center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  warningHeader:{
    height: 50,
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor:"red",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  warningText:{
    fontSize: 20,
    margin: 10,
    textAlign: "center"
  }
});
