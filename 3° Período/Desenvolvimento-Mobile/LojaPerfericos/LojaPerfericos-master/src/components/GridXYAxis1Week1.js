import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ElementsGridElementsLinesHorizontal3 from "./ElementsGridElementsLinesHorizontal3";
import ElementsGridElementsLinesHorizontal2 from "./ElementsGridElementsLinesHorizontal2";

function GridXYAxis1Week1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.verticalLinesStack}>
        <View style={styles.verticalLines}>
          <View style={styles.elementsGridElementsLinesHorizontal36Row}>
            <ElementsGridElementsLinesHorizontal3
              style={styles.elementsGridElementsLinesHorizontal36}
            ></ElementsGridElementsLinesHorizontal3>
            <ElementsGridElementsLinesHorizontal3
              style={styles.elementsGridElementsLinesHorizontal35}
            ></ElementsGridElementsLinesHorizontal3>
            <ElementsGridElementsLinesHorizontal3
              style={styles.elementsGridElementsLinesHorizontal34}
            ></ElementsGridElementsLinesHorizontal3>
            <ElementsGridElementsLinesHorizontal3
              style={styles.elementsGridElementsLinesHorizontal33}
            ></ElementsGridElementsLinesHorizontal3>
            <ElementsGridElementsLinesHorizontal3
              style={styles.elementsGridElementsLinesHorizontal32}
            ></ElementsGridElementsLinesHorizontal3>
            <ElementsGridElementsLinesHorizontal3
              style={styles.elementsGridElementsLinesHorizontal31}
            ></ElementsGridElementsLinesHorizontal3>
            <ElementsGridElementsLinesHorizontal3
              style={styles.elementsGridElementsLinesHorizontal3}
            ></ElementsGridElementsLinesHorizontal3>
          </View>
        </View>
        <View style={styles.horizontalLines}>
          <ElementsGridElementsLinesHorizontal2
            style={styles.elementsGridElementsLinesHorizontal2}
          ></ElementsGridElementsLinesHorizontal2>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  verticalLines: {
    top: 1,
    left: 36,
    position: "absolute",
    right: 0,
    bottom: 0,
    opacity: 1,
    flexDirection: "row"
  },
  elementsGridElementsLinesHorizontal36: {
    width: 134,
    height: 447,
    backgroundColor: "transparent",
    opacity: 1
  },
  elementsGridElementsLinesHorizontal35: {
    width: 134,
    height: 447,
    backgroundColor: "transparent",
    opacity: 1
  },
  elementsGridElementsLinesHorizontal34: {
    width: 134,
    height: 447,
    backgroundColor: "transparent",
    opacity: 1
  },
  elementsGridElementsLinesHorizontal33: {
    width: 134,
    height: 447,
    backgroundColor: "transparent",
    opacity: 1
  },
  elementsGridElementsLinesHorizontal32: {
    width: 134,
    height: 447,
    backgroundColor: "transparent",
    opacity: 1
  },
  elementsGridElementsLinesHorizontal31: {
    width: 134,
    height: 447,
    backgroundColor: "transparent",
    opacity: 1
  },
  elementsGridElementsLinesHorizontal3: {
    width: 134,
    height: 447,
    backgroundColor: "transparent",
    opacity: 1
  },
  elementsGridElementsLinesHorizontal36Row: {
    height: 447,
    flexDirection: "row",
    flex: 1
  },
  horizontalLines: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 342,
    opacity: 1
  },
  elementsGridElementsLinesHorizontal2: {
    width: 974,
    height: 106,
    backgroundColor: "transparent",
    opacity: 1
  },
  verticalLinesStack: {
    flex: 1,
    marginBottom: -24,
    marginLeft: -36
  }
});

export default GridXYAxis1Week1;
