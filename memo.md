バグ
    dotenv.config()とconst=portの位置が逆だったから、console.logしてもportがunnefinedになってしまってた。コードの順序注意。

バグ
    package.jsonに "type": "module"を入れていないと、import UserModel from "./models/Users.js";がエラーになった。
    さらに、reactのフロントエンド側ならjsという文字はいらないが、入れないとエラーになる。


