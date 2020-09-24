import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function MaterialHeader12(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/Versao_horizontal_negativo_PNG-01.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 4,
    elevation: 3,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  image: {
    width: 112,
    height: 36,
    opacity: 0.59,
    marginTop: 24
  }
});

export default MaterialHeader12;
