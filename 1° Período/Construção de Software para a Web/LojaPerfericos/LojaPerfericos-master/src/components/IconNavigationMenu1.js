import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconNavigationMenu1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.hamburgerIcon}>
        <View style={styles.fill3Row}>
          <Svg
            viewBox="-0 -0 4.869565217391305 2.428571428571429"
            style={styles.fill3}
          >
            <Path
              strokeWidth={0}
              fill="rgba(173,183,191,1)"
              d="M0.00 2.43 L4.87 2.43 L4.87 0.00 L0.00 0.00 Z"
            ></Path>
          </Svg>
          <Svg
            viewBox="-0 -0 19.47826086956522 2.428571428571429"
            style={styles.fill2}
          >
            <Path
              strokeWidth={0}
              fill="rgba(173,183,191,1)"
              d="M0.00 2.43 L19.48 2.43 L19.48 0.00 L0.00 0.00 Z"
            ></Path>
          </Svg>
        </View>
        <View style={styles.fill4Row}>
          <Svg
            viewBox="-0 -0 4.869565217391305 2.428571428571429"
            style={styles.fill4}
          >
            <Path
              strokeWidth={0}
              fill="rgba(173,183,191,1)"
              d="M0.00 2.43 L4.87 2.43 L4.87 0.00 L0.00 0.00 Z"
            ></Path>
          </Svg>
          <Svg
            viewBox="-0 -0 19.47826086956522 2.428571428571429"
            style={styles.fill1}
          >
            <Path
              strokeWidth={0}
              fill="rgba(173,183,191,1)"
              d="M0.00 2.43 L19.48 2.43 L19.48 0.00 L0.00 0.00 Z"
            ></Path>
          </Svg>
        </View>
        <View style={styles.fill5Row}>
          <Svg
            viewBox="-0 -0 4.869565217391305 2.428571428571427"
            style={styles.fill5}
          >
            <Path
              strokeWidth={0}
              fill="rgba(173,183,191,1)"
              d="M0.00 2.43 L4.87 2.43 L4.87 0.00 L0.00 0.00 Z"
            ></Path>
          </Svg>
          <Svg
            viewBox="-0 -0 19.47826086956522 2.428571428571427"
            style={styles.fill6}
          >
            <Path
              strokeWidth={0}
              fill="rgba(173,183,191,1)"
              d="M0.00 2.43 L19.48 2.43 L19.48 0.00 L0.00 0.00 Z"
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
  hamburgerIcon: {
    width: 28,
    height: 17
  },
  fill3: {
    width: 5,
    height: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill2: {
    width: 19,
    height: 2,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 4
  },
  fill3Row: {
    height: 2,
    flexDirection: "row"
  },
  fill4: {
    width: 5,
    height: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill1: {
    width: 19,
    height: 2,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 4
  },
  fill4Row: {
    height: 2,
    flexDirection: "row",
    marginTop: 5
  },
  fill5: {
    width: 5,
    height: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill6: {
    width: 19,
    height: 2,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 4
  },
  fill5Row: {
    height: 2,
    flexDirection: "row",
    marginTop: 6
  }
});

export default IconNavigationMenu1;
