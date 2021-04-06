import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[slow]'
})
export class SlowDirective {

 constructor(public tpl: TemplateRef<any>) { }

}