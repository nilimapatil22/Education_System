import axios from 'axios';

// const COURSE_API_BASE_URL = "http://localhost:7171/api";

class ProgressService {

   

    getProgressById(gradeId){
        return axios.get("http://localhost:7171/api/getProgressDetailsById" + '/' + gradeId);
    }

    updateProgress(progressData, gradeId){
        return axios.put("http://localhost:7171/api/updateGrade" + '/' + gradeId, progressData);
    }
}

export default new ProgressService()