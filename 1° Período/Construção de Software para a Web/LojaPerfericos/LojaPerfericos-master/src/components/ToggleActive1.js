import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function ToggleActive1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.toggleActive}>
        <View style={styles.group16}>
          <View style={styles.toggleArea2}>
            <Svg viewBox="-0 -0 18 17.99999999999999" style={styles.toggle2}>
              <Path
                strokeWidth={0}
                fill="rgba(255,255,255,1)"
                d="M9.00 18.00 C13.97 18.00 18.00 13.97 18.00 9.00 C18.00 4.03 13.97 0.00 9.00 0.00 C4.03 0.00 0.00 4.03 0.00 9.00 C0.00 13.97 4.03 18.00 9.00 18.00 Z"
              ></Path>
            </Svg>
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
  toggleActive: {
    width: 45,
    height: 20
  },
  group16: {
    width: 45,
    height: 20
  },
  toggleArea2: {
    width: 45,
    height: 20,
    backgroundColor: "rgba(124,107,215,1)",
    borderRadius: 10
  },
  toggle2: {
    width: 18,
    height: 18,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 1,
    marginLeft: 26
  }
});

export default ToggleActive1;
