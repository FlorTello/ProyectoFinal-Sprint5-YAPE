const getNumber = (user) => {
  $.post('api/registerNumber/',user,(response,resul,error) => {
    // console.log(response); // {Object {success: false, message: "Parametros incorrectos", data: Object}}
    // console.log(resul); //success
    // console.log(error); //Object {readyState: 4, getResponseHeader: function, getAllResponseHeaders: function, setRequestHeader: function, overrideMimeType: function…}abort: function (a)always: function ()catch: function (a)done: function ()fail: function ()getAllResponseHeaders: function ()getResponseHeader: function (a)overrideMimeType: function (a)pipe: function ()progress: function ()promise: function (a)readyState: 4responseJSON: ObjectresponseText: "{"success":false,"message":"Parametros incorrectos","data":{}}"setRequestHeader: function (a,b)state: function ()status: 200statusCode: function (a)statusText: "OK"then: function (b,d,e)__proto__: Object
    if (error.status == 200){
      console.log(response.data);
    }else{
      console.log('Error al cargar DB');
    }
    return response;
  });
}
