var GAME = {
    player: {
        hp: 300,
        exp: Math.random()
    },
    opponent: {
        hp: 1000
    },

    messageBox: {
        show: false,
        text: ["", ""]
    },

    questionIndex: 0,

    memeIndex: 1,

    playerTurn: true,

    lastMove: false,
    inEndSequence: false
};

// 941 706

function battleClick(x, y) {
    if(CMODE == DRAWMODE.BATTLE_MAIN) {
        if(x >= 172 && x <= 768 && y >= 216 && y <= 432) {
            playClickSound();
            CMODE = DRAWMODE.BATTLE_FIGHT;
        } else if(x <= 284 && y >= 496) {
            playInvalidClickSound();
            setTrackFrame(2.0 * FPS, -10);
            GAME.messageBox.show = true;
            GAME.messageBox.text = SCRIPT.BATTLE.notAllowed;
        } else if(x >= 324 && x <= 616 && y >= 560) {
            playInvalidClickSound();
            setTrackFrame(2.0 * FPS, -10);
            GAME.messageBox.show = true;
            GAME.messageBox.text = SCRIPT.BATTLE.notAllowed;
        } else if(x >= 656 && y >= 496) {
            playInvalidClickSound();
            setTrackFrame(2.0 * FPS, -10);
            GAME.messageBox.show = true;
            GAME.messageBox.text = SCRIPT.BATTLE.notAllowed;
        }
    } else if(CMODE == DRAWMODE.BATTLE_FIGHT) {
        if(x >= 656 && y >= 516) {
            playClickSound();
            CMODE = DRAWMODE.BATTLE_MAIN;
        } else if(x <= 468 && y >= 120 && y < 312) {
            // TL
            playClickSound();
            playerUseMove(GAME.lastMove ? 4 : 0);
        } else if(x <= 468 && y >= 312 && y < 502) {
            // BL
            playClickSound();
            playerUseMove(GAME.lastMove ? 4 : 1);
        } else if(x >= 472 && y >= 120 && y < 312) {
            // TR
            playClickSound();
            playerUseMove(GAME.lastMove ? 4 : 2);
        } else if(x >= 472 && y >= 312 && y < 502) {
            // BR
            playClickSound();
            playerUseMove(GAME.lastMove ? 4 : 3);
        }
    } else if(CMODE == DRAWMODE.BATTLE_QUESTION) {
        if(x >= POSITIONS.questionChoices.marginLR / 512 * 941 && x <= (canvas_bot.width - POSITIONS.questionChoices.marginLR) / 512 * 941) {
            // console.log(y);
            for(var i = 0; i < QUESTIONS[GAME.questionIndex].choices.length; i++) {
                if(y >= POSITIONS.questionChoices.posT[i] / 384 * 706 && y <= (POSITIONS.questionChoices.posT[i] + POSITIONS.questionChoices.h) / 384 * 706) {
                    playClickSound();
                    playerSelectChoice(i);
                    break;
                }
            }
        }
    }
}

function playerUseMove(index) {
    GAME.playerTurn = false;

    CMODE = DRAWMODE.BATTLE_DEFAULT;

    if(!GAME.lastMove) {
        GAME.messageBox.show = true;
        GAME.messageBox.text = [
            SCRIPT.BATTLE.moves.player.used + (GAME.lastMove ? "" : (SCRIPT.BATTLE.moves.player.names[index] + "!")),
            GAME.lastMove ? (SCRIPT.BATTLE.moves.player.names[4] + "!") : ""];
    }

    setTimeout(closeMessageBox, 4.0 * 1000);

    setTimeout(function() {
        // animation for 1 sec
        transitionToFocusPlayer();

        setTimeout(function() {
            // damage
            var mindmg = 50;
            var maxdmg = 200;
            var dmg = mindmg + Math.floor(Math.random() * maxdmg);

            var minhp = 20;
            if(GAME.opponent.hp - dmg <= minhp)
                dmg = GAME.opponent.hp - minhp;
            
            if(!GAME.lastMove) {
                if(dmg <= (mindmg + maxdmg) / 3) {
                    audio.damage_weak.play();
                    GAME.messageBox.text = [SCRIPT.BATTLE.effectiveness[0], ""];
                } else if(dmg >= (mindmg + maxdmg) / 3 * 2) {
                    audio.damage_normal.play();
                    GAME.messageBox.text = [SCRIPT.BATTLE.effectiveness[1], ""];
                } else {
                    audio.damage_super.play();
                    closeMessageBox();
                }
                
                GAME.opponent.hp -= dmg;

                transitionToDefault();


                setTimeout(function() {
                    opponentUseMove();
                }, 3.0 * 1000);
            } else {
                startEndSequence();
            }

            if(GAME.opponent.hp <= minhp)
                GAME.lastMove = true;
        }, 1.0 * 1000);
    }, 1.0 * 1000);
}

