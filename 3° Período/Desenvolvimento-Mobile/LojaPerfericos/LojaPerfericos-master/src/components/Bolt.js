import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Bolt(props) {
  return (
    <View style={[styles.root, props.style]}>
      <Svg viewBox="-0 -0 12.04640507365922 20" style={styles.path5}>
        <Path
          strokeWidth={0}
          fill="rgba(251,105,105,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M6.93 10.76 L2.78 10.76 L5.30 5.85 L5.30 9.33 L9.29 9.33 L6.93 14.05 Z M6.41 19.56 L11.97 8.45 L11.27 7.33 L7.30 7.33 L7.30 0.79 L5.84 0.43 L0.09 11.62 L0.78 12.76 L4.93 12.76 L4.93 19.22 L6.41 19.56 Z"
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  path5: {
    width: 12,
    height: 20,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 2,
    marginLeft: 6
  }
});

export default Bolt;
