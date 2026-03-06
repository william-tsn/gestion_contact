import { View, Text, FlatList, Button } from "react-native";
import ContactItem from "../components/ContactItem";

export default function HomeScreen({ navigation, route }) {

  const contacts = route.params?.contacts || [];

  return (
    <View style={{ padding: 20 }}>

      <Text style={{ fontSize: 22 }}>Contacts</Text>

      <Button
        title="Ajouter un contact"
        onPress={() => navigation.navigate("AddContact")}
      />

      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ContactItem
            contact={item}
            onPress={() =>
              navigation.navigate("Detail", { contact: item })
            }
          />
        )}
      />

    </View>
  );
}