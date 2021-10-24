const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    theme: '#FADFA3',
    audio: [
      {
        name: "Hero-cash cash",
        artist: 'Tokyo Revenger',
        url: 'https://whyp.it/t/hero-cash-cash-tokyo-revengers-amv-YRQBX',
        cover: 'https://p3.music.126.net/AAq1qOhfyrClGK1mg3mGYQ==/18776360067593424.jpg',
      },
      {
        name: '风筝误',
        artist: '刘珂矣',
        url: 'https://www.youtube.com/watch?v=NrEozdiPOt0',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});