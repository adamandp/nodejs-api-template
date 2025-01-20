import { Request, Response, Router } from "express";
import { logger } from "../utils/logger";

const HealthRouter: Router = Router();

HealthRouter.get("/", (req: Request, res: Response) => {
  logger.info("success get health");
      res.status(200).send({ status: "200", data: "hello world" });
});

export { HealthRouter };
