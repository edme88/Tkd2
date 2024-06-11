/* eslint-disable */
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity("users")
export default class User{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "varchar"})
    username: string;
    @Column({type: "varchar", unique: true, length: 60})
    email: string;
    @Column({type: "varchar", length: 250})
    password: string;
}