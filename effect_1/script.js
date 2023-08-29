let followBtn = document.querySelector("#followBtn");


followBtn.addEventListener('click', () => {
    if (followBtn.textContent != "Following") {
        followBtn.textContent = "Following";
        followBtn.style.backgroundColor = "grey";
    }
    else {
        followBtn.textContent = "Follow";
        followBtn.style.backgroundColor = "cornflowerblue";

    }
})