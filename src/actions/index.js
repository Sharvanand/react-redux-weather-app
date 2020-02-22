import weatherAPI from "../apis/weatherAPI";

export const fetchWeather = cityName => async dispatch => {
  const API_KEY = "240ef553958220e0d857212bc790cd14";

  const response = await weatherAPI.get(
    `/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
  );
  dispatch({
    type: "FETCH_WEATHERLIST",
    payload: response.data.main
  });
};
// export function fetchWeather(city) {
//   const API_KEY = "240ef553958220e0d857212bc790cd14";
//   return dispatch => {
//     return axios
//       .get(
//         `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
//       )
//       .then(res => {
//         dispatch(changeWeather(res.data));
//       })
//       .catch(error => {
//         return error;
//       });
//   };
// }

// export function changeWeather(weatherdata) {
//   return {
//     type: "WEATHER_DATA",
//     weatherdata
//   };
// }
