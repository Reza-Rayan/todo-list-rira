export interface Note{
    id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
    deadline?: Date;
}
