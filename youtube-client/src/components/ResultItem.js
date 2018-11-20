export default class ResultItem {
  render(data) {
    this.data = data;
    this.innerHtml = `<div class="card">
                          <a href="https://www.youtube.com/watch?v=${this.data.id}" target="_blank">
                              <img src="${this.data.snippet.thumbnails.standard.url}" class="thumbnail">
                              <p class="title">${this.data.snippet.localized.title}</p>
                          </a>
                          <div class="info">
                              <span class="channel"><i class="fas fa-tv"></i>${this.data.snippet.channelTitle}</span>
                              <span class="wiews"><i class="far fa-eye"></i>${this.data.statistics.viewCount}</span>
                              <span class="published"><i class="far fa-calendar-alt"></i>${this.data.snippet.publishedAt}</span>
                              <p class="discription">${this.data.snippet.description}</p>
                          </div>
                      </div>`;
    const items = document.getElementById('items');
    items.insertAdjacentHTML('beforeend', this.innerHtml);
  }
}
