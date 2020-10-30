var canvas_top = null;
var ctx_top = null;
var canvas_bot = null;
var ctx_bot = null;

var frameDrawer = null; // interval
var frameNum = 0;
var maxFrameNum = 0;
var keepTrackOfFrame = false;
var isIdle = false;
var inTransition = false;

var CMODE = DRAWMODE.BATTLE_MAIN; // mode of the game
var NMODE = -1;
var bgMode = -1;
var lineIndex = 0;


var textures = {
    introBG: null,
    introBase: null,
    overlayMessageBox: null,

    thunderTop: null,
    thunderBot: null,
    hoodedFigureTP: null,
    featureFigure: null,
    strategyScene: null,
    crashScene: null,
    appearScene: null,

    hoodedFigure: null,

    defaultBG: null,

    battleBGBase: null,
    battleBGMain: null,
    battleBGFight: null,

    battle_players: null,
    battle_foe: null,

    sex: null,
    battleFontAlphanum: null,
    battleFontHp: null,

    battleBG: null,
    battleBase: null,

    battleFoeBox: null,
    battlePlayerBox: null
};

var audio = {
    theme_opening: null,
    theme_battle: null,

    click: null,
    click_invalid: null,

    story_lightning: null,
    story_crash: null,

    damage_normal: null,
    damage_super: null,
    damage_weak: null
};

var onLoadedFunction = function() {
    numLoaded++;
};
var numLoaded = 0;
var maxNumLoaded = Object.keys(textures).length;
function loaded() { return numLoaded + "/" + maxNumLoaded; }



function initializeAudio() {
    audio.theme_opening = document.getElementById("theme-opening");
    audio.theme_battle = document.getElementById("theme-battle");

    audio.click = document.getElementById("click");
    audio.click_invalid = document.getElementById("click-invalid");

    audio.story_lightning = document.getElementById("story-lightning");
    audio.story_crash = document.getElementById("story-crash");

    audio.damage_normal = document.getElementById("damage-normal");
    audio.damage_super = document.getElementById("damage-super");
    audio.damage_weak = document.getElementById("damage-weak");
}

