const translations = {
  pl: {
    navIntro: 'Wprowadzenie',
    navDict: 'Słownik',
    navRules: 'Reguły',
    navExamples: 'Przykłady',

    eyebrow: 'Język minimalny. Myśl rozległa.',
    lead1: 'Najmniejszy język na świecie, zbudowany z 13 podstawowych słów. Każde z nich niesie logiczne znaczenie, a ich połączenia tworzą pełen system komunikacji.',
    lead2: 'To język, w którym redukcja nie znaczy ubóstwo — wręcz odwrotnie. Im mniej zasad, tym wyraźniej widać strukturę myśli.',
    coreLabel: '13 podstawowych słów',

    dictKicker: 'Słownik',
    dictTitle: 'Fundament języka',
    co: 'rzecz, coś',
    do: 'robić, działanie, zdarzenie',
    wi: 'chcieć, pragnienie, wola',
    me: 'umysł, świadomość, myśl',
    te: 'znak, słowo, treść',
    bo: 'dobro, wartość, pozytyw',
    ke: 'pytanie, niewiadoma',
    mu: 'dużo, bardzo, duży',
    pe: 'w, wewnątrz, zawieranie się',
    ne: 'nie, negacja, brak',
    to: 'do, kierunek, cel',
    si: 'ten sam, taki sam, prawda',
    mi: 'tu, ja, bliskość, mówiący',

    rulesKicker: 'Reguły',
    rulesTitle: 'Jak powstają sensy',
    rule1Title: '1. Łączenie słów',
    rule1Text: 'Gdy kilka słów tworzy jedną spójną całość, zapisuje się je razem bez przerw.',
    rule1Meaning: '<em>dużo rozumnych rzeczy</em> = ludzie = ludzkość',
    rule2Title: '2. Zaprzeczenie',
    rule2Text: 'Negacja <strong>ne</strong> jest zawsze przyczepiona do słowa, które zaprzecza.',
    rule2Meaning: '<em>nie dużo</em> = mało',
    rule3Title: '3. Liczby',
    rule3Text: 'Liczby zapisuje się w systemie binarnym: <strong>ne = 0</strong>, <strong>si = 1</strong>.',
    rule3Meaning: 'To pozwala rozbijać liczbę na prosty ciąg symboli logicznych.',

    examplesKicker: 'Przykłady',
    examplesTitle: 'Wyrazy i pojęcia złożone',
    ex1Title: 'Eksploracja i poznanie',
    ex1a: 'jaki byt? / czym jest rzecz?',
    ex1b: 'wielka komunikacja / oświecenie',
    ex2Title: 'Wartość i etyka',
    ex2a: 'dobra świadomość / etyka',
    ex2b: 'brak dobra / zło',
    ex3Title: 'Działanie i cel',
    ex3a: 'działanie wobec mnie / zbliżanie się',
    ex3b: 'dążenie do dobra / cel moralny',
    ex4Title: 'Relacja i istnienie',
    ex4a: 'zawieranie się we mnie / bliskość',
    ex4b: 'rzecz wypowiedziana / symboliczny byt',
    ex5Title: 'Ilość i brak',
    ex5a: 'wiele dobra / obfitość wartości',
    ex5b: 'brak słów / milczenie',
    ex6Title: 'Wola i cel',
    ex6a: 'silne pragnienie / ambicja',
    ex6b: 'chcieć dobra / moralne zamiary',

    footer: 'Stworzony przez Igoe0309'
  },

  en: {
    navIntro: 'Introduction',
    navDict: 'Dictionary',
    navRules: 'Rules',
    navExamples: 'Examples',

    eyebrow: 'Minimal language. Endless thought.',
    lead1: 'The smallest language in the world, built from 13 core words. Each one carries a logical meaning, and their combinations form a complete communication system.',
    lead2: 'This is a language where reduction does not mean poverty — quite the opposite. The fewer the rules, the clearer the structure of thought becomes.',
    coreLabel: '13 core words',

    dictKicker: 'Dictionary',
    dictTitle: 'The foundation of the language',
    co: 'thing, something',
    do: 'to do, action, event',
    wi: 'to want, desire, will',
    me: 'mind, awareness, thought',
    te: 'sign, word, content',
    bo: 'good, value, positivity',
    ke: 'question, unknown',
    mu: 'many, very, big',
    pe: 'in, within, containing',
    ne: 'not, negation, absence',
    to: 'towards, direction, purpose',
    si: 'same, identical, truth',
    mi: 'here, I, closeness, speaker',

    rulesKicker: 'Rules',
    rulesTitle: 'How meaning is formed',
    rule1Title: '1. Joining words',
    rule1Text: 'When several words form one coherent whole, they are written together without spaces.',
    rule1Meaning: '<em>many intelligent things</em> = people = humanity',
    rule2Title: '2. Negation',
    rule2Text: 'Negation <strong>ne</strong> is always attached to the word being negated.',
    rule2Meaning: '<em>not much</em> = little',
    rule3Title: '3. Numbers',
    rule3Text: 'Numbers are written in binary: <strong>ne = 0</strong>, <strong>si = 1</strong>.',
    rule3Meaning: 'This allows a number to be broken into a simple sequence of logical symbols.',

    examplesKicker: 'Examples',
    examplesTitle: 'Complex words and concepts',
    ex1Title: 'Exploration and understanding',
    ex1a: 'what kind of thing? / what is this thing?',
    ex1b: 'great communication / illumination',
    ex2Title: 'Value and ethics',
    ex2a: 'good awareness / ethics',
    ex2b: 'absence of good / evil',
    ex3Title: 'Action and purpose',
    ex3a: 'action toward me / approaching',
    ex3b: 'striving for good / moral purpose',
    ex4Title: 'Relation and existence',
    ex4a: 'contained within me / closeness',
    ex4b: 'spoken thing / symbolic being',
    ex5Title: 'Quantity and absence',
    ex5a: 'much good / abundance of value',
    ex5b: 'lack of words / silence',
    ex6Title: 'Will and purpose',
    ex6a: 'strong desire / ambition',
    ex6b: 'wanting good / moral intention',

    footer: 'Created by Igoe0309'
  }
};

const storedLang = localStorage.getItem('nemute-lang') || 'pl';
let currentLang = storedLang;

const applyLanguage = (lang) => {
  const langPack = translations[lang] || translations.pl;

  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const value = langPack[key];

    if (!value) return;

    if (element.tagName === 'STRONG' || element.tagName === 'EM') {
      element.innerHTML = value;
    } else {
      element.innerHTML = value;
    }
  });

  const buttons = document.querySelectorAll('.lang-btn');
  buttons.forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });

  currentLang = lang;
  localStorage.setItem('nemute-lang', lang);
};

const langButtons = document.querySelectorAll('.lang-btn');
langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyLanguage(button.dataset.lang);
  });
});

applyLanguage(currentLang);
























































































































































































































































































































































































































































































































































































































































































































































































































































n















