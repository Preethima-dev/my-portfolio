import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'ImageFilter',
    pure: true
})

export class ImageFilterPipe implements PipeTransform{
    transform(value: any, category: string){
        if(value.category === category)
        return value.category;
    }

}
