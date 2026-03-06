import { View, Text, TouchableOpacity } from "react-native";

export default function ContactItem({ contact, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ padding: 10, borderBottomWidth: 1 }}>
        <Text>{contact.name}</Text>
        <Text>{contact.phone}</Text>
      </View>
    </TouchableOpacity>
  );
}
