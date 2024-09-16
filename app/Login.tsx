import { StyleSheet, View, Image, TextInput } from "react-native";
import React from "react";
import MyButtons from "@/components/MyButtons";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  const onContinue = () => {
    router.push("/signup");
  };

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/login.jpg")} style={styles.image} />
      <View style={styles.secondary}>
        <TextInput placeholder="Enter your Email" style={styles.input} />
        <TextInput
          placeholder="Enter your password"
          style={styles.input}
          onChangeText={(e) => console.log(e)}
        />
        <MyButtons btnName="Login" onPress={onContinue} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%", // Set appropriate width
    height: 200, // Set appropriate height
    resizeMode: "cover", // Adjust image aspect ratio
    marginBottom: 20,
    borderRadius: 20, // Space between image and button
  },
  secondary: {
    padding: 20,
    gap: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
