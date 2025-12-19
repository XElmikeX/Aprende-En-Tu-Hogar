// Datos de 100 preguntas para cada curso
const questionsData = {
    matematica: [
        // ... (tus preguntas se mantienen igual) ...
    ],
    
    comunicacion: [
        // ... (tus preguntas se mantienen igual) ...
    ],
    
    ciencias: [
        // ... (tus preguntas se mantienen igual) ...
    ],
    
    historia: [
        // ... (tus preguntas se mantienen igual) ...
    ]
};

// Variables para manejar las preguntas seleccionadas aleatoriamente
let selectedQuestions = [];
let currentCourse = '';
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;

// Elementos DOM
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

// Función para obtener mensajes traducidos
function getTranslatedMessage(key) {
    if (window.translations && window.currentLanguage) {
        return window.translations[window.currentLanguage][key] || 
               window.translations['es'][key] || key;
    }
    return key;
}

// Función para mezclar un array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Función para obtener preguntas traducidas
function getTranslatedQuestions(course) {
    if (window.currentLanguage === 'es' || !window.questionTranslations) {
        return null;
    }
    
    if (window.questionTranslations[window.currentLanguage] && 
        window.questionTranslations[window.currentLanguage][course]) {
        return window.questionTranslations[window.currentLanguage][course];
    }
    
    return null;
}

// Función para seleccionar 10 preguntas aleatorias
function selectRandomQuestions(course) {
    const translated = getTranslatedQuestions(course);
    
    if (translated && translated.length >= 10) {
        const shuffled = shuffleArray(translated);
        return shuffled.slice(0, 10);
    } else if (translated && translated.length > 0) {
        const allOriginalQuestions = questionsData[course];
        const neededQuestions = 10 - translated.length;
        const shuffledOriginal = shuffleArray(allOriginalQuestions).slice(0, neededQuestions);
        return [...translated, ...shuffledOriginal];
    } else {
        const allQuestions = questionsData[course];
        const shuffled = shuffleArray(allQuestions);
        return shuffled.slice(0, 10);
    }
}

// Función para actualizar el texto del botón siguiente/finalizar
function updateNextButtonText() {
    if (currentQuestionIndex === selectedQuestions.length - 1) {
        nextBtn.textContent = getTranslatedMessage("finish");
    } else {
        nextBtn.textContent = getTranslatedMessage("next");
    }
}

// Función para actualizar textos cuando cambia el idioma
function updateQuizLanguage() {
    if (currentCourse) {
        const newQuestions = selectRandomQuestions(currentCourse);
        selectedQuestions = newQuestions;
        
        userAnswers = new Array(selectedQuestions.length).fill(null);
        currentQuestionIndex = 0;
        score = 0;
        
        showQuestion();
        
        prevBtn.textContent = getTranslatedMessage("prev");
        updateNextButtonText();
        backToCoursesBtn.textContent = getTranslatedMessage("back-courses");
        restartQuizBtn.textContent = getTranslatedMessage("repeat-course");
        
        const courseKey = currentCourse + '-title';
        if (window.translations && window.translations[window.currentLanguage] && 
            window.translations[window.currentLanguage][courseKey]) {
            quizTitle.textContent = window.translations[window.currentLanguage][courseKey];
        } else {
            quizTitle.textContent = courseNames[currentCourse];
        }
    }
}

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
    
    selectedQuestions = selectRandomQuestions(course);
    
    userAnswers = new Array(selectedQuestions.length).fill(null);
    score = 0;
            
    document.querySelector('.courses-section').style.display = 'none';
    quizContainer.style.display = 'block';
    resultsContainer.style.display = 'none';
    
    const courseKey = course + '-title';
    if (window.translations && window.currentLanguage && 
        window.translations[window.currentLanguage][courseKey]) {
        quizTitle.textContent = window.translations[window.currentLanguage][courseKey];
    } else {
        quizTitle.textContent = courseNames[course];
    }
    
    prevBtn.textContent = getTranslatedMessage("prev");
    updateNextButtonText();
            
    showQuestion();
}

// Mostrar la pregunta actual
function showQuestion() {
    const question = selectedQuestions[currentQuestionIndex];
    
    currentQuestionEl.textContent = currentQuestionIndex + 1;
    questionText.textContent = question.question;
    
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
    
    prevBtn.disabled = currentQuestionIndex === 0;
    updateNextButtonText();
}

