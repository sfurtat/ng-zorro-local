import { OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
export declare type NzMode = 'vertical' | 'horizontal' | 'inline';
export declare class NzMenuComponent implements OnChanges, AfterViewInit {
    /** set when has submenu component */
    hasSubMenu: boolean;
    /** set when in dropdown component */
    isInDropDown: boolean;
    /** collection of menu item */
    menuItems: any[];
    /** collection of sub menu */
    subMenus: any[];
    /** view init flat */
    isInit: boolean;
    /** temporary mode */
    _tempMode: NzMode;
    /** opened index of array */
    _subMenusOpenIndex: any[];
    /** nzInlineCollapsed */
    _nzInlineCollapsed: boolean;
    nzMode: NzMode;
    nzTheme: 'light' | 'dark';
    nzClickActive: boolean;
    nzInlineCollapsed: boolean;
    /** define host class */
    readonly _isInDropDownClass: boolean;
    readonly _isNotInDropDownClass: boolean;
    readonly setDropDownThemeLightClass: boolean;
    readonly setDropDownThemeDarkClass: boolean;
    readonly setMenuThemeLightClass: boolean;
    readonly setMenuThemeDarkClass: boolean;
    readonly setMenuVerticalClass: boolean;
    readonly setMenuHorizontalClass: boolean;
    readonly setMenuInlineClass: boolean;
    readonly setMenuInlineCollapsedClass: boolean;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    /** trigger when menu item clicked */
    clearAllSelected(): void;
    hideSubMenus(): void;
    reductionSubMenus(): void;
    /** api for dropdown or navigation to set isInDropDown status */
    setDropDown(value: boolean): void;
    setHasSubMenu(value: boolean): void;
}
