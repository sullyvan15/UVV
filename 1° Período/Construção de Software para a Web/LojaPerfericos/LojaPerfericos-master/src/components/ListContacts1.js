import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SvgImage, Defs, Svg, Path, Mask } from "react-native-svg";

function ListContacts1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.rectangle3}>
        <View style={styles.ovalRow}>
          <Svg viewBox="0 0 56 56" style={styles.oval}>
            <Defs>
              <Mask id="y2AbunD" x={0} y={0}>
                <Path
                  fill="white"
                  d={
                    "M28.00 56.00 C43.46 56.00 56.00 43.46 56.00 28.00 C56.00 12.54 43.46 0.00 28.00 0.00 C12.54 0.00 0.00 12.54 0.00 28.00 C0.00 43.46 12.54 56.00 28.00 56.00 Z"
                  }
                />
              </Mask>
            </Defs>
            <SvgImage
              href={require("../assets/images/1e1edc92c144c48e388f97e36d4d66233feb5908.png")}
              x={0}
              y={0}
              width={56}
              height={56}
              mask={"url(#y2AbunD)"}
            ></SvgImage>
          </Svg>
          <View style={styles.azahAnyeniColumn}>
            <Text style={styles.azahAnyeni}>Azah Anyeni</Text>
            <Text style={styles.brother}>Brother</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  rectangle3: {
    width: 375,
    height: 96,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 8,
    shadowOffset: {
      height: 4,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.0396361451048951)",
    shadowOpacity: 1,
    shadowRadius: 21
  },
  oval: {
    width: 56,
    height: 56,
    backgroundColor: "transparent",
    opacity: 1
  },
  azahAnyeni: {
    backgroundColor: "transparent",
    color: "rgba(66,66,66,1)",
    opacity: 1,
    fontSize: 17
  },
  brother: {
    width: 183,
    height: 16,
    backgroundColor: "transparent",
    color: "rgba(66,66,66,1)",
    opacity: 0.8,
    fontSize: 13,
    marginTop: 10
  },
  azahAnyeniColumn: {
    width: 183,
    marginLeft: 19,
    marginTop: 5,
    marginBottom: 8
  },
  ovalRow: {
    height: 56,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 22,
    marginRight: 95
  }
});

export default ListContacts1;
