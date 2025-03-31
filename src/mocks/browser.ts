/* eslint-disable @typescript-eslint/no-unused-expressions */

import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);
worker.start;
