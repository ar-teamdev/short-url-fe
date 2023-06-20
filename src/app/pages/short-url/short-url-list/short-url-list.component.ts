import { Component } from '@angular/core';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-short-url-list',
  templateUrl: './short-url-list.component.html',
  styleUrls: ['./short-url-list.component.scss']
})
export class ShortUrlListComponent {
  records = [];
  constructor(
    private _recordService: RecordService,
  ) {
  }

  ngOnInit(): void {

   this._recordService.getAllRecords().subscribe(res=>{
    if(res.resultCode == 20000){
      this.records = res.resultData;
    }else{
      this.records = [];
    }
   })
  }
}
