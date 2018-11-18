const apiKey = 'AIzaSyCLAmbrmF9fPfKPqDlGvDXgnpFUZwB9BeQ';
const query = 'stilovdaily';
fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=15&q=${query}`)
  .then(response => response.json())
  .then((response) => {
    console.log(response.items);
    fetch(`https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${response.items.map(i => i.id.videoId).join(',')}&part=snippet,statistics`)
      .then(result => result.json())
      .then((list) => {
        console.log(list.items);
      });
  });
