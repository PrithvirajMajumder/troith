import { FAB } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";

function Bills(props: any) {
  const { navigation } = props;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <>
      <View style={styles.container}>
        <Text style={tw`text-red-500`}> Let's build Troith Bill ❤️</Text>
        <StatusBar style="auto" />
      </View>

      <FAB
        placement="right"
        icon={{ name: "add", color: "white" }}
        color="tomato"
        onPress={() => navigation.navigate("CreateBill")}
      />
    </>
  );
}

export default Bills;
