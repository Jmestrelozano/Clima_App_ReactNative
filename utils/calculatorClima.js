 export const calculatorClima = (actual ,setBackgroudColor) =>{
    if (actual < 10) {
        setBackgroudColor("rgb(105,108,149)");
        console.log("frio")
      } else if (actual >= 10 && actual < 25) {
        setBackgroudColor("rgb(71,149,212)");
        console.log("tibio")
      } else {
        setBackgroudColor("rgb(178,28,61)");
        console.log("Hot")
      }

      return actual
}