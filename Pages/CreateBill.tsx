import React, { useRef, useState } from "react";
import { View } from "react-native";
import SelectItems from "../Components/SelectItems";
import SelectQuantities from "../Components/SelectQuantities";
import SelectTaxation from "../Components/SelectTaxation";
import SelectVendor from "../Components/SelectVendor";
import Step from "../Components/Step";
import { Stepper } from "../Components/Stepper";
import Item from "../Models/Item.model";
import Vendor from "../Models/Vendor.model";

const CreateBill = () => {
  const stepperRef = useRef(null);
  const [selectedVendor, setSelectedVendor] = useState<Vendor>();
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

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
          <SelectItems
            onSubmit={(items) => {
              //@ts-ignore
              stepperRef.current.moveToNextStep();
              setSelectedItems([...items]);
            }}
            selectedItems={selectedItems}
          />
        </Step>
        <Step canActivate={selectedItems.length ? true : false} icon={"user"}>
          <SelectQuantities items={selectedItems} />
        </Step>
        <Step canActivate={true} icon={"gavel"}>
          <SelectTaxation />
        </Step>
      </Stepper>
    </View>
  );
};

export default CreateBill;
