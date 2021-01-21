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
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { icons, images, theme, COLORS, SIZES, FONTS } from "../constants/index";

const SignUp = () => {
    const renderHeader = () => {
      return (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: SIZES.padding * 6,
            paddingHorizontal: SIZES.padding * 2,
          }}
          onPress={() => console.log("Sign up")}
        >
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{ width: 20, height: 20, tintColor: COLORS.white }}
          />
          <Text
            style={{ marginLeft: SIZES.padding * 1.5, color: COLORS.white }}
          >
            SignUp
          </Text>
        </TouchableOpacity>
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
        <ScrollView>{renderHeader()}</ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
