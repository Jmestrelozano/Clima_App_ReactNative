import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { consultarClimaApp } from "./apis/climaApi";
import Formulario from "./components/Formulario";


export default function App() {
  const [Busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const { ciudad, pais } = Busqueda;

  const [consultarApi, setGuardarResultados] = useState(false);

  const [ResultadoClima, setGuardarResultadoClima] = useState([]);

  const [BackgroudColor, setBackgroudColor] = useState("rgb(71,149,212)");
  const ocultarTeclado = () => {
    Keyboard.dismiss();
  };

  const changeBgColor = {
    backgroundColor: BackgroudColor,
  };

  useEffect(() => {
    consultarClimaApp(
      ciudad,
      pais,
      consultarApi,
      setGuardarResultadoClima,
      setGuardarResultados,
      setBackgroudColor
    );
  }, [consultarApi]);
  return (
    <>
      <StatusBar style="dark" backgroundColor="#fff" />
      <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
        <View style={[styles.container, changeBgColor]}>
          <View style={styles.contenido}>
            <Formulario
              Busqueda={Busqueda}
              setBusqueda={setBusqueda}
              ResultadoClima={ResultadoClima}
              setGuardarResultados={setGuardarResultados}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
  },
  app: {},
  contenido: {
    marginHorizontal: "2.5%",
  },
});
