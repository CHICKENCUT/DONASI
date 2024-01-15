import * as React from "react";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Message from "../components/Message";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone13143 = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rePassword, setRePassword] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const handleSignUpPress = () => {
    navigation.navigate("IPhone13144");
  };

  return (
    <View style={[styles.iphone13143, styles.iconLayout]}>
      <View style={styles.iphone13143Child} />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IPhone13142")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector-95.png")}
        />
      </Pressable>
      <Text style={[styles.signUp, styles.signTypo]}>SIGN UP</Text>
      <TextInput
        style={[styles.input, styles.firstNameInput]}
        placeholder="Enter your first name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <View style={[styles.iphone13143ChildLayout, styles.iphone13143Item]} />
      <TextInput
        style={[styles.input, styles.lastNameInput]}
        placeholder="Enter your last name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <View style={[styles.iphone13143ChildLayout, styles.iphone13143Inner]} />
      <TextInput
        style={[styles.input, styles.usernameInput]}
        placeholder="Enter your username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <View style={[styles.iphone13143ChildLayout, styles.lineView]} />
      <TextInput
        style={[styles.input, styles.emailInput]}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <View style={[styles.iphone13143ChildLayout, styles.iphone13143Child1]} />
      <TextInput
        style={[styles.input, styles.passwordInput]}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={[styles.iphone13143ChildLayout, styles.iphone13143Child2]} />
      <TextInput
        style={[styles.input, styles.rePasswordInput]}
        placeholder="Re-enter your password"
        secureTextEntry
        value={rePassword}
        onChangeText={(text) => setRePassword(text)}
      />
      <View style={[styles.iphone13143ChildLayout, styles.iphone13143Child3]} />
      <TextInput
        style={[styles.input, styles.phoneNumberInput]}
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <View style={[styles.iphone13143ChildLayout, styles.iphone13143Child4]} />
      <Pressable
        style={styles.rectanglePressable}
        onPress={handleSignUpPress}
      />
      <Pressable
        style={styles.signUp1}
        onPress={handleSignUpPress}
      >
        <Text style={[styles.signUp2, styles.signTypo]}>SIGN UP</Text>
      </Pressable>
      <Image
        style={styles.userLightIcon}
        contentFit="cover"
        source={require("../assets/user-light1.png")}
      />
      <Image
        style={styles.userLightIcon1}
        contentFit="cover"
        source={require("../assets/user-light2.png")}
      />
      <Image
        style={styles.userFillIcon}
        contentFit="cover"
        source={require("../assets/user-fill.png")}
      />
      <Message messagePosition="absolute" messageTop={401} messageLeft={25} />
      <Image
        style={styles.lockIcon}
        contentFit="cover"
        source={require("../assets/lock.png")}
      />
      <Image
        style={styles.lockIcon1}
        contentFit="cover"
        source={require("../assets/lock.png")}
      />
      <Image
        style={styles.phoneIcon}
        contentFit="cover"
        source={require("../assets/phone.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  signTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.roboto,
  },
  nameTypo: {
    opacity: 0.3,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    left: 50,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  iphone13143ChildLayout: {
    opacity: 0.7,
    height: 1,
    width: 331,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  passwordTypo: {
    left: 52,
    opacity: 0.3,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  userIconLayout: {
    height: 20,
    width: 18,
    left: 25,
    position: "absolute",
  },
  lockIconLayout: {
    height: 22,
    width: 22,
    position: "absolute",
  },
  iphone13143Child: {
    top: 0,
    left: -20,
    backgroundColor: Color.colorGray_100,
    width: 430,
    height: 129,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  wrapper: {
    left: "6.41%",
    top: "10.19%",
    right: "90.69%",
    bottom: "87.14%",
    width: "2.9%",
    height: "2.67%",
    position: "absolute",
  },
  signUp: {
    top: 86,
    left: 158,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  firstName: {
    top: 195,
  },
  iphone13143Item: {
    top: 220,
    left: 25,
  },
  lastName: {
    top: 268,
  },
  iphone13143Inner: {
    top: 289,
    left: 25,
  },
  username: {
    top: 336,
  },
  lineView: {
    top: 356,
    left: 25,
  },
  email: {
    top: 405,
  },
  iphone13143Child1: {
    top: 425,
    left: 27,
  },
  password: {
    top: 474,
  },
  iphone13143Child2: {
    top: 495,
    left: 27,
  },
  rePassword: {
    top: 545,
  },
  iphone13143Child3: {
    top: 567,
    left: 28,
  },
  phoneNumber: {
    top: 618,
  },
  iphone13143Child4: {
    top: 640,
    left: 25,
  },
  rectanglePressable: {
    bottom: 89,
    left: 83,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorDarkslategray_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 224,
    height: 32,
    position: "absolute",
  },
  signUp2: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    width: 57,
    height: 24,
  },
  signUp1: {
    left: 167,
    top: 731,
    position: "absolute",
  },
  userLightIcon: {
    top: 193,
  },
  userLightIcon1: {
    top: 266,
  },
  userFillIcon: {
    top: 335,
    height: 18,
    width: 18,
    left: 25,
    position: "absolute",
  },
  lockIcon: {
    top: 468,
    left: 25,
    overflow: "hidden",
  },
  lockIcon1: {
    top: 541,
    left: 27,
    overflow: "hidden",
  },
  phoneIcon: {
    top: 613,
    left: 25,
  },
  iphone13143: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
  input: {
    position: "absolute",
    left: 52,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    fontFamily: FontFamily.roboto,
    width: 240,
    height: 24,
  },
  firstNameInput: {
    top: 195,
  },
  lastNameInput: {
    top: 268,
  },
  usernameInput: {
    top: 336,
  },
  emailInput: {
    top: 405,
  },
  passwordInput: {
    top: 474,
  },
  rePasswordInput: {
    top: 545,
  },
  phoneNumberInput: {
    top: 618,
  },
});

export default IPhone13143;
