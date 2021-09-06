

import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, ManyToMany, JoinTable } from 'typeorm';
import * as crypto from 'crypto';
import { UserRole } from './user_role.entity';
import { Role } from './role.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column()
    @ApiProperty()
    tenant_id: string;

    @Column()
    @ApiProperty()
    full_name: string;

    @Column()
    @ApiProperty()
    email_address: string;

    @Column()
    @ApiProperty()
    user_name: string;
    
    @Column({ default: 0 })
    @ApiProperty()
    user_type_id: number;

    @Column()
    @ApiProperty()
    phone_country_id: number;

    @Column()
    @ApiProperty()
    phone_number: string;

    @Column()
    @ApiProperty()
    portal_id: string;

    @BeforeInsert()
    hashPassword() {
        this.password = crypto.createHmac('sha256', this.password).digest('hex');
    }

    @Column()
    @ApiProperty()
    password: string;

    @Column({ default: true })
    @ApiProperty()
    is_active: boolean;

    @Column({ default: false })
    @ApiProperty()
    is_deleted: boolean;

    @Column()
    @ApiProperty()
    created_at: Date;

    @Column({ default: 0 })
    created_by: number;

    @Column()
    @ApiProperty()
    modified_at: Date;

    @Column({ default: 0 })
    @ApiProperty()
    modified_by: number;

    @Column()
    @ApiProperty()
    updated_ip: string;

    @ManyToMany(type => UserRole)
    @JoinTable()
    roles: Role[];



}
