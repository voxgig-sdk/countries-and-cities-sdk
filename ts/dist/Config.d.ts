import { BaseFeature } from './feature/base/BaseFeature';
declare const FEATURE_PLUGINS: Record<string, any[]>;
declare class Config {
    makeFeature(this: any, fn: string): BaseFeature;
    hasFeature(this: any, fn: string): boolean;
    main: {
        name: string;
        slug: string;
        version: string;
        target: string;
    };
    feature: {
        ratelimit: {
            options: {
                active: boolean;
                burst: number;
                rate: number;
            };
            optspec: {
                now: string;
                sleep: string;
            };
            strict: boolean;
            transport: string;
        };
        retry: {
            options: {
                active: boolean;
                factor: number;
                maxDelay: number;
                minDelay: number;
                retries: number;
                statuses: number[];
            };
            optspec: {
                jitter: string;
                sleep: string;
            };
            strict: boolean;
            transport: string;
        };
        test: {
            options: {
                active: boolean;
            };
            optspec: {
                entity: string;
                net: string;
            };
            strict: boolean;
            transport: string;
        };
        timeout: {
            options: {
                active: boolean;
                ms: number;
            };
            optspec: {
                clearTimer: string;
                setTimer: string;
            };
            strict: boolean;
            transport: string;
        };
    };
    options: {
        base: string;
        headers: {
            "content-type": string;
        };
        entity: {
            city: {};
            country: {};
        };
    };
    entity: {
        city: {
            fields: ({
                name: string;
                op: {
                    create: {
                        req: boolean;
                        type: string;
                    };
                };
                short: string;
                type: string;
                req?: undefined;
            } | {
                name: string;
                type: string;
                op?: undefined;
                short?: undefined;
                req?: undefined;
            } | {
                name: string;
                req: boolean;
                type: string;
                op?: undefined;
                short?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        select: {
                            $action?: undefined;
                        };
                        transform: {
                            req: {
                                city: string;
                            };
                            res: string;
                        };
                        parts: string[];
                    } | {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        select: {
                            $action: string;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        parts: string[];
                    } | {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        select: {
                            $action?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        parts: string[];
                    })[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        parts: string[];
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        country: {
            fields: ({
                name: string;
                type: string;
                short?: undefined;
                op?: undefined;
                req?: undefined;
                format?: undefined;
            } | {
                name: string;
                short: string;
                type: string;
                op?: undefined;
                req?: undefined;
                format?: undefined;
            } | {
                name: string;
                op: {
                    create: {
                        type: string;
                    };
                    list: {
                        type: string;
                    };
                };
                req: boolean;
                short: string;
                type: string;
                format?: undefined;
            } | {
                format: string;
                name: string;
                short: string;
                type: string;
                op?: undefined;
                req?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        select: {
                            $action: string;
                        };
                        transform: {
                            req: {
                                country: string;
                            };
                            res: string;
                        };
                        parts: string[];
                    } | {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        select: {
                            $action?: undefined;
                        };
                        transform: {
                            req: {
                                country: string;
                            };
                            res: string;
                        };
                        parts: string[];
                    })[];
                };
                list: {
                    input: string;
                    name: string;
                    points: ({
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        select: {
                            $action?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        parts: string[];
                    } | {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        select: {
                            $action: string;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        parts: string[];
                    })[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
    };
}
declare const config: Config;
export { config, FEATURE_PLUGINS, };
