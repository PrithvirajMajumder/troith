import { FAB } from "@rneui/themed";
import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ListItem from "../Atoms/ListItem";
import { ItemService } from "../Services/Item.service";
import ItemUtils from "../Utils/Item.utils";

function Items({ navigation }: any) {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      ItemService.getItemsQueryRef(),
      async (snapshot) => {
        setItems(await ItemUtils.createItemsFromSnapshot(snapshot));
      }
    );

    return unsubscribe;
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        {items.map((item) => (
          <ListItem
            onPress={() =>
              navigation.navigate("ItemDetails", {
                itemId: item.id,
              })
            }
            key={item.id}
            title={item.name}
            subtitle={`${item.quantity} ${item.uomObj.shortName}`}
            hasAccent
            accentColor={"tomato"}
          />
        ))}
      </ScrollView>
      <FAB
        placement="right"
        icon={{ name: "add", color: "white" }}
        color="tomato"
        onPress={() => navigation.navigate("CreateItem")}
      />
    </View>
  );
}

export default Items;
