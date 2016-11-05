import { karmaStart } from '../../../utils';

export = (done: any) => {
  karmaStart({
    singleRun: true
  }, done);
};
