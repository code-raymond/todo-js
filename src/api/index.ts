import { Router } from "express";
import v1Router from "./v1/index.route";
import v2Router from "./v2/index.route";

const apiRouter = Router();

apiRouter.use('/v1',v1Router);
apiRouter.use('/v2',v2Router);

export default apiRouter;