// Datos de 100 preguntas para cada curso
const questionsData = {
    matematica: [
        // Operaciones básicas (20 preguntas)
        { question: "¿Cuánto es 15 + 27?", options: ["42", "32", "52", "37"], correct: 0 },
        { question: "¿Cuánto es 48 - 19?", options: ["27", "29", "31", "39"], correct: 1 },
        { question: "¿Cuánto es 7 × 8?", options: ["54", "56", "64", "48"], correct: 1 },
        { question: "¿Cuánto es 81 ÷ 9?", options: ["7", "8", "9", "10"], correct: 2 },
        { question: "¿Cuánto es 25 + 38?", options: ["53", "63", "73", "83"], correct: 1 },
        { question: "¿Cuánto es 72 - 45?", options: ["27", "37", "47", "17"], correct: 0 },
        { question: "¿Cuánto es 9 × 6?", options: ["54", "56", "64", "48"], correct: 0 },
        { question: "¿Cuánto es 64 ÷ 8?", options: ["7", "8", "9", "6"], correct: 1 },
        { question: "¿Cuánto es 123 + 456?", options: ["579", "589", "569", "559"], correct: 0 },
        { question: "¿Cuánto es 100 - 67?", options: ["33", "43", "23", "53"], correct: 0 },
        
        // Fracciones (15 preguntas)
        { question: "¿Cuánto es 1/2 + 1/4?", options: ["3/4", "1/2", "2/4", "1/8"], correct: 0 },
        { question: "¿Cuánto es 3/4 - 1/4?", options: ["1/2", "1/4", "2/4", "3/4"], correct: 0 },
        { question: "¿Cuánto es 2/3 × 3/4?", options: ["1/2", "2/3", "3/4", "5/12"], correct: 0 },
        { question: "¿Cuánto es 1/2 ÷ 1/4?", options: ["2", "1/2", "1/4", "4"], correct: 0 },
        { question: "¿Qué fracción es equivalente a 0.5?", options: ["1/2", "1/4", "2/3", "3/4"], correct: 0 },
        
        // Decimales (15 preguntas)
        { question: "¿Cuánto es 0.5 + 0.25?", options: ["0.75", "0.5", "0.25", "1.0"], correct: 0 },
        { question: "¿Cuánto es 1.5 - 0.75?", options: ["0.75", "0.5", "1.0", "0.25"], correct: 0 },
        { question: "¿Cuánto es 0.2 × 0.3?", options: ["0.06", "0.6", "0.006", "6.0"], correct: 0 },
        { question: "¿Cuánto es 1.2 ÷ 0.4?", options: ["3", "0.3", "30", "0.03"], correct: 0 },
        { question: "¿Qué decimal es equivalente a 3/4?", options: ["0.75", "0.5", "0.25", "0.8"], correct: 0 },
        
        // Porcentajes (15 preguntas)
        { question: "¿Cuánto es el 50% de 200?", options: ["100", "50", "150", "200"], correct: 0 },
        { question: "¿Cuánto es el 25% de 80?", options: ["20", "25", "30", "40"], correct: 0 },
        { question: "¿Qué porcentaje es 20 de 100?", options: ["20%", "10%", "30%", "25%"], correct: 0 },
        { question: "Si algo cuesta 100 y tiene 20% de descuento, ¿cuánto cuesta?", options: ["80", "20", "120", "90"], correct: 0 },
        { question: "¿Cuánto es el 10% de 500?", options: ["50", "100", "25", "75"], correct: 0 },
        
        // Geometría básica (15 preguntas)
        { question: "¿Cuál es el área de un cuadrado de lado 5?", options: ["25", "20", "15", "10"], correct: 0 },
        { question: "¿Cuál es el perímetro de un rectángulo de 4x6?", options: ["20", "24", "10", "12"], correct: 0 },
        { question: "¿Cuántos grados tiene un triángulo?", options: ["180", "90", "360", "270"], correct: 0 },
        { question: "¿Cuántos lados tiene un hexágono?", options: ["6", "5", "7", "8"], correct: 0 },
        { question: "¿Qué figura tiene 4 lados iguales?", options: ["Cuadrado", "Rectángulo", "Triángulo", "Pentágono"], correct: 0 },
        
        // Potencias y raíces (10 preguntas)
        { question: "¿Cuál es el cuadrado de 12?", options: ["144", "124", "132", "121"], correct: 0 },
        { question: "¿Cuál es la raíz cuadrada de 64?", options: ["8", "6", "7", "9"], correct: 0 },
        { question: "¿Cuánto es 5² + 4²?", options: ["41", "31", "21", "25"], correct: 0 },
        { question: "¿Cuánto es 3³?", options: ["27", "9", "18", "24"], correct: 0 },
        { question: "¿Cuánto es √81 + √25?", options: ["14", "12", "10", "16"], correct: 0 },
        { question: "¿Cuánto es 2⁴?", options: ["16", "8", "32", "64"], correct: 0 },
        { question: "¿Cuánto es √100?", options: ["10", "5", "20", "50"], correct: 0 },
        { question: "¿Cuánto es 4² + 3²?", options: ["25", "16", "9", "7"], correct: 0 },
        { question: "¿Cuánto es √144?", options: ["12", "11", "13", "14"], correct: 0 },
        { question: "¿Cuánto es 10²?", options: ["100", "10", "1000", "20"], correct: 0 },
        
        // Problemas de palabras (10 preguntas)
        { question: "Si tienes 5 manzanas y compras 3 más, ¿cuántas tienes?", options: ["8", "5", "3", "2"], correct: 0 },
        { question: "Un libro tiene 120 páginas. Si lees 30 páginas al día, ¿en cuántos días lo terminas?", options: ["4", "3", "5", "6"], correct: 0 },
        { question: "Si 3 lápices cuestan 6 soles, ¿cuánto cuesta 1 lápiz?", options: ["2 soles", "3 soles", "1 sol", "4 soles"], correct: 0 },
        { question: "Un bus tiene 40 asientos. Si ya hay 25 personas, ¿cuántos asientos vacíos hay?", options: ["15", "25", "40", "65"], correct: 0 },
        { question: "Si caminas 5 km en 1 hora, ¿cuántos km caminas en 3 horas?", options: ["15 km", "5 km", "8 km", "10 km"], correct: 0 }
    ],
    
    comunicacion: [
        // Gramática básica (25 preguntas)
        { question: "¿Cuál es el antónimo de 'alegre'?", options: ["Triste", "Contento", "Feliz", "Jovial"], correct: 0 },
        { question: "¿Cuál de estas palabras es un sustantivo?", options: ["Casa", "Correr", "Azul", "Rápido"], correct: 0 },
        { question: "¿Cuál es el sujeto en 'El perro corre en el parque'?", options: ["El perro", "Corre", "En el parque", "Parque"], correct: 0 },
        { question: "¿Qué tipo de palabra es 'rápidamente'?", options: ["Adverbio", "Sustantivo", "Adjetivo", "Verbo"], correct: 0 },
        { question: "¿Cuál es el sinónimo de 'inteligente'?", options: ["Listo", "Tonto", "Lento", "Torpe"], correct: 0 },
        
        // Ortografía (20 preguntas)
        { question: "¿Qué palabra está mal escrita?", options: ["Kasa", "Casa", "Caza", "Caso"], correct: 0 },
        { question: "¿Cómo se escribe correctamente?", options: ["Bailar", "Vailar", "Bailár", "Vailár"], correct: 0 },
        { question: "¿Cuál es la forma correcta?", options: ["Ejército", "Ejercito", "Ejérsito", "Ehercito"], correct: 0 },
        { question: "¿Qué palabra lleva tilde?", options: ["Música", "Musica", "Musíca", "Mucica"], correct: 0 },
        { question: "¿Cómo se escribe el número 1000?", options: ["Mil", "Míl", "Mille", "Mill"], correct: 0 },
        
        // Comprensión lectora (25 preguntas)
        { question: "Si lees 'María fue al mercado a comprar frutas', ¿dónde fue María?", options: ["Al mercado", "A la escuela", "A casa", "Al parque"], correct: 0 },
        { question: "'El sol brilla en el cielo'. ¿Qué brilla?", options: ["El sol", "El cielo", "La luna", "Las estrellas"], correct: 0 },
        { question: "En el cuento de Caperucita Roja, ¿qué animal se encuentra en el bosque?", options: ["Lobo", "Oso", "Zorro", "Conejo"], correct: 0 },
        { question: "Si un texto habla de animales que viven en el mar, ¿de qué trata?", options: ["Animales marinos", "Animales del bosque", "Animales domésticos", "Animales del desierto"], correct: 0 },
        { question: "En una receta de cocina, ¿qué se describe?", options: ["Cómo preparar un plato", "Cómo hacer ejercicio", "Cómo estudiar", "Cómo viajar"], correct: 0 },
        
        // Literatura (15 preguntas)
        { question: "¿Cómo se llama la figura literaria que exagera algo?", options: ["Hipérbole", "Metáfora", "Símil", "Personificación"], correct: 0 },
        { question: "¿Qué tipo de texto narra una historia imaginaria?", options: ["Texto literario", "Texto informativo", "Texto instructivo", "Texto científico"], correct: 0 },
        { question: "¿Qué es una rima?", options: ["Similitud de sonidos al final de versos", "Una figura literaria", "Un tipo de poema", "Una forma de narrar"], correct: 0 },
        { question: "¿Qué es un cuento?", options: ["Narración breve", "Poema largo", "Texto informativo", "Obra de teatro"], correct: 0 },
        { question: "¿Quién es el autor de una obra?", options: ["La persona que la escribió", "El personaje principal", "El editor", "El lector"], correct: 0 },
        
        // Expresión escrita (15 preguntas)
        { question: "¿Qué signo de puntuación se usa para preguntar?", options: ["Signos de interrogación", "Punto", "Coma", "Signos de exclamación"], correct: 0 },
        { question: "¿Para qué sirve el punto final?", options: ["Terminar una oración", "Hacer una pausa", "Preguntar", "Exclamar"], correct: 0 },
        { question: "¿Qué es una oración?", options: ["Conjunto de palabras con sentido completo", "Una palabra", "Un signo de puntuación", "Un tipo de texto"], correct: 0 },
        { question: "¿Cuál es la sílaba tónica de 'árbol'?", options: ["ár", "bol", "ar", "árbol es aguda"], correct: 3 },
        { question: "¿Qué es un párrafo?", options: ["Conjunto de oraciones sobre un tema", "Una oración", "Un capítulo", "Un libro"], correct: 0 }
    ],
    
    ciencias: [
        // Biología (30 preguntas)
        { question: "¿Qué gas necesitan las plantas para la fotosíntesis?", options: ["Dióxido de carbono", "Oxígeno", "Nitrógeno", "Hidrógeno"], correct: 0 },
        { question: "¿Qué órgano bombea la sangre en el cuerpo humano?", options: ["Corazón", "Pulmón", "Hígado", "Cerebro"], correct: 0 },
        { question: "¿Qué animal es un mamífero?", options: ["Ballena", "Tiburón", "Cocodrilo", "Pingüino"], correct: 0 },
        { question: "¿Qué parte de la planta realiza la fotosíntesis?", options: ["Hoja", "Raíz", "Tallo", "Flor"], correct: 0 },
        { question: "¿Qué sistema nos permite respirar?", options: ["Sistema respiratorio", "Sistema digestivo", "Sistema nervioso", "Sistema circulatorio"], correct: 0 },
        
        // Física (25 preguntas)
        { question: "¿Qué fuerza nos mantiene pegados a la Tierra?", options: ["Gravedad", "Magnetismo", "Electricidad", "Fricción"], correct: 0 },
        { question: "¿Qué tipo de energía produce el sol?", options: ["Energía solar", "Energía nuclear", "Energía química", "Energía eólica"], correct: 1 },
        { question: "¿Qué es la luz?", options: ["Una forma de energía", "Un objeto", "Un sonido", "Un líquido"], correct: 0 },
        { question: "¿Qué mide un termómetro?", options: ["Temperatura", "Presión", "Peso", "Volumen"], correct: 0 },
        { question: "¿Qué es el magnetismo?", options: ["Fuerza de atracción o repulsión", "Tipo de energía", "Forma de calor", "Tipo de luz"], correct: 0 },
        
        // Química (20 preguntas)
        { question: "¿Cuál es el estado del agua a 0°C?", options: ["Sólido", "Líquido", "Gaseoso", "Plasma"], correct: 0 },
        { question: "¿Qué gas es el más abundante en la atmósfera terrestre?", options: ["Nitrógeno", "Oxígeno", "Dióxido de carbono", "Argón"], correct: 0 },
        { question: "¿Qué pasa cuando el agua hierve a 100°C?", options: ["Se evapora", "Se congela", "Se descompone", "Cambia de color"], correct: 0 },
        { question: "¿Qué es el oxígeno?", options: ["Un gas necesario para la vida", "Un líquido", "Un sólido", "Un tipo de energía"], correct: 0 },
        { question: "¿Qué significa H₂O?", options: ["Fórmula del agua", "Fórmula del aire", "Fórmula de la sal", "Fórmula del azúcar"], correct: 0 },
        
        // Astronomía (15 preguntas)
        { question: "¿Qué planeta es conocido como el planeta rojo?", options: ["Marte", "Venus", "Júpiter", "Saturno"], correct: 0 },
        { question: "¿Qué planeta es el más grande del sistema solar?", options: ["Júpiter", "La Tierra", "Saturno", "Neptuno"], correct: 0 },
        { question: "¿Qué es el sol?", options: ["Una estrella", "Un planeta", "Un satélite", "Un cometa"], correct: 0 },
        { question: "¿Qué es la luna?", options: ["Satélite de la Tierra", "Un planeta", "Una estrella", "Un cometa"], correct: 0 },
        { question: "¿Qué son las estrellas?", options: ["Cuerpos celestes que emiten luz", "Planetas", "Asteroides", "Cometas"], correct: 0 },
        
        // Ecología (10 preguntas)
        { question: "¿Por qué es importante reciclar?", options: ["Para cuidar el medio ambiente", "Para gastar más energía", "Para producir más basura", "Para contaminar más"], correct: 0 },
        { question: "¿Qué son los recursos renovables?", options: ["Recursos que se pueden regenerar", "Recursos que se agotan", "Recursos contaminantes", "Recursos artificiales"], correct: 0 },
        { question: "¿Qué es la contaminación?", options: ["Daño al medio ambiente", "Mejora del aire", "Limpieza del agua", "Cuidado de los animales"], correct: 0 },
        { question: "¿Qué son los animales en peligro de extinción?", options: ["Especies que pueden desaparecer", "Animales domésticos", "Animales muy comunes", "Animales artificiales"], correct: 0 },
        { question: "¿Qué es un ecosistema?", options: ["Comunidad de seres vivos y su ambiente", "Un solo animal", "Una planta", "Un mineral"], correct: 0 }
    ],
    
    historia: [
        // Culturas preincaicas (25 preguntas)
        { question: "¿Qué civilización construyó Machu Picchu?", options: ["Inca", "Chavín", "Moche", "Nazca"], correct: 0 },
        { question: "¿Qué cultura preincaica es conocida por las Líneas de Nazca?", options: ["Nazca", "Paracas", "Mochica", "Tiahuanaco"], correct: 0 },
        { question: "¿Qué cultura se desarrolló en la costa norte del Perú?", options: ["Moche", "Paracas", "Nazca", "Chavín"], correct: 0 },
        { question: "¿Qué civilización construyó la ciudad de Chan Chan?", options: ["Chimú", "Inca", "Paracas", "Nazca"], correct: 0 },
        { question: "¿Qué cultura es conocida por sus ceramios eróticos?", options: ["Moche", "Inca", "Paracas", "Chavín"], correct: 0 },
        
        // Imperio Inca (25 preguntas)
        { question: "¿Quién fue el último inca del Tahuantinsuyo?", options: ["Atahualpa", "Pachacútec", "Huayna Cápac", "Manco Inca"], correct: 0 },
        { question: "¿Qué significa Tahuantinsuyo?", options: ["Las cuatro regiones", "La gran tierra", "El imperio del sol", "La montaña sagrada"], correct: 0 },
        { question: "¿Cuál fue la capital del Imperio Inca?", options: ["Cusco", "Lima", "Machu Picchu", "Quito"], correct: 0 },
        { question: "¿Qué construyeron los incas para comunicar su imperio?", options: ["Caminos o Qhapaq Ñan", "Puentes colgantes", "Canales de riego", "Fortalezas"], correct: 0 },
        { question: "¿Qué era la mita en el Imperio Inca?", options: ["Sistema de trabajo", "Sistema de impuestos", "Religión", "Ejército"], correct: 0 },
        
        // Conquista y Colonia (20 preguntas)
        { question: "¿En qué año llegó Pizarro al Perú?", options: ["1532", "1492", "1521", "1541"], correct: 0 },
        { question: "¿Qué batalla marcó la caída del Imperio Inca?", options: ["Batalla de Cajamarca", "Batalla de Ayacucho", "Batalla de Junín", "Batalla de Angamos"], correct: 0 },
        { question: "¿Qué virreinato se estableció en el Perú?", options: ["Virreinato del Perú", "Virreinato de Nueva España", "Virreinato de la Plata", "Virreinato de Nueva Granada"], correct: 0 },
        { question: "¿Quién fue el primer virrey del Perú?", options: ["Blasco Núñez Vela", "Francisco de Toledo", "José de la Serna", "José Fernando de Abascal"], correct: 0 },
        { question: "¿Qué fue la Rebelión de Túpac Amaru II?", options: ["Revuelta indígena contra los españoles", "Guerra civil", "Independencia", "Revolución industrial"], correct: 0 },
        
        // Independencia (15 preguntas)
        { question: "¿En qué año se declaró la independencia del Perú?", options: ["1821", "1810", "1824", "1830"], correct: 0 },
        { question: "¿Quién declaró la independencia del Perú?", options: ["José de San Martín", "Simón Bolívar", "José de la Riva Agüero", "Ramón Castilla"], correct: 0 },
        { question: "¿En qué batalla se selló la independencia del Perú?", options: ["Ayacucho", "Junín", "Angamos", "Miraflores"], correct: 0 },
        { question: "¿Quién fue el primer presidente del Perú?", options: ["José de la Riva Agüero", "José de San Martín", "Simón Bolívar", "Ramón Castilla"], correct: 0 },
        { question: "¿Qué tratado puso fin a la Guerra del Pacífico?", options: ["Tratado de Ancón", "Tratado de Lima", "Tratado de Paz", "Tratado de Tacna"], correct: 0 },
        
        // República (15 preguntas)
        { question: "¿Qué presidente peruano fue conocido por la 'Revolución de las Canarias'?", options: ["Ramón Castilla", "Andrés Avelino Cáceres", "Augusto B. Leguía", "Manuel Prado"], correct: 0 },
        { question: "¿Cuándo se abolió la esclavitud en el Perú?", options: ["1854", "1821", "1860", "1900"], correct: 0 },
        { question: "¿Qué guerra enfrentó al Perú contra Chile?", options: ["Guerra del Pacífico", "Guerra con Ecuador", "Guerra de Independencia", "Guerra Civil"], correct: 0 },
        { question: "¿Quién fue Miguel Grau?", options: ["Héroe de la Guerra del Pacífico", "Presidente del Perú", "Escritor peruano", "Científico peruano"], correct: 0 },
        { question: "¿En qué año se produjo la Batalla de Ayacucho?", options: ["1824", "1821", "1830", "1815"], correct: 0 }
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

/*-------------------------------------------------------------- */
// Función para inicializar eventos táctiles en botones
function initTouchEvents() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (!isMobile) return;
    
    // Botón "Siguiente"
    if (nextBtn) {
        nextBtn.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(0.95)';
            this.style.opacity = '0.9';
        }, { passive: false });
        
        nextBtn.addEventListener('touchend', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(1)';
            this.style.opacity = '1';
            
            // Simular click después de un pequeño delay
            setTimeout(() => {
                this.click();
            }, 50);
        }, { passive: false });
        
        nextBtn.addEventListener('touchcancel', function() {
            this.style.transform = 'scale(1)';
            this.style.opacity = '1';
        });
    }
    
    // Botón "Anterior"
    if (prevBtn) {
        prevBtn.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(0.95)';
            this.style.opacity = '0.9';
        }, { passive: false });
        
        prevBtn.addEventListener('touchend', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(1)';
            this.style.opacity = '1';
            
            setTimeout(() => {
                this.click();
            }, 50);
        }, { passive: false });
        
        prevBtn.addEventListener('touchcancel', function() {
            this.style.transform = 'scale(1)';
            this.style.opacity = '1';
        });
    }
    
    // Botones del curso
    document.querySelectorAll('.start-btn').forEach(btn => {
        btn.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(0.95)';
        }, { passive: false });
        
        btn.addEventListener('touchend', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(1)';
            
            setTimeout(() => {
                this.click();
            }, 50);
        }, { passive: false });
    });
}

