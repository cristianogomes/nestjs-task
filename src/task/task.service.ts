import { Injectable } from '@nestjs/common';
import { Task } from 'dist/task/task.model';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  getAllTaks(): Task[] {
    return this.tasks;
  }
}
