// Datos de preguntas para cada curso
const questionsData = {
    matematica: [
        { question: "¿Cuánto es 15 + 27?", options: ["42", "32", "52", "37"], correct: 0 },
        { question: "¿Cuánto es 48 - 19?", options: ["27", "29", "31", "39"], correct: 1 },
        { question: "¿Cuánto es 7 × 8?", options: ["54", "56", "64", "48"], correct: 1 },
        { question: "¿Cuánto es 81 ÷ 9?", options: ["7", "8", "9", "10"], correct: 2 },
        { question: "¿Cuál es el cuadrado de 12?", options: ["144", "124", "132", "121"], correct: 0 },
        { question: "¿Cuál es la raíz cuadrada de 64?", options: ["6", "7", "8", "9"], correct: 2 },
        { question: "¿Cuánto es 5² + 4²?", options: ["41", "31", "21", "25"], correct: 0 },
        { question: "¿Cuánto es 3³?", options: ["9", "18", "27", "24"], correct: 2 },
        { question: "¿Cuánto es 144 ÷ 12?", options: ["10", "11", "12", "13"], correct: 2 },
        { question: "¿Cuánto es √81 + √25?", options: ["14", "12", "10", "16"], correct: 0 }
    ],
    comunicacion: [
        { question: "¿Cuál es el antónimo de 'alegre'?", options: ["Contento", "Triste", "Feliz", "Jovial"], correct: 1 },
        { question: "¿Cuál de estas palabras es un sustantivo?", options: ["Correr", "Azul", "Casa", "Rápido"], correct: 2 },
        { question: "¿Cuál es el sujeto en 'El perro corre en el parque'?", options: ["Corre", "En el parque", "El perro", "Parque"], correct: 2 },
        { question: "¿Qué tipo de palabra es 'rápidamente'?", options: ["Sustantivo", "Adjetivo", "Verbo", "Adverbio"], correct: 3 },
        { question: "¿Cuál es el sinónimo de 'inteligente'?", options: ["Tonto", "Listo", "Lento", "Torpe"], correct: 1 },
        { question: "¿Cómo se llama la figura literaria que exagera algo?", options: ["Metáfora", "Hipérbole", "Símil", "Personificación"], correct: 1 },
        { question: "¿Qué palabra está mal escrita?", options: ["Casa", "Kasa", "Caza", "Caso"], correct: 1 },
        { question: "¿Cuál es la sílaba tónica de 'árbol'?", options: ["ar", "bol", "ár", "árbol es aguda"], correct: 3 },
        { question: "¿Qué tipo de texto narra una historia imaginaria?", options: ["Texto informativo", "Texto instructivo", "Texto literario", "Texto científico"], correct: 2 },
        { question: "¿Qué signo de puntuación se usa para preguntar?", options: ["Punto", "Coma", "Signos de exclamación", "Signos de interrogación"], correct: 3 }
    ],
    ciencias: [
        { question: "¿Qué planeta es conocido como el planeta rojo?", options: ["Venus", "Marte", "Júpiter", "Saturno"], correct: 1 },
        { question: "¿Qué gas necesitan las plantas para la fotosíntesis?", options: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Hidrógeno"], correct: 2 },
        { question: "¿Qué órgano bombea la sangre en el cuerpo humano?", options: ["Pulmón", "Hígado", "Corazón", "Cerebro"], correct: 2 },
        { question: "¿Cuál es el estado del agua a 0°C?", options: ["Sólido", "Líquido", "Gaseoso", "Plasma"], correct: 0 },
        { question: "¿Qué animal es un mamífero?", options: ["Tiburón", "Ballena", "Cocodrilo", "Pingüino"], correct: 1 },
        { question: "¿Qué parte de la planta realiza la fotosíntesis?", options: ["Raíz", "Tallo", "Hoja", "Flor"], correct: 2 },
        { question: "¿Qué fuerza nos mantiene pegados a la Tierra?", options: ["Gravedad", "Magnetismo", "Electricidad", "Fricción"], correct: 0 },
        { question: "¿Qué planeta es el más grande del sistema solar?", options: ["La Tierra", "Saturno", "Júpiter", "Neptuno"], correct: 2 },
        { question: "¿Qué gas es el más abundante en la atmósfera terrestre?", options: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Argón"], correct: 2 },
        { question: "¿Qué tipo de energía produce el sol?", options: ["Energía nuclear", "Energía solar", "Energía química", "Energía eólica"], correct: 1 }
    ],
    historia: [
        { question: "¿Qué civilización construyó Machu Picchu?", options: ["Chavín", "Moche", "Inca", "Nazca"], correct: 2 },
        { question: "¿En qué año se declaró la independencia del Perú?", options: ["1810", "1821", "1824", "1830"], correct: 1 },
        { question: "¿Qué cultura preincaica es conocida por las Líneas de Nazca?", options: ["Paracas", "Nazca", "Mochica", "Tiahuanaco"], correct: 1 },
        { question: "¿Quién fue el último inca del Tahuantinsuyo?", options: ["Pachacútec", "Huayna Cápac", "Atahualpa", "Manco Inca"], correct: 2 },
        { question: "¿Qué presidente peruano fue conocido por la 'Revolución de las Canarias'?", options: ["Ramón Castilla", "Andrés Avelino Cáceres", "Augusto B. Leguía", "Manuel Prado"], correct: 0 },
        { question: "¿En qué batalla se selló la independencia del Perú?", options: ["Ayacucho", "Junín", "Angamos", "Miraflores"], correct: 0 },
        { question: "¿Qué cultura preincaica se desarrolló en la costa norte del Perú?", options: ["Paracas", "Moche", "Nazca", "Chavín"], correct: 1 },
        { question: "¿Quién fue el primer presidente del Perú?", options: ["José de San Martín", "Simón Bolívar", "José de la Riva Agüero", "Ramón Castilla"], correct: 2 },
        { question: "¿Qué tratado puso fin a la Guerra del Pacífico?", options: ["Tratado de Ancón", "Tratado de Lima", "Tratado de Paz", "Tratado de Tacna"], correct: 0 },
        { question: "¿En qué año se produjo la Batalla de Ayacucho?", options: ["1821", "1824", "1830", "1815"], correct: 1 }
    ]
};

// Variables del estado de la aplicación
let currentCourse = '';
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;

// Elementos DOM
const courseCards = document.querySelectorAll('.course-card');
const startButtons = document.querySelectorAll('.start-btn');
const quizContainer = document.getElementById('quizContainer');
const resultsContainer = document.getElementById('resultsContainer');
const quizTitle = document.getElementById('quizTitle');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const currentQuestionEl = document.getElementById('currentQuestion');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const backToCoursesBtn = document.getElementById('backToCourses');
const restartQuizBtn = document.getElementById('restartQuiz');
const finalScoreEl = document.getElementById('finalScore');
const scoreMessageEl = document.getElementById('scoreMessage');
const installBtn = document.getElementById('installBtn');

// Nombres completos de los cursos
const courseNames = {
    matematica: "Matemática",
    comunicacion: "Comunicación",
    ciencias: "Ciencias",
    historia: "Historia del Perú"
};

// Iniciar curso
startButtons.forEach(button => {
    button.addEventListener('click', function() {
        const course = this.getAttribute('data-course');
        startCourse(course);
    });
});

// Iniciar un curso específico
function startCourse(course) {
    currentCourse = course;
    currentQuestionIndex = 0;
    userAnswers = new Array(10).fill(null);
    score = 0;
            
    // Mostrar el quiz y ocultar otros elementos
    document.querySelector('.courses-section').style.display = 'none';
    quizContainer.style.display = 'block';
    resultsContainer.style.display = 'none';
            
    // Configurar el título del quiz
    quizTitle.textContent = courseNames[course];
            
    // Mostrar la primera pregunta
    showQuestion();
}

// Mostrar la pregunta actual
function showQuestion() {
    const question = questionsData[currentCourse][currentQuestionIndex];
    
    // Actualizar contador
    currentQuestionEl.textContent = currentQuestionIndex + 1;
    
    // Mostrar pregunta
    questionText.textContent = question.question;
    
    // Mostrar opciones
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        if (userAnswers[currentQuestionIndex] === index) {
            optionElement.classList.add('selected');
        }
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
    
    // Configurar botones de navegación
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Cambiar texto del botón "Siguiente" si es la última pregunta
    if (currentQuestionIndex === questionsData[currentCourse].length - 1) {
        nextBtn.textContent = "Finalizar";
    } else {
        nextBtn.textContent = "Siguiente";
    }
}

// Seleccionar una opción
function selectOption(optionIndex) {
    // Deseleccionar todas las opciones
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Seleccionar la opción clickeada
    document.querySelectorAll('.option')[optionIndex].classList.add('selected');
    
    // Guardar respuesta del usuario
    userAnswers[currentQuestionIndex] = optionIndex;
}

// Navegar a la pregunta anterior
prevBtn.addEventListener('click', function() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
});

// Navegar a la siguiente pregunta o finalizar
nextBtn.addEventListener('click', function() {
    if (userAnswers[currentQuestionIndex] === null) {
        alert("Por favor, selecciona una respuesta antes de continuar.");
        return;
    }
            
    if (currentQuestionIndex < questionsData[currentCourse].length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        calculateResults();
        showResults();
    }
});

// Calcular resultados
function calculateResults() {
    score = 0;
    for (let i = 0; i < questionsData[currentCourse].length; i++) {
        if (userAnswers[i] === questionsData[currentCourse][i].correct) {
            score++;
        }
    }
}

// Mostrar resultados
function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    // Mostrar puntaje
    finalScoreEl.textContent = `${score}/${questionsData[currentCourse].length}`;
    
    // Mostrar mensaje según puntaje
    let message = "";
    if (score === questionsData[currentCourse].length) {
        message = "¡Excelente! Has respondido todas las preguntas correctamente.";
    } else if (score >= questionsData[currentCourse].length * 0.7) {
        message = "¡Muy bien! Has demostrado un buen conocimiento del tema.";
    } else if (score >= questionsData[currentCourse].length * 0.5) {
        message = "Buen trabajo, pero puedes mejorar. Revisa los temas y vuelve a intentarlo.";
    } else {
        message = "Sigue practicando. Revisa los conceptos y vuelve a intentarlo.";
    }
            
    scoreMessageEl.textContent = message;
}

