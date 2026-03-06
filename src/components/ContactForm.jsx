import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

export default function ContactForm({ onAdd }) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

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
        <Button
          title="Ajouter"
          onPress={() => {
            if (!name || !phone) return;

            onAdd({
              id: Date.now().toString(),
              name,
              phone
            });

            setName("");
            setPhone("");
          }}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#ffffff",
    padding: 10,
    marginBottom: 12,
    borderRadius: 6,
    fontSize: 16
  },

  button: {
    marginTop: 5
  }

});