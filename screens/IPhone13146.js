import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone13146 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13146}>
      <View style={styles.iphone13146Child} />
      <Pressable
        style={[styles.image18, styles.vectorPosition1]}
        onPress={() => navigation.navigate("IPhone131412")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/image-181.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vector, styles.vectorPosition1]}
        onPress={() => navigation.navigate("IPhone131418")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout1]}
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
      <View style={[styles.iphone13146Item, styles.expandLeftPosition]} />
      <Pressable
        style={[styles.expandLeft, styles.expandLeftPosition]}
        onPress={() => navigation.navigate("IPhone13145")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/expand-left.png")}
        />
      </Pressable>
      <Text style={styles.kitabisa}>Kitabisa</Text>
      <View style={[styles.iphone13146Inner, styles.iphone13146Border]} />
      <Image
        style={styles.filterIcon}
        contentFit="cover"
        source={require("../assets/filter.png")}
      />
      <Text style={[styles.kategori, styles.filterTypo]}>KATEGORI</Text>
      <View style={[styles.rectangleView, styles.iphone13146Border]} />
      <View style={[styles.iphone13146Child1, styles.iphone13146Border]} />
      <Text style={[styles.filter, styles.filterTypo]}>FILTER</Text>
      <Text style={[styles.urutkan, styles.urutkanPosition]}>URUTKAN</Text>
      <Image
        style={styles.sortDownLightIcon}
        contentFit="cover"
        source={require("../assets/sort-down-light.png")}
      />
      <Image
        style={styles.filterAltLightIcon}
        contentFit="cover"
        source={require("../assets/filter-alt-light.png")}
      />
      <View
        style={[styles.iphone13146Child2, styles.iphone13146ChildShadowBox]}
      />
      <View
        style={[styles.iphone13146Child3, styles.iphone13146ChildLayout3]}
      />
      <View
        style={[styles.iphone13146Child4, styles.iphone13146ChildLayout3]}
      />
      <Text style={[styles.yogaYatimPiatu, styles.bantuTypo]}>
        Yoga Yatim Piatu Lawan Kelainan Jantung
      </Text>
      <Text style={[styles.terkumpulRp80426790, styles.terkumpulTypo]}>
        <Text style={styles.terkumpul}>Terkumpul</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.rp80426790}>Rp80.426.790</Text>
      </Text>
      <Pressable
        style={[styles.rectanglePressable, styles.iphone13146ChildShadowBox]}
        onPress={() => navigation.navigate("IPhone13147")}
      />
      <Pressable
        style={styles.selamatkanBalitaSakitContainer}
        onPress={() => navigation.navigate("IPhone13147")}
      >
        <Text
          style={[styles.selamatkanBalitaSakitKritis, styles.bantuTypo]}
        >{`Selamatkan Balita Sakit Kritis Butuhkan Operasi                                                                                                                            `}</Text>
      </Pressable>
      <View
        style={[styles.iphone13146Child5, styles.iphone13146ChildPosition1]}
      />
      <View
        style={[styles.iphone13146Child6, styles.iphone13146ChildPosition1]}
      />
      <Pressable
        style={styles.terkumpulRp602975}
        onPress={() => navigation.navigate("IPhone13147")}
      >
        <Text style={[styles.text1, styles.terkumpulTypo]}>
          <Text style={styles.terkumpul}>Terkumpul</Text>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.rp80426790}>Rp602.975</Text>
        </Text>
      </Pressable>
      <Text style={[styles.sisaHari3Container, styles.sisaContainerTypo]}>
        <Text style={styles.sisaHari}>{`Sisa Hari
`}</Text>
        <Text style={styles.text3}>3</Text>
      </Text>
      <Pressable
        style={styles.sisaHari30Container}
        onPress={() => navigation.navigate("IPhone13147")}
      >
        <Text style={[styles.text4, styles.sisaContainerTypo]}>
          <Text style={styles.sisaHari}>{`Sisa Hari
`}</Text>
          <Text style={styles.text3}>30</Text>
        </Text>
      </Pressable>
      <View
        style={[styles.iphone13146Child7, styles.iphone13146ChildShadowBox]}
      />
      <View
        style={[styles.iphone13146Child8, styles.iphone13146ChildPosition]}
      />
      <View
        style={[styles.iphone13146Child9, styles.iphone13146ChildPosition]}
      />
      <Text style={[styles.daruratBantuAnak, styles.bantuTypo]}>
        DARURAT! Bantu Anak Sakit Langka Sembuh!
      </Text>
      <Text style={[styles.terkumpulRp610005954, styles.terkumpulTypo]}>
        <Text style={styles.terkumpul}>Terkumpul</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.rp80426790}>Rp610.005.954</Text>
      </Text>
      <View
        style={[styles.iphone13146Child10, styles.iphone13146ChildShadowBox]}
      />
      <View
        style={[styles.iphone13146Child11, styles.iphone13146ChildLayout1]}
      />
      <View
        style={[styles.iphone13146Child12, styles.urgentAnakSakitPosition]}
      />
      <Text style={[styles.urgentAnakSakit, styles.urgentAnakSakitPosition]}>
        Urgent! Anak Sakit Langka Butuh Bantuan Kita!
      </Text>
      <Text
        style={[styles.terkumpulRp397311105, styles.urgentAnakSakitPosition]}
      >
        <Text style={styles.terkumpul}>Terkumpul</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.rp80426790}>Rp397.311.105</Text>
      </Text>
      <Text style={[styles.sisaHari21Container, styles.sisaContainerTypo]}>
        <Text style={styles.sisaHari}>{`Sisa Hari
`}</Text>
        <Text style={styles.text3}>21</Text>
      </Text>
      <Text style={[styles.sisaHari2Container, styles.sisaContainerTypo]}>
        <Text style={styles.sisaHari}>{`Sisa Hari
`}</Text>
        <Text style={styles.text3}>2</Text>
      </Text>
      <View
        style={[styles.iphone13146Child13, styles.iphone13146ChildShadowBox]}
      />
      <View
        style={[styles.iphone13146Child14, styles.iphone13146ChildLayout]}
      />
      <View style={[styles.iphone13146Child15, styles.bantuBayi3Position]} />
      <Text
        style={[styles.bantuBayi3, styles.bantuBayi3Position]}
      >{`Bantu Bayi 3 Bulan Kelainan Anus & Usus; Bisa Berobat`}</Text>
      <Text style={[styles.terkumpulRp113311105, styles.bantuBayi3Position]}>
        <Text style={styles.terkumpul}>Terkumpul</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.rp80426790}>Rp113.311.105</Text>
      </Text>
      <Text style={[styles.sisaHari11Container, styles.sisaContainerTypo]}>
        <Text style={styles.sisaHari}>{`Sisa Hari
`}</Text>
        <Text style={styles.text3}>11</Text>
      </Text>
      <Image
        style={[styles.image22Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-221.png")}
      />
      <Image
        style={[styles.expandDownIcon, styles.urutkanPosition]}
        contentFit="cover"
        source={require("../assets/expand-down3.png")}
      />
      <Pressable
        style={[styles.image23, styles.image23Position]}
        onPress={() => navigation.navigate("IPhone13147")}
      >
        <Image
          style={[styles.icon5, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/image-232.png")}
        />
      </Pressable>
      <Image
        style={[styles.image24Icon, styles.image23Position]}
        contentFit="cover"
        source={require("../assets/image-242.png")}
      />
      <Image
        style={[styles.image25Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-252.png")}
      />
      <Image
        style={[styles.image26Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-26.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorPosition1: {
    top: 799,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  vectorPosition: {
    width: "7.69%",
    top: "94.67%",
    position: "absolute",
  },
  expandLeftPosition: {
    left: 0,
    position: "absolute",
  },
  iphone13146Border: {
    height: 19,
    borderWidth: 1,
    borderColor: Color.colorGray_1000,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    top: 154,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  filterTypo: {
    color: Color.colorGray_400,
    fontSize: FontSize.size_3xs,
    top: 159,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  urutkanPosition: {
    left: 182,
    position: "absolute",
  },
  iphone13146ChildShadowBox: {
    height: 98,
    width: 346,
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
    position: "absolute",
  },
  iphone13146ChildLayout3: {
    height: 3,
    top: 259,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  bantuTypo: {
    height: 20,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  terkumpulTypo: {
    height: 8,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  iphone13146ChildPosition1: {
    top: 370,
    height: 3,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  sisaContainerTypo: {
    height: 16,
    textAlign: "right",
    fontSize: FontSize.size_5xs,
    color: Color.colorBlack,
  },
  iphone13146ChildPosition: {
    top: 494,
    height: 3,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  iphone13146ChildLayout1: {
    top: 609,
    height: 3,
    borderRadius: Border.br_8xs,
  },
  urgentAnakSakitPosition: {
    left: 194,
    position: "absolute",
  },
  iphone13146ChildLayout: {
    height: 4,
    top: 718,
    borderRadius: Border.br_8xs,
  },
  bantuBayi3Position: {
    left: 198,
    position: "absolute",
  },
  iconLayout: {
    height: 76,
    position: "absolute",
  },
  image23Position: {
    height: 77,
    left: 31,
    position: "absolute",
  },
  iphone13146Child: {
    top: 780,
    left: -16,
    borderRadius: Border.br_41xl,
    width: 426,
    height: 101,
    backgroundColor: Color.colorWhite,
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
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
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
  iphone13146Item: {
    top: -2,
    backgroundColor: Color.colorGray_100,
    width: 430,
    height: 137,
  },
  expandLeft: {
    top: 90,
    width: 45,
    height: 45,
  },
  kitabisa: {
    top: 93,
    left: 154,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    position: "absolute",
  },
  iphone13146Inner: {
    left: 19,
    width: 105,
    height: 19,
    borderWidth: 1,
    borderColor: Color.colorGray_1000,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    top: 154,
  },
  filterIcon: {
    top: 157,
    left: 29,
    width: 15,
    height: 15,
    position: "absolute",
    overflow: "hidden",
  },
  kategori: {
    left: 53,
    position: "absolute",
  },
  rectangleView: {
    left: 148,
    width: 105,
    height: 19,
    borderWidth: 1,
    borderColor: Color.colorGray_1000,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    top: 154,
  },
  iphone13146Child1: {
    left: 275,
    width: 99,
    height: 19,
    borderWidth: 1,
    borderColor: Color.colorGray_1000,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    top: 154,
  },
  filter: {
    left: 309,
    position: "absolute",
  },
  urutkan: {
    color: Color.colorGray_400,
    fontSize: FontSize.size_3xs,
    top: 159,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  sortDownLightIcon: {
    top: 155,
    left: 153,
    width: 18,
    height: 18,
    opacity: 0.9,
    position: "absolute",
  },
  filterAltLightIcon: {
    top: 153,
    left: 304,
    width: 24,
    height: 24,
    position: "absolute",
  },
  iphone13146Child2: {
    top: 194,
    left: 21,
    width: 346,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  iphone13146Child3: {
    left: 329,
    width: 28,
    backgroundColor: Color.colorLightgray,
  },
  iphone13146Child4: {
    width: 137,
    backgroundColor: Color.colorDarkslategray_200,
    left: 197,
  },
  yogaYatimPiatu: {
    top: 210,
    width: 162,
    height: 20,
    left: 197,
    position: "absolute",
  },
  terkumpul: {
    color: Color.colorGray_600,
  },
  text: {
    color: Color.colorBlack,
  },
  rp80426790: {
    color: Color.colorCornflowerblue,
  },
  terkumpulRp80426790: {
    top: 239,
    width: 83,
    left: 197,
    position: "absolute",
  },
  rectanglePressable: {
    top: 310,
    left: 21,
    width: 346,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  selamatkanBalitaSakitKritis: {
    width: 160,
  },
  selamatkanBalitaSakitContainer: {
    top: 321,
    left: 197,
    position: "absolute",
  },
  iphone13146Child5: {
    left: 212,
    width: 145,
    backgroundColor: Color.colorLightgray,
  },
  iphone13146Child6: {
    width: 19,
    backgroundColor: Color.colorDarkslategray_200,
    left: 197,
  },
  text1: {
    width: 73,
  },
  terkumpulRp602975: {
    top: 350,
    left: 197,
    position: "absolute",
  },
  sisaHari: {
    fontFamily: FontFamily.roboto,
  },
  text3: {
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  sisaHari3Container: {
    top: 270,
    width: 64,
    position: "absolute",
    left: 293,
  },
  text4: {
    width: 74,
  },
  sisaHari30Container: {
    top: 382,
    left: 283,
    position: "absolute",
  },
  iphone13146Child7: {
    top: 427,
    left: 21,
    width: 346,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  iphone13146Child8: {
    width: 74,
    left: 283,
    backgroundColor: Color.colorLightgray,
  },
  iphone13146Child9: {
    width: 94,
    backgroundColor: Color.colorDarkslategray_200,
    left: 197,
  },
  daruratBantuAnak: {
    top: 443,
    width: 162,
    height: 20,
    left: 197,
    position: "absolute",
  },
  terkumpulRp610005954: {
    top: 472,
    width: 86,
    left: 197,
    position: "absolute",
  },
  iphone13146Child10: {
    top: 543,
    left: 21,
    width: 346,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  iphone13146Child11: {
    left: 290,
    width: 64,
    position: "absolute",
    backgroundColor: Color.colorLightgray,
  },
  iphone13146Child12: {
    width: 151,
    top: 609,
    height: 3,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorDarkslategray_200,
  },
  urgentAnakSakit: {
    top: 559,
    width: 163,
    height: 20,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  terkumpulRp397311105: {
    top: 588,
    width: 87,
    height: 8,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  sisaHari21Container: {
    top: 503,
    left: 303,
    width: 54,
    position: "absolute",
  },
  sisaHari2Container: {
    top: 618,
    left: 296,
    width: 58,
    position: "absolute",
  },
  iphone13146Child13: {
    top: 651,
    left: 22,
  },
  iphone13146Child14: {
    width: 64,
    position: "absolute",
    left: 293,
    backgroundColor: Color.colorLightgray,
  },
  iphone13146Child15: {
    width: 98,
    height: 4,
    top: 718,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorDarkslategray_200,
  },
  bantuBayi3: {
    top: 667,
    height: 20,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    width: 162,
  },
  terkumpulRp113311105: {
    top: 696,
    width: 85,
    height: 8,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  sisaHari11Container: {
    top: 726,
    width: 74,
    left: 283,
    position: "absolute",
  },
  image22Icon: {
    top: 438,
    left: 31,
    height: 76,
    width: 160,
    borderRadius: Border.br_3xs,
  },
  expandDownIcon: {
    top: 754,
    width: 21,
    height: 21,
  },
  icon5: {
    borderRadius: Border.br_8xs,
  },
  image23: {
    width: 156,
    top: 321,
  },
  image24Icon: {
    top: 554,
    width: 160,
    borderRadius: Border.br_8xs,
  },
  image25Icon: {
    top: 662,
    width: 161,
    left: 31,
    height: 76,
    borderRadius: Border.br_8xs,
  },
  image26Icon: {
    top: 205,
    left: 33,
    width: 152,
    borderRadius: Border.br_8xs,
  },
  iphone13146: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13146;
