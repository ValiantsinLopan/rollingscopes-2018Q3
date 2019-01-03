export default class ResultItem {
  constructor(data) {
    this.data = data;
    this.innerHtml = `<div class="card">
                          <a href="https://www.youtube.com/watch?v=${this.data.id}" target="_blank">
                              <img src="${this.data.snippet.thumbnails.high.url}" class="thumbnail">
                              <p class="title">${this.data.snippet.localized.title}</p>
                          </a>
                          <div class="info">
                              <a href="https://www.youtube.com/channel/${this.data.snippet.channelId}" target="_blank">
                                  <span class="channel"><i class="fas fa-tv"></i>${this.data.snippet.channelTitle}</span>
                              </a>
                              <span class="wiews"><i class="far fa-eye"></i>${this.data.statistics.viewCount}</span>
                              <span class="published"><i class="far fa-calendar-alt"></i>${new Date(this.data.snippet.publishedAt).toLocaleDateString()}</span>
                              <span class="discription">${this.data.snippet.description}</span>
                          </div>
                      </div>`;
    const items = document.getElementById('items');
    items.insertAdjacentHTML('beforeend', this.innerHtml);
  }
}
