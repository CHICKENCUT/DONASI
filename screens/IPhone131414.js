import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const IPhone131414 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone131414}>
      <View style={styles.iphone131414Child} />
      <Text style={[styles.galangDana, styles.galangDanaTypo]}>
        GALANG DANA
      </Text>
      <View style={styles.iphone131414Item} />
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
      <Image
        style={styles.iphone131414Inner}
        contentFit="cover"
        source={require("../assets/rectangle-21.png")}
      />
      <View style={styles.rectangleView} />
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableShadowBox]}
        onPress={() => navigation.navigate("IPhone131415")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("IPhone131415")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
      </Pressable>
      <Pressable
        style={styles.selanjutnya}
        onPress={() => navigation.navigate("IPhone131415")}
      >
        <Text style={[styles.selanjutnya1, styles.sebelumnya1Typo]}>
          Selanjutnya
        </Text>
      </Pressable>
      <Pressable
        style={[styles.iphone131414Child1, styles.rectanglePressableShadowBox]}
        onPress={() => navigation.navigate("IPhone131413")}
      />
      <Pressable
        style={[styles.container, styles.wrapperPosition]}
        onPress={() => navigation.navigate("IPhone131413")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector-10.png")}
        />
      </Pressable>
      <Pressable
        style={styles.sebelumnya}
        onPress={() => navigation.navigate("IPhone131413")}
      >
        <Text style={[styles.sebelumnya1, styles.sebelumnya1Typo]}>
          Sebelumnya
        </Text>
      </Pressable>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-41651.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Text style={styles.hari}>30 Hari</Text>
      <Image
        style={[styles.iphone131414Child2, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-41651.png")}
      />
      <Text style={[styles.hari1, styles.rpTypo]}>90 Hari</Text>
      <Image
        style={[styles.iphone131414Child3, styles.iphone131414ChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-28.png")}
      />
      <Image
        style={[styles.iphone131414Child4, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Text style={[styles.hari2, styles.hari2Typo]}>60 Hari</Text>
      <Image
        style={[styles.iphone131414Child5, styles.iphone131414ChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-28.png")}
      />
      <Image
        style={[styles.iphone131414Child6, styles.iphone131414ChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Text style={[styles.pilihTanggal, styles.hari2Typo]}>Pilih Tanggal</Text>
      <Image
        style={[styles.iphone131414Child7, styles.iphone131414ChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Text style={[styles.targetDonasi, styles.galangDanaTypo]}>
        TARGET DONASI
      </Text>
      <Image
        style={styles.arrowDropRightIcon}
        contentFit="cover"
        source={require("../assets/arrow-drop-right.png")}
      />
      <Image
        style={[styles.iphone131414Child8, styles.iphone131414ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-162.png")}
      />
      <Image
        style={[styles.iphone131414Child9, styles.iphone131414ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-201.png")}
      />
      <Text style={[styles.rp, styles.rpTypo]}>{`Rp `}</Text>
      <Text style={[styles.tentukanPerkiraanBiaya, styles.tentukanTypo]}>
        Tentukan perkiraan biaya yang dibutuhkan
      </Text>
      <Text style={[styles.tentukanLamaGalang, styles.tentukanTypo]}>
        Tentukan lama galang dana berlangusng
      </Text>
      <Text style={[styles.isiRincianPenggunaan, styles.tentukanTypo]}>
        Isi rincian penggunaan dana
      </Text>
      <Text
        style={[styles.ceritakanSecaraLengkap, styles.rpTypo]}
      >{`Ceritakan secara lengkap rencana penggunaan 
dana yang didapat dari galang dana ini`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  galangDanaTypo: {
    height: 18,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    fontSize: FontSize.size_mid,
    textAlign: "left",
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
  rectanglePressableShadowBox: {
    width: 89,
    backgroundColor: Color.colorDarkslategray_100,
    borderRadius: Border.br_3xs,
    bottom: 107,
    height: 23,
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
    bottom: "13.51%",
    top: "85.43%",
    position: "absolute",
  },
  sebelumnya1Typo: {
    width: 73,
    fontSize: FontSize.size_xs,
    height: 12,
    color: Color.colorWhite,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  rectangleIconLayout: {
    height: 24,
    width: 131,
    borderRadius: Border.br_8xs,
    top: 326,
    opacity: 0.5,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 14,
    width: 15,
    left: 57,
    position: "absolute",
  },
  rpTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  iphone131414ChildLayout2: {
    top: 362,
    height: 25,
    opacity: 0.5,
    width: 131,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  hari2Typo: {
    top: 369,
    color: Color.colorBlack,
    height: 11,
    fontSize: FontSize.size_2xs,
    opacity: 0.5,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  iphone131414ChildLayout1: {
    width: 14,
    height: 14,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  iphone131414ChildLayout: {
    width: 304,
    left: 45,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  tentukanTypo: {
    left: 45,
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  iphone131414Child: {
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
  },
  iphone131414Item: {
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
  iphone131414Inner: {
    top: 287,
    left: 43,
    width: 130,
    height: 43,
    position: "absolute",
  },
  rectangleView: {
    top: 174,
    left: 33,
    backgroundColor: Color.colorWhitesmoke,
    width: 329,
    height: 577,
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
  rectanglePressable: {
    left: 259,
    height: 23,
  },
  wrapper: {
    left: "85.9%",
    right: "12.82%",
  },
  selanjutnya1: {
    height: 12,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  selanjutnya: {
    left: 270,
    top: 719,
    position: "absolute",
  },
  iphone131414Child1: {
    left: 46,
    height: 23,
  },
  container: {
    left: "13.85%",
    right: "84.87%",
  },
  sebelumnya1: {
    textAlign: "right",
    height: 12,
  },
  sebelumnya: {
    top: 720,
    left: 52,
    position: "absolute",
  },
  rectangleIcon: {
    opacity: 0.5,
    left: 52,
  },
  ellipseIcon: {
    top: 332,
  },
  hari: {
    color: Color.colorGray_900,
    width: 63,
    height: 11,
    fontSize: FontSize.size_2xs,
    left: 83,
    top: 334,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  iphone131414Child2: {
    left: 204,
    opacity: 0.5,
  },
  hari1: {
    width: 64,
    left: 235,
    height: 11,
    top: 334,
    color: Color.colorBlack,
  },
  iphone131414Child3: {
    height: 25,
    left: 52,
  },
  iphone131414Child4: {
    top: 368,
  },
  hari2: {
    width: 76,
    left: 83,
    top: 369,
  },
  iphone131414Child5: {
    height: 25,
    left: 204,
  },
  iphone131414Child6: {
    top: 367,
    left: 211,
  },
  pilihTanggal: {
    width: 80,
    left: 235,
  },
  iphone131414Child7: {
    left: 212,
    top: 332,
  },
  targetDonasi: {
    top: 200,
    color: Color.colorGray_100,
    width: 141,
    left: 204,
    height: 18,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    fontSize: FontSize.size_mid,
  },
  arrowDropRightIcon: {
    top: 703,
    left: 326,
    width: 21,
    height: 22,
    position: "absolute",
  },
  iphone131414Child8: {
    top: 267,
    height: 25,
  },
  iphone131414Child9: {
    top: 422,
    height: 136,
  },
  rp: {
    top: 274,
    left: 53,
    width: 62,
    height: 11,
    opacity: 0.5,
  },
  tentukanPerkiraanBiaya: {
    top: 250,
    width: 223,
    height: 12,
  },
  tentukanLamaGalang: {
    top: 309,
    width: 225,
    height: 11,
  },
  isiRincianPenggunaan: {
    top: 405,
    width: 166,
    height: 11,
  },
  ceritakanSecaraLengkap: {
    top: 436,
    left: 51,
    width: 289,
    opacity: 0.5,
    height: 23,
  },
  iphone131414: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone131414;
