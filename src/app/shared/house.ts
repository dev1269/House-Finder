export class House {
    params: { rooms: number; value: number; };
    coords: { lat: number; lon: number };
    street: string;
    distance: number;

    constructor(data: any) {
        Object.assign(this, data);
    }
}