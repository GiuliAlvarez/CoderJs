let opcionPrincipal= parseInt(prompt("Elegi una opcion de las siguientes: \n 1-Calcular mi IMC \n 2-Salir"));
let n=1;

while(n=1){
    if (opcionPrincipal==1){
        let nombre= prompt("Cual es tu nombre?");
        let edad= parseInt(prompt("Que edad tenes?"));
        let imc=0;
        let personas= [];

        const calcularImc= (peso, altura) =>{
            imc= peso/(altura*altura);
        }

        if(edad>=18){

            calcularImc(parseFloat(prompt("Cual es tu peso (en kg)?")),parseFloat(prompt("Cual es tu altura (en m)?")));

            personas.push(nombre);
            personas.push(imc);

            if(edad<=65){

                switch(true){
                    case(imc<18.5):
                    alert(personas.join(" tu IMC es ")+". Bajo peso");
                    break;

                    case(imc>=18.5 && imc<25):
                    alert(personas.join(" tu IMC es ")+". Peso normal");
                    break;

                    case(imc>=25 && imc<30):
                    alert(personas.join(" tu IMC es ")+". Pre-obesidad o sobrepeso");
                    break;

                    case(imc>=30 && imc<35):
                    alert(personas.join(" tu IMC es ")+". Obesidad clase I");
                    break;

                    case(imc>=35 && imc<40):
                    alert(personas.join(" tu IMC es ")+". Obesidad clase II");
                    break;

                    case(imc>=40):
                    alert(personas.join(" tu IMC es ")+". Obesidad clase III");
                    break;
                }
            }
            
            else if(edad>65){

                switch(true){
                    case(imc<23):
                    alert(personas.join(" tu IMC es ")+". Bajo peso");
                    break;
    
                    case(imc>=23 && imc<30):
                    alert(personas.join(" tu IMC es ")+". Peso normal");
                    break;
    
                    case(imc>30):
                    alert(personas.join(" tu IMC es ")+". Obesidad/Sobrepeso");
                    break;
                }
            }
        
            personas.pop();
            personas.shift();
        
        }

        else{
            alert("No es recomendable calcular IMC en menores de edad.")
        }
    
        opcionPrincipal= parseInt(prompt("Elegi una opcion de las siguientes: \n 1-Calcular mi IMC \n 2-Salir"));
    }

    else if(opcionPrincipal==2){
        alert("Gracias por usar nuestra calculadora de IMC");
        n=2;
    }
    else{
        alert("Opcion ingresada incorrecta");
        opcionPrincipal= parseInt(prompt("Elegi una opcion de las siguientes: \n 1-Calcular mi IMC \n 2-Salir"));
    }
}