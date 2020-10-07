import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Svg, { Path, Defs, Mask } from "react-native-svg";
import Icon from "react-native-vector-icons/Ionicons";

function ProductDetail(props) {
  return (
    <View style={styles.root}>
      <View style={styles.product}>
        <View style={styles.bgStack}>
          <View style={styles.bg}>
            <View style={styles.statusBar}>
              <View style={styles.timeRow}>
                <View style={styles.time}>
                  <Text style={styles.time1}>9:41</Text>
                </View>
                <View style={styles.connections}>
                  <View style={styles.cellularConnectionRow}>
                    <View style={styles.cellularConnection}>
                      <View style={styles.cellularConnectionPathFiller}></View>
                      <Svg
                        viewBox="-0 -0 17 10.66666666666667"
                        style={styles.cellularConnectionPath}
                      >
                        <Path
                          strokeWidth={0}
                          fill="rgba(255,255,255,1)"
                          d="M1.00 6.67 L0.00 7.67 L0.00 9.67 L1.00 10.67 L2.00 10.67 L3.00 9.67 L3.00 7.67 L2.00 6.67 Z M4.67 5.67 L4.67 9.67 L5.67 10.67 L6.67 10.67 L7.67 9.67 L7.67 5.67 L6.67 4.67 L5.67 4.67 L4.67 5.67 Z M9.33 3.33 L9.33 9.67 L10.33 10.67 L11.33 10.67 L12.33 9.67 L12.33 3.33 L11.33 2.33 L10.33 2.33 L9.33 3.33 Z M15.00 0.00 L14.00 1.00 L14.00 9.67 L15.00 10.67 L16.00 10.67 L17.00 9.67 L17.00 1.00 L16.00 0.00 Z"
                        ></Path>
                      </Svg>
                    </View>
                    <View style={styles.wifi}>
                      <View style={styles.wifiPathFiller}></View>
                      <Svg
                        viewBox="-0 -0 15.33333333333333 11"
                        style={styles.wifiPath}
                      >
                        <Path
                          strokeWidth={0}
                          fill="rgba(255,255,255,1)"
                          d="M7.67 2.24 C7.67 2.24 3.30 3.08 1.69 4.58 C1.57 4.70 1.25 4.58 1.25 4.58 L0.09 3.43 C0.09 3.43 -0.00 3.29 0.00 3.20 C0.00 3.12 0.04 3.04 0.10 2.98 C4.33 -0.99 11.00 -0.99 15.24 2.98 C15.30 3.04 15.33 3.12 15.33 3.20 C15.33 3.29 15.24 3.43 15.24 3.43 L14.08 4.58 C14.08 4.58 13.77 4.70 13.64 4.58 C12.03 3.08 7.67 2.24 7.67 2.24 Z M7.67 5.97 C7.67 5.97 5.26 6.42 4.36 7.25 C4.23 7.36 3.92 7.24 3.92 7.24 L2.76 6.06 C2.76 6.06 2.67 5.92 2.67 5.83 C2.67 5.74 2.70 5.66 2.77 5.60 C5.53 3.02 9.81 3.02 12.57 5.60 C12.63 5.66 12.67 5.74 12.67 5.83 C12.67 5.92 12.57 6.06 12.57 6.06 L11.41 7.24 C11.41 7.24 11.10 7.36 10.98 7.25 C10.07 6.42 7.67 5.97 7.67 5.97 Z M7.89 10.91 C7.89 10.91 7.75 11.00 7.67 11.00 C7.58 11.00 7.44 10.91 7.44 10.91 L5.43 8.92 C5.43 8.92 5.33 8.78 5.33 8.69 C5.34 8.60 5.37 8.52 5.44 8.47 C6.72 7.40 8.61 7.40 9.90 8.47 C9.96 8.52 10.00 8.60 10.00 8.69 C10.00 8.78 9.91 8.92 9.91 8.92 L7.89 10.91 Z"
                        ></Path>
                      </Svg>
                    </View>
                    <View style={styles.battery}>
                      <View style={styles.borderRow}>
                        <View style={styles.border}>
                          <View style={styles.capacity}></View>
                        </View>
                        <Svg
                          viewBox="-0 -0 1.333333333333333 4"
                          style={styles.cap}
                        >
                          <Path
                            strokeWidth={0}
                            fill="rgba(255,255,255,1)"
                            fillOpacity={0.4}
                            strokeOpacity={0.4}
                            d="M0.00 0.00 L0.00 4.00 C0.81 3.66 1.33 2.87 1.33 2.00 C1.33 1.13 0.81 0.34 0.00 0.00 "
                          ></Path>
                        </Svg>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.button3StackRow}>
              <View style={styles.button3Stack}>
                <TouchableOpacity
                  onPress={() => props.navigation.goBack()}
                  style={styles.button3}
                ></TouchableOpacity>
                <TouchableOpacity
                  onPress={() => props.navigation.goBack()}
                  style={styles.button5}
                >
                  <Icon name="ios-arrow-back" style={styles.icon4}></Icon>
                </TouchableOpacity>
              </View>
              <View style={styles.bell}></View>
            </View>
            <Text style={styles.beatsBySoloDrDr}>
              Beats By Solo{"\n"}Dr. Dre
            </Text>
          </View>
          <Image
            source={require("../assets/images/bc286f44f5bb53b7ce496cc7c9c30f1b75f598d5.png")}
            resizeMode="cover"
            style={styles.product1}
          ></Image>
        </View>
      </View>
      <View style={styles.detail}>
        <View style={styles.experienceYourMusiStackStack}>
          <View style={styles.experienceYourMusiStack}>
            <Text style={styles.experienceYourMusi}>
              Experimente sua música{"\n"}como nunca antes.
            </Text>
            <Image
              source={require("../assets/images/d529a7e76967d30f82d7615b1bd08927c96fc086.png")}
              resizeMode="cover"
              style={styles.foldedcaseJpgLarge2X}
            ></Image>
            <View style={styles.rectangle2}></View>
          </View>
          <View style={styles.battery1}>
            <Svg viewBox="-0 -0 10 5.3125" style={styles.path4}>
              <Path
                strokeWidth={0}
                fill="rgba(30,45,62,1)"
                d="M8.92 1.25 L6.88 1.25 L6.88 0.00 L3.13 0.00 L3.13 1.25 L1.08 1.25 C0.49 1.25 0.00 1.74 0.00 2.33 L0.00 5.31 L10.00 5.31 L10.00 2.33 C10.00 1.74 9.51 1.25 8.92 1.25 Z"
              ></Path>
            </Svg>
            <View style={styles.rectangle}></View>
            <View style={styles.rectangle1}></View>
            <Svg viewBox="-0 -0 10 4.0625" style={styles.path5}>
              <Path
                strokeWidth={0}
                fill="rgba(30,45,62,1)"
                d="M0.00 2.98 C0.00 3.58 0.49 4.06 1.08 4.06 L8.92 4.06 C9.51 4.06 10.00 3.58 10.00 2.98 L10.00 0.00 L0.00 0.00 Z"
              ></Path>
            </Svg>
          </View>
          <Text style={styles.upTo40HourBatter}>Bateria de até 40 horas</Text>
          <Text style={styles.wiFi}>Wi-Fi</Text>
          <View style={styles.wifi1}>
            <View style={styles.path6Stack}>
              <Svg
                viewBox="-0 -0 10.5765306122449 3.463010204081633"
                style={styles.path6}
              >
                <Path
                  strokeWidth={0}
                  fill="rgba(30,45,62,1)"
                  d="M0.23 2.09 C-0.08 2.40 -0.08 2.91 0.23 3.23 C0.55 3.54 1.05 3.54 1.37 3.23 C3.53 1.07 7.05 1.07 9.21 3.23 C9.37 3.38 9.57 3.46 9.78 3.46 C9.98 3.46 10.19 3.38 10.34 3.23 C10.65 2.92 10.65 2.41 10.34 2.09 Z"
                ></Path>
              </Svg>
              <Svg
                viewBox="-0 -0 14.97857142857143 4.369897959183674"
                style={styles.path8}
              >
                <Path
                  strokeWidth={0}
                  fill="rgba(30,45,62,1)"
                  d="M14.74 3.00 C10.74 -1.00 4.24 -1.00 0.23 3.00 C-0.08 3.31 -0.08 3.82 0.23 4.13 C0.55 4.45 1.05 4.45 1.37 4.13 C4.74 0.76 10.24 0.76 13.61 4.13 C13.77 4.29 13.97 4.37 14.18 4.37 C14.38 4.37 14.59 4.29 14.74 4.13 Z"
                ></Path>
              </Svg>
            </View>
            <Svg
              viewBox="-0 -0 6.238775510204083 2.564923745074442"
              style={styles.path7}
            >
              <Path
                strokeWidth={0}
                fill="rgba(30,45,62,1)"
                d="M0.23 1.19 C-0.08 1.51 -0.08 2.01 0.23 2.33 C0.55 2.64 1.05 2.64 1.37 2.33 C2.33 1.36 3.91 1.36 4.87 2.33 C5.03 2.49 5.23 2.56 5.44 2.56 C5.64 2.56 5.85 2.49 6.00 2.33 C6.32 2.02 6.32 1.51 6.00 1.20 C4.42 -0.40 1.83 -0.40 0.23 1.19 Z"
              ></Path>
            </Svg>
            <Svg
              viewBox="-0 -0 2.13673469387755 2.13673469387755"
              style={styles.oval1}
            >
              <Path
                strokeWidth={0}
                fill="rgba(30,45,62,1)"
                d="M1.07 2.14 C1.66 2.14 2.14 1.66 2.14 1.07 C2.14 0.48 1.66 0.00 1.07 0.00 C0.48 0.00 0.00 0.48 0.00 1.07 C0.00 1.66 0.48 2.14 1.07 2.14 Z"
              ></Path>
            </Svg>
          </View>
        </View>
        <Text style={styles.withFastFuelItO}>
          Com o Fast Fuel, são necessários apenas alguns minutos para carregar
          até 3 horas de jogo, para que você possa avançar mais rapidamente.
        </Text>
      </View>
      <View style={styles.button2StackStack}>
        <View style={styles.button2Stack}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("YourBag")}
            style={styles.button2}
          ></TouchableOpacity>
          <Text style={styles.addToCard}>Adicionar ao cartão</Text>
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
                          <Mask id="tEcwoZ" x={0} y={0} width={28} height={25}>
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
                          mask="url(#tEcwoZ)"
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
                      style={styles.path12}
                    >
                      <Path
                        strokeWidth={0}
                        fill="rgba(124,107,215,1)"
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
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Untitled")}
          style={styles.button4}
        >
          <Text style={styles.buyNow120}>Compre agora 120 $</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white"
  },
  product: {
    height: 411,
    marginTop: -5
  },
  bg: {
    top: 0,
    left: 0,
    width: 375,
    height: 377,
    backgroundColor: "rgba(124,107,215,1)",
    position: "absolute",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 80,
    shadowOffset: {
      height: 20,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.15)",
    shadowOpacity: 1,
    shadowRadius: 40,
    overflow: "hidden"
  },
  statusBar: {
    width: 340,
    height: 18,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 21
  },
  time: {
    width: 55,
    height: 18
  },
  time1: {
    height: 18,
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    letterSpacing: -0.33,
    textAlign: "center",
    marginRight: 1
  },
  connections: {
    width: 68,
    height: 12,
    flexDirection: "row",
    marginLeft: 217,
    marginTop: 3
  },
  cellularConnection: {
    width: 18,
    height: 12,
    flexDirection: "row"
  },
  cellularConnectionPathFiller: {
    flex: 1,
    flexDirection: "row"
  },
  cellularConnectionPath: {
    width: 17,
    height: 11,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 1
  },
  wifi: {
    width: 16,
    height: 12,
    flexDirection: "row",
    marginLeft: 4
  },
  wifiPathFiller: {
    flex: 1,
    flexDirection: "row"
  },
  wifiPath: {
    width: 15,
    height: 11,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  battery: {
    width: 25,
    height: 12,
    flexDirection: "row",
    marginLeft: 5
  },
  border: {
    width: 22,
    height: 11,
    backgroundColor: "transparent",
    borderRadius: 2.67,
    borderColor: "rgba(255,255,255,0.35)",
    borderWidth: 1
  },
  capacity: {
    width: 18,
    height: 7,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 1.33,
    marginTop: 2,
    marginLeft: 2
  },
  cap: {
    width: 1,
    height: 4,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 1,
    marginTop: 4
  },
  borderRow: {
    height: 11,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  },
  cellularConnectionRow: {
    height: 12,
    flexDirection: "row",
    flex: 1
  },
  timeRow: {
    height: 18,
    flexDirection: "row",
    flex: 1
  },
  button3: {
    top: 7,
    left: 4,
    width: 20,
    height: 14,
    position: "absolute"
  },
  button5: {
    top: 0,
    left: 0,
    width: 10,
    height: 26,
    position: "absolute"
  },
  icon4: {
    color: "rgba(124,107,215,1)",
    fontSize: 26
  },
  button3Stack: {
    width: 24,
    height: 26
  },
  bell: {
    width: 23,
    height: 26,
    marginLeft: 241,
    marginTop: 5
  },
  button3StackRow: {
    height: 31,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 16,
    marginRight: 71
  },
  beatsBySoloDrDr: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    fontFamily: "roboto-300",
    marginTop: 25,
    marginLeft: 21
  },
  product1: {
    top: 156,
    left: 70,
    width: 255,
    height: 255,
    backgroundColor: "transparent",
    position: "absolute"
  },
  bgStack: {
    width: 375,
    height: 411
  },
  detail: {
    width: 346,
    height: 233,
    marginTop: 4,
    marginLeft: 21
  },
  experienceYourMusi: {
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    position: "absolute",
    fontSize: 21,
    fontFamily: "roboto-500",
    lineHeight: 26
  },
  foldedcaseJpgLarge2X: {
    top: 7,
    left: 233,
    width: 113,
    height: 138,
    backgroundColor: "transparent",
    position: "absolute"
  },
  rectangle2: {
    top: 44,
    left: 220,
    width: 19,
    height: 36,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute"
  },
  experienceYourMusiStack: {
    top: 0,
    left: 0,
    width: 346,
    height: 145,
    position: "absolute"
  },
  battery1: {
    top: 76,
    left: 2,
    width: 10,
    height: 19,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute"
  },
  path4: {
    width: 10,
    height: 5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangle: {
    width: 10,
    height: 4,
    backgroundColor: "rgba(30,45,62,1)",
    marginTop: 1
  },
  rectangle1: {
    width: 10,
    height: 4,
    backgroundColor: "rgba(30,45,62,1)"
  },
  path5: {
    width: 10,
    height: 4,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 1
  },
  upTo40HourBatter: {
    top: 78,
    left: 21,
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-300"
  },
  wiFi: {
    top: 113,
    left: 21,
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-300"
  },
  wifi1: {
    top: 115,
    left: 0,
    width: 15,
    height: 12,
    position: "absolute"
  },
  path6: {
    top: 3,
    left: 2,
    width: 11,
    height: 3,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  path8: {
    top: 0,
    left: 0,
    width: 15,
    height: 4,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  path6Stack: {
    width: 15,
    height: 6
  },
  path7: {
    width: 6,
    height: 3,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 4
  },
  oval1: {
    width: 2,
    height: 2,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 6
  },
  experienceYourMusiStackStack: {
    width: 346,
    height: 145
  },
  withFastFuelItO: {
    width: 332,
    height: 72,
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 14,
    fontFamily: "roboto-300",
    lineHeight: 22,
    marginTop: 16,
    marginLeft: 7
  },
  button2: {
    top: 0,
    left: 249,
    width: 112,
    height: 82,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    shadowOffset: {
      height: -20,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.12)",
    shadowOpacity: 1,
    shadowRadius: 40
  },
  addToCard: {
    top: 27,
    left: 260,
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-700"
  },
  tabBar1: {
    top: 74,
    left: 0,
    width: 375,
    height: 95,
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
  path12: {
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
  button2Stack: {
    top: 0,
    left: 0,
    width: 375,
    height: 169,
    position: "absolute"
  },
  button4: {
    top: 0,
    left: 19,
    width: 230,
    height: 82,
    backgroundColor: "rgba(124,107,215,1)",
    position: "absolute",
    shadowOffset: {
      height: -20,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.12)",
    shadowOpacity: 1,
    shadowRadius: 40
  },
  buyNow120: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "roboto-700",
    marginTop: 33,
    marginLeft: 51
  },
  button2StackStack: {
    width: 375,
    height: 169
  }
});

export default ProductDetail;