// MODIFICA la función startCourse para llamar a initTouchEvents
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
    
    // Inicializar eventos táctiles
    initTouchEvents();
            
    showQuestion();
}

// Agregar al final del evento DOMContentLoaded
window.addEventListener('DOMContentLoaded', function() {
    console.log("Aprende En Tu Hogar cargada");
    
    // Inicializar eventos táctiles
    initTouchEvents();
    
});
/*-------------------------------------------------------------- */

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
        // Solo suma puntos si hay una respuesta y es correcta
        if (userAnswers[i] !== null && userAnswers[i] === selectedQuestions[i].correct) {
            score++;
        }
        // Si userAnswers[i] es null, significa que no se respondió, por lo tanto no suma puntos
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
    console.log("Aprende En Tu Hogar cargada");
    
    // Agregar mensaje informativo para la descarga del APK
    if (installBtn) {
        installBtn.addEventListener('click', function(e) {
            if (navigator.userAgent.includes('Android')) {
                // Mostrar mensaje instructivo para Android
                setTimeout(() => {
                    if (confirm("Instrucciones para Android:\n1. Después de hacer click en Descargar\n2. Permite 'Instalar desde fuentes desconocidas'\n3. Realiza cuidadosamente los pasos")) {
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

/*Detecta q dispositivo es */
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Función para ajustar opciones para móvil
function adjustOptionsForMobile() {
    if (!isMobileDevice()) return;
    
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        // Asegurar que sea fácil de tocar
        option.style.minHeight = '60px';
        option.style.display = 'flex';
        option.style.alignItems = 'center';
        option.style.padding = '18px 15px';
        option.style.fontSize = '1.1rem';
        
        // Mejorar feedback táctil
        option.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
            this.style.opacity = '0.9';
        });
        
        option.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
            this.style.opacity = '1';
        });
    });
}

// MODIFICA la función showQuestion() así:
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
        
        // Agregar evento táctil mejorado para móviles
        if (isMobileDevice()) {
            optionElement.addEventListener('touchstart', function(e) {
                e.preventDefault();
                selectOption(index);
            });
        }
        
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
    
    // Ajustar para móviles después de crear las opciones
    if (isMobileDevice()) {
        adjustOptionsForMobile();
    }
    
    prevBtn.disabled = currentQuestionIndex === 0;
    updateNextButtonText();
}