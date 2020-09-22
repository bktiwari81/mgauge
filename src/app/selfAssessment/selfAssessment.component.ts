import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { SelfAssessmentService } from '../service/self-assessment.service';

@Component({
    selector: 'selfassessment',
    templateUrl: './selfAssessment.component.html',
    styleUrls: ['./selfAssessment.component.scss']
})
export class SelfAssessmentComponent {

    showPopup = false;
    form: FormGroup;
    constructor(public alertController: AlertController, public formBuilder: FormBuilder,
         public selfAssessmentService: SelfAssessmentService
    ) { }

    ngOnInit() {
    }


    submitAppreciation(reqObj): void {
        let req = {
            'EmpId' : reqObj[0],
            'AppreciationDescription': reqObj[3]
        };
        console.log('form submitted', req);
        this.selfAssessmentService.notifyEmployee(req).subscribe(data => {
            console.log(data);
        });

    }
    appreciateEmp(): void {
        this.showPopup = true;
        this.alertController.create({
            header: 'Appreciate Someone',
            cssClass: 'alertClass',
            inputs: [
                {
                    type: 'text',
                    label: 'Enter Employee ID',
                    value: ''
                },
                {
                    type: 'radio',
                    label: 'Appreciation',
                    value: 'appreciation'
                },
                {
                    type: 'radio',
                    label: 'Applause',
                    value: 'applause'
                },
                {
                    type: 'textarea',
                    label: 'Comments',
                    value: 'comments'
                }
            ],
            buttons: [
                {
                    text: 'Submit',
                    handler: (data: any) => {
                        console.log('Submit form', data);
                        this.submitAppreciation(data)

                    }
                }
            ]
        }).then(res => {
            console.log(res)
            res.present();
        });
    }

}
