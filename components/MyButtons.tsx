import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";

// Define the props type
interface MyButtonsProps {
  btnName: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const MyButtons: React.FC<MyButtonsProps> = ({ btnName, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{btnName}</Text>
    </TouchableOpacity>
  );
};

export default MyButtons;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
