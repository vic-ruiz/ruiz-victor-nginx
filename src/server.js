import express from "express";
import morgan from "morgan";
import os from "os";
import cluster from "cluster";

const PORT = process.env.PORT;
const MODO = process.argv[2];
const numCPU = os.cpus().length;
const app = express();

app.use(morgan("dev"));

if (MODO === "cluster" && cluster.isPrimary) {
  for (let i = 0; i < numCPU; i++) {
    cluster.fork();
  }
} else {
  app.get("/", (req, res) => {
    if (MODO !== "cluster") {
      res.send(`Servidor en modo Fork Puerto =${PORT}, PID = ${process.pid}`);
    } else {
      res.send(
        `Servidor en modo cluster Puerto =${PORT}, PID = ${process.pid}`
      );
    }
  });
  app.get("/data", (req, res) => {
    res.send(
      `Ruta datos, modo cluster , puerto = ${PORT} , PID = ${process.pid}, procesadores = ${numCPU}`
    );
  });

  const server = app.listen(PORT, () => {
    console.log(` 🚀 Server started at http://localhost:${PORT}`);
  });
  
  server.on("error", (err) => console.log(err));
}
