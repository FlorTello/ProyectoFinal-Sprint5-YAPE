const getUser = (id,callback) => {
  $.get('api/registerNumber/'+id,(data) => {
    if (data.status != 200) callback(new Error("Error al obtener la peli"));
    callback(null,data);
  })
}

const postPhone = (user) => {
  return new Promise((resolve,reject) => {
   $.post('api/registerNumber/',user,(response,resul,error) => {
     resolve(response);
     // console.log(error); //Object {readyState: 4, getResponseHeader: function, getAllResponseHeaders: function, setRequestHeader: function, overrideMimeType: function…}abort: function (a)always: function ()catch: function (a)done: function ()fail: function ()getAllResponseHeaders: function ()getResponseHeader: function (a)overrideMimeType: function (a)pipe: function ()progress: function ()promise: function (a)readyState: 4responseJSON: ObjectresponseText: "{"success":false,"message":"Parametros incorrectos","data":{}}"setRequestHeader: function (a,b)state: function ()status: 200statusCode: function (a)statusText: "OK"then: function (b,d,e)__proto__: Object
     if (error.status == 200){
      //  state.codigo = response.data.code;
     }else{
       console.log('Error al cargar DB');
     }
     state.user = response.data;
     console.log(state.user.phone);
     resolve("dato guardado");
   });
 });
}

const newCode = (phone) => {
   $.post('api/resendCode/',phone,(req,res) => {
     console.log(req);
     state.user = res.data;
   });
}
