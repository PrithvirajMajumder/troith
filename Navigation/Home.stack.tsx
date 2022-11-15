import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import SlectUom from "../Modals/SelectUom";
import Bills from "../Pages/Bills";
import Challans from "../Pages/Challans";
import Companies from "../Pages/Companies";
import CreateBill from "../Pages/CreateBill";
import CreateCompany from "../Pages/CreateCompany";
import CreateItem from "../Pages/CreateItem";
import CreateUom from "../Pages/CreateUom";
import CreateVendor from "../Pages/CreateVendor";
import ItemDetails from "../Pages/ItemDetails";
import Items from "../Pages/Items";
import More from "../Pages/More";
import ProfileSettings from "../Pages/ProfileSettings";
import Uoms from "../Pages/Uoms";
import Vendors from "../Pages/Vendors";

function HomeStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        headerBackTitle: "Home",
        headerTintColor: "tomato",
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Tabs"
        component={TabStack}
      ></Stack.Screen>
      <Stack.Screen name="Units" component={Uoms}></Stack.Screen>
      <Stack.Screen name="Companies" component={Companies}></Stack.Screen>
      <Stack.Screen name="Profile" component={ProfileSettings}></Stack.Screen>
      <Stack.Screen
        options={{ headerBackTitle: "Unit list", headerTitle: "" }}
        name="CreateUom"
        component={CreateUom}
      />
      <Stack.Screen
        options={{ headerBackTitle: "Companies", headerTitle: "" }}
        name="CreateCompany"
        component={CreateCompany}
      />
      <Stack.Screen
        options={{ headerBackTitle: "Items", headerTitle: "" }}
        name="CreateItem"
        component={CreateItem}
      />
      <Stack.Screen
        options={{ headerBackTitle: "Vendors", headerTitle: "" }}
        name="CreateVendor"
        component={CreateVendor}
      />
      <Stack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <Stack.Screen
          options={{ headerBackTitle: "Select Unit", headerTitle: "" }}
          name="SelectUom"
          component={SlectUom}
        />
      </Stack.Group>
      <Stack.Screen
        options={{ headerBackTitle: "Item Details" }}
        name="ItemDetails"
      >
        {(props) => <ItemDetails {...props} />}
      </Stack.Screen>
      <Stack.Screen
        options={{
          headerBackTitle: "Back",
        }}
        name="CreateBill"
        component={CreateBill}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

function TabStack() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Bills") {
            return <Icon name="receipt" size={size} color={color}></Icon>;
          } else if (route.name === "Challans") {
            return <Icon name="description" size={size} color={color}></Icon>;
          } else if (route.name === "Items") {
            return <Icon name="category" size={size} color={color}></Icon>;
          } else if (route.name === "Vendors") {
            return <Icon name="people" size={size} color={color}></Icon>;
          } else if (route.name === "More") {
            return <Icon name="menu" size={size} color={color}></Icon>;
          }
        },
        tabBarStyle: {
          backgroundColor: "#000000",
          height: 100,
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "#c3c3c3",
        tabBarActiveBackgroundColor: "#000000",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Bills" component={Bills}></Tab.Screen>
      <Tab.Screen name="Challans" component={Challans}></Tab.Screen>
      <Tab.Screen name="Items" component={Items}></Tab.Screen>
      <Tab.Screen name="Vendors" component={Vendors}></Tab.Screen>
      <Tab.Screen name="More" component={More}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default HomeStack;
