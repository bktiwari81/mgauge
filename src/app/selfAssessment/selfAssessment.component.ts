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

    showAppreciationPopup = false;
    appreciationForm: FormGroup;
    constructor(public alertController: AlertController,private formBuilder: FormBuilder, public selfAssessmentService: SelfAssessmentService
    ) { }

    ngOnInit() {
        this.appreciationForm = this.formBuilder.group({
            empId: ['', Validators.required],
            action: [''],
            comment: ['']
        });
    }

    appreciateEmp(): void {
        this.showAppreciationPopup = true;
        // this.alertController.create({
        //     header: 'Appreciate Someone',
        //     cssClass: 'alertClass',
        //     inputs: [
        //         {
        //             type: 'text',
        //             label: 'Enter Employee ID',
        //             value: 'xs'
        //         },

        //         {
        //             type: 'text',
        //             label: 'Enter Employee ID',
        //             value: 'xs'
        //         }
               
        //     ],
        //     buttons: [
        //         {
        //             text: 'Submit!',
        //             handler: (data: any) => {
        //             }
        //         }
        //     ]
        // }).then(res => {
        //     res.present();
        // })

    }

    submitAppreciation(): void {
        console.log('form submitted');
        this.selfAssessmentService.notifyEmployee(this.appreciationForm.value).subscribe(data => {
            console.log(data);
        });

    }
}
