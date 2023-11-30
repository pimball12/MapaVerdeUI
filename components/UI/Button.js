import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";
import { Ionicons } from '@expo/vector-icons';

function Button({style, onPress, children, light, icon})   {

    return (

        <Pressable onPress={onPress} style={({pressed}) => [style, styles.button, light && styles.lightButton, pressed && styles.pressed]}>
            <Ionicons style={styles.icon} name={icon} size={25} color={light ? Colors.primary700 : Colors.primary100} />
            <Text style={[styles.text, light && styles.lightText]}>{children}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({

    button: {

        padding: 10,
        backgroundColor: Colors.primary600,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {

        // textAlign: 'center',
        color: Colors.primary100,
        fontSize: 18
    },

    lightButton: {

        backgroundColor: Colors.primary300,
        borderColor: Colors.primary400,
        // borderWidth: 1
    },

    lightText:   {

        color: Colors.primary700
    },

    pressed: {

        opacity: 0.7
    }, 

    icon: {

        marginRight: 6
    }
})

export default Button;