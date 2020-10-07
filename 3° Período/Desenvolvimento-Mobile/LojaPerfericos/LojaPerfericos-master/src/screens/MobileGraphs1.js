import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";

function MobileGraphs1(props) {
  return (
    <View style={styles.root}>
      <View style={styles.group8}>
        <View style={styles.numbersRow}>
          <Text style={styles.numbers}>Números</Text>
          <View style={styles.ioniconsSvgMdMore}>
            <Svg viewBox="-0 -0 4 16" style={styles.path}>
              <Path
                strokeWidth={0}
                fill="rgba(66,80,99,1)"
                d="M2.00 4.00 C0.90 4.00 0.00 3.10 0.00 2.00 C0.00 0.90 0.90 0.00 2.00 0.00 C3.10 0.00 4.00 0.90 4.00 2.00 C4.00 3.10 3.10 4.00 2.00 4.00 Z M2.00 16.00 C0.90 16.00 0.00 15.10 0.00 14.00 C0.00 12.90 0.90 12.00 2.00 12.00 C3.10 12.00 4.00 12.90 4.00 14.00 C4.00 15.10 3.10 16.00 2.00 16.00 Z M2.00 10.00 C0.90 10.00 0.00 9.10 0.00 8.00 C0.00 6.90 0.90 6.00 2.00 6.00 C3.10 6.00 4.00 6.90 4.00 8.00 C4.00 9.10 3.10 10.00 2.00 10.00 Z"
              ></Path>
            </Svg>
          </View>
        </View>
        <Text style={styles.shortDescriptionAb}>
          Resumo mensal da loja online
        </Text>
      </View>
      <View style={styles.group17}>
        <View style={styles.rectangle}>
          <View style={styles.group31Row}>
            <View style={styles.group31}>
              <View style={styles.ovalRow}>
                <Svg viewBox="-0 -0 5 5" style={styles.oval}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(31,144,250,1)"
                    d="M2.50 5.00 C3.88 5.00 5.00 3.88 5.00 2.50 C5.00 1.12 3.88 0.00 2.50 0.00 C1.12 0.00 0.00 1.12 0.00 2.50 C0.00 3.88 1.12 5.00 2.50 5.00 Z"
                  ></Path>
                </Svg>
                <Text style={styles.style}>475</Text>
              </View>
              <Text style={styles.variable1}>Produto 1</Text>
            </View>
            <View style={styles.group4}>
              <View style={styles.group32}>
                <View style={styles.oval1Row}>
                  <Svg viewBox="-0 -0 5 5" style={styles.oval1}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(248,201,157,1)"
                      d="M2.50 5.00 C3.88 5.00 5.00 3.88 5.00 2.50 C5.00 1.12 3.88 0.00 2.50 0.00 C1.12 0.00 0.00 1.12 0.00 2.50 C0.00 3.88 1.12 5.00 2.50 5.00 Z"
                    ></Path>
                  </Svg>
                  <Text style={styles.style1}>220</Text>
                </View>
                <Text style={styles.variable2}>Produto 2</Text>
              </View>
            </View>
            <View style={styles.group5}>
              <View style={styles.group33}>
                <View style={styles.oval2Row}>
                  <Svg viewBox="-0 -0 5 5" style={styles.oval2}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(94,206,177,1)"
                      d="M2.50 5.00 C3.88 5.00 5.00 3.88 5.00 2.50 C5.00 1.12 3.88 0.00 2.50 0.00 C1.12 0.00 0.00 1.12 0.00 2.50 C0.00 3.88 1.12 5.00 2.50 5.00 Z"
                    ></Path>
                  </Svg>
                  <Text style={styles.style2}>471</Text>
                </View>
                <Text style={styles.variable3}>Produto 3</Text>
              </View>
            </View>
          </View>
          <View style={styles.group3Row}>
            <View style={styles.group3}>
              <Svg
                viewBox="-0.5 -0.5 82.00000000000001 12"
                style={styles.path3}
              >
                <Path
                  strokeWidth={1}
                  fill="transparent"
                  stroke="rgba(31,144,250,1)"
                  d="M0.00 10.00 L13.96 4.14 L27.66 7.07 L39.60 0.00 L51.13 7.07 L67.08 10.00 L80.00 7.07 "
                ></Path>
              </Svg>
            </View>
            <View style={styles.group34}>
              <Svg viewBox="-0.5 -0.5 82 14.766834821467" style={styles.path31}>
                <Path
                  strokeWidth={1}
                  fill="transparent"
                  stroke="rgba(248,201,157,1)"
                  d="M0.00 6.00 L13.96 0.14 L27.66 7.07 L39.60 0.00 L51.13 3.07 L67.08 6.00 L80.00 12.77 "
                ></Path>
              </Svg>
            </View>
            <View style={styles.group35}>
              <Svg viewBox="-0.5 -0.5 82 14.766834821467" style={styles.path32}>
                <Path
                  strokeWidth={1}
                  fill="transparent"
                  stroke="rgba(94,206,177,1)"
                  d="M0.00 6.00 L13.96 0.14 L27.66 7.07 L39.60 0.00 L51.13 3.07 L67.08 6.00 L80.00 12.77 "
                ></Path>
              </Svg>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.group171}>
        <View style={styles.rectangle1}>
          <Text style={styles.widgetTitleGoesHe}>Produtos mais buscados</Text>
          <View style={styles.group18}>
            <Text style={styles.variable11}>Produto</Text>
            <View style={styles.rectangle3Row}>
              <View style={styles.rectangle3}></View>
              <Text style={styles.style3}>93%</Text>
            </View>
          </View>
          <View style={styles.group181Stack}>
            <View style={styles.group181}>
              <View style={styles.rectangle31Row}>
                <View style={styles.rectangle31}></View>
                <Text style={styles.style4}>73%</Text>
              </View>
            </View>
            <Text style={styles.variable32}>Produto</Text>
          </View>
          <View style={styles.group182}>
            <Text style={styles.variable31}>Produto</Text>
            <View style={styles.rectangle32Row}>
              <View style={styles.rectangle32}></View>
              <Text style={styles.style5}>73%</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.group183}>
        <View style={styles.rectangle2}>
          <View style={styles.group16Stack}>
            <View style={styles.group16}>
              <View style={styles.group2Row}>
                <View style={styles.group2}>
                  <Text style={styles.m2}>4.9m</Text>
                  <Text style={styles.followers}>LUCRO</Text>
                </View>
                <View style={styles.group23}>
                  <Text style={styles.k2}>+12k</Text>
                  <Text style={styles.likes}>NOVOS CLIENTES</Text>
                </View>
                <View style={styles.group21}>
                  <Text style={styles.style6}>+9,231</Text>
                  <Text style={styles.comments}>MENSAGENS</Text>
                </View>
              </View>
              <View style={styles.group22Row}>
                <View style={styles.group22}>
                  <Text style={styles.style7}>2,149</Text>
                </View>
                <View style={styles.group24}>
                  <Text style={styles.style8}>+59%</Text>
                </View>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("ProdutoCarrinho")}
                  style={styles.button}
                >
                  <View style={styles.group25}>
                    <Text style={styles.m1}>1.9m</Text>
                    <Text style={styles.reach2}>CLIENTES</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.reach1}>PRODUTO {"\n"}ESTOQUE</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  group8: {
    width: 335,
    height: 60,
    marginTop: 84,
    marginLeft: 20
  },
  numbers: {
    backgroundColor: "transparent",
    color: "rgba(30,35,42,1)",
    fontSize: 26,
    fontFamily: "poppins-600"
  },
  ioniconsSvgMdMore: {
    width: 4,
    height: 16,
    marginLeft: 210,
    marginTop: 10
  },
  path: {
    width: 4,
    height: 16,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  numbersRow: {
    height: 26,
    flexDirection: "row"
  },
  shortDescriptionAb: {
    backgroundColor: "transparent",
    color: "rgba(159,168,178,1)",
    fontSize: 13,
    fontFamily: "poppins-regular",
    marginTop: 15
  },
  group17: {
    width: 355,
    height: 110,
    marginTop: 256,
    marginLeft: 10
  },
  rectangle: {
    width: 355,
    height: 110,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 6,
    borderColor: "rgba(159,168,178,0.39)",
    borderWidth: 1
  },
  group31: {
    width: 57,
    height: 47
  },
  oval: {
    width: 5,
    height: 5,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 11
  },
  style: {
    backgroundColor: "transparent",
    color: "rgba(30,35,42,1)",
    fontSize: 18,
    fontFamily: "poppins-600",
    marginLeft: 5
  },
  ovalRow: {
    height: 18,
    flexDirection: "row",
    marginRight: 15
  },
  variable1: {
    backgroundColor: "transparent",
    color: "rgba(66,80,99,1)",
    fontSize: 12,
    fontFamily: "poppins-regular",
    marginTop: 12
  },
  group4: {
    width: 60,
    height: 47,
    marginLeft: 63
  },
  group32: {
    width: 60,
    height: 47
  },
  oval1: {
    width: 5,
    height: 5,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 11
  },
  style1: {
    backgroundColor: "transparent",
    color: "rgba(30,35,42,1)",
    fontSize: 18,
    fontFamily: "poppins-600",
    marginLeft: 5
  },
  oval1Row: {
    height: 18,
    flexDirection: "row",
    marginRight: 18
  },
  variable2: {
    backgroundColor: "transparent",
    color: "rgba(66,80,99,1)",
    fontSize: 12,
    fontFamily: "poppins-regular",
    marginTop: 12
  },
  group5: {
    width: 60,
    height: 47,
    marginLeft: 55
  },
  group33: {
    width: 60,
    height: 47
  },
  oval2: {
    width: 5,
    height: 5,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 11
  },
  style2: {
    backgroundColor: "transparent",
    color: "rgba(30,35,42,1)",
    fontSize: 18,
    fontFamily: "poppins-600",
    marginLeft: 5
  },
  oval2Row: {
    height: 18,
    flexDirection: "row",
    marginRight: 23
  },
  variable3: {
    backgroundColor: "transparent",
    color: "rgba(66,80,99,1)",
    fontSize: 12,
    fontFamily: "poppins-regular",
    marginTop: 12
  },
  group31Row: {
    height: 47,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 15,
    marginRight: 45
  },
  group3: {
    width: 80,
    height: 10,
    marginTop: 1
  },
  path3: {
    width: 82,
    height: 12,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group34: {
    width: 80,
    height: 13,
    marginLeft: 40
  },
  path31: {
    width: 82,
    height: 15,
    backgroundColor: "transparent",
    transform: [
      {
        scaleY: -1
      }
    ],
    borderColor: "transparent"
  },
  group35: {
    width: 80,
    height: 13,
    marginLeft: 35
  },
  path32: {
    width: 82,
    height: 15,
    backgroundColor: "transparent",
    transform: [
      {
        scaleX: -1
      },
      {
        scaleY: -1
      }
    ],
    borderColor: "transparent"
  },
  group3Row: {
    height: 13,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 15,
    marginRight: 25
  },
  group171: {
    width: 355,
    height: 222,
    marginTop: 20,
    marginLeft: 10
  },
  rectangle1: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 6,
    borderColor: "rgba(159,168,178,0.39)",
    borderWidth: 1,
    flex: 1
  },
  widgetTitleGoesHe: {
    backgroundColor: "transparent",
    color: "rgba(66,80,99,1)",
    fontSize: 14,
    fontFamily: "poppins-regular",
    marginTop: 20,
    marginLeft: 20
  },
  group18: {
    width: 299,
    height: 34,
    marginTop: 26,
    marginLeft: 20
  },
  variable11: {
    backgroundColor: "transparent",
    color: "rgba(159,168,178,1)",
    fontSize: 12,
    fontFamily: "poppins-regular"
  },
  rectangle3: {
    width: 272,
    height: 10,
    backgroundColor: "rgba(248,201,157,1)",
    borderRadius: 15,
    marginTop: 4
  },
  style3: {
    backgroundColor: "transparent",
    color: "rgba(66,80,99,1)",
    fontSize: 11,
    fontFamily: "poppins-700",
    textAlign: "right",
    marginLeft: 4
  },
  rectangle3Row: {
    height: 14,
    flexDirection: "row",
    marginTop: 6,
    marginRight: 1
  },
  group181: {
    top: 3,
    left: 0,
    width: 259,
    height: 34,
    position: "absolute",
    flexDirection: "row"
  },
  rectangle31: {
    width: 232,
    height: 10,
    backgroundColor: "rgba(31,144,250,1)",
    borderRadius: 15,
    marginTop: 4
  },
  style4: {
    backgroundColor: "transparent",
    color: "rgba(66,80,99,1)",
    fontSize: 11,
    fontFamily: "poppins-700",
    textAlign: "right",
    marginLeft: 5
  },
  rectangle31Row: {
    height: 14,
    flexDirection: "row",
    flex: 1,
    marginRight: 1,
    marginTop: 18
  },
  variable32: {
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    color: "rgba(159,168,178,1)",
    position: "absolute",
    fontSize: 12,
    fontFamily: "poppins-regular"
  },
  group181Stack: {
    width: 259,
    height: 37,
    marginTop: 17,
    marginLeft: 20
  },
  group182: {
    width: 189,
    height: 34,
    marginTop: 20,
    marginLeft: 20
  },
  variable31: {
    backgroundColor: "transparent",
    color: "rgba(159,168,178,1)",
    fontSize: 12,
    fontFamily: "poppins-regular"
  },
  rectangle32: {
    width: 162,
    height: 10,
    backgroundColor: "rgba(94,206,177,1)",
    borderRadius: 15,
    marginTop: 4
  },
  style5: {
    backgroundColor: "transparent",
    color: "rgba(66,80,99,1)",
    fontSize: 11,
    fontFamily: "poppins-700",
    textAlign: "right",
    marginLeft: 5
  },
  rectangle32Row: {
    height: 14,
    flexDirection: "row",
    marginTop: 6,
    marginRight: 1
  },
  group183: {
    width: 355,
    height: 178,
    marginTop: -550,
    marginLeft: 10
  },
  rectangle2: {
    width: 355,
    height: 178,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 6,
    borderColor: "rgba(159,168,178,0.39)",
    borderWidth: 1
  },
  group16: {
    top: 0,
    left: 0,
    width: 309,
    height: 118,
    position: "absolute"
  },
  group2: {
    width: 70,
    height: 44
  },
  m2: {
    backgroundColor: "transparent",
    color: "rgba(66,80,99,1)",
    fontSize: 16,
    fontFamily: "poppins-500",
    marginLeft: 7
  },
  followers: {
    backgroundColor: "transparent",
    color: "rgba(159,168,178,1)",
    fontSize: 11,
    fontFamily: "poppins-regular",
    letterSpacing: 1,
    marginTop: 6,
    marginLeft: 6
  },
  group23: {
    width: 37,
    height: 44,
    marginLeft: 52
  },
  k2: {
    backgroundColor: "transparent",
    color: "rgba(66,80,99,1)",
    fontSize: 16,
    fontFamily: "poppins-500"
  },
  likes: {
    backgroundColor: "transparent",
    color: "rgba(159,168,178,1)",
    fontSize: 11,
    fontFamily: "poppins-regular",
    letterSpacing: 1,
    marginTop: 12,
    marginLeft: 6
  },
  group21: {
    width: 69,
    height: 44,
    marginLeft: 73
  },
  style6: {
    backgroundColor: "transparent",
    color: "rgba(66,80,99,1)",
    fontSize: 16,
    fontFamily: "poppins-500",
    marginLeft: 4
  },
  comments: {
    backgroundColor: "transparent",
    color: "rgba(159,168,178,1)",
    fontSize: 11,
    fontFamily: "poppins-regular",
    letterSpacing: 1,
    marginTop: 12
  },
  group2Row: {
    height: 44,
    flexDirection: "row",
    marginLeft: 8
  },
  group22: {
    width: 90,
    height: 44
  },
  style7: {
    backgroundColor: "transparent",
    color: "rgba(66,80,99,1)",
    fontSize: 16,
    fontFamily: "poppins-500",
    marginLeft: 12
  },
  group24: {
    width: 82,
    height: 44,
    marginLeft: 17
  },
  style8: {
    backgroundColor: "transparent",
    color: "rgba(66,80,99,1)",
    fontSize: 16,
    fontFamily: "poppins-500",
    marginLeft: 11
  },
  button: {
    width: 69,
    height: 44,
    marginLeft: 43
  },
  group25: {
    flex: 1
  },
  m1: {
    backgroundColor: "transparent",
    color: "rgba(66,80,99,1)",
    fontSize: 16,
    fontFamily: "poppins-500"
  },
  reach2: {
    backgroundColor: "transparent",
    color: "rgba(159,168,178,1)",
    fontSize: 11,
    fontFamily: "poppins-regular",
    letterSpacing: 1,
    marginTop: 12
  },
  group22Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 8
  },
  reach1: {
    top: 103,
    left: 11,
    backgroundColor: "transparent",
    color: "rgba(159,168,178,1)",
    position: "absolute",
    fontSize: 11,
    fontFamily: "poppins-regular",
    letterSpacing: 1
  },
  group16Stack: {
    width: 309,
    height: 125,
    marginTop: 30,
    marginLeft: 23
  }
});

export default MobileGraphs1;
