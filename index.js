const banner = () => {
  let loopNum = 0;
  let isDeleting = false;
  let text = "";
  let delta = 300 - Math.random() * 100;
  let index = 1;
  const toRotate = ["Legend", "Actor", "Dancer"];
  const period = 2000;
  let ticker;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    text = updatedText;
    document.querySelector(".tagline").textContent = text;

    if (isDeleting) {
      delta /= 2;
    }

    if (!isDeleting && updatedText === fullText) {
      isDeleting = true;
      index--;
      delta = period;
    } else if (isDeleting && updatedText === "") {
      isDeleting = false;
      loopNum++;
      index = 1;
      delta = 300;
    } else {
      index++;
    }

    ticker = setTimeout(tick, delta);
  };

  const startTicker = () => {
    if (ticker) {
      clearTimeout(ticker);
    }
    tick();
  };

  startTicker();
};

banner();
