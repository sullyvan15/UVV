import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function Offer1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.rectangle7}>
        <Image
          source={require("../assets/images/cef0ff46b1d880137b0301d5e25338af2907285c.png")}
          resizeMode="cover"
          style={styles.rectangle6}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  rectangle7: {
    width: 204,
    height: 105,
    backgroundColor: "transparent",
    opacity: 1,
    shadowOffset: {
      height: 4,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.09891280594405595)",
    shadowOpacity: 1,
    shadowRadius: 18
  },
  rectangle6: {
    backgroundColor: "transparent",
    opacity: 1,
    shadowOffset: {
      height: 4,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.09891280594405595)",
    shadowOpacity: 1,
    shadowRadius: 18,
    flex: 1
  }
});

export default Offer1;
