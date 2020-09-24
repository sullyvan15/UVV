import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Svg, { Path } from "react-native-svg";

function HomeCopy(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.whatItemAreYouLo}>
        What item are you {"\n"}looking for?
      </Text>
      <View style={styles.chairsRow}>
        <Text style={styles.chairs}>Chairs</Text>
        <Text style={styles.sofas}>Sofas</Text>
        <Text style={styles.tables}>Tables</Text>
        <Text style={styles.lamps}>Lamps</Text>
        <Text style={styles.kit}>Kit</Text>
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
      <View style={styles.group10}>
        <View style={styles.group3Row}>
          <View style={styles.group3}>
            <View style={styles.unnamedStack}>
              <View style={styles.unnamed}>
                <View style={styles.mask}>
                  <Image
                    source={require("../assets/images/329142f7cc51db06537f21302ec8ff3c661901b2.png")}
                    resizeMode="cover"
                    style={styles.unnamed1}
                  ></Image>
                </View>
              </View>
              <View style={styles.group}>
                <Text style={styles.accent}>Accent</Text>
                <Text style={styles.style}>$134</Text>
              </View>
            </View>
          </View>
          <View style={styles.group4}>
            <View
              style={styles.yeldingSofaBenchBlueFabric3RemovebgPreviewStack}
            >
              <View style={styles.yeldingSofaBenchBlueFabric3RemovebgPreview}>
                <View style={styles.mask2}>
                  <Image
                    source={require("../assets/images/3996eb601818dcb373d66a352b5c2bba70d38648.png")}
                    resizeMode="cover"
                    style={styles.yeldingSofaBenchBlueFabric3RemovebgPreview1}
                  ></Image>
                </View>
              </View>
              <View style={styles.groupCopy2}>
                <Text style={styles.minimal}>Minimal</Text>
                <Text style={styles.style2}>$287</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.group5Row}>
          <View style={styles.group5}>
            <View
              style={
                styles.couchLivingRoomSofaBedClipArtPngFavpngHmp3GAxkzcJcWhGgl86Atr9SfRemovebgPreviewStack
              }
            >
              <View
                style={
                  styles.couchLivingRoomSofaBedClipArtPngFavpngHmp3GAxkzcJcWhGgl86Atr9SfRemovebgPreview
                }
              >
                <View style={styles.mask1}>
                  <Image
                    source={require("../assets/images/2c3b550dc48e72753952be36a91e71d370428207.png")}
                    resizeMode="cover"
                    style={
                      styles.couchLivingRoomSofaBedClipArtPngFavpngHmp3GAxkzcJcWhGgl86Atr9SfRemovebgPreview1
                    }
                  ></Image>
                </View>
              </View>
              <View style={styles.group1}>
                <Text style={styles.artistic}>Artistic</Text>
                <Text style={styles.style1}>$346</Text>
              </View>
            </View>
          </View>
          <View style={styles.group6}>
            <View
              style={styles.realisticYellowSofa14414156RemovebgPreviewStack}
            >
              <View style={styles.realisticYellowSofa14414156RemovebgPreview}>
                <View style={styles.mask3}>
                  <Image
                    source={require("../assets/images/c428929ab47b9134a010d3fffcbacf2d410e1292.png")}
                    resizeMode="cover"
                    style={styles.realisticYellowSofa14414156RemovebgPreview1}
                  ></Image>
                </View>
              </View>
              <View style={styles.groupCopy}>
                <Text style={styles.morph}>Morph</Text>
                <Text style={styles.style3}>$124</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
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
              <Text style={styles.text}>Scan My Room</Text>
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
  whatItemAreYouLo: {
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 31,
    color: "rgba(61,60,60,1)",
    fontSize: 24,
    marginTop: 42,
    marginLeft: 30
  },
  chairs: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(187,187,187,1)",
    fontSize: 15
  },
  sofas: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(61,60,60,1)",
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
  kit: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(187,187,187,1)",
    fontSize: 15,
    marginLeft: 44
  },
  chairsRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 39,
    marginLeft: 30,
    marginRight: -9
  },
  oval: {
    height: 5,
    width: 5,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 5,
    marginLeft: 132
  },
  group10: {
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
  unnamed: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 236,
    width: 144,
    opacity: 1
  },
  mask: {
    height: 236,
    width: 144,
    opacity: 1,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "rgba(217,220,247,1)"
  },
  unnamed1: {
    height: 106,
    width: 270,
    opacity: 1,
    backgroundColor: "transparent",
    marginTop: 41,
    marginLeft: 41
  },
  group: {
    position: "absolute",
    top: 173,
    left: 18,
    height: 45,
    width: 52,
    opacity: 1
  },
  accent: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(60,61,61,1)",
    fontSize: 15
  },
  style: {
    opacity: 0.4551246279761905,
    backgroundColor: "transparent",
    color: "rgba(1,32,92,1)",
    fontSize: 18,
    marginTop: 3
  },
  unnamedStack: {
    width: 144,
    height: 236
  },
  group4: {
    height: 236,
    width: 144,
    opacity: 1,
    marginLeft: 27
  },
  yeldingSofaBenchBlueFabric3RemovebgPreview: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 236,
    width: 144,
    opacity: 1
  },
  mask2: {
    height: 236,
    width: 144,
    opacity: 1,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "rgba(223,225,240,1)"
  },
  yeldingSofaBenchBlueFabric3RemovebgPreview1: {
    height: 112,
    width: 187,
    opacity: 1,
    backgroundColor: "transparent",
    marginTop: 41,
    marginLeft: 35
  },
  groupCopy2: {
    position: "absolute",
    top: 173,
    left: 18,
    height: 45,
    width: 58,
    opacity: 1
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
    color: "rgba(41,75,134,1)",
    fontSize: 18,
    marginTop: 3
  },
  yeldingSofaBenchBlueFabric3RemovebgPreviewStack: {
    width: 144,
    height: 236
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
  couchLivingRoomSofaBedClipArtPngFavpngHmp3GAxkzcJcWhGgl86Atr9SfRemovebgPreview: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 236,
    width: 144,
    opacity: 1
  },
  mask1: {
    height: 236,
    width: 144,
    opacity: 1,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "rgba(196,217,204,1)"
  },
  couchLivingRoomSofaBedClipArtPngFavpngHmp3GAxkzcJcWhGgl86Atr9SfRemovebgPreview1: {
    height: 116,
    width: 286,
    opacity: 1,
    backgroundColor: "transparent",
    marginTop: 35,
    marginLeft: 32
  },
  group1: {
    position: "absolute",
    top: 173,
    left: 18,
    height: 45,
    width: 54,
    opacity: 1
  },
  artistic: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(60,61,61,1)",
    fontSize: 15
  },
  style1: {
    opacity: 0.4551246279761905,
    backgroundColor: "transparent",
    color: "rgba(33,124,68,1)",
    fontSize: 18,
    marginTop: 3
  },
  couchLivingRoomSofaBedClipArtPngFavpngHmp3GAxkzcJcWhGgl86Atr9SfRemovebgPreviewStack: {
    width: 144,
    height: 236
  },
  group6: {
    height: 236,
    width: 144,
    opacity: 1,
    marginLeft: 27
  },
  realisticYellowSofa14414156RemovebgPreview: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 236,
    width: 144,
    opacity: 1
  },
  mask3: {
    height: 236,
    width: 144,
    opacity: 1,
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: "rgba(252,233,213,1)"
  },
  realisticYellowSofa14414156RemovebgPreview1: {
    height: 96,
    width: 267,
    opacity: 1,
    backgroundColor: "transparent",
    marginTop: 41,
    marginLeft: 25
  },
  groupCopy: {
    position: "absolute",
    top: 173,
    left: 18,
    height: 45,
    width: 48,
    opacity: 1
  },
  morph: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(60,61,61,1)",
    fontSize: 15
  },
  style3: {
    opacity: 0.4551246279761905,
    backgroundColor: "transparent",
    color: "rgba(175,117,55,1)",
    fontSize: 18,
    marginTop: 3
  },
  realisticYellowSofa14414156RemovebgPreviewStack: {
    width: 144,
    height: 236
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
  rectangle: {
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
  path: {
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
  }
});

export default HomeCopy;
