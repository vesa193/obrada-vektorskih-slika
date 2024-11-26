const base = window.location.pathname.split("/test.html")[0];
const questions = [
  {
    id: 1,
    question: "Šta označava skraćenica EPS?",
    answers: [
      {
        id: 0,
        at: "a",
        text: "Encoded PostScript",
        correct: false,
      },
      { id: 1, at: "b", text: "Encapsulated Portable Script", correct: false },
      { id: 2, at: "c", text: "Encapsulated PostScript", correct: true },
      { id: 3, at: "d", text: "Extended PostScript", correct: false },
    ],
    img: { src: `${base}/assets/logotypes/eps-logo.svg`, alt: "EPS logo" },
  },
  {
    id: 2,
    question: "Koja je glavna karakteristika vektorske grafike?",
    answers: [
      {
        id: 4,
        at: "a",
        text: "Koristi matematičke formule za prikaz slika",
        correct: true,
      },
      { id: 5, at: "b", text: "Sastoji se od piksela", correct: false },
      {
        id: 6,
        at: "c",
        text: "Gubi kvalitet prilikom skaliranja",
        correct: false,
      },
      {
        id: 7,
        at: "d",
        text: "Ograničena je na crno-belu boju",
        correct: false,
      },
    ],
    img: {
      src: `${base}/assets/test-img/raster-vs-vector.jfif`,
      alt: "Raster vs Vector",
    },
  },
  {
    id: 3,
    question:
      "Koji Adobe format je industrijski standard za čuvanje vektorskih datoteka?",
    answers: [
      { id: 8, at: "a", text: "EPS", correct: false },
      { id: 9, at: "b", text: "AI", correct: true },
      { id: 10, at: "c", text: "PDF", correct: false },
      { id: 11, at: "d", text: "PNG", correct: false },
    ],
    img: {
      src: `${base}/assets/img/install-ai.png`,
      alt: "Install Adobe Illustrator",
    },
  },
  {
    id: 4,
    question: "Koja je prednost PDF formata?",
    answers: [
      {
        id: 12,
        at: "a",
        text: "Kompatibilan je samo sa Adobe softverom",
        correct: false,
      },
      { id: 13, at: "b", text: "Podržava šifrovanje i zaštitu", correct: true },
      {
        id: 14,
        at: "c",
        text: "Ima ograničen kvalitet pri štampi",
        correct: false,
      },
      {
        id: 15,
        at: "d",
        text: "Sadrži samo tekstualne informacije",
        correct: false,
      },
    ],
    img: { src: `${base}/assets/img/pdf-logo.png`, alt: "PDF logo" },
  },
  {
    id: 5,
    question: "Šta omogućava AI format?",
    answers: [
      {
        id: 16,
        at: "a",
        text: "Skaliranje bez gubitka kvaliteta",
        correct: true,
      },
      { id: 17, at: "b", text: "Kreiranje animacija", correct: false },
      {
        id: 18,
        at: "c",
        text: "Dodavanje efekata kao što su prozirnost i senke samo u Photoshopu",
        correct: false,
      },
      {
        id: 19,
        at: "d",
        text: "Prikazivanje teksta bez vektora",
        correct: false,
      },
    ],
    img: { src: `${base}/assets/logotypes/ai-logo.png`, alt: "AI logo" },
  },
  {
    id: 6,
    question:
      "Koji format omogućava lako konvertovanje vektorske slike u druge formate?",
    answers: [
      { id: 20, at: "a", text: "JPEG", correct: false },
      { id: 21, at: "b", text: "BMP", correct: false },
      { id: 22, at: "c", text: "AI", correct: true },
      { id: 23, at: "d", text: "GIF", correct: false },
    ],
    img: {
      src: `${base}/assets/test-img/girl-dancing.jfif`,
      alt: "Girl dancing",
    },
  },
  {
    id: 7,
    question: "Šta se dešava sa PDF-om kada se otvori na različitim uređajima?",
    answers: [
      { id: 24, at: "a", text: "Menja svoj izgled", correct: false },
      { id: 25, at: "b", text: "Zadržava originalni izgled", correct: true },
      {
        id: 26,
        at: "c",
        text: "Ne može se otvoriti na mobilnim uređajima",
        correct: false,
      },
      { id: 27, at: "d", text: "Pretvara se u JPEG format", correct: false },
    ],
    img: { src: `${base}/assets/test-img/pdf-vector.jfif`, alt: "PDF vector" },
  },
  {
    id: 8,
    question: "Za šta se EPS format najčešće koristi?",
    answers: [
      {
        id: 28,
        at: "a",
        text: "Raster slike visoke rezolucije",
        correct: false,
      },
      {
        id: 29,
        at: "b",
        text: "Prikazivanje multimedijalnog sadržaja",
        correct: false,
      },
      {
        id: 30,
        at: "c",
        text: "Dizajn logotipa i vektorskih ilustracija",
        correct: true,
      },
      { id: 31, at: "d", text: "Prikazivanje video zapisa", correct: false },
    ],
    img: { src: `${base}/assets/logotypes/eps-logo.svg`, alt: "EPS logo" },
  },
  {
    id: 9,
    question:
      "Koji format se koristi za čuvanje dokumenata koji moraju biti tačno prikazani bez obzira na uređaj?",
    answers: [
      { id: 33, at: "a", text: "BMP", correct: false },
      { id: 34, at: "b", text: "PNG", correct: false },
      {
        id: 35,
        at: "c",
        text: "AI",
        correct: false,
      },
      { id: 36, at: "d", text: "PDF", correct: true },
    ],
    img: {
      src: `${base}/assets/test-img/doc-on-phone.jfif`,
      alt: "Doc on phone",
    },
  },
  {
    id: 10,
    question:
      "Koji format nudi mogućnost šifrovanja i zaštite dokumenta lozinkom?",
    answers: [
      { id: 37, at: "a", text: "JPEG", correct: false },
      { id: 38, at: "b", text: "PDF", correct: true },
      {
        id: 39,
        at: "c",
        text: "BMP",
        correct: false,
      },
      { id: 40, at: "d", text: "GIF", correct: false },
    ],
    img: { src: `${base}/assets/test-img/doc-password.png`, alt: "EPS logo" },
  },
];

