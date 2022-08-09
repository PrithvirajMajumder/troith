import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator, StyleSheet } from "react-native";
import Item from "../Models/Item.model";
import { ItemService } from "../Services/Item.service";
import ItemUtils from "../Utils/Item.utils";
import tw from "twrnc";

export default function ItemDetails(props: any) {
  const [item, setItem] = useState<Item>({} as Item);

  const loadItem = async (id: string) => {
    try {
      const item: Item = await ItemUtils.createItemFromSnapshot(
        await ItemService.getItemQuerySnap(id)
      );
      setItem(item);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadItem(props.route.params.itemId);
  }, []);

  if (item) {
    return (
      <View style={{ alignItems: "center" }}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <Text style={tw`text-gray-500 text-3xl font-bold`}>Item:</Text>
            <Text style={tw`text-orange-500 text-2xl font-bold`}>
              {item.name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <Text style={tw`text-gray-500 text-3xl font-bold`}>Price:</Text>
            <Text style={tw`text-orange-500 text-2xl font-bold`}>
              {item.price}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <Text style={tw`text-gray-500 text-3xl font-bold`}>Quantity:</Text>
            <Text style={tw`text-orange-500 text-2xl font-bold`}>
              {item.quantity} {item.uomObj?.shortName}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <Text style={tw`text-gray-500 text-3xl font-bold`}>
              Unit Of Measurement:
            </Text>
            <Text style={tw`text-orange-500 text-2xl font-bold`}>
              {item.uomObj?.shortName}
            </Text>
          </View>
        </View>
      </View>
    );
  } else {
    <ActivityIndicator
      size="large"
      color="tomato"
      style={styles.activityIndicator}
    />;
  }
}

const styles = StyleSheet.create({
  container: {
    top: 10,
    width: "98%",
    padding: 10,
    borderColor: "#fc9803",
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingVertical: 45,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {},
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
