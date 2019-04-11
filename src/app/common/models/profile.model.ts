export class Profile{
    constructor(
        public firstName: string,
        public lastName: string,
        public siret: string,
        public siren: string,
        public key: string,
        public address: {
            street: string,
            zipCode: string,
            city: string,
            number: string,
        },
        public conctat: {
            fax: string,
            phone: string,
            email: string,
        }
    ){}
}