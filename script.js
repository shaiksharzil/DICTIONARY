let btn = document.querySelector("button");
let ans = document.querySelector(".def");
let searchword = document.querySelector(".searchword");
let partOfSpeech = document.querySelector(".partOfSpeech");
let phoneticsword = document.querySelector(".phoneticsword");
let phonetics = document.querySelector(".phonetics");
let an = document.querySelector(".an");
let sy = document.querySelector(".sy");
let anto = document.querySelector(".antonyms");
let synonym = document.querySelector(".synonym");
let main = document.querySelector(".main");
let headsy = document.querySelector(".headsy");
let headan =document.querySelector(".headan");
let audio = document.querySelector("audio");
let sound = document.querySelector(".ri-volume-up-fill");
let error = document.querySelector(".error");
let load = document.querySelector(".load");
let input1 = document.querySelector("input");
let example = document.querySelector(".examples")
let exam = document.querySelector(".exam");
btn.addEventListener("click", function(){
    let arraysy = [];
    let arrayan = [];
    let arrayex = [];
    ans.innerHTML = "";
    an.innerHTML = "";
    sy.innerHTML = "";
    searchword.innerHTML = "";
    partOfSpeech.innerHTML = "";
    phoneticsword.innerHTML = "";
    headan.innerHTML = "";
    headsy.innerHTML = "";
    sound.style.display = "none"
    main.style.display = "none"
    error.style.display = "none"
    load.style.display = "flex"
    example.innerHTML = ""
    exam.style.display = "none"
   let input = input1.value
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`).then(function(res){
        if (res.status === 404) {
            error.style.display = "flex"
            main.style.display = "none"
            load.style.display = "none"
        }
        if (res.status === 200) {
            main.style.display = "block"
            error.style.display = "none"
            load.style.display = "none"
        }
        return res.json()
    }).then(function(data){
        searchword.innerHTML = data[0].word;
        partOfSpeech.innerHTML = data[0].meanings[0].partOfSpeech;
        if (data[0].phonetics[0]  == undefined) {
            sound.style.display = "none"
        } else {
            if (data[0].phonetics[0].audio == 0) {
                sound.style.display = "none"
            } else {
                sound.style.display = "block"
                audio.src = data[0].phonetics[0].audio
            }
        }
        if (data[0].phonetics[0] == undefined) {
            phonetics.style.display = "none"
        } else {
            if (data[0].phonetics[0].text == undefined) {
                phonetics.style.display = "none"
            } else {
                phonetics.style.display = "flex"
            phoneticsword.innerHTML = data[0].phonetics[0].text 
            }
        }
        for (let a = 0; a < data.length; a++) {
            for (let i = 0; i < data[a].meanings.length; i++) {
                for (let j = 0; j < data[a].meanings[i].definitions.length; j++) {
                    ans.innerHTML += `<li>${data[a].meanings[i].definitions[j].definition}</li>`
                }
            }
        }
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].meanings.length; j++) {
                for (let l = 0; l < data[i].meanings[j].synonyms.length; l++) {
                    arraysy.push(data[i].meanings[j].synonyms[l]);  
                }
            }
        }
        let filteredarraysy = arraysy.filter(value => value !== undefined)
        for (let z = 0; z < filteredarraysy.length; z++) {
            synonym.style.display = "block"
                headsy.style.display =  "block"
                headsy.innerHTML = "Synonyms:"
            sy.innerHTML += `<li>${filteredarraysy[z]}</li>`
        }
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].meanings.length; j++) {
                for (let l = 0; l < data[i].meanings[j].antonyms.length; l++) {
                    arrayan.push(data[i].meanings[j].antonyms[l]);  
                }
            }
        }
let filteredarrayan = arrayan.filter(value => value !== undefined)
        for (let s = 0; s < filteredarrayan.length; s++) {
            anto.style.display = "block"
                headan.style.display =  "block"
                headan.innerHTML = "Antonyms:"
            an.innerHTML += `<li>${filteredarrayan[s]}</li>`
        }
        for (let a = 0; a < data.length; a++) {
            for (let i = 0; i < data[a].meanings.length; i++) {
                for (let j = 0; j < data[a].meanings[i].definitions.length; j++) {
                    arrayex.push(data[a].meanings[i].definitions[j].example);
                }
            }
        }
let filteredarrayex = arrayex.filter(value => value !== undefined)
        for (let v = 0; v < filteredarrayex.length; v++) {
            exam.style.display = "block"
            example.innerHTML += `<li>${filteredarrayex[v]}</li>`
        }
    })
})
input1.addEventListener("change", function(){
    let arraysy = [];
    let arrayan = [];
    let arrayex = [];
    ans.innerHTML = "";
    an.innerHTML = "";
    sy.innerHTML = "";
    searchword.innerHTML = "";
    partOfSpeech.innerHTML = "";
    phoneticsword.innerHTML = "";
    headan.innerHTML = "";
    headsy.innerHTML = "";
    sound.style.display = "none"
    main.style.display = "none"
    error.style.display = "none"
    load.style.display = "flex"
    example.innerHTML = ""
    exam.style.display = "none"
   let input = input1.value
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`).then(function(res){
        if (res.status === 404) {
            error.style.display = "flex"
            main.style.display = "none"
            load.style.display = "none"
        }
        if (res.status === 200) {
            main.style.display = "block"
            error.style.display = "none"
            load.style.display = "none"
        }
        return res.json()
    }).then(function(data){
        searchword.innerHTML = data[0].word;
        partOfSpeech.innerHTML = data[0].meanings[0].partOfSpeech;
        if (data[0].phonetics[0]  == undefined) {
            sound.style.display = "none"
        } else {
            if (data[0].phonetics[0].audio == 0) {
                sound.style.display = "none"
            } else {
                sound.style.display = "block"
                audio.src = data[0].phonetics[0].audio
            }
        }
        if (data[0].phonetics[0] == undefined) {
            phonetics.style.display = "none"
        } else {
            if (data[0].phonetics[0].text == undefined) {
                phonetics.style.display = "none"
            } else {
                phonetics.style.display = "flex"
            phoneticsword.innerHTML = data[0].phonetics[0].text 
            }
        }
        for (let a = 0; a < data.length; a++) {
            for (let i = 0; i < data[a].meanings.length; i++) {
                for (let j = 0; j < data[a].meanings[i].definitions.length; j++) {
                    ans.innerHTML += `<li>${data[a].meanings[i].definitions[j].definition}</li>`
                }
            }
        }
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].meanings.length; j++) {
                for (let l = 0; l < data[i].meanings[j].synonyms.length; l++) {
                    arraysy.push(data[i].meanings[j].synonyms[l]);  
                }
            }
        }
        let filteredarraysy = arraysy.filter(value => value !== undefined)
        for (let z = 0; z < filteredarraysy.length; z++) {
            synonym.style.display = "block"
                headsy.style.display =  "block"
                headsy.innerHTML = "Synonyms:"
            sy.innerHTML += `<li>${filteredarraysy[z]}</li>`
        }
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].meanings.length; j++) {
                for (let l = 0; l < data[i].meanings[j].antonyms.length; l++) {
                    arrayan.push(data[i].meanings[j].antonyms[l]);  
                }
            }
        }
let filteredarrayan = arrayan.filter(value => value !== undefined)
        for (let s = 0; s < filteredarrayan.length; s++) {
            anto.style.display = "block"
                headan.style.display =  "block"
                headan.innerHTML = "Antonyms:"
            an.innerHTML += `<li>${filteredarrayan[s]}</li>`
        }
        for (let a = 0; a < data.length; a++) {
            for (let i = 0; i < data[a].meanings.length; i++) {
                for (let j = 0; j < data[a].meanings[i].definitions.length; j++) {
                    arrayex.push(data[a].meanings[i].definitions[j].example);
                }
            }
        }
let filteredarrayex = arrayex.filter(value => value !== undefined)
        for (let v = 0; v < filteredarrayex.length; v++) {
            exam.style.display = "block"
            example.innerHTML += `<li>${filteredarrayex[v]}</li>`
        }
    })
})
let isplaying = false
sound.addEventListener("click", function(){
    if (isplaying) {
        audio.pause();
        audio.currentTime = 0
        isplaying = false
    } else {
        audio.play()
        isplaying = true
    }
})