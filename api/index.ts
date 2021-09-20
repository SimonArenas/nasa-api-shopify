const API_TOKEN = "HRGY80iAn1ggfqT7oGOuu49stoGucBqGuCm1suR8";

export const getTodaysPhoto = async () => {
  try {
    const result = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_TOKEN}`
    );
    return result.json();
  } catch (e: any) {
    console.log(e.message);
    return null;
  }
};

export const getPhotoFromDate = async (date: string) => {
  try {
    const result = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_TOKEN}&date=${date}`
    );
    return result.json();
  } catch (e: any) {
    console.log(e.message);
    return null;
  }
};
