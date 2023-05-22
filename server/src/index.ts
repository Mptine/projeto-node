import express from "express";
import { notepadController } from "./notepad/notepad.controller";
import { commentController } from "./comment/comment.controller";
import cors from "cors";

const app = express();
const host = "localhost";
const port = 8080;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.static("public"));
app.use(express.json());
app.use("/notepads", notepadController);
app.use("/comments", commentController);

app.listen(port, host, () => {
  console.log(`The Express server is listening at http://${host}:${port}`);
});
