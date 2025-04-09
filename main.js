function colorirDia(){
    //Pegar valor do campo de dia
    let days = document.getElementById('day').value;


    //Pegar o valor do campo cor
    let color = document.getElementById('color').value;

    //Pegar elemento da tabela calendario
    let calendar = document.getElementById('calendar');

    //Verifica se o caminho de dia foi prenchido
    if(!days){
        alert('Favor informar o dia');
    } else if((days > 0) && (days < 31)){
        // Se o numero de dias está no intervalo
        //Aplicará a cor na célula do calendario
        let td = calendar.getElementsByTagName
        ('td')[parseInt(days)+1];
        td.style.backgroundColor = color;
    } else{
        alert("Favor informa um dia do calendario");
    }
    //Guardar a célular da tabela
    let elementos = document.querySelectorAll('th');

    //Declarar e inicializa contadores
    let contadorAzul = 0, contadorVerde = 0
    contadorRosa = 0, contadorRoxa = 0;

    //Loop para verificar o estilo de cada celula e contar quantas tem cor e qual cor
    for(let i = 0; i < elementos.length; i++){

        var estilo = window.getComputedStyle(elementos[i]);

        //Obttém a cor de fundo da célula
        var cor = estilo.backgroundColor;

        //Verifica a cor da célula e incrementa o contador
        if(corEstilo == 'rgb(173, 216, 230)' || corEstilo === 'ligthblue'){
            contadorAzul++;
            console.log(contadorAzul);
        } else if(corEstilo == 'rgb(152, 215, 152)' || corEstilo === 'palegreen'){
            contadorVerde++;
            console.log(contadorVerde);
        } else if(corEstilo == 'rgb(255, 182, 193)' || corEstilo === 'lightpink'){
            contadorRosa++;
            console.log(contadorRosa);
        }else if(corEstilo++ ==  'rgb (106, 90, 205)' || corEstilo === 'slateblue'){
            contadorRoxa++;
            console.log(contadorRoxa);
        }   

}
}