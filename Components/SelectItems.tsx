import { FAB } from "@rneui/base";
import { Button, Icon, SearchBar } from "@rneui/themed";
import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import SelectableListItem from "../Atoms/SelectableListItem";
import Item from "../Models/Item.model";
import { ItemService } from "../Services/Item.service";
import ItemUtils from "../Utils/Item.utils";

const SelectItems = (props: {
  onSubmit: (items: Item[]) => void;
  selectedItems: Item[];
}) => {
  const { onSubmit, selectedItems } = props;
  const [items, setItems] = useState<Item[]>([]);
  const [searchItems, setSearchedItems] = useState<Item[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      ItemService.getItemsQueryRef(),
      async (snapshot) => {
        const data = await ItemUtils.createItemsFromSnapshot(snapshot);
        setItems(() => {
          if (selectedItems.length) {
            data.forEach((item) => {
              item.isSelected = selectedItems.find(
                (selectedItem) => selectedItem.id === item.id
              )
                ? true
                : false;
            });
          }
          setSearchedItems(data);

          return data;
        });
      }
    );

    return unsubscribe;
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
    },
  });

  return (
    <View style={styles.container}>
      <SearchBar
        containerStyle={{
          backgroundColor: "transparent",
          borderTopWidth: 0,
          borderBottomWidth: 0,
          paddingHorizontal: 14,
        }}
        inputContainerStyle={{
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          borderRadius: 7,
        }}
        placeholder="Search by name"
        onChangeText={(searchValue) => {
          setSearchValue(searchValue);
          setSearchedItems(
            items.filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
          );
        }}
        value={searchValue}
      />
      <ScrollView
        style={{
          height: Dimensions.get("window").height - 225,
        }}
      >
        {searchItems.map((searchedItem, index) => (
          <SelectableListItem
            onPress={() => {
              setSearchedItems((previousItems) => {
                previousItems[index].isSelected = !(previousItems[index]
                  .isSelected
                  ? true
                  : false);

                return [...previousItems];
              });
            }}
            checked={searchedItem.isSelected ? true : false}
            key={searchedItem.id}
            title={searchedItem.name}
            subtitle={`${searchedItem.quantity} ${searchedItem.uomObj?.shortName}`}
            hasAccent
            accentColor={"tomato"}
          />
        ))}
        <View style={{ padding: 16 }}>
          {items.length && !searchItems.length ? (
            <Button
              containerStyle={{ borderRadius: 7 }}
              title={`Create item named ${searchValue}`}
            />
          ) : null}
        </View>
      </ScrollView>
      {searchItems.filter((searchItem) => searchItem.isSelected).length ? (
        <FAB
          onPress={() => {
            onSubmit(searchItems.filter((searchItem) => searchItem.isSelected));
          }}
          placement="right"
          color="tomato"
          icon={<Icon name="chevron-right" />}
        />
      ) : null}
    </View>
  );
};

export default SelectItems;
