let element = document.querySelectorAll('.elem');

element.forEach((val)=>{
    val.addEventListener('mousemove',(dets) =>{
        val.childNodes[3].style.top = dets.clientY +"px";
        val.childNodes[3].style.left = dets.clientX +"px";
        val.childNodes[3].style.transform = `translate(-50% ,-50%)`;
        val.childNodes[3].style.opacity = 1;
    
    })
    val.addEventListener('mouseleave', function (dets){
        val.childNodes[3].style.opacity = 0;
    })
})

