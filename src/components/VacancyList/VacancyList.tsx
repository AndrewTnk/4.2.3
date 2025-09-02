import { Stack, Divider } from '@mantine/core';
import { VacancyCard } from '../VacancyCard/VacancyCard';
import classes from './VacancyList.module.scss';

const mockVacancies = [
  {
    id: 1,
    title: 'Frontend разработчик в EdTech продукт',
    salary: '80 000 – 170 000',
    experience: 'Опыт 1-3 года',
    company: 'Kata Academy',
    location: 'Набережные Челны',
    remoteType: 'remote' as const,
  },
  {
    id: 2,
    title: 'Frontend разработчик в казино',
    salary: '30 000 – 970 000',
    experience: 'Без опыта',
    company: '777',
    location: 'Уфа',
    remoteType: 'office' as const,
  },
  {
    id: 3,
    title: 'Frontend разработчик в стартап',
    salary: '15 000 – 20 000',
    experience: 'Без опыта',
    company: 'Точно Стрельнет',
    location: 'Замоскворечье',
    remoteType: 'hybrid' as const,
  },
  {
    id: 4,
    title: 'Frontend разработчик в EdTech продукт',
    salary: '80 000 – 170 000',
    experience: 'Опыт 1-3 года',
    company: 'Kata Academy',
    location: 'Набережные Челны',
    remoteType: 'remote' as const,
  },
  {
    id: 5,
    title: 'Тех - поддержка под пивом',
    salary: '920 000 – 930 000',
    experience: 'Опыт с 12 лет',
    company: 'Пивные пуза',
    location: 'Бавария',
    remoteType: 'remote' as const,
  },
];

export function VacancyList() {
  return (
    <div className={classes.container}>
      <Stack gap="md">
        {mockVacancies.map((vacancy, index) => (
          <div key={vacancy.id}>
            <VacancyCard
              title={vacancy.title}
              salary={vacancy.salary}
              experience={vacancy.experience}
              company={vacancy.company}
              location={vacancy.location}
              remoteType={vacancy.remoteType}
            />
            {index < mockVacancies.length - 1 && (
              <Divider my="md" color="#e9ecef" />
            )}
          </div>
        ))}
      </Stack>
    </div>
  );
}
