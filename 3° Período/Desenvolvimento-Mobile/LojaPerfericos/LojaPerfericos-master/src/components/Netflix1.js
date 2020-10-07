import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Netflix1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.style8}>
        <View style={styles.group1Stack}>
          <View style={styles.group1}>
            <View style={styles.rectangle5Row}>
              <View style={styles.rectangle5}></View>
              <View style={styles.rectangle4}></View>
            </View>
          </View>
          <Svg viewBox="-0 -0 11.25 20" style={styles.path3}>
            <Path
              strokeWidth={0}
              fill="rgba(244,67,54,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M11.25 20.00 L7.50 20.00 L0.00 0.00 L3.75 0.00 L11.25 20.00 Z"
            ></Path>
          </Svg>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  style8: {
    width: 11,
    height: 20,
    opacity: 1,
    marginTop: 2,
    marginLeft: 6
  },
  group1: {
    top: 0,
    left: 0,
    width: 11,
    height: 20,
    position: "absolute",
    opacity: 1,
    flexDirection: "row"
  },
  rectangle5: {
    width: 4,
    height: 20,
    backgroundColor: "rgba(211,47,47,1)",
    opacity: 1
  },
  rectangle4: {
    width: 4,
    height: 20,
    backgroundColor: "rgba(211,47,47,1)",
    opacity: 1,
    marginLeft: 4
  },
  rectangle5Row: {
    height: 20,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  path3: {
    top: 0,
    left: 0,
    width: 11,
    height: 20,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  group1Stack: {
    width: 11,
    height: 20
  }
});

export default Netflix1;
