import { Component, OnInit,EventEmitter, Output,OnChanges,Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
  
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter <string> = new EventEmitter<string>();

  
  
  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
}

  constructor() { }

  onClick(){
    this.ratingClicked.emit(": This Product Have "+this.rating+" Rate");
    console.log(this.rating +" was Clicked")
  }


}