// Volver a la lista de cursos
backToCoursesBtn.addEventListener('click', function() {
    document.querySelector('.courses-section').style.display = 'block';
    resultsContainer.style.display = 'none';
    quizContainer.style.display = 'none';
});

// Reiniciar el quiz
restartQuizBtn.addEventListener('click', function() {
    startCourse(currentCourse);
});

// Instalar la aplicación como PWA
installBtn.addEventListener('click', async function() {
    // En una aplicación real, aquí se manejaría la instalación de PWA
    alert("En una aplicación real, este botón instalaría la app en tu dispositivo para uso offline. Para esta demostración, puedes guardar la página web en tu dispositivo.");
    
    // Para esta demostración, creamos un archivo descargable
    const blob = new Blob([document.documentElement.outerHTML], {type: 'text/html'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'EducaRural.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

// Hacer que la aplicación funcione offline
// En una aplicación real, se usaría un Service Worker para cachear los recursos
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // En una aplicación real, se registraría el Service Worker
        console.log('Esta aplicación está preparada para funcionar offline');
    });
}

// Navegar a la siguiente pregunta o finalizar
nextBtn.addEventListener('click', function() {
    if (userAnswers[currentQuestionIndex] === null) {
        alert(getTranslatedMessage("select-answer"));
        return;
    }
    
    if (currentQuestionIndex < questionsData[currentCourse].length - 1) {
        currentQuestionIndex++;
        showQuestion();
        
        // Actualizar texto del botón "Siguiente/Finalizar"
        if (currentQuestionIndex === questionsData[currentCourse].length - 1) {
            nextBtn.textContent = getTranslatedMessage("finish");
        } else {
            nextBtn.textContent = getTranslatedMessage("next");
        }
    } else {
        calculateResults();
        showResults();
    }
});

/*Mensajes de alerta traducibles */
function getTranslatedMessage(key) {
    // Asegúrate de que el archivo de idiomas esté cargado
    if (window.translations && window.currentLanguage) {
        return window.translations[window.currentLanguage][key] || 
               window.translations['es'][key] || key;
    }
    return key;
}

// En la función showResults, actualiza los mensajes de puntuación:
function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    // Mostrar puntaje
    finalScoreEl.textContent = `${score}/${questionsData[currentCourse].length}`;
    
    // Mostrar mensaje según puntaje (usando traducciones)
    let messageKey = "";
    if (score === questionsData[currentCourse].length) {
        messageKey = "excellent-score";
    } else if (score >= questionsData[currentCourse].length * 0.7) {
        messageKey = "good-score";
    } else if (score >= questionsData[currentCourse].length * 0.5) {
        messageKey = "medium-score";
    } else {
        messageKey = "low-score";
    }
    
    scoreMessageEl.textContent = getTranslatedMessage(messageKey);
}

// Mostrar mensaje de bienvenida
window.addEventListener('DOMContentLoaded', function() {
    console.log("App EducaRural cargada. Funciona completamente offline.");
});
