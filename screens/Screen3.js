import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StyledButton, { TYPE } from "../components/Button";

export default function Screen3({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <StyledButton
          onPress={() => navigation.navigate("Home")}
          startEnhancer={
            <Ionicons
              style={styles.iconLeft}
              name="md-home"
              size={18}
              color="#fff"
            />
          }
        >
          Go Home
        </StyledButton>

        <StyledButton
          onPress={() => navigation.goBack()}
          type={TYPE.transparent}
        >
          Go back
        </StyledButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  iconLeft: {
    marginRight: 5,
  },
});
