// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import { EggAppConfig } from 'egg';
import * as ExportConfigDefault from '../../config/config.default';
type ConfigDefault = typeof ExportConfigDefault;
type NewEggAppConfig = ConfigDefault;
declare module 'egg' {
  interface EggAppConfig extends NewEggAppConfig { }
}