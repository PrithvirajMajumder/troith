import { FAB, Input } from "@rneui/themed";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import tw from "twrnc";
import Uom from "../Models/Uom.model";
import { UomService } from "../Services/Uom.service";

function CreateUom({ navigation }: any) {
  const [shortName, setShortName] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
  });

  const createUom = () => {
    const uom: Uom = {
      name: fullName,
      shortName: shortName,
    };
    UomService.createUom(uom)
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
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
              <Text style={tw`text-orange-500 text-4xl font-bold`}>Unit</Text>
            </View>
            <View style={tw`mt-10`}>
              <Input
                placeholder="Eg. Kg"
                label="Short name"
                value={shortName}
                onChangeText={(text: string) => setShortName(text)}
              />
              <Input
                label="Full name"
                placeholder="Eg. Kilogram"
                value={fullName}
                onChangeText={(text: string) => setFullName(text)}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <FAB
        placement="right"
        icon={{ name: "check", color: "white" }}
        color="tomato"
        onPress={() => createUom()}
        disabled={!shortName.length || !fullName.length}
      />
    </View>
  );
}

export default CreateUom;
