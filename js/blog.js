
function loadBlog() {
    fetch('https://miselacoulus.pp-group.com.pl/blog.json', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }).then(response => response.json())
    .then((response)=>{
        console.log(response)
        var blogHolder = document.querySelector('.blog')
        for (var i = 0; i< response.length; i++) {
            blogHolder.innerHTML += `
            <div class="msg">
                <span>${response[i].title}</span><br>
                <span>${response[i].text}</span><br>
                <p>${response[i].date}</p>
            </div>`
        }
    })
}
loadBlog()