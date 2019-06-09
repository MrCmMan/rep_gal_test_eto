import axios from 'axios';
export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const SECOND_SCREAN = 'SECOND_SCREAN';
const API_KEY = '49c975e1f6fa276e35362b2fb4640f44'; 
const text ='cat'
const urlEndpoint = 'https://api.flickr.com/services/rest/? method=flickr.photos.search&api_key='+API_KEY+'&format=json&text='+text+'&nojsoncallback=true&per_page=100&extras=url_s';

//Экшен для получения JSON с ссылками на изображения
//Выплненно с помощбю библиотеки axios
export function getData(){
   var img: []
    return (dispatch) => {
        axios.get(urlEndpoint)
            .then((response) => { 
            img =response.data.photos.photo
                                 
                            }).catch((error) => { console.log(error)
                                                })
        setTimeout(() => {
            dispatch({type: DATA_AVAILABLE, data:img});
        }, 2000);
 
    };
   
}
