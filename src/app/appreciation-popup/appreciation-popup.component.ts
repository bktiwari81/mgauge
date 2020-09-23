import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appreciation-popup',
  templateUrl: './appreciation-popup.component.html',
  styleUrls: ['./appreciation-popup.component.scss'],
})
export class AppreciationPopupComponent implements OnInit {

  form:  FormGroup;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      empId : [''],
      action: [''],
      comment: ['']
    });
  }
  submitAppreciation(): void {
    console.log('form data: ', this.form.value);
    // let headers = new HttpHeaders()
    //     .set('EmpId', reqObj[0]);
    //     console.log('form submitted');
    //     this.selfAssessmentService.notifyEmployee(headers, reqObj[3]).subscribe(data => {
    //         console.log(data);
    //     });
  }

}
