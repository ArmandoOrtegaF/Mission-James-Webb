const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

draggableElements.forEach(elem => {
    elem.addEventListener("dragstart", dragStart);
});

droppableElements.forEach(elem => {
    elem.addEventListener("dragenter", dragEnter);
    elem.addEventListener("dragover", dragOver); 
    elem.addEventListener("dragleave", dragLeave);
    elem.addEventListener("drop", drop); 
  });

function dragStart(event){
    event.dataTransfer.setData("id", event.target.id);
}

function dragEnter(event){
    if(!event.target.classList.contains("dropped")){
    event.target.classList.add("droppable-hover");
    }
}

function dragOver(event){
    if(!event.target.classList.contains("dropped")){
    event.preventDefault();
    }
}

function dragLeave(event){
    if(!event.target.classList.contains("dropped")){
    event.target.classList.remove("droppable-hover");
    }
}

function drop(event){
    event.preventDefault();
    const draggableElementData = event.dataTransfer.getData("id");
    const droppableElementData = event.target.getAttribute("data-draggable-id");
    if(draggableElementData === droppableElementData){
        event.target.classList.add("dropped");
        const draggableElement = document.getElementById(draggableElementData);
        event.target.style.backgroundColor = draggableElement.style.color;
        draggableElement.classList.add("dragged");
        draggableElement.setAttribute("draggable","false");

    }
}