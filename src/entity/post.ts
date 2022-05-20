import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { UserEntity } from "./user";

@Entity({ name: "Post" })
export class PostEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    public id: number = 0;

    @Column()
    public title: string = "";

    @Column({ name: "autherId", type: "int" })
    public autherId: number = 0;

    @ManyToOne(() => UserEntity, (user) => user.posts)
    @JoinColumn({ name: "autherId" })
    public user?: UserEntity;

    @CreateDateColumn({ update: false })
    public created?: Date;

    @UpdateDateColumn({ update: false })
    public modified?: Date;

    public toObject() {
        return {
            ...this,
            user: this.user?.toObject(),
        };
    }
}
