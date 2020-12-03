let inputLimit = document.getElementById("inputLimit");
let inputLength = document.getElementById("inputLength");
let parent = document.getElementById("wrapproduct");

const getText = (text, pattern) => {
  return text.match(pattern);
};

const buttonStartDisabled = () => {
  buttonStart.disabled = !inputLength.value || !inputLimit.value;
};

const inputLengthHandler = (e) => {
  e.target.value = getText(e.target.value, /^([1-9][0-9]?|100)$/g);
  buttonStartDisabled();
  return e;
};

const inputLimitHandler = (e) => {
  e.target.value = getText(e.target.value, /^([1-9]|10)$/g);
  buttonStartDisabled();
  return e;
};

const buttonStartHandler = () => {
  buttonStart.disabled = true;
  inputLength.disabled = true;
  inputLimit.disabled = true;
};

const enabledHandler = () => {
  buttonStart.disabled = false;
  inputLength.disabled = false;
  inputLimit.disabled = false;
};

inputLength.addEventListener("input", inputLengthHandler);
inputLimit.addEventListener("input", inputLimitHandler);
buttonStart.addEventListener("click", buttonStartHandler);

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getStrings = (text, lengthArr) => {
  let strings = text.replace(/"+/g, "").match(/(.{10,200})/g);

  let randomStrings = [];
  for (let i = 0; i < lengthArr; i++) {
    randomStrings.push(strings[getRandomInt(0, strings.length - 1)].trim());
  }
  return randomStrings;
};

const getSentences = (text) => {
  let arr = text.replace(/"+/g, "").split("\n");
  let text1 = arr.join(" ");
  let text2 = text1.match(/([^\.!\?]+[\.!\?]+["']?)|\s*$/g);
  text2.pop();
  return text2;
};

const past = (str, sentences, parent) => {
  let div = document.createElement("div");
  div.className = "product";

  let title = str.trim().replace(/^./, (s) => s.toUpperCase());
  let sentence = sentences[getRandomInt(0, sentences.length - 1)]
    .trim()
    .replace(/^./, (s) => s.toUpperCase());

  div.innerHTML = `<h4>${parent.childElementCount + 1}. ${title}</h4><p>${sentence}</p>`;
  parent.append(div);

  let progress = document.getElementById("progress");
  progress.innerHTML = `Progress: ${Math.round(
    (parseFloat(parent.childElementCount) / parseFloat(inputLength.value)) 
    * 100.0
  )} of 100`;

  return "success";
};

const include = (url) => {
  let script = document.createElement("script");
  script.src = url;
  document.getElementsByTagName("body")[0].appendChild(script);
  return script;
};

const clear = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const _start = (_text) => {
  let randomStrs = getStrings(_text, inputLength.value);
  let sentences = getSentences(_text);
  queue([randomStrs, sentences, enabledHandler], past, inputLimit.value);
};

const start = () => {
  clear(parent);
  let s = include("./js/text.js");
  s.onload = function () {
    setTimeout(function () {
      _start(text);
    }, 0);
  };
};
const queue = (objects, f, limit) => {
  const getPromise = (str, sentences) => {
    const promise = () =>
      new Promise((resolve) => {
        setTimeout(() => {
          let r = f(str, sentences, parent);
          resolve(r);
        }, Math.round(Math.random() * 9000) + 1000);
      });

    return promise();
  };
  const _next = () => {
    return running.length < limit && promises.length;
  };

  let finised = objects[2];

  const run = () => {
    while (_next()) {
      const promise = promises.shift();
      promise.then((a) => {
        complete.push(a);
        running.shift();
        run();
        if (!promises.length && !running.length) finised();
      });
      running.push(promise);
    }
  };

  let randomStrs = objects[0];
  let sentences = objects[1];

  this.promises = [];
  for (let i in randomStrs) {
    this.promises.push(getPromise(randomStrs[i], sentences));
  }

  this.running = [];
  this.complete = [];
  this.limit = limit;

  run();
  return this.promises;
};
