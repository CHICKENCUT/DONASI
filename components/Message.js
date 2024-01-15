import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Message = ({ messagePosition, messageTop, messageLeft }) => {
  const messageStyle = useMemo(() => {
    return {
      ...getStyleValue("position", messagePosition),
      ...getStyleValue("top", messageTop),
      ...getStyleValue("left", messageLeft),
    };
  }, [messagePosition, messageTop, messageLeft]);

  return (
    <View style={[styles.message, messageStyle]}>
      <View style={[styles.messageChild, styles.messageLayout]} />
      <Image
        style={[styles.messageItem, styles.messageLayout]}
        contentFit="cover"
        source={require("../assets/vector-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  messageLayout: {
    borderRadius: Border.br_11xs,
    position: "absolute",
  },
  messageChild: {
    height: "58.33%",
    width: "75.91%",
    top: "20.83%",
    right: "11.82%",
    bottom: "20.83%",
    left: "12.27%",
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    borderWidth: 2,
  },
  messageItem: {
    height: "16.67%",
    width: "66.82%",
    top: "37.5%",
    right: "16.36%",
    bottom: "45.83%",
    left: "16.82%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  message: {
    width: 22,
    height: 24,
    overflow: "hidden",
  },
});

export default Message;
