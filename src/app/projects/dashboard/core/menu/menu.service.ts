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
    state: 'dashboard',
    name: 'HOME',
    type: 'link',
    icon: 'explore',
    badge: [],
    children:[]
  },
  {
    state: "dashboard",
    name: "menu 1",
    type: "sub",
    icon: "apps",
    badge: [
    {
        type: "red",
        value: "new"
    }],
    children: [{
      state: 'subMenu1',
      name: 'subMenu1',
      type: 'link',
      
    },{
      state: 'subMenu2',
      name: 'subMenu2',
      type: 'link',
     
    }]
},
{
  state: "dashboard",
  name: "menu 2",
  type: "sub",
  icon: "apps",
  badge: [
  {
      type: "red",
      value: "new"
  }],
  children: [{
    state: 'subMenu1',
    name: 'subMenu1',
    type: 'link',
    
  },{
    state: 'subMenu2',
    name: 'subMenu2',
    type: 'link',
   
  }]
}
];

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu: any) {
    MENUITEMS.push(menu);
  }
}
