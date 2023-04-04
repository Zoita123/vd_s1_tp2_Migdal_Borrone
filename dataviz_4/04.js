function plotLine(path,id){

d3.csv(path, d3.autoType).then(data => {
  console.log(data) 
  let chart =  Plot.plot({
    height: 500,
    marginLeft: 70,
    width: 750,
   
    x: {
      label: "anio de las misiones →",
      nice: true,
      tickPadding: 10,
      fill: "#14267e"

    },
    y: {
      grid: true,
      label: "← Civil · Militar →",
      labelAnchor: "center",
      tickFormat: Math.abs,
      tickPadding: 10,
      fill: "#14267e"
    },
    marks: [
      Plot.dot(data, Plot.stackY2({
        x: d => Number(d.anio_mision),
        y: d => d.status === "civil" ? 1 : d.status === "militar" ? -1 : 0,
        fill: d => d.status == "civil" ? "#14267e": "#42a2dc"
      })),
      
      Plot.ruleY([0]),

     
    ],
    marginBottom: 50,
  })   

d3.select(id).append(() => chart)

})
}
