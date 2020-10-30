/*
* BASE
*/
function drawOpponentBase() {
    ctx_top.restore();

    if(!inTransition) {
        ctx_top.drawImage(
            textures.battleBase,
            canvas_top.width - (textures.battleBase.width * (CMODE == DRAWMODE.BATTLE_FOCUS_FOE ? POSITIONS.battleFoeBase.focus.foe.scale : POSITIONS.battleFoeBase.scale)) - (CMODE == DRAWMODE.BATTLE_FOCUS_FOE ? POSITIONS.battleFoeBase.focus.foe.posR : POSITIONS.battleFoeBase.posR),
            CMODE == DRAWMODE.BATTLE_FOCUS_FOE ? POSITIONS.battleFoeBase.focus.foe.posT : POSITIONS.battleFoeBase.posT,
            textures.battleBase.width * (CMODE == DRAWMODE.BATTLE_FOCUS_FOE ? POSITIONS.battleFoeBase.focus.foe.scale : POSITIONS.battleFoeBase.scale),
            textures.battleBase.height * (CMODE == DRAWMODE.BATTLE_FOCUS_FOE ? POSITIONS.battleFoeBase.focus.foe.scale : POSITIONS.battleFoeBase.scale));
        ctx_top.drawImage(
            textures.battle_foe,
            canvas_top.width - (textures.battle_foe.width * (CMODE == DRAWMODE.BATTLE_FOCUS_FOE ? POSITIONS.battleFoe.focus.foe.scale : POSITIONS.battleFoe.scale)) - (CMODE == DRAWMODE.BATTLE_FOCUS_FOE ? POSITIONS.battleFoe.focus.foe.posR : POSITIONS.battleFoe.posR),
            CMODE == DRAWMODE.BATTLE_FOCUS_FOE ? POSITIONS.battleFoe.focus.foe.posT : POSITIONS.battleFoe.posT,
            textures.battle_foe.width * (CMODE == DRAWMODE.BATTLE_FOCUS_FOE ? POSITIONS.battleFoe.focus.foe.scale : POSITIONS.battleFoe.scale),
            textures.battle_foe.height * (CMODE == DRAWMODE.BATTLE_FOCUS_FOE ? POSITIONS.battleFoe.focus.foe.scale : POSITIONS.battleFoe.scale));
        // } else {
        //     ctx_top.drawImage(
        //         textures.battleBase,
        //         canvas_top.width - (textures.battleBase.width * POSITIONS.battleFoeBase.focus.foe.scale) - POSITIONS.battleFoeBase.focus.foe.posR,
        //         POSITIONS.battleFoeBase.focus.foe.posT,
        //         textures.battleBase.width * POSITIONS.battleFoeBase.focus.foe.scale,
        //         textures.battleBase.height * POSITIONS.battleFoeBase.focus.foe.scale);
        //     // ctx_top.drawImage();
        // }
    } else {
        if(CMODE == DRAWMODE.BATTLE_DEFAULT) {
            ctx_top.drawImage(
                textures.battleBase,
                transitionValue(
                    canvas_top.width - (textures.battleBase.width * POSITIONS.battleFoeBase.scale) - POSITIONS.battleFoeBase.posR,
                    canvas_top.width - (textures.battleBase.width * POSITIONS.battleFoeBase.focus.foe.scale) - POSITIONS.battleFoeBase.focus.foe.posR),
                transitionValue(
                    POSITIONS.battleFoeBase.posT,
                    POSITIONS.battleFoeBase.focus.foe.posT),
                transitionValue(
                    textures.battleBase.width * POSITIONS.battleFoeBase.scale,
                    textures.battleBase.width * POSITIONS.battleFoeBase.focus.foe.scale),
                transitionValue(
                    textures.battleBase.height * POSITIONS.battleFoeBase.scale,
                    textures.battleBase.height * POSITIONS.battleFoeBase.focus.foe.scale));
            ctx_top.drawImage(
                textures.battle_foe,
                transitionValue(
                    canvas_top.width - (textures.battle_foe.width * POSITIONS.battleFoe.scale) - POSITIONS.battleFoe.posR,
                    canvas_top.width - (textures.battle_foe.width * POSITIONS.battleFoe.focus.foe.scale) - POSITIONS.battleFoe.focus.foe.posR),
                transitionValue(
                    POSITIONS.battleFoe.posT,
                    POSITIONS.battleFoe.focus.foe.posT),
                transitionValue(
                    textures.battle_foe.width * POSITIONS.battleFoe.scale,
                    textures.battle_foe.width * POSITIONS.battleFoe.focus.foe.scale),
                transitionValue(
                    textures.battle_foe.height * POSITIONS.battleFoe.scale,
                    textures.battle_foe.height * POSITIONS.battleFoe.focus.foe.scale));
        } else if(CMODE == DRAWMODE.BATTLE_FOCUS_PLAYER) {
            //
        } else if(CMODE == DRAWMODE.BATTLE_FOCUS_FOE) {
            ctx_top.drawImage(
                textures.battleBase,
                transitionValue(
                    canvas_top.width - (textures.battleBase.width * POSITIONS.battleFoeBase.focus.foe.scale) - POSITIONS.battleFoeBase.focus.foe.posR,
                    canvas_top.width - (textures.battleBase.width * POSITIONS.battleFoeBase.scale) - POSITIONS.battleFoeBase.posR),
                transitionValue(
                    POSITIONS.battleFoeBase.focus.foe.posT,
                    POSITIONS.battleFoeBase.posT),
                transitionValue(
                    textures.battleBase.width * POSITIONS.battleFoeBase.focus.foe.scale,
                    textures.battleBase.width * POSITIONS.battleFoeBase.scale),
                transitionValue(
                    textures.battleBase.height * POSITIONS.battleFoeBase.focus.foe.scale,
                    textures.battleBase.height * POSITIONS.battleFoeBase.scale));
            ctx_top.drawImage(
                textures.battle_foe,
                transitionValue(
                    canvas_top.width - (textures.battle_foe.width * POSITIONS.battleFoe.focus.foe.scale) - POSITIONS.battleFoe.focus.foe.posR,
                    canvas_top.width - (textures.battle_foe.width * POSITIONS.battleFoe.scale) - POSITIONS.battleFoe.posR),
                transitionValue(
                    POSITIONS.battleFoe.focus.foe.posT,
                    POSITIONS.battleFoe.posT),
                transitionValue(
                    textures.battle_foe.width * POSITIONS.battleFoe.focus.foe.scale,
                    textures.battle_foe.width * POSITIONS.battleFoe.scale),
                transitionValue(
                    textures.battle_foe.height * POSITIONS.battleFoe.focus.foe.scale,
                    textures.battle_foe.height * POSITIONS.battleFoe.scale));
        }
    }
}

