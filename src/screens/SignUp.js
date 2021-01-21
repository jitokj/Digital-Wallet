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
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <LinearGradient
        colors={[COLORS.lime, COLORS.emerald]}
        style={{ flex: 1 }}
      ></LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
