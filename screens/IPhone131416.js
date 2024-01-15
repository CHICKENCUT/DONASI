import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const IPhone131416 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone131416}>
      <View style={styles.iphone131416Child} />
      <Text style={[styles.galangDana, styles.ajakanTypo]}>GALANG DANA</Text>
      <View style={styles.iphone131416Item} />
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
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/image-3.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vector1}
        onPress={() => navigation.navigate("IPhone131418")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout1]}
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
      <View style={styles.iphone131416Inner} />
      <Text style={[styles.sayaTelahMembaca, styles.sayaTelahMembacaTypo]}>
        Saya telah membaca dan menyetujui syarat dan ketentuan
      </Text>
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableShadowBox]}
        onPress={() => navigation.navigate("IPhone13144")}
      />
      <Pressable
        style={styles.selesai}
        onPress={() => navigation.navigate("IPhone13144")}
      >
        <Text style={[styles.selesai1, styles.selesai1Layout]}>Selesai</Text>
      </Pressable>
      <Pressable
        style={[styles.iphone131416Child1, styles.iphone131416Child1Position]}
        onPress={() => navigation.navigate("IPhone131415")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("IPhone131415")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector-10.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.sebelumnya, styles.sebelumnyaPosition]}
        onPress={() => navigation.navigate("IPhone131415")}
      >
        <Text style={[styles.sebelumnya1, styles.selesai1Layout]}>
          Sebelumnya
        </Text>
      </Pressable>
      <Text style={[styles.ajakan, styles.ajakanTypo]}>AJAKAN</Text>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-16.png")}
      />
      <Text
        style={[
          styles.ceritakanTentangPenggalangan,
          styles.iphone131416Child1Position,
        ]}
      >
        Ceritakan tentang penggalangan dana
      </Text>
      <Text
        style={[styles.tulisAjakanSingkat, styles.iphone131416Child1Position]}
      >
        Tulis ajakan singkat donasi ini
      </Text>
      <Image
        style={[styles.iphone131416Child2, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-27.png")}
      />
      <Text
        style={[styles.contohPenghasilanSaya, styles.contohTypo]}
      >{`Contoh: Penghasilan saya hanya 20 ribu/ hari, padahal Abi 
              anak saya butuh 20 juta untuk pengobatan 
              kanker hati. Bantu saya mengobati Abi`}</Text>
      <Text style={[styles.contohCeritakanYang, styles.contohTypo]}>{`Contoh: 

Ceritakan yang lengkap meliputi 
identitas dan hubungan kamu dengan penerima manfaat
Masalah yang dihadapi
Usaha pengumpulan dana
Alasan galang dana sangat dibutuhkan
 `}</Text>
      <View style={[styles.rectangleView, styles.sebelumnyaPosition]} />
      <Image
        style={[styles.vectorIcon, styles.wrapperPosition]}
        contentFit="cover"
        source={require("../assets/vector-11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ajakanTypo: {
    height: 18,
    textAlign: "left",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    position: "absolute",
  },
  vectorPosition: {
    height: "3.91%",
    bottom: "1.42%",
    top: "94.67%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  sayaTelahMembacaTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
  },
  rectanglePressableShadowBox: {
    height: 23,
    width: 90,
    backgroundColor: Color.colorDarkslategray_100,
    borderRadius: Border.br_3xs,
    bottom: 120,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  selesai1Layout: {
    height: 12,
    fontFamily: FontFamily.roboto,
  },
  iphone131416Child1Position: {
    left: 45,
    position: "absolute",
  },
  wrapperPosition: {
    height: "1.07%",
    width: "1.28%",
    bottom: "14.93%",
    top: "84%",
    position: "absolute",
  },
  sebelumnyaPosition: {
    left: 51,
    position: "absolute",
  },
  rectangleIconLayout: {
    width: 305,
    borderRadius: Border.br_8xs,
    left: 45,
    position: "absolute",
  },
  contohTypo: {
    opacity: 0.5,
    left: 51,
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  iphone131416Child: {
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
    color: Color.colorWhite,
    textAlign: "left",
    fontSize: FontSize.size_mid,
  },
  iphone131416Item: {
    top: 780,
    left: -16,
    borderRadius: Border.br_41xl,
    width: 426,
    height: 101,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
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
  iphone131416Inner: {
    top: 163,
    left: 32,
    backgroundColor: Color.colorWhitesmoke,
    width: 330,
    height: 576,
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
  sayaTelahMembaca: {
    left: 70,
    width: 271,
    height: 11,
    top: 528,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_2xs,
    fontWeight: "700",
    position: "absolute",
  },
  rectanglePressable: {
    left: 258,
    position: "absolute",
  },
  selesai1: {
    textAlign: "center",
    width: 72,
    fontSize: FontSize.size_xs,
    height: 12,
    color: Color.colorWhite,
    fontWeight: "700",
  },
  selesai: {
    left: 265,
    top: 706,
    position: "absolute",
  },
  iphone131416Child1: {
    height: 23,
    width: 90,
    backgroundColor: Color.colorDarkslategray_100,
    borderRadius: Border.br_3xs,
    bottom: 120,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  wrapper: {
    left: "13.59%",
    right: "85.13%",
  },
  sebelumnya1: {
    textAlign: "right",
    width: 73,
    fontSize: FontSize.size_xs,
    height: 12,
    color: Color.colorWhite,
    fontWeight: "700",
  },
  sebelumnya: {
    top: 705,
  },
  ajakan: {
    top: 182,
    left: 276,
    color: Color.colorGray_100,
    width: 74,
    textAlign: "left",
    fontSize: FontSize.size_mid,
  },
  rectangleIcon: {
    top: 253,
    height: 109,
  },
  ceritakanTentangPenggalangan: {
    top: 236,
    width: 203,
    height: 12,
    fontFamily: FontFamily.roboto,
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
  },
  tulisAjakanSingkat: {
    top: 382,
    width: 160,
    height: 11,
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  iphone131416Child2: {
    top: 398,
    height: 116,
  },
  contohPenghasilanSaya: {
    top: 407,
    width: 293,
    height: 35,
  },
  contohCeritakanYang: {
    top: 261,
    width: 296,
    height: 93,
  },
  rectangleView: {
    borderStyle: "solid",
    borderColor: Color.colorGray_1200,
    borderWidth: 1,
    width: 12,
    height: 11,
    top: 528,
    backgroundColor: Color.colorWhite,
  },
  vectorIcon: {
    right: "13.08%",
    left: "85.64%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iphone131416: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone131416;
