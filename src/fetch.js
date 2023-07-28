import axios from "axios";

const BASE_URL = 'https://pixabay.com/api';
export const imagesOnPage = 20;

export async function getImages(currentPage, userInfo) {
    return await axios.get(`${BASE_URL}/?&page=${currentPage}&q=${userInfo}`, {
        params: {
            key: '38442496-05931c79f09bcb64844571ca2',
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: imagesOnPage,
        }
    })
}