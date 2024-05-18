import { useState } from "react";
import { StyleSheet, TextInput, View, Text, Button } from "react-native";

const Calculator = () => {

    const [firstNum, setFirstNum] = useState(0);
    const [secondNum, setSecondNum] = useState(0);
    const [result, setResult] = useState(0);

    const calculate = () => {
        const sum = parseFloat(firstNum) + parseFloat(secondNum);
        setResult(sum);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Adding Two Numbers</Text>
            <TextInput 
                style={styles.inputStyle}
                placeholder="First Number"
                keyboardType="numeric"
                value={firstNum}
                onChangeText={setFirstNum}/>
            <TextInput
             style={styles.inputStyle}
             placeholder="Second Number"
             keyboardType="numeric"
             value={secondNum}
             onChangeText={setSecondNum}
            />
            <Button style={styles.buttonStyle} title="Add Two Number" onPress={calculate} />
            <Text style={styles.result}>
                Total: {result != null ? result : ''}
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 16
    },
    inputStyle: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 2,
        marginBottom: 10,
        paddingHorizontal: 16
    },
    buttonStyle:{
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 2,
        marginBottom: 10,
        paddingHorizontal: 16
        
    },
    result: {
        marginTop: 20,
        fontSize: 18
    }

});

export default Calculator;
