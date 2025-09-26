const sortableEle = document.querySelector(".sortable-list")

const itemEle = document.querySelectorAll(".item")



itemEle.forEach(item =>{
    item.addEventListener("dragstart" , ()=>{
        setTimeout(() => item.classList.add("dragging"), 0);
    });



    item.addEventListener("dragend", ()=>{
        item.classList.remove("dragging");
    });
    
});

const initialSortableList = (e)=>{
    e.preventDefault();


    const draggingItem = document.querySelector(".dragging");


    let siblings = [...sortableEle.querySelectorAll(".item:not(.dragging)")];


    let nextSibling= siblings.find(sibling =>{
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
     });
    

     sortableEle.insertBefore(draggingItem, nextSibling);
     
}



sortableEle.addEventListener("dragover", initialSortableList);

sortableEle.addEventListener("dragenter", e => e.preventDefault());