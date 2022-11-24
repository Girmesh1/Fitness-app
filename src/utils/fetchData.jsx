export const exerciseOption =  {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': 'd7eae3a30bmsh89312bd91e300bep158a79jsne3d4769556ad',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};



export const fetchData = async (url, options) => {
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}