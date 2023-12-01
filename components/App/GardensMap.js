import { useIsFocused } from "@react-navigation/native";
import { PermissionStatus, getCurrentPositionAsync, getForegroundPermissionsAsync, requestForegroundPermissionsAsync } from 'expo-location';
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Alert, Image, PermissionsAndroid, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { AppContext } from "../../store/app-context";
import { getRequest } from "../../util/http";
import { Colors } from "../../constants/colors";

function GardensMap({ navigation }) {

    const appContext = useContext(AppContext);

    const isFocused = useIsFocused();

    const [regions, setRegions] = useState([]);

    useEffect(() => {

        (async() => {

            const regionsFetched = (await getRequest("/api/gardens", appContext.auth.token));
            setRegions(regionsFetched.data.data);
        })();
    }, []);

    const [currentLat, setCurrentLat] = useState(0);
    const [currentLng, setCurrentLng] = useState(0);

    const delta = {

        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    };

    async function verifyLocationPermissions() {

        if ((await getForegroundPermissionsAsync()).status !== PermissionStatus.GRANTED) {

            const locationPermissionResponse = (await requestForegroundPermissionsAsync()).status;
            return locationPermissionResponse.granted
        }

        if ((await getForegroundPermissionsAsync()).status !== PermissionStatus.GRANTED) {

            Alert.alert('Permissão Insuficiente!', 'Você precisa permitir a localização para utilizar esse app.');
            return false;
        }

        return true;
    }

    const loadPermissions = async() => {

        const hasPermission = await verifyLocationPermissions();

        if (!hasPermission) {

            appContext.auth.logout();
            return;
        }

        const location = await getCurrentPositionAsync({});

        setCurrentLat(location.coords.latitude);
        setCurrentLng(location.coords.longitude);
    };

    useLayoutEffect(() => {

        loadPermissions();
    }, []);

    return (

        <MapView
            // onPress={cu}
            style={styles.map}
            region={{

                latitude: currentLat,
                longitude: currentLng,
                latitudeDelta: delta.latitudeDelta,
                longitudeDelta: delta.longitudeDelta
            }}
            showsBuildings={false}
            showsTraffic={false}
            showsIndoors={false}
        >
            {regions.map((region, region_index) => {

                return (

                    <Marker
                        key={region_index}
                        coordinate={{

                            latitude: region.lat,
                            longitude: region.lng,
                            ...delta 
                        }}
                        onPress={() => {

                            navigation.navigate('Garden', {
                               
                                id: region.id
                            });
                        }}
                    >
                        <View style={{alignItems: 'center'}}>
                            <View style={{ width: 30, height: 50 }}>
                                <Image source={require('../../assets/images/pin_true.png')} style={{ width: '100%', height: '100%', flex: 1 }} />
                            </View>
                            <Text style={{width: 70, textAlign: 'center', color: Colors.primary500}}>{region.name}</Text>
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