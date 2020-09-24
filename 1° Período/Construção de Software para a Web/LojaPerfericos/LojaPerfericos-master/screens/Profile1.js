import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Svg, { Path, Defs, Mask } from "react-native-svg";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Profile1(props) {
  return (
    <View style={styles.root}>
      <View style={styles.visaCard3StackStack}>
        <View style={styles.visaCard3Stack}>
          <View style={styles.visaCard3}>
            <View style={styles.background3Stack}>
              <View style={styles.background3}>
                <ImageBackground
                  style={styles.cardBg3}
                  imageStyle={styles.cardBg3_imageStyle}
                  source={require("../assets/images/Gradient_BPZMFiE.png")}
                >
                  <View style={styles.tint3}></View>
                </ImageBackground>
              </View>
              <View style={styles.expiration3}>
                <Text style={styles.expires3}>EXPIRES</Text>
                <Text style={styles.style3}>09/24</Text>
              </View>
              <View style={styles.cardHolder13}>
                <Text style={styles.cardHolder14}>CARD HOLDER</Text>
                <Text style={styles.atiqurRahaman3}>ATIQUR RAHAMAN</Text>
              </View>
              <Image
                source={require("../assets/images/51970a8e521695308ccf0d7d1145c07b4ef7cf0c.png")}
                resizeMode="cover"
                style={styles.visaLogo3}
              ></Image>
            </View>
          </View>
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
                          <Mask id="ffYPju" x={0} y={0} width={28} height={25}>
                            <Path
                              d="M0.00 0.00 L28.46 0.00 L28.46 25.92 L0.00 25.92 Z"
                              fill="white"
                            />
                          </Mask>
                        </Defs>
                        <Path
                          strokeWidth={0}
                          fill="rgba(181,186,205,1)"
                          d="M22.86 10.35 L13.05 0.55 C13.05 0.55 13.05 0.55 13.05 0.55 C12.84 0.34 12.60 0.19 12.33 0.11 C12.15 0.04 11.96 0.01 11.77 0.00 C11.76 0.00 11.75 -0.00 11.74 -0.00 C11.43 -0.00 11.14 0.08 10.86 0.23 C10.71 0.31 10.42 0.55 10.42 0.55 L0.59 10.38 C0.59 10.38 -0.20 12.03 0.30 12.77 C0.98 13.78 3.17 13.06 3.17 13.06 L3.91 12.32 L3.91 19.96 L5.32 21.36 L8.71 21.36 L9.82 20.25 L9.82 14.41 L10.59 13.64 L12.72 13.64 L13.49 14.41 L13.49 20.31 L14.48 21.36 L18.16 21.36 L19.56 19.96 L19.56 12.32 L20.30 13.06 C20.30 13.06 22.28 13.79 23.00 12.99 C23.68 12.24 22.86 10.35 22.86 10.35 "
                          mask="url(#ffYPju)"
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
                        fill="rgba(30,45,62,1)"
                        d="M20.00 23.05 C20.00 23.05 19.99 23.15 19.95 23.19 C19.92 23.22 19.82 23.24 19.82 23.24 L0.18 23.24 C0.18 23.24 0.08 23.22 0.05 23.18 C0.01 23.15 0.00 23.05 0.00 23.05 L1.27 6.34 L1.45 6.17 L4.73 6.17 L4.73 5.27 C4.73 5.27 7.09 0.00 10.00 0.00 C12.91 0.00 15.27 5.27 15.27 5.27 L15.27 6.17 L18.55 6.17 L18.73 6.34 L20.00 23.05 Z M6.18 6.17 L13.82 6.17 L13.82 5.27 C13.82 5.27 12.11 1.45 10.00 1.45 C7.89 1.45 6.18 5.27 6.18 5.27 Z M7.27 9.44 C7.27 8.72 6.18 7.78 6.18 7.78 L6.18 9.44 C6.18 9.44 5.86 10.17 5.45 10.17 C5.05 10.17 4.73 9.44 4.73 9.44 L4.73 7.78 C4.73 7.78 3.64 8.72 3.64 9.44 C3.64 10.44 4.45 11.26 5.45 11.26 C6.46 11.26 7.27 10.44 7.27 9.44 Z M16.36 9.44 C16.36 8.72 15.27 7.78 15.27 7.78 L15.27 9.44 C15.27 9.44 14.95 10.17 14.55 10.17 C14.14 10.17 13.82 9.44 13.82 9.44 L13.82 7.78 C13.82 7.78 12.73 8.72 12.73 9.44 C12.73 10.44 13.54 11.26 14.55 11.26 C15.55 11.26 16.36 10.44 16.36 9.44 Z"
                      ></Path>
                    </Svg>
                  </View>
                  <View style={styles.deals}>
                    <Svg
                      viewBox="-0 -0 21.63333333333333 21.60986666666667"
                      style={styles.path122}
                    >
                      <Path
                        strokeWidth={0}
                        fill="rgba(181,186,192,1)"
                        d="M21.63 0.00 L21.28 9.85 L10.53 21.61 L9.38 20.58 L0.00 11.91 L0.78 11.14 L11.15 0.02 L21.63 0.00 Z M18.09 4.96 C18.09 3.89 17.22 3.02 16.15 3.02 C15.08 3.02 14.21 3.89 14.21 4.96 C14.21 6.03 15.08 6.90 16.15 6.90 C17.22 6.90 18.09 6.03 18.09 4.96 Z"
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
                        fill="rgba(124,107,215,1)"
                        d="M7.75 3.88 C7.75 3.88 6.02 7.75 3.88 7.75 C1.74 7.75 0.00 6.02 0.00 3.88 C0.00 1.74 1.74 0.00 3.88 0.00 C6.02 0.00 7.75 3.88 7.75 3.88 "
                      ></Path>
                    </Svg>
                    <Svg
                      viewBox="-0 -0 16.4780701754386 13.57017543859649"
                      style={styles.fill3}
                    >
                      <Path
                        strokeWidth={0}
                        fill="rgba(124,107,215,1)"
                        d="M16.48 8.24 C16.48 12.79 12.79 13.57 8.24 13.57 C3.69 13.57 0.00 12.79 0.00 8.24 C0.00 3.69 3.69 0.00 8.24 0.00 C12.79 0.00 16.48 3.69 16.48 8.24 "
                      ></Path>
                    </Svg>
                  </View>
                </View>
              </View>
              <Svg viewBox="-0.5 -0.5 377 4" style={styles.line25}>
                <Path
                  strokeWidth={1}
                  fill="transparent"
                  stroke="rgba(227,227,227,1)"
                  d="M0.00 1.00 L375.00 1.00 "
                ></Path>
              </Svg>
            </View>
          </View>
        </View>
        <View style={styles.visaCard2}>
          <View style={styles.background2Stack}>
            <View style={styles.background2}>
              <ImageBackground
                style={styles.cardBg2}
                imageStyle={styles.cardBg2_imageStyle}
                source={require("../assets/images/Gradient_BPZMFiE.png")}
              >
                <View style={styles.tint2}></View>
              </ImageBackground>
            </View>
            <View style={styles.expiration2}>
              <Text style={styles.expires2}>EXPIRES</Text>
              <Text style={styles.style2}>09/24</Text>
            </View>
            <View style={styles.cardHolder2}>
              <Text style={styles.cardHolder12}>CARD HOLDER</Text>
              <Text style={styles.atiqurRahaman2}>ATIQUR RAHAMAN</Text>
            </View>
            <Image
              source={require("../assets/images/51970a8e521695308ccf0d7d1145c07b4ef7cf0c.png")}
              resizeMode="cover"
              style={styles.visaLogo2}
            ></Image>
          </View>
        </View>
        <View style={styles.visaCard1}>
          <View style={styles.background4Stack}>
            <View style={styles.background4}>
              <ImageBackground
                style={styles.cardBg4}
                imageStyle={styles.cardBg4_imageStyle}
                source={require("../assets/images/Gradient_BPZMFiE.png")}
              >
                <View style={styles.tint4}></View>
              </ImageBackground>
            </View>
            <View style={styles.expiration4}>
              <Text style={styles.expires4}>EXPIRES</Text>
              <Text style={styles.style4}>09/24</Text>
            </View>
            <View style={styles.cardHolder15}>
              <Text style={styles.cardHolder16}>CARD HOLDER</Text>
              <Text style={styles.atiqurRahaman4}>ATIQUR RAHAMAN</Text>
            </View>
            <Image
              source={require("../assets/images/51970a8e521695308ccf0d7d1145c07b4ef7cf0c.png")}
              resizeMode="cover"
              style={styles.visaLogo4}
            ></Image>
          </View>
        </View>
      </View>
      <View style={styles.group3}>
        <View style={styles.group4Row}>
          <View style={styles.group4}>
            <View style={styles.ovalStack}>
              <Svg viewBox="-0 -0 100 100" style={styles.oval}>
                <Path
                  strokeWidth={0}
                  fill="rgba(60,51,82,1)"
                  d="M50.00 100.00 C77.61 100.00 100.00 77.61 100.00 50.00 C100.00 22.39 77.61 0.00 50.00 0.00 C22.39 0.00 0.00 22.39 0.00 50.00 C0.00 77.61 22.39 100.00 50.00 100.00 Z"
                ></Path>
              </Svg>
              <View style={styles.image}>
                <Svg viewBox="-0 -0 37.5 37.5" style={styles.path}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(255,255,255,1)"
                    d="M33.33 37.50 L4.17 37.50 L0.00 33.33 L0.00 4.17 L4.17 0.00 L33.33 0.00 L37.50 4.17 L37.50 33.33 L33.33 37.50 Z M4.17 31.25 L33.33 31.25 L23.96 18.75 L16.67 28.13 L11.46 21.88 L4.17 31.25 Z"
                  ></Path>
                </Svg>
              </View>
            </View>
          </View>
          <View style={styles.sullyvanMarksColumn}>
            <Text style={styles.sullyvanMarks}>Sullyvan Marks</Text>
            <Text style={styles.cpf20}>CPF ***.***.*** -20</Text>
            <Text style={styles.sullyvanMarks1}>(27) 99700-0000</Text>
            <Text style={styles.sullyvanMarks2}>sullyvanmarks@gmail.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.group2StackStack}>
        <View style={styles.group2Stack}>
          <View style={styles.group2}>
            <Text style={styles.dados}>DADOS</Text>
            <View style={styles.group51}>
              <View style={styles.rectangle10}></View>
              <View style={styles.rectangle11}></View>
              <View style={styles.rectangle12}></View>
            </View>
          </View>
          <View style={styles.scrollArea}>
            <ScrollView
              horizontal={false}
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            >
              <View style={styles.group513Stack}>
                <View style={styles.group513}>
                  <View style={styles.group424Row}>
                    <View style={styles.group424}>
                      <View style={styles.rectangle3}>
                        <View style={styles.image1}>
                          <Svg
                            viewBox="-0 -0 28.57142857142856 28.57142857142856"
                            style={styles.path123}
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
                            style={styles.path224}
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
                  onPress={() => props.navigation.navigate("ProductDetail")}
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
                  onPress={() => props.navigation.navigate("ProductDetail")}
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
                  onPress={() => props.navigation.navigate("ProductDetail")}
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
            </ScrollView>
          </View>
        </View>
        <Text style={styles.ultimasCompras}>Últimas compras</Text>
        <Text style={styles.verMais}>Ver mais</Text>
      </View>
      <View style={styles.button5Row}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.button5}
        >
          <IoniconsIcon
            name="ios-arrow-back"
            style={styles.icon4}
          ></IoniconsIcon>
        </TouchableOpacity>
        <Text style={styles.inicio1}></Text>
        <Text style={styles.welcome1}>Perfil</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("InformationSetting")}
          style={styles.button4}
        >
          <FeatherIcon name="settings" style={styles.icon}></FeatherIcon>
        </TouchableOpacity>
      </View>
      <View style={styles.group423Stack}>
        <View style={styles.group423}>
          <View style={styles.group512}>
            <View style={styles.rectangle102}></View>
            <View style={styles.rectangle112}></View>
            <View style={styles.rectangle122}></View>
          </View>
        </View>
        <Text style={styles.produtos5}>PRODUTOS</Text>
      </View>
      <View style={styles.cartoesDeCreditoRow}>
        <Text style={styles.cartoesDeCredito}>CARTÕES DE CRÉDITO E DÉBITO</Text>
        <FontAwesomeIcon name="trash" style={styles.icon3}></FontAwesomeIcon>
        <EntypoIcon name="circle-with-plus" style={styles.icon2}></EntypoIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  visaCard3: {
    top: 0,
    left: 355,
    width: 325,
    height: 197,
    position: "absolute",
    opacity: 1
  },
  background3: {
    top: 0,
    left: 0,
    width: 325,
    height: 197,
    position: "absolute",
    opacity: 1
  },
  cardBg3: {
    width: 325,
    height: 197,
    backgroundColor: "transparent",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 3,
    overflow: "hidden"
  },
  cardBg3_imageStyle: {
    opacity: 1
  },
  tint3: {
    width: 303,
    height: 195,
    backgroundColor: "rgba(255,255,255,0.01999999955296516)",
    opacity: 1,
    transform: [
      {
        scaleX: -1
      },
      {
        scaleY: -1
      }
    ],
    marginLeft: 11
  },
  expiration3: {
    top: 113,
    left: 203,
    width: 40,
    height: 27,
    position: "absolute"
  },
  expires3: {
    width: 36,
    height: 8,
    backgroundColor: "transparent",
    color: "rgba(211,221,229,1)",
    opacity: 1,
    fontSize: 7,
    letterSpacing: 1.5,
    marginTop: 1,
    marginLeft: 1
  },
  style3: {
    width: 40,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    opacity: 1,
    fontSize: 15,
    marginTop: 3
  },
  cardHolder13: {
    top: 113,
    left: 26,
    width: 110,
    height: 27,
    position: "absolute"
  },
  cardHolder14: {
    width: 57,
    height: 8,
    backgroundColor: "transparent",
    color: "rgba(211,221,229,1)",
    opacity: 1,
    fontSize: 7,
    letterSpacing: 1.5,
    marginTop: 1,
    marginLeft: 1
  },
  atiqurRahaman3: {
    width: 110,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    opacity: 1,
    fontSize: 15,
    marginTop: 3
  },
  visaLogo3: {
    top: 24,
    left: 205,
    width: 45,
    height: 13,
    backgroundColor: "transparent",
    position: "absolute"
  },
  background3Stack: {
    width: 325,
    height: 197
  },
  tabBar1: {
    top: 82,
    width: 375,
    height: 95,
    position: "absolute",
    left: 0
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
    opacity: 0.33,
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
  path122: {
    width: 22,
    height: 22,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  profile3: {
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
  rect5Row: {
    height: 26,
    flexDirection: "row",
    flex: 1,
    marginRight: 35,
    marginLeft: 30,
    marginTop: 21
  },
  line25: {
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
  visaCard3Stack: {
    top: 0,
    left: 309,
    width: 680,
    height: 197,
    position: "absolute"
  },
  visaCard2: {
    top: 0,
    left: 0,
    width: 325,
    height: 197,
    position: "absolute",
    opacity: 1
  },
  background2: {
    top: 0,
    left: 0,
    width: 325,
    height: 197,
    position: "absolute",
    opacity: 1
  },
  cardBg2: {
    width: 325,
    height: 197,
    backgroundColor: "transparent",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 3,
    overflow: "hidden"
  },
  cardBg2_imageStyle: {
    opacity: 1
  },
  tint2: {
    width: 303,
    height: 195,
    backgroundColor: "rgba(255,255,255,0.01999999955296516)",
    opacity: 1,
    transform: [
      {
        scaleX: -1
      },
      {
        scaleY: -1
      }
    ],
    marginLeft: 11
  },
  expiration2: {
    top: 113,
    left: 203,
    width: 40,
    height: 27,
    position: "absolute"
  },
  expires2: {
    width: 36,
    height: 8,
    backgroundColor: "transparent",
    color: "rgba(211,221,229,1)",
    opacity: 1,
    fontSize: 7,
    letterSpacing: 1.5,
    marginTop: 1,
    marginLeft: 1
  },
  style2: {
    width: 40,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    opacity: 1,
    fontSize: 15,
    marginTop: 3
  },
  cardHolder2: {
    top: 113,
    left: 26,
    width: 110,
    height: 27,
    position: "absolute"
  },
  cardHolder12: {
    width: 57,
    height: 8,
    backgroundColor: "transparent",
    color: "rgba(211,221,229,1)",
    opacity: 1,
    fontSize: 7,
    letterSpacing: 1.5,
    marginTop: 1,
    marginLeft: 1
  },
  atiqurRahaman2: {
    width: 110,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    opacity: 1,
    fontSize: 15,
    marginTop: 3
  },
  visaLogo2: {
    top: 24,
    left: 205,
    width: 45,
    height: 13,
    backgroundColor: "transparent",
    position: "absolute"
  },
  background2Stack: {
    width: 325,
    height: 197
  },
  visaCard1: {
    top: 0,
    left: 332,
    width: 325,
    height: 197,
    position: "absolute",
    opacity: 1
  },
  background4: {
    top: 0,
    left: 0,
    width: 325,
    height: 197,
    position: "absolute",
    opacity: 1
  },
  cardBg4: {
    width: 325,
    height: 197,
    backgroundColor: "transparent",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 3,
    overflow: "hidden"
  },
  cardBg4_imageStyle: {
    opacity: 1
  },
  tint4: {
    width: 303,
    height: 195,
    backgroundColor: "rgba(255,255,255,0.01999999955296516)",
    opacity: 1,
    transform: [
      {
        scaleX: -1
      },
      {
        scaleY: -1
      }
    ],
    marginLeft: 11
  },
  expiration4: {
    top: 113,
    left: 203,
    width: 40,
    height: 27,
    position: "absolute"
  },
  expires4: {
    width: 36,
    height: 8,
    backgroundColor: "transparent",
    color: "rgba(211,221,229,1)",
    opacity: 1,
    fontSize: 7,
    letterSpacing: 1.5,
    marginTop: 1,
    marginLeft: 1
  },
  style4: {
    width: 40,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    opacity: 1,
    fontSize: 15,
    marginTop: 3
  },
  cardHolder15: {
    top: 113,
    left: 26,
    width: 110,
    height: 27,
    position: "absolute"
  },
  cardHolder16: {
    width: 57,
    height: 8,
    backgroundColor: "transparent",
    color: "rgba(211,221,229,1)",
    opacity: 1,
    fontSize: 7,
    letterSpacing: 1.5,
    marginTop: 1,
    marginLeft: 1
  },
  atiqurRahaman4: {
    width: 110,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    opacity: 1,
    fontSize: 15,
    marginTop: 3
  },
  visaLogo4: {
    top: 24,
    left: 205,
    width: 45,
    height: 13,
    backgroundColor: "transparent",
    position: "absolute"
  },
  background4Stack: {
    width: 325,
    height: 197
  },
  visaCard3StackStack: {
    width: 989,
    height: 197,
    marginTop: 645,
    marginLeft: -309
  },
  group3: {
    width: 315,
    height: 100,
    marginTop: -750,
    marginLeft: 30
  },
  group4: {
    width: 100,
    height: 100
  },
  oval: {
    top: 0,
    left: 0,
    width: 100,
    height: 100,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  image: {
    top: 31,
    left: 31,
    width: 38,
    height: 38,
    position: "absolute"
  },
  path: {
    width: 38,
    height: 38,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalStack: {
    width: 100,
    height: 100
  },
  sullyvanMarks: {
    color: "rgba(30,45,62,1)",
    fontFamily: "roboto-regular"
  },
  cpf20: {
    color: "rgba(30,45,62,1)",
    fontFamily: "roboto-regular",
    marginTop: 4
  },
  sullyvanMarks1: {
    color: "rgba(30,45,62,1)",
    fontFamily: "roboto-regular",
    marginTop: 11
  },
  sullyvanMarks2: {
    color: "rgba(30,45,62,1)",
    fontFamily: "roboto-regular",
    marginTop: 11
  },
  sullyvanMarksColumn: {
    width: 168,
    marginLeft: 23,
    marginTop: 18
  },
  group4Row: {
    height: 100,
    flexDirection: "row",
    marginRight: 24
  },
  group2: {
    top: 178,
    left: 0,
    width: 326,
    height: 80,
    position: "absolute"
  },
  dados: {
    color: "rgba(30,45,62,1)",
    fontFamily: "roboto-700"
  },
  group51: {
    width: 326,
    height: 50,
    marginTop: 16
  },
  rectangle10: {
    width: 326,
    height: 10,
    backgroundColor: "rgba(238,238,238,1)",
    borderRadius: 20
  },
  rectangle11: {
    width: 243,
    height: 10,
    backgroundColor: "rgba(238,238,238,1)",
    borderRadius: 20,
    marginTop: 10
  },
  rectangle12: {
    width: 75,
    height: 10,
    backgroundColor: "rgba(238,238,238,1)",
    borderRadius: 20,
    marginTop: 10
  },
  scrollArea: {
    top: 0,
    left: 0,
    width: 444,
    height: 192,
    position: "absolute"
  },
  scrollArea_contentContainerStyle: {
    width: 444,
    height: 192
  },
  group513: {
    top: 0,
    left: 4,
    width: 440,
    height: 130,
    position: "absolute",
    flexDirection: "row"
  },
  group424: {
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
  path123: {
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
  path224: {
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
  group424Row: {
    height: 100,
    flexDirection: "row",
    flex: 1,
    marginTop: 30
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
  group513Stack: {
    width: 444,
    height: 192
  },
  group2Stack: {
    top: 0,
    left: 0,
    width: 444,
    height: 258,
    position: "absolute"
  },
  ultimasCompras: {
    top: 8,
    left: 0,
    color: "rgba(30,45,62,1)",
    position: "absolute",
    fontFamily: "roboto-regular"
  },
  verMais: {
    top: 8,
    left: 280,
    color: "rgba(30,45,62,1)",
    position: "absolute",
    fontFamily: "roboto-regular"
  },
  group2StackStack: {
    width: 444,
    height: 258,
    marginTop: 14,
    marginLeft: 20
  },
  button5: {
    width: 10,
    height: 26
  },
  icon4: {
    color: "rgba(124,107,215,1)",
    fontSize: 26
  },
  inicio1: {
    color: "rgba(207,69,92,1)",
    fontFamily: "roboto-900",
    marginLeft: 9,
    marginTop: 24
  },
  welcome1: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 21,
    fontFamily: "roboto-700",
    marginLeft: 8,
    marginTop: 3
  },
  button4: {
    width: 26,
    height: 26,
    marginLeft: 225
  },
  icon: {
    color: "rgba(124,107,215,1)",
    fontSize: 26
  },
  button5Row: {
    height: 26,
    flexDirection: "row",
    marginTop: -416,
    marginLeft: 16,
    marginRight: 30
  },
  group423: {
    top: 7,
    left: 0,
    width: 326,
    height: 80,
    position: "absolute"
  },
  group512: {
    width: 326,
    height: 50,
    marginTop: 30
  },
  rectangle102: {
    width: 326,
    height: 10,
    backgroundColor: "rgba(238,238,238,1)",
    borderRadius: 20
  },
  rectangle112: {
    width: 243,
    height: 10,
    backgroundColor: "rgba(238,238,238,1)",
    borderRadius: 20,
    marginTop: 10
  },
  rectangle122: {
    width: 75,
    height: 10,
    backgroundColor: "rgba(238,238,238,1)",
    borderRadius: 20,
    marginTop: 10
  },
  produtos5: {
    top: 0,
    left: 0,
    color: "rgba(30,45,62,1)",
    position: "absolute",
    fontFamily: "roboto-700"
  },
  group423Stack: {
    width: 326,
    height: 87,
    marginTop: 425,
    marginLeft: 20
  },
  cartoesDeCredito: {
    color: "rgba(30,45,62,1)",
    fontFamily: "roboto-700",
    marginTop: 13
  },
  icon3: {
    color: "rgba(208,2,27,1)",
    fontSize: 26,
    marginLeft: 77
  },
  icon2: {
    color: "rgba(124,107,215,1)",
    fontSize: 26,
    marginLeft: 6
  },
  cartoesDeCreditoRow: {
    height: 27,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 20,
    marginRight: 20
  }
});

export default Profile1;
