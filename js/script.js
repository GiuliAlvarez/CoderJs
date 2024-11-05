//CALCULADORA

let nombre = document.getElementById("name");
let edad = document.getElementById("age");
let peso = document.getElementById("weight");
let altura = document.getElementById("height");
let calcularIMC = document.getElementById("calculateIMC");
let imc = 0;
let devolucionIMC = document.getElementById("devolucionIMC");


let consejos = document.getElementById("consejos");
const preguntaConsejos = document.createElement("h2");
const consultaSi = document.createElement("button");
const consultaNo = document.createElement("button");

preguntaConsejos.textContent = "Queres algunos consejos?";
consultaSi.textContent = "SI";
consultaSi.id = "consultaSi"
consultaNo.textContent = "NO";
consultaNo.id = "consultaNo"

consejosSegunIMC=[
    {
        id:"bajo peso",
        consejo: `Consejos para un IMC con bajo peso:
        <br>1)Aumenta la ingesta calórica con alimentos saludables: <br>Come más calorías de las que quemas: Escoge alimentos ricos en nutrientes como frutos secos, semillas, aguacate, aceite de oliva y frutas secas, que aportan calorías sin llenar demasiado. <br>Añade proteínas en cada comida: Las proteínas son clave para ganar masa muscular. Incluye alimentos como pollo, pescado, huevos, legumbres y productos lácteos
        <br>2)Incorpora comidas y snacks regulares: <br>Come más seguido: Intenta tener tres comidas principales y al menos dos snacks al día. Los snacks pueden ser frutos secos, yogur con fruta o un batido de proteínas. <br>Incluye carbohidratos saludables: Las fuentes de carbohidratos como avena, arroz, papas, pasta y panes integrales ayudan a aportar energía extra.
        <br>3)Realiza ejercicios de fuerza: <br>El entrenamiento con pesas o resistencia ayuda a ganar masa muscular en lugar de grasa. Esto te permitirá aumentar de peso de forma saludable. Enfócate en ejercicios como sentadillas, flexiones y levantamiento de pesas.
        <br>4)Hidrátate adecuadamente: <br>Aunque parezca simple, el agua es esencial para la recuperación muscular y la energía. Evita tomar grandes cantidades de agua justo antes de las comidas, ya que puede reducir tu apetito.
        <br>5)Añade alimentos densos en calorías a tus platos: <br>Usa aceites saludables como el de oliva o el de coco para cocinar, añade aguacate en tus ensaladas o guarniciones, y considera salsas o aderezos naturales (sin azúcar añadido).
        <br>Recuerda que la ganancia de peso saludable es gradual. Consultar a un nutricionista puede ayudarte a crear un plan personalizado que se ajuste a tus necesidades y objetivos.`
    },
    {
        id:"peso normal",
        consejo: `Consejos para un IMC con peso normal:
        <br>1)Mantén una dieta equilibrada: <br>Incluye una variedad de alimentos: Asegúrate de obtener una mezcla de proteínas, carbohidratos y grasas saludables. Las proteínas magras, los granos enteros, las frutas y verduras frescas, y las grasas saludables (como el aguacate y las nueces) son esenciales. <br>Controla las porciones: Comer en cantidades adecuadas ayuda a evitar el aumento de peso y a mantener una buena energía a lo largo del día.
        <br>2)Haz ejercicio regularmente: <br>Combina entrenamiento cardiovascular y de fuerza: El cardio ayuda a mantener la salud cardiovascular, mientras que el entrenamiento de fuerza mantiene los músculos y el metabolismo activos. <br>Intenta moverte a diario: Incluso pequeñas actividades como caminar, estirarte y tomar las escaleras pueden hacer una gran diferencia.
        <br>3)Duerme bien: <br>Dormir entre 7 y 8 horas cada noche ayuda a mantener equilibradas las hormonas relacionadas con el apetito y la energía, lo cual contribuye a la estabilidad del peso.
        <br>4)Hidrátate: <br>Mantén una buena hidratación a lo largo del día para mejorar la digestión, la energía y la salud en general.
        <br>5)Escucha a tu cuerpo: <br>Come cuando tengas hambre y detente cuando te sientas satisfecho. Esto es esencial para mantener un peso saludable y un buen estado de bienestar a largo plazo.
        <br>Si tienes algún objetivo adicional, como mejorar tu composición corporal o tu resistencia, podrías hablar con un profesional para ajustar tu rutina de acuerdo a tus metas.`
    },
    {
        id:"pre-obesidad o sobrepeso",
        consejo: `Consejos para un IMC con pre-obesidad o sobrepeso:
        <br>1)Adopta una alimentación equilibrada: <br>Aumenta el consumo de frutas y verduras: Estos alimentos son bajos en calorías y ricos en nutrientes. Intenta llenar la mitad de tu plato con verduras y frutas en cada comida. <br>Elige proteínas magras: Opta por carnes magras, pescado, legumbres y productos lácteos bajos en grasa para mantenerte saciado sin consumir muchas calorías. <br>Reduce los azúcares y grasas saturadas: Limita el consumo de alimentos procesados, azucarados y fritos. En su lugar, elige grasas saludables, como las del aguacate, las nueces y el aceite de oliva.
        <br>2)Controla las porciones: <br>Aprende a medir las porciones y escucha las señales de tu cuerpo para evitar comer en exceso. Comer en platos más pequeños puede ayudarte a controlar las cantidades.
        <br>3)Haz ejercicio regularmente: <br>Combina cardio y entrenamiento de fuerza: La actividad cardiovascular (correr, nadar, andar en bicicleta) ayuda a quemar calorías, mientras que el entrenamiento de fuerza (pesas, resistencia) ayuda a construir músculo y acelerar el metabolismo. <br>Establece metas realistas: Intenta realizar al menos 150 minutos de actividad moderada a la semana y encuentra actividades que disfrutes para mantenerte motivado.
        <br>4)Mantén un estilo de vida activo: <br>Integra más movimiento en tu día a día: usa las escaleras en lugar del ascensor, camina en lugar de conducir distancias cortas, o intenta incorporar pausas activas en tu jornada.
        <br>5)Considera buscar apoyo profesional: <br>Un nutricionista o un entrenador personal puede ofrecerte un plan adaptado a tus necesidades y guiarte en tu proceso de cambio.
        <br>Recuerda que los cambios deben ser graduales y sostenibles. La pérdida de peso saludable se produce lentamente y a menudo incluye cambios en el estilo de vida a largo plazo.`
    },
    {
        id:"obesidad clase I",
        consejo: `Consejos para un IMC con obesidad clase I: 
        <br>1)Consulta a un profesional de la salud: <br>Antes de realizar cambios significativos en tu dieta o rutina de ejercicios, es recomendable consultar a un médico o nutricionista que pueda evaluar tu situación específica y proporcionarte un plan adaptado a tus necesidades.
        <br>2)Establece metas realistas: <br>Enfócate en objetivos alcanzables, como perder del 5% al 10% de tu peso corporal inicial. Esto puede tener un impacto positivo en tu salud.
        <br>3)Adopta una alimentación equilibrada: <br>Comida real y fresca: Prioriza alimentos frescos y no procesados, como frutas, verduras, granos enteros, proteínas magras y grasas saludables. Intenta evitar alimentos ultraprocesados, que suelen ser altos en azúcares y grasas no saludables. \nControl de porciones: Aprende a medir las porciones y utiliza platos más pequeños para ayudarte a comer menos. Come lentamente y escucha las señales de saciedad de tu cuerpo. <br>Planifica tus comidas: Preparar tus comidas con antelación puede ayudarte a hacer elecciones más saludables y evitar decisiones impulsivas.
        <br>4)Haz ejercicio regularmente: <br>Combina cardio y fuerza: Intenta incluir al menos 150 minutos de ejercicio aeróbico moderado a la semana, como caminar, nadar o andar en bicicleta, junto con entrenamiento de fuerza al menos dos veces por semana para aumentar tu masa muscular y metabolismo. <br>Inicia despacio: Si no estás acostumbrado a hacer ejercicio, comienza con actividades de bajo impacto y ve aumentando la intensidad y duración gradualmente.
        <br>5)Cuida tu salud mental: <br>La salud mental es esencial en el proceso de pérdida de peso. Busca apoyo emocional, ya sea a través de amigos, familiares o grupos de apoyo. Considera practicar técnicas de manejo del estrés como la meditación o el yoga.
        <br>Recuerda que la pérdida de peso saludable es un proceso gradual. No te desanimes si no ves resultados inmediatos; la constancia y el enfoque en hábitos saludables son clave para lograr cambios sostenibles.`
    },
    {
        id:"obesidad o sobrepeso",
        consejo: `Consejos para un IMC con obesidad o sobrepeso:
        <br>1)Consulta a un profesional de la salud: <br>Antes de realizar cambios significativos en tu dieta o rutina de ejercicios, es recomendable consultar a un médico o nutricionista que pueda evaluar tu situación específica y proporcionarte un plan adaptado a tus necesidades.
        <br>2)Establece metas realistas: <br>Enfócate en objetivos alcanzables, como perder del 5% al 10% de tu peso corporal inicial. Esto puede tener un impacto positivo en tu salud.
        <br>3)Adopta una alimentación equilibrada: <br>Comida real y fresca: Prioriza alimentos frescos y no procesados, como frutas, verduras, granos enteros, proteínas magras y grasas saludables. Intenta evitar alimentos ultraprocesados, que suelen ser altos en azúcares y grasas no saludables. <br>Control de porciones: Aprende a medir las porciones y utiliza platos más pequeños para ayudarte a comer menos. Come lentamente y escucha las señales de saciedad de tu cuerpo. <br>Planifica tus comidas: Preparar tus comidas con antelación puede ayudarte a hacer elecciones más saludables y evitar decisiones impulsivas.
        <br>4)Haz ejercicio regularmente: <br>Combina cardio y fuerza: Intenta incluir al menos 150 minutos de ejercicio aeróbico moderado a la semana, como caminar, nadar o andar en bicicleta, junto con entrenamiento de fuerza al menos dos veces por semana para aumentar tu masa muscular y metabolismo. <br>Inicia despacio: Si no estás acostumbrado a hacer ejercicio, comienza con actividades de bajo impacto y ve aumentando la intensidad y duración gradualmente.
        <br>5)Cuida tu salud mental: <br>La salud mental es esencial en el proceso de pérdida de peso. Busca apoyo emocional, ya sea a través de amigos, familiares o grupos de apoyo. Considera practicar técnicas de manejo del estrés como la meditación o el yoga.
        <br>Recuerda que la pérdida de peso saludable es un proceso gradual. No te desanimes si no ves resultados inmediatos; la constancia y el enfoque en hábitos saludables son clave para lograr cambios sostenibles.`
    },
    {
        id:"obesidad clase II",
        consejo1: `Consejos para un IMC con obesidad clase II: 
        <br>1)Consulta a un profesional de la salud: <br>Antes de realizar cambios importantes, busca la orientación de un médico o un nutricionista especializado. Ellos pueden ofrecerte un plan personalizado que tome en cuenta tu estado de salud actual y tus necesidades individuales.
        <br>2)Establece metas realistas y alcanzables: <br>Enfócate en perder del 5% al 10% de tu peso corporal en un período de tiempo razonable. Esto puede tener beneficios significativos para tu salud, como mejorar la presión arterial y los niveles de azúcar en sangre.
        <br>3)Adopta una dieta equilibrada: <br>Comida nutritiva: Prioriza alimentos integrales, como frutas, verduras, granos enteros, proteínas magras (pollo, pescado, legumbres) y grasas saludables (aguacate, nueces). Limita los alimentos procesados, azucarados y altos en grasas saturadas. <br>Control de porciones: Aprende a medir las porciones y presta atención a las señales de saciedad. Comer despacio y disfrutar de cada bocado puede ayudarte a no comer en exceso.
        <br>4)Incrementa la actividad física: <br>Ejercicio regular: Apunta a al menos 150 minutos de ejercicio moderado a la semana. Esto puede incluir caminar, nadar, andar en bicicleta o cualquier actividad que disfrutes. También incluye entrenamiento de fuerza al menos dos veces por semana. <br>Comienza despacio: Si no has estado activo, comienza con ejercicios de bajo impacto y aumenta gradualmente la intensidad y duración.
        <br>5)Monitorea tu progreso: <br>Llevar un diario de alimentos y ejercicios puede ayudarte a identificar patrones y mantenerte en el camino. También puedes utilizar aplicaciones que te ayuden a llevar un seguimiento de tu ingesta calórica y tu actividad física.
        <br>Recuerda que cada pequeño cambio puede tener un impacto positivo en tu salud. La clave es ser paciente y constante en tu enfoque hacia un estilo de vida más saludable.`
    },
    {
        id:"obesidad clase III",
        consejo: `Consejos para un IMC con obesidad clase III:
        <br>1)Consulta a un equipo médico y nutricional: <br>Es importante trabajar junto a profesionales de la salud, como un médico, un nutricionista y, en algunos casos, un especialista en endocrinología. Ellos pueden ofrecer un plan personalizado que se adapte a tus necesidades, considerando cualquier condición de salud asociada.
        <br>2)Establece metas pequeñas y alcanzables: <br>Enfócate en lograr una pérdida de peso inicial del 5% al 10% del peso corporal, lo cual ya puede traer mejoras en la salud, como una reducción de la presión arterial, mejor control de la glucosa y menos presión en las articulaciones.
        <br>3)Adopta una dieta balanceada y sostenible: <br>Escoge alimentos integrales: Incluye alimentos frescos y naturales, como frutas, verduras, proteínas magras (pollo, pescado, huevos, legumbres) y grasas saludables (aguacate, aceite de oliva, frutos secos). <br>Controla las porciones: Usar platos más pequeños y medir las porciones puede ayudar a evitar el exceso de calorías. Además, comer despacio y masticar bien cada bocado ayuda a sentirte satisfecho más rápido. <br>Evita los azúcares y procesados: Los alimentos ricos en azúcar, grasas trans y sal agregada pueden dificultar la pérdida de peso y afectar la salud en general.
        <br>4)Aumenta gradualmente la actividad física: <br>Ejercicio de bajo impacto: Si no estás acostumbrado a hacer ejercicio, comienza con actividades de bajo impacto, como caminar, nadar o hacer ejercicios en agua, para minimizar el estrés en las articulaciones. <br>Establece una rutina regular: Intenta realizar al menos 150 minutos de ejercicio moderado cada semana y, cuando sea posible, incluye entrenamiento de fuerza para ayudar a preservar la masa muscular.
        <br>5)Considera tratamientos adicionales si es necesario: <br>En casos de obesidad clase 3, el médico puede sugerir tratamientos adicionales, como medicamentos para perder peso o, en casos específicos, opciones de cirugía bariátrica. Estas opciones pueden ser efectivas cuando se combinan con cambios en el estilo de vida.
        <br>La clave es avanzar a un ritmo constante y buscar apoyo en tu red social o en grupos de apoyo, si es posible. Con paciencia y apoyo profesional, puedes lograr mejoras significativas en tu salud y calidad de vida.`
    }
]


