//selecting all required elments
const dropArea = document.querySelector(".drag-area");

//if user drag file over box
dropArea.addEventListener("dragover", ()=>{
    console.log("File is over DragArea");
    dropArea.classList.add("active");
})

//if user leave drag file from box
dropArea.addEventListener("dragleave", ()=>{
    console.log("File is outside DragArea");
    dropArea.classList.remove("active");
})

//if user drop file into box
dropArea.addEventListener("dragleave", ()=>{
    console.log("File is outside DragArea");
    dropArea.classList.remove("active");
})