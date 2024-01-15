import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const IPhone131411 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone131411, styles.iconLayout]}>
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../assets/image-31.png")}
      />
      <Text style={[styles.pembayaranBerhasil, styles.donasiTypo]}>
        PEMBAYARAN BERHASIL!
      </Text>
      <View style={styles.iphone131411Child} />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IPhone13144")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector-91.png")}
        />
      </Pressable>
      <Text style={[styles.donasi, styles.donasiTypo]}>DONASI</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  donasiTypo: {
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  image3Icon: {
    top: 316,
    left: 127,
    width: 136,
    height: 150,
    position: "absolute",
  },
  pembayaranBerhasil: {
    top: 482,
    left: 65,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    width: 260,
    height: 23,
  },
  iphone131411Child: {
    top: -2,
    left: 0,
    backgroundColor: Color.colorGray_100,
    width: 390,
    height: 137,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  wrapper: {
    left: "5.13%",
    top: "11.37%",
    right: "92.31%",
    bottom: "85.9%",
    width: "2.56%",
    height: "2.73%",
    position: "absolute",
  },
  donasi: {
    top: 91,
    left: 146,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    color: Color.colorWhite,
    width: 97,
    height: 28,
  },
  iphone131411: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 844,
  },
});

export default IPhone131411;
