export const length = 5;
export interface Result {
    results: Person[];
    info: Info;
}

export interface Info {
    seed: string;
    results: number;
    page: number;
    version: string;
}

export interface Person {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: string;
    registered: string;
    phone: string;
    cell: string;
    id: Id;
    picture: Picture;
    nat: string;
}

export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface Id {
    name: string;
    value: string;
}

export interface Login {
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export interface Location {
    street: string;
    city: string;
    state: string;
    postcode: number;
}

export interface Name {
    title: string;
    first: string;
    last: string;
}
