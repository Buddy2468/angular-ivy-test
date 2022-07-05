import { Component, OnInit ,Input} from '@angular/core';
import { Heroclass } from '../heroclass'
@Component({
  selector: 'app-herodetails',
  templateUrl: './herodetails.component.html',
  styleUrls: ['./herodetails.component.css']
})
export class HerodetailsComponent implements OnInit {
  @Input() hero?:Heroclass;
  constructor() { }

  ngOnInit() {
  }

}