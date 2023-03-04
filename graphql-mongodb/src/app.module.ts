import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import{ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo'
import { LessonModule } from './lesson/lesson.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/lesson.entity';
import { StudentModule } from './student/student.module';
import { Student } from './student/student.entity';



@Module({
  imports: [TypeOrmModule.forRoot({ 
    type:'mongodb',
   //url:'mongodb+srv://yashlal:Yash@cluster0.9buxk0t.mongodb.net/?retryWrites=true&w=majority',
    url:'mongodb://localhost:27017/school',
    synchronize:true,
    useUnifiedTopology:true,
    entities:[
    Lesson,Student
    ]
  }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile:true
    }),
    LessonModule,
    StudentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
