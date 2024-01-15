import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const IPhone131415 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone131415}>
      <View style={styles.iphone131415Child} />
      <Text style={[styles.galangDana, styles.judulTypo]}>GALANG DANA</Text>
      <View style={styles.iphone131415Item} />
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
      <View style={styles.iphone131415Inner} />
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableShadowBox]}
        onPress={() => navigation.navigate("IPhone131416")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("IPhone131416")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.selanjutnya, styles.judulPosition]}
        onPress={() => navigation.navigate("IPhone131416")}
      >
        <Text style={[styles.selanjutnya1, styles.sebelumnya1Typo]}>
          Selanjutnya
        </Text>
      </Pressable>
      <Pressable
        style={[styles.iphone131415Child1, styles.rectanglePressableShadowBox]}
        onPress={() => navigation.navigate("IPhone131414")}
      />
      <Pressable
        style={[styles.container, styles.wrapperPosition]}
        onPress={() => navigation.navigate("IPhone131414")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector-10.png")}
        />
      </Pressable>
      <Pressable
        style={styles.sebelumnya}
        onPress={() => navigation.navigate("IPhone131414")}
      >
        <Text style={[styles.sebelumnya1, styles.sebelumnya1Typo]}>
          Sebelumnya
        </Text>
      </Pressable>
      <Image
        style={[styles.rectangleIcon, styles.iphone131415ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-20.png")}
      />
      <Image
        style={[styles.iphone131415Child2, styles.iphone131415ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-161.png")}
      />
      <Image
        style={[styles.iphone131415Child3, styles.iphone131415ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4165.png")}
      />
      <Text style={[styles.judul, styles.judulPosition]}>JUDUL</Text>
      <Text style={[styles.contohSedekahUntuk, styles.contohTypo]}>
        Contoh: Sedekah untuk 50 anak jalanan
      </Text>
      <Text style={[styles.contohSedekahuntuk50anakjala, styles.contohTypo]}>
        Contoh: Sedekahuntuk50anakjalanan
      </Text>
      <Text style={[styles.beriJudulUntuk, styles.untukTypo]}>
        Beri judul untuk galang dana ini
      </Text>
      <Text style={[styles.tentukanLinkUntuk, styles.untukTypo]}>
        Tentukan link untuk galang dana ini
      </Text>
      <Text style={[styles.uploadFotoGalang, styles.fotoTypo]}>
        Upload foto galang dana
      </Text>
      <Text
        style={styles.fotoYangDigunakan}
      >{`Foto yang digunakan cocok dengan cerita
Foto asli tanpa diedit atau ubah terlalu banyak
Pencahayaan cukup`}</Text>
      <Text style={[styles.kriteriaFotoGalang, styles.untukTypo]}>
        Kriteria foto galang dana yang baik
      </Text>
      <Text style={[styles.unggahFoto, styles.fotoTypo]}>Unggah Foto</Text>
      <Image
        style={styles.materialSymbolsaddPhotoAltIcon}
        contentFit="cover"
        source={require("../assets/materialsymbolsaddphotoalternateoutline.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  judulTypo: {
    height: 18,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    fontSize: FontSize.size_mid,
    textAlign: "left",
  },
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
    height: 22,
    width: 90,
    backgroundColor: Color.colorDarkslategray_100,
    borderRadius: Border.br_3xs,
    bottom: 114,
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
  wrapperPosition: {
    height: "1.07%",
    width: "1.28%",
    bottom: "14.22%",
    top: "84.72%",
    position: "absolute",
  },
  judulPosition: {
    left: 270,
    position: "absolute",
  },
  sebelumnya1Typo: {
    height: 13,
    width: 73,
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  iphone131415ChildLayout: {
    width: 305,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  contohTypo: {
    opacity: 0.5,
    height: 12,
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  untukTypo: {
    height: 12,
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  fotoTypo: {
    height: 11,
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  iphone131415Child: {
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
    height: 18,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  iphone131415Item: {
    top: 780,
    left: -16,
    borderRadius: Border.br_41xl,
    width: 426,
    height: 101,
    backgroundColor: Color.colorWhite,
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
  iphone131415Inner: {
    top: 163,
    left: 32,
    width: 330,
    height: 580,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  rectanglePressable: {
    left: 258,
  },
  wrapper: {
    left: "85.9%",
    right: "12.82%",
  },
  selanjutnya1: {
    textAlign: "left",
    width: 73,
    fontSize: FontSize.size_xs,
  },
  selanjutnya: {
    top: 712,
  },
  iphone131415Child1: {
    left: 45,
  },
  container: {
    left: "13.59%",
    right: "85.13%",
  },
  sebelumnya1: {
    textAlign: "right",
  },
  sebelumnya: {
    left: 51,
    top: 713,
    position: "absolute",
  },
  rectangleIcon: {
    top: 377,
    left: 44,
    height: 137,
  },
  iphone131415Child2: {
    top: 278,
    height: 24,
    left: 42,
  },
  iphone131415Child3: {
    top: 327,
    height: 25,
    left: 42,
  },
  judul: {
    top: 185,
    color: Color.colorGray_100,
    width: 67,
    height: 18,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    fontSize: FontSize.size_mid,
    textAlign: "left",
    left: 270,
  },
  contohSedekahUntuk: {
    top: 284,
    width: 237,
    left: 47,
  },
  contohSedekahuntuk50anakjala: {
    top: 333,
    left: 50,
    width: 234,
  },
  beriJudulUntuk: {
    top: 261,
    width: 179,
    left: 42,
  },
  tentukanLinkUntuk: {
    top: 311,
    width: 216,
    left: 42,
  },
  uploadFotoGalang: {
    top: 361,
    width: 184,
    left: 42,
  },
  fotoYangDigunakan: {
    top: 545,
    width: 293,
    height: 36,
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    left: 47,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  kriteriaFotoGalang: {
    top: 529,
    width: 223,
    left: 47,
  },
  unggahFoto: {
    top: 460,
    left: 167,
    width: 76,
  },
  materialSymbolsaddPhotoAltIcon: {
    top: 423,
    left: 176,
    width: 45,
    height: 45,
    position: "absolute",
  },
  iphone131415: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone131415;
