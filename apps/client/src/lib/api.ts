import * as client from "./generated/api.gen";

const api = {
  classroom: new client.ClassroomService("http://localhost:3030", fetch),
  student: new client.StudentService("http://localhost:3030", fetch),
  request: new client.RequestService("http://localhost:3030", fetch),
  user: new client.UserService("http://localhost:3030", fetch),
};

export default api;
