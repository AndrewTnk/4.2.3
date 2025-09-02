import { Group, Button, Container } from '@mantine/core';
import classes from './Header.module.scss';
import logo from '../../assets/logo.svg';
import about from '../../assets/about.svg';

export function Header() {
  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.container}>
        <Group className={classes.items} h="100%">
          <Group align="center">
            <div className={classes.logo}>
              <img src={logo} alt="logo" className={classes.logoRed} />
              <span className={classes.logoWhite}>.FrontEnd</span>
            </div>
          </Group>

          <Group className={classes.buttons}>
            <Button variant="subtle" className={classes.navLink}>
              <span>Вакансии FE</span>
              <div className={classes.blueDot}></div>
            </Button>
            <Button variant="subtle" className={classes.navLink}>
              <div className={classes.about}>
                <img src={about} alt="about" />
                <span>Обо мне</span>
              </div>
            </Button>
          </Group>
        </Group>
      </Container>
    </header>
  );
}
