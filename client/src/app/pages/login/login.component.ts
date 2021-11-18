import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../utils/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  pageTitle = 'CAPEP KENYA | Login';

  loginForm: FormGroup;

  submitted: boolean = false;
  successMsg: string;
  errorMsg: any;
  loading = false;
  public loadingMsg = 'Authenticating...Please wait';
  returnUrl: string;

  constructor(
    private formbuilder: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
    private title: Title,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.renderer.addClass(document.querySelector('app-root'), 'login-page');
    this.title.setTitle(this.pageTitle);
    //initialize form
    this.loginForm = this.formbuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });

    //get return url from route parameters or default to '/'
    this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    console.log('This url', this.returnUrl);
  }

  login() {
    this.errorMsg = '';
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;

    this.authService.login(this.loginForm.value).subscribe(
      (data) => {
        console.log('data', data);
        this.loading = false;
        this.router.navigate([this.returnUrl]);
        console.log('user details', this.authService.getUserDetails());
      },
      (err) => {
        this.errorMsg = err.error.reason;
        this.loading = false;
      }
    );
  }

  //get form controls
  get f() {
    return this.loginForm.controls;
  }

  /*ngOnDestroy() {
    this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
  }*/
}
