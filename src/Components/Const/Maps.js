import * as React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Maps = ({ route, navigation }) => {
  // const [data, setData] = React.useState(null);
  // const [streetName, SetStreetName] = React.useState("");
  // const [fromLocation, SetFromLocation] = React.useState(null);
  // const [toLocation, SetToLocation] = React.useState(null);
  // const [region, SetToRegion] = React.useState(null);

  // React.useEffect(() => {
  //   let { data, currentLoaction } = route.params;
  // });

  function renderMap() {
    return (
      <View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 5.614818,
            longitude: -0.205874,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider={"google"}
        >
          <Marker
            coordinate={{
              latitude: 5.614818,
              longitude: -0.205874,
            }}
          ></Marker>
        </MapView>
      </View>
    );
  }
  return <View style={styles.container}>{renderMap()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    flex: 1,

    width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height,
    height: 180,
  },
  mapZoomBtn: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    position: "absolute",
    top: 50,
    right: 20,
    width: 35,
    height: 35,
  },
  mapZoomBtn1: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    position: "absolute",
    top: 0.5,
    right: 20,
    backgroundColor: "tomato",
    width: 35,
    height: 35,
  },
  zoom: {
    backgroundColor: "tomato",
    width: 50,
    height: 50,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
export default Maps;
