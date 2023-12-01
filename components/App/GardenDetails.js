import { useIsFocused } from "@react-navigation/native";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Dimensions, Image, Linking, Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import { AppContext } from "../../store/app-context";
import { getRequest } from "../../util/http";
import { getHours } from "../../util/date";
import LoadingOverlay from "../UI/LoadingOverlay";
import env from "../../util/env";

function GardenDetails({ navigation, route}) {

    // console.log(route);

    const appContext = useContext(AppContext);

    const isFocused = useIsFocused();

    const [garden, setGarden] = useState([]);

    const [selectedImage, setSelectedImage] = useState();

    useEffect(() => {

        (async () => {

            const gardenFetched = await getRequest(`/api/gardens/${route.params.id}?owner&main_picture&images`, appContext.auth.token);
            // console.log(gardenFetched);
            setGarden(gardenFetched.data.data);
        })();
    }, []);

    useLayoutEffect(() => {

        navigation.setOptions({

            title: garden.name,
        });
    }, [garden]);

    function openMap(lat, lng, label) {

        const scheme = Platform.select({ ios: 'maps://0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${lat},${lng}`;
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });

        Linking.openURL(url);
    }

    if (!!!garden.main_picture || !!!garden.images) {

        return (

            <LoadingOverlay />
        );
    }

    if (!!selectedImage) {

        return (

            <Pressable
                style={{flex: 1}}
                onPress={() => {

                    setSelectedImage(null);
                }}
            >
                <View style={{ flex: 1, backgroundColor: Colors.primary700, alignItems:'center', justifyContent: 'center' }}>
                    <Image
                        source={{ uri: `${env.host}/api/images/display/${selectedImage}` }}
                        style={{

                            width: '100%',
                            height: Dimensions.get("screen").width
                        }}
                    />
                </View>
            </Pressable>
        );
    }

    return (

        <ScrollView style={styles.container}>
            <Image source={{ uri: `${env.host}/api/images/display/${garden.main_picture.file}` }} style={styles.image} />
            <View style={styles.contactContainer}>
                <Text style={styles.contactText}>{getHours(new Date(garden.opening_time))} - {getHours(new Date(garden.closing_time))}</Text>
                <Text style={styles.contactText}>{garden.owner.name}</Text>
                <Text style={styles.contactText}>{garden.contact_phone}</Text>
                <Text style={styles.contactText}>{garden.contact_email}</Text>
                <Pressable onPress={openMap.bind(this, garden.lat, garden.lng, garden.name)}>
                    <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center', paddingTop: 15 }}>
                        <Image source={require('../../assets/images/pin_false.png')} style={{ height: 50, width: 30 }} />
                    </View>
                </Pressable>
            </View>
            <ScrollView horizontal={true} style={styles.imagesCarousel}>
                <View style={{ flex: 1, flexDirection: 'row', paddingRight: 15 }}>
                    {garden.images.map((item, index) => {

                        return (

                            <Pressable
                                onPress={() => setSelectedImage(item.file)}
                                key={index}
                                style={({ pressed }) => pressed && { opacity: 0.7 }}
                            >
                                <Image source={{ uri: `${env.host}/api/images/display/${item.file}` }} style={styles.carouselImage} />
                            </Pressable>
                        );
                    })}
                </View>
            </ScrollView>
            <Text style={styles.description}>
                {`${garden.description}`}
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    contactContainer: {

        backgroundColor: Colors.primary400,
        padding: 15
    },

    contactText: {

        color: Colors.primary100,
        textAlign: 'center',
        fontSize: 20
    },

    image: {

        width: '100%',
        height: 300,
    },

    imagesCarousel: {

        width: '100%',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: Colors.primary700,
        flex: 1
    },

    carouselImage: {

        width: 100,
        height: 100,
        marginRight: 15
    },

    container: {

        flex: 1,
        backgroundColor: Colors.primary100
    },

    description: {

        color: Colors.primary500,
        padding: 15
    }
});

export default GardenDetails;