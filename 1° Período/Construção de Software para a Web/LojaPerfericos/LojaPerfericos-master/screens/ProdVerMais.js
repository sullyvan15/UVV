import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  StatusBar
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Svg, { Path, Defs, Mask } from "react-native-svg";

function ProdVerMais(props) {
  return (
    <View style={styles.root}>
      <View style={styles.rectangle1}></View>
      <View style={styles.button53Row}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.button53}
        >
          <Icon name="ios-arrow-back" style={styles.icon4}></Icon>
        </TouchableOpacity>
        <View style={styles.welcome1Column}>
          <Text style={styles.welcome1}>Produtos</Text>
          <Text style={styles.inicio1}></Text>
        </View>
      </View>
      <View style={styles.tabBar1Stack}>
        <View style={styles.tabBar1}>
          <View style={styles.bg2Stack}>
            <View style={styles.bg2}>
              <View style={styles.rect5Row}>
                <View style={styles.rect5}>
                  <View style={styles.clip2Stack}>
                    <Svg
                      viewBox="-0 -0 28.45579145612871 25.91916363636364"
                      style={styles.clip2}
                    >
                      <Path
                        strokeWidth={0}
                        fill="transparent"
                        d="M0.00 0.00 L28.46 0.00 L28.46 25.92 L0.00 25.92 Z"
                      ></Path>
                    </Svg>
                    <Svg
                      viewBox="-0 -0 28.45579145612871 25.91916363636364"
                      style={styles.fill1}
                    >
                      <Defs>
                        <Mask id="uSR3q2" x={0} y={0} width={28} height={25}>
                          <Path
                            d="M0.00 0.00 L28.46 0.00 L28.46 25.92 L0.00 25.92 Z"
                            fill="white"
                          />
                        </Mask>
                      </Defs>
                      <Path
                        strokeWidth={0}
                        fill="rgba(124,107,215,1)"
                        d="M22.86 10.35 L13.05 0.55 C13.05 0.55 13.05 0.55 13.05 0.55 C12.84 0.34 12.60 0.19 12.33 0.11 C12.15 0.04 11.96 0.01 11.77 0.00 C11.76 0.00 11.75 -0.00 11.74 -0.00 C11.43 -0.00 11.14 0.08 10.86 0.23 C10.71 0.31 10.42 0.55 10.42 0.55 L0.59 10.38 C0.59 10.38 -0.20 12.03 0.30 12.77 C0.98 13.78 3.17 13.06 3.17 13.06 L3.91 12.32 L3.91 19.96 L5.32 21.36 L8.71 21.36 L9.82 20.25 L9.82 14.41 L10.59 13.64 L12.72 13.64 L13.49 14.41 L13.49 20.31 L14.48 21.36 L18.16 21.36 L19.56 19.96 L19.56 12.32 L20.30 13.06 C20.30 13.06 22.28 13.79 23.00 12.99 C23.68 12.24 22.86 10.35 22.86 10.35 "
                        mask="url(#uSR3q2)"
                      ></Path>
                    </Svg>
                  </View>
                </View>
                <View style={styles.shoppingBag}>
                  <Svg
                    viewBox="-0 -0 20 23.24324324324324"
                    style={styles.path9}
                  >
                    <Path
                      strokeWidth={0}
                      fill="rgba(155,155,155,1)"
                      d="M20.00 23.05 C20.00 23.05 19.99 23.15 19.95 23.19 C19.92 23.22 19.82 23.24 19.82 23.24 L0.18 23.24 C0.18 23.24 0.08 23.22 0.05 23.18 C0.01 23.15 0.00 23.05 0.00 23.05 L1.27 6.34 L1.45 6.17 L4.73 6.17 L4.73 5.27 C4.73 5.27 7.09 0.00 10.00 0.00 C12.91 0.00 15.27 5.27 15.27 5.27 L15.27 6.17 L18.55 6.17 L18.73 6.34 L20.00 23.05 Z M6.18 6.17 L13.82 6.17 L13.82 5.27 C13.82 5.27 12.11 1.45 10.00 1.45 C7.89 1.45 6.18 5.27 6.18 5.27 Z M7.27 9.44 C7.27 8.72 6.18 7.78 6.18 7.78 L6.18 9.44 C6.18 9.44 5.86 10.17 5.45 10.17 C5.05 10.17 4.73 9.44 4.73 9.44 L4.73 7.78 C4.73 7.78 3.64 8.72 3.64 9.44 C3.64 10.44 4.45 11.26 5.45 11.26 C6.46 11.26 7.27 10.44 7.27 9.44 Z M16.36 9.44 C16.36 8.72 15.27 7.78 15.27 7.78 L15.27 9.44 C15.27 9.44 14.95 10.17 14.55 10.17 C14.14 10.17 13.82 9.44 13.82 9.44 L13.82 7.78 C13.82 7.78 12.73 8.72 12.73 9.44 C12.73 10.44 13.54 11.26 14.55 11.26 C15.55 11.26 16.36 10.44 16.36 9.44 Z"
                    ></Path>
                  </Svg>
                </View>
                <View style={styles.deals}>
                  <Svg
                    viewBox="-0 -0 21.63333333333333 21.60986666666667"
                    style={styles.path12}
                  >
                    <Path
                      strokeWidth={0}
                      fill="rgba(155,155,155,1)"
                      d="M21.63 0.00 L21.28 9.85 L10.53 21.61 L9.38 20.58 L0.00 11.91 L0.78 11.14 L11.15 0.02 L0.00 0.00 C0.00 0.00 18.09 6.03 18.09 4.96 C18.09 3.89 17.22 3.02 16.15 3.02 C15.08 3.02 14.21 3.89 14.21 4.96 C14.21 6.03 15.08 6.90 16.15 6.90 C17.22 6.90 0.00 0.00 0.00 0.00 Z"
                    ></Path>
                  </Svg>
                </View>
                <View style={styles.profile3}>
                  <Svg
                    viewBox="-0 -0 7.754385964912278 7.75438596491228"
                    style={styles.fill11}
                  >
                    <Path
                      strokeWidth={0}
                      fill="rgba(155,155,155,1)"
                      d="M7.75 3.88 C7.75 6.02 6.02 7.75 3.88 7.75 C1.74 7.75 0.00 6.02 0.00 3.88 C0.00 1.74 1.74 0.00 3.88 0.00 C6.02 0.00 7.75 1.74 7.75 3.88 "
                    ></Path>
                  </Svg>
                  <Svg
                    viewBox="-0 -0 16.4780701754386 13.57017543859649"
                    style={styles.fill3}
                  >
                    <Path
                      strokeWidth={0}
                      fill="rgba(155,155,155,1)"
                      d="M16.48 8.24 C16.48 8.24 12.79 13.57 8.24 13.57 C3.69 13.57 0.00 12.79 0.00 8.24 C0.00 3.69 3.69 0.00 8.24 0.00 C12.79 0.00 16.48 8.24 16.48 8.24 "
                    ></Path>
                  </Svg>
                </View>
              </View>
            </View>
            <Svg viewBox="-0.5 -0.5 377 4" style={styles.line}>
              <Path
                strokeWidth={1}
                fill="transparent"
                stroke="rgba(227,227,227,1)"
                d="M0.00 1.00 L375.00 1.00 "
              ></Path>
            </Svg>
          </View>
        </View>
        <View style={styles.rect12250}>
          <View style={styles.produtos5Row}>
            <Text style={styles.produtos5}>PRODUTOS</Text>
            <Text style={styles.verMenos}>Ver menos</Text>
          </View>
          <View style={styles.button7StackStackRow}>
            <View style={styles.button7StackStack}>
              <View style={styles.button7Stack}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("ProductDetail")}
                  style={styles.button7}
                >
                  <ImageBackground
                    style={styles.rectangle12245}
                    imageStyle={styles.rectangle12245_imageStyle}
                    source={require("../assets/images/Gradient_O0XFZCR.png")}
                  >
                    <Image
                      source={require("../assets/images/f070916bc211e52d2c40884b11321de03a7528e2.png")}
                      resizeMode="cover"
                      style={styles.lakersPurpleV2PngLarge2X245}
                    ></Image>
                  </ImageBackground>
                  <Text style={styles.theNbaCollection245}></Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("ProductDetail")}
                  style={styles.button9}
                >
                  <ImageBackground
                    style={styles.rectangle12246}
                    imageStyle={styles.rectangle12246_imageStyle}
                    source={require("../assets/images/Gradient_O0XFZCR.png")}
                  >
                    <Image
                      source={require("../assets/images/f070916bc211e52d2c40884b11321de03a7528e2.png")}
                      resizeMode="cover"
                      style={styles.lakersPurpleV2PngLarge2X246}
                    ></Image>
                  </ImageBackground>
                  <Text style={styles.theNbaCollection246}></Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("ProductDetail")}
                style={styles.button11}
              >
                <ImageBackground
                  style={styles.rectangle12247}
                  imageStyle={styles.rectangle12247_imageStyle}
                  source={require("../assets/images/Gradient_O0XFZCR.png")}
                >
                  <Image
                    source={require("../assets/images/f070916bc211e52d2c40884b11321de03a7528e2.png")}
                    resizeMode="cover"
                    style={styles.lakersPurpleV2PngLarge2X247}
                  ></Image>
                </ImageBackground>
                <Text style={styles.theNbaCollection247}></Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button8Stack}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("ProductDetail")}
                style={styles.button8}
              >
                <ImageBackground
                  style={styles.rectangle1222}
                  imageStyle={styles.rectangle1222_imageStyle}
                  source={require("../assets/images/Gradient_O0XFZCR.png")}
                >
                  <Image
                    source={require("../assets/images/f070916bc211e52d2c40884b11321de03a7528e2.png")}
                    resizeMode="cover"
                    style={styles.lakersPurpleV2PngLarge2X22}
                  ></Image>
                </ImageBackground>
                <Text style={styles.theNbaCollection22}></Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("ProductDetail")}
                style={styles.button10}
              >
                <ImageBackground
                  style={styles.rectangle1223}
                  imageStyle={styles.rectangle1223_imageStyle}
                  source={require("../assets/images/Gradient_O0XFZCR.png")}
                >
                  <Image
                    source={require("../assets/images/f070916bc211e52d2c40884b11321de03a7528e2.png")}
                    resizeMode="cover"
                    style={styles.lakersPurpleV2PngLarge2X23}
                  ></Image>
                </ImageBackground>
                <Text style={styles.theNbaCollection23}></Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("ProductDetail")}
                style={styles.button12}
              >
                <ImageBackground
                  style={styles.rectangle12242}
                  imageStyle={styles.rectangle12242_imageStyle}
                  source={require("../assets/images/Gradient_O0XFZCR.png")}
                >
                  <Image
                    source={require("../assets/images/f070916bc211e52d2c40884b11321de03a7528e2.png")}
                    resizeMode="cover"
                    style={styles.lakersPurpleV2PngLarge2X242}
                  ></Image>
                </ImageBackground>
                <Text style={styles.theNbaCollection242}></Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <StatusBar></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    borderColor: "#000000",
    borderWidth: 0
  },
  rectangle1: {
    width: 335,
    height: 40,
    backgroundColor: "rgba(238,238,238,1)",
    borderRadius: 20,
    marginTop: 94,
    marginLeft: 20
  },
  button53: {
    width: 10,
    height: 26
  },
  icon4: {
    color: "rgba(124,107,215,1)",
    fontSize: 26
  },
  welcome1: {
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 21,
    fontFamily: "roboto-700"
  },
  inicio1: {
    color: "rgba(207,69,92,1)",
    fontFamily: "roboto-900",
    marginTop: 3
  },
  welcome1Column: {
    width: 86,
    marginLeft: 9,
    marginBottom: 2
  },
  button53Row: {
    height: 26,
    flexDirection: "row",
    marginTop: -86,
    marginLeft: 16,
    marginRight: 254
  },
  tabBar1: {
    top: 570,
    left: 0,
    width: 375,
    height: 95,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute"
  },
  bg2: {
    top: 1,
    left: 0,
    width: 375,
    height: 94,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    flexDirection: "row"
  },
  rect5: {
    width: 29,
    height: 26
  },
  clip2: {
    top: 0,
    left: 0,
    width: 28,
    height: 26,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  fill1: {
    top: 0,
    left: 0,
    width: 28,
    height: 26,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  clip2Stack: {
    width: 28,
    height: 26
  },
  shoppingBag: {
    width: 20,
    height: 24,
    marginLeft: 75
  },
  path9: {
    width: 20,
    height: 23,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  deals: {
    width: 22,
    height: 22,
    marginLeft: 74,
    marginTop: 4
  },
  path12: {
    width: 22,
    height: 22,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  profile3: {
    width: 17,
    height: 24,
    marginLeft: 73
  },
  fill11: {
    width: 8,
    height: 8,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 4
  },
  fill3: {
    width: 16,
    height: 14,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 2
  },
  rect5Row: {
    height: 26,
    flexDirection: "row",
    flex: 1,
    marginRight: 35,
    marginLeft: 30,
    marginTop: 21
  },
  line: {
    top: 0,
    left: 0,
    width: 377,
    height: 4,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  bg2Stack: {
    width: 377,
    height: 95
  },
  rect12250: {
    top: 0,
    left: 21,
    width: 342,
    height: 632,
    position: "absolute"
  },
  produtos5: {
    color: "rgba(255,255,255,1)",
    fontFamily: "roboto-700"
  },
  verMenos: {
    color: "rgba(124,107,215,1)",
    fontFamily: "roboto-regular",
    marginLeft: 195
  },
  produtos5Row: {
    height: 14,
    flexDirection: "row",
    marginLeft: 7
  },
  button7: {
    top: 0,
    left: 0,
    width: 157,
    height: 248,
    position: "absolute",
    borderRadius: 20
  },
  rectangle12245: {
    width: 156,
    height: 174,
    backgroundColor: "transparent",
    borderRadius: 20,
    shadowOffset: {
      height: 20,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOpacity: 1,
    shadowRadius: 40,
    overflow: "hidden",
    marginLeft: 1
  },
  rectangle12245_imageStyle: {},
  lakersPurpleV2PngLarge2X245: {
    width: 84,
    height: 113,
    backgroundColor: "transparent",
    marginTop: 32,
    marginLeft: 35
  },
  theNbaCollection245: {
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 12,
    fontFamily: "roboto-300",
    marginTop: 25,
    marginLeft: 1
  },
  button9: {
    top: 185,
    left: 0,
    width: 157,
    height: 248,
    position: "absolute",
    borderRadius: 20
  },
  rectangle12246: {
    width: 156,
    height: 174,
    backgroundColor: "transparent",
    borderRadius: 20,
    shadowOffset: {
      height: 20,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOpacity: 1,
    shadowRadius: 40,
    overflow: "hidden",
    marginLeft: 1
  },
  rectangle12246_imageStyle: {},
  lakersPurpleV2PngLarge2X246: {
    width: 84,
    height: 113,
    backgroundColor: "transparent",
    marginTop: 32,
    marginLeft: 35
  },
  theNbaCollection246: {
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 12,
    fontFamily: "roboto-300",
    marginTop: 25,
    marginLeft: 1
  },
  button7Stack: {
    top: 0,
    left: 0,
    width: 157,
    height: 433,
    position: "absolute"
  },
  button11: {
    top: 370,
    left: 0,
    width: 157,
    height: 248,
    position: "absolute",
    borderRadius: 20
  },
  rectangle12247: {
    width: 156,
    height: 174,
    backgroundColor: "transparent",
    borderRadius: 20,
    shadowOffset: {
      height: 20,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOpacity: 1,
    shadowRadius: 40,
    overflow: "hidden",
    marginLeft: 1
  },
  rectangle12247_imageStyle: {},
  lakersPurpleV2PngLarge2X247: {
    width: 84,
    height: 113,
    backgroundColor: "transparent",
    marginTop: 32,
    marginLeft: 35
  },
  theNbaCollection247: {
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 12,
    fontFamily: "roboto-300",
    marginTop: 25,
    marginLeft: 1
  },
  button7StackStack: {
    width: 157,
    height: 618
  },
  button8: {
    top: 0,
    left: 4,
    width: 157,
    height: 248,
    position: "absolute",
    borderRadius: 20
  },
  rectangle1222: {
    width: 156,
    height: 174,
    backgroundColor: "transparent",
    borderRadius: 20,
    shadowOffset: {
      height: 20,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOpacity: 1,
    shadowRadius: 40,
    overflow: "hidden",
    marginLeft: 1
  },
  rectangle1222_imageStyle: {},
  lakersPurpleV2PngLarge2X22: {
    width: 84,
    height: 113,
    backgroundColor: "transparent",
    marginTop: 32,
    marginLeft: 35
  },
  theNbaCollection22: {
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 12,
    fontFamily: "roboto-300",
    marginTop: 25,
    marginLeft: 1
  },
  button10: {
    top: 185,
    left: 4,
    width: 157,
    height: 248,
    position: "absolute",
    borderRadius: 20
  },
  rectangle1223: {
    width: 156,
    height: 174,
    backgroundColor: "transparent",
    borderRadius: 20,
    shadowOffset: {
      height: 20,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOpacity: 1,
    shadowRadius: 40,
    overflow: "hidden",
    marginLeft: 1
  },
  rectangle1223_imageStyle: {},
  lakersPurpleV2PngLarge2X23: {
    width: 84,
    height: 113,
    backgroundColor: "transparent",
    marginTop: 32,
    marginLeft: 35
  },
  theNbaCollection23: {
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 12,
    fontFamily: "roboto-300",
    marginTop: 25,
    marginLeft: 1
  },
  button12: {
    top: 370,
    left: 0,
    width: 157,
    height: 248,
    position: "absolute",
    borderRadius: 20
  },
  rectangle12242: {
    width: 156,
    height: 174,
    backgroundColor: "transparent",
    borderRadius: 20,
    shadowOffset: {
      height: 20,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOpacity: 1,
    shadowRadius: 40,
    overflow: "hidden",
    marginLeft: 1
  },
  rectangle12242_imageStyle: {},
  lakersPurpleV2PngLarge2X242: {
    width: 84,
    height: 113,
    backgroundColor: "transparent",
    marginTop: 32,
    marginLeft: 35
  },
  theNbaCollection242: {
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 12,
    fontFamily: "roboto-300",
    marginTop: 25,
    marginLeft: 1
  },
  button8Stack: {
    width: 161,
    height: 618,
    marginLeft: 14
  },
  button7StackStackRow: {
    height: 618,
    flexDirection: "row",
    marginRight: 10
  },
  tabBar1Stack: {
    width: 375,
    height: 665,
    marginTop: 73
  }
});

export default ProdVerMais;
