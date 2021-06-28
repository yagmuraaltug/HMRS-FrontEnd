import axios from "axios";

export default class CandicateService {
  getCandicates() {
    return axios.get("http://localhost:8080/api/job_seekers/getall");
  }
}
