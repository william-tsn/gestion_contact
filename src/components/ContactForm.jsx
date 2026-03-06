import { View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function ContactForm({ onAdd }) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <View>

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
  );
}
