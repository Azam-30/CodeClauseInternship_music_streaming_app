(function () {
  const ap = new APlayer({
    container: document.getElementById("aplayer"),
    listFolded: true,
    audio: [
      {
        name: "Mind",
        artist: "D3ZAI",
        url: "./assets/audio/Make.wav",
        cover: "./assets/img/mind.jpg"
      },
      {
        name: "Dakiti (D3ZAI Remix)",
        artist: "Bad Bunny & Jhay Cortez",
        url: "./assets/audio/Night.wav",
        cover: "./assets/img/dakiti.jpg"
      },
      {
        name: "Aurora (D3ZAI Remix)",
        artist: "K-391 & RØRY",
        url: "./assets/audio/Make.wav",
        cover: "./assets/img/aurora.jpg",
      },
      {
        name: "Namo-Namo",
        artist: "Amit Trivedi",
        url: "./assets/audio/namo.wav",
        cover: "./assets/img/Kedarnath.jpg",
      },
      {
        name: "Kalle-Kalle",
        artist: "Priya Saraiya, Sachin Jigar",
        url: "./assets/audio/Kalle.wav",
        cover: "./assets/img/Chandigarh-Kare-Aashiqui.jpg",
      },
      {
        name: "ARAMBH-HAI",
        artist: "Piyush Mishra",
        url: "./assets/audio/gulaal.wav",
        cover: "./assets/img/ARAMBH-HAI-PRACHAND.jpg",
      },
      {
        name: "Make-you-mine",
        artist: " PUBLIC, Danielle Bradbery",
        url: "./assets/audio/Make.wav",
        cover: "./assets/img/Make-You-Mine.jpg",
      },
      {
        name: "Saiyaan",
        artist: " Kailash Kher",
        url: "./assets/audio/Saiyyan.wav",
        cover: "./assets/img/Saiyyan-Lofi-Flip.jpg",
      },
      {
        name: "Mere Yarra",
        artist: "Arjit Singh",
        url: "./assets/audio/Mera.wav",
        cover: "./assets/img/Sooryavanshi.jpg",
      },
      {
        name: "Night Changes",
        artist: "One Direction",
        url: "./assets/audio/Night.wav",
        cover: "./assets/img/FOUR.jpg",
      },
     
    ],
  });
  
  
  $(".album-poster").on("click", function (_) {
    const dataSwitchId = $(this).attr("data-switch");
  
    ap.list.switch(dataSwitchId);
    ap.play();
  
    $("#aplayer").addClass("showPlayer");
  });
}).call(this);
