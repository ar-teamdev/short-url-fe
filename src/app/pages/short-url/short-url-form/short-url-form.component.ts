import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-short-url-form',
  templateUrl: './short-url-form.component.html',
  styleUrls: ['./short-url-form.component.scss']
})
export class ShortUrlFormComponent {
  public recordForm!: UntypedFormGroup;
  public submitted = false;

  constructor(
    private _formBuilder: UntypedFormBuilder,
    private _recordService: RecordService,
  ) {
  }

  ngOnInit(): void {
    this.createFrom();
  }

  createFrom(){
    this.recordForm = this._formBuilder.group({
      old_url: ['', [Validators.required]],
      new_url: ['', [Validators.required]],
    });
  }

  get f() {
    return this.recordForm.controls;
  }

  save(){
    this.submitted = true;

    if(
      this.recordForm.invalid){
     return;
    }
  }
}
