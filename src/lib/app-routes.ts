export const AppRoutes = {
  ROOT: "/",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  AUTH_ERROR: "/auth/error",
  RESET_PSW: "/auth/reset",
  NEW_PSW: "/auth/new-password",
  NEW_VERIFY: "/auth/new-verification",
  SETTINGS: "/settings"
};

export const ApiRoutes = {
  AUTH: "/api/auth"
}
/**
 * An array of routes that are accessible to the public.
 * These routes do not require authentication.
 * @type {string[]}
 */
export const PUBLIC_ROUES = [AppRoutes.ROOT, AppRoutes.NEW_VERIFY];

/**
 * An array of routes that are used for authentication.
 * The login will redirect logged in users to /settings
 * @type {string[]}
 */
export const AUTH_ROUTES = [
  AppRoutes.LOGIN,
  AppRoutes.REGISTER,
  AppRoutes.AUTH_ERROR,
  AppRoutes.RESET_PSW,
  AppRoutes.NEW_PSW,
];

/**
 * The prefix for authentication routes.
 * Routes that start with this prefix are used for API authentication purposes.
 * @type {string}
 */
export const AUTH_PREFIX_API = ApiRoutes.AUTH;

/**
 * The default redirect path after logging in.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = AppRoutes.SETTINGS;
