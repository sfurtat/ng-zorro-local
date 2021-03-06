import { OnInit, TemplateRef, EventEmitter, Renderer2, OnDestroy } from '@angular/core';
import { NzScrollService } from "../core/scroll/nz-scroll.service";
export declare class NzBackTopComponent implements OnInit, OnDestroy {
    private scrollSrv;
    private _renderer;
    private scroll$;
    private target;
    _display: boolean;
    nzTemplate: TemplateRef<any>;
    nzVisibilityHeight: number;
    nzTarget: HTMLElement;
    nzClick: EventEmitter<boolean>;
    constructor(scrollSrv: NzScrollService, _renderer: Renderer2);
    ngOnInit(): void;
    clickBackTop(): void;
    private getTarget();
    private handleScroll();
    private removeListen();
    private registerScrollEvent();
    ngOnDestroy(): void;
}
