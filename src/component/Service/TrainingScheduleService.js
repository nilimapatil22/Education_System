import axios from 'axios';

class TrainingScheduleService{
    getScheduleById(scheduleId){
        return  axios.get("http://localhost:7171/api/getSchedule"+'/'+scheduleId);
    }
    updateScheduleService(schedule,scheduleId){
        return axios.put("http://localhost:7171/api/updateSchedule"+'/'+scheduleId,schedule);
    }
  

}
export default new TrainingScheduleService()