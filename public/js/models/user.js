
const postPhone = (user) => {
  return new Promise((resolve,reject) => {
   $.post('api/registerNumber/',user,(response,resul,error) => {
     if (error.status != 200){
      reject(new Error("Error al grabar el telefono"));
    }else if(response.success == false){
      console.log(response);
      resolve(response);
    }else{
       resolve(response);
     }
   });
 });
}

const newCode = (phone) => {
   $.post('api/resendCode/',phone,(req,res) => {
     console.log(req);
     state.user.code = req.data;
    //  state.codigo = req.data;
   });
}
