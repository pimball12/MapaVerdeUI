import { Image, ImageBackground, KeyboardAvoidingView, StyleSheet, View } from "react-native";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import { Colors } from "../../constants/colors";


function Login() {

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
                <View style={styles.container}>
                    <View style={styles.imageContainer} >
                        <Image style={styles.image} source={require('../../assets/images/logo.png')}/>
                    </View>
                    <View style={styles.loginBox}>
                        <Input label="E-mail" placeholder="seunome@email.com" onChangeText={() => { }} textInputConfig={{ keyboardType: 'email-address' }} value="" />
                        <Input label='Senha' placeholder="********************" onChangeText={() => { }} textInputConfig={{ secureTextEntry: true }} value="" />
                        <Button light icon='log-in' style={styles.loginButton} >Entrar</Button>
                        <Button icon='contract' style={styles.loginButton} >Cadastrar-se</Button>
                    </View>
                </View>
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
        justifyContent: 'center'
    },

    image: {

        width: '100%',
        height: '100%'
    },

    imageContainer: {

        width: 200,
        height: 255,
        overflow: 'hidden',
        marginBottom: 40
    },

    loginBox: {

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

export default Login;