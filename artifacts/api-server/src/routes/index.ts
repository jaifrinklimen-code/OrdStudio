import { Router, type IRouter } from "express";
import healthRouter from "./health";
import templatesRouter from "./templates";
import projectsRouter from "./projects";
import stickersRouter from "./stickers";
import contentRouter from "./content";
import searchRouter from "./search";
import contactRouter from "./contact";
import statsRouter from "./stats";
import featuresRouter from "./features";
import aboutRouter from "./about";
import blogRouter from "./blog";

const router: IRouter = Router();

router.use(healthRouter);
router.use(templatesRouter);
router.use(projectsRouter);
router.use(stickersRouter);
router.use(contentRouter);
router.use(searchRouter);
router.use(contactRouter);
router.use(statsRouter);
router.use(featuresRouter);
router.use(aboutRouter);
router.use(blogRouter);

export default router;
