import { Container, Group } from '@mantine/core';
import { Header } from './components/Header/Header';
import { SearchHeader } from './components/SearchHeader/SearchHeader';
import { Sidebar } from './components/Sidebar/Sidebar';
import { VacancyList } from './components/VacancyList/VacancyList';
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <SearchHeader />

      <Container size="xl" py="xl">
        <Group gap="xl" align="flex-start">
          <Sidebar />
          <div className={classes.mainContent}>
            <VacancyList />
          </div>
        </Group>
      </Container>
    </div>
  );
}

export default App;
