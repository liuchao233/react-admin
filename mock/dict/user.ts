import { Request, Response } from 'express';

export function list(req: Request, res: Response) {
  return res.json([
    {
      dictKey: '1',
      dictValue: '张三',
    },
    {
      dictKey: '2',
      dictValue: '李四',
    },
    {
      dictKey: '3',
      dictValue: '王五',
    },
  ])
}