import { TaskProps } from "../../../entities/TaskProps"
import requestHelper from "../../helper"
import TASK_PATH from "./path"

const taskCreate = (data: TaskProps) =>
  requestHelper<TaskProps>(
    TASK_PATH, 'post',
    (dt) => {
      return {
        ...dt,
        date: new Date(dt.date),
        startTime: dt.start_time,
        endTime: dt.end_time,
      }
    },
    {
      ...data,
      start_time: data.startTime,
      end_time: data.endTime,
    },
  )

export default taskCreate