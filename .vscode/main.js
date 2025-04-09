function colorirDia(){
    //Pegar valor do campo dia
    let days = document.getElementById('days').value;

    //Pegar o valor do campo cor 
    let color = document.getElementById('color').value;

    //Pega elementos da tabela calendario
    let calendar = document.getElementById('calendar');

    //Verifica se o campo de dia foi preenchido
    if(!days){
        alert('Favor informar o dia');
    } else if((days > 0) && (days < 31)){
        //Se o número de dias está no intervalo
        //aplicará a cor na célula do calendario
        let td = document.getElementsByTagName('th');
        td.style.backgroundColor = color;
    }else{
        alert('Favor informar um dia do cálendario');
    } 

    //Guardar a célula da tabela 
    let elementos = document.querySelectorAll('th');

    //Declara e inicializa controladores
    let conatadorAzul = 0, contadorVerde = 0, contadorRosa = 0, contadorRoxo = 0;

    // Loop para verificar um estilo de cada célula e contar quantas tem cor
    for(let i = 0; i < elementos.length; i++){
        var estilo = window.getComputedStyle(elementos[i]);

        //obtém a cor de fundo atual da célula
        var corEstilo = estilo.backgroundColor;

        //Verifica a cor e incrementa contator correspondente
        if(corEstilo === "rgb(173, 216, 230" || corEstilo === "ligthblue"){
            conatadorAzul++;
        } else if(corEstilo === "rgb(152, 215, 152)" || corEstilo === "palegreen"){
            contadorVerde++;
        } else if(corEstilo === "rgb(rgb(255, 182, 193)" || corEstilo === "lightpink"){
            contadorRosa++;
        }else if(corEstilo == "rgb(106, 90, 205)" || corEstilo === "slateblue"){
            contadorRoxo++;
        }
        
    }

}   