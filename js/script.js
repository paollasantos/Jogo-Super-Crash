$(document).ready(function () {
  //your code here

  const crash = document.querySelector(".crash");
  const nitro = document.querySelector(".nitro");
  const maca = document.querySelector(".maca");
  const maca1 = document.querySelector(".maca1");
  const maca2 = document.querySelector(".maca2");
  var recorde = $("#recorde").text();
  var pontuacaoMaca = parseInt(0);//$("#pontuacaoMaca").text();
  var tempoInicial = $("#pontuacao").text();
  var cronoMetroId = null;

 
  cronoMetroId = setInterval(function () {
    $("#pontuacao").text(tempoInicial);
    tempoInicial++;
  }, 100);

  const jump = () => {
    crash.classList.add("jump");

    setTimeout(() => {
      crash.classList.remove("jump");
    }, 500);
  };

  const loop = setInterval(() => {

    const nitroPosition = nitro.offsetLeft;
    const macaPosition = maca.offsetLeft;
    const macaPosition1 = maca1.offsetLeft;
    const macaPosition2 = maca2.offsetLeft;

    const crashPosition = +window
      .getComputedStyle(crash)
      .bottom.replace("px", "");

    if (macaPosition <= 120 && macaPosition > 0 && crashPosition < 80 
       || macaPosition1 <= 120 && macaPosition1 > 0 && crashPosition < 80 
       || macaPosition2 <= 120 && macaPosition2 > 0 && crashPosition < 80) 
    {
      parseInt(pontuacaoMaca += 1)
      $("#pontuacaoMaca").text(parseInt(pontuacaoMaca / 97));

    }
    
    if (nitroPosition <= 120 && nitroPosition > 0 && crashPosition < 80) {
      nitro.style.animation = "none";
      nitro.style.left = `${nitroPosition}px`;

      crash.style.animation = "none";
      crash.style.bottom = `${crashPosition}px`;

      crash.src = "./images/game-over1.png";
      crash.style.width = "350px";
      crash.style.marginLeft = "480px";

      if (recorde == 0) {
        var pontuacaoMorte = $("#pontuacao").text();
        $("#recorde").text(pontuacaoMorte);
      }
      clearInterval(cronoMetroId);
      clearInterval(loop);
      $(".retry").attr("disabled", false);
    }

  }, 10);

  
  document.addEventListener("keydown", jump);
});
