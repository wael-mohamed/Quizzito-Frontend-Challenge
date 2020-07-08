import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import StyledButton, { TYPE } from "../components/Button";

export default function Screen2({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.fullWidthImage}
        source={require("../assets/full-width.png")}
        width={"100%"}
        height={300}
      />
      <View style={{ justifyContent: "center", flex: 1 }}>
        <StyledButton
          type={TYPE.secondary}
          onPress={() => navigation.navigate("Third")}
        >
          Go to third screen
        </StyledButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  fullWidthImage: {
    resizeMode: "contain",
    backgroundColor: "#eee",
  },
});
