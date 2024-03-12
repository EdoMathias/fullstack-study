import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DetailsComponent } from '../../resume-area/details/details.component';
import { SkillsComponent } from '../../resume-area/skills/skills.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, DetailsComponent, SkillsComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
