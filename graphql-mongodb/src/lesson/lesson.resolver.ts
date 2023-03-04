
import { Args, Query } from "@nestjs/graphql";
import { Resolver ,Mutation} from "@nestjs/graphql";
import { AssignStudentsToLesson } from "./assign-students-to-lesson.input";
import { createlessonInput } from "./lesson.input";
import { lessonService } from "./lesson.service";
import { LessonType } from "./lesson.type";



@Resolver(of => LessonType)
export default class LessonResolver{

 constructor(private lessonService:lessonService){}


    @Query(returns => [LessonType])
    lesson(){
        return this.lessonService.getLesson()
    }
    @Mutation(returns => LessonType)
    createLesson(
      @Args('createLessonInput') createlessonInput:createlessonInput,
    ){
    
return this.lessonService.createlesson(createlessonInput);
    }
    

@Mutation(returns => LessonType)
assignStudentsToLesson(
    @Args('assignStudentsToLesson') assignStudentsToLessonInput:AssignStudentsToLesson
)
{
    const { lessonId,studentIds} = assignStudentsToLessonInput;
    return this.lessonService.assignStudentsToLesson(lessonId,studentIds)
}
}