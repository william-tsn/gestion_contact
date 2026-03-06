import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ContactItem({ contact, navigation, contacts, setContacts }) {

  const deleteContact = () => {
    setContacts(contacts.filter(c => c.id !== contact.id));
  };

  return (

    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("ContactDetail", { contact })}
    >

      <View>
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.phone}>{contact.phone}</Text>
      </View>

      <Text style={styles.delete} onPress={deleteContact}>
        Supprimer
      </Text>

    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#ffffff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  name: {
    fontSize: 18,
    fontWeight: "bold"
  },

  phone: {
    color: "gray"
  },

  delete: {
    color: "red"
  }

});