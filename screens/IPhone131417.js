import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const IPhone131417 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone131417}>
      <View style={[styles.iphone131417Child, styles.vector1Layout]} />
      <Image
        style={styles.searchAltIcon}
        contentFit="cover"
        source={require("../assets/search-alt.png")}
      />
      <Text style={[styles.search, styles.searchTypo]}>Search</Text>
      <Text style={styles.hariIni}>Hari ini</Text>
      <Text style={[styles.donasiTelahTersalurkan, styles.commentIconPosition]}>
        Donasi Telah Tersalurkan
      </Text>
      <Text style={[styles.text, styles.textTypo]}>16.00</Text>
      <View style={[styles.iphone131417Item, styles.iphone131417Layout]} />
      <View style={[styles.iphone131417Inner, styles.iphone131417Layout]} />
      <Image
        style={[styles.commentIcon, styles.commentIconPosition]}
        contentFit="cover"
        source={require("../assets/comment.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.notifikasi, styles.searchTypo]}>NOTIFIKASI</Text>
      <Text style={[styles.lihatSelengkapnya, styles.textTypo]}>
        Lihat selengkapnya
      </Text>
      <View style={styles.iphone131417Child1} />
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Pressable
        style={[styles.vector, styles.vectorLayout]}
        onPress={() => navigation.navigate("IPhone13144")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.image3}
        onPress={() => navigation.navigate("IPhone131412")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/image-3.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vector1, styles.vector1Layout]}
        onPress={() => navigation.navigate("IPhone131418")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  vector1Layout: {
    height: 32,
    position: "absolute",
  },
  searchTypo: {
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  commentIconPosition: {
    top: 289,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  iphone131417Layout: {
    height: 1,
    width: 331,
    borderTopWidth: 1,
    borderColor: Color.colorGray_1100,
    left: 30,
    borderStyle: "solid",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorLayout: {
    height: "3.91%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  iphone131417Child: {
    top: 178,
    left: 33,
    borderRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderColor: Color.colorGray_1000,
    borderWidth: 1,
    width: 323,
    borderStyle: "solid",
    height: 32,
    backgroundColor: Color.colorWhite,
  },
  searchAltIcon: {
    top: 184,
    left: 325,
    width: 19,
    height: 21,
    position: "absolute",
  },
  search: {
    top: 183,
    left: 48,
    fontSize: FontSize.size_xl,
    color: Color.colorDimgray_200,
    width: 57,
    height: 23,
    position: "absolute",
  },
  hariIni: {
    top: 251,
    fontSize: FontSize.size_mini,
    width: 63,
    height: 18,
    color: Color.colorBlack,
    left: 30,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  donasiTelahTersalurkan: {
    left: 76,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    width: 173,
    height: 16,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  text: {
    top: 301,
    left: 329,
    width: 31,
    height: 11,
    color: Color.colorBlack,
  },
  iphone131417Item: {
    top: 279,
  },
  iphone131417Inner: {
    top: 333,
  },
  commentIcon: {
    left: 42,
    width: 27,
    height: 30,
  },
  rectangleView: {
    top: -2,
    left: 0,
    backgroundColor: Color.colorGray_100,
    width: 390,
    height: 137,
    position: "absolute",
  },
  notifikasi: {
    top: 93,
    left: 127,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    width: 143,
    height: 28,
    position: "absolute",
  },
  lihatSelengkapnya: {
    top: 313,
    left: 79,
    color: Color.colorCornflowerblue,
    width: 104,
    height: 2,
  },
  iphone131417Child1: {
    top: 780,
    left: -16,
    borderRadius: Border.br_41xl,
    width: 426,
    height: 101,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  vectorIcon: {
    width: "7.69%",
    top: "94.43%",
    right: "30%",
    bottom: "1.66%",
    left: "62.31%",
    height: "3.91%",
    position: "absolute",
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "8.97%",
    top: "94.67%",
    right: "82.56%",
    bottom: "1.42%",
    width: "8.46%",
  },
  image3: {
    left: 122,
    top: 798,
    width: 37,
    height: 37,
    position: "absolute",
  },
  icon2: {
    marginLeft: 137,
  },
  vector1: {
    left: "50%",
    top: 799,
    width: 30,
  },
  iphone131417: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone131417;
