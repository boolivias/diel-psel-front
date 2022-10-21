import { colors } from '../../../../constants/theme'
import { TaskProps } from '../../../../entities/TaskProps'
import { Table as TbStyled } from './style'

interface TableProps {
  data: TaskProps[],
  selected: TaskProps['id'],
  onSelect(task: TaskProps): void,
}

const Table: React.FC<TableProps> = ({
  data, selected, onSelect
}) => {
  return (
    <TbStyled>
      <thead>
        <tr>
          <th>#</th>
          <th>Titulo</th>
          <th>Início</th>
          <th>Término</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((dt, index) => (
            <tr
              key={index}
              style={
                selected === dt.id
                  ? { backgroundColor: colors.primary }
                  : {}
              }
              onClick={() => onSelect(dt)}
            >
              <td>{index}</td>
              <td>{dt.title}</td>
              <td>
                {`${dt?.startTime.hour.toString().padStart(2, '0')}:${dt?.startTime.min.toString().padStart(2, '0')}`}
              </td>
              <td>
                {`${dt?.endTime.hour.toString().padStart(2, '0')}:${dt?.endTime.min.toString().padStart(2, '0')}`}
              </td>
              <td>
                {`${dt?.date.getDate()}/${dt?.date.getMonth() + 1}/${dt?.date.getFullYear()}`}
              </td>
            </tr>
          ))
        }
      </tbody>
    </TbStyled>
  )
}

export default Table;