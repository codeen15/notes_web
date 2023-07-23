import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

export const NoAuthGuard = async () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (!await authService.isAuthenticated()) {
        return true;
    }

    // Redirect to the login page
    return router.navigate(['/dashboard']);
};