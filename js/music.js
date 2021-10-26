const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    theme: '#FADFA3',
    audio: [
      {
        name: "Hero-cash cash",
        artist: 'Tokyo Revenger',
        url: 'https://drive.google.com/uc?export=download&id=1xCJbom4L9CJ504MG9MliyPHFF3TmRKU3',
        cover: 'https://drive.google.com/uc?export=download&id=1iHAhGd3wpY1yXxBC0PHBPAEbrDDGBllI',
        lrc: "/js/music/lyrics/Hero - Cash Cash Tokyo Revengers {AMV}.lrc"
      },
      {
        /*name: '',
        artist: '',
        url: '',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.', */
      }
    ]
});