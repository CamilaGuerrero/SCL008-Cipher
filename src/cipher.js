window.cipher = {
  //se declara la función con los parámetros
  encode: (inputTextCipher, offsetCipher) => {
    //se establece una variable vacía que recibirá el texto a cifrar
    let encodeText = "";
    //con un for se recorre el texto a cifrar
    for(let i = 0; i < inputTextCipher.length; i++) {
    //sacar el código ASCII en cada recorrido
      let asciiTextCipher = inputTextCipher[i].charCodeAt();
      if( asciiTextCipher >= 65 && asciiTextCipher <= 90 ) {
        let cipherUpper = (asciiTextCipher - 65 + parseInt(offsetCipher)) % 26 + 65;
        encodeText += String.fromCharCode(cipherUpper);
      }
      else if ( asciiTextCipher >=97 && asciiTextCipher <= 122 ) {
           let cipherLow = (asciiTextCipher - 97 + parseInt(offsetCipher)) % 26 + 97;
          encodeText += String.fromCharCode(cipherLow);
      }
      else if (asciiTextCipher >=48 && asciiTextCipher <= 57 ){
          let cipherNumber = (asciiTextCipher - 48 + parseInt(offsetCipher)) % 10 + 48;
          encodeText += String.fromCharCode(cipherNumber);
      } else {
          encodeText += String.fromCharCode(asciiTextCipher);
      }    }
        return encodeText;
 },
 decode: (inputTextDecipher, offsetDecipher) => {
  //se establece una variable vacía que recibirá el texto a cifrar
  let decodeText = "";
  //con un for se recorre el texto a cifrar
  for(let i = 0; i < inputTextDecipher.length; i++) {
  //sacar el código ASCII en cada recorrido
    let asciiTextDecipher = inputTextDecipher[i].charCodeAt();
    if( asciiTextDecipher >= 65 && asciiTextDecipher <= 90 ) {
      let decipherUpper = (asciiTextDecipher - 65 - parseInt(offsetDecipher)) % 26 + 65;
      decodeText += String.fromCharCode(decipherUpper);
    } else if ( asciiTextDecipher >=97 && asciiTextDecipher <= 122 ) {
         let decipherLow = (asciiTextDecipher - 97 - parseInt(offsetDecipher)) % 26 + 97;
        decodeText += String.fromCharCode(decipherLow);
    } else if (asciiTextDecipher >=48 && asciiTextDecipher <= 57 ){
        let decipherNumber = (asciiTextDecipher - 48 - parseInt(offsetDecipher)) % 10 + 48;
        decodeText += String.fromCharCode(decipherNumber);
    } else {
        decodeText += String.fromCharCode(asciiTextDecipher);
    }    
    }
      return decodeText;
}
};