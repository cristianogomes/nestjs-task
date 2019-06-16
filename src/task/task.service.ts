import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  private tasks = [];

  getAllTaks() {
    return this.tasks;
  }
}
