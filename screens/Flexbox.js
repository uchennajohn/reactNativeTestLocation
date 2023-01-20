import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Linking } from 'react-native';

function App() {

  

  return (
    <View style={styles.container}>
        <View style={styles.row}>


        <View style={styles.view1}>
          <Text style={styles.text1}>1</Text>
        </View>

        <View style={styles.view2}>
          <Text style={styles.text1}>2</Text>
        </View>

        <View style={styles.view3}>
          <Text style={styles.text1}>3</Text>
        </View>


        </View>

        <View style={styles.row}>
        <View style={styles.view4}>
          <Text style={styles.text1}>4</Text>
        </View>
        </View>


        <View style={styles.row}>
        <View style={styles.view5}>
          <Text style={styles.text1}>5</Text>
        </View>
        </View>

        <View style={styles.big_row}>
        <View style={styles.view6}>
          <Text style={styles.text1}>6</Text>
        </View>

        <View style={styles.view7}>
          <Text style={styles.text1}>7</Text>
        </View>


        </View>

        

       
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
    backgroundColor: '#ffffff',
    flexDirection:'column',
    alignItems: "center",
    justifyContent: 'flex-start',
  },
  row:{
   flexDirection: "row",
    backgroundColor: "#ffffff",
    alignItems:"center",
    justifyContent: "center"

  },
  big_row:{
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    alignItems:"stretch",
    justifyContent: "center"

  },

  view1:{
    flex:1,
    backgroundColor:"#00ffff",
    alignItems: "center",
    justifyContent: "center"
  },
  view2:{
   
    flex:2,
    backgroundColor:"grey",
    alignItems: "center",
    justifyContent: "center"
  },
  view3:{
   
    flex:3,
    backgroundColor:"orange",
    alignItems: "center",
    justifyContent: "center"
  },
  view4:{
   flex:1,
    backgroundColor:"red",
    alignItems: "center",
    justifyContent: "center"
  },
  view5:{
    flex:1,
     backgroundColor:"yellow",
     alignItems: "center",
     justifyContent: "center"
   },
   view6:{
    flex:1,
     backgroundColor:"black",
     alignItems: "center",
     justifyContent: "center"
   },
   view7:{
    flex:1,
     backgroundColor:"white",
     alignItems: "center",
     justifyContent: "center"
   },
  text1:{
    color: "black",
    fontSize: 20,
    textTransform:"lowercase",
    fontStyle: 'italic',
    margin: 30

  },
  
  buttn:{
    marginBottom: 20,
    width: "40%",
    height: 40,
  }
});
