import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import Svg, { Path } from "react-native-svg";

function Inputs(props) {
  return (
    <View style={styles.root}>
      <View style={styles.user1Row}>
        <View style={styles.user1}>
          <Svg viewBox="-0 -0 14.56666666666667 19" style={styles.path}>
            <Path
              strokeWidth={0}
              fill="rgba(65,65,65,1)"
              d="M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 "
            ></Path>
          </Svg>
        </View>
        <Text style={styles.janetReed}>Janet Reed</Text>
      </View>
      <View style={styles.path1StackRow}>
        <View style={styles.path1Stack}>
          <Svg viewBox="-0.5 -0.5 3 3" style={styles.path1}>
            <Path
              strokeWidth={2}
              fill="transparent"
              stroke="rgba(151,151,151,1)"
              d=""
            ></Path>
          </Svg>
          <Text style={styles.createNewLead}>Criar novo usuário</Text>
        </View>
        <View style={styles.group2Copy6}>
          <Svg viewBox="-0 -0 4 4" style={styles.path4}>
            <Path strokeWidth={0} fill="rgba(185,185,185,1)" d=""></Path>
          </Svg>
          <Svg viewBox="-0 -0 4 4" style={styles.path5}>
            <Path strokeWidth={0} fill="rgba(185,185,185,1)" d=""></Path>
          </Svg>
          <Svg viewBox="-0 -0 4 4" style={styles.path6}>
            <Path strokeWidth={0} fill="rgba(185,185,185,1)" d=""></Path>
          </Svg>
        </View>
      </View>
      <Svg viewBox="-0.5 -0.5 3 3" style={styles.path2}>
        <Path
          strokeWidth={2}
          fill="transparent"
          stroke="rgba(151,151,151,1)"
          d=""
        ></Path>
      </Svg>
      <View style={styles.path3Stack}>
        <Svg viewBox="-0.5 -0.5 3 3" style={styles.path3}>
          <Path
            strokeWidth={2}
            fill="transparent"
            stroke="rgba(151,151,151,1)"
            d=""
          ></Path>
        </Svg>
        <Svg viewBox="-0 -0 350 304" style={styles.rectangle6}>
          <Path
            strokeWidth={0}
            fill="rgba(119,119,119,1)"
            fillOpacity={0.300000011920929}
            strokeOpacity={0.300000011920929}
            d="M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 "
          ></Path>
        </Svg>
        <Text style={styles.phone}>Telefone</Text>
        <Text style={styles.email}>Email</Text>
        <Text style={styles.status}>Status</Text>
        <Text style={styles.style}>(27) 99800-0000</Text>
        <View style={styles.phoneCall}>
          <Svg viewBox="-0 -0 20 20" style={styles.path7}>
            <Path
              strokeWidth={0}
              fill="rgba(65,65,65,1)"
              d="M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 "
            ></Path>
          </Svg>
        </View>
        <Svg viewBox="-0.5 -0.5 17 10" style={styles.path8}>
          <Path
            strokeWidth={2}
            fill="transparent"
            stroke="rgba(119,119,119,1)"
            d=""
          ></Path>
        </Svg>
        <ImageBackground
          style={styles.rectangle11}
          imageStyle={styles.rectangle11_imageStyle}
          source={require("../assets/images/Gradient_BVL5Aa0.png")}
        ></ImageBackground>
        <View style={styles.alarm}>
          <Svg viewBox="-0 -0 15.82090907034448 18" style={styles.path9}>
            <Path
              strokeWidth={0}
              fill="rgba(65,65,65,1)"
              d="M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 "
            ></Path>
          </Svg>
        </View>
        <View style={styles.mail2}>
          <View style={styles.group3}>
            <View style={styles.path10StackStack}>
              <View style={styles.path10Stack}>
                <Svg
                  viewBox="-0 -0 4.404777501964315 4.173002744252358"
                  style={styles.path10}
                >
                  <Path strokeWidth={0} fill="rgba(65,65,65,1)" d=""></Path>
                </Svg>
                <Svg
                  viewBox="-0 -0 20.22521739130436 14.37847826086956"
                  style={styles.path12}
                >
                  <Path
                    strokeWidth={0}
                    fill="rgba(65,65,65,1)"
                    d="M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 "
                  ></Path>
                </Svg>
                <Svg
                  viewBox="-0 -0 19.35561482104103 8.308181558434967"
                  style={styles.path13}
                >
                  <Path strokeWidth={0} fill="rgba(65,65,65,1)" d=""></Path>
                </Svg>
              </View>
              <Svg
                viewBox="-0 -0 4.406081849790412 4.172260651260006"
                style={styles.path11}
              >
                <Path strokeWidth={0} fill="rgba(65,65,65,1)" d=""></Path>
              </Svg>
            </View>
          </View>
        </View>
        <View style={styles.rectangle12}></View>
      </View>
      <Text style={styles.fullName}>Nome completo</Text>
      <View style={styles.rectangleCopy16Row}>
        <View style={styles.rectangleCopy16}>
          <Text style={styles.save}>Salvar</Text>
        </View>
        <Text style={styles.cancel}>Cancelar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  user1: {
    width: 12,
    height: 23
  },
  path: {
    width: 12,
    height: 23,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  janetReed: {
    backgroundColor: "transparent",
    color: "rgba(65,65,65,1)",
    fontSize: 18,
    fontFamily: "montserrat-200",
    letterSpacing: 2.09,
    marginLeft: 16,
    marginTop: 8
  },
  user1Row: {
    height: 26,
    flexDirection: "row",
    marginTop: 176,
    marginLeft: 59,
    marginRight: 167
  },
  path1: {
    top: 15,
    left: 33,
    width: 3,
    height: 4,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  createNewLead: {
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    color: "rgba(139,139,139,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "montserrat-300",
    letterSpacing: 2.32
  },
  path1Stack: {
    width: 220,
    height: 20
  },
  group2Copy6: {
    width: 3,
    height: 23,
    marginLeft: 70,
    marginTop: 6
  },
  path4: {
    width: 3,
    height: 5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path5: {
    width: 3,
    height: 5,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 5
  },
  path6: {
    width: 3,
    height: 5,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 3
  },
  path1StackRow: {
    height: 29,
    flexDirection: "row",
    marginTop: -129,
    marginLeft: 42,
    marginRight: 40
  },
  path2: {
    width: 3,
    height: 4,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 63
  },
  path3: {
    top: 48,
    left: 30,
    width: 3,
    height: 4,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  rectangle6: {
    top: 0,
    left: 0,
    width: 292,
    height: 363,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  phone: {
    top: 55,
    left: 45,
    backgroundColor: "transparent",
    color: "rgba(119,119,119,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "montserrat-200",
    letterSpacing: 1.63
  },
  email: {
    top: 173,
    left: 45,
    backgroundColor: "transparent",
    color: "rgba(119,119,119,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "montserrat-200",
    letterSpacing: 1.63
  },
  status: {
    top: 320,
    left: 45,
    backgroundColor: "transparent",
    color: "rgba(119,119,119,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "montserrat-200",
    letterSpacing: 2.09
  },
  style: {
    top: 83,
    left: 45,
    backgroundColor: "transparent",
    color: "rgba(65,65,65,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "montserrat-200",
    letterSpacing: 2.09
  },
  phoneCall: {
    top: 73,
    left: 15,
    width: 17,
    height: 24,
    position: "absolute"
  },
  path7: {
    width: 17,
    height: 24,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path8: {
    top: 329,
    left: 265,
    width: 14,
    height: 12,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  rectangle11: {
    top: 240,
    left: 0,
    width: 292,
    height: 2,
    backgroundColor: "transparent",
    position: "absolute"
  },
  rectangle11_imageStyle: {},
  alarm: {
    top: 324,
    left: 16,
    width: 13,
    height: 22,
    position: "absolute"
  },
  path9: {
    width: 13,
    height: 22,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  mail2: {
    top: 198,
    left: 15,
    width: 18,
    height: 18,
    position: "absolute"
  },
  group3: {
    width: 17,
    height: 18
  },
  path10: {
    top: 9,
    left: 10,
    width: 4,
    height: 5,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  path12: {
    top: 0,
    left: 0,
    width: 17,
    height: 17,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  path13: {
    top: 1,
    left: 0,
    width: 16,
    height: 10,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  path10Stack: {
    top: 0,
    left: 0,
    width: 17,
    height: 17,
    position: "absolute"
  },
  path11: {
    top: 9,
    left: 3,
    width: 4,
    height: 5,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  path10StackStack: {
    width: 17,
    height: 17
  },
  rectangle12: {
    top: 197,
    left: 45,
    width: 0,
    height: 36,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute"
  },
  path3Stack: {
    width: 292,
    height: 363,
    marginTop: 116,
    marginLeft: 42
  },
  fullName: {
    backgroundColor: "transparent",
    color: "rgba(119,119,119,1)",
    fontSize: 14,
    fontFamily: "montserrat-200",
    letterSpacing: 1.63,
    marginTop: -427,
    marginLeft: 87
  },
  rectangleCopy16: {
    width: 144,
    height: 72,
    backgroundColor: "rgba(124,107,215,1)",
    borderRadius: 100
  },
  save: {
    backgroundColor: "transparent",
    color: "rgba(256,256,256,1)",
    fontSize: 18,
    fontFamily: "montserrat-300",
    letterSpacing: 2.09,
    marginTop: 25,
    marginLeft: 43
  },
  cancel: {
    backgroundColor: "transparent",
    color: "rgba(231,122,57,1)",
    fontSize: 18,
    fontFamily: "montserrat-300",
    letterSpacing: 2.09,
    marginLeft: 50,
    marginTop: 25
  },
  rectangleCopy16Row: {
    height: 72,
    flexDirection: "row",
    marginTop: 496,
    marginLeft: 43,
    marginRight: 43
  }
});

export default Inputs;
