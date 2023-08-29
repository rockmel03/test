let card = document.querySelector('#card')
let userImg = document.querySelector('#top>img');
let centerLike = document.querySelector('#like');
let likeBtn = document.querySelector('#likeBtn');

let commentBtn = document.querySelector("#comment");
let commentbox = document.querySelector('#commentBox');
let closeCommentBoxBtn = document.querySelector('#closeCommentBox');


let followBtn = document.querySelector('#followBtn');
let likeStatus = 0;

function likekro() {
    if (likeStatus == 0) {
        likeBtn.setAttribute("class", "ri-heart-3-fill");
        likeBtn.style.color = 'red';
        centerLike.style.animation = "likePop .5s";

        likeStatus = 1;
    }
    else {
        likeBtn.setAttribute("class", "ri-heart-3-line");
        likeBtn.style.color = '#fff';
        centerLike.style.animation = 'none';

        likeStatus = 0;

    }
}
card.addEventListener('dblclick', (dets) => {
    if (dets.target === userImg) {
        likekro()
    }
})
likeBtn.addEventListener('click', () => likekro());

function commentShowHide() {
    if (commentbox.style.display != "none") {
        commentbox.style.display = "none"
        gsap.to(commentbox, {
            y: -50,
            delay: .5,
            duration: 0.5,
        })
    }
    else {
        commentbox.style.display = "block"
        gsap.to(commentbox, {
            y: -400,
            delay: .5,
            duration: .5,
        })
    }
}

commentBtn.addEventListener('click', () => commentShowHide())
closeCommentBoxBtn.addEventListener('click', () => commentShowHide())


let bookmark = document.querySelector('#bookmark');

bookmark.addEventListener('click', () => {
    if (bookmark.getAttribute('class') != 'ri-bookmark-fill') {
        bookmark.setAttribute('class', 'ri-bookmark-fill')
    }
    else {
        bookmark.setAttribute('class', 'ri-bookmark-line')

    }
})


followBtn.addEventListener('click', function () {
    if (followBtn.textContent != 'Following') {
        followBtn.textContent = 'Following'
        followBtn.style.backgroundColor = "grey";
    }
    else {
        followBtn.textContent = 'Follow';
        followBtn.style.backgroundColor = "cornflowerblue";
    }
})