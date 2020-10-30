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

    questionBox: {
        show: false,
        text: [""]
    },

    playerTurn: true,

    lastMove: false
};

// 941 706

function battleClick(x, y) {
    if(CMODE == DRAWMODE.BATTLE_MAIN) {
        if(x >= 172 && x <= 768 && y >= 216 && y <= 432)
            CMODE = DRAWMODE.BATTLE_FIGHT;
        else if(x <= 284 && y >= 496) {
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
        if(x >= 656 && y >= 516)
            CMODE = DRAWMODE.BATTLE_MAIN;
        else if(x <= 468 && y >= 120 && y < 312) {
            // TL
            playerUseMove(GAME.lastMove ? 4 : 0);
        } else if(x <= 468 && y >= 312 && y < 502) {
            // BL
            playerUseMove(GAME.lastMove ? 4 : 1);
        } else if(x >= 472 && y >= 120 && y < 312) {
            // TR
            playerUseMove(GAME.lastMove ? 4 : 2);
        } else if(x >= 472 && y >= 312 && y < 502) {
            // BR
            playerUseMove(GAME.lastMove ? 4 : 3);
        }
    }
}

function playerUseMove(index) {
    GAME.playerTurn = false;

    CMODE = DRAWMODE.BATTLE_DEFAULT;

    setTrackFrame(2.0 * FPS, -10);
    GAME.messageBox.show = true;
    GAME.messageBox.text = [SCRIPT.BATTLE.moves.player.used, SCRIPT.BATTLE.moves.player.names[index] + "!"];

    setTimeout(function() {
        opponentUseMove();
    }, 3.0 * 1000);
}

function opponentUseMove() {
    GAME.playerTurn = true;

    var index = Math.floor(Math.random() * 5);

    setTrackFrame(2.0 * FPS, -10);
    GAME.messageBox.show = true;
    GAME.messageBox.text = [SCRIPT.BATTLE.moves.opponent.used, SCRIPT.BATTLE.moves.opponent.names[index] + "!"];

    setTimeout(function() {
        CMODE = DRAWMODE.BATTLE_MAIN;
    }, 3.0 * 1000);
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
    setTrackFrame();
    inTransition = true;
}