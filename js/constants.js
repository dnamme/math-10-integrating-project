const FPS = 30;

const DRAWMODE = {
    LOADING: {
        BASE: 0,
        IDLE: 0.1,
        TRANSITION_FADE: 0.2,
        IDLE_BLACK: 0.3,
    },

    STORY_LIGHTNING: {
        BASE: 9,
        BOLT: 9.1,
        IDLE: 9.2,
        TRANSITION_FADEOUT: 9.3
    },
    STORY_HOOD_TP: {
        BASE: 10,
        TRANSITION_FADEIN: 10.1,
        IDLE: 10.2,
        TRANSITION_FADEOUT: 10.3,
        IDLE_BLACK: 10.4
    },
    STORY_HOOD_SPOTLIGHT_1: {
        BASE: 11,
        TRANSITION_FADEIN: 11.1,
        DIALOGUE: 11.2
    },
    STORY_FEATURE: 12,
    STORY_HOOD_SPOTLIGHT_2: 13,
    STORY_STRATEGY: 14,
    STORY_CRASH: 15,
    STORY_APPEAR: 16,

    BATTLE_VS: 20,
    BATTLE_DEFAULT: 21,
    BATTLE_MAIN: 22,
    BATTLE_FIGHT: 23,
    BATTLE_QUESTION: 24,
    BATTLE_MEME: 25,
    BATTLE_FOCUS_PLAYER: 26,
    BATTLE_FOCUS_FOE: 27,

    BATTLE_END: 29,

    POST_EPILOGUE: 30,
    POST_CREDITS: 31,
    POST_FINAL: 32
};

const SCRIPT = {
    STORY_LIGHTNING: [
        ["As you wake up,", "all you see is darkness."],
        ["You remember nothing but", "the loud thunder strike"],
        ["before blacking out.", ""]
    ],
    STORY_HOOD_TP: [
        ["Suddenly, an unknown presence", "appears in front of you."],
        ["You realize that you have", "entered another dimension."]
    ],
    STORY_HOOD_SPOTLIGHT_1: [
        ["Welcome, young travelers.", "Time is of the essence,"],
        ["and I have much to explain.", ""],
        ["You have been summoned into", "the realm of the Sia Region,"],
        ["and I need your powers", "to bring back the light."],
        ["Deep into the Sia Region", "exists a castle inhabited"],
        ["by an evil presence...", ""]
    ],
    STORY_FEATURE: [
        ["Calvin Sia", "Overload and Supreme Leader"],
        ["He is no presence to reckon", "with as he is slowly consuming"],
        ["the Sia Region with the", "mastery of his dark techniques."]
    ],
    STORY_HOOD_SPOTLIGHT_2: [
        ["However, young travelers, you", "are the chosen ones destined"],
        ["to bring back the light", "in the Sia Region."],
        ["We may never know when", "he will strike, but..."],
        ["You are all gifted with", "special powers of which is"],
        ["humanity's last hope.", ""]
    ],
    STORY_STRATEGY: [
        ["\"Don't you think something", "smells fishy here?\""],
        ["\"We are humanity's last hope,", "what is he saying?\""],
        ["\"Wait, where did he g-\"", ""]
    ],
    STORY_CRASH: [
        "You hear something break.", ""
    ],
    STORY_APPEAR: [
        ["MWAHAHAHAHAHAA!!!", ""],
        ["\"It is I, Overlord and", "Supreme Leader Calvin!\""],
        ["\"Get ready to meet your demise!\"", ""]
    ],
    BATTLE: {
        notAllowed: ["You can't do that here!", ""],
        moves: {
            player: {
                used: "Group Four used ",
                names: [
                    "Clarification",
                    "\"Thank you sir\"",
                    "Cringe at joke",
                    "Laugh at joke",
                    "Integrating Project"
                ],
                lastName: ["Integrating", "Project"]
            },
            opponent: {
                used: "Sir Calvin used ",
                names: [
                    "Math question",
                    "Meme",
                    "Problem Set",
                    "Oral Exam",
                    "Kahoot Session"
                ]
            }
        },
        effectiveness: [
            "It's not very effective...",
            "It's super effective!"
        ],
        answerCorrect: "Correct answer!",
        answerIncorrect: "That was the wrong answer."
    }
};

