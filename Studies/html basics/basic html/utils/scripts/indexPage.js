const showButton = document.getElementById("button1");
const colorButton = document.getElementById("button2");
const moodButton = document.getElementById("moodButton")
const paragraph = document.getElementById("paragraph");
const moodParagraph = document.getElementById("currentMood");
const colorArr = ['red', 'yellow', 'pink', 'orange', 'black'];
const emojiArr = ['(❁´◡`❁)', '(┬┬﹏┬┬)', '(╯°□°）╯︵ ┻━┻', '༼ つ ◕_◕ ༽つ'];
let index = 0;

showButton.addEventListener('click', function() {
        if (paragraph.style.visibility == "hidden") {
            paragraph.style.visibility = "visible"
        } else {
            paragraph.style.visibility = "hidden"
        }
    });

colorButton.addEventListener('click', function() {
    paragraph.style.color = colorArr[index];
    index = index >= colorArr.length - 1 ? 0 : index + 1; 
    });

moodButton.addEventListener('click', function() {
    moodParagraph.textContent = emojiArr[index];
    index = index >= emojiArr.length - 1 ? 0 : index + 1; 
    });