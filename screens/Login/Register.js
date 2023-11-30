import { ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, View } from "react-native";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import { Colors } from "../../constants/colors";
import ImagePicker from "../../components/UI/ImagePicker";


function Register() {

    return (

        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
            enabled={Platform.OS === "ios" ? true : false}
        >
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../../assets/images/background.jpg')}
            >
                <ScrollView>
                <View style={styles.container}>
                    <View style={styles.loginBox}>
                        <Input label="Nome" placeholder="João Jardineiro" onChangeText={() => { }} value="" />
                        <Input label="E-mail" placeholder="seunome@email.com" onChangeText={() => { }} textInputConfig={{ keyboardType: 'email-address' }} value="" />
                        <Input label='Senha' placeholder="********************" onChangeText={() => { }} textInputConfig={{ secureTextEntry: true }} value="" />
                        <Input label='Confirmar Senha' placeholder="********************" onChangeText={() => { }} textInputConfig={{ secureTextEntry: true }} value="" />
                        <ImagePicker
                            onTakeImage={imageUri => {

                                // setSelectedImage(imageUri);
                            }}
                        />
                        <Button icon='save' style={styles.loginButton} >Salvar</Button>
                    </View>
                </View>
                </ScrollView>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: Colors.primary600.toString(), //+ 'd8',
        opacity: 0.9,
        alignItems: 'center',
        // justifyContent: 'center'
    },

    loginBox: {

        marginTop: 100,
        marginBottom: 50,
        backgroundColor: Colors.primary100,
        padding: 20,
        borderRadius: 8,
        width: '75%',
        // height: 300
    },

    backgroundImage: {

        flex: 1,
        width: '100%'
    },

    loginButton: {

        marginTop: 15
    }
});

export default Register;