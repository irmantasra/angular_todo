import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from "../data.service";

@Component({
    selector: 'settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {
    color:string;

    constructor(private data: DataService) {}

    ngOnInit() {
        this.data.color.subscribe(color => this.color = color);
    }

    onColorChange({color}) {
        this.data.changeColor(color.hex);
    }
}