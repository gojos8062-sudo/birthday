/* ============================================================
 *  EDIT EVERYTHING HERE  💌
 *  This is the only file you need to touch to personalise the site.
 *
 *  PHOTOS: drop your own images into  src/assets/
 *  and change the imports below (keep the same variable names),
 *  or put them in  public/assets/photos/  and use a string path
 *  like "/assets/photos/us.jpg" instead of the imported variable.
 *
 *  MUSIC: put your song at  public/assets/music/song.mp3
 *  (the player shows a friendly note if the file isn't there yet).
 * ============================================================ */

import photoHero from "@/assets/p20.jpeg";
import p4 from "@/assets/p4.jpeg";
import p9 from "@/assets/p9.jpeg";
import p6 from "@/assets/p6.jpeg";
import p3 from "@/assets/p3.jpeg";
import photo1 from "@/assets/yo.jpeg";
import p18 from "@/assets/p18.jpeg";
import p7 from "@/assets/p7.jpeg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import p12 from "@/assets/p12.jpeg";
import photo4 from "@/assets/photo-4.jpg";
import photo5 from "@/assets/photo-5.jpg";
import p14 from "@/assets/p14.jpeg";
import p8 from "@/assets/p8.jpeg";
import photoFinal from "@/assets/photo-final.jpg";
import photo6 from "@/assets/photo-6.jpg";
import photo7 from "@/assets/photo-7.jpg";
import photo8 from "@/assets/photo-8.jpg";
import photo9 from "@/assets/photo-9.jpg";
import p13 from "@/assets/p13.jpeg";
import p15 from "@/assets/p15.jpeg";
import p2 from "@/assets/p2.jpeg";
import p5 from "@/assets/p5.jpeg";
import albumCover from "@/assets/album-cover.jpg";