// Seleccionar una opción
function selectOption(optionIndex) {
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    document.querySelectorAll('.option')[optionIndex].classList.add('selected');
    userAnswers[currentQuestionIndex] = optionIndex;
}

// Navegar a la pregunta anterior
prevBtn.addEventListener('click', function() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
        updateNextButtonText();
    }
});

// Navegar a la siguiente pregunta o finalizar
nextBtn.addEventListener('click', function() {
    if (userAnswers[currentQuestionIndex] === null) {
        alert(getTranslatedMessage("select-answer"));
        return;
    }
            
    if (currentQuestionIndex < selectedQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
        updateNextButtonText();
    } else {
        calculateResults();
        showResults();
    }
});

// Calcular resultados
function calculateResults() {
    score = 0;
    for (let i = 0; i < selectedQuestions.length; i++) {
        if (userAnswers[i] === selectedQuestions[i].correct) {
            score++;
        }
    }
}

// Mostrar resultados
function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    const resultsTitle = document.querySelector('.results-title');
    if (resultsTitle) {
        resultsTitle.textContent = getTranslatedMessage("completed");
    }
    
    backToCoursesBtn.textContent = getTranslatedMessage("back-courses");
    restartQuizBtn.textContent = getTranslatedMessage("repeat-course");
    
    finalScoreEl.textContent = `${score}/${selectedQuestions.length}`;
    
    let messageKey = "";
    if (score === selectedQuestions.length) {
        messageKey = "excellent-score";
    } else if (score >= selectedQuestions.length * 0.7) {
        messageKey = "good-score";
    } else if (score >= selectedQuestions.length * 0.5) {
        messageKey = "medium-score";
    } else {
        messageKey = "low-score";
    }
            
    scoreMessageEl.textContent = getTranslatedMessage(messageKey);
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

// Función para manejar cambios de idioma
window.updateQuizOnLanguageChange = function() {
    if (currentCourse) {
        updateQuizLanguage();
        
        if (resultsContainer.style.display === 'block' || resultsContainer.style.display === '') {
            const resultsTitle = document.querySelector('.results-title');
            if (resultsTitle) {
                resultsTitle.textContent = getTranslatedMessage("completed");
            }
            
            let messageKey = "";
            if (score === selectedQuestions.length) {
                messageKey = "excellent-score";
            } else if (score >= selectedQuestions.length * 0.7) {
                messageKey = "good-score";
            } else if (score >= selectedQuestions.length * 0.5) {
                messageKey = "medium-score";
            } else {
                messageKey = "low-score";
            }
            
            if (scoreMessageEl) {
                scoreMessageEl.textContent = getTranslatedMessage(messageKey);
            }
            
            backToCoursesBtn.textContent = getTranslatedMessage("back-courses");
            restartQuizBtn.textContent = getTranslatedMessage("repeat-course");
        }
    }
};

// Inicialización al cargar la página
window.addEventListener('DOMContentLoaded', function() {
    console.log("App Aprende En Tu Hogar cargada. Funciona completamente offline.");
    
    // Agregar mensaje informativo para la descarga del APK
    if (installBtn) {
        installBtn.addEventListener('click', function(e) {
            if (navigator.userAgent.includes('Android')) {
                // Mostrar mensaje instructivo para Android
                setTimeout(() => {
                    if (confirm("📱 Instrucciones para Android:\n\n1. Después de descargar, toca la notificación\n2. Permite 'Instalar desde fuentes desconocidas' (solo primera vez)\n3. Sigue los pasos para instalar\n\n¿Deseas ver estas instrucciones después de descargar?")) {
                        // Guardar para mostrar después
                        localStorage.setItem('showInstallInstructions', 'true');
                    }
                }, 1000);
            }
        });
    }
    
    // Detectar modo offline/online
    if (!navigator.onLine) {
        document.body.classList.add('offline-mode');
        console.log("Modo offline activado");
    }
    
    window.addEventListener('online', function() {
        document.body.classList.remove('offline-mode');
        console.log("Conexión restablecida");
    });
    
    window.addEventListener('offline', function() {
        document.body.classList.add('offline-mode');
        console.log("Modo offline - Usando caché");
    });
});