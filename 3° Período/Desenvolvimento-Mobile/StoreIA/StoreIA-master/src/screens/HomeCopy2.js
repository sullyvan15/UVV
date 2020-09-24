import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

function HomeCopy2(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bitmapStack}>
        <ImageBackground
          source={require("../assets/images/5a10b5bc94a767151a21ab31367c777451c27860.png")}
          resizeMode="cover"
          style={styles.bitmap}
          imageStyle={styles.bitmap_imageStyle}
        >
          <View style={styles.buttonsMobileSolidTextSymbolSymbolTextSuccess}>
            <View style={styles.rectangle}>
              <View style={styles.group2}>
                <View style={styles.iconNavigationFaceid24PxRow}>
                  <View style={styles.iconNavigationFaceid24Px}>
                    <Svg viewBox="0 0 16.5 16.5" style={styles.path}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(116,138,213,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M1.83 11.92 L1.83 13.75 L2.75 14.67 L4.58 14.67 C4.58 14.67 5.50 15.08 5.50 15.58 C5.50 16.09 4.58 16.50 4.58 16.50 L1.83 16.50 L0.00 14.67 L0.00 11.92 C0.00 11.92 0.41 11.00 0.92 11.00 C1.42 11.00 1.83 11.92 1.83 11.92 Z M1.83 4.58 C1.83 4.58 1.42 5.50 0.92 5.50 C0.41 5.50 0.00 4.58 0.00 4.58 L0.00 1.83 L1.83 0.00 L4.58 0.00 C4.58 0.00 5.50 0.41 5.50 0.92 C5.50 1.42 4.58 1.83 4.58 1.83 L2.75 1.83 L1.83 2.75 Z M16.50 1.83 L16.50 4.58 C16.50 4.58 16.09 5.50 15.58 5.50 C15.08 5.50 14.67 4.58 14.67 4.58 L14.67 2.75 L13.75 1.83 L11.92 1.83 C11.92 1.83 11.00 1.42 11.00 0.92 C11.00 0.41 11.92 0.00 11.92 0.00 L14.67 0.00 L16.50 1.83 Z M14.67 11.92 C14.67 11.92 15.08 11.00 15.58 11.00 C16.09 11.00 16.50 11.92 16.50 11.92 L16.50 14.67 L14.67 16.50 L11.92 16.50 C11.92 16.50 11.00 16.09 11.00 15.58 C11.00 15.08 11.92 14.67 11.92 14.67 L13.75 14.67 L14.67 13.75 Z M11.92 8.25 C11.92 10.28 10.28 11.92 8.25 11.92 C6.22 11.92 4.58 10.28 4.58 8.25 C4.58 6.22 6.22 4.58 8.25 4.58 C10.28 4.58 11.92 6.22 11.92 8.25 Z M10.08 8.25 C10.08 7.24 9.26 6.42 8.25 6.42 C7.24 6.42 6.42 7.24 6.42 8.25 C6.42 9.26 7.24 10.08 8.25 10.08 C9.26 10.08 10.08 9.26 10.08 8.25 Z"
                      ></Path>
                    </Svg>
                  </View>
                  <Text style={styles.startScan}>Start Scan</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.group}>
          <View style={styles.ovalStack}>
            <Svg viewBox="0 0 45 45" style={styles.oval}>
              <Path
                strokeWidth={0}
                fill="rgba(255,255,255,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M22.50 45.00 C34.93 45.00 45.00 34.93 45.00 22.50 C45.00 10.07 34.93 0.00 22.50 0.00 C10.07 0.00 0.00 10.07 0.00 22.50 C0.00 34.93 10.07 45.00 22.50 45.00 Z"
              ></Path>
            </Svg>
            <View style={styles.iconActionAccountCircle24PxCopy}>
              <Svg
                viewBox="0 0 16.23 15.82"
                style={styles.iconNavigationArrowBackward24Px}
              >
                <Path
                  strokeWidth={0}
                  fill="rgba(116,138,213,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M15.19 6.87 C15.76 6.87 16.23 7.34 16.23 7.91 C16.23 8.48 15.76 8.95 15.19 8.95 L3.55 8.95 L8.63 14.04 C9.03 14.45 9.03 15.11 8.63 15.51 C8.43 15.71 8.17 15.82 7.89 15.82 C7.62 15.82 7.35 15.71 7.16 15.51 L0.30 8.64 C-0.10 8.23 -0.10 7.58 0.30 7.17 L7.17 0.30 C7.58 -0.10 8.23 -0.10 8.64 0.30 C9.04 0.71 9.04 1.38 8.64 1.78 L3.55 6.87 Z"
                ></Path>
              </Svg>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(249,250,255,1)",
    flex: 1
  },
  bitmap: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 812,
    width: 1218,
    backgroundColor: "transparent"
  },
  bitmap_imageStyle: {
    opacity: 1
  },
  buttonsMobileSolidTextSymbolSymbolTextSuccess: {
    height: 64,
    width: 375,
    opacity: 1,
    marginTop: 748,
    marginLeft: 683
  },
  rectangle: {
    height: 64,
    width: 375,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "rgba(226,229,253,1)"
  },
  group2: {
    height: 28,
    width: 116,
    opacity: 1,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 130
  },
  iconNavigationFaceid24Px: {
    height: 18,
    width: 18,
    opacity: 1,
    marginTop: 5
  },
  path: {
    height: 17,
    width: 17,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 1,
    marginLeft: 1
  },
  startScan: {
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 28,
    textAlign: "center",
    color: "rgba(116,138,213,1)",
    fontSize: 16,
    letterSpacing: 0.4444444,
    marginLeft: 13
  },
  iconNavigationFaceid24PxRow: {
    height: 28,
    flexDirection: "row",
    flex: 1,
    marginRight: 11
  },
  group: {
    position: "absolute",
    top: 42,
    left: 713,
    height: 45,
    width: 45,
    opacity: 1
  },
  oval: {
    position: "absolute",
    height: 45,
    width: 45,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  iconActionAccountCircle24PxCopy: {
    position: "absolute",
    top: 14,
    left: 14,
    height: 17,
    width: 17,
    opacity: 1
  },
  iconNavigationArrowBackward24Px: {
    height: 16,
    width: 16,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 1
  },
  ovalStack: {
    width: 45,
    height: 45
  },
  bitmapStack: {
    width: 1218,
    height: 812,
    marginLeft: -683
  }
});

export default HomeCopy2;
