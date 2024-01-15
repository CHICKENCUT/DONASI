import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const IPhone13141 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13141}>
      <Pressable
        style={styles.kitaBerkahLogosTransparent}
        onPress={() => navigation.navigate("IPhone13142")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/kita-berkahlogos-transparent-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    width: "100%",
  },
  kitaBerkahLogosTransparent: {
    position: "absolute",
    left: -5,
    top: 222,
    width: 400,
    height: 400,
  },
  iphone13141: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13141;
