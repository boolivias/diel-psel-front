export interface TaskProps {
  title: string,
  date: Date,
  startTime: {
    hour: number,
    min: number,
  },
  endTime: {
    hour: number,
    min: number,
  },
  description: string,
}