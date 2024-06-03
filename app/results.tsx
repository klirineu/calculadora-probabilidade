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
      <Text>Resultado: {resultado}</Text>
      <Text>Resultado 2: {resultado2}</Text>
      <Text>Simple: {simple}</Text>
      <Text>Over/Under: {overUnder}</Text>
      <Text>BTS: {bts}</Text>
      <Text>Dupla Hipótese: {duplaHipotesse}</Text>
      <Text>Percentagem P1: {percentagemP1}</Text>
      <Text>Percentagem PX: {percentagemPX}</Text>
      <Text>Percentagem P2: {percentagemP2}</Text>
      <Text>Percentagem BTS: {percentagemBtts}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Results;
