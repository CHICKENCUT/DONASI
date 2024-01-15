import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const IPhone13142 = ({ usernameInputStyle, passwordInputStyle, loginButtonStyle }) => {
  const navigation = useNavigation();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLoginPress = () => {
    navigation.navigate("IPhone13144");
  };

  return (
    <View style={styles.iphone13142}>
      <View style={styles.iphone13142Child} />
      <Pressable
        style={styles.signUp}
        onPress={() => navigation.navigate("IPhone13143")}
      >
        <Text style={[styles.signUp1, styles.signUp1Typo]}>SIGN UP</Text>
      </Pressable>
      <Text style={[styles.or, styles.orTypo]}>OR</Text>
      <View style={[styles.iphone13142Item, styles.iphone13142Position]} />
      <View style={[styles.iphone13142Inner, styles.iphone13142Position]} />
      <Image
        style={[styles.image5Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-52.png")}
      />
      <Image
        style={[styles.image3Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-34.png")}
      />
      <Text
        style={[styles.dontHaveAn, styles.dontHaveAnPosition]}
      >{`Don’t have an Account? `}</Text>
      <Text style={[styles.forgotPassword, styles.rememberMeTypo]}>
        Forgot Password?
      </Text>
      <Text style={[styles.rememberMe, styles.rememberMeTypo]}>
        Remember me
      </Text>
      <View style={styles.rectangleView} />
      <Image
        style={[styles.userLightIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/user-light2.png")}
      />
      <Text style={[styles.username, styles.usernameTypo, usernameInputStyle]}>USERNAME</Text>

      {/* Komponen Input untuk Username */}
      <TextInput
        style={[styles.input, styles.usernameInput]}
        placeholder="Enter your username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <View
        style={[styles.iphone13142Child1, styles.iphone13142Child1ShadowBox]}
      />
      <Image
        style={[styles.viewHideIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/view-hide1.png")}
      />
      <Image
        style={[styles.lockLightIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/lock-light1.png")}
      />
      <View style={styles.iphone13142Child2} />
      <Text style={[styles.password, styles.usernameTypo, passwordInputStyle]}>PASSWORD</Text>

      {/* Komponen Input untuk Password */}
      <TextInput
        style={[styles.input, styles.passwordInput]}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Pressable
        style={[styles.rectanglePressable, styles.iphone13142Child1ShadowBox]}
        onPress={handleLoginPress}
      />

      <Pressable
        style={[styles.login, loginButtonStyle]}
        onPress={handleLoginPress}
      >
        <Text style={[styles.login1, styles.orTypo]}>LOGIN</Text>
      </Pressable>

      <Image
        style={styles.image6Icon}
        contentFit="cover"
        source={require("../assets/image-62.png")}
      />
      <Image
        style={styles.image7Icon}
        contentFit="cover"
        source={require("../assets/image-71.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signUp1Typo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 17,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  orTypo: {
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  iphone13142Position: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top: 546,
    position: "absolute",
  },
  iconLayout1: {
    height: 22,
    width: 20,
    top: 572,
    position: "absolute",
  },
  dontHaveAnPosition: {
    left: 99,
    color: Color.colorBlack,
  },
  rememberMeTypo: {
    fontSize: FontSize.size_xs,
    top: 453,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 17,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  iconLayout: {
    width: 18,
    position: "absolute",
  },
  usernameTypo: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.amaranth,
    fontSize: FontSize.size_sm,
    left: 114,
    textAlign: "left",
    position: "absolute",
  },
  iphone13142Child1ShadowBox: {
    width: 224,
    left: 77,
    borderRadius: Border.br_mini,
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
  iphone13142Child: {
    top: 292,
    left: 44,
    borderRadius: 14,
    width: 290,
    height: 425,
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
  signUp1: {
    width: 45,
    color: Color.colorBlack,
    fontWeight: "700",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 17,
    fontSize: FontSize.size_smi,
  },
  signUp: {
    left: 233,
    top: 661,
    position: "absolute",
  },
  or: {
    top: 540,
    left: 184,
    fontSize: FontSize.size_3xs,
    width: 13,
    height: 13,
    color: Color.colorBlack,
    position: "absolute",
  },
  iphone13142Item: {
    left: 79,
    width: 97,
  },
  iphone13142Inner: {
    left: 204,
    width: 98,
  },
  image5Icon: {
    left: 146,
  },
  image3Icon: {
    left: 213,
  },
  dontHaveAn: {
    width: 126,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 17,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    left: 99,
    top: 661,
    position: "absolute",
  },
  forgotPassword: {
    left: 214,
    color: Color.colorSteelblue,
    width: 87,
  },
  rememberMe: {
    width: 73,
    left: 99,
    color: Color.colorBlack,
  },
  rectangleView: {
    top: 327,
    width: 223,
    height: 43,
    backgroundColor: Color.colorSilver_200,
    borderRadius: Border.br_mini,
    left: 78,
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
  userLightIcon: {
    height: 20,
    left: 87,
    width: 18,
    top: 339,
  },
  username: {
    width: 78,
    height: 20,
    top: 339,
  },
  iphone13142Child1: {
    bottom: 410,
    height: 44,
    backgroundColor: Color.colorSilver_200,
  },
  viewHideIcon: {
    top: 406,
    left: 271,
    height: 19,
  },
  lockLightIcon: {
    top: 405,
    height: 20,
    left: 87,
    width: 18,
  },
  iphone13142Child2: {
    borderWidth: 1,
    width: 15,
    left: 78,
    top: 453,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    height: 17,
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
  password: {
    top: 404,
    width: 77,
    height: 21,
  },
  rectanglePressable: {
    bottom: 323,
    backgroundColor: Color.colorDarkslategray_100,
    height: 32,
  },
  login1: {
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    width: 46,
    height: 14,
  },
  login: {
    left: 166,
    top: 497,
    position: "absolute",
  },
  image6Icon: {
    top: 570,
    left: 177,
    width: 26,
    height: 26,
    position: "absolute",
  },
  image7Icon: {
    top: 160,
    left: 136,
    width: 106,
    height: 103,
    position: "absolute",
  },
  iphone13142: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone13142;
