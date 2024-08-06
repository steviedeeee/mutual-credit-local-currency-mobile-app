export interface ITransactionItem {
  id: string;
  itemName: string;
  itemPoint: number;
  qty: number;
  totalPoint: number;
  itemExpiryDate: string;
}

export interface ITransaction {
  id: string;
  transactionType: 'SEND' | 'RECEIVE';
  customer: string;
  amount: number;
  levy: number;
  currentBalance: number;
  description?: string;
  createdAt: string;
}
