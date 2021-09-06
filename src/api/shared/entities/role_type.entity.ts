

import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, ManyToMany, JoinTable } from 'typeorm';


@Entity()
export class RoleType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

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
