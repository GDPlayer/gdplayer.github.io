const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const logo = new Image();
canvas.width = 800
canvas.height = 600
ctx.imageSmoothingEnabled = false;
font = "TopazA1200";
logo.src = "logo.png";
let scrollerOffset = canvas.width;
let bars = [];
let numBars = 5;
t = 0;

centertext = `
hello guys and welcome to my website site website!!!111

-\`-.-\`-.-\`-.-\`-.-\`-.-\`-.-\`-.-\`-.-\`-.-\`-.-\`-.-\`-.-\`-.-\`-

Code ------------------------------------- GDPlayer1035
Logo ------------------------------------- GDPlayer1035
Music -------------------------- Tempest, paso, dubmood

-\`-.-\`-.-\`-.-\`-.-\`-.-\`-.-\`-.-\`-.-\`-.-\`-.-\`-.-\`-.-\`-.-\`-
`;

scrollertext = "my pc has been lagging like crazy trying to make this website...... maybe because of my shitty IDE..... thanks micro$lop for creating the most bloated \"lightweight\" code editor -=-=- i literally do not know what else to put on this website so maybe ill just say hi to my friends instead -=-=- special greets to fluxdrive, mox, slinx92, wahplus, ponali, dd6, and others i could not be bothered to mention -=-=- WEBSITE UNDER CONSTRUCTION!!!!!!1111!!1!11!!11!!1 i may or may not update this website if at all";

function drawGradientRect(ctx, x, y, w, h, c1, c2, dir = 'tb') {
    const x2 = dir === 'lr' ? x + w : x;
    const y2 = dir === 'tb' ? y + h : y;

    const grad = ctx.createLinearGradient(x, y, x2, y2);
    grad.addColorStop(0, c1);
    grad.addColorStop(1, c2);
    ctx.fillStyle = grad;
    ctx.fillRect(x, y, w, h);
}

function drawThreeStopGradientRect(ctx, x, y, w, h, c1, c2, c3, dir = 'tb') {
    const x2 = dir === 'lr' ? x + w : x;
    const y2 = dir === 'tb' ? y + h : y;

    const grad = ctx.createLinearGradient(x, y, x2, y2);
    grad.addColorStop(0, c1);
    grad.addColorStop(0.5, c2);
    grad.addColorStop(1, c3);
    ctx.fillStyle = grad;
    ctx.fillRect(x, y, w, h);
}

function drawText(text, x, y, lineHeight = 16) {
    ctx.font = `16px ${font}`; // Fixed order: size must come first
    ctx.fillStyle = "#fff";

    text.split('\n').forEach((line, index) => {
        ctx.fillText(line, x, y + (index * lineHeight));
    });
}

function drawCredits() {
    ctx.font = `16px ${font}`;
    ctx.fillStyle = "#fff";
    const lines = centertext.split('\n');
    const lineHeight = 16;
    const startY = 320;
    lines.forEach((line, index) => {
        const x = (canvas.width - ctx.measureText(line).width) / 2;
        ctx.fillText(line, x, startY + (index * lineHeight));
    });
}

function drawScroller() {
    ctx.font = `16px ${font}`;
    ctx.fillStyle = "#fff";

    let currentX = scrollerOffset;
    const baseLineY = canvas.height - 32;

    for (let i = 0; i < scrollertext.length; i++) {
        const char = scrollertext[i];
        const charWidth = ctx.measureText(char).width;

        if (currentX + charWidth > 0 && currentX < canvas.width) {
            const angle = (t * 2) + (i * 0.15);
            const yOffset = Math.sin(angle) * 10;
            ctx.fillText(char, currentX, baseLineY + yOffset);
        }
        currentX += charWidth;
    }
    scrollerOffset -= 2.5;
    if (currentX < 0) {
        scrollerOffset = canvas.width;
    }
}


function drawLogo() {
    ctx.drawImage(logo, canvas.width / 2 - logo.width / 2, canvas.height / 2 - logo.height / 2 + Math.sin(t) * 16 - 100);
}

function drawBars() {
    for (let i = 0; i < numBars; i++) {
        drawThreeStopGradientRect(ctx, 0, canvas.height / 2 + Math.sin(t * Math.sin(i + 1) * 2) * 90, canvas.width, 32, `hsl(${(i * 23) % 360},100%,25%)`, `#777`, `hsl(${(i * 23) % 360},100%,25%)`);
    }
}

function update() {
    ctx.fillStyle = "#000549c2";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // top and bottom gradients
    drawGradientRect(ctx, 0, 0, canvas.width, 32, "#95daebff", "#545dd600");
    drawGradientRect(ctx, 0, canvas.height - 32, canvas.width, 32, "#545dd600", "#95daebff");
    drawBars();
    drawLogo();
    drawCredits();
    drawScroller();
    t = t + 0.05;
    requestAnimationFrame(update);
}
update();