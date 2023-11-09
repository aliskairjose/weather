import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const baseURL = import.meta.env.VITE_API_URL;

const instance = axios.create({
  baseURL,
  params: {
    key: apiKey,
    q: "",
    alerts: "no",
    aqi: "no", // Get air quality data
  },
});


/**
 *
 * @param {string} q Location name, e.g: { q: Caracas }
 * @returns
 */
export const currentWeather = async ({ q = "" }) => {
  return instance
    .get(`current.json`, { params:{ q } })
    .then((res) => res.data)
    .catch(console.error);
};

export const forecastWeather = async ({ q = "", days = 7 }) => {
  return instance
    .get(`forecast.json`, { params: { q, days } })
    .then((res) => res.data)
    .catch(console.error);
};

export const searchWeather = async (q = "") => {
  return instance
    .get(`search.json`, { params: { q } })
    .then((res) => res.data)
    .catch(console.error);
};

/**
 *
 * @param {string} q Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name. Visit request parameter section to learn more.
 * @param {string} dt Date between 14 days and 300 days from today in the future in yyyy-MM-dd format
 * @returns
 */
export const astronomy = async ({ q = "", dt = "" }) => {
  return instance
    .get(`astronomy.json`, { params: { q, dt } })
    .then((res) => res.data)
    .catch(console.error);
};

/**
 *
 * @param {string} q Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name. Visit request parameter section to learn more.
 * @param {string} dt Date between 14 days and 300 days from today in the future in yyyy-MM-dd format
 * @returns
 */
export const futureWeather = async ({ q = "", dt = "" }) => {
  return axios
    .get(`${baseURL}future.json`, { params: { key: apiKey, q, dt } })
    .then((res) => res.data)
    .catch(console.error);
};

/**
 *
 * @param {string} q Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name. Visit request parameter section to learn more.
 * @param {string} dt Date between 14 days and 300 days from today in the future in yyyy-MM-dd format
 * @returns
 */
export const historyWeather = async ({ q = "", dt = "" }) => {
  return instance
    .get(`history.json`, { params: { q, dt } })
    .then((res) => res.data)
    .catch(console.error);
};
