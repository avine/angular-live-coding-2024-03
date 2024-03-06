import { CanMatchFn } from '@angular/router';

export const auth2Guard: CanMatchFn = (route, segments) => {
  return true;
};
