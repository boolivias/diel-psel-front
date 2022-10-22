import { useEffect, useState } from "react";
import { TaskProps } from "../../entities/TaskProps";
import taskCreate from "../../service/requests/task/create";
import taskDelete from "../../service/requests/task/delete";
import taskGetAll from "../../service/requests/task/getAll";
import taskUpdate from "../../service/requests/task/update";
import HomeView from "./view";

const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  useEffect(() => {
    const load = async () => {
      const resp = await taskGetAll()
      if (resp.success)
        setTasks(resp.data as TaskProps[])
    }

    load()
  }, [])

  async function handleEdit(t: TaskProps) {
    const resp = await taskUpdate(t.id as string, t)

    if (!resp.success) return

    const index = tasks.findIndex((tk) => tk.id === t.id)
    tasks[index] = { ...t }
    setTasks([...tasks])
  }

  async function handleCreate(t: TaskProps) {
    const resp = await taskCreate(t)

    if (!resp.success) return

    tasks.push(resp.data as TaskProps)
    setTasks([...tasks])
  }

  async function handleDelete(id: string) {
    const resp = await taskDelete(id)

    if (!resp.success) return
    const index = tasks.findIndex((t) => t.id === id)
    tasks.splice(index, 1)
    setTasks([...tasks])
  }

  return (
    <HomeView
      data={tasks}
      onEdit={handleEdit}
      onCreate={handleCreate}
      onDelete={handleDelete}
    />
  )
}

export default HomePage;