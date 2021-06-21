import { Request, Response } from 'express';

const DemoData: any[] = []

const originRow = {
  id: 1,
  title: '标题',
  author: '苏杰',
  rate: 3,
  clickCount: '1427',
  switch: true,
  status: 'published',
  time: '2021-05-01 16:25:07',
}

for (let i = 0; i < 20; i++) {
  DemoData.push({
    ...originRow,
    id: i + 1,
  })
}

export function list(req: Request, res: Response) {
  return res.json({
    result: DemoData,
    current: 1,
    total: 20,
    size: 10,
  })
}