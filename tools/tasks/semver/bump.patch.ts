import { semver } from '../../utils';

export = (done: any) => {
  semver(done, {bumpType: 'patch'});
};
