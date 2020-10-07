import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

function CardUpdatingPrivacy(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.updatingPrivacy}>
        <View style={styles.rectangle472}>
          <View style={styles.updatingPrivacy1}>
            <Text style={styles.updatingPrivacy2}>Updating Privacy</Text>
            <View style={styles.frequencyRow}>
              <Text style={styles.frequency}>Frequency:</Text>
              <Text style={styles.style10}>70%</Text>
            </View>
            <View style={styles.slider}>
              <View style={styles.rectangle2Stack}>
                <View style={styles.rectangle2}>
                  <View style={styles.rectangle21}></View>
                </View>
                <Svg viewBox="-0 -0 18 18" style={styles.oval4}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(11,154,245,1)"
                    d="M9.00 18.00 C13.97 18.00 18.00 13.97 18.00 9.00 C18.00 4.03 13.97 0.00 9.00 0.00 C4.03 0.00 0.00 4.03 0.00 9.00 C0.00 13.97 4.03 18.00 9.00 18.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-0 -0 10 10" style={styles.oval5}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(255,255,255,1)"
                    d="M5.00 10.00 C7.76 10.00 10.00 7.76 10.00 5.00 C10.00 2.24 7.76 0.00 5.00 0.00 C2.24 0.00 0.00 2.24 0.00 5.00 C0.00 7.76 2.24 10.00 5.00 10.00 Z"
                  ></Path>
                </Svg>
              </View>
            </View>
            <View style={styles.weekIntervalRow}>
              <Text style={styles.weekInterval}>Week Interval:</Text>
              <Text style={styles.monSun}>Mon - Sun</Text>
            </View>
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
  updatingPrivacy: {
    width: 375,
    height: 203
  },
  rectangle472: {
    width: 375,
    height: 203,
    backgroundColor: "rgba(255,255,255,1)"
  },
  updatingPrivacy1: {
    width: 335,
    height: 136,
    marginTop: 34,
    marginLeft: 20
  },
  updatingPrivacy2: {
    width: 163,
    height: 20,
    backgroundColor: "transparent",
    color: "rgba(88,80,79,1)",
    fontSize: 15
  },
  frequency: {
    backgroundColor: "transparent",
    color: "rgba(174,184,192,1)",
    fontSize: 13
  },
  style10: {
    backgroundColor: "transparent",
    color: "rgba(174,184,192,1)",
    fontSize: 13,
    marginLeft: 246
  },
  frequencyRow: {
    height: 13,
    flexDirection: "row",
    marginTop: 21,
    marginRight: 2
  },
  slider: {
    width: 335,
    height: 18,
    marginTop: 28
  },
  rectangle2: {
    top: 6,
    left: 0,
    width: 335,
    height: 5,
    backgroundColor: "rgba(216,216,216,0.36)",
    position: "absolute"
  },
  rectangle21: {
    width: 227,
    height: 5,
    backgroundColor: "rgba(11,154,245,1)"
  },
  oval4: {
    top: 0,
    left: 218,
    width: 18,
    height: 18,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  oval5: {
    top: 4,
    left: 222,
    width: 10,
    height: 10,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  rectangle2Stack: {
    width: 335,
    height: 18
  },
  weekInterval: {
    backgroundColor: "transparent",
    color: "rgba(174,184,192,1)",
    fontSize: 13
  },
  monSun: {
    backgroundColor: "transparent",
    color: "rgba(174,184,192,1)",
    fontSize: 13,
    marginLeft: 191
  },
  weekIntervalRow: {
    height: 13,
    flexDirection: "row",
    marginTop: 18,
    marginRight: 2
  }
});

export default CardUpdatingPrivacy;
