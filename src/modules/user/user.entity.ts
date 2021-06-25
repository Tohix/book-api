import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BeforeInsert,
    CreateDateColumn,
    UpdateDateColumn, DeleteDateColumn
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import {IsUnique} from '../../validation/is-unique.validator';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    first_name: string;

    @Column({nullable: true})
    last_name: string;

    @IsUnique(
        { table: "users", column: "email" },
        { message: "Email $value already exists", groups: ['create'] }
    )
    @Column()
    email: string;

    @Column({nullable: true})
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;

    @BeforeInsert()
    async hashPassword() {
        const saltOrRounds = 10;
        const password = this.password;
        this.password = await bcrypt.hash(password, saltOrRounds);
    }

    async checkPassword(plainPassword: string): Promise<boolean> {
        return await bcrypt.compare(plainPassword, this.password);
    }
}