import * as ROUTES from "./Routes.const"
import { POST } from '../../axios';
// Types
import type { CurrentUserInfo } from './type';

export function logout(): Promise<void> {
    return POST({ url: ROUTES.LOGOUT });
}

export function homelessPeopleCount(): Promise<CurrentUserInfo> {
    return POST({ url: ROUTES.HOMELESS_PEOPLE_COUNT });
}

