export class Location {
    street: string;
    houseNumber: string;
    houseNumberAddition: string;
    postalCode: string;
    city: string;
    country: string;

    static fromObject(item: any): Location {
        const result = new Location();

        result.street = item.street;
        result.houseNumber = item.houseNumber;
        result.houseNumberAddition = item.houseNumberAddition;
        result.postalCode = item.postalCode;
        result.city = item.city;
        result.country = item.country;

        return result;
    }

    get fullAddress(): string {
        return [
            this.street,
            this.houseNumber,
            this.houseNumberAddition,
            this.postalCode,
            this.city,
            this.country
        ].join(' ');
    }
}