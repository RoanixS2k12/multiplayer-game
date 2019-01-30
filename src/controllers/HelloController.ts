import {
    Request,
    Response,
    Router
} from "express";

class HelloController {

    public path = "/hello";
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.path, this.helloWorld);
    }

    public helloWorld = (request: Request, response: Response) => {
        response.send({
            message: "Hello world!"
        });
    }

}

export default HelloController;
