import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { Colors } from "../../constants/colors";
import { Ionicons } from '@expo/vector-icons';

function GardensMap() {

    const regions = [
        {
            latitude: -23.442438962762782,
            longitude: -51.911396350106415,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        },
        {
            latitude: -23.44104120961615,
            longitude: -51.90693315427473,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        },
        {
            latitude: -23.44192711121363,
            longitude: -51.91401418612306,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        },
        {
            latitude: -23.443974505513484,
            longitude: -51.908563937367084,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        },
        {
            latitude: -23.439407197756637,
            longitude: -51.90723356168648,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        },
    ];

    return (

        <MapView
            style={styles.map}
            initialRegion={regions[0]}
            showsBuildings={false}
            showsTraffic={false}
            showsIndoors={false}
        >
            {regions.map((region, region_index) => {

                return (

                    <Marker
                        key={region_index}
                        coordinate={region}
                    >
                        <View style={{alignItems: 'center'}}>
                            <View style={{ width: 30, height: 50 }}>
                                <Image source={require('../../assets/images/pin_true.png')} style={{ width: '100%', height: '100%', flex: 1 }} />
                            </View>
                            <Text style={{width: 70, textAlign: 'center', color: Colors.primary500}}>LALALALALALALALALALAL</Text>
                        </View>
                    </Marker>
                );
            })}

        </MapView>
    );
}

const styles = StyleSheet.create({

    map: {

        flex: 1,
    }
});

export default GardensMap;