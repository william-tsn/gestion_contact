import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";

import HomeScreen from "./src/screens/HomeScreen";
import AddContactScreen from "./src/screens/AddContactScreen";
import ContactDetailScreen from "./src/screens/ContactDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {

  const [contacts, setContacts] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Accueil">
          {(props) => (
            <HomeScreen
              {...props}
              contacts={contacts}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Ajouter">
          {(props) => (
            <AddContactScreen
              {...props}
              contacts={contacts}
              setContacts={setContacts}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Detail"
          component={ContactDetailScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
