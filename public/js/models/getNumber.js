const getNumber = (user) => {
  $.post('api/registerNumber/',(user,response) => {
    console.log(response);
    if (response == 'success'){
    }else{
      console.log(user.message);
    }
    // callback(null,data);
  });
}
