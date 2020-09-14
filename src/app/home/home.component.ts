import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    items = [{ text: 'Digital', color: 'red' },
    { text: 'Data', color: 'red' },
    { text: 'Lending', color: 'green' },
    { text: 'Deposits', color: 'yellow' },
    { text: 'Digital PWM', color: 'green' },
    { text: 'RCT', color: 'yellow' }];
    constructor(public alertController: AlertController) { }

    ngOnInit() {
        this.alertController.create({
            header: 'How was your day?',
            cssClass: 'alertClass',
            inputs: [
                {
                    type: 'checkbox',
                    label: 'Do you know what is expected today?',
                    value: 'xs'
                },
                {
                    type: 'checkbox',
                    label: 'Do you have skills to do your job?',
                    value: 'xs'
                },
                {
                    type: 'checkbox',
                    label: 'Did you get help when needed?',
                    value: 'xs'
                },
                {
                    type: 'checkbox',
                    label: 'Did you learn something?',
                    value: 'xs'
                },
                {
                    type: 'checkbox',
                    label: 'Did you feel appreciated?',
                    value: 'xs'
                },
            ],
            buttons: [
                {
                    text: 'Done!',
                    handler: (data: any) => {
                        console.log('Saved Information', data);
                    }
                }
            ]
        }).then(res => {
            res.present();
        });
    }

}
