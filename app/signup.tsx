import { StyleSheet, View } from "react-native";
import React from "react";
import MyButtons from "@/components/MyButtons";
import { useRouter } from "expo-router";
const SignUp = () => {
  const router = useRouter();
  const onContinue = () => {
    router.push("/Login");
  };
  return (
    <View style={styles.container}>
      <MyButtons btnName={"Register"} onPress={onContinue} />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
