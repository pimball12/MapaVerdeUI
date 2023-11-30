import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import { Ionicons } from '@expo/vector-icons';

function GardenDetails() {

    const navigation = useNavigation();

    useLayoutEffect(() => {

        navigation.setOptions({

            title: 'Horta Comunitária do Neto',
        });
    }, [])

    return (

        <ScrollView style={styles.container}>
            <Image source={require('../../assets/images/background.jpg')} style={styles.image} />
            <View style={styles.contactContainer}>
                <Text style={styles.contactText}>08:00 - 20:00</Text>
                <Text style={styles.contactText}>Neto Mella</Text>
                <Text style={styles.contactText}>(44) 99173-5839</Text>
                <Text style={styles.contactText}>mella.neto@gmail.com</Text>
                <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center', paddingTop: 15}}>
                    <Image source={require('../../assets/images/pin_false.png')} style={{height: 50, width: 30}} />
                </View>
            </View>
            <ScrollView horizontal={true} style={styles.imagesCarousel}>
                <View style={{ flex: 1, flexDirection: 'row', paddingRight: 15 }}>
                    <Pressable style={({ pressed }) => pressed && { opacity: 0.7 }}>
                        <Image source={require('../../assets/images/background.jpg')} style={styles.carouselImage} />
                    </Pressable>

                    <Image source={require('../../assets/images/background.jpg')} style={styles.carouselImage} />
                    <Image source={require('../../assets/images/background.jpg')} style={styles.carouselImage} />
                    <Image source={require('../../assets/images/background.jpg')} style={styles.carouselImage} />
                    <Image source={require('../../assets/images/background.jpg')} style={styles.carouselImage} />
                    <Image source={require('../../assets/images/background.jpg')} style={styles.carouselImage} />
                    <Image source={require('../../assets/images/background.jpg')} style={styles.carouselImage} />
                    <Image source={require('../../assets/images/background.jpg')} style={styles.carouselImage} />
                    <Image source={require('../../assets/images/background.jpg')} style={styles.carouselImage} />
                    <Image source={require('../../assets/images/background.jpg')} style={styles.carouselImage} />
                    <Image source={require('../../assets/images/background.jpg')} style={styles.carouselImage} />
                    <Image source={require('../../assets/images/background.jpg')} style={styles.carouselImage} />
                    <Image source={require('../../assets/images/background.jpg')} style={styles.carouselImage} />
                    <Image source={require('../../assets/images/background.jpg')} style={styles.carouselImage} />
                    <Image source={require('../../assets/images/background.jpg')} style={styles.carouselImage} />
                    <Image source={require('../../assets/images/background.jpg')} style={styles.carouselImage} />
                    <Image source={require('../../assets/images/background.jpg')} style={styles.carouselImage} />
                </View>
            </ScrollView>
            <Text style={styles.description}>
                {`Lorem ipsum dolor sit amet,\n consectetur adipiscing elit. Praesent eu arcu in massa convallis dignissim eu nec massa. Phasellus placerat arcu aliquet felis dignissim, ac pulvinar elit mollis. Nullam mi metus, ullamcorper tincidunt tristique vitae, rutrum eu justo. Vivamus ornare accumsan lacus, et tincidunt turpis molestie nec. Cras facilisis leo risus, quis pellentesque quam ullamcorper vitae. In posuere nisl sed tincidunt tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam sapien metus, sodales in est quis, porta tincidunt augue. In ornare accumsan tellus, ac cursus risus gravida lacinia. Nullam euismod lacus a nunc fringilla, vestibulum lacinia nibh viverra. Integer nec mi tristique, elementum neque ut, accumsan purus.

                    Nulla fermentum urna non tincidunt egestas. Nunc ac augue vulputate, malesuada metus finibus, tincidunt arcu. Aliquam ac iaculis quam, quis tincidunt libero. In dui ex, semper vel nunc eget, molestie porta ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut nisi sed elit scelerisque tincidunt. In ac nibh ipsum. 
                    `}
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