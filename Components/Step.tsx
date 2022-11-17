import React, { ReactElement, ReactNode } from "react";
import { View } from "react-native";

const Step = (props: {
  canActivate: (() => boolean) | boolean;
  icon?: ReactNode | string;
  children?: ReactElement | null;
}) => <View>{props.children}</View>;

export default Step;
