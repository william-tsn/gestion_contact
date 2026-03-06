import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation, contacts }) {

  return (
    <View style={styles.container}>

      <View style={styles.buttonContainer}>
        <Button
          title="Ajouter un contact"
          onPress={() => navigation.navigate("Ajouter")}
        />
      </View>

      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (

          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("Detail", { contact: item })
            }
          >
            <Text style={styles.name}>
              {item.name}
            </Text>
          </TouchableOpacity>

        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f2f2"
  },

  buttonContainer: {
    marginBottom: 20
  },

  card: {
    backgroundColor: "#ffffff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#dddddd"
  },

  name: {
    fontSize: 18
  }

});
