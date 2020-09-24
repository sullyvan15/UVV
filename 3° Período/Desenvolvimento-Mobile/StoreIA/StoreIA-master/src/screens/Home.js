import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Svg, { Path } from "react-native-svg";

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectangleStack}>
        <View style={styles.rectangle}>
          <View style={styles.whatItemAreYouLoRow}>
            <Text style={styles.whatItemAreYouLo}>
              What item are you {"\n"}looking for?
            </Text>
            <View style={styles.iconActionAccountCircle24Px}>
              <Svg viewBox="0 0 17.71 17.71" style={styles.path}>
                <Path
                  strokeWidth={0}
                  fill="rgba(71,71,71,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M7.63 0.00 C11.84 0.00 15.26 3.42 15.26 7.63 C15.26 9.16 13.97 11.86 13.97 11.86 L13.79 12.13 L13.69 12.25 L17.41 15.97 L17.57 17.21 L17.50 17.31 L17.42 17.40 C17.42 17.40 16.96 17.71 16.69 17.71 C16.47 17.71 16.07 17.50 16.07 17.50 L15.97 17.41 L12.25 13.69 L12.13 13.78 L8.28 15.23 L7.96 15.25 L7.63 15.25 C7.63 15.25 0.00 11.83 0.00 7.63 C0.00 3.42 3.42 0.00 7.63 0.00 Z M7.63 2.04 C4.54 2.04 2.04 4.55 2.04 7.63 C2.04 10.71 4.54 13.22 7.63 13.22 C10.71 13.22 13.21 10.71 13.21 7.63 C13.21 4.55 10.71 2.04 7.63 2.04 Z"
                ></Path>
              </Svg>
            </View>
          </View>
          <View style={styles.chairsRow}>
            <Text style={styles.chairs}>Chairs</Text>
            <Text style={styles.sofas}>Sofas</Text>
            <Text style={styles.tables}>Tables</Text>
            <Text style={styles.lamps}>Lamps</Text>
          </View>
          <Svg viewBox="0 0 5 5" style={styles.oval}>
            <Path
              strokeWidth={0}
              fill="rgba(61,60,60,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M2.50 5.00 C3.88 5.00 5.00 3.88 5.00 2.50 C5.00 1.12 3.88 0.00 2.50 0.00 C1.12 0.00 0.00 1.12 0.00 2.50 C0.00 3.88 1.12 5.00 2.50 5.00 Z"
            ></Path>
          </Svg>
          <View style={styles.group9}>
            <View style={styles.group3Row}>
              <View style={styles.group3}>
                <View style={styles.rosswellBg}>
                  <Image
                    source={require("../assets/images/eab5b69b34ad01c699a5ff9b5e954c27f51c1ff0.png")}
                    resizeMode="cover"
                    style={styles.rosswellImage}
                  ></Image>
                  <View style={styles.group}>
                    <Text style={styles.roswell}>Roswell</Text>
                    <Text style={styles.style}>$50</Text>
                  </View>
                </View>
              </View>
              <View style={styles.group4}>
                <View style={styles.rectangleCopy}>
                  <Image
                    source={require("../assets/images/441583d2823c85945b7e0d68bad9f43163ec0dbc.png")}
                    resizeMode="cover"
                    style={styles.minimal1}
                  ></Image>
                  <View style={styles.groupCopy2}>
                    <Text style={styles.minimal}>Minimal</Text>
                    <Text style={styles.style2}>$42</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.group5Row}>
              <View style={styles.group5}>
                <View style={styles.productBg}>
                  <Image
                    source={require("../assets/images/db764e5022d4ed8e0fa8647ab592e7b37a3de6e5.png")}
                    resizeMode="cover"
                    style={styles.productImage}
                  ></Image>
                  <View style={styles.group1}>
                    <Text style={styles.lounge}>Lounge</Text>
                    <Text style={styles.style1}>$35</Text>
                  </View>
                </View>
              </View>
              <View style={styles.group6}>
                <View style={styles.rectangleCopy3}>
                  <Image
                    source={require("../assets/images/706a412cd7a9aded0ff0fc7ab629a4c2bc1f3504.png")}
                    resizeMode="cover"
                    style={styles.velvet1}
                  ></Image>
                  <View style={styles.groupCopy}>
                    <Text style={styles.velvet}>Velvet</Text>
                    <Text style={styles.style3}>$53</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.buttonsMobileSolidTextSymbolSymbolTextSuccess}>
            <View style={styles.rectangle1}>
              <View style={styles.group2}>
                <View style={styles.iconNavigationFaceid24PxRow}>
                  <View style={styles.iconNavigationFaceid24Px}>
                    <Svg viewBox="0 0 16.5 16.5" style={styles.path1}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(116,138,213,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M1.83 11.92 L1.83 13.75 L2.75 14.67 L4.58 14.67 C4.58 14.67 5.50 15.08 5.50 15.58 C5.50 16.09 4.58 16.50 4.58 16.50 L1.83 16.50 L0.00 14.67 L0.00 11.92 C0.00 11.92 0.41 11.00 0.92 11.00 C1.42 11.00 1.83 11.92 1.83 11.92 Z M1.83 4.58 C1.83 4.58 1.42 5.50 0.92 5.50 C0.41 5.50 0.00 4.58 0.00 4.58 L0.00 1.83 L1.83 0.00 L4.58 0.00 C4.58 0.00 5.50 0.41 5.50 0.92 C5.50 1.42 4.58 1.83 4.58 1.83 L2.75 1.83 L1.83 2.75 Z M16.50 1.83 L16.50 4.58 C16.50 4.58 16.09 5.50 15.58 5.50 C15.08 5.50 14.67 4.58 14.67 4.58 L14.67 2.75 L13.75 1.83 L11.92 1.83 C11.92 1.83 11.00 1.42 11.00 0.92 C11.00 0.41 11.92 0.00 11.92 0.00 L14.67 0.00 L16.50 1.83 Z M14.67 11.92 C14.67 11.92 15.08 11.00 15.58 11.00 C16.09 11.00 16.50 11.92 16.50 11.92 L16.50 14.67 L14.67 16.50 L11.92 16.50 C11.92 16.50 11.00 16.09 11.00 15.58 C11.00 15.08 11.92 14.67 11.92 14.67 L13.75 14.67 L14.67 13.75 Z M11.92 8.25 C11.92 10.28 10.28 11.92 8.25 11.92 C6.22 11.92 4.58 10.28 4.58 8.25 C4.58 6.22 6.22 4.58 8.25 4.58 C10.28 4.58 11.92 6.22 11.92 8.25 Z M10.08 8.25 C10.08 7.24 9.26 6.42 8.25 6.42 C7.24 6.42 6.42 7.24 6.42 8.25 C6.42 9.26 7.24 10.08 8.25 10.08 C9.26 10.08 10.08 9.26 10.08 8.25 Z"
                      ></Path>
                    </Svg>
                  </View>
                  <Text style={styles.text}>Scan My Room</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.kit}>Kit</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(249,250,255,1)",
    flex: 1
  },
  rectangle: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 812,
    width: 375,
    backgroundColor: "rgba(249,250,255,1)"
  },
  whatItemAreYouLo: {
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 31,
    color: "rgba(61,60,60,1)",
    fontSize: 24
  },
  iconActionAccountCircle24Px: {
    height: 19,
    width: 19,
    opacity: 1,
    marginLeft: 94,
    marginTop: 9
  },
  path: {
    height: 18,
    width: 18,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 1,
    marginLeft: 1
  },
  whatItemAreYouLoRow: {
    height: 62,
    flexDirection: "row",
    marginTop: 42,
    marginLeft: 30,
    marginRight: 30
  },
  chairs: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(61,60,60,1)",
    fontSize: 15
  },
  sofas: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(187,187,187,1)",
    fontSize: 15,
    marginLeft: 43
  },
  tables: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(187,187,187,1)",
    fontSize: 15,
    marginLeft: 44
  },
  lamps: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(187,187,187,1)",
    fontSize: 15,
    marginLeft: 47
  },
  chairsRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 39,
    marginLeft: 30,
    marginRight: 52
  },
  oval: {
    height: 5,
    width: 5,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 5,
    marginLeft: 48
  },
  group9: {
    height: 496,
    width: 315,
    opacity: 1,
    marginTop: 31,
    marginLeft: 30
  },
  group3: {
    height: 236,
    width: 144,
    opacity: 1
  },
  rosswellBg: {
    height: 236,
    width: 144,
    borderRadius: 16,
    backgroundColor: "rgba(222,230,225,1)"
  },
  rosswellImage: {
    height: 108,
    width: 99,
    opacity: 1,
    backgroundColor: "transparent",
    marginTop: 38,
    marginLeft: 24
  },
  group: {
    height: 45,
    width: 57,
    opacity: 1,
    marginTop: 27,
    marginLeft: 18
  },
  roswell: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(60,61,61,1)",
    fontSize: 15
  },
  style: {
    opacity: 0.4551246279761905,
    backgroundColor: "transparent",
    color: "rgba(44,153,59,1)",
    fontSize: 18,
    marginTop: 3
  },
  group4: {
    height: 236,
    width: 144,
    opacity: 1,
    marginLeft: 27
  },
  rectangleCopy: {
    height: 236,
    width: 144,
    borderRadius: 16,
    backgroundColor: "rgba(229,229,229,1)"
  },
  minimal1: {
    height: 121,
    width: 84,
    opacity: 1,
    backgroundColor: "transparent",
    marginTop: 38,
    marginLeft: 29
  },
  groupCopy2: {
    height: 45,
    width: 58,
    opacity: 1,
    marginTop: 14,
    marginLeft: 18
  },
  minimal: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(60,61,61,1)",
    fontSize: 15
  },
  style2: {
    opacity: 0.4551246279761905,
    backgroundColor: "transparent",
    color: "rgba(60,61,61,1)",
    fontSize: 18,
    marginTop: 3
  },
  group3Row: {
    height: 236,
    flexDirection: "row"
  },
  group5: {
    height: 236,
    width: 144,
    opacity: 1
  },
  productBg: {
    height: 236,
    width: 144,
    borderRadius: 16,
    backgroundColor: "rgba(217,220,247,1)"
  },
  productImage: {
    height: 95,
    width: 99,
    opacity: 1,
    backgroundColor: "transparent",
    marginTop: 45,
    marginLeft: 21
  },
  group1: {
    height: 45,
    width: 56,
    opacity: 1,
    marginTop: 33,
    marginLeft: 18
  },
  lounge: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(60,61,61,1)",
    fontSize: 15
  },
  style1: {
    opacity: 0.4551246279761905,
    backgroundColor: "transparent",
    color: "rgba(1,32,92,1)",
    fontSize: 18,
    marginTop: 3
  },
  group6: {
    height: 236,
    width: 144,
    opacity: 1,
    marginLeft: 27
  },
  rectangleCopy3: {
    height: 236,
    width: 144,
    borderRadius: 14,
    backgroundColor: "rgba(235,230,228,1)"
  },
  velvet1: {
    height: 121,
    width: 86,
    opacity: 1,
    backgroundColor: "transparent",
    marginTop: 32,
    marginLeft: 29
  },
  groupCopy: {
    height: 45,
    width: 49,
    opacity: 1,
    marginTop: 20,
    marginLeft: 18
  },
  velvet: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(60,61,61,1)",
    fontSize: 15
  },
  style3: {
    opacity: 0.4551246279761905,
    backgroundColor: "transparent",
    color: "rgba(195,92,92,1)",
    fontSize: 18,
    marginTop: 3
  },
  group5Row: {
    height: 236,
    flexDirection: "row",
    marginTop: 24
  },
  buttonsMobileSolidTextSymbolSymbolTextSuccess: {
    height: 64,
    width: 375,
    opacity: 1,
    marginTop: 48
  },
  rectangle1: {
    height: 64,
    width: 375,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "rgba(23,42,232,0.09932255244755245)"
  },
  group2: {
    height: 28,
    width: 155,
    opacity: 1,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 110
  },
  iconNavigationFaceid24Px: {
    height: 18,
    width: 18,
    opacity: 1,
    marginTop: 5
  },
  path1: {
    height: 17,
    width: 17,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 1,
    marginLeft: 1
  },
  text: {
    height: 28,
    width: 122,
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
    marginLeft: 2
  },
  kit: {
    position: "absolute",
    top: 143,
    left: 367,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(187,187,187,1)",
    fontSize: 15
  },
  rectangleStack: {
    width: 384,
    height: 812
  }
});

export default Home;
