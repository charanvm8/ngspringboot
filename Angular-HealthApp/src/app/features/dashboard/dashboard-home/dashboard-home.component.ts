import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { ApiHttpService } from 'src/app/core/services/api-http.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  currentUser: any;
  displayedColumns: string[] = ['date', 'startTime', 'endTime'];
  transfers:any = [];
  showAppointments = false;
  showAppointment = true;
  date = "";
  startTime = "";
  endTime = "";
  status = "";
  notes = "";
  providers:any = [];
  userSerached = false;
  userId:any = null;
  userLoggedIn = false;

  constructor(private notificationService: NotificationService,
    private authService: AuthenticationService,
    private titleService: Title,
    private logger: NGXLogger,
    private httpService: ApiHttpService) {
  }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.titleService.setTitle('angular-material-template - Dashboard');
    this.logger.log('Dashboard loaded');
    setTimeout(() => {
      this.notificationService.openSnackBar('Welcome!');
    });
  }

  getUserAppointments() {
    this.showAppointments = true;
    this.showAppointment = false;
    this.httpService.post("http://localhost:8080/api/userappointments", {"userId": 1}).subscribe((data:any)=>{
      console.log(data.appointments);
      this.transfers = data.appointments;
      //this.dataSource = data.appointments;
    });

  }

  getAppointment(transfer:any) {
    this.showAppointments = false;
    this.showAppointment = true;
    this.httpService.post("http://localhost:8080/api/appointment", {"appointmentId": transfer.appointmentId}).subscribe((data:any)=>{
      this.date = data.date;
      this.startTime = data.startTime;
      this.endTime = data.endTime;
      this.status = data.status;
      this.notes = data.notes;
    });
  }

  searchProvider(value:any) {
    this.httpService.post("http://localhost:8080/api/providers", {"zipCode": value}).subscribe((data:any)=>{
      console.log(data.providers);
      this.providers = data.providers;
      this.userSerached = true;
      //this.dataSource = data.appointments;
    });
  }

  showAllAppointments() {
    this.showAppointments = true;
    this.showAppointment = false;
  }

  login(userName:any , password:any) {
    this.userLoggedIn = true;
    this.userId = 1;
    this.getUserAppointments();
  }
}
