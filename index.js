let id = 1;

const left = document.querySelector('.left');
const right = document.querySelector('.right');

function slide(id){
    document.querySelector('.image-slider').src = `./pic/img${id}.jpg`;
}

left.addEventListener("click", ()=> {
     id--;
    if(id <= 0){
        id = 30; 
    };
    slide(id);
});
right.addEventListener("click", ()=> {
    id++;
    if (id >= 31){
        id = 1; 
    }
    slide(id);
});

