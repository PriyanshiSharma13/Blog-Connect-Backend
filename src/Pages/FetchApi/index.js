import axios from 'axios';

const url = "https://blog-backend-priyanshi.herokuapp.com/api/fetchData";

const storeBox = async() => {
    try{
        const res = await axios.get(url);
        return res.data;

    } catch (err) {}
}
export default storeBox;