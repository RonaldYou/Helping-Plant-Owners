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
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = event.dataTransfer.files[0];
    let fileType = file.type;

    let validExtensions = ["image/jpeg", "image/png", "image/jpg"];
    if(validExtensions.includes(fileType)){
        let fileReader = new FileReader(); // creating new filereader object
        fileReader.onload = ()=>{
            let fileURL = fileReader.result; // passing user file source in fileURL variable
            console.log(fileURL);
            let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
            dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
        }
        fileReader.readAsDataURL(file);
    }
    else{
        alert("This is not an Image File!");
        dropArea.classList.remove("active");
    }
});