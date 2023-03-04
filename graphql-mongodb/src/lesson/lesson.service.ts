import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Lesson } from "./lesson.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { v4 as uuid} from 'uuid'
import { createlessonInput } from "./lesson.input";
@Injectable()
export class lessonService{

constructor(
    @InjectRepository(Lesson) private lessonRepository:Repository<Lesson>,
){}

async getLesson():Promise<Lesson[]>{
    return this.lessonRepository.find();
}
 async createlesson(createlessonInput:createlessonInput):Promise<Lesson>{
    const {name,startDate,endDate}=createlessonInput
    const lesson=this.lessonRepository.create({
        id:uuid(),
        name,
        startDate,
        endDate
    })
    return this.lessonRepository.save(lesson)
}


async assignStudentsToLesson(lessonId:string,studentsIds:string[]): Promise<Lesson>{
    const lesson=await this.lessonRepository.findOneBy({id: lessonId})
    lesson.students=[...lesson.students,...studentsIds];
    return this.lessonRepository.save(lesson)


}
}

