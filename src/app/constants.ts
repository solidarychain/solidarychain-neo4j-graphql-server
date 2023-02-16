import { UserRole } from "../types";

interface IAppConstants {
  // [key: string]: string;
  // regEx: { [key: string]: RegExp; };
  // authentication: { [key: string]: Array<UserRole> };
}

export const appConstants: IAppConstants = {
  // regEx: {
  //   password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  // },
  authentication: {
    defaultAdminRole: [UserRole.RoleAdmin, UserRole.RoleUser],
    defaultUserRole: [UserRole.RoleUser]
  }
};
