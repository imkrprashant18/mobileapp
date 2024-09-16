import { StyleSheet, View } from "react-native";
import MyButtons from "@/components/MyButtons";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();
  const onContinue = () => {
    router.push("/Login");
  };
  return (
    <View style={styles.container}>
      <MyButtons btnName={"continue"} onPress={onContinue} />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
