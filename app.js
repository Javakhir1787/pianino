function kuyla(val) {
  document.querySelector(`.${val}`).classList.add("pressed");
  setTimeout(function () {
    document.querySelector(`.${val}`).classList.remove("pressed");
  }, 100);
  switch (val) {
    case "q":
      let q = new Audio("musics/Q.mp3");
      q.play();
      break;
    case "w":
      let w = new Audio("musics/W.mp3");
      w.play();
      break;
    case "e":
      let e = new Audio("musics/E.mp3");
      e.play();
      break;
    case "r":
      let r = new Audio("musics/R.mp3");
      r.play();
      break;
    case "t":
      let t = new Audio("musics/T.mp3");
      t.play();
      break;
    case "y":
      let y = new Audio("musics/Y.mp3");
      y.play();
      break;
    case "u":
      let u = new Audio("musics/U.mp3");
      u.play();
      break;
    case "i":
      let i = new Audio("musics/I.mp3");
      i.play();
      break;
    case "o":
      let o = new Audio("musics/O.mp3");
      o.play();
      break;
    case "p":
      let p = new Audio("musics/P.mp3");
      p.play();
  }
}

document.addEventListener("keydown", function (e) {
  let harf = e.key.toLowerCase();
  let notalar = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  if (notalar.includes(harf)) {
    kuyla(harf);
  }
});
