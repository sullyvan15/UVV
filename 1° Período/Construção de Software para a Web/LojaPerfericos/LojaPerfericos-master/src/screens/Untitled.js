import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Svg, { Path, Defs, Mask } from "react-native-svg";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect6Stack}>
        <View style={styles.rect6}>
          <View style={styles.cardTitle1}>
            <View style={styles.bounds1}>
              <View style={styles.button2Row}>
                <TouchableOpacity
                  onPress={() => props.navigation.goBack()}
                  style={styles.button2}
                >
                  <Icon name="ios-arrow-back" style={styles.icon4}></Icon>
                </TouchableOpacity>
                <Text style={styles.payBill3}>Pagamento</Text>
              </View>
            </View>
          </View>
          <View style={styles.step1PrimaryInformationBillStatus1}>
            <View style={styles.billingPeriod2}>
              <View style={styles.rowBounds7}>
                <View style={styles.billingPeriod3Row}>
                  <Text style={styles.billingPeriod3}>
                    Período de pagamento
                  </Text>
                  <Text style={styles.oct52018Nov41}>
                    5 Out 2018 - 4 Nov 2018
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.currentBalance2}>
              <View style={styles.rowBounds6}>
                <View style={styles.currentBalance3Row}>
                  <Text style={styles.currentBalance3}>Total a pagar:</Text>
                  <Text style={styles.style7}>R$ 42.99</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.step2SecondayInformationUsersChoice1}>
            <View style={styles.navigation12Stack}>
              <View style={styles.navigation12}>
                <View style={styles.hr1Stack}>
                  <View style={styles.hr1}></View>
                  <View style={styles.navigation11}>
                    <View style={styles.boundsOne2}>
                      <Text style={styles.style5}>Crédito</Text>
                      <Svg viewBox="-0 -0 87 2" style={styles.path17}>
                        <Path
                          strokeWidth={0}
                          fill="rgba(124,107,215,1)"
                          d="M0.00 0.00 L62.71 0.00 L87.00 0.00 L87.00 2.00 L0.00 2.00 Z"
                        ></Path>
                      </Svg>
                    </View>
                  </View>
                  <View style={styles.navigation21}>
                    <View style={styles.boundsOne3}>
                      <Text style={styles.style6}>Débito</Text>
                      <Svg viewBox="-0 -0 89 2" style={styles.path18}>
                        <Path
                          strokeWidth={0}
                          fill="rgba(255,255,255,1)"
                          d="M0.00 0.00 L89.00 0.00 L89.00 2.00 L0.00 2.00 Z"
                        ></Path>
                      </Svg>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.choosePaymentMethod1}>
                <View style={styles.rowBounds4}>
                  <Text style={styles.choosePaymentMetho1}>
                    escolha o método de pagamento
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.inputCardInformation1}>
              <View style={styles.materialInputFocus5}>
                <View style={styles.path10Stack}>
                  <Svg viewBox="-0.5 -0.5 354 3" style={styles.path10}>
                    <Path
                      strokeWidth={2}
                      fill="transparent"
                      stroke="rgba(0,0,0,0.42)"
                      d="M1.00 1.00 L1.00 1.00 "
                    ></Path>
                  </Svg>
                  <Text style={styles.label5}>Número do cartão *</Text>
                </View>
                <Text style={styles.input5}>0123 - 4567 - 8912 - 3456</Text>
                <Text style={styles.helperText5}></Text>
              </View>
              <View style={styles.materialInputFocus6}>
                <Text style={styles.label6}>Nome do Titular *</Text>
                <View style={styles.path11StackStack}>
                  <View style={styles.path11Stack}>
                    <Svg viewBox="-1 -1 356 6" style={styles.path11}>
                      <Path
                        strokeWidth={4}
                        fill="transparent"
                        stroke="rgba(124,107,215,1)"
                        d="M2.00 3.00 L354.00 3.00 "
                      ></Path>
                    </Svg>
                    <Text style={styles.input6}>Karl Mc Carthy</Text>
                  </View>
                  <View style={styles.insertionMark}></View>
                </View>
                <Text style={styles.helperText6}></Text>
              </View>
              <View style={styles.materialInputFocus7Row}>
                <View style={styles.materialInputFocus7}>
                  <Text style={styles.label7}>Vencimento *</Text>
                  <View style={styles.path13Stack}>
                    <Svg viewBox="-0.5 -0.5 166 3" style={styles.path13}>
                      <Path
                        strokeWidth={2}
                        fill="transparent"
                        stroke="rgba(0,0,0,0.42)"
                        d="M1.00 1.50 L165.00 1.50 "
                      ></Path>
                    </Svg>
                    <Text style={styles.input7}>10/22</Text>
                  </View>
                  <Text style={styles.helperText7}>MM/AA</Text>
                </View>
                <View style={styles.materialInputFocus8}>
                  <View style={styles.label8Column}>
                    <Text style={styles.label8}>Código de segurança *</Text>
                    <View style={styles.path14Stack}>
                      <Svg viewBox="-0.5 -0.5 166 3" style={styles.path14}>
                        <Path
                          strokeWidth={2}
                          fill="transparent"
                          stroke="rgba(0,0,0,0.42)"
                          d="M1.00 1.50 L165.00 1.50 "
                        ></Path>
                      </Svg>
                      <Text style={styles.input8}>772</Text>
                      <View style={styles.materialIconsBlackInfoOutline1}>
                        <View style={styles.icInfoOutlineBlack24Px11}>
                          <View style={styles.group1}>
                            <View style={styles.path15Stack}>
                              <Svg viewBox="-0 -0 24 24" style={styles.path15}>
                                <Path
                                  strokeWidth={0}
                                  fill="transparent"
                                  d="M0.00 0.00 L24.00 0.00 L24.00 24.00 L0.00 24.00 Z"
                                ></Path>
                              </Svg>
                              <Svg viewBox="-0 -0 20 20" style={styles.path16}>
                                <Path
                                  strokeWidth={0}
                                  fill="rgba(0,0,0,1)"
                                  d="M9.00 9.00 L11.00 9.00 L11.00 15.00 L9.00 15.00 Z M20.00 10.00 C20.00 15.52 15.52 20.00 10.00 20.00 C4.48 20.00 0.00 15.52 0.00 10.00 C0.00 4.48 4.48 0.00 10.00 0.00 C15.52 0.00 20.00 4.48 20.00 10.00 Z M18.00 10.00 C18.00 5.59 14.41 2.00 10.00 2.00 C5.59 2.00 2.00 5.59 2.00 10.00 C2.00 14.41 5.59 18.00 10.00 18.00 C14.41 18.00 18.00 14.41 18.00 10.00 Z M9.00 5.00 L11.00 5.00 L11.00 7.00 L9.00 7.00 Z"
                                ></Path>
                              </Svg>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.label8ColumnFiller}></View>
                  <Text style={styles.helperText8}></Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.callToAction1}>
            <View style={styles.btnConfirm1}>
              <View style={styles.button1Stack}>
                <View style={styles.button1}></View>
                <Text style={styles.style4}>pague agora</Text>
              </View>
            </View>
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
                        <Mask id="Z0kpdC" x={0} y={0} width={28} height={25}>
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
                        mask="url(#Z0kpdC)"
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
                      fill="rgba(124,107,215,1)"
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect6: {
    top: 0,
    left: 0,
    width: 400,
    position: "absolute",
    bottom: 10
  },
  cardTitle1: {
    width: 400,
    height: 75,
    marginLeft: -8
  },
  bounds1: {
    width: 400,
    height: 75,
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  button2: {
    width: 10,
    height: 26,
    marginTop: 2
  },
  icon4: {
    color: "rgba(124,107,215,1)",
    fontSize: 26
  },
  payBill3: {
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 20,
    fontFamily: "roboto-500",
    lineHeight: 28,
    marginLeft: 106
  },
  button2Row: {
    height: 28,
    flexDirection: "row",
    flex: 1,
    marginRight: 150,
    marginLeft: 31,
    marginTop: 46
  },
  step1PrimaryInformationBillStatus1: {
    width: 400,
    height: 198
  },
  billingPeriod2: {
    width: 400,
    height: 53
  },
  rowBounds7: {
    width: 400,
    height: 53,
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  billingPeriod3: {
    width: 164,
    height: 27,
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 24
  },
  oct52018Nov41: {
    width: 164,
    height: 27,
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 24,
    marginLeft: 24
  },
  billingPeriod3Row: {
    height: 27,
    flexDirection: "row",
    flex: 1,
    marginRight: 24,
    marginLeft: 24,
    marginTop: 13
  },
  currentBalance2: {
    width: 400,
    height: 53
  },
  rowBounds6: {
    width: 400,
    height: 53,
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  currentBalance3: {
    width: 164,
    height: 27,
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 24
  },
  style7: {
    width: 164,
    height: 27,
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 24,
    marginLeft: 24
  },
  currentBalance3Row: {
    height: 27,
    flexDirection: "row",
    flex: 1,
    marginRight: 24,
    marginLeft: 24,
    marginTop: 13
  },
  step2SecondayInformationUsersChoice1: {
    width: 400,
    height: 394,
    marginLeft: -8
  },
  navigation12: {
    top: 52,
    left: 0,
    width: 400,
    height: 53,
    position: "absolute"
  },
  hr1: {
    top: 52,
    left: 0,
    width: 400,
    height: 1,
    backgroundColor: "rgba(0,0,0,0.119999997317791)",
    position: "absolute"
  },
  navigation11: {
    top: 0,
    left: 112,
    width: 87,
    height: 53,
    position: "absolute"
  },
  boundsOne2: {
    width: 87,
    height: 53,
    backgroundColor: "transparent"
  },
  style5: {
    backgroundColor: "transparent",
    color: "rgba(124,107,215,1)",
    fontSize: 14,
    fontFamily: "roboto-500",
    textAlign: "center",
    marginTop: 15,
    marginLeft: 24
  },
  path17: {
    height: 2,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 22
  },
  navigation21: {
    top: 0,
    left: 199,
    width: 89,
    height: 53,
    position: "absolute"
  },
  boundsOne3: {
    width: 89,
    height: 53,
    backgroundColor: "transparent"
  },
  style6: {
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 14,
    fontFamily: "roboto-500",
    textAlign: "center",
    marginTop: 15,
    marginLeft: 24
  },
  path18: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 22,
    height: 0,
    width: 0,
    opacity: 0
  },
  hr1Stack: {
    width: 400,
    height: 53
  },
  choosePaymentMethod1: {
    top: 0,
    left: 0,
    width: 400,
    height: 53,
    position: "absolute"
  },
  rowBounds4: {
    width: 400,
    height: 53,
    backgroundColor: "transparent"
  },
  choosePaymentMetho1: {
    width: 164,
    height: 27,
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 24,
    marginTop: 13,
    marginLeft: 24
  },
  navigation12Stack: {
    width: 400,
    height: 105
  },
  inputCardInformation1: {
    width: 352,
    height: 251,
    marginTop: 39,
    marginLeft: 24
  },
  materialInputFocus5: {
    width: 352,
    height: 70
  },
  path10: {
    left: 0,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 9,
    borderColor: "transparent"
  },
  label5: {
    top: 0,
    left: 0,
    width: 342,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    position: "absolute",
    fontSize: 12,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  path10Stack: {
    width: 342,
    height: 16
  },
  input5: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 24,
    flex: 1,
    marginBottom: 8,
    marginTop: 1,
    marginRight: 24
  },
  helperText5: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,0.5413269928)",
    fontSize: 12,
    fontFamily: "roboto-regular"
  },
  materialInputFocus6: {
    width: 352,
    height: 70,
    marginTop: 21
  },
  label6: {
    width: 342,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 12,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  path11: {
    left: 0,
    width: 356,
    height: 7,
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 0,
    borderColor: "transparent"
  },
  input6: {
    top: 0,
    left: 1,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    right: 27,
    bottom: 4,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 24
  },
  path11Stack: {
    left: 0,
    position: "absolute",
    bottom: 0,
    right: 0,
    top: 0
  },
  insertionMark: {
    top: 0,
    left: 37,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute",
    height: 0,
    width: 0,
    opacity: 0
  },
  path11StackStack: {
    flex: 1,
    marginBottom: 4,
    marginTop: 1,
    marginLeft: -1,
    marginRight: -3
  },
  helperText6: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,0.5413269928)",
    fontSize: 12,
    fontFamily: "roboto-regular"
  },
  materialInputFocus7: {
    width: 164,
    height: 70
  },
  label7: {
    width: 159,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 12,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  path13: {
    left: 0,
    width: 166,
    height: 3,
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 0,
    borderColor: "transparent"
  },
  input7: {
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    right: 26,
    bottom: 2,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 24
  },
  path13Stack: {
    flex: 1,
    marginBottom: 6,
    marginTop: 1,
    marginRight: -2
  },
  helperText7: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,0.5413269928)",
    fontSize: 12,
    fontFamily: "roboto-regular"
  },
  materialInputFocus8: {
    width: 164,
    height: 70,
    marginLeft: 24
  },
  label8: {
    width: 159,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(30,45,62,1)",
    fontSize: 12,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  path14: {
    left: 0,
    width: 166,
    height: 3,
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 1,
    borderColor: "transparent"
  },
  input8: {
    top: 3,
    left: 40,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    right: 0,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 24
  },
  materialIconsBlackInfoOutline1: {
    top: 0,
    left: 140,
    width: 24,
    height: 27,
    position: "absolute",
    opacity: 0.54
  },
  icInfoOutlineBlack24Px11: {
    width: 24,
    height: 27
  },
  group1: {
    width: 24,
    height: 27
  },
  path15: {
    top: 0,
    left: 0,
    width: 24,
    height: 27,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  path16: {
    top: 2,
    left: 2,
    width: 20,
    height: 22,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  path15Stack: {
    width: 24,
    height: 27
  },
  path14Stack: {
    height: 34,
    marginTop: 1
  },
  label8Column: {
    marginRight: -16
  },
  label8ColumnFiller: {
    flex: 1
  },
  helperText8: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,0.5413269928)",
    fontSize: 12,
    fontFamily: "roboto-regular"
  },
  materialInputFocus7Row: {
    height: 70,
    flexDirection: "row",
    marginTop: 20
  },
  callToAction1: {
    width: 384,
    height: 44,
    marginTop: 70,
    marginLeft: 8
  },
  btnConfirm1: {
    width: 435,
    height: 44,
    marginTop: -66,
    alignSelf: "center"
  },
  button1: {
    top: 0,
    left: 13,
    width: 362,
    height: 50,
    backgroundColor: "rgba(124,107,215,1)",
    position: "absolute",
    borderRadius: 2
  },
  style4: {
    top: 14,
    left: 0,
    width: 392,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-500",
    textAlign: "center"
  },
  button1Stack: {
    width: 392,
    height: 50,
    marginTop: 8,
    marginLeft: 16
  },
  tabBar1: {
    top: 727,
    left: 7,
    height: 95,
    position: "absolute",
    right: 18
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
  rect6Stack: {
    flex: 1,
    marginBottom: -10,
    marginLeft: -7,
    marginRight: -18
  }
});

export default Untitled;
