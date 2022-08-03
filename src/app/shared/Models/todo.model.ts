export interface Todo {
    text: string,
    id: number,
    status: number
}

export interface statusNumber {
  todo: 0,
  inProgress: 1,
  blocked: 2,
  done: 3,
}
