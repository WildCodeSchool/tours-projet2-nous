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
    public networks: {
      name: string;
      link: string;
    },
    public medias: {
      url: string;
      order: number;
    },
    public profile: string,
  ) {}
}