calcularIMC.onclick = () => {
    if (edad.value >= 0 && edad.value < 18) {
        devolucionIMC.innerText = "No es recomendable calcular el IMC en menores de edad.";

    } else if (edad.value < 0) {
        devolucionIMC.innerText = "Edad incorrecta.";
    }
    else {
        imc = (peso.value / (altura.value * altura.value));
        imc= Math.round(imc * 100) / 100;
        let imcValor;

        if (edad.value <= 65) {

            switch (true) {
                case (imc < 18.5):
                    imcValor = "bajo peso";
                    break;

                case (imc >= 18.5 && imc < 25):
                    imcValor = "peso normal";
                    break;

                case (imc >= 25 && imc < 30):
                    imcValor = "pre-obesidad o sobrepeso";
                    break;

                case (imc >= 30 && imc < 35):
                    imcValor = "obesidad clase I";
                    break;

                case (imc >= 35 && imc < 40):
                    imcValor = "obesidad clase II";
                    break;

                case (imc >= 40):
                    imcValor = "obesidad clase III";
                    break;
            }
        } else {

            switch (true) {
                case (imc < 23):
                    imcValor = "bajo peso";
                    break;

                case (imc >= 23 && imc < 30):
                    imcValor = "peso normal";
                    break;

                case (imc > 30):
                    imcValor = "obesidad o sobrepeso";
                    break;
            }
        }

        devolucionIMC.innerText = `${nombre.value} tu IMC es ${imc}, ${imcValor}`;

        consejos.appendChild(preguntaConsejos);
        consejos.appendChild(consultaSi);
        consejos.appendChild(consultaNo);

        consultaSi.disabled=false;
        consultaNo.disabled=false;
        resultConsejos="";

        consultaSi.onclick = () => {
            const resultadoConsejos= consejosSegunIMC.find((el)=>el.id===imcValor);
        
            const resultConsejos= document.createElement("p");
            resultConsejos.innerHTML= (resultadoConsejos.consejo);
            consejos.appendChild(resultConsejos);
            
            consultaSi.disabled=true;
            consultaNo.disabled=true;
        }

        consultaNo.onclick = () => {
            const okChau= document.createElement("p");

            okChau.innerHTML="No te dare consejos entonces."
            consejos.appendChild(okChau);

            consultaSi.disabled=true;
            consultaNo.disabled=true;
        }
    }
}
