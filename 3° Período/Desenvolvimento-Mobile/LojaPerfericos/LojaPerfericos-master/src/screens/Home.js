import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground
} from "react-native";
import Svg, { Path, Defs, Mask } from "react-native-svg";
import BarsStatusBarDarkTime2 from "../components/BarsStatusBarDarkTime2";
import BarsStatusBarDarkConnections2 from "../components/BarsStatusBarDarkConnections2";
import Icon from "react-native-vector-icons/Ionicons";

function Home(props) {
  return (
    <View style={styles.root}>
      <View style={styles.tabBar}>
        <View style={styles.bgStack}>
          <View style={styles.bg}>
            <View style={styles.rect8Row}>
              <View style={styles.rect8}>
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
                      <Mask id="zeJ6Ie" x={0} y={0} width={28} height={25}>
                        <Path
                          d="M0.00 0.00 L28.46 0.00 L28.46 25.92 L0.00 25.92 Z"
                          fill="white"
                        />
                      </Mask>
                    </Defs>
                    <Path
                      strokeWidth={0}
                      fill="rgba(124,107,215,1)"
                      d="M22.86 10.35 L13.05 0.55 C13.05 0.55 13.05 0.55 13.05 0.55 C12.84 0.34 12.60 0.19 12.33 0.11 C12.15 0.04 11.96 0.01 11.77 0.00 C11.76 0.00 11.75 -0.00 11.74 -0.00 C11.43 -0.00 11.14 0.08 10.86 0.23 C10.71 0.31 10.55 0.41 10.42 0.55 L0.59 10.38 C-0.05 11.01 -0.20 12.03 0.30 12.77 C0.98 13.78 2.36 13.87 3.17 13.06 L3.91 12.32 L3.91 19.96 C3.91 20.74 4.54 21.36 5.32 21.36 L8.71 21.36 C9.32 21.36 9.82 20.87 9.82 20.25 L9.82 14.41 C9.82 13.98 10.16 13.64 10.59 13.64 L12.72 13.64 C13.15 13.64 13.49 13.98 13.49 14.41 L13.49 20.31 C13.48 20.89 13.90 21.36 14.48 21.36 L18.16 21.36 C18.93 21.36 19.56 20.74 19.56 19.96 L19.56 12.32 L20.30 13.06 C21.05 13.81 22.28 13.79 23.00 12.99 C23.68 12.24 23.57 11.07 22.86 10.35 "
                      mask="url(#zeJ6Ie)"
                    ></Path>
                  </Svg>
                </View>
              </View>
              <View style={styles.shoppingBag}>
                <Svg viewBox="-0 -0 20 23.24324324324324" style={styles.path}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(30,45,62,1)"
                    d="M20.00 23.05 C20.00 23.05 19.99 23.15 19.95 23.19 C19.92 23.22 19.82 23.24 19.82 23.24 L0.18 23.24 C0.18 23.24 0.08 23.22 0.05 23.18 C0.01 23.15 0.00 23.05 0.00 23.05 L1.27 6.34 L1.45 6.17 L4.73 6.17 L4.73 5.27 C4.73 5.27 7.09 0.00 10.00 0.00 C12.91 0.00 15.27 5.27 15.27 5.27 L15.27 6.17 L18.55 6.17 L18.73 6.34 L20.00 23.05 Z M6.18 6.17 L13.82 6.17 L13.82 5.27 C13.82 5.27 12.11 1.45 10.00 1.45 C7.89 1.45 6.18 5.27 6.18 5.27 Z M7.27 9.44 C7.27 8.72 6.18 7.78 6.18 7.78 L6.18 9.44 C6.18 9.44 5.86 10.17 5.45 10.17 C5.05 10.17 4.73 9.44 4.73 9.44 L4.73 7.78 C4.73 7.78 3.64 8.72 3.64 9.44 C3.64 10.44 4.45 11.26 5.45 11.26 C6.46 11.26 7.27 10.44 7.27 9.44 Z M16.36 9.44 C16.36 8.72 15.27 7.78 15.27 7.78 L15.27 9.44 C15.27 9.44 14.95 10.17 14.55 10.17 C14.14 10.17 13.82 9.44 13.82 9.44 L13.82 7.78 C13.82 7.78 12.73 8.72 12.73 9.44 C12.73 10.44 13.54 11.26 14.55 11.26 C15.55 11.26 16.36 10.44 16.36 9.44 Z"
                  ></Path>
                </Svg>
              </View>
              <View style={styles.deals}>
                <Svg
                  viewBox="-0 -0 21.63333333333333 21.60986666666667"
                  style={styles.path1}
                >
                  <Path
                    strokeWidth={0}
                    fill="rgba(181,186,192,1)"
                    d="M21.63 0.00 L21.28 9.85 L10.53 21.61 L9.38 20.58 L0.00 11.91 L0.78 11.14 L11.15 0.02 L21.63 0.00 Z M18.09 4.96 C18.09 3.89 17.22 3.02 16.15 3.02 C15.08 3.02 14.21 3.89 14.21 4.96 C14.21 6.03 15.08 6.90 16.15 6.90 C17.22 6.90 18.09 6.03 18.09 4.96 Z"
                  ></Path>
                </Svg>
              </View>
              <View style={styles.profile}>
                <Svg
                  viewBox="-0 -0 7.754385964912278 7.75438596491228"
                  style={styles.fill11}
                >
                  <Path
                    strokeWidth={0}
                    fill="rgba(30,45,62,1)"
                    d="M7.75 3.88 C7.75 6.02 6.02 7.75 3.88 7.75 C1.74 7.75 0.00 6.02 0.00 3.88 C0.00 1.74 1.74 0.00 3.88 0.00 C6.02 0.00 7.75 1.74 7.75 3.88 "
                  ></Path>
                </Svg>
                <Svg
                  viewBox="-0 -0 16.4780701754386 13.57017543859649"
                  style={styles.fill3}
                >
                  <Path
                    strokeWidth={0}
                    fill="rgba(30,45,62,1)"
                    d="M16.48 8.24 C16.48 12.79 12.79 13.57 8.24 13.57 C3.69 13.57 0.00 12.79 0.00 8.24 C0.00 3.69 3.69 0.00 8.24 0.00 C12.79 0.00 16.48 3.69 16.48 8.24 "
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
      <View style={styles.statusBar}>
        <BarsStatusBarDarkTime2
          style={styles.barsStatusBarDarkTime2}
        ></BarsStatusBarDarkTime2>
        <View style={styles.barsStatusBarDarkTime2Filler}></View>
        <BarsStatusBarDarkConnections2
          style={styles.barsStatusBarDarkConnections2}
        ></BarsStatusBarDarkConnections2>
      </View>
      <View style={styles.button72Row}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.button72}
        >
          <Icon name="ios-arrow-back" style={styles.icon4}></Icon>
        </TouchableOpacity>
        <Text style={styles.welcome}>Bem vindo(a)</Text>
      </View>
      <TouchableOpacity style={styles.button2}>
        <View style={styles.button6Stack}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ProductDetail")}
            style={styles.button6}
          >
            <View style={styles.bestSeller2}>
              <View style={styles.rectangle5}>
                <Text style={styles.bestSeller1}>Mais vendidos</Text>
              </View>
            </View>
            <Text style={styles.beatsBySoloDrDre}>
              Beats By Solo Dr.Dre{"\n"}Wireless
            </Text>
            <Text style={styles.style1}>24.90$</Text>
          </TouchableOpacity>
          <Image
            source={require("../assets/images/bc286f44f5bb53b7ce496cc7c9c30f1b75f598d5.png")}
            resizeMode="cover"
            style={styles.product4}
          ></Image>
        </View>
      </TouchableOpacity>
      <View style={styles.popularDeals}>
        <View style={styles.popularDeals1Row}>
          <Text style={styles.popularDeals1}>Produtos populares</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ProdVerMais")}
            style={styles.button7}
          >
            <Text style={styles.seeAll1}>Ver todos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.products}>
          <View style={styles.button3Row}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("ProductDetail")}
              style={styles.button3}
            >
              <ImageBackground
                style={styles.rectangle1}
                imageStyle={styles.rectangle1_imageStyle}
                source={require("../assets/images/Gradient_pW80Y87.png")}
              >
                <Image
                  source={require("../assets/images/f070916bc211e52d2c40884b11321de03a7528e2.png")}
                  resizeMode="cover"
                  style={styles.lakersPurpleV2PngLarge2X}
                ></Image>
              </ImageBackground>
              <Text style={styles.theNbaCollection}>The NBA Collection</Text>
              <Text style={styles.style2}>250$</Text>
            </TouchableOpacity>
            <View style={styles.product2}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("ProductDetail")}
                style={styles.button4}
              >
                <ImageBackground
                  style={styles.rectangle2}
                  imageStyle={styles.rectangle2_imageStyle}
                  source={require("../assets/images/Gradient_WW08yAB.png")}
                >
                  <Image
                    source={require("../assets/images/1f938f6d87b0a51010e65811dd2a4d4f0b7380d3.png")}
                    resizeMode="cover"
                    style={styles.desertSandOptPngLarge2X}
                  ></Image>
                </ImageBackground>
              </TouchableOpacity>
              <Text style={styles.desertSand}>Desert Sand</Text>
              <Text style={styles.style3}>120$</Text>
            </View>
            <View style={styles.product3}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("ProductDetail")}
                style={styles.button5}
              >
                <ImageBackground
                  style={styles.rectangle3}
                  imageStyle={styles.rectangle3_imageStyle}
                  source={require("../assets/images/Gradient_UCc4DR9.png")}
                >
                  <Image
                    source={require("../assets/images/fecb5421304a0ea5dbe1cb3e10606be8ea212fbd.png")}
                    resizeMode="cover"
                    style={styles.crystalblueOptV6PngLarge2X}
                  ></Image>
                </ImageBackground>
              </TouchableOpacity>
              <Text style={styles.crystalBlue}>Crystal Blue</Text>
              <Text style={styles.style4}>100$</Text>
            </View>
          </View>
        </View>
        <View style={styles.slider}>
          <View style={styles.oval5Row}>
            <Svg viewBox="-0 -0 8 8" style={styles.oval5}>
              <Path
                strokeWidth={0}
                fill="rgba(216,216,216,1)"
                d="M4.00 8.00 C6.21 8.00 8.00 6.21 8.00 4.00 C8.00 1.79 6.21 0.00 4.00 0.00 C1.79 0.00 0.00 1.79 0.00 4.00 C0.00 6.21 1.79 8.00 4.00 8.00 Z"
              ></Path>
            </Svg>
            <Svg viewBox="-0 -0 8 8" style={styles.oval7}>
              <Path
                strokeWidth={0}
                fill="rgba(124,107,215,1)"
                d="M4.00 8.00 C6.21 8.00 8.00 6.21 8.00 4.00 C8.00 1.79 6.21 0.00 4.00 0.00 C1.79 0.00 0.00 1.79 0.00 4.00 C0.00 6.21 1.79 8.00 4.00 8.00 Z"
              ></Path>
            </Svg>
            <Svg viewBox="-0 -0 8 8" style={styles.oval6}>
              <Path
                strokeWidth={0}
                fill="rgba(216,216,216,1)"
                d="M4.00 8.00 C6.21 8.00 8.00 6.21 8.00 4.00 C8.00 1.79 6.21 0.00 4.00 0.00 C1.79 0.00 0.00 1.79 0.00 4.00 C0.00 6.21 1.79 8.00 4.00 8.00 Z"
              ></Path>
            </Svg>
          </View>
        </View>
      </View>
      <View style={styles.rectangle4}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white"
  },
  tabBar: {
    width: 375,
    height: 95,
    marginTop: 717
  },
  bg: {
    top: 1,
    left: 0,
    width: 375,
    height: 94,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    flexDirection: "row"
  },
  rect8: {
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
    opacity: 0.33,
    marginLeft: 75
  },
  path: {
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
  path1: {
    width: 22,
    height: 22,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  profile: {
    width: 17,
    height: 24,
    opacity: 0.33,
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
  rect8Row: {
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
  bgStack: {
    width: 377,
    height: 95
  },
  statusBar: {
    width: 340,
    height: 23,
    flexDirection: "row",
    marginTop: -804,
    marginLeft: 21
  },
  barsStatusBarDarkTime2: {
    width: 56,
    height: 23,
    backgroundColor: "transparent"
  },
  barsStatusBarDarkTime2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  barsStatusBarDarkConnections2: {
    width: 68,
    height: 16,
    backgroundColor: "transparent",
    marginTop: 7
  },
  button72: {
    width: 10,
    height: 26
  },
  icon4: {
    color: "rgba(124,107,215,1)",
    fontSize: 26
  },
  welcome: {
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 21,
    fontFamily: "roboto-700",
    marginLeft: 7,
    marginTop: 3
  },
  button72Row: {
    height: 26,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 16,
    marginRight: 216
  },
  button2: {
    width: 362,
    height: 179,
    marginTop: 83,
    marginLeft: 20
  },
  button6: {
    top: 22,
    left: 0,
    width: 335,
    height: 151,
    backgroundColor: "rgba(186,218,237,1)",
    position: "absolute",
    borderRadius: 2,
    shadowOffset: {
      height: 20,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.15)",
    shadowOpacity: 1,
    shadowRadius: 40
  },
  bestSeller2: {
    width: 76,
    height: 23,
    marginTop: 20,
    marginLeft: 20
  },
  rectangle5: {
    width: 76,
    height: 23,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 3
  },
  bestSeller1: {
    backgroundColor: "transparent",
    color: "rgba(186,218,237,1)",
    fontSize: 11,
    fontFamily: "roboto-regular",
    marginTop: 6,
    marginLeft: 3
  },
  beatsBySoloDrDre: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 20,
    marginTop: 13,
    marginLeft: 20
  },
  style1: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-300",
    marginTop: 11,
    marginLeft: 20
  },
  product4: {
    top: 0,
    left: 183,
    width: 179,
    height: 179,
    backgroundColor: "transparent",
    position: "absolute"
  },
  button6Stack: {
    width: 362,
    height: 179
  },
  popularDeals: {
    width: 394,
    height: 259,
    marginTop: 30,
    marginLeft: 20
  },
  popularDeals1: {
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  button7: {
    width: 50,
    height: 12,
    marginLeft: 129,
    marginTop: 3
  },
  seeAll1: {
    backgroundColor: "transparent",
    color: "rgba(124,107,215,1)",
    fontSize: 12,
    fontFamily: "roboto-300"
  },
  popularDeals1Row: {
    height: 18,
    flexDirection: "row",
    marginRight: 57
  },
  products: {
    width: 394,
    height: 184,
    flexDirection: "row",
    marginTop: 22
  },
  button3: {
    width: 114,
    height: 184,
    borderRadius: 20
  },
  rectangle1: {
    width: 113,
    height: 129,
    backgroundColor: "transparent",
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
  rectangle1_imageStyle: {},
  lakersPurpleV2PngLarge2X: {
    width: 61,
    height: 84,
    backgroundColor: "transparent",
    marginTop: 24,
    marginLeft: 25
  },
  theNbaCollection: {
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 12,
    fontFamily: "roboto-300",
    marginTop: 18,
    marginLeft: 1
  },
  style2: {
    backgroundColor: "transparent",
    color: "rgba(124,107,215,1)",
    fontSize: 14,
    fontFamily: "roboto-700",
    marginTop: 8
  },
  product2: {
    width: 114,
    height: 184,
    marginLeft: 26
  },
  button4: {
    width: 113,
    height: 129,
    marginLeft: 1
  },
  rectangle2: {
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
    flex: 1
  },
  rectangle2_imageStyle: {},
  desertSandOptPngLarge2X: {
    width: 61,
    height: 82,
    backgroundColor: "transparent",
    marginTop: 23,
    marginLeft: 26
  },
  desertSand: {
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 12,
    fontFamily: "roboto-300",
    marginTop: 18,
    marginLeft: 1
  },
  style3: {
    backgroundColor: "transparent",
    color: "rgba(124,107,215,1)",
    fontSize: 14,
    fontFamily: "roboto-700",
    marginTop: 8
  },
  product3: {
    width: 114,
    height: 184,
    marginLeft: 26
  },
  button5: {
    width: 113,
    height: 129,
    marginLeft: 1
  },
  rectangle3: {
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
    flex: 1
  },
  rectangle3_imageStyle: {},
  crystalblueOptV6PngLarge2X: {
    width: 61,
    height: 82,
    backgroundColor: "transparent",
    marginTop: 23,
    marginLeft: 26
  },
  crystalBlue: {
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 12,
    fontFamily: "roboto-300",
    marginTop: 18,
    marginLeft: 1
  },
  style4: {
    backgroundColor: "transparent",
    color: "rgba(124,107,215,1)",
    fontSize: 14,
    fontFamily: "roboto-700",
    marginTop: 8
  },
  button3Row: {
    height: 184,
    flexDirection: "row",
    flex: 1
  },
  slider: {
    width: 34,
    height: 8,
    flexDirection: "row",
    marginTop: 27,
    marginLeft: 151
  },
  oval5: {
    width: 8,
    height: 8,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval7: {
    width: 8,
    height: 8,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 5
  },
  oval6: {
    width: 8,
    height: 8,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 5
  },
  oval5Row: {
    height: 8,
    flexDirection: "row",
    flex: 1
  },
  rectangle4: {
    width: 335,
    height: 40,
    backgroundColor: "rgba(238,238,238,1)",
    borderRadius: 20,
    marginTop: -531,
    marginLeft: 20
  }
});

export default Home;