function loadTextures() {
    try {
        canvas_top = document.getElementById("game-top");
        ctx_top = canvas_top.getContext("2d");
        ctx_top.save();

        canvas_bot = document.getElementById("game-bot");
        ctx_bot = canvas_bot.getContext("2d");
        ctx_top.save();

        canvas_bot.addEventListener("click", function(e) {
            handleClick(e);
        });


        textures.introBG = new Image();
        textures.introBG.onload = onLoadedFunction;
        textures.introBG.src = "./img/game/intro_bg_bw.png";

        textures.introBase = new Image();
        textures.introBase.onload = onLoadedFunction;
        textures.introBase.src = "./img/game/intro_base_bw.png";

        textures.overlayMessageBox = new Image();
        textures.overlayMessageBox.onload = onLoadedFunction;
        textures.overlayMessageBox.src = "./img/game/overlay_message.png";


        textures.thunderTop = new Image();
        textures.thunderTop.onload = onLoadedFunction;
        textures.thunderTop.src = "./img/stills/thunder 2.png";

        textures.thunderBot = new Image();
        textures.thunderBot.onload = onLoadedFunction;
        textures.thunderBot.src = "./img/stills/thunder 1.png";

        textures.hoodedFigureTP = new Image();
        textures.hoodedFigureTP.onload = onLoadedFunction;
        textures.hoodedFigureTP.src = "./img/stills/story_hood_tp.png";

        textures.featureFigure = new Image();
        textures.featureFigure.onload = onLoadedFunction;
        textures.featureFigure.src = "./img/stills/story_feature.png"

        textures.strategyScene = new Image();
        textures.strategyScene.onload = onLoadedFunction;
        textures.strategyScene.src = "./img/stills/story_strategy.png";

        textures.crashScene = new Image();
        textures.crashScene.onload = onLoadedFunction;
        textures.crashScene.src = "./img/stills/window.png";

        textures.appearScene = new Image();
        textures.appearScene.onload = onLoadedFunction;
        textures.appearScene.src = "./img/stills/story_appear_darker.png";


        textures.hoodedFigure = new Image();
        textures.hoodedFigure.onload = onLoadedFunction;
        textures.hoodedFigure.src = "./img/game/people/story_hoodedFigure.png";


        textures.defaultBG = new Image();
        textures.defaultBG.onload = onLoadedFunction;
        textures.defaultBG.src = "./img/game/bottom/defaultBG.png";


        textures.battleBGBase = new Image();
        textures.battleBGBase.onload = onLoadedFunction;
        textures.battleBGBase.src = "./img/game/bottom/battleBGBase.png";

        textures.battleBGFight = new Image();
        textures.battleBGFight.onload = onLoadedFunction;
        textures.battleBGFight.src = "./img/game/bottom/battleBGFight.png";

        textures.battleBGMain = new Image();
        textures.battleBGMain.onload = onLoadedFunction;
        textures.battleBGMain.src = "./img/game/bottom/battleBGMain.png";


        textures.battle_players = new Image();
        textures.battle_players.onload = onLoadedFunction;
        textures.battle_players.src = "./img/game/people/battle_players_3x.png";

        textures.battle_foe = new Image();
        textures.battle_foe.onload = onLoadedFunction;
        textures.battle_foe.src = "./img/game/people/battle_sir_3x.png";


        textures.sex = new Image();
        textures.sex.onload = onLoadedFunction;
        textures.sex.src = "./img/game/sex.png";

        textures.battleFontAlphanum = new Image();
        textures.battleFontAlphanum.onload = onLoadedFunction;
        textures.battleFontAlphanum.src = "./img/game/font/font_alphanum.png";

        textures.battleFontHp = new Image();
        textures.battleFontHp.onload = onLoadedFunction;
        textures.battleFontHp.src = "./img/game/font/font_hp.png";


        textures.battleBG = new Image();
        textures.battleBG.onload = onLoadedFunction;
        textures.battleBG.src = "./img/game/elite8_bg.png";

        textures.battleBase = new Image();
        textures.battleBase.onload = onLoadedFunction;
        textures.battleBase.src = "./img/game/elite8_base.png";


        textures.battleFoeBox = new Image();
        textures.battleFoeBox.onload = onLoadedFunction;
        textures.battleFoeBox.src = "./img/game/battleFoeBox.png";

        textures.battlePlayerBox = new Image();
        textures.battlePlayerBox.onload = onLoadedFunction;
        textures.battlePlayerBox.src = "./img/game/battlePlayerBox.png";
    } catch(error) {
        console.log(error);
    }
}


function handleEndTransition() {
    frameNum = 0;
    maxFrameNum = 0;
    keepTrackOfFrame = false;
    inTransition = false;

    console.log("end transition " + CMODE + " " + NMODE);

    if(CMODE != DRAWMODE.STORY_FEATURE && CMODE != DRAWMODE.STORY_HOOD_SPOTLIGHT_2 && CMODE != DRAWMODE.STORY_STRATEGY)
        CMODE = NMODE == -10 ? CMODE : NMODE;
    
    if(NMODE == -10) {
        if(GAME.messageBox.show)
            GAME.messageBox.show = false;
    }
}

function setTrackFrame(max, next = null) {
    frameNum = 1;
    maxFrameNum = max;
    keepTrackOfFrame = true;
    if(next != null)
        NMODE = next;
}

