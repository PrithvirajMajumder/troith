import { View, Text } from "react-native";
import React, { useEffect } from "react";
import Item from "../Models/Item.model";

const SelectQuantities = (props: any) => {
  useEffect(() => {
    console.log("props changed: ", props);
  }, [props]);
  return (
    <View>
      <Text>items: {props.items.length}</Text>
    </View>
  );
};

export default SelectQuantities;
