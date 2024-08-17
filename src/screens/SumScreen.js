import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SumScreen = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);

  const calculateSum = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    if (!isNaN(number1) && !isNaN(number2)) {
      setSum(number1 + number2);
    } else {
      setSum('Entrada inválida');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Ingrese dos números para calcular su suma:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Número 1"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Número 2"
        value={num2}
        onChangeText={setNum2}
      />
      <Button title="Calcular Suma" onPress={calculateSum} />
      {sum !== null && (
        <Text style={styles.result}>Suma: {sum}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    color: '#04395E',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color: '#04395E',
  },
  result: {
    marginTop: 12,
    fontSize: 18,
    color: '#04395E',
  },
});

export default SumScreen;
