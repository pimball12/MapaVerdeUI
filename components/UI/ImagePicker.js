import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { launchCameraAsync, launchImageLibraryAsync, useCameraPermissions, useMediaLibraryPermissions, PermissionStatus } from 'expo-image-picker';
import { useState } from "react";
import { Colors } from "../../constants/colors";
import Button from "./Button";

function ImagePicker({ onTakeImage, takePhoto, aspect }) {

    const [pickedImageUri, setPickedImageUri] = useState('');

    const [cameraPermissionInformation, requestCameraPermission] = useCameraPermissions();
    const [mediaLibraryPermissionInformation, requestMediaLibraryPermission] = useMediaLibraryPermissions();

    async function verifyCameraPermissions() {

        if (cameraPermissionInformation.status !== PermissionStatus.GRANTED) {

            const cameraPermissionResponse = await requestCameraPermission();
            return cameraPermissionResponse.granted;
        }

        if (cameraPermissionInformation.status === PermissionStatus.DENIED) {

            Alert.alert('Permissões Insuficientes!', 'Você precisa dar permissão para a câmera para usar esse app.');
            return false;
        }

        return true;
    }

    async function verifyMediaLibraryPermissions() {

        if (mediaLibraryPermissionInformation.status !== PermissionStatus.GRANTED) {

            const mediaLibraryPermissionResponse = await requestMediaLibraryPermission();
            return mediaLibraryPermissionResponse.granted;
        }

        if (mediaLibraryPermissionInformation.status === PermissionStatus.DENIED) {

            Alert.alert('Permissões Insuficientes!', 'Você precisa dar permissão para a biblioteca para usar esse app.');
            return false;
        }

        return true;
    }

    return (

        <View>
            <View style={styles.imagePreview}>
                {!!pickedImageUri && <Image style={styles.image} source={{ uri: pickedImageUri }} />}
                {!!!pickedImageUri && <Text>Nenhuma Imagem Ainda</Text>}
            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    style={styles.button}
                    light
                    icon="camera"
                    onPress={async () => {

                        const hasPermission = await verifyCameraPermissions() && await verifyMediaLibraryPermissions();

                        if (!hasPermission) {

                            return;
                        }

                        const image = await launchCameraAsync({

                            allowsEditing: true,
                            aspect: [4,4]
                        });

                        if (!!!image || image.canceled) {

                            return;
                        }

                        setPickedImageUri(image.assets[0].uri);
                        onTakeImage(image.assets[0].uri);
                    }}
                >
                    Tirar Foto
                </Button>
                <Button
                style={styles.button}
                    light
                    icon="library"
                    onPress={async () => {

                        const hasPermission = await verifyCameraPermissions() && await verifyMediaLibraryPermissions();

                        if (!hasPermission) {

                            return;
                        }

                        const image = await launchImageLibraryAsync({

                            allowsEditing: true,
                            aspect: [4, 4]
                        });

                        if (!!!image || image.canceled) {

                            return;
                        }

                        setPickedImageUri(image.assets[0].uri);
                        onTakeImage(image.assets[0].uri);
                    }}
                >
                    Escolher
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    imagePreview: {

        width: '100%',
        height: 350,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4
    },

    image: {

        width: '100%',
        height: '100%'
    },

    buttonsContainer: {

        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 9
    },

    button: {

        width: '48%'
    }
});

export default ImagePicker;