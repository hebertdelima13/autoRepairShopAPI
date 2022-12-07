interface IService {
  id?: string;
  title: string;
  start: string;
  startHour: string;
  end: string;
  endHour: string;
  services: string;
  price: number;
  totalprice?: number;
  finished: boolean;
  paid: boolean;
}

export { IService };
