import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import defaultSettings from '../../../data/defaultAppSettings';

@Component({
    selector: 'settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {
    color:string = '';

    constructor() {}

    ngOnInit() {
        this.color = defaultSettings.appColor;
    }

    onColorChange({color}) {
        this.color = color;
    }
}