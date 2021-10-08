import { Module } from '@nestjs/common';
import { CompanyController } from './companies.controller';

@Module({
  providers: [],
  controllers: [CompanyController],
})
export class CompanyModule {}
