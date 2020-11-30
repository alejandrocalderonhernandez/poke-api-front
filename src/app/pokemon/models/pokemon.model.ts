export class Pokemon {
    id: number
    name: string;
    height: number;
    weight: number;
    image: string;
    type: string

    constructor (id: number,
                 name: string,
                 height: number,
                 weight: number,
                 type: string,
                 image: string) {
        this.id = id;
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.type = type
        this.image = image;
    }
}