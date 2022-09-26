import { View, Text } from "react-native";
import React, { useState } from "react";
import { Stepper } from "../Components/Stepper";
import SelectItems from "../Components/SelectItems";
import SelectVendor from "../Components/SelectVendor";
import SelectTaxation from "../Components/SelectTaxation";
import { Button } from "@rneui/themed";

const CreateBill = () => {
  const [test, setTest] = useState<boolean>(false);
  return (
    <View>
      <Stepper
        steps={[
          { component: <SelectVendor />, canActivate: true },
          { component: <SelectItems />, canActivate: false },
          { component: <SelectTaxation />, canActivate: false },
        ]}
      ></Stepper>
      <Button
        onPress={() => {
          setTest(!test);
        }}
        title="Test"
      />
    </View>
  );
};

export default CreateBill;
