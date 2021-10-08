import { Controller, Get } from '@nestjs/common';

@Controller('companies')
export class CompanyController {
  @Get()
  getAllCompanies(): string {
    return 'companies';
  }
}
