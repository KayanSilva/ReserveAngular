import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { PlataformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(private formBuider: FormBuilder,
                private authService: AuthService,
                private router: Router,
                private platFormDetectorService: PlataformDetectorService) {

    }
    ngOnInit(): void {
        this.loginForm = this.formBuider.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.authService
            .authenticate(userName, password)
            .subscribe(() => {
                this.router.navigate(['user', userName]);
            },
                (err) => {
                    console.log(err);
                    this.loginForm.reset();
                    this.platFormDetectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();
                    alert('Invalid user name or password');
                });
    }
}