import { OnDestroy, OnInit } from '@angular/core';
import { NzSelectComponent } from './nz-select.component';
export declare class NzOptionComponent implements OnDestroy, OnInit {
    private _nzSelect;
    _value: string;
    _label: string;
    _disabled: boolean;
    nzValue: string;
    nzLabel: string;
    nzDisabled: boolean;
    constructor(_nzSelect: NzSelectComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
