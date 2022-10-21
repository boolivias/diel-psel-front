import HomeView from "./view";

const HomePage: React.FC = () => {
  return (
    <HomeView
      data={[
        {
          id: '1',
          title: 'exemplo',
          date: new Date(),
          description: 'opa',
          startTime: { hour: 3, min: 8 },
          endTime: { hour: 13, min: 20 },
        },
        {
          id: '2',
          title: 'exemplo',
          date: new Date(),
          description: 'opa2',
          startTime: { hour: 2, min: 8 },
          endTime: { hour: 4, min: 20 },
        },
        {
          id: '3',
          title: 'exemplo',
          date: new Date(),
          description: 'opa3',
          startTime: { hour: 5, min: 8 },
          endTime: { hour: 7, min: 20 },
        },
      ]}
      onEdit={() => console.log()}
      onCreate={() => console.log()}
      onDelete={() => console.log()}
    />
  )
}

export default HomePage;