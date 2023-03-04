import { Query } from "@nestjs/graphql";
import { Args, Mutation, ResolveField, Resolver } from "@nestjs/graphql";
import { CreateStudentInput } from "./create-student.input";
import { StudentService } from "./student.service";
import { StudentType } from "./student.type";


@Resolver(of => StudentType)
export class StudentResolver{
    constructor( private studentService:StudentService){}

@Query(returns => StudentType)
async student(
    @Args('id') id:string,
){
    return this.studentService.getStudent(id)
}


@Query(returns => [StudentType])
async students(){
    return this.studentService.getStudents()
}

@Mutation(returns => StudentType)

async createStudent(
    @Args('createStudentInput') CreateStudentInput:CreateStudentInput
){
    return this.studentService.createStudent(CreateStudentInput)
}
}