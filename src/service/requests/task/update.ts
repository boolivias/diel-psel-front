import { TaskProps } from "../../../entities/TaskProps"
import requestHelper from "../../helper"
import TASK_PATH from "./path"

const taskUpdate = (id: string, data: TaskProps) =>
  requestHelper(`${TASK_PATH}/${id}`, 'put', undefined, {
    ...data,
    start_time: data.startTime,
    end_time: data.endTime,
  })

export default taskUpdate