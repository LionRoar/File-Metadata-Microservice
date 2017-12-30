

document.addEventListener("DOMContentLoaded", function(event) {

 var fileInput =  document.getElementById('file');
 var upBtn = document.getElementById('upload').onclick = function(event){
   if (fileInput.files.length === 0){
     console.log(fileInput);
     alert('Please , select a file!');
     event.preventDefault();
   }
 }


});
