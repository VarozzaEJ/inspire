export class Image {
  constructor(data) {
    this.url = data.url;
    this.imgUrl = data.imgUrl;
    this.query = data.query;
    this.author = data.author;
    this.largeImgUrl = data.largeImgUrl;
    this.created = data.createdAt;
  }

  get backgroundImageHTMLTemplate() {
    return `
              <img src="${this.largeImgUrl}" alt="${this.query}" class="bg-img z-n1">
        `;
  }
}

// url: String,
// imgUrl: String,
// query: String,
// author: String,
// largeImgUrl: String,
// *createdAt: ISO Timestamp (Virtual Added by Database)
// *updatedAt: ISO Timestamp (Virtual Added by Database)
