import { Button } from './components/button';
import { Header } from './components/header';
import { Footer } from './components/footer';

const app = document.querySelector<HTMLElement>('#app');

if (!app) {
  throw new Error('No se encontró el elemento con id "app"');
}

const header = new Header('Programación Web Avanzada');
const button = new Button('Guardar');
const footer = new Footer();

app.innerHTML = `
  ${header.render()}
  ${button.render()}
  ${footer.render()}
`;

document.querySelector("#saveBtn")?.addEventListener('click', () => button.onClick());
