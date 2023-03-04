import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from 'src/student/student.module';
import { Lesson } from './lesson.entity';
import LessonResolver from './lesson.resolver';
import { lessonService } from './lesson.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([Lesson]),StudentModule
    ],
    providers:[LessonResolver]
})
export class LessonModule {}
