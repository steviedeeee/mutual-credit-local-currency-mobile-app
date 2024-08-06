export const login = async (account: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (account !== 'aa@bb.com') {
        reject('account not exist');
      }

      if (account === 'aa@bb.com' && password !== '123456789') {
        reject('password incorrect');
      }

      resolve({
        accountNumber: 'CTTE2748',
        name: 'Stephen DeMeulenaere',
        email: 'stephen_deMeulenaere@gmail.com',
        profilePicture: 'https://tcap.pbworks.com/f/1435170280/myAvatar.png',
      });
    }, 1000);
  });
};
