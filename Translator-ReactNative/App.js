import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-community/picker';
import Spacer from './src/components/Spacer';
import { Text, Input, Button } from 'react-native-elements';
import useTranslation from './src/hook/useTranslation';

export default function App() {
  const [content, setContent] = useState('');
  const [translateType, setTranslateType] = useState('pirate');
  const [getTranslation, translated, errorMessage, showLoading] = useTranslation();

  return (
    <View style={styles.container}>
      {showLoading ? 
      <ActivityIndicator />
      : <>
      <Text h2>Welcome to Translator</Text>
      <Spacer />
      <Input label="Translator" 
                value={content}
                onChangeText={setContent}
                autoCapitalize="none"
                autoCorrect={false}
                multiline = {true}
                numberOfLines = {4}
                placeholder="Type words/sentence to translate"/>
      <Picker
        selectedValue={translateType}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue) => setTranslateType(itemValue)}>
        <Picker.Item label="Pirate" value="pirate" />
        <Picker.Item label="Yoda" value="yoda" />
        <Picker.Item label="Valspeak" value="valspeak" />
        <Picker.Item label="Minion" value="minion" />
      </Picker>
      <Spacer />
      <Button title={translateType.toUpperCase() + '-FY!'}
            disabled={!content} 
            onPress={() => getTranslation(content, translateType)} />
        <Spacer />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      {translated ? <Text>{translated}</Text> : null}
      </>}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: 'red'
  }
});
