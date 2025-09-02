import {
  Container,
  Title,
  Text,
  Group,
  TextInput,
  Button,
} from '@mantine/core';
import classes from './SearchHeader.module.scss';

export function SearchHeader() {
  return (
    <div className={classes.searchHeader}>
      <Container size="xl" className={classes.container}>
        <Group className={classes.items}>
          <Group className={classes.title} gap={0}>
            <Title order={2} className={classes.mainTitle}>
              Список вакансий
            </Title>
            <Text className={classes.lowTitle} c="dimmed">
              по профессии Frontend-разработчик
            </Text>
          </Group>

          <Group className={classes.input}>
            <TextInput
              placeholder="Должность или название компании"
              className={classes.searchInput}
              radius="md"
            />
            <Button variant="filled" color="blue">
              Найти
            </Button>
          </Group>
        </Group>
      </Container>
    </div>
  );
}
