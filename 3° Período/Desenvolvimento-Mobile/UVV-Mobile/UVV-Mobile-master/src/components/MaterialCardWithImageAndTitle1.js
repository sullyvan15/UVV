import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";

function MaterialCardWithImageAndTitle1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <Text style={styles.loremIpsum}>28/03/2020</Text>
        </View>
        <EntypoIcon name="calendar" style={styles.icon}></EntypoIcon>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.titleStyle}>Family Feud</Text>
          <Text style={styles.subtitleStyle}>
            Design e Desen. de Banco de Dados 2
          </Text>
        </View>
      </View>
      <FeatherIcon name="log-out" style={styles.icon2}></FeatherIcon>
      <EntypoIcon name="upload" style={styles.icon3}></EntypoIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 2,
    borderColor: "#CCC",
    borderWidth: 1,
    shadowOffset: {
      height: 2,
      width: -2
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden",
    flexDirection: "row"
  },
  rect: {
    top: 73,
    left: 0,
    width: 93,
    height: 18,
    backgroundColor: "rgba(248,231,28,1)",
    position: "absolute",
    borderRadius: 15,
    borderColor: "#000000",
    borderWidth: 0
  },
  loremIpsum: {
    color: "#121212",
    fontSize: 15,
    fontFamily: "roboto-regular",
    marginTop: 2,
    marginLeft: 6
  },
  icon: {
    top: 0,
    left: 8,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 76
  },
  rectStack: {
    top: 16,
    left: 262,
    width: 93,
    height: 91,
    position: "absolute"
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bodyContent: {
    flex: 1,
    padding: 16,
    paddingTop: 24
  },
  titleStyle: {
    color: "#000",
    paddingBottom: 12,
    fontSize: 24,
    fontFamily: "roboto-regular"
  },
  subtitleStyle: {
    color: "#000",
    opacity: 0.5,
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  icon2: {
    top: 100,
    left: 13,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 32
  },
  icon3: {
    top: 100,
    left: 77,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 32
  }
});

export default MaterialCardWithImageAndTitle1;
