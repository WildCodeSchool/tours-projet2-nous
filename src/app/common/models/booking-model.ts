export class Booking {
    constructor(
        public date : {
            date : {
                start : Date,
                end : Date,
            }
        },
        public owner : {
            name : string,
            adress : {
                street: String,
                zipCode: String,
                city: String,
                number: Number,
            },
            contact: {
                phone: String,
                email: String,
            }
        },
        public numbers: Number,
        public establishment: String,
        ){}
    }