function drawPlayerBase() {
    ctx_top.restore();

    ctx_top.drawImage(
        textures.battleBase,
        POSITIONS.battlePlayerBase.posL,
        canvas_top.height - POSITIONS.battlePlayerBase.posB,
        textures.battleBase.width * POSITIONS.battlePlayerBase.scale,
        textures.battleBase.height * POSITIONS.battlePlayerBase.scale);
    ctx_top.drawImage(
        textures.battle_players,
        POSITIONS.battlePlayer.posL,
        canvas_top.height - (textures.battle_players.height * POSITIONS.battlePlayer.scale) - POSITIONS.battlePlayer.posB,
        textures.battle_players.width * POSITIONS.battlePlayer.scale,
        textures.battle_players.height * POSITIONS.battlePlayer.scale);
}


/*
* INFO
*/
function drawOpponentInfo() {
    ctx_top.restore();

    // background sprite
    ctx_top.drawImage(textures.battleFoeBox, POSITIONS.battleFoeBox.posL, POSITIONS.battleFoeBox.posT);

    // name
    drawText(
        GAMEDATA.OPPONENT.NAME,
        POSITIONS.battleFoeBox.posL + POSITIONS.battleFoeBox.name.relPosL, 
        POSITIONS.battleFoeBox.posT + POSITIONS.battleFoeBox.name.relPosT);

    // sex
    drawSex(
        SEX.MALE,
        POSITIONS.battleFoeBox.posL + POSITIONS.battleFoeBox.sex.relPosL,
        POSITIONS.battleFoeBox.posT + POSITIONS.battleFoeBox.sex.relPosT);

    // level number
    drawText(
        GAMEDATA.OPPONENT.LEVEL.toString(),
        POSITIONS.battleFoeBox.posL + POSITIONS.battleFoeBox.level.relPosL,
        POSITIONS.battleFoeBox.posT + POSITIONS.battleFoeBox.level.relPosT);

    // hp bar
    drawHpBarFill(
        POSITIONS.battleFoeBox.posL + POSITIONS.battleFoeBox.hpBar.relPosL,
        POSITIONS.battleFoeBox.posT + POSITIONS.battleFoeBox.hpBar.relPosT,
        GAME.opponent.hp,
        GAMEDATA.OPPONENT.HPMAX);
}

