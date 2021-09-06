

import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';


@Entity()
export class RoleNavigation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    role_id: string;

    @Column()
    navigation_id: string;

    @Column({ default: true })
    is_active: boolean;

    @Column({ default: false })
    is_deleted: boolean;

    @Column()
    created_at: Date;

    @Column({ default: 0 })
    created_by: number;

    @Column()
    modified_at: Date;

    @Column({ default: 0 })
    modified_by: number;

    @Column()
    updated_ip: string;


}
