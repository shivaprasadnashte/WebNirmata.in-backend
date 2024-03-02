import express from "express";
import {getComponent,  creatComponent, updateComponent, deleteComponent } from "../controllers/component.controller.js";
const componentRouter = express.Router();

componentRouter.get("/comp",getComponent);
componentRouter.post("/comp",creatComponent);
componentRouter.put("/comp/:id",updateComponent);
componentRouter.delete("/comp/:id",deleteComponent);

export default componentRouter;

