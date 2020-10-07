import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Uber(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.rect}>
        <Svg viewBox="-0 -0 19.96875 20" style={styles.path4}>
          <Path
            strokeWidth={0}
            fill="rgba(0,0,0,1)"
            fillOpacity={1}
            strokeOpacity={1}
            d="M9.97 0.00 C4.67 0.00 0.33 4.15 0.00 9.38 L6.84 9.38 L6.84 7.50 C6.84 7.16 7.12 6.88 7.47 6.88 L12.47 6.88 C12.81 6.88 13.09 7.16 13.09 7.50 L13.09 12.50 C13.09 12.85 12.81 13.13 12.47 13.13 L7.47 13.13 C7.12 13.13 6.84 12.85 6.84 12.50 L6.84 10.63 L0.00 10.63 C0.33 15.85 4.67 20.00 9.97 20.00 C15.48 20.00 19.97 15.51 19.97 10.00 C19.97 4.49 15.48 0.00 9.97 0.00 Z"
          ></Path>
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  rect: {
    width: 20,
    height: 20,
    opacity: 1,
    marginTop: 2,
    marginLeft: 2
  },
  path4: {
    width: 20,
    height: 20,
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});

export default Uber;
