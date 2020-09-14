import { Component } from '@angular/core';

@Component({
    selector: 'accountview',
    templateUrl: './accountview.component.html',
    styleUrls: ['./accountview.component.scss']
})
export class AccountViewComponent {
    items = [{ name: "Brijesh", thumpsUp: 7, clap: 2, gift: 2 },
    { name: "Brijesh", thumpsUp: 6, clap: 1, gift: 2 },
    { name: "Brijesh", thumpsUp: 5, clap: 2, gift: 2 },
    { name: "Brijesh", thumpsUp: 3, clap: 0, gift: 2 }]
    constructor(

    ) { }

    ngOnInit() {
    }

}
