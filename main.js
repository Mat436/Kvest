class ExtremeCarQuiz {
            constructor() {
                this.questions = this.getQuestions();
                this.currentQuestion = 0;
                this.score = 0;
                this.userAnswers = [];
                this.timer = null;
                this.timeLeft = 30;
                this.quizStarted = false;
                
                this.elements = {
                    startScreen: document.getElementById('startScreen'),
                    questionScreen: document.getElementById('questionScreen'),
                    resultScreen: document.getElementById('resultScreen'),
                    startBtn: document.getElementById('startBtn'),
                    nextBtn: document.getElementById('nextBtn'),
                    prevBtn: document.getElementById('prevBtn'),
                    questionText: document.getElementById('questionText'),
                    optionsContainer: document.getElementById('optionsContainer'),
                    questionNumber: document.getElementById('questionNumber'),
                    timer: document.getElementById('timer'),
                    progressFill: document.getElementById('progressFill'),
                    progressText: document.getElementById('progressText'),
                    resultTitle: document.getElementById('resultTitle'),
                    finalScore: document.getElementById('finalScore'),
                    scoreText: document.getElementById('scoreText'),
                    resultDetails: document.getElementById('resultDetails'),
                    restartBtn: document.getElementById('restartBtn'),
                    shareBtn: document.getElementById('shareBtn'),
                    notification: document.getElementById('notification'),
                    notificationText: document.getElementById('notification-text'),
                    particles: document.getElementById('particles'),
                    confetti: document.getElementById('confetti')
                };
                
                this.init();
            }
            
            getQuestions() {
                return [
                    {
                        question: "🔥 Какая компания создала самый быстрый серийный автомобиль в мире?",
                        options: ["Bugatti", "Koenigsegg", "Hennessey", "SSC"],
                        correct: 1,
                        explanation: "Koenigsegg Jesko Absolut заявлен как самый быстрый автомобиль в мире!"
                    },
                    {
                        question: "⚡ Какой автомобиль первым разогнался до 400 км/ч?",
                        options: ["Bugatti Veyron", "Koenigsegg Agera", "SSC Tuatara", "McLaren F1"],
                        correct: 0,
                        explanation: "Bugatti Veyron Super Sport первым преодолел 400 км/ч в 2010 году!"
                    },
                    {
                        question: "🏁 Какой мотор стоит в Nissan GT-R R35?",
                        options: ["VR38DETT", "2JZ-GTE", "RB26DETT", "VQ35DE"],
                        correct: 0,
                        explanation: "Nissan GT-R R35 оснащается двигателем VR38DETT 3.8L V6 Twin Turbo!"
                    },
                    {
                        question: "💨 Сколько цилиндров у двигателя W16 в Bugatti?",
                        options: ["12", "16", "18", "20"],
                        correct: 1,
                        explanation: "Bugatti использует уникальный W16 двигатель с 16 цилиндрами!"
                    },
                    {
                        question: "🚀 Какой автомобиль прозвали 'Богом громовержцем'?",
                        options: ["Lamborghini Aventador", "Pagani Huayra", "Bugatti Chiron", "McLaren P1"],
                        correct: 0,
                        explanation: "Lamborghini Aventador назван в честь боевого быка, но поклонники зовут его 'Богом'!"
                    },
                    {
                        question: "🌟 Какой автомобиль имеет активную аэродинамику 'DRS'?",
                        options: ["Porsche 911 Turbo S", "McLaren P1", "Ferrari LaFerrari", "Все выше"],
                        correct: 3,
                        explanation: "DRS (Drag Reduction System) используется во многих гиперкарах!"
                    },
                    {
                        question: "💥 Какой автомобиль первым получил гибридную систему F1 KERS?",
                        options: ["McLaren P1", "Porsche 918 Spyder", "Ferrari LaFerrari", "BMW i8"],
                        correct: 2,
                        explanation: "Ferrari LaFerrari первая получила гибридную систему от Формулы-1!"
                    },
                    {
                        question: "🌀 Сколько лошадиных сил у Koenigsegg Jesko?",
                        options: ["1280 л.с.", "1600 л.с.", "1800 л.с.", "2000 л.с."],
                        correct: 1,
                        explanation: "На экотопливе Koenigsegg Jesko развивает 1600 лошадиных сил!"
                    },
                    {
                        question: "🌪️ Какой автомобиль имеет самый быстрый разгон 0-100 км/ч?",
                        options: ["Rimac Nevera", "Tesla Model S Plaid", "Porsche Taycan Turbo S", "Lucid Air"],
                        correct: 0,
                        explanation: "Rimac Nevera разгоняется до 100 км/ч за 1.85 секунды!"
                    },
                    {
                        question: "💎 Какой материал используется в кузове Pagani?",
                        options: ["Карбон", "Титан", "Карбо-титан", "Аэрографий"],
                        correct: 2,
                        explanation: "Pagani использует уникальный материал Карбо-Титан!"
                    }
                ];
            }
            
            init() {
                this.createParticles();
                this.createEventListeners();
                this.animateTitle();
            }
            
            createParticles() {
                for (let i = 0; i < 50; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'particle';
                    
                    // Размеры
                    const size = Math.random() * 10 + 5;
                    particle.style.width = `${size}px`;
                    particle.style.height = `${size}px`;
                    
                    // Позиция
                    particle.style.left = `${Math.random() * 100}%`;
                    particle.style.top = `${Math.random() * 100}%`;
                    
                    // Анимация
                    const duration = Math.random() * 20 + 10;
                    const delay = Math.random() * 5;
                    particle.style.animationDuration = `${duration}s`;
                    particle.style.animationDelay = `${delay}s`;
                    
                    // Цвет
                    const hue = Math.random() * 360;
                    particle.style.background = `radial-gradient(circle, 
                        hsla(${hue}, 100%, 50%, 0.8) 0%,
                        hsla(${(hue + 60) % 360}, 100%, 50%, 0.6) 50%,
                        transparent 70%)`;
                    
                    this.elements.particles.appendChild(particle);
                }
            }
            
            createEventListeners() {
                this.elements.startBtn.addEventListener('click', () => {
                    this.startQuiz();
                    this.createButtonRipple(event);
                });
                
                this.elements.nextBtn.addEventListener('click', (e) => {
                    this.nextQuestion();
                    this.createButtonRipple(e);
                });
                
                this.elements.prevBtn.addEventListener('click', (e) => {
                    this.prevQuestion();
                    this.createButtonRipple(e);
                });
                
                this.elements.restartBtn.addEventListener('click', (e) => {
                    this.restartQuiz();
                    this.createButtonRipple(e);
                });
                
                this.elements.shareBtn.addEventListener('click', (e) => {
                    this.shareResults();
                    this.createButtonRipple(e);
                });
            }
            
            createButtonRipple(event) {
                const btn = event.currentTarget;
                const circle = document.createElement('span');
                const diameter = Math.max(btn.clientWidth, btn.clientHeight);
                const radius = diameter / 2;
                
                circle.style.width = circle.style.height = `${diameter}px`;
                circle.style.left = `${event.clientX - btn.getBoundingClientRect().left - radius}px`;
                circle.style.top = `${event.clientY - btn.getBoundingClientRect().top - radius}px`;
                circle.classList.add('ripple');
                
                // Временные стили для ripple
                circle.style.position = 'absolute';
                circle.style.borderRadius = '50%';
                circle.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                circle.style.transform = 'scale(0)';
                circle.style.animation = 'ripple 0.6s linear';
                
                btn.appendChild(circle);
                
                setTimeout(() => {
                    circle.remove();
                }, 600);
            }
            
            animateTitle() {
                const title = document.querySelector('.title');
                let angle = 0;
                
                setInterval(() => {
                    angle = (angle + 0.5) % 360;
                    const x = Math.sin(angle * Math.PI / 180) * 2;
                    const y = Math.cos(angle * Math.PI / 180) * 2;
                    title.style.transform = `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg)`;
                }, 50);
            }
            
            startQuiz() {
                this.quizStarted = true;
                this.currentQuestion = 0;
                this.score = 0;
                this.userAnswers = [];
                
                // Анимация перехода
                this.elements.startScreen.style.animation = 'screenAppear 0.5s reverse forwards';
                setTimeout(() => {
                    this.elements.startScreen.style.display = 'none';
                    this.elements.questionScreen.style.display = 'block';
                    this.elements.questionScreen.style.animation = 'screenAppear 0.5s forwards';
                    this.showQuestion();
                    this.startTimer();
                }, 500);
                
                this.showNotification('🏁 ПОГНАЛИ! 💨', 'success');
            }
            
            showQuestion() {
                const question = this.questions[this.currentQuestion];
                
                // Анимация текста вопроса
                this.elements.questionText.style.animation = 'none';
                void this.elements.questionText.offsetWidth;
                this.elements.questionText.style.animation = 'questionPulse 4s infinite';
                
                // Обновляем данные
                this.elements.questionNumber.textContent = this.currentQuestion + 1;
                this.elements.questionText.textContent = question.question;
                this.elements.progressFill.style.width = `${(this.currentQuestion + 1) * 10}%`;
                this.elements.progressText.textContent = `${this.currentQuestion + 1}/10`;
                
                // Очищаем варианты
                this.elements.optionsContainer.innerHTML = '';
                
                // Создаем варианты ответов
                const letters = ['A', 'B', 'C', 'D'];
                question.options.forEach((option, index) => {
                    const optionElement = document.createElement('div');
                    optionElement.className = 'option';
                    optionElement.style.animationDelay = `${index * 0.1}s`;
                    
                    // Проверяем предыдущий ответ
                    const userAnswer = this.userAnswers[this.currentQuestion];
                    const isSelected = userAnswer === index;
                    const isCorrect = index === question.correct;
                    
                    if (userAnswer !== undefined) {
                        if (isCorrect) {
                            optionElement.classList.add('correct');
                        } else if (isSelected && !isCorrect) {
                            optionElement.classList.add('incorrect');
                        }
                    }
                    
                    if (isSelected) {
                        optionElement.classList.add('selected');
                    }
                    
                    optionElement.innerHTML = `
                        <div class="option-letter" style="
                            width: 50px;
                            height: 50px;
                            background: linear-gradient(45deg, #00f7ff, #f72585);
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-weight: 900;
                            font-size: 1.5rem;
                            color: white;
                        ">${letters[index]}</div>
                        <div class="option-text" style="flex: 1; font-size: 1.2rem;">${option}</div>
                    `;
                    
                    if (userAnswer === undefined) {
                        optionElement.addEventListener('click', () => this.selectAnswer(index));
                    }
                    
                    this.elements.optionsContainer.appendChild(optionElement);
                });
                
                // Обновляем кнопки
                this.elements.prevBtn.disabled = this.currentQuestion === 0;
                this.elements.nextBtn.disabled = this.userAnswers[this.currentQuestion] === undefined;
                
                // Сбрасываем таймер
                this.resetTimer();
            }
            
            selectAnswer(answerIndex) {
                // Сохраняем ответ
                this.userAnswers[this.currentQuestion] = answerIndex;
                
                // Проверяем правильность
                const isCorrect = answerIndex === this.questions[this.currentQuestion].correct;
                
                // Анимация выбора
                const selectedOption = this.elements.optionsContainer.children[answerIndex];
                selectedOption.classList.add('selected');
                
                // Взрывной эффект для правильного ответа
                if (isCorrect) {
                    this.score++;
                    this.createExplosion(selectedOption);
                    this.showNotification('✅ БОМБА! +1 балл! 💥', 'success');
                } else {
                    this.showNotification('❌ МИМО! Попробуй еще! 🔥', 'error');
                }
                
                // Подсвечиваем все ответы
                this.highlightAnswers();
                
                // Активируем кнопку Далее
                this.elements.nextBtn.disabled = false;
                
                // Меняем текст если последний вопрос
                if (this.currentQuestion === this.questions.length - 1) {
                    this.elements.nextBtn.innerHTML = '🏆 РЕЗУЛЬТАТЫ <i class="fas fa-flag-checkered"></i>';
                }
                
                // Останавливаем таймер
                this.stopTimer();
            }
            
            createExplosion(element) {
                const rect = element.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                for (let i = 0; i < 15; i++) {
                    const particle = document.createElement('div');
                    particle.style.position = 'fixed';
                    particle.style.width = '10px';
                    particle.style.height = '10px';
                    particle.style.background = `radial-gradient(circle, 
                        ${i % 3 === 0 ? '#00ff00' : i % 3 === 1 ? '#00f7ff' : '#f72585'}, 
                        transparent)`;
                    particle.style.borderRadius = '50%';
                    particle.style.left = `${centerX}px`;
                    particle.style.top = `${centerY}px`;
                    particle.style.zIndex = '1000';
                    
                    document.body.appendChild(particle);
                    
                    // Анимация взрыва
                    const angle = (i * 24) * Math.PI / 180;
                    const distance = 100 + Math.random() * 50;
                    const targetX = centerX + Math.cos(angle) * distance;
                    const targetY = centerY + Math.sin(angle) * distance;
                    
                    particle.animate([
                        {
                            transform: 'scale(0) translate(0, 0)',
                            opacity: 1
                        },
                        {
                            transform: `scale(1) translate(${targetX - centerX}px, ${targetY - centerY}px)`,
                            opacity: 0
                        }
                    ], {
                        duration: 800,
                        easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)'
                    });
                    
                    setTimeout(() => particle.remove(), 800);
                }
            }
            
            highlightAnswers() {
                const options = this.elements.optionsContainer.querySelectorAll('.option');
                const correctIndex = this.questions[this.currentQuestion].correct;
                
                options.forEach((option, index) => {
                    option.style.pointerEvents = 'none';
                    
                    if (index === correctIndex) {
                        setTimeout(() => {
                            option.classList.add('correct');
                        }, 300);
                    }
                    
                    const userAnswer = this.userAnswers[this.currentQuestion];
                    if (userAnswer === index && index !== correctIndex) {
                        setTimeout(() => {
                            option.classList.add('incorrect');
                        }, 300);
                    }
                });
            }
            
            nextQuestion() {
                if (this.userAnswers[this.currentQuestion] === undefined) {
                    this.showNotification('🎯 Выбери ответ сначала!', 'error');
                    return;
                }
                
                if (this.currentQuestion === this.questions.length - 1) {
                    this.showResults();
                    return;
                }
                
                // Анимация перехода
                this.elements.questionScreen.style.animation = 'screenAppear 0.5s reverse forwards';
                setTimeout(() => {
                    this.currentQuestion++;
                    this.showQuestion();
                    this.elements.questionScreen.style.animation = 'screenAppear 0.5s forwards';
                    this.startTimer();
                }, 300);
            }
            
            prevQuestion() {
                if (this.currentQuestion > 0) {
                    this.elements.questionScreen.style.animation = 'screenAppear 0.5s reverse forwards';
                    setTimeout(() => {
                        this.currentQuestion--;
                        this.showQuestion();
                        this.elements.questionScreen.style.animation = 'screenAppear 0.5s forwards';
                        
                        if (this.userAnswers[this.currentQuestion] !== undefined) {
                            this.stopTimer();
                        } else {
                            this.startTimer();
                        }
                    }, 300);
                }
            }
            
            startTimer() {
                this.timeLeft = 30;
                this.elements.timer.textContent = this.timeLeft;
                this.elements.timer.parentElement.style.background = 
                    'linear-gradient(45deg, rgba(247, 37, 133, 0.3), rgba(255, 0, 0, 0.3))';
                
                this.timer = setInterval(() => {
                    this.timeLeft--;
                    this.elements.timer.textContent = this.timeLeft;
                    
                    // Ускоряем пульсацию при малом времени
                    if (this.timeLeft <= 10) {
                        this.elements.timer.parentElement.style.animationDuration = '0.5s';
                        this.elements.timer.parentElement.style.background = 
                            'linear-gradient(45deg, rgba(255, 0, 0, 0.6), rgba(255, 50, 50, 0.6))';
                    }
                    
                    if (this.timeLeft <= 0) {
                        this.timeUp();
                    }
                }, 1000);
            }
            
            timeUp() {
                this.stopTimer();
                
                if (this.userAnswers[this.currentQuestion] === undefined) {
                    this.userAnswers[this.currentQuestion] = -1;
                    this.showNotification('⏰ ВРЕМЯ ВЫШЛО! 🚨', 'error');
                    this.highlightAnswers();
                    this.elements.nextBtn.disabled = false;
                    
                    if (this.currentQuestion === this.questions.length - 1) {
                        this.elements.nextBtn.innerHTML = '🏆 РЕЗУЛЬТАТЫ <i class="fas fa-flag-checkered"></i>';
                    }
                }
            }
            
            stopTimer() {
                clearInterval(this.timer);
            }
            
            resetTimer() {
                this.stopTimer();
                this.timeLeft = 30;
                this.elements.timer.textContent = this.timeLeft;
                this.elements.timer.parentElement.style.background = 
                    'linear-gradient(45deg, rgba(247, 37, 133, 0.3), rgba(255, 0, 0, 0.3))';
                this.elements.timer.parentElement.style.animationDuration = '1s';
            }
            
            showResults() {
                this.stopTimer();
                this.createConfetti();
                
                // Анимация перехода
                this.elements.questionScreen.style.animation = 'screenAppear 0.5s reverse forwards';
                setTimeout(() => {
                    this.elements.questionScreen.style.display = 'none';
                    this.elements.resultScreen.style.display = 'block';
                    this.elements.resultScreen.style.animation = 'resultAppear 1s forwards';
                    
                    // Подсчет результатов
                    const percentage = (this.score / this.questions.length) * 100;
                    
                    // Заголовок результата
                    if (percentage >= 90) {
                        this.elements.resultTitle.textContent = '👑 ТЫ ГЕНИЙ! 👑';
                    } else if (percentage >= 70) {
                        this.elements.resultTitle.textContent = '🔥 ОГОНЬ! 🔥';
                    } else if (percentage >= 50) {
                        this.elements.resultTitle.textContent = '👍 НОРМ! 👍';
                    } else {
                        this.elements.resultTitle.textContent = '💪 ПОПРОБУЙ ЕЩЕ! 💪';
                    }
                    
                    // Счет
                    this.elements.finalScore.textContent = `${this.score}/${this.questions.length}`;
                    this.elements.scoreText.textContent = 
                        `Твой результат: ${this.score} из ${this.questions.length} баллов!`;
                    
                    // Детали
                    this.elements.resultDetails.innerHTML = '';
                    this.questions.forEach((question, index) => {
                        const userAnswer = this.userAnswers[index];
                        const isCorrect = userAnswer === question.correct;
                        const userAnswerText = userAnswer !== undefined && userAnswer !== -1 
                            ? question.options[userAnswer] 
                            : '⏰ Не успел!';
                        
                        const resultItem = document.createElement('div');
                        resultItem.style.cssText = `
                            background: ${isCorrect ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)'};
                            padding: 20px;
                            margin: 15px 0;
                            border-radius: 15px;
                            border: 2px solid ${isCorrect ? '#00ff00' : '#ff0000'};
                            transform-style: preserve-3d;
                            animation: questionPulse 4s infinite;
                        `;
                        
                        resultItem.innerHTML = `
                            <div style="display: flex; justify-content: space-between; align-items: start;">
                                <div style="flex: 1;">
                                    <strong style="color: ${isCorrect ? '#00ff00' : '#ff0000'};">
                                        Вопрос ${index + 1}:
                                    </strong>
                                    <div style="margin-top: 10px;">${question.question}</div>
                                    <div style="margin-top: 10px; font-size: 0.9rem;">
                                        <div>🎯 Твой ответ: <span style="color: ${isCorrect ? '#00ff00' : '#ff0000'}">
                                            ${userAnswerText}
                                        </span></div>
                                        <div>✅ Правильно: ${question.options[question.correct]}</div>
                                    </div>
                                    <div style="margin-top: 10px; font-size: 0.85rem; color: #aaa;">
                                        ${question.explanation}
                                    </div>
                                </div>
                                <div style="margin-left: 20px; font-size: 2rem;">
                                    ${isCorrect ? '🏆' : '💥'}
                                </div>
                            </div>
                        `;
                        
                        this.elements.resultDetails.appendChild(resultItem);
                    });
                }, 500);
            }
            
            createConfetti() {
                this.elements.confetti.style.display = 'block';
                this.elements.confetti.innerHTML = '';
                
                const colors = [
                    ['#ff0000', '#ff8800'],
                    ['#00ff00', '#00ff88'],
                    ['#0088ff', '#00ffff'],
                    ['#ff00ff', '#ff88ff'],
                    ['#ffff00', '#ffff88']
                ];
                
                for (let i = 0; i < 150; i++) {
                    const piece = document.createElement('div');
                    piece.className = 'confetti-piece';
                    
                    // Случайный цвет
                    const colorPair = colors[Math.floor(Math.random() * colors.length)];
                    piece.style.setProperty('--color1', colorPair[0]);
                    piece.style.setProperty('--color2', colorPair[1]);
                    
                    // Размер и форма
                    const width = Math.random() * 15 + 5;
                    const height = Math.random() * 25 + 10;
                    piece.style.width = `${width}px`;
                    piece.style.height = `${height}px`;
                    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
                    
                    // Позиция
                    piece.style.left = `${Math.random() * 100}%`;
                    
                    // Анимация
                    const animation = piece.animate([
                        {
                            top: '-50px',
                            opacity: 1,
                            transform: 'rotate(0deg)'
                        },
                        {
                            top: `${100 + Math.random() * 50}%`,
                            opacity: 0.7,
                            transform: `rotate(${Math.random() * 720}deg)`
                        }
                    ], {
                        duration: Math.random() * 3000 + 2000,
                        easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)',
                        delay: Math.random() * 1000
                    });
                    
                    this.elements.confetti.appendChild(piece);
                    
                    // Удаляем после анимации
                    animation.onfinish = () => piece.remove();
                }
                
                // Скрываем через 5 секунд
                setTimeout(() => {
                    this.elements.confetti.style.display = 'none';
                }, 5000);
            }
            
            restartQuiz() {
                this.quizStarted = false;
                
                this.elements.resultScreen.style.animation = 'resultAppear 0.5s reverse forwards';
                setTimeout(() => {
                    this.elements.resultScreen.style.display = 'none';
                    this.elements.startScreen.style.display = 'block';
                    this.elements.startScreen.style.animation = 'screenAppear 0.5s forwards';
                }, 500);
            }
            
            shareResults() {
                const text = `🎮 Я набрал ${this.score} из ${this.questions.length} в АВТО-ВИКТОРИНЕ! 🏁\nПопробуй обогнать меня! 🔥`;
                
                if (navigator.share) {
                    navigator.share({
                        title: 'Авто-Викторина с Огоньком!',
                        text: text,
                        url: window.location.href
                    });
                } else {
                    navigator.clipboard.writeText(text).then(() => {
                        this.showNotification('📋 Результат скопирован!', 'success');
                    });
                }
            }
            
            showNotification(text, type = 'success') {
                this.elements.notificationText.textContent = text;
                this.elements.notification.className = 'notification';
                
                if (type === 'error') {
                    this.elements.notification.style.background = 'linear-gradient(45deg, #ff0000, #ff8800)';
                } else if (type === 'success') {
                    this.elements.notification.style.background = 'linear-gradient(45deg, #00ff00, #00f7ff)';
                }
                
                this.elements.notification.classList.add('show');
                
                setTimeout(() => {
                    this.elements.notification.classList.remove('show');
                }, 3000);
            }
        }
        
        // Запуск при загрузке
        document.addEventListener('DOMContentLoaded', () => {
            const quiz = new ExtremeCarQuiz();
            
            // Добавляем стиль для ripple эффекта
            const style = document.createElement('style');
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        });