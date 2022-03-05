export interface Book {
    _id: string;
    name: string;
    description: string;
    price: number;
    genre: string;
    author: string;
    addedOn: Date;
    rating: number;
    pictureUrl: string;
    pages: number;
    buyersCount: number;
}