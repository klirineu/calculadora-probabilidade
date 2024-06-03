// Calculator.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

const Calculator = () => {
  const [equipeA, setEquipeA] = useState('');
  const [equipeB, setEquipeB] = useState('');
  const [vitoriasA, setVitoriasA] = useState('');
  const [empatesA, setEmpatesA] = useState('');
  const [derrotasA, setDerrotasA] = useState('');
  const [vitoriasB, setVitoriasB] = useState('');
  const [empatesB, setEmpatesB] = useState('');
  const [derrotasB, setDerrotasB] = useState('');
  const [cartoesVermelhosA, setCartoesVermelhosA] = useState('');
  const [cartoesVermelhosB, setCartoesVermelhosB] = useState('');
  const [golsMarcadosA, setGolsMarcadosA] = useState('');
  const [golsSofridosA, setGolsSofridosA] = useState('');
  const [golsMarcadosB, setGolsMarcadosB] = useState('');
  const [golsSofridosB, setGolsSofridosB] = useState('');
  const [ambasMarcamA, setAmbasMarcamA] = useState('');
  const [ambasMarcamB, setAmbasMarcamB] = useState('');
  const navigation = useRouter();

  const handleCalculate = () => {
    const v1 = parseInt(vitoriasA) + parseInt(derrotasB) / 10 * 4.5;
    const x = parseInt(empatesA) + parseInt(empatesB) / 10 * 4.5;
    const v2 = parseInt(vitoriasB) + parseInt(derrotasA) / 10 * 4.5;

    const p1 = ((parseInt(vitoriasA) + parseInt(derrotasB)) / 2) * 0.1;
    const px = ((parseInt(empatesA) + parseInt(empatesB)) / 2) * 0.1;
    const p2 = ((parseInt(vitoriasB) + parseInt(derrotasA)) / 2) * 0.1;

    let golsMarcadossA = parseInt(golsMarcadosA) + parseInt(cartoesVermelhosB) * 3;
    let golsSofridossA = parseInt(golsSofridosA) - parseInt(cartoesVermelhosB) * 2;
    let golsMarcadossB = parseInt(golsMarcadosB) + parseInt(cartoesVermelhosA) * 3;
    let golsSofridossB = parseInt(golsSofridosB) - parseInt(cartoesVermelhosA) * 2;

    if (parseInt(derrotasA) > 6) {
      golsMarcadossA += 3;
    }
    if (parseInt(derrotasB) > 6) {
      golsMarcadossB += 3;
    }

    const btts = ((parseInt(ambasMarcamA) + parseInt(ambasMarcamB)) / 2) * 0.1;
    const inclinacaoA = (golsMarcadossA - golsSofridossA) + v1;
    const inclinacaoB = (golsMarcadossB - golsSofridossB) + v2;
    const dhipA = golsMarcadossA - golsSofridossA;
    const dhipB = golsMarcadossB - golsSofridossB;
    const dhipT = dhipA - dhipB;
    const golsTotais = golsMarcadossA - golsSofridossA;
    const golsSofridosTotais = golsMarcadossB - golsSofridossB;
    const diferencaGolosTotal = golsTotais - golsSofridosTotais;

    let duplaHipotesse = '';
    if (inclinacaoB === inclinacaoA) {
      console.log('a')
      duplaHipotesse = 'equilibrado';
    } else if (dhipT >= 15 || dhipT <= -15) {
      duplaHipotesse = '12';
      console.log('b')
    } else if (inclinacaoB > inclinacaoA) {
      duplaHipotesse = '2x';
      console.log('c')
    } else if (inclinacaoA > inclinacaoB) {
      console.log('d')
      duplaHipotesse = '1x';
    }
    console.log(inclinacaoA, inclinacaoB)

    let classificacao = '';
    if (diferencaGolosTotal >= 15) {
      classificacao = 'jogo dificil de haver empate';
    } else if (diferencaGolosTotal >= 10) {
      classificacao = 'jogo muito desequilibrado';
    } else if (diferencaGolosTotal >= 5) {
      classificacao = 'jogo desequilibrado';
    } else if (diferencaGolosTotal >= 0) {
      classificacao = 'jogo equilibrado';
    } else if (diferencaGolosTotal >= -5) {
      classificacao = 'jogo equilibrado';
    } else if (diferencaGolosTotal >= -10) {
      classificacao = 'jogo muito desequilibrado';
    } else if (diferencaGolosTotal >= -15) {
      classificacao = 'jogo dificil de haver empate';
    } else {
      classificacao = 'jogo muito desequilibrado';
    }

    const mediaGols = (golsMarcadossA + golsMarcadossB + golsSofridossA + golsSofridossB) / 10;
    const porcentagem = mediaGols * 10 / 100 / 2;
    let overUnder = '';
    if (porcentagem > 0.27) {
      overUnder = '+2.5';
    } else if (porcentagem < 0.18) {
      overUnder = '-2.5';
    } else if (porcentagem < 0.1) {
      overUnder = '-1.5';
    } else {
      overUnder = '+1.5';
    }

    const simple = inclinacaoA > inclinacaoB ? 'V1' : inclinacaoB > inclinacaoA ? 'V2' : 'Empate';
    const bts = btts > 0.55 ? 'SIM' : btts < 0.45 ? 'NAO' : 'dupla hipotesse';

    let classificacaoResultado = '';
    if (diferencaGolosTotal >= 15) {
      classificacaoResultado = overUnder;
    } else if (diferencaGolosTotal >= 10) {
      classificacaoResultado = simple;
    } else if (diferencaGolosTotal >= 5) {
      classificacaoResultado = duplaHipotesse;
    } else if (diferencaGolosTotal >= 0) {
      classificacaoResultado = duplaHipotesse;
    } else if (diferencaGolosTotal >= -5) {
      classificacaoResultado = duplaHipotesse;
    } else if (diferencaGolosTotal >= -10) {
      classificacaoResultado = simple;
    } else if (diferencaGolosTotal >= -15) {
      classificacaoResultado = overUnder;
    } else {
      classificacaoResultado = bts;
    }

    const item = {
      resultado: classificacaoResultado,
      resultado2: `${equipeA} VS ${equipeB}`,
      simple,
      overUnder,
      bts,
      duplaHipotesse,
      percentagemP1: p1.toFixed(2),
      percentagemPX: px.toFixed(2),
      percentagemP2: p2.toFixed(2),
      percentagemBtts: btts.toFixed(2),
    }

    navigation.push({ pathname: 'results', params: item });
  }

  return (
    <ScrollView style={styles.container}>
      <Text>Equipe A:</Text>
      <TextInput style={styles.input} onChangeText={setEquipeA} value={equipeA} />

      <Text>Equipe B:</Text>
      <TextInput style={styles.input} onChangeText={setEquipeB} value={equipeB} />

      <Text>Vitórias Equipe A:</Text>
      <TextInput style={styles.input} onChangeText={setVitoriasA} value={vitoriasA} keyboardType="numeric" />

      <Text>Empates Equipe A:</Text>
      <TextInput style={styles.input} onChangeText={setEmpatesA} value={empatesA} keyboardType="numeric" />

      <Text>Derrotas Equipe A:</Text>
      <TextInput style={styles.input} onChangeText={setDerrotasA} value={derrotasA} keyboardType="numeric" />

      <Text>Vitórias Equipe B:</Text>
      <TextInput style={styles.input} onChangeText={setVitoriasB} value={vitoriasB} keyboardType="numeric" />

      <Text>Empates Equipe B:</Text>
      <TextInput style={styles.input} onChangeText={setEmpatesB} value={empatesB} keyboardType="numeric" />

      <Text>Derrotas Equipe B:</Text>
      <TextInput style={styles.input} onChangeText={setDerrotasB} value={derrotasB} keyboardType="numeric" />

      <Text>Cartões Vermelhos Equipe A:</Text>
      <TextInput style={styles.input} onChangeText={setCartoesVermelhosA} value={cartoesVermelhosA} keyboardType="numeric" />

      <Text>Cartões Vermelhos Equipe B:</Text>
      <TextInput style={styles.input} onChangeText={setCartoesVermelhosB} value={cartoesVermelhosB} keyboardType="numeric" />

      <Text>Gols Marcados Equipe A:</Text>
      <TextInput style={styles.input} onChangeText={setGolsMarcadosA} value={golsMarcadosA} keyboardType="numeric" />

      <Text>Gols Sofridos Equipe A:</Text>
      <TextInput style={styles.input} onChangeText={setGolsSofridosA} value={golsSofridosA} keyboardType="numeric" />

      <Text>Gols Marcados Equipe B:</Text>
      <TextInput style={styles.input} onChangeText={setGolsMarcadosB} value={golsMarcadosB} keyboardType="numeric" />

      <Text>Gols Sofridos Equipe B:</Text>
      <TextInput style={styles.input} onChangeText={setGolsSofridosB} value={golsSofridosB} keyboardType="numeric" />

      <Text>Ambas Marcam Equipe A:</Text>
      <TextInput style={styles.input} onChangeText={setAmbasMarcamA} value={ambasMarcamA} keyboardType="numeric" />

      <Text>Ambas Marcam Equipe B:</Text>
      <TextInput style={styles.input} onChangeText={setAmbasMarcamB} value={ambasMarcamB} keyboardType="numeric" />

      <Button title="Calcular" onPress={handleCalculate} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 8,
  },
});

export default Calculator;
