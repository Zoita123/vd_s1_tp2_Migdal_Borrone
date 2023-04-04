d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data) //
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({ //genera un elemento vectorial (genera un grafico que lo guardas en la variable llamada chart)
    marks: [
      Plot.dot(data, { 
        x: 'genero',
        y: 'anio_nacimiento',

      }),
    ],
   
  }) //le pasas un objeto que tiene propiedades (una es la marca)
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart) // lo agregas al index.html--> lo agregas dinamicamente
})
