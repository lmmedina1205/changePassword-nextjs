export default function validation(password: String, confirmPassword: String){
    //lowercase letters for condition
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //capital letters for condition
    const capitals = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    //Numbers for condition
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    //the response, an object that tells the password's status and a message
    const symbol = [ "!", "@", "#", "$", "^", "&", "(", ")", "_", "=", "+", "-", "*", "/", "%", "<", ">", "?", "[", "]", "{", "}"];
    var res = {
      status: true,
      msg: "everything is ok"
    };
    //function to compare two arrays and know if they have at least one value in common
    const ArrayComparator = (array1 : any[], array2 : any[])=>{
        for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
          if (array1[i] === array2[j]) {
            return true;
          }
        }
      }
      return false;
    }

    if (password == confirmPassword){ //confirmation that they are the same
      var lenpass = password.length;
      var desc = []; //a desconstruction of the password to compare it
      for (var i = 0; i<lenpass; i++){
          desc.push(password[i]);
        }
      if(lenpass >= 8){ //if the password has at least 8 characters, it will be compared
        if(!ArrayComparator(capitals, desc)){
          res.status = false;
          // res.msg = "it must be at least 1 capital letter";
          res.msg = "Debe tener al menos 1 letra mayúscula";
        }
        if(!ArrayComparator(letters, desc)){
          res.status = false
          // res.msg = "it must be at least 1 Lowercase letter";
          res.msg = "Debe tener al menos 1 letra minúscula";
        }
        if(!ArrayComparator(numbers, desc)){
          res.status = false;
          // res.msg = "it must be at least 1 number";
          res.msg = "Debe tener al menos 1 número";
        }
        if(!ArrayComparator(symbol, desc)){
          res.status = false;
          // res.msg = "it must be at least 1 symbol";
          res.msg = "Debe tener al menos 1 símbolo";
        }
      }else{
        res.status = false;
        // res.msg = "it must be at least 8 characters";
        res.msg = "Debe tener al menos 8 caracteres";
      }
    }else{
      res.status = false;
      res.msg = "difference";
    }
    return res
  }