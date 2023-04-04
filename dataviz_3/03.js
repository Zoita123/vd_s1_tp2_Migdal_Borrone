function plotLine(path,id){

d3.csv(path, d3.autoType).then(data => {
  console.log(data) //
  let chart =  Plot.plot({
    marks: [
      Plot.barY(
        data,
        Plot.groupX(
          { y: "count" }, 
          { x: "ocupacion",
          fill: d => (d.ocupacion == "ingeniero aeroespacial" ? "#42a2dc": "#bbd6ed"),} 
        )
      )
    ],
    y: {
      label: "Cantidad de astronautas segun su ocupacion"
    }, 
    marginLeft: 60,
    marginBottom: 50,
    width: 770,
    grid: true,
    x:{
      label: "Ocupación de los astronautas"
    },
    y:{
      label: "Cantidad de astronautas en cada opcupación"
    },
    style:{
      fontFamily: "sans-serif",
      fontSize: "11",
      color: "#0d2e6b",
    }
  })

  d3.select(id).append(() => chart) 
})
}