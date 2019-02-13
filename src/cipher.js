window.cipher = {
  encode: (inputTextCipher, offsetCipher) => {
    let encodeText = "";
    for(let i = 0; i < inputTextCipher.length; i++) {
      let asciiTextCipher = inputTextCipher[i].charCodeAt();
      if( asciiTextCipher >= 65 && asciiTextCipher <= 90 ) {
        let cipherUpper = (asciiTextCipher - 65 + parseInt(offsetCipher));
        while (cipherUpper < 0){
          cipherUpper = (cipherUpper + 26)
        }
        let cipherUpper1 = (cipherUpper) %26 + 65;
        encodeText += String.fromCharCode(cipherUpper1);
      }
      else if ( asciiTextCipher >=97 && asciiTextCipher <= 122 ) {
           let cipherLow = (asciiTextCipher - 97 + parseInt(offsetCipher));
           while(cipherLow < 0){
             cipherLow = (cipherLow + 26)
           }
           let cipherLow1 = (cipherLow) % 26 + 97; 
           encodeText += String.fromCharCode(cipherLow1);
      }
      else if (asciiTextCipher >=48 && asciiTextCipher <= 57 ){
          let cipherNumber = (asciiTextCipher - 48 + parseInt(offsetCipher));
          while (cipherNumber < 0){
            cipherNumber = (cipherNumber + 10)
          }
          let cipherNumber1 = (cipherNumber) % 10 + 48;
          encodeText += String.fromCharCode(cipherNumber1);
      } else {
          encodeText += String.fromCharCode(asciiTextCipher);
      }    }
        return encodeText;
 },
decode: (inputTextDecipher, offsetDecipher) => {
    let decodeText = "";
  for(let i = 0; i < inputTextDecipher.length; i++) {
    let asciiTextDecipher = inputTextDecipher[i].charCodeAt();
    if( asciiTextDecipher >= 65 && asciiTextDecipher <= 90 ) {
      let decipherUpper = (asciiTextDecipher - 65 - parseInt(offsetDecipher));
      while (decipherUpper < 0){
        decipherUpper = (decipherUpper + 26);
      }
      let decipherUpper1 = (decipherUpper) % 26 + 65;
      decodeText += String.fromCharCode(decipherUpper1);
} else if ( asciiTextDecipher >=97 && asciiTextDecipher <= 122 ) {
         let decipherLow = (asciiTextDecipher - 97 - parseInt(offsetDecipher));
         while (decipherLow < 0){
           decipherLow = (decipherLow + 26)
         }
         let decipherLow1 = (decipherLow) % 26 + 97;
        decodeText += String.fromCharCode(decipherLow1);
    } else if (asciiTextDecipher >=48 && asciiTextDecipher <= 57 ){
        let decipherNumber = (asciiTextDecipher - 48 - parseInt(offsetDecipher));
        while (decipherNumber < 0){
          decipherNumber = (decipherNumber + 10)
        }
        let decipherNumber1 = (decipherNumber) % 10 + 48;
        decodeText += String.fromCharCode(decipherNumber1);
    } else {
        decodeText += String.fromCharCode(asciiTextDecipher);
    }    
    }
      return decodeText;
}
};