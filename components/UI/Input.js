import { StyleSheet, Text, TextInput } from "react-native";
import { Colors } from "../../constants/colors";

function Input({ label, placeholder, onUpdateValue, style, textInputConfig, value }) {

    return (

        <>
            <Text style={styles.inputLabel}>{label}</Text>
            <TextInput
                style={[styles.input, style]}
                placeholder={placeholder}
                placeholderTextColor={Colors.primary400}
                onChangeText={onUpdateValue}
                value={value}
                {...textInputConfig}
            />
        </>
    );
}

const styles = StyleSheet.create({

    inputLabel: {

        textAlign: 'center',
        color: Colors.primary700,
        fontSize: 18
    },

    input: {

        backgroundColor: Colors.primary100,
        borderColor: Colors.primary400,
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 4,
        textAlign: 'center',
        color: Colors.primary500,
        padding: 10,
        fontSize: 18
    },
})

export default Input;