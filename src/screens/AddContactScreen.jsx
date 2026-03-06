import { View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function AddContactScreen({ navigation, contacts, setContacts }) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function addContact() {

    const newContact = {
      id: Date.now(),
      name: name,
      phone: phone
    };

    setContacts([
      ...contacts, 
      newContact   
    ]);

    navigation.goBack();
  }

  return (
    <View style={{ padding: 20 }}>

      <TextInput
        placeholder="Nom"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Téléphone"
        value={phone}
        onChangeText={setPhone}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Button title="Ajouter" onPress={addContact} />

    </View>
  );
}