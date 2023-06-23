// export const server = "https://websitebangiay-2958-apii.vercel.app/api/v2";
// export const backend_url = "https://websitebangiay-2958-apii.vercel.app/";


// export const server = "http://localhost:8000/api/v2";
// export const backend_url = "http://localhost:8000/";


import { BASE_API_URL } from "./config/configuration";

console.log("BASE_API_URL: ", BASE_API_URL)
export const server = `${BASE_API_URL}/api/v2`;
export const backend_url = `${BASE_API_URL}/`;