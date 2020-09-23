import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { SelfAssessmentService } from '../service/self-assessment.service';
import { AppreciationPopupComponent } from 'src/app/appreciation-popup/appreciation-popup.component';

@Component({
    selector: 'selfassessment',
    templateUrl: './selfAssessment.component.html',
    styleUrls: ['./selfAssessment.component.scss']
})
export class SelfAssessmentComponent {
    showPopup = false;
    form: FormGroup;
    constructor(public alertController: AlertController, public formBuilder: FormBuilder,
         public selfAssessmentService: SelfAssessmentService, public modalController: ModalController
            ) { }

    ngOnInit() {
    }

    async openModal() {
        const modal = await this.modalController.create({
          component: AppreciationPopupComponent,
        //   componentProps: {
        //     "paramID": 123,
        //     "paramTitle": "Test Title"
        //   }
        });
    
        modal.onDidDismiss().then((dataReturned) => {
          if (dataReturned !== null) {
            // this.dataReturned = dataReturned.data;
            //alert('Modal Sent Data :'+ dataReturned);
          }
        });
    
        return await modal.present();
      }


    submitAppreciation(reqObj): void {
        

    }
    appreciateEmp(): void {
        this.showPopup = true;
        // this.openModal();
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