const QUESTIONS = [
    {
        question: [
            "Which of the following is",
            "not a Mathematical concept?"
        ],
        choices: [
            "Golden Ratio",
            "Golden Square",
            "Golden Rectangle",
            "Golden Angle"
        ],
        answer: 1
    }, {
        question: [
            "Leonardo Bonnaci is an Italian",
            "mathematician known for",
            "popularizing the Hindu-Arabic",
            "numeral system and the",
            "Fibonacci Sequence.",
            "But what does Fibonnaci mean?"
        ],
        choices: [
            "Leonardo the Traveler from Pisa",
            "Child of Bonacci",
            "Leonardo Bigollo Pisano",
            "Son of Bonacci"
        ],
        answer: 3
    }, {
        question: [
            "Mathematics has evolved to be",
            "the study of numbers, shapes,",
            "motion, change, space and of the",
            "mathematical tools that are used",
            "in this study."
        ],
        choices: [
            "True",
            "False"
        ],
        answer: 0
    }, {
        question: [
            "The book \"Euclid's Elements\"",
            "was first to become popular",
            "than the Bible."
    ],
        choices: [
            "True",
            "False"
        ],
        answer: 1
    }, {
        question: [
            "Which of the following gives the",
            "closest approximation to the",
            "value of the Golden Ratio?"
        ],
        choices: [
            "1.6180",
            "1.6530",
            "2.618",
            "3.14"
        ],
        answer: 0
    }, {
        question: [
            "Mathematics as a Language is",
            "powerful because of the ability",
            "to be able to write somethings",
            "down with sureness."
        ],
        choices: [
            "True",
            "False"
        ],
        answer: 1
    },/* {
        question: [
            "Let p and q be the propositions:",
            "\"p: Algebra is a zebra.\" and",
            "\"q:  Graphs are giraffes.\".",
            "Then - p ^ q is:"
        ],
        choices: [
            "Algebra is not a zebra and graphs are not giraffes.",
            "Algebra is a zebra and graphs are not giraffes.",
            "Algebra is not a zebra and graphs are giraffes.",
            "Graphs are giraffes and algebra is a zebra."
        ],
        answer: 2
    }, */{
        question: [
            "How many elements are in the set",
            "{{7,-77,7},{-77,7},{7}}?"
        ],
        choices: [
            "1",
            "2",
            "3",
            "4"
        ],
        answer: 1
    }, {
        question: [
            "Is the set {7,7,7,7,7,7,7,7,7,7,",
            "777,7,7,7,7,7,77,7,7,7,7,7,77,7,",
            "7,7,7,7,7,7,7,77} a singleton?"
        ],
        choices: [
            "True",
            "False"
        ],
        answer: 1
    }, {
        question: [
            "Zero (0) is a _____."
        ],
        choices: [
            "Positive Number",
            "Negative Number",
            "All of the Above",
            "None of the Above"
        ],
        answer: 3
    }, {
        question: [
            "An even number plus an odd number",
            "is still even."
        ],
        choices: [
            "True",
            "False"
        ],
        answer: 1
    },/* {
        question: 
        [
            "What happens when I subtract an",
            "odd number with an odd number?"
        ],
        choices: [
            "The difference is an even number.",
            "The difference is an odd number.",
            "The difference isn't even a number.",
            "The difference most probably doesn't exist."
        ],
        answer: 0
    }, */{
        question: [
            "What should I multiply an odd",
            "number to to get a product that",
            "is odd?"
        ],
        choices: [
            "Multiply it by an even number.",
            "Multiply it by an odd number.",
            "Multiply it by zero.",
            "Go study Module 3 again."
        ],
        answer: 1
    }, {
        question: [
            "If the hours spent for studying",
            "Math 10 modules is positively and",
            "strongly correlated to a higher",
            "grade, then more hours spent",
            "studying produces higher grades."
        ],
        choices: [
            "True",
            "False"
        ],
        answer: 1
    }, {
        question: [
            "It is possible to have a negative",
            "range."
        ],
        choices: [
            "True",
            "False "
        ],
        answer: 1
    }, {
        question: [
            "What is the median of the values",
            "1, 2, 5, 1, 3, 5, 1, 2?"
        ],
        choices: [
            "1",
            "3.5",
            "2",
            "2.5"
        ],
        answer: 2
    }, {
        question: [
            "In a sample, they give the",
            "following values: 12,890, 19,032,",
            "12,093, 15,051, and 14,560",
            "and you were asked to solve the",
            "standard deviation. What function",
            "will you use in excel?"
        ],
        choices: [
            "=STDEV.P",
            "=STDEV.S",
            "=STANDARDIZE",
            "=STAND.DEV"
        ],
        answer: 1
    }, {
        question: [
            "Approximately how many percent",
            "of the area under a normal curve",
            "(above the x-axis) falls within",
            "three standard deviations to",
            "the right from the mean."
        ],
        choices: [
            "99.7%",
            "95%",
            "72%",
            "49.85%"
        ],
        answer: 3
    }, {
        question: [
            "A graph is a set of modules",
            "(or main points) linked by",
            "edges (or branches)."
        ],
        choices: [
            "True",
            "False"
        ],
        answer: 1
    }, {
        question: [
            "The Seven Bridges of Konigsberg",
            "is an example of what a Eulerian",
            "Graph is not. "
        ],
        choices: [
            "True ",
            "False"
        ],
        answer: 0
    }, {
        question: [
            "Dijkstra's Algorithm was",
            "published by Edsger W. Dijkstra",
            "in 1959 wherein it also has",
            "its real life applications",
            "today. What companies potentially",
            "use this algorithm?"
        ],
        choices: [
            "Waze",
            "Quaker Oats",
            "Sunyang",
            "Daizo"
        ],
        answer: 0
    }, {
        question: [
            "If SkyCable wanted to rewire their",
            "lines to multiple neighborhoods,",
            "which Algorithm would be best",
            "to use?"
        ],
        choices: [
            "Prim's Algorithm",
            "Minimum Spiderman Tree (MST)",
            "Dijkstra's Algorithm",
            "Dante's Inferno"
        ],
        answer: 0
    }, {
        question: [
            "What is a tree in",
            "Mathematics Module 5?"
        ],
        choices: [
            "Perennial plant",
            "The reason we can breathe in life ",
            "Connected graph without cycles",
            "Part of the cycle of life"
        ],
        answer: 2
    }
];


