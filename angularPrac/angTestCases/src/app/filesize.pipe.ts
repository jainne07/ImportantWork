import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {
  transform(size: number, extension: string='MB'): any {
    return `file size is - ${(size/(1024*1024)).toFixed(2)} ${extension}`;
  }

}
