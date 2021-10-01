const btnSelector = document.querySelector(".btn-banana");
const textSelector = document.querySelector(".txt-input");
const outputSelector = document.querySelector(".output");

const url = `https://api.funtranslations.com/translate/minion.json`;

const generateUrl = (text) => {
    const generatedURL = `${url}?text=${text}`;
    return encodeURI(generatedURL);
}

const errorHandler = (error) => {
    alert(`${error}`)
}

const clickEventHandler = async() => {
    
    const text = textSelector.value;
    
    try{
    const res = await fetch(generateUrl(text));
    const json = await res.json();
    outputSelector.innerText = json.contents.translated;
   }
   catch (err) {
    errorHandler(err);
   }
}

btnSelector.addEventListener("click", clickEventHandler);