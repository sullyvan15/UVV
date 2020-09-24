import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ElementsGridElementsLinesHorizontal1 from "./ElementsGridElementsLinesHorizontal1";
import ElementsGridElementsLinesHorizontal from "./ElementsGridElementsLinesHorizontal";

function GridXYAxis1Week(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.verticalLinesStack}>
        <View style={styles.verticalLines}>
          <View style={styles.elementsGridElementsLinesHorizontal16Row}>
            <ElementsGridElementsLinesHorizontal1
              style={styles.elementsGridElementsLinesHorizontal16}
            ></ElementsGridElementsLinesHorizontal1>
            <ElementsGridElementsLinesHorizontal1
              style={styles.elementsGridElementsLinesHorizontal15}
            ></ElementsGridElementsLinesHorizontal1>
            <ElementsGridElementsLinesHorizontal1
              style={styles.elementsGridElementsLinesHorizontal14}
            ></ElementsGridElementsLinesHorizontal1>
            <ElementsGridElementsLinesHorizontal1
              style={styles.elementsGridElementsLinesHorizontal13}
            ></ElementsGridElementsLinesHorizontal1>
            <ElementsGridElementsLinesHorizontal1
              style={styles.elementsGridElementsLinesHorizontal12}
            ></ElementsGridElementsLinesHorizontal1>
            <ElementsGridElementsLinesHorizontal1
              style={styles.elementsGridElementsLinesHorizontal11}
            ></ElementsGridElementsLinesHorizontal1>
            <ElementsGridElementsLinesHorizontal1
              style={styles.elementsGridElementsLinesHorizontal1}
            ></ElementsGridElementsLinesHorizontal1>
          </View>
        </View>
        <View style={styles.horizontalLines}>
          <ElementsGridElementsLinesHorizontal
            style={styles.elementsGridElementsLinesHorizontal17}
          ></ElementsGridElementsLinesHorizontal>
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
  elementsGridElementsLinesHorizontal16: {
    width: 134,
    height: 447,
    backgroundColor: "transparent",
    opacity: 1
  },
  elementsGridElementsLinesHorizontal15: {
    width: 134,
    height: 447,
    backgroundColor: "transparent",
    opacity: 1
  },
  elementsGridElementsLinesHorizontal14: {
    width: 134,
    height: 447,
    backgroundColor: "transparent",
    opacity: 1
  },
  elementsGridElementsLinesHorizontal13: {
    width: 134,
    height: 447,
    backgroundColor: "transparent",
    opacity: 1
  },
  elementsGridElementsLinesHorizontal12: {
    width: 134,
    height: 447,
    backgroundColor: "transparent",
    opacity: 1
  },
  elementsGridElementsLinesHorizontal11: {
    width: 134,
    height: 447,
    backgroundColor: "transparent",
    opacity: 1
  },
  elementsGridElementsLinesHorizontal1: {
    width: 134,
    height: 447,
    backgroundColor: "transparent",
    opacity: 1
  },
  elementsGridElementsLinesHorizontal16Row: {
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
  elementsGridElementsLinesHorizontal17: {
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

export default GridXYAxis1Week;
