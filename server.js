import cors from "cors";
import express from "express";
import multer from "multer";
import { resolve } from "path";
import checkFileType from "./middleware/checkFileType.js";
import { uploadFile } from "./middleware/uploadFile.js";
import router from "./routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/static", express.static(resolve("public")));

app.use(uploadFile, checkFileType);
app.use(router);

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      err.message = "max size file is 1MB";
    }
  }
  console.log(err);
  res.status(500).json(err);
});

app.listen(3000, () => console.log("server run on port 3000"));
