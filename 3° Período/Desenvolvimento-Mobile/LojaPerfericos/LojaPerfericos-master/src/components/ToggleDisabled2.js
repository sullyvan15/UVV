import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function ToggleDisabled2(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.toggleDisabled1}>
        <View style={styles.toggleArea1}>
          <Svg
            viewBox="-0 -0 18.00000000000001 17.99999999999999"
            style={styles.toggle1}
          >
            <Path
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              d="M9.00 18.00 C13.97 18.00 18.00 13.97 18.00 9.00 C18.00 4.03 13.97 0.00 9.00 0.00 C4.03 0.00 0.00 4.03 0.00 9.00 C0.00 13.97 4.03 18.00 9.00 18.00 Z"
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
  toggleDisabled1: {
    width: 45,
    height: 20
  },
  toggleArea1: {
    width: 45,
    height: 20,
    backgroundColor: "rgba(174,184,192,1)",
    borderRadius: 10
  },
  toggle1: {
    width: 18,
    height: 18,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 1,
    marginLeft: 1
  }
});

export default ToggleDisabled2;
