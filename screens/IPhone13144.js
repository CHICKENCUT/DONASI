import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone13144 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13144}>
      <View style={styles.iphone13144Child} />
      <View style={styles.iphone13144Item} />
      <Image
        style={[styles.iphone13144Inner, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/ellipse-65.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/ellipse-66.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/vector-109.png")}
      />
      <Text style={[styles.search, styles.terkumpulFlexBox]}>Search</Text>
      <View style={[styles.rectangleView, styles.iphone13144ChildShadowBox3]} />
      <View
        style={[styles.iphone13144Child1, styles.iphone13144ChildShadowBox3]}
      />
      <Pressable
        style={[styles.kesehatan, styles.kesehatanPosition]}
        onPress={() => navigation.navigate("IPhone13145")}
      >
        <Text style={[styles.kesehatan1, styles.kesehatan1Typo]}>
          Kesehatan
        </Text>
      </Pressable>
      <View
        style={[styles.iphone13144Child2, styles.iphone13144ChildShadowBox3]}
      />
      <View
        style={[styles.iphone13144Child3, styles.iphone13144ChildShadowBox3]}
      />
      <Text style={styles.hewan}>Hewan</Text>
      <Text style={styles.bencanaAlam}>{`Bencana 
Alam`}</Text>
      <Text style={[styles.pendidikan, styles.kesehatan1Typo]}>Pendidikan</Text>
      <View
        style={[styles.iphone13144Child4, styles.iphone13144ChildShadowBox2]}
      />
      <View
        style={[styles.iphone13144Child5, styles.iphone13144ChildShadowBox2]}
      />
      <Text style={[styles.waqaf, styles.waqafTypo]}>Waqaf</Text>
      <View
        style={[styles.iphone13144Child6, styles.iphone13144ChildShadowBox2]}
      />
      <View
        style={[styles.iphone13144Child7, styles.iphone13144ChildShadowBox2]}
      />
      <Text
        style={[styles.infrastrukturUmum, styles.modalUsahaTypo]}
      >{`Infrastruktur
Umum`}</Text>
      <Text style={[styles.modalUsaha, styles.modalUsahaTypo]}>{`Modal
Usaha`}</Text>
      <Text style={[styles.zakat, styles.waqafTypo]}>Zakat</Text>
      <View
        style={[styles.iphone13144Child8, styles.iphone13144ChildShadowBox1]}
      />
      <View
        style={[styles.iphone13144Child9, styles.iphone13144ChildShadowBox1]}
      />
      <Text style={[styles.rumahIbadah, styles.rumahIbadahTypo]}>{`Rumah
Ibadah`}</Text>
      <View
        style={[styles.iphone13144Child10, styles.iphone13144ChildShadowBox1]}
      />
      <View
        style={[styles.iphone13144Child11, styles.iphone13144ChildShadowBox1]}
      />
      <Text style={[styles.kemanusiaan, styles.lingkunganTypo]}>
        Kemanusiaan
      </Text>
      <Text style={[styles.lingkungan, styles.lingkunganTypo]}>Lingkungan</Text>
      <Text style={[styles.pantiAsuhan, styles.rumahIbadahTypo]}>{`Panti
Asuhan`}</Text>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Pressable
        style={[styles.image2, styles.image2Position]}
        onPress={() => navigation.navigate("IPhone13145")}
      >
        <Image
          style={styles.iconLayout2}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
      </Pressable>
      <Image
        style={[styles.image3Icon, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/image-33.png")}
      />
      <Image
        style={[styles.image4Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/image-4.png")}
      />
      <Image
        style={[styles.image5Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-51.png")}
      />
      <Image
        style={[styles.image6Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-61.png")}
      />
      <Image
        style={[styles.image7Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <Image
        style={[styles.image8Icon, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/image-8.png")}
      />
      <Image
        style={[styles.image10Icon, styles.image18Layout]}
        contentFit="cover"
        source={require("../assets/image-101.png")}
      />
      <Image
        style={[styles.image11Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/image-111.png")}
      />
      <Image
        style={[styles.image12Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-121.png")}
      />
      <Image
        style={[styles.image13Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-13.png")}
      />
      <View
        style={[styles.iphone13144Child12, styles.iphone13144ChildShadowBox]}
      />
      <View
        style={[styles.iphone13144Child13, styles.iphone13144ChildLayout]}
      />
      <View style={[styles.iphone13144Child14, styles.iphone13144ChildBg]} />
      <Image
        style={[styles.image14Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-14.png")}
      />
      <Text
        style={[styles.daruratKemanusiaanGaza, styles.bantuanPakanUntukTypo]}
      >
        Darurat Kemanusiaan Gaza - Palestina 2023
      </Text>
      <Text style={[styles.terkumpulRp180426790, styles.terkumpulTypo]}>
        <Text style={styles.terkumpul}>Terkumpul</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.rp180426790}>Rp180.426.790</Text>
      </Text>
      <View
        style={[styles.iphone13144Child15, styles.iphone13144ChildShadowBox]}
      />
      <View
        style={[styles.iphone13144Child16, styles.iphone13144ChildPosition]}
      />
      <View
        style={[styles.iphone13144Child17, styles.iphone13144ChildPosition]}
      />
      <Text style={[styles.bantuanPakanUntuk, styles.bantuanPakanUntukTypo]}>
        Bantuan Pakan Untuk Hewan Terlantar
      </Text>
      <Text style={[styles.terkumpulRp11311105, styles.terkumpulTypo]}>
        <Text style={styles.terkumpul}>Terkumpul</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.rp180426790}>Rp11.311.105</Text>
      </Text>
      <Image
        style={[styles.image15Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-151.png")}
      />
      <Text style={[styles.sisaHari3Container, styles.sisaContainerFlexBox]}>
        <Text style={styles.sisaHari}>{`Sisa Hari
`}</Text>
        <Text style={styles.terkumpulTypo}>3</Text>
      </Text>
      <Text style={[styles.sisaHari11Container, styles.sisaContainerFlexBox]}>
        <Text style={styles.sisaHari}>{`Sisa Hari
`}</Text>
        <Text style={styles.terkumpulTypo}>11</Text>
      </Text>
      <Text style={[styles.kitabisacom, styles.wecareidTypo]}>
        Kitabisa.com
      </Text>
      <Text style={[styles.wecareid, styles.wecareidTypo]}>WeCare.id</Text>
      <Text style={[styles.rekomendasi, styles.sisaContainerFlexBox]}>
        REKOMENDASI
      </Text>
      <Image
        style={[styles.iphone13144Child18, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/vector-94.png")}
      />
      <View style={styles.iphone13144Child19} />
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
          style={[styles.icon2, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon1, styles.vectorPosition]}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <Pressable
        style={[styles.vector1, styles.vectorPosition]}
        onPress={() => navigation.navigate("IPhone131417")}
      >
        <Image
          style={[styles.icon3, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout3: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  terkumpulFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  iphone13144ChildShadowBox3: {
    height: 56,
    width: 56,
    backgroundColor: Color.colorSilver_200,
    borderRadius: Border.br_3xs,
    top: 158,
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
  kesehatanPosition: {
    top: 221,
    position: "absolute",
  },
  kesehatan1Typo: {
    height: 9,
    color: Color.colorGray_200,
    fontSize: FontSize.size_3xs,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  iphone13144ChildShadowBox2: {
    top: 360,
    height: 56,
    width: 56,
    backgroundColor: Color.colorSilver_200,
    borderRadius: Border.br_3xs,
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
  waqafTypo: {
    height: 10,
    top: 422,
    color: Color.colorGray_200,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  modalUsahaTypo: {
    height: 19,
    top: 422,
    textAlign: "center",
    color: Color.colorGray_200,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  iphone13144ChildShadowBox1: {
    top: 259,
    height: 56,
    width: 56,
    backgroundColor: Color.colorSilver_200,
    borderRadius: Border.br_3xs,
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
  rumahIbadahTypo: {
    width: 38,
    top: 322,
    height: 18,
    textAlign: "center",
    color: Color.colorGray_200,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  lingkunganTypo: {
    top: 322,
    textAlign: "center",
    height: 9,
    color: Color.colorGray_200,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  image2Position: {
    top: 169,
    height: 34,
    position: "absolute",
  },
  iconPosition2: {
    left: 212,
    height: 34,
    position: "absolute",
  },
  iconPosition1: {
    left: 290,
    width: 34,
  },
  iconPosition: {
    top: 269,
    height: 34,
    position: "absolute",
  },
  iconLayout1: {
    height: 33,
    position: "absolute",
  },
  image18Layout: {
    height: 37,
    width: 35,
  },
  iphone13144ChildShadowBox: {
    height: 110,
    width: 328,
    left: 34,
    borderRadius: Border.br_3xs,
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
  iphone13144ChildLayout: {
    height: 4,
    borderRadius: Border.br_8xs,
    top: 583,
    position: "absolute",
  },
  iphone13144ChildBg: {
    backgroundColor: Color.colorDarkslategray_200,
    left: 201,
  },
  iconLayout: {
    width: 150,
    left: 43,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  bantuanPakanUntukTypo: {
    width: 153,
    color: Color.colorBlack,
    left: 201,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  terkumpulTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.roboto,
  },
  iphone13144ChildPosition: {
    top: 700,
    height: 4,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  sisaContainerFlexBox: {
    textAlign: "right",
    color: Color.colorBlack,
    position: "absolute",
  },
  wecareidTypo: {
    color: Color.colorSteelblue,
    textAlign: "right",
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  vectorPosition1: {
    top: 799,
    position: "absolute",
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  vectorPosition: {
    top: "94.67%",
    width: "7.69%",
    position: "absolute",
  },
  iphone13144Child: {
    top: 0,
    left: -20,
    backgroundColor: Color.colorGray_100,
    width: 430,
    height: 129,
    position: "absolute",
  },
  iphone13144Item: {
    top: 77,
    left: 69,
    borderRadius: Border.br_mini,
    width: 252,
    height: 29,
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
  iphone13144Inner: {
    height: "1.8%",
    width: "3.9%",
    top: "9.83%",
    right: "21.74%",
    bottom: "88.36%",
    left: "74.36%",
    position: "absolute",
  },
  ellipseIcon: {
    height: "0.77%",
    width: "1.67%",
    top: "10.34%",
    right: "22.87%",
    bottom: "88.89%",
    left: "75.46%",
    position: "absolute",
  },
  vectorIcon: {
    height: "0.39%",
    width: "0.85%",
    top: "11.37%",
    right: "20.95%",
    bottom: "88.23%",
    left: "78.21%",
    position: "absolute",
  },
  search: {
    top: 82,
    left: 83,
    fontSize: FontSize.size_base,
    color: Color.colorDimgray_200,
    width: 112,
    height: 16,
    fontFamily: FontFamily.roboto,
  },
  rectangleView: {
    left: 47,
  },
  iphone13144Child1: {
    left: 124,
  },
  kesehatan1: {
    width: 53,
  },
  kesehatan: {
    left: 127,
  },
  iphone13144Child2: {
    left: 278,
  },
  iphone13144Child3: {
    left: 201,
  },
  hewan: {
    left: 281,
    width: 51,
    textAlign: "center",
    height: 9,
    color: Color.colorGray_200,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    top: 221,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  bencanaAlam: {
    left: 52,
    width: 46,
    height: 18,
    textAlign: "center",
    color: Color.colorGray_200,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    top: 221,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  pendidikan: {
    left: 204,
    width: 58,
    top: 221,
    position: "absolute",
  },
  iphone13144Child4: {
    left: 47,
  },
  iphone13144Child5: {
    left: 124,
  },
  waqaf: {
    left: 139,
    width: 35,
  },
  iphone13144Child6: {
    left: 278,
  },
  iphone13144Child7: {
    left: 201,
  },
  infrastrukturUmum: {
    left: 276,
    width: 61,
  },
  modalUsaha: {
    left: 56,
    width: 37,
  },
  zakat: {
    left: 218,
    width: 27,
  },
  iphone13144Child8: {
    left: 47,
  },
  iphone13144Child9: {
    left: 124,
  },
  rumahIbadah: {
    left: 133,
  },
  iphone13144Child10: {
    left: 278,
  },
  iphone13144Child11: {
    left: 201,
  },
  kemanusiaan: {
    left: 271,
    width: 72,
  },
  lingkungan: {
    left: 40,
    width: 60,
  },
  pantiAsuhan: {
    left: 211,
  },
  image1Icon: {
    top: 168,
    height: 34,
    left: 57,
    width: 35,
    position: "absolute",
  },
  image2: {
    left: 134,
    width: 35,
  },
  image3Icon: {
    top: 175,
    width: 35,
  },
  image4Icon: {
    width: 34,
    top: 169,
    height: 34,
    position: "absolute",
  },
  image5Icon: {
    left: 57,
    width: 35,
  },
  image6Icon: {
    left: 134,
    width: 35,
  },
  image7Icon: {
    top: 370,
    left: 134,
    width: 35,
  },
  image8Icon: {
    top: 369,
    width: 34,
  },
  image10Icon: {
    top: 368,
    left: 57,
    position: "absolute",
  },
  image11Icon: {
    top: 374,
    height: 28,
    width: 34,
    position: "absolute",
  },
  image12Icon: {
    width: 34,
    left: 211,
  },
  image13Icon: {
    top: 272,
    width: 34,
    left: 290,
  },
  iphone13144Child12: {
    top: 505,
  },
  iphone13144Child13: {
    left: 326,
    width: 26,
    backgroundColor: Color.colorLightgray,
  },
  iphone13144Child14: {
    width: 129,
    height: 4,
    borderRadius: Border.br_8xs,
    top: 583,
    position: "absolute",
  },
  image14Icon: {
    top: 517,
    height: 85,
  },
  daruratKemanusiaanGaza: {
    top: 523,
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
    top: 564,
    width: 96,
    fontSize: FontSize.size_5xs,
    left: 201,
    textAlign: "left",
    position: "absolute",
  },
  iphone13144Child15: {
    top: 624,
  },
  iphone13144Child16: {
    left: 291,
    backgroundColor: Color.colorLightgray,
    width: 61,
  },
  iphone13144Child17: {
    width: 93,
    backgroundColor: Color.colorDarkslategray_200,
    left: 201,
  },
  bantuanPakanUntuk: {
    top: 642,
  },
  terkumpulRp11311105: {
    top: 681,
    width: 77,
    fontSize: FontSize.size_5xs,
    left: 201,
    textAlign: "left",
    position: "absolute",
  },
  image15Icon: {
    top: 636,
    height: 86,
  },
  sisaHari: {
    fontFamily: FontFamily.roboto,
  },
  sisaHari3Container: {
    top: 591,
    left: 248,
    width: 104,
    fontSize: FontSize.size_5xs,
  },
  sisaHari11Container: {
    top: 708,
    left: 297,
    width: 55,
    fontSize: FontSize.size_5xs,
  },
  kitabisacom: {
    top: 548,
    left: 198,
    width: 50,
  },
  wecareid: {
    top: 665,
    left: 180,
    width: 60,
  },
  rekomendasi: {
    top: 478,
    left: 28,
    fontSize: FontSize.size_2xs,
    width: 90,
    fontWeight: "700",
    fontFamily: FontFamily.roboto,
  },
  iphone13144Child18: {
    height: "0.71%",
    width: "2.56%",
    top: "89.57%",
    right: "48.72%",
    bottom: "9.72%",
    left: "48.72%",
    position: "absolute",
  },
  iphone13144Child19: {
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
    height: 37,
    width: 35,
  },
  icon2: {
    marginLeft: 137,
  },
  vector: {
    left: "50%",
    width: 30,
    height: 32,
  },
  vectorIcon1: {
    height: "3.55%",
    right: "84.62%",
    bottom: "1.78%",
    left: "7.69%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  icon3: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vector1: {
    left: "59.74%",
    right: "32.56%",
    bottom: "1.42%",
    height: "3.91%",
  },
  iphone13144: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13144;
