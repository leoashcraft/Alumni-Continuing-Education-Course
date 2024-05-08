import TaskRequestBuilder from "./TaskRequestBuilder";

export default class TaskRequest {
    title: string;
    description?: string;
    priority?: string;
    dueDate?: Date;
    tags?: string[];
    assignees?: string[];

    constructor(builder: TaskRequestBuilder) {
        this.title = builder.title;
        this.description = builder.description;
        this.priority = builder.priority;
        this.dueDate = builder.dueDate;
        this.tags = builder.tags;
        this.assignees = builder.assignees;
    }
}