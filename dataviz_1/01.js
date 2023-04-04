function plotLine(path,id){

d3.csv(path, d3.autoType).then(data => {
  console.log(data) 
  let chart = Plot.plot({ 
    marks: [
      Plot.barX(data,

        {y: "nacionalidad", 
        sort:{ y: "x", reverse:true},
      
        x: "mision_hs",
        fill: d => (d.nacionalidad == "U.S.S.R/Rusia" ? "#42a2dc": d.nacionalidad == "EE.UU." ? "#42a2dc": "#bbd6ed"),
        })
    ],
    marginLeft: 125,
    marginBottom: 40,
    width: 750,
    height:400,
    grid: true,
    nice: true,
    
    style: {
      color: "black",
      fontFamily: "system-ui",
      fontSize: "10px",
      overflow: "visible"
    },
    x:{
      label:"Duración de las misiones (hs)" 
    },
    y: {
      label:""
    }
   
  })
  d3.select(id).append(() => chart) 
})

}

 
