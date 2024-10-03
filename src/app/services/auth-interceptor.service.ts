import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

export class AuthInterceptorService implements HttpInterceptor {
    intercept( req: HttpRequest<any>, next: HttpHandler ) {
        console.log("Auth Interceptor Called");
        return next.handle(req);
    }

}