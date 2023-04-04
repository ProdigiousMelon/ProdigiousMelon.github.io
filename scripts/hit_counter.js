const countEl = document.getElementById("hit_count");

updateHitCounter();

function updateHitCounter(){
    fetch("https://api.countapi.xyz/update/prodigiousmelon.github.io/miru/?amount=1")
        .then(res => res.json())
        .then(res => {
            countEl.innerHTML = res.value;
        });
}