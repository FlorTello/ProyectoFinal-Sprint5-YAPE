
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
   $.post('api/resendCode/',phone,(res,req) => {
     console.log(req);
     state.user.code = res.data;
    //  state.codigo = req.data;
   });
};

const createUser = (user) => {
  return new Promise((resolve,reject) => {
   $.post('api/createUser/',user,(response,resul,error) => {
     console.log(response);
     if (error.status != 200){
      reject(new Error("Error al grabar el usuario"));
    }else if(response.success == false){
      resolve(response);
    }else{
       resolve(response);
     }
   });
 });
}
