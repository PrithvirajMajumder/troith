import React, { useRef, useState } from "react";
import { View } from "react-native";
import SelectItems from "../Components/SelectItems";
import SelectTaxation from "../Components/SelectTaxation";
import SelectVendor from "../Components/SelectVendor";
import Step from "../Components/Step";
import { Stepper } from "../Components/Stepper";
import Vendor from "../Models/Vendor.model";

const CreateBill = () => {
  const stepperRef = useRef(null);
  const [selectedVendor, setSelectedVendor] = useState<Vendor>();

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <Stepper ref={stepperRef}>
        <Step canActivate={true} icon={"user"}>
          <SelectVendor
            onSelectVendor={(vendor: Vendor) => {
              //@ts-ignore
              stepperRef.current.moveToNextStep();
              setSelectedVendor(() => {
                return vendor;
              });
            }}
          />
        </Step>
        <Step canActivate={selectedVendor ? true : false} icon={"list"}>
          <SelectItems />
        </Step>
        <Step canActivate={true} icon={"gavel"}>
          <SelectTaxation />
        </Step>
      </Stepper>
    </View>
  );
};

export default CreateBill;