const FONT_ALPHANUM_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const FONT_ALPHANUM_SIZES = [
    10,10,10,10,10, 10,10,10, 6,10, 10,10,10,10,10, 10,10,10,10,10, 10,10,10,10,10, 10,
    10,10,10,10,10, 10,10,10, 6,10, 10, 8,10,10,10, 10,10,10,10,10, 10,10,10,10,10, 10,
    10, 8,10,10,10, 10,10,10,10,10
];
const FONT_LEVEL_CHARS = "0123456789";

const SEX = {
    MALE: 0,
    FEMALE: 2
};


const POSITIONS = {
    story: {
        hood_tp: {
            base: {
                posT: 224
            }, figure: {
                posT: 128
            }
        }
    },
    overlayMessageBox: {
        text: {
            marginLR: 32,
            relPosT1: -4,
            relPosT2: 24
        }
    },
    fightMessageBox: {
        posB_Top: 100,
        height: 88,
        border: {
            height: 2
        },
        text: {
            marginLR: 16,
            relPosT1: -8,
            relPosT2: 24
        }
    },
    questionBox: {
        marginTB: 94,
        text: {
            relPosL: 16,
            relPosT: [48, 72, 96, 120, 144, 168]
        }
    },
    questionChoices: {
        marginLR: 32,
        h: 48,
        posT: [72, 134, 196, 258],
        text: {
            relPosL: 16,
            relPosT: 36
        }
    },
    battleFoeBox: {
        posL: 0,
        posT: 56,
        name: {
            relPosL: 24,
            relPosT: -4
        },
        sex: {
            relPosL: 152,
            relPosT: -6
        },
        level: {
            relPosL: 186,
            relPosT: -4
        },
        hpBar: {
            relPosL: 88,
            // relPosR_L: 184,
            relPosT: 18,
            // relPosB_T: 22,
            w: 96,
            h: 4
        }
    },
    battleFoeBase: {
        posR: -16,
        posT: 96,
        scale: 0.5,
        focus: {
            foe: {
                posR: 32,
                posT: 128,
                scale: 0.75
            },
            player: {
                posR: -128,
                posT: 48,
                scale: 0.5
            }
        }
    },
    battleFoe: {
        posR: 28,
        posT: 0,
        scale: 1 / 3 * 2,
        focus: {
            foe: {
                posR: 96,
                posT: -16,
                scale: 1 / 3 * 2 / 2 * 3
            },
            player: {
                posR: -84,
                posT: -48,
                scale: 1 / 3 * 2
            }
        }
    },
    battlePlayerBox: {
        posR: 0,
        posT: 184,
        name: {
            relPosL: 24,
            relPosT: -4
        },
        level: {
            relPosL: 178,
            relPosT: -4
        },
        hpBar: {
            relPosL: 112,
            relPosT: 18,
            w: 96,
            h: 4
        },
        hpNum: {
            relPosT: 24,
            hp: {
                relPosL_End: 160
            },
            total: {
                relPosL: 176
            }
        },
        expBar: {
            relPosL: 64,
            relPosT: 46,
            w: 160,
            h: 2
        }
    },
    battlePlayerBase: {
        posL: -80,
        posB: 140,
        scale: 1.0,
        focus: {
            player: {
                posL: -16,
                posB: 140
            },
            foe: {
                posL: -384,
                posB: 100
            }
        }
    },
    battlePlayer: {
        posL: 0,
        posB: 0,
        scale: 1 / 3 * 2,
        focus: {
            player: {
                posL: 64,
                posB: 0
            },
            foe: {
                posL: -304,
                posB: -40
            }
        }
    },
    time: {
        posL: 24,
        posT: 20
    },
    battleChoices: {
        posL_C: 127,
        posR_C: 385,
        posT_Top_s: 128, // 128
        posT_Top: [114, 142],
        posT_Bot_s: 230, // 230
        posT_Bot: [216, 244]
    }
};

const GAMEDATA = {
    PLAYER: {
        NAME: "Group Four",
        LEVEL: 25,
        HPMAX: 300
    },
    OPPONENT: {
        NAME: "Sir Calvin",
        LEVEL: 100,
        HPMAX: 1000
    }
};

const HPBARCOLOR = [
    ["#ffffff", "#b5b5b5"],
    ["#00ff4a", "#00bd21"],
    ["#eaff00", "#adbd00"],
    ["#ff0000", "#bd0000"]
];