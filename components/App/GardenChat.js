import { useContext, useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../../components/UI/Button";
import { Colors } from "../../constants/colors";
import { AppContext } from "../../store/app-context";
import { getRequest, postRequest } from "../../util/http";
import LoadingOverlay from "../UI/LoadingOverlay";

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

function GardenChat({ route }) {

    const appContext = useContext(AppContext);

    const [messages, setMessages] = useState([]);
    const [garden, setGargen] = useState();
    const [messageText, setMessageText] = useState('');
    const [loading, setLoading] = useState(false);

    async function fetchMessages() {

        const messagesFetched = await getRequest(`/api/messages?user&filter[garden_id]=${route.params.id}&sort=-id`, appContext.auth.token);
        const gardenFetched = await getRequest(`/api/gardens/${route.params.id}?owner`, appContext.auth.token);
        console.log(gardenFetched);
        setMessages(messagesFetched.data.data);
        setGargen(gardenFetched.data.data);
    }

    useEffect(() => {

        (async () => {

            // console.log('EFFECT');
            await fetchMessages();
        })();
    }, []);

    function sendMessage() {

        (async () => {

            setLoading(true);

            const payload = {

                text: messageText,
                user_id: appContext.auth.user.id,
                garden_id: route.params.id
            };

            const res = await postRequest('/api/messages', payload, appContext.auth.token);

            console.log(res.data);

            setMessageText('');

            // console.log('SEND');
            await fetchMessages();

            setLoading(false);
        })();
    }

    function updateMessages() {

        (async () => {

            // console.log('UPDATE');
            setLoading(true);
            await fetchMessages();
            setLoading(false);;
        })();
    }

    if (!messages || !garden || loading) {

        return <LoadingOverlay />
    }

    return (

        <View style={styles.container}>
            <View style={styles.messagesContainer}>
                <FlatList
                    inverted
                    data={messages}
                    renderItem={({ item, index }) => {

                        return (

                            <View key={index} style={[styles.messageBox, { backgroundColor: getRandomColor(item.user.id) }]}>
                                <Text style={styles.messageUserName}>{item.user.name} {item.user.id == garden.owner.id ? ' (Dono)' : ''}</Text>
                                <Text style={styles.messageText}>{item.text}</Text>
                            </View>
                        );
                    }}
                />
            </View>
            <View style={styles.messageInputBox}>
                <Button style={styles.messageInputButton} onPress={updateMessages} icon='reload'></Button>
                <TextInput text style={styles.messageInput} value={messageText} onChangeText={text => setMessageText(text)} />
                <Button style={styles.messageInputButton} onPress={sendMessage} icon='send'></Button>
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
        width: '75%',
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