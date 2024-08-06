import {ITransaction} from '../interfaces/api/transaction';

export const callListTransactions = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const datas: ITransaction[] = [
        {
          id: 'b8d8db7e-f1a9-40a1-bfe1-ca6827df9b6f',
          transactionType: 'SEND',
          amount: 200000,
          customer: 'Tim Jenkin',
          levy: 1.6,
          currentBalance: 99800000,
          createdAt: '2020-07-23',
          description:
            'This is what the transaction was recorded as being for..',
        },
        {
          id: '41cc169c-03f6-49a6-9727-4f38e67992a3',
          transactionType: 'RECEIVE',
          amount: 3000000,
          customer: 'Tim Jenkin',
          levy: 1.6,
          currentBalance: 102800000,
          createdAt: '2020-07-23',
          description:
            'This is what the transaction was recorded as being for..',
        },
        {
          id: '69d9c818-ab99-45ff-b6b7-81668a19f86e',
          transactionType: 'SEND',
          amount: 200000,
          customer: 'Tim Jenkin',
          levy: 1.6,
          currentBalance: 99800000,
          createdAt: '2020-07-23',
          description:
            'This is what the transaction was recorded as being for..',
        },
        {
          id: 'acb6a7c1-422e-45b4-a90c-ba78ec27c3e8',
          transactionType: 'RECEIVE',
          amount: 200000,
          customer: 'Tim Jenkin',
          levy: 1.6,
          currentBalance: 99800000,
          createdAt: '2020-07-23',
          description:
            'This is what the transaction was recorded as being for..',
        },
        {
          id: 'ba2d2f73-9f3c-477a-8467-f4cbdb83d6f5',
          transactionType: 'SEND',
          amount: 3000000,
          customer: 'Tim Jenkin',
          levy: 1.6,
          currentBalance: 102800000,
          createdAt: '2020-07-23',
          description:
            'This is what the transaction was recorded as being for..',
        },
        {
          id: 'eb72e2d0-4d96-49b1-9f94-08c80108485a',
          transactionType: 'SEND',
          amount: 200000,
          customer: 'Tim Jenkin',
          levy: 1.6,
          currentBalance: 99800000,
          createdAt: '2020-07-23',
          description:
            'This is what the transaction was recorded as being for..',
        },
        {
          id: '4fbec88f-986e-4f81-a449-1262c93cfdb4',
          transactionType: 'RECEIVE',
          amount: 3000000,
          customer: 'Tim Jenkin',
          levy: 1.6,
          currentBalance: 102800000,
          createdAt: '2020-07-23',
          description:
            'This is what the transaction was recorded as being for..',
        },
        {
          id: 'c9e3bfdc-68f4-490d-a6cf-d5429809d843',
          transactionType: 'SEND',
          amount: 200000,
          customer: 'Tim Jenkin',
          levy: 1.6,
          currentBalance: 99800000,
          createdAt: '2020-07-23',
          description:
            'This is what the transaction was recorded as being for..',
        },
        {
          id: '9208c851-899e-4db6-b71b-e2c79a83fefc',
          transactionType: 'RECEIVE',
          amount: 200000,
          customer: 'Tim Jenkin',
          levy: 1.6,
          currentBalance: 99800000,
          createdAt: '2020-07-23',
          description:
            'This is what the transaction was recorded as being for..',
        },
        {
          id: '56f96a47-73a7-4d60-9906-3a719e33709d',
          transactionType: 'SEND',
          amount: 3000000,
          customer: 'Tim Jenkin',
          levy: 1.6,
          currentBalance: 102800000,
          createdAt: '2020-07-23',
          description:
            'This is what the transaction was recorded as being for..',
        },
        {
          id: '8dcd175f-61b2-4070-9870-3fdb7ae32fc3',
          transactionType: 'SEND',
          amount: 200000,
          customer: 'Tim Jenkin',
          levy: 1.6,
          currentBalance: 99800000,
          createdAt: '2020-07-23',
          description:
            'This is what the transaction was recorded as being for..',
        },
        {
          id: '1f2f2727-6b99-4759-84df-fe8845454f5c',
          transactionType: 'RECEIVE',
          amount: 3000000,
          customer: 'Tim Jenkin',
          levy: 1.6,
          currentBalance: 102800000,
          createdAt: '2020-07-23',
          description:
            'This is what the transaction was recorded as being for..',
        },
        {
          id: '8e928c4b-afa8-4689-ac51-2cc63985e485',
          transactionType: 'SEND',
          amount: 200000,
          customer: 'Tim Jenkin',
          levy: 1.6,
          currentBalance: 99800000,
          createdAt: '2020-07-23',
          description:
            'This is what the transaction was recorded as being for..',
        },
        {
          id: '7892f6c5-01e8-45b4-a1ba-abe6ba787c38',
          transactionType: 'RECEIVE',
          amount: 200000,
          customer: 'Tim Jenkin',
          levy: 1.6,
          currentBalance: 99800000,
          createdAt: '2020-07-23',
          description:
            'This is what the transaction was recorded as being for..',
        },
        {
          id: 'ccdb159d-b57a-4724-aa65-d44227b36b17',
          transactionType: 'SEND',
          amount: 3000000,
          customer: 'Tim Jenkin',
          levy: 1.6,
          currentBalance: 102800000,
          createdAt: '2020-07-23',
          description:
            'This is what the transaction was recorded as being for..',
        },
      ];

      resolve(datas);
    }, 1000);
  });
};
