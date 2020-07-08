import React, { Children } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const TYPE = {
  primary: "primary",
  secondary: "secondary",
  transparent: "transparent",
};
const getBackgroundColor = (type) => {
  switch (type) {
    case TYPE.secondary:
      return "#33f25f";
    case TYPE.transparent:
      return "#00000000";
    default:
      return "#335ff2";
  }
};
const isTransparent = (type) => {
  return type == TYPE.transparent;
};

export function StyledButton(props) {
  const { children, type, startEnhancer } = props;

  const styles = StyleSheet.create({
    button: {
      marginVertical: 15,
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: isTransparent(type) ? "" : 5,
      backgroundColor: getBackgroundColor(type),
      flexDirection: isTransparent(type) ? "" : "row",
      alignItems: isTransparent(type) ? "" : "center",
    },
    buttonText: {
      color: isTransparent(type) ? "#666" : "#fff",
      fontSize: isTransparent(type) ? "" : 16,
      textAlign: isTransparent(type) ? "center" : "",
    },
  });
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      {startEnhancer}
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

export default StyledButton;
