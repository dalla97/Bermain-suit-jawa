
function getpilihanKomputer() {
    const comp = Math.random();
    if (comp < 0.34) return 'gajah';
    if (comp < 034 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, pemain) {
    //menentukan rules
    if (pemain == comp) return 'SERI';
    // (?)=nilaiTrue (:)=NilaiFalse
    if (pemain == 'gajah') return (comp == 'orang') ? 'menang' : 'kalah';
    if (pemain == 'orang') return (comp == 'gajah') ? 'kalah' : 'menang';
    if (pemain == 'semut') return (comp == 'orang') ? 'kalah' : 'menang';
}

function putar() {
    const imgkomputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;
    const waktuMulai = new Date().getTime();

    //setInterval =fungsi u/melakukan sesuatu secara berulang-ulang selama batas waktu tertentu
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgkomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    }, 100)
}

// dengan cara looping foreach
const pilgam = document.querySelectorAll('li img');
pilgam.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const pilihanKomputer = getpilihanKomputer();
        const pilihanPemain = pil.className;
        const hasil = getHasil(pilihanKomputer, pilihanPemain);

        putar();

        setTimeout(function () {
            const imgComp = document.querySelector('.img-komputer');
            //lalu kita ganti attribut src nya = dom manipulation
            imgComp.setAttribute('src', 'img/' + pilihanKomputer + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000)

    });
});


//cara ke 2

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {
//     const pilihanKomputer = getpilihanKomputer();
//     const pilihanPemain = pGajah.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPemain);

//     const imgComp = document.querySelector('.img-komputer');
//     //lalu kita ganti attribut src nya = dom manipulation
//     imgComp.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function () {
//     const pilihanKomputer = getpilihanKomputer();
//     const pilihanPemain = pOrang.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPemain);

//     const imgComp = document.querySelector('.img-komputer');
//     //lalu kita ganti attribut src nya = dom manipulation
//     imgComp.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function () {
//     const pilihanKomputer = getpilihanKomputer();
//     const pilihanPemain = pSemut.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPemain);

//     const imgComp = document.querySelector('.img-komputer');
//     //lalu kita ganti attribut src nya = dom manipulation
//     imgComp.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });