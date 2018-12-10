
const Koa = require("koa");
const KoaRouter = require("koa-router");
const KoaBody = require("koa-body");
const KoaLogger = require("koa-logger");
const colors = require("colors");
const fs = require("fs");
const path = require("path");

const MySQL = require("mysql2/promise");
const Bluebird = require("bluebird");

//服务端端口
const serverPort = 10241;
//最大上传文件体积
const maxUploadFileSize = 1024 * 1024 * 1024;

//#region Http中间件
    function hold200 (ctx, data, msg = "操作成功") {
        let code = 200;
        ctx.status = code;
        ctx.body = {
            code: code,
            data: data,
            msg: msg,
        };
    }
    function hold500 (ctx, msg = "服务器内部错误") {
        let code = 500;
        ctx.status = code;
        ctx.body = {
            code: code,
            msg: msg,
        };
    }
    function hold404 (ctx) {
        let code = 404;
        ctx.status = code;
        ctx.body = {
            code: code,
            msg: "资源不存在",
        };
    }
//#endregion

//#region 数据访问方法

//#endregion

//#region 业务逻辑方法
    async function b_dayStatistics (params) {
        const [rows, fields] = await db.execute(`CALL dayStatistics (?, ?, ?, ?, ?, ?)`, [
            params.myid,
            params.talker,
            params.type,
            params.keyword,
            params.start,
            params.end
        ]);
        return rows[0];
    }
//#endregion

//#region 控制器方法
    //数据库上传控制器
    async function uploadControler (ctx, next) {
        try {
            let pwd = ctx.request.body.pwd;
            let file = ctx.request.files.file;
            let fileName = `${ pwd }${ Number(new Date()) }`;
            let filePath = `./upload/${ fileName }.db`;
            let reader = fs.createReadStream(file.path);
            let stream = fs.createWriteStream(filePath);
            reader.pipe(stream);
            await migrateDB(fileName);
            hold200(ctx, {
                dbkey: fileName,
            });
        }
        catch (e) {
            console.error(e.message);
            hold500(ctx, e.message);
        }
    }

    async function dayStatisticsControler (ctx, next) {
        try {
            let params = { };
            params.myid = ctx.request.body.myid;
            params.talker = ctx.request.body.talker;
            params.type = ctx.request.body.type;
            params.keyword = ctx.request.body.keyword;
            params.start = ctx.request.body.start;
            params.end = ctx.request.body.end;
            let result = await b_dayStatistics(params);
            hold200(ctx, result);
        }
        catch (e) {
            console.error(e.message);
            hold500(ctx, e.message);
        }    
    }
//#endregion

let db = null;

//#region 主函数
    //主函数
    async function main () {
        try {
            db = await MySQL.createConnection({

            });

            let app = new Koa();
            let router = new KoaRouter();

            router.post("/api/dayStatistics", dayStatisticsControler);

            app
                .use(KoaLogger())
                .use(KoaBody({
                    multipart: true,
                    formidable: {
                        maxFileSize: maxUploadFileSize,
                    },
                }))
                .use(router.routes())
                .use(hold404);
            app.listen(serverPort);
            console.log(`服务已经启动，工作在 ${ serverPort } 端口...`.green);
        }
        catch (e) {
            console.error("服务启动失败，程序已退出".red);
            console.error(e.message);
        }
    }
//#endregion

main();