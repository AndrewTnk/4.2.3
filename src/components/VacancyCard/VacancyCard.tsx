import { Paper, Title, Text, Group, Button, Badge, Stack } from '@mantine/core';
import classes from './VacancyCard.module.scss';

interface VacancyCardProps {
  title: string;
  salary: string;
  experience: string;
  company: string;
  location: string;
  remoteType?: 'remote' | 'hybrid' | 'office';
}

export function VacancyCard({
  title,
  salary,
  experience,
  company,
  location,
  remoteType,
}: VacancyCardProps) {
  const getRemoteBadge = () => {
    if (remoteType === 'remote') {
      return (
        <Badge color="blue" variant="light">
          МОЖНО УДАЛЕННО
        </Badge>
      );
    }
    if (remoteType === 'hybrid') {
      return (
        <Badge color="dark" variant="light">
          ГИБРИД
        </Badge>
      );
    }
    return null;
  };

  return (
    <Paper shadow="xs" p="lg" radius="md" className={classes.card}>
      <Stack gap="md">
        <Title order={3} size="h4" className={classes.title}>
          {title}
        </Title>

        <Group>
          <Text size="lg" fw={600} className={classes.salary}>
            {salary} Р
          </Text>

          <Text size="md" c="dimmed">
            {experience}
          </Text>
        </Group>

        <Text size="md" fw={400} c="dimmed">
          {company}
        </Text>

        {getRemoteBadge()}
        <Text size="md" fw={500}>
          {location}
        </Text>

        <Group gap="md" mt="md">
          <Button
            variant="filled"
            color="dark"
            size="md"
            className={classes.viewButton}
          >
            Смотреть вакансию
          </Button>
          <Button variant="filled" size="md" className={classes.applyButton}>
            Откликнуться
          </Button>
        </Group>
      </Stack>
    </Paper>
  );
}
