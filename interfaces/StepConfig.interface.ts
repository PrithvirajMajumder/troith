import { ReactElement, ReactNode } from "react";

export default interface StepConfig {
  component: ReactNode | ReactElement;
  canActivate?: boolean;
  isComplete?: boolean;
  icon: ReactNode | ReactElement | string;
}
