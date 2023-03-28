import { BaseValidator } from './validator';

const providers = [BaseValidator];

const getProviders = function (): any {
  return providers;
};

export { getProviders };
