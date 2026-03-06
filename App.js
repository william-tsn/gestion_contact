import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import AddContactScreen from "./src/screens/AddContactScreen";
import ContactDetailScreen from "./src/screens/ContactDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="AddContact"
          component={AddContactScreen}
        />

        <Stack.Screen
          name="Detail"
          component={ContactDetailScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}