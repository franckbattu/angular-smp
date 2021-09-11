import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TodosModule } from "./todos/todos.module";

const modules = [
  TodosModule
];

@NgModule({
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class FeaturesModule {}