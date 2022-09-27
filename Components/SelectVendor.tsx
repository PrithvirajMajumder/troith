import { onSnapshot } from "firebase/firestore";
import { useLayoutEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import ListItem from "../Atoms/ListItem";
import Vendor from "../Models/Vendor.model";
import { VendorService } from "../Services/Vendor.service";
import VendorUtils from "../Utils/Vendor.utils";

const SelectVendor = (props: { onSelectVendor?: (vendor: Vendor) => void }) => {
  const { onSelectVendor } = props;
  const [vendors, setVendors] = useState<Vendor[]>([]);

  useLayoutEffect(() => {
    const unsubscribe = onSnapshot(
      VendorService.getVendorQueryRef(),
      (snapshot) => {
        setVendors(VendorUtils.createVendorsFromSnapshot(snapshot));
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
      {vendors.map((vendor) => (
        <ListItem
          key={vendor.id}
          onPress={() => {
            if (onSelectVendor) onSelectVendor(vendor);
          }}
          title={vendor.name}
          subtitle={`Gstin: ${vendor.gstin}`}
          hasAccent={true}
        ></ListItem>
      ))}
    </View>
  );
};

export default SelectVendor;
