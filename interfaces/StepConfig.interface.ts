import { ReactNode } from "react";

export default interface StepConfig {
  component: ReactNode;
  canActivate?: boolean | (() => boolean);
  isActive?: boolean;
}
