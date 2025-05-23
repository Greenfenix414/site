let editorText =""
document.addEventListener("DOMContentLoaded", function () {
  button = document.getElementById("uploadData");
  textArea = document.getElementById("editArea");
  downloader = document.getElementById("downloader");

  reader = new FileReader();
  var data = $("#uploadData")[0];
  button.onchange = function () {
    
    reader.readAsText(data.files[0]);
    button.value=""
  };
  reader.onload = function (e) {
   textArea.textContent =  event.target.result  
console.log(textArea.textContent)  };
});
$("#saveButton").click(function() {
  fileName=prompt("What will you call the file?","fenix.txt")
  console.log(fileName)
  if(fileName){
    file=new Blob([editorText])
    downloader.href=URL.createObjectURL(file)
    console.log(downloader.href+" The url of the saved text(if u wann share it or smthn idk)")
    downloader.download=fileName
    downloader.click()
  }
});
$(document).on("keypress", function (e) {
  e = e || window.event;
  var charCode = typeof e.which == "number" ? e.which : e.keyCode;
  var pressed = String.fromCharCode(charCode);
  if (charCode) {
    if ( $('#mySelectBox option:selected')){
    
      editorText=editorText+pressed
    console.log(editorText)}
    }})