function drawPlayerInfo() {
    ctx_top.restore();

    var posX = canvas_top.width - POSITIONS.battlePlayerBox.posR - textures.battlePlayerBox.width;

    // background sprite
    ctx_top.drawImage(textures.battlePlayerBox, posX, POSITIONS.battlePlayerBox.posT);

    // name
    drawText(
        GAMEDATA.PLAYER.NAME,
        posX + POSITIONS.battlePlayerBox.name.relPosL,
        POSITIONS.battlePlayerBox.posT + POSITIONS.battlePlayerBox.name.relPosT);

    // level number
    drawText(
        GAMEDATA.PLAYER.LEVEL.toString(),
        posX + POSITIONS.battlePlayerBox.level.relPosL,
        POSITIONS.battlePlayerBox.posT + POSITIONS.battlePlayerBox.level.relPosT);

    // hp bar
    drawHpBarFill(
        posX + POSITIONS.battlePlayerBox.hpBar.relPosL,
        POSITIONS.battlePlayerBox.posT + POSITIONS.battlePlayerBox.hpBar.relPosT,
        GAME.player.hp,
        GAMEDATA.PLAYER.HPMAX);

    // hp num
    drawText_HPNum(
        GAME.player.hp,
        posX + POSITIONS.battlePlayerBox.hpNum.hp.relPosL_End,
        POSITIONS.battlePlayerBox.posT + POSITIONS.battlePlayerBox.hpNum.relPosT);
    drawText_HPTotal(
        GAMEDATA.PLAYER.HPMAX,
        posX + POSITIONS.battlePlayerBox.hpNum.total.relPosL,
        POSITIONS.battlePlayerBox.posT + POSITIONS.battlePlayerBox.hpNum.relPosT);

    // exp bar
    ctx_top.restore();
    ctx_top.fillStyle = "#00ff00";
    ctx_top.fillRect(
        posX + POSITIONS.battlePlayerBox.expBar.relPosL,
        POSITIONS.battlePlayerBox.posT + POSITIONS.battlePlayerBox.expBar.relPosT,
        Math.round(GAME.player.exp * POSITIONS.battlePlayerBox.expBar.w),
        POSITIONS.battlePlayerBox.expBar.h);
    // ctx_top.fillRect(posX + POSITIONS.battlePlayerBox.expBar.relPosL, POSITIONS.battlePlayerBox.posT + POSITIONS.battlePlayerBox.expBar.relPosT, POSITIONS.battlePlayerBox.expBar.w, POSITIONS.battlePlayerBox.expBar.h);
}


