import { Icon } from "@rneui/themed";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import StepConfig from "../interfaces/StepConfig.interface";
//@ts-ignore
import styled from "styled-components/native";
import { getColorLuminance } from "../Utils/Color.utils";
import { connectFirestoreEmulator, Firestore } from "firebase/firestore";

const STEP_DIMENSION: number = 38;

/**
 * Stepper is a component used for navigating and indicating user in which page he/she is while navigating a multi-paged form
 * 
 //TODO: Currently we have to give color customisation options in this component which is missing
 //TODO: Have to give better icon support and optional step text support
 */

export const Stepper = forwardRef((props: any, ref: any) => {
  const { children } = props;
  const [steps, setSteps] = useState<StepConfig[]>([]);
  const [activatedStepIndex, setActivatedStepIndex] = useState<number>(0);

  useEffect(() => {
    let steps: StepConfig[] = [];
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) {
        return;
      }

      const elementProps = element.props;
      const step: StepConfig = {
        //@ts-ignore
        component: elementProps.children,
        //@ts-ignore
        icon: elementProps.icon,
        //@ts-ignore
        canActivate: elementProps.canActivate,
      };
      steps = [...steps, step];
    });
    setSteps(steps);
    setActivatedStepIndex(0);

    return () => {
      setSteps([]);
      setActivatedStepIndex(0);
    };
  }, []);

  useEffect(() => {
    setSteps((previousSteps) =>
      previousSteps.map((previousStep, index) => {
        if (index < activatedStepIndex) {
          previousStep.isComplete = true;
        } else if (index >= activatedStepIndex) {
          previousStep.isComplete = false;
        }

        return previousStep;
      })
    );
  }, [activatedStepIndex]);

  useEffect(() => {
    setSteps((previousSteps) => {
      React.Children.forEach(children, (element, index) => {
        if (!React.isValidElement(element)) {
          return;
        }

        const elementProps = element.props;
        //@ts-ignore
        previousSteps[index].canActivate = elementProps.canActivate;
      });

      return previousSteps;
    });
  }, [children]);

  useImperativeHandle(ref, () => ({
    moveToNextStep: () => setActivatedStepIndex(activatedStepIndex + 1),
    moveToPreviousStep: () => setActivatedStepIndex(activatedStepIndex - 1),
  }));

  return (
    <>
      <View style={styles.stepsWrapper}>
        <View style={styles.stepTrail} />
        {steps.length ? (
          <View
            //TODO: make it a styled component
            style={{
              height: 3,
              backgroundColor: "#ff6347",
              position: "absolute",
              top: "50%",
              left: 16,
              width: `${(activatedStepIndex / (steps.length - 1)) * 100}%`,
            }}
          />
        ) : null}
        {steps.map((step, index) => (
          <StepIndicator
            color={
              step.isComplete
                ? "completed"
                : index === activatedStepIndex
                ? "active"
                : ""
            }
            onPress={() => {
              for (let i = 0; i <= index; i++) {
                if (
                  !(
                    steps[i].isComplete ||
                    (!steps[i].isComplete && steps[i].canActivate)
                  )
                ) {
                  return;
                }
              }

              setActivatedStepIndex(index);
            }}
            activeOpacity={0.95}
            key={index}
          >
            {typeof step.icon === "string" ? (
              <Icon
                size={14}
                color={"white"}
                name={step.icon}
                type="font-awesome"
              ></Icon>
            ) : (
              <View>{step.icon}</View>
            )}
          </StepIndicator>
        ))}
      </View>
      {steps.length ? (
        <ScrollView style={styles.activatedStepContent}>
          {steps[activatedStepIndex].component}
        </ScrollView>
      ) : null}
    </>
  );
});

const styles = StyleSheet.create({
  stepsWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  stepTrail: {
    height: 3,
    width: "100%",
    backgroundColor: "#ffc68e",
    position: "absolute",
    top: "50%",
    left: 16,
  },
  completeStepTrail: {
    height: 3,
    backgroundColor: "#4089D6",
    position: "absolute",
    top: "50%",
    left: 16,
  },
  activatedStepContent: {
    height: Dimensions.get("window").height - 160,
    width: "100%",
    position: "relative",
  },
});

const StepIndicator = styled.TouchableOpacity`
  background-color: ${(props: any) =>
    props.color === "active"
      ? "#ff6347"
      : props.color === "completed"
      ? "#ff6347"
      : "#ffc68e"};
  height: ${STEP_DIMENSION};
  width: ${STEP_DIMENSION};
  border-radius: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: ${(props: any) =>
    props.color === "active"
      ? getColorLuminance("#ff6347", 0.5)
      : props.color === "completed"
      ? getColorLuminance("#ff6347", 0.5)
      : getColorLuminance("#ffc68e", 0)};
  border-width: 4;
`;
