const getNumber = () => {
  $.get('api/registerNumber/',(data) => {
    if (data.status != 200) callback(new Error("Error al obtener la peli"));
    // callback(null,data);
    console.log(data.status);
  })
}