class State {
  currentIndex = 0;
  answers = {};
  result = 0;

  increaseCurrentIndex() {
    if (this.currentIndex === questions.length - 1) return;
    ++this.currentIndex;
  }

  decreaseCurrentIndex() {
    if (this.currentIndex === 0) return;
    --this.currentIndex;
  }

  setAnswer(questionId, answer) {
    this.answers[questionId] = answer;
  }

  getAnswer(questionId) {
    return this.answers[questionId];
  }

  isAnswerCorrect(questionId, answerId) {
    const question = questions.find((q) => q.id === questionId);
    return question.answers.find((a) => a.id === answerId).correct;
  }

  getAnswers() {
    return this.answers;
  }

  getResult() {
    const correctAnswers = Object.values(this.answers).map((value) => {
      return Number(value.correct);
    });

    const result = correctAnswers.reduce((a, b) => a + b, 0);

    this.result = (result / 10) * 100;
    return this.result;
  }

  resetState() {
    this.currentIndex = 0;
    this.answers = {};
    this.result = 0;
    window.location.reload();
  }
}

const state = new State();

function renderAllButtons() {
  const card = document.querySelector(".card");
  const btnsWrapper = document.createElement("div");
  const testControlls = document.createElement("div");
  const exitBtn = document.createElement("button");
  const nextBtn = document.createElement("button");
  const prevBtn = document.createElement("button");

  const buttonStyle = (btnType = "primary") =>
    btnType === "primary" ? ["btn", "btn-primary"] : ["btn", `btn-${btnType}`];
  const btnsWrapperStyle = [
    "btns-wrapper",
    "d-flex",
    "justify-content-between",
    "p-3",
  ];

  const testControllsStyle = ["d-flex", "gap-2"];

  nextBtn.classList.add(...buttonStyle("primary"));
  nextBtn.dataset.dir = "next";
  nextBtn.textContent = "Dalje";

  prevBtn.classList.add(...buttonStyle("primary"));
  prevBtn.dataset.dir = "prev";
  prevBtn.textContent = "Nazad";

  if (state.currentIndex === 0) {
    prevBtn.classList.add("disabled");
  }

  exitBtn.classList.add(...buttonStyle("danger"));
  exitBtn.dataset.dir = "exit";
  exitBtn.textContent = "Izađi";
  exitBtn.dataset.bsToggle = "modal";
  exitBtn.dataset.bsTarget = "#confirmationExitModal";

  btnsWrapper.classList.add(...btnsWrapperStyle);

  testControlls.classList.add(...testControllsStyle);
  testControlls.appendChild(prevBtn);
  testControlls.appendChild(nextBtn);

  btnsWrapper.appendChild(testControlls);
  btnsWrapper.appendChild(exitBtn);

  card.insertAdjacentElement("beforeend", btnsWrapper);
}

