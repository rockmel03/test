const cursor = document.querySelector('#cursor');
let heading = document.querySelector("#page1 h1")

window.addEventListener("mousemove", (dets) =>{

    cursor.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    cursor.style.transition = '.1s all ease';
});


