interface IClient {
  id?: string;
  name?: string;
  email: string;
  phone: string;
  street: string;
  streetnumber?: number;
  city: string;
  state: string;
  car: string;
  licenseplate: string;
}

export { IClient };
