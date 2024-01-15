import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone131410 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.iphone131410}
      onPress={() => navigation.navigate("IPhone131411")}
    >
      <View style={styles.iphone131410Child} />
      <Text style={styles.donasi}>DONASI</Text>
      <Text style={styles.batasWaktuPembayaranContainer}>
        <Text style={styles.batasWaktuPembayaran}>{`Batas waktu pembayaran

`}</Text>
        <Text style={styles.selasa14November}>
          Selasa, 14 November 2023 - 12.30
        </Text>
      </Text>
      <Text style={[styles.text, styles.textTypo]}>23:30:58</Text>
      <Image
        style={styles.clockIcon}
        contentFit="cover"
        source={require("../assets/clock.png")}
      />
      <View style={styles.iphone131410Item} />
      <Image
        style={styles.expandDownIcon}
        contentFit="cover"
        source={require("../assets/expand-down.png")}
      />
      <Text style={[styles.rp175000, styles.rp175000Typo]}>Rp. 175.000</Text>
      <View style={[styles.iphone131410Inner, styles.rectangleViewShadowBox]} />
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <Text style={[styles.nomorVirtualAccount, styles.salinTypo]}>
        Nomor Virtual Account
      </Text>
      <Text style={[styles.totalDonasi, styles.rp175000Typo]}>
        Total donasi
      </Text>
      <Text style={[styles.caraPembayaran, styles.salinTypo]}>
        Cara Pembayaran
      </Text>
      <Text style={[styles.salin, styles.salinTypo]}>Salin</Text>
      <View
        style={[styles.iphone131410Child1, styles.iphone131410ChildLayout]}
      />
      <View
        style={[styles.iphone131410Child2, styles.iphone131410ChildLayout]}
      />
      <Image
        style={styles.image16Icon}
        contentFit="cover"
        source={require("../assets/image-16.png")}
      />
      <Text style={[styles.bniVirtualAccount, styles.textTypo]}>
        BNI Virtual Account
      </Text>
      <Text style={[styles.text1, styles.textTypo]}>826256254264762867</Text>
      <Text style={[styles.idDonasi725735377Container, styles.textTypo]}>
        <Text style={styles.batasWaktuPembayaran}>{`ID Donasi `}</Text>
        <Text style={styles.selasa14November}> #725735377</Text>
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    height: 17,
    color: Color.colorBlack,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  rp175000Typo: {
    height: 16,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  rectangleViewShadowBox: {
    backgroundColor: Color.colorSilver_200,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  salinTypo: {
    height: 13,
    fontSize: FontSize.size_2xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  iphone131410ChildLayout: {
    width: 51,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorDarkslategray_400,
    borderRadius: Border.br_3xs,
    height: 25,
    position: "absolute",
  },
  iphone131410Child: {
    top: -2,
    left: 0,
    backgroundColor: Color.colorGray_100,
    width: 390,
    height: 137,
    position: "absolute",
  },
  donasi: {
    top: 92,
    left: 147,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    width: 96,
    height: 28,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    position: "absolute",
  },
  batasWaktuPembayaran: {
    fontFamily: FontFamily.roboto,
  },
  selasa14November: {
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  batasWaktuPembayaranContainer: {
    top: 162,
    width: 259,
    height: 51,
    color: Color.colorBlack,
    fontSize: FontSize.size_smi,
    left: 16,
    textAlign: "left",
    position: "absolute",
  },
  text: {
    top: 194,
    left: 314,
    width: 76,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  clockIcon: {
    top: 188,
    left: 289,
    width: 23,
    height: 25,
    position: "absolute",
    overflow: "hidden",
  },
  iphone131410Item: {
    top: 286,
    left: 15,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhitesmoke,
    width: 360,
    height: 241,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  expandDownIcon: {
    left: 325,
    width: 22,
    height: 24,
    top: 418,
    position: "absolute",
  },
  rp175000: {
    top: 422,
    left: 250,
    width: 92,
    fontWeight: "700",
  },
  iphone131410Inner: {
    bottom: 443,
    width: 318,
    height: 52,
    left: 39,
  },
  rectangleView: {
    bottom: 352,
    left: 35,
    width: 319,
    height: 26,
  },
  nomorVirtualAccount: {
    top: 358,
    width: 157,
    left: 47,
  },
  totalDonasi: {
    width: 95,
    left: 39,
    top: 418,
  },
  caraPembayaran: {
    top: 472,
    left: 154,
    width: 107,
  },
  salin: {
    top: 370,
    left: 299,
    width: 37,
  },
  iphone131410Child1: {
    bottom: 510,
    left: 306,
    borderColor: "rgba(0, 0, 0, 0.12)",
  },
  iphone131410Child2: {
    bottom: 456,
    left: 285,
    borderColor: Color.colorGray_1200,
  },
  image16Icon: {
    top: 314,
    left: 311,
    width: 41,
    height: 15,
    position: "absolute",
  },
  bniVirtualAccount: {
    top: 315,
    width: 201,
    left: 39,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  text1: {
    top: 380,
    width: 193,
    left: 47,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  idDonasi725735377Container: {
    top: 213,
    width: 200,
    left: 16,
    height: 17,
  },
  iphone131410: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone131410;
