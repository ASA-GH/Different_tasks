const inputLength = document.getElementById("inputLength");
const inputLimit = document.getElementById("inputLimit");
const buttonStart = document.getElementById("buttonStart");

const include = (url) => {
    let script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('body')[0].appendChild(script);
    return script;
}

const past = (str, sentences) => {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let parent = document.getElementById("wrapproduct");
    let div = document.createElement("div");
    div.className = "product"
    div.innerHTML = `<h4>${parent.childElementCount + 1}. ${str.replace(/^./, s => s.toUpperCase())}</h4><p>${sentences[getRandomInt(0, (sentences.length - 1))]}</p>`
    parent.append(div);

    let count = 63;
    let progress = document.getElementById("progress");
    progress.innerHTML = `Progress: ${Math.round((parent.childElementCount.toFixed(2) / count.toFixed(2) * 100.00))} of 100`;

    return 'success'
}

const getStrings1 = (text) => {
    return text.replace(/"+/g, '').split('\n')
};

const getSentences1 = (text) => {
    let arr = getStrings1(text);
    let text1 = arr.join(' ')
    let text2 = text1.match(/([^\.!\?]+[\.!\?]+["']?)|\s*$/g);
    text2.pop()
    return text2;
};

const start = () => {
    let s = include("./js/text.js")
    s.onload = function() {
        setTimeout(function() {
            queue(text, past, 10);
        }, 0);
    };
}

const getText = function(text, pattern) {
    return text.match(pattern);
};

const inputLengthHandler = function(e) {
    e.target.value = getText(e.target.value, /^([1-9][0-9]?|100)$/g);
    buttonStartDisabled();
    return e;
};
const inputLimitHandler = function(e) {
    e.target.value = getText(e.target.value, /^([1-9]|10)$/g);
    buttonStartDisabled();
    return e;
};
const buttonStartDisabled = function() {
    buttonStart.disabled = !inputLength.value || !inputLimit.value;
};

function buttonStartHandler() {
    buttonStart.disabled = true;
    inputLength.disabled = true;
    inputLimit.disabled = true;
}

const queue = (text, f, limit) => {
    const getPromise = (str, sentences) => {
        const promise = () =>
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve(f(str, sentences));
                }, Math.round(Math.random() * 9000) + 1000);
            });

        return promise();
    };

    const getStrings = (text) => {
        return text.replace(/"+/g, '').split('\n')
    };

    const getSentences = (text) => {
        let arr = getStrings(text);
        let text1 = arr.join(' ')
        let text2 = text1.match(/([^\.!\?]+[\.!\?]+["']?)|\s*$/g);
        text2.pop()
        return text2;
    };

    const _next = () => {
        return running.length < limit && promises.length;
    };

    const run = () => {
        while (_next()) {
            const promise = promises.shift();
            promise.then((a) => {
                complete.push(a);
                running.shift();
                run();
            });
            running.push(promise);
        }
    };

    let sentences = getSentences(text);
    let arrStr = getStrings(text);

    this.promises = [];
    for (let i in arrStr) {
        this.promises.push(getPromise(arrStr[i], sentences));
    }
    this.total = promises.length;
    this.running = [];
    this.complete = [];
    this.limit = limit;

    run();
    return this.complete;
};
inputLength.addEventListener("input", inputLengthHandler);
inputLimit.addEventListener("input", inputLimitHandler);
buttonStart.addEventListener("click", buttonStartHandler);