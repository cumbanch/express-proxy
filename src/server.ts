import express from 'express';
import bodyParser from 'body-parser';
import nutritionRouter from './routers/nutrition_router';
import * as core from 'express-serve-static-core';

class Server {
  private readonly app: core.Express;

  constructor() {
    this.app = express();
    this.config();
    this.routerConfig();
  }

  private config(): void {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    // 100kb default
    this.app.use(bodyParser.json({ limit: '1mb' }));
  }

  private routerConfig(): void {
    this.app.use('/nutrition', nutritionRouter);
  }

  public start = (port: number): Promise<number> =>
    new Promise((resolve, reject) => {
      this.app
        .listen(port, () => {
          resolve(port);
        })
        .on('error', (err: Error) => reject(err));
    });
}

export default Server;
