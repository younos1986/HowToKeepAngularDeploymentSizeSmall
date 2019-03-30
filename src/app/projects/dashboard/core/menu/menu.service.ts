import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: '/dashboard',
    name: 'HOME',
    type: 'link',
    icon: 'explore'
  },
  {
    state: '/dashboard/docs',
    name: 'DOCS',
    type: 'link',
    icon: 'local_library'
  },
  {
    state: 'extTabLink',
    name: 'extTabLink',
    type: 'extTabLink',
    icon: 'local_library'
  }
];

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu: Menu) {
    MENUITEMS.push(menu);
  }
}
