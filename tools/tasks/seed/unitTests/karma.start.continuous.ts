import { karmaStart } from '../../../utils';

export = (done: any) => {
  karmaStart({
    singleRun: false
  }, done);
};
