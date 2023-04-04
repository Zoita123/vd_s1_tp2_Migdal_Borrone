function plotLine(path,id){

d3.csv(path, d3.autoType).then(data => {
  console.log(data) //
  let chart =  Plot.plot({
    marks: [

      Plot.line(data.filter(d => d.nacionalidad == "U.S.S.R/Rusia"),
      Plot.groupX({
        y: "mean"
        }, 
{
        x: "anio_mision", 
        y: "mision_hs",
        opacity: 1,
        stroke: "#42a2dc",
        marker: "circle"
      },
      )),
      Plot.line(data.filter(d => d.nacionalidad == "EE.UU."),
      Plot.groupX({
        y: "mean"
        }, 
{
        x: "anio_mision", 
        y: "mision_hs",
        opacity: 1,
        stroke: "#14267e",
        marker: "circle"
      },
      )),
      
    ],
    width: 750,
    heigth: 1000,

  });
  d3.select(id).append(() => chart)

})
}

