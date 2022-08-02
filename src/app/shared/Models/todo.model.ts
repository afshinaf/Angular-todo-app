export interface Todo {
    text: string,
    id: number,
    status: 'completed' | 'blocked' | 'in-progress' | 'done'
}
