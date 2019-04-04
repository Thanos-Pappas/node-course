import { NextFunction, Request, Response, Router } from "express";


export class UserController {
    public router: Router;
    //private demoService: DemoService;

    constructor() {
       // this.demoService = new DemoService();
        this.router = Router();

        this.get();
        this.getById();
        this.post();
        this.put();
        this.delete();
    }

    private get() {
        this.router.get("/", async (req: Request, res: Response, next: NextFunction) => {
            try {
               // const data = await this.demoService.retrieve();
                const data = "All users";
                res.send(data);
            } catch (error) {
                next(error);
            }
        });
    }

    private getById() {
        this.router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
            try {
               // const data = await this.demoService.findById(req.params.id);
                const data = `User with id ${req.params.id}`;
                if (data) {
                    return res.send(data);
                }
                return res.send({});
            } catch (error) {
                return next(error);
            }
        });
    }

    private post() {
        this.router.post("/", async (req: Request, res: Response, next: NextFunction) => {
            try {
                //const data = await this.demoService.create(req.body);
                const data = `Create new user`;
                return res.send(data);
            } catch (error) {
                return next(error);
            }
        });
    }

    private put() {
        this.router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
            try {
                //const data = await this.demoService.update(req.params.id, req.body);
                const data = `Update user with id ${req.params.id}`;
                return res.send(data);
            } catch (error) {
                return next(error);
            }
        });
    }

    private delete() {
        this.router.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
            try {
                //const data = await this.demoService.delete(req.params.id);
                const data = `Delete user with id ${req.params.id}`;
                return res.send(data);
            } catch (error) {
                return next(error);
            }
        });
    }
}