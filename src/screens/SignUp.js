import React, { useEffect, useState } from "react";
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
  const [showPassword, setShowPassword] = useState(false);
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => {
        let areaData = data.map((item) => {
          return {
            code: item.alpha2Code,
            name: item.name,
            callingCode: `+${item.callingCodes[0]}`,
            flag: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`,
          };
        });
        setAreas(areaData);
        if (areaData.length > 0) {
          let defaultData = areaData.filter((a) => a.code == "US");
          if (defaultData.length > 0) {
            setSelectedArea(defaultData[0]);
          }
        }
      });
  });

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
              onPress={() => setModalVisible(true)}
            >
              <View style={{ justifyContent: "center" }}>
                <Image
                  source={icons.down}
                  style={{ width: 10, height: 10, tintColor: COLORS.white }}
                />
              </View>
              <View style={{ justifyContent: "center", marginLeft: 5 }}>
                <Image
                  source={{ uri: selectedArea?.flag }}
                  resizeMode="contain"
                  style={{ width: 30, height: 30 }}
                />
              </View>
              <View style={{ justifyContent: "center", marginLeft: 5 }}>
                <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
                  {selectedArea?.callingCode}
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
        <View style={{ marginTop: SIZES.padding * 1.5 }}>
          <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>
            Password
          </Text>
          <TextInput
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 30,
              color: COLORS.white,
              ...FONTS.body3,
            }}
            placeholderTextColor={COLORS.white}
            placeholder="Enter Password"
            selectionColor={COLORS.white}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 0,
              bottom: 10,
              height: 30,
              width: 30,
            }}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              source={showPassword ? icons.disable_eye : icons.eye}
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

  const renderAreaCodesModal = () => {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{ padding: SIZES.padding, flexDirection: "row" }}
          onPress={() => {
            setSelectedArea(item);
            setModalVisible(false);
          }}
        >
          <Image
            source={{ uri: item.flag }}
            style={{ width: 30, height: 30, marginRight: 10 }}
          />
          <Text style={{ ...FONTS.body4 }}>{item.name}</Text>
        </TouchableOpacity>
      );
    };
    return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback
          onPress={() => {
            setModalVisible(false);
          }}
        >
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <View
              style={{
                height: 400,
                width: SIZES.width * 0.8,
                backgroundColor: COLORS.lightGreen,
                borderRadius: SIZES.radius,
              }}
            >
              <FlatList
                data={areas}
                renderItem={renderItem}
                keyExtractor={(item) => item.code}
                showsVerticalScrollIndicator={false}
                style={{
                  padding: SIZES.padding * 2,
                  marginBottom: SIZES.padding * 2,
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, flexDirection: "column" }}
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
      {renderAreaCodesModal()}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.padding * 3,
    paddingHorizontal: SIZES.padding * 2,
  },
  backButtonImage: { width: 20, height: 20, tintColor: COLORS.white },
  backButtonText: {
    marginLeft: SIZES.padding * 1.5,
    color: COLORS.white,
    ...FONTS.h1,
  },
  logoContainer: {
    marginTop: SIZES.padding * 3,
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
