const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0;

const botSay = (data) => {
  return [
    "Halo, aku bot. siapa nama kamu",
    `Halo ${data?.nama}, berapa usia kamu?`,
    `Oh ${data?.usia}, hobi kamu apa?`,
    `Ih sama dong aku juga hobinya ${data?.hobi}, jenis kelamin kamu apa?`,
    `Oh ${data?.gender}, yaudah kalau begitu. Udahan yah?`,
  ];
};

pertanyaan.innerHTML = botSay()[0];

let usersData = [];

function botStart() {
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ gender: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
  }, [1000]);
  usersData.push(jawaban.value);
  jawaban.value = "";
}

function finishing() {
  pertanyaan.innerHTML = `Terima kasih ${usersData[0]} telah mengunjungi saya.`;
  jawaban.value = "Oke terima kasih juga";
}

function botEnd() {
  window.location.reload();
}
