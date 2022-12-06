import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

//Controllers
import * as user from "./controllers/user";
import * as client from "./controllers/client";
import * as service from "./controllers/service";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3000;

//Users routes

app.get("/users/userslist", user.list);
app.get("/users/userscount", user.usersCount);
app.post("/users/login", user.login);
app.post("/users/register", user.register);
app.delete("/users/:id", user.remove);

//Clients routes

app.get("/clients", client.list);
app.get("/clients/:id", client.getById);
app.post("/clients", client.create);
app.put("/clients/:id", client.update);
app.delete("/clients/:id", client.remove);

//Services routes

app.get("/services", service.list);
app.get("/services/:id", service.getById);
app.get("/servicescount", service.servicesCount);
app.post("/services", service.create);
app.put("/services/:id", service.update);
app.delete("/services/:id", service.remove);

app.listen(PORT, () => {
  console.log(`⚡️[server]: API rodando em http://localhost:${PORT}`);
});
