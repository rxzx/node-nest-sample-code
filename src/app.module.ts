import { Module } from '@nestjs/common';
import { UserModule } from './api/user/user.module';
import { ProductModule } from './api/product/product.module';
import { AuthModule } from './api/auth/auth.module';
// import { DatabaseModule } from './api/shared/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { App_Config } from './api/shared/config';
@Module({
  imports: [
    AuthModule,
    UserModule,
    ProductModule,
    // DatabaseModule,
    TypeOrmModule.forRoot(App_Config),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
