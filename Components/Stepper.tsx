import React, { ReactElement, ReactNode, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const StepDimension: number = 32;

export const Stepper = (props: {
  steps: { component: ReactNode; canActivate: boolean }[];
}) => {
  const { steps } = props;
  useEffect(() => {
    console.log(props.steps);
  }, [steps]);

  return (
    <View style={styles.stepsWrapper}>
      <View style={styles.stepTrail}></View>
      {steps.map((step) => (
        <View style={styles.step}>{step.component}</View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  stepsWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
  },
  step: {
    backgroundColor: "#E8B8B0",
    height: StepDimension,
    width: StepDimension,
    borderRadius: 50,
  },
  stepTrail: {
    height: 3,
    width: "100%",
    backgroundColor: "#E8B8B0",
    position: "absolute",
    top: "50%",
  },
});
