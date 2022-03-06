// import React, { useRef, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Modal,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   TextInput,
//   FlatList,
//   Keyboard,
//   Image,
// } from "react-native";

// import { AntDesign, Ionicons } from "@expo/vector-icons";
// import { StatusBar } from "expo-status-bar";
// // import { FilterData } from "../../global/Database";
// import { useNavigation } from "@react-navigation/native";


// export default function SearchComponent() {
//   const navigation = useNavigation();
//   // const [data, setData] = useState([...FilterData]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [textInputFocused, setTextInputFocused] = useState(true);
//   const textInput = useRef(0);
//   // const [list, setList] = useState([...FilterData]);

//   const searchContainer = ({ name }, query) => {
//     if (name.includes(query)) {
//       return true;
//     }
//     return false;
//   };

//   // const handleSearch = (text) => {
//   //   const dataNew = filter(FilterData, (userSearch) => {
//   //     return searchContainer(userSearch, text);
//   //   });
//   //   setData([...dataNew]);
//   // };

//   return (
//     <View style={{ alignItems: "center" }}>
//       <StatusBar barStyle="light-content" backgroundColor="black" />
//       <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
//         <View style={styles.searchArea}>
//           <AntDesign name="search1" size={26} color="black" />
//           <Text style={{ fontStyle: "italic", fontSize: 18, marginLeft: 20 }}>
//             What are you looking for?
//           </Text>
//         </View>
//       </TouchableWithoutFeedback>
//       <Modal
//         animationType="fade"
//         transparent={false}
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <TouchableOpacity
//           onPress={() => {
//             setModalVisible(!modalVisible);
//           }}
//           style={{ flex: 1 }}
//         // >
//         //   <View style={styles.textInput}>
//         //     {/* <Animatable.View
//         //       animation={textInputFocused ? "fadeInRight" : "fadeInLeft"}
//         //       duration={600}
//         //       delay={500}
//         //     >
//         //       <Ionicons
//         //         name={textInputFocused ? "arrow-back" : "search"}
//         //         onPress={() => {
//         //           if (textInputFocused) setModalVisible(false);
//         //           setTextInputFocused(true);
//         //         }}
//         //         size={30}
//         //         color="black"
//         //       />
//         //     </Animatable.View> */}

//         //     <TextInput
//         //       placeholder="enter search"
//         //       placeholderTextTransform="lowercase"
//         //       placeholderTextColor={"grey"}
//         //       autoFocus={false}
//         //       ref={textInput}
//         //       style={styles.input}
//         //       onFocus={() => {
//         //         setTextInputFocused(true);
//         //       }}
//         //       onBlur={() => {
//         //         setTextInputFocused(false);
//         //       }}
//         //     // onChangeText={handleSearch}
//         //     />
//         //     {/* <Animatable.View
//         //       animation={textInputFocused ? "fadeInLeft" : "fadeInRight"}
//         //       duration={600}
//         //       delay={500}
//         //     > */}
//         //     <Ionicons
//         //       name={textInputFocused ? "close-circle-sharp" : null}
//         //       size={30}
//         //       color="red"
//         //       onPress={() => {
//         //         textInput.current.clear();
//         //         handleSearch();
//         //       }}
//         //     />
//         //   </Animatable.View>
//         // </View>
//       // </TouchableOpacity >
//     <View style={{ position: "absolute", bottom: 0, top: 150, left: 30 }}>
//       <FlatList
//         data={list}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             onPress={() => {
//               Keyboard.dismiss;
//               setModalVisible(false);
//               setTextInputFocused(true);
//               navigation.navigate("filteredData", {
//                 item: item.image,
//               });
//             }}
//           >
//             <View>
//               <Text
//                 style={{
//                   fontSize: 20,
//                   marginBottom: 10,
//                 }}
//               >
//                 {item.name}
//                 {item.image}
//               </Text>
//             </View>
//           </TouchableOpacity>
//         )}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//     </Modal >
//     </View >
//   );
// }
// const styles = StyleSheet.create({
//   searchArea: {
//     flexDirection: "row",
//     marginTop: 50,
//     marginBottom: 15,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "grey",
//     width: "90%",
//     height: 50,
//     borderRadius: 10,
//     padding: 10,
//   },
//   textInput: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//     borderWidth: 0.8,
//     marginTop: 60,
//     height: 50,
//     width: "90%",
//     borderRadius: 10,
//     marginHorizontal: 20,
//   },
//   input: {
//     width: "80%",
//     fontSize: 20,
//     fontStyle: "italic",
//     textAlign: "center",
//   },
// });
