const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
};
async function slider(index) {
    await delay(5000);
    let selector = index - 1
    let cards = document.querySelectorAll(".card");
    if (index == cards.length) {
        index = 0;
        selector = 2;
    }
    console.log(index);
    console.log(selector);
    zIndex = cards[selector].style.zIndex;
    cards[index].style.zIndex = parseInt(zIndex)+1;
    slider(index+1)
}
slider(1)