export const birthdayData = {
  herName: "Mansi",
  myName: "Aditya",
  birthday: "13th of October",

  /* ---------- Entrance password (the answer itself is stored privately as SITE_PASSWORD) ---------- */
  passwordGate: {
    question: "Enter what started us",
    subtitle: "A little secret before the surprise...",
    placeholder: "Type it here",
    buttonLabel: "Unlock ❤️",
    wrongReply: "Hmm, not quite... think back 🥺",
    hint: "Hint: you definitely remember.",
  },

  /* ---------- Welcome screen ---------- */
  welcome: {
    greeting: "Hello, ❤️",
    subtitle: "I made something special for you...",
    question: "Do you want to see your birthday surprise?",
    yesLabel: "YES",
    noLabel: "NO THANKS",
    noReplies: [
      "Are you sure? 🥺",
      "Really? I spent so much time making this 😭",
      "Okay okay... but I'm still asking one more time ❤️",
      "Fine... you win 😭❤️",
    ],
  },

  /* ---------- Hero ---------- */
  hero: {
    subtitle: "Today is all about you.",
    photo: photoHero,
    footnote: "Made with love, just for you.",
  },

  /* ---------- Our story ---------- */
  story: {
    title: "Our little story",
    photo: photo1,
    paragraphs: [
      "We started when you though its over since we shifted. We shared the same walls for six years, but it took falling apart to finally find each other.",
      "Six years in the same building, only to find our way to each other miles away.",
      "So instead of giving you just one birthday wish, I wanted to give you a little journey through some of my favourite moments with you.",
    ],
  },

  /* ---------- Photo memories (8–12 looks best) ---------- */
  memories: [
    { image: p15, date: "Golden hour", caption: "my first click of yours." },
    { image: p13, date: "That afternoon", caption: "first pic jo tune khudse kheechi thi mere phone mein>>>" },
    { image: p2, date: "Slow morning", caption: "cute photo ye tune yellow dress phena tha tabka hai." },
    { image: p5, date: "City lights", caption: "ye sabse sundar tu vasai gayi thi puja mein." },
    { image: p8, date: "Last birthday", caption: "hehe ye walaaa hum na maths padh rahe the iss din" },
    { image: p4, date: "Somewhere warm", caption: "old but hot" },
    { image: p9, date: "Late evening", caption: "Never getting tired of this." },
    { image: p12, date: "Just because", caption: "sleepy mansii tere mummy papa ghumne gaye the raat me aur tu jagi thi" },
    { image: p7, date: "Café date", caption: "iiks ka exam aur tu sleevless aur kya hi kehna" },
    { image: p6, date: "Sunset walk", caption: "tujhe iss din kuch kaata tha ankh pe aur phul gaya tha ek ankh haha" },
    { image: p18, date: "A little surprise", caption: "meet mein to bohot kuch hota hai" },
    { image: p14, date: "Under the lights", caption: "ye meri first fav pic thi hayeeeee." },
  ],

  /* ---------- Timeline ---------- */
  timeline: [
    {
      date: "The beginning",
      title: "September",
      description: "When we first started talking and sending reels",
      image: null,
    },
    {
      date: "A few weeks later",
      title: "New year",
      description: "dheere dheere i was realising",
      image: null,
    },
    {
      date: "Zephyr",
      title: "us and MCD",
      description: "Strips bhi liye the hummmmm.",
      image: null,
    },
    {
      date: "Fiesta",
      title: "Everything happened here kya hi batau hehehehehe",
      description: "",
      image: null,
    },
    {
      date: "flirting started",
      title: "aur tere pet me butterflies bhi",
      description: "Honestly? hamara loving era start hora tha.",
      image: null,
    },
    {
      date: "Serious talks",
      title: "me bhot bhaagra tha hehe",
      description: "slow burn pe lecture and nothing slowed except my thinking capability when i think aboout anything except you",
      image: null,
    },
    {
      date: "Tfirst hand holding",
      title: "Mahindra ke yaha vo bhi 2 sec ke liye hehe",
      description: "Ghar jake bolti hai tu ki galti se hua aur slow burn karna hai.",
      image: null,
    },
    {
      date: "kuch dino baad",
      title: "hath chodh tune arm hug karliya aise",
      description: "Slow burn madam ji?? hehehehehe.",
      image: null,
    },
    {
      date: "Dominoes chothu wala",
      title: "hum bhot kha liye the hehe aur phir iske baad kashigaon jane lage metro se",
      description: "dating started hehehe",
      image: null,
    },
    {
      date: "Waffles",
      title: "tune apne pe gira liya tha hehehe",
      description: "but badiya tha icecream wala bhi try kiye the.",
      image: null,
    },
    {
      date: "Saturday",
      title: "chuthi ke din aaye the sirf padhne haha",
      description: "maths ka 1 module karke hum khane chale gaye lol.",
      image: null,
    },
    {
      date: "skycity",
      title: "hum finally mall gaye pheli baar",
      description: "sirf ghumke aagaye loll phir iske baad toh bhot baar gaye",
      image: null,
    },
    {
      date: "1st movie date",
      title: "movie toh samjha nhi but kafi close the hum aur hamare face teri smell mujhse kafi pasand aayi issdin",
      description: "yaar mujhe ab teri smell ki yaad aarahi.",
      image: null,
    },
    {
      date: "2nd movie date",
      title: "finally movie thodi achi thi",
      description: "uske sath mein aur tu and cuddles aur hum bhot close aaye iss din",
      image: null,
    },
   
  ],

  /* ---------- Things I love about you ---------- */
  loveNotes: [
    {
      emoji: "🌸",
      title: "Your smile",
      message: "itni sundar lips aur smile karte hue jo cheeks ke andar jatee hai!! hayee",
    },
    {
      emoji: "💗",
      title: "The way you care",
      message: "You notice the little things nobody else does, and you never make it a big deal.",
    },
    {
      emoji: "✨",
      title: "Your laugh",
      message: "It's loud, it's unfiltered, and it's my favourite sound in the world.",
    },
    {
      emoji: "☕",
      title: "Your little habits",
      message: "The way you hold your cup with both hands. The way you text. All of it.",
    },
    {
      emoji: "🕯️",
      title: "How you make everything better",
      message: "Bad days get smaller when I'm telling you about them.",
    },
    {
      emoji: "👀",
      title: "The way you look at me",
      message: "Like I'm someone worth sticking around for. I'll never get used to it.",
    },
  ],

  /* ---------- Birthday wishes ---------- */
  wishes: [
    { title: "Your happiness", message: "I hope you always have reasons to smile." },
    { title: "Your dreams", message: "I hope you achieve everything you've ever wished for." },
    { title: "Your heart", message: "I hope you always stay the beautiful person you are." },
    { title: "Your future", message: "I hope this year brings you everything you deserve." },
  ],

  /* ---------- Scrapbook collage ---------- */
  collage: [
    { image: photo3, note: "Us ❤️" },
    { image: photo5, note: "Still one of my favourite pictures." },
    { image: photo1, note: "Never getting tired of this." },
    { image: photo4, note: "That night 🌙" },
    { image: photo6, note: "Coffee dates ☕" },
    { image: photo7, note: "Golden hour with you 🌅" },
    { image: photo8, note: "Tulips for my favourite girl 🌷" },
    { image: photo9, note: "Fairy lights & you ✨" },
  ],

  /* ---------- Song ---------- */
  song: {
    title: "Our Song",
    artist: "Replace me in src/data/birthdayData.ts",
    audio: "/assets/music/song.mp3",
    cover: albumCover,
    note: "This song reminds me of you 🎵",
  },

  /* ---------- Romantic question ---------- */
  dateQuestion: {
    heading: "One more question...",
    question: "Will you be my date tonight? ❤️",
    yesLabel: "YES ❤️",
    maybeLabel: "Maybe...",
    maybeReply: "Take your time... I'll wait 😌❤️",
    yesTitle: "YAYYYYY ❤️",
    yesSubtitle: "Then it's a date.",
  },

  /* ---------- The letter ---------- */
  letter: `Dear Mansi,

sooo......... crezzyyy sabse phele toh Happy Birthday!! babe 🎂, itni sari cheeze hai samajh nhi raha kaha se start karu, itne sare moments tune diye mujhe aur hume ki mein ye hamesha hamesha yaad rakhunga 🥺, hamara ghanto tak baat krna jo phirbhi lagta hai ki bhot jaldi khatam hogaya, thakur village ghumna hum kitni baar ghume hai vo raste crezzy, raat ko sab kaam khatam karke baat krna, meet toh tbh hamara og hai hum meet pe bhot rahe hai.

hamare arguments jo kabhi kabhi kuch derr me hojate but kabhi kabhi kuch dinnn aur teri photos bhejna mujhe like pata hai 1500 pics ke bhot close hai hum hehehehe, tera childish behave krna mere samne jo ki like literally bhot sundar lagta hai mujhe ki tu mere sath itni comfortable hogai hai mujhe nhi laga tha mein kabhi ye sab deserve karne layak banunga but here we are your love has changed me a lot ❤️ aur hamara kdrama dekhna like mene Vincenzo se start kiya tha tere kehne pe aur dekhta raha bhot sari cheeze hai jo ig sirf kuch kuch idhar likhna would be unfair to others.

ye kahani na start ho chuki thi jan 2026 ke new year se hi mein mummy ke sath bedroom me soya tha uss din new year ke din papa gaon gaye the aur raat bhar jo socha hai vo mujhe hi pata but phirbhi theeke tha denial mein hi tha but kabtak hi rehta just couldn't stay apart ek baar tujhe dekhliya toh, phir firsta mein i decided ki ab nhi chupaunga ab hogaya mera so i opened up anddd.. tabhi mujhe realise hogaya tha ki mein kafi flirty huu phir aayi serious talks teri but theeke nothing changed despite slow burn and infact hum aur close aagaye aur touchy hogaye.

Soo bhot sare dates hue bohot sarra milna hua andddd some of my favorite dates aree vese sab hi hehehe tu 2 min ke liyem ilne aaja mein usme bhi bhot khush hojata hu aur sabse cozy toh hum movie date me hi hojate hai, mein nhi janta aage kya hoga but kya hona chaiye aur kya karna hai hume vo pata hai lol enjoy your moment now aur again Happy Birthday meri cutie meri pagli meri chothi si bacchii 🎈 khyal rakha kar apna baki mein toh hu hi hamesha rahunga ✨

I hope today reminds you just how loved you are by me and special for me.

Always yours,
Aditya ❤️`,

  /* ---------- Final surprise ---------- */
  finale: {
    teaser: "Before you go...",
    tease2: "I have one last thing to tell you.",
    buttonLabel: "Tell me ❤️",
    photo: p3,
    message: `You are one of the most beautiful parts of my life.

Thank you for every laugh, every memory, every conversation, and every little moment.

I hope this birthday is only the beginning of another beautiful year for you.

I love you ❤️`,
    signoff: "Made especially for you ❤️",
  },

  /* ============================================================
   *  💞 MINI-GAMES — replace every "REPLACE WITH ..." with your real stuff
   * ============================================================ */

  /* ---------- Game 1: How well do you know us? ----------
   * correctAnswer = index of the right option (0 = first, 3 = last) */
  relationshipQuiz: [
    {
      question: "Easy - Where did we first meet after we opened up?",
      options: ["Dominoes", "Rickshaw", "Metro", "college"],
      correctAnswer: 1,
      correctMessage: "haha bhot shant the dono tune ghar aake kaha tha itna shant tha aaj 😂❤️",
      wrongMessage: "HAHA no 😭 It was actually rickshaw after my ps IE.",
    },
    {
      question: "What was the first TMI shared between us?",
      options: ["A mole", "coloursof ..", "size", "periods"],
      correctAnswer: 0,
      correctMessage: "You still remember that?? 🥹",
      wrongMessage: "Close... but it was REPLACE WITH OUR FIRST TEXT 😂",
    },
    {
      question: "Where was our first date?",
      options: ["Dominoes (mandatory hai har jageh)", "MCD", "Waffles", "cafe"],
      correctAnswer: 1,
      correctMessage: "The best evening ever ❤️",
      wrongMessage: "Nope 😭 It was REPLACE WITH OUR FIRST DATE — you were so nervous aur upar se hamare sath clg se vaha gundavli tak ek aur couple aaye the hehe.",
    },
    {
      question: "Where did we first hold hands",
      options: ["metro", "thakur village", "MCD", "mahindra"],
      correctAnswer: 3,
      correctMessage: "ghar jake bolti hai galti se I'm laughing just thinking about it 😂",
      wrongMessage: "ghar jake yaad kar slow burn ka boli thi😭",
    },
    {
      question: "our first serious talk tune start krne kaha tha after?",
      options: ["after i called you my gf", "after my besharam talk", "after i touched you", "jhagde ke baad"],
      correctAnswer: 0,
      correctMessage: "good girl heheheheheehe",
      wrongMessage: "ye toh yaad hona chaiye na itna serious talks ki thi aur slow burn gandi😭",
    },
    {
      question: "hamari first movie meet mein",
      options: ["hum saath saath hai", "jalebi", "dilwale dhulaniya le jayenge", "ok jaanu"],
      correctAnswer: 1,
      correctMessage: "Say it again, I never get tired of it ❤️",
      wrongMessage: "You say REPLACE WITH SOMETHING SHE ALWAYS SAYS like every day 😂",
    },
    {
      question: "Which song reminds me of you ye tune mujhe bataya tha ek baar guess guess?",
      options: ["maula mere maula", "jeene laga hu", "gehra hua", "raabta"],
      correctAnswer: 2,
      correctMessage: "hehehehehehe",
      wrongMessage: "its gehra hua, silly 🎶",
    },
    {
      question: "When did I realise I was in love with you?",
      options: ["fiesta", "jan month but in denial", "2026 new year", "feb month"],
      correctAnswer: 2,
      correctMessage: "Yes... that was the moment ❤️",
      wrongMessage: "kafi tricky hai hehehe 🥹",
    },
    {
      question: "humne first movie date me cafe me kya padha tha?",
      options: ["DBMS", "kuch nhi", "DCD", "Rmaths"],
      correctAnswer: 2,
      correctMessage: "What a day that was ❤️",
      wrongMessage: "Haha no, it was DCD 😌",
    },
    {
      question: "when did we first hugged?",
      options: ["ip ke din sd ke bd ke baad", "thakur village", "random day metro pe", "lift mein"],
      correctAnswer: 0,
      correctMessage: "You know it ❤️",
      wrongMessage: "It's actually first 🥹",
    },
  ],
  /* Final messages — the first one whose minPercent the score reaches is shown */
  quizResults: [
    { minPercent: 90, message: "You officially know way too much about us 😂❤️" },
    { minPercent: 60, message: "Okay, certified lore expert. I'm impressed 🥹" },
    { minPercent: 30, message: "Not bad... we'll just have to make more memories 😌" },
    { minPercent: 0, message: "Fine, that just means I get to remind you of everything again ❤️" },
  ],

  /* ---------- Game 2: Memory match (8 pairs) ----------
   * Each pair shows `image` on one card and `title` (a caption) on the other.
   * Set matchMode: "photo-photo" to use the same photo on both cards instead. */
  matchMode: "photo-caption" as "photo-caption" | "photo-photo",
  memoryMatchPairs: [
    { id: 1, image: photo1, title: "REPLACE WITH MEMORY CAPTION ❤️" },
    { id: 2, image: photo2, title: "That day at REPLACE 🌸" },
    { id: 3, image: photo3, title: "REPLACE WITH OUR INSIDE JOKE 😂" },
    { id: 4, image: photo4, title: "Our first REPLACE 📸" },
    { id: 5, image: photo5, title: "That late night 🌙" },
    { id: 6, image: photoHero, title: "REPLACE WITH OUR REAL PHOTO 💫" },
    { id: 7, image: photoFinal, title: "Your last birthday 🎂" },
    { id: 8, image: albumCover, title: "Our song 🎶" },
  ],

  /* ---------- Game 3: Who said it? ----------
   * speaker: "me" or "her". photo: an imported photo or null */
  whoSaidIt: [
    { quote: "crush confession", speaker: "her", context: "you said thisand then disappeared 😂", photo: null },
    { quote: "who said ily first", speaker: "me", context: "andddddd slow burn ka sun na pada thaa hehehehe", photo: null },
    { quote: "everytime - I'm not sleepy.", speaker: "her", context: "REPLACE — you fell asleep 4 seconds later 😴", photo: null },
    { quote: "bewdi", speaker: "me", context: "tbh idk why and when hehehe", photo: null },
    { quote: "ankhe samne rakhna teacher pe idhar udhar mat dekhna...", speaker: "her", context: "ip mein jara tha mein toh hehehehe", photo: null },
    { quote: "first time kisne kaha - mujhe nhi samajhra followed by leaving meet", speaker: "her", context: "c++ dsa ke liye patterns padh rhe the aur tune roya tha phele baar mere samne :(", photo: null },
    { quote: "pagal", speaker: "her", context: "always always always hehehe", photo: null },
    { quote: "i hate you", speaker: "her", context: "Tune ek baar kaha tha ek reel ke reply me😂", photo: null },
    { quote: "babieee", speaker: "her", context: "hahahaha mujhe sab yaad hai", photo: null },
    { quote: "shaadi ke baad mujhe beti chaiye sabse first", speaker: "her", context: "hamara jhagda hogaya tha aur mere sone ke baad tune bhot msg kiye the unme se hai ye hehehe ... or was it me? 😌", photo: null },
  ] as { quote: string; speaker: "me" | "her"; context: string; photo: string | null }[],
  whoSaidItEnd: "Okay... you know our conversations suspiciously well 😂❤️",

  /* ---------- Game 4: Our little universe ----------
   * x / y = position in percent (0–100) on the star map */
  memoryUniverse: [
    { icon: "❤️", title: "Our First Conversation", date: "REPLACE WITH DATE", image: photo1, description: "REPLACE WITH OUR STORY", message: "REPLACE WITH A PERSONAL MESSAGE", x: 14, y: 22 },
    { icon: "🌸", title: "That Random Day", date: "REPLACE WITH DATE", image: photo2, description: "We didn't know it then, but this ordinary day would become one of my favorite memories.", message: "REPLACE WITH A PERSONAL MESSAGE", x: 42, y: 12 },
    { icon: "📸", title: "Our Favorite Photo", date: "REPLACE WITH DATE", image: photo4, description: "REPLACE WITH OUR STORY", message: "REPLACE WITH A PERSONAL MESSAGE", x: 78, y: 20 },
    { icon: "🌙", title: "That Late Night", date: "REPLACE WITH DATE", image: photo5, description: "REPLACE WITH OUR STORY", message: "REPLACE WITH A PERSONAL MESSAGE", x: 64, y: 52 },
    { icon: "😂", title: "That One Stupid Joke", date: "REPLACE WITH DATE", image: photo3, description: "REPLACE WITH OUR INSIDE JOKE", message: "REPLACE WITH A PERSONAL MESSAGE", x: 26, y: 58 },
    { icon: "🎂", title: "Another Birthday", date: "REPLACE WITH DATE", image: photoFinal, description: "REPLACE WITH OUR STORY", message: "REPLACE WITH A PERSONAL MESSAGE", x: 50, y: 84 },
    { icon: "✨", title: "REPLACE WITH A MEMORY", date: "REPLACE WITH DATE", image: photoHero, description: "REPLACE WITH OUR STORY", message: "REPLACE WITH A PERSONAL MESSAGE", x: 86, y: 78 },
  ],

  /* ---------- Game 5: The memory vault (3 challenges) ---------- */
  vaultChallenges: {
    date: {
      prompt: "first time tune pair pe pair kab rakha tha",
      options: ["2nd movie date", "first movie data", "cafe", "vo cafe ke baju mein pizza"],
      correctAnswer: 0,
    },
    quote: {
      prompt: "dabaadungi/dabadunga firstt?",
      quote: "yaad hai hahaa",
      correctSpeaker: "her" as "me" | "her",
    },
    photo: {
      prompt: "Which photo belongs to this memory?",
      memory: "first capture mera",
      photos: [p13, p15, p4],
      correctAnswer: 1,
    },
  },
};

export type BirthdayData = typeof birthdayData;
