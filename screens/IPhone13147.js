import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const IPhone13147 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13147}>
      <View style={styles.iphone13147Child} />
      <Pressable
        style={[styles.image19, styles.vectorPosition1]}
        onPress={() => navigation.navigate("IPhone131412")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/image-191.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vector, styles.vectorPosition1]}
        onPress={() => navigation.navigate("IPhone131418")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vector1, styles.vectorPosition]}
        onPress={() => navigation.navigate("IPhone13144")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vector2, styles.vectorPosition]}
        onPress={() => navigation.navigate("IPhone131417")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector8.png")}
        />
      </Pressable>
      <View style={styles.iphone13147Item} />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IPhone13146")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector-91.png")}
        />
      </Pressable>
      <Text style={[styles.selamatkanBalitaSakit, styles.selamatkanTypo]}>
        Selamatkan Balita Sakit Kritis Butuhkan Operasi
      </Text>
      <View style={[styles.iphone13147Inner, styles.image23IconPosition]} />
      <View style={[styles.rectangleView, styles.rectangleShadowBox]} />
      <Pressable
        style={[styles.rectanglePressable, styles.rectangleShadowBox]}
        onPress={() => navigation.navigate("IPhone13148")}
      />
      <Pressable
        style={styles.donasikan}
        onPress={() => navigation.navigate("IPhone13148")}
      >
        <Text style={styles.donasikan1}>DONASIKAN</Text>
      </Pressable>
      <Image
        style={styles.image16Icon}
        contentFit="cover"
        source={require("../assets/image-162.png")}
      />
      <View style={[styles.iphone13147Child1, styles.iphone13147ChildLayout]} />
      <View style={[styles.iphone13147Child2, styles.image24IconPosition]} />
      <Text style={[styles.selamatkanBalitaSakit1, styles.image24IconPosition]}>
        Selamatkan Balita Sakit Kritis Butuhkan Operasi
      </Text>
      <Text style={[styles.terkumpulRp180426790, styles.donaturTypo]}>
        <Text style={styles.terkumpul}>Terkumpul</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.rp180426790}>Rp180.426.790</Text>
      </Text>
      <Text style={[styles.donatur, styles.donaturTypo]}>413 Donatur</Text>
      <Text style={[styles.targetRp200000000, styles.donaturTypo]}>
        <Text style={styles.terkumpul}>{`Target `}</Text>
        <Text style={styles.rp180426790}>Rp.200.000.000</Text>
      </Text>
      <Text style={[styles.rincianPenggunaanDana, styles.hariLagiTypo]}>
        Rincian Penggunaan Dana
      </Text>
      <View style={styles.lineView} />
      <Image
        style={styles.ionpeopleSharpIcon}
        contentFit="cover"
        source={require("../assets/ionpeoplesharp.png")}
      />
      <Image
        style={[styles.image23Icon, styles.image23IconPosition]}
        contentFit="cover"
        source={require("../assets/image-231.png")}
      />
      <Image
        style={[styles.image24Icon, styles.image24IconPosition]}
        contentFit="cover"
        source={require("../assets/image-241.png")}
      />
      <Text style={[styles.hariLagi, styles.hariLagiTypo]}>3 Hari Lagi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorPosition1: {
    top: 793,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  vectorPosition: {
    top: "93.96%",
    position: "absolute",
  },
  selamatkanTypo: {
    height: 18,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  image23IconPosition: {
    width: 356,
    left: 12,
    top: 158,
    position: "absolute",
  },
  rectangleShadowBox: {
    height: 25,
    bottom: 161,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iphone13147ChildLayout: {
    height: 7,
    borderRadius: Border.br_8xs,
    top: 494,
  },
  image24IconPosition: {
    left: 25,
    position: "absolute",
  },
  donaturTypo: {
    height: 11,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    position: "absolute",
  },
  hariLagiTypo: {
    height: 9,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  iphone13147Child: {
    top: 774,
    left: -31,
    borderRadius: Border.br_41xl,
    width: 451,
    height: 101,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  image19: {
    left: 123,
    width: 40,
    height: 40,
  },
  icon1: {
    marginLeft: 142,
  },
  vector: {
    left: "50%",
    width: 34,
    height: 34,
  },
  icon2: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector1: {
    left: "4.62%",
    right: "86.41%",
    bottom: "2.13%",
    width: "8.97%",
    height: "3.91%",
  },
  vector2: {
    left: "59.74%",
    right: "31.54%",
    bottom: "1.78%",
    width: "8.72%",
    height: "4.27%",
  },
  iphone13147Item: {
    top: -2,
    left: 0,
    backgroundColor: Color.colorGray_100,
    width: 390,
    height: 137,
    position: "absolute",
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
  selamatkanBalitaSakit: {
    top: 87,
    left: 57,
    width: 333,
    color: Color.colorWhite,
    position: "absolute",
  },
  iphone13147Inner: {
    height: 551,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    width: 356,
    left: 12,
    top: 158,
    backgroundColor: Color.colorWhite,
  },
  rectangleView: {
    left: 327,
    backgroundColor: Color.colorDarkslategray_300,
    width: 29,
  },
  rectanglePressable: {
    left: 227,
    backgroundColor: Color.colorDarkslategray_100,
    width: 90,
  },
  donasikan1: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    width: 72,
    height: 14,
    color: Color.colorWhite,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  donasikan: {
    left: 235,
    top: 664,
    position: "absolute",
  },
  image16Icon: {
    top: 663,
    left: 335,
    width: 13,
    height: 15,
    position: "absolute",
  },
  iphone13147Child1: {
    left: 167,
    backgroundColor: Color.colorLightgray,
    width: 183,
    position: "absolute",
  },
  iphone13147Child2: {
    backgroundColor: Color.colorDarkslategray_200,
    width: 295,
    height: 7,
    borderRadius: Border.br_8xs,
    top: 494,
  },
  selamatkanBalitaSakit1: {
    top: 421,
    width: 343,
    color: Color.colorBlack,
    height: 18,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  terkumpul: {
    color: Color.colorGray_600,
  },
  text: {
    color: Color.colorBlack,
  },
  rp180426790: {
    color: Color.colorCornflowerblue,
  },
  terkumpulRp180426790: {
    left: 27,
    width: 112,
    top: 465,
    fontSize: FontSize.size_3xs,
  },
  donatur: {
    top: 517,
    left: 51,
    width: 88,
    color: Color.colorBlack,
  },
  targetRp200000000: {
    left: 256,
    width: 95,
    top: 465,
    fontSize: FontSize.size_3xs,
  },
  rincianPenggunaanDana: {
    top: 518,
    left: 249,
    width: 104,
    color: Color.colorGray_600,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    fontWeight: "700",
  },
  lineView: {
    top: 528,
    left: 250,
    borderStyle: "solid",
    borderColor: Color.colorGray_700,
    borderTopWidth: 1,
    width: 101,
    height: 1,
    position: "absolute",
  },
  ionpeopleSharpIcon: {
    top: 545,
    left: 29,
    width: 18,
    height: 20,
    position: "absolute",
  },
  image23Icon: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    height: 191,
    width: 356,
    left: 12,
    top: 158,
  },
  image24Icon: {
    top: 363,
    width: 134,
    height: 39,
  },
  hariLagi: {
    top: 398,
    left: 53,
    textAlign: "right",
    width: 54,
    color: Color.colorBlack,
  },
  iphone13147: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13147;
