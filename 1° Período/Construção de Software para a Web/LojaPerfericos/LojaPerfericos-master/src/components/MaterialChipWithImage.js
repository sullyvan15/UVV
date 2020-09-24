import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function MaterialChipWithImage(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/cardImage.png")}
        style={styles.leftImage}
      ></Image>
      <Text style={styles.chipText}>Example Chip</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(230,230,230)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 50
  },
  leftImage: {
    width: 32,
    height: 32,
    backgroundColor: "#CCC",
    borderRadius: 16
  },
  chipText: {
    color: "rgba(0,0,0,0.87)",
    paddingRight: 12,
    paddingLeft: 8,
    fontSize: 13
  }
});

export default MaterialChipWithImage;
