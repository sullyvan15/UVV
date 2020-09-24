import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import Svg, { Path } from "react-native-svg";

function Compras(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group5Stack}>
        <View style={styles.group5}>
          <View style={styles.ultimasComprasRow}>
            <Text style={styles.ultimasCompras}>Últimas compras</Text>
            <Text style={styles.verMais}>Ver mais</Text>
          </View>
          <View style={styles.group42Row}>
            <View style={styles.group42}>
              <View style={styles.rectangle3}>
                <View style={styles.image1}>
                  <Svg
                    viewBox="-0 -0 28.57142857142856 28.57142857142856"
                    style={styles.path1}
                  >
                    <Path
                      strokeWidth={0}
                      fill="rgba(255,255,255,1)"
                      d="M25.40 28.57 L3.17 28.57 L0.00 25.40 L0.00 3.17 L3.17 0.00 L25.40 0.00 L28.57 3.17 L28.57 25.40 L25.40 28.57 Z M3.17 23.81 L25.40 23.81 L18.25 14.29 L12.70 21.43 L8.73 16.67 L3.17 23.81 Z"
                    ></Path>
                  </Svg>
                </View>
              </View>
            </View>
            <View style={styles.group41}>
              <View style={styles.rectangle4}>
                <View style={styles.image2}>
                  <Svg
                    viewBox="-0 -0 28.57142857142856 28.57142857142856"
                    style={styles.path2}
                  >
                    <Path
                      strokeWidth={0}
                      fill="rgba(255,255,255,1)"
                      d="M25.40 28.57 L3.17 28.57 L0.00 25.40 L0.00 3.17 L3.17 0.00 L25.40 0.00 L28.57 3.17 L28.57 25.40 L25.40 28.57 Z M3.17 23.81 L25.40 23.81 L18.25 14.29 L12.70 21.43 L8.73 16.67 L3.17 23.81 Z"
                    ></Path>
                  </Svg>
                </View>
              </View>
            </View>
            <View style={styles.group422}>
              <View style={styles.rectangle5}>
                <View style={styles.image3}>
                  <Svg
                    viewBox="-0 -0 28.57142857142856 28.57142857142856"
                    style={styles.path3}
                  >
                    <Path
                      strokeWidth={0}
                      fill="rgba(255,255,255,1)"
                      d="M25.40 28.57 L3.17 28.57 L0.00 25.40 L0.00 3.17 L3.17 0.00 L25.40 0.00 L28.57 3.17 L28.57 25.40 L25.40 28.57 Z M3.17 23.81 L25.40 23.81 L18.25 14.29 L12.70 21.43 L8.73 16.67 L3.17 23.81 Z"
                    ></Path>
                  </Svg>
                </View>
              </View>
            </View>
            <View style={styles.group43}>
              <View style={styles.rectangle6}>
                <View style={styles.image4}>
                  <Svg
                    viewBox="-0 -0 28.57142857142856 28.57142857142856"
                    style={styles.path4}
                  >
                    <Path
                      strokeWidth={0}
                      fill="rgba(255,255,255,1)"
                      d="M25.40 28.57 L3.17 28.57 L0.00 25.40 L0.00 3.17 L3.17 0.00 L25.40 0.00 L28.57 3.17 L28.57 25.40 L25.40 28.57 Z M3.17 23.81 L25.40 23.81 L18.25 14.29 L12.70 21.43 L8.73 16.67 L3.17 23.81 Z"
                    ></Path>
                  </Svg>
                </View>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => console.log("Navigate to ProductDetail")}
          style={styles.button1}
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
        <TouchableOpacity
          onPress={() => console.log("Navigate to ProductDetail")}
          style={styles.button2}
        >
          <ImageBackground
            style={styles.rectangle122422}
            imageStyle={styles.rectangle122422_imageStyle}
            source={require("../assets/images/Gradient_O0XFZCR.png")}
          >
            <Image
              source={require("../assets/images/f070916bc211e52d2c40884b11321de03a7528e2.png")}
              resizeMode="cover"
              style={styles.lakersPurpleV2PngLarge2X2422}
            ></Image>
          </ImageBackground>
          <Text style={styles.theNbaCollection2422}></Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("Navigate to ProductDetail")}
          style={styles.button3}
        >
          <ImageBackground
            style={styles.rectangle122423}
            imageStyle={styles.rectangle122423_imageStyle}
            source={require("../assets/images/Gradient_O0XFZCR.png")}
          >
            <Image
              source={require("../assets/images/f070916bc211e52d2c40884b11321de03a7528e2.png")}
              resizeMode="cover"
              style={styles.lakersPurpleV2PngLarge2X2423}
            ></Image>
          </ImageBackground>
          <Text style={styles.theNbaCollection2423}></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  group5: {
    top: 0,
    left: 4,
    width: 440,
    height: 130,
    position: "absolute"
  },
  ultimasCompras: {
    color: "rgba(30,45,62,1)",
    fontFamily: "roboto-regular"
  },
  verMais: {
    color: "rgba(30,45,62,1)",
    fontFamily: "roboto-regular",
    marginLeft: 174
  },
  ultimasComprasRow: {
    height: 14,
    flexDirection: "row",
    marginRight: 105
  },
  group42: {
    width: 95,
    height: 100
  },
  rectangle3: {
    width: 95,
    height: 100,
    backgroundColor: "rgba(238,238,238,1)",
    borderRadius: 20
  },
  image1: {
    width: 29,
    height: 29,
    opacity: 0.8,
    marginTop: 36,
    marginLeft: 36
  },
  path1: {
    width: 29,
    height: 29,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group41: {
    width: 95,
    height: 100,
    marginLeft: 20
  },
  rectangle4: {
    width: 95,
    height: 100,
    backgroundColor: "rgba(238,238,238,1)",
    borderRadius: 20
  },
  image2: {
    width: 29,
    height: 29,
    opacity: 0.8,
    marginTop: 36,
    marginLeft: 36
  },
  path2: {
    width: 29,
    height: 29,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group422: {
    width: 95,
    height: 100,
    marginLeft: 20
  },
  rectangle5: {
    width: 95,
    height: 100,
    backgroundColor: "rgba(238,238,238,1)",
    borderRadius: 20
  },
  image3: {
    width: 29,
    height: 29,
    opacity: 0.8,
    marginTop: 36,
    marginLeft: 36
  },
  path3: {
    width: 29,
    height: 29,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group43: {
    width: 95,
    height: 100,
    marginLeft: 20
  },
  rectangle6: {
    width: 95,
    height: 100,
    backgroundColor: "rgba(238,238,238,1)",
    borderRadius: 20
  },
  image4: {
    width: 29,
    height: 29,
    opacity: 0.8,
    marginTop: 36,
    marginLeft: 36
  },
  path4: {
    width: 29,
    height: 29,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group42Row: {
    height: 100,
    flexDirection: "row",
    marginTop: 16
  },
  button1: {
    top: 30,
    left: 0,
    width: 109,
    height: 162,
    position: "absolute",
    borderRadius: 20
  },
  rectangle12242: {
    width: 108,
    height: 114,
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
    width: 58,
    height: 74,
    backgroundColor: "transparent",
    marginTop: 21,
    marginLeft: 24
  },
  theNbaCollection242: {
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 12,
    fontFamily: "roboto-300",
    marginTop: 16,
    marginLeft: 1
  },
  button2: {
    top: 30,
    left: 115,
    width: 109,
    height: 162,
    position: "absolute",
    borderRadius: 20
  },
  rectangle122422: {
    width: 108,
    height: 114,
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
  rectangle122422_imageStyle: {},
  lakersPurpleV2PngLarge2X2422: {
    width: 58,
    height: 74,
    backgroundColor: "transparent",
    marginTop: 21,
    marginLeft: 24
  },
  theNbaCollection2422: {
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 12,
    fontFamily: "roboto-300",
    marginTop: 16,
    marginLeft: 1
  },
  button3: {
    top: 30,
    left: 231,
    width: 109,
    height: 162,
    position: "absolute",
    borderRadius: 20
  },
  rectangle122423: {
    width: 108,
    height: 114,
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
  rectangle122423_imageStyle: {},
  lakersPurpleV2PngLarge2X2423: {
    width: 58,
    height: 74,
    backgroundColor: "transparent",
    marginTop: 21,
    marginLeft: 24
  },
  theNbaCollection2423: {
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 12,
    fontFamily: "roboto-300",
    marginTop: 16,
    marginLeft: 1
  },
  group5Stack: {
    width: 444,
    height: 192
  }
});

export default Compras;
