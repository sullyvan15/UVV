import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function ToggleDisabled1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.toggleDisabled3}>
        <View style={styles.toggleArea3}>
          <Svg
            viewBox="-0 -0 18.00000000000001 18.89999999999999"
            style={styles.toggle3}
          >
            <Path
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              d="M9.00 18.90 C13.97 18.90 18.00 14.67 18.00 9.45 C18.00 4.23 13.97 0.00 9.00 0.00 C4.03 0.00 0.00 4.23 0.00 9.45 C0.00 14.67 4.03 18.90 9.00 18.90 Z"
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
  toggleDisabled3: {
    width: 45,
    height: 21
  },
  toggleArea3: {
    width: 45,
    height: 21,
    backgroundColor: "rgba(174,184,192,1)",
    borderRadius: 10
  },
  toggle3: {
    width: 18,
    height: 19,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 1,
    marginLeft: 1
  }
});

export default ToggleDisabled1;
