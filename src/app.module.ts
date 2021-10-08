import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/companies.module';
import { config } from './orm.config';

@Module({
  imports: [TypeOrmModule.forRoot(config), CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
