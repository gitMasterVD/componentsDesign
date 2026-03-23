import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZivaCardComponent } from '@ziva-components';

@Component({
  selector: 'app-card-showcase',
  standalone: true,
  imports: [CommonModule, ZivaCardComponent],
  templateUrl: './card-showcase.component.html',
  styleUrls: ['./card-showcase.component.scss']
})
export class CardShowcaseComponent {}
