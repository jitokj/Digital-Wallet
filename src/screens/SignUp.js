import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StyleSheet,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { icons, images, theme, COLORS, SIZES, FONTS } from "../constants/index";

const SignUp = () => {
  const renderHeader = () => {
    return (
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => console.log("Sign up")}
      >
        <Image
          source={icons.back}
          resizeMode="contain"
          style={styles.backButtonImage}
        />
        <Text style={styles.backButtonText}>SignUp</Text>
      </TouchableOpacity>
    );
  };

  const renderLogo = () => {
    return (
      <View style={styles.logoContainer}>
        <Image
          source={images.wallieLogo}
          resizeMode="contain"
          style={{ width: "60%" }}
        />
      </View>
    );
  };

  const renderForm = () => {
    return (
      <View style={styles.formContainer}>
        <View style={styles.FullNameContainer}>
          <Text style={styles.FullNameText}>FullName</Text>
          <TextInput
            style={styles.FullNameTextInput}
            placeholder="Enter FullName"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
          />
        </View>
        <View style={{ marginTop: SIZES.padding * 2 }}>
          <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>
            Phone Number
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.CountryCodeButton}
              onPress={() => console.log("show model")}
            >
              <View style={{ justifyContent: "center" }}>
                <Image
                  source={icons.down}
                  style={{ width: 10, height: 10, tintColor: COLORS.white }}
                />
              </View>
              <View style={{ justifyContent: "center", marginLeft: 5 }}>
                <Image
                  source={images.usFlag}
                  resizeMode="contain"
                  style={{ width: 30, height: 30 }}
                />
              </View>
              <View style={{ justifyContent: "center", marginLeft: 5 }}>
                <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
                  US+1
                </Text>
              </View>
            </TouchableOpacity>
            <TextInput
              style={{
                flex: 1,
                borderBottomColor: COLORS.white,
                marginVertical: SIZES.padding,
                borderBottomWidth: 1,
                height: 40,
                color: COLORS.white,
                ...FONTS.body3,
              }}
              placeholder="Enter Phone Number"
              placeholderTextColor={COLORS.white}
              selectionColor={COLORS.white}
            />
          </View>
        </View>

        {/* password */}
        <View style={{ marginTop: SIZES.padding * 2 }}>
          <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>
            Password
          </Text>
          <TextInput
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.white,
              ...FONTS.body3,
            }}
            placeholderTextColor={COLORS.white}
            placeholder="Enter Password"
            selectionColor={COLORS.white}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 0,
              bottom: 10,
              height: 30,
              width: 30,
            }}
            onPress={() => console.log("Toggle")}
          >
            <Image
              source={icons.eye}
              style={{ height: 20, width: 20, tintColor: COLORS.white }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderButton = () => {
    return (
      <View style={{ margin: SIZES.padding * 3 }}>
        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: COLORS.black,
            borderRadius: SIZES.radius / 1.5,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => console.log("Navigate to Home")}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <LinearGradient
        colors={[COLORS.lime, COLORS.emerald]}
        style={{ flex: 1 }}
      >
        <ScrollView>
          {renderHeader()}
          {renderLogo()}
          {renderForm()}
          {renderButton()}
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.padding * 6,
    paddingHorizontal: SIZES.padding * 2,
  },
  backButtonImage: { width: 20, height: 20, tintColor: COLORS.white },
  backButtonText: {
    marginLeft: SIZES.padding * 1.5,
    color: COLORS.white,
    ...FONTS.h1,
  },
  logoContainer: {
    marginTop: SIZES.padding * 5,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    marginTop: SIZES.padding * 3,
    marginHorizontal: SIZES.padding * 3,
  },
  FullNameContainer: {
    marginTop: SIZES.padding * 3,
  },
  FullNameText: {
    color: COLORS.lightGreen,
    ...FONTS.body3,
  },
  FullNameTextInput: {
    marginVertical: SIZES.padding,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    height: 40,
    color: COLORS.white,
    ...FONTS.body3,
  },
  CountryCodeButton: {
    width: 100,
    height: 50,
    marginHorizontal: 5,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    flexDirection: "row",
    ...FONTS.body2,
  },
});

export default SignUp;
