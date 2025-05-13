const quizData = [
    { question: "HTML расшифровывается как:", a: "Hypertrophic Management Language", b: "Hyperbaric Tertiary Logarithm", c: "Hypertext Markup Language", d: "Hyperresonant Marginal Logarithm", correct: "c" },
    { question: "Каждый HTML-документ должен содержать:", a: "Раздел head с заголовком title и последующим body", b: "Раздел title с заголовком header и последующим body", c: "Только body и header", d: "Ничего из перечисленного", correct: "a" },
    { question: "Раздел head виден пользователю на веб-странице.", a: "Верно", b: "Неверно", correct: "b" },
    { question: "Каждая веб-страница начинается с тега HTML.", a: "Верно", b: "Неверно", correct: "a" },
    { question: "Каждая веб-страница заканчивается тегом body.", a: "Верно", b: "Неверно", correct: "b" },
    { question: "Раздел head отправляется в интернет и не виден пользователю.", a: "Верно", b: "Неверно", correct: "a" },
    { question: "Какой тег вставляет изображение на веб-страницу?", a: "Img src=Glass.jpeg", b: "P....Glass.jpeg..../p", c: "Img file=Glass.jpeg", d: "Picture=Glass.jpeg", correct: "a" },
    { question: "H1 имеет больший размер текста, чем H2.", a: "Верно", b: "Неверно", correct: "a" },
    { question: "Для создания ссылки используется тег (e).", a: "Верно", b: "Неверно", correct: "b"},
    { question: "Какой тег используется для выделения текста?", a: "A", b: "M", c: "Em", d: "Tb", correct: "c" },
    { question: "Какой тег используется для упорядоченного списка?", a: "Lil", b: "Ls", c: "Ol", d: "Os", correct: "c" },
    { question: "Какой тег используется для переноса строки?", a: "Lb", b: "Br", c: "Brk", d: "Ln", correct: "b" },
    { question: "Допустимо добавлять кавычки в текст веб-страницы.", a: "Верно", b: "Неверно", correct: "a" },
    { question: "В адресе www.newcaneynews.com доменное имя это:", a: "Www", b: "Newcaneynews", c: "Com", d: "Www.newcaneynews.com", correct: "b" },
    { question: "Что позволяет передавать HTML-файлы на веб-сервер?", a: "FTP (File Tracking Performance)", b: "FTP (File Transfer Protocol)", c: "BMR (Binary Metric Rhythm)", d: "Ничего из перечисленного", correct: "b" }
  ];
  
  const quiz = document.getElementById('quiz');
  const result = document.getElementById('result');
  const submit = document.getElementById('submit');
  
  function loadQuiz() {
    const output = [];
    quizData.forEach((question, index) => {
      output.push(`
        <div class="question">
          <p>${index + 1}. ${question.question}</p>
          <label class="option"><input type="radio" name="question${index}" value="a"> ${question.a}</label>
          <label class="option"><input type="radio" name="question${index}" value="b"> ${question.b}</label>
          ${question.c ? `<label class="option"><input type="radio" name="question${index}" value="c"> ${question.c}</label>` : ''}
          ${question.d ? `<label class="option"><input type="radio" name="question${index}" value="d"> ${question.d}</label>` : ''}
        </div>
      `);
    });
    quiz.innerHTML = output.join('');
  }
  
  loadQuiz();
  
  submit.addEventListener('click', () => {
    let score = 0;
    quizData.forEach((question, index) => {
      const selected = document.querySelector(`input[name="question${index}"]:checked`);
      if (selected && selected.value === question.correct) {
        score++;
      }
    });
    result.innerHTML = `Вы ответили правильно на ${score} из ${quizData.length} вопросов!`;
  });
  