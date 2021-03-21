import { Alert } from "react-native";
import { calculatorClima } from "../utils/calculatorClima";

export const consultarClimaApp = async (
  ciudad,
  pais,
  consultarClimaApp,
  setGuardarResultadoClima,
  setGuardarResultados,
  setBackgroudColor
) => {
  if (consultarClimaApp === true) {
    const apiKey = "54ca91dea542f65a4ab795a615b682f2";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`;
    console.log("Consultando la api", url);

    try {
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      setGuardarResultadoClima(resultado);
      setGuardarResultados(false);

      const kelvin = 273.15;
      const { main } = resultado;
      const actual = main.temp - kelvin;

      calculatorClima(actual,setBackgroudColor);
    } catch (error) {
      Alert.alert(
        "Error",
        "No hay resultados, imtemta con otro ciudad o pais",
        [{ text: "Ok" }]
      );
    }
  }
};
