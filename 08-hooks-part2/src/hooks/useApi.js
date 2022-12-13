const baseUrl =
  'https://pixabay.com/api/?key=15313425-bc0f61e46a051ea2578b0fd6a&image_type=photo';

export const useApi = () => {
  // custom hook for working with api that return methods
  const getImages = async (query) => {
    return await fetch(`${baseUrl}&q=${query}`).then(
      (response) => response.json()
    );
  };
  return { getImages };
};
