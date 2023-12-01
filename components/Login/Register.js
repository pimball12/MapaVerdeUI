import { Alert, ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, View } from "react-native";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import { Colors } from "../../constants/colors";
import ImagePicker from "../../components/UI/ImagePicker";
import { useContext, useState } from "react";
import { AppContext } from "../../store/app-context";
import { postRequest } from "../../util/http";
import axios from "axios";


function Register() {

    const appContext = useContext(AppContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [imageBase64, setImageBase64] = useState('');

    async function saveButtonOnPress() {

        const payload = {

            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
            name: name,
            image_base_64: imageBase64
        };

        const response = await postRequest('/api/register', payload);
        // console.log(response);
        // return;

        if (!!response?.data?.access_token) {

            appContext.auth.authenticate({token: response.data.access_token, user: response.data.user});
            // console.log(response);
        } else {

            Alert.alert("Erro!", response.data.message);
        }
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
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.loginBox}>
                            <Input label="Nome" placeholder="João Jardineiro" onUpdateValue={(value) => { setName(value) }} value={name} />
                            <Input label="E-mail" placeholder="seunome@email.com" onUpdateValue={(value) => { setEmail(value) }} textInputConfig={{ keyboardType: 'email-address' }} value={email} />
                            <Input label='Senha' placeholder="********************" onUpdateValue={(value) => { setPassword(value) }} textInputConfig={{ secureTextEntry: true }} value={password} />
                            <Input label='Confirmar Senha' placeholder="********************" onUpdateValue={(value) => { setPasswordConfirmation(value) }} textInputConfig={{ secureTextEntry: true }} value={passwordConfirmation} />
                            <ImagePicker
                                onTakeImage={(imageUri, image64) => {

                                    setImageBase64(image64);
                                }}
                            />
                            <Button icon='save' style={styles.loginButton} onPress={saveButtonOnPress} >Salvar</Button>
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
        width: '80%',
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