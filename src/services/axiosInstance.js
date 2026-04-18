import axios from "axios";

const axiosinstance = axios.create({
  baseURL: 'https://dummyjson.com/'
});

export {
    axiosinstance
}