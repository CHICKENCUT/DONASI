import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone131413 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone131413}>
      <View style={styles.iphone131413Child} />
      <Text style={styles.galangDana}>GALANG DANA</Text>
      <View style={styles.iphone131413Item} />
      <Pressable
        style={[styles.vector, styles.vectorPosition]}
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
        style={styles.vector1}
        onPress={() => navigation.navigate("IPhone131418")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vector2, styles.vectorPosition]}
        onPress={() => navigation.navigate("IPhone131417")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <View style={styles.iphone131413Inner} />
      <Text style={styles.penerima}>PENERIMA</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableShadowBox]}
        onPress={() => navigation.navigate("IPhone131414")}
      />
      <Pressable
        style={styles.arrowDropRight}
        onPress={() => navigation.navigate("IPhone131414")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/arrow-drop-right1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.selanjutnya}
        onPress={() => navigation.navigate("IPhone131414")}
      >
        <Text style={[styles.selanjutnya1, styles.sebelumnya1Typo]}>
          Selanjutnya
        </Text>
      </Pressable>
      <Pressable
        style={[styles.iphone131413Child1, styles.rectanglePressableShadowBox]}
        onPress={() => navigation.navigate("IPhone131412")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IPhone131412")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector-101.png")}
        />
      </Pressable>
      <Pressable
        style={styles.sebelumnya}
        onPress={() => navigation.navigate("IPhone131412")}
      >
        <Text style={[styles.sebelumnya1, styles.sebelumnya1Typo]}>
          Sebelumnya
        </Text>
      </Pressable>
      <Image
        style={[styles.rectangleIcon, styles.iphone131413ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-163.png")}
      />
      <Text style={styles.contohRakaPengusi}>
        Contoh: Raka, pengusi dari Bangladesh
      </Text>
      <Text style={[styles.namaPenerimaManfaat, styles.lokasiTypo]}>
        Nama penerima manfaat
      </Text>
      <Image
        style={[styles.iphone131413Child2, styles.lokasiPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-163.png")}
      />
      <Text style={[styles.contohBantuanHidup, styles.contohTypo]}>
        Contoh: Bantuan hidup (makanan, pakaian, vitamin)
      </Text>
      <Text style={[styles.tujuanGalangDana, styles.lokasiTypo]}>
        Tujuan galang dana
      </Text>
      <Image
        style={[styles.iphone131413Child3, styles.iphone131413ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-163.png")}
      />
      <Text style={[styles.contohKelurahanAbc, styles.contohTypo]}>
        Contoh: Kelurahan ABC, Kecamatan XYZ, Kota S
      </Text>
      <Text style={[styles.lokasi, styles.lokasiPosition]}>Lokasi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorPosition: {
    height: "3.91%",
    bottom: "1.42%",
    top: "94.67%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  rectanglePressableShadowBox: {
    height: 24,
    backgroundColor: Color.colorDarkslategray_100,
    borderRadius: Border.br_3xs,
    bottom: 342,
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
  sebelumnya1Typo: {
    height: 13,
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  iphone131413ChildLayout: {
    height: 26,
    width: 304,
    borderRadius: Border.br_8xs,
  },
  lokasiTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_2xs,
    height: 13,
    textAlign: "left",
  },
  lokasiPosition: {
    left: 45,
    position: "absolute",
  },
  contohTypo: {
    height: 12,
    color: Color.colorGray_900,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    position: "absolute",
  },
  iphone131413Child: {
    top: -2,
    left: -1,
    backgroundColor: Color.colorGray_100,
    width: 391,
    height: 126,
    position: "absolute",
  },
  galangDana: {
    top: 84,
    left: 133,
    width: 151,
    height: 18,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  iphone131413Item: {
    top: 780,
    left: -16,
    borderRadius: Border.br_41xl,
    backgroundColor: Color.colorWhite,
    width: 426,
    height: 101,
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "8.97%",
    right: "82.56%",
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
    height: 32,
    position: "absolute",
  },
  vector2: {
    left: "59.74%",
    right: "32.56%",
    width: "7.69%",
  },
  iphone131413Inner: {
    top: 184,
    left: 33,
    backgroundColor: Color.colorWhitesmoke,
    width: 329,
    height: 336,
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
  penerima: {
    top: 212,
    left: 249,
    color: Color.colorGray_100,
    width: 92,
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  rectanglePressable: {
    left: 260,
    width: 90,
  },
  arrowDropRight: {
    left: 328,
    top: 479,
    width: 22,
    height: 23,
    position: "absolute",
  },
  selanjutnya1: {
    width: 73,
    textAlign: "left",
  },
  selanjutnya: {
    left: 272,
    top: 483,
    position: "absolute",
  },
  iphone131413Child1: {
    left: 48,
    width: 89,
  },
  wrapper: {
    left: "14.36%",
    top: "57.58%",
    right: "84.36%",
    bottom: "41.23%",
    width: "1.28%",
    height: "1.18%",
    position: "absolute",
  },
  sebelumnya1: {
    textAlign: "right",
    width: 72,
  },
  sebelumnya: {
    left: 54,
    top: 484,
    position: "absolute",
  },
  rectangleIcon: {
    top: 279,
    left: 43,
    position: "absolute",
  },
  contohRakaPengusi: {
    top: 286,
    left: 49,
    width: 262,
    color: Color.colorGray_900,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_2xs,
    height: 13,
    textAlign: "left",
    position: "absolute",
  },
  namaPenerimaManfaat: {
    top: 261,
    width: 141,
    left: 43,
    position: "absolute",
  },
  iphone131413Child2: {
    top: 335,
    height: 26,
    width: 304,
    borderRadius: Border.br_8xs,
  },
  contohBantuanHidup: {
    top: 342,
    left: 51,
    width: 296,
  },
  tujuanGalangDana: {
    top: 317,
    width: 127,
    left: 43,
    position: "absolute",
  },
  iphone131413Child3: {
    top: 391,
    left: 47,
    position: "absolute",
  },
  contohKelurahanAbc: {
    top: 398,
    left: 53,
    width: 265,
  },
  lokasi: {
    top: 373,
    width: 125,
    color: Color.colorBlack,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_2xs,
    height: 13,
    textAlign: "left",
  },
  iphone131413: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone131413;
