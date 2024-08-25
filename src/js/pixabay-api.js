import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchPhotos = async (searchedQuery, page) => {
    try {
        const axiosOptions = {
            params: {
                key: '45436198-db4764fd7ddf19e0d061d1cf8',
                q: searchedQuery,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: 'true',
                page: page,
                per_page: 15,
            }
        };
        return await axios.get('/', axiosOptions);
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
};
