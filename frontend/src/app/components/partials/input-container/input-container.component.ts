import { CommonModule, NgStyle } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'input-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.css'],
})
export class InputContainerComponent {
  @Input()
  label!: string;
  @Input()
  bgColor = 'white';
}
