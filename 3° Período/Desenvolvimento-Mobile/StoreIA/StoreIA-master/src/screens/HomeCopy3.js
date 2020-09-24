import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

function HomeCopy3(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bitmapStack}>
        <ImageBackground
          source={require("../assets/images/5a10b5bc94a767151a21ab31367c777451c27860.png")}
          resizeMode="cover"
          style={styles.bitmap}
          imageStyle={styles.bitmap_imageStyle}
        >
          <View style={styles.iconNavigationClose24Px}>
            <Svg
              viewBox="0 0 13.73 13.73"
              style={styles.iconNavigationClose24Px1}
            >
              <Path
                strokeWidth={0}
                fill="rgba(250,120,120,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M13.43 0.32 C13.24 0.12 12.97 0.01 12.70 0.01 C12.42 0.01 12.16 0.12 11.96 0.32 L6.87 5.40 L1.77 0.30 C1.58 0.11 1.31 0.00 1.04 0.00 C0.76 0.00 0.50 0.11 0.30 0.30 C-0.10 0.71 -0.10 1.37 0.30 1.77 L5.40 6.87 L0.30 11.96 C-0.10 12.37 -0.10 13.02 0.30 13.43 C0.71 13.84 1.37 13.84 1.77 13.43 L6.87 8.34 L11.96 13.43 C12.37 13.84 13.02 13.84 13.43 13.43 C13.84 13.02 13.84 12.37 13.43 11.96 L8.34 6.87 L13.43 1.77 Z"
              ></Path>
            </Svg>
          </View>
        </ImageBackground>
        <View style={styles.group3}>
          <View style={styles.rectangle}>
            <View style={styles.group}>
              <Text style={styles.hangingLamp}>Hanging Lamp</Text>
              <Text style={styles.style}>$45</Text>
            </View>
          </View>
          <View style={styles.ovalCopyStack}>
            <Svg viewBox="0 0 30 30" style={styles.ovalCopy}>
              <Path
                strokeWidth={0}
                fill="rgba(216,216,216,1)"
                fillOpacity={0.3730933779761905}
                strokeOpacity={0.3730933779761905}
                d="M15.00 30.00 C23.28 30.00 30.00 23.28 30.00 15.00 C30.00 6.72 23.28 0.00 15.00 0.00 C6.72 0.00 0.00 6.72 0.00 15.00 C0.00 23.28 6.72 30.00 15.00 30.00 Z"
              ></Path>
            </Svg>
            <Svg viewBox="0 0 10 10" style={styles.oval}>
              <Path
                strokeWidth={0}
                fill="rgba(216,216,216,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M5.00 10.00 C7.76 10.00 10.00 7.76 10.00 5.00 C10.00 2.24 7.76 0.00 5.00 0.00 C2.24 0.00 0.00 2.24 0.00 5.00 C0.00 7.76 2.24 10.00 5.00 10.00 Z"
              ></Path>
            </Svg>
          </View>
        </View>
        <View style={styles.group3Copy}>
          <View style={styles.rectangle1}>
            <View style={styles.group1}>
              <Text style={styles.accentSofa}>Accent Sofa</Text>
              <Text style={styles.style1}>$153</Text>
            </View>
          </View>
          <View style={styles.ovalCopy1Stack}>
            <Svg viewBox="0 0 30 30" style={styles.ovalCopy1}>
              <Path
                strokeWidth={0}
                fill="rgba(216,216,216,1)"
                fillOpacity={0.3730933779761905}
                strokeOpacity={0.3730933779761905}
                d="M15.00 30.00 C23.28 30.00 30.00 23.28 30.00 15.00 C30.00 6.72 23.28 0.00 15.00 0.00 C6.72 0.00 0.00 6.72 0.00 15.00 C0.00 23.28 6.72 30.00 15.00 30.00 Z"
              ></Path>
            </Svg>
            <Svg viewBox="0 0 10 10" style={styles.oval1}>
              <Path
                strokeWidth={0}
                fill="rgba(216,216,216,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M5.00 10.00 C7.76 10.00 10.00 7.76 10.00 5.00 C10.00 2.24 7.76 0.00 5.00 0.00 C2.24 0.00 0.00 2.24 0.00 5.00 C0.00 7.76 2.24 10.00 5.00 10.00 Z"
              ></Path>
            </Svg>
          </View>
        </View>
        <View style={styles.group3Copy2}>
          <View style={styles.rectangle2}>
            <View style={styles.group2}>
              <Text style={styles.rosewellChair}>Rosewell Chair</Text>
              <Text style={styles.style2}>$153</Text>
            </View>
          </View>
          <View style={styles.ovalCopy2Stack}>
            <Svg viewBox="0 0 30 30" style={styles.ovalCopy2}>
              <Path
                strokeWidth={0}
                fill="rgba(216,216,216,1)"
                fillOpacity={0.3730933779761905}
                strokeOpacity={0.3730933779761905}
                d="M15.00 30.00 C23.28 30.00 30.00 23.28 30.00 15.00 C30.00 6.72 23.28 0.00 15.00 0.00 C6.72 0.00 0.00 6.72 0.00 15.00 C0.00 23.28 6.72 30.00 15.00 30.00 Z"
              ></Path>
            </Svg>
            <Svg viewBox="0 0 10 10" style={styles.oval2}>
              <Path
                strokeWidth={0}
                fill="rgba(216,216,216,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M5.00 10.00 C7.76 10.00 10.00 7.76 10.00 5.00 C10.00 2.24 7.76 0.00 5.00 0.00 C2.24 0.00 0.00 2.24 0.00 5.00 C0.00 7.76 2.24 10.00 5.00 10.00 Z"
              ></Path>
            </Svg>
          </View>
        </View>
        <Svg viewBox="0 0 45 45" style={styles.oval3}>
          <Path
            strokeWidth={0}
            fill="rgba(255,255,255,1)"
            fillOpacity={1}
            strokeOpacity={1}
            d="M22.50 45.00 C34.93 45.00 45.00 34.93 45.00 22.50 C45.00 10.07 34.93 0.00 22.50 0.00 C10.07 0.00 0.00 10.07 0.00 22.50 C0.00 34.93 10.07 45.00 22.50 45.00 Z"
          ></Path>
        </Svg>
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
  iconNavigationClose24Px: {
    height: 15,
    width: 15,
    opacity: 1,
    marginTop: 57,
    marginLeft: 728
  },
  iconNavigationClose24Px1: {
    height: 14,
    width: 14,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 1,
    marginLeft: 1
  },
  group3: {
    position: "absolute",
    top: 73,
    left: 838,
    height: 110,
    width: 176,
    opacity: 1
  },
  rectangle: {
    height: 77,
    width: 160,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.6891508556547619)",
    marginLeft: 16
  },
  group: {
    height: 45,
    width: 107,
    opacity: 1,
    marginTop: 15,
    marginLeft: 18
  },
  hangingLamp: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(60,61,61,1)",
    fontSize: 15
  },
  style: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(165,121,74,1)",
    fontSize: 18,
    marginTop: 3
  },
  ovalCopy: {
    position: "absolute",
    height: 30,
    width: 30,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval: {
    position: "absolute",
    height: 10,
    width: 10,
    top: 10,
    left: 10,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopyStack: {
    width: 30,
    height: 30,
    marginTop: 3
  },
  group3Copy: {
    position: "absolute",
    top: 235,
    left: 700,
    height: 116,
    width: 175,
    opacity: 1
  },
  rectangle1: {
    height: 77,
    width: 160,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.6891508556547619)",
    marginLeft: 15
  },
  group1: {
    height: 45,
    width: 89,
    opacity: 1,
    marginTop: 15,
    marginLeft: 18
  },
  accentSofa: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(60,61,61,1)",
    fontSize: 15
  },
  style1: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(147,143,135,1)",
    fontSize: 18,
    marginTop: 3
  },
  ovalCopy1: {
    position: "absolute",
    height: 30,
    width: 30,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval1: {
    position: "absolute",
    height: 10,
    width: 10,
    top: 10,
    left: 9,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy1Stack: {
    width: 30,
    height: 30,
    marginTop: 9
  },
  group3Copy2: {
    position: "absolute",
    top: 394,
    left: 817,
    height: 118,
    width: 175,
    opacity: 1
  },
  rectangle2: {
    height: 77,
    width: 160,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.6891508556547619)"
  },
  group2: {
    height: 45,
    width: 108,
    opacity: 1,
    marginTop: 15,
    marginLeft: 18
  },
  rosewellChair: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(60,61,61,1)",
    fontSize: 15
  },
  style2: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(118,134,176,1)",
    fontSize: 18,
    marginTop: 3
  },
  ovalCopy2: {
    position: "absolute",
    height: 30,
    width: 30,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval2: {
    position: "absolute",
    height: 10,
    width: 10,
    top: 10,
    left: 9,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy2Stack: {
    width: 30,
    height: 30,
    marginTop: 11,
    marginLeft: 145
  },
  oval3: {
    position: "absolute",
    height: 45,
    width: 45,
    top: 42,
    left: 713,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  bitmapStack: {
    width: 1218,
    height: 812,
    marginLeft: -683
  }
});

export default HomeCopy3;
