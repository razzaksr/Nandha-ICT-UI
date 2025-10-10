import { Component } from '@angular/core';
import { TechPipe } from '../pipe/tech-pipe';
import { Upgrade } from '../directives/upgrade';

@Component({
  selector: 'app-flash',
  imports: [TechPipe,Upgrade],
  templateUrl: './flash.html',
  styleUrl: './flash.css'
})
export class Flash {
  styling = {
    "backgroundColor":"black",
    "color":"white"
  }
  items = [
    {
      "Phase":"UI Design",
      "Skill":"HTML, CSS, JS"
    },
    {
      "Phase":"React JS",
      "Skill":"REact with Localstorage"
    },
    {
      "Phase":"SPA Dynamic",
      "Skill":"Angular TS Json-Server"
    }
  ] 
  hovering(){
    console.log(`table data visted`)
  }
}
