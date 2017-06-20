const getNumber = (id,callback) => {
  $.get('api/registerNumber/'+id,(data) => {
    if (data.status != 200) callback(new Error("Error al obtener la peli"));
    callback(null,data);
  })
}
