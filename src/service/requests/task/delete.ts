import requestHelper from "../../helper"
import TASK_PATH from "./path"

const taskDelete = (id: string) => requestHelper(`${TASK_PATH}/${id}`, 'delete')

export default taskDelete