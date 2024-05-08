import TaskRequest from "./TaskRequest";

export default class TaskRequestBuilder {
    title: string;
    description?: string;
    priority?: string;
    dueDate?: Date;
    tags?: string[] = [];
    assignees?: string[] = [];

    constructor(title: string) {
        this.title = title;
    }

    setDescription(description: string): TaskRequestBuilder {
        this.description = description;
        return this;
    }

    setPriority(priority: string): TaskRequestBuilder {
        this.priority = priority;
        return this;
    }

    setDueDate(dueDate: Date): TaskRequestBuilder {
        this.dueDate = dueDate;
        return this;
    }

    addTag(tag: string): TaskRequestBuilder {
        this.tags?.push(tag);
        return this;
    }

    addAssignee(assignee: string): TaskRequestBuilder {
        this.assignees?.push(assignee);
        return this;
    }

    build(): TaskRequest {
        return new TaskRequest(this);
    }
}