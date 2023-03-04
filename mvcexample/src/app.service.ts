import { Injectable } from '@nestjs/common';
import { BookModel } from './book.model';
//Model
@Injectable()
export class AppService {



  public books:BookModel[]=[
    {
    titile:"HERRY POTTER" ,
    author:" YASHLAL",
    published:2020
  },
  {
    titile:"HERRY POTTER2" ,
    author:" YASHLAL2",
    published:2022
  },
  {
    titile:"HERRY POTTER3" ,
    author:" YASHLAL3",
    published:2023
  },
  {
    titile:"HERRY POTTER4" ,
    author:" YASHLAL4",
    published:2024
  },
]


getAllBook():BookModel[]{
  return this.books
}

  getHello(): string {
    return 'Hello World!';
  }
}
