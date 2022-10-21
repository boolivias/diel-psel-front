import { useEffect, useState } from "react";
import Button from "../../../../components/button";
import Input from "../../../../components/input";
import { TaskProps } from "../../../../entities/TaskProps";
import { Card, Row, Title } from "./style";

interface TaskDetailsProps {
  data: TaskProps | null,
  onEdit(task: TaskProps): void,
  onCreate(task: TaskProps): void,
  onDelete(id: TaskProps['id']): void,
  onUnselect(): void,
}

const TaskDetails: React.FC<TaskDetailsProps> = ({
  data, onEdit, onCreate, onDelete, onUnselect,
}) => {
  const [editEnabled, setEditEnabled] = useState(false)
  const [dataAux, setDataAux] = useState<TaskProps>({
    title: '',
    description: '',
    date: new Date(),
    startTime: {
      hour: 0,
      min: 0,
    },
    endTime: {
      hour: 0,
      min: 0,
    },
  })

  useEffect(() => {
    if (data)
      setDataAux(data)
  }, [data])

  function handleResetData(create = false) {
    setEditEnabled(create)
    if (data && !create)
      return setDataAux({ ...data })

    onUnselect()
    const nowDate = new Date()
    setDataAux({
      title: '',
      description: '',
      date: nowDate,
      startTime: {
        hour: nowDate.getHours(),
        min: nowDate.getMinutes(),
      },
      endTime: {
        hour: nowDate.getHours() + 1,
        min: nowDate.getMinutes(),
      },
    })
  }

  function handleSave() {
    if (data)
      onEdit(dataAux)
    else
      onCreate(dataAux)
  }

  function handleSetValue(v: string, field: keyof TaskProps) {
    if (!dataAux) return;

    if (field === 'date') {
      dataAux['date'] = new Date(v)
    } else if (field === 'startTime' || field === 'endTime') {
      const [hour, min] = v.split(':')
      dataAux[field] = { hour: Number(hour), min: Number(min), }
    } else {
      dataAux[field] = v
    }

    setDataAux({ ...dataAux })
  }

  return (
    <Card>
      <Title>
        Detalhes da tarefa
        <Button
          type="success"
          text="Criar novo"
          onClick={() => handleResetData(true)}
        />
      </Title>
      <Input
        value={dataAux?.title}
        enabled={editEnabled}
        labelText="Titulo"
        onChangeValue={(e) => handleSetValue(e, 'title')}
      />
      <Row>
        <Input
          value={dataAux?.date.toISOString().split('T')[0]}
          enabled={editEnabled}
          type="date"
          labelText="Data"
          onChangeValue={(e) => handleSetValue(e, 'date')}
        />
        <Input
          value={
            `${dataAux?.startTime.hour.toString().padStart(2, '0')}:${dataAux?.startTime.min.toString().padStart(2, '0')}`
          }
          enabled={editEnabled}
          type="time"
          labelText="Hora inicial"
          onChangeValue={(e) => handleSetValue(e, 'startTime')}
        />
        <Input
          value={`${dataAux?.endTime.hour.toString().padStart(2, '0')}:${dataAux?.endTime.min.toString().padStart(2, '0')}`}
          enabled={editEnabled}
          type="time"
          labelText="Hora final"
          onChangeValue={(e) => handleSetValue(e, 'endTime')}
        />
      </Row>
      <Input
        value={dataAux?.description}
        enabled={editEnabled}
        type="textarea"
        labelText="Descrição"
        onChangeValue={(e) => handleSetValue(e, 'description')}
      />
      {
        editEnabled
          ? (
            <Row>
              <Button
                type="danger"
                text="Cancelar"
                onClick={() => handleResetData()}
              />
              <Button
                type="success"
                text="Salvar"
                onClick={() => handleSave()}
              />
            </Row>
          ) : (
            <Row>
              <Button
                type="danger"
                text="Deletar"
                onClick={() => onDelete(data?.id)}
              />
              <Button type="alert" text="Editar" onClick={() => setEditEnabled(true)} />
            </Row>
          )
      }
    </Card>
  )
}

export default TaskDetails;