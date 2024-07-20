export const fetchData = async (inputElementValue) => {
  const url = `https://itunes.apple.com/search?term=${inputElementValue}&media=music`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const returnData = data.results.map((result) => {
      return {
        artist: result.artistName,
        song: result.trackName,
      };
    });

    return returnData;
  } catch (error) {
    console.log(error);
    return [];
  }
};
