export class Establishment {
  constructor(
    public name: string,
    public type: string,
    public address: {
      street: string;
      zipCode: string;
      city: string;
      number: string;
    },
    public description: string,
    public contact: {
      phone: number;
      email: string;
      site: string;
    },
    public time: {
      open: {
        monday: {
          am: {
            start: Date;
            end: Date;
          };
          pm: {
            start: Date;
            end: Date;
          };
        };
        tuesday: {
          am: {
            start: Date;
            end: Date;
          };
          pm: {
            start: Date;
            end: Date;
          };
        };
        wednesday: {
          am: {
            start: Date;
            end: Date;
          };
          pm: {
            start: Date;
            end: Date;
          };
        };
        thursday: {
          am: {
            start: Date;
            end: Date;
          };
          pm: {
            start: Date;
            end: Date;
          };
        };
        friday: {
          am: {
            start: Date;
            end: Date;
          };
          pm: {
            start: Date;
            end: Date;
          };
        };
        saturday: {
          am: {
            start: Date;
            end: Date;
          };
          pm: {
            start: Date;
            end: Date;
          };
        };
        sunday: {
          am: {
            start: Date;
            end: Date;
          };
          pm: {
            start: Date;
            end: Date;
          };
        };
      };
      closed: {
        start: Date;
        end: Date;
      };
    },
    public networks: {
      name: string;
      link: string;
    },
    public medias: {
      url: string;
      order: number;
    },
    public comments: [
      {
        author: string;
        date: Date;
        comment: string;
      }
    ],
    public menus: [
      {
        name: string;
        price: number;
      }
    ],
    public profile: string,
  ) {}
}
