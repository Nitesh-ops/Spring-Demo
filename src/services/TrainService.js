import axios from "axios";

const TRAIN_SERVICE_REST_API_URL =
  "http://localhost:8999/admin/trainDetails/trains";

class TrainService {
  getTrain() {
    return axios.get(TRAIN_SERVICE_REST_API_URL);
  }
}

export default new TrainService();
