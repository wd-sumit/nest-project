import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  database: 'app',
  username: 'sumit',
  host: '127.0.0.1',
  port: 5432,
  password: 'sumit123',
  synchronize: true,
  entities: ['dist/**/*.entity{.js,.ts}'],
};
