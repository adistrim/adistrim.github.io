import express, { Request, Response } from "express";
import config from "./config";
import cors from "cors";

const app = express();

app.use(cors({
    origin: config.dev_origin || config.prod_origin,
}))

app.get("/", (req: Request, res: Response) => {
    res.send("You're not welcome here :)");
});


app.listen(config.port, () => {
    console.log("Server is running on port", config.port);
});
