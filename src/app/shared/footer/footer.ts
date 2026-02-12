import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-white dark:bg-gray-900 border-t dark:border-gray-800">
        <div class="container px-6 py-8 mx-auto flex flex-col items-center justify-between sm:flex-row">
            <a href="#" class="text-xl font-bold text-gray-800 dark:text-white">AgenciaViajes</a>
            <p class="text-sm text-gray-500 dark:text-gray-300 mt-4 sm:mt-0">© 2026 Reservados todos los derechos.</p>
        </div>
    </footer>
  `
})
export class FooterComponent {} // Este es el nombre que debes importar en app.ts