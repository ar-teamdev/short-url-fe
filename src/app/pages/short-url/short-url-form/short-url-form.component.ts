import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() done = new EventEmitter<any>();

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
    this._recordService.createRecords({
      ...this.recordForm.value
    }).subscribe(res=>{
      this.done.emit();
      this.submitted = false;
      this.recordForm.reset();
    })
  }

  shortUrl(){
    this.submitted = true;

    if(
      this.recordForm.invalid){
     return;
    }
    let url = "http://shorturl.com/";

    if(this.recordForm.value.old_url){
      url = url + this.random(4);
  
      this.recordForm.get("new_url")?.setValue(url);
    }
  }

  random(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
}
