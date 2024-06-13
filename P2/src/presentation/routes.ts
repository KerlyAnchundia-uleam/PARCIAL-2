import { Router } from "express";

import { TutorRoutes } from "./tutor/routes";
import { TutoriaRoutes } from "./tutoria/routes";
import { TutoradoRoutes } from "./tutorado/routes";
import { GithubRoutes } from "./github/github.routes";

export class AppRoutes { 

    static get routes(): Router {
        const router = Router();

        router.use('/tutores', TutorRoutes.routes);
        router.use('/tutorias', TutoriaRoutes.routes);
        router.use('/tutorados', TutoradoRoutes.routes);

        //github
        router.use('/github', GithubRoutes.routes );
        return router;
    }
}
