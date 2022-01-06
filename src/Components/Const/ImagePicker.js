import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, Text, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";

import { FontAwesome5 } from "@expo/vector-icons";

export default function ImagePickerExample() {
  const [image, setImage] = useState(0);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert(
            "Sorry, DoneWithit need camera permissions to inordeer to upload a picture!"
          );
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <TouchableOpacity
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <TouchableOpacity onPress={pickImage}>
        <FontAwesome5
          name="camera"
          size={38}
          color="black"
          style={styles.imgCon}
        />
      </TouchableOpacity>
      <View>
        <TouchableOpacity onPress={pickImage}>
          {image && (
            <View>
              <Image
                source={{ uri: image }}
                style={{
                  position: "absolute",
                  left: 100,
                  bottom: -36,
                  width: 100,
                  height: 100,
                  borderRadius: 5,
                }}
              />
              <Text
                style={{
                  color: "#000",
                  borderWidth: 1,
                  borderColor: "#000",
                  borderRadius: 5,
                  position: "absolute",
                  width: 60,
                  height: 25,
                  top: -2,
                  left: -30,
                  marginTop: 4,
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Add
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({});
