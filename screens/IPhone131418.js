import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const IPhone131418 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone131418}>
      <View style={styles.iphone131418Child} />
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
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
        style={[styles.vector1, styles.vectorPosition]}
        onPress={() => navigation.navigate("IPhone131417")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <View style={styles.iphone131418Item} />
      <Text style={[styles.akun, styles.akunTypo]}>AKUN</Text>
      <Image
        style={styles.iphone131418Inner}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.editProfile, styles.akunTypo]}>Edit Profile</Text>
      <View
        style={[styles.iphone131418Child1, styles.lengkapiProfilPosition]}
      />
      <View
        style={[styles.iphone131418Child2, styles.iphone131418ChildLayout1]}
      />
      <View style={[styles.iphone131418Child3, styles.nurulFadhilaLayout]} />
      <Text style={[styles.lengkapiProfil, styles.textLayout]}>
        Lengkapi Profil
      </Text>
      <Text style={[styles.text, styles.textTypo]}>57%</Text>
      <Text style={[styles.nurulFadhila, styles.textTypo]}>Nurul Fadhila</Text>
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={styles.iphone131418Child4}
        contentFit="cover"
        source={require("../assets/line-4.png")}
      />
      <Text style={[styles.pesan, styles.pesanTypo]}>Pesan</Text>
      <Text style={[styles.kontak, styles.faqTypo]}>Kontak</Text>
      <Text style={[styles.transaksiSaya, styles.pesanTypo]}>
        Transaksi Saya
      </Text>
      <Image
        style={styles.unionIcon}
        contentFit="cover"
        source={require("../assets/union.png")}
      />
      <Image
        style={[styles.iphone131418Child5, styles.iphone131418ChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-7.png")}
      />
      <Image
        style={[styles.iphone131418Child6, styles.iphone131418ChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-9.png")}
      />
      <Image
        style={styles.iphone131418Child7}
        contentFit="cover"
        source={require("../assets/vector-189.png")}
      />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Image
        style={[styles.iphone131418Child8, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-2.png")}
      />
      <View style={[styles.iphone131418Child9, styles.lineViewLayout]} />
      <Image
        style={[styles.ellipseIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-94.png")}
      />
      <Image
        style={styles.iphone131418Child10}
        contentFit="cover"
        source={require("../assets/ellipse-95.png")}
      />
      <Image
        style={[styles.iphone131418Child11, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector-190.png")}
      />
      <Image
        style={styles.subtractIcon}
        contentFit="cover"
        source={require("../assets/subtract.png")}
      />
      <Text style={[styles.faq, styles.faqTypo]}>FAQ</Text>
      <Text style={[styles.keluar, styles.faqTypo]}>Keluar</Text>
      <Text style={[styles.pengaturan, styles.pesanTypo]}>Pengaturan</Text>
      <Image
        style={styles.majesticonslogoutLine}
        contentFit="cover"
        source={require("../assets/majesticonslogoutline.png")}
      />
      <Image
        style={styles.iconParkOutlinetransaction}
        contentFit="cover"
        source={require("../assets/iconparkoutlinetransactionorder.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorPosition: {
    height: "3.91%",
    top: "94.67%",
    bottom: "1.42%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  akunTypo: {
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  lengkapiProfilPosition: {
    left: 145,
    position: "absolute",
  },
  iphone131418ChildLayout1: {
    height: 4,
    borderRadius: Border.br_8xs,
    top: 243,
    position: "absolute",
  },
  nurulFadhilaLayout: {
    width: 111,
    left: 145,
  },
  textLayout: {
    height: 11,
    color: Color.colorCornflowerblue,
    fontSize: FontSize.size_3xs,
  },
  textTypo: {
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  lineIconLayout: {
    width: 331,
    left: 30,
    maxHeight: "100%",
    position: "absolute",
  },
  pesanTypo: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_xl,
    left: 76,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  faqTypo: {
    left: 77,
    color: Color.colorGray_200,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  iphone131418ChildLayout: {
    borderRadius: Border.br_11xs,
    height: "0.24%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lineViewLayout: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_1300,
    left: 31,
    width: 331,
    borderStyle: "solid",
    position: "absolute",
  },
  iphone131418Child: {
    top: 780,
    left: -16,
    borderRadius: Border.br_41xl,
    backgroundColor: Color.colorWhite,
    width: 426,
    height: 101,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.55%",
    top: "95.02%",
    right: "11.03%",
    left: "81.28%",
    bottom: "1.42%",
    maxWidth: "100%",
    width: "7.69%",
    position: "absolute",
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
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
  vector1: {
    left: "59.74%",
    right: "32.56%",
    width: "7.69%",
    height: "3.91%",
    top: "94.67%",
  },
  iphone131418Item: {
    top: -2,
    left: 0,
    width: 390,
    height: 137,
    backgroundColor: Color.colorGray_100,
    position: "absolute",
  },
  akun: {
    top: 91,
    left: 163,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    width: 80,
    height: 26,
    position: "absolute",
  },
  iphone131418Inner: {
    left: 43,
    width: 81,
    height: 91,
    top: 201,
    position: "absolute",
  },
  vectorIcon1: {
    height: "5.92%",
    width: "11.54%",
    top: "26.07%",
    right: "72.82%",
    bottom: "68.01%",
    left: "15.64%",
    position: "absolute",
  },
  rectangleView: {
    top: 181,
    left: 23,
    borderRadius: 25,
    backgroundColor: Color.colorSilver_200,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 0.5,
    width: 345,
    height: 130,
    borderStyle: "solid",
    position: "absolute",
  },
  editProfile: {
    top: 274,
    left: 154,
    fontSize: FontSize.size_2xs,
    width: 65,
    height: 13,
    color: Color.colorBlack,
    position: "absolute",
  },
  iphone131418Child1: {
    bottom: 552,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_400,
    borderColor: Color.colorGray_1200,
    borderWidth: 1,
    width: 70,
    height: 25,
    borderStyle: "solid",
  },
  iphone131418Child2: {
    left: 219,
    backgroundColor: Color.colorLightgray,
    width: 114,
  },
  iphone131418Child3: {
    height: 4,
    borderRadius: Border.br_8xs,
    top: 243,
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  lengkapiProfil: {
    top: 226,
    width: 96,
    left: 145,
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  text: {
    top: 240,
    left: 342,
    width: 26,
    height: 11,
    color: Color.colorCornflowerblue,
    fontSize: FontSize.size_3xs,
  },
  nurulFadhila: {
    fontSize: FontSize.size_mini,
    height: 18,
    width: 111,
    left: 145,
    color: Color.colorBlack,
    top: 201,
  },
  lineIcon: {
    top: 393,
  },
  iphone131418Child4: {
    top: 435,
    width: 330,
    left: 31,
    maxHeight: "100%",
    position: "absolute",
  },
  pesan: {
    top: 405,
    width: 100,
    height: 24,
  },
  kontak: {
    top: 445,
    width: 93,
    height: 25,
  },
  transaksiSaya: {
    top: 363,
    width: 130,
    height: 25,
  },
  unionIcon: {
    borderRadius: 1,
    height: 22,
    width: 18,
  },
  iphone131418Child5: {
    width: "2.31%",
    top: "48.34%",
    right: "87.18%",
    bottom: "51.42%",
    left: "10.51%",
  },
  iphone131418Child6: {
    width: "1.28%",
    top: "49.05%",
    right: "87.44%",
    bottom: "50.71%",
    left: "11.28%",
  },
  iphone131418Child7: {
    top: 448,
    left: 35,
    width: 19,
    height: 21,
    position: "absolute",
  },
  lineView: {
    top: 480,
  },
  iphone131418Child8: {
    top: 515,
  },
  iphone131418Child9: {
    top: 557,
  },
  ellipseIcon: {
    height: "2.84%",
    width: "5.13%",
    top: "62.2%",
    right: "86.15%",
    bottom: "34.95%",
    left: "8.72%",
    position: "absolute",
  },
  iphone131418Child10: {
    width: "0.26%",
    top: "64.34%",
    right: "88.72%",
    bottom: "35.43%",
    left: "11.03%",
    height: "0.24%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iphone131418Child11: {
    height: "1.3%",
    width: "1.79%",
    top: "62.8%",
    right: "87.95%",
    bottom: "35.9%",
    left: "10.26%",
    borderRadius: 28,
    position: "absolute",
  },
  subtractIcon: {
    height: 20,
    width: 18,
  },
  faq: {
    top: 526,
    width: 40,
    height: 24,
  },
  keluar: {
    top: 564,
    width: 92,
    height: 24,
  },
  pengaturan: {
    top: 487,
    width: 120,
    height: 22,
  },
  majesticonslogoutLine: {
    top: 565,
    width: 23,
    height: 23,
    left: 30,
    position: "absolute",
    overflow: "hidden",
  },
  iconParkOutlinetransaction: {
    top: 351,
    left: 19,
    width: 44,
    height: 49,
    position: "absolute",
    overflow: "hidden",
  },
  iphone131418: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone131418;
