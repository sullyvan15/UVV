import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Card7ProtectionPrivacy1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.protectionPrivacy1}>
        <View style={styles.rectangle473}>
          <Text style={styles.protectionAndPriva1}>Proteção e Privacidade</Text>
          <Text style={styles.helpProtectYourWe1}>
            Ajude a proteger seu site e seus usuários{"\n"}com termos claros e
            justos do site e{"\n"}condições. Estes termos e condições{"\n"}para
            um site, estabeleça questões importantes, como uso aceitável,
            privacidade, cookies, registro e senhas, propriedade intelectual,
            {"\n"}links para outros sites, rescisão e isenção de
            responsabilidade.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  protectionPrivacy1: {
    width: 375,
    height: 278
  },
  rectangle473: {
    width: 375,
    height: 278,
    backgroundColor: "rgba(255,255,255,1)"
  },
  protectionAndPriva1: {
    backgroundColor: "transparent",
    color: "rgba(88,80,79,1)",
    fontSize: 15,
    marginTop: 26,
    marginLeft: 20
  },
  helpProtectYourWe1: {
    width: 335,
    height: 184,
    backgroundColor: "transparent",
    color: "rgba(174,184,192,1)",
    fontSize: 16,
    lineHeight: 23,
    marginTop: 24,
    marginLeft: 20
  }
});

export default Card7ProtectionPrivacy1;
