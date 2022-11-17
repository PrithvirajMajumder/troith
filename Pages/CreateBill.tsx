import React, { createContext, useEffect, useRef, useState } from "react";
import { View } from "react-native";
import SelectItems from "../Components/SelectItems";
import SelectQuantities from "../Components/SelectQuantities";
import SelectTaxation from "../Components/SelectTaxation";
import SelectVendor from "../Components/SelectVendor";
import Step from "../Components/Step";
import { Stepper } from "../Components/Stepper";
import Item from "../Models/Item.model";
import Vendor from "../Models/Vendor.model";

export interface CreateBillContext {
  selectedVendor: Vendor;
  selectedItems: Item[];
}

export const createBillContext = createContext({} as CreateBillContext);

const CreateBill = () => {
  const stepperRef = useRef(null);
  const [selectedVendor, setSelectedVendor] = useState<Vendor>({} as Vendor);
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  const [createBillState, setCreateBillState] = useState<CreateBillContext>(
    {} as CreateBillContext
  );

  useEffect(() => {
    setCreateBillState({
      selectedItems,
      selectedVendor,
    });
  }, [selectedItems, selectedVendor]);

  return (
    <createBillContext.Provider value={createBillState}>
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
              onSelectItems={(items) => {
                //@ts-ignore
                stepperRef.current.moveToNextStep();
                setSelectedItems([...items]);
              }}
              selectedItems={selectedItems}
            />
          </Step>
          <Step canActivate={selectedItems.length ? true : false} icon={"user"}>
            <SelectQuantities />
          </Step>
          <Step canActivate={true} icon={"gavel"}>
            <SelectTaxation />
          </Step>
        </Stepper>
      </View>
    </createBillContext.Provider>
  );
};

export default CreateBill;
