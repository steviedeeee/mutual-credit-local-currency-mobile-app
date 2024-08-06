export interface IExchange {
  id: string;
  type: 'OFFER' | 'WANT';
  image: any;
  title: string;
  description?: string;
  createdAt: string;
}
