import axios from 'axios';

// const COURSE_API_BASE_URL = "http://localhost:7171/api";

class CourseService {

    getCourses(){
        return axios.get("http://localhost:7171/api/getAllCourses");
    }

    createCourse(course){
        return axios.post("http://localhost:7171/api/Course", course);
    }

    getCourseById(courseId){
        return axios.get("http://localhost:7171/api/getCourse" + '/' + courseId);
    }

    updateCourse(course, courseId){
        return axios.put("http://localhost:7171/api/updateCourse" + '/' + courseId, course);
    }

    deleteCourse(courseId){
        return axios.delete("http://localhost:7171/api/deleteCourse" + '/' + courseId);
    }
}

export default new CourseService()