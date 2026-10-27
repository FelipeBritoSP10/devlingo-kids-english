
export const STAGES = [
  // 🐾 ANIMALS
  {
    world: "Animals",
    wordEn: "DOG",
    wordPt: "Cachorro",
    hintPt: "É um animalzinho que faz au au!",
    hintEn: "Pronúncia: DÓG",
    options: [
      { emoji: "🐶", labelEn: "DOG", correct: true },
      { emoji: "🐱", labelEn: "CAT", correct: false },
      { emoji: "🐰", labelEn: "RABBIT", correct: false }
    ]
  },
  {
    world: "Animals",
    wordEn: "CAT",
    wordPt: "Gato",
    hintPt: "É um animalzinho que faz miau!",
    hintEn: "Pronúncia: KÉT",
    options: [
      { emoji: "🐰", labelEn: "RABBIT", correct: false },
      { emoji: "🐱", labelEn: "CAT", correct: true },
      { emoji: "🐶", labelEn: "DOG", correct: false }
    ]
  },
  {
    world: "Animals",
    wordEn: "RABBIT",
    wordPt: "Coelho",
    hintPt: "Tem orelhas compridas e gosta de cenouras!",
    hintEn: "Pronúncia: RÉBIT",
    options: [
      { emoji: "🐰", labelEn: "RABBIT", correct: true },
      { emoji: "🐸", labelEn: "FROG", correct: false },
      { emoji: "🐵", labelEn: "MONKEY", correct: false }
    ]
  },

  // 🎨 COLORS
  {
    world: "Colors",
    wordEn: "BLUE",
    wordPt: "Azul",
    hintPt: "É a cor do céu em um dia ensolarado!",
    hintEn: "Pronúncia: BLÚ",
    options: [
      { emoji: "🔴", labelEn: "RED", correct: false },
      { emoji: "🔵", labelEn: "BLUE", correct: true },
      { emoji: "🟡", labelEn: "YELLOW", correct: false }
    ]
  },
  {
    world: "Colors",
    wordEn: "RED",
    wordPt: "Vermelho",
    hintPt: "É a cor de muitos morangos!",
    hintEn: "Pronúncia: RÉD",
    options: [
      { emoji: "🟢", labelEn: "GREEN", correct: false },
      { emoji: "🔴", labelEn: "RED", correct: true },
      { emoji: "🔵", labelEn: "BLUE", correct: false }
    ]
  },
  {
    world: "Colors",
    wordEn: "YELLOW",
    wordPt: "Amarelo",
    hintPt: "É a cor do Sol nos desenhos!",
    hintEn: "Pronúncia: IÉLOU",
    options: [
      { emoji: "🟣", labelEn: "PURPLE", correct: false },
      { emoji: "🟡", labelEn: "YELLOW", correct: true },
      { emoji: "⚫", labelEn: "BLACK", correct: false }
    ]
  },

  // 🔢 NUMBERS
  {
    world: "Numbers",
    wordEn: "FIVE",
    wordPt: "Cinco",
    hintPt: "É o número que vem depois do quatro!",
    hintEn: "Pronúncia: FAIV",
    options: [
    { emoji: "1️⃣", labelEn: "ONE", correct: false },
    { emoji: "2️⃣", labelEn: "TWO", correct: false },
    { emoji: "5️⃣", labelEn: "FIVE", correct: true }
  ]
  },
  {
    world: "Numbers",
    wordEn: "TWO",
    wordPt: "Dois",
    hintPt: "Você tem duas mãos!",
    hintEn: "Pronúncia: TÚ",
    options: [
      { emoji: "3️⃣", labelEn: "THREE", correct: false },
      { emoji: "2️⃣", labelEn: "TWO", correct: true },
      { emoji: "1️⃣", labelEn: "ONE", correct: false }
    ]
  },
  {
    world: "Numbers",
    wordEn: "THREE",
    wordPt: "Três",
    hintPt: "Conte: um, dois, três!",
    hintEn: "Pronúncia: THRÍ",
    options: [
      { emoji: "1️⃣", labelEn: "ONE", correct: false },
      { emoji: "3️⃣", labelEn: "THREE", correct: true },
      { emoji: "2️⃣", labelEn: "TWO", correct: false }
    ]
  },

  // 🍎 FOOD
  {
    world: "Food",
    wordEn: "APPLE",
    wordPt: "Maçã",
    hintPt: "É uma fruta que pode ser vermelha ou verde!",
    hintEn: "Pronúncia: ÉPOL",
    options: [
      { emoji: "🍌", labelEn: "BANANA", correct: false },
      { emoji: "🍎", labelEn: "APPLE", correct: true },
      { emoji: "🍇", labelEn: "GRAPES", correct: false }
    ]
  },
  {
    world: "Food",
    wordEn: "BANANA",
    wordPt: "Banana",
    hintPt: "É uma fruta amarela que os macacos adoram!",
    hintEn: "Pronúncia: BANÉNA",
    options: [
      { emoji: "🍓", labelEn: "STRAWBERRY", correct: false },
      { emoji: "🍌", labelEn: "BANANA", correct: true },
      { emoji: "🍎", labelEn: "APPLE", correct: false }
    ]
  },
  {
    world: "Food",
    wordEn: "PIZZA",
    wordPt: "Pizza",
    hintPt: "É redonda, tem queijo e vários recheios!",
    hintEn: "Pronúncia: PÍTSA",
    options: [
      { emoji: "🍕", labelEn: "PIZZA", correct: true },
      { emoji: "🍰", labelEn: "CAKE", correct: false },
      { emoji: "🍔", labelEn: "BURGER", correct: false }
    ]
  },

  // 🧸 OBJECTS
  {
    world: "Objects",
    wordEn: "BOOK",
    wordPt: "Livro",
    hintPt: "Você pode ler histórias e aprender com ele!",
    hintEn: "Pronúncia: BUK",
    options: [
      { emoji: "✏️", labelEn: "PENCIL", correct: false },
      { emoji: "📚", labelEn: "BOOK", correct: true },
      { emoji: "🎒", labelEn: "BACKPACK", correct: false }
    ]
  },
  {
    world: "Objects",
    wordEn: "BALL",
    wordPt: "Bola",
    hintPt: "Você pode chutar, jogar e brincar com ela!",
    hintEn: "Pronúncia: BÓL",
    options: [
      { emoji: "⚽", labelEn: "BALL", correct: true },
      { emoji: "🧸", labelEn: "TEDDY BEAR", correct: false },
      { emoji: "🚲", labelEn: "BICYCLE", correct: false }
    ]
  },
  {
    world: "Objects",
    wordEn: "PENCIL",
    wordPt: "Lápis",
    hintPt: "Você usa para escrever e desenhar!",
    hintEn: "Pronúncia: PÉNSIL",
    options: [
      { emoji: "📏", labelEn: "RULER", correct: false },
      { emoji: "✏️", labelEn: "PENCIL", correct: true },
      { emoji: "📘", labelEn: "BOOK", correct: false }
    ]
  },

  // 👕 CLOTHES
  {
    world: "Clothes",
    wordEn: "SHIRT",
    wordPt: "Camisa",
    hintPt: "Você veste na parte de cima do corpo!",
    hintEn: "Pronúncia: SHÂRT",
    options: [
      { emoji: "👖", labelEn: "PANTS", correct: false },
      { emoji: "👕", labelEn: "SHIRT", correct: true },
      { emoji: "👟", labelEn: "SHOES", correct: false }
    ]
  },
  {
    world: "Clothes",
    wordEn: "SHOES",
    wordPt: "Sapatos",
    hintPt: "Você usa nos pés para caminhar!",
    hintEn: "Pronúncia: SHÚZ",
    options: [
      { emoji: "🧢", labelEn: "CAP", correct: false },
      { emoji: "👟", labelEn: "SHOES", correct: true },
      { emoji: "🧦", labelEn: "SOCKS", correct: false }
    ]
  },
  {
    world: "Clothes",
    wordEn: "HAT",
    wordPt: "Chapéu",
    hintPt: "Você pode usar na cabeça!",
    hintEn: "Pronúncia: HÉT",
    options: [
      { emoji: "👒", labelEn: "HAT", correct: true },
      { emoji: "👕", labelEn: "SHIRT", correct: false },
      { emoji: "👟", labelEn: "SHOES", correct: false }
    ]
  },

  // 👨‍👩‍👧 FAMILY
  {
    world: "Family",
    wordEn: "MOTHER",
    wordPt: "Mãe",
    hintPt: "É uma pessoa muito especial da família!",
    hintEn: "Pronúncia: MÂDHÂR",
    options: [
      { emoji: "👩", labelEn: "MOTHER", correct: true },
      { emoji: "👨", labelEn: "FATHER", correct: false },
      { emoji: "👦", labelEn: "BROTHER", correct: false }
    ]
  },
  {
    world: "Family",
    wordEn: "FATHER",
    wordPt: "Pai",
    hintPt: "É o papai!",
    hintEn: "Pronúncia: FÁDHÂR",
    options: [
      { emoji: "👧", labelEn: "SISTER", correct: false },
      { emoji: "👨", labelEn: "FATHER", correct: true },
      { emoji: "👩", labelEn: "MOTHER", correct: false }
    ]
  },
  {
    world: "Family",
    wordEn: "BABY",
    wordPt: "Bebê",
    hintPt: "É uma criança bem pequenininha!",
    hintEn: "Pronúncia: BÊIBI",
    options: [
      { emoji: "👶", labelEn: "BABY", correct: true },
      { emoji: "👴", labelEn: "GRANDFATHER", correct: false },
      { emoji: "👨", labelEn: "FATHER", correct: false }
    ]
  },

  // 🏠 HOUSE
  {
    world: "House",
    wordEn: "DOOR",
    wordPt: "Porta",
    hintPt: "Você abre para entrar ou sair de um lugar!",
    hintEn: "Pronúncia: DÓR",
    options: [
      { emoji: "🪟", labelEn: "WINDOW", correct: false },
      { emoji: "🚪", labelEn: "DOOR", correct: true },
      { emoji: "🛏️", labelEn: "BED", correct: false }
    ]
  },
  {
    world: "House",
    wordEn: "BED",
    wordPt: "Cama",
    hintPt: "Você dorme nela à noite!",
    hintEn: "Pronúncia: BÉD",
    options: [
      { emoji: "🪑", labelEn: "CHAIR", correct: false },
      { emoji: "🛏️", labelEn: "BED", correct: true },
      { emoji: "🚪", labelEn: "DOOR", correct: false }
    ]
  },
  {
    world: "House",
    wordEn: "WINDOW",
    wordPt: "Janela",
    hintPt: "Você pode olhar para fora através dela!",
    hintEn: "Pronúncia: UÍNDOU",
    options: [
      { emoji: "🚪", labelEn: "DOOR", correct: false },
      { emoji: "🪟", labelEn: "WINDOW", correct: true },
      { emoji: "🛋️", labelEn: "SOFA", correct: false }
    ]
  },

  // 🌦️ WEATHER
  {
    world: "Weather",
    wordEn: "SUN",
    wordPt: "Sol",
    hintPt: "Ele ilumina o céu durante o dia!",
    hintEn: "Pronúncia: SÂN",
    options: [
      { emoji: "🌙", labelEn: "MOON", correct: false },
      { emoji: "☀️", labelEn: "SUN", correct: true },
      { emoji: "🌧️", labelEn: "RAIN", correct: false }
    ]
  },
  {
    world: "Weather",
    wordEn: "RAIN",
    wordPt: "Chuva",
    hintPt: "Ela cai das nuvens!",
    hintEn: "Pronúncia: RÊIN",
    options: [
      { emoji: "❄️", labelEn: "SNOW", correct: false },
      { emoji: "🌧️", labelEn: "RAIN", correct: true },
      { emoji: "☀️", labelEn: "SUN", correct: false }
    ]
  },
  {
    world: "Weather",
    wordEn: "CLOUD",
    wordPt: "Nuvem",
    hintPt: "Ela fica no céu e pode ser branca ou cinza!",
    hintEn: "Pronúncia: CLÁUD",
    options: [
      { emoji: "🌈", labelEn: "RAINBOW", correct: false },
      { emoji: "☁️", labelEn: "CLOUD", correct: true },
      { emoji: "☀️", labelEn: "SUN", correct: false }
    ]
  },

  // 🚗 TRANSPORTATION
  {
    world: "Transportation",
    wordEn: "CAR",
    wordPt: "Carro",
    hintPt: "Tem quatro rodas e serve para viajar!",
    hintEn: "Pronúncia: CÁR",
    options: [
      { emoji: "🚗", labelEn: "CAR", correct: true },
      { emoji: "✈️", labelEn: "PLANE", correct: false },
      { emoji: "🚀", labelEn: "ROCKET", correct: false }
    ]
  },
  {
    world: "Transportation",
    wordEn: "PLANE",
    wordPt: "Avião",
    hintPt: "Ele voa no céu e transporta pessoas!",
    hintEn: "Pronúncia: PLÊIN",
    options: [
      { emoji: "🚲", labelEn: "BICYCLE", correct: false },
      { emoji: "✈️", labelEn: "PLANE", correct: true },
      { emoji: "🚗", labelEn: "CAR", correct: false }
    ]
  },
  {
    world: "Transportation",
    wordEn: "BOAT",
    wordPt: "Barco",
    hintPt: "Ele navega na água!",
    hintEn: "Pronúncia: BÔUT",
    options: [
      { emoji: "🚂", labelEn: "TRAIN", correct: false },
      { emoji: "⛵", labelEn: "BOAT", correct: true },
      { emoji: "✈️", labelEn: "PLANE", correct: false }
    ]
  }
];
