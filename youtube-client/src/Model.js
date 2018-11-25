export default class Model {
  constructor() {
    this.query = '';
    this.nextPageToken = '';
    this.results = [];
  }

  getResults(searchQuery, callback) {
    if (searchQuery !== this.query) {
      this.nextPageToken = '';
      this.query = searchQuery;
    }
    const baseUrl = 'https://www.googleapis.com/youtube/v3/';
    const apiKey = 'AIzaSyCLAmbrmF9fPfKPqDlGvDXgnpFUZwB9BeQ';
    const resultrsPerRequest = 15;
    fetch(`${baseUrl}search?key=${apiKey}&type=video&part=snippet&maxResults=${resultrsPerRequest}&q=${this.query}&pageToken=${this.nextPageToken}`)
      .then(response => response.json())
      .then((response) => {
        console.log(response);
        this.nextPageToken = response.nextPageToken;
        fetch(`${baseUrl}videos?key=${apiKey}&id=${response.items.map(i => i.id.videoId).join(',')}&part=snippet,statistics`)
          .then(result => result.json())
          .then((data) => {
            this.results.push(data.items);
            callback(data);
          })
          .catch(err => console.error(err));
      });
  }
}
