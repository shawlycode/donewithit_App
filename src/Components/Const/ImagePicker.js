import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Feather } from '@expo/vector-icons';

export default function ImagePickerExample() {
    const [image, setImage] = useState(null);


    useEffect(() => {
        (async () => {
            if (Platform.OS !== "web") {
                const { status } =
                    await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== "granted") {
                    alert("Sorry, we need camera roll permissions to make this work!");
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
        <View
            style={{ flex: 1, flexDirection: "row", alignItems: "center", paddingLeft: 10 }}>
            <TouchableOpacity onPress={pickImage}>
                <Feather name="camera" size={40} color="tomato" />
            </TouchableOpacity>
            <View>
                <View>
                    {image ? <View>
                        <Image
                            source={{ uri: image }}
                            style={{
                                width: 70,
                                height: 70,
                                borderRadius: 10,
                                marginLeft: 50,
                            }} />

                    </View> : <></>}
                </View>
            </View>
        </View>
    );
}
