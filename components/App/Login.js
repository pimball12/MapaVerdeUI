import { Alert, Image, ImageBackground, KeyboardAvoidingView, StyleSheet, View } from "react-native";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import { Colors } from "../../constants/colors";
import { useContext, useState } from "react";
import { postRequest } from "../../util/http";
import { AppContext } from "../../store/app-context";

function Login({ navigation }) {

    const appContext = useContext(AppContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function loginButtonPressHandler() {

        const payload = {

            email: email,
            password: password
        };

        const response = await postRequest('/api/login', payload);
        // console.log(response);

        if (!!response?.data?.access_token) {

            appContext.auth.authenticate({token: response.data.access_token, user: response.data.user});
        } else {

            Alert.alert("Erro!", response.data.message);
        }
    }

    function registerButtonPressHandler() {

        navigation.navigate('Register');
    }

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
                        <Image style={styles.image} source={require('../../assets/images/logo.png')} />
                    </View>
                    <View style={styles.loginBox}>
                        <Input label="E-mail" placeholder="seunome@email.com" onUpdateValue={text => { setEmail(text) }} textInputConfig={{ keyboardType: 'email-address' }} value={email} />
                        <Input label='Senha' placeholder="********************" onUpdateValue={text => { setPassword(text) }} textInputConfig={{ secureTextEntry: true }} value={password} />
                        <Button onPress={loginButtonPressHandler} light icon='log-in' style={styles.loginButton} >Entrar</Button>
                        <Button onPress={registerButtonPressHandler} icon='contract' style={styles.loginButton} >Cadastrar-se</Button>
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