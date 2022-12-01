import { CoursesService } from "./courses.service";
import { Module } from "@nestjs/common";
import { CoursesController } from "./courses.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Courses } from "./entity/courses.entity";
import { Syllabus } from "./entity/syllabus.entity";
import { FAQ } from "./entity/fqa.entity";
import { Specialization } from "./entity/specialization.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Courses, Syllabus, FAQ, Specialization])],
  controllers: [CoursesController],
  providers: [CoursesService],
  exports: [CoursesService],
})
export class CoursesModule {}
