export let bladeRunner = ["#503D51", "#896A75", "#D4967F", "#E0B6A0", "#DBCF95", "#A3D0B3", "#56B0C1", "#337DA4"];

export let rainbow5 = ["#ff595e","#ffca3a","#8ac926","#1982c4", "#6A4C93"];

export let punchDrunkBlueOrange = ["#1a2256", "#1d189e", "#610f73", "#771047", "#741225", "#be3902", "#a95800", "#df7100", "#433c16", "#282714"];

export let farewell = ["#07060d", "#11273f", "#204868", "#859ed5", "#6d5e6a", "#56383b", "#cf0223", "#ff6680", "#04d598", "#e9c374"];

export let nightCrawler = ["#1e1916", "#16263d", "#398caa", "#7dd1d5", "#b9f4ee", "#4db35f", "#94d603", "#f4a202", "#ec0006", "#5f4523"];

export let paleYellowPink = ["#f6bd60","#f7ede2","#84a59d","#f5cac3","#f28482","#ea4856"]

export let grace = ["#fff", "#aaa", "#777", "#ddd", "#999"];

export function pickRandom(palette) {
  return palette[randomInt(palette.length)];
}

export function pickRepeat(palette, i) {
  return palette[i % palette.length];
}

export function shuffle(palette) {
  let copy = [...palette];
  let i = palette.length;
  let t, r;
  while (i > 0) {
    r = randomInt(i--);
    t = copy[i];
    copy[i] = copy[r];
    copy[r] = t;
  }
  return copy;
}

export function evenlySpacedSubset(palette, n, gap, offset) {
  if(offset === undefined)
    offset = randomInt(palette.length);

  let subset = [];
  while(n--) {
    subset.push(pickRepeat(palette, offset));
    offset += gap;
  }

  return subset;
}

function randomInt(n) {
  return Math.floor(Math.random() * n);
}