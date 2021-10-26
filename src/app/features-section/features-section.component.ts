import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.css']
})
export class FeaturesSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  copyLink(elementId:any){
    let element = document.getElementById(elementId);
    let elementText = element?.textContent!;

    this.copyText(elementText);
  }

  copyText(text:string){
    navigator.clipboard.writeText(text)
  }

}
