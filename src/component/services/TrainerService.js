import axios from 'axios';

// const COURSE_API_BASE_URL = "http://localhost:7171/api";

class TrainerService {

    getTrainers(){
        return axios.get("http://localhost:7171/api/getAllTrainers");
    }

    createTrainer(trainer){
        return axios.post("http://localhost:7171/api/addTrainer", trainer);
    }

    getTrainerById(trainerId){
        return axios.get("http://localhost:7171/api/getTrainer" + '/' + trainerId);
    }

    updateTrainer(trainer, trainerId){
        return axios.put("http://localhost:7171/api/updateTrainer" + '/' + trainerId, trainer);
    }

    deleteTrainer(trainerId){
        return axios.delete("http://localhost:7171/api/deleteTrainer" + '/' + trainerId);
    }
}

export default new TrainerService()