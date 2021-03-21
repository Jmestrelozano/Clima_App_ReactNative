import { Picker } from "@react-native-community/picker";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Clima from "./Clima";

const Formulario = ({Busqueda,setBusqueda,ResultadoClima,setGuardarResultados}) => {
  const [animaciones] = useState(new Animated.Value(1))



const {ciudad,pais} = Busqueda

  const ValidarCampos = () =>{
   if(ciudad.trim() === "" || pais.trim() === "") {
      mostrarAlerta();
    }else{
     console.log("Consultado api") 
     setGuardarResultados(true)
    }
  }

  const mostrarAlerta = () =>{
    Alert.alert(
      "Error",
      "Agrega una ciudad y pais para la busqueda",
      [{text:"Entendido"}]
    )
  }

  const animacionEntrada =() =>{
Animated.spring(animaciones,{
  toValue:.9,
  useNativeDriver: false 
}).start();
  }

  const animacionSalida =()=>{
    Animated.spring(animaciones,{
      toValue:1,
      friction:1,
      tension:30,
      useNativeDriver: false 
    }).start();
    setGuardarResultados(false)
  }

  const estiloAnimacion ={
    transform:[{scale:animaciones}]
  }
  return (
    <>
    <Clima resultado={ResultadoClima} />
    <View style={styles.formulario}>
      <View>
        <TextInput value={ciudad} onChangeText={(text)=>setBusqueda({...Busqueda,ciudad:text})}  style={styles.input} placeholder="Ciudad" placeholderTextColor="#666" />
      </View>
      <View>
        <Picker selectedValue={pais} onValueChange={(text) =>setBusqueda({...Busqueda,pais:text})}  style={styles.picker} >
          <Picker.Item color="#000" label="-- Seleccione un pais --" value="" />
          <Picker.Item label="Estados Unidos" value="US" />
          <Picker.Item label="Mexico" value="MX" />
          <Picker.Item label="Argentina" value="AR" />
          <Picker.Item label="Colombia" value="CO" />
          <Picker.Item label="Costa Rica" value="CR" />
          <Picker.Item label="España" value="ES" />
          <Picker.Item label="Peru" value="PE" />
        </Picker>
      </View>
      <TouchableWithoutFeedback onPressIn={()=>{animacionEntrada(),ValidarCampos()}} onPressOut={()=>{animacionSalida()}}>
          <Animated.View style={[styles.btnBuscar,estiloAnimacion]}>
              <Text style={styles.textoBuscar}>Buscar Clima</Text>
          </Animated.View>
        
      </TouchableWithoutFeedback>
    </View>
    </>
  );
};

export default Formulario;

const styles = StyleSheet.create({
  formulario: {
    marginTop: 100,
  },input:{
    padding:10,
    height:50,
    backgroundColor:"#fff",
    fontSize:13,
    marginBottom:20,
    textAlign:"center"
  },
  picker:{
    height:120,
    backgroundColor:"#fff",
    color:"#000"
  },
  btnBuscar:{
    marginTop:50,
    backgroundColor:"#000",
    padding:10,
    justifyContent:"center"
  },
  textoBuscar:{
    color:"#fff",
    fontWeight:"bold",
    textTransform:"uppercase",
    textAlign:"center",
    fontSize:13
  }
});
