import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Clima = ({ resultado }) => {
  console.log("me llamo desde clima", resultado);

  const { name, main } = resultado;
  if (!name) return null;

  const kelvin = 273.15;
  console.log(resultado);
  return (
    <View style={styles.clima}>
      <View style={styles.infoClima}>
        <Text style={[styles.texto, styles.actual]}>
          {parseInt(main.temp - kelvin)}
        </Text>
        <Text style={styles.temperatura}>°C</Text>
        <Image
          style={{ width: 66, height: 50 }}
          source={{
            uri: `http://openweathermap.org/img/w/${resultado.weather[0].icon}.png`,
          }}
        />
      </View>

      <View style={styles.temperaturas}>
        <Text>
          Min{" "}
          <Text style={styles.temperatura}>
            {parseInt(main.temp_min - kelvin)}°C
          </Text>
        </Text>
        <Text>{"   "}</Text>
        <Text>
          Max{" "}
          <Text style={styles.temperatura}>
            {parseInt(main.temp_max - kelvin)}°C
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Clima;

const styles = StyleSheet.create({
  clima: {
    display: "flex",
    justifyContent: "center",
  },
  infoClima: {
    flexDirection: "row",
    justifyContent: "center",
  },
  texto: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
  },
  actual: {
    fontSize: 60,
    marginRight: 0,
    fontWeight: "bold",
  },
  temperatura: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  temperaturas: {
    color: "#fff",
    flexDirection: "row",
    justifyContent: "center",
  },
});
