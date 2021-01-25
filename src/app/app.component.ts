import { Component, OnInit } from '@angular/core';
import{ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AngularLearning';
  constructor(private toastr : ToastrService){

  }
  ngOnInit(): void {
    this.showSuccess();
  }
 showSuccess(){
   this.toastr.success("Hello World","Toaster successfully");
 }
}
