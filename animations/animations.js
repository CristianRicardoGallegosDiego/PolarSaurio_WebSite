const texts = ["Construyo páginas para la web.", "Construyendo el futuro digital a través de software y aplicaciones innovadoras."];
const typedTextElement = document.getElementById("typewriter");

function typeText(text) {
    let currentCharIndex = 0;
    const typingAnimation = setInterval(() => {
        typedTextElement.textContent = text.slice(0, currentCharIndex);
        currentCharIndex++;
        if (currentCharIndex > text.length) {
            clearInterval(typingAnimation);
            setTimeout(() => {
                typedTextElement.textContent = "";
                nextWord();
            }, 1000);
        }
    }, 100);
}

let currentTextIndex = 0;

function nextWord () {
    const indexWord = texts[currentTextIndex];
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    typeText(indexWord);
}

nextWord();
particlesJS.load('particles-js', 'animations/particlesjs-config.json');