function playerSelectChoice(index) {
    GAME.playerTurn = true;

    CMODE = DRAWMODE.BATTLE_DEFAULT;

    var mindmg = index == QUESTIONS[GAME.questionIndex].answer ? 10 : 25;
    var maxdmg = index == QUESTIONS[GAME.questionIndex].answer ? 50 : 100;
    var dmg = mindmg + Math.floor(Math.random() * maxdmg);

    var minhp = 20;
    if(GAME.player.hp - dmg <= minhp) {
        dmg = GAME.player.hp - minhp;
        GAME.lastMove = true;
    }

    setTimeout(function() {
        GAME.messageBox.show = true;
        GAME.messageBox.text = [index == QUESTIONS[GAME.questionIndex].answer ? SCRIPT.BATTLE.answerCorrect : SCRIPT.BATTLE.answerIncorrect, index == QUESTIONS[GAME.questionIndex].answer ? SCRIPT.BATTLE.effectiveness[0] : ""];

        setTimeout(closeMessageBox, 2.0 * 1000);
        
        if(dmg <= (mindmg + maxdmg) / 3) {
            audio.damage_weak.play();
            if(index != QUESTIONS[GAME.questionIndex].answer)
                GAME.messageBox.text[1] = SCRIPT.BATTLE.effectiveness[0];
        } else if(dmg >= (mindmg + maxdmg) / 3 * 2) {
            audio.damage_normal.play();
            if(index != QUESTIONS[GAME.questionIndex].answer)
                GAME.messageBox.text[1] = SCRIPT.BATTLE.effectiveness[1];
        } else
            audio.damage_super.play();

        GAME.player.hp -= dmg;

        setTimeout(function() {
            CMODE = DRAWMODE.BATTLE_MAIN;
        }, 4.0 * 1000);
    }, 1.0 * 1000);
}

function opponentUseMove() {
    GAME.playerTurn = true;

    var index = Math.floor(Math.random() * SCRIPT.BATTLE.moves.opponent.names.length);

    GAME.messageBox.show = true;
    GAME.messageBox.text = [SCRIPT.BATTLE.moves.opponent.used + SCRIPT.BATTLE.moves.opponent.names[index] + "!", ""];

    setTimeout(closeMessageBox, 2.0 * 1000);

    transitionToFocusFoe();

    setTimeout(function() {
        // animation for 1 sec

        transitionToDefault();

        setTimeout(function() {
            if(index != 1 && index != 2) {
                CMODE = DRAWMODE.BATTLE_QUESTION;

                GAME.questionIndex = Math.floor(Math.random() * Object.keys(QUESTIONS).length);
            } else {
                CMODE = DRAWMODE.BATTLE_MEME;
                GAME.memeIndex = 1 + Math.floor(Math.random() * 8);
                // damage
                var mindmg = 25;
                var maxdmg = 100;
                var dmg = mindmg + Math.floor(Math.random() * maxdmg);

                var minhp = 20;
                if(GAME.player.hp - dmg <= minhp) {
                    dmg = GAME.player.hp - minhp;
                    GAME.lastMove = true;
                }
                
                if(dmg <= (mindmg + maxdmg) / 3) {
                    audio.damage_weak.play();
                    GAME.messageBox.text = [SCRIPT.BATTLE.effectiveness[0], ""];
                } else if(dmg >= (mindmg + maxdmg) / 3 * 2) {
                    audio.damage_normal.play();
                    GAME.messageBox.text = [SCRIPT.BATTLE.effectiveness[1], ""];
                } else {
                    audio.damage_super.play();
                    closeMessageBox();
                }

                GAME.player.hp -= dmg;

                setTimeout(function() {
                    CMODE = DRAWMODE.BATTLE_MAIN;
                }, 3.0 * 1000);
            }
        }, 1.0 * 1000);
    }, 1.0 * 1000);
}

function validateHP() {}

function transitionToFocusFoe() {
    setTrackFrame(0.2 * FPS, DRAWMODE.BATTLE_FOCUS_FOE);
    inTransition = true;
}

function transitionToFocusPlayer() {
    setTrackFrame(0.2 * FPS, DRAWMODE.BATTLE_FOCUS_PLAYER);
    inTransition = true;
}

function transitionToDefault() {
    setTrackFrame(0.2 * FPS, DRAWMODE.BATTLE_DEFAULT);
    inTransition = true;
}

function closeMessageBox() {
    GAME.messageBox.show = false;
}


function startEndSequence() {
    GAME.messageBox.show = true;
    GAME.messageBox.text = SCRIPT.BATTLE_POST[0];

    GAME.inEndSequence = true;
}