import { useState } from "react"
import InputComponent from "../../../components/input"
import ToggleButton from "../../../components/toggle_button"
import { TaskProps } from "../../../entities/TaskProps"
import Table from "../components/Table"
import TaskDetails from "../components/TaskDetails"
import { Card, Container, Row } from "./style"

interface HomeViewProps {
  data: TaskProps[],
  onEdit(task: TaskProps): void,
  onCreate(task: TaskProps): void,
  onDelete(id: TaskProps['id']): void,
}

const TOGGLE_OPTIONS = [
  {
    label: 'Dia',
    value: 'day',
  },
  {
    label: 'Semana',
    value: 'week',
  },
  {
    label: 'Mês',
    value: 'month',
  },
]

const HomeView: React.FC<HomeViewProps> = ({
  data, onEdit, onCreate, onDelete
}) => {
  const [selected, setSelected] = useState<TaskProps | null>(null)

  return (
    <Container>
      <Row style={{ justifyContent: 'space-evenly', }}>
        <Card>
          <Row>
            <InputComponent placeholder="Pesquisar por titulo" />
            <ToggleButton
              options={TOGGLE_OPTIONS}
            />
          </Row>
          <Table
            data={data}
            selected={selected?.id}
            onSelect={(task) => setSelected(task)}
          />
        </Card>
        <TaskDetails
          data={selected}
          onEdit={onEdit}
          onCreate={onCreate}
          onDelete={onDelete}
          onUnselect={() => setSelected(null)}
        />
      </Row>
    </Container>
  )
}

export default HomeView