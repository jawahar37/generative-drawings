export let bladeRunner = ["#503D51", "#896A75", "#D4967F", "#E0B6A0", "#DBCF95", "#A3D0B3", "#56B0C1", "#337DA4"];
export let rainbow5 = ["#ff595e","#ffca3a","#8ac926","#1982c4", "#6A4C93"];

export function pickRandom(palette) {
  return palette[Math.floor(Math.random() * palette.length)];
}

export function pickRepeat(palette, i) {
  return palette[i % palette.length];
}

export function shuffle(palette) {
  var m = palette.length, t, i;
  while (m > 0) {
    i = Math.floor(Math.random() * m--);
    t = palette[m];
    palette[m] = palette[i];
    palette[i] = t;
  }
}