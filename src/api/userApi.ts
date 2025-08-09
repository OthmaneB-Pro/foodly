import axios from "axios";

type UserType = {
    username : string;
    password : string;
}

export const registerUser = async (userData : UserType) => {
    try{
        const res = await axios.post('http://localhost:8080/auth/register', userData)
        return res.data;
    }
    catch(err){
        console.error("Erreur lors de l'inscription", err);
        throw err;
    }
}

export const loginUser = async (userData : UserType) => {
    try{
        const res = await axios.post('http://localhost:8080/auth/login', userData)
        return res.data;
    }
    catch(err){
        console.error("Erreur lors de la connexion", err);
        throw err;
    }
}
