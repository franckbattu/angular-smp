import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TodoListComponent } from "./components/list/list.component";

const components = [
  TodoListComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ...components
  ]
})
export class TodosModule {}