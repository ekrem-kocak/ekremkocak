import { Action, Selector, State, StateContext } from '@ngxs/store';
import { MobileNav } from '../models/mobile-nav';
import { MOBILE_NAV_DEFAULTS as defaults } from '../defaults/mobile-nav.defaults';
import { ToggleSidebar } from '../actions/mobile-nav.actions';
import { Injectable } from '@angular/core';

@Injectable()
@State<MobileNav.State>({
  name: 'MobileNav',
  defaults,
})
export class MobileNavState {
  @Selector()
  static getVisibility({ visibility }: MobileNav.State) {
    return visibility;
  }

  @Action(ToggleSidebar)
  changeVisibility({ getState, patchState }: StateContext<MobileNav.State>) {
    const visibility = getState().visibility;
    patchState({
      visibility: !visibility,
    });
  }
}
