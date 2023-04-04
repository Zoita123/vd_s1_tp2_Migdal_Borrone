d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data) //
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: "mision_hs",
        y: "anio_mision",
        fill: "genero",
      
      }),
    ],
    grid: true,
    line: true,
    nice: true,
 
  });

   //le pasas un objeto que tiene propiedades (una es la marca)
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart) // lo agregas al index.html--> lo agregas dinamicamente
})
