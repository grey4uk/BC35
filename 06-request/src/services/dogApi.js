import axios from 'axios';

const instanceDogAxios = axios.create({
  baseURL: 'https://dog.ceo/api/breeds/image/random/5',
});

export const getDogs = async () => {
  try {
    const {
      data: { message },
    } = await instanceDogAxios.get('');
    console.log('success');
    return message;
  } catch (error) {
    throw new Error(error);
  }
};
