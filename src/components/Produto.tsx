import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Certifique-se de importar o Picker corretamente
import * as ImagePicker from 'expo-image-picker';
import { styles } from './ProdutoStyle';  // Importando o arquivo de estilos

const Produto = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valorCusto, setValorCusto] = useState('');
  const [valorVenda, setValorVenda] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [imagem, setImagem] = useState('');

  const selecionarImagem = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!resultado.canceled) {
      setImagem(resultado.assets[0].uri);
    }
  };

  const salvarProduto = () => {
    if (!nome || !descricao || !valorCusto || !valorVenda || !fornecedor) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Produto</Text>

      {/* Campo de nome do produto */}
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={nome}
        onChangeText={setNome}
      />

      {/* Campo de descrição do produto */}
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />

      {/* Campo de valor de custo */}
      <TextInput
        style={styles.input}
        placeholder="Valor de Custo"
        keyboardType="numeric"
        value={valorCusto}
        onChangeText={setValorCusto}
      />

      {/* Campo de valor de venda */}
      <TextInput
        style={styles.input}
        placeholder="Valor de Venda"
        keyboardType="numeric"
        value={valorVenda}
        onChangeText={setValorVenda}
      />

      {/* Usando o Picker para selecionar o fornecedor */}
      <Text style={styles.label}>Fornecedor:</Text>
      <Picker
        selectedValue={fornecedor}
        onValueChange={(itemValue) => setFornecedor(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Selecione o Fornecedor" value="" />
        <Picker.Item label="Fornecedor 1" value="Fornecedor 1" />
        <Picker.Item label="Fornecedor 2" value="Fornecedor 2" />
        <Picker.Item label="Fornecedor 3" value="Fornecedor 3" />
      </Picker>

      {/* Botão para selecionar a imagem */}
      <TouchableOpacity onPress={selecionarImagem} style={styles.button}>
        <Text style={styles.buttonText}>Selecionar Imagem</Text>
      </TouchableOpacity>

      {/* Exibindo a imagem selecionada, se houver */}
      {imagem && <Image source={{ uri: imagem }} style={styles.imagem} />}

      {/* Botão para salvar o produto */}
      <Button title="Cadastrar Produto" onPress={salvarProduto} />
    </View>
  );
};

export default Produto;

