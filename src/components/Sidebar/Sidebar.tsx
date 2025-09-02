import {
  Paper,
  Title,
  TextInput,
  Button,
  Group,
  Badge,
  Stack,
  Select,
  Text,
} from '@mantine/core';
import { IconPlus, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import classes from './Sidebar.module.scss';

export function Sidebar() {
  const [skills, setSkills] = useState<string[]>([
    'TypeScript',
    'React',
    'Redux',
  ]);
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className={classes.sidebar}>
      <Stack gap="md">
        <Paper shadow="xs" p="md" radius="md" className={classes.filterCard}>
          <Text className={classes.title}>Ключевые навыки</Text>

          <Group gap="xs" mb="md">
            <TextInput
              placeholder="Навык"
              value={newSkill}
              onChange={e => setNewSkill(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && addSkill()}
              className={classes.skillInput}
            />
            <Button
              size="sm"
              color="blue"
              onClick={addSkill}
              className={classes.addButton}
            >
              <IconPlus size={16} />
            </Button>
          </Group>

          <div className={classes.skillsContainer}>
            {skills.map(skill => (
              <Badge
                key={skill}
                variant="light"
                color="gray"
                size="md"
                className={classes.skillBadge}
                rightSection={
                  <IconX
                    size={12}
                    className={classes.removeIcon}
                    onClick={() => removeSkill(skill)}
                  />
                }
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Paper>

        <Paper shadow="xs" p="md" radius="md" className={classes.filterCard}>
          <Select
            placeholder="Все города"
            data={['Москва', 'Санкт-Петербург']}
            searchable
            clearable
            className={classes.citySelect}
          />
        </Paper>
      </Stack>
    </div>
  );
}
