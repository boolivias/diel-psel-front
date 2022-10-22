import { TaskProps } from "../../../entities/TaskProps"
import requestHelper from "../../helper"
import TASK_PATH from "./path"

const taskGetAll = () => requestHelper<TaskProps[]>(
  TASK_PATH, 'get',
  (dt) => {
    return dt.map((t: any) => {
      return {
        ...t,
        date: new Date(t.date),
        startTime: t.start_time,
        endTime: t.end_time,
      }
    })
  },
)

export default taskGetAll