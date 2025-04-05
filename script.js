let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");
let aButton = document.getElementById("2");
let bButton = document.getElementById("1");

let clickCount = 0;  // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
    "继续点点看", 
    "要不再想想？", 
    "不许选这个！ ", 
    "不许点灰色的", 
    "点喜庆的！", 
    "我不要！！！",
    "快快快",  
    "哈哈哈还是大红喜庆按钮吧"
];

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **新增：让图片和文字往上移动**
    let moveUp = clickCount * 25; // 每次上移 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 5 次变化）
    if (clickCount <= 8) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化（前 5 次变化）
    if (clickCount === 1) mainImage.src = "https://wmimg.com/i/1452/2025/04/67f124d4ccfbe.png"; // 震惊
    if (clickCount === 2) mainImage.src = "https://wmimg.com/i/1452/2025/04/67f124e97f405.png";   // 思考
    if (clickCount === 3) mainImage.src = "https://wmimg.com/i/1452/2025/04/67f124f86be01.png";   // 生气
    if (clickCount === 4) mainImage.src = "https://wmimg.com/i/1452/2025/04/67f1250e828ac.png";  // 哭
    if (clickCount === 5) mainImage.src = "https://wmimg.com/i/1452/2025/04/67f1251c729b1.png";  // 之后一直是哭
    if (clickCount === 6) mainImage.src = "https://wmimg.com/i/1452/2025/04/67f125327956f.png";  // 之后一直是哭
    if (clickCount === 7) mainImage.src = "https://wmimg.com/i/1452/2025/04/67f12546d9fac.png";  // 之后一直是哭
    if (clickCount >= 8) mainImage.src = "https://wmimg.com/i/1452/2025/04/67f12546d9fac.png";  // 之后一直是哭

});

// Yes 按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!生日快乐!!! ( >᎑<)♡︎ᐝ</h1>
            <h2 class="yes-text">送你一个提取码 2545 记得把号码告诉我哦~( >᎑<)♡︎ᐝ</h2>
            <h2 class="yes-text">如果你是按左边的按钮进来的，可以刷新页面试试看右边那个~( >᎑<)♡︎ᐝ</h2>
            <h2 class="yes-text">事事顺遂！( >᎑<)♡︎ᐝ</h2>
            <img src="https://wmimg.com/i/1452/2025/04/67f1256ae19ea.png" alt="拥抱" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});