/*
* TEXT
*/
function drawText(text, x, canvasY) {
    var canvasX = x;

    for(var i = 0; i < text.length; i++) {
        var iA = FONT_ALPHANUM_CHARS.indexOf(text[i]);
        var iX = iA;
        var iY = 0;
        
        if(iX >= 26) {
            iX -= 26 * Math.floor(iA / 26);
            iY = Math.floor(iA / 26);
        }

        // char is 5x9, with space: 6x10;
        // char is 10x18, with space: 12x20
        if(iX == -1) {
            canvasX += 10;
            continue;
        }

        ctx_top.drawImage(textures.battleFontAlphanum, iX * 12, iY * 20, 10, 18, canvasX, canvasY, 10, 18);
        canvasX += FONT_ALPHANUM_SIZES[iA];
    }
}

function drawText_HPTotal(level, x, canvasY) {
    var text = level.toString();
    var canvasX = x;

    for(var i = 0; i < text.length; i++) {
        var iX = FONT_LEVEL_CHARS.indexOf(text[i]);

        // char is 16x16 with space
        if(iX == -1) continue;

        ctx_top.drawImage(textures.battleFontHp, iX * 16, 0, 16, 16, canvasX, canvasY, 16, 16);
        canvasX += 16;
    }
}

function drawText_HPNum(hp, x, canvasY) {
    var text = hp.toString();
    
    drawText_HPTotal(hp, x - (text.length * 16), canvasY);
}

function drawSex(s, canvasX, canvasY) {
    // texture is 14x20, 16x20 with space
    ctx_top.drawImage(textures.sex, s * 16, 0, 14, 20, canvasX, canvasY, 14, 20);
}

function drawHpBarFill(x, y, hp, hpMax) {
    var perc = hp / hpMax;
    var hpBarFillColor = [];

    if(perc > 0.66)
        hpBarFillColor = HPBARCOLOR[1];
    else if(perc > 0.33)
        hpBarFillColor = HPBARCOLOR[2];
    else
        hpBarFillColor = HPBARCOLOR[3];
    

    ctx_top.restore();

    ctx_top.fillStyle = hpBarFillColor[0];
    ctx_top.fillRect(x, y, perc * POSITIONS.battlePlayerBox.hpBar.w, POSITIONS.battlePlayerBox.hpBar.h / 2);

    ctx_top.fillStyle = hpBarFillColor[1];
    ctx_top.fillRect(x, y + POSITIONS.battlePlayerBox.hpBar.h / 2, perc * POSITIONS.battlePlayerBox.hpBar.w, POSITIONS.battlePlayerBox.hpBar.h / 2);
}

function drawText_anywhere(textColor = "white") {
    ctx_bot.restore();
    ctx_bot.fillStyle = textColor;
    ctx_bot.font = "32px Pixelade";
    ctx_bot.textAlign = "center";
    ctx_bot.fillText("Click here to continue.", canvas_bot.width / 2, canvas_bot.height / 2);
}

function drawText_dev(text, textColor = "white", x = canvas_top.width / 2, y = canvas_top.height / 2, textAlign = "center") {
    ctx_top.restore();
    ctx_top.fillStyle = textColor;
    ctx_top.font = "48px Pixelade";
    ctx_top.textAlign = textAlign;
    ctx_top.fillText(text, x, y);
}


