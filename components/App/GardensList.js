import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import { useContext, useEffect, useState } from "react";
import { getRequest } from "../../util/http";
import { AppContext } from "../../store/app-context";
import { getHours } from "../../util/date";

function GardensList({navigation}) {

    const appContext = useContext(AppContext);

    const [gardens, setGardens] = useState([]);

    useEffect(() => {

        (async () => {

            const gardensFetched = await getRequest('/api/gardens?owner&main_picture', appContext.auth.token);
            setGardens(gardensFetched.data.data);
            // console.log(gardens);
        })();
    }, []);

    function gardenClickHandler(id)   {

        navigation.navigate('Garden', {
            
            id: id
        })
    }

    return (
        <View style={styles.container}>
            <FlatList style={styles.list} data={gardens} renderItem={({ item, index }) => {

                return (

                    <Pressable style={({ pressed }) => [{}, pressed && styles.pressed]} onPress={gardenClickHandler.bind(this, item.id)}>
                        <View style={[styles.innerContainer]}>
                            <Image style={styles.image} source={{ uri: 'http://200.203.185.183:8000/api/images/display/' + item.main_picture.file }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={{ color: Colors.primary700 }}>{item.name}</Text>
                                <Text style={{ color: Colors.primary600 }}>{getHours(new Date(item.opening_time))} - {getHours(new Date(item.closing_time))}</Text>
                                <Text style={{ color: Colors.primary200 }}>{item.owner.name}</Text>
                                <Text style={{ color: Colors.primary600 }}>{item.description}</Text>
                            </View>
                        </View>
                    </Pressable>
                )
            }} />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        padding: 20,
        backgroundColor: Colors.primary100
    },

    image: {

        width: 100,
        height: 100,
        borderRadius: 4
    },

    list: {

        flex: 1,
        backgroundColor: Colors.primary100,
    },

    innerContainer: {

        marginBottom: 15,
        padding: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Colors.primary400,
        backgroundColor: Colors.primary400,
        flexDirection: 'row'
    },

    itemText: {

        color: Colors.primary100
    },

    pressed: {

        opacity: 0.7
    }
});

export default GardensList;