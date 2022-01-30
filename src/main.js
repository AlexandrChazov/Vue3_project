import { createApp } from 'vue'
import App from './App'
import { components } from "./components/UI"; // импортируем массив UI компонентов

const app = createApp(App) // ф-ция возвращает нам экземпляр приложения

components.forEach(component => {            // пробегаем по массиву
  app.component(component.name, component)   // глобально регистрируем компоненты из массива чтобы потом не импортировать
})                                           // их в другие компоненты

app.mount('#app')
