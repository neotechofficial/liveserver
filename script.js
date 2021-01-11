let editor=document.getElementById("editor");
let output=document.getElementById("output");
editor.addEventListener("keyup",()=>{
    output.innerHTML=editor.value;
    editor.scrollTop=editor.scrollHeight;
    output.scrollTop=output.scrollHeight;
})