import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let cookie = inject(CookieService)
  const Auth = req.clone({
    headers:req.headers.set("Authorization", `Bearer ${cookie.get("User")}`)
  })
  return next(Auth);
};
