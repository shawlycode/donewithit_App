import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Categories = ({ navigation }) => {
  return (
    <View style={styles.navCategory}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.navCategoryText}>Books</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navCategoryText}>Cameras</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navCategoryText}>Furniture</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navCategoryText}>Cars</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navCategoryText}>Shoes</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navCategoryText}>Clothes</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navCategoryText}>Kid's Toys</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  navCategory: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 5,
  },
  navCategoryText: {
    marginHorizontal: 10,
    fontSize: 24,
    backgroundColor: "#C3A7DF",
    width: 100,
    height: 40,
    borderRadius: 6,
    color: "#4F4B52",
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 5,
  },
});
