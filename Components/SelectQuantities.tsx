import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import Item from "../Models/Item.model";
import { CreateBillContext, createBillContext } from "../Pages/CreateBill";

const SelectQuantities = () => {
  const state = useContext<CreateBillContext>(createBillContext);

  useEffect(() => {
    console.log("State in child: ", state.selectedItems);
  }, [state]);

  return (
    <View>
      <Text>items: {state.selectedItems.length}</Text>
    </View>
  );
};

export default SelectQuantities;
