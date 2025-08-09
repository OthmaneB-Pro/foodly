import axios from "axios";

type UserType = {
    username : string;
    password : string;
}

export const registerUser = async (userData : UserType) => {
    try{
        const res = await axios.post('http://localhost/8080/user/register', userData)
        return res.data;
    }
    catch(err){
        console.error("Erreur lors de l'inscription", err);
        throw err;
    }
}

