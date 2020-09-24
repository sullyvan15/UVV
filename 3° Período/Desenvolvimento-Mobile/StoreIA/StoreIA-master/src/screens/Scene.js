import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function Scene(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/5a10b5bc94a767151a21ab31367c777451c27860.png")}
        resizeMode="cover"
        style={styles.bitmap}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  bitmap: {
    height: 812,
    width: 1218,
    opacity: 1,
    backgroundColor: "transparent"
  }
});

export default Scene;
