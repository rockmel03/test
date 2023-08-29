let images = [
    {
        dp: "https://images.unsplash.com/photo-1580483046931-aaba29b81601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        story: "https://images.unsplash.com/photo-1580483046931-aaba29b81601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
        dp: "https://images.unsplash.com/photo-1575299899528-a8a3dbcefc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
        story: "https://images.unsplash.com/photo-1575299899528-a8a3dbcefc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
    },
    {
        dp: "https://images.unsplash.com/photo-1634715281818-ce65b4dbc99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        story: "https://images.unsplash.com/photo-1634715281818-ce65b4dbc99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    },
    {
        dp: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80",
        story: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80"
    },
    {
        dp: "https://images.unsplash.com/photo-1618387395977-a87bc6ba38dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1585&q=80",
        story: "https://images.unsplash.com/photo-1618387395977-a87bc6ba38dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1585&q=80"
    },
    {
        dp: "https://images.unsplash.com/photo-1568622173257-3aeade1d0a1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJ1c3NpYW4lMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
        story: "https://images.unsplash.com/photo-1568622173257-3aeade1d0a1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJ1c3NpYW4lMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
    },

];
let storyBar = document.querySelector("#storybar")
let fullScreen = document.querySelector('#fullscreen');

images.forEach((val, index) => {
    storyBar.innerHTML += `<div class="stories"><img id='${index}'src="${val.dp}}" alt=""></div>`
})

storyBar.addEventListener('click', (dets) => {
    fullScreen.style.display = 'block';
    fullScreen.innerHTML = `<img src="${images[dets.target.id].story}" alt"something went wrong"/> `
    setTimeout(() => {
        fullScreen.style.display = 'none';
    }, 2000);
})