/*
* MESSAGE BOX
*/
function drawOverlayMessageBox(text1, text2 = "", textAlign = "left") {
    ctx_top.restore();

    // message box
    ctx_top.drawImage(textures.overlayMessageBox, 0, canvas_top.height - textures.overlayMessageBox.height);

    // text
    ctx_top.font = "32px PixelOperatorBold";
    ctx_top.fillStyle = "#000000";
    ctx_top.textAlign = textAlign;
    ctx_top.fillText(
        text1,
        textAlign == "left" ? (POSITIONS.overlayMessageBox.text.marginLR) : ((textAlign == "right") ? (canvas_top.width - POSITIONS.overlayMessageBox.text.marginLR) : (canvas_top.width / 2)),
        canvas_top.height - (textures.overlayMessageBox.height / 2) + POSITIONS.overlayMessageBox.text.relPosT1);
    ctx_top.fillText(
        text2,
        textAlign == "left" ? (POSITIONS.overlayMessageBox.text.marginLR) : ((textAlign == "right") ? (canvas_top.width - POSITIONS.overlayMessageBox.text.marginLR) : (canvas_top.width / 2)),
        canvas_top.height - (textures.overlayMessageBox.height / 2) + POSITIONS.overlayMessageBox.text.relPosT2);
}

function drawFightMessageBox(text1, text2 = "", textAlign = "left", textColor = "#ffffff", backgroundColor = "rgba(0,0,0,0.5)", borderColor = "rgba(127,0,0,0.5)") {
    ctx_top.restore();

    // transparent background
    ctx_top.fillStyle = backgroundColor;
    ctx_top.fillRect(
        0,
        canvas_top.height - POSITIONS.fightMessageBox.posB_Top,
        canvas_top.width,
        POSITIONS.fightMessageBox.height);

    // transparent border
    if(CMODE >= DRAWMODE.BATTLE_DEFAULT && CMODE <= DRAWMODE.BATTLE_FOCUS_FOE) {
        ctx_top.fillStyle = borderColor;
        ctx_top.fillRect(
            0,
            canvas_top.height - POSITIONS.fightMessageBox.posB_Top - POSITIONS.fightMessageBox.border.height,
            canvas_top.width,
            POSITIONS.fightMessageBox.border.height);
        ctx_top.fillRect(
            0,
            canvas_top.height - POSITIONS.fightMessageBox.posB_Top + POSITIONS.fightMessageBox.height,
            canvas_top.width,
            POSITIONS.fightMessageBox.border.height);
    }

    // text
    ctx_top.font = "32px PixelOperatorBold";
    ctx_top.fillStyle = textColor;
    ctx_top.textAlign = textAlign;
    ctx_top.fillText(
        text1,
        textAlign == "left" ? (POSITIONS.fightMessageBox.text.marginLR) : ((textAlign == "right") ? (canvas_top.width - POSITIONS.fightMessageBox.text.marginLR) : (canvas_top.width / 2)),
        canvas_top.height - POSITIONS.fightMessageBox.posB_Top + (POSITIONS.fightMessageBox.height / 2) + POSITIONS.fightMessageBox.text.relPosT1);
    ctx_top.fillText(
        text2,
        textAlign == "left" ? (POSITIONS.fightMessageBox.text.marginLR) : ((textAlign == "right") ? (canvas_top.width - POSITIONS.fightMessageBox.text.marginLR) : (canvas_top.width / 2)),
        canvas_top.height - POSITIONS.fightMessageBox.posB_Top + (POSITIONS.fightMessageBox.height / 2) + POSITIONS.fightMessageBox.text.relPosT2);
}

function drawQuestionBox() {
    ctx_top.restore();
    ctx_top.fillStyle = "rgba(255,255,255,0.7)";
    ctx_top.fillRect(0, POSITIONS.questionBox.marginTB, canvas_top.width, canvas_top.height - (POSITIONS.questionBox.marginTB * 2));

    ctx_top.restore();
    ctx_top.fillStyle = "black";
    ctx_top.font = "32px PixelOperatorBold";
    for(var i = 0; i < QUESTIONS[GAME.questionIndex].question.length; i++) {
        ctx_top.fillText(
            QUESTIONS[GAME.questionIndex].question[i],
            POSITIONS.questionBox.text.relPosL,
            POSITIONS.questionBox.marginTB + POSITIONS.questionBox.text.relPosT[i]);
    }
}

