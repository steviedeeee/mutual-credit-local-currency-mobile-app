import {IExchange} from '../interfaces/api/exchange';

export const callListExchanges = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const datas: IExchange[] = [
        {
          id: '8c5750f2-25d9-4827-9f72-24125e420d90',
          type: 'OFFER',
          title:
            "Todd Falcone's Little Black Book of Scripts, and setting Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          image: require('../assets/images/sample-offer-1.jpg'),
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          createdAt: '2020-07-23',
        },
        {
          id: 'a3700d2c-de9b-41c2-bd4f-bb8917eee3de',
          type: 'WANT',
          title:
            'Looking for someone who can repair a computer and Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: require('../assets/images/sample-offer-2.jpeg'),
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          createdAt: '2020-07-23',
        },
      ];

      resolve(datas);
    }, 1000);
  });
};
