import winston from "winston";

test("create new logger", () => {
    const logger = winston.createLogger({
        level: "debug", //set level logger yg akan keluar, debug ke atas\
        // format: winston.format.json(), // format default json
        // format custon
        // format: winston.format.printf(info => {
        //     return `${new Date()} : ${info.level.toUpperCase()} : ${info.message}`;
        // }),
        handleExceptions: "true", //handle exception automatic
        handleRejections: "true", //handle rejection promise automatic
        format: winston.format.combine( //combine format timestamps, ms, json
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.json(),
        ),
        transports: [
            new winston.transports.Console({}), //transport console
            new winston.transports.File({ //transport file
                filename: "application.log"
            }), //transport console
            new winston.transports.File({ //transport file level
                level: "error",
                filename: "application-error.log"
            }) //transport console
        ]
    }); //create object logger

    // macam2 level logger
    logger.log({level: "error", message: "hello Error"});
    logger.log({level: "warn", message: "hello Warn"});
    logger.log({level: "info", message: "hello Info"});
    logger.log({level: "http", message: "hello Http"});
    logger.log({level: "verbose", message: "hello Verbose"});
    logger.log({level: "debug", message: "hello Debug"});
    logger.log({level: "silly", message: "hello Silly"});

    // shortcut level logger yg lebih singkat
    logger.error("hello Silly");
    logger.warn("hello Warn");
    logger.info("hello Info");
    logger.http("hello Http");
    logger.verbose("hello Verbose");
})