import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informer',
  templateUrl: './informer.component.html',
  styleUrls: ['./informer.component.css'],
})
export class InformerComponent implements OnInit {
  msg: string = 'System start';
  constructor() {}

  ngOnInit(): void {}
}
