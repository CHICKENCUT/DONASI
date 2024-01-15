import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13145 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13145}>
      <View style={styles.iphone13145Child} />
      <View style={styles.iphone13145Item} />
      <Pressable
        style={[styles.image18, styles.vectorPosition1]}
        onPress={() => navigation.navigate("IPhone131412")}
      >
        <Image
          style={styles.iconLayout2}
          contentFit="cover"
          source={require("../assets/image-181.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vector, styles.vectorPosition1]}
        onPress={() => navigation.navigate("IPhone131418")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vector1, styles.vectorPosition]}
        onPress={() => navigation.navigate("IPhone13144")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vector2, styles.vectorPosition]}
        onPress={() => navigation.navigate("IPhone131417")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <View
        style={[styles.iphone13145Inner, styles.iphone13145ChildShadowBox]}
      />
      <Pressable
        style={[styles.kitabisa, styles.jangkauPosition]}
        onPress={() => navigation.navigate("IPhone13146")}
      >
        <Text style={[styles.kitabisa1, styles.jangkauTypo]}>Kitabisa</Text>
      </Pressable>
      <Pressable
        style={styles.image3}
        onPress={() => navigation.navigate("IPhone13146")}
      >
        <Image
          style={[styles.icon4, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/image-32.png")}
        />
      </Pressable>
      <View style={[styles.rectangleView, styles.iphone13145ChildShadowBox]} />
      <Text style={[styles.ayobantu, styles.jangkauTypo]}>ayobantu</Text>
      <Text style={[styles.yayasanAyoBantu, styles.yayasanAyoBantuTypo]}>
        YAYASAN AYO BANTU PEDULI INDONESIA
      </Text>
      <Pressable
        style={[styles.ptKitaBisaContainer, styles.jangkauPosition]}
        onPress={() => navigation.navigate("IPhone13146")}
      >
        <Text style={styles.yayasanAyoBantuTypo}>PT. KITA BISA INDONESIA</Text>
      </Pressable>
      <View
        style={[styles.iphone13145Child1, styles.iphone13145ChildShadowBox]}
      />
      <Text style={[styles.ptAskaraAsasta, styles.yayasanTypo]}>
        PT. ASKARA ASASTA INDONESIA
      </Text>
      <Text style={[styles.wecareid, styles.jangkauTypo]}>WeCare.id</Text>
      <Text style={[styles.wecareid, styles.jangkauTypo]}>WeCare.id</Text>
      <Image
        style={[styles.image5Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
      <Image
        style={[styles.image6Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View
        style={[styles.iphone13145Child2, styles.iphone13145ChildShadowBox]}
      />
      <Text style={[styles.ptAtapkitaKarya, styles.yayasanTypo]}>
        PT. ATAPKITA KARYA INDONESIA
      </Text>
      <Text style={[styles.atapkita, styles.jangkauTypo]}>Atapkita</Text>
      <View
        style={[styles.iphone13145Child3, styles.iphone13145ChildShadowBox]}
      />
      <Text style={[styles.yayasanBenihbaikIndonesia, styles.yayasanTypo]}>
        YAYASAN BENIHBAIK INDONESIA
      </Text>
      <Text style={[styles.benihbaik, styles.jangkauTypo]}>Benihbaik</Text>
      <View
        style={[styles.iphone13145Child4, styles.iphone13145ChildShadowBox]}
      />
      <Text style={[styles.rumahBerkat, styles.jangkauTypo]}>Rumah Berkat</Text>
      <Text style={[styles.ptRakhasaArtha, styles.yayasanTypo]}>
        PT. RAKHASA ARTHA WISESA
      </Text>
      <Image
        style={[styles.image10Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-10.png")}
      />
      <Image
        style={[styles.image11Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <Image
        style={[styles.image12Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-12.png")}
      />
      <View
        style={[styles.iphone13145Child5, styles.iphone13145ChildShadowBox]}
      />
      <Text style={[styles.yayasanBersihTransparan, styles.yayasanTypo]}>
        YAYASAN BERSIH TRANSPARAN PROFESIONAL
      </Text>
      <Text style={[styles.jangkau, styles.jangkauTypo]}>Jangkau</Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector-93.png")}
      />
      <Image
        style={[styles.image15Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-15.png")}
      />
      <Pressable
        style={styles.expandLeft}
        onPress={() => navigation.navigate("IPhone13144")}
      >
        <Image
          style={styles.iconLayout2}
          contentFit="cover"
          source={require("../assets/expand-left.png")}
        />
      </Pressable>
      <Text style={[styles.kesehatan, styles.jangkauTypo]}>KESEHATAN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorPosition1: {
    top: 799,
    position: "absolute",
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  vectorPosition: {
    width: "7.69%",
    top: "94.67%",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iphone13145ChildShadowBox: {
    height: 65,
    width: 330,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorSilver_200,
    borderRadius: Border.br_3xs,
    left: 30,
    position: "absolute",
  },
  jangkauPosition: {
    left: 106,
    position: "absolute",
  },
  jangkauTypo: {
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  yayasanAyoBantuTypo: {
    width: 220,
    color: Color.colorGray_300,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  yayasanTypo: {
    color: Color.colorGray_300,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    left: 106,
    position: "absolute",
  },
  iconLayout: {
    width: 48,
    left: 44,
    height: 48,
    position: "absolute",
  },
  iphone13145Child: {
    top: 0,
    left: -20,
    backgroundColor: Color.colorGray_100,
    width: 430,
    height: 129,
    position: "absolute",
  },
  iphone13145Item: {
    top: 780,
    left: -16,
    borderRadius: Border.br_41xl,
    backgroundColor: Color.colorWhite,
    width: 426,
    height: 101,
    position: "absolute",
  },
  image18: {
    left: 129,
    width: 35,
    height: 37,
  },
  icon1: {
    marginLeft: 137,
  },
  vector: {
    left: "50%",
    width: 30,
    height: 32,
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  vector1: {
    left: "7.69%",
    right: "84.62%",
    bottom: "1.78%",
    height: "3.55%",
  },
  vector2: {
    left: "59.74%",
    right: "32.56%",
    bottom: "1.42%",
    height: "3.91%",
  },
  iphone13145Inner: {
    top: 156,
  },
  kitabisa1: {
    color: Color.colorBlack,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  kitabisa: {
    top: 172,
  },
  icon4: {
    borderRadius: Border.br_8xs,
  },
  image3: {
    left: 41,
    top: 164,
    width: 55,
    height: 48,
    position: "absolute",
  },
  rectangleView: {
    top: 240,
  },
  ayobantu: {
    top: 255,
    color: Color.colorBlack,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    left: 106,
    position: "absolute",
  },
  yayasanAyoBantu: {
    top: 278,
    left: 106,
    position: "absolute",
  },
  ptKitaBisaContainer: {
    top: 195,
  },
  iphone13145Child1: {
    top: 324,
  },
  ptAskaraAsasta: {
    top: 363,
  },
  wecareid: {
    top: 340,
    color: Color.colorBlack,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    left: 106,
    position: "absolute",
  },
  image5Icon: {
    top: 332,
    borderRadius: Border.br_8xs,
  },
  image6Icon: {
    top: 248,
    borderRadius: Border.br_8xs,
  },
  iphone13145Child2: {
    top: 408,
  },
  ptAtapkitaKarya: {
    top: 448,
  },
  atapkita: {
    top: 425,
    color: Color.colorBlack,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    left: 106,
    position: "absolute",
  },
  iphone13145Child3: {
    top: 492,
  },
  yayasanBenihbaikIndonesia: {
    top: 532,
  },
  benihbaik: {
    top: 509,
    color: Color.colorBlack,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    left: 106,
    position: "absolute",
  },
  iphone13145Child4: {
    top: 576,
  },
  rumahBerkat: {
    top: 593,
    color: Color.colorBlack,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    left: 106,
    position: "absolute",
  },
  ptRakhasaArtha: {
    top: 615,
  },
  image10Icon: {
    top: 416,
  },
  image11Icon: {
    top: 501,
    borderRadius: Border.br_8xs,
  },
  image12Icon: {
    top: 585,
    borderRadius: Border.br_8xs,
  },
  iphone13145Child5: {
    top: 660,
  },
  yayasanBersihTransparan: {
    top: 700,
  },
  jangkau: {
    top: 677,
    color: Color.colorBlack,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    left: 106,
    position: "absolute",
  },
  vectorIcon: {
    height: "0.71%",
    width: "3.08%",
    top: "88.51%",
    right: "49.49%",
    bottom: "10.78%",
    left: "47.44%",
    position: "absolute",
  },
  image15Icon: {
    top: 667,
    borderRadius: Border.br_8xs,
  },
  expandLeft: {
    left: 13,
    top: 84,
    width: 45,
    height: 45,
    position: "absolute",
  },
  kesehatan: {
    top: 90,
    left: 120,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  iphone13145: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13145;
