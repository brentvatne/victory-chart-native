import React from "react";
import { Dimensions } from "react-native";
import { ClipPath, G } from "react-native-svg";
import { VictoryErrorBar } from "victory-chart/src";
import ErrorBar from "./errorbar";
import { VictoryContainer } from "victory-core-native";

export default class extends VictoryErrorBar {
  static defaultProps = {
    ...VictoryErrorBar.defaultProps,
    clipPathComponent: <ClipPath/>,
    dataComponent: <ErrorBar/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  };
}
