import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

function HomeCopy5(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bitmapStack}>
        <ImageBackground
          source={require("../assets/images/d9e1b2adf0cd5e43d0360715c09a0987bde5017a.png")}
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
        <View style={styles.group}>
          <View style={styles.adad}>
            <View style={styles.roswellChairRow}>
              <Text style={styles.roswellChair}>Roswell Chair</Text>
              <Text style={styles.style}>$153</Text>
            </View>
            <Text style={styles.chairs}>Chairs</Text>
          </View>
        </View>
        <View style={styles.buttonsMobileSolidTextSymbolSymbolTextSuccess}>
          <View style={styles.rectangle}>
            <View style={styles.group2}>
              <View style={styles.iconActionShoppingBasket24PxRow}>
                <View style={styles.iconActionShoppingBasket24Px}>
                  <Svg viewBox="0 0 20.84 17.98" style={styles.shape}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(116,138,213,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M20.84 7.56 L20.81 7.82 L18.41 16.60 L16.58 17.98 L4.26 17.98 L2.44 16.60 L0.04 7.82 C0.04 7.82 0.00 7.65 0.00 7.56 C0.00 7.04 0.95 6.61 0.95 6.61 L5.49 6.61 L9.63 0.41 C9.63 0.41 10.12 0.00 10.42 0.00 C10.72 0.00 11.21 0.40 11.21 0.40 L15.36 6.61 L19.89 6.61 L20.84 7.56 Z M7.77 6.61 L13.07 6.61 L10.42 2.63 L7.77 6.61 Z M18.66 8.51 L2.19 8.51 L4.27 16.10 L16.58 16.09 L18.66 8.51 Z M12.32 12.30 C12.32 13.34 11.46 14.19 10.42 14.19 C9.38 14.19 8.53 13.34 8.53 12.30 C8.53 11.25 9.38 10.40 10.42 10.40 C11.46 10.40 12.32 11.25 12.32 12.30 Z"
                    ></Path>
                  </Svg>
                </View>
                <Text style={styles.sellThisItem}>Sell this Item</Text>
              </View>
            </View>
          </View>
        </View>
        <Svg viewBox="0 0 45 45" style={styles.oval}>
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
    marginLeft: 888
  },
  iconNavigationClose24Px1: {
    height: 14,
    width: 14,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 1,
    marginLeft: 1
  },
  group: {
    position: "absolute",
    top: 632,
    left: 843,
    height: 180,
    width: 375,
    opacity: 1
  },
  adad: {
    height: 180,
    width: 375,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    backgroundColor: "rgba(255,255,255,1)"
  },
  roswellChair: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(60,61,61,1)",
    fontSize: 22
  },
  style: {
    opacity: 0.4551246279761905,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(1,32,92,1)",
    fontSize: 22,
    marginLeft: 136
  },
  roswellChairRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 33,
    marginLeft: 30,
    marginRight: 33
  },
  chairs: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(158,158,158,1)",
    fontSize: 14,
    marginTop: 3,
    marginLeft: 30
  },
  buttonsMobileSolidTextSymbolSymbolTextSuccess: {
    position: "absolute",
    top: 748,
    left: 843,
    height: 64,
    width: 375,
    opacity: 1
  },
  rectangle: {
    height: 64,
    width: 375,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "rgba(23,42,232,0.09932255244755245)"
  },
  group2: {
    height: 28,
    width: 156,
    opacity: 1,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 110
  },
  iconActionShoppingBasket24Px: {
    height: 18,
    width: 21,
    opacity: 1,
    marginTop: 5
  },
  shape: {
    height: 18,
    width: 21,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  sellThisItem: {
    height: 28,
    width: 122,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 28,
    color: "rgba(116,138,213,1)",
    fontSize: 16,
    letterSpacing: 0.4444444,
    marginLeft: 13
  },
  iconActionShoppingBasket24PxRow: {
    height: 28,
    flexDirection: "row",
    flex: 1
  },
  oval: {
    position: "absolute",
    height: 45,
    width: 45,
    top: 42,
    left: 873,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  bitmapStack: {
    width: 1218,
    height: 812,
    marginLeft: -843
  }
});

export default HomeCopy5;
