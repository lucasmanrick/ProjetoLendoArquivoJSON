import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import xmlParsen from 'xml-js';
import api from './src/services/api/api';

export default function App() {
  const [dados, setDados] = useState(null);
  const selecionarArquivo = async () => {
    try { 
      const result = await DocumentPicker.getDocumentAsync();
      console.log(result)

      if(result.canceled === true) {
        console.log('Seleção de arquivo cancelada')
        return;
      }

      const { assets: [{uri, mimeType}], canceled} = result;
      console.log(uri)

      if (mimeType !== 'text/xml') {
        console.log('Arquivo não é um XML')
        return;
      }

      const conteudo = await FileSystem.readAsStringAsync(uri);
      const dadosXML = xmlParsen.xml2json(conteudo, {compact: true, spaces: 4});
      setDados(dadosXML);



    } catch (error) {
      console.error('Erro ao selecionar o arquivo:', error);
    }
  }


  async function registraClientesDoJSON () {
    const response = await api.post('/RegistrarPessoa', {dados:dados})
  }

  return (
    <View style={styles.container}>
      <Button title='Selecionar Arquivo' onPress={selecionarArquivo} />
      {dados ? (
        <View>
          <Text>Dados do Arquivo:</Text>
          <Text>{JSON.stringify(dados)}</Text>
          <Button title='Registrar Cliente' onPress={registraClientesDoJSON} ></Button>
          </View>
      ) : (
        <Text>Nenhum arquivo selecionado</Text>
      )}
      <StatusBar style='auto' />
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
});