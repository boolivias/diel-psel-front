import InputComponent from "../../../components/input"
import ToggleButton from "../../../components/toggle_button"
import TaskDetails from "../components/TaskDetails"
import { Card, Container, Row } from "./style"

const HomeView: React.FC = () => {
  return (
    <Container>
      <Row style={{ justifyContent: 'space-evenly', }}>
        <Card>
          <Row>
            <InputComponent placeholder="Pesquisar por titulo" />
            <ToggleButton
              options={[
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
              ]}
            />
          </Row>
        </Card>
        <TaskDetails 
          data={{
            title: 'exemplo',
            date: new Date(),
            description: 'opa',
            startTime: { hour: 3, min: 8 },
            endTime: { hour: 13, min: 20 },
          }}
          onEdit={() => console.log()}
          onCreate={() => console.log()}
          onDelete={() => console.log()}
          onUnselect={() => console.log()}
        />
      </Row>
    </Container>
  )
}

export default HomeView