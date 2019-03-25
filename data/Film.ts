import data from './film.json';

class Film {

    title: string;
    releasedate: string;
    studio: string;
    poster: string;
    location: string;
    rating: string;
    genre: Genre[];
    actors: Actor[];
    trailers: Trailer[];

    constructor(title: string, releasedate: string, studio: string, poster: string, location: string,
                rating: string, genre: Genre[], actors: Actor[], trailers: Trailer[]) {
        this.title = title;
        this.releasedate = releasedate;
        this.studio = studio;
        this.poster = poster;
        this.location = location;
        this.rating = rating;
        this.genre = genre;
        this.actors = actors;
        this.trailers = trailers;

    }

}

class Actor {

    firstName: string;
    lastName: string;


    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Genre {

    cat: string;

    constructor(cat: string) {
        this.cat = cat;
    }

}

class Trailer {

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

function getFilm() {
    return data.map((item: any) => new Film(
        item.title,
        item.releasedate,
        item.studio,
        item.poster,
        item.location,
        item.rating,
        item.genre.map((item: any) => new Genre(item.cat)),
        item.actors.map((item: any) => new Actor(item.firstName, item.lastName)),
        item.trailers.map((item: any) => new Trailer(item.postdate, item.url, item.type, item.exclusive, item.hd))
    ));
}

