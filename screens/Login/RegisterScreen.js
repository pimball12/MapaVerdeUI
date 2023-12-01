import { Alert, ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, View } from "react-native";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import { Colors } from "../../constants/colors";
import ImagePicker from "../../components/UI/ImagePicker";
import { useContext, useState } from "react";
import { AppContext } from "../../store/app-context";
import { postRequest } from "../../util/http";
import axios from "axios";
import Register from "../../components/Login/Register";


function RegisterScreen() {

    return <Register />;
}

export default RegisterScreen;