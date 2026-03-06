import { View, TextInput, Button, StyleSheet } from "react-native";
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
    <View style={styles.container}>

      <TextInput
        placeholder="Nom"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Téléphone"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />

      <View style={styles.button}>
        <Button title="Ajouter" onPress={addContact} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f2f2",
    justifyContent: "center"
  },

  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    backgroundColor: "#ffffff",
    padding: 12,
    marginBottom: 15,
    borderRadius: 6,
    fontSize: 16
  },

  button: {
    marginTop: 10
  }

});
