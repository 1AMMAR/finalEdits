export class Video {
  id: number;
  link: string;
  name: string;

  constructor(video?:Video) {
    this.id = video && video.id || -1;
    this.link = video && video.link || '';
    this.name = video && video.name || '';
  }
}
