import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appVipJoin]'
})
export class VipJoinDirective {

  constructor(public _ViewContainerRef:ViewContainerRef) { }

}
