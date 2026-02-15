import { Component, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Recruitments } from './src/components/recruitments/recruitments';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('nova-mfe-recruitment');
}
