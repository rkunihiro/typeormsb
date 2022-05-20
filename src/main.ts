import { DataSource, LessThan } from "typeorm";

import { entities } from "./entity";
import { UserEntity } from "./entity/user";
import { PostEntity } from "./entity/post";

const dataSource = new DataSource({
    type: "mysql",

    url: "mysql://user:password@localhost:3306/dbname",

    entities,
    synchronize: false,
    bigNumberStrings: false,
    debug: false,
});

async function main(): Promise<void> {
    await dataSource.initialize();

    const userRepo = dataSource.getRepository<UserEntity>(UserEntity);
    const users = await userRepo.find({
        relations: {
            posts: true,
        },
        where: {
            posts: {
                id: 1,
            },
        },
        order: {
            id: "DESC",
        },
    });
    for (let user of users) {
        console.log(JSON.stringify(user.toObject(), null, 4));
    }

    const postRepo = dataSource.getRepository<PostEntity>(PostEntity);
    const posts = await postRepo.find({
        relations: {
            user: true,
        },
        where: {
            user: {
                age: LessThan(30),
            },
        },
        order: {
            id: "DESC",
        },
    });
    for (let post of posts) {
        console.log(JSON.stringify(post.toObject(), null, 4));
    }

    return dataSource.destroy();
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
