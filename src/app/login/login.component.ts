import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    login(form) {
        this.router.navigate(['home'], { relativeTo: this.route });
    }
    ngOnInit() {
    }

}
