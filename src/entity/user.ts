import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PostEntity } from "./post";

export interface User {
    id: number;
    name: string;
}

@Entity({ name: "User" })
export class UserEntity {
    @PrimaryGeneratedColumn()
    public id: number = 0;

    @Column()
    public name: string = "";

    @Column()
    public age: number = 0;

    @CreateDateColumn({ update: false })
    public created?: Date;

    @UpdateDateColumn({ update: false })
    public modified?: Date;

    @OneToMany(() => PostEntity, (post) => post.user)
    public posts?: PostEntity[];

    constructor(init: Partial<User>) {
        Object.assign(this, init);
    }

    toObject(): User {
        return {
            ...this,
            posts: this.posts?.map((post) => post.toObject()),
        };
    }
}
