 let lista = document.getElementById("texto").innerText.split(" ")
 console.log(lista)
 document.getElementById("saida2").innerHTML = lista


 for(let i = 0;i< lista.length;i++){
     let nomes = ('"'+lista[i]+'", ') 
     document.getElementById("saida").innerHTML += nomes
 }