function deleteCurrentAnswers() {
  const options = document.querySelector("ul.options");
  while (options.firstChild) {
    options.removeChild(options.firstChild);
  }
}

function renderTestImage(currentIndex, cardBody) {
  const img = document.createElement("img");
  img.classList.add("card-img");
  img.src = questions[currentIndex].img.src;
  img.alt = questions[currentIndex].img.alt;
  cardBody.appendChild(img);
}

function renderQuestionAndAnswers(currentIndex) {
  const cardBody = document.querySelector(".card-body");
  const cardTitle = document.querySelector("h5.card-title");
  const options = document.querySelector("ul.options");
  const cardImage = document.querySelector("img.card-img");

  if (cardImage) {
    cardBody.removeChild(cardImage);
  }

  cardTitle.style.minHeight = 80;
  cardTitle.style.margin = 0;
  cardTitle.textContent = `${currentIndex + 1}. ${questions[currentIndex].question}`;

  questions[currentIndex].answers.forEach((answer) => {
    const optionItem = document.createElement("li");
    const optionRadioInput = document.createElement("input");
    const optionRadioLabel = document.createElement("label");
    const itemIndex = questions[currentIndex].id;

    optionItem.classList.add("option-item");
    optionItem.classList.add("form-check");
    optionItem.dataset.question = itemIndex;
    optionRadioInput.type = "radio";
    optionRadioInput.name = "answer";
    optionRadioInput.classList.add("form-check-input");
    optionRadioInput.id = `radio-${answer.id}`;
    optionRadioLabel.classList.add("form-check-label");
    optionRadioLabel.setAttribute("for", `radio-${answer.id}`);
    optionRadioLabel.textContent = `${answer.at}) ${answer.text}`;
    optionItem.appendChild(optionRadioInput);
    optionItem.appendChild(optionRadioLabel);
    options.appendChild(optionItem);
  });

  handleTestAnswers();
  renderTestImage(currentIndex, cardBody);
}

function handleTestControlls(dir, state) {
  if (dir === "next") {
    state.increaseCurrentIndex();
    return;
  }

  state.decreaseCurrentIndex();
}

function renderDivider() {
  const card = document.querySelector(".card");
  const hr = document.createElement("hr");
  hr.classList.add("m-0");
  card.insertAdjacentElement("beforeend", hr);
}

function setModalDefaultConfigs() {
  const modal = document.querySelector("#resultModal");
  modal.classList.add("pe-none");
}

function createFinishBtnElement() {
  const finishBtn = document.createElement("button");
  finishBtn.dataset.dir = "finish";
  finishBtn.dataset.bsToggle = "modal";
  finishBtn.dataset.bsTarget = "#resultModal";
  finishBtn.classList.add("btn", "btn-success", "d-none");
  finishBtn.textContent = "Potvrdi";

  return finishBtn;
}

function initApp(state) {
  renderQuestionAndAnswers(state.currentIndex);
  renderDivider();
  renderAllButtons();
  setModalDefaultConfigs();
}

function handlePrevButtonOnClick({
  state,
  finishBtn,
  exitBtn,
  prevBtn,
  nextBtn,
}) {
  nextBtn.classList.remove("disabled");

  handleTestControlls("prev", state);
  deleteCurrentAnswers();
  renderQuestionAndAnswers(state.currentIndex);
  findAndCheckAnswer();

  if (state.currentIndex === 0) {
    prevBtn.classList.add("disabled");
    return;
  }

  finishBtn.classList.add("d-none");
  exitBtn.classList.remove("d-none");
}

