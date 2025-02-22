import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
} from 'typeorm';   

import { User } from './user.entity';

import { Role, UserAccountStatus } from 'src/common/types'; 
  
@Entity()
export class Team {
  
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
    
    @Column()
    description: string;
    
    @Column()
    privacy: string;

    @Column({ default: UserAccountStatus.pending })
    status: UserAccountStatus;
    
    @OneToMany(() => User, (users) => users.teams,  {eager: true})
    users: User[];

    @Column({ default: '' })
    firstname: string;
    
    @Column({ default: '' })
    lastname: string;
    
    @Column({ type: 'varchar', default: [Role.user], array: true })
    roles: Role[];
    
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;    
}