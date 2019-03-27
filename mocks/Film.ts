import data from '../data/film.json';

export class Film {

    title: string;
    releasedate: string;
    studio: string;
    poster: string;
    location: string;
    rating: string;
    genre: string[];
    directors: string;
    actors: string[];
    trailers: Trailer[];

    constructor(title: string, releasedate: string, studio: string, poster: string, location: string,
                rating: string, genre: string[],   directors: string, actors: string[], trailers: Trailer[]) {
        this.title = title;
        this.releasedate = releasedate;
        this.studio = studio;
        this.poster = poster;
        this.location = location;
        this.rating = rating;
        this.genre = genre;
        this.directors= directors;
        this.actors = actors;
        this.trailers = trailers;

    }

}

export class Trailer {

    postdate: string;
    url: string;
    type: string;
    exclusive: boolean;
    hd: boolean;

    constructor(postdate: string, url: string, type: string, exclusive: boolean, hd: boolean) {

        this.postdate = postdate;
        this.url = url;
        this.type = type;
        this.exclusive = exclusive;
        this.hd = hd;
    }


}


export function getFilm() {
    return data.map((item: any) => new Film(
        item.title,
        item.releasedate,
        item.studio,
        item.poster,
        item.location,
        item.rating,
        item.genre,
        item.directors,
        item.actors,
        item.trailers.map((item: any) => new Trailer(item.postdate, item.url, item.type, item.exclusive, item.hd))
    ));
}

console.log("File JSon = " + data);
console.log(getFilm);



