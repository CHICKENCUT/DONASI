import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13148 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13148}>
      <View
        style={[styles.iphone13148Child, styles.iphone13148ChildPosition2]}
      />
      <Image
        style={[styles.iphone13148Item, styles.iphone13148ChildPosition2]}
        contentFit="cover"
        source={require("../assets/vector-92.png")}
      />
      <Text style={styles.selamatkanBalitaSakit}>
        Selamatkan Balita Sakit Kritis Butuhkan Operasi
      </Text>
      <View style={[styles.iphone13148Inner, styles.iphone13148Position]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View
        style={[styles.iphone13148Child1, styles.iphone13148Child1ShadowBox]}
      />
      <Text style={[styles.donasikan, styles.donasikanLayout]}>DONASIKAN</Text>
      <Image
        style={styles.image16Icon}
        contentFit="cover"
        source={require("../assets/image-161.png")}
      />
      <View
        style={[styles.iphone13148Child2, styles.iphone13148ChildLayout2]}
      />
      <View style={[styles.iphone13148Child3, styles.image24IconPosition]} />
      <Text style={styles.selamatkanBalitaSakit1}>
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
      <View style={[styles.lineView, styles.lineViewBorder]} />
      <Image
        style={[styles.ionpeopleSharpIcon, styles.iphone13148ChildPosition2]}
        contentFit="cover"
        source={require("../assets/ionpeoplesharp.png")}
      />
      <Image
        style={[styles.image23Icon, styles.iphone13148Position]}
        contentFit="cover"
        source={require("../assets/image-23.png")}
      />
      <Image
        style={[styles.image24Icon, styles.image24IconPosition]}
        contentFit="cover"
        source={require("../assets/image-24.png")}
      />
      <Text style={[styles.hariLagi, styles.hariFlexBox]}>3 Hari Lagi</Text>
      <View
        style={[styles.iphone13148Child4, styles.iphone13148ChildPosition1]}
      />
      <Text style={styles.selamatkanBalitaSakit2}>
        Selamatkan Balita Sakit Kritis Butuhkan Operasi
      </Text>
      <Text style={[styles.donatur1, styles.donatur1Typo]}>413 Donatur</Text>
      <Text style={[styles.targetRp2000000001, styles.donatur1Typo]}>
        <Text style={styles.terkumpul}>{`Target `}</Text>
        <Text style={styles.rp180426790}>Rp.200.000.000</Text>
      </Text>
      <Text style={[styles.rincianPenggunaanDana1, styles.hariLagi1Typo]}>
        Rincian Penggunaan Dana
      </Text>
      <Text style={[styles.hariLagi1, styles.hariLagi1Typo]}>3 Hari Lagi</Text>
      <View
        style={[styles.iphone13148Child5, styles.iphone13148ChildPosition1]}
      />
      <View
        style={[styles.iphone13148Child6, styles.iphone13148ChildLayout3]}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.iphone13148Child1ShadowBox]}
        onPress={() => navigation.navigate("IPhone13149")}
      />
      <Pressable
        style={styles.lanjutkanPembayaran}
        onPress={() => navigation.navigate("IPhone13149")}
      >
        <Text
          style={[styles.lanjutkanPembayaran1, styles.pilihNominalDonasiTypo]}
        >
          LANJUTKAN PEMBAYARAN
        </Text>
      </Pressable>
      <Image
        style={[styles.rectangleIcon, styles.iphone13148ChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-4168.png")}
      />
      <Text style={styles.rp150000}>Rp. 150.000</Text>
      <Image
        style={[styles.iphone13148Child7, styles.iphone13148ChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-4168.png")}
      />
      <Image
        style={[styles.iphone13148Child8, styles.iphone13148Child8Position]}
        contentFit="cover"
        source={require("../assets/rectangle-41731.png")}
      />
      <Image
        style={styles.iphone13148Child9}
        contentFit="cover"
        source={require("../assets/rectangle-41751.png")}
      />
      <View
        style={[styles.iphone13148Child10, styles.iphone13148ChildPosition]}
      />
      <View
        style={[styles.iphone13148Child11, styles.iphone13148ChildBorder]}
      />
      <View
        style={[styles.iphone13148Child12, styles.iphone13148ChildBorder]}
      />
      <View
        style={[styles.iphone13148Child13, styles.iphone13148ChildBorder]}
      />
      <Image
        style={[styles.lineIcon, styles.iphone13148ChildPosition]}
        contentFit="cover"
        source={require("../assets/line-10.png")}
      />
      <View
        style={[styles.iphone13148Child14, styles.iphone13148ChildBorder]}
      />
      <Image
        style={[styles.iphone13148Child15, styles.iphone13148ChildPosition]}
        contentFit="cover"
        source={require("../assets/line-10.png")}
      />
      <Image
        style={[styles.expandDownIcon, styles.expandDownIconLayout]}
        contentFit="cover"
        source={require("../assets/expand-down2.png")}
      />
      <Text style={[styles.pilihMetodePembayaran, styles.donasikanLayout]}>
        Pilih Metode Pembayaran
      </Text>
      <Text style={[styles.pilihNominalDonasi, styles.expandDownIconLayout]}>
        PILIH NOMINAL DONASI
      </Text>
      <Text style={[styles.rp50000, styles.rp50000Typo]}>Rp. 50.000</Text>
      <Text style={[styles.rp, styles.rpTypo]}>Rp</Text>
      <Text style={[styles.nominalDonasiLainnya, styles.rpTypo]}>
        Nominal Donasi Lainnya
      </Text>
      <Text
        style={[styles.minimalDonasiSebesar, styles.iphone13148Child8Position]}
      >
        Minimal donasi sebesar Rp500
      </Text>
      <Image
        style={[styles.iphone13148Child16, styles.iphone13148ChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-4168.png")}
      />
      <Text style={[styles.rp100000, styles.rp50000Typo]}>Rp. 100.000</Text>
      <Image
        style={[styles.iphone13148Child17, styles.iphone13148ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4168.png")}
      />
      <Text style={[styles.rp300000, styles.rp300000Typo]}>Rp. 300.000</Text>
      <Image
        style={[styles.iphone13148Child18, styles.iphone13148ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4168.png")}
      />
      <Text style={styles.rp200000}>Rp. 200.000</Text>
      <Image
        style={[styles.iphone13148Child19, styles.iphone13148ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4168.png")}
      />
      <Text style={[styles.rp250000, styles.rp300000Typo]}>Rp. 250.000</Text>
      <View style={styles.iphone13148Child20} />
      <View style={[styles.iphone13148Child21, styles.image18IconLayout]} />
      <Text style={[styles.bankBni, styles.bankTypo1]}>Bank BNI</Text>
      <Text style={[styles.bankBca, styles.bankBcaPosition]}>Bank BCA</Text>
      <Text style={[styles.bankMandiri, styles.bankTypo]}>Bank Mandiri</Text>
      <Text style={[styles.bankSyariahIndonesia, styles.image19IconPosition]}>
        Bank Syariah Indonesia
      </Text>
      <Text style={[styles.bankBri, styles.bankBriPosition]}>Bank BRI</Text>
      <Text style={[styles.seabank, styles.seabankPosition]}>Seabank</Text>
      <Text style={[styles.dana, styles.danaPosition]}>DANA</Text>
      <Image
        style={[styles.image25Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/image-251.png")}
      />
      <Image
        style={[styles.image17Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-17.png")}
      />
      <Image
        style={[styles.image18Icon, styles.image18IconLayout]}
        contentFit="cover"
        source={require("../assets/image-18.png")}
      />
      <Image
        style={[styles.image19Icon, styles.image19IconPosition]}
        contentFit="cover"
        source={require("../assets/image-19.png")}
      />
      <Image
        style={[styles.image20Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-20.png")}
      />
      <Image
        style={[styles.image21Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/image-21.png")}
      />
      <Image
        style={[styles.image22Icon, styles.danaPosition]}
        contentFit="cover"
        source={require("../assets/image-22.png")}
      />
      <View
        style={[styles.iphone13148Child22, styles.iphone13148ChildShadowBox]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone13148ChildPosition2: {
    opacity: 0.5,
    position: "absolute",
  },
  iphone13148Position: {
    width: 356,
    left: 12,
    top: 158,
  },
  rectangleViewLayout: {
    height: 25,
    bottom: 161,
    opacity: 0.5,
  },
  iphone13148Child1ShadowBox: {
    backgroundColor: Color.colorDarkslategray_100,
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
  donasikanLayout: {
    height: 14,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  iphone13148ChildLayout2: {
    height: 7,
    top: 494,
    borderRadius: Border.br_8xs,
  },
  image24IconPosition: {
    left: 25,
    opacity: 0.5,
    position: "absolute",
  },
  donaturTypo: {
    height: 11,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    opacity: 0.5,
    position: "absolute",
  },
  hariLagiTypo: {
    fontSize: FontSize.size_5xs,
    height: 9,
    fontFamily: FontFamily.roboto,
    opacity: 0.5,
    position: "absolute",
  },
  lineViewBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_700,
    borderStyle: "solid",
  },
  hariFlexBox: {
    textAlign: "right",
    color: Color.colorBlack,
  },
  iphone13148ChildPosition1: {
    opacity: 0.4,
    position: "absolute",
  },
  donatur1Typo: {
    height: 10,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  hariLagi1Typo: {
    height: 8,
    opacity: 0.4,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  iphone13148ChildLayout3: {
    width: 390,
    left: 0,
  },
  pilihNominalDonasiTypo: {
    fontFamily: FontFamily.roboto,
    textAlign: "left",
    color: Color.colorWhite,
  },
  iphone13148ChildLayout1: {
    height: 24,
    top: 468,
    width: 98,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  iphone13148Child8Position: {
    left: 31,
    position: "absolute",
  },
  iphone13148ChildPosition: {
    opacity: 0.7,
    left: 26,
    position: "absolute",
  },
  iphone13148ChildBorder: {
    borderColor: Color.colorGray_500,
    opacity: 0.7,
    width: 266,
    left: 26,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  expandDownIconLayout: {
    height: 21,
    position: "absolute",
  },
  rp50000Typo: {
    width: 84,
    top: 474,
    color: Color.colorBlack,
    height: 14,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    position: "absolute",
  },
  rpTypo: {
    height: 12,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    position: "absolute",
  },
  iphone13148ChildLayout: {
    top: 504,
    height: 24,
    width: 98,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  rp300000Typo: {
    width: 89,
    top: 509,
    color: Color.colorBlack,
    height: 14,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    position: "absolute",
  },
  image18IconLayout: {
    height: 5,
    position: "absolute",
  },
  bankTypo1: {
    left: 62,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  bankBcaPosition: {
    top: 684,
    height: 9,
  },
  bankTypo: {
    width: 87,
    left: 62,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  image19IconPosition: {
    top: 715,
    height: 10,
    position: "absolute",
  },
  bankBriPosition: {
    top: 731,
    height: 10,
  },
  seabankPosition: {
    top: 748,
    height: 10,
  },
  danaPosition: {
    top: 764,
    height: 10,
    position: "absolute",
  },
  iconPosition1: {
    width: 10,
    left: 36,
    position: "absolute",
  },
  iconPosition: {
    width: 11,
    left: 36,
    position: "absolute",
  },
  iphone13148ChildShadowBox: {
    borderRadius: Border.br_mini,
    left: "50%",
    top: "50%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  iphone13148Child: {
    top: -2,
    backgroundColor: Color.colorGray_100,
    height: 137,
    width: 390,
    left: 0,
  },
  iphone13148Item: {
    height: "2.73%",
    width: "2.56%",
    top: "11.37%",
    right: "92.31%",
    bottom: "85.9%",
    left: "5.13%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  selamatkanBalitaSakit: {
    top: 87,
    left: 57,
    width: 333,
    height: 18,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    opacity: 0.5,
    position: "absolute",
  },
  iphone13148Inner: {
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
    backgroundColor: Color.colorWhite,
    width: 356,
    left: 12,
    top: 158,
    opacity: 0.5,
    position: "absolute",
  },
  rectangleView: {
    left: 327,
    backgroundColor: Color.colorDarkslategray_300,
    width: 29,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    height: 25,
    bottom: 161,
    position: "absolute",
  },
  iphone13148Child1: {
    left: 227,
    width: 90,
    height: 25,
    bottom: 161,
    opacity: 0.5,
  },
  donasikan: {
    top: 664,
    textAlign: "center",
    width: 72,
    fontSize: FontSize.size_sm,
    height: 14,
    left: 235,
    color: Color.colorWhite,
    fontWeight: "700",
    opacity: 0.5,
  },
  image16Icon: {
    left: 335,
    width: 13,
    height: 15,
    top: 663,
    opacity: 0.5,
    position: "absolute",
  },
  iphone13148Child2: {
    left: 167,
    backgroundColor: Color.colorLightgray,
    width: 183,
    opacity: 0.5,
    position: "absolute",
  },
  iphone13148Child3: {
    backgroundColor: Color.colorDarkslategray_200,
    width: 295,
    height: 7,
    top: 494,
    borderRadius: Border.br_8xs,
  },
  selamatkanBalitaSakit1: {
    top: 421,
    width: 343,
    color: Color.colorBlack,
    left: 25,
    height: 18,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    opacity: 0.5,
    position: "absolute",
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
    height: 9,
    color: Color.colorGray_600,
    textAlign: "left",
    fontWeight: "700",
  },
  lineView: {
    top: 528,
    left: 250,
    width: 101,
    opacity: 0.5,
    position: "absolute",
  },
  ionpeopleSharpIcon: {
    top: 545,
    left: 29,
    height: 20,
    width: 18,
  },
  image23Icon: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    height: 191,
    width: 356,
    left: 12,
    top: 158,
    opacity: 0.5,
    position: "absolute",
  },
  image24Icon: {
    top: 363,
    width: 134,
    height: 39,
  },
  hariLagi: {
    top: 398,
    left: 53,
    width: 54,
    height: 9,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.roboto,
    opacity: 0.5,
    position: "absolute",
  },
  iphone13148Child4: {
    height: 488,
    width: 356,
    left: 12,
    top: 158,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  selamatkanBalitaSakit2: {
    top: 391,
    height: 16,
    width: 343,
    color: Color.colorBlack,
    left: 25,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  donatur1: {
    top: 487,
    left: 56,
    width: 53,
    opacity: 0.4,
    position: "absolute",
    color: Color.colorBlack,
  },
  targetRp2000000001: {
    top: 451,
    left: 260,
    width: 96,
    opacity: 0.4,
    position: "absolute",
  },
  rincianPenggunaanDana1: {
    top: 488,
    width: 92,
    left: 262,
    color: Color.colorGray_600,
    textAlign: "left",
    fontWeight: "700",
  },
  hariLagi1: {
    top: 384,
    left: 77,
    width: 35,
    textAlign: "right",
    color: Color.colorBlack,
  },
  iphone13148Child5: {
    top: 497,
    left: 262,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_700,
    borderStyle: "solid",
    width: 95,
  },
  iphone13148Child6: {
    top: 372,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.colorSilver_100,
    height: 472,
    position: "absolute",
  },
  rectanglePressable: {
    bottom: 32,
    left: 220,
    width: 149,
    height: 22,
  },
  lanjutkanPembayaran1: {
    fontSize: FontSize.size_2xs,
    width: 147,
    height: 13,
    textAlign: "left",
    color: Color.colorWhite,
    fontWeight: "700",
  },
  lanjutkanPembayaran: {
    top: 795,
    left: 235,
    position: "absolute",
  },
  rectangleIcon: {
    left: 266,
  },
  rp150000: {
    width: 85,
    left: 279,
    top: 474,
    color: Color.colorBlack,
    height: 14,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    position: "absolute",
  },
  iphone13148Child7: {
    left: 26,
  },
  iphone13148Child8: {
    top: 577,
    width: 98,
    left: 31,
    height: 16,
    borderRadius: Border.br_8xs,
  },
  iphone13148Child9: {
    top: 641,
    height: 136,
    width: 265,
    left: 26,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  iphone13148Child10: {
    borderColor: Color.colorBlack,
    width: 266,
    opacity: 0.7,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    top: 663,
  },
  iphone13148Child11: {
    top: 680,
  },
  iphone13148Child12: {
    top: 697,
  },
  iphone13148Child13: {
    top: 713,
  },
  lineIcon: {
    top: 728,
    width: 265,
    maxHeight: "100%",
  },
  iphone13148Child14: {
    top: 746,
  },
  iphone13148Child15: {
    top: 762,
    width: 265,
    maxHeight: "100%",
  },
  expandDownIcon: {
    top: 642,
    left: 258,
    width: 21,
  },
  pilihMetodePembayaran: {
    top: 645,
    fontSize: FontSize.size_smi,
    width: 191,
    left: 36,
    color: Color.colorBlack,
    textAlign: "left",
  },
  pilihNominalDonasi: {
    top: 416,
    left: 81,
    fontSize: FontSize.size_xl,
    width: 286,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.roboto,
  },
  rp50000: {
    left: 40,
    width: 84,
  },
  rp: {
    top: 579,
    left: 37,
    width: 38,
    color: Color.colorBlack,
  },
  nominalDonasiLainnya: {
    top: 558,
    left: 30,
    width: 151,
    color: Color.colorWhite,
  },
  minimalDonasiSebesar: {
    top: 600,
    width: 157,
    height: 10,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    color: Color.colorWhite,
  },
  iphone13148Child16: {
    left: 146,
  },
  rp100000: {
    left: 160,
  },
  iphone13148Child17: {
    left: 266,
  },
  rp300000: {
    left: 279,
  },
  iphone13148Child18: {
    left: 26,
  },
  rp200000: {
    width: 94,
    top: 509,
    left: 40,
    color: Color.colorBlack,
    height: 14,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    position: "absolute",
  },
  iphone13148Child19: {
    left: 146,
  },
  rp250000: {
    left: 160,
  },
  iphone13148Child20: {
    top: 552,
    backgroundColor: Color.colorGainsboro_200,
    borderColor: Color.colorWhite,
    borderWidth: 1,
    width: 155,
    height: 65,
    left: 26,
    borderStyle: "solid",
    position: "absolute",
  },
  iphone13148Child21: {
    marginTop: -38,
    marginLeft: -20,
    backgroundColor: Color.colorGray_800,
    width: 39,
    borderRadius: Border.br_mini,
    left: "50%",
    top: "50%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  bankBni: {
    width: 69,
    top: 667,
    height: 9,
    position: "absolute",
  },
  bankBca: {
    width: 82,
    left: 62,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  bankMandiri: {
    top: 700,
    height: 9,
  },
  bankSyariahIndonesia: {
    width: 119,
    left: 62,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  bankBri: {
    width: 87,
    left: 62,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  seabank: {
    width: 78,
    left: 62,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  dana: {
    width: 74,
    left: 62,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  image25Icon: {
    top: 667,
    height: 9,
  },
  image17Icon: {
    top: 684,
    height: 9,
  },
  image18Icon: {
    top: 701,
    left: 36,
    width: 18,
  },
  image19Icon: {
    width: 17,
    left: 36,
  },
  image20Icon: {
    top: 731,
    height: 10,
  },
  image21Icon: {
    top: 748,
    height: 10,
  },
  image22Icon: {
    width: 12,
    left: 36,
  },
  iphone13148Child22: {
    marginTop: 283,
    marginLeft: 93,
    backgroundColor: "#757575",
    height: 6,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    width: 38,
    position: "absolute",
  },
  iphone13148: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone13148;
