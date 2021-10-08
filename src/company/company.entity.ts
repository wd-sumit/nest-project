import { BaseEntity } from 'src/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('companies')
export class CompanyEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;
  @Column({ type: 'varchar', length: 100, nullable: true })
  description: string;
  @Column({ type: 'varchar', nullable: true, default: null })
  domain: string;
}
