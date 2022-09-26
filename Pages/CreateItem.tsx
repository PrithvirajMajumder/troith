import { Button, FAB, Icon, Input } from "@rneui/themed";
import React, { useLayoutEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import tw from "twrnc";
import Item from "../Models/Item.model";
import Uom from "../Models/Uom.model";
import { ItemService } from "../Services/Item.service";

function CreateItem({ navigation, route }: any) {
  const [name, setName] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [uom, setUom] = useState<Uom>();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
  });

  useLayoutEffect(() => {
    setUom(route.params?.uom ?? null);
    console.log(uom);
  });

  const createItem = () => {
    const item: Item = {
      name,
      price: parseInt(price),
      quantity: parseInt(quantity),
      description,
      uomObj: uom,
    };

    ItemService.createItem(item)
      .then(() => navigation.navigate("Items"))
      .catch((error) => alert(error.message));
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={[tw`p-3`, styles.container]}>
            <View style={tw`${Platform.OS === "android" ? "pt-10" : ""}`}>
              <Text style={tw`text-gray-500 text-4xl font-bold`}>
                Create a new
              </Text>
              <Text style={tw`text-orange-500 text-4xl font-bold`}>Item</Text>
            </View>
            <View style={tw`mt-10`}>
              <Input
                label="Name"
                placeholder="Eg. Raw material name"
                leftIcon={<Icon name="business" color="tomato" size={20} />}
                value={name}
                onChangeText={(text: string) => setName(text)}
              />
              <Input
                label="Standard Quantity"
                placeholder="Eg. 32"
                leftIcon={<Icon name="poll" color="tomato" size={20} />}
                value={quantity}
                onChangeText={(text: string) => setQuantity(text)}
                keyboardType="phone-pad"
              />
              <Input
                label="Standard Price (₹)"
                placeholder="Eg. 1234567890"
                leftIcon={<Icon name="payments" color="tomato" size={20} />}
                value={price}
                onChangeText={(text) => setPrice(text)}
                keyboardType="phone-pad"
                enablesReturnKeyAutomatically
              />
              <Input
                label="Description"
                placeholder="Some note for the this item"
                leftIcon={<Icon name="description" color="tomato" size={20} />}
                value={description}
                onChangeText={(text: string) => setDescription(text)}
              />
              {uom && (
                <Input
                  label="Uom"
                  placeholder="Some note for the this item"
                  leftIcon={<Icon name="poll" color="tomato" size={20} />}
                  value={uom.name}
                  editable={false}
                />
              )}
              {!uom && (
                <Button
                  title="Select Unit"
                  onPress={() => navigation.navigate("SelectUom")}
                ></Button>
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <FAB
        placement="right"
        icon={{ name: "check", color: "white" }}
        color="tomato"
        onPress={createItem}
        disabled={
          !name.length ||
          !quantity.length ||
          !price.length ||
          !description.length ||
          !uom
        }
      />
    </SafeAreaView>
  );
}

export default CreateItem;
