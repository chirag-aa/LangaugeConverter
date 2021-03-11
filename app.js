var translateBtn=document.querySelector("#translate-btn");
var textinp=document.querySelector("#inputText");
var inputtext=document.querySelector("#input");

var serverurl= "https://api.funtranslations.com/translate/minion.json";

function gettranslationurl(text){
  return serverurl + "?" + "text=" + text;
}

function errorhandler(error){
  console.log("error accured",error);
  alert("someting went wrong try after some time");
}

function buttonclick(){
  //  console.log("Clicked!");
  //  console.log("input",textinp.value);
    // inputtext.innerText="ajajjajjajjaja  "+textinp.value;
    var enteredtext=textinp.value;
    fetch(gettranslationurl(enteredtext))
    .then(Response=>Response.json())
    .then(json=>{
          var translatedtext=json.contents.translated;
          inputtext.innerText=translatedtext;
    })
    .catch(errorhandler);
};
translateBtn.addEventListener("click",buttonclick);