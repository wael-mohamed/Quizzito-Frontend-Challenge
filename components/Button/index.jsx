import React, { useRef } from "react";
import { Animated, Text, StyleSheet, Easing } from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler";

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
  const { children, type, startEnhancer, onPress } = props;
  //Animation On render
  const fadeAnim = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
    }).start();
  }, []);
  //Animation On click
  const scaleValue = new Animated.Value(0);
  const cardScale = scaleValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.1, 1.2],
  });
  const onClick = () => {
    scaleValue.setValue(0);
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.5,
        duration: 50,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 50,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start(onPress);
  };
  //Styles
  const styles = StyleSheet.create({
    button: {
      marginVertical: 15,
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: isTransparent(type) ? null : 5,
      backgroundColor: getBackgroundColor(type),
      flexDirection: isTransparent(type) ? null : "row",
      alignItems: isTransparent(type) ? null : "center",
      opacity: fadeAnim,
      transform: [{ scale: cardScale }],
    },
    buttonText: {
      color: isTransparent(type) ? "#666" : "#fff",
      fontSize: isTransparent(type) ? null : 16,
      textAlign: isTransparent(type) ? "center" : null,
    },
  });

  return (
    <TapGestureHandler
      onGestureEvent={() => {
        onClick();
      }}
    >
      <Animated.View style={styles.button}>
        {startEnhancer}
        <Text
          style={{
            ...styles.buttonText,
          }}
        >
          {children}
        </Text>
      </Animated.View>
    </TapGestureHandler>
  );
}

export default StyledButton;
