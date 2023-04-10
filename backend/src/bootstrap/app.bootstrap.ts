import express from "express";
import http from "http";
import fs from 'fs';
import { AppSetupMiddleware } from "../middlewares/app-setup.middleware";
import { PublicRoutes } from "../routes/public-routes";
require('dotenv').config()
const path = require('path');
import cloudinary from "cloudinary"
import multer from "multer";
import { AdminRoutes } from "../routes/admin-routes";
import { CustomerRoutes } from "../routes/customer-routes";



export class App {
    app: express.Application;
    //io: Server;
    constructor(app: express.Application) {
        this.app = app;
        this.app.set('view engine', 'ejs');

        this.app.get('/', async function (req: any, res: any) {
            res.send("----- KharidLo App NodeJS API -----")
        });
        
        //declear global socket veriable  start
        const server: http.Server = http.createServer(this.app);
        
        cloudinary.v2.config({ 
            cloud_name: process.env.CLOUD_NAME, 
            api_key: process.env.CLOUD_API_KEY, 
            api_secret: process.env.CLOUD_API_SECRET
        
        });
        this.registerMiddlewares();
        this.registerRoutes();
        this.startServer(server);

    }

    registerRoutes() {
        new PublicRoutes(this.app);
        new AdminRoutes(this.app);
        new CustomerRoutes(this.app);
    }
    registerMiddlewares() {
        const middlewares = new AppSetupMiddleware(this.app);
        middlewares.handle();
    }

    startServer(server: http.Server) {
        const port: Number = Number(process.env.PORT_NO) || 3019;
        server.listen(port, () => { 
            console.log(`Server is up and running on port ${port}`)
        });
    }


}

