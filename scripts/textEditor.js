
addPondiverseButton(() => {
  return {
    type: "example",
    data: "example data",
    image: canvas?.toDataURL("/site/art/assets/jim.png"),
  };
});
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

   textArea.innerHTML =  event.target.result  
console.log(textArea.innerHTML) 
  console.log(e.target.result)};
});
$("#saveButton").click(function() {
  fileName=prompt("What will you call the file?","fenix.txt")
  console.log(fileName)
  if(fileName){
    file=new Blob([(textArea.innerHTML.replace(/<div>/gi,`${String.fromCharCode(13)}`).replace(/<\/div>/gi,"").replace(/&nbsp;/gi,""))])
    downloader.href=URL.createObjectURL(file)
    console.log(downloader.href+" The url of the saved text(if u wann share it or smthn idk)")
    downloader.download=fileName
    downloader.click()
  }
});
$("#pondButton").click(function() {
pondy.openPondiverseDialog()
});
$(document).on("keypress", function (e) {
  e = e || window.event;

  var charCode = typeof e.which == "number" ? e.which : e.keyCode;
  var pressed = String.fromCharCode(charCode);
  if (charCode) {
    if ( $("#editArea").is(":focus")){
       if(charCode=="13"){
    }}
    
    } 

}
              )
