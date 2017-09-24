import express = require('express');
import { Router } from 'express';
import { AppDataServices } from '../data';
import { ArtistsRouter } from './routes/artists/artists-router';
import { Logger, LoggerFactory, InvalidResourceUrlError } from '../common';

export class ApiRouterFactory {

  private static readonly LOGGER: Logger = LoggerFactory.getLogger();

  private constructor() {}

  static getApiRouter(services: AppDataServices): Router {
    const router: Router = express.Router();

    const artistsRouter: Router = new ArtistsRouter(services.artistsService).router;

    ApiRouterFactory.LOGGER.info('Mounting artists route');
    router.use('/artists', artistsRouter);

    router.all('*', (req, res, next) => {
      next(new InvalidResourceUrlError());
    });

    return router;
  }
}
