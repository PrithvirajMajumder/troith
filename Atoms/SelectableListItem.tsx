import {
  Card,
  CheckBox
} from "@rneui/themed";
import React from "react";
import {
  Text, TouchableOpacity, View
} from "react-native";
import ListItemProps from "../interfaces/ListItemProps.interface";

function SelectableListItem(props: ListItemProps) {
  const { title, subtitle, onPress, checked } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Card
        containerStyle={{
          borderRadius: 10,
          position: "relative",
        }}
        wrapperStyle={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 24, fontWeight: "700", opacity: 0.6 }}>
            {props.title}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            {props.subtitle}
          </Text>
        </View>
        <CheckBox onPress={onPress} checked={checked ? true : false}></CheckBox>
      </Card>
    </TouchableOpacity>
  );
}

export default SelectableListItem;
