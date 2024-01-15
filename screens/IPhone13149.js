import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const IPhone13149 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13149}>
      <View
        style={[styles.iphone13149Child, styles.iphone13149ChildPosition1]}
      />
      <Image
        style={styles.iphone13149Item}
        contentFit="cover"
        source={require("../assets/vector-92.png")}
      />
      <Text
        style={[styles.selamatkanBalitaSakit, styles.bniVirtualAccountTypo]}
      >
        Selamatkan Balita Sakit Kritis Butuhkan Operasi
      </Text>
      <View style={[styles.iphone13149Inner, styles.iphone13149Position]} />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View
        style={[styles.iphone13149Child1, styles.iphone13149Child1ShadowBox]}
      />
      <Text style={styles.donasikan}>DONASIKAN</Text>
      <Image
        style={styles.image16Icon}
        contentFit="cover"
        source={require("../assets/image-161.png")}
      />
      <View
        style={[styles.iphone13149Child2, styles.iphone13149ChildLayout2]}
      />
      <View style={[styles.iphone13149Child3, styles.image24IconPosition]} />
      <Text style={[styles.selamatkanBalitaSakit1, styles.selamatkanTypo]}>
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
        style={[styles.ionpeopleSharpIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/ionpeoplesharp.png")}
      />
      <Image
        style={[styles.image23Icon, styles.iphone13149Position]}
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
        style={[styles.iphone13149Child4, styles.iphone13149ChildPosition]}
      />
      <Text style={[styles.selamatkanBalitaSakit2, styles.selamatkanTypo]}>
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
        style={[styles.iphone13149Child5, styles.iphone13149ChildPosition]}
      />
      <View
        style={[styles.iphone13149Child6, styles.iphone13149ChildPosition1]}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.iphone13149Child1ShadowBox]}
        onPress={() => navigation.navigate("IPhone131410")}
      />
      <Pressable
        style={styles.lanjutkanPembayaran}
        onPress={() => navigation.navigate("IPhone131410")}
      >
        <Text
          style={[styles.lanjutkanPembayaran1, styles.sembunyikanNamaSayaTypo]}
        >
          LANJUTKAN PEMBAYARAN
        </Text>
      </Pressable>
      <Image
        style={[styles.rectangleIcon, styles.iphone13149ChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-4168.png")}
      />
      <Text style={styles.rp150000}>Rp. 150.000</Text>
      <Image
        style={[styles.iphone13149Child7, styles.iphone13149ChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-4168.png")}
      />
      <Text style={[styles.pilihNominalDonasi, styles.bniVirtualAccountTypo]}>
        PILIH NOMINAL DONASI
      </Text>
      <Text style={[styles.rp50000, styles.rp50000Typo]}>Rp. 50.000</Text>
      <Image
        style={[styles.iphone13149Child8, styles.iphone13149ChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-4168.png")}
      />
      <Text style={[styles.rp100000, styles.rp50000Typo]}>Rp. 100.000</Text>
      <Image
        style={[styles.iphone13149Child9, styles.iphone13149ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4168.png")}
      />
      <Text style={[styles.rp300000, styles.rp300000Typo]}>Rp. 300.000</Text>
      <Image
        style={[styles.iphone13149Child10, styles.iphone13149ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4168.png")}
      />
      <Text style={styles.rp200000}>Rp. 200.000</Text>
      <Image
        style={[styles.iphone13149Child11, styles.iphone13149ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4168.png")}
      />
      <Text style={[styles.rp250000, styles.rp300000Typo]}>Rp. 250.000</Text>
      <View
        style={[styles.iphone13149Child12, styles.iphone13149ChildShadowBox]}
      />
      <Text
        style={[styles.sembunyikanNamaSaya, styles.sembunyikanNamaSayaTypo]}
      >
        Sembunyikan nama saya (donasi anonim)
      </Text>
      <View
        style={[styles.iphone13149Child13, styles.iphone13149ChildBorder]}
      />
      <Image
        style={[styles.doneLightIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/done-light.png")}
      />
      <Image
        style={[styles.iphone13149Child14, styles.expandDownIconPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-4175.png")}
      />
      <Image
        style={[styles.expandDownIcon, styles.expandDownIconPosition]}
        contentFit="cover"
        source={require("../assets/expand-down1.png")}
      />
      <Text style={[styles.bniVirtualAccount, styles.image25IconPosition]}>
        BNI Virtual Account
      </Text>
      <Image
        style={[styles.image25Icon, styles.image25IconPosition]}
        contentFit="cover"
        source={require("../assets/image-25.png")}
      />
      <Image
        style={[styles.iphone13149Child15, styles.iphone13149Child15Position]}
        contentFit="cover"
        source={require("../assets/rectangle-4173.png")}
      />
      <Text style={[styles.rp175000, styles.rp175000Typo]}>Rp. 175.000</Text>
      <Text style={[styles.nominalDonasiLainnya, styles.rp175000Typo]}>
        Nominal Donasi Lainnya
      </Text>
      <Text
        style={[styles.minimalDonasiSebesar, styles.iphone13149Child15Position]}
      >
        Minimal donasi sebesar Rp500
      </Text>
      <View
        style={[styles.iphone13149Child16, styles.iphone13149ChildBorder]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone13149ChildPosition1: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  bniVirtualAccountTypo: {
    fontFamily: FontFamily.roboto,
    textAlign: "left",
  },
  iphone13149Position: {
    width: 356,
    left: 12,
    top: 158,
  },
  rectangleViewPosition: {
    bottom: 161,
    height: 25,
    opacity: 0.5,
  },
  iphone13149Child1ShadowBox: {
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
  iphone13149ChildLayout2: {
    height: 7,
    top: 494,
    borderRadius: Border.br_8xs,
  },
  image24IconPosition: {
    left: 25,
    opacity: 0.5,
    position: "absolute",
  },
  selamatkanTypo: {
    width: 343,
    color: Color.colorBlack,
    left: 25,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    fontSize: FontSize.size_base,
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
    height: 9,
    fontSize: FontSize.size_5xs,
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
  iconLayout: {
    width: 18,
    position: "absolute",
  },
  hariFlexBox: {
    textAlign: "right",
    color: Color.colorBlack,
  },
  iphone13149ChildPosition: {
    opacity: 0.4,
    position: "absolute",
  },
  donatur1Typo: {
    height: 10,
    opacity: 0.4,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    position: "absolute",
  },
  hariLagi1Typo: {
    height: 8,
    opacity: 0.4,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  sembunyikanNamaSayaTypo: {
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  iphone13149ChildLayout1: {
    width: 98,
    top: 468,
    height: 24,
    borderRadius: Border.br_8xs,
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
  iphone13149ChildLayout: {
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
  iphone13149ChildShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  iphone13149ChildBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  expandDownIconPosition: {
    top: 644,
    position: "absolute",
  },
  image25IconPosition: {
    top: 650,
    position: "absolute",
  },
  iphone13149Child15Position: {
    left: 32,
    position: "absolute",
  },
  rp175000Typo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    position: "absolute",
  },
  iphone13149Child: {
    top: -2,
    backgroundColor: Color.colorGray_100,
    height: 137,
    opacity: 0.5,
  },
  iphone13149Item: {
    height: "2.73%",
    width: "2.56%",
    top: "11.37%",
    right: "92.31%",
    bottom: "85.9%",
    left: "5.13%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.5,
    position: "absolute",
    overflow: "hidden",
  },
  selamatkanBalitaSakit: {
    top: 87,
    left: 57,
    width: 333,
    height: 18,
    textAlign: "left",
    color: Color.colorWhite,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.roboto,
    opacity: 0.5,
    position: "absolute",
  },
  iphone13149Inner: {
    height: 551,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    opacity: 0.5,
    position: "absolute",
  },
  rectangleView: {
    left: 327,
    backgroundColor: Color.colorDarkslategray_300,
    width: 29,
    height: 25,
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
  iphone13149Child1: {
    left: 227,
    width: 90,
    height: 25,
    bottom: 161,
    opacity: 0.5,
  },
  donasikan: {
    top: 664,
    left: 235,
    textAlign: "center",
    width: 72,
    height: 14,
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    opacity: 0.5,
    position: "absolute",
  },
  image16Icon: {
    top: 663,
    left: 335,
    height: 15,
    width: 13,
    opacity: 0.5,
    position: "absolute",
  },
  iphone13149Child2: {
    left: 167,
    backgroundColor: Color.colorLightgray,
    width: 183,
    opacity: 0.5,
    position: "absolute",
  },
  iphone13149Child3: {
    backgroundColor: Color.colorDarkslategray_200,
    width: 295,
    height: 7,
    top: 494,
    borderRadius: Border.br_8xs,
  },
  selamatkanBalitaSakit1: {
    top: 421,
    height: 18,
    opacity: 0.5,
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
    width: 112,
    left: 27,
    top: 465,
    height: 11,
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
    height: 11,
  },
  rincianPenggunaanDana: {
    top: 518,
    left: 249,
    width: 104,
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
    opacity: 0.5,
  },
  image23Icon: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    height: 191,
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
  iphone13149Child4: {
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
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
  },
  selamatkanBalitaSakit2: {
    top: 391,
    height: 16,
  },
  donatur1: {
    top: 487,
    left: 56,
    width: 53,
    color: Color.colorBlack,
  },
  targetRp2000000001: {
    top: 451,
    left: 260,
    width: 96,
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
  iphone13149Child5: {
    top: 497,
    left: 262,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_700,
    borderStyle: "solid",
    width: 95,
  },
  iphone13149Child6: {
    top: 372,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.colorSilver_100,
    height: 472,
  },
  rectanglePressable: {
    bottom: 42,
    left: 214,
    width: 149,
    height: 22,
  },
  lanjutkanPembayaran1: {
    width: 147,
    height: 13,
  },
  lanjutkanPembayaran: {
    left: 229,
    top: 785,
    position: "absolute",
  },
  rectangleIcon: {
    height: 24,
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
  iphone13149Child7: {
    left: 26,
    height: 24,
  },
  pilihNominalDonasi: {
    top: 416,
    left: 81,
    fontSize: FontSize.size_xl,
    width: 286,
    height: 21,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  rp50000: {
    left: 40,
    width: 84,
  },
  iphone13149Child8: {
    left: 146,
    height: 24,
  },
  rp100000: {
    left: 160,
  },
  iphone13149Child9: {
    left: 266,
  },
  rp300000: {
    left: 279,
  },
  iphone13149Child10: {
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
  iphone13149Child11: {
    left: 146,
  },
  rp250000: {
    left: 160,
  },
  iphone13149Child12: {
    marginTop: -38,
    marginLeft: -20,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGray_800,
    width: 39,
    height: 5,
    position: "absolute",
  },
  sembunyikanNamaSaya: {
    left: 49,
    top: 683,
    position: "absolute",
  },
  iphone13149Child13: {
    borderColor: Color.colorGray_1200,
    left: 28,
    top: 683,
    height: 13,
    width: 13,
    backgroundColor: Color.colorWhite,
  },
  doneLightIcon: {
    top: 681,
    height: 17,
    left: 26,
  },
  iphone13149Child14: {
    width: 292,
    left: 28,
    borderRadius: Border.br_8xs,
    height: 25,
  },
  expandDownIcon: {
    left: 289,
    width: 24,
    height: 24,
  },
  bniVirtualAccount: {
    left: 96,
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  image25Icon: {
    left: 35,
    width: 45,
    height: 15,
  },
  iphone13149Child15: {
    top: 578,
    width: 108,
    borderRadius: Border.br_8xs,
    height: 18,
  },
  rp175000: {
    top: 580,
    left: 39,
    color: Color.colorBlack,
  },
  nominalDonasiLainnya: {
    top: 556,
    left: 31,
    color: Color.colorWhite,
  },
  minimalDonasiSebesar: {
    top: 604,
    fontSize: FontSize.size_3xs,
    left: 32,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  iphone13149Child16: {
    top: 549,
    backgroundColor: Color.colorGainsboro_200,
    borderColor: Color.colorWhite,
    width: 171,
    height: 74,
    left: 27,
  },
  iphone13149: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone13149;
