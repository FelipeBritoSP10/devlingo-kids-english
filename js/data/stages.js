export const STAGES = [
  {
    wordEn: "DOG",
    wordPt: "Cachorro",
    hintPt: "É um animalzinho que faz 'au au'!",
    hintEn: "Pronúncia: DÓG",
    options: [
      { emoji: "🐶", labelEn: "DOG", correct: true },
      { emoji: "🐱", labelEn: "CAT", correct: false },
      { emoji: "🐰", labelEn: "RABBIT", correct: false }
    ]
  },
  {
    wordEn: "CAT",
    wordPt: "Gato",
    hintPt: "É um animalzinho que faz 'miau'!",
    hintEn: "Pronúncia: KÉT",
    options: [
      { emoji: "🍎", labelEn: "APPLE", correct: false },
      { emoji: "🐱", labelEn: "CAT", correct: true },
      { emoji: "🚗", labelEn: "CAR", correct: false }
    ]
  },
  {
    wordEn: "CAR",
    wordPt: "Carro",
    hintPt: "Tem 4 rodas e serve para viajar!",
    hintEn: "Pronúncia: CÁR",
    options: [
      { emoji: "🚗", labelEn: "CAR", correct: true },
      { emoji: "✈️", labelEn: "PLANE", correct: false },
      { emoji: "🚀", labelEn: "ROCKET", correct: false }
    ]
  }
];