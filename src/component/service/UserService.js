import axios from 'axios';

class UserService{
    getUser(userId){
        return axios.get("http://localhost:7171/api/getUser" + '/' + userId);
    }

    updateUser(user, userId){
        return axios.put("http://localhost:7171/api/updateUser" + '/' + userId, user);
    }
}
export default new UserService()