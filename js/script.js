//selecting all required elments
const dropArea = document.querySelector(".drag-area");

let file; 

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
dropArea.addEventListener("drop", (event)=>{
    event.preventDefault(); //preventing from default behaviour of opening file in new tab
    console.log("File is dropped into box");
    dropArea.classList.remove("active");
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = event.dataTransfer.files[0];
    let fileType = file.type;
    console.log(fileType); //stats of the file

    let validExtensions = ["image/jpeg", "image/png", "image/jpg"];
    if(validExtensions.includes(fileType)){
        console.log("This is an image file");
    }
    else{
        alert("this is not an Image File!");
    }
})