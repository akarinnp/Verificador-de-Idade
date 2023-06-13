function verificar(){
   var data= new Date();
   var ano = data.getFullYear();
   var fAno = document.getElementById('nasc');
   var res = document.getElementById('res');

   if(fAno.value.length == 0 || Number(fAno.value) > ano){
    window.alert('[ERRO]Verifique os Dados e tente novamente')
   }


   else {

    var fSex = document.getElementsByName('radsex')
   

    var idade = ano - Number(fAno.value)
    var genero = '';
    var img = document.createElement('img')
    img.setAttribute('id', 'foto');
    img.classList.add('foto');

    if (fSex[0].checked){
    genero ='Homem'
    if(idade  >= 0 && idade < 16){
        //criança
        img.setAttribute('src', 'bebemen.png')
    }
    else if(idade >=16 && idade < 26){
        //jovem
        img.setAttribute('src', 'jovemmas.png')
    }
    else if(idade >= 26 && idade < 50){
        //adulto
        img.setAttribute('src', 'adulto.png')
    }
    else{
        //idoso
        img.setAttribute('src', 'idosomas.png')
    }



   
   } 
   else if(fSex[1].checked){
    genero = 'Mulher'

    if(idade  >= 0 && idade < 16){
        //criança
        img.setAttribute('src', 'bebe.png')
    }
    else if(idade >=16 && idade < 26){
        //jovem
        img.setAttribute('src', 'jove.png')
    }
    else if(idade >= 26 && idade < 50){
        //adulto
        img.setAttribute('src', 'jovem.png')
    }
    else{
        //idoso
        img.setAttribute('src', 'idosofem.png')
    }

}
}
res.style.textAlign= 'center'
res.innerHTML = `Você tem ${idade} anos e é ${genero}`;

res.appendChild(img)
}



