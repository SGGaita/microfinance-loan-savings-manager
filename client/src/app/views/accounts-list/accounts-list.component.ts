import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GroupService } from 'src/app/utils/group.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss'],
})
export class AccountsListComponent implements OnInit {
  pageTitle = 'Accounts Manager : CAPEP KENYA';
  groups: any;
  count: any;

  p: number = 1;

  constructor(
    private title: Title,
    private groupService: GroupService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    //set title
    this.title.setTitle(this.pageTitle);
  
    //fetch groups
     //load spinner when data is empty
     this.spinner.show();
    this.groupService.getAllGroups().subscribe((data) => {
      this.count = data.count;
      this.groups = data.groups;
      this.spinner.hide();
      //console.log(data)
    });
  }
}
