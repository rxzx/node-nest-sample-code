import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User, Role, UserRole, Navigation, RoleNavigation, Attachment, Tenant } from "../entities";


export const App_Config:TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'TestDB',
    entities: [
        User,
        Role,
        UserRole,
        Navigation,
        RoleNavigation,
        Attachment,
        Tenant
    ],
    synchronize: true,
}