function drawQuestionChoices() {
    ctx_bot.restore();

    for(var i = 0; i < QUESTIONS[GAME.questionIndex].choices.length; i++) {
        ctx_bot.fillStyle = "rgba(255,255,255,0.6)";
        ctx_bot.fillRect(POSITIONS.questionChoices.marginLR, POSITIONS.questionChoices.posT[i], canvas_bot.width - (POSITIONS.questionChoices.marginLR * 2), POSITIONS.questionChoices.h);

        ctx_bot.fillStyle = "black";
        ctx_bot.font = "28px PixelOperatorBold";
        ctx_bot.fillText(
            QUESTIONS[GAME.questionIndex].choices[i],
            POSITIONS.questionChoices.marginLR + POSITIONS.questionChoices.text.relPosL,
            POSITIONS.questionChoices.posT[i] + POSITIONS.questionChoices.text.relPosT);
    }
}


function drawTime() {
    var d = new Date();
    var H = d.getHours().toString();
    var M = d.getMinutes().toString();

    if(H.length == 1) H = "0" + H;
    if(M.length == 1) M = "0" + M;

    ctx_bot.restore();
    
    ctx_bot.fillStyle = "#ffffff";
    ctx_bot.font = "16px Pixelmix";
    ctx_bot.textAlign = "left";
    ctx_bot.fillText(H + " : " + M, POSITIONS.time.posL, POSITIONS.time.posT);
}



function drawBattleMoves() {
    ctx_bot.restore();
    ctx_bot.fillStyle = "white";
    ctx_bot.font = "32px PixelOperatorBold";
    ctx_bot.textAlign = "center";

    if(!GAME.lastMove) {
        ctx_bot.fillText(SCRIPT.BATTLE.moves.player.names[0], POSITIONS.battleChoices.posL_C, POSITIONS.battleChoices.posT_Top_s);
        ctx_bot.fillText(SCRIPT.BATTLE.moves.player.names[1], POSITIONS.battleChoices.posL_C, POSITIONS.battleChoices.posT_Bot_s);
        ctx_bot.fillText(SCRIPT.BATTLE.moves.player.names[2], POSITIONS.battleChoices.posR_C, POSITIONS.battleChoices.posT_Top_s);
        ctx_bot.fillText(SCRIPT.BATTLE.moves.player.names[3], POSITIONS.battleChoices.posR_C, POSITIONS.battleChoices.posT_Bot_s);
    } else {
        ctx_bot.fillText(SCRIPT.BATTLE.moves.player.lastName[0], POSITIONS.battleChoices.posL_C, POSITIONS.battleChoices.posT_Top[0]);
        ctx_bot.fillText(SCRIPT.BATTLE.moves.player.lastName[1], POSITIONS.battleChoices.posL_C, POSITIONS.battleChoices.posT_Top[1]);

        ctx_bot.fillText(SCRIPT.BATTLE.moves.player.lastName[0], POSITIONS.battleChoices.posL_C, POSITIONS.battleChoices.posT_Bot[0]);
        ctx_bot.fillText(SCRIPT.BATTLE.moves.player.lastName[1], POSITIONS.battleChoices.posL_C, POSITIONS.battleChoices.posT_Bot[1]);

        ctx_bot.fillText(SCRIPT.BATTLE.moves.player.lastName[0], POSITIONS.battleChoices.posR_C, POSITIONS.battleChoices.posT_Top[0]);
        ctx_bot.fillText(SCRIPT.BATTLE.moves.player.lastName[1], POSITIONS.battleChoices.posR_C, POSITIONS.battleChoices.posT_Top[1]);

        ctx_bot.fillText(SCRIPT.BATTLE.moves.player.lastName[0], POSITIONS.battleChoices.posR_C, POSITIONS.battleChoices.posT_Bot[0]);
        ctx_bot.fillText(SCRIPT.BATTLE.moves.player.lastName[1], POSITIONS.battleChoices.posR_C, POSITIONS.battleChoices.posT_Bot[1]);
    }
}