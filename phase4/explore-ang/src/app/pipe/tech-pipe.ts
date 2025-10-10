import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tech'
})
export class TechPipe implements PipeTransform {

  transform(current:string) : string {
      return current.toUpperCase()
  }

}