function handleNextButtonOnClick({
  state,
  finishBtn,
  exitBtn,
  prevBtn,
  nextBtn,
}) {
  prevBtn.classList.remove("disabled");

  handleTestControlls("next", state);
  deleteCurrentAnswers();
  renderQuestionAndAnswers(state.currentIndex);
  findAndCheckAnswer();

  if (state.currentIndex === questions.length - 1) {
    nextBtn.classList.add("disabled");
    exitBtn.classList.add("d-none");
    finishBtn.classList.remove("d-none");

    if (Object.keys(state.getAnswers()).length === 0) {
      finishBtn.classList.add("disabled");
      return;
    }
  }
}

function handleFinishButtonOnClick({ state }) {
  const resultModal = document.querySelector("#resultModal");
  const resultModalActions = resultModal.querySelectorAll("button");
  const resultModalParagraph = document.createElement("p");
  const resultModalLoader = new Image();
  const resultModalImage = new Image();

  const imageClasses = ["img-fluid", "rounded", "d-block", "mx-auto"];

  resultModalParagraph.classList.add("fst-italic", "fs-3", "text-center");
  resultModalParagraph.textContent = `Procenat uspešnosti: ${state.getResult()}%`;

  resultModalLoader.src = `${base}/assets/img/spinner.gif`;
  resultModalLoader.classList.add(...imageClasses);
  resultModalLoader.style.minHeight = "200px";

  resultModalImage.src =
    state.getResult() >= 50
      ? `${base}/assets/img/congrats.gif`
      : `${base}/assets/img/babyknowle-memes.gif`;
  resultModalImage.classList.add(...imageClasses);
  resultModalImage.style.minHeight = "200px";

  resultModal.querySelector(".modal-body").appendChild(resultModalLoader);

  resultModalActions.forEach((button) => {
    button.classList.add("disabled");
  });

  setTimeout(() => {
    resultModalLoader.parentNode.removeChild(resultModalLoader);
    resultModal.querySelector(".modal-body").appendChild(resultModalParagraph);
    resultModal.querySelector(".modal-body").appendChild(resultModalImage);
    resultModalActions.forEach((button) => {
      button.classList.remove("disabled");
    });
  }, 2500);

  resultModalActions.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.dir === "exitTest") {
        window.location = "index.html";
        return;
      }

      window.location.reload();
    });
  });
}

function handleExitFromTestButtonOnClick() {
  window.location = "index.html";
}

function updateTestView(state) {
  const nextBtn = document.querySelector("button[data-dir='next']");
  const prevBtn = document.querySelector("button[data-dir='prev']");
  const exitBtn = document.querySelector("button[data-dir='exit']");
  const finishBtn = createFinishBtnElement();
  const btnsWrapper = document.querySelector(".btns-wrapper");
  const exitFromTestBtn = document.querySelector(
    "button[data-dir='exitFromTest']"
  );

  btnsWrapper.appendChild(finishBtn);

  prevBtn.addEventListener("click", () => {
    handlePrevButtonOnClick({ state, finishBtn, exitBtn, prevBtn, nextBtn });
  });

  nextBtn.addEventListener("click", () => {
    handleNextButtonOnClick({ state, finishBtn, exitBtn, prevBtn, nextBtn });
  });

  finishBtn.addEventListener("click", () => {
    handleFinishButtonOnClick({ state });
  });

  exitFromTestBtn.addEventListener("click", () => {
    handleExitFromTestButtonOnClick();
  });

  handleTestAnswers();
}

function handleTestAnswers() {
  const options = document.querySelector("ul.options");
  const finishBtn = document.querySelector("button[data-dir='finish']");

  let questionId;
  let answerId;

  options.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      questionId = +input.parentNode.dataset.question;
      answerId = +input.id.split("-")[1];

      const answer = {
        answerId,
        correct: state.isAnswerCorrect(questionId, answerId),
      };
      state.setAnswer(questionId, answer);

      if (Object.keys(state.getAnswers()).length) {
        finishBtn?.classList.remove("disabled");
      }
    });
  });
}

function findAndCheckAnswer() {
  const optionItem = document.querySelectorAll(
    `.option-item[data-question='${state.currentIndex + 1}']`
  );

  optionItem.forEach((item) => {
    item.querySelectorAll("input[type=radio]").forEach((input) => {
      const answer = state.getAnswer(state.currentIndex + 1);
      const radioId = +input.id.split("-")[1];

      if (answer?.answerId === radioId) {
        input.checked = true;
      }
    });
  });
}

function app() {
  initApp(state);
  updateTestView(state);
}

document.addEventListener("DOMContentLoaded", () => {
  app();
});
