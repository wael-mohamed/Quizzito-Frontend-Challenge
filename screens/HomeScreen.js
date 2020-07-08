import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StyledButton, TYPE } from "../components/Button";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to the first Quizzito Frontend Challenge !
      </Text>
      <StyledButton onPress={() => navigation.navigate("Second")}>
        Go to the Next screen
      </StyledButton>
      <StyledButton type={TYPE.secondary}>Animation test</StyledButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 30,
  },
  button: {
    marginVertical: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "#335ff2",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