function drawFrame() {
    try {
        if(keepTrackOfFrame) {
            if(frameNum >= maxFrameNum) handleEndTransition();
            frameNum++;
        }

        // if(numLoaded < maxNumLoaded) return;

        // fill with black
        ctx_top.restore();
        ctx_top.fillStyle = "#000000";
        ctx_top.fillRect(0, 0, canvas_top.width, canvas_top.height);

        ctx_bot.restore();
        ctx_bot.fillStyle = "#000000";
        ctx_bot.fillRect(0, 0, canvas_bot.width, canvas_bot.height);


        var BASEMODE = Math.floor(CMODE);
        
        if(BASEMODE == DRAWMODE.LOADING.BASE) {
            if(bgMode != BASEMODE)
                changeBackground(null, "black");

            if(CMODE != DRAWMODE.LOADING.IDLE_BLACK) {
                // loading... text
                ctx_top.restore();
                ctx_top.fillStyle = "#ffffff";
                ctx_top.font = "48px Pixelade";
                ctx_top.textAlign = "center";
                ctx_top.fillText(
                    "Loading.....",
                    canvas_top.width / 2,
                    canvas_top.height / 2 - 24);
                
                // number and percentage
                ctx_top.restore();
                ctx_top.fillStyle = "#ffffff";
                ctx_top.font = "48px Pixelade";
                ctx_top.textAlign = "center";
                ctx_top.fillText(
                    numLoaded + "/" + maxNumLoaded + " (" + (Math.round(numLoaded / maxNumLoaded * 10000) / 100) + "%)",
                    canvas_top.width / 2,
                    canvas_top.height / 2 + 24);
            }

            if(CMODE == DRAWMODE.LOADING.BASE && numLoaded >= maxNumLoaded) {
                CMODE = DRAWMODE.LOADING.IDLE;
                setTrackFrame(2.0 * FPS, DRAWMODE.LOADING.TRANSITION_FADE);
            }
            
            if(CMODE == DRAWMODE.LOADING.TRANSITION_FADE) {
                if(!keepTrackOfFrame)
                    setTrackFrame(1.0 * FPS, DRAWMODE.LOADING.IDLE_BLACK);

                ctx_top.restore();
                ctx_top.fillStyle = "rgba(0,0,0," + transitionValue(0.0, 1.0, frameNum, maxFrameNum) + ")";
                ctx_top.fillRect(0, 0, canvas_top.width, canvas_top.height);

                audio.theme_opening.volume = transitionValue(1.0, 0.0);
            }

            if(!keepTrackOfFrame && CMODE == DRAWMODE.LOADING.IDLE_BLACK)
                setTrackFrame(2.0 * FPS, DRAWMODE.STORY_LIGHTNING.BOLT);
        } else if(BASEMODE == DRAWMODE.STORY_LIGHTNING.BASE) {
            if(bgMode != BASEMODE) {
                changeBackground(null, "black");
                lineIndex = 0;

                // stop opening theme
                if(!audio.theme_opening.paused)
                    audio.theme_opening.pause();

                // play sound
                audio.story_lightning.play();
            }

            if(CMODE == DRAWMODE.STORY_LIGHTNING.BOLT) {
                // CMODE = DRAWMODE.STORY_LIGHTNING.IDLE;
                if(!keepTrackOfFrame)
                    setTrackFrame(FPS / 10, DRAWMODE.STORY_LIGHTNING.IDLE);

                ctx_top.restore();
                ctx_top.drawImage(textures.thunderTop, 0, 0, canvas_top.width, canvas_top.height);

                ctx_bot.restore();
                ctx_bot.drawImage(textures.thunderBot, 0, 0, canvas_bot.width, canvas_bot.height);
            }

            // fight message box
            drawFightMessageBox(SCRIPT.STORY_LIGHTNING[lineIndex][0], SCRIPT.STORY_LIGHTNING[lineIndex][1], "center", "white", "rgba(127,127,127,0.2)");

            // press anywhere
            drawText_anywhere();
            
            if(CMODE == DRAWMODE.STORY_LIGHTNING.TRANSITION_FADEOUT) {
                if(!keepTrackOfFrame)
                    setTrackFrame(1.0 * FPS, DRAWMODE.STORY_HOOD_TP.TRANSITION_FADEIN);
                
                ctx_top.restore();
                ctx_top.fillStyle = "rgba(0,0,0," + transitionValue(0.0, 1.0, frameNum, maxFrameNum) + ")";
                ctx_top.fillRect(0, 0, canvas_top.width, canvas_top.height);

                ctx_bot.restore();
                ctx_bot.fillStyle = "rgba(0,0,0," + transitionValue(0.0, 1.0, frameNum, maxFrameNum) + ")";
                ctx_bot.fillRect(0, 0, canvas_bot.width, canvas_bot.height);
            }
        } else if(BASEMODE == DRAWMODE.STORY_HOOD_TP.BASE) {
            if(bgMode != BASEMODE) {
                changeBackground("./img/stills/story_hood_tp.png", "black");
                lineIndex = 0;
            }

            ctx_top.restore();
            if(CMODE != DRAWMODE.STORY_HOOD_TP.IDLE_BLACK) {
                // hooded figure
                ctx_top.drawImage(textures.hoodedFigureTP, 0, 0, canvas_top.width, canvas_top.height);
                
                // circular gradient
                var cgrad = ctx_top.createRadialGradient(canvas_top.width / 2, canvas_top.height / 5 * 3, 32, canvas_top.width / 2, canvas_top.height / 5 * 3, canvas_top.width / 2);
                cgrad.addColorStop(0, "rgba(0,0,0,0.0)");
                cgrad.addColorStop(1, "rgba(0,0,0,1.0)");
                
                ctx_top.fillStyle = cgrad;
                ctx_top.fillRect(0, 0, canvas_top.width, canvas_top.height);

                // message box
                drawFightMessageBox(SCRIPT.STORY_HOOD_TP[lineIndex][0], SCRIPT.STORY_HOOD_TP[lineIndex][1], "center", "#ffffff", "rgba(127,127,127,0.2)");

                // press anywhere
                drawText_anywhere();
            }

            if(CMODE == DRAWMODE.STORY_HOOD_TP.TRANSITION_FADEIN || CMODE == DRAWMODE.STORY_HOOD_TP.TRANSITION_FADEOUT) {
                if(!keepTrackOfFrame)
                    setTrackFrame(
                        1.0 * FPS,
                        CMODE == DRAWMODE.STORY_HOOD_TP.TRANSITION_FADEIN ? DRAWMODE.STORY_HOOD_TP.IDLE : DRAWMODE.STORY_HOOD_TP.IDLE_BLACK);

                ctx_top.restore();
                ctx_top.fillStyle = "rgba(0,0,0," + transitionValue(CMODE == DRAWMODE.STORY_HOOD_TP.TRANSITION_FADEIN ? 1.0 : 0.0, CMODE == DRAWMODE.STORY_HOOD_TP.TRANSITION_FADEIN ? 0.0 : 1.0, frameNum, maxFrameNum) + ")";
                ctx_top.fillRect(0, 0, canvas_top.width, canvas_top.height);

                ctx_bot.restore();
                ctx_bot.fillStyle = "rgba(0,0,0," + transitionValue(CMODE == DRAWMODE.STORY_HOOD_TP.TRANSITION_FADEIN ? 1.0 : 0.0, CMODE == DRAWMODE.STORY_HOOD_TP.TRANSITION_FADEIN ? 0.0 : 1.0, frameNum, maxFrameNum) + ")";
                ctx_bot.fillRect(0, 0, canvas_bot.width, canvas_bot.height);

                changeBackground(null, "rgba(0,0,0," + transitionValue(CMODE == DRAWMODE.STORY_HOOD_TP.TRANSITION_FADEIN ? 1.0 : 0.5, CMODE == DRAWMODE.STORY_HOOD_TP.TRANSITION_FADEIN ? 0.5 : 1.0, frameNum, maxFrameNum) + ")");
            }

            else if(!keepTrackOfFrame && CMODE == DRAWMODE.STORY_HOOD_TP.IDLE_BLACK)
                setTrackFrame(3.0 * FPS, DRAWMODE.STORY_HOOD_SPOTLIGHT_1.TRANSITION_FADEIN);
        } else if(BASEMODE == DRAWMODE.STORY_HOOD_SPOTLIGHT_1.BASE || BASEMODE == DRAWMODE.STORY_HOOD_SPOTLIGHT_2) {
            if(bgMode != BASEMODE) {
                lineIndex = 0;
                isIdle = false;
            }
            
            ctx_top.restore();
            ctx_top.fillStyle = "#ffffff";
            ctx_top.fillRect(0,0,canvas_top.width,canvas_top.height);

            // bg
            ctx_top.drawImage(textures.introBG, 0, 0, canvas_top.width, canvas_top.height);

            // base
            ctx_top.drawImage(
                textures.introBase,
                (canvas_top.width / 2) - (textures.introBase.width / 2),
                POSITIONS.story.hood_tp.base.posT);

            // hooded figure
            ctx_top.drawImage(
                textures.hoodedFigure,
                (canvas_top.width / 2) - (textures.hoodedFigure.width / 2),
                POSITIONS.story.hood_tp.figure.posT);

            // bottom screen
            ctx_bot.restore();
            ctx_bot.fillStyle = "#6a6a6a";
            ctx_bot.fillRect(0, 0, canvas_bot.width, canvas_bot.height);

            // press anywhere
            if(CMODE != DRAWMODE.STORY_HOOD_SPOTLIGHT_1.BASE || CMODE != DRAWMODE.STORY_HOOD_SPOTLIGHT_2.BASE)
                drawText_anywhere();

            if(CMODE == DRAWMODE.STORY_HOOD_SPOTLIGHT_1.TRANSITION_FADEIN) {
                if(!keepTrackOfFrame)
                    setTrackFrame(0.3 * FPS, DRAWMODE.STORY_HOOD_SPOTLIGHT_1.DIALOGUE);
                
                ctx_top.restore();
                ctx_top.fillStyle = "black";
                ctx_bot.restore();
                ctx_bot.fillStyle = "black";

                var h = transitionValue(canvas_top.height + canvas_bot.height, 0, frameNum, maxFrameNum);

                if(h > canvas_bot.height)
                    ctx_top.fillRect(0, canvas_top.height - (h - canvas_bot.height), canvas_top.width, h - canvas_bot.height);
                
                ctx_bot.fillRect(
                    0,
                    h <= canvas_bot.height ? canvas_bot.height - h : 0,
                    canvas_bot.width,
                    h <= canvas_bot.height ? h : canvas_bot.height);
                
                var c = transitionValue(0, 58, frameNum, maxFrameNum);
                changeBackground(null, "rgb(" + c + "," + c + "," + c + ")");
            } else if(CMODE == DRAWMODE.STORY_HOOD_SPOTLIGHT_2) {
                if(!isIdle && !keepTrackOfFrame) {
                    isIdle = true;
                    setTrackFrame(1.0 * FPS);
                }

                if(keepTrackOfFrame) {
                    var c = transitionValue(0, 58);
                    changeBackground(null, "rgba(" + c + "," + c + "," + c + "," + transitionValue(0.5, 1.0) + ")");
                }
            }

            // overlay message
            if(CMODE == DRAWMODE.STORY_HOOD_SPOTLIGHT_1.DIALOGUE || CMODE == DRAWMODE.STORY_HOOD_SPOTLIGHT_2)
                drawOverlayMessageBox(
                    CMODE == DRAWMODE.STORY_HOOD_SPOTLIGHT_1.DIALOGUE ? SCRIPT.STORY_HOOD_SPOTLIGHT_1[lineIndex][0] : SCRIPT.STORY_HOOD_SPOTLIGHT_2[lineIndex][0],
                    CMODE == DRAWMODE.STORY_HOOD_SPOTLIGHT_1.DIALOGUE ? SCRIPT.STORY_HOOD_SPOTLIGHT_1[lineIndex][1] : SCRIPT.STORY_HOOD_SPOTLIGHT_2[lineIndex][1]);
        } else if(BASEMODE == DRAWMODE.STORY_FEATURE) {
            if(bgMode != BASEMODE) {
                changeBackground("./img/stills/story_feature.png", "#3a3a3a");
                lineIndex = 0;
                isIdle = false;
            }
            
            // figure
            ctx_top.restore();
            ctx_top.drawImage(textures.featureFigure, 0, 0, canvas_top.width, canvas_top.height);

            // overlay mesage
            drawOverlayMessageBox(
                SCRIPT.STORY_FEATURE[lineIndex][0],
                SCRIPT.STORY_FEATURE[lineIndex][1],
                lineIndex == 0 ? "center" : "left");

            // bottom fill
            ctx_bot.restore();
            ctx_bot.fillStyle = "#211632";
            ctx_bot.fillRect(0, 0, canvas_bot.width, canvas_bot.height);

            // press anywhere
            drawText_anywhere();

            // background
            if(!isIdle && !keepTrackOfFrame) {
                isIdle = true;
                setTrackFrame(1.0 * FPS);
            }
            
            if(keepTrackOfFrame) {
                var c = transitionValue(58, 0);
                changeBackground(null, "rgba(" + c + "," + c + "," + c + "," + transitionValue(1.0, 0.5) + ")");
            }
        } else if(CMODE == DRAWMODE.STORY_STRATEGY) {
            if(bgMode != CMODE) {
                changeBackground("./img/stills/story_strategy.png", "3a3a3a");
                lineIndex = 0;
                isIdle = false;
            }

            // figure
            ctx_top.restore();
            ctx_top.drawImage(textures.strategyScene, 0, 0, canvas_top.width, canvas_top.height);
            
            // overlay message
            drawFightMessageBox(SCRIPT.STORY_STRATEGY[lineIndex][0], SCRIPT.STORY_STRATEGY[lineIndex][1], "left", "white", "rgba(0,0,0,0.5)");

            // bottom fill
            ctx_bot.restore();
            ctx_bot.fillStyle = "#534e5d";
            ctx_bot.fillRect(0, 0, canvas_bot.width, canvas_bot.height);

            // press anywhere
            drawText_anywhere();

            // background
            if(!isIdle && !keepTrackOfFrame) {
                isIdle = true;
                setTrackFrame(1.0 * FPS);
            }

            if(keepTrackOfFrame) {
                var c = transitionValue(58, 0);
                changeBackground(null, "rgba(" + c + "," + c + "," + c + "," + transitionValue(1.0, 0.5) + ")");
            }
        } else if(CMODE == DRAWMODE.STORY_CRASH) {
            if(bgMode != CMODE) {
                changeBackground("./img/stills/window.png", "rgba(0,0,0,0.5)");

                audio.story_crash.play();
            }
            
            // still
            ctx_top.drawImage(textures.crashScene, 0, 0, canvas_top.width, canvas_top.height);

            // overlay message
            drawFightMessageBox(SCRIPT.STORY_CRASH[0], SCRIPT.STORY_CRASH[1], "center", "white", "rgba(0,0,0,0.5)");

            // bottom fill
            ctx_bot.restore();
            ctx_bot.fillStyle = "#f8efdd";
            ctx_bot.fillRect(0, 0, canvas_bot.width, canvas_bot.height);

            // press anywhere
            drawText_anywhere("black");
        } else if(CMODE == DRAWMODE.STORY_APPEAR) {
            if(bgMode != CMODE) {
                changeBackground("./img/stills/story_appear.png", "rgba(0,0,0,0.5)");
                lineIndex = 0;
            }

            // figure
            ctx_top.restore();
            ctx_top.drawImage(textures.appearScene, 0, 0, canvas_top.width, canvas_top.height);
            
            // bot
            ctx_bot.restore();
            ctx_bot.fillStyle = "#241a30";
            ctx_bot.fillRect(0, 0, canvas_bot.width, canvas_bot.height);

            // press anywhere
            drawText_anywhere();

            // overlay message
            drawFightMessageBox(SCRIPT.STORY_APPEAR[lineIndex][0], SCRIPT.STORY_APPEAR[lineIndex][1], "left", "white", "rgba(255,255,255,0.2)")
        } else if(CMODE == DRAWMODE.BATTLE_VS) {
            // dev
            drawText_dev("dev todo");
        } else if(BASEMODE >= DRAWMODE.BATTLE_DEFAULT && BASEMODE <= DRAWMODE.BATTLE_FOCUS_FOE) {
            if(bgMode != BASEMODE)
                changeBackground("./img/game/elite8_bg.png", "rgba(0,0,0,0.5)");
            
            if(audio.theme_battle.paused)
                audio.theme_battle.play();

            // background
            ctx_top.restore();
            ctx_top.drawImage(textures.battleBG, 0, 0, canvas_top.width, canvas_top.height);

            // opponent
            drawOpponentBase();
            // opponent info
            drawOpponentInfo();

            // player
            drawPlayerBase();
            // player info
            drawPlayerInfo();

            // fight message box
            if(GAME.messageBox.show)
                drawFightMessageBox(GAME.messageBox.text[0], GAME.messageBox.text[1]);

            // question box
            // if(GAME.questionBox.show)
            //     drawQuestionBox();

            // bottom screen
            ctx_bot.restore();
            if(CMODE == DRAWMODE.BATTLE_DEFAULT || CMODE == DRAWMODE.BATTLE_QUESTION || CMODE == DRAWMODE.BATTLE_FOCUS_FOE || CMODE == DRAWMODE.BATTLE_FOCUS_PLAYER)
                ctx_bot.drawImage(textures.battleBGBase, 0, 0, canvas_bot.width, canvas_bot.height);
            else if(CMODE == DRAWMODE.BATTLE_MAIN)
                ctx_bot.drawImage(textures.battleBGMain, 0, 0, canvas_bot.width, canvas_bot.height);
            else if(CMODE == DRAWMODE.BATTLE_FIGHT) {
                ctx_bot.drawImage(textures.battleBGFight, 0, 0, canvas_bot.width, canvas_bot.height);

                drawBattleMoves();
            }

            if(CMODE == DRAWMODE.BATTLE_QUESTION) {
                drawQuestionBox();
                drawQuestionChoices();
            }

            drawTime();
        }
    } catch(error) {
        console.log(error);
    }
}


