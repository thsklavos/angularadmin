export class Photo {
    albumId: string;
    id: string;
    url: string;
    title: string;
    thumbnailUrl: string;
}

export class Product {
    name: string;
    price: string;
    photo: Photo;
    photos: Array<Photo>;
    constructor() {
        this.photos = new Array<Photo>();
    }
}

export class Catetory2 {
    id: string;
    title: string;
}

export class Post {
    id: string;
    userId: number;
    body: string;
    title: string;
}