import { AfterContentInit, ElementRef } from '@angular/core';
export declare type NzButtonGroupSize = 'small' | 'large' | 'default';
export declare class NzButtonGroupComponent implements AfterContentInit {
    _size: NzButtonGroupSize;
    _prefixCls: string;
    _sizeMap: {
        large: string;
        small: string;
    };
    _groupWrapper: ElementRef;
    nzSize: NzButtonGroupSize;
    readonly _classMap: {
        [x: string]: any;
    };
    constructor();
    ngAfterContentInit(): void;
}
