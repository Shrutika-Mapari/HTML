import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(item: unknown, ...args: unknown[]): unknown {
    if(item==='A')
    {
      return 'Active';
    }
    else if(item==='D')
    {
      return 'Disabled';
    }
    else
    {
      return 'invalid user status';
    }
  }

}
