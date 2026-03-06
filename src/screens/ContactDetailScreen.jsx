import { View, Text, StyleSheet } from "react-native";

export default function ContactDetailScreen({ route }) {

  const { contact } = route.params;

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Détail du contact</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nom</Text>
        <Text style={styles.value}>{contact.name}</Text>

        <Text style={styles.label}>Téléphone</Text>
        <Text style={styles.value}>{contact.phone}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f2f2"
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },

  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#dddddd"
  },

  label: {
    fontSize: 14,
    color: "#777777",
    marginTop: 10
  },

  value: {
    fontSize: 18,
    marginTop: 4
  }

});
