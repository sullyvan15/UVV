import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import ToggleActive from "./ToggleActive";
import ToggleDisabled from "./ToggleDisabled";
import Svg, { Path } from "react-native-svg";

function CardNotification(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.notification}>
        <View style={styles.rectangle47Copy}>
          <Text style={styles.notification1}>Notification</Text>
          <View style={styles.allowNotificationDRow}>
            <Text style={styles.allowNotificationD}>
              Allow notification dots
            </Text>
            <ToggleActive style={styles.toggleActive}></ToggleActive>
          </View>
          <View style={styles.lightAlarmRow}>
            <Text style={styles.lightAlarm}>Light Alarm</Text>
            <ToggleDisabled style={styles.toggleDisabled}></ToggleDisabled>
          </View>
          <View style={styles.marketingPreferenceRow}>
            <Text style={styles.marketingPreference}>
              Marketing Preferences
            </Text>
            <View style={styles.toggleDisabled1}>
              <View style={styles.toggleArea}>
                <Svg
                  viewBox="-0 -0 18.00000000000001 18.89999999999999"
                  style={styles.toggle2}
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
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  notification: {
    width: 375,
    height: 199
  },
  rectangle47Copy: {
    width: 375,
    height: 199,
    backgroundColor: "rgba(255,255,255,1)"
  },
  notification1: {
    backgroundColor: "transparent",
    color: "rgba(88,80,79,1)",
    fontSize: 15,
    marginTop: 30,
    marginLeft: 20
  },
  allowNotificationD: {
    backgroundColor: "transparent",
    color: "rgba(174,184,192,1)",
    fontSize: 13,
    marginTop: 1
  },
  toggleActive: {
    width: 45,
    height: 20,
    backgroundColor: "transparent",
    marginLeft: 161
  },
  allowNotificationDRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20
  },
  lightAlarm: {
    backgroundColor: "transparent",
    color: "rgba(174,184,192,1)",
    fontSize: 13,
    marginTop: 1
  },
  toggleDisabled: {
    width: 45,
    height: 20,
    backgroundColor: "transparent",
    marginLeft: 224
  },
  lightAlarmRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 20,
    marginRight: 20
  },
  marketingPreference: {
    backgroundColor: "transparent",
    color: "rgba(174,184,192,1)",
    fontSize: 13,
    marginTop: 2
  },
  toggleDisabled1: {
    width: 45,
    height: 21,
    marginLeft: 161
  },
  toggleArea: {
    width: 45,
    height: 21,
    backgroundColor: "rgba(174,184,192,1)",
    borderRadius: 10
  },
  toggle2: {
    width: 18,
    height: 19,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 1,
    marginLeft: 1
  },
  marketingPreferenceRow: {
    height: 21,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 20,
    marginRight: 20
  }
});

export default CardNotification;
