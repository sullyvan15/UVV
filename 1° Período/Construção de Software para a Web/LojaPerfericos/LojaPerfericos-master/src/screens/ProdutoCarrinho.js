import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function ProdutoCarrinho(props) {
  return (
    <View style={styles.root}>
      <Text style={styles.leadName1}>Usuário</Text>
      <View style={styles.rectangle1}>
        <View style={styles.rectangle2}>
          <Text style={styles.fionnWhitehead1}>Fionn Whitehead</Text>
          <View style={styles.sep1Row}>
            <Text style={styles.sep1}>05 Sep 2017</Text>
            <Text style={styles.lost1}>Inativo</Text>
          </View>
        </View>
      </View>
      <View style={styles.rectangle3}></View>
      <View style={styles.rectangle4Stack}>
        <View style={styles.rectangle4}></View>
        <View style={styles.rectangle5}>
          <Text style={styles.aneurinBarnard1}>Aneurin Barnard</Text>
          <View style={styles.sep3Row}>
            <Text style={styles.sep3}>01 Set 2017</Text>
            <Text style={styles.won3}>Ativo</Text>
          </View>
          <Text style={styles.leeArmstrong1}>Lee Armstrong</Text>
        </View>
      </View>
      <View style={styles.text1Row}>
        <Text style={styles.text1}>Lista de usuário</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Inputs")}
          style={styles.button}
        >
          <Icon name="circle-with-plus" style={styles.icon}></Icon>
        </TouchableOpacity>
      </View>
      <View style={styles.sep2Row}>
        <Text style={styles.sep2}>05 Set 2017</Text>
        <Text style={styles.lost2}>Inativo</Text>
      </View>
      <View style={styles.aug1Row}>
        <Text style={styles.aug1}>25 Ago 2017</Text>
        <Text style={styles.won4}>Ativo</Text>
      </View>
      <Text style={styles.damienBonnard1}>Damien Bonnard</Text>
      <Text style={styles.jamesBloor1}>James Bloor</Text>
      <View style={styles.sep4Row}>
        <Text style={styles.sep4}>10 Sep 2017</Text>
        <Text style={styles.won1}>Ativo</Text>
      </View>
      <Text style={styles.won2}>Won</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  leadName1: {
    backgroundColor: "transparent",
    color: "rgba(119,119,119,1)",
    fontSize: 14,
    fontFamily: "montserrat-200",
    marginTop: 113,
    marginLeft: 25
  },
  rectangle1: {
    width: 374,
    height: 113,
    backgroundColor: "rgba(247,247,247,0.5675384963768116)",
    marginTop: 148,
    marginLeft: 6
  },
  rectangle2: {
    width: 374,
    height: 113,
    backgroundColor: "rgba(247,247,247,0.5675384963768116)"
  },
  fionnWhitehead1: {
    backgroundColor: "transparent",
    color: "rgba(65,65,65,1)",
    fontSize: 24,
    fontFamily: "montserrat-300",
    marginTop: 15,
    marginLeft: 13
  },
  sep1: {
    backgroundColor: "transparent",
    color: "rgba(65,65,65,1)",
    fontSize: 20,
    fontFamily: "montserrat-300"
  },
  lost1: {
    backgroundColor: "transparent",
    color: "rgba(208,67,84,1)",
    fontSize: 20,
    fontFamily: "montserrat-300",
    marginLeft: 8
  },
  sep1Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 17,
    marginRight: 167
  },
  rectangle3: {
    width: 375,
    height: 1,
    backgroundColor: "rgba(240,240,240,1)",
    marginTop: -229,
    marginLeft: 6
  },
  rectangle4: {
    top: 0,
    left: 0,
    width: 374,
    height: 113,
    backgroundColor: "rgba(247,247,247,0.5675384963768116)",
    position: "absolute"
  },
  rectangle5: {
    top: 0,
    left: 0,
    width: 564,
    height: 152,
    backgroundColor: "rgba(247,247,247,0.5675384963768116)",
    position: "absolute"
  },
  aneurinBarnard1: {
    backgroundColor: "transparent",
    color: "rgba(65,65,65,1)",
    fontSize: 24,
    fontFamily: "montserrat-300",
    marginTop: 15,
    marginLeft: 17
  },
  sep3: {
    backgroundColor: "transparent",
    color: "rgba(65,65,65,1)",
    fontSize: 20,
    fontFamily: "montserrat-300"
  },
  won3: {
    backgroundColor: "transparent",
    color: "rgba(124,203,31,1)",
    fontSize: 20,
    fontFamily: "montserrat-300",
    marginLeft: 17
  },
  sep3Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 17,
    marginRight: 374
  },
  leeArmstrong1: {
    backgroundColor: "transparent",
    color: "rgba(65,65,65,1)",
    fontSize: 24,
    fontFamily: "montserrat-300",
    marginTop: 60,
    marginLeft: 13
  },
  rectangle4Stack: {
    width: 564,
    height: 152,
    marginTop: 340,
    marginLeft: 6
  },
  text1: {
    backgroundColor: "transparent",
    color: "rgba(119,119,119,1)",
    fontSize: 20,
    fontFamily: "montserrat-300",
    letterSpacing: 2.32,
    marginTop: 3
  },
  button: {
    width: 26,
    height: 26,
    marginLeft: 111
  },
  icon: {
    color: "rgba(124,107,215,1)",
    fontSize: 26
  },
  text1Row: {
    height: 26,
    flexDirection: "row",
    marginTop: -603,
    marginLeft: 15,
    marginRight: 31
  },
  sep2: {
    backgroundColor: "transparent",
    color: "rgba(65,65,65,1)",
    fontSize: 20,
    fontFamily: "montserrat-300"
  },
  lost2: {
    backgroundColor: "transparent",
    color: "rgba(208,67,84,1)",
    fontSize: 20,
    fontFamily: "montserrat-300",
    marginLeft: 11
  },
  sep2Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 357,
    marginLeft: 25,
    marginRight: 162
  },
  aug1: {
    backgroundColor: "transparent",
    color: "rgba(65,65,65,1)",
    fontSize: 20,
    fontFamily: "montserrat-300"
  },
  won4: {
    backgroundColor: "transparent",
    color: "rgba(124,203,31,1)",
    fontSize: 20,
    fontFamily: "montserrat-300",
    marginLeft: 8
  },
  aug1Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 208,
    marginLeft: 19,
    marginRight: 182
  },
  damienBonnard1: {
    backgroundColor: "transparent",
    color: "rgba(65,65,65,1)",
    fontSize: 24,
    fontFamily: "montserrat-300",
    marginTop: -279,
    marginLeft: 19
  },
  jamesBloor1: {
    backgroundColor: "transparent",
    color: "rgba(65,65,65,1)",
    fontSize: 24,
    fontFamily: "montserrat-300",
    marginTop: -261,
    marginLeft: 23
  },
  sep4: {
    backgroundColor: "transparent",
    color: "rgba(65,65,65,1)",
    fontSize: 20,
    fontFamily: "montserrat-300"
  },
  won1: {
    backgroundColor: "transparent",
    color: "rgba(124,203,31,1)",
    fontSize: 20,
    fontFamily: "montserrat-300",
    marginLeft: 4
  },
  sep4Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 23,
    marginRight: 187
  },
  won2: {
    backgroundColor: "transparent",
    color: "rgba(124,203,31,1)",
    fontSize: 20,
    fontFamily: "montserrat-300",
    marginTop: 669,
    marginLeft: 125
  }
});

export default ProdutoCarrinho;
