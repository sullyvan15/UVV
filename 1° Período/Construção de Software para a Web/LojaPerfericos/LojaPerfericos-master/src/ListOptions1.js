import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function ListOptions1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.rectangle1}>
        <View style={styles.earthRow}>
          <Image
            source={require("../assets/images/2d4539da0785a4bb81c8293a8a5a837070cc51c8.png")}
            resizeMode="cover"
            style={styles.earth}
          ></Image>
          <View style={styles.dribbleInc1Column}>
            <Text style={styles.dribbleInc1}>Dribble Inc.</Text>
            <Text style={styles.payment1}>Payment</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  rectangle1: {
    width: 375,
    height: 96,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 8,
    shadowOffset: {
      height: 4,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.0396361451048951)",
    shadowOpacity: 1,
    shadowRadius: 21
  },
  earth: {
    width: 56,
    height: 56,
    backgroundColor: "transparent",
    opacity: 1
  },
  dribbleInc1: {
    backgroundColor: "transparent",
    color: "rgba(66,66,66,1)",
    opacity: 1,
    fontSize: 17
  },
  payment1: {
    width: 183,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(66,66,66,1)",
    opacity: 0.8,
    fontSize: 13,
    marginTop: 10
  },
  dribbleInc1Column: {
    width: 183,
    marginLeft: 19,
    marginTop: 5,
    marginBottom: 8
  },
  earthRow: {
    height: 56,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 22,
    marginRight: 95
  }
});

export default ListOptions1;
