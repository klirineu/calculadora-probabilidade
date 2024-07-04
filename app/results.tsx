// Results.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useLocalSearchParams } from 'expo-router';

const Results = () => {
  const {
    resultado,
    resultado2,
    simple,
    overUnder,
    bts,
    duplaHipotesse,
    percentagemP1,
    percentagemPX,
    percentagemP2,
    percentagemBtts,
  } = useLocalSearchParams()

  return (
    <View style={styles.container}>
      <Text style={[styles.textResult, { marginBottom: 50, marginTop: -50, fontSize: 50 }]}>{resultado2}</Text>
      <Text style={styles.text}>Simples: {simple}</Text>
      <Text style={styles.text}>Over/Under: {overUnder}</Text>
      <Text style={styles.text}>Btts: {bts}</Text>
      <Text style={styles.text}>Dupla Hipótese: {duplaHipotesse}</Text>
      <Text style={styles.text}>Percentagem v1: {percentagemP1}</Text>
      <Text style={styles.text}>Percentagem vX: {percentagemPX}</Text>
      <Text style={styles.text}>Percentagem v2: {percentagemP2}</Text>
      <Text style={styles.text}>Percentagem BTS: {percentagemBtts}</Text>
      <Text style={[styles.textResult, { fontWeight: "bold", fontSize: 32 }]}>Nossa Aposta: {resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: "left",
    alignSelf: "flex-start"
  },
  textResult: {
    fontSize: 30,
    marginTop: 15,
    marginBottom: 15,
    textAlign: "center",
    alignSelf: "center"
  }
});

export default Results;
