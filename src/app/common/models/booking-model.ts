export class booking {
    constructor(
        public date : {
            am : {
                start : Date,
                end : Date,
            },
            pm : {
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