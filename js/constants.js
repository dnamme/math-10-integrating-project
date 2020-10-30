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
    BATTLE_FOCUS_PLAYER: 25,
    BATTLE_FOCUS_FOE: 26,

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
                used: "Group Four used",
                names: [
                    "Clarification",
                    "\"Thank you sir\"",
                    "Cringe at joke",
                    "Laugh at joke"
                ]
            },
            opponent: {
                used: "Sir Calvin used",
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
        ]
    }
};

const QUESTIONS = {
    //
};


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
        scale: 1.0
    },
    battlePlayer: {
        posL: 0,
        posB: 0,
        scale: 1 / 3 * 2
    },
    time: {
        posL: 24,
        posT: 20
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