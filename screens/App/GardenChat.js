import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/colors";
import Button from "../../components/UI/Button";

function getRandomColor(id) {

    lastNumber = id % 10;

    switch (lastNumber) {

        case 1:
            color = '#79d8de';
            break;
        case 2:
            color = '#d0eadd';
            break;

        case 3:
            color = '#addfd6';
            break;

        case 4:
            color = '#85e0d7';
            break;

        case 5:
            color = '#8de3d6';
            break;

        case 6:
            color = '#2ac7d6';
            break;

        case 7:
            color = '#95dfe0';
            break;

        case 8:
            color = '#52cbc6';
            break;
        case 9:
            color = '#51d7ce';
            break;
        default:
            color = '#44d6c9';
            break;
    }

    return color;
}

const messages = [

    {
        name: "Sidney Edson Mella Neto",
        user_id: 1,
        message: "Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite ",
        contributor: true,
    },
    {
        name: "Sidney Edson Mella Neto",
        user_id: 2,
        message: "Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite ",
        contributor: false,
    },
    {
        name: "Sidney Edson Mella Neto",
        user_id: 3,
        message: "Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite ",
        contributor: true,
    },
    {
        name: "Sidney Edson Mella Neto",
        user_id: 2,
        message: "Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite ",
        contributor: false,
    },
    {
        name: "Sidney Edson Mella Neto",
        user_id: 1,
        message: "Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite ",
        contributor: true,
    },
    {
        name: "Sidney Edson Mella Neto",
        user_id: 3,
        message: "Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite ",
        contributor: false,
    },
    {
        name: "Sidney Edson Mella Neto",
        user_id: 1,
        message: "Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite ",
        contributor: true,
    },
    {
        name: "Sidney Edson Mella Neto",
        user_id: 2,
        message: "Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite ",
        contributor: false,
    },
    {
        name: "Sidney Edson Mella Neto",
        user_id: 3,
        message: "Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite ",
        contributor: true,
    },
    {
        name: "Sidney Edson Mella Neto",
        user_id: 2,
        message: "Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite ",
        contributor: false,
    },
    {
        name: "Sidney Edson Mella Neto",
        user_id: 2,
        message: "Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite ",
        contributor: false,
    },
    {
        name: "Sidney Edson Mella Neto",
        user_id: 3,
        message: "Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite ",
        contributor: true,
    },
    {
        name: "Sidney Edson Mella Neto",
        user_id: 2,
        message: "Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite ",
        contributor: false,
    },
    {
        name: "Sidney Edson Mella Neto",
        user_id: 2,
        message: "Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite ",
        contributor: false,
    },
    {
        name: "Sidney Edson Mella Neto",
        user_id: 3,
        message: "Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite ",
        contributor: true,
    },
    {
        name: "Sidney Edson Mella Neto",
        user_id: 2,
        owner: true,
        message: "Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite Giritiquibom paratate unidunite ",
        contributor: false,
    },
];

function GardenChat() {

    return (

        <View style={styles.container}>
            <View style={styles.messagesContainer}>
                <FlatList data={messages} renderItem={({ item, index }) => {

                    return (

                        <View key={index} style={[styles.messageBox, { backgroundColor: getRandomColor(item.user_id) }]}>
                            <Text style={styles.messageUserName}>{item.name}{item.contributor ? " (Contribuidor)" : (item.owner ? " (Dono)" : "")}</Text>
                            <Text style={styles.messageText}>{item.message}</Text>
                        </View>
                    );
                }} />
            </View>
            <View style={styles.messageInputBox}>
                <TextInput text style={styles.messageInput} />
                <Button style={styles.messageInputButton} icon='send'></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: Colors.primary700,
    },

    messagesContainer: {

        flex: 1,
        padding: 15
    },

    messageInputBox: {

        width: '100%',
        height: 80,
        backgroundColor: Colors.primary600,
        padding: 15,
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: 'space-between'
    },

    messageInput: {

        marginVertical: 8,
        width: '85%',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        borderWidth: 1,
        paddingHorizontal: 10
    },

    messageInputButton: {


    },

    messageBox: {

        // width: '100%', 
        flex: 1,
        // height: 40,
        padding: 15,
        marginBottom: 15,
        borderRadius: 4
    },

    messageUserName: {

        color: Colors.primary500,
        fontSize: 17
    },

    messageText: {

        color: Colors.primary700
    }
});

export default GardenChat;