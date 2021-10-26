const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    theme: '#FADFA3',
    audio: 
    [
      {
        name: "Hero-cash cash",
        artist: 'Tokyo Revenger',
        url: 'https://drive.google.com/uc?export=download&id=1xCJbom4L9CJ504MG9MliyPHFF3TmRKU3',
        cover: 'https://drive.google.com/uc?export=download&id=1iHAhGd3wpY1yXxBC0PHBPAEbrDDGBllI',
        lrc: "/js/music/lyrics/Hero - Cash Cash Tokyo Revengers {AMV}.lrc"
      },
      {
        name: '人聲-所念皆星河',
        artist: '房東的貓',
        url: 'https://drive.google.com/uc?export=download&id=1F44TepMAx9dyiY65KXHIBoMZWbRpRH3K',
        cover: 'https://drive.google.com/uc?export=download&id=1bEtsHmISmKQ_RiWawbHZLjFzmvb0jwkc', 
      },
      {
        name: "所念皆星河",
        artist: "純音樂",
        url: "https://drive.google.com/uc?export=download&id=1rAy5kIhbvrTDffuecSRWN5hYQ1-1YcTE",
        cover: "https://drive.google.com/uc?export=download&id=1rSXxEgmMKQltPnj4nScA1JTtTWIgDVaB",

      }
    ]
});