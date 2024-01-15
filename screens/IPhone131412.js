import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const IPhone131412 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone131412}>
      <View style={styles.iphone131412Child} />
      <Text style={[styles.galangDana, styles.dataDiriTypo]}>GALANG DANA</Text>
      <View style={[styles.iphone131412Item, styles.iphone131412ShadowBox]} />
      <Pressable
        style={[styles.iphone131412Inner, styles.iphone131412ShadowBox]}
        onPress={() => navigation.navigate("IPhone131413")}
      />
      <Pressable
        style={[styles.arrowDropRight, styles.arrowLayout]}
        onPress={() => navigation.navigate("IPhone131413")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/arrow-drop-right2.png")}
        />
      </Pressable>
      <Pressable
        style={styles.selanjutnya}
        onPress={() => navigation.navigate("IPhone131413")}
      >
        <Text style={[styles.selanjutnya1, styles.selanjutnya1Typo]}>
          Selanjutnya
        </Text>
      </Pressable>
      <View style={[styles.arrowDropLeft, styles.arrowLayout]} />
      <Text style={[styles.dataDiri, styles.dataDiriTypo]}>DATA DIRI</Text>
      <Image
        style={[styles.rectangleIcon, styles.iphone131412ChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-30.png")}
      />
      <Text style={[styles.masukkanNamaAkun, styles.namaTypo]}>
        Masukkan nama akun Instagram kamu
      </Text>
      <Image
        style={[styles.iphone131412Child1, styles.iphone131412ChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-30.png")}
      />
      <Image
        style={[styles.iphone131412Child2, styles.iphone131412ChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-30.png")}
      />
      <Image
        style={[styles.iphone131412Child3, styles.iphone131412ChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-30.png")}
      />
      <Image
        style={[styles.iphone131412Child4, styles.iphone131412ChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-30.png")}
      />
      <Image
        style={[styles.iphone131412Child5, styles.iphone131412ChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-211.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.iphone131412ChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Text style={[styles.namaKamuSesuai, styles.namaTypo]}>
        Nama kamu sesuai KTP
      </Text>
      <Text style={[styles.masukkanNoPonsel, styles.namaTypo]}>
        Masukkan no. ponsel kamu
      </Text>
      <Text style={[styles.pekerjaanKamuSaat, styles.namaTypo]}>
        Pekerjaan kamu saat ini
      </Text>
      <Text style={[styles.namaSekolahtempatKerja, styles.namaTypo]}>
        Nama sekolah/tempat kerja
      </Text>
      <Text
        style={[styles.galangDanaAkan, styles.selanjutnya1Typo]}
      >{`* Galang dana akan ditolak jika akun media sosial kamu tidak dapat ditemukan 
   oleh tim Kita Berkah`}</Text>
      <Text style={[styles.akunMediaSosial, styles.namaTypo]}>
        Akun media sosial kamu
      </Text>
      <Text style={[styles.facebook, styles.facebookTypo]}>Facebook</Text>
      <Image
        style={[styles.iphone131412Child6, styles.iphone131412ChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-211.png")}
      />
      <Text style={[styles.instagram, styles.linkedlnLayout]}>Instagram</Text>
      <Image
        style={[styles.iphone131412Child7, styles.iphone131412ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-281.png")}
      />
      <Image
        style={[styles.iphone131412Child8, styles.iphone131412ChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Text style={[styles.twitter, styles.twitterTypo]}>Twitter</Text>
      <Image
        style={[styles.iphone131412Child9, styles.iphone131412ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-281.png")}
      />
      <Image
        style={[styles.iphone131412Child10, styles.iphone131412ChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Text style={[styles.linkedln, styles.twitterTypo]}>Linkedln</Text>
      <Image
        style={[styles.iphone131412Child11, styles.iphone131412ChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <View style={styles.rectangleView} />
      <Pressable
        style={[styles.vector, styles.vectorPosition]}
        onPress={() => navigation.navigate("IPhone13144")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../assets/image-3.png")}
      />
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
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  dataDiriTypo: {
    height: 18,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    position: "absolute",
  },
  iphone131412ShadowBox: {
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
  arrowLayout: {
    height: 22,
    width: 21,
    top: 717,
    position: "absolute",
  },
  selanjutnya1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  iphone131412ChildLayout3: {
    height: 25,
    width: 298,
    borderRadius: Border.br_8xs,
    left: 46,
    position: "absolute",
  },
  namaTypo: {
    height: 12,
    fontSize: FontSize.size_2xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  iphone131412ChildLayout2: {
    height: 24,
    width: 128,
    top: 449,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  iphone131412ChildLayout1: {
    height: 15,
    width: 14,
    position: "absolute",
  },
  facebookTypo: {
    top: 457,
    height: 12,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  linkedlnLayout: {
    width: 72,
    left: 235,
  },
  iphone131412ChildLayout: {
    top: 486,
    width: 128,
    height: 25,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  twitterTypo: {
    opacity: 0.5,
    height: 12,
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
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
  iphone131412Child: {
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
  },
  iphone131412Item: {
    top: 165,
    left: 33,
    backgroundColor: Color.colorWhitesmoke,
    width: 322,
    height: 592,
  },
  iphone131412Inner: {
    bottom: 105,
    left: 253,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_100,
    width: 88,
    height: 23,
  },
  arrowDropRight: {
    left: 320,
  },
  selanjutnya1: {
    fontSize: FontSize.size_xs,
    width: 71,
    height: 13,
    color: Color.colorWhite,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  selanjutnya: {
    left: 265,
    top: 720,
    position: "absolute",
  },
  arrowDropLeft: {
    left: 45,
  },
  dataDiri: {
    top: 189,
    left: 250,
    color: Color.colorGray_100,
    width: 91,
  },
  rectangleIcon: {
    top: 528,
  },
  masukkanNamaAkun: {
    top: 534,
    width: 213,
    left: 53,
    fontSize: FontSize.size_2xs,
  },
  iphone131412Child1: {
    top: 236,
  },
  iphone131412Child2: {
    top: 280,
  },
  iphone131412Child3: {
    top: 324,
  },
  iphone131412Child4: {
    top: 368,
  },
  iphone131412Child5: {
    left: 56,
  },
  ellipseIcon: {
    left: 62,
    height: 15,
    width: 14,
    top: 455,
  },
  namaKamuSesuai: {
    top: 242,
    width: 152,
    left: 53,
    fontSize: FontSize.size_2xs,
  },
  masukkanNoPonsel: {
    top: 286,
    width: 208,
    left: 53,
    fontSize: FontSize.size_2xs,
  },
  pekerjaanKamuSaat: {
    top: 331,
    width: 158,
    left: 53,
    fontSize: FontSize.size_2xs,
  },
  namaSekolahtempatKerja: {
    top: 375,
    width: 159,
    left: 53,
    fontSize: FontSize.size_2xs,
  },
  galangDanaAkan: {
    top: 566,
    left: 49,
    fontSize: FontSize.size_5xs,
    width: 295,
    height: 16,
    color: Color.colorBlack,
    position: "absolute",
  },
  akunMediaSosial: {
    top: 423,
    width: 141,
    fontSize: FontSize.size_2xs,
    left: 46,
  },
  facebook: {
    color: Color.colorGray_900,
    width: 98,
    left: 86,
  },
  iphone131412Child6: {
    left: 205,
  },
  instagram: {
    top: 457,
    height: 12,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
    color: Color.colorBlack,
  },
  iphone131412Child7: {
    left: 56,
  },
  iphone131412Child8: {
    top: 492,
    left: 62,
    height: 15,
    width: 14,
  },
  twitter: {
    width: 70,
    top: 493,
    left: 86,
  },
  iphone131412Child9: {
    left: 205,
  },
  iphone131412Child10: {
    left: 211,
    top: 493,
    height: 15,
    width: 14,
    borderRadius: Border.br_8xs,
  },
  linkedln: {
    top: 495,
    width: 72,
    left: 235,
  },
  iphone131412Child11: {
    left: 212,
    top: 455,
    height: 15,
    width: 14,
    borderRadius: Border.br_8xs,
  },
  rectangleView: {
    top: 780,
    left: -16,
    borderRadius: Border.br_41xl,
    backgroundColor: Color.colorWhite,
    width: 426,
    height: 101,
    position: "absolute",
  },
  icon1: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "8.97%",
    right: "82.56%",
    width: "8.46%",
  },
  image3Icon: {
    top: 798,
    left: 122,
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
  iphone131412: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone131412;
