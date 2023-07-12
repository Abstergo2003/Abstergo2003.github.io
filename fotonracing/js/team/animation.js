const opisy = [
    "Opis1 opis1 opis1 opis1 opis1 opis1 opis1 opis1 opis1 opis1 opis1 opis1 opis1 opis1 opis1 opis1 ",
    "opis2 opis2 opis2 opis2 opis2 opis2 opis2 opis2 opis2 opis2 opis2 opis2 opis2 opis2 opis2 opis2 ",
    "opis3 opis3 opis3 opis3 opis3 opis3 opis3 opis3 opis3 opis3 opis3 opis3 opis3 opis3 opis3 opis3 ",
    "opis4 opis4 opis4 opis4 opis4 opis4 opis4 opis4 opis4 opis4 opis4 opis4 opis4 opis4 opis4 opis4 ",
    "opis5 opis5 opis5 opis5 opis5 opis5 opis5 opis5 opis5 opis5 opis5 opis5 opis5 opis5 opis5 opis5 ",
    "opis6 opis6 opis6 opis6 opis6 opis6 opis6 opis6 opis6 opis6 opis6 opis6 opis6 opis6 "
]
document.addEventListener('mouseover', (e)=>{
    let id = e.target.id
    if (id == '' || id== 'opis2' || id=='opis') {
        document.getElementById('c1').classList.remove('disabled')
        document.getElementById('c1').classList.remove('active')

        document.getElementById('c2').classList.remove('disabled')
        document.getElementById('c2').classList.remove('active')

        document.getElementById('c3').classList.remove('disabled')
        document.getElementById('c3').classList.remove('active')

        document.getElementById('c4').classList.remove('disabled')
        document.getElementById('c4').classList.remove('active')

        document.getElementById('c5').classList.remove('disabled')
        document.getElementById('c5').classList.remove('active')

        document.getElementById('c6').classList.remove('disabled')
        document.getElementById('c6').classList.remove('active')
        return 0
    }
    document.getElementById('c1').classList.add('disabled')
    document.getElementById('c2').classList.add('disabled')
    document.getElementById('c3').classList.add('disabled')
    document.getElementById('c4').classList.add('disabled')
    document.getElementById('c5').classList.add('disabled')
    document.getElementById('c6').classList.add('disabled')

    document.getElementById('c' + id).classList.remove('disabled')
    document.getElementById('c' + id).classList.add('active')
    document.querySelector('#opis2').innerText = opisy[+id-1]
})