function handleClick(e) {
    var x = e.pageX - (canvas_bot.offsetLeft + canvas_bot.clientLeft);
    var y = e.pageY - (canvas_bot.offsetTop + canvas_bot.clientTop) - ((canvas_bot.offsetHeight - (canvas_bot.offsetWidth / 4 * 3)) / 2);

    if(x < 0 || x > canvas_bot.offsetWidth || y < 0 || y > canvas_bot.offsetWidth / 4 * 3) return;

    if(CMODE == DRAWMODE.STORY_LIGHTNING.IDLE) {
        playClickSound();
        if(lineIndex == 2)
            CMODE = DRAWMODE.STORY_LIGHTNING.TRANSITION_FADEOUT;
        else
            lineIndex++;
    } else if(CMODE == DRAWMODE.STORY_HOOD_TP.IDLE) {
        playClickSound();
        if(lineIndex == 1)
            CMODE = DRAWMODE.STORY_HOOD_TP.TRANSITION_FADEOUT;
        else
            lineIndex++;
    } else if(CMODE == DRAWMODE.STORY_HOOD_SPOTLIGHT_1.DIALOGUE) {
        playClickSound();
        if(lineIndex == 5)
            CMODE = DRAWMODE.STORY_FEATURE;
        else
            lineIndex++;
    } else if(CMODE == DRAWMODE.STORY_FEATURE) {
        playClickSound();
        if(lineIndex == 2)
            CMODE = DRAWMODE.STORY_HOOD_SPOTLIGHT_2;
        else
            lineIndex++;
    } else if(CMODE == DRAWMODE.STORY_HOOD_SPOTLIGHT_2) {
        playClickSound();
        if(lineIndex == 4)
            CMODE = DRAWMODE.STORY_STRATEGY;
        else
            lineIndex++;
    } else if(CMODE == DRAWMODE.STORY_STRATEGY) {
        playClickSound();
        if(lineIndex == 2)
            CMODE = DRAWMODE.STORY_CRASH;
        else
            lineIndex++;
    } else if(CMODE == DRAWMODE.STORY_CRASH) {
        playClickSound();
        CMODE = DRAWMODE.STORY_APPEAR;
    } else if(CMODE == DRAWMODE.STORY_APPEAR) {
        playClickSound();
        if(lineIndex == 2)
            CMODE = DRAWMODE.BATTLE_MAIN;
        else
            lineIndex++;
    } else if(CMODE >= DRAWMODE.BATTLE_DEFAULT && CMODE <= DRAWMODE.BATTLE_FOCUS_FOE) {
        battleClick(x / canvas_bot.offsetWidth * textures.battleBGBase.width, y / canvas_bot.offsetHeight * textures.battleBGBase.height);
    }
}


function changeMode(m) {
    CMODE = m;
}

function changeBackground(url, color) {
    bgMode = Math.floor(CMODE);

    if(url) $("#game-screen-background").css("background-image", "url(\"" + url + "\")");
    if(color) $("#game-screen-background-overlay").css("background-color", color);
}