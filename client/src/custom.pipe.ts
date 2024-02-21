import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})

export class CustomPipe implements PipeTransform {
  transform(value: string | null): string {
    if (value === null) {
      return ''; 
    } else {
      return value.toUpperCase(); 
    }
  }
}