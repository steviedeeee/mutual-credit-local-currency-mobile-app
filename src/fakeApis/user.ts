import {IUser} from '../interfaces/api/user';

export const callListUsers = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const datas: IUser[] = [
        {
          id: '7ddc4c74-f5a6-4ddd-8efd-7176972c2e81',
          name: 'Alex Sylvester',
        },
        {
          id: '1444f108-6f0b-4f80-b024-b4e4d1f24734',
          name: 'Inna Alex',
        },
        {
          id: '53a19767-7933-4335-9389-4a43fd977500',
          name: 'Andria Alex',
        },
        {
          id: 'f9ffe8e8-ffd6-464d-a71b-8e9158569d0e',
          name: 'Toni Alexander',
        },
        {
          id: 'f2deb865-46ba-4e84-b94c-614e50e81f3c',
          name: 'Jamiel Alexander',
        },
      ];

      resolve(datas);
    }, 1000);
  });
};
