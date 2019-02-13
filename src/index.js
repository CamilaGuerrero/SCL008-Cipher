window.onload = () => {
    document.getElementById("page0").style.display="block";
    document.getElementById("page1").style.display ="none";
    document.getElementById("page2").style.display="none";
    document.getElementById("page3").style.display ="none";
    document.getElementById("page4").style.display="none";
}

//botón comenzar página 0, pasa a la página 1 
document.getElementById("go").addEventListener("click",() => {
    document.getElementById("page0").style.display="none";
    document.getElementById("page1").style.display ="block";
    document.getElementById("page2").style.display="none";
    document.getElementById("page3").style.display ="none";
    document.getElementById("page4").style.display="none"
});


//Esconde pagina 1 y muestra la 2
document.getElementById("start").addEventListener("click",() => {
    document.getElementById("page0").style.display="none";
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="block";
    document.getElementById("page3").style.display ="none";
    document.getElementById("page4").style.display="none"
});

//función para cipher
document.getElementById('cipher').addEventListener('click', () => {
    let inputTextCipher = document.getElementById('enterText').value;
    let offsetCipher =(document.getElementById('offset').value);
    document.getElementById("newtext").innerHTML = window.cipher.encode(inputTextCipher, offsetCipher);
 })

// función para descifrar
 document.getElementById('decipher').addEventListener('click', () => {
    let inputTextDecipher = document.getElementById('enterText').value;
    let offsetDecipher =(document.getElementById('offset').value);
    document.getElementById("newtext").innerHTML = window.cipher.decode(inputTextDecipher, offsetDecipher);
 })

 //Copia el texto que hay en la caja de texto 
document.getElementById("copyBtn").addEventListener("click",() => {
    let copied = document.getElementById("newText");
    copied.select();
    document.execCommand('copy');
});


//Limpia las cajas de texto
document.getElementById("cleanBox").addEventListener("click",() => {
    document.getElementById("enterText").value = "";
    document.getElementById("newtext").value = "";
    document.getElementById("offset").value = "";
});

//botón ir a mi inicio pagina 2
document.getElementById("origin").addEventListener("click",()=>{
document.getElementById("page0").style.display="block";
document.getElementById("page1").style.display ="none";
document.getElementById("page2").style.display="none";
document.getElementById("page3").style.display ="none";
document.getElementById("page4").style.display="none";
});

//botón ir a mi inicio  pagina 4
document.getElementById("init").addEventListener("click",()=>{
    document.getElementById("page0").style.display="block";
    document.getElementById("page1").style.display ="none";
    document.getElementById("page2").style.display="none";
    document.getElementById("page3").style.display ="none";
    document.getElementById("page4").style.display="none";
    });
    
//muestra pagina 3 desde pagina 1
document.getElementById("instrucciones de uso").addEventListener("click",()=>{
    document.getElementById("page0").style.display="none";
    document.getElementById("page1").style.display ="none";
    document.getElementById("page2").style.display="none";
    document.getElementById("page3").style.display ="block";
    document.getElementById("page4").style.display="none";
    });

//botón ir a mi inicio pagina 3
document.getElementById("inicio").addEventListener("click",()=>{
    document.getElementById("page0").style.display="block";
    document.getElementById("page1").style.display ="none";
    document.getElementById("page2").style.display="none";
    document.getElementById("page3").style.display ="none";
    document.getElementById("page4").style.display="none";
    });    

//botón ir a mi cifrado pagina 3
document.getElementById("cifrado").addEventListener("click",()=>{
    document.getElementById("page0").style.display="none";
    document.getElementById("page1").style.display ="none";
    document.getElementById("page2").style.display="block";
    document.getElementById("page3").style.display ="none";
    document.getElementById("page4").style.display="none";
    });



//botón ir a mi cifrado pagina 4
document.getElementById("pageCipher").addEventListener("click",()=>{
    document.getElementById("page0").style.display="none";
    document.getElementById("page1").style.display ="none";
    document.getElementById("page2").style.display="block";
    document.getElementById("page3").style.display ="none";
    document.getElementById("page4").style.display="none";
    });

//botón ir a página 4 desde página 1    
document.getElementById("help").addEventListener("click",() => {
    document.getElementById("page0").style.display="none";
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="none";
    document.getElementById("page3").style.display="none"
    document.getElementById("page4").style.display="block"
});

//botón ir a página 3 desde página 2 
document.getElementById("explain").addEventListener("click",() => {
    document.getElementById("page0").style.display="none";
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="none";
    document.getElementById("page3").style.display="block"
    document.getElementById("page4").style.display="none"
});

//botón ir a página 4 desde página 2
document.getElementById("helpPages").addEventListener("click",() => {
    document.getElementById("page0").style.display="none";
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="none";
    document.getElementById("page3").style.display="none"
    document.getElementById("page4").style.display="block"
});

//botón ir a página 4 desde página 3
document.getElementById("helping").addEventListener("click",() => {
    document.getElementById("page0").style.display="none";
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="none";
    document.getElementById("page3").style.display="none"
    document.getElementById("page4").style.display="block"
});

//botón ir a página 3 desde página 4
document.getElementById("explaining").addEventListener("click",() => {
    document.getElementById("page0").style.display="none";
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="none";
    document.getElementById("page3").style.display="block"
    document.getElementById("page4").style.display="none"
});