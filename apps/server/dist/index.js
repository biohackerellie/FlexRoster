// @bun
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@ioredis+commands@1.2.0/node_modules/@ioredis/commands/built/commands.json
var require_commands = __commonJS((exports, module) => {
  module.exports = {
    acl: {
      arity: -2,
      flags: [],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    append: {
      arity: 3,
      flags: [
        "write",
        "denyoom",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    asking: {
      arity: 1,
      flags: [
        "fast"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    auth: {
      arity: -2,
      flags: [
        "noscript",
        "loading",
        "stale",
        "fast",
        "no_auth",
        "allow_busy"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    bgrewriteaof: {
      arity: 1,
      flags: [
        "admin",
        "noscript",
        "no_async_loading"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    bgsave: {
      arity: -1,
      flags: [
        "admin",
        "noscript",
        "no_async_loading"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    bitcount: {
      arity: -2,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    bitfield: {
      arity: -2,
      flags: [
        "write",
        "denyoom"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    bitfield_ro: {
      arity: -2,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    bitop: {
      arity: -4,
      flags: [
        "write",
        "denyoom"
      ],
      keyStart: 2,
      keyStop: -1,
      step: 1
    },
    bitpos: {
      arity: -3,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    blmove: {
      arity: 6,
      flags: [
        "write",
        "denyoom",
        "noscript",
        "blocking"
      ],
      keyStart: 1,
      keyStop: 2,
      step: 1
    },
    blmpop: {
      arity: -5,
      flags: [
        "write",
        "blocking",
        "movablekeys"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    blpop: {
      arity: -3,
      flags: [
        "write",
        "noscript",
        "blocking"
      ],
      keyStart: 1,
      keyStop: -2,
      step: 1
    },
    brpop: {
      arity: -3,
      flags: [
        "write",
        "noscript",
        "blocking"
      ],
      keyStart: 1,
      keyStop: -2,
      step: 1
    },
    brpoplpush: {
      arity: 4,
      flags: [
        "write",
        "denyoom",
        "noscript",
        "blocking"
      ],
      keyStart: 1,
      keyStop: 2,
      step: 1
    },
    bzmpop: {
      arity: -5,
      flags: [
        "write",
        "blocking",
        "movablekeys"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    bzpopmax: {
      arity: -3,
      flags: [
        "write",
        "noscript",
        "blocking",
        "fast"
      ],
      keyStart: 1,
      keyStop: -2,
      step: 1
    },
    bzpopmin: {
      arity: -3,
      flags: [
        "write",
        "noscript",
        "blocking",
        "fast"
      ],
      keyStart: 1,
      keyStop: -2,
      step: 1
    },
    client: {
      arity: -2,
      flags: [],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    cluster: {
      arity: -2,
      flags: [],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    command: {
      arity: -1,
      flags: [
        "loading",
        "stale"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    config: {
      arity: -2,
      flags: [],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    copy: {
      arity: -3,
      flags: [
        "write",
        "denyoom"
      ],
      keyStart: 1,
      keyStop: 2,
      step: 1
    },
    dbsize: {
      arity: 1,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    debug: {
      arity: -2,
      flags: [
        "admin",
        "noscript",
        "loading",
        "stale"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    decr: {
      arity: 2,
      flags: [
        "write",
        "denyoom",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    decrby: {
      arity: 3,
      flags: [
        "write",
        "denyoom",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    del: {
      arity: -2,
      flags: [
        "write"
      ],
      keyStart: 1,
      keyStop: -1,
      step: 1
    },
    discard: {
      arity: 1,
      flags: [
        "noscript",
        "loading",
        "stale",
        "fast",
        "allow_busy"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    dump: {
      arity: 2,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    echo: {
      arity: 2,
      flags: [
        "fast"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    eval: {
      arity: -3,
      flags: [
        "noscript",
        "stale",
        "skip_monitor",
        "no_mandatory_keys",
        "movablekeys"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    eval_ro: {
      arity: -3,
      flags: [
        "readonly",
        "noscript",
        "stale",
        "skip_monitor",
        "no_mandatory_keys",
        "movablekeys"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    evalsha: {
      arity: -3,
      flags: [
        "noscript",
        "stale",
        "skip_monitor",
        "no_mandatory_keys",
        "movablekeys"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    evalsha_ro: {
      arity: -3,
      flags: [
        "readonly",
        "noscript",
        "stale",
        "skip_monitor",
        "no_mandatory_keys",
        "movablekeys"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    exec: {
      arity: 1,
      flags: [
        "noscript",
        "loading",
        "stale",
        "skip_slowlog"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    exists: {
      arity: -2,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: -1,
      step: 1
    },
    expire: {
      arity: -3,
      flags: [
        "write",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    expireat: {
      arity: -3,
      flags: [
        "write",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    expiretime: {
      arity: 2,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    failover: {
      arity: -1,
      flags: [
        "admin",
        "noscript",
        "stale"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    fcall: {
      arity: -3,
      flags: [
        "noscript",
        "stale",
        "skip_monitor",
        "no_mandatory_keys",
        "movablekeys"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    fcall_ro: {
      arity: -3,
      flags: [
        "readonly",
        "noscript",
        "stale",
        "skip_monitor",
        "no_mandatory_keys",
        "movablekeys"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    flushall: {
      arity: -1,
      flags: [
        "write"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    flushdb: {
      arity: -1,
      flags: [
        "write"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    function: {
      arity: -2,
      flags: [],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    geoadd: {
      arity: -5,
      flags: [
        "write",
        "denyoom"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    geodist: {
      arity: -4,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    geohash: {
      arity: -2,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    geopos: {
      arity: -2,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    georadius: {
      arity: -6,
      flags: [
        "write",
        "denyoom",
        "movablekeys"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    georadius_ro: {
      arity: -6,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    georadiusbymember: {
      arity: -5,
      flags: [
        "write",
        "denyoom",
        "movablekeys"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    georadiusbymember_ro: {
      arity: -5,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    geosearch: {
      arity: -7,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    geosearchstore: {
      arity: -8,
      flags: [
        "write",
        "denyoom"
      ],
      keyStart: 1,
      keyStop: 2,
      step: 1
    },
    get: {
      arity: 2,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    getbit: {
      arity: 3,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    getdel: {
      arity: 2,
      flags: [
        "write",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    getex: {
      arity: -2,
      flags: [
        "write",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    getrange: {
      arity: 4,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    getset: {
      arity: 3,
      flags: [
        "write",
        "denyoom",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    hdel: {
      arity: -3,
      flags: [
        "write",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    hello: {
      arity: -1,
      flags: [
        "noscript",
        "loading",
        "stale",
        "fast",
        "no_auth",
        "allow_busy"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    hexists: {
      arity: 3,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    hget: {
      arity: 3,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    hgetall: {
      arity: 2,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    hincrby: {
      arity: 4,
      flags: [
        "write",
        "denyoom",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    hincrbyfloat: {
      arity: 4,
      flags: [
        "write",
        "denyoom",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    hkeys: {
      arity: 2,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    hlen: {
      arity: 2,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    hmget: {
      arity: -3,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    hmset: {
      arity: -4,
      flags: [
        "write",
        "denyoom",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    hrandfield: {
      arity: -2,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    hscan: {
      arity: -3,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    hset: {
      arity: -4,
      flags: [
        "write",
        "denyoom",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    hsetnx: {
      arity: 4,
      flags: [
        "write",
        "denyoom",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    hstrlen: {
      arity: 3,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    hvals: {
      arity: 2,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    incr: {
      arity: 2,
      flags: [
        "write",
        "denyoom",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    incrby: {
      arity: 3,
      flags: [
        "write",
        "denyoom",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    incrbyfloat: {
      arity: 3,
      flags: [
        "write",
        "denyoom",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    info: {
      arity: -1,
      flags: [
        "loading",
        "stale"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    keys: {
      arity: 2,
      flags: [
        "readonly"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    lastsave: {
      arity: 1,
      flags: [
        "loading",
        "stale",
        "fast"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    latency: {
      arity: -2,
      flags: [],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    lcs: {
      arity: -3,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 2,
      step: 1
    },
    lindex: {
      arity: 3,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    linsert: {
      arity: 5,
      flags: [
        "write",
        "denyoom"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    llen: {
      arity: 2,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    lmove: {
      arity: 5,
      flags: [
        "write",
        "denyoom"
      ],
      keyStart: 1,
      keyStop: 2,
      step: 1
    },
    lmpop: {
      arity: -4,
      flags: [
        "write",
        "movablekeys"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    lolwut: {
      arity: -1,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    lpop: {
      arity: -2,
      flags: [
        "write",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    lpos: {
      arity: -3,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    lpush: {
      arity: -3,
      flags: [
        "write",
        "denyoom",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    lpushx: {
      arity: -3,
      flags: [
        "write",
        "denyoom",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    lrange: {
      arity: 4,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    lrem: {
      arity: 4,
      flags: [
        "write"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    lset: {
      arity: 4,
      flags: [
        "write",
        "denyoom"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    ltrim: {
      arity: 4,
      flags: [
        "write"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    memory: {
      arity: -2,
      flags: [],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    mget: {
      arity: -2,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: -1,
      step: 1
    },
    migrate: {
      arity: -6,
      flags: [
        "write",
        "movablekeys"
      ],
      keyStart: 3,
      keyStop: 3,
      step: 1
    },
    module: {
      arity: -2,
      flags: [],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    monitor: {
      arity: 1,
      flags: [
        "admin",
        "noscript",
        "loading",
        "stale"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    move: {
      arity: 3,
      flags: [
        "write",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    mset: {
      arity: -3,
      flags: [
        "write",
        "denyoom"
      ],
      keyStart: 1,
      keyStop: -1,
      step: 2
    },
    msetnx: {
      arity: -3,
      flags: [
        "write",
        "denyoom"
      ],
      keyStart: 1,
      keyStop: -1,
      step: 2
    },
    multi: {
      arity: 1,
      flags: [
        "noscript",
        "loading",
        "stale",
        "fast",
        "allow_busy"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    object: {
      arity: -2,
      flags: [],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    persist: {
      arity: 2,
      flags: [
        "write",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    pexpire: {
      arity: -3,
      flags: [
        "write",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    pexpireat: {
      arity: -3,
      flags: [
        "write",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    pexpiretime: {
      arity: 2,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    pfadd: {
      arity: -2,
      flags: [
        "write",
        "denyoom",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    pfcount: {
      arity: -2,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: -1,
      step: 1
    },
    pfdebug: {
      arity: 3,
      flags: [
        "write",
        "denyoom",
        "admin"
      ],
      keyStart: 2,
      keyStop: 2,
      step: 1
    },
    pfmerge: {
      arity: -2,
      flags: [
        "write",
        "denyoom"
      ],
      keyStart: 1,
      keyStop: -1,
      step: 1
    },
    pfselftest: {
      arity: 1,
      flags: [
        "admin"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    ping: {
      arity: -1,
      flags: [
        "fast"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    psetex: {
      arity: 4,
      flags: [
        "write",
        "denyoom"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    psubscribe: {
      arity: -2,
      flags: [
        "pubsub",
        "noscript",
        "loading",
        "stale"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    psync: {
      arity: -3,
      flags: [
        "admin",
        "noscript",
        "no_async_loading",
        "no_multi"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    pttl: {
      arity: 2,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    publish: {
      arity: 3,
      flags: [
        "pubsub",
        "loading",
        "stale",
        "fast"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    pubsub: {
      arity: -2,
      flags: [],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    punsubscribe: {
      arity: -1,
      flags: [
        "pubsub",
        "noscript",
        "loading",
        "stale"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    quit: {
      arity: -1,
      flags: [
        "noscript",
        "loading",
        "stale",
        "fast",
        "no_auth",
        "allow_busy"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    randomkey: {
      arity: 1,
      flags: [
        "readonly"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    readonly: {
      arity: 1,
      flags: [
        "loading",
        "stale",
        "fast"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    readwrite: {
      arity: 1,
      flags: [
        "loading",
        "stale",
        "fast"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    rename: {
      arity: 3,
      flags: [
        "write"
      ],
      keyStart: 1,
      keyStop: 2,
      step: 1
    },
    renamenx: {
      arity: 3,
      flags: [
        "write",
        "fast"
      ],
      keyStart: 1,
      keyStop: 2,
      step: 1
    },
    replconf: {
      arity: -1,
      flags: [
        "admin",
        "noscript",
        "loading",
        "stale",
        "allow_busy"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    replicaof: {
      arity: 3,
      flags: [
        "admin",
        "noscript",
        "stale",
        "no_async_loading"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    reset: {
      arity: 1,
      flags: [
        "noscript",
        "loading",
        "stale",
        "fast",
        "no_auth",
        "allow_busy"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    restore: {
      arity: -4,
      flags: [
        "write",
        "denyoom"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    "restore-asking": {
      arity: -4,
      flags: [
        "write",
        "denyoom",
        "asking"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    role: {
      arity: 1,
      flags: [
        "noscript",
        "loading",
        "stale",
        "fast"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    rpop: {
      arity: -2,
      flags: [
        "write",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    rpoplpush: {
      arity: 3,
      flags: [
        "write",
        "denyoom"
      ],
      keyStart: 1,
      keyStop: 2,
      step: 1
    },
    rpush: {
      arity: -3,
      flags: [
        "write",
        "denyoom",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    rpushx: {
      arity: -3,
      flags: [
        "write",
        "denyoom",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    sadd: {
      arity: -3,
      flags: [
        "write",
        "denyoom",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    save: {
      arity: 1,
      flags: [
        "admin",
        "noscript",
        "no_async_loading",
        "no_multi"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    scan: {
      arity: -2,
      flags: [
        "readonly"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    scard: {
      arity: 2,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    script: {
      arity: -2,
      flags: [],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    sdiff: {
      arity: -2,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: -1,
      step: 1
    },
    sdiffstore: {
      arity: -3,
      flags: [
        "write",
        "denyoom"
      ],
      keyStart: 1,
      keyStop: -1,
      step: 1
    },
    select: {
      arity: 2,
      flags: [
        "loading",
        "stale",
        "fast"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    set: {
      arity: -3,
      flags: [
        "write",
        "denyoom"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    setbit: {
      arity: 4,
      flags: [
        "write",
        "denyoom"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    setex: {
      arity: 4,
      flags: [
        "write",
        "denyoom"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    setnx: {
      arity: 3,
      flags: [
        "write",
        "denyoom",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    setrange: {
      arity: 4,
      flags: [
        "write",
        "denyoom"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    shutdown: {
      arity: -1,
      flags: [
        "admin",
        "noscript",
        "loading",
        "stale",
        "no_multi",
        "allow_busy"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    sinter: {
      arity: -2,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: -1,
      step: 1
    },
    sintercard: {
      arity: -3,
      flags: [
        "readonly",
        "movablekeys"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    sinterstore: {
      arity: -3,
      flags: [
        "write",
        "denyoom"
      ],
      keyStart: 1,
      keyStop: -1,
      step: 1
    },
    sismember: {
      arity: 3,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    slaveof: {
      arity: 3,
      flags: [
        "admin",
        "noscript",
        "stale",
        "no_async_loading"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    slowlog: {
      arity: -2,
      flags: [],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    smembers: {
      arity: 2,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    smismember: {
      arity: -3,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    smove: {
      arity: 4,
      flags: [
        "write",
        "fast"
      ],
      keyStart: 1,
      keyStop: 2,
      step: 1
    },
    sort: {
      arity: -2,
      flags: [
        "write",
        "denyoom",
        "movablekeys"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    sort_ro: {
      arity: -2,
      flags: [
        "readonly",
        "movablekeys"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    spop: {
      arity: -2,
      flags: [
        "write",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    spublish: {
      arity: 3,
      flags: [
        "pubsub",
        "loading",
        "stale",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    srandmember: {
      arity: -2,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    srem: {
      arity: -3,
      flags: [
        "write",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    sscan: {
      arity: -3,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    ssubscribe: {
      arity: -2,
      flags: [
        "pubsub",
        "noscript",
        "loading",
        "stale"
      ],
      keyStart: 1,
      keyStop: -1,
      step: 1
    },
    strlen: {
      arity: 2,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    subscribe: {
      arity: -2,
      flags: [
        "pubsub",
        "noscript",
        "loading",
        "stale"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    substr: {
      arity: 4,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    sunion: {
      arity: -2,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: -1,
      step: 1
    },
    sunionstore: {
      arity: -3,
      flags: [
        "write",
        "denyoom"
      ],
      keyStart: 1,
      keyStop: -1,
      step: 1
    },
    sunsubscribe: {
      arity: -1,
      flags: [
        "pubsub",
        "noscript",
        "loading",
        "stale"
      ],
      keyStart: 1,
      keyStop: -1,
      step: 1
    },
    swapdb: {
      arity: 3,
      flags: [
        "write",
        "fast"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    sync: {
      arity: 1,
      flags: [
        "admin",
        "noscript",
        "no_async_loading",
        "no_multi"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    time: {
      arity: 1,
      flags: [
        "loading",
        "stale",
        "fast"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    touch: {
      arity: -2,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: -1,
      step: 1
    },
    ttl: {
      arity: 2,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    type: {
      arity: 2,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    unlink: {
      arity: -2,
      flags: [
        "write",
        "fast"
      ],
      keyStart: 1,
      keyStop: -1,
      step: 1
    },
    unsubscribe: {
      arity: -1,
      flags: [
        "pubsub",
        "noscript",
        "loading",
        "stale"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    unwatch: {
      arity: 1,
      flags: [
        "noscript",
        "loading",
        "stale",
        "fast",
        "allow_busy"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    wait: {
      arity: 3,
      flags: [
        "noscript"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    watch: {
      arity: -2,
      flags: [
        "noscript",
        "loading",
        "stale",
        "fast",
        "allow_busy"
      ],
      keyStart: 1,
      keyStop: -1,
      step: 1
    },
    xack: {
      arity: -4,
      flags: [
        "write",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    xadd: {
      arity: -5,
      flags: [
        "write",
        "denyoom",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    xautoclaim: {
      arity: -6,
      flags: [
        "write",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    xclaim: {
      arity: -6,
      flags: [
        "write",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    xdel: {
      arity: -3,
      flags: [
        "write",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    xgroup: {
      arity: -2,
      flags: [],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    xinfo: {
      arity: -2,
      flags: [],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    xlen: {
      arity: 2,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    xpending: {
      arity: -3,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    xrange: {
      arity: -4,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    xread: {
      arity: -4,
      flags: [
        "readonly",
        "blocking",
        "movablekeys"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    xreadgroup: {
      arity: -7,
      flags: [
        "write",
        "blocking",
        "movablekeys"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    xrevrange: {
      arity: -4,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    xsetid: {
      arity: -3,
      flags: [
        "write",
        "denyoom",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    xtrim: {
      arity: -4,
      flags: [
        "write"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zadd: {
      arity: -4,
      flags: [
        "write",
        "denyoom",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zcard: {
      arity: 2,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zcount: {
      arity: 4,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zdiff: {
      arity: -3,
      flags: [
        "readonly",
        "movablekeys"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    zdiffstore: {
      arity: -4,
      flags: [
        "write",
        "denyoom",
        "movablekeys"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zincrby: {
      arity: 4,
      flags: [
        "write",
        "denyoom",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zinter: {
      arity: -3,
      flags: [
        "readonly",
        "movablekeys"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    zintercard: {
      arity: -3,
      flags: [
        "readonly",
        "movablekeys"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    zinterstore: {
      arity: -4,
      flags: [
        "write",
        "denyoom",
        "movablekeys"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zlexcount: {
      arity: 4,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zmpop: {
      arity: -4,
      flags: [
        "write",
        "movablekeys"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    zmscore: {
      arity: -3,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zpopmax: {
      arity: -2,
      flags: [
        "write",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zpopmin: {
      arity: -2,
      flags: [
        "write",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zrandmember: {
      arity: -2,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zrange: {
      arity: -4,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zrangebylex: {
      arity: -4,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zrangebyscore: {
      arity: -4,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zrangestore: {
      arity: -5,
      flags: [
        "write",
        "denyoom"
      ],
      keyStart: 1,
      keyStop: 2,
      step: 1
    },
    zrank: {
      arity: 3,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zrem: {
      arity: -3,
      flags: [
        "write",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zremrangebylex: {
      arity: 4,
      flags: [
        "write"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zremrangebyrank: {
      arity: 4,
      flags: [
        "write"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zremrangebyscore: {
      arity: 4,
      flags: [
        "write"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zrevrange: {
      arity: -4,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zrevrangebylex: {
      arity: -4,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zrevrangebyscore: {
      arity: -4,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zrevrank: {
      arity: 3,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zscan: {
      arity: -3,
      flags: [
        "readonly"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zscore: {
      arity: 3,
      flags: [
        "readonly",
        "fast"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    },
    zunion: {
      arity: -3,
      flags: [
        "readonly",
        "movablekeys"
      ],
      keyStart: 0,
      keyStop: 0,
      step: 0
    },
    zunionstore: {
      arity: -4,
      flags: [
        "write",
        "denyoom",
        "movablekeys"
      ],
      keyStart: 1,
      keyStop: 1,
      step: 1
    }
  };
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/@ioredis/commands/built/index.js
var require_built = __commonJS((exports) => {
  var exists2 = function(commandName) {
    return Boolean(commands_json_1.default[commandName]);
  };
  var hasFlag = function(commandName, flag) {
    if (!flags[commandName]) {
      throw new Error("Unknown command " + commandName);
    }
    return Boolean(flags[commandName][flag]);
  };
  var getKeyIndexes = function(commandName, args, options) {
    const command = commands_json_1.default[commandName];
    if (!command) {
      throw new Error("Unknown command " + commandName);
    }
    if (!Array.isArray(args)) {
      throw new Error("Expect args to be an array");
    }
    const keys = [];
    const parseExternalKey = Boolean(options && options.parseExternalKey);
    const takeDynamicKeys = (args2, startIndex) => {
      const keys2 = [];
      const keyStop = Number(args2[startIndex]);
      for (let i = 0;i < keyStop; i++) {
        keys2.push(i + startIndex + 1);
      }
      return keys2;
    };
    const takeKeyAfterToken = (args2, startIndex, token) => {
      for (let i = startIndex;i < args2.length - 1; i += 1) {
        if (String(args2[i]).toLowerCase() === token.toLowerCase()) {
          return i + 1;
        }
      }
      return null;
    };
    switch (commandName) {
      case "zunionstore":
      case "zinterstore":
      case "zdiffstore":
        keys.push(0, ...takeDynamicKeys(args, 1));
        break;
      case "eval":
      case "evalsha":
      case "eval_ro":
      case "evalsha_ro":
      case "fcall":
      case "fcall_ro":
      case "blmpop":
      case "bzmpop":
        keys.push(...takeDynamicKeys(args, 1));
        break;
      case "sintercard":
      case "lmpop":
      case "zunion":
      case "zinter":
      case "zmpop":
      case "zintercard":
      case "zdiff": {
        keys.push(...takeDynamicKeys(args, 0));
        break;
      }
      case "georadius": {
        keys.push(0);
        const storeKey = takeKeyAfterToken(args, 5, "STORE");
        if (storeKey)
          keys.push(storeKey);
        const distKey = takeKeyAfterToken(args, 5, "STOREDIST");
        if (distKey)
          keys.push(distKey);
        break;
      }
      case "georadiusbymember": {
        keys.push(0);
        const storeKey = takeKeyAfterToken(args, 4, "STORE");
        if (storeKey)
          keys.push(storeKey);
        const distKey = takeKeyAfterToken(args, 4, "STOREDIST");
        if (distKey)
          keys.push(distKey);
        break;
      }
      case "sort":
      case "sort_ro":
        keys.push(0);
        for (let i = 1;i < args.length - 1; i++) {
          let arg = args[i];
          if (typeof arg !== "string") {
            continue;
          }
          const directive = arg.toUpperCase();
          if (directive === "GET") {
            i += 1;
            arg = args[i];
            if (arg !== "#") {
              if (parseExternalKey) {
                keys.push([i, getExternalKeyNameLength(arg)]);
              } else {
                keys.push(i);
              }
            }
          } else if (directive === "BY") {
            i += 1;
            if (parseExternalKey) {
              keys.push([i, getExternalKeyNameLength(args[i])]);
            } else {
              keys.push(i);
            }
          } else if (directive === "STORE") {
            i += 1;
            keys.push(i);
          }
        }
        break;
      case "migrate":
        if (args[2] === "") {
          for (let i = 5;i < args.length - 1; i++) {
            const arg = args[i];
            if (typeof arg === "string" && arg.toUpperCase() === "KEYS") {
              for (let j = i + 1;j < args.length; j++) {
                keys.push(j);
              }
              break;
            }
          }
        } else {
          keys.push(2);
        }
        break;
      case "xreadgroup":
      case "xread":
        for (let i = commandName === "xread" ? 0 : 3;i < args.length - 1; i++) {
          if (String(args[i]).toUpperCase() === "STREAMS") {
            for (let j = i + 1;j <= i + (args.length - 1 - i) / 2; j++) {
              keys.push(j);
            }
            break;
          }
        }
        break;
      default:
        if (command.step > 0) {
          const keyStart = command.keyStart - 1;
          const keyStop = command.keyStop > 0 ? command.keyStop : args.length + command.keyStop + 1;
          for (let i = keyStart;i < keyStop; i += command.step) {
            keys.push(i);
          }
        }
        break;
    }
    return keys;
  };
  var getExternalKeyNameLength = function(key) {
    if (typeof key !== "string") {
      key = String(key);
    }
    const hashPos = key.indexOf("->");
    return hashPos === -1 ? key.length : hashPos;
  };
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getKeyIndexes = exports.hasFlag = exports.exists = exports.list = undefined;
  var commands_json_1 = __importDefault(require_commands());
  exports.list = Object.keys(commands_json_1.default);
  var flags = {};
  exports.list.forEach((commandName) => {
    flags[commandName] = commands_json_1.default[commandName].flags.reduce(function(flags2, flag) {
      flags2[flag] = true;
      return flags2;
    }, {});
  });
  exports.exists = exists2;
  exports.hasFlag = hasFlag;
  exports.getKeyIndexes = getKeyIndexes;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/standard-as-callback@2.1.0/node_modules/standard-as-callback/built/utils.js
var require_utils = __commonJS((exports) => {
  var tryCatcher = function(err, val) {
    try {
      const target = tryCatchTarget;
      tryCatchTarget = null;
      return target.apply(this, arguments);
    } catch (e2) {
      exports.errorObj.e = e2;
      return exports.errorObj;
    }
  };
  var tryCatch = function(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.tryCatch = exports.errorObj = undefined;
  exports.errorObj = { e: {} };
  var tryCatchTarget;
  exports.tryCatch = tryCatch;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/standard-as-callback/built/index.js
var require_built2 = __commonJS((exports) => {
  var throwLater = function(e2) {
    setTimeout(function() {
      throw e2;
    }, 0);
  };
  var asCallback = function(promise5, nodeback, options) {
    if (typeof nodeback === "function") {
      promise5.then((val) => {
        let ret;
        if (options !== undefined && Object(options).spread && Array.isArray(val)) {
          ret = utils_1.tryCatch(nodeback).apply(undefined, [null].concat(val));
        } else {
          ret = val === undefined ? utils_1.tryCatch(nodeback)(null) : utils_1.tryCatch(nodeback)(null, val);
        }
        if (ret === utils_1.errorObj) {
          throwLater(ret.e);
        }
      }, (cause) => {
        if (!cause) {
          const newReason = new Error(cause + "");
          Object.assign(newReason, { cause });
          cause = newReason;
        }
        const ret = utils_1.tryCatch(nodeback)(cause);
        if (ret === utils_1.errorObj) {
          throwLater(ret.e);
        }
      });
    }
    return promise5;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var utils_1 = require_utils();
  exports.default = asCallback;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/redis-errors@1.2.0/node_modules/redis-errors/lib/old.js
var require_old = __commonJS((exports, module) => {
  var RedisError = function(message) {
    Object.defineProperty(this, "message", {
      value: message || "",
      configurable: true,
      writable: true
    });
    Error.captureStackTrace(this, this.constructor);
  };
  var ParserError = function(message, buffer2, offset) {
    assert(buffer2);
    assert.strictEqual(typeof offset, "number");
    Object.defineProperty(this, "message", {
      value: message || "",
      configurable: true,
      writable: true
    });
    const tmp = Error.stackTraceLimit;
    Error.stackTraceLimit = 2;
    Error.captureStackTrace(this, this.constructor);
    Error.stackTraceLimit = tmp;
    this.offset = offset;
    this.buffer = buffer2;
  };
  var ReplyError = function(message) {
    Object.defineProperty(this, "message", {
      value: message || "",
      configurable: true,
      writable: true
    });
    const tmp = Error.stackTraceLimit;
    Error.stackTraceLimit = 2;
    Error.captureStackTrace(this, this.constructor);
    Error.stackTraceLimit = tmp;
  };
  var AbortError = function(message) {
    Object.defineProperty(this, "message", {
      value: message || "",
      configurable: true,
      writable: true
    });
    Error.captureStackTrace(this, this.constructor);
  };
  var InterruptError = function(message) {
    Object.defineProperty(this, "message", {
      value: message || "",
      configurable: true,
      writable: true
    });
    Error.captureStackTrace(this, this.constructor);
  };
  var assert = import.meta.require("assert");
  var util = import.meta.require("util");
  util.inherits(RedisError, Error);
  Object.defineProperty(RedisError.prototype, "name", {
    value: "RedisError",
    configurable: true,
    writable: true
  });
  util.inherits(ParserError, RedisError);
  Object.defineProperty(ParserError.prototype, "name", {
    value: "ParserError",
    configurable: true,
    writable: true
  });
  util.inherits(ReplyError, RedisError);
  Object.defineProperty(ReplyError.prototype, "name", {
    value: "ReplyError",
    configurable: true,
    writable: true
  });
  util.inherits(AbortError, RedisError);
  Object.defineProperty(AbortError.prototype, "name", {
    value: "AbortError",
    configurable: true,
    writable: true
  });
  util.inherits(InterruptError, AbortError);
  Object.defineProperty(InterruptError.prototype, "name", {
    value: "InterruptError",
    configurable: true,
    writable: true
  });
  module.exports = {
    RedisError,
    ParserError,
    ReplyError,
    AbortError,
    InterruptError
  };
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/redis-errors@1.2.0/node_modules/redis-errors/lib/modern.js
var require_modern = __commonJS((exports, module) => {
  var assert = import.meta.require("assert");

  class RedisError extends Error {
    get name() {
      return this.constructor.name;
    }
  }

  class ParserError extends RedisError {
    constructor(message, buffer2, offset) {
      assert(buffer2);
      assert.strictEqual(typeof offset, "number");
      const tmp = Error.stackTraceLimit;
      Error.stackTraceLimit = 2;
      super(message);
      Error.stackTraceLimit = tmp;
      this.offset = offset;
      this.buffer = buffer2;
    }
    get name() {
      return this.constructor.name;
    }
  }

  class ReplyError extends RedisError {
    constructor(message) {
      const tmp = Error.stackTraceLimit;
      Error.stackTraceLimit = 2;
      super(message);
      Error.stackTraceLimit = tmp;
    }
    get name() {
      return this.constructor.name;
    }
  }

  class AbortError extends RedisError {
    get name() {
      return this.constructor.name;
    }
  }

  class InterruptError extends AbortError {
    get name() {
      return this.constructor.name;
    }
  }
  module.exports = {
    RedisError,
    ParserError,
    ReplyError,
    AbortError,
    InterruptError
  };
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/redis-errors/index.js
var require_redis_errors = __commonJS((exports, module) => {
  var Errors4 = process.version.charCodeAt(1) < 55 && process.version.charCodeAt(2) === 46 ? require_old() : require_modern();
  module.exports = Errors4;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/cluster-key-slot/lib/index.js
var require_lib = __commonJS((exports, module) => {
  var lookup = [
    0,
    4129,
    8258,
    12387,
    16516,
    20645,
    24774,
    28903,
    33032,
    37161,
    41290,
    45419,
    49548,
    53677,
    57806,
    61935,
    4657,
    528,
    12915,
    8786,
    21173,
    17044,
    29431,
    25302,
    37689,
    33560,
    45947,
    41818,
    54205,
    50076,
    62463,
    58334,
    9314,
    13379,
    1056,
    5121,
    25830,
    29895,
    17572,
    21637,
    42346,
    46411,
    34088,
    38153,
    58862,
    62927,
    50604,
    54669,
    13907,
    9842,
    5649,
    1584,
    30423,
    26358,
    22165,
    18100,
    46939,
    42874,
    38681,
    34616,
    63455,
    59390,
    55197,
    51132,
    18628,
    22757,
    26758,
    30887,
    2112,
    6241,
    10242,
    14371,
    51660,
    55789,
    59790,
    63919,
    35144,
    39273,
    43274,
    47403,
    23285,
    19156,
    31415,
    27286,
    6769,
    2640,
    14899,
    10770,
    56317,
    52188,
    64447,
    60318,
    39801,
    35672,
    47931,
    43802,
    27814,
    31879,
    19684,
    23749,
    11298,
    15363,
    3168,
    7233,
    60846,
    64911,
    52716,
    56781,
    44330,
    48395,
    36200,
    40265,
    32407,
    28342,
    24277,
    20212,
    15891,
    11826,
    7761,
    3696,
    65439,
    61374,
    57309,
    53244,
    48923,
    44858,
    40793,
    36728,
    37256,
    33193,
    45514,
    41451,
    53516,
    49453,
    61774,
    57711,
    4224,
    161,
    12482,
    8419,
    20484,
    16421,
    28742,
    24679,
    33721,
    37784,
    41979,
    46042,
    49981,
    54044,
    58239,
    62302,
    689,
    4752,
    8947,
    13010,
    16949,
    21012,
    25207,
    29270,
    46570,
    42443,
    38312,
    34185,
    62830,
    58703,
    54572,
    50445,
    13538,
    9411,
    5280,
    1153,
    29798,
    25671,
    21540,
    17413,
    42971,
    47098,
    34713,
    38840,
    59231,
    63358,
    50973,
    55100,
    9939,
    14066,
    1681,
    5808,
    26199,
    30326,
    17941,
    22068,
    55628,
    51565,
    63758,
    59695,
    39368,
    35305,
    47498,
    43435,
    22596,
    18533,
    30726,
    26663,
    6336,
    2273,
    14466,
    10403,
    52093,
    56156,
    60223,
    64286,
    35833,
    39896,
    43963,
    48026,
    19061,
    23124,
    27191,
    31254,
    2801,
    6864,
    10931,
    14994,
    64814,
    60687,
    56684,
    52557,
    48554,
    44427,
    40424,
    36297,
    31782,
    27655,
    23652,
    19525,
    15522,
    11395,
    7392,
    3265,
    61215,
    65342,
    53085,
    57212,
    44955,
    49082,
    36825,
    40952,
    28183,
    32310,
    20053,
    24180,
    11923,
    16050,
    3793,
    7920
  ];
  var toUTF8Array = function toUTF8Array(str) {
    var char;
    var i = 0;
    var p2 = 0;
    var utf8 = [];
    var len = str.length;
    for (;i < len; i++) {
      char = str.charCodeAt(i);
      if (char < 128) {
        utf8[p2++] = char;
      } else if (char < 2048) {
        utf8[p2++] = char >> 6 | 192;
        utf8[p2++] = char & 63 | 128;
      } else if ((char & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
        char = 65536 + ((char & 1023) << 10) + (str.charCodeAt(++i) & 1023);
        utf8[p2++] = char >> 18 | 240;
        utf8[p2++] = char >> 12 & 63 | 128;
        utf8[p2++] = char >> 6 & 63 | 128;
        utf8[p2++] = char & 63 | 128;
      } else {
        utf8[p2++] = char >> 12 | 224;
        utf8[p2++] = char >> 6 & 63 | 128;
        utf8[p2++] = char & 63 | 128;
      }
    }
    return utf8;
  };
  var generate3 = module.exports = function generate(str) {
    var char;
    var i = 0;
    var start = -1;
    var result2 = 0;
    var resultHash = 0;
    var utf8 = typeof str === "string" ? toUTF8Array(str) : str;
    var len = utf8.length;
    while (i < len) {
      char = utf8[i++];
      if (start === -1) {
        if (char === 123) {
          start = i;
        }
      } else if (char !== 125) {
        resultHash = lookup[(char ^ resultHash >> 8) & 255] ^ resultHash << 8;
      } else if (i - 1 !== start) {
        return resultHash & 16383;
      }
      result2 = lookup[(char ^ result2 >> 8) & 255] ^ result2 << 8;
    }
    return result2 & 16383;
  };
  module.exports.generateMulti = function generateMulti(keys) {
    var i = 1;
    var len = keys.length;
    var base = generate3(keys[0]);
    while (i < len) {
      if (generate3(keys[i++]) !== base)
        return -1;
    }
    return base;
  };
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/lodash.defaults/index.js
var require_lodash = __commonJS((exports, module) => {
  var apply = function(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  };
  var baseTimes = function(n2, iteratee) {
    var index = -1, result2 = Array(n2);
    while (++index < n2) {
      result2[index] = iteratee(index);
    }
    return result2;
  };
  var arrayLikeKeys = function(value15, inherited) {
    var result2 = isArray(value15) || isArguments(value15) ? baseTimes(value15.length, String) : [];
    var length = result2.length, skipIndexes = !!length;
    for (var key in value15) {
      if ((inherited || hasOwnProperty.call(value15, key)) && !(skipIndexes && (key == "length" || isIndex(key, length)))) {
        result2.push(key);
      }
    }
    return result2;
  };
  var assignInDefaults = function(objValue, srcValue, key, object13) {
    if (objValue === undefined || eq2(objValue, objectProto[key]) && !hasOwnProperty.call(object13, key)) {
      return srcValue;
    }
    return objValue;
  };
  var assignValue = function(object13, key, value15) {
    var objValue = object13[key];
    if (!(hasOwnProperty.call(object13, key) && eq2(objValue, value15)) || value15 === undefined && !(key in object13)) {
      object13[key] = value15;
    }
  };
  var baseKeysIn = function(object13) {
    if (!isObject(object13)) {
      return nativeKeysIn(object13);
    }
    var isProto = isPrototype(object13), result2 = [];
    for (var key in object13) {
      if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object13, key)))) {
        result2.push(key);
      }
    }
    return result2;
  };
  var baseRest = function(func, start) {
    start = nativeMax(start === undefined ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array6 = Array(length);
      while (++index < length) {
        array6[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = array6;
      return apply(func, this, otherArgs);
    };
  };
  var copyObject = function(source, props, object13, customizer) {
    object13 || (object13 = {});
    var index = -1, length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object13[key], source[key], key, object13, source) : undefined;
      assignValue(object13, key, newValue === undefined ? source[key] : newValue);
    }
    return object13;
  };
  var createAssigner = function(assigner) {
    return baseRest(function(object13, sources) {
      var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined, guard21 = length > 2 ? sources[2] : undefined;
      customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined;
      if (guard21 && isIterateeCall(sources[0], sources[1], guard21)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }
      object13 = Object(object13);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object13, source, index, customizer);
        }
      }
      return object13;
    });
  };
  var isIndex = function(value15, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value15 == "number" || reIsUint.test(value15)) && (value15 > -1 && value15 % 1 == 0 && value15 < length);
  };
  var isIterateeCall = function(value15, index, object13) {
    if (!isObject(object13)) {
      return false;
    }
    var type75 = typeof index;
    if (type75 == "number" ? isArrayLike(object13) && isIndex(index, object13.length) : type75 == "string" && (index in object13)) {
      return eq2(object13[index], value15);
    }
    return false;
  };
  var isPrototype = function(value15) {
    var Ctor = value15 && value15.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value15 === proto;
  };
  var nativeKeysIn = function(object13) {
    var result2 = [];
    if (object13 != null) {
      for (var key in Object(object13)) {
        result2.push(key);
      }
    }
    return result2;
  };
  var eq2 = function(value15, other) {
    return value15 === other || value15 !== value15 && other !== other;
  };
  var isArguments = function(value15) {
    return isArrayLikeObject(value15) && hasOwnProperty.call(value15, "callee") && (!propertyIsEnumerable.call(value15, "callee") || objectToString.call(value15) == argsTag);
  };
  var isArrayLike = function(value15) {
    return value15 != null && isLength(value15.length) && !isFunction(value15);
  };
  var isArrayLikeObject = function(value15) {
    return isObjectLike(value15) && isArrayLike(value15);
  };
  var isFunction = function(value15) {
    var tag = isObject(value15) ? objectToString.call(value15) : "";
    return tag == funcTag || tag == genTag;
  };
  var isLength = function(value15) {
    return typeof value15 == "number" && value15 > -1 && value15 % 1 == 0 && value15 <= MAX_SAFE_INTEGER;
  };
  var isObject = function(value15) {
    var type75 = typeof value15;
    return !!value15 && (type75 == "object" || type75 == "function");
  };
  var isObjectLike = function(value15) {
    return !!value15 && typeof value15 == "object";
  };
  var keysIn = function(object13) {
    return isArrayLike(object13) ? arrayLikeKeys(object13, true) : baseKeysIn(object13);
  };
  var MAX_SAFE_INTEGER = 9007199254740991;
  var argsTag = "[object Arguments]";
  var funcTag = "[object Function]";
  var genTag = "[object GeneratorFunction]";
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objectToString = objectProto.toString;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  var nativeMax = Math.max;
  var isArray = Array.isArray;
  var assignInWith = createAssigner(function(object13, source, srcIndex, customizer) {
    copyObject(source, keysIn(source), object13, customizer);
  });
  var defaults = baseRest(function(args) {
    args.push(undefined, assignInDefaults);
    return apply(assignInWith, undefined, args);
  });
  module.exports = defaults;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/lodash.isarguments/index.js
var require_lodash2 = __commonJS((exports, module) => {
  var isArguments = function(value15) {
    return isArrayLikeObject(value15) && hasOwnProperty.call(value15, "callee") && (!propertyIsEnumerable.call(value15, "callee") || objectToString.call(value15) == argsTag);
  };
  var isArrayLike = function(value15) {
    return value15 != null && isLength(value15.length) && !isFunction(value15);
  };
  var isArrayLikeObject = function(value15) {
    return isObjectLike(value15) && isArrayLike(value15);
  };
  var isFunction = function(value15) {
    var tag = isObject(value15) ? objectToString.call(value15) : "";
    return tag == funcTag || tag == genTag;
  };
  var isLength = function(value15) {
    return typeof value15 == "number" && value15 > -1 && value15 % 1 == 0 && value15 <= MAX_SAFE_INTEGER;
  };
  var isObject = function(value15) {
    var type75 = typeof value15;
    return !!value15 && (type75 == "object" || type75 == "function");
  };
  var isObjectLike = function(value15) {
    return !!value15 && typeof value15 == "object";
  };
  var MAX_SAFE_INTEGER = 9007199254740991;
  var argsTag = "[object Arguments]";
  var funcTag = "[object Function]";
  var genTag = "[object GeneratorFunction]";
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objectToString = objectProto.toString;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  module.exports = isArguments;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/utils/lodash.js
var require_lodash3 = __commonJS((exports) => {
  var noop3 = function() {
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isArguments = exports.defaults = exports.noop = undefined;
  var defaults = require_lodash();
  exports.defaults = defaults;
  var isArguments = require_lodash2();
  exports.isArguments = isArguments;
  exports.noop = noop3;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/debug@4.3.4/node_modules/ms/index.js
var require_ms = __commonJS((exports, module) => {
  var parse5 = function(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
      return;
    }
    var n2 = parseFloat(match[1]);
    var type75 = (match[2] || "ms").toLowerCase();
    switch (type75) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
        return n2 * y2;
      case "weeks":
      case "week":
      case "w":
        return n2 * w;
      case "days":
      case "day":
      case "d":
        return n2 * d2;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
        return n2 * h2;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
        return n2 * m2;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
        return n2 * s2;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
        return n2;
      default:
        return;
    }
  };
  var fmtShort = function(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d2) {
      return Math.round(ms / d2) + "d";
    }
    if (msAbs >= h2) {
      return Math.round(ms / h2) + "h";
    }
    if (msAbs >= m2) {
      return Math.round(ms / m2) + "m";
    }
    if (msAbs >= s2) {
      return Math.round(ms / s2) + "s";
    }
    return ms + "ms";
  };
  var fmtLong = function(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d2) {
      return plural(ms, msAbs, d2, "day");
    }
    if (msAbs >= h2) {
      return plural(ms, msAbs, h2, "hour");
    }
    if (msAbs >= m2) {
      return plural(ms, msAbs, m2, "minute");
    }
    if (msAbs >= s2) {
      return plural(ms, msAbs, s2, "second");
    }
    return ms + " ms";
  };
  var plural = function(ms, msAbs, n2, name) {
    var isPlural = msAbs >= n2 * 1.5;
    return Math.round(ms / n2) + " " + name + (isPlural ? "s" : "");
  };
  var s2 = 1000;
  var m2 = s2 * 60;
  var h2 = m2 * 60;
  var d2 = h2 * 24;
  var w = d2 * 7;
  var y2 = d2 * 365.25;
  module.exports = function(val, options) {
    options = options || {};
    var type75 = typeof val;
    if (type75 === "string" && val.length > 0) {
      return parse5(val);
    } else if (type75 === "number" && isFinite(val)) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
  };
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js
var require_common = __commonJS((exports, module) => {
  var setup = function(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = require_ms();
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key) => {
      createDebug[key] = env[key];
    });
    createDebug.names = [];
    createDebug.skips = [];
    createDebug.formatters = {};
    function selectColor(namespace) {
      let hash6 = 0;
      for (let i = 0;i < namespace.length; i++) {
        hash6 = (hash6 << 5) - hash6 + namespace.charCodeAt(i);
        hash6 |= 0;
      }
      return createDebug.colors[Math.abs(hash6) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    function createDebug(namespace) {
      let prevTime;
      let enableOverride = null;
      let namespacesCache;
      let enabledCache;
      function debug(...args) {
        if (!debug.enabled) {
          return;
        }
        const self2 = debug;
        const curr = Number(new Date);
        const ms = curr - (prevTime || curr);
        self2.diff = ms;
        self2.prev = prevTime;
        self2.curr = curr;
        prevTime = curr;
        args[0] = createDebug.coerce(args[0]);
        if (typeof args[0] !== "string") {
          args.unshift("%O");
        }
        let index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
          if (match === "%%") {
            return "%";
          }
          index++;
          const formatter = createDebug.formatters[format];
          if (typeof formatter === "function") {
            const val = args[index];
            match = formatter.call(self2, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        createDebug.formatArgs.call(self2, args);
        const logFn = self2.log || createDebug.log;
        logFn.apply(self2, args);
      }
      debug.namespace = namespace;
      debug.useColors = createDebug.useColors();
      debug.color = createDebug.selectColor(namespace);
      debug.extend = extend;
      debug.destroy = createDebug.destroy;
      Object.defineProperty(debug, "enabled", {
        enumerable: true,
        configurable: false,
        get: () => {
          if (enableOverride !== null) {
            return enableOverride;
          }
          if (namespacesCache !== createDebug.namespaces) {
            namespacesCache = createDebug.namespaces;
            enabledCache = createDebug.enabled(namespace);
          }
          return enabledCache;
        },
        set: (v2) => {
          enableOverride = v2;
        }
      });
      if (typeof createDebug.init === "function") {
        createDebug.init(debug);
      }
      return debug;
    }
    function extend(namespace, delimiter) {
      const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
      newDebug.log = this.log;
      return newDebug;
    }
    function enable(namespaces) {
      createDebug.save(namespaces);
      createDebug.namespaces = namespaces;
      createDebug.names = [];
      createDebug.skips = [];
      let i;
      const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
      const len = split.length;
      for (i = 0;i < len; i++) {
        if (!split[i]) {
          continue;
        }
        namespaces = split[i].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") {
          createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
        } else {
          createDebug.names.push(new RegExp("^" + namespaces + "$"));
        }
      }
    }
    function disable() {
      const namespaces = [
        ...createDebug.names.map(toNamespace),
        ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
      ].join(",");
      createDebug.enable("");
      return namespaces;
    }
    function enabled(name) {
      if (name[name.length - 1] === "*") {
        return true;
      }
      let i;
      let len;
      for (i = 0, len = createDebug.skips.length;i < len; i++) {
        if (createDebug.skips[i].test(name)) {
          return false;
        }
      }
      for (i = 0, len = createDebug.names.length;i < len; i++) {
        if (createDebug.names[i].test(name)) {
          return true;
        }
      }
      return false;
    }
    function toNamespace(regexp4) {
      return regexp4.toString().substring(2, regexp4.toString().length - 2).replace(/\.\*\?$/, "*");
    }
    function coerce(val) {
      if (val instanceof Error) {
        return val.stack || val.message;
      }
      return val;
    }
    function destroy() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    createDebug.enable(createDebug.load());
    return createDebug;
  };
  module.exports = setup;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js
var require_browser = __commonJS((exports, module) => {
  var useColors = function() {
    if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
      return true;
    }
    if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
      return false;
    }
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  };
  var formatArgs = function(args) {
    args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + exports.humanize(this.diff);
    if (!this.useColors) {
      return;
    }
    const c2 = "color: " + this.color;
    args.splice(1, 0, c2, "color: inherit");
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match) => {
      if (match === "%%") {
        return;
      }
      index++;
      if (match === "%c") {
        lastC = index;
      }
    });
    args.splice(lastC, 0, c2);
  };
  var save = function(namespaces) {
    try {
      if (namespaces) {
        exports.storage.setItem("debug", namespaces);
      } else {
        exports.storage.removeItem("debug");
      }
    } catch (error22) {
    }
  };
  var load = function() {
    let r2;
    try {
      r2 = exports.storage.getItem("debug");
    } catch (error22) {
    }
    if (!r2 && typeof process !== "undefined" && "env" in process) {
      r2 = process.env.DEBUG;
    }
    return r2;
  };
  var localstorage = function() {
    try {
      return localStorage;
    } catch (error22) {
    }
  };
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = localstorage();
  exports.destroy = (() => {
    let warned = false;
    return () => {
      if (!warned) {
        warned = true;
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
    };
  })();
  exports.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  exports.log = console.debug || console.log || (() => {
  });
  module.exports = require_common()(exports);
  var { formatters } = module.exports;
  formatters.j = function(v2) {
    try {
      return JSON.stringify(v2);
    } catch (error22) {
      return "[UnexpectedJSONParseError]: " + error22.message;
    }
  };
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/supports-color@5.5.0/node_modules/has-flag/index.js
var require_has_flag = __commonJS((exports, module) => {
  module.exports = (flag, argv) => {
    argv = argv || process.argv;
    const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
    const pos = argv.indexOf(prefix + flag);
    const terminatorPos = argv.indexOf("--");
    return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
  };
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/node_modules/supports-color/index.js
var require_supports_color = __commonJS((exports, module) => {
  var translateLevel = function(level) {
    if (level === 0) {
      return false;
    }
    return {
      level,
      hasBasic: true,
      has256: level >= 2,
      has16m: level >= 3
    };
  };
  var supportsColor = function(stream) {
    if (forceColor === false) {
      return 0;
    }
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
      return 3;
    }
    if (hasFlag("color=256")) {
      return 2;
    }
    if (stream && !stream.isTTY && forceColor !== true) {
      return 0;
    }
    const min = forceColor ? 1 : 0;
    if (process.platform === "win32") {
      const osRelease = os2.release().split(".");
      if (Number(process.versions.node.split(".")[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
        return Number(osRelease[2]) >= 14931 ? 3 : 2;
      }
      return 1;
    }
    if ("CI" in env) {
      if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some((sign) => (sign in env)) || env.CI_NAME === "codeship") {
        return 1;
      }
      return min;
    }
    if ("TEAMCITY_VERSION" in env) {
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === "truecolor") {
      return 3;
    }
    if ("TERM_PROGRAM" in env) {
      const version3 = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (env.TERM_PROGRAM) {
        case "iTerm.app":
          return version3 >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
      return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
      return 1;
    }
    if ("COLORTERM" in env) {
      return 1;
    }
    if (env.TERM === "dumb") {
      return min;
    }
    return min;
  };
  var getSupportLevel = function(stream) {
    const level = supportsColor(stream);
    return translateLevel(level);
  };
  var os2 = import.meta.require("os");
  var hasFlag = require_has_flag();
  var env = process.env;
  var forceColor;
  if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false")) {
    forceColor = false;
  } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
    forceColor = true;
  }
  if ("FORCE_COLOR" in env) {
    forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
  }
  module.exports = {
    supportsColor: getSupportLevel,
    stdout: getSupportLevel(process.stdout),
    stderr: getSupportLevel(process.stderr)
  };
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/node.js
var require_node = __commonJS((exports, module) => {
  var useColors = function() {
    return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
  };
  var formatArgs = function(args) {
    const { namespace: name, useColors: useColors2 } = this;
    if (useColors2) {
      const c2 = this.color;
      const colorCode = "\x1B[3" + (c2 < 8 ? c2 : "8;5;" + c2);
      const prefix = `  ${colorCode};1m${name} \x1B[0m`;
      args[0] = prefix + args[0].split("\n").join("\n" + prefix);
      args.push(colorCode + "m+" + exports.humanize(this.diff) + "\x1B[0m");
    } else {
      args[0] = getDate() + name + " " + args[0];
    }
  };
  var getDate = function() {
    if (exports.inspectOpts.hideDate) {
      return "";
    }
    return new Date().toISOString() + " ";
  };
  var log = function(...args) {
    return process.stderr.write(util.format(...args) + "\n");
  };
  var save = function(namespaces) {
    if (namespaces) {
      process.env.DEBUG = namespaces;
    } else {
      delete process.env.DEBUG;
    }
  };
  var load = function() {
    return process.env.DEBUG;
  };
  var init = function(debug) {
    debug.inspectOpts = {};
    const keys = Object.keys(exports.inspectOpts);
    for (let i = 0;i < keys.length; i++) {
      debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
  };
  var tty = import.meta.require("tty");
  var util = import.meta.require("util");
  exports.init = init;
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.destroy = util.deprecate(() => {
  }, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  exports.colors = [6, 2, 3, 4, 5, 1];
  try {
    const supportsColor = require_supports_color();
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
      exports.colors = [
        20,
        21,
        26,
        27,
        32,
        33,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        56,
        57,
        62,
        63,
        68,
        69,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        92,
        93,
        98,
        99,
        112,
        113,
        128,
        129,
        134,
        135,
        148,
        149,
        160,
        161,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        171,
        172,
        173,
        178,
        179,
        184,
        185,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        209,
        214,
        215,
        220,
        221
      ];
    }
  } catch (error22) {
  }
  exports.inspectOpts = Object.keys(process.env).filter((key) => {
    return /^debug_/i.test(key);
  }).reduce((obj, key) => {
    const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
      return k.toUpperCase();
    });
    let val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) {
      val = true;
    } else if (/^(no|off|false|disabled)$/i.test(val)) {
      val = false;
    } else if (val === "null") {
      val = null;
    } else {
      val = Number(val);
    }
    obj[prop] = val;
    return obj;
  }, {});
  module.exports = require_common()(exports);
  var { formatters } = module.exports;
  formatters.o = function(v2) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v2, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
  };
  formatters.O = function(v2) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v2, this.inspectOpts);
  };
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/debug/src/index.js
var require_src = __commonJS((exports, module) => {
  if (typeof process === "undefined" || process.type === "renderer" || false || process.__nwjs) {
    module.exports = require_browser();
  } else {
    module.exports = require_node();
  }
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/utils/debug.js
var require_debug = __commonJS((exports) => {
  var getStringValue = function(v2) {
    if (v2 === null) {
      return;
    }
    switch (typeof v2) {
      case "boolean":
        return;
      case "number":
        return;
      case "object":
        if (Buffer.isBuffer(v2)) {
          return v2.toString("hex");
        }
        if (Array.isArray(v2)) {
          return v2.join(",");
        }
        try {
          return JSON.stringify(v2);
        } catch (e2) {
          return;
        }
      case "string":
        return v2;
    }
  };
  var genRedactedString = function(str, maxLen) {
    const { length } = str;
    return length <= maxLen ? str : str.slice(0, maxLen) + ' ... <REDACTED full-length="' + length + '">';
  };
  var genDebugFunction = function(namespace) {
    const fn = (0, debug_1.default)(`${NAMESPACE_PREFIX}:${namespace}`);
    function wrappedDebug(...args) {
      if (!fn.enabled) {
        return;
      }
      for (let i = 1;i < args.length; i++) {
        const str = getStringValue(args[i]);
        if (typeof str === "string" && str.length > MAX_ARGUMENT_LENGTH) {
          args[i] = genRedactedString(str, MAX_ARGUMENT_LENGTH);
        }
      }
      return fn.apply(null, args);
    }
    Object.defineProperties(wrappedDebug, {
      namespace: {
        get() {
          return fn.namespace;
        }
      },
      enabled: {
        get() {
          return fn.enabled;
        }
      },
      destroy: {
        get() {
          return fn.destroy;
        }
      },
      log: {
        get() {
          return fn.log;
        },
        set(l2) {
          fn.log = l2;
        }
      }
    });
    return wrappedDebug;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.genRedactedString = exports.getStringValue = exports.MAX_ARGUMENT_LENGTH = undefined;
  var debug_1 = require_src();
  var MAX_ARGUMENT_LENGTH = 200;
  exports.MAX_ARGUMENT_LENGTH = MAX_ARGUMENT_LENGTH;
  var NAMESPACE_PREFIX = "ioredis";
  exports.getStringValue = getStringValue;
  exports.genRedactedString = genRedactedString;
  exports.default = genDebugFunction;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/constants/TLSProfiles.js
var require_TLSProfiles = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var RedisCloudCA = `-----BEGIN CERTIFICATE-----
MIIDTzCCAjegAwIBAgIJAKSVpiDswLcwMA0GCSqGSIb3DQEBBQUAMD4xFjAUBgNV
BAoMDUdhcmFudGlhIERhdGExJDAiBgNVBAMMG1NTTCBDZXJ0aWZpY2F0aW9uIEF1
dGhvcml0eTAeFw0xMzEwMDExMjE0NTVaFw0yMzA5MjkxMjE0NTVaMD4xFjAUBgNV
BAoMDUdhcmFudGlhIERhdGExJDAiBgNVBAMMG1NTTCBDZXJ0aWZpY2F0aW9uIEF1
dGhvcml0eTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALZqkh/DczWP
JnxnHLQ7QL0T4B4CDKWBKCcisriGbA6ZePWVNo4hfKQC6JrzfR+081NeD6VcWUiz
rmd+jtPhIY4c+WVQYm5PKaN6DT1imYdxQw7aqO5j2KUCEh/cznpLxeSHoTxlR34E
QwF28Wl3eg2vc5ct8LjU3eozWVk3gb7alx9mSA2SgmuX5lEQawl++rSjsBStemY2
BDwOpAMXIrdEyP/cVn8mkvi/BDs5M5G+09j0gfhyCzRWMQ7Hn71u1eolRxwVxgi3
TMn+/vTaFSqxKjgck6zuAYjBRPaHe7qLxHNr1So/Mc9nPy+3wHebFwbIcnUojwbp
4nctkWbjb2cCAwEAAaNQME4wHQYDVR0OBBYEFP1whtcrydmW3ZJeuSoKZIKjze3w
MB8GA1UdIwQYMBaAFP1whtcrydmW3ZJeuSoKZIKjze3wMAwGA1UdEwQFMAMBAf8w
DQYJKoZIhvcNAQEFBQADggEBAG2erXhwRAa7+ZOBs0B6X57Hwyd1R4kfmXcs0rta
lbPpvgULSiB+TCbf3EbhJnHGyvdCY1tvlffLjdA7HJ0PCOn+YYLBA0pTU/dyvrN6
Su8NuS5yubnt9mb13nDGYo1rnt0YRfxN+8DM3fXIVr038A30UlPX2Ou1ExFJT0MZ
uFKY6ZvLdI6/1cbgmguMlAhM+DhKyV6Sr5699LM3zqeI816pZmlREETYkGr91q7k
BpXJu/dtHaGxg1ZGu6w/PCsYGUcECWENYD4VQPd8N32JjOfu6vEgoEAwfPP+3oGp
Z4m3ewACcWOAenqflb+cQYC4PsF7qbXDmRaWrbKntOlZ3n0=
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIGMTCCBBmgAwIBAgICEAAwDQYJKoZIhvcNAQELBQAwajELMAkGA1UEBhMCVVMx
CzAJBgNVBAgMAkNBMQswCQYDVQQHDAJDQTESMBAGA1UECgwJUmVkaXNMYWJzMS0w
KwYDVQQDDCRSZWRpc0xhYnMgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkwHhcN
MTgwMjI1MTUzNzM3WhcNMjgwMjIzMTUzNzM3WjBfMQswCQYDVQQGEwJVUzELMAkG
A1UECAwCQ0ExEjAQBgNVBAoMCVJlZGlzTGFiczEvMC0GA1UEAwwmUkNQIEludGVy
bWVkaWF0ZSBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkwggIiMA0GCSqGSIb3DQEBAQUA
A4ICDwAwggIKAoICAQDf9dqbxc8Bq7Ctq9rWcxrGNKKHivqLAFpPq02yLPx6fsOv
Tq7GsDChAYBBc4v7Y2Ap9RD5Vs3dIhEANcnolf27QwrG9RMnnvzk8pCvp1o6zSU4
VuOE1W66/O1/7e2rVxyrnTcP7UgK43zNIXu7+tiAqWsO92uSnuMoGPGpeaUm1jym
hjWKtkAwDFSqvHY+XL5qDVBEjeUe+WHkYUg40cAXjusAqgm2hZt29c2wnVrxW25W
P0meNlzHGFdA2AC5z54iRiqj57dTfBTkHoBczQxcyw6hhzxZQ4e5I5zOKjXXEhZN
r0tA3YC14CTabKRus/JmZieyZzRgEy2oti64tmLYTqSlAD78pRL40VNoaSYetXLw
hhNsXCHgWaY6d5bLOc/aIQMAV5oLvZQKvuXAF1IDmhPA+bZbpWipp0zagf1P1H3s
UzsMdn2KM0ejzgotbtNlj5TcrVwpmvE3ktvUAuA+hi3FkVx1US+2Gsp5x4YOzJ7u
P1WPk6ShF0JgnJH2ILdj6kttTWwFzH17keSFICWDfH/+kM+k7Y1v3EXMQXE7y0T9
MjvJskz6d/nv+sQhY04xt64xFMGTnZjlJMzfQNi7zWFLTZnDD0lPowq7l3YiPoTT
t5Xky83lu0KZsZBo0WlWaDG00gLVdtRgVbcuSWxpi5BdLb1kRab66JptWjxwXQID
AQABo4HrMIHoMDoGA1UdHwQzMDEwL6AtoCuGKWh0dHBzOi8vcmwtY2Etc2VydmVy
LnJlZGlzbGFicy5jb20vdjEvY3JsMEYGCCsGAQUFBwEBBDowODA2BggrBgEFBQcw
AYYqaHR0cHM6Ly9ybC1jYS1zZXJ2ZXIucmVkaXNsYWJzLmNvbS92MS9vY3NwMB0G
A1UdDgQWBBQHar5OKvQUpP2qWt6mckzToeCOHDAfBgNVHSMEGDAWgBQi42wH6hM4
L2sujEvLM0/u8lRXTzASBgNVHRMBAf8ECDAGAQH/AgEAMA4GA1UdDwEB/wQEAwIB
hjANBgkqhkiG9w0BAQsFAAOCAgEAirEn/iTsAKyhd+pu2W3Z5NjCko4NPU0EYUbr
AP7+POK2rzjIrJO3nFYQ/LLuC7KCXG+2qwan2SAOGmqWst13Y+WHp44Kae0kaChW
vcYLXXSoGQGC8QuFSNUdaeg3RbMDYFT04dOkqufeWVccoHVxyTSg9eD8LZuHn5jw
7QDLiEECBmIJHk5Eeo2TAZrx4Yx6ufSUX5HeVjlAzqwtAqdt99uCJ/EL8bgpWbe+
XoSpvUv0SEC1I1dCAhCKAvRlIOA6VBcmzg5Am12KzkqTul12/VEFIgzqu0Zy2Jbc
AUPrYVu/+tOGXQaijy7YgwH8P8n3s7ZeUa1VABJHcxrxYduDDJBLZi+MjheUDaZ1
jQRHYevI2tlqeSBqdPKG4zBY5lS0GiAlmuze5oENt0P3XboHoZPHiqcK3VECgTVh
/BkJcuudETSJcZDmQ8YfoKfBzRQNg2sv/hwvUv73Ss51Sco8GEt2lD8uEdib1Q6z
zDT5lXJowSzOD5ZA9OGDjnSRL+2riNtKWKEqvtEG3VBJoBzu9GoxbAc7wIZLxmli
iF5a/Zf5X+UXD3s4TMmy6C4QZJpAA2egsSQCnraWO2ULhh7iXMysSkF/nzVfZn43
iqpaB8++9a37hWq14ZmOv0TJIDz//b2+KC4VFXWQ5W5QC6whsjT+OlG4p5ZYG0jo
616pxqo=
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIFujCCA6KgAwIBAgIJAJ1aTT1lu2ScMA0GCSqGSIb3DQEBCwUAMGoxCzAJBgNV
BAYTAlVTMQswCQYDVQQIDAJDQTELMAkGA1UEBwwCQ0ExEjAQBgNVBAoMCVJlZGlz
TGFiczEtMCsGA1UEAwwkUmVkaXNMYWJzIFJvb3QgQ2VydGlmaWNhdGUgQXV0aG9y
aXR5MB4XDTE4MDIyNTE1MjA0MloXDTM4MDIyMDE1MjA0MlowajELMAkGA1UEBhMC
VVMxCzAJBgNVBAgMAkNBMQswCQYDVQQHDAJDQTESMBAGA1UECgwJUmVkaXNMYWJz
MS0wKwYDVQQDDCRSZWRpc0xhYnMgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkw
ggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQDLEjXy7YrbN5Waau5cd6g1
G5C2tMmeTpZ0duFAPxNU4oE3RHS5gGiok346fUXuUxbZ6QkuzeN2/2Z+RmRcJhQY
Dm0ZgdG4x59An1TJfnzKKoWj8ISmoHS/TGNBdFzXV7FYNLBuqZouqePI6ReC6Qhl
pp45huV32Q3a6IDrrvx7Wo5ZczEQeFNbCeCOQYNDdTmCyEkHqc2AGo8eoIlSTutT
ULOC7R5gzJVTS0e1hesQ7jmqHjbO+VQS1NAL4/5K6cuTEqUl+XhVhPdLWBXJQ5ag
54qhX4v+ojLzeU1R/Vc6NjMvVtptWY6JihpgplprN0Yh2556ewcXMeturcKgXfGJ
xeYzsjzXerEjrVocX5V8BNrg64NlifzTMKNOOv4fVZszq1SIHR8F9ROrqiOdh8iC
JpUbLpXH9hWCSEO6VRMB2xJoKu3cgl63kF30s77x7wLFMEHiwsQRKxooE1UhgS9K
2sO4TlQ1eWUvFvHSTVDQDlGQ6zu4qjbOpb3Q8bQwoK+ai2alkXVR4Ltxe9QlgYK3
StsnPhruzZGA0wbXdpw0bnM+YdlEm5ffSTpNIfgHeaa7Dtb801FtA71ZlH7A6TaI
SIQuUST9EKmv7xrJyx0W1pGoPOLw5T029aTjnICSLdtV9bLwysrLhIYG5bnPq78B
cS+jZHFGzD7PUVGQD01nOQIDAQABo2MwYTAdBgNVHQ4EFgQUIuNsB+oTOC9rLoxL
yzNP7vJUV08wHwYDVR0jBBgwFoAUIuNsB+oTOC9rLoxLyzNP7vJUV08wDwYDVR0T
AQH/BAUwAwEB/zAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZIhvcNAQELBQADggIBAHfg
z5pMNUAKdMzK1aS1EDdK9yKz4qicILz5czSLj1mC7HKDRy8cVADUxEICis++CsCu
rYOvyCVergHQLREcxPq4rc5Nq1uj6J6649NEeh4WazOOjL4ZfQ1jVznMbGy+fJm3
3Hoelv6jWRG9iqeJZja7/1s6YC6bWymI/OY1e4wUKeNHAo+Vger7MlHV+RuabaX+
hSJ8bJAM59NCM7AgMTQpJCncrcdLeceYniGy5Q/qt2b5mJkQVkIdy4TPGGB+AXDJ
D0q3I/JDRkDUFNFdeW0js7fHdsvCR7O3tJy5zIgEV/o/BCkmJVtuwPYOrw/yOlKj
TY/U7ATAx9VFF6/vYEOMYSmrZlFX+98L6nJtwDqfLB5VTltqZ4H/KBxGE3IRSt9l
FXy40U+LnXzhhW+7VBAvyYX8GEXhHkKU8Gqk1xitrqfBXY74xKgyUSTolFSfFVgj
mcM/X4K45bka+qpkj7Kfv/8D4j6aZekwhN2ly6hhC1SmQ8qjMjpG/mrWOSSHZFmf
ybu9iD2AYHeIOkshIl6xYIa++Q/00/vs46IzAbQyriOi0XxlSMMVtPx0Q3isp+ji
n8Mq9eOuxYOEQ4of8twUkUDd528iwGtEdwf0Q01UyT84S62N8AySl1ZBKXJz6W4F
UhWfa/HQYOAPDdEjNgnVwLI23b8t0TozyCWw7q8h
-----END CERTIFICATE-----

-----BEGIN CERTIFICATE-----
MIIEjzCCA3egAwIBAgIQe55B/ALCKJDZtdNT8kD6hTANBgkqhkiG9w0BAQsFADBM
MSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMzETMBEGA1UEChMKR2xv
YmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjAeFw0yMjAxMjYxMjAwMDBaFw0y
NTAxMjYwMDAwMDBaMFgxCzAJBgNVBAYTAkJFMRkwFwYDVQQKExBHbG9iYWxTaWdu
IG52LXNhMS4wLAYDVQQDEyVHbG9iYWxTaWduIEF0bGFzIFIzIE9WIFRMUyBDQSAy
MDIyIFEyMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmGmg1LW9b7Lf
8zDD83yBDTEkt+FOxKJZqF4veWc5KZsQj9HfnUS2e5nj/E+JImlGPsQuoiosLuXD
BVBNAMcUFa11buFMGMeEMwiTmCXoXRrXQmH0qjpOfKgYc5gHG3BsRGaRrf7VR4eg
ofNMG9wUBw4/g/TT7+bQJdA4NfE7Y4d5gEryZiBGB/swaX6Jp/8MF4TgUmOWmalK
dZCKyb4sPGQFRTtElk67F7vU+wdGcrcOx1tDcIB0ncjLPMnaFicagl+daWGsKqTh
counQb6QJtYHa91KvCfKWocMxQ7OIbB5UARLPmC4CJ1/f8YFm35ebfzAeULYdGXu
jE9CLor0OwIDAQABo4IBXzCCAVswDgYDVR0PAQH/BAQDAgGGMB0GA1UdJQQWMBQG
CCsGAQUFBwMBBggrBgEFBQcDAjASBgNVHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQW
BBSH5Zq7a7B/t95GfJWkDBpA8HHqdjAfBgNVHSMEGDAWgBSP8Et/qC5FJK5NUPpj
move4t0bvDB7BggrBgEFBQcBAQRvMG0wLgYIKwYBBQUHMAGGImh0dHA6Ly9vY3Nw
Mi5nbG9iYWxzaWduLmNvbS9yb290cjMwOwYIKwYBBQUHMAKGL2h0dHA6Ly9zZWN1
cmUuZ2xvYmFsc2lnbi5jb20vY2FjZXJ0L3Jvb3QtcjMuY3J0MDYGA1UdHwQvMC0w
K6ApoCeGJWh0dHA6Ly9jcmwuZ2xvYmFsc2lnbi5jb20vcm9vdC1yMy5jcmwwIQYD
VR0gBBowGDAIBgZngQwBAgIwDAYKKwYBBAGgMgoBAjANBgkqhkiG9w0BAQsFAAOC
AQEAKRic9/f+nmhQU/wz04APZLjgG5OgsuUOyUEZjKVhNGDwxGTvKhyXGGAMW2B/
3bRi+aElpXwoxu3pL6fkElbX3B0BeS5LoDtxkyiVEBMZ8m+sXbocwlPyxrPbX6mY
0rVIvnuUeBH8X0L5IwfpNVvKnBIilTbcebfHyXkPezGwz7E1yhUULjJFm2bt0SdX
y+4X/WeiiYIv+fTVgZZgl+/2MKIsu/qdBJc3f3TvJ8nz+Eax1zgZmww+RSQWeOj3
15Iw6Z5FX+NwzY/Ab+9PosR5UosSeq+9HhtaxZttXG1nVh+avYPGYddWmiMT90J5
ZgKnO/Fx2hBgTxhOTMYaD312kg==
-----END CERTIFICATE-----

-----BEGIN CERTIFICATE-----
MIIDXzCCAkegAwIBAgILBAAAAAABIVhTCKIwDQYJKoZIhvcNAQELBQAwTDEgMB4G
A1UECxMXR2xvYmFsU2lnbiBSb290IENBIC0gUjMxEzARBgNVBAoTCkdsb2JhbFNp
Z24xEzARBgNVBAMTCkdsb2JhbFNpZ24wHhcNMDkwMzE4MTAwMDAwWhcNMjkwMzE4
MTAwMDAwWjBMMSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMzETMBEG
A1UEChMKR2xvYmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjCCASIwDQYJKoZI
hvcNAQEBBQADggEPADCCAQoCggEBAMwldpB5BngiFvXAg7aEyiie/QV2EcWtiHL8
RgJDx7KKnQRfJMsuS+FggkbhUqsMgUdwbN1k0ev1LKMPgj0MK66X17YUhhB5uzsT
gHeMCOFJ0mpiLx9e+pZo34knlTifBtc+ycsmWQ1z3rDI6SYOgxXG71uL0gRgykmm
KPZpO/bLyCiR5Z2KYVc3rHQU3HTgOu5yLy6c+9C7v/U9AOEGM+iCK65TpjoWc4zd
QQ4gOsC0p6Hpsk+QLjJg6VfLuQSSaGjlOCZgdbKfd/+RFO+uIEn8rUAVSNECMWEZ
XriX7613t2Saer9fwRPvm2L7DWzgVGkWqQPabumDk3F2xmmFghcCAwEAAaNCMEAw
DgYDVR0PAQH/BAQDAgEGMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFI/wS3+o
LkUkrk1Q+mOai97i3Ru8MA0GCSqGSIb3DQEBCwUAA4IBAQBLQNvAUKr+yAzv95ZU
RUm7lgAJQayzE4aGKAczymvmdLm6AC2upArT9fHxD4q/c2dKg8dEe3jgr25sbwMp
jjM5RcOO5LlXbKr8EpbsU8Yt5CRsuZRj+9xTaGdWPoO4zzUhw8lo/s7awlOqzJCK
6fBdRoyV3XpYKBovHd7NADdBj+1EbddTKJd+82cEHhXXipa0095MJ6RMG3NzdvQX
mcIfeg7jLQitChws/zyrVQ4PkX4268NXSb7hLi18YIvDQVETI53O9zJrlAGomecs
Mx86OyXShkDOOyyGeMlhLxS67ttVb9+E7gUJTb0o2HLO02JQZR7rkpeDMdmztcpH
WD9f
-----END CERTIFICATE-----`;
  var TLSProfiles = {
    RedisCloudFixed: { ca: RedisCloudCA },
    RedisCloudFlexible: { ca: RedisCloudCA }
  };
  exports.default = TLSProfiles;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/utils/index.js
var require_utils2 = __commonJS((exports) => {
  var convertBufferToString = function(value15, encoding) {
    if (value15 instanceof Buffer) {
      return value15.toString(encoding);
    }
    if (Array.isArray(value15)) {
      const length = value15.length;
      const res = Array(length);
      for (let i = 0;i < length; ++i) {
        res[i] = value15[i] instanceof Buffer && encoding === "utf8" ? value15[i].toString() : convertBufferToString(value15[i], encoding);
      }
      return res;
    }
    return value15;
  };
  var wrapMultiResult = function(arr) {
    if (!arr) {
      return null;
    }
    const result2 = [];
    const length = arr.length;
    for (let i = 0;i < length; ++i) {
      const item = arr[i];
      if (item instanceof Error) {
        result2.push([item]);
      } else {
        result2.push([null, item]);
      }
    }
    return result2;
  };
  var isInt = function(value15) {
    const x = parseFloat(value15);
    return !isNaN(value15) && (x | 0) === x;
  };
  var packObject = function(array6) {
    const result2 = {};
    const length = array6.length;
    for (let i = 1;i < length; i += 2) {
      result2[array6[i - 1]] = array6[i];
    }
    return result2;
  };
  var timeout = function(callback, timeout2) {
    let timer2 = null;
    const run = function() {
      if (timer2) {
        clearTimeout(timer2);
        timer2 = null;
        callback.apply(this, arguments);
      }
    };
    timer2 = setTimeout(run, timeout2, new Error("timeout"));
    return run;
  };
  var convertObjectToArray = function(obj) {
    const result2 = [];
    const keys = Object.keys(obj);
    for (let i = 0, l2 = keys.length;i < l2; i++) {
      result2.push(keys[i], obj[keys[i]]);
    }
    return result2;
  };
  var convertMapToArray = function(map3) {
    const result2 = [];
    let pos = 0;
    map3.forEach(function(value15, key) {
      result2[pos] = key;
      result2[pos + 1] = value15;
      pos += 2;
    });
    return result2;
  };
  var toArg = function(arg) {
    if (arg === null || typeof arg === "undefined") {
      return "";
    }
    return String(arg);
  };
  var optimizeErrorStack = function(error22, friendlyStack, filterPath) {
    const stacks = friendlyStack.split("\n");
    let lines = "";
    let i;
    for (i = 1;i < stacks.length; ++i) {
      if (stacks[i].indexOf(filterPath) === -1) {
        break;
      }
    }
    for (let j = i;j < stacks.length; ++j) {
      lines += "\n" + stacks[j];
    }
    if (error22.stack) {
      const pos = error22.stack.indexOf("\n");
      error22.stack = error22.stack.slice(0, pos) + lines;
    }
    return error22;
  };
  var parseURL = function(url) {
    if (isInt(url)) {
      return { port: url };
    }
    let parsed = (0, url_1.parse)(url, true, true);
    if (!parsed.slashes && url[0] !== "/") {
      url = "//" + url;
      parsed = (0, url_1.parse)(url, true, true);
    }
    const options = parsed.query || {};
    const result2 = {};
    if (parsed.auth) {
      const index = parsed.auth.indexOf(":");
      result2.username = index === -1 ? parsed.auth : parsed.auth.slice(0, index);
      result2.password = index === -1 ? "" : parsed.auth.slice(index + 1);
    }
    if (parsed.pathname) {
      if (parsed.protocol === "redis:" || parsed.protocol === "rediss:") {
        if (parsed.pathname.length > 1) {
          result2.db = parsed.pathname.slice(1);
        }
      } else {
        result2.path = parsed.pathname;
      }
    }
    if (parsed.host) {
      result2.host = parsed.hostname;
    }
    if (parsed.port) {
      result2.port = parsed.port;
    }
    if (typeof options.family === "string") {
      const intFamily = Number.parseInt(options.family, 10);
      if (!Number.isNaN(intFamily)) {
        result2.family = intFamily;
      }
    }
    (0, lodash_1.defaults)(result2, options);
    return result2;
  };
  var resolveTLSProfile = function(options) {
    let tls2 = options === null || options === undefined ? undefined : options.tls;
    if (typeof tls2 === "string")
      tls2 = { profile: tls2 };
    const profile = TLSProfiles_1.default[tls2 === null || tls2 === undefined ? undefined : tls2.profile];
    if (profile) {
      tls2 = Object.assign({}, profile, tls2);
      delete tls2.profile;
      options = Object.assign({}, options, { tls: tls2 });
    }
    return options;
  };
  var sample = function(array6, from = 0) {
    const length = array6.length;
    if (from >= length) {
      return null;
    }
    return array6[from + Math.floor(Math.random() * (length - from))];
  };
  var shuffle = function(array6) {
    let counter = array6.length;
    while (counter > 0) {
      const index = Math.floor(Math.random() * counter);
      counter--;
      [array6[counter], array6[index]] = [array6[index], array6[counter]];
    }
    return array6;
  };
  var zipMap = function(keys, values2) {
    const map3 = new Map;
    keys.forEach((key, index) => {
      map3.set(key, values2[index]);
    });
    return map3;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.noop = exports.defaults = exports.Debug = exports.zipMap = exports.CONNECTION_CLOSED_ERROR_MSG = exports.shuffle = exports.sample = exports.resolveTLSProfile = exports.parseURL = exports.optimizeErrorStack = exports.toArg = exports.convertMapToArray = exports.convertObjectToArray = exports.timeout = exports.packObject = exports.isInt = exports.wrapMultiResult = exports.convertBufferToString = undefined;
  var url_1 = import.meta.require("url");
  var lodash_1 = require_lodash3();
  Object.defineProperty(exports, "defaults", { enumerable: true, get: function() {
    return lodash_1.defaults;
  } });
  Object.defineProperty(exports, "noop", { enumerable: true, get: function() {
    return lodash_1.noop;
  } });
  var debug_1 = require_debug();
  exports.Debug = debug_1.default;
  var TLSProfiles_1 = require_TLSProfiles();
  exports.convertBufferToString = convertBufferToString;
  exports.wrapMultiResult = wrapMultiResult;
  exports.isInt = isInt;
  exports.packObject = packObject;
  exports.timeout = timeout;
  exports.convertObjectToArray = convertObjectToArray;
  exports.convertMapToArray = convertMapToArray;
  exports.toArg = toArg;
  exports.optimizeErrorStack = optimizeErrorStack;
  exports.parseURL = parseURL;
  exports.resolveTLSProfile = resolveTLSProfile;
  exports.sample = sample;
  exports.shuffle = shuffle;
  exports.CONNECTION_CLOSED_ERROR_MSG = "Connection is closed.";
  exports.zipMap = zipMap;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/Command.js
var require_Command = __commonJS((exports) => {
  var __dirname = "/home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built";
  Object.defineProperty(exports, "__esModule", { value: true });
  var commands_1 = require_built();
  var calculateSlot = require_lib();
  var standard_as_callback_1 = require_built2();
  var utils_1 = require_utils2();

  class Command {
    constructor(name, args = [], options = {}, callback) {
      this.name = name;
      this.inTransaction = false;
      this.isResolved = false;
      this.transformed = false;
      this.replyEncoding = options.replyEncoding;
      this.errorStack = options.errorStack;
      this.args = args.flat();
      this.callback = callback;
      this.initPromise();
      if (options.keyPrefix) {
        const isBufferKeyPrefix = options.keyPrefix instanceof Buffer;
        let keyPrefixBuffer = isBufferKeyPrefix ? options.keyPrefix : null;
        this._iterateKeys((key) => {
          if (key instanceof Buffer) {
            if (keyPrefixBuffer === null) {
              keyPrefixBuffer = Buffer.from(options.keyPrefix);
            }
            return Buffer.concat([keyPrefixBuffer, key]);
          } else if (isBufferKeyPrefix) {
            return Buffer.concat([options.keyPrefix, Buffer.from(String(key))]);
          }
          return options.keyPrefix + key;
        });
      }
      if (options.readOnly) {
        this.isReadOnly = true;
      }
    }
    static checkFlag(flagName, commandName) {
      return !!this.getFlagMap()[flagName][commandName];
    }
    static setArgumentTransformer(name, func) {
      this._transformer.argument[name] = func;
    }
    static setReplyTransformer(name, func) {
      this._transformer.reply[name] = func;
    }
    static getFlagMap() {
      if (!this.flagMap) {
        this.flagMap = Object.keys(Command.FLAGS).reduce((map3, flagName) => {
          map3[flagName] = {};
          Command.FLAGS[flagName].forEach((commandName) => {
            map3[flagName][commandName] = true;
          });
          return map3;
        }, {});
      }
      return this.flagMap;
    }
    getSlot() {
      if (typeof this.slot === "undefined") {
        const key = this.getKeys()[0];
        this.slot = key == null ? null : calculateSlot(key);
      }
      return this.slot;
    }
    getKeys() {
      return this._iterateKeys();
    }
    toWritable(_socket) {
      let result2;
      const commandStr = "*" + (this.args.length + 1) + "\r\n$" + Buffer.byteLength(this.name) + "\r\n" + this.name + "\r\n";
      if (this.bufferMode) {
        const buffers = new MixedBuffers;
        buffers.push(commandStr);
        for (let i = 0;i < this.args.length; ++i) {
          const arg = this.args[i];
          if (arg instanceof Buffer) {
            if (arg.length === 0) {
              buffers.push("$0\r\n\r\n");
            } else {
              buffers.push("$" + arg.length + "\r\n");
              buffers.push(arg);
              buffers.push("\r\n");
            }
          } else {
            buffers.push("$" + Buffer.byteLength(arg) + "\r\n" + arg + "\r\n");
          }
        }
        result2 = buffers.toBuffer();
      } else {
        result2 = commandStr;
        for (let i = 0;i < this.args.length; ++i) {
          const arg = this.args[i];
          result2 += "$" + Buffer.byteLength(arg) + "\r\n" + arg + "\r\n";
        }
      }
      return result2;
    }
    stringifyArguments() {
      for (let i = 0;i < this.args.length; ++i) {
        const arg = this.args[i];
        if (typeof arg === "string") {
        } else if (arg instanceof Buffer) {
          this.bufferMode = true;
        } else {
          this.args[i] = (0, utils_1.toArg)(arg);
        }
      }
    }
    transformReply(result2) {
      if (this.replyEncoding) {
        result2 = (0, utils_1.convertBufferToString)(result2, this.replyEncoding);
      }
      const transformer = Command._transformer.reply[this.name];
      if (transformer) {
        result2 = transformer(result2);
      }
      return result2;
    }
    setTimeout(ms) {
      if (!this._commandTimeoutTimer) {
        this._commandTimeoutTimer = setTimeout(() => {
          if (!this.isResolved) {
            this.reject(new Error("Command timed out"));
          }
        }, ms);
      }
    }
    initPromise() {
      const promise5 = new Promise((resolve, reject) => {
        if (!this.transformed) {
          this.transformed = true;
          const transformer = Command._transformer.argument[this.name];
          if (transformer) {
            this.args = transformer(this.args);
          }
          this.stringifyArguments();
        }
        this.resolve = this._convertValue(resolve);
        if (this.errorStack) {
          this.reject = (err) => {
            reject((0, utils_1.optimizeErrorStack)(err, this.errorStack.stack, __dirname));
          };
        } else {
          this.reject = reject;
        }
      });
      this.promise = (0, standard_as_callback_1.default)(promise5, this.callback);
    }
    _iterateKeys(transform6 = (key) => key) {
      if (typeof this.keys === "undefined") {
        this.keys = [];
        if ((0, commands_1.exists)(this.name)) {
          const keyIndexes = (0, commands_1.getKeyIndexes)(this.name, this.args);
          for (const index of keyIndexes) {
            this.args[index] = transform6(this.args[index]);
            this.keys.push(this.args[index]);
          }
        }
      }
      return this.keys;
    }
    _convertValue(resolve) {
      return (value15) => {
        try {
          const existingTimer = this._commandTimeoutTimer;
          if (existingTimer) {
            clearTimeout(existingTimer);
            delete this._commandTimeoutTimer;
          }
          resolve(this.transformReply(value15));
          this.isResolved = true;
        } catch (err) {
          this.reject(err);
        }
        return this.promise;
      };
    }
  }
  exports.default = Command;
  Command.FLAGS = {
    VALID_IN_SUBSCRIBER_MODE: [
      "subscribe",
      "psubscribe",
      "unsubscribe",
      "punsubscribe",
      "ssubscribe",
      "sunsubscribe",
      "ping",
      "quit"
    ],
    VALID_IN_MONITOR_MODE: ["monitor", "auth"],
    ENTER_SUBSCRIBER_MODE: ["subscribe", "psubscribe", "ssubscribe"],
    EXIT_SUBSCRIBER_MODE: ["unsubscribe", "punsubscribe", "sunsubscribe"],
    WILL_DISCONNECT: ["quit"]
  };
  Command._transformer = {
    argument: {},
    reply: {}
  };
  var msetArgumentTransformer = function(args) {
    if (args.length === 1) {
      if (args[0] instanceof Map) {
        return (0, utils_1.convertMapToArray)(args[0]);
      }
      if (typeof args[0] === "object" && args[0] !== null) {
        return (0, utils_1.convertObjectToArray)(args[0]);
      }
    }
    return args;
  };
  var hsetArgumentTransformer = function(args) {
    if (args.length === 2) {
      if (args[1] instanceof Map) {
        return [args[0]].concat((0, utils_1.convertMapToArray)(args[1]));
      }
      if (typeof args[1] === "object" && args[1] !== null) {
        return [args[0]].concat((0, utils_1.convertObjectToArray)(args[1]));
      }
    }
    return args;
  };
  Command.setArgumentTransformer("mset", msetArgumentTransformer);
  Command.setArgumentTransformer("msetnx", msetArgumentTransformer);
  Command.setArgumentTransformer("hset", hsetArgumentTransformer);
  Command.setArgumentTransformer("hmset", hsetArgumentTransformer);
  Command.setReplyTransformer("hgetall", function(result2) {
    if (Array.isArray(result2)) {
      const obj = {};
      for (let i = 0;i < result2.length; i += 2) {
        const key = result2[i];
        const value15 = result2[i + 1];
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value15,
            configurable: true,
            enumerable: true,
            writable: true
          });
        } else {
          obj[key] = value15;
        }
      }
      return obj;
    }
    return result2;
  });

  class MixedBuffers {
    constructor() {
      this.length = 0;
      this.items = [];
    }
    push(x) {
      this.length += Buffer.byteLength(x);
      this.items.push(x);
    }
    toBuffer() {
      const result2 = Buffer.allocUnsafe(this.length);
      let offset = 0;
      for (const item of this.items) {
        const length = Buffer.byteLength(item);
        Buffer.isBuffer(item) ? item.copy(result2, offset) : result2.write(item, offset, length);
        offset += length;
      }
      return result2;
    }
  }
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/errors/ClusterAllFailedError.js
var require_ClusterAllFailedError = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var redis_errors_1 = require_redis_errors();

  class ClusterAllFailedError extends redis_errors_1.RedisError {
    constructor(message, lastNodeError) {
      super(message);
      this.lastNodeError = lastNodeError;
      Error.captureStackTrace(this, this.constructor);
    }
    get name() {
      return this.constructor.name;
    }
  }
  exports.default = ClusterAllFailedError;
  ClusterAllFailedError.defaultMessage = "Failed to refresh slots cache.";
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/ScanStream.js
var require_ScanStream = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var stream_1 = import.meta.require("stream");

  class ScanStream extends stream_1.Readable {
    constructor(opt) {
      super(opt);
      this.opt = opt;
      this._redisCursor = "0";
      this._redisDrained = false;
    }
    _read() {
      if (this._redisDrained) {
        this.push(null);
        return;
      }
      const args = [this._redisCursor];
      if (this.opt.key) {
        args.unshift(this.opt.key);
      }
      if (this.opt.match) {
        args.push("MATCH", this.opt.match);
      }
      if (this.opt.type) {
        args.push("TYPE", this.opt.type);
      }
      if (this.opt.count) {
        args.push("COUNT", String(this.opt.count));
      }
      this.opt.redis[this.opt.command](args, (err, res) => {
        if (err) {
          this.emit("error", err);
          return;
        }
        this._redisCursor = res[0] instanceof Buffer ? res[0].toString() : res[0];
        if (this._redisCursor === "0") {
          this._redisDrained = true;
        }
        this.push(res[1]);
      });
    }
    close() {
      this._redisDrained = true;
    }
  }
  exports.default = ScanStream;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/autoPipelining.js
var require_autoPipelining = __commonJS((exports) => {
  var executeAutoPipeline = function(client, slotKey) {
    if (client._runningAutoPipelines.has(slotKey)) {
      return;
    }
    if (!client._autoPipelines.has(slotKey)) {
      return;
    }
    client._runningAutoPipelines.add(slotKey);
    const pipeline = client._autoPipelines.get(slotKey);
    client._autoPipelines.delete(slotKey);
    const callbacks = pipeline[exports.kCallbacks];
    pipeline[exports.kCallbacks] = null;
    pipeline.exec(function(err, results) {
      client._runningAutoPipelines.delete(slotKey);
      if (err) {
        for (let i = 0;i < callbacks.length; i++) {
          process.nextTick(callbacks[i], err);
        }
      } else {
        for (let i = 0;i < callbacks.length; i++) {
          process.nextTick(callbacks[i], ...results[i]);
        }
      }
      if (client._autoPipelines.has(slotKey)) {
        executeAutoPipeline(client, slotKey);
      }
    });
  };
  var shouldUseAutoPipelining = function(client, functionName, commandName) {
    return functionName && client.options.enableAutoPipelining && !client.isPipeline && !exports.notAllowedAutoPipelineCommands.includes(commandName) && !client.options.autoPipeliningIgnoredCommands.includes(commandName);
  };
  var getFirstValueInFlattenedArray = function(args) {
    for (let i = 0;i < args.length; i++) {
      const arg = args[i];
      if (typeof arg === "string") {
        return arg;
      } else if (Array.isArray(arg) || (0, lodash_1.isArguments)(arg)) {
        if (arg.length === 0) {
          continue;
        }
        return arg[0];
      }
      const flattened = [arg].flat();
      if (flattened.length > 0) {
        return flattened[0];
      }
    }
    return;
  };
  var executeWithAutoPipelining = function(client, functionName, commandName, args, callback) {
    if (client.isCluster && !client.slots.length) {
      if (client.status === "wait")
        client.connect().catch(lodash_1.noop);
      return (0, standard_as_callback_1.default)(new Promise(function(resolve, reject) {
        client.delayUntilReady((err) => {
          if (err) {
            reject(err);
            return;
          }
          executeWithAutoPipelining(client, functionName, commandName, args, null).then(resolve, reject);
        });
      }), callback);
    }
    const prefix = client.options.keyPrefix || "";
    const slotKey = client.isCluster ? client.slots[calculateSlot(`${prefix}${getFirstValueInFlattenedArray(args)}`)].join(",") : "main";
    if (!client._autoPipelines.has(slotKey)) {
      const pipeline2 = client.pipeline();
      pipeline2[exports.kExec] = false;
      pipeline2[exports.kCallbacks] = [];
      client._autoPipelines.set(slotKey, pipeline2);
    }
    const pipeline = client._autoPipelines.get(slotKey);
    if (!pipeline[exports.kExec]) {
      pipeline[exports.kExec] = true;
      setImmediate(executeAutoPipeline, client, slotKey);
    }
    const autoPipelinePromise = new Promise(function(resolve, reject) {
      pipeline[exports.kCallbacks].push(function(err, value15) {
        if (err) {
          reject(err);
          return;
        }
        resolve(value15);
      });
      if (functionName === "call") {
        args.unshift(commandName);
      }
      pipeline[functionName](...args);
    });
    return (0, standard_as_callback_1.default)(autoPipelinePromise, callback);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.executeWithAutoPipelining = exports.getFirstValueInFlattenedArray = exports.shouldUseAutoPipelining = exports.notAllowedAutoPipelineCommands = exports.kCallbacks = exports.kExec = undefined;
  var lodash_1 = require_lodash3();
  var calculateSlot = require_lib();
  var standard_as_callback_1 = require_built2();
  exports.kExec = Symbol("exec");
  exports.kCallbacks = Symbol("callbacks");
  exports.notAllowedAutoPipelineCommands = [
    "auth",
    "info",
    "script",
    "quit",
    "cluster",
    "pipeline",
    "multi",
    "subscribe",
    "psubscribe",
    "unsubscribe",
    "unpsubscribe",
    "select"
  ];
  exports.shouldUseAutoPipelining = shouldUseAutoPipelining;
  exports.getFirstValueInFlattenedArray = getFirstValueInFlattenedArray;
  exports.executeWithAutoPipelining = executeWithAutoPipelining;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/Script.js
var require_Script = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var crypto_1 = import.meta.require("crypto");
  var Command_1 = require_Command();
  var standard_as_callback_1 = require_built2();

  class Script {
    constructor(lua, numberOfKeys = null, keyPrefix = "", readOnly = false) {
      this.lua = lua;
      this.numberOfKeys = numberOfKeys;
      this.keyPrefix = keyPrefix;
      this.readOnly = readOnly;
      this.sha = (0, crypto_1.createHash)("sha1").update(lua).digest("hex");
      const sha = this.sha;
      const socketHasScriptLoaded = new WeakSet;
      this.Command = class CustomScriptCommand extends Command_1.default {
        toWritable(socket) {
          const origReject = this.reject;
          this.reject = (err) => {
            if (err.message.indexOf("NOSCRIPT") !== -1) {
              socketHasScriptLoaded.delete(socket);
            }
            origReject.call(this, err);
          };
          if (!socketHasScriptLoaded.has(socket)) {
            socketHasScriptLoaded.add(socket);
            this.name = "eval";
            this.args[0] = lua;
          } else if (this.name === "eval") {
            this.name = "evalsha";
            this.args[0] = sha;
          }
          return super.toWritable(socket);
        }
      };
    }
    execute(container, args, options, callback) {
      if (typeof this.numberOfKeys === "number") {
        args.unshift(this.numberOfKeys);
      }
      if (this.keyPrefix) {
        options.keyPrefix = this.keyPrefix;
      }
      if (this.readOnly) {
        options.readOnly = true;
      }
      const evalsha = new this.Command("evalsha", [this.sha, ...args], options);
      evalsha.promise = evalsha.promise.catch((err) => {
        if (err.message.indexOf("NOSCRIPT") === -1) {
          throw err;
        }
        const resend = new this.Command("evalsha", [this.sha, ...args], options);
        const client = container.isPipeline ? container.redis : container;
        return client.sendCommand(resend);
      });
      (0, standard_as_callback_1.default)(evalsha.promise, callback);
      return container.sendCommand(evalsha);
    }
  }
  exports.default = Script;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/utils/Commander.js
var require_Commander = __commonJS((exports) => {
  var generateFunction = function(functionName, _commandName, _encoding) {
    if (typeof _encoding === "undefined") {
      _encoding = _commandName;
      _commandName = null;
    }
    return function(...args) {
      const commandName = _commandName || args.shift();
      let callback = args[args.length - 1];
      if (typeof callback === "function") {
        args.pop();
      } else {
        callback = undefined;
      }
      const options = {
        errorStack: this.options.showFriendlyErrorStack ? new Error : undefined,
        keyPrefix: this.options.keyPrefix,
        replyEncoding: _encoding
      };
      if (!(0, autoPipelining_1.shouldUseAutoPipelining)(this, functionName, commandName)) {
        return this.sendCommand(new Command_1.default(commandName, args, options, callback));
      }
      return (0, autoPipelining_1.executeWithAutoPipelining)(this, functionName, commandName, args, callback);
    };
  };
  var generateScriptingFunction = function(functionName, commandName, script, encoding) {
    return function(...args) {
      const callback = typeof args[args.length - 1] === "function" ? args.pop() : undefined;
      const options = {
        replyEncoding: encoding
      };
      if (this.options.showFriendlyErrorStack) {
        options.errorStack = new Error;
      }
      if (!(0, autoPipelining_1.shouldUseAutoPipelining)(this, functionName, commandName)) {
        return script.execute(this, args, options, callback);
      }
      return (0, autoPipelining_1.executeWithAutoPipelining)(this, functionName, commandName, args, callback);
    };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var commands_1 = require_built();
  var autoPipelining_1 = require_autoPipelining();
  var Command_1 = require_Command();
  var Script_1 = require_Script();

  class Commander {
    constructor() {
      this.options = {};
      this.scriptsSet = {};
      this.addedBuiltinSet = new Set;
    }
    getBuiltinCommands() {
      return commands.slice(0);
    }
    createBuiltinCommand(commandName) {
      return {
        string: generateFunction(null, commandName, "utf8"),
        buffer: generateFunction(null, commandName, null)
      };
    }
    addBuiltinCommand(commandName) {
      this.addedBuiltinSet.add(commandName);
      this[commandName] = generateFunction(commandName, commandName, "utf8");
      this[commandName + "Buffer"] = generateFunction(commandName + "Buffer", commandName, null);
    }
    defineCommand(name, definition) {
      const script = new Script_1.default(definition.lua, definition.numberOfKeys, this.options.keyPrefix, definition.readOnly);
      this.scriptsSet[name] = script;
      this[name] = generateScriptingFunction(name, name, script, "utf8");
      this[name + "Buffer"] = generateScriptingFunction(name + "Buffer", name, script, null);
    }
    sendCommand(command, stream, node) {
      throw new Error('"sendCommand" is not implemented');
    }
  }
  var commands = commands_1.list.filter((command) => command !== "monitor");
  commands.push("sentinel");
  commands.forEach(function(commandName) {
    Commander.prototype[commandName] = generateFunction(commandName, commandName, "utf8");
    Commander.prototype[commandName + "Buffer"] = generateFunction(commandName + "Buffer", commandName, null);
  });
  Commander.prototype.call = generateFunction("call", "utf8");
  Commander.prototype.callBuffer = generateFunction("callBuffer", null);
  Commander.prototype.send_command = Commander.prototype.call;
  exports.default = Commander;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/Pipeline.js
var require_Pipeline = __commonJS((exports) => {
  var generateMultiWithNodes = function(redis, keys) {
    const slot = calculateSlot(keys[0]);
    const target = redis._groupsBySlot[slot];
    for (let i = 1;i < keys.length; i++) {
      if (redis._groupsBySlot[calculateSlot(keys[i])] !== target) {
        return -1;
      }
    }
    return slot;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var calculateSlot = require_lib();
  var commands_1 = require_built();
  var standard_as_callback_1 = require_built2();
  var util_1 = import.meta.require("util");
  var Command_1 = require_Command();
  var utils_1 = require_utils2();
  var Commander_1 = require_Commander();

  class Pipeline extends Commander_1.default {
    constructor(redis) {
      super();
      this.redis = redis;
      this.isPipeline = true;
      this.replyPending = 0;
      this._queue = [];
      this._result = [];
      this._transactions = 0;
      this._shaToScript = {};
      this.isCluster = this.redis.constructor.name === "Cluster" || this.redis.isCluster;
      this.options = redis.options;
      Object.keys(redis.scriptsSet).forEach((name) => {
        const script = redis.scriptsSet[name];
        this._shaToScript[script.sha] = script;
        this[name] = redis[name];
        this[name + "Buffer"] = redis[name + "Buffer"];
      });
      redis.addedBuiltinSet.forEach((name) => {
        this[name] = redis[name];
        this[name + "Buffer"] = redis[name + "Buffer"];
      });
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
      const _this = this;
      Object.defineProperty(this, "length", {
        get: function() {
          return _this._queue.length;
        }
      });
    }
    fillResult(value15, position) {
      if (this._queue[position].name === "exec" && Array.isArray(value15[1])) {
        const execLength = value15[1].length;
        for (let i = 0;i < execLength; i++) {
          if (value15[1][i] instanceof Error) {
            continue;
          }
          const cmd = this._queue[position - (execLength - i)];
          try {
            value15[1][i] = cmd.transformReply(value15[1][i]);
          } catch (err) {
            value15[1][i] = err;
          }
        }
      }
      this._result[position] = value15;
      if (--this.replyPending) {
        return;
      }
      if (this.isCluster) {
        let retriable = true;
        let commonError;
        for (let i = 0;i < this._result.length; ++i) {
          const error22 = this._result[i][0];
          const command = this._queue[i];
          if (error22) {
            if (command.name === "exec" && error22.message === "EXECABORT Transaction discarded because of previous errors.") {
              continue;
            }
            if (!commonError) {
              commonError = {
                name: error22.name,
                message: error22.message
              };
            } else if (commonError.name !== error22.name || commonError.message !== error22.message) {
              retriable = false;
              break;
            }
          } else if (!command.inTransaction) {
            const isReadOnly = (0, commands_1.exists)(command.name) && (0, commands_1.hasFlag)(command.name, "readonly");
            if (!isReadOnly) {
              retriable = false;
              break;
            }
          }
        }
        if (commonError && retriable) {
          const _this = this;
          const errv = commonError.message.split(" ");
          const queue3 = this._queue;
          let inTransaction = false;
          this._queue = [];
          for (let i = 0;i < queue3.length; ++i) {
            if (errv[0] === "ASK" && !inTransaction && queue3[i].name !== "asking" && (!queue3[i - 1] || queue3[i - 1].name !== "asking")) {
              const asking = new Command_1.default("asking");
              asking.ignore = true;
              this.sendCommand(asking);
            }
            queue3[i].initPromise();
            this.sendCommand(queue3[i]);
            inTransaction = queue3[i].inTransaction;
          }
          let matched = true;
          if (typeof this.leftRedirections === "undefined") {
            this.leftRedirections = {};
          }
          const exec = function() {
            _this.exec();
          };
          const cluster = this.redis;
          cluster.handleError(commonError, this.leftRedirections, {
            moved: function(_slot, key) {
              _this.preferKey = key;
              cluster.slots[errv[1]] = [key];
              cluster._groupsBySlot[errv[1]] = cluster._groupsIds[cluster.slots[errv[1]].join(";")];
              cluster.refreshSlotsCache();
              _this.exec();
            },
            ask: function(_slot, key) {
              _this.preferKey = key;
              _this.exec();
            },
            tryagain: exec,
            clusterDown: exec,
            connectionClosed: exec,
            maxRedirections: () => {
              matched = false;
            },
            defaults: () => {
              matched = false;
            }
          });
          if (matched) {
            return;
          }
        }
      }
      let ignoredCount = 0;
      for (let i = 0;i < this._queue.length - ignoredCount; ++i) {
        if (this._queue[i + ignoredCount].ignore) {
          ignoredCount += 1;
        }
        this._result[i] = this._result[i + ignoredCount];
      }
      this.resolve(this._result.slice(0, this._result.length - ignoredCount));
    }
    sendCommand(command) {
      if (this._transactions > 0) {
        command.inTransaction = true;
      }
      const position = this._queue.length;
      command.pipelineIndex = position;
      command.promise.then((result2) => {
        this.fillResult([null, result2], position);
      }).catch((error22) => {
        this.fillResult([error22], position);
      });
      this._queue.push(command);
      return this;
    }
    addBatch(commands) {
      let command, commandName, args;
      for (let i = 0;i < commands.length; ++i) {
        command = commands[i];
        commandName = command[0];
        args = command.slice(1);
        this[commandName].apply(this, args);
      }
      return this;
    }
  }
  exports.default = Pipeline;
  var multi = Pipeline.prototype.multi;
  Pipeline.prototype.multi = function() {
    this._transactions += 1;
    return multi.apply(this, arguments);
  };
  var execBuffer = Pipeline.prototype.execBuffer;
  Pipeline.prototype.execBuffer = (0, util_1.deprecate)(function() {
    if (this._transactions > 0) {
      this._transactions -= 1;
    }
    return execBuffer.apply(this, arguments);
  }, "Pipeline#execBuffer: Use Pipeline#exec instead");
  Pipeline.prototype.exec = function(callback) {
    if (this.isCluster && !this.redis.slots.length) {
      if (this.redis.status === "wait")
        this.redis.connect().catch(utils_1.noop);
      if (callback && !this.nodeifiedPromise) {
        this.nodeifiedPromise = true;
        (0, standard_as_callback_1.default)(this.promise, callback);
      }
      this.redis.delayUntilReady((err) => {
        if (err) {
          this.reject(err);
          return;
        }
        this.exec(callback);
      });
      return this.promise;
    }
    if (this._transactions > 0) {
      this._transactions -= 1;
      return execBuffer.apply(this, arguments);
    }
    if (!this.nodeifiedPromise) {
      this.nodeifiedPromise = true;
      (0, standard_as_callback_1.default)(this.promise, callback);
    }
    if (!this._queue.length) {
      this.resolve([]);
    }
    let pipelineSlot;
    if (this.isCluster) {
      const sampleKeys = [];
      for (let i = 0;i < this._queue.length; i++) {
        const keys = this._queue[i].getKeys();
        if (keys.length) {
          sampleKeys.push(keys[0]);
        }
        if (keys.length && calculateSlot.generateMulti(keys) < 0) {
          this.reject(new Error("All the keys in a pipeline command should belong to the same slot"));
          return this.promise;
        }
      }
      if (sampleKeys.length) {
        pipelineSlot = generateMultiWithNodes(this.redis, sampleKeys);
        if (pipelineSlot < 0) {
          this.reject(new Error("All keys in the pipeline should belong to the same slots allocation group"));
          return this.promise;
        }
      } else {
        pipelineSlot = Math.random() * 16384 | 0;
      }
    }
    const _this = this;
    execPipeline();
    return this.promise;
    function execPipeline() {
      let writePending = _this.replyPending = _this._queue.length;
      let node;
      if (_this.isCluster) {
        node = {
          slot: pipelineSlot,
          redis: _this.redis.connectionPool.nodes.all[_this.preferKey]
        };
      }
      let data = "";
      let buffers;
      const stream = {
        isPipeline: true,
        destination: _this.isCluster ? node : { redis: _this.redis },
        write(writable) {
          if (typeof writable !== "string") {
            if (!buffers) {
              buffers = [];
            }
            if (data) {
              buffers.push(Buffer.from(data, "utf8"));
              data = "";
            }
            buffers.push(writable);
          } else {
            data += writable;
          }
          if (!--writePending) {
            if (buffers) {
              if (data) {
                buffers.push(Buffer.from(data, "utf8"));
              }
              stream.destination.redis.stream.write(Buffer.concat(buffers));
            } else {
              stream.destination.redis.stream.write(data);
            }
            writePending = _this._queue.length;
            data = "";
            buffers = undefined;
          }
        }
      };
      for (let i = 0;i < _this._queue.length; ++i) {
        _this.redis.sendCommand(_this._queue[i], stream, node);
      }
      return _this.promise;
    }
  };
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/transaction.js
var require_transaction = __commonJS((exports) => {
  var addTransactionSupport = function(redis) {
    redis.pipeline = function(commands) {
      const pipeline = new Pipeline_1.default(this);
      if (Array.isArray(commands)) {
        pipeline.addBatch(commands);
      }
      return pipeline;
    };
    const { multi } = redis;
    redis.multi = function(commands, options) {
      if (typeof options === "undefined" && !Array.isArray(commands)) {
        options = commands;
        commands = null;
      }
      if (options && options.pipeline === false) {
        return multi.call(this);
      }
      const pipeline = new Pipeline_1.default(this);
      pipeline.multi();
      if (Array.isArray(commands)) {
        pipeline.addBatch(commands);
      }
      const exec2 = pipeline.exec;
      pipeline.exec = function(callback) {
        if (this.isCluster && !this.redis.slots.length) {
          if (this.redis.status === "wait")
            this.redis.connect().catch(utils_1.noop);
          return (0, standard_as_callback_1.default)(new Promise((resolve, reject) => {
            this.redis.delayUntilReady((err) => {
              if (err) {
                reject(err);
                return;
              }
              this.exec(pipeline).then(resolve, reject);
            });
          }), callback);
        }
        if (this._transactions > 0) {
          exec2.call(pipeline);
        }
        if (this.nodeifiedPromise) {
          return exec2.call(pipeline);
        }
        const promise5 = exec2.call(pipeline);
        return (0, standard_as_callback_1.default)(promise5.then(function(result2) {
          const execResult = result2[result2.length - 1];
          if (typeof execResult === "undefined") {
            throw new Error("Pipeline cannot be used to send any commands when the `exec()` has been called on it.");
          }
          if (execResult[0]) {
            execResult[0].previousErrors = [];
            for (let i = 0;i < result2.length - 1; ++i) {
              if (result2[i][0]) {
                execResult[0].previousErrors.push(result2[i][0]);
              }
            }
            throw execResult[0];
          }
          return (0, utils_1.wrapMultiResult)(execResult[1]);
        }), callback);
      };
      const { execBuffer } = pipeline;
      pipeline.execBuffer = function(callback) {
        if (this._transactions > 0) {
          execBuffer.call(pipeline);
        }
        return pipeline.exec(callback);
      };
      return pipeline;
    };
    const { exec } = redis;
    redis.exec = function(callback) {
      return (0, standard_as_callback_1.default)(exec.call(this).then(function(results) {
        if (Array.isArray(results)) {
          results = (0, utils_1.wrapMultiResult)(results);
        }
        return results;
      }), callback);
    };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.addTransactionSupport = undefined;
  var utils_1 = require_utils2();
  var standard_as_callback_1 = require_built2();
  var Pipeline_1 = require_Pipeline();
  exports.addTransactionSupport = addTransactionSupport;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/utils/applyMixin.js
var require_applyMixin = __commonJS((exports) => {
  var applyMixin = function(derivedConstructor, mixinConstructor) {
    Object.getOwnPropertyNames(mixinConstructor.prototype).forEach((name) => {
      Object.defineProperty(derivedConstructor.prototype, name, Object.getOwnPropertyDescriptor(mixinConstructor.prototype, name));
    });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = applyMixin;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/cluster/ClusterOptions.js
var require_ClusterOptions = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DEFAULT_CLUSTER_OPTIONS = undefined;
  var dns_1 = import.meta.require("dns");
  exports.DEFAULT_CLUSTER_OPTIONS = {
    clusterRetryStrategy: (times) => Math.min(100 + times * 2, 2000),
    enableOfflineQueue: true,
    enableReadyCheck: true,
    scaleReads: "master",
    maxRedirections: 16,
    retryDelayOnMoved: 0,
    retryDelayOnFailover: 100,
    retryDelayOnClusterDown: 100,
    retryDelayOnTryAgain: 100,
    slotsRefreshTimeout: 1000,
    useSRVRecords: false,
    resolveSrv: dns_1.resolveSrv,
    dnsLookup: dns_1.lookup,
    enableAutoPipelining: false,
    autoPipeliningIgnoredCommands: []
  };
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/cluster/util.js
var require_util = __commonJS((exports) => {
  var getNodeKey = function(node) {
    node.port = node.port || 6379;
    node.host = node.host || "127.0.0.1";
    return node.host + ":" + node.port;
  };
  var nodeKeyToRedisOptions = function(nodeKey) {
    const portIndex = nodeKey.lastIndexOf(":");
    if (portIndex === -1) {
      throw new Error(`Invalid node key ${nodeKey}`);
    }
    return {
      host: nodeKey.slice(0, portIndex),
      port: Number(nodeKey.slice(portIndex + 1))
    };
  };
  var normalizeNodeOptions = function(nodes) {
    return nodes.map((node) => {
      const options = {};
      if (typeof node === "object") {
        Object.assign(options, node);
      } else if (typeof node === "string") {
        Object.assign(options, (0, utils_1.parseURL)(node));
      } else if (typeof node === "number") {
        options.port = node;
      } else {
        throw new Error("Invalid argument " + node);
      }
      if (typeof options.port === "string") {
        options.port = parseInt(options.port, 10);
      }
      delete options.db;
      if (!options.port) {
        options.port = 6379;
      }
      if (!options.host) {
        options.host = "127.0.0.1";
      }
      return (0, utils_1.resolveTLSProfile)(options);
    });
  };
  var getUniqueHostnamesFromOptions = function(nodes) {
    const uniqueHostsMap = {};
    nodes.forEach((node) => {
      uniqueHostsMap[node.host] = true;
    });
    return Object.keys(uniqueHostsMap).filter((host) => !(0, net_1.isIP)(host));
  };
  var groupSrvRecords = function(records) {
    const recordsByPriority = {};
    for (const record4 of records) {
      if (!recordsByPriority.hasOwnProperty(record4.priority)) {
        recordsByPriority[record4.priority] = {
          totalWeight: record4.weight,
          records: [record4]
        };
      } else {
        recordsByPriority[record4.priority].totalWeight += record4.weight;
        recordsByPriority[record4.priority].records.push(record4);
      }
    }
    return recordsByPriority;
  };
  var weightSrvRecords = function(recordsGroup) {
    if (recordsGroup.records.length === 1) {
      recordsGroup.totalWeight = 0;
      return recordsGroup.records.shift();
    }
    const random = Math.floor(Math.random() * (recordsGroup.totalWeight + recordsGroup.records.length));
    let total = 0;
    for (const [i, record4] of recordsGroup.records.entries()) {
      total += 1 + record4.weight;
      if (total > random) {
        recordsGroup.totalWeight -= record4.weight;
        recordsGroup.records.splice(i, 1);
        return record4;
      }
    }
  };
  var getConnectionName = function(component, nodeConnectionName) {
    const prefix = `ioredis-cluster(${component})`;
    return nodeConnectionName ? `${prefix}:${nodeConnectionName}` : prefix;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getConnectionName = exports.weightSrvRecords = exports.groupSrvRecords = exports.getUniqueHostnamesFromOptions = exports.normalizeNodeOptions = exports.nodeKeyToRedisOptions = exports.getNodeKey = undefined;
  var utils_1 = require_utils2();
  var net_1 = import.meta.require("net");
  exports.getNodeKey = getNodeKey;
  exports.nodeKeyToRedisOptions = nodeKeyToRedisOptions;
  exports.normalizeNodeOptions = normalizeNodeOptions;
  exports.getUniqueHostnamesFromOptions = getUniqueHostnamesFromOptions;
  exports.groupSrvRecords = groupSrvRecords;
  exports.weightSrvRecords = weightSrvRecords;
  exports.getConnectionName = getConnectionName;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/cluster/ClusterSubscriber.js
var require_ClusterSubscriber = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var util_1 = require_util();
  var utils_1 = require_utils2();
  var Redis_1 = require_Redis();
  var debug = (0, utils_1.Debug)("cluster:subscriber");

  class ClusterSubscriber {
    constructor(connectionPool, emitter) {
      this.connectionPool = connectionPool;
      this.emitter = emitter;
      this.started = false;
      this.subscriber = null;
      this.onSubscriberEnd = () => {
        if (!this.started) {
          debug("subscriber has disconnected, but ClusterSubscriber is not started, so not reconnecting.");
          return;
        }
        debug("subscriber has disconnected, selecting a new one...");
        this.selectSubscriber();
      };
      this.connectionPool.on("-node", (_, key) => {
        if (!this.started || !this.subscriber) {
          return;
        }
        if ((0, util_1.getNodeKey)(this.subscriber.options) === key) {
          debug("subscriber has left, selecting a new one...");
          this.selectSubscriber();
        }
      });
      this.connectionPool.on("+node", () => {
        if (!this.started || this.subscriber) {
          return;
        }
        debug("a new node is discovered and there is no subscriber, selecting a new one...");
        this.selectSubscriber();
      });
    }
    getInstance() {
      return this.subscriber;
    }
    start() {
      this.started = true;
      this.selectSubscriber();
      debug("started");
    }
    stop() {
      this.started = false;
      if (this.subscriber) {
        this.subscriber.disconnect();
        this.subscriber = null;
      }
      debug("stopped");
    }
    selectSubscriber() {
      const lastActiveSubscriber = this.lastActiveSubscriber;
      if (lastActiveSubscriber) {
        lastActiveSubscriber.off("end", this.onSubscriberEnd);
        lastActiveSubscriber.disconnect();
      }
      if (this.subscriber) {
        this.subscriber.off("end", this.onSubscriberEnd);
        this.subscriber.disconnect();
      }
      const sampleNode = (0, utils_1.sample)(this.connectionPool.getNodes());
      if (!sampleNode) {
        debug("selecting subscriber failed since there is no node discovered in the cluster yet");
        this.subscriber = null;
        return;
      }
      const { options } = sampleNode;
      debug("selected a subscriber %s:%s", options.host, options.port);
      this.subscriber = new Redis_1.default({
        port: options.port,
        host: options.host,
        username: options.username,
        password: options.password,
        enableReadyCheck: true,
        connectionName: (0, util_1.getConnectionName)("subscriber", options.connectionName),
        lazyConnect: true,
        tls: options.tls,
        retryStrategy: null
      });
      this.subscriber.on("error", utils_1.noop);
      this.subscriber.once("end", this.onSubscriberEnd);
      const previousChannels = { subscribe: [], psubscribe: [], ssubscribe: [] };
      if (lastActiveSubscriber) {
        const condition = lastActiveSubscriber.condition || lastActiveSubscriber.prevCondition;
        if (condition && condition.subscriber) {
          previousChannels.subscribe = condition.subscriber.channels("subscribe");
          previousChannels.psubscribe = condition.subscriber.channels("psubscribe");
          previousChannels.ssubscribe = condition.subscriber.channels("ssubscribe");
        }
      }
      if (previousChannels.subscribe.length || previousChannels.psubscribe.length || previousChannels.ssubscribe.length) {
        let pending = 0;
        for (const type75 of ["subscribe", "psubscribe", "ssubscribe"]) {
          const channels = previousChannels[type75];
          if (channels.length) {
            pending += 1;
            debug("%s %d channels", type75, channels.length);
            this.subscriber[type75](channels).then(() => {
              if (!--pending) {
                this.lastActiveSubscriber = this.subscriber;
              }
            }).catch(() => {
              debug("failed to %s %d channels", type75, channels.length);
            });
          }
        }
      } else {
        this.lastActiveSubscriber = this.subscriber;
      }
      for (const event of [
        "message",
        "messageBuffer",
        "smessage",
        "smessageBuffer"
      ]) {
        this.subscriber.on(event, (arg1, arg2) => {
          this.emitter.emit(event, arg1, arg2);
        });
      }
      for (const event of ["pmessage", "pmessageBuffer"]) {
        this.subscriber.on(event, (arg1, arg2, arg3) => {
          this.emitter.emit(event, arg1, arg2, arg3);
        });
      }
    }
  }
  exports.default = ClusterSubscriber;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/cluster/ConnectionPool.js
var require_ConnectionPool = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var events_1 = import.meta.require("events");
  var utils_1 = require_utils2();
  var util_1 = require_util();
  var Redis_1 = require_Redis();
  var debug = (0, utils_1.Debug)("cluster:connectionPool");

  class ConnectionPool extends events_1.EventEmitter {
    constructor(redisOptions) {
      super();
      this.redisOptions = redisOptions;
      this.nodes = {
        all: {},
        master: {},
        slave: {}
      };
      this.specifiedOptions = {};
    }
    getNodes(role2 = "all") {
      const nodes = this.nodes[role2];
      return Object.keys(nodes).map((key) => nodes[key]);
    }
    getInstanceByKey(key) {
      return this.nodes.all[key];
    }
    getSampleInstance(role2) {
      const keys = Object.keys(this.nodes[role2]);
      const sampleKey = (0, utils_1.sample)(keys);
      return this.nodes[role2][sampleKey];
    }
    findOrCreate(node, readOnly = false) {
      const key = (0, util_1.getNodeKey)(node);
      readOnly = Boolean(readOnly);
      if (this.specifiedOptions[key]) {
        Object.assign(node, this.specifiedOptions[key]);
      } else {
        this.specifiedOptions[key] = node;
      }
      let redis;
      if (this.nodes.all[key]) {
        redis = this.nodes.all[key];
        if (redis.options.readOnly !== readOnly) {
          redis.options.readOnly = readOnly;
          debug("Change role of %s to %s", key, readOnly ? "slave" : "master");
          redis[readOnly ? "readonly" : "readwrite"]().catch(utils_1.noop);
          if (readOnly) {
            delete this.nodes.master[key];
            this.nodes.slave[key] = redis;
          } else {
            delete this.nodes.slave[key];
            this.nodes.master[key] = redis;
          }
        }
      } else {
        debug("Connecting to %s as %s", key, readOnly ? "slave" : "master");
        redis = new Redis_1.default((0, utils_1.defaults)({
          retryStrategy: null,
          enableOfflineQueue: true,
          readOnly
        }, node, this.redisOptions, { lazyConnect: true }));
        this.nodes.all[key] = redis;
        this.nodes[readOnly ? "slave" : "master"][key] = redis;
        redis.once("end", () => {
          this.removeNode(key);
          this.emit("-node", redis, key);
          if (!Object.keys(this.nodes.all).length) {
            this.emit("drain");
          }
        });
        this.emit("+node", redis, key);
        redis.on("error", function(error22) {
          this.emit("nodeError", error22, key);
        });
      }
      return redis;
    }
    reset(nodes) {
      debug("Reset with %O", nodes);
      const newNodes = {};
      nodes.forEach((node) => {
        const key = (0, util_1.getNodeKey)(node);
        if (!(node.readOnly && newNodes[key])) {
          newNodes[key] = node;
        }
      });
      Object.keys(this.nodes.all).forEach((key) => {
        if (!newNodes[key]) {
          debug("Disconnect %s because the node does not hold any slot", key);
          this.nodes.all[key].disconnect();
          this.removeNode(key);
        }
      });
      Object.keys(newNodes).forEach((key) => {
        const node = newNodes[key];
        this.findOrCreate(node, node.readOnly);
      });
    }
    removeNode(key) {
      const { nodes } = this;
      if (nodes.all[key]) {
        debug("Remove %s from the pool", key);
        delete nodes.all[key];
      }
      delete nodes.master[key];
      delete nodes.slave[key];
    }
  }
  exports.default = ConnectionPool;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/denque/index.js
var require_denque = __commonJS((exports, module) => {
  var Denque = function(array6, options) {
    var options = options || {};
    this._capacity = options.capacity;
    this._head = 0;
    this._tail = 0;
    if (Array.isArray(array6)) {
      this._fromArray(array6);
    } else {
      this._capacityMask = 3;
      this._list = new Array(4);
    }
  };
  Denque.prototype.peekAt = function peekAt(index) {
    var i = index;
    if (i !== (i | 0)) {
      return;
    }
    var len = this.size();
    if (i >= len || i < -len)
      return;
    if (i < 0)
      i += len;
    i = this._head + i & this._capacityMask;
    return this._list[i];
  };
  Denque.prototype.get = function get(i) {
    return this.peekAt(i);
  };
  Denque.prototype.peek = function peek() {
    if (this._head === this._tail)
      return;
    return this._list[this._head];
  };
  Denque.prototype.peekFront = function peekFront() {
    return this.peek();
  };
  Denque.prototype.peekBack = function peekBack() {
    return this.peekAt(-1);
  };
  Object.defineProperty(Denque.prototype, "length", {
    get: function length() {
      return this.size();
    }
  });
  Denque.prototype.size = function size() {
    if (this._head === this._tail)
      return 0;
    if (this._head < this._tail)
      return this._tail - this._head;
    else
      return this._capacityMask + 1 - (this._head - this._tail);
  };
  Denque.prototype.unshift = function unshift(item) {
    if (arguments.length === 0)
      return this.size();
    var len = this._list.length;
    this._head = this._head - 1 + len & this._capacityMask;
    this._list[this._head] = item;
    if (this._tail === this._head)
      this._growArray();
    if (this._capacity && this.size() > this._capacity)
      this.pop();
    if (this._head < this._tail)
      return this._tail - this._head;
    else
      return this._capacityMask + 1 - (this._head - this._tail);
  };
  Denque.prototype.shift = function shift() {
    var head = this._head;
    if (head === this._tail)
      return;
    var item = this._list[head];
    this._list[head] = undefined;
    this._head = head + 1 & this._capacityMask;
    if (head < 2 && this._tail > 1e4 && this._tail <= this._list.length >>> 2)
      this._shrinkArray();
    return item;
  };
  Denque.prototype.push = function push(item) {
    if (arguments.length === 0)
      return this.size();
    var tail = this._tail;
    this._list[tail] = item;
    this._tail = tail + 1 & this._capacityMask;
    if (this._tail === this._head) {
      this._growArray();
    }
    if (this._capacity && this.size() > this._capacity) {
      this.shift();
    }
    if (this._head < this._tail)
      return this._tail - this._head;
    else
      return this._capacityMask + 1 - (this._head - this._tail);
  };
  Denque.prototype.pop = function pop() {
    var tail = this._tail;
    if (tail === this._head)
      return;
    var len = this._list.length;
    this._tail = tail - 1 + len & this._capacityMask;
    var item = this._list[this._tail];
    this._list[this._tail] = undefined;
    if (this._head < 2 && tail > 1e4 && tail <= len >>> 2)
      this._shrinkArray();
    return item;
  };
  Denque.prototype.removeOne = function removeOne(index) {
    var i = index;
    if (i !== (i | 0)) {
      return;
    }
    if (this._head === this._tail)
      return;
    var size2 = this.size();
    var len = this._list.length;
    if (i >= size2 || i < -size2)
      return;
    if (i < 0)
      i += size2;
    i = this._head + i & this._capacityMask;
    var item = this._list[i];
    var k;
    if (index < size2 / 2) {
      for (k = index;k > 0; k--) {
        this._list[i] = this._list[i = i - 1 + len & this._capacityMask];
      }
      this._list[i] = undefined;
      this._head = this._head + 1 + len & this._capacityMask;
    } else {
      for (k = size2 - 1 - index;k > 0; k--) {
        this._list[i] = this._list[i = i + 1 + len & this._capacityMask];
      }
      this._list[i] = undefined;
      this._tail = this._tail - 1 + len & this._capacityMask;
    }
    return item;
  };
  Denque.prototype.remove = function remove(index, count) {
    var i = index;
    var removed;
    var del_count = count;
    if (i !== (i | 0)) {
      return;
    }
    if (this._head === this._tail)
      return;
    var size2 = this.size();
    var len = this._list.length;
    if (i >= size2 || i < -size2 || count < 1)
      return;
    if (i < 0)
      i += size2;
    if (count === 1 || !count) {
      removed = new Array(1);
      removed[0] = this.removeOne(i);
      return removed;
    }
    if (i === 0 && i + count >= size2) {
      removed = this.toArray();
      this.clear();
      return removed;
    }
    if (i + count > size2)
      count = size2 - i;
    var k;
    removed = new Array(count);
    for (k = 0;k < count; k++) {
      removed[k] = this._list[this._head + i + k & this._capacityMask];
    }
    i = this._head + i & this._capacityMask;
    if (index + count === size2) {
      this._tail = this._tail - count + len & this._capacityMask;
      for (k = count;k > 0; k--) {
        this._list[i = i + 1 + len & this._capacityMask] = undefined;
      }
      return removed;
    }
    if (index === 0) {
      this._head = this._head + count + len & this._capacityMask;
      for (k = count - 1;k > 0; k--) {
        this._list[i = i + 1 + len & this._capacityMask] = undefined;
      }
      return removed;
    }
    if (i < size2 / 2) {
      this._head = this._head + index + count + len & this._capacityMask;
      for (k = index;k > 0; k--) {
        this.unshift(this._list[i = i - 1 + len & this._capacityMask]);
      }
      i = this._head - 1 + len & this._capacityMask;
      while (del_count > 0) {
        this._list[i = i - 1 + len & this._capacityMask] = undefined;
        del_count--;
      }
      if (index < 0)
        this._tail = i;
    } else {
      this._tail = i;
      i = i + count + len & this._capacityMask;
      for (k = size2 - (count + index);k > 0; k--) {
        this.push(this._list[i++]);
      }
      i = this._tail;
      while (del_count > 0) {
        this._list[i = i + 1 + len & this._capacityMask] = undefined;
        del_count--;
      }
    }
    if (this._head < 2 && this._tail > 1e4 && this._tail <= len >>> 2)
      this._shrinkArray();
    return removed;
  };
  Denque.prototype.splice = function splice(index, count) {
    var i = index;
    if (i !== (i | 0)) {
      return;
    }
    var size2 = this.size();
    if (i < 0)
      i += size2;
    if (i > size2)
      return;
    if (arguments.length > 2) {
      var k;
      var temp;
      var removed;
      var arg_len = arguments.length;
      var len = this._list.length;
      var arguments_index = 2;
      if (!size2 || i < size2 / 2) {
        temp = new Array(i);
        for (k = 0;k < i; k++) {
          temp[k] = this._list[this._head + k & this._capacityMask];
        }
        if (count === 0) {
          removed = [];
          if (i > 0) {
            this._head = this._head + i + len & this._capacityMask;
          }
        } else {
          removed = this.remove(i, count);
          this._head = this._head + i + len & this._capacityMask;
        }
        while (arg_len > arguments_index) {
          this.unshift(arguments[--arg_len]);
        }
        for (k = i;k > 0; k--) {
          this.unshift(temp[k - 1]);
        }
      } else {
        temp = new Array(size2 - (i + count));
        var leng = temp.length;
        for (k = 0;k < leng; k++) {
          temp[k] = this._list[this._head + i + count + k & this._capacityMask];
        }
        if (count === 0) {
          removed = [];
          if (i != size2) {
            this._tail = this._head + i + len & this._capacityMask;
          }
        } else {
          removed = this.remove(i, count);
          this._tail = this._tail - leng + len & this._capacityMask;
        }
        while (arguments_index < arg_len) {
          this.push(arguments[arguments_index++]);
        }
        for (k = 0;k < leng; k++) {
          this.push(temp[k]);
        }
      }
      return removed;
    } else {
      return this.remove(i, count);
    }
  };
  Denque.prototype.clear = function clear() {
    this._list = new Array(this._list.length);
    this._head = 0;
    this._tail = 0;
  };
  Denque.prototype.isEmpty = function isEmpty() {
    return this._head === this._tail;
  };
  Denque.prototype.toArray = function toArray() {
    return this._copyArray(false);
  };
  Denque.prototype._fromArray = function _fromArray(array6) {
    var length = array6.length;
    var capacity = this._nextPowerOf2(length);
    this._list = new Array(capacity);
    this._capacityMask = capacity - 1;
    this._tail = length;
    for (var i = 0;i < length; i++)
      this._list[i] = array6[i];
  };
  Denque.prototype._copyArray = function _copyArray(fullCopy, size2) {
    var src = this._list;
    var capacity = src.length;
    var length = this.length;
    size2 = size2 | length;
    if (size2 == length && this._head < this._tail) {
      return this._list.slice(this._head, this._tail);
    }
    var dest = new Array(size2);
    var k = 0;
    var i;
    if (fullCopy || this._head > this._tail) {
      for (i = this._head;i < capacity; i++)
        dest[k++] = src[i];
      for (i = 0;i < this._tail; i++)
        dest[k++] = src[i];
    } else {
      for (i = this._head;i < this._tail; i++)
        dest[k++] = src[i];
    }
    return dest;
  };
  Denque.prototype._growArray = function _growArray() {
    if (this._head != 0) {
      var newList = this._copyArray(true, this._list.length << 1);
      this._tail = this._list.length;
      this._head = 0;
      this._list = newList;
    } else {
      this._tail = this._list.length;
      this._list.length <<= 1;
    }
    this._capacityMask = this._capacityMask << 1 | 1;
  };
  Denque.prototype._shrinkArray = function _shrinkArray() {
    this._list.length >>>= 1;
    this._capacityMask >>>= 1;
  };
  Denque.prototype._nextPowerOf2 = function _nextPowerOf2(num) {
    var log2 = Math.log(num) / Math.log(2);
    var nextPow2 = 1 << log2 + 1;
    return Math.max(nextPow2, 4);
  };
  module.exports = Denque;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/cluster/DelayQueue.js
var require_DelayQueue = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var utils_1 = require_utils2();
  var Deque = require_denque();
  var debug = (0, utils_1.Debug)("delayqueue");

  class DelayQueue {
    constructor() {
      this.queues = {};
      this.timeouts = {};
    }
    push(bucket, item, options) {
      const callback = options.callback || process.nextTick;
      if (!this.queues[bucket]) {
        this.queues[bucket] = new Deque;
      }
      const queue3 = this.queues[bucket];
      queue3.push(item);
      if (!this.timeouts[bucket]) {
        this.timeouts[bucket] = setTimeout(() => {
          callback(() => {
            this.timeouts[bucket] = null;
            this.execute(bucket);
          });
        }, options.timeout);
      }
    }
    execute(bucket) {
      const queue3 = this.queues[bucket];
      if (!queue3) {
        return;
      }
      const { length } = queue3;
      if (!length) {
        return;
      }
      debug("send %d commands in %s queue", length, bucket);
      this.queues[bucket] = null;
      while (queue3.length > 0) {
        queue3.shift()();
      }
    }
  }
  exports.default = DelayQueue;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/cluster/index.js
var require_cluster = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var commands_1 = require_built();
  var events_1 = import.meta.require("events");
  var redis_errors_1 = require_redis_errors();
  var standard_as_callback_1 = require_built2();
  var Command_1 = require_Command();
  var ClusterAllFailedError_1 = require_ClusterAllFailedError();
  var Redis_1 = require_Redis();
  var ScanStream_1 = require_ScanStream();
  var transaction_1 = require_transaction();
  var utils_1 = require_utils2();
  var applyMixin_1 = require_applyMixin();
  var Commander_1 = require_Commander();
  var ClusterOptions_1 = require_ClusterOptions();
  var ClusterSubscriber_1 = require_ClusterSubscriber();
  var ConnectionPool_1 = require_ConnectionPool();
  var DelayQueue_1 = require_DelayQueue();
  var util_1 = require_util();
  var Deque = require_denque();
  var debug = (0, utils_1.Debug)("cluster");
  var REJECT_OVERWRITTEN_COMMANDS = new WeakSet;

  class Cluster extends Commander_1.default {
    constructor(startupNodes, options = {}) {
      super();
      this.slots = [];
      this._groupsIds = {};
      this._groupsBySlot = Array(16384);
      this.isCluster = true;
      this.retryAttempts = 0;
      this.delayQueue = new DelayQueue_1.default;
      this.offlineQueue = new Deque;
      this.isRefreshing = false;
      this._autoPipelines = new Map;
      this._runningAutoPipelines = new Set;
      this._readyDelayedCallbacks = [];
      this.connectionEpoch = 0;
      events_1.EventEmitter.call(this);
      this.startupNodes = startupNodes;
      this.options = (0, utils_1.defaults)({}, options, ClusterOptions_1.DEFAULT_CLUSTER_OPTIONS, this.options);
      if (this.options.redisOptions && this.options.redisOptions.keyPrefix && !this.options.keyPrefix) {
        this.options.keyPrefix = this.options.redisOptions.keyPrefix;
      }
      if (typeof this.options.scaleReads !== "function" && ["all", "master", "slave"].indexOf(this.options.scaleReads) === -1) {
        throw new Error('Invalid option scaleReads "' + this.options.scaleReads + '". Expected "all", "master", "slave" or a custom function');
      }
      this.connectionPool = new ConnectionPool_1.default(this.options.redisOptions);
      this.connectionPool.on("-node", (redis, key) => {
        this.emit("-node", redis);
      });
      this.connectionPool.on("+node", (redis) => {
        this.emit("+node", redis);
      });
      this.connectionPool.on("drain", () => {
        this.setStatus("close");
      });
      this.connectionPool.on("nodeError", (error22, key) => {
        this.emit("node error", error22, key);
      });
      this.subscriber = new ClusterSubscriber_1.default(this.connectionPool, this);
      if (this.options.scripts) {
        Object.entries(this.options.scripts).forEach(([name, definition]) => {
          this.defineCommand(name, definition);
        });
      }
      if (this.options.lazyConnect) {
        this.setStatus("wait");
      } else {
        this.connect().catch((err) => {
          debug("connecting failed: %s", err);
        });
      }
    }
    connect() {
      return new Promise((resolve, reject) => {
        if (this.status === "connecting" || this.status === "connect" || this.status === "ready") {
          reject(new Error("Redis is already connecting/connected"));
          return;
        }
        const epoch = ++this.connectionEpoch;
        this.setStatus("connecting");
        this.resolveStartupNodeHostnames().then((nodes) => {
          if (this.connectionEpoch !== epoch) {
            debug("discard connecting after resolving startup nodes because epoch not match: %d != %d", epoch, this.connectionEpoch);
            reject(new redis_errors_1.RedisError("Connection is discarded because a new connection is made"));
            return;
          }
          if (this.status !== "connecting") {
            debug("discard connecting after resolving startup nodes because the status changed to %s", this.status);
            reject(new redis_errors_1.RedisError("Connection is aborted"));
            return;
          }
          this.connectionPool.reset(nodes);
          const readyHandler = () => {
            this.setStatus("ready");
            this.retryAttempts = 0;
            this.executeOfflineCommands();
            this.resetNodesRefreshInterval();
            resolve();
          };
          let closeListener = undefined;
          const refreshListener = () => {
            this.invokeReadyDelayedCallbacks(undefined);
            this.removeListener("close", closeListener);
            this.manuallyClosing = false;
            this.setStatus("connect");
            if (this.options.enableReadyCheck) {
              this.readyCheck((err, fail) => {
                if (err || fail) {
                  debug("Ready check failed (%s). Reconnecting...", err || fail);
                  if (this.status === "connect") {
                    this.disconnect(true);
                  }
                } else {
                  readyHandler();
                }
              });
            } else {
              readyHandler();
            }
          };
          closeListener = () => {
            const error22 = new Error("None of startup nodes is available");
            this.removeListener("refresh", refreshListener);
            this.invokeReadyDelayedCallbacks(error22);
            reject(error22);
          };
          this.once("refresh", refreshListener);
          this.once("close", closeListener);
          this.once("close", this.handleCloseEvent.bind(this));
          this.refreshSlotsCache((err) => {
            if (err && err.message === ClusterAllFailedError_1.default.defaultMessage) {
              Redis_1.default.prototype.silentEmit.call(this, "error", err);
              this.connectionPool.reset([]);
            }
          });
          this.subscriber.start();
        }).catch((err) => {
          this.setStatus("close");
          this.handleCloseEvent(err);
          this.invokeReadyDelayedCallbacks(err);
          reject(err);
        });
      });
    }
    disconnect(reconnect = false) {
      const status = this.status;
      this.setStatus("disconnecting");
      if (!reconnect) {
        this.manuallyClosing = true;
      }
      if (this.reconnectTimeout && !reconnect) {
        clearTimeout(this.reconnectTimeout);
        this.reconnectTimeout = null;
        debug("Canceled reconnecting attempts");
      }
      this.clearNodesRefreshInterval();
      this.subscriber.stop();
      if (status === "wait") {
        this.setStatus("close");
        this.handleCloseEvent();
      } else {
        this.connectionPool.reset([]);
      }
    }
    quit(callback) {
      const status = this.status;
      this.setStatus("disconnecting");
      this.manuallyClosing = true;
      if (this.reconnectTimeout) {
        clearTimeout(this.reconnectTimeout);
        this.reconnectTimeout = null;
      }
      this.clearNodesRefreshInterval();
      this.subscriber.stop();
      if (status === "wait") {
        const ret = (0, standard_as_callback_1.default)(Promise.resolve("OK"), callback);
        setImmediate(function() {
          this.setStatus("close");
          this.handleCloseEvent();
        }.bind(this));
        return ret;
      }
      return (0, standard_as_callback_1.default)(Promise.all(this.nodes().map((node) => node.quit().catch((err) => {
        if (err.message === utils_1.CONNECTION_CLOSED_ERROR_MSG) {
          return "OK";
        }
        throw err;
      }))).then(() => "OK"), callback);
    }
    duplicate(overrideStartupNodes = [], overrideOptions = {}) {
      const startupNodes = overrideStartupNodes.length > 0 ? overrideStartupNodes : this.startupNodes.slice(0);
      const options = Object.assign({}, this.options, overrideOptions);
      return new Cluster(startupNodes, options);
    }
    nodes(role2 = "all") {
      if (role2 !== "all" && role2 !== "master" && role2 !== "slave") {
        throw new Error('Invalid role "' + role2 + '". Expected "all", "master" or "slave"');
      }
      return this.connectionPool.getNodes(role2);
    }
    delayUntilReady(callback) {
      this._readyDelayedCallbacks.push(callback);
    }
    get autoPipelineQueueSize() {
      let queued = 0;
      for (const pipeline of this._autoPipelines.values()) {
        queued += pipeline.length;
      }
      return queued;
    }
    refreshSlotsCache(callback) {
      if (this.isRefreshing) {
        if (callback) {
          process.nextTick(callback);
        }
        return;
      }
      this.isRefreshing = true;
      const _this = this;
      const wrapper = (error22) => {
        this.isRefreshing = false;
        if (callback) {
          callback(error22);
        }
      };
      const nodes = (0, utils_1.shuffle)(this.connectionPool.getNodes());
      let lastNodeError = null;
      function tryNode(index) {
        if (index === nodes.length) {
          const error22 = new ClusterAllFailedError_1.default(ClusterAllFailedError_1.default.defaultMessage, lastNodeError);
          return wrapper(error22);
        }
        const node = nodes[index];
        const key = `${node.options.host}:${node.options.port}`;
        debug("getting slot cache from %s", key);
        _this.getInfoFromNode(node, function(err) {
          switch (_this.status) {
            case "close":
            case "end":
              return wrapper(new Error("Cluster is disconnected."));
            case "disconnecting":
              return wrapper(new Error("Cluster is disconnecting."));
          }
          if (err) {
            _this.emit("node error", err, key);
            lastNodeError = err;
            tryNode(index + 1);
          } else {
            _this.emit("refresh");
            wrapper();
          }
        });
      }
      tryNode(0);
    }
    sendCommand(command, stream, node) {
      if (this.status === "wait") {
        this.connect().catch(utils_1.noop);
      }
      if (this.status === "end") {
        command.reject(new Error(utils_1.CONNECTION_CLOSED_ERROR_MSG));
        return command.promise;
      }
      let to = this.options.scaleReads;
      if (to !== "master") {
        const isCommandReadOnly = command.isReadOnly || (0, commands_1.exists)(command.name) && (0, commands_1.hasFlag)(command.name, "readonly");
        if (!isCommandReadOnly) {
          to = "master";
        }
      }
      let targetSlot = node ? node.slot : command.getSlot();
      const ttl = {};
      const _this = this;
      if (!node && !REJECT_OVERWRITTEN_COMMANDS.has(command)) {
        REJECT_OVERWRITTEN_COMMANDS.add(command);
        const reject = command.reject;
        command.reject = function(err) {
          const partialTry = tryConnection.bind(null, true);
          _this.handleError(err, ttl, {
            moved: function(slot, key) {
              debug("command %s is moved to %s", command.name, key);
              targetSlot = Number(slot);
              if (_this.slots[slot]) {
                _this.slots[slot][0] = key;
              } else {
                _this.slots[slot] = [key];
              }
              _this._groupsBySlot[slot] = _this._groupsIds[_this.slots[slot].join(";")];
              _this.connectionPool.findOrCreate(_this.natMapper(key));
              tryConnection();
              debug("refreshing slot caches... (triggered by MOVED error)");
              _this.refreshSlotsCache();
            },
            ask: function(slot, key) {
              debug("command %s is required to ask %s:%s", command.name, key);
              const mapped20 = _this.natMapper(key);
              _this.connectionPool.findOrCreate(mapped20);
              tryConnection(false, `${mapped20.host}:${mapped20.port}`);
            },
            tryagain: partialTry,
            clusterDown: partialTry,
            connectionClosed: partialTry,
            maxRedirections: function(redirectionError) {
              reject.call(command, redirectionError);
            },
            defaults: function() {
              reject.call(command, err);
            }
          });
        };
      }
      tryConnection();
      function tryConnection(random, asking) {
        if (_this.status === "end") {
          command.reject(new redis_errors_1.AbortError("Cluster is ended."));
          return;
        }
        let redis;
        if (_this.status === "ready" || command.name === "cluster") {
          if (node && node.redis) {
            redis = node.redis;
          } else if (Command_1.default.checkFlag("ENTER_SUBSCRIBER_MODE", command.name) || Command_1.default.checkFlag("EXIT_SUBSCRIBER_MODE", command.name)) {
            redis = _this.subscriber.getInstance();
            if (!redis) {
              command.reject(new redis_errors_1.AbortError("No subscriber for the cluster"));
              return;
            }
          } else {
            if (!random) {
              if (typeof targetSlot === "number" && _this.slots[targetSlot]) {
                const nodeKeys = _this.slots[targetSlot];
                if (typeof to === "function") {
                  const nodes = nodeKeys.map(function(key) {
                    return _this.connectionPool.getInstanceByKey(key);
                  });
                  redis = to(nodes, command);
                  if (Array.isArray(redis)) {
                    redis = (0, utils_1.sample)(redis);
                  }
                  if (!redis) {
                    redis = nodes[0];
                  }
                } else {
                  let key;
                  if (to === "all") {
                    key = (0, utils_1.sample)(nodeKeys);
                  } else if (to === "slave" && nodeKeys.length > 1) {
                    key = (0, utils_1.sample)(nodeKeys, 1);
                  } else {
                    key = nodeKeys[0];
                  }
                  redis = _this.connectionPool.getInstanceByKey(key);
                }
              }
              if (asking) {
                redis = _this.connectionPool.getInstanceByKey(asking);
                redis.asking();
              }
            }
            if (!redis) {
              redis = (typeof to === "function" ? null : _this.connectionPool.getSampleInstance(to)) || _this.connectionPool.getSampleInstance("all");
            }
          }
          if (node && !node.redis) {
            node.redis = redis;
          }
        }
        if (redis) {
          redis.sendCommand(command, stream);
        } else if (_this.options.enableOfflineQueue) {
          _this.offlineQueue.push({
            command,
            stream,
            node
          });
        } else {
          command.reject(new Error("Cluster isn't ready and enableOfflineQueue options is false"));
        }
      }
      return command.promise;
    }
    sscanStream(key, options) {
      return this.createScanStream("sscan", { key, options });
    }
    sscanBufferStream(key, options) {
      return this.createScanStream("sscanBuffer", { key, options });
    }
    hscanStream(key, options) {
      return this.createScanStream("hscan", { key, options });
    }
    hscanBufferStream(key, options) {
      return this.createScanStream("hscanBuffer", { key, options });
    }
    zscanStream(key, options) {
      return this.createScanStream("zscan", { key, options });
    }
    zscanBufferStream(key, options) {
      return this.createScanStream("zscanBuffer", { key, options });
    }
    handleError(error22, ttl, handlers2) {
      if (typeof ttl.value === "undefined") {
        ttl.value = this.options.maxRedirections;
      } else {
        ttl.value -= 1;
      }
      if (ttl.value <= 0) {
        handlers2.maxRedirections(new Error("Too many Cluster redirections. Last error: " + error22));
        return;
      }
      const errv = error22.message.split(" ");
      if (errv[0] === "MOVED") {
        const timeout = this.options.retryDelayOnMoved;
        if (timeout && typeof timeout === "number") {
          this.delayQueue.push("moved", handlers2.moved.bind(null, errv[1], errv[2]), { timeout });
        } else {
          handlers2.moved(errv[1], errv[2]);
        }
      } else if (errv[0] === "ASK") {
        handlers2.ask(errv[1], errv[2]);
      } else if (errv[0] === "TRYAGAIN") {
        this.delayQueue.push("tryagain", handlers2.tryagain, {
          timeout: this.options.retryDelayOnTryAgain
        });
      } else if (errv[0] === "CLUSTERDOWN" && this.options.retryDelayOnClusterDown > 0) {
        this.delayQueue.push("clusterdown", handlers2.connectionClosed, {
          timeout: this.options.retryDelayOnClusterDown,
          callback: this.refreshSlotsCache.bind(this)
        });
      } else if (error22.message === utils_1.CONNECTION_CLOSED_ERROR_MSG && this.options.retryDelayOnFailover > 0 && this.status === "ready") {
        this.delayQueue.push("failover", handlers2.connectionClosed, {
          timeout: this.options.retryDelayOnFailover,
          callback: this.refreshSlotsCache.bind(this)
        });
      } else {
        handlers2.defaults();
      }
    }
    resetOfflineQueue() {
      this.offlineQueue = new Deque;
    }
    clearNodesRefreshInterval() {
      if (this.slotsTimer) {
        clearTimeout(this.slotsTimer);
        this.slotsTimer = null;
      }
    }
    resetNodesRefreshInterval() {
      if (this.slotsTimer || !this.options.slotsRefreshInterval) {
        return;
      }
      const nextRound = () => {
        this.slotsTimer = setTimeout(() => {
          debug('refreshing slot caches... (triggered by "slotsRefreshInterval" option)');
          this.refreshSlotsCache(() => {
            nextRound();
          });
        }, this.options.slotsRefreshInterval);
      };
      nextRound();
    }
    setStatus(status) {
      debug("status: %s -> %s", this.status || "[empty]", status);
      this.status = status;
      process.nextTick(() => {
        this.emit(status);
      });
    }
    handleCloseEvent(reason) {
      if (reason) {
        debug("closed because %s", reason);
      }
      let retryDelay;
      if (!this.manuallyClosing && typeof this.options.clusterRetryStrategy === "function") {
        retryDelay = this.options.clusterRetryStrategy.call(this, ++this.retryAttempts, reason);
      }
      if (typeof retryDelay === "number") {
        this.setStatus("reconnecting");
        this.reconnectTimeout = setTimeout(() => {
          this.reconnectTimeout = null;
          debug("Cluster is disconnected. Retrying after %dms", retryDelay);
          this.connect().catch(function(err) {
            debug("Got error %s when reconnecting. Ignoring...", err);
          });
        }, retryDelay);
      } else {
        this.setStatus("end");
        this.flushQueue(new Error("None of startup nodes is available"));
      }
    }
    flushQueue(error22) {
      let item;
      while (item = this.offlineQueue.shift()) {
        item.command.reject(error22);
      }
    }
    executeOfflineCommands() {
      if (this.offlineQueue.length) {
        debug("send %d commands in offline queue", this.offlineQueue.length);
        const offlineQueue = this.offlineQueue;
        this.resetOfflineQueue();
        let item;
        while (item = offlineQueue.shift()) {
          this.sendCommand(item.command, item.stream, item.node);
        }
      }
    }
    natMapper(nodeKey) {
      if (this.options.natMap && typeof this.options.natMap === "object") {
        const key = typeof nodeKey === "string" ? nodeKey : `${nodeKey.host}:${nodeKey.port}`;
        const mapped20 = this.options.natMap[key];
        if (mapped20) {
          debug("NAT mapping %s -> %O", key, mapped20);
          return Object.assign({}, mapped20);
        }
      }
      return typeof nodeKey === "string" ? (0, util_1.nodeKeyToRedisOptions)(nodeKey) : nodeKey;
    }
    getInfoFromNode(redis, callback) {
      if (!redis) {
        return callback(new Error("Node is disconnected"));
      }
      const duplicatedConnection = redis.duplicate({
        enableOfflineQueue: true,
        enableReadyCheck: false,
        retryStrategy: null,
        connectionName: (0, util_1.getConnectionName)("refresher", this.options.redisOptions && this.options.redisOptions.connectionName)
      });
      duplicatedConnection.on("error", utils_1.noop);
      duplicatedConnection.cluster("SLOTS", (0, utils_1.timeout)((err, result2) => {
        duplicatedConnection.disconnect();
        if (err) {
          return callback(err);
        }
        if (this.status === "disconnecting" || this.status === "close" || this.status === "end") {
          debug("ignore CLUSTER.SLOTS results (count: %d) since cluster status is %s", result2.length, this.status);
          callback();
          return;
        }
        const nodes = [];
        debug("cluster slots result count: %d", result2.length);
        for (let i = 0;i < result2.length; ++i) {
          const items = result2[i];
          const slotRangeStart = items[0];
          const slotRangeEnd = items[1];
          const keys = [];
          for (let j2 = 2;j2 < items.length; j2++) {
            if (!items[j2][0]) {
              continue;
            }
            const node = this.natMapper({
              host: items[j2][0],
              port: items[j2][1]
            });
            node.readOnly = j2 !== 2;
            nodes.push(node);
            keys.push(node.host + ":" + node.port);
          }
          debug("cluster slots result [%d]: slots %d~%d served by %s", i, slotRangeStart, slotRangeEnd, keys);
          for (let slot = slotRangeStart;slot <= slotRangeEnd; slot++) {
            this.slots[slot] = keys;
          }
        }
        this._groupsIds = Object.create(null);
        let j = 0;
        for (let i = 0;i < 16384; i++) {
          const target = (this.slots[i] || []).join(";");
          if (!target.length) {
            this._groupsBySlot[i] = undefined;
            continue;
          }
          if (!this._groupsIds[target]) {
            this._groupsIds[target] = ++j;
          }
          this._groupsBySlot[i] = this._groupsIds[target];
        }
        this.connectionPool.reset(nodes);
        callback();
      }, this.options.slotsRefreshTimeout));
    }
    invokeReadyDelayedCallbacks(err) {
      for (const c2 of this._readyDelayedCallbacks) {
        process.nextTick(c2, err);
      }
      this._readyDelayedCallbacks = [];
    }
    readyCheck(callback) {
      this.cluster("INFO", (err, res) => {
        if (err) {
          return callback(err);
        }
        if (typeof res !== "string") {
          return callback();
        }
        let state;
        const lines = res.split("\r\n");
        for (let i = 0;i < lines.length; ++i) {
          const parts = lines[i].split(":");
          if (parts[0] === "cluster_state") {
            state = parts[1];
            break;
          }
        }
        if (state === "fail") {
          debug("cluster state not ok (%s)", state);
          callback(null, state);
        } else {
          callback();
        }
      });
    }
    resolveSrv(hostname) {
      return new Promise((resolve, reject) => {
        this.options.resolveSrv(hostname, (err, records) => {
          if (err) {
            return reject(err);
          }
          const self2 = this, groupedRecords = (0, util_1.groupSrvRecords)(records), sortedKeys = Object.keys(groupedRecords).sort((a2, b3) => parseInt(a2) - parseInt(b3));
          function tryFirstOne(err2) {
            if (!sortedKeys.length) {
              return reject(err2);
            }
            const key = sortedKeys[0], group = groupedRecords[key], record4 = (0, util_1.weightSrvRecords)(group);
            if (!group.records.length) {
              sortedKeys.shift();
            }
            self2.dnsLookup(record4.name).then((host) => resolve({
              host,
              port: record4.port
            }), tryFirstOne);
          }
          tryFirstOne();
        });
      });
    }
    dnsLookup(hostname) {
      return new Promise((resolve, reject) => {
        this.options.dnsLookup(hostname, (err, address) => {
          if (err) {
            debug("failed to resolve hostname %s to IP: %s", hostname, err.message);
            reject(err);
          } else {
            debug("resolved hostname %s to IP %s", hostname, address);
            resolve(address);
          }
        });
      });
    }
    async resolveStartupNodeHostnames() {
      if (!Array.isArray(this.startupNodes) || this.startupNodes.length === 0) {
        throw new Error("`startupNodes` should contain at least one node.");
      }
      const startupNodes = (0, util_1.normalizeNodeOptions)(this.startupNodes);
      const hostnames = (0, util_1.getUniqueHostnamesFromOptions)(startupNodes);
      if (hostnames.length === 0) {
        return startupNodes;
      }
      const configs = await Promise.all(hostnames.map((this.options.useSRVRecords ? this.resolveSrv : this.dnsLookup).bind(this)));
      const hostnameToConfig = (0, utils_1.zipMap)(hostnames, configs);
      return startupNodes.map((node) => {
        const config = hostnameToConfig.get(node.host);
        if (!config) {
          return node;
        }
        if (this.options.useSRVRecords) {
          return Object.assign({}, node, config);
        }
        return Object.assign({}, node, { host: config });
      });
    }
    createScanStream(command, { key, options = {} }) {
      return new ScanStream_1.default({
        objectMode: true,
        key,
        redis: this,
        command,
        ...options
      });
    }
  }
  (0, applyMixin_1.default)(Cluster, events_1.EventEmitter);
  (0, transaction_1.addTransactionSupport)(Cluster.prototype);
  exports.default = Cluster;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/connectors/AbstractConnector.js
var require_AbstractConnector = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var utils_1 = require_utils2();
  var debug = (0, utils_1.Debug)("AbstractConnector");

  class AbstractConnector {
    constructor(disconnectTimeout) {
      this.connecting = false;
      this.disconnectTimeout = disconnectTimeout;
    }
    check(info) {
      return true;
    }
    disconnect() {
      this.connecting = false;
      if (this.stream) {
        const stream = this.stream;
        const timeout = setTimeout(() => {
          debug("stream %s:%s still open, destroying it", stream.remoteAddress, stream.remotePort);
          stream.destroy();
        }, this.disconnectTimeout);
        stream.on("close", () => clearTimeout(timeout));
        stream.end();
      }
    }
  }
  exports.default = AbstractConnector;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/connectors/StandaloneConnector.js
var require_StandaloneConnector = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var net_1 = import.meta.require("net");
  var tls_1 = import.meta.require("tls");
  var utils_1 = require_utils2();
  var AbstractConnector_1 = require_AbstractConnector();

  class StandaloneConnector extends AbstractConnector_1.default {
    constructor(options) {
      super(options.disconnectTimeout);
      this.options = options;
    }
    connect(_) {
      const { options } = this;
      this.connecting = true;
      let connectionOptions;
      if ("path" in options && options.path) {
        connectionOptions = {
          path: options.path
        };
      } else {
        connectionOptions = {};
        if ("port" in options && options.port != null) {
          connectionOptions.port = options.port;
        }
        if ("host" in options && options.host != null) {
          connectionOptions.host = options.host;
        }
        if ("family" in options && options.family != null) {
          connectionOptions.family = options.family;
        }
      }
      if (options.tls) {
        Object.assign(connectionOptions, options.tls);
      }
      return new Promise((resolve, reject) => {
        process.nextTick(() => {
          if (!this.connecting) {
            reject(new Error(utils_1.CONNECTION_CLOSED_ERROR_MSG));
            return;
          }
          try {
            if (options.tls) {
              this.stream = (0, tls_1.connect)(connectionOptions);
            } else {
              this.stream = (0, net_1.createConnection)(connectionOptions);
            }
          } catch (err) {
            reject(err);
            return;
          }
          this.stream.once("error", (err) => {
            this.firstError = err;
          });
          resolve(this.stream);
        });
      });
    }
  }
  exports.default = StandaloneConnector;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/connectors/SentinelConnector/SentinelIterator.js
var require_SentinelIterator = __commonJS((exports) => {
  var isSentinelEql = function(a2, b3) {
    return (a2.host || "127.0.0.1") === (b3.host || "127.0.0.1") && (a2.port || 26379) === (b3.port || 26379);
  };
  Object.defineProperty(exports, "__esModule", { value: true });

  class SentinelIterator {
    constructor(sentinels) {
      this.cursor = 0;
      this.sentinels = sentinels.slice(0);
    }
    next() {
      const done = this.cursor >= this.sentinels.length;
      return { done, value: done ? undefined : this.sentinels[this.cursor++] };
    }
    reset(moveCurrentEndpointToFirst) {
      if (moveCurrentEndpointToFirst && this.sentinels.length > 1 && this.cursor !== 1) {
        this.sentinels.unshift(...this.sentinels.splice(this.cursor - 1));
      }
      this.cursor = 0;
    }
    add(sentinel) {
      for (let i = 0;i < this.sentinels.length; i++) {
        if (isSentinelEql(sentinel, this.sentinels[i])) {
          return false;
        }
      }
      this.sentinels.push(sentinel);
      return true;
    }
    toString() {
      return `${JSON.stringify(this.sentinels)} @${this.cursor}`;
    }
  }
  exports.default = SentinelIterator;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/connectors/SentinelConnector/FailoverDetector.js
var require_FailoverDetector = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.FailoverDetector = undefined;
  var utils_1 = require_utils2();
  var debug = (0, utils_1.Debug)("FailoverDetector");
  var CHANNEL_NAME = "+switch-master";

  class FailoverDetector {
    constructor(connector, sentinels) {
      this.isDisconnected = false;
      this.connector = connector;
      this.sentinels = sentinels;
    }
    cleanup() {
      this.isDisconnected = true;
      for (const sentinel of this.sentinels) {
        sentinel.client.disconnect();
      }
    }
    async subscribe() {
      debug("Starting FailoverDetector");
      const promises = [];
      for (const sentinel of this.sentinels) {
        const promise5 = sentinel.client.subscribe(CHANNEL_NAME).catch((err) => {
          debug("Failed to subscribe to failover messages on sentinel %s:%s (%s)", sentinel.address.host || "127.0.0.1", sentinel.address.port || 26739, err.message);
        });
        promises.push(promise5);
        sentinel.client.on("message", (channel) => {
          if (!this.isDisconnected && channel === CHANNEL_NAME) {
            this.disconnect();
          }
        });
      }
      await Promise.all(promises);
    }
    disconnect() {
      this.isDisconnected = true;
      debug("Failover detected, disconnecting");
      this.connector.disconnect();
    }
  }
  exports.FailoverDetector = FailoverDetector;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/connectors/SentinelConnector/index.js
var require_SentinelConnector = __commonJS((exports) => {
  var selectPreferredSentinel = function(availableSlaves, preferredSlaves) {
    if (availableSlaves.length === 0) {
      return null;
    }
    let selectedSlave;
    if (typeof preferredSlaves === "function") {
      selectedSlave = preferredSlaves(availableSlaves);
    } else if (preferredSlaves !== null && typeof preferredSlaves === "object") {
      const preferredSlavesArray = Array.isArray(preferredSlaves) ? preferredSlaves : [preferredSlaves];
      preferredSlavesArray.sort((a2, b3) => {
        if (!a2.prio) {
          a2.prio = 1;
        }
        if (!b3.prio) {
          b3.prio = 1;
        }
        if (a2.prio < b3.prio) {
          return -1;
        }
        if (a2.prio > b3.prio) {
          return 1;
        }
        return 0;
      });
      for (let p2 = 0;p2 < preferredSlavesArray.length; p2++) {
        for (let a2 = 0;a2 < availableSlaves.length; a2++) {
          const slave = availableSlaves[a2];
          if (slave.ip === preferredSlavesArray[p2].ip) {
            if (slave.port === preferredSlavesArray[p2].port) {
              selectedSlave = slave;
              break;
            }
          }
        }
        if (selectedSlave) {
          break;
        }
      }
    }
    if (!selectedSlave) {
      selectedSlave = (0, utils_1.sample)(availableSlaves);
    }
    return addressResponseToAddress(selectedSlave);
  };
  var addressResponseToAddress = function(input) {
    return { host: input.ip, port: Number(input.port) };
  };
  var noop3 = function() {
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SentinelIterator = undefined;
  var net_1 = import.meta.require("net");
  var utils_1 = require_utils2();
  var tls_1 = import.meta.require("tls");
  var SentinelIterator_1 = require_SentinelIterator();
  exports.SentinelIterator = SentinelIterator_1.default;
  var AbstractConnector_1 = require_AbstractConnector();
  var Redis_1 = require_Redis();
  var FailoverDetector_1 = require_FailoverDetector();
  var debug = (0, utils_1.Debug)("SentinelConnector");

  class SentinelConnector extends AbstractConnector_1.default {
    constructor(options) {
      super(options.disconnectTimeout);
      this.options = options;
      this.emitter = null;
      this.failoverDetector = null;
      if (!this.options.sentinels.length) {
        throw new Error("Requires at least one sentinel to connect to.");
      }
      if (!this.options.name) {
        throw new Error("Requires the name of master.");
      }
      this.sentinelIterator = new SentinelIterator_1.default(this.options.sentinels);
    }
    check(info) {
      const roleMatches = !info.role || this.options.role === info.role;
      if (!roleMatches) {
        debug("role invalid, expected %s, but got %s", this.options.role, info.role);
        this.sentinelIterator.next();
        this.sentinelIterator.next();
        this.sentinelIterator.reset(true);
      }
      return roleMatches;
    }
    disconnect() {
      super.disconnect();
      if (this.failoverDetector) {
        this.failoverDetector.cleanup();
      }
    }
    connect(eventEmitter) {
      this.connecting = true;
      this.retryAttempts = 0;
      let lastError;
      const connectToNext = async () => {
        const endpoint = this.sentinelIterator.next();
        if (endpoint.done) {
          this.sentinelIterator.reset(false);
          const retryDelay = typeof this.options.sentinelRetryStrategy === "function" ? this.options.sentinelRetryStrategy(++this.retryAttempts) : null;
          let errorMsg = typeof retryDelay !== "number" ? "All sentinels are unreachable and retry is disabled." : `All sentinels are unreachable. Retrying from scratch after ${retryDelay}ms.`;
          if (lastError) {
            errorMsg += ` Last error: ${lastError.message}`;
          }
          debug(errorMsg);
          const error22 = new Error(errorMsg);
          if (typeof retryDelay === "number") {
            eventEmitter("error", error22);
            await new Promise((resolve) => setTimeout(resolve, retryDelay));
            return connectToNext();
          } else {
            throw error22;
          }
        }
        let resolved = null;
        let err = null;
        try {
          resolved = await this.resolve(endpoint.value);
        } catch (error22) {
          err = error22;
        }
        if (!this.connecting) {
          throw new Error(utils_1.CONNECTION_CLOSED_ERROR_MSG);
        }
        const endpointAddress = endpoint.value.host + ":" + endpoint.value.port;
        if (resolved) {
          debug("resolved: %s:%s from sentinel %s", resolved.host, resolved.port, endpointAddress);
          if (this.options.enableTLSForSentinelMode && this.options.tls) {
            Object.assign(resolved, this.options.tls);
            this.stream = (0, tls_1.connect)(resolved);
            this.stream.once("secureConnect", this.initFailoverDetector.bind(this));
          } else {
            this.stream = (0, net_1.createConnection)(resolved);
            this.stream.once("connect", this.initFailoverDetector.bind(this));
          }
          this.stream.once("error", (err2) => {
            this.firstError = err2;
          });
          return this.stream;
        } else {
          const errorMsg = err ? "failed to connect to sentinel " + endpointAddress + " because " + err.message : "connected to sentinel " + endpointAddress + " successfully, but got an invalid reply: " + resolved;
          debug(errorMsg);
          eventEmitter("sentinelError", new Error(errorMsg));
          if (err) {
            lastError = err;
          }
          return connectToNext();
        }
      };
      return connectToNext();
    }
    async updateSentinels(client) {
      if (!this.options.updateSentinels) {
        return;
      }
      const result2 = await client.sentinel("sentinels", this.options.name);
      if (!Array.isArray(result2)) {
        return;
      }
      result2.map(utils_1.packObject).forEach((sentinel) => {
        const flags = sentinel.flags ? sentinel.flags.split(",") : [];
        if (flags.indexOf("disconnected") === -1 && sentinel.ip && sentinel.port) {
          const endpoint = this.sentinelNatResolve(addressResponseToAddress(sentinel));
          if (this.sentinelIterator.add(endpoint)) {
            debug("adding sentinel %s:%s", endpoint.host, endpoint.port);
          }
        }
      });
      debug("Updated internal sentinels: %s", this.sentinelIterator);
    }
    async resolveMaster(client) {
      const result2 = await client.sentinel("get-master-addr-by-name", this.options.name);
      await this.updateSentinels(client);
      return this.sentinelNatResolve(Array.isArray(result2) ? { host: result2[0], port: Number(result2[1]) } : null);
    }
    async resolveSlave(client) {
      const result2 = await client.sentinel("slaves", this.options.name);
      if (!Array.isArray(result2)) {
        return null;
      }
      const availableSlaves = result2.map(utils_1.packObject).filter((slave) => slave.flags && !slave.flags.match(/(disconnected|s_down|o_down)/));
      return this.sentinelNatResolve(selectPreferredSentinel(availableSlaves, this.options.preferredSlaves));
    }
    sentinelNatResolve(item) {
      if (!item || !this.options.natMap)
        return item;
      return this.options.natMap[`${item.host}:${item.port}`] || item;
    }
    connectToSentinel(endpoint, options) {
      const redis = new Redis_1.default({
        port: endpoint.port || 26379,
        host: endpoint.host,
        username: this.options.sentinelUsername || null,
        password: this.options.sentinelPassword || null,
        family: endpoint.family || ("path" in this.options && this.options.path ? undefined : this.options.family),
        tls: this.options.sentinelTLS,
        retryStrategy: null,
        enableReadyCheck: false,
        connectTimeout: this.options.connectTimeout,
        commandTimeout: this.options.sentinelCommandTimeout,
        ...options
      });
      return redis;
    }
    async resolve(endpoint) {
      const client = this.connectToSentinel(endpoint);
      client.on("error", noop3);
      try {
        if (this.options.role === "slave") {
          return await this.resolveSlave(client);
        } else {
          return await this.resolveMaster(client);
        }
      } finally {
        client.disconnect();
      }
    }
    async initFailoverDetector() {
      var _a;
      if (!this.options.failoverDetector) {
        return;
      }
      this.sentinelIterator.reset(true);
      const sentinels = [];
      while (sentinels.length < this.options.sentinelMaxConnections) {
        const { done, value: value15 } = this.sentinelIterator.next();
        if (done) {
          break;
        }
        const client = this.connectToSentinel(value15, {
          lazyConnect: true,
          retryStrategy: this.options.sentinelReconnectStrategy
        });
        client.on("reconnecting", () => {
          var _a2;
          (_a2 = this.emitter) === null || _a2 === undefined || _a2.emit("sentinelReconnecting");
        });
        sentinels.push({ address: value15, client });
      }
      this.sentinelIterator.reset(false);
      if (this.failoverDetector) {
        this.failoverDetector.cleanup();
      }
      this.failoverDetector = new FailoverDetector_1.FailoverDetector(this, sentinels);
      await this.failoverDetector.subscribe();
      (_a = this.emitter) === null || _a === undefined || _a.emit("failoverSubscribed");
    }
  }
  exports.default = SentinelConnector;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/connectors/index.js
var require_connectors = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SentinelConnector = exports.StandaloneConnector = undefined;
  var StandaloneConnector_1 = require_StandaloneConnector();
  exports.StandaloneConnector = StandaloneConnector_1.default;
  var SentinelConnector_1 = require_SentinelConnector();
  exports.SentinelConnector = SentinelConnector_1.default;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/errors/MaxRetriesPerRequestError.js
var require_MaxRetriesPerRequestError = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var redis_errors_1 = require_redis_errors();

  class MaxRetriesPerRequestError extends redis_errors_1.AbortError {
    constructor(maxRetriesPerRequest) {
      const message = `Reached the max retries per request limit (which is ${maxRetriesPerRequest}). Refer to "maxRetriesPerRequest" option for details.`;
      super(message);
      Error.captureStackTrace(this, this.constructor);
    }
    get name() {
      return this.constructor.name;
    }
  }
  exports.default = MaxRetriesPerRequestError;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/errors/index.js
var require_errors = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MaxRetriesPerRequestError = undefined;
  var MaxRetriesPerRequestError_1 = require_MaxRetriesPerRequestError();
  exports.MaxRetriesPerRequestError = MaxRetriesPerRequestError_1.default;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/redis-parser@3.0.0/node_modules/redis-parser/lib/parser.js
var require_parser = __commonJS((exports, module) => {
  var parseSimpleNumbers = function(parser) {
    const length = parser.buffer.length - 1;
    var offset = parser.offset;
    var number7 = 0;
    var sign = 1;
    if (parser.buffer[offset] === 45) {
      sign = -1;
      offset++;
    }
    while (offset < length) {
      const c1 = parser.buffer[offset++];
      if (c1 === 13) {
        parser.offset = offset + 1;
        return sign * number7;
      }
      number7 = number7 * 10 + (c1 - 48);
    }
  };
  var parseStringNumbers = function(parser) {
    const length = parser.buffer.length - 1;
    var offset = parser.offset;
    var number7 = 0;
    var res = "";
    if (parser.buffer[offset] === 45) {
      res += "-";
      offset++;
    }
    while (offset < length) {
      var c1 = parser.buffer[offset++];
      if (c1 === 13) {
        parser.offset = offset + 1;
        if (number7 !== 0) {
          res += number7;
        }
        return res;
      } else if (number7 > 429496728) {
        res += number7 * 10 + (c1 - 48);
        number7 = 0;
      } else if (c1 === 48 && number7 === 0) {
        res += 0;
      } else {
        number7 = number7 * 10 + (c1 - 48);
      }
    }
  };
  var parseSimpleString = function(parser) {
    const start = parser.offset;
    const buffer2 = parser.buffer;
    const length = buffer2.length - 1;
    var offset = start;
    while (offset < length) {
      if (buffer2[offset++] === 13) {
        parser.offset = offset + 1;
        if (parser.optionReturnBuffers === true) {
          return parser.buffer.slice(start, offset - 1);
        }
        return parser.buffer.toString("utf8", start, offset - 1);
      }
    }
  };
  var parseLength = function(parser) {
    const length = parser.buffer.length - 1;
    var offset = parser.offset;
    var number7 = 0;
    while (offset < length) {
      const c1 = parser.buffer[offset++];
      if (c1 === 13) {
        parser.offset = offset + 1;
        return number7;
      }
      number7 = number7 * 10 + (c1 - 48);
    }
  };
  var parseInteger = function(parser) {
    if (parser.optionStringNumbers === true) {
      return parseStringNumbers(parser);
    }
    return parseSimpleNumbers(parser);
  };
  var parseBulkString = function(parser) {
    const length = parseLength(parser);
    if (length === undefined) {
      return;
    }
    if (length < 0) {
      return null;
    }
    const offset = parser.offset + length;
    if (offset + 2 > parser.buffer.length) {
      parser.bigStrSize = offset + 2;
      parser.totalChunkSize = parser.buffer.length;
      parser.bufferCache.push(parser.buffer);
      return;
    }
    const start = parser.offset;
    parser.offset = offset + 2;
    if (parser.optionReturnBuffers === true) {
      return parser.buffer.slice(start, offset);
    }
    return parser.buffer.toString("utf8", start, offset);
  };
  var parseError2 = function(parser) {
    var string7 = parseSimpleString(parser);
    if (string7 !== undefined) {
      if (parser.optionReturnBuffers === true) {
        string7 = string7.toString();
      }
      return new ReplyError(string7);
    }
  };
  var handleError = function(parser, type75) {
    const err = new ParserError("Protocol error, got " + JSON.stringify(String.fromCharCode(type75)) + " as reply type byte", JSON.stringify(parser.buffer), parser.offset);
    parser.buffer = null;
    parser.returnFatalError(err);
  };
  var parseArray = function(parser) {
    const length = parseLength(parser);
    if (length === undefined) {
      return;
    }
    if (length < 0) {
      return null;
    }
    const responses = new Array(length);
    return parseArrayElements(parser, responses, 0);
  };
  var pushArrayCache = function(parser, array6, pos) {
    parser.arrayCache.push(array6);
    parser.arrayPos.push(pos);
  };
  var parseArrayChunks = function(parser) {
    const tmp = parser.arrayCache.pop();
    var pos = parser.arrayPos.pop();
    if (parser.arrayCache.length) {
      const res = parseArrayChunks(parser);
      if (res === undefined) {
        pushArrayCache(parser, tmp, pos);
        return;
      }
      tmp[pos++] = res;
    }
    return parseArrayElements(parser, tmp, pos);
  };
  var parseArrayElements = function(parser, responses, i) {
    const bufferLength = parser.buffer.length;
    while (i < responses.length) {
      const offset = parser.offset;
      if (parser.offset >= bufferLength) {
        pushArrayCache(parser, responses, i);
        return;
      }
      const response = parseType(parser, parser.buffer[parser.offset++]);
      if (response === undefined) {
        if (!(parser.arrayCache.length || parser.bufferCache.length)) {
          parser.offset = offset;
        }
        pushArrayCache(parser, responses, i);
        return;
      }
      responses[i] = response;
      i++;
    }
    return responses;
  };
  var parseType = function(parser, type75) {
    switch (type75) {
      case 36:
        return parseBulkString(parser);
      case 43:
        return parseSimpleString(parser);
      case 42:
        return parseArray(parser);
      case 58:
        return parseInteger(parser);
      case 45:
        return parseError2(parser);
      default:
        return handleError(parser, type75);
    }
  };
  var decreaseBufferPool = function() {
    if (bufferPool.length > 50 * 1024) {
      if (counter === 1 || notDecreased > counter * 2) {
        const minSliceLen = Math.floor(bufferPool.length / 10);
        const sliceLength = minSliceLen < bufferOffset ? bufferOffset : minSliceLen;
        bufferOffset = 0;
        bufferPool = bufferPool.slice(sliceLength, bufferPool.length);
      } else {
        notDecreased++;
        counter--;
      }
    } else {
      clearInterval(interval);
      counter = 0;
      notDecreased = 0;
      interval = null;
    }
  };
  var resizeBuffer = function(length) {
    if (bufferPool.length < length + bufferOffset) {
      const multiplier = length > 1024 * 1024 * 75 ? 2 : 3;
      if (bufferOffset > 1024 * 1024 * 111) {
        bufferOffset = 1024 * 1024 * 50;
      }
      bufferPool = Buffer2.allocUnsafe(length * multiplier + bufferOffset);
      bufferOffset = 0;
      counter++;
      if (interval === null) {
        interval = setInterval(decreaseBufferPool, 50);
      }
    }
  };
  var concatBulkString = function(parser) {
    const list = parser.bufferCache;
    const oldOffset = parser.offset;
    var chunks = list.length;
    var offset = parser.bigStrSize - parser.totalChunkSize;
    parser.offset = offset;
    if (offset <= 2) {
      if (chunks === 2) {
        return list[0].toString("utf8", oldOffset, list[0].length + offset - 2);
      }
      chunks--;
      offset = list[list.length - 2].length + offset;
    }
    var res = decoder.write(list[0].slice(oldOffset));
    for (var i = 1;i < chunks - 1; i++) {
      res += decoder.write(list[i]);
    }
    res += decoder.end(list[i].slice(0, offset - 2));
    return res;
  };
  var concatBulkBuffer = function(parser) {
    const list = parser.bufferCache;
    const oldOffset = parser.offset;
    const length = parser.bigStrSize - oldOffset - 2;
    var chunks = list.length;
    var offset = parser.bigStrSize - parser.totalChunkSize;
    parser.offset = offset;
    if (offset <= 2) {
      if (chunks === 2) {
        return list[0].slice(oldOffset, list[0].length + offset - 2);
      }
      chunks--;
      offset = list[list.length - 2].length + offset;
    }
    resizeBuffer(length);
    const start = bufferOffset;
    list[0].copy(bufferPool, start, oldOffset, list[0].length);
    bufferOffset += list[0].length - oldOffset;
    for (var i = 1;i < chunks - 1; i++) {
      list[i].copy(bufferPool, bufferOffset);
      bufferOffset += list[i].length;
    }
    list[i].copy(bufferPool, bufferOffset, 0, offset - 2);
    bufferOffset += offset - 2;
    return bufferPool.slice(start, bufferOffset);
  };
  var Buffer2 = import.meta.require("buffer").Buffer;
  var StringDecoder = import.meta.require("string_decoder").StringDecoder;
  var decoder = new StringDecoder;
  var errors9 = require_redis_errors();
  var ReplyError = errors9.ReplyError;
  var ParserError = errors9.ParserError;
  var bufferPool = Buffer2.allocUnsafe(32 * 1024);
  var bufferOffset = 0;
  var interval = null;
  var counter = 0;
  var notDecreased = 0;

  class JavascriptRedisParser {
    constructor(options) {
      if (!options) {
        throw new TypeError("Options are mandatory.");
      }
      if (typeof options.returnError !== "function" || typeof options.returnReply !== "function") {
        throw new TypeError("The returnReply and returnError options have to be functions.");
      }
      this.setReturnBuffers(!!options.returnBuffers);
      this.setStringNumbers(!!options.stringNumbers);
      this.returnError = options.returnError;
      this.returnFatalError = options.returnFatalError || options.returnError;
      this.returnReply = options.returnReply;
      this.reset();
    }
    reset() {
      this.offset = 0;
      this.buffer = null;
      this.bigStrSize = 0;
      this.totalChunkSize = 0;
      this.bufferCache = [];
      this.arrayCache = [];
      this.arrayPos = [];
    }
    setReturnBuffers(returnBuffers) {
      if (typeof returnBuffers !== "boolean") {
        throw new TypeError("The returnBuffers argument has to be a boolean");
      }
      this.optionReturnBuffers = returnBuffers;
    }
    setStringNumbers(stringNumbers) {
      if (typeof stringNumbers !== "boolean") {
        throw new TypeError("The stringNumbers argument has to be a boolean");
      }
      this.optionStringNumbers = stringNumbers;
    }
    execute(buffer2) {
      if (this.buffer === null) {
        this.buffer = buffer2;
        this.offset = 0;
      } else if (this.bigStrSize === 0) {
        const oldLength = this.buffer.length;
        const remainingLength = oldLength - this.offset;
        const newBuffer = Buffer2.allocUnsafe(remainingLength + buffer2.length);
        this.buffer.copy(newBuffer, 0, this.offset, oldLength);
        buffer2.copy(newBuffer, remainingLength, 0, buffer2.length);
        this.buffer = newBuffer;
        this.offset = 0;
        if (this.arrayCache.length) {
          const arr = parseArrayChunks(this);
          if (arr === undefined) {
            return;
          }
          this.returnReply(arr);
        }
      } else if (this.totalChunkSize + buffer2.length >= this.bigStrSize) {
        this.bufferCache.push(buffer2);
        var tmp = this.optionReturnBuffers ? concatBulkBuffer(this) : concatBulkString(this);
        this.bigStrSize = 0;
        this.bufferCache = [];
        this.buffer = buffer2;
        if (this.arrayCache.length) {
          this.arrayCache[0][this.arrayPos[0]++] = tmp;
          tmp = parseArrayChunks(this);
          if (tmp === undefined) {
            return;
          }
        }
        this.returnReply(tmp);
      } else {
        this.bufferCache.push(buffer2);
        this.totalChunkSize += buffer2.length;
        return;
      }
      while (this.offset < this.buffer.length) {
        const offset = this.offset;
        const type75 = this.buffer[this.offset++];
        const response = parseType(this, type75);
        if (response === undefined) {
          if (!(this.arrayCache.length || this.bufferCache.length)) {
            this.offset = offset;
          }
          return;
        }
        if (type75 === 45) {
          this.returnError(response);
        } else {
          this.returnReply(response);
        }
      }
      this.buffer = null;
    }
  }
  module.exports = JavascriptRedisParser;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/SubscriptionSet.js
var require_SubscriptionSet = __commonJS((exports) => {
  var mapSet = function(set2) {
    if (set2 === "unsubscribe") {
      return "subscribe";
    }
    if (set2 === "punsubscribe") {
      return "psubscribe";
    }
    if (set2 === "sunsubscribe") {
      return "ssubscribe";
    }
    return set2;
  };
  Object.defineProperty(exports, "__esModule", { value: true });

  class SubscriptionSet {
    constructor() {
      this.set = {
        subscribe: {},
        psubscribe: {},
        ssubscribe: {}
      };
    }
    add(set2, channel) {
      this.set[mapSet(set2)][channel] = true;
    }
    del(set2, channel) {
      delete this.set[mapSet(set2)][channel];
    }
    channels(set2) {
      return Object.keys(this.set[mapSet(set2)]);
    }
    isEmpty() {
      return this.channels("subscribe").length === 0 && this.channels("psubscribe").length === 0 && this.channels("ssubscribe").length === 0;
    }
  }
  exports.default = SubscriptionSet;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/DataHandler.js
var require_DataHandler = __commonJS((exports) => {
  var fillSubCommand = function(command, count) {
    let remainingReplies = remainingRepliesMap.has(command) ? remainingRepliesMap.get(command) : command.args.length;
    remainingReplies -= 1;
    if (remainingReplies <= 0) {
      command.resolve(count);
      remainingRepliesMap.delete(command);
      return true;
    }
    remainingRepliesMap.set(command, remainingReplies);
    return false;
  };
  var fillUnsubCommand = function(command, count) {
    let remainingReplies = remainingRepliesMap.has(command) ? remainingRepliesMap.get(command) : command.args.length;
    if (remainingReplies === 0) {
      if (Number(count) === 0) {
        remainingRepliesMap.delete(command);
        command.resolve(count);
        return true;
      }
      return false;
    }
    remainingReplies -= 1;
    if (remainingReplies <= 0) {
      command.resolve(count);
      return true;
    }
    remainingRepliesMap.set(command, remainingReplies);
    return false;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var Command_1 = require_Command();
  var utils_1 = require_utils2();
  var RedisParser = require_parser();
  var SubscriptionSet_1 = require_SubscriptionSet();
  var debug = (0, utils_1.Debug)("dataHandler");

  class DataHandler {
    constructor(redis, parserOptions) {
      this.redis = redis;
      const parser = new RedisParser({
        stringNumbers: parserOptions.stringNumbers,
        returnBuffers: true,
        returnError: (err) => {
          this.returnError(err);
        },
        returnFatalError: (err) => {
          this.returnFatalError(err);
        },
        returnReply: (reply) => {
          this.returnReply(reply);
        }
      });
      redis.stream.on("data", (data) => {
        parser.execute(data);
      });
    }
    returnFatalError(err) {
      err.message += ". Please report this.";
      this.redis.recoverFromFatalError(err, err, { offlineQueue: false });
    }
    returnError(err) {
      const item = this.shiftCommand(err);
      if (!item) {
        return;
      }
      err.command = {
        name: item.command.name,
        args: item.command.args
      };
      this.redis.handleReconnection(err, item);
    }
    returnReply(reply) {
      if (this.handleMonitorReply(reply)) {
        return;
      }
      if (this.handleSubscriberReply(reply)) {
        return;
      }
      const item = this.shiftCommand(reply);
      if (!item) {
        return;
      }
      if (Command_1.default.checkFlag("ENTER_SUBSCRIBER_MODE", item.command.name)) {
        this.redis.condition.subscriber = new SubscriptionSet_1.default;
        this.redis.condition.subscriber.add(item.command.name, reply[1].toString());
        if (!fillSubCommand(item.command, reply[2])) {
          this.redis.commandQueue.unshift(item);
        }
      } else if (Command_1.default.checkFlag("EXIT_SUBSCRIBER_MODE", item.command.name)) {
        if (!fillUnsubCommand(item.command, reply[2])) {
          this.redis.commandQueue.unshift(item);
        }
      } else {
        item.command.resolve(reply);
      }
    }
    handleSubscriberReply(reply) {
      if (!this.redis.condition.subscriber) {
        return false;
      }
      const replyType = Array.isArray(reply) ? reply[0].toString() : null;
      debug('receive reply "%s" in subscriber mode', replyType);
      switch (replyType) {
        case "message":
          if (this.redis.listeners("message").length > 0) {
            this.redis.emit("message", reply[1].toString(), reply[2] ? reply[2].toString() : "");
          }
          this.redis.emit("messageBuffer", reply[1], reply[2]);
          break;
        case "pmessage": {
          const pattern3 = reply[1].toString();
          if (this.redis.listeners("pmessage").length > 0) {
            this.redis.emit("pmessage", pattern3, reply[2].toString(), reply[3].toString());
          }
          this.redis.emit("pmessageBuffer", pattern3, reply[2], reply[3]);
          break;
        }
        case "smessage": {
          if (this.redis.listeners("smessage").length > 0) {
            this.redis.emit("smessage", reply[1].toString(), reply[2] ? reply[2].toString() : "");
          }
          this.redis.emit("smessageBuffer", reply[1], reply[2]);
          break;
        }
        case "ssubscribe":
        case "subscribe":
        case "psubscribe": {
          const channel = reply[1].toString();
          this.redis.condition.subscriber.add(replyType, channel);
          const item = this.shiftCommand(reply);
          if (!item) {
            return;
          }
          if (!fillSubCommand(item.command, reply[2])) {
            this.redis.commandQueue.unshift(item);
          }
          break;
        }
        case "sunsubscribe":
        case "unsubscribe":
        case "punsubscribe": {
          const channel = reply[1] ? reply[1].toString() : null;
          if (channel) {
            this.redis.condition.subscriber.del(replyType, channel);
          }
          const count = reply[2];
          if (Number(count) === 0) {
            this.redis.condition.subscriber = false;
          }
          const item = this.shiftCommand(reply);
          if (!item) {
            return;
          }
          if (!fillUnsubCommand(item.command, count)) {
            this.redis.commandQueue.unshift(item);
          }
          break;
        }
        default: {
          const item = this.shiftCommand(reply);
          if (!item) {
            return;
          }
          item.command.resolve(reply);
        }
      }
      return true;
    }
    handleMonitorReply(reply) {
      if (this.redis.status !== "monitoring") {
        return false;
      }
      const replyStr = reply.toString();
      if (replyStr === "OK") {
        return false;
      }
      const len = replyStr.indexOf(" ");
      const timestamp2 = replyStr.slice(0, len);
      const argIndex = replyStr.indexOf('"');
      const args = replyStr.slice(argIndex + 1, -1).split('" "').map((elem) => elem.replace(/\\"/g, '"'));
      const dbAndSource = replyStr.slice(len + 2, argIndex - 2).split(" ");
      this.redis.emit("monitor", timestamp2, args, dbAndSource[1], dbAndSource[0]);
      return true;
    }
    shiftCommand(reply) {
      const item = this.redis.commandQueue.shift();
      if (!item) {
        const message = "Command queue state error. If you can reproduce this, please report it.";
        const error22 = new Error(message + (reply instanceof Error ? ` Last error: ${reply.message}` : ` Last reply: ${reply.toString()}`));
        this.redis.emit("error", error22);
        return null;
      }
      return item;
    }
  }
  exports.default = DataHandler;
  var remainingRepliesMap = new WeakMap;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/redis/event_handler.js
var require_event_handler = __commonJS((exports) => {
  var connectHandler = function(self2) {
    return function() {
      self2.setStatus("connect");
      self2.resetCommandQueue();
      let flushed = false;
      const { connectionEpoch } = self2;
      if (self2.condition.auth) {
        self2.auth(self2.condition.auth, function(err) {
          if (connectionEpoch !== self2.connectionEpoch) {
            return;
          }
          if (err) {
            if (err.message.indexOf("no password is set") !== -1) {
              console.warn("[WARN] Redis server does not require a password, but a password was supplied.");
            } else if (err.message.indexOf("without any password configured for the default user") !== -1) {
              console.warn("[WARN] This Redis server's `default` user does not require a password, but a password was supplied");
            } else if (err.message.indexOf("wrong number of arguments for 'auth' command") !== -1) {
              console.warn(`[ERROR] The server returned "wrong number of arguments for 'auth' command". You are probably passing both username and password to Redis version 5 or below. You should only pass the 'password' option for Redis version 5 and under.`);
            } else {
              flushed = true;
              self2.recoverFromFatalError(err, err);
            }
          }
        });
      }
      if (self2.condition.select) {
        self2.select(self2.condition.select).catch((err) => {
          self2.silentEmit("error", err);
        });
      }
      if (!self2.options.enableReadyCheck) {
        exports.readyHandler(self2)();
      }
      new DataHandler_1.default(self2, {
        stringNumbers: self2.options.stringNumbers
      });
      if (self2.options.enableReadyCheck) {
        self2._readyCheck(function(err, info) {
          if (connectionEpoch !== self2.connectionEpoch) {
            return;
          }
          if (err) {
            if (!flushed) {
              self2.recoverFromFatalError(new Error("Ready check failed: " + err.message), err);
            }
          } else {
            if (self2.connector.check(info)) {
              exports.readyHandler(self2)();
            } else {
              self2.disconnect(true);
            }
          }
        });
      }
    };
  };
  var abortError = function(command) {
    const err = new redis_errors_1.AbortError("Command aborted due to connection close");
    err.command = {
      name: command.name,
      args: command.args
    };
    return err;
  };
  var abortIncompletePipelines = function(commandQueue) {
    var _a;
    let expectedIndex = 0;
    for (let i = 0;i < commandQueue.length; ) {
      const command = (_a = commandQueue.peekAt(i)) === null || _a === undefined ? undefined : _a.command;
      const pipelineIndex = command.pipelineIndex;
      if (pipelineIndex === undefined || pipelineIndex === 0) {
        expectedIndex = 0;
      }
      if (pipelineIndex !== undefined && pipelineIndex !== expectedIndex++) {
        commandQueue.remove(i, 1);
        command.reject(abortError(command));
        continue;
      }
      i++;
    }
  };
  var abortTransactionFragments = function(commandQueue) {
    var _a;
    for (let i = 0;i < commandQueue.length; ) {
      const command = (_a = commandQueue.peekAt(i)) === null || _a === undefined ? undefined : _a.command;
      if (command.name === "multi") {
        break;
      }
      if (command.name === "exec") {
        commandQueue.remove(i, 1);
        command.reject(abortError(command));
        break;
      }
      if (command.inTransaction) {
        commandQueue.remove(i, 1);
        command.reject(abortError(command));
      } else {
        i++;
      }
    }
  };
  var closeHandler = function(self2) {
    return function() {
      const prevStatus = self2.status;
      self2.setStatus("close");
      if (self2.commandQueue.length) {
        abortIncompletePipelines(self2.commandQueue);
      }
      if (self2.offlineQueue.length) {
        abortTransactionFragments(self2.offlineQueue);
      }
      if (prevStatus === "ready") {
        if (!self2.prevCondition) {
          self2.prevCondition = self2.condition;
        }
        if (self2.commandQueue.length) {
          self2.prevCommandQueue = self2.commandQueue;
        }
      }
      if (self2.manuallyClosing) {
        self2.manuallyClosing = false;
        debug("skip reconnecting since the connection is manually closed.");
        return close();
      }
      if (typeof self2.options.retryStrategy !== "function") {
        debug("skip reconnecting because `retryStrategy` is not a function");
        return close();
      }
      const retryDelay = self2.options.retryStrategy(++self2.retryAttempts);
      if (typeof retryDelay !== "number") {
        debug("skip reconnecting because `retryStrategy` doesn't return a number");
        return close();
      }
      debug("reconnect in %sms", retryDelay);
      self2.setStatus("reconnecting", retryDelay);
      self2.reconnectTimeout = setTimeout(function() {
        self2.reconnectTimeout = null;
        self2.connect().catch(utils_1.noop);
      }, retryDelay);
      const { maxRetriesPerRequest } = self2.options;
      if (typeof maxRetriesPerRequest === "number") {
        if (maxRetriesPerRequest < 0) {
          debug("maxRetriesPerRequest is negative, ignoring...");
        } else {
          const remainder = self2.retryAttempts % (maxRetriesPerRequest + 1);
          if (remainder === 0) {
            debug("reach maxRetriesPerRequest limitation, flushing command queue...");
            self2.flushQueue(new errors_1.MaxRetriesPerRequestError(maxRetriesPerRequest));
          }
        }
      }
    };
    function close() {
      self2.setStatus("end");
      self2.flushQueue(new Error(utils_1.CONNECTION_CLOSED_ERROR_MSG));
    }
  };
  var errorHandler = function(self2) {
    return function(error22) {
      debug("error: %s", error22);
      self2.silentEmit("error", error22);
    };
  };
  var readyHandler = function(self2) {
    return function() {
      self2.setStatus("ready");
      self2.retryAttempts = 0;
      if (self2.options.monitor) {
        self2.call("monitor").then(() => self2.setStatus("monitoring"), (error22) => self2.emit("error", error22));
        const { sendCommand } = self2;
        self2.sendCommand = function(command) {
          if (Command_1.default.checkFlag("VALID_IN_MONITOR_MODE", command.name)) {
            return sendCommand.call(self2, command);
          }
          command.reject(new Error("Connection is in monitoring mode, can't process commands."));
          return command.promise;
        };
        self2.once("close", function() {
          delete self2.sendCommand;
        });
        return;
      }
      const finalSelect = self2.prevCondition ? self2.prevCondition.select : self2.condition.select;
      if (self2.options.connectionName) {
        debug("set the connection name [%s]", self2.options.connectionName);
        self2.client("setname", self2.options.connectionName).catch(utils_1.noop);
      }
      if (self2.options.readOnly) {
        debug("set the connection to readonly mode");
        self2.readonly().catch(utils_1.noop);
      }
      if (self2.prevCondition) {
        const condition = self2.prevCondition;
        self2.prevCondition = null;
        if (condition.subscriber && self2.options.autoResubscribe) {
          if (self2.condition.select !== finalSelect) {
            debug("connect to db [%d]", finalSelect);
            self2.select(finalSelect);
          }
          const subscribeChannels = condition.subscriber.channels("subscribe");
          if (subscribeChannels.length) {
            debug("subscribe %d channels", subscribeChannels.length);
            self2.subscribe(subscribeChannels);
          }
          const psubscribeChannels = condition.subscriber.channels("psubscribe");
          if (psubscribeChannels.length) {
            debug("psubscribe %d channels", psubscribeChannels.length);
            self2.psubscribe(psubscribeChannels);
          }
          const ssubscribeChannels = condition.subscriber.channels("ssubscribe");
          if (ssubscribeChannels.length) {
            debug("ssubscribe %d channels", ssubscribeChannels.length);
            self2.ssubscribe(ssubscribeChannels);
          }
        }
      }
      if (self2.prevCommandQueue) {
        if (self2.options.autoResendUnfulfilledCommands) {
          debug("resend %d unfulfilled commands", self2.prevCommandQueue.length);
          while (self2.prevCommandQueue.length > 0) {
            const item = self2.prevCommandQueue.shift();
            if (item.select !== self2.condition.select && item.command.name !== "select") {
              self2.select(item.select);
            }
            self2.sendCommand(item.command, item.stream);
          }
        } else {
          self2.prevCommandQueue = null;
        }
      }
      if (self2.offlineQueue.length) {
        debug("send %d commands in offline queue", self2.offlineQueue.length);
        const offlineQueue = self2.offlineQueue;
        self2.resetOfflineQueue();
        while (offlineQueue.length > 0) {
          const item = offlineQueue.shift();
          if (item.select !== self2.condition.select && item.command.name !== "select") {
            self2.select(item.select);
          }
          self2.sendCommand(item.command, item.stream);
        }
      }
      if (self2.condition.select !== finalSelect) {
        debug("connect to db [%d]", finalSelect);
        self2.select(finalSelect);
      }
    };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.readyHandler = exports.errorHandler = exports.closeHandler = exports.connectHandler = undefined;
  var redis_errors_1 = require_redis_errors();
  var Command_1 = require_Command();
  var errors_1 = require_errors();
  var utils_1 = require_utils2();
  var DataHandler_1 = require_DataHandler();
  var debug = (0, utils_1.Debug)("connection");
  exports.connectHandler = connectHandler;
  exports.closeHandler = closeHandler;
  exports.errorHandler = errorHandler;
  exports.readyHandler = readyHandler;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/redis/RedisOptions.js
var require_RedisOptions = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DEFAULT_REDIS_OPTIONS = undefined;
  exports.DEFAULT_REDIS_OPTIONS = {
    port: 6379,
    host: "localhost",
    family: 4,
    connectTimeout: 1e4,
    disconnectTimeout: 2000,
    retryStrategy: function(times) {
      return Math.min(times * 50, 2000);
    },
    keepAlive: 0,
    noDelay: true,
    connectionName: null,
    sentinels: null,
    name: null,
    role: "master",
    sentinelRetryStrategy: function(times) {
      return Math.min(times * 10, 1000);
    },
    sentinelReconnectStrategy: function() {
      return 60000;
    },
    natMap: null,
    enableTLSForSentinelMode: false,
    updateSentinels: true,
    failoverDetector: false,
    username: null,
    password: null,
    db: 0,
    enableOfflineQueue: true,
    enableReadyCheck: true,
    autoResubscribe: true,
    autoResendUnfulfilledCommands: true,
    lazyConnect: false,
    keyPrefix: "",
    reconnectOnError: null,
    readOnly: false,
    stringNumbers: false,
    maxRetriesPerRequest: 20,
    maxLoadingRetryTime: 1e4,
    enableAutoPipelining: false,
    autoPipeliningIgnoredCommands: [],
    sentinelMaxConnections: 10
  };
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/ioredis@5.3.2/node_modules/ioredis/built/Redis.js
var require_Redis = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var commands_1 = require_built();
  var events_1 = import.meta.require("events");
  var standard_as_callback_1 = require_built2();
  var cluster_1 = require_cluster();
  var Command_1 = require_Command();
  var connectors_1 = require_connectors();
  var SentinelConnector_1 = require_SentinelConnector();
  var eventHandler = require_event_handler();
  var RedisOptions_1 = require_RedisOptions();
  var ScanStream_1 = require_ScanStream();
  var transaction_1 = require_transaction();
  var utils_1 = require_utils2();
  var applyMixin_1 = require_applyMixin();
  var Commander_1 = require_Commander();
  var lodash_1 = require_lodash3();
  var Deque = require_denque();
  var debug = (0, utils_1.Debug)("redis");

  class Redis extends Commander_1.default {
    constructor(arg1, arg2, arg3) {
      super();
      this.status = "wait";
      this.isCluster = false;
      this.reconnectTimeout = null;
      this.connectionEpoch = 0;
      this.retryAttempts = 0;
      this.manuallyClosing = false;
      this._autoPipelines = new Map;
      this._runningAutoPipelines = new Set;
      this.parseOptions(arg1, arg2, arg3);
      events_1.EventEmitter.call(this);
      this.resetCommandQueue();
      this.resetOfflineQueue();
      if (this.options.Connector) {
        this.connector = new this.options.Connector(this.options);
      } else if (this.options.sentinels) {
        const sentinelConnector = new SentinelConnector_1.default(this.options);
        sentinelConnector.emitter = this;
        this.connector = sentinelConnector;
      } else {
        this.connector = new connectors_1.StandaloneConnector(this.options);
      }
      if (this.options.scripts) {
        Object.entries(this.options.scripts).forEach(([name, definition]) => {
          this.defineCommand(name, definition);
        });
      }
      if (this.options.lazyConnect) {
        this.setStatus("wait");
      } else {
        this.connect().catch(lodash_1.noop);
      }
    }
    static createClient(...args) {
      return new Redis(...args);
    }
    get autoPipelineQueueSize() {
      let queued = 0;
      for (const pipeline of this._autoPipelines.values()) {
        queued += pipeline.length;
      }
      return queued;
    }
    connect(callback) {
      const promise5 = new Promise((resolve, reject) => {
        if (this.status === "connecting" || this.status === "connect" || this.status === "ready") {
          reject(new Error("Redis is already connecting/connected"));
          return;
        }
        this.connectionEpoch += 1;
        this.setStatus("connecting");
        const { options } = this;
        this.condition = {
          select: options.db,
          auth: options.username ? [options.username, options.password] : options.password,
          subscriber: false
        };
        const _this = this;
        (0, standard_as_callback_1.default)(this.connector.connect(function(type75, err) {
          _this.silentEmit(type75, err);
        }), function(err, stream) {
          if (err) {
            _this.flushQueue(err);
            _this.silentEmit("error", err);
            reject(err);
            _this.setStatus("end");
            return;
          }
          let CONNECT_EVENT = options.tls ? "secureConnect" : "connect";
          if ("sentinels" in options && options.sentinels && !options.enableTLSForSentinelMode) {
            CONNECT_EVENT = "connect";
          }
          _this.stream = stream;
          if (options.noDelay) {
            stream.setNoDelay(true);
          }
          if (typeof options.keepAlive === "number") {
            if (stream.connecting) {
              stream.once(CONNECT_EVENT, () => {
                stream.setKeepAlive(true, options.keepAlive);
              });
            } else {
              stream.setKeepAlive(true, options.keepAlive);
            }
          }
          if (stream.connecting) {
            stream.once(CONNECT_EVENT, eventHandler.connectHandler(_this));
            if (options.connectTimeout) {
              let connectTimeoutCleared = false;
              stream.setTimeout(options.connectTimeout, function() {
                if (connectTimeoutCleared) {
                  return;
                }
                stream.setTimeout(0);
                stream.destroy();
                const err2 = new Error("connect ETIMEDOUT");
                err2.errorno = "ETIMEDOUT";
                err2.code = "ETIMEDOUT";
                err2.syscall = "connect";
                eventHandler.errorHandler(_this)(err2);
              });
              stream.once(CONNECT_EVENT, function() {
                connectTimeoutCleared = true;
                stream.setTimeout(0);
              });
            }
          } else if (stream.destroyed) {
            const firstError = _this.connector.firstError;
            if (firstError) {
              process.nextTick(() => {
                eventHandler.errorHandler(_this)(firstError);
              });
            }
            process.nextTick(eventHandler.closeHandler(_this));
          } else {
            process.nextTick(eventHandler.connectHandler(_this));
          }
          if (!stream.destroyed) {
            stream.once("error", eventHandler.errorHandler(_this));
            stream.once("close", eventHandler.closeHandler(_this));
          }
          const connectionReadyHandler = function() {
            _this.removeListener("close", connectionCloseHandler);
            resolve();
          };
          var connectionCloseHandler = function() {
            _this.removeListener("ready", connectionReadyHandler);
            reject(new Error(utils_1.CONNECTION_CLOSED_ERROR_MSG));
          };
          _this.once("ready", connectionReadyHandler);
          _this.once("close", connectionCloseHandler);
        });
      });
      return (0, standard_as_callback_1.default)(promise5, callback);
    }
    disconnect(reconnect = false) {
      if (!reconnect) {
        this.manuallyClosing = true;
      }
      if (this.reconnectTimeout && !reconnect) {
        clearTimeout(this.reconnectTimeout);
        this.reconnectTimeout = null;
      }
      if (this.status === "wait") {
        eventHandler.closeHandler(this)();
      } else {
        this.connector.disconnect();
      }
    }
    end() {
      this.disconnect();
    }
    duplicate(override) {
      return new Redis({ ...this.options, ...override });
    }
    get mode() {
      var _a;
      return this.options.monitor ? "monitor" : ((_a = this.condition) === null || _a === undefined ? undefined : _a.subscriber) ? "subscriber" : "normal";
    }
    monitor(callback) {
      const monitorInstance = this.duplicate({
        monitor: true,
        lazyConnect: false
      });
      return (0, standard_as_callback_1.default)(new Promise(function(resolve, reject) {
        monitorInstance.once("error", reject);
        monitorInstance.once("monitoring", function() {
          resolve(monitorInstance);
        });
      }), callback);
    }
    sendCommand(command, stream) {
      var _a, _b;
      if (this.status === "wait") {
        this.connect().catch(lodash_1.noop);
      }
      if (this.status === "end") {
        command.reject(new Error(utils_1.CONNECTION_CLOSED_ERROR_MSG));
        return command.promise;
      }
      if (((_a = this.condition) === null || _a === undefined ? undefined : _a.subscriber) && !Command_1.default.checkFlag("VALID_IN_SUBSCRIBER_MODE", command.name)) {
        command.reject(new Error("Connection in subscriber mode, only subscriber commands may be used"));
        return command.promise;
      }
      if (typeof this.options.commandTimeout === "number") {
        command.setTimeout(this.options.commandTimeout);
      }
      let writable = this.status === "ready" || !stream && this.status === "connect" && (0, commands_1.exists)(command.name) && (0, commands_1.hasFlag)(command.name, "loading");
      if (!this.stream) {
        writable = false;
      } else if (!this.stream.writable) {
        writable = false;
      } else if (this.stream._writableState && this.stream._writableState.ended) {
        writable = false;
      }
      if (!writable) {
        if (!this.options.enableOfflineQueue) {
          command.reject(new Error("Stream isn't writeable and enableOfflineQueue options is false"));
          return command.promise;
        }
        if (command.name === "quit" && this.offlineQueue.length === 0) {
          this.disconnect();
          command.resolve(Buffer.from("OK"));
          return command.promise;
        }
        if (debug.enabled) {
          debug("queue command[%s]: %d -> %s(%o)", this._getDescription(), this.condition.select, command.name, command.args);
        }
        this.offlineQueue.push({
          command,
          stream,
          select: this.condition.select
        });
      } else {
        if (debug.enabled) {
          debug("write command[%s]: %d -> %s(%o)", this._getDescription(), (_b = this.condition) === null || _b === undefined ? undefined : _b.select, command.name, command.args);
        }
        if (stream) {
          if ("isPipeline" in stream && stream.isPipeline) {
            stream.write(command.toWritable(stream.destination.redis.stream));
          } else {
            stream.write(command.toWritable(stream));
          }
        } else {
          this.stream.write(command.toWritable(this.stream));
        }
        this.commandQueue.push({
          command,
          stream,
          select: this.condition.select
        });
        if (Command_1.default.checkFlag("WILL_DISCONNECT", command.name)) {
          this.manuallyClosing = true;
        }
      }
      if (command.name === "select" && (0, utils_1.isInt)(command.args[0])) {
        const db5 = parseInt(command.args[0], 10);
        if (this.condition.select !== db5) {
          this.condition.select = db5;
          this.emit("select", db5);
          debug("switch to db [%d]", this.condition.select);
        }
      }
      return command.promise;
    }
    scanStream(options) {
      return this.createScanStream("scan", { options });
    }
    scanBufferStream(options) {
      return this.createScanStream("scanBuffer", { options });
    }
    sscanStream(key, options) {
      return this.createScanStream("sscan", { key, options });
    }
    sscanBufferStream(key, options) {
      return this.createScanStream("sscanBuffer", { key, options });
    }
    hscanStream(key, options) {
      return this.createScanStream("hscan", { key, options });
    }
    hscanBufferStream(key, options) {
      return this.createScanStream("hscanBuffer", { key, options });
    }
    zscanStream(key, options) {
      return this.createScanStream("zscan", { key, options });
    }
    zscanBufferStream(key, options) {
      return this.createScanStream("zscanBuffer", { key, options });
    }
    silentEmit(eventName, arg) {
      let error22;
      if (eventName === "error") {
        error22 = arg;
        if (this.status === "end") {
          return;
        }
        if (this.manuallyClosing) {
          if (error22 instanceof Error && (error22.message === utils_1.CONNECTION_CLOSED_ERROR_MSG || error22.syscall === "connect" || error22.syscall === "read")) {
            return;
          }
        }
      }
      if (this.listeners(eventName).length > 0) {
        return this.emit.apply(this, arguments);
      }
      if (error22 && error22 instanceof Error) {
        console.error("[ioredis] Unhandled error event:", error22.stack);
      }
      return false;
    }
    recoverFromFatalError(_commandError, err, options) {
      this.flushQueue(err, options);
      this.silentEmit("error", err);
      this.disconnect(true);
    }
    handleReconnection(err, item) {
      var _a;
      let needReconnect = false;
      if (this.options.reconnectOnError) {
        needReconnect = this.options.reconnectOnError(err);
      }
      switch (needReconnect) {
        case 1:
        case true:
          if (this.status !== "reconnecting") {
            this.disconnect(true);
          }
          item.command.reject(err);
          break;
        case 2:
          if (this.status !== "reconnecting") {
            this.disconnect(true);
          }
          if (((_a = this.condition) === null || _a === undefined ? undefined : _a.select) !== item.select && item.command.name !== "select") {
            this.select(item.select);
          }
          this.sendCommand(item.command);
          break;
        default:
          item.command.reject(err);
      }
    }
    _getDescription() {
      let description;
      if ("path" in this.options && this.options.path) {
        description = this.options.path;
      } else if (this.stream && this.stream.remoteAddress && this.stream.remotePort) {
        description = this.stream.remoteAddress + ":" + this.stream.remotePort;
      } else if ("host" in this.options && this.options.host) {
        description = this.options.host + ":" + this.options.port;
      } else {
        description = "";
      }
      if (this.options.connectionName) {
        description += ` (${this.options.connectionName})`;
      }
      return description;
    }
    resetCommandQueue() {
      this.commandQueue = new Deque;
    }
    resetOfflineQueue() {
      this.offlineQueue = new Deque;
    }
    parseOptions(...args) {
      const options = {};
      let isTls = false;
      for (let i = 0;i < args.length; ++i) {
        const arg = args[i];
        if (arg === null || typeof arg === "undefined") {
          continue;
        }
        if (typeof arg === "object") {
          (0, lodash_1.defaults)(options, arg);
        } else if (typeof arg === "string") {
          (0, lodash_1.defaults)(options, (0, utils_1.parseURL)(arg));
          if (arg.startsWith("rediss://")) {
            isTls = true;
          }
        } else if (typeof arg === "number") {
          options.port = arg;
        } else {
          throw new Error("Invalid argument " + arg);
        }
      }
      if (isTls) {
        (0, lodash_1.defaults)(options, { tls: true });
      }
      (0, lodash_1.defaults)(options, Redis.defaultOptions);
      if (typeof options.port === "string") {
        options.port = parseInt(options.port, 10);
      }
      if (typeof options.db === "string") {
        options.db = parseInt(options.db, 10);
      }
      this.options = (0, utils_1.resolveTLSProfile)(options);
    }
    setStatus(status, arg) {
      if (debug.enabled) {
        debug("status[%s]: %s -> %s", this._getDescription(), this.status || "[empty]", status);
      }
      this.status = status;
      process.nextTick(this.emit.bind(this, status, arg));
    }
    createScanStream(command, { key, options = {} }) {
      return new ScanStream_1.default({
        objectMode: true,
        key,
        redis: this,
        command,
        ...options
      });
    }
    flushQueue(error22, options) {
      options = (0, lodash_1.defaults)({}, options, {
        offlineQueue: true,
        commandQueue: true
      });
      let item;
      if (options.offlineQueue) {
        while (item = this.offlineQueue.shift()) {
          item.command.reject(error22);
        }
      }
      if (options.commandQueue) {
        if (this.commandQueue.length > 0) {
          if (this.stream) {
            this.stream.removeAllListeners("data");
          }
          while (item = this.commandQueue.shift()) {
            item.command.reject(error22);
          }
        }
      }
    }
    _readyCheck(callback) {
      const _this = this;
      this.info(function(err, res) {
        if (err) {
          if (err.message && err.message.includes("NOPERM")) {
            console.warn(`Skipping the ready check because INFO command fails: "${err.message}". You can disable ready check with "enableReadyCheck". More: https://github.com/luin/ioredis/wiki/Disable-ready-check.`);
            return callback(null, {});
          }
          return callback(err);
        }
        if (typeof res !== "string") {
          return callback(null, res);
        }
        const info = {};
        const lines = res.split("\r\n");
        for (let i = 0;i < lines.length; ++i) {
          const [fieldName, ...fieldValueParts] = lines[i].split(":");
          const fieldValue = fieldValueParts.join(":");
          if (fieldValue) {
            info[fieldName] = fieldValue;
          }
        }
        if (!info.loading || info.loading === "0") {
          callback(null, info);
        } else {
          const loadingEtaMs = (info.loading_eta_seconds || 1) * 1000;
          const retryTime = _this.options.maxLoadingRetryTime && _this.options.maxLoadingRetryTime < loadingEtaMs ? _this.options.maxLoadingRetryTime : loadingEtaMs;
          debug("Redis server still loading, trying again in " + retryTime + "ms");
          setTimeout(function() {
            _this._readyCheck(callback);
          }, retryTime);
        }
      }).catch(lodash_1.noop);
    }
  }
  Redis.Cluster = cluster_1.default;
  Redis.Command = Command_1.default;
  Redis.defaultOptions = RedisOptions_1.DEFAULT_REDIS_OPTIONS;
  (0, applyMixin_1.default)(Redis, events_1.EventEmitter);
  (0, transaction_1.addTransactionSupport)(Redis.prototype);
  exports.default = Redis;
});

// /home/ellie/github/student_scheduler/apps/server/node_modules/ioredis/built/index.js
var require_built3 = __commonJS((exports, module) => {
  var print = function(err, reply) {
    if (err) {
      console.log("Error: " + err);
    } else {
      console.log("Reply: " + reply);
    }
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.print = exports.ReplyError = exports.SentinelIterator = exports.SentinelConnector = exports.AbstractConnector = exports.Pipeline = exports.ScanStream = exports.Command = exports.Cluster = exports.Redis = exports.default = undefined;
  exports = module.exports = require_Redis().default;
  var Redis_1 = require_Redis();
  Object.defineProperty(exports, "default", { enumerable: true, get: function() {
    return Redis_1.default;
  } });
  var Redis_2 = require_Redis();
  Object.defineProperty(exports, "Redis", { enumerable: true, get: function() {
    return Redis_2.default;
  } });
  var cluster_1 = require_cluster();
  Object.defineProperty(exports, "Cluster", { enumerable: true, get: function() {
    return cluster_1.default;
  } });
  var Command_1 = require_Command();
  Object.defineProperty(exports, "Command", { enumerable: true, get: function() {
    return Command_1.default;
  } });
  var ScanStream_1 = require_ScanStream();
  Object.defineProperty(exports, "ScanStream", { enumerable: true, get: function() {
    return ScanStream_1.default;
  } });
  var Pipeline_1 = require_Pipeline();
  Object.defineProperty(exports, "Pipeline", { enumerable: true, get: function() {
    return Pipeline_1.default;
  } });
  var AbstractConnector_1 = require_AbstractConnector();
  Object.defineProperty(exports, "AbstractConnector", { enumerable: true, get: function() {
    return AbstractConnector_1.default;
  } });
  var SentinelConnector_1 = require_SentinelConnector();
  Object.defineProperty(exports, "SentinelConnector", { enumerable: true, get: function() {
    return SentinelConnector_1.default;
  } });
  Object.defineProperty(exports, "SentinelIterator", { enumerable: true, get: function() {
    return SentinelConnector_1.SentinelIterator;
  } });
  exports.ReplyError = require_redis_errors().ReplyError;
  Object.defineProperty(exports, "Promise", {
    get() {
      console.warn("ioredis v5 does not support plugging third-party Promise library anymore. Native Promise will be used.");
      return Promise;
    },
    set(_lib) {
      console.warn("ioredis v5 does not support plugging third-party Promise library anymore. Native Promise will be used.");
    }
  });
  exports.print = print;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@elysiajs+swagger@0.8.5_elysia@0.8.17/node_modules/lodash.clonedeep/index.js
var require_lodash4 = __commonJS((exports, module) => {
  var addMapEntry = function(map3, pair) {
    map3.set(pair[0], pair[1]);
    return map3;
  };
  var addSetEntry = function(set2, value15) {
    set2.add(value15);
    return set2;
  };
  var arrayEach = function(array6, iteratee) {
    var index = -1, length = array6 ? array6.length : 0;
    while (++index < length) {
      if (iteratee(array6[index], index, array6) === false) {
        break;
      }
    }
    return array6;
  };
  var arrayPush = function(array6, values2) {
    var index = -1, length = values2.length, offset = array6.length;
    while (++index < length) {
      array6[offset + index] = values2[index];
    }
    return array6;
  };
  var arrayReduce = function(array6, iteratee, accumulator, initAccum) {
    var index = -1, length = array6 ? array6.length : 0;
    if (initAccum && length) {
      accumulator = array6[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array6[index], index, array6);
    }
    return accumulator;
  };
  var baseTimes = function(n2, iteratee) {
    var index = -1, result2 = Array(n2);
    while (++index < n2) {
      result2[index] = iteratee(index);
    }
    return result2;
  };
  var getValue = function(object13, key) {
    return object13 == null ? undefined : object13[key];
  };
  var isHostObject = function(value15) {
    var result2 = false;
    if (value15 != null && typeof value15.toString != "function") {
      try {
        result2 = !!(value15 + "");
      } catch (e2) {
      }
    }
    return result2;
  };
  var mapToArray = function(map3) {
    var index = -1, result2 = Array(map3.size);
    map3.forEach(function(value15, key) {
      result2[++index] = [key, value15];
    });
    return result2;
  };
  var overArg = function(func, transform6) {
    return function(arg) {
      return func(transform6(arg));
    };
  };
  var setToArray = function(set2) {
    var index = -1, result2 = Array(set2.size);
    set2.forEach(function(value15) {
      result2[++index] = value15;
    });
    return result2;
  };
  var Hash3 = function(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  };
  var hashClear = function() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
  };
  var hashDelete = function(key) {
    return this.has(key) && delete this.__data__[key];
  };
  var hashGet = function(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result2 = data[key];
      return result2 === HASH_UNDEFINED ? undefined : result2;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
  };
  var hashHas = function(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
  };
  var hashSet = function(key, value15) {
    var data = this.__data__;
    data[key] = nativeCreate && value15 === undefined ? HASH_UNDEFINED : value15;
    return this;
  };
  var ListCache = function(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  };
  var listCacheClear = function() {
    this.__data__ = [];
  };
  var listCacheDelete = function(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    return true;
  };
  var listCacheGet = function(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
  };
  var listCacheHas = function(key) {
    return assocIndexOf(this.__data__, key) > -1;
  };
  var listCacheSet = function(key, value15) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      data.push([key, value15]);
    } else {
      data[index][1] = value15;
    }
    return this;
  };
  var MapCache = function(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  };
  var mapCacheClear = function() {
    this.__data__ = {
      hash: new Hash3,
      map: new (Map2 || ListCache),
      string: new Hash3
    };
  };
  var mapCacheDelete = function(key) {
    return getMapData(this, key)["delete"](key);
  };
  var mapCacheGet = function(key) {
    return getMapData(this, key).get(key);
  };
  var mapCacheHas = function(key) {
    return getMapData(this, key).has(key);
  };
  var mapCacheSet = function(key, value15) {
    getMapData(this, key).set(key, value15);
    return this;
  };
  var Stack = function(entries) {
    this.__data__ = new ListCache(entries);
  };
  var stackClear = function() {
    this.__data__ = new ListCache;
  };
  var stackDelete = function(key) {
    return this.__data__["delete"](key);
  };
  var stackGet = function(key) {
    return this.__data__.get(key);
  };
  var stackHas = function(key) {
    return this.__data__.has(key);
  };
  var stackSet = function(key, value15) {
    var cache = this.__data__;
    if (cache instanceof ListCache) {
      var pairs = cache.__data__;
      if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value15]);
        return this;
      }
      cache = this.__data__ = new MapCache(pairs);
    }
    cache.set(key, value15);
    return this;
  };
  var arrayLikeKeys = function(value15, inherited) {
    var result2 = isArray(value15) || isArguments(value15) ? baseTimes(value15.length, String) : [];
    var length = result2.length, skipIndexes = !!length;
    for (var key in value15) {
      if ((inherited || hasOwnProperty.call(value15, key)) && !(skipIndexes && (key == "length" || isIndex(key, length)))) {
        result2.push(key);
      }
    }
    return result2;
  };
  var assignValue = function(object13, key, value15) {
    var objValue = object13[key];
    if (!(hasOwnProperty.call(object13, key) && eq2(objValue, value15)) || value15 === undefined && !(key in object13)) {
      object13[key] = value15;
    }
  };
  var assocIndexOf = function(array6, key) {
    var length = array6.length;
    while (length--) {
      if (eq2(array6[length][0], key)) {
        return length;
      }
    }
    return -1;
  };
  var baseAssign = function(object13, source) {
    return object13 && copyObject(source, keys(source), object13);
  };
  var baseClone = function(value15, isDeep, isFull, customizer, key, object13, stack) {
    var result2;
    if (customizer) {
      result2 = object13 ? customizer(value15, key, object13, stack) : customizer(value15);
    }
    if (result2 !== undefined) {
      return result2;
    }
    if (!isObject(value15)) {
      return value15;
    }
    var isArr = isArray(value15);
    if (isArr) {
      result2 = initCloneArray(value15);
      if (!isDeep) {
        return copyArray(value15, result2);
      }
    } else {
      var tag = getTag(value15), isFunc = tag == funcTag || tag == genTag;
      if (isBuffer(value15)) {
        return cloneBuffer(value15, isDeep);
      }
      if (tag == objectTag || tag == argsTag || isFunc && !object13) {
        if (isHostObject(value15)) {
          return object13 ? value15 : {};
        }
        result2 = initCloneObject(isFunc ? {} : value15);
        if (!isDeep) {
          return copySymbols(value15, baseAssign(result2, value15));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object13 ? value15 : {};
        }
        result2 = initCloneByTag(value15, tag, baseClone, isDeep);
      }
    }
    stack || (stack = new Stack);
    var stacked = stack.get(value15);
    if (stacked) {
      return stacked;
    }
    stack.set(value15, result2);
    if (!isArr) {
      var props = isFull ? getAllKeys(value15) : keys(value15);
    }
    arrayEach(props || value15, function(subValue, key2) {
      if (props) {
        key2 = subValue;
        subValue = value15[key2];
      }
      assignValue(result2, key2, baseClone(subValue, isDeep, isFull, customizer, key2, value15, stack));
    });
    return result2;
  };
  var baseCreate = function(proto) {
    return isObject(proto) ? objectCreate(proto) : {};
  };
  var baseGetAllKeys = function(object13, keysFunc, symbolsFunc) {
    var result2 = keysFunc(object13);
    return isArray(object13) ? result2 : arrayPush(result2, symbolsFunc(object13));
  };
  var baseGetTag = function(value15) {
    return objectToString.call(value15);
  };
  var baseIsNative = function(value15) {
    if (!isObject(value15) || isMasked(value15)) {
      return false;
    }
    var pattern3 = isFunction(value15) || isHostObject(value15) ? reIsNative : reIsHostCtor;
    return pattern3.test(toSource(value15));
  };
  var baseKeys = function(object13) {
    if (!isPrototype(object13)) {
      return nativeKeys(object13);
    }
    var result2 = [];
    for (var key in Object(object13)) {
      if (hasOwnProperty.call(object13, key) && key != "constructor") {
        result2.push(key);
      }
    }
    return result2;
  };
  var cloneBuffer = function(buffer2, isDeep) {
    if (isDeep) {
      return buffer2.slice();
    }
    var result2 = new buffer2.constructor(buffer2.length);
    buffer2.copy(result2);
    return result2;
  };
  var cloneArrayBuffer = function(arrayBuffer) {
    var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array3(result2).set(new Uint8Array3(arrayBuffer));
    return result2;
  };
  var cloneDataView = function(dataView, isDeep) {
    var buffer2 = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer2, dataView.byteOffset, dataView.byteLength);
  };
  var cloneMap = function(map3, isDeep, cloneFunc) {
    var array6 = isDeep ? cloneFunc(mapToArray(map3), true) : mapToArray(map3);
    return arrayReduce(array6, addMapEntry, new map3.constructor);
  };
  var cloneRegExp = function(regexp4) {
    var result2 = new regexp4.constructor(regexp4.source, reFlags.exec(regexp4));
    result2.lastIndex = regexp4.lastIndex;
    return result2;
  };
  var cloneSet = function(set2, isDeep, cloneFunc) {
    var array6 = isDeep ? cloneFunc(setToArray(set2), true) : setToArray(set2);
    return arrayReduce(array6, addSetEntry, new set2.constructor);
  };
  var cloneSymbol = function(symbol5) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol5)) : {};
  };
  var cloneTypedArray = function(typedArray, isDeep) {
    var buffer2 = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer2, typedArray.byteOffset, typedArray.length);
  };
  var copyArray = function(source, array6) {
    var index = -1, length = source.length;
    array6 || (array6 = Array(length));
    while (++index < length) {
      array6[index] = source[index];
    }
    return array6;
  };
  var copyObject = function(source, props, object13, customizer) {
    object13 || (object13 = {});
    var index = -1, length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object13[key], source[key], key, object13, source) : undefined;
      assignValue(object13, key, newValue === undefined ? source[key] : newValue);
    }
    return object13;
  };
  var copySymbols = function(source, object13) {
    return copyObject(source, getSymbols(source), object13);
  };
  var getAllKeys = function(object13) {
    return baseGetAllKeys(object13, keys, getSymbols);
  };
  var getMapData = function(map3, key) {
    var data = map3.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  };
  var getNative = function(object13, key) {
    var value15 = getValue(object13, key);
    return baseIsNative(value15) ? value15 : undefined;
  };
  var initCloneArray = function(array6) {
    var length = array6.length, result2 = array6.constructor(length);
    if (length && typeof array6[0] == "string" && hasOwnProperty.call(array6, "index")) {
      result2.index = array6.index;
      result2.input = array6.input;
    }
    return result2;
  };
  var initCloneObject = function(object13) {
    return typeof object13.constructor == "function" && !isPrototype(object13) ? baseCreate(getPrototype(object13)) : {};
  };
  var initCloneByTag = function(object13, tag, cloneFunc, isDeep) {
    var Ctor = object13.constructor;
    switch (tag) {
      case arrayBufferTag:
        return cloneArrayBuffer(object13);
      case boolTag:
      case dateTag:
        return new Ctor(+object13);
      case dataViewTag:
        return cloneDataView(object13, isDeep);
      case float32Tag:
      case float64Tag:
      case int8Tag:
      case int16Tag:
      case int32Tag:
      case uint8Tag:
      case uint8ClampedTag:
      case uint16Tag:
      case uint32Tag:
        return cloneTypedArray(object13, isDeep);
      case mapTag:
        return cloneMap(object13, isDeep, cloneFunc);
      case numberTag:
      case stringTag:
        return new Ctor(object13);
      case regexpTag:
        return cloneRegExp(object13);
      case setTag:
        return cloneSet(object13, isDeep, cloneFunc);
      case symbolTag:
        return cloneSymbol(object13);
    }
  };
  var isIndex = function(value15, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value15 == "number" || reIsUint.test(value15)) && (value15 > -1 && value15 % 1 == 0 && value15 < length);
  };
  var isKeyable = function(value15) {
    var type75 = typeof value15;
    return type75 == "string" || type75 == "number" || type75 == "symbol" || type75 == "boolean" ? value15 !== "__proto__" : value15 === null;
  };
  var isMasked = function(func) {
    return !!maskSrcKey && maskSrcKey in func;
  };
  var isPrototype = function(value15) {
    var Ctor = value15 && value15.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value15 === proto;
  };
  var toSource = function(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e2) {
      }
      try {
        return func + "";
      } catch (e2) {
      }
    }
    return "";
  };
  var cloneDeep = function(value15) {
    return baseClone(value15, true, true);
  };
  var eq2 = function(value15, other) {
    return value15 === other || value15 !== value15 && other !== other;
  };
  var isArguments = function(value15) {
    return isArrayLikeObject(value15) && hasOwnProperty.call(value15, "callee") && (!propertyIsEnumerable.call(value15, "callee") || objectToString.call(value15) == argsTag);
  };
  var isArrayLike = function(value15) {
    return value15 != null && isLength(value15.length) && !isFunction(value15);
  };
  var isArrayLikeObject = function(value15) {
    return isObjectLike(value15) && isArrayLike(value15);
  };
  var isFunction = function(value15) {
    var tag = isObject(value15) ? objectToString.call(value15) : "";
    return tag == funcTag || tag == genTag;
  };
  var isLength = function(value15) {
    return typeof value15 == "number" && value15 > -1 && value15 % 1 == 0 && value15 <= MAX_SAFE_INTEGER;
  };
  var isObject = function(value15) {
    var type75 = typeof value15;
    return !!value15 && (type75 == "object" || type75 == "function");
  };
  var isObjectLike = function(value15) {
    return !!value15 && typeof value15 == "object";
  };
  var keys = function(object13) {
    return isArrayLike(object13) ? arrayLikeKeys(object13) : baseKeys(object13);
  };
  var stubArray = function() {
    return [];
  };
  var stubFalse = function() {
    return false;
  };
  var LARGE_ARRAY_SIZE = 200;
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var MAX_SAFE_INTEGER = 9007199254740991;
  var argsTag = "[object Arguments]";
  var arrayTag = "[object Array]";
  var boolTag = "[object Boolean]";
  var dateTag = "[object Date]";
  var errorTag = "[object Error]";
  var funcTag = "[object Function]";
  var genTag = "[object GeneratorFunction]";
  var mapTag = "[object Map]";
  var numberTag = "[object Number]";
  var objectTag = "[object Object]";
  var promiseTag = "[object Promise]";
  var regexpTag = "[object RegExp]";
  var setTag = "[object Set]";
  var stringTag = "[object String]";
  var symbolTag = "[object Symbol]";
  var weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]";
  var dataViewTag = "[object DataView]";
  var float32Tag = "[object Float32Array]";
  var float64Tag = "[object Float64Array]";
  var int8Tag = "[object Int8Array]";
  var int16Tag = "[object Int16Array]";
  var int32Tag = "[object Int32Array]";
  var uint8Tag = "[object Uint8Array]";
  var uint8ClampedTag = "[object Uint8ClampedArray]";
  var uint16Tag = "[object Uint16Array]";
  var uint32Tag = "[object Uint32Array]";
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reFlags = /\w*$/;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var arrayProto = Array.prototype;
  var funcProto = Function.prototype;
  var objectProto = Object.prototype;
  var coreJsData = root["__core-js_shared__"];
  var maskSrcKey = function() {
    var uid2 = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid2 ? "Symbol(src)_1." + uid2 : "";
  }();
  var funcToString = funcProto.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objectToString = objectProto.toString;
  var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  var Buffer2 = moduleExports ? root.Buffer : undefined;
  var Symbol3 = root.Symbol;
  var Uint8Array3 = root.Uint8Array;
  var getPrototype = overArg(Object.getPrototypeOf, Object);
  var objectCreate = Object.create;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  var splice = arrayProto.splice;
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined;
  var nativeKeys = overArg(Object.keys, Object);
  var DataView2 = getNative(root, "DataView");
  var Map2 = getNative(root, "Map");
  var Promise3 = getNative(root, "Promise");
  var Set5 = getNative(root, "Set");
  var WeakMap2 = getNative(root, "WeakMap");
  var nativeCreate = getNative(Object, "create");
  var dataViewCtorString = toSource(DataView2);
  var mapCtorString = toSource(Map2);
  var promiseCtorString = toSource(Promise3);
  var setCtorString = toSource(Set5);
  var weakMapCtorString = toSource(WeakMap2);
  var symbolProto = Symbol3 ? Symbol3.prototype : undefined;
  var symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
  Hash3.prototype.clear = hashClear;
  Hash3.prototype["delete"] = hashDelete;
  Hash3.prototype.get = hashGet;
  Hash3.prototype.has = hashHas;
  Hash3.prototype.set = hashSet;
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  Stack.prototype.clear = stackClear;
  Stack.prototype["delete"] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
  var getTag = baseGetTag;
  if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2) != mapTag || Promise3 && getTag(Promise3.resolve()) != promiseTag || Set5 && getTag(new Set5) != setTag || WeakMap2 && getTag(new WeakMap2) != weakMapTag) {
    getTag = function(value15) {
      var result2 = objectToString.call(value15), Ctor = result2 == objectTag ? value15.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : undefined;
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;
          case mapCtorString:
            return mapTag;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      }
      return result2;
    };
  }
  var isArray = Array.isArray;
  var isBuffer = nativeIsBuffer || stubFalse;
  module.exports = cloneDeep;
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/value/guard/guard.mjs
function IsAsyncIterator(value) {
  return IsObject(value) && Symbol.asyncIterator in value;
}
function IsIterator(value) {
  return IsObject(value) && Symbol.iterator in value;
}
function IsTypedArray(value) {
  return ArrayBuffer.isView(value);
}
function IsPromise(value) {
  return value instanceof Promise;
}
function IsUint8Array(value) {
  return value instanceof Uint8Array;
}
function IsDate(value) {
  return value instanceof Date && Number.isFinite(value.getTime());
}
function HasPropertyKey(value, key) {
  return key in value;
}
function IsPlainObject(value) {
  return IsObject(value) && IsFunction(value.constructor) && value.constructor.name === "Object";
}
function IsObject(value) {
  return value !== null && typeof value === "object";
}
function IsArray(value) {
  return Array.isArray(value) && !ArrayBuffer.isView(value);
}
function IsUndefined(value) {
  return value === undefined;
}
function IsNull(value) {
  return value === null;
}
function IsBoolean(value) {
  return typeof value === "boolean";
}
function IsNumber(value) {
  return typeof value === "number";
}
function IsInteger(value) {
  return IsNumber(value) && Number.isInteger(value);
}
function IsBigInt(value) {
  return typeof value === "bigint";
}
function IsString(value) {
  return typeof value === "string";
}
function IsFunction(value) {
  return typeof value === "function";
}
function IsSymbol(value) {
  return typeof value === "symbol";
}
function IsValueType(value) {
  return IsBigInt(value) || IsBoolean(value) || IsNull(value) || IsNumber(value) || IsString(value) || IsSymbol(value) || IsUndefined(value);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/system/policy.mjs
var TypeSystemPolicy;
(function(TypeSystemPolicy2) {
  TypeSystemPolicy2.ExactOptionalPropertyTypes = false;
  TypeSystemPolicy2.AllowArrayObject = false;
  TypeSystemPolicy2.AllowNaN = false;
  TypeSystemPolicy2.AllowNullVoid = false;
  function IsExactOptionalProperty(value, key) {
    return TypeSystemPolicy2.ExactOptionalPropertyTypes ? key in value : value[key] !== undefined;
  }
  TypeSystemPolicy2.IsExactOptionalProperty = IsExactOptionalProperty;
  function IsObjectLike(value) {
    const isObject = IsObject(value);
    return TypeSystemPolicy2.AllowArrayObject ? isObject : isObject && !IsArray(value);
  }
  TypeSystemPolicy2.IsObjectLike = IsObjectLike;
  function IsRecordLike(value) {
    return IsObjectLike(value) && !(value instanceof Date) && !(value instanceof Uint8Array);
  }
  TypeSystemPolicy2.IsRecordLike = IsRecordLike;
  function IsNumberLike(value) {
    const isNumber = IsNumber(value);
    return TypeSystemPolicy2.AllowNaN ? isNumber : isNumber && Number.isFinite(value);
  }
  TypeSystemPolicy2.IsNumberLike = IsNumberLike;
  function IsVoidLike(value) {
    const isUndefined = IsUndefined(value);
    return TypeSystemPolicy2.AllowNullVoid ? isUndefined || value === null : isUndefined;
  }
  TypeSystemPolicy2.IsVoidLike = IsVoidLike;
})(TypeSystemPolicy || (TypeSystemPolicy = {}));
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/registry/format.mjs
var exports_format = {};
__export(exports_format, {
  Set: () => {
    {
      return Set2;
    }
  },
  Has: () => {
    {
      return Has;
    }
  },
  Get: () => {
    {
      return Get;
    }
  },
  Entries: () => {
    {
      return Entries;
    }
  },
  Delete: () => {
    {
      return Delete;
    }
  },
  Clear: () => {
    {
      return Clear;
    }
  }
});
function Entries() {
  return new Map(map);
}
function Clear() {
  return map.clear();
}
function Delete(format) {
  return map.delete(format);
}
function Has(format) {
  return map.has(format);
}
function Set2(format, func) {
  map.set(format, func);
}
function Get(format) {
  return map.get(format);
}
var map = new Map;
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/registry/type.mjs
var exports_type = {};
__export(exports_type, {
  Set: () => {
    {
      return Set3;
    }
  },
  Has: () => {
    {
      return Has2;
    }
  },
  Get: () => {
    {
      return Get2;
    }
  },
  Entries: () => {
    {
      return Entries2;
    }
  },
  Delete: () => {
    {
      return Delete2;
    }
  },
  Clear: () => {
    {
      return Clear2;
    }
  }
});
function Entries2() {
  return new Map(map2);
}
function Clear2() {
  return map2.clear();
}
function Delete2(kind) {
  return map2.delete(kind);
}
function Has2(kind) {
  return map2.has(kind);
}
function Set3(kind, func) {
  map2.set(kind, func);
}
function Get2(kind) {
  return map2.get(kind);
}
var map2 = new Map;
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/symbols/symbols.mjs
var TransformKind = Symbol.for("TypeBox.Transform");
var ReadonlyKind = Symbol.for("TypeBox.Readonly");
var OptionalKind = Symbol.for("TypeBox.Optional");
var Hint = Symbol.for("TypeBox.Hint");
var Kind = Symbol.for("TypeBox.Kind");
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/unsafe/unsafe.mjs
function Unsafe(options = {}) {
  return {
    ...options,
    [Kind]: options[Kind] ?? "Unsafe"
  };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/error/error.mjs
class TypeBoxError extends Error {
  constructor(message) {
    super(message);
  }
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/system/system.mjs
class TypeSystemDuplicateTypeKind extends TypeBoxError {
  constructor(kind) {
    super(`Duplicate type kind '${kind}' detected`);
  }
}

class TypeSystemDuplicateFormat extends TypeBoxError {
  constructor(kind) {
    super(`Duplicate string format '${kind}' detected`);
  }
}
var TypeSystem;
(function(TypeSystem2) {
  function Type(kind, check) {
    if (exports_type.Has(kind))
      throw new TypeSystemDuplicateTypeKind(kind);
    exports_type.Set(kind, check);
    return (options = {}) => Unsafe({ ...options, [Kind]: kind });
  }
  TypeSystem2.Type = Type;
  function Format(format, check) {
    if (exports_format.Has(format))
      throw new TypeSystemDuplicateFormat(format);
    exports_format.Set(format, check);
    return format;
  }
  TypeSystem2.Format = Format;
})(TypeSystem || (TypeSystem = {}));
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/mapped/mapped-result.mjs
function MappedResult(properties) {
  return {
    [Kind]: "MappedResult",
    properties
  };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/guard/value.mjs
var exports_value = {};
__export(exports_value, {
  IsUndefined: () => {
    {
      return IsUndefined2;
    }
  },
  IsUint8Array: () => {
    {
      return IsUint8Array2;
    }
  },
  IsSymbol: () => {
    {
      return IsSymbol2;
    }
  },
  IsString: () => {
    {
      return IsString2;
    }
  },
  IsRegExp: () => {
    {
      return IsRegExp;
    }
  },
  IsObject: () => {
    {
      return IsObject2;
    }
  },
  IsNumber: () => {
    {
      return IsNumber2;
    }
  },
  IsNull: () => {
    {
      return IsNull2;
    }
  },
  IsIterator: () => {
    {
      return IsIterator2;
    }
  },
  IsFunction: () => {
    {
      return IsFunction2;
    }
  },
  IsDate: () => {
    {
      return IsDate2;
    }
  },
  IsBoolean: () => {
    {
      return IsBoolean2;
    }
  },
  IsBigInt: () => {
    {
      return IsBigInt2;
    }
  },
  IsAsyncIterator: () => {
    {
      return IsAsyncIterator2;
    }
  },
  IsArray: () => {
    {
      return IsArray2;
    }
  }
});
function IsAsyncIterator2(value) {
  return IsObject2(value) && !IsArray2(value) && !IsUint8Array2(value) && Symbol.asyncIterator in value;
}
function IsArray2(value) {
  return Array.isArray(value);
}
function IsBigInt2(value) {
  return typeof value === "bigint";
}
function IsBoolean2(value) {
  return typeof value === "boolean";
}
function IsDate2(value) {
  return value instanceof globalThis.Date;
}
function IsFunction2(value) {
  return typeof value === "function";
}
function IsIterator2(value) {
  return IsObject2(value) && !IsArray2(value) && !IsUint8Array2(value) && Symbol.iterator in value;
}
function IsNull2(value) {
  return value === null;
}
function IsNumber2(value) {
  return typeof value === "number";
}
function IsObject2(value) {
  return typeof value === "object" && value !== null;
}
function IsRegExp(value) {
  return value instanceof globalThis.RegExp;
}
function IsString2(value) {
  return typeof value === "string";
}
function IsSymbol2(value) {
  return typeof value === "symbol";
}
function IsUint8Array2(value) {
  return value instanceof globalThis.Uint8Array;
}
function IsUndefined2(value) {
  return value === undefined;
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/clone/value.mjs
var ArrayType = function(value) {
  return value.map((value2) => Visit(value2));
};
var DateType = function(value) {
  return new Date(value.getTime());
};
var Uint8ArrayType = function(value) {
  return new Uint8Array(value);
};
var RegExpType = function(value) {
  return new RegExp(value.source, value.flags);
};
var ObjectType = function(value) {
  const clonedProperties = Object.getOwnPropertyNames(value).reduce((acc, key) => ({ ...acc, [key]: Visit(value[key]) }), {});
  const clonedSymbols = Object.getOwnPropertySymbols(value).reduce((acc, key) => ({ ...acc, [key]: Visit(value[key]) }), {});
  return { ...clonedProperties, ...clonedSymbols };
};
var Visit = function(value) {
  return IsArray2(value) ? ArrayType(value) : IsDate2(value) ? DateType(value) : IsUint8Array2(value) ? Uint8ArrayType(value) : IsRegExp(value) ? RegExpType(value) : IsObject2(value) ? ObjectType(value) : value;
};
function Clone(value) {
  return Visit(value);
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/clone/type.mjs
function CloneRest(schemas) {
  return schemas.map((schema) => CloneType(schema));
}
function CloneType(schema, options = {}) {
  return { ...Clone(schema), ...options };
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/discard/discard.mjs
var DiscardKey = function(value2, key) {
  const { [key]: _, ...rest } = value2;
  return rest;
};
function Discard(value2, keys) {
  return keys.reduce((acc, key) => DiscardKey(acc, key), value2);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/array/array.mjs
function Array2(schema, options = {}) {
  return {
    ...options,
    [Kind]: "Array",
    type: "array",
    items: CloneType(schema)
  };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/async-iterator/async-iterator.mjs
function AsyncIterator(items, options = {}) {
  return {
    ...options,
    [Kind]: "AsyncIterator",
    type: "AsyncIterator",
    items: CloneType(items)
  };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/constructor/constructor.mjs
function Constructor(parameters, returns, options) {
  return {
    ...options,
    [Kind]: "Constructor",
    type: "Constructor",
    parameters: CloneRest(parameters),
    returns: CloneType(returns)
  };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/function/function.mjs
function Function2(parameters, returns, options) {
  return {
    ...options,
    [Kind]: "Function",
    type: "Function",
    parameters: CloneRest(parameters),
    returns: CloneType(returns)
  };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/never/never.mjs
function Never(options = {}) {
  return {
    ...options,
    [Kind]: "Never",
    not: {}
  };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/guard/type.mjs
var exports_type2 = {};
__export(exports_type2, {
  TypeGuardUnknownTypeError: () => {
    {
      return TypeGuardUnknownTypeError;
    }
  },
  IsVoid: () => {
    {
      return IsVoid;
    }
  },
  IsUnsafe: () => {
    {
      return IsUnsafe;
    }
  },
  IsUnknown: () => {
    {
      return IsUnknown;
    }
  },
  IsUnionLiteral: () => {
    {
      return IsUnionLiteral;
    }
  },
  IsUnion: () => {
    {
      return IsUnion;
    }
  },
  IsUndefined: () => {
    {
      return IsUndefined3;
    }
  },
  IsUint8Array: () => {
    {
      return IsUint8Array3;
    }
  },
  IsTuple: () => {
    {
      return IsTuple;
    }
  },
  IsTransform: () => {
    {
      return IsTransform;
    }
  },
  IsThis: () => {
    {
      return IsThis;
    }
  },
  IsTemplateLiteral: () => {
    {
      return IsTemplateLiteral;
    }
  },
  IsSymbol: () => {
    {
      return IsSymbol3;
    }
  },
  IsString: () => {
    {
      return IsString3;
    }
  },
  IsSchema: () => {
    {
      return IsSchema;
    }
  },
  IsRegExp: () => {
    {
      return IsRegExp2;
    }
  },
  IsRef: () => {
    {
      return IsRef;
    }
  },
  IsRecursive: () => {
    {
      return IsRecursive;
    }
  },
  IsRecord: () => {
    {
      return IsRecord;
    }
  },
  IsReadonly: () => {
    {
      return IsReadonly;
    }
  },
  IsProperties: () => {
    {
      return IsProperties;
    }
  },
  IsPromise: () => {
    {
      return IsPromise2;
    }
  },
  IsOptional: () => {
    {
      return IsOptional;
    }
  },
  IsObject: () => {
    {
      return IsObject3;
    }
  },
  IsNumber: () => {
    {
      return IsNumber3;
    }
  },
  IsNull: () => {
    {
      return IsNull3;
    }
  },
  IsNot: () => {
    {
      return IsNot;
    }
  },
  IsNever: () => {
    {
      return IsNever;
    }
  },
  IsMappedResult: () => {
    {
      return IsMappedResult;
    }
  },
  IsMappedKey: () => {
    {
      return IsMappedKey;
    }
  },
  IsLiteralValue: () => {
    {
      return IsLiteralValue;
    }
  },
  IsLiteralString: () => {
    {
      return IsLiteralString;
    }
  },
  IsLiteralNumber: () => {
    {
      return IsLiteralNumber;
    }
  },
  IsLiteralBoolean: () => {
    {
      return IsLiteralBoolean;
    }
  },
  IsLiteral: () => {
    {
      return IsLiteral;
    }
  },
  IsKindOf: () => {
    {
      return IsKindOf;
    }
  },
  IsKind: () => {
    {
      return IsKind;
    }
  },
  IsIterator: () => {
    {
      return IsIterator3;
    }
  },
  IsIntersect: () => {
    {
      return IsIntersect;
    }
  },
  IsInteger: () => {
    {
      return IsInteger2;
    }
  },
  IsFunction: () => {
    {
      return IsFunction3;
    }
  },
  IsDate: () => {
    {
      return IsDate3;
    }
  },
  IsConstructor: () => {
    {
      return IsConstructor;
    }
  },
  IsBoolean: () => {
    {
      return IsBoolean3;
    }
  },
  IsBigInt: () => {
    {
      return IsBigInt3;
    }
  },
  IsAsyncIterator: () => {
    {
      return IsAsyncIterator3;
    }
  },
  IsArray: () => {
    {
      return IsArray3;
    }
  },
  IsAny: () => {
    {
      return IsAny;
    }
  }
});
var IsPattern = function(value2) {
  try {
    new RegExp(value2);
    return true;
  } catch {
    return false;
  }
};
var IsControlCharacterFree = function(value2) {
  if (!IsString2(value2))
    return false;
  for (let i = 0;i < value2.length; i++) {
    const code = value2.charCodeAt(i);
    if (code >= 7 && code <= 13 || code === 27 || code === 127) {
      return false;
    }
  }
  return true;
};
var IsAdditionalProperties = function(value2) {
  return IsOptionalBoolean(value2) || IsSchema(value2);
};
var IsOptionalBigInt = function(value2) {
  return IsUndefined2(value2) || IsBigInt2(value2);
};
var IsOptionalNumber = function(value2) {
  return IsUndefined2(value2) || IsNumber2(value2);
};
var IsOptionalBoolean = function(value2) {
  return IsUndefined2(value2) || IsBoolean2(value2);
};
var IsOptionalString = function(value2) {
  return IsUndefined2(value2) || IsString2(value2);
};
var IsOptionalPattern = function(value2) {
  return IsUndefined2(value2) || IsString2(value2) && IsControlCharacterFree(value2) && IsPattern(value2);
};
var IsOptionalFormat = function(value2) {
  return IsUndefined2(value2) || IsString2(value2) && IsControlCharacterFree(value2);
};
var IsOptionalSchema = function(value2) {
  return IsUndefined2(value2) || IsSchema(value2);
};
function IsReadonly(value2) {
  return IsObject2(value2) && value2[ReadonlyKind] === "Readonly";
}
function IsOptional(value2) {
  return IsObject2(value2) && value2[OptionalKind] === "Optional";
}
function IsAny(value2) {
  return IsKindOf(value2, "Any") && IsOptionalString(value2.$id);
}
function IsArray3(value2) {
  return IsKindOf(value2, "Array") && value2.type === "array" && IsOptionalString(value2.$id) && IsSchema(value2.items) && IsOptionalNumber(value2.minItems) && IsOptionalNumber(value2.maxItems) && IsOptionalBoolean(value2.uniqueItems) && IsOptionalSchema(value2.contains) && IsOptionalNumber(value2.minContains) && IsOptionalNumber(value2.maxContains);
}
function IsAsyncIterator3(value2) {
  return IsKindOf(value2, "AsyncIterator") && value2.type === "AsyncIterator" && IsOptionalString(value2.$id) && IsSchema(value2.items);
}
function IsBigInt3(value2) {
  return IsKindOf(value2, "BigInt") && value2.type === "bigint" && IsOptionalString(value2.$id) && IsOptionalBigInt(value2.exclusiveMaximum) && IsOptionalBigInt(value2.exclusiveMinimum) && IsOptionalBigInt(value2.maximum) && IsOptionalBigInt(value2.minimum) && IsOptionalBigInt(value2.multipleOf);
}
function IsBoolean3(value2) {
  return IsKindOf(value2, "Boolean") && value2.type === "boolean" && IsOptionalString(value2.$id);
}
function IsConstructor(value2) {
  return IsKindOf(value2, "Constructor") && value2.type === "Constructor" && IsOptionalString(value2.$id) && IsArray2(value2.parameters) && value2.parameters.every((schema) => IsSchema(schema)) && IsSchema(value2.returns);
}
function IsDate3(value2) {
  return IsKindOf(value2, "Date") && value2.type === "Date" && IsOptionalString(value2.$id) && IsOptionalNumber(value2.exclusiveMaximumTimestamp) && IsOptionalNumber(value2.exclusiveMinimumTimestamp) && IsOptionalNumber(value2.maximumTimestamp) && IsOptionalNumber(value2.minimumTimestamp) && IsOptionalNumber(value2.multipleOfTimestamp);
}
function IsFunction3(value2) {
  return IsKindOf(value2, "Function") && value2.type === "Function" && IsOptionalString(value2.$id) && IsArray2(value2.parameters) && value2.parameters.every((schema) => IsSchema(schema)) && IsSchema(value2.returns);
}
function IsInteger2(value2) {
  return IsKindOf(value2, "Integer") && value2.type === "integer" && IsOptionalString(value2.$id) && IsOptionalNumber(value2.exclusiveMaximum) && IsOptionalNumber(value2.exclusiveMinimum) && IsOptionalNumber(value2.maximum) && IsOptionalNumber(value2.minimum) && IsOptionalNumber(value2.multipleOf);
}
function IsProperties(value2) {
  return IsObject2(value2) && Object.entries(value2).every(([key, schema]) => IsControlCharacterFree(key) && IsSchema(schema));
}
function IsIntersect(value2) {
  return IsKindOf(value2, "Intersect") && (IsString2(value2.type) && value2.type !== "object" ? false : true) && IsArray2(value2.allOf) && value2.allOf.every((schema) => IsSchema(schema) && !IsTransform(schema)) && IsOptionalString(value2.type) && (IsOptionalBoolean(value2.unevaluatedProperties) || IsOptionalSchema(value2.unevaluatedProperties)) && IsOptionalString(value2.$id);
}
function IsIterator3(value2) {
  return IsKindOf(value2, "Iterator") && value2.type === "Iterator" && IsOptionalString(value2.$id) && IsSchema(value2.items);
}
function IsKindOf(value2, kind) {
  return IsObject2(value2) && Kind in value2 && value2[Kind] === kind;
}
function IsLiteralString(value2) {
  return IsLiteral(value2) && IsString2(value2.const);
}
function IsLiteralNumber(value2) {
  return IsLiteral(value2) && IsNumber2(value2.const);
}
function IsLiteralBoolean(value2) {
  return IsLiteral(value2) && IsBoolean2(value2.const);
}
function IsLiteral(value2) {
  return IsKindOf(value2, "Literal") && IsOptionalString(value2.$id) && IsLiteralValue(value2.const);
}
function IsLiteralValue(value2) {
  return IsBoolean2(value2) || IsNumber2(value2) || IsString2(value2);
}
function IsMappedKey(value2) {
  return IsKindOf(value2, "MappedKey") && IsArray2(value2.keys) && value2.keys.every((key) => IsNumber2(key) || IsString2(key));
}
function IsMappedResult(value2) {
  return IsKindOf(value2, "MappedResult") && IsProperties(value2.properties);
}
function IsNever(value2) {
  return IsKindOf(value2, "Never") && IsObject2(value2.not) && Object.getOwnPropertyNames(value2.not).length === 0;
}
function IsNot(value2) {
  return IsKindOf(value2, "Not") && IsSchema(value2.not);
}
function IsNull3(value2) {
  return IsKindOf(value2, "Null") && value2.type === "null" && IsOptionalString(value2.$id);
}
function IsNumber3(value2) {
  return IsKindOf(value2, "Number") && value2.type === "number" && IsOptionalString(value2.$id) && IsOptionalNumber(value2.exclusiveMaximum) && IsOptionalNumber(value2.exclusiveMinimum) && IsOptionalNumber(value2.maximum) && IsOptionalNumber(value2.minimum) && IsOptionalNumber(value2.multipleOf);
}
function IsObject3(value2) {
  return IsKindOf(value2, "Object") && value2.type === "object" && IsOptionalString(value2.$id) && IsProperties(value2.properties) && IsAdditionalProperties(value2.additionalProperties) && IsOptionalNumber(value2.minProperties) && IsOptionalNumber(value2.maxProperties);
}
function IsPromise2(value2) {
  return IsKindOf(value2, "Promise") && value2.type === "Promise" && IsOptionalString(value2.$id) && IsSchema(value2.item);
}
function IsRecord(value2) {
  return IsKindOf(value2, "Record") && value2.type === "object" && IsOptionalString(value2.$id) && IsAdditionalProperties(value2.additionalProperties) && IsObject2(value2.patternProperties) && ((schema) => {
    const keys = Object.getOwnPropertyNames(schema.patternProperties);
    return keys.length === 1 && IsPattern(keys[0]) && IsObject2(schema.patternProperties) && IsSchema(schema.patternProperties[keys[0]]);
  })(value2);
}
function IsRecursive(value2) {
  return IsObject2(value2) && Hint in value2 && value2[Hint] === "Recursive";
}
function IsRef(value2) {
  return IsKindOf(value2, "Ref") && IsOptionalString(value2.$id) && IsString2(value2.$ref);
}
function IsRegExp2(value2) {
  return IsKindOf(value2, "RegExp") && IsOptionalString(value2.$id) && IsString2(value2.source) && IsString2(value2.flags) && IsOptionalNumber(value2.maxLength) && IsOptionalNumber(value2.minLength);
}
function IsString3(value2) {
  return IsKindOf(value2, "String") && value2.type === "string" && IsOptionalString(value2.$id) && IsOptionalNumber(value2.minLength) && IsOptionalNumber(value2.maxLength) && IsOptionalPattern(value2.pattern) && IsOptionalFormat(value2.format);
}
function IsSymbol3(value2) {
  return IsKindOf(value2, "Symbol") && value2.type === "symbol" && IsOptionalString(value2.$id);
}
function IsTemplateLiteral(value2) {
  return IsKindOf(value2, "TemplateLiteral") && value2.type === "string" && IsString2(value2.pattern) && value2.pattern[0] === "^" && value2.pattern[value2.pattern.length - 1] === "$";
}
function IsThis(value2) {
  return IsKindOf(value2, "This") && IsOptionalString(value2.$id) && IsString2(value2.$ref);
}
function IsTransform(value2) {
  return IsObject2(value2) && TransformKind in value2;
}
function IsTuple(value2) {
  return IsKindOf(value2, "Tuple") && value2.type === "array" && IsOptionalString(value2.$id) && IsNumber2(value2.minItems) && IsNumber2(value2.maxItems) && value2.minItems === value2.maxItems && (IsUndefined2(value2.items) && IsUndefined2(value2.additionalItems) && value2.minItems === 0 || IsArray2(value2.items) && value2.items.every((schema) => IsSchema(schema)));
}
function IsUndefined3(value2) {
  return IsKindOf(value2, "Undefined") && value2.type === "undefined" && IsOptionalString(value2.$id);
}
function IsUnionLiteral(value2) {
  return IsUnion(value2) && value2.anyOf.every((schema) => IsLiteralString(schema) || IsLiteralNumber(schema));
}
function IsUnion(value2) {
  return IsKindOf(value2, "Union") && IsOptionalString(value2.$id) && IsObject2(value2) && IsArray2(value2.anyOf) && value2.anyOf.every((schema) => IsSchema(schema));
}
function IsUint8Array3(value2) {
  return IsKindOf(value2, "Uint8Array") && value2.type === "Uint8Array" && IsOptionalString(value2.$id) && IsOptionalNumber(value2.minByteLength) && IsOptionalNumber(value2.maxByteLength);
}
function IsUnknown(value2) {
  return IsKindOf(value2, "Unknown") && IsOptionalString(value2.$id);
}
function IsUnsafe(value2) {
  return IsKindOf(value2, "Unsafe");
}
function IsVoid(value2) {
  return IsKindOf(value2, "Void") && value2.type === "void" && IsOptionalString(value2.$id);
}
function IsKind(value2) {
  return IsObject2(value2) && Kind in value2 && IsString2(value2[Kind]) && !KnownTypes.includes(value2[Kind]);
}
function IsSchema(value2) {
  return IsObject2(value2) && (IsAny(value2) || IsArray3(value2) || IsBoolean3(value2) || IsBigInt3(value2) || IsAsyncIterator3(value2) || IsConstructor(value2) || IsDate3(value2) || IsFunction3(value2) || IsInteger2(value2) || IsIntersect(value2) || IsIterator3(value2) || IsLiteral(value2) || IsMappedKey(value2) || IsMappedResult(value2) || IsNever(value2) || IsNot(value2) || IsNull3(value2) || IsNumber3(value2) || IsObject3(value2) || IsPromise2(value2) || IsRecord(value2) || IsRef(value2) || IsRegExp2(value2) || IsString3(value2) || IsSymbol3(value2) || IsTemplateLiteral(value2) || IsThis(value2) || IsTuple(value2) || IsUndefined3(value2) || IsUnion(value2) || IsUint8Array3(value2) || IsUnknown(value2) || IsUnsafe(value2) || IsVoid(value2) || IsKind(value2));
}

class TypeGuardUnknownTypeError extends TypeBoxError {
}
var KnownTypes = [
  "Any",
  "Array",
  "AsyncIterator",
  "BigInt",
  "Boolean",
  "Constructor",
  "Date",
  "Enum",
  "Function",
  "Integer",
  "Intersect",
  "Iterator",
  "Literal",
  "MappedKey",
  "MappedResult",
  "Not",
  "Null",
  "Number",
  "Object",
  "Promise",
  "Record",
  "Ref",
  "RegExp",
  "String",
  "Symbol",
  "TemplateLiteral",
  "This",
  "Tuple",
  "Undefined",
  "Union",
  "Uint8Array",
  "Unknown",
  "Void"
];

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/optional/optional.mjs
var RemoveOptional = function(schema) {
  return Discard(CloneType(schema), [OptionalKind]);
};
var AddOptional = function(schema) {
  return { ...CloneType(schema), [OptionalKind]: "Optional" };
};
var OptionalWithFlag = function(schema, F) {
  return F === false ? RemoveOptional(schema) : AddOptional(schema);
};
function Optional(schema, enable) {
  const F = enable ?? true;
  return IsMappedResult(schema) ? OptionalFromMappedResult(schema, F) : OptionalWithFlag(schema, F);
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/optional/optional-from-mapped-result.mjs
var FromProperties = function(P, F) {
  return globalThis.Object.getOwnPropertyNames(P).reduce((Acc, K2) => {
    return { ...Acc, [K2]: Optional(P[K2], F) };
  }, {});
};
var FromMappedResult = function(R, F) {
  return FromProperties(R.properties, F);
};
function OptionalFromMappedResult(R, F) {
  const P = FromMappedResult(R, F);
  return MappedResult(P);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/intersect/intersect-create.mjs
function IntersectCreate(T, options) {
  const allObjects = T.every((schema) => IsObject3(schema));
  const clonedUnevaluatedProperties = IsSchema(options.unevaluatedProperties) ? { unevaluatedProperties: CloneType(options.unevaluatedProperties) } : {};
  return options.unevaluatedProperties === false || IsSchema(options.unevaluatedProperties) || allObjects ? { ...options, ...clonedUnevaluatedProperties, [Kind]: "Intersect", type: "object", allOf: CloneRest(T) } : { ...options, ...clonedUnevaluatedProperties, [Kind]: "Intersect", allOf: CloneRest(T) };
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/intersect/intersect-evaluated.mjs
var IsIntersectOptional = function(T) {
  return T.every((L) => IsOptional(L));
};
var RemoveOptionalFromType = function(T) {
  return Discard(T, [OptionalKind]);
};
var RemoveOptionalFromRest = function(T) {
  return T.map((L) => IsOptional(L) ? RemoveOptionalFromType(L) : L);
};
var ResolveIntersect = function(T, options) {
  return IsIntersectOptional(T) ? Optional(IntersectCreate(RemoveOptionalFromRest(T), options)) : IntersectCreate(RemoveOptionalFromRest(T), options);
};
function IntersectEvaluated(T, options = {}) {
  if (T.length === 0)
    return Never(options);
  if (T.length === 1)
    return CloneType(T[0], options);
  if (T.some((schema) => IsTransform(schema)))
    throw new Error("Cannot intersect transform types");
  return ResolveIntersect(T, options);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/intersect/intersect.mjs
function Intersect(T, options = {}) {
  if (T.length === 0)
    return Never(options);
  if (T.length === 1)
    return CloneType(T[0], options);
  if (T.some((schema) => IsTransform(schema)))
    throw new Error("Cannot intersect transform types");
  return IntersectCreate(T, options);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/union/union-create.mjs
function UnionCreate(T, options) {
  return { ...options, [Kind]: "Union", anyOf: CloneRest(T) };
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/union/union-evaluated.mjs
var IsUnionOptional = function(T) {
  return T.some((L) => IsOptional(L));
};
var RemoveOptionalFromRest2 = function(T) {
  return T.map((L) => IsOptional(L) ? RemoveOptionalFromType2(L) : L);
};
var RemoveOptionalFromType2 = function(T) {
  return Discard(T, [OptionalKind]);
};
var ResolveUnion = function(T, options) {
  return IsUnionOptional(T) ? Optional(UnionCreate(RemoveOptionalFromRest2(T), options)) : UnionCreate(RemoveOptionalFromRest2(T), options);
};
function UnionEvaluated(T, options = {}) {
  return T.length === 0 ? Never(options) : T.length === 1 ? CloneType(T[0], options) : ResolveUnion(T, options);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/union/union.mjs
function Union(T, options = {}) {
  return T.length === 0 ? Never(options) : T.length === 1 ? CloneType(T[0], options) : UnionCreate(T, options);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/template-literal/parse.mjs
var IsNonEscaped = function(pattern, index, char) {
  return pattern[index] === char && pattern.charCodeAt(index - 1) !== 92;
};
var IsOpenParen = function(pattern, index) {
  return IsNonEscaped(pattern, index, "(");
};
var IsCloseParen = function(pattern, index) {
  return IsNonEscaped(pattern, index, ")");
};
var IsSeparator = function(pattern, index) {
  return IsNonEscaped(pattern, index, "|");
};
var IsGroup = function(pattern) {
  if (!(IsOpenParen(pattern, 0) && IsCloseParen(pattern, pattern.length - 1)))
    return false;
  let count = 0;
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (count === 0 && index !== pattern.length - 1)
      return false;
  }
  return true;
};
var InGroup = function(pattern) {
  return pattern.slice(1, pattern.length - 1);
};
var IsPrecedenceOr = function(pattern) {
  let count = 0;
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (IsSeparator(pattern, index) && count === 0)
      return true;
  }
  return false;
};
var IsPrecedenceAnd = function(pattern) {
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      return true;
  }
  return false;
};
var Or = function(pattern) {
  let [count, start] = [0, 0];
  const expressions = [];
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (IsSeparator(pattern, index) && count === 0) {
      const range2 = pattern.slice(start, index);
      if (range2.length > 0)
        expressions.push(TemplateLiteralParse(range2));
      start = index + 1;
    }
  }
  const range = pattern.slice(start);
  if (range.length > 0)
    expressions.push(TemplateLiteralParse(range));
  if (expressions.length === 0)
    return { type: "const", const: "" };
  if (expressions.length === 1)
    return expressions[0];
  return { type: "or", expr: expressions };
};
var And = function(pattern) {
  function Group(value2, index) {
    if (!IsOpenParen(value2, index))
      throw new TemplateLiteralParserError(`TemplateLiteralParser: Index must point to open parens`);
    let count = 0;
    for (let scan = index;scan < value2.length; scan++) {
      if (IsOpenParen(value2, scan))
        count += 1;
      if (IsCloseParen(value2, scan))
        count -= 1;
      if (count === 0)
        return [index, scan];
    }
    throw new TemplateLiteralParserError(`TemplateLiteralParser: Unclosed group parens in expression`);
  }
  function Range(pattern2, index) {
    for (let scan = index;scan < pattern2.length; scan++) {
      if (IsOpenParen(pattern2, scan))
        return [index, scan];
    }
    return [index, pattern2.length];
  }
  const expressions = [];
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index)) {
      const [start, end] = Group(pattern, index);
      const range = pattern.slice(start, end + 1);
      expressions.push(TemplateLiteralParse(range));
      index = end;
    } else {
      const [start, end] = Range(pattern, index);
      const range = pattern.slice(start, end);
      if (range.length > 0)
        expressions.push(TemplateLiteralParse(range));
      index = end - 1;
    }
  }
  return expressions.length === 0 ? { type: "const", const: "" } : expressions.length === 1 ? expressions[0] : { type: "and", expr: expressions };
};
function TemplateLiteralParse(pattern) {
  return IsGroup(pattern) ? TemplateLiteralParse(InGroup(pattern)) : IsPrecedenceOr(pattern) ? Or(pattern) : IsPrecedenceAnd(pattern) ? And(pattern) : { type: "const", const: pattern };
}
function TemplateLiteralParseExact(pattern) {
  return TemplateLiteralParse(pattern.slice(1, pattern.length - 1));
}

class TemplateLiteralParserError extends TypeBoxError {
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/template-literal/finite.mjs
var IsNumberExpression = function(expression) {
  return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "0" && expression.expr[1].type === "const" && expression.expr[1].const === "[1-9][0-9]*";
};
var IsBooleanExpression = function(expression) {
  return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "true" && expression.expr[1].type === "const" && expression.expr[1].const === "false";
};
var IsStringExpression = function(expression) {
  return expression.type === "const" && expression.const === ".*";
};
function IsTemplateLiteralExpressionFinite(expression) {
  return IsNumberExpression(expression) || IsStringExpression(expression) ? false : IsBooleanExpression(expression) ? true : expression.type === "and" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "or" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "const" ? true : (() => {
    throw new TemplateLiteralFiniteError(`Unknown expression type`);
  })();
}
function IsTemplateLiteralFinite(schema) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  return IsTemplateLiteralExpressionFinite(expression);
}

class TemplateLiteralFiniteError extends TypeBoxError {
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/template-literal/generate.mjs
function* GenerateReduce(buffer) {
  if (buffer.length === 1)
    return yield* buffer[0];
  for (const left of buffer[0]) {
    for (const right of GenerateReduce(buffer.slice(1))) {
      yield `${left}${right}`;
    }
  }
}
function* GenerateAnd(expression) {
  return yield* GenerateReduce(expression.expr.map((expr) => [...TemplateLiteralExpressionGenerate(expr)]));
}
function* GenerateOr(expression) {
  for (const expr of expression.expr)
    yield* TemplateLiteralExpressionGenerate(expr);
}
function* GenerateConst(expression) {
  return yield expression.const;
}
function* TemplateLiteralExpressionGenerate(expression) {
  return expression.type === "and" ? yield* GenerateAnd(expression) : expression.type === "or" ? yield* GenerateOr(expression) : expression.type === "const" ? yield* GenerateConst(expression) : (() => {
    throw new TemplateLiteralGenerateError("Unknown expression");
  })();
}
function TemplateLiteralGenerate(schema) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  return IsTemplateLiteralExpressionFinite(expression) ? [...TemplateLiteralExpressionGenerate(expression)] : [];
}

class TemplateLiteralGenerateError extends TypeBoxError {
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/literal/literal.mjs
function Literal(value2, options = {}) {
  return {
    ...options,
    [Kind]: "Literal",
    const: value2,
    type: typeof value2
  };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/boolean/boolean.mjs
function Boolean2(options = {}) {
  return {
    ...options,
    [Kind]: "Boolean",
    type: "boolean"
  };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/bigint/bigint.mjs
function BigInt2(options = {}) {
  return {
    ...options,
    [Kind]: "BigInt",
    type: "bigint"
  };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/number/number.mjs
function Number2(options = {}) {
  return {
    ...options,
    [Kind]: "Number",
    type: "number"
  };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/string/string.mjs
function String2(options = {}) {
  return { ...options, [Kind]: "String", type: "string" };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/template-literal/syntax.mjs
function* FromUnion(syntax) {
  const trim = syntax.trim().replace(/"|'/g, "");
  return trim === "boolean" ? yield Boolean2() : trim === "number" ? yield Number2() : trim === "bigint" ? yield BigInt2() : trim === "string" ? yield String2() : yield (() => {
    const literals = trim.split("|").map((literal3) => Literal(literal3.trim()));
    return literals.length === 0 ? Never() : literals.length === 1 ? literals[0] : UnionEvaluated(literals);
  })();
}
function* FromTerminal(syntax) {
  if (syntax[1] !== "{") {
    const L = Literal("$");
    const R = FromSyntax(syntax.slice(1));
    return yield* [L, ...R];
  }
  for (let i = 2;i < syntax.length; i++) {
    if (syntax[i] === "}") {
      const L = FromUnion(syntax.slice(2, i));
      const R = FromSyntax(syntax.slice(i + 1));
      return yield* [...L, ...R];
    }
  }
  yield Literal(syntax);
}
function* FromSyntax(syntax) {
  for (let i = 0;i < syntax.length; i++) {
    if (syntax[i] === "$") {
      const L = Literal(syntax.slice(0, i));
      const R = FromTerminal(syntax.slice(i));
      return yield* [L, ...R];
    }
  }
  yield Literal(syntax);
}
function TemplateLiteralSyntax(syntax) {
  return [...FromSyntax(syntax)];
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/patterns/patterns.mjs
var PatternBoolean = "(true|false)";
var PatternNumber = "(0|[1-9][0-9]*)";
var PatternString = "(.*)";
var PatternBooleanExact = `^${PatternBoolean}\$`;
var PatternNumberExact = `^${PatternNumber}\$`;
var PatternStringExact = `^${PatternString}\$`;
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/template-literal/pattern.mjs
var Escape = function(value2) {
  return value2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};
var Visit2 = function(schema, acc) {
  return IsTemplateLiteral(schema) ? schema.pattern.slice(1, schema.pattern.length - 1) : IsUnion(schema) ? `(${schema.anyOf.map((schema2) => Visit2(schema2, acc)).join("|")})` : IsNumber3(schema) ? `${acc}${PatternNumber}` : IsInteger2(schema) ? `${acc}${PatternNumber}` : IsBigInt3(schema) ? `${acc}${PatternNumber}` : IsString3(schema) ? `${acc}${PatternString}` : IsLiteral(schema) ? `${acc}${Escape(schema.const.toString())}` : IsBoolean3(schema) ? `${acc}${PatternBoolean}` : (() => {
    throw new TemplateLiteralPatternError(`Unexpected Kind '${schema[Kind]}'`);
  })();
};
function TemplateLiteralPattern(kinds) {
  return `^${kinds.map((schema) => Visit2(schema, "")).join("")}$`;
}

class TemplateLiteralPatternError extends TypeBoxError {
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/template-literal/union.mjs
function TemplateLiteralToUnion(schema) {
  const R = TemplateLiteralGenerate(schema);
  const L = R.map((S) => Literal(S));
  return UnionEvaluated(L);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/template-literal/template-literal.mjs
function TemplateLiteral(unresolved, options = {}) {
  const pattern2 = IsString2(unresolved) ? TemplateLiteralPattern(TemplateLiteralSyntax(unresolved)) : TemplateLiteralPattern(unresolved);
  return { ...options, [Kind]: "TemplateLiteral", type: "string", pattern: pattern2 };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/indexed/indexed-property-keys.mjs
var FromTemplateLiteral = function(T) {
  const R = TemplateLiteralGenerate(T);
  return R.map((S) => S.toString());
};
var FromUnion2 = function(T) {
  return T.reduce((Acc, L) => {
    return [...Acc, ...IndexPropertyKeys(L)];
  }, []);
};
var FromLiteral = function(T) {
  return [T.toString()];
};
function IndexPropertyKeys(T) {
  return [...new Set(IsTemplateLiteral(T) ? FromTemplateLiteral(T) : IsUnion(T) ? FromUnion2(T.anyOf) : IsLiteral(T) ? FromLiteral(T.const) : IsNumber3(T) ? ["[number]"] : IsInteger2(T) ? ["[number]"] : [])];
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/indexed/indexed-from-mapped-result.mjs
var FromProperties2 = function(T, P, options) {
  return globalThis.Object.getOwnPropertyNames(P).reduce((Acc, K2) => {
    return { ...Acc, [K2]: Index(T, IndexPropertyKeys(P[K2]), options) };
  }, {});
};
var FromMappedResult2 = function(T, R, options) {
  return FromProperties2(T, R.properties, options);
};
function IndexFromMappedResult(T, R, options) {
  const P = FromMappedResult2(T, R, options);
  return MappedResult(P);
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/indexed/indexed.mjs
var FromRest = function(T, K) {
  return T.map((L) => IndexFromPropertyKey(L, K));
};
var FromIntersectRest = function(T) {
  return T.filter((L) => !IsNever(L));
};
var FromIntersect = function(T, K) {
  return IntersectEvaluated(FromIntersectRest(FromRest(T, K)));
};
var FromUnionRest = function(T) {
  return T;
};
var FromUnion3 = function(T, K) {
  return UnionEvaluated(FromUnionRest(FromRest(T, K)));
};
var FromTuple = function(T, K) {
  return K in T ? T[K] : K === "[number]" ? UnionEvaluated(T) : Never();
};
var FromArray = function(T, K) {
  return K === "[number]" ? T : Never();
};
var FromProperty = function(T, K) {
  return K in T ? T[K] : Never();
};
function IndexFromPropertyKey(T, K) {
  return IsIntersect(T) ? FromIntersect(T.allOf, K) : IsUnion(T) ? FromUnion3(T.anyOf, K) : IsTuple(T) ? FromTuple(T.items ?? [], K) : IsArray3(T) ? FromArray(T.items, K) : IsObject3(T) ? FromProperty(T.properties, K) : Never();
}
function IndexFromPropertyKeys(T, K) {
  return K.map((L) => IndexFromPropertyKey(T, L));
}
var FromSchema = function(T, K) {
  return UnionEvaluated(IndexFromPropertyKeys(T, K));
};
function Index(T, K, options = {}) {
  return IsMappedResult(K) ? CloneType(IndexFromMappedResult(T, K, options)) : IsMappedKey(K) ? CloneType(IndexFromMappedKey(T, K, options)) : IsSchema(K) ? CloneType(FromSchema(T, IndexPropertyKeys(K)), options) : CloneType(FromSchema(T, K), options);
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/indexed/indexed-from-mapped-key.mjs
var MappedIndexPropertyKey = function(T, K, options) {
  return { [K]: Index(T, [K], options) };
};
var MappedIndexPropertyKeys = function(T, K, options) {
  return K.reduce((Acc, L) => {
    return { ...Acc, ...MappedIndexPropertyKey(T, L, options) };
  }, {});
};
var MappedIndexProperties = function(T, K, options) {
  return MappedIndexPropertyKeys(T, K.keys, options);
};
function IndexFromMappedKey(T, K, options) {
  const P = MappedIndexProperties(T, K, options);
  return MappedResult(P);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/iterator/iterator.mjs
function Iterator(items, options = {}) {
  return {
    ...options,
    [Kind]: "Iterator",
    type: "Iterator",
    items: CloneType(items)
  };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/object/object.mjs
var _Object = function(properties, options = {}) {
  const propertyKeys = globalThis.Object.getOwnPropertyNames(properties);
  const optionalKeys = propertyKeys.filter((key) => IsOptional(properties[key]));
  const requiredKeys = propertyKeys.filter((name) => !optionalKeys.includes(name));
  const clonedAdditionalProperties = IsSchema(options.additionalProperties) ? { additionalProperties: CloneType(options.additionalProperties) } : {};
  const clonedProperties = propertyKeys.reduce((acc, key) => ({ ...acc, [key]: CloneType(properties[key]) }), {});
  return requiredKeys.length > 0 ? { ...options, ...clonedAdditionalProperties, [Kind]: "Object", type: "object", properties: clonedProperties, required: requiredKeys } : { ...options, ...clonedAdditionalProperties, [Kind]: "Object", type: "object", properties: clonedProperties };
};
var Object2 = _Object;
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/promise/promise.mjs
function Promise2(item, options = {}) {
  return {
    ...options,
    [Kind]: "Promise",
    type: "Promise",
    item: CloneType(item)
  };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/readonly/readonly.mjs
var RemoveReadonly = function(schema) {
  return Discard(CloneType(schema), [ReadonlyKind]);
};
var AddReadonly = function(schema) {
  return { ...CloneType(schema), [ReadonlyKind]: "Readonly" };
};
var ReadonlyWithFlag = function(schema, F) {
  return F === false ? RemoveReadonly(schema) : AddReadonly(schema);
};
function Readonly(schema, enable) {
  const F = enable ?? true;
  return IsMappedResult(schema) ? ReadonlyFromMappedResult(schema, F) : ReadonlyWithFlag(schema, F);
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/readonly/readonly-from-mapped-result.mjs
var FromProperties3 = function(K, F) {
  return globalThis.Object.getOwnPropertyNames(K).reduce((Acc, K2) => {
    return { ...Acc, [K2]: Readonly(K[K2], F) };
  }, {});
};
var FromMappedResult3 = function(R, F) {
  return FromProperties3(R.properties, F);
};
function ReadonlyFromMappedResult(R, F) {
  const P = FromMappedResult3(R, F);
  return MappedResult(P);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/tuple/tuple.mjs
function Tuple(items, options = {}) {
  const [additionalItems, minItems, maxItems] = [false, items.length, items.length];
  return items.length > 0 ? { ...options, [Kind]: "Tuple", type: "array", items: CloneRest(items), additionalItems, minItems, maxItems } : { ...options, [Kind]: "Tuple", type: "array", minItems, maxItems };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/sets/set.mjs
function SetIncludes(T, S) {
  return T.includes(S);
}
function SetDistinct(T) {
  return [...new Set(T)];
}
function SetIntersect(T, S) {
  return T.filter((L) => S.includes(L));
}
var SetIntersectManyResolve = function(T, Init) {
  return T.reduce((Acc, L) => {
    return SetIntersect(Acc, L);
  }, Init);
};
function SetIntersectMany(T) {
  return T.length === 1 ? T[0] : T.length > 1 ? SetIntersectManyResolve(T.slice(1), T[0]) : [];
}
function SetUnionMany(T) {
  return T.reduce((Acc, L) => [...Acc, ...L], []);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/mapped/mapped.mjs
var FromMappedResult4 = function(K, P) {
  return K in P ? FromSchemaType(K, P[K]) : MappedResult(P);
};
var MappedKeyToKnownMappedResultProperties = function(K) {
  return { [K]: Literal(K) };
};
var MappedKeyToUnknownMappedResultProperties = function(P) {
  return P.reduce((Acc, L) => {
    return { ...Acc, [L]: Literal(L) };
  }, {});
};
var MappedKeyToMappedResultProperties = function(K, P) {
  return SetIncludes(P, K) ? MappedKeyToKnownMappedResultProperties(K) : MappedKeyToUnknownMappedResultProperties(P);
};
var FromMappedKey = function(K, P) {
  const R = MappedKeyToMappedResultProperties(K, P);
  return FromMappedResult4(K, R);
};
var FromRest2 = function(K, T) {
  return T.map((L) => FromSchemaType(K, L));
};
var FromProperties4 = function(K, T) {
  return globalThis.Object.getOwnPropertyNames(T).reduce((Acc, K2) => {
    return { ...Acc, [K2]: FromSchemaType(K, T[K2]) };
  }, {});
};
var FromSchemaType = function(K, T) {
  return IsOptional(T) ? Optional(FromSchemaType(K, Discard(T, [OptionalKind]))) : IsReadonly(T) ? Readonly(FromSchemaType(K, Discard(T, [ReadonlyKind]))) : IsMappedResult(T) ? FromMappedResult4(K, T.properties) : IsMappedKey(T) ? FromMappedKey(K, T.keys) : IsConstructor(T) ? Constructor(FromRest2(K, T.parameters), FromSchemaType(K, T.returns)) : IsFunction3(T) ? Function2(FromRest2(K, T.parameters), FromSchemaType(K, T.returns)) : IsAsyncIterator3(T) ? AsyncIterator(FromSchemaType(K, T.items)) : IsIterator3(T) ? Iterator(FromSchemaType(K, T.items)) : IsIntersect(T) ? Intersect(FromRest2(K, T.allOf)) : IsUnion(T) ? Union(FromRest2(K, T.anyOf)) : IsTuple(T) ? Tuple(FromRest2(K, T.items ?? [])) : IsObject3(T) ? Object2(FromProperties4(K, T.properties)) : IsArray3(T) ? Array2(FromSchemaType(K, T.items)) : IsPromise2(T) ? Promise2(FromSchemaType(K, T.item)) : T;
};
function MappedFunctionReturnType(K, T, Acc = {}) {
  return K.reduce((Acc2, L) => {
    return { ...Acc2, [L]: FromSchemaType(L, T) };
  }, {});
}
function Mapped(key, map3, options = {}) {
  const K = IsSchema(key) ? IndexPropertyKeys(key) : key;
  const RT = map3({ [Kind]: "MappedKey", keys: K });
  const R = MappedFunctionReturnType(K, RT);
  return CloneType(Object2(R), options);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/keyof/keyof-property-keys.mjs
var FromRest3 = function(T) {
  return T.reduce((Acc, L) => {
    return [...Acc, KeyOfPropertyKeys(L)];
  }, []);
};
var FromIntersect2 = function(T) {
  const C = FromRest3(T);
  const R = SetUnionMany(C);
  return R;
};
var FromUnion4 = function(T) {
  const C = FromRest3(T);
  const R = SetIntersectMany(C);
  return R;
};
var FromTuple2 = function(T) {
  return T.map((_, I) => I.toString());
};
var FromArray2 = function(_) {
  return ["[number]"];
};
var FromProperties5 = function(T) {
  return globalThis.Object.getOwnPropertyNames(T);
};
var FromPatternProperties = function(patternProperties) {
  if (!includePatternProperties)
    return [];
  const patternPropertyKeys = globalThis.Object.getOwnPropertyNames(patternProperties);
  return patternPropertyKeys.map((key) => {
    return key[0] === "^" && key[key.length - 1] === "$" ? key.slice(1, key.length - 1) : key;
  });
};
function KeyOfPropertyKeys(T) {
  return IsIntersect(T) ? FromIntersect2(T.allOf) : IsUnion(T) ? FromUnion4(T.anyOf) : IsTuple(T) ? FromTuple2(T.items ?? []) : IsArray3(T) ? FromArray2(T.items) : IsObject3(T) ? FromProperties5(T.properties) : IsRecord(T) ? FromPatternProperties(T.patternProperties) : [];
}
function KeyOfPattern(schema) {
  includePatternProperties = true;
  const keys = KeyOfPropertyKeys(schema);
  includePatternProperties = false;
  const pattern3 = keys.map((key) => `(${key})`);
  return `^(${pattern3.join("|")})\$`;
}
var includePatternProperties = false;

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/keyof/keyof.mjs
function KeyOfPropertyKeysToRest(T) {
  return T.map((L) => L === "[number]" ? Number2() : Literal(L));
}
function KeyOf(T, options = {}) {
  if (IsMappedResult(T)) {
    return KeyOfFromMappedResult(T, options);
  } else {
    const K = KeyOfPropertyKeys(T);
    const S = KeyOfPropertyKeysToRest(K);
    const U = UnionEvaluated(S);
    return CloneType(U, options);
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/keyof/keyof-from-mapped-result.mjs
var FromProperties6 = function(K, options) {
  return globalThis.Object.getOwnPropertyNames(K).reduce((Acc, K2) => {
    return { ...Acc, [K2]: KeyOf(K[K2], options) };
  }, {});
};
var FromMappedResult5 = function(R, options) {
  return FromProperties6(R.properties, options);
};
function KeyOfFromMappedResult(R, options) {
  const P = FromMappedResult5(R, options);
  return MappedResult(P);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/extends/extends-undefined.mjs
var Intersect2 = function(schema) {
  return schema.allOf.every((schema2) => ExtendsUndefinedCheck(schema2));
};
var Union2 = function(schema) {
  return schema.anyOf.some((schema2) => ExtendsUndefinedCheck(schema2));
};
var Not = function(schema) {
  return !ExtendsUndefinedCheck(schema.not);
};
function ExtendsUndefinedCheck(schema) {
  return schema[Kind] === "Intersect" ? Intersect2(schema) : schema[Kind] === "Union" ? Union2(schema) : schema[Kind] === "Not" ? Not(schema) : schema[Kind] === "Undefined" ? true : false;
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/errors/function.mjs
function DefaultErrorFunction(error8) {
  switch (error8.errorType) {
    case ValueErrorType.ArrayContains:
      return "Expected array to contain at least one matching value";
    case ValueErrorType.ArrayMaxContains:
      return `Expected array to contain no more than ${error8.schema.maxContains} matching values`;
    case ValueErrorType.ArrayMinContains:
      return `Expected array to contain at least ${error8.schema.minContains} matching values`;
    case ValueErrorType.ArrayMaxItems:
      return `Expected array length to be less or equal to ${error8.schema.maxItems}`;
    case ValueErrorType.ArrayMinItems:
      return `Expected array length to be greater or equal to ${error8.schema.minItems}`;
    case ValueErrorType.ArrayUniqueItems:
      return "Expected array elements to be unique";
    case ValueErrorType.Array:
      return "Expected array";
    case ValueErrorType.AsyncIterator:
      return "Expected AsyncIterator";
    case ValueErrorType.BigIntExclusiveMaximum:
      return `Expected bigint to be less than ${error8.schema.exclusiveMaximum}`;
    case ValueErrorType.BigIntExclusiveMinimum:
      return `Expected bigint to be greater than ${error8.schema.exclusiveMinimum}`;
    case ValueErrorType.BigIntMaximum:
      return `Expected bigint to be less or equal to ${error8.schema.maximum}`;
    case ValueErrorType.BigIntMinimum:
      return `Expected bigint to be greater or equal to ${error8.schema.minimum}`;
    case ValueErrorType.BigIntMultipleOf:
      return `Expected bigint to be a multiple of ${error8.schema.multipleOf}`;
    case ValueErrorType.BigInt:
      return "Expected bigint";
    case ValueErrorType.Boolean:
      return "Expected boolean";
    case ValueErrorType.DateExclusiveMinimumTimestamp:
      return `Expected Date timestamp to be greater than ${error8.schema.exclusiveMinimumTimestamp}`;
    case ValueErrorType.DateExclusiveMaximumTimestamp:
      return `Expected Date timestamp to be less than ${error8.schema.exclusiveMaximumTimestamp}`;
    case ValueErrorType.DateMinimumTimestamp:
      return `Expected Date timestamp to be greater or equal to ${error8.schema.minimumTimestamp}`;
    case ValueErrorType.DateMaximumTimestamp:
      return `Expected Date timestamp to be less or equal to ${error8.schema.maximumTimestamp}`;
    case ValueErrorType.DateMultipleOfTimestamp:
      return `Expected Date timestamp to be a multiple of ${error8.schema.multipleOfTimestamp}`;
    case ValueErrorType.Date:
      return "Expected Date";
    case ValueErrorType.Function:
      return "Expected function";
    case ValueErrorType.IntegerExclusiveMaximum:
      return `Expected integer to be less than ${error8.schema.exclusiveMaximum}`;
    case ValueErrorType.IntegerExclusiveMinimum:
      return `Expected integer to be greater than ${error8.schema.exclusiveMinimum}`;
    case ValueErrorType.IntegerMaximum:
      return `Expected integer to be less or equal to ${error8.schema.maximum}`;
    case ValueErrorType.IntegerMinimum:
      return `Expected integer to be greater or equal to ${error8.schema.minimum}`;
    case ValueErrorType.IntegerMultipleOf:
      return `Expected integer to be a multiple of ${error8.schema.multipleOf}`;
    case ValueErrorType.Integer:
      return "Expected integer";
    case ValueErrorType.IntersectUnevaluatedProperties:
      return "Unexpected property";
    case ValueErrorType.Intersect:
      return "Expected all values to match";
    case ValueErrorType.Iterator:
      return "Expected Iterator";
    case ValueErrorType.Literal:
      return `Expected ${typeof error8.schema.const === "string" ? `'${error8.schema.const}'` : error8.schema.const}`;
    case ValueErrorType.Never:
      return "Never";
    case ValueErrorType.Not:
      return "Value should not match";
    case ValueErrorType.Null:
      return "Expected null";
    case ValueErrorType.NumberExclusiveMaximum:
      return `Expected number to be less than ${error8.schema.exclusiveMaximum}`;
    case ValueErrorType.NumberExclusiveMinimum:
      return `Expected number to be greater than ${error8.schema.exclusiveMinimum}`;
    case ValueErrorType.NumberMaximum:
      return `Expected number to be less or equal to ${error8.schema.maximum}`;
    case ValueErrorType.NumberMinimum:
      return `Expected number to be greater or equal to ${error8.schema.minimum}`;
    case ValueErrorType.NumberMultipleOf:
      return `Expected number to be a multiple of ${error8.schema.multipleOf}`;
    case ValueErrorType.Number:
      return "Expected number";
    case ValueErrorType.Object:
      return "Expected object";
    case ValueErrorType.ObjectAdditionalProperties:
      return "Unexpected property";
    case ValueErrorType.ObjectMaxProperties:
      return `Expected object to have no more than ${error8.schema.maxProperties} properties`;
    case ValueErrorType.ObjectMinProperties:
      return `Expected object to have at least ${error8.schema.minProperties} properties`;
    case ValueErrorType.ObjectRequiredProperty:
      return "Required property";
    case ValueErrorType.Promise:
      return "Expected Promise";
    case ValueErrorType.RegExp:
      return "Expected string to match regular expression";
    case ValueErrorType.StringFormatUnknown:
      return `Unknown format '${error8.schema.format}'`;
    case ValueErrorType.StringFormat:
      return `Expected string to match '${error8.schema.format}' format`;
    case ValueErrorType.StringMaxLength:
      return `Expected string length less or equal to ${error8.schema.maxLength}`;
    case ValueErrorType.StringMinLength:
      return `Expected string length greater or equal to ${error8.schema.minLength}`;
    case ValueErrorType.StringPattern:
      return `Expected string to match '${error8.schema.pattern}'`;
    case ValueErrorType.String:
      return "Expected string";
    case ValueErrorType.Symbol:
      return "Expected symbol";
    case ValueErrorType.TupleLength:
      return `Expected tuple to have ${error8.schema.maxItems || 0} elements`;
    case ValueErrorType.Tuple:
      return "Expected tuple";
    case ValueErrorType.Uint8ArrayMaxByteLength:
      return `Expected byte length less or equal to ${error8.schema.maxByteLength}`;
    case ValueErrorType.Uint8ArrayMinByteLength:
      return `Expected byte length greater or equal to ${error8.schema.minByteLength}`;
    case ValueErrorType.Uint8Array:
      return "Expected Uint8Array";
    case ValueErrorType.Undefined:
      return "Expected undefined";
    case ValueErrorType.Union:
      return "Expected union value";
    case ValueErrorType.Void:
      return "Expected void";
    case ValueErrorType.Kind:
      return `Expected kind '${error8.schema[Kind]}'`;
    default:
      return "Unknown error type";
  }
}
function GetErrorFunction() {
  return errorFunction;
}
var errorFunction = DefaultErrorFunction;

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/value/deref/deref.mjs
function Deref(schema, references) {
  const index = references.findIndex((target) => target.$id === schema.$ref);
  if (index === -1)
    throw new TypeDereferenceError(schema);
  return references[index];
}

class TypeDereferenceError extends TypeBoxError {
  schema;
  constructor(schema) {
    super(`Unable to dereference schema with \$id '${schema.$id}'`);
    this.schema = schema;
  }
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/value/hash/hash.mjs
function* NumberToBytes(value3) {
  const byteCount = value3 === 0 ? 1 : Math.ceil(Math.floor(Math.log2(value3) + 1) / 8);
  for (let i = 0;i < byteCount; i++) {
    yield value3 >> 8 * (byteCount - 1 - i) & 255;
  }
}
var ArrayType2 = function(value3) {
  FNV1A64(ByteMarker.Array);
  for (const item of value3) {
    Visit3(item);
  }
};
var BooleanType = function(value3) {
  FNV1A64(ByteMarker.Boolean);
  FNV1A64(value3 ? 1 : 0);
};
var BigIntType = function(value3) {
  FNV1A64(ByteMarker.BigInt);
  F64In.setBigInt64(0, value3);
  for (const byte of F64Out) {
    FNV1A64(byte);
  }
};
var DateType2 = function(value3) {
  FNV1A64(ByteMarker.Date);
  Visit3(value3.getTime());
};
var NullType = function(value3) {
  FNV1A64(ByteMarker.Null);
};
var NumberType = function(value3) {
  FNV1A64(ByteMarker.Number);
  F64In.setFloat64(0, value3);
  for (const byte of F64Out) {
    FNV1A64(byte);
  }
};
var ObjectType2 = function(value3) {
  FNV1A64(ByteMarker.Object);
  for (const key of globalThis.Object.keys(value3).sort()) {
    Visit3(key);
    Visit3(value3[key]);
  }
};
var StringType = function(value3) {
  FNV1A64(ByteMarker.String);
  for (let i = 0;i < value3.length; i++) {
    for (const byte of NumberToBytes(value3.charCodeAt(i))) {
      FNV1A64(byte);
    }
  }
};
var SymbolType = function(value3) {
  FNV1A64(ByteMarker.Symbol);
  Visit3(value3.description);
};
var Uint8ArrayType2 = function(value3) {
  FNV1A64(ByteMarker.Uint8Array);
  for (let i = 0;i < value3.length; i++) {
    FNV1A64(value3[i]);
  }
};
var UndefinedType = function(value3) {
  return FNV1A64(ByteMarker.Undefined);
};
var Visit3 = function(value3) {
  if (IsArray(value3))
    return ArrayType2(value3);
  if (IsBoolean(value3))
    return BooleanType(value3);
  if (IsBigInt(value3))
    return BigIntType(value3);
  if (IsDate(value3))
    return DateType2(value3);
  if (IsNull(value3))
    return NullType(value3);
  if (IsNumber(value3))
    return NumberType(value3);
  if (IsPlainObject(value3))
    return ObjectType2(value3);
  if (IsString(value3))
    return StringType(value3);
  if (IsSymbol(value3))
    return SymbolType(value3);
  if (IsUint8Array(value3))
    return Uint8ArrayType2(value3);
  if (IsUndefined(value3))
    return UndefinedType(value3);
  throw new ValueHashError(value3);
};
var FNV1A64 = function(byte) {
  Accumulator = Accumulator ^ Bytes[byte];
  Accumulator = Accumulator * Prime % Size;
};
function Hash(value3) {
  Accumulator = BigInt("14695981039346656037");
  Visit3(value3);
  return Accumulator;
}

class ValueHashError extends TypeBoxError {
  value;
  constructor(value3) {
    super(`Unable to hash value`);
    this.value = value3;
  }
}
var ByteMarker;
(function(ByteMarker2) {
  ByteMarker2[ByteMarker2["Undefined"] = 0] = "Undefined";
  ByteMarker2[ByteMarker2["Null"] = 1] = "Null";
  ByteMarker2[ByteMarker2["Boolean"] = 2] = "Boolean";
  ByteMarker2[ByteMarker2["Number"] = 3] = "Number";
  ByteMarker2[ByteMarker2["String"] = 4] = "String";
  ByteMarker2[ByteMarker2["Object"] = 5] = "Object";
  ByteMarker2[ByteMarker2["Array"] = 6] = "Array";
  ByteMarker2[ByteMarker2["Date"] = 7] = "Date";
  ByteMarker2[ByteMarker2["Uint8Array"] = 8] = "Uint8Array";
  ByteMarker2[ByteMarker2["Symbol"] = 9] = "Symbol";
  ByteMarker2[ByteMarker2["BigInt"] = 10] = "BigInt";
})(ByteMarker || (ByteMarker = {}));
var Accumulator = BigInt("14695981039346656037");
var [Prime, Size] = [BigInt("1099511628211"), BigInt("2") ** BigInt("64")];
var Bytes = Array.from({ length: 256 }).map((_, i) => BigInt(i));
var F64 = new Float64Array(1);
var F64In = new DataView(F64.buffer);
var F64Out = new Uint8Array(F64.buffer);
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/errors/errors.mjs
var EscapeKey = function(key) {
  return key.replace(/~/g, "~0").replace(/\//g, "~1");
};
var IsDefined = function(value3) {
  return value3 !== undefined;
};
var Create = function(errorType, schema, path, value3) {
  return { type: errorType, schema, path, value: value3, message: GetErrorFunction()({ errorType, path, schema, value: value3 }) };
};
function* FromAny(schema, references, path, value3) {
}
function* FromArray3(schema, references, path, value3) {
  if (!IsArray(value3)) {
    return yield Create(ValueErrorType.Array, schema, path, value3);
  }
  if (IsDefined(schema.minItems) && !(value3.length >= schema.minItems)) {
    yield Create(ValueErrorType.ArrayMinItems, schema, path, value3);
  }
  if (IsDefined(schema.maxItems) && !(value3.length <= schema.maxItems)) {
    yield Create(ValueErrorType.ArrayMaxItems, schema, path, value3);
  }
  for (let i = 0;i < value3.length; i++) {
    yield* Visit4(schema.items, references, `${path}/${i}`, value3[i]);
  }
  if (schema.uniqueItems === true && !function() {
    const set2 = new Set;
    for (const element of value3) {
      const hashed = Hash(element);
      if (set2.has(hashed)) {
        return false;
      } else {
        set2.add(hashed);
      }
    }
    return true;
  }()) {
    yield Create(ValueErrorType.ArrayUniqueItems, schema, path, value3);
  }
  if (!(IsDefined(schema.contains) || IsDefined(schema.minContains) || IsDefined(schema.maxContains))) {
    return;
  }
  const containsSchema = IsDefined(schema.contains) ? schema.contains : Never();
  const containsCount = value3.reduce((acc, value4, index) => Visit4(containsSchema, references, `${path}${index}`, value4).next().done === true ? acc + 1 : acc, 0);
  if (containsCount === 0) {
    yield Create(ValueErrorType.ArrayContains, schema, path, value3);
  }
  if (IsNumber(schema.minContains) && containsCount < schema.minContains) {
    yield Create(ValueErrorType.ArrayMinContains, schema, path, value3);
  }
  if (IsNumber(schema.maxContains) && containsCount > schema.maxContains) {
    yield Create(ValueErrorType.ArrayMaxContains, schema, path, value3);
  }
}
function* FromAsyncIterator(schema, references, path, value3) {
  if (!IsAsyncIterator(value3))
    yield Create(ValueErrorType.AsyncIterator, schema, path, value3);
}
function* FromBigInt(schema, references, path, value3) {
  if (!IsBigInt(value3))
    return yield Create(ValueErrorType.BigInt, schema, path, value3);
  if (IsDefined(schema.exclusiveMaximum) && !(value3 < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.BigIntExclusiveMaximum, schema, path, value3);
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value3 > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.BigIntExclusiveMinimum, schema, path, value3);
  }
  if (IsDefined(schema.maximum) && !(value3 <= schema.maximum)) {
    yield Create(ValueErrorType.BigIntMaximum, schema, path, value3);
  }
  if (IsDefined(schema.minimum) && !(value3 >= schema.minimum)) {
    yield Create(ValueErrorType.BigIntMinimum, schema, path, value3);
  }
  if (IsDefined(schema.multipleOf) && !(value3 % schema.multipleOf === BigInt(0))) {
    yield Create(ValueErrorType.BigIntMultipleOf, schema, path, value3);
  }
}
function* FromBoolean(schema, references, path, value3) {
  if (!IsBoolean(value3))
    yield Create(ValueErrorType.Boolean, schema, path, value3);
}
function* FromConstructor(schema, references, path, value3) {
  yield* Visit4(schema.returns, references, path, value3.prototype);
}
function* FromDate(schema, references, path, value3) {
  if (!IsDate(value3))
    return yield Create(ValueErrorType.Date, schema, path, value3);
  if (IsDefined(schema.exclusiveMaximumTimestamp) && !(value3.getTime() < schema.exclusiveMaximumTimestamp)) {
    yield Create(ValueErrorType.DateExclusiveMaximumTimestamp, schema, path, value3);
  }
  if (IsDefined(schema.exclusiveMinimumTimestamp) && !(value3.getTime() > schema.exclusiveMinimumTimestamp)) {
    yield Create(ValueErrorType.DateExclusiveMinimumTimestamp, schema, path, value3);
  }
  if (IsDefined(schema.maximumTimestamp) && !(value3.getTime() <= schema.maximumTimestamp)) {
    yield Create(ValueErrorType.DateMaximumTimestamp, schema, path, value3);
  }
  if (IsDefined(schema.minimumTimestamp) && !(value3.getTime() >= schema.minimumTimestamp)) {
    yield Create(ValueErrorType.DateMinimumTimestamp, schema, path, value3);
  }
  if (IsDefined(schema.multipleOfTimestamp) && !(value3.getTime() % schema.multipleOfTimestamp === 0)) {
    yield Create(ValueErrorType.DateMultipleOfTimestamp, schema, path, value3);
  }
}
function* FromFunction(schema, references, path, value3) {
  if (!IsFunction(value3))
    yield Create(ValueErrorType.Function, schema, path, value3);
}
function* FromInteger(schema, references, path, value3) {
  if (!IsInteger(value3))
    return yield Create(ValueErrorType.Integer, schema, path, value3);
  if (IsDefined(schema.exclusiveMaximum) && !(value3 < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.IntegerExclusiveMaximum, schema, path, value3);
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value3 > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.IntegerExclusiveMinimum, schema, path, value3);
  }
  if (IsDefined(schema.maximum) && !(value3 <= schema.maximum)) {
    yield Create(ValueErrorType.IntegerMaximum, schema, path, value3);
  }
  if (IsDefined(schema.minimum) && !(value3 >= schema.minimum)) {
    yield Create(ValueErrorType.IntegerMinimum, schema, path, value3);
  }
  if (IsDefined(schema.multipleOf) && !(value3 % schema.multipleOf === 0)) {
    yield Create(ValueErrorType.IntegerMultipleOf, schema, path, value3);
  }
}
function* FromIntersect3(schema, references, path, value3) {
  for (const inner of schema.allOf) {
    const next = Visit4(inner, references, path, value3).next();
    if (!next.done) {
      yield Create(ValueErrorType.Intersect, schema, path, value3);
      yield next.value;
    }
  }
  if (schema.unevaluatedProperties === false) {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    for (const valueKey of Object.getOwnPropertyNames(value3)) {
      if (!keyCheck.test(valueKey)) {
        yield Create(ValueErrorType.IntersectUnevaluatedProperties, schema, `${path}/${valueKey}`, value3);
      }
    }
  }
  if (typeof schema.unevaluatedProperties === "object") {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    for (const valueKey of Object.getOwnPropertyNames(value3)) {
      if (!keyCheck.test(valueKey)) {
        const next = Visit4(schema.unevaluatedProperties, references, `${path}/${valueKey}`, value3[valueKey]).next();
        if (!next.done)
          yield next.value;
      }
    }
  }
}
function* FromIterator(schema, references, path, value3) {
  if (!IsIterator(value3))
    yield Create(ValueErrorType.Iterator, schema, path, value3);
}
function* FromLiteral2(schema, references, path, value3) {
  if (!(value3 === schema.const))
    yield Create(ValueErrorType.Literal, schema, path, value3);
}
function* FromNever(schema, references, path, value3) {
  yield Create(ValueErrorType.Never, schema, path, value3);
}
function* FromNot(schema, references, path, value3) {
  if (Visit4(schema.not, references, path, value3).next().done === true)
    yield Create(ValueErrorType.Not, schema, path, value3);
}
function* FromNull(schema, references, path, value3) {
  if (!IsNull(value3))
    yield Create(ValueErrorType.Null, schema, path, value3);
}
function* FromNumber(schema, references, path, value3) {
  if (!TypeSystemPolicy.IsNumberLike(value3))
    return yield Create(ValueErrorType.Number, schema, path, value3);
  if (IsDefined(schema.exclusiveMaximum) && !(value3 < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.NumberExclusiveMaximum, schema, path, value3);
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value3 > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.NumberExclusiveMinimum, schema, path, value3);
  }
  if (IsDefined(schema.maximum) && !(value3 <= schema.maximum)) {
    yield Create(ValueErrorType.NumberMaximum, schema, path, value3);
  }
  if (IsDefined(schema.minimum) && !(value3 >= schema.minimum)) {
    yield Create(ValueErrorType.NumberMinimum, schema, path, value3);
  }
  if (IsDefined(schema.multipleOf) && !(value3 % schema.multipleOf === 0)) {
    yield Create(ValueErrorType.NumberMultipleOf, schema, path, value3);
  }
}
function* FromObject(schema, references, path, value3) {
  if (!TypeSystemPolicy.IsObjectLike(value3))
    return yield Create(ValueErrorType.Object, schema, path, value3);
  if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value3).length >= schema.minProperties)) {
    yield Create(ValueErrorType.ObjectMinProperties, schema, path, value3);
  }
  if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value3).length <= schema.maxProperties)) {
    yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value3);
  }
  const requiredKeys = Array.isArray(schema.required) ? schema.required : [];
  const knownKeys = Object.getOwnPropertyNames(schema.properties);
  const unknownKeys = Object.getOwnPropertyNames(value3);
  for (const requiredKey of requiredKeys) {
    if (unknownKeys.includes(requiredKey))
      continue;
    yield Create(ValueErrorType.ObjectRequiredProperty, schema.properties[requiredKey], `${path}/${EscapeKey(requiredKey)}`, undefined);
  }
  if (schema.additionalProperties === false) {
    for (const valueKey of unknownKeys) {
      if (!knownKeys.includes(valueKey)) {
        yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(valueKey)}`, value3[valueKey]);
      }
    }
  }
  if (typeof schema.additionalProperties === "object") {
    for (const valueKey of unknownKeys) {
      if (knownKeys.includes(valueKey))
        continue;
      yield* Visit4(schema.additionalProperties, references, `${path}/${EscapeKey(valueKey)}`, value3[valueKey]);
    }
  }
  for (const knownKey of knownKeys) {
    const property = schema.properties[knownKey];
    if (schema.required && schema.required.includes(knownKey)) {
      yield* Visit4(property, references, `${path}/${EscapeKey(knownKey)}`, value3[knownKey]);
      if (ExtendsUndefinedCheck(schema) && !(knownKey in value3)) {
        yield Create(ValueErrorType.ObjectRequiredProperty, property, `${path}/${EscapeKey(knownKey)}`, undefined);
      }
    } else {
      if (TypeSystemPolicy.IsExactOptionalProperty(value3, knownKey)) {
        yield* Visit4(property, references, `${path}/${EscapeKey(knownKey)}`, value3[knownKey]);
      }
    }
  }
}
function* FromPromise(schema, references, path, value3) {
  if (!IsPromise(value3))
    yield Create(ValueErrorType.Promise, schema, path, value3);
}
function* FromRecord(schema, references, path, value3) {
  if (!TypeSystemPolicy.IsRecordLike(value3))
    return yield Create(ValueErrorType.Object, schema, path, value3);
  if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value3).length >= schema.minProperties)) {
    yield Create(ValueErrorType.ObjectMinProperties, schema, path, value3);
  }
  if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value3).length <= schema.maxProperties)) {
    yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value3);
  }
  const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
  const regex = new RegExp(patternKey);
  for (const [propertyKey, propertyValue] of Object.entries(value3)) {
    if (regex.test(propertyKey))
      yield* Visit4(patternSchema, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
  }
  if (typeof schema.additionalProperties === "object") {
    for (const [propertyKey, propertyValue] of Object.entries(value3)) {
      if (!regex.test(propertyKey))
        yield* Visit4(schema.additionalProperties, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
    }
  }
  if (schema.additionalProperties === false) {
    for (const [propertyKey, propertyValue] of Object.entries(value3)) {
      if (regex.test(propertyKey))
        continue;
      return yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
    }
  }
}
function* FromRef(schema, references, path, value3) {
  yield* Visit4(Deref(schema, references), references, path, value3);
}
function* FromRegExp(schema, references, path, value3) {
  if (!IsString(value3))
    return yield Create(ValueErrorType.String, schema, path, value3);
  if (IsDefined(schema.minLength) && !(value3.length >= schema.minLength)) {
    yield Create(ValueErrorType.StringMinLength, schema, path, value3);
  }
  if (IsDefined(schema.maxLength) && !(value3.length <= schema.maxLength)) {
    yield Create(ValueErrorType.StringMaxLength, schema, path, value3);
  }
  const regex = new RegExp(schema.source, schema.flags);
  if (!regex.test(value3)) {
    return yield Create(ValueErrorType.RegExp, schema, path, value3);
  }
}
function* FromString(schema, references, path, value3) {
  if (!IsString(value3))
    return yield Create(ValueErrorType.String, schema, path, value3);
  if (IsDefined(schema.minLength) && !(value3.length >= schema.minLength)) {
    yield Create(ValueErrorType.StringMinLength, schema, path, value3);
  }
  if (IsDefined(schema.maxLength) && !(value3.length <= schema.maxLength)) {
    yield Create(ValueErrorType.StringMaxLength, schema, path, value3);
  }
  if (IsString(schema.pattern)) {
    const regex = new RegExp(schema.pattern);
    if (!regex.test(value3)) {
      yield Create(ValueErrorType.StringPattern, schema, path, value3);
    }
  }
  if (IsString(schema.format)) {
    if (!exports_format.Has(schema.format)) {
      yield Create(ValueErrorType.StringFormatUnknown, schema, path, value3);
    } else {
      const format = exports_format.Get(schema.format);
      if (!format(value3)) {
        yield Create(ValueErrorType.StringFormat, schema, path, value3);
      }
    }
  }
}
function* FromSymbol(schema, references, path, value3) {
  if (!IsSymbol(value3))
    yield Create(ValueErrorType.Symbol, schema, path, value3);
}
function* FromTemplateLiteral2(schema, references, path, value3) {
  if (!IsString(value3))
    return yield Create(ValueErrorType.String, schema, path, value3);
  const regex = new RegExp(schema.pattern);
  if (!regex.test(value3)) {
    yield Create(ValueErrorType.StringPattern, schema, path, value3);
  }
}
function* FromThis(schema, references, path, value3) {
  yield* Visit4(Deref(schema, references), references, path, value3);
}
function* FromTuple3(schema, references, path, value3) {
  if (!IsArray(value3))
    return yield Create(ValueErrorType.Tuple, schema, path, value3);
  if (schema.items === undefined && !(value3.length === 0)) {
    return yield Create(ValueErrorType.TupleLength, schema, path, value3);
  }
  if (!(value3.length === schema.maxItems)) {
    return yield Create(ValueErrorType.TupleLength, schema, path, value3);
  }
  if (!schema.items) {
    return;
  }
  for (let i = 0;i < schema.items.length; i++) {
    yield* Visit4(schema.items[i], references, `${path}/${i}`, value3[i]);
  }
}
function* FromUndefined(schema, references, path, value3) {
  if (!IsUndefined(value3))
    yield Create(ValueErrorType.Undefined, schema, path, value3);
}
function* FromUnion5(schema, references, path, value3) {
  let count = 0;
  for (const subschema of schema.anyOf) {
    const errors2 = [...Visit4(subschema, references, path, value3)];
    if (errors2.length === 0)
      return;
    count += errors2.length;
  }
  if (count > 0) {
    yield Create(ValueErrorType.Union, schema, path, value3);
  }
}
function* FromUint8Array(schema, references, path, value3) {
  if (!IsUint8Array(value3))
    return yield Create(ValueErrorType.Uint8Array, schema, path, value3);
  if (IsDefined(schema.maxByteLength) && !(value3.length <= schema.maxByteLength)) {
    yield Create(ValueErrorType.Uint8ArrayMaxByteLength, schema, path, value3);
  }
  if (IsDefined(schema.minByteLength) && !(value3.length >= schema.minByteLength)) {
    yield Create(ValueErrorType.Uint8ArrayMinByteLength, schema, path, value3);
  }
}
function* FromUnknown(schema, references, path, value3) {
}
function* FromVoid(schema, references, path, value3) {
  if (!TypeSystemPolicy.IsVoidLike(value3))
    yield Create(ValueErrorType.Void, schema, path, value3);
}
function* FromKind(schema, references, path, value3) {
  const check = exports_type.Get(schema[Kind]);
  if (!check(schema, value3))
    yield Create(ValueErrorType.Kind, schema, path, value3);
}
function* Visit4(schema, references, path, value3) {
  const references_ = IsDefined(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return yield* FromAny(schema_, references_, path, value3);
    case "Array":
      return yield* FromArray3(schema_, references_, path, value3);
    case "AsyncIterator":
      return yield* FromAsyncIterator(schema_, references_, path, value3);
    case "BigInt":
      return yield* FromBigInt(schema_, references_, path, value3);
    case "Boolean":
      return yield* FromBoolean(schema_, references_, path, value3);
    case "Constructor":
      return yield* FromConstructor(schema_, references_, path, value3);
    case "Date":
      return yield* FromDate(schema_, references_, path, value3);
    case "Function":
      return yield* FromFunction(schema_, references_, path, value3);
    case "Integer":
      return yield* FromInteger(schema_, references_, path, value3);
    case "Intersect":
      return yield* FromIntersect3(schema_, references_, path, value3);
    case "Iterator":
      return yield* FromIterator(schema_, references_, path, value3);
    case "Literal":
      return yield* FromLiteral2(schema_, references_, path, value3);
    case "Never":
      return yield* FromNever(schema_, references_, path, value3);
    case "Not":
      return yield* FromNot(schema_, references_, path, value3);
    case "Null":
      return yield* FromNull(schema_, references_, path, value3);
    case "Number":
      return yield* FromNumber(schema_, references_, path, value3);
    case "Object":
      return yield* FromObject(schema_, references_, path, value3);
    case "Promise":
      return yield* FromPromise(schema_, references_, path, value3);
    case "Record":
      return yield* FromRecord(schema_, references_, path, value3);
    case "Ref":
      return yield* FromRef(schema_, references_, path, value3);
    case "RegExp":
      return yield* FromRegExp(schema_, references_, path, value3);
    case "String":
      return yield* FromString(schema_, references_, path, value3);
    case "Symbol":
      return yield* FromSymbol(schema_, references_, path, value3);
    case "TemplateLiteral":
      return yield* FromTemplateLiteral2(schema_, references_, path, value3);
    case "This":
      return yield* FromThis(schema_, references_, path, value3);
    case "Tuple":
      return yield* FromTuple3(schema_, references_, path, value3);
    case "Undefined":
      return yield* FromUndefined(schema_, references_, path, value3);
    case "Union":
      return yield* FromUnion5(schema_, references_, path, value3);
    case "Uint8Array":
      return yield* FromUint8Array(schema_, references_, path, value3);
    case "Unknown":
      return yield* FromUnknown(schema_, references_, path, value3);
    case "Void":
      return yield* FromVoid(schema_, references_, path, value3);
    default:
      if (!exports_type.Has(schema_[Kind]))
        throw new ValueErrorsUnknownTypeError(schema);
      return yield* FromKind(schema_, references_, path, value3);
  }
}
function Errors(...args) {
  const iterator3 = args.length === 3 ? Visit4(args[0], args[1], "", args[2]) : Visit4(args[0], [], "", args[1]);
  return new ValueErrorIterator(iterator3);
}
var ValueErrorType;
(function(ValueErrorType2) {
  ValueErrorType2[ValueErrorType2["ArrayContains"] = 0] = "ArrayContains";
  ValueErrorType2[ValueErrorType2["ArrayMaxContains"] = 1] = "ArrayMaxContains";
  ValueErrorType2[ValueErrorType2["ArrayMaxItems"] = 2] = "ArrayMaxItems";
  ValueErrorType2[ValueErrorType2["ArrayMinContains"] = 3] = "ArrayMinContains";
  ValueErrorType2[ValueErrorType2["ArrayMinItems"] = 4] = "ArrayMinItems";
  ValueErrorType2[ValueErrorType2["ArrayUniqueItems"] = 5] = "ArrayUniqueItems";
  ValueErrorType2[ValueErrorType2["Array"] = 6] = "Array";
  ValueErrorType2[ValueErrorType2["AsyncIterator"] = 7] = "AsyncIterator";
  ValueErrorType2[ValueErrorType2["BigIntExclusiveMaximum"] = 8] = "BigIntExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["BigIntExclusiveMinimum"] = 9] = "BigIntExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["BigIntMaximum"] = 10] = "BigIntMaximum";
  ValueErrorType2[ValueErrorType2["BigIntMinimum"] = 11] = "BigIntMinimum";
  ValueErrorType2[ValueErrorType2["BigIntMultipleOf"] = 12] = "BigIntMultipleOf";
  ValueErrorType2[ValueErrorType2["BigInt"] = 13] = "BigInt";
  ValueErrorType2[ValueErrorType2["Boolean"] = 14] = "Boolean";
  ValueErrorType2[ValueErrorType2["DateExclusiveMaximumTimestamp"] = 15] = "DateExclusiveMaximumTimestamp";
  ValueErrorType2[ValueErrorType2["DateExclusiveMinimumTimestamp"] = 16] = "DateExclusiveMinimumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMaximumTimestamp"] = 17] = "DateMaximumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMinimumTimestamp"] = 18] = "DateMinimumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMultipleOfTimestamp"] = 19] = "DateMultipleOfTimestamp";
  ValueErrorType2[ValueErrorType2["Date"] = 20] = "Date";
  ValueErrorType2[ValueErrorType2["Function"] = 21] = "Function";
  ValueErrorType2[ValueErrorType2["IntegerExclusiveMaximum"] = 22] = "IntegerExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["IntegerExclusiveMinimum"] = 23] = "IntegerExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["IntegerMaximum"] = 24] = "IntegerMaximum";
  ValueErrorType2[ValueErrorType2["IntegerMinimum"] = 25] = "IntegerMinimum";
  ValueErrorType2[ValueErrorType2["IntegerMultipleOf"] = 26] = "IntegerMultipleOf";
  ValueErrorType2[ValueErrorType2["Integer"] = 27] = "Integer";
  ValueErrorType2[ValueErrorType2["IntersectUnevaluatedProperties"] = 28] = "IntersectUnevaluatedProperties";
  ValueErrorType2[ValueErrorType2["Intersect"] = 29] = "Intersect";
  ValueErrorType2[ValueErrorType2["Iterator"] = 30] = "Iterator";
  ValueErrorType2[ValueErrorType2["Kind"] = 31] = "Kind";
  ValueErrorType2[ValueErrorType2["Literal"] = 32] = "Literal";
  ValueErrorType2[ValueErrorType2["Never"] = 33] = "Never";
  ValueErrorType2[ValueErrorType2["Not"] = 34] = "Not";
  ValueErrorType2[ValueErrorType2["Null"] = 35] = "Null";
  ValueErrorType2[ValueErrorType2["NumberExclusiveMaximum"] = 36] = "NumberExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["NumberExclusiveMinimum"] = 37] = "NumberExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["NumberMaximum"] = 38] = "NumberMaximum";
  ValueErrorType2[ValueErrorType2["NumberMinimum"] = 39] = "NumberMinimum";
  ValueErrorType2[ValueErrorType2["NumberMultipleOf"] = 40] = "NumberMultipleOf";
  ValueErrorType2[ValueErrorType2["Number"] = 41] = "Number";
  ValueErrorType2[ValueErrorType2["ObjectAdditionalProperties"] = 42] = "ObjectAdditionalProperties";
  ValueErrorType2[ValueErrorType2["ObjectMaxProperties"] = 43] = "ObjectMaxProperties";
  ValueErrorType2[ValueErrorType2["ObjectMinProperties"] = 44] = "ObjectMinProperties";
  ValueErrorType2[ValueErrorType2["ObjectRequiredProperty"] = 45] = "ObjectRequiredProperty";
  ValueErrorType2[ValueErrorType2["Object"] = 46] = "Object";
  ValueErrorType2[ValueErrorType2["Promise"] = 47] = "Promise";
  ValueErrorType2[ValueErrorType2["RegExp"] = 48] = "RegExp";
  ValueErrorType2[ValueErrorType2["StringFormatUnknown"] = 49] = "StringFormatUnknown";
  ValueErrorType2[ValueErrorType2["StringFormat"] = 50] = "StringFormat";
  ValueErrorType2[ValueErrorType2["StringMaxLength"] = 51] = "StringMaxLength";
  ValueErrorType2[ValueErrorType2["StringMinLength"] = 52] = "StringMinLength";
  ValueErrorType2[ValueErrorType2["StringPattern"] = 53] = "StringPattern";
  ValueErrorType2[ValueErrorType2["String"] = 54] = "String";
  ValueErrorType2[ValueErrorType2["Symbol"] = 55] = "Symbol";
  ValueErrorType2[ValueErrorType2["TupleLength"] = 56] = "TupleLength";
  ValueErrorType2[ValueErrorType2["Tuple"] = 57] = "Tuple";
  ValueErrorType2[ValueErrorType2["Uint8ArrayMaxByteLength"] = 58] = "Uint8ArrayMaxByteLength";
  ValueErrorType2[ValueErrorType2["Uint8ArrayMinByteLength"] = 59] = "Uint8ArrayMinByteLength";
  ValueErrorType2[ValueErrorType2["Uint8Array"] = 60] = "Uint8Array";
  ValueErrorType2[ValueErrorType2["Undefined"] = 61] = "Undefined";
  ValueErrorType2[ValueErrorType2["Union"] = 62] = "Union";
  ValueErrorType2[ValueErrorType2["Void"] = 63] = "Void";
})(ValueErrorType || (ValueErrorType = {}));

class ValueErrorsUnknownTypeError extends TypeBoxError {
  schema;
  constructor(schema) {
    super("Unknown type");
    this.schema = schema;
  }
}

class ValueErrorIterator {
  iterator;
  constructor(iterator3) {
    this.iterator = iterator3;
  }
  [Symbol.iterator]() {
    return this.iterator;
  }
  First() {
    const next = this.iterator.next();
    return next.done ? undefined : next.value;
  }
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/any/any.mjs
function Any(options = {}) {
  return { ...options, [Kind]: "Any" };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/unknown/unknown.mjs
function Unknown(options = {}) {
  return {
    ...options,
    [Kind]: "Unknown"
  };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/extends/extends-check.mjs
var IntoBooleanResult = function(result) {
  return result === ExtendsResult.False ? result : ExtendsResult.True;
};
var Throw = function(message) {
  throw new ExtendsResolverError(message);
};
var IsStructuralRight = function(right) {
  return exports_type2.IsNever(right) || exports_type2.IsIntersect(right) || exports_type2.IsUnion(right) || exports_type2.IsUnknown(right) || exports_type2.IsAny(right);
};
var StructuralRight = function(left, right) {
  return exports_type2.IsNever(right) ? FromNeverRight(left, right) : exports_type2.IsIntersect(right) ? FromIntersectRight(left, right) : exports_type2.IsUnion(right) ? FromUnionRight(left, right) : exports_type2.IsUnknown(right) ? FromUnknownRight(left, right) : exports_type2.IsAny(right) ? FromAnyRight(left, right) : Throw("StructuralRight");
};
var FromAnyRight = function(left, right) {
  return ExtendsResult.True;
};
var FromAny2 = function(left, right) {
  return exports_type2.IsIntersect(right) ? FromIntersectRight(left, right) : exports_type2.IsUnion(right) && right.anyOf.some((schema) => exports_type2.IsAny(schema) || exports_type2.IsUnknown(schema)) ? ExtendsResult.True : exports_type2.IsUnion(right) ? ExtendsResult.Union : exports_type2.IsUnknown(right) ? ExtendsResult.True : exports_type2.IsAny(right) ? ExtendsResult.True : ExtendsResult.Union;
};
var FromArrayRight = function(left, right) {
  return exports_type2.IsUnknown(left) ? ExtendsResult.False : exports_type2.IsAny(left) ? ExtendsResult.Union : exports_type2.IsNever(left) ? ExtendsResult.True : ExtendsResult.False;
};
var FromArray4 = function(left, right) {
  return exports_type2.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : !exports_type2.IsArray(right) ? ExtendsResult.False : IntoBooleanResult(Visit5(left.items, right.items));
};
var FromAsyncIterator2 = function(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : !exports_type2.IsAsyncIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit5(left.items, right.items));
};
var FromBigInt2 = function(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsBigInt(right) ? ExtendsResult.True : ExtendsResult.False;
};
var FromBooleanRight = function(left, right) {
  return exports_type2.IsLiteralBoolean(left) ? ExtendsResult.True : exports_type2.IsBoolean(left) ? ExtendsResult.True : ExtendsResult.False;
};
var FromBoolean2 = function(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsBoolean(right) ? ExtendsResult.True : ExtendsResult.False;
};
var FromConstructor2 = function(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : !exports_type2.IsConstructor(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit5(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit5(left.returns, right.returns));
};
var FromDate2 = function(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsDate(right) ? ExtendsResult.True : ExtendsResult.False;
};
var FromFunction2 = function(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : !exports_type2.IsFunction(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit5(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit5(left.returns, right.returns));
};
var FromIntegerRight = function(left, right) {
  return exports_type2.IsLiteral(left) && exports_value.IsNumber(left.const) ? ExtendsResult.True : exports_type2.IsNumber(left) || exports_type2.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
};
var FromInteger2 = function(left, right) {
  return exports_type2.IsInteger(right) || exports_type2.IsNumber(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : ExtendsResult.False;
};
var FromIntersectRight = function(left, right) {
  return right.allOf.every((schema) => Visit5(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
};
var FromIntersect4 = function(left, right) {
  return left.allOf.some((schema) => Visit5(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
};
var FromIterator2 = function(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : !exports_type2.IsIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit5(left.items, right.items));
};
var FromLiteral3 = function(left, right) {
  return exports_type2.IsLiteral(right) && right.const === left.const ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsString(right) ? FromStringRight(left, right) : exports_type2.IsNumber(right) ? FromNumberRight(left, right) : exports_type2.IsInteger(right) ? FromIntegerRight(left, right) : exports_type2.IsBoolean(right) ? FromBooleanRight(left, right) : ExtendsResult.False;
};
var FromNeverRight = function(left, right) {
  return ExtendsResult.False;
};
var FromNever2 = function(left, right) {
  return ExtendsResult.True;
};
var UnwrapTNot = function(schema) {
  let [current, depth] = [schema, 0];
  while (true) {
    if (!exports_type2.IsNot(current))
      break;
    current = current.not;
    depth += 1;
  }
  return depth % 2 === 0 ? current : Unknown();
};
var FromNot2 = function(left, right) {
  return exports_type2.IsNot(left) ? Visit5(UnwrapTNot(left), right) : exports_type2.IsNot(right) ? Visit5(left, UnwrapTNot(right)) : Throw("Invalid fallthrough for Not");
};
var FromNull2 = function(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsNull(right) ? ExtendsResult.True : ExtendsResult.False;
};
var FromNumberRight = function(left, right) {
  return exports_type2.IsLiteralNumber(left) ? ExtendsResult.True : exports_type2.IsNumber(left) || exports_type2.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
};
var FromNumber2 = function(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsInteger(right) || exports_type2.IsNumber(right) ? ExtendsResult.True : ExtendsResult.False;
};
var IsObjectPropertyCount = function(schema, count) {
  return Object.getOwnPropertyNames(schema.properties).length === count;
};
var IsObjectStringLike = function(schema) {
  return IsObjectArrayLike(schema);
};
var IsObjectSymbolLike = function(schema) {
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "description" in schema.properties && exports_type2.IsUnion(schema.properties.description) && schema.properties.description.anyOf.length === 2 && (exports_type2.IsString(schema.properties.description.anyOf[0]) && exports_type2.IsUndefined(schema.properties.description.anyOf[1]) || exports_type2.IsString(schema.properties.description.anyOf[1]) && exports_type2.IsUndefined(schema.properties.description.anyOf[0]));
};
var IsObjectNumberLike = function(schema) {
  return IsObjectPropertyCount(schema, 0);
};
var IsObjectBooleanLike = function(schema) {
  return IsObjectPropertyCount(schema, 0);
};
var IsObjectBigIntLike = function(schema) {
  return IsObjectPropertyCount(schema, 0);
};
var IsObjectDateLike = function(schema) {
  return IsObjectPropertyCount(schema, 0);
};
var IsObjectUint8ArrayLike = function(schema) {
  return IsObjectArrayLike(schema);
};
var IsObjectFunctionLike = function(schema) {
  const length = Number2();
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit5(schema.properties["length"], length)) === ExtendsResult.True;
};
var IsObjectConstructorLike = function(schema) {
  return IsObjectPropertyCount(schema, 0);
};
var IsObjectArrayLike = function(schema) {
  const length = Number2();
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit5(schema.properties["length"], length)) === ExtendsResult.True;
};
var IsObjectPromiseLike = function(schema) {
  const then = Function2([Any()], Any());
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "then" in schema.properties && IntoBooleanResult(Visit5(schema.properties["then"], then)) === ExtendsResult.True;
};
var Property = function(left, right) {
  return Visit5(left, right) === ExtendsResult.False ? ExtendsResult.False : exports_type2.IsOptional(left) && !exports_type2.IsOptional(right) ? ExtendsResult.False : ExtendsResult.True;
};
var FromObjectRight = function(left, right) {
  return exports_type2.IsUnknown(left) ? ExtendsResult.False : exports_type2.IsAny(left) ? ExtendsResult.Union : exports_type2.IsNever(left) || exports_type2.IsLiteralString(left) && IsObjectStringLike(right) || exports_type2.IsLiteralNumber(left) && IsObjectNumberLike(right) || exports_type2.IsLiteralBoolean(left) && IsObjectBooleanLike(right) || exports_type2.IsSymbol(left) && IsObjectSymbolLike(right) || exports_type2.IsBigInt(left) && IsObjectBigIntLike(right) || exports_type2.IsString(left) && IsObjectStringLike(right) || exports_type2.IsSymbol(left) && IsObjectSymbolLike(right) || exports_type2.IsNumber(left) && IsObjectNumberLike(right) || exports_type2.IsInteger(left) && IsObjectNumberLike(right) || exports_type2.IsBoolean(left) && IsObjectBooleanLike(right) || exports_type2.IsUint8Array(left) && IsObjectUint8ArrayLike(right) || exports_type2.IsDate(left) && IsObjectDateLike(right) || exports_type2.IsConstructor(left) && IsObjectConstructorLike(right) || exports_type2.IsFunction(left) && IsObjectFunctionLike(right) ? ExtendsResult.True : exports_type2.IsRecord(left) && exports_type2.IsString(RecordKey(left)) ? (() => {
    return right[Hint] === "Record" ? ExtendsResult.True : ExtendsResult.False;
  })() : exports_type2.IsRecord(left) && exports_type2.IsNumber(RecordKey(left)) ? (() => {
    return IsObjectPropertyCount(right, 0) ? ExtendsResult.True : ExtendsResult.False;
  })() : ExtendsResult.False;
};
var FromObject2 = function(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : !exports_type2.IsObject(right) ? ExtendsResult.False : (() => {
    for (const key of Object.getOwnPropertyNames(right.properties)) {
      if (!(key in left.properties) && !exports_type2.IsOptional(right.properties[key])) {
        return ExtendsResult.False;
      }
      if (exports_type2.IsOptional(right.properties[key])) {
        return ExtendsResult.True;
      }
      if (Property(left.properties[key], right.properties[key]) === ExtendsResult.False) {
        return ExtendsResult.False;
      }
    }
    return ExtendsResult.True;
  })();
};
var FromPromise2 = function(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) && IsObjectPromiseLike(right) ? ExtendsResult.True : !exports_type2.IsPromise(right) ? ExtendsResult.False : IntoBooleanResult(Visit5(left.item, right.item));
};
var RecordKey = function(schema) {
  return PatternNumberExact in schema.patternProperties ? Number2() : (PatternStringExact in schema.patternProperties) ? String2() : Throw("Unknown record key pattern");
};
var RecordValue = function(schema) {
  return PatternNumberExact in schema.patternProperties ? schema.patternProperties[PatternNumberExact] : (PatternStringExact in schema.patternProperties) ? schema.patternProperties[PatternStringExact] : Throw("Unable to get record value schema");
};
var FromRecordRight = function(left, right) {
  const [Key, Value] = [RecordKey(right), RecordValue(right)];
  return exports_type2.IsLiteralString(left) && exports_type2.IsNumber(Key) && IntoBooleanResult(Visit5(left, Value)) === ExtendsResult.True ? ExtendsResult.True : exports_type2.IsUint8Array(left) && exports_type2.IsNumber(Key) ? Visit5(left, Value) : exports_type2.IsString(left) && exports_type2.IsNumber(Key) ? Visit5(left, Value) : exports_type2.IsArray(left) && exports_type2.IsNumber(Key) ? Visit5(left, Value) : exports_type2.IsObject(left) ? (() => {
    for (const key of Object.getOwnPropertyNames(left.properties)) {
      if (Property(Value, left.properties[key]) === ExtendsResult.False) {
        return ExtendsResult.False;
      }
    }
    return ExtendsResult.True;
  })() : ExtendsResult.False;
};
var FromRecord2 = function(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : !exports_type2.IsRecord(right) ? ExtendsResult.False : Visit5(RecordValue(left), RecordValue(right));
};
var FromRegExp2 = function(left, right) {
  const L = exports_type2.IsRegExp(left) ? String2() : left;
  const R = exports_type2.IsRegExp(right) ? String2() : right;
  return Visit5(L, R);
};
var FromStringRight = function(left, right) {
  return exports_type2.IsLiteral(left) && exports_value.IsString(left.const) ? ExtendsResult.True : exports_type2.IsString(left) ? ExtendsResult.True : ExtendsResult.False;
};
var FromString2 = function(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsString(right) ? ExtendsResult.True : ExtendsResult.False;
};
var FromSymbol2 = function(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsSymbol(right) ? ExtendsResult.True : ExtendsResult.False;
};
var FromTemplateLiteral3 = function(left, right) {
  return exports_type2.IsTemplateLiteral(left) ? Visit5(TemplateLiteralToUnion(left), right) : exports_type2.IsTemplateLiteral(right) ? Visit5(left, TemplateLiteralToUnion(right)) : Throw("Invalid fallthrough for TemplateLiteral");
};
var IsArrayOfTuple = function(left, right) {
  return exports_type2.IsArray(right) && left.items !== undefined && left.items.every((schema) => Visit5(schema, right.items) === ExtendsResult.True);
};
var FromTupleRight = function(left, right) {
  return exports_type2.IsNever(left) ? ExtendsResult.True : exports_type2.IsUnknown(left) ? ExtendsResult.False : exports_type2.IsAny(left) ? ExtendsResult.Union : ExtendsResult.False;
};
var FromTuple4 = function(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : exports_type2.IsArray(right) && IsArrayOfTuple(left, right) ? ExtendsResult.True : !exports_type2.IsTuple(right) ? ExtendsResult.False : exports_value.IsUndefined(left.items) && !exports_value.IsUndefined(right.items) || !exports_value.IsUndefined(left.items) && exports_value.IsUndefined(right.items) ? ExtendsResult.False : exports_value.IsUndefined(left.items) && !exports_value.IsUndefined(right.items) ? ExtendsResult.True : left.items.every((schema, index) => Visit5(schema, right.items[index]) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
};
var FromUint8Array2 = function(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsUint8Array(right) ? ExtendsResult.True : ExtendsResult.False;
};
var FromUndefined2 = function(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsVoid(right) ? FromVoidRight(left, right) : exports_type2.IsUndefined(right) ? ExtendsResult.True : ExtendsResult.False;
};
var FromUnionRight = function(left, right) {
  return right.anyOf.some((schema) => Visit5(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
};
var FromUnion6 = function(left, right) {
  return left.anyOf.every((schema) => Visit5(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
};
var FromUnknownRight = function(left, right) {
  return ExtendsResult.True;
};
var FromUnknown2 = function(left, right) {
  return exports_type2.IsNever(right) ? FromNeverRight(left, right) : exports_type2.IsIntersect(right) ? FromIntersectRight(left, right) : exports_type2.IsUnion(right) ? FromUnionRight(left, right) : exports_type2.IsAny(right) ? FromAnyRight(left, right) : exports_type2.IsString(right) ? FromStringRight(left, right) : exports_type2.IsNumber(right) ? FromNumberRight(left, right) : exports_type2.IsInteger(right) ? FromIntegerRight(left, right) : exports_type2.IsBoolean(right) ? FromBooleanRight(left, right) : exports_type2.IsArray(right) ? FromArrayRight(left, right) : exports_type2.IsTuple(right) ? FromTupleRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsUnknown(right) ? ExtendsResult.True : ExtendsResult.False;
};
var FromVoidRight = function(left, right) {
  return exports_type2.IsUndefined(left) ? ExtendsResult.True : exports_type2.IsUndefined(left) ? ExtendsResult.True : ExtendsResult.False;
};
var FromVoid2 = function(left, right) {
  return exports_type2.IsIntersect(right) ? FromIntersectRight(left, right) : exports_type2.IsUnion(right) ? FromUnionRight(left, right) : exports_type2.IsUnknown(right) ? FromUnknownRight(left, right) : exports_type2.IsAny(right) ? FromAnyRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsVoid(right) ? ExtendsResult.True : ExtendsResult.False;
};
var Visit5 = function(left, right) {
  return exports_type2.IsTemplateLiteral(left) || exports_type2.IsTemplateLiteral(right) ? FromTemplateLiteral3(left, right) : exports_type2.IsRegExp(left) || exports_type2.IsRegExp(right) ? FromRegExp2(left, right) : exports_type2.IsNot(left) || exports_type2.IsNot(right) ? FromNot2(left, right) : exports_type2.IsAny(left) ? FromAny2(left, right) : exports_type2.IsArray(left) ? FromArray4(left, right) : exports_type2.IsBigInt(left) ? FromBigInt2(left, right) : exports_type2.IsBoolean(left) ? FromBoolean2(left, right) : exports_type2.IsAsyncIterator(left) ? FromAsyncIterator2(left, right) : exports_type2.IsConstructor(left) ? FromConstructor2(left, right) : exports_type2.IsDate(left) ? FromDate2(left, right) : exports_type2.IsFunction(left) ? FromFunction2(left, right) : exports_type2.IsInteger(left) ? FromInteger2(left, right) : exports_type2.IsIntersect(left) ? FromIntersect4(left, right) : exports_type2.IsIterator(left) ? FromIterator2(left, right) : exports_type2.IsLiteral(left) ? FromLiteral3(left, right) : exports_type2.IsNever(left) ? FromNever2(left, right) : exports_type2.IsNull(left) ? FromNull2(left, right) : exports_type2.IsNumber(left) ? FromNumber2(left, right) : exports_type2.IsObject(left) ? FromObject2(left, right) : exports_type2.IsRecord(left) ? FromRecord2(left, right) : exports_type2.IsString(left) ? FromString2(left, right) : exports_type2.IsSymbol(left) ? FromSymbol2(left, right) : exports_type2.IsTuple(left) ? FromTuple4(left, right) : exports_type2.IsPromise(left) ? FromPromise2(left, right) : exports_type2.IsUint8Array(left) ? FromUint8Array2(left, right) : exports_type2.IsUndefined(left) ? FromUndefined2(left, right) : exports_type2.IsUnion(left) ? FromUnion6(left, right) : exports_type2.IsUnknown(left) ? FromUnknown2(left, right) : exports_type2.IsVoid(left) ? FromVoid2(left, right) : Throw(`Unknown left type operand '${left[Kind]}'`);
};
function ExtendsCheck(left, right) {
  return Visit5(left, right);
}

class ExtendsResolverError extends TypeBoxError {
}
var ExtendsResult;
(function(ExtendsResult2) {
  ExtendsResult2[ExtendsResult2["Union"] = 0] = "Union";
  ExtendsResult2[ExtendsResult2["True"] = 1] = "True";
  ExtendsResult2[ExtendsResult2["False"] = 2] = "False";
})(ExtendsResult || (ExtendsResult = {}));
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/extends/extends-from-mapped-result.mjs
var FromProperties7 = function(P, Right, True, False, options) {
  return globalThis.Object.getOwnPropertyNames(P).reduce((Acc, K2) => {
    return { ...Acc, [K2]: Extends(P[K2], Right, True, False, options) };
  }, {});
};
var FromMappedResult6 = function(Left, Right, True, False, options) {
  return FromProperties7(Left.properties, Right, True, False, options);
};
function ExtendsFromMappedResult(Left, Right, True, False, options) {
  const P = FromMappedResult6(Left, Right, True, False, options);
  return MappedResult(P);
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/extends/extends.mjs
var ExtendsResolve = function(left, right, trueType, falseType) {
  const R = ExtendsCheck(left, right);
  return R === ExtendsResult.Union ? Union([trueType, falseType]) : R === ExtendsResult.True ? trueType : falseType;
};
function Extends(L, R, T, F, options = {}) {
  return IsMappedResult(L) ? ExtendsFromMappedResult(L, R, T, F, options) : IsMappedKey(L) ? CloneType(ExtendsFromMappedKey(L, R, T, F, options)) : CloneType(ExtendsResolve(L, R, T, F), options);
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/extends/extends-from-mapped-key.mjs
var FromPropertyKey = function(K, U, L, R, options) {
  return {
    [K]: Extends(Literal(K), U, L, R, options)
  };
};
var FromPropertyKeys = function(K, U, L, R, options) {
  return K.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey(LK, U, L, R, options) };
  }, {});
};
var FromMappedKey2 = function(K, U, L, R, options) {
  return FromPropertyKeys(K.keys, U, L, R, options);
};
function ExtendsFromMappedKey(T, U, L, R, options) {
  const P = FromMappedKey2(T, U, L, R, options);
  return MappedResult(P);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/value/check/check.mjs
var IsAnyOrUnknown = function(schema) {
  return schema[Kind] === "Any" || schema[Kind] === "Unknown";
};
var IsDefined2 = function(value3) {
  return value3 !== undefined;
};
var FromAny3 = function(schema, references, value3) {
  return true;
};
var FromArray5 = function(schema, references, value3) {
  if (!IsArray(value3))
    return false;
  if (IsDefined2(schema.minItems) && !(value3.length >= schema.minItems)) {
    return false;
  }
  if (IsDefined2(schema.maxItems) && !(value3.length <= schema.maxItems)) {
    return false;
  }
  if (!value3.every((value4) => Visit6(schema.items, references, value4))) {
    return false;
  }
  if (schema.uniqueItems === true && !function() {
    const set2 = new Set;
    for (const element of value3) {
      const hashed = Hash(element);
      if (set2.has(hashed)) {
        return false;
      } else {
        set2.add(hashed);
      }
    }
    return true;
  }()) {
    return false;
  }
  if (!(IsDefined2(schema.contains) || IsNumber(schema.minContains) || IsNumber(schema.maxContains))) {
    return true;
  }
  const containsSchema = IsDefined2(schema.contains) ? schema.contains : Never();
  const containsCount = value3.reduce((acc, value4) => Visit6(containsSchema, references, value4) ? acc + 1 : acc, 0);
  if (containsCount === 0) {
    return false;
  }
  if (IsNumber(schema.minContains) && containsCount < schema.minContains) {
    return false;
  }
  if (IsNumber(schema.maxContains) && containsCount > schema.maxContains) {
    return false;
  }
  return true;
};
var FromAsyncIterator3 = function(schema, references, value3) {
  return IsAsyncIterator(value3);
};
var FromBigInt3 = function(schema, references, value3) {
  if (!IsBigInt(value3))
    return false;
  if (IsDefined2(schema.exclusiveMaximum) && !(value3 < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value3 > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined2(schema.maximum) && !(value3 <= schema.maximum)) {
    return false;
  }
  if (IsDefined2(schema.minimum) && !(value3 >= schema.minimum)) {
    return false;
  }
  if (IsDefined2(schema.multipleOf) && !(value3 % schema.multipleOf === BigInt(0))) {
    return false;
  }
  return true;
};
var FromBoolean3 = function(schema, references, value3) {
  return IsBoolean(value3);
};
var FromConstructor3 = function(schema, references, value3) {
  return Visit6(schema.returns, references, value3.prototype);
};
var FromDate3 = function(schema, references, value3) {
  if (!IsDate(value3))
    return false;
  if (IsDefined2(schema.exclusiveMaximumTimestamp) && !(value3.getTime() < schema.exclusiveMaximumTimestamp)) {
    return false;
  }
  if (IsDefined2(schema.exclusiveMinimumTimestamp) && !(value3.getTime() > schema.exclusiveMinimumTimestamp)) {
    return false;
  }
  if (IsDefined2(schema.maximumTimestamp) && !(value3.getTime() <= schema.maximumTimestamp)) {
    return false;
  }
  if (IsDefined2(schema.minimumTimestamp) && !(value3.getTime() >= schema.minimumTimestamp)) {
    return false;
  }
  if (IsDefined2(schema.multipleOfTimestamp) && !(value3.getTime() % schema.multipleOfTimestamp === 0)) {
    return false;
  }
  return true;
};
var FromFunction3 = function(schema, references, value3) {
  return IsFunction(value3);
};
var FromInteger3 = function(schema, references, value3) {
  if (!IsInteger(value3)) {
    return false;
  }
  if (IsDefined2(schema.exclusiveMaximum) && !(value3 < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value3 > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined2(schema.maximum) && !(value3 <= schema.maximum)) {
    return false;
  }
  if (IsDefined2(schema.minimum) && !(value3 >= schema.minimum)) {
    return false;
  }
  if (IsDefined2(schema.multipleOf) && !(value3 % schema.multipleOf === 0)) {
    return false;
  }
  return true;
};
var FromIntersect5 = function(schema, references, value3) {
  const check1 = schema.allOf.every((schema2) => Visit6(schema2, references, value3));
  if (schema.unevaluatedProperties === false) {
    const keyPattern = new RegExp(KeyOfPattern(schema));
    const check2 = Object.getOwnPropertyNames(value3).every((key) => keyPattern.test(key));
    return check1 && check2;
  } else if (IsSchema(schema.unevaluatedProperties)) {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    const check2 = Object.getOwnPropertyNames(value3).every((key) => keyCheck.test(key) || Visit6(schema.unevaluatedProperties, references, value3[key]));
    return check1 && check2;
  } else {
    return check1;
  }
};
var FromIterator3 = function(schema, references, value3) {
  return IsIterator(value3);
};
var FromLiteral4 = function(schema, references, value3) {
  return value3 === schema.const;
};
var FromNever3 = function(schema, references, value3) {
  return false;
};
var FromNot3 = function(schema, references, value3) {
  return !Visit6(schema.not, references, value3);
};
var FromNull3 = function(schema, references, value3) {
  return IsNull(value3);
};
var FromNumber3 = function(schema, references, value3) {
  if (!TypeSystemPolicy.IsNumberLike(value3))
    return false;
  if (IsDefined2(schema.exclusiveMaximum) && !(value3 < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value3 > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined2(schema.minimum) && !(value3 >= schema.minimum)) {
    return false;
  }
  if (IsDefined2(schema.maximum) && !(value3 <= schema.maximum)) {
    return false;
  }
  if (IsDefined2(schema.multipleOf) && !(value3 % schema.multipleOf === 0)) {
    return false;
  }
  return true;
};
var FromObject3 = function(schema, references, value3) {
  if (!TypeSystemPolicy.IsObjectLike(value3))
    return false;
  if (IsDefined2(schema.minProperties) && !(Object.getOwnPropertyNames(value3).length >= schema.minProperties)) {
    return false;
  }
  if (IsDefined2(schema.maxProperties) && !(Object.getOwnPropertyNames(value3).length <= schema.maxProperties)) {
    return false;
  }
  const knownKeys = Object.getOwnPropertyNames(schema.properties);
  for (const knownKey of knownKeys) {
    const property = schema.properties[knownKey];
    if (schema.required && schema.required.includes(knownKey)) {
      if (!Visit6(property, references, value3[knownKey])) {
        return false;
      }
      if ((ExtendsUndefinedCheck(property) || IsAnyOrUnknown(property)) && !(knownKey in value3)) {
        return false;
      }
    } else {
      if (TypeSystemPolicy.IsExactOptionalProperty(value3, knownKey) && !Visit6(property, references, value3[knownKey])) {
        return false;
      }
    }
  }
  if (schema.additionalProperties === false) {
    const valueKeys = Object.getOwnPropertyNames(value3);
    if (schema.required && schema.required.length === knownKeys.length && valueKeys.length === knownKeys.length) {
      return true;
    } else {
      return valueKeys.every((valueKey) => knownKeys.includes(valueKey));
    }
  } else if (typeof schema.additionalProperties === "object") {
    const valueKeys = Object.getOwnPropertyNames(value3);
    return valueKeys.every((key) => knownKeys.includes(key) || Visit6(schema.additionalProperties, references, value3[key]));
  } else {
    return true;
  }
};
var FromPromise3 = function(schema, references, value3) {
  return IsPromise(value3);
};
var FromRecord3 = function(schema, references, value3) {
  if (!TypeSystemPolicy.IsRecordLike(value3)) {
    return false;
  }
  if (IsDefined2(schema.minProperties) && !(Object.getOwnPropertyNames(value3).length >= schema.minProperties)) {
    return false;
  }
  if (IsDefined2(schema.maxProperties) && !(Object.getOwnPropertyNames(value3).length <= schema.maxProperties)) {
    return false;
  }
  const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
  const regex = new RegExp(patternKey);
  const check1 = Object.entries(value3).every(([key, value4]) => {
    return regex.test(key) ? Visit6(patternSchema, references, value4) : true;
  });
  const check2 = typeof schema.additionalProperties === "object" ? Object.entries(value3).every(([key, value4]) => {
    return !regex.test(key) ? Visit6(schema.additionalProperties, references, value4) : true;
  }) : true;
  const check3 = schema.additionalProperties === false ? Object.getOwnPropertyNames(value3).every((key) => {
    return regex.test(key);
  }) : true;
  return check1 && check2 && check3;
};
var FromRef2 = function(schema, references, value3) {
  return Visit6(Deref(schema, references), references, value3);
};
var FromRegExp3 = function(schema, references, value3) {
  const regex = new RegExp(schema.source, schema.flags);
  if (IsDefined2(schema.minLength)) {
    if (!(value3.length >= schema.minLength))
      return false;
  }
  if (IsDefined2(schema.maxLength)) {
    if (!(value3.length <= schema.maxLength))
      return false;
  }
  return regex.test(value3);
};
var FromString3 = function(schema, references, value3) {
  if (!IsString(value3)) {
    return false;
  }
  if (IsDefined2(schema.minLength)) {
    if (!(value3.length >= schema.minLength))
      return false;
  }
  if (IsDefined2(schema.maxLength)) {
    if (!(value3.length <= schema.maxLength))
      return false;
  }
  if (IsDefined2(schema.pattern)) {
    const regex = new RegExp(schema.pattern);
    if (!regex.test(value3))
      return false;
  }
  if (IsDefined2(schema.format)) {
    if (!exports_format.Has(schema.format))
      return false;
    const func = exports_format.Get(schema.format);
    return func(value3);
  }
  return true;
};
var FromSymbol3 = function(schema, references, value3) {
  return IsSymbol(value3);
};
var FromTemplateLiteral4 = function(schema, references, value3) {
  return IsString(value3) && new RegExp(schema.pattern).test(value3);
};
var FromThis2 = function(schema, references, value3) {
  return Visit6(Deref(schema, references), references, value3);
};
var FromTuple5 = function(schema, references, value3) {
  if (!IsArray(value3)) {
    return false;
  }
  if (schema.items === undefined && !(value3.length === 0)) {
    return false;
  }
  if (!(value3.length === schema.maxItems)) {
    return false;
  }
  if (!schema.items) {
    return true;
  }
  for (let i = 0;i < schema.items.length; i++) {
    if (!Visit6(schema.items[i], references, value3[i]))
      return false;
  }
  return true;
};
var FromUndefined3 = function(schema, references, value3) {
  return IsUndefined(value3);
};
var FromUnion7 = function(schema, references, value3) {
  return schema.anyOf.some((inner) => Visit6(inner, references, value3));
};
var FromUint8Array3 = function(schema, references, value3) {
  if (!IsUint8Array(value3)) {
    return false;
  }
  if (IsDefined2(schema.maxByteLength) && !(value3.length <= schema.maxByteLength)) {
    return false;
  }
  if (IsDefined2(schema.minByteLength) && !(value3.length >= schema.minByteLength)) {
    return false;
  }
  return true;
};
var FromUnknown3 = function(schema, references, value3) {
  return true;
};
var FromVoid3 = function(schema, references, value3) {
  return TypeSystemPolicy.IsVoidLike(value3);
};
var FromKind2 = function(schema, references, value3) {
  if (!exports_type.Has(schema[Kind]))
    return false;
  const func = exports_type.Get(schema[Kind]);
  return func(schema, value3);
};
var Visit6 = function(schema, references, value3) {
  const references_ = IsDefined2(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return FromAny3(schema_, references_, value3);
    case "Array":
      return FromArray5(schema_, references_, value3);
    case "AsyncIterator":
      return FromAsyncIterator3(schema_, references_, value3);
    case "BigInt":
      return FromBigInt3(schema_, references_, value3);
    case "Boolean":
      return FromBoolean3(schema_, references_, value3);
    case "Constructor":
      return FromConstructor3(schema_, references_, value3);
    case "Date":
      return FromDate3(schema_, references_, value3);
    case "Function":
      return FromFunction3(schema_, references_, value3);
    case "Integer":
      return FromInteger3(schema_, references_, value3);
    case "Intersect":
      return FromIntersect5(schema_, references_, value3);
    case "Iterator":
      return FromIterator3(schema_, references_, value3);
    case "Literal":
      return FromLiteral4(schema_, references_, value3);
    case "Never":
      return FromNever3(schema_, references_, value3);
    case "Not":
      return FromNot3(schema_, references_, value3);
    case "Null":
      return FromNull3(schema_, references_, value3);
    case "Number":
      return FromNumber3(schema_, references_, value3);
    case "Object":
      return FromObject3(schema_, references_, value3);
    case "Promise":
      return FromPromise3(schema_, references_, value3);
    case "Record":
      return FromRecord3(schema_, references_, value3);
    case "Ref":
      return FromRef2(schema_, references_, value3);
    case "RegExp":
      return FromRegExp3(schema_, references_, value3);
    case "String":
      return FromString3(schema_, references_, value3);
    case "Symbol":
      return FromSymbol3(schema_, references_, value3);
    case "TemplateLiteral":
      return FromTemplateLiteral4(schema_, references_, value3);
    case "This":
      return FromThis2(schema_, references_, value3);
    case "Tuple":
      return FromTuple5(schema_, references_, value3);
    case "Undefined":
      return FromUndefined3(schema_, references_, value3);
    case "Union":
      return FromUnion7(schema_, references_, value3);
    case "Uint8Array":
      return FromUint8Array3(schema_, references_, value3);
    case "Unknown":
      return FromUnknown3(schema_, references_, value3);
    case "Void":
      return FromVoid3(schema_, references_, value3);
    default:
      if (!exports_type.Has(schema_[Kind]))
        throw new ValueCheckUnknownTypeError(schema_);
      return FromKind2(schema_, references_, value3);
  }
};
function Check(...args) {
  return args.length === 3 ? Visit6(args[0], args[1], args[2]) : Visit6(args[0], [], args[1]);
}

class ValueCheckUnknownTypeError extends TypeBoxError {
  schema;
  constructor(schema) {
    super(`Unknown type`);
    this.schema = schema;
  }
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/value/clone/clone.mjs
var ObjectType3 = function(value3) {
  const keys = [...Object.getOwnPropertyNames(value3), ...Object.getOwnPropertySymbols(value3)];
  return keys.reduce((acc, key) => ({ ...acc, [key]: Clone2(value3[key]) }), {});
};
var ArrayType3 = function(value3) {
  return value3.map((element) => Clone2(element));
};
var TypedArrayType = function(value3) {
  return value3.slice();
};
var DateType3 = function(value3) {
  return new Date(value3.toISOString());
};
var ValueType = function(value3) {
  return value3;
};
function Clone2(value3) {
  if (IsArray(value3))
    return ArrayType3(value3);
  if (IsDate(value3))
    return DateType3(value3);
  if (IsPlainObject(value3))
    return ObjectType3(value3);
  if (IsTypedArray(value3))
    return TypedArrayType(value3);
  if (IsValueType(value3))
    return ValueType(value3);
  throw new Error("ValueClone: Unable to clone value");
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/value/create/create.mjs
var FromDefault = function(value3) {
  return typeof value3 === "function" ? value3 : Clone2(value3);
};
var FromAny4 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return {};
  }
};
var FromArray6 = function(schema, references) {
  if (schema.uniqueItems === true && !HasPropertyKey(schema, "default")) {
    throw new ValueCreateError(schema, "Array with the uniqueItems constraint requires a default value");
  } else if ("contains" in schema && !HasPropertyKey(schema, "default")) {
    throw new ValueCreateError(schema, "Array with the contains constraint requires a default value");
  } else if ("default" in schema) {
    return FromDefault(schema.default);
  } else if (schema.minItems !== undefined) {
    return Array.from({ length: schema.minItems }).map((item) => {
      return Visit7(schema.items, references);
    });
  } else {
    return [];
  }
};
var FromAsyncIterator4 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return async function* () {
    }();
  }
};
var FromBigInt4 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return BigInt(0);
  }
};
var FromBoolean4 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return false;
  }
};
var FromConstructor4 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const value3 = Visit7(schema.returns, references);
    if (typeof value3 === "object" && !Array.isArray(value3)) {
      return class {
        constructor() {
          for (const [key, val] of Object.entries(value3)) {
            const self2 = this;
            self2[key] = val;
          }
        }
      };
    } else {
      return class {
      };
    }
  }
};
var FromDate4 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimumTimestamp !== undefined) {
    return new Date(schema.minimumTimestamp);
  } else {
    return new Date;
  }
};
var FromFunction4 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return () => Visit7(schema.returns, references);
  }
};
var FromInteger4 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimum !== undefined) {
    return schema.minimum;
  } else {
    return 0;
  }
};
var FromIntersect6 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const value3 = schema.allOf.reduce((acc, schema2) => {
      const next = Visit7(schema2, references);
      return typeof next === "object" ? { ...acc, ...next } : next;
    }, {});
    if (!Check(schema, references, value3))
      throw new ValueCreateError(schema, "Intersect produced invalid value. Consider using a default value.");
    return value3;
  }
};
var FromIterator4 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return function* () {
    }();
  }
};
var FromLiteral5 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return schema.const;
  }
};
var FromNever4 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "Never types cannot be created. Consider using a default value.");
  }
};
var FromNot4 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "Not types must have a default value");
  }
};
var FromNull4 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return null;
  }
};
var FromNumber4 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimum !== undefined) {
    return schema.minimum;
  } else {
    return 0;
  }
};
var FromObject4 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const required = new Set(schema.required);
    return FromDefault(schema.default) || Object.entries(schema.properties).reduce((acc, [key, schema2]) => {
      return required.has(key) ? { ...acc, [key]: Visit7(schema2, references) } : { ...acc };
    }, {});
  }
};
var FromPromise4 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Promise.resolve(Visit7(schema.item, references));
  }
};
var FromRecord4 = function(schema, references) {
  const [keyPattern, valueSchema] = Object.entries(schema.patternProperties)[0];
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (!(keyPattern === PatternStringExact || keyPattern === PatternNumberExact)) {
    const propertyKeys = keyPattern.slice(1, keyPattern.length - 1).split("|");
    return propertyKeys.reduce((acc, key) => {
      return { ...acc, [key]: Visit7(valueSchema, references) };
    }, {});
  } else {
    return {};
  }
};
var FromRef3 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Visit7(Deref(schema, references), references);
  }
};
var FromRegExp4 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "RegExp types cannot be created. Consider using a default value.");
  }
};
var FromString4 = function(schema, references) {
  if (schema.pattern !== undefined) {
    if (!HasPropertyKey(schema, "default")) {
      throw new ValueCreateError(schema, "String types with patterns must specify a default value");
    } else {
      return FromDefault(schema.default);
    }
  } else if (schema.format !== undefined) {
    if (!HasPropertyKey(schema, "default")) {
      throw new ValueCreateError(schema, "String types with formats must specify a default value");
    } else {
      return FromDefault(schema.default);
    }
  } else {
    if (HasPropertyKey(schema, "default")) {
      return FromDefault(schema.default);
    } else if (schema.minLength !== undefined) {
      return Array.from({ length: schema.minLength }).map(() => " ").join("");
    } else {
      return "";
    }
  }
};
var FromSymbol4 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if ("value" in schema) {
    return Symbol.for(schema.value);
  } else {
    return Symbol();
  }
};
var FromTemplateLiteral5 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  }
  if (!IsTemplateLiteralFinite(schema))
    throw new ValueCreateError(schema, "Can only create template literals that produce a finite variants. Consider using a default value.");
  const generated = TemplateLiteralGenerate(schema);
  return generated[0];
};
var FromThis3 = function(schema, references) {
  if (recursiveDepth++ > recursiveMaxDepth)
    throw new ValueCreateError(schema, "Cannot create recursive type as it appears possibly infinite. Consider using a default.");
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Visit7(Deref(schema, references), references);
  }
};
var FromTuple6 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  }
  if (schema.items === undefined) {
    return [];
  } else {
    return Array.from({ length: schema.minItems }).map((_, index) => Visit7(schema.items[index], references));
  }
};
var FromUndefined4 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return;
  }
};
var FromUnion8 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.anyOf.length === 0) {
    throw new Error("ValueCreate.Union: Cannot create Union with zero variants");
  } else {
    return Visit7(schema.anyOf[0], references);
  }
};
var FromUint8Array4 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minByteLength !== undefined) {
    return new Uint8Array(schema.minByteLength);
  } else {
    return new Uint8Array(0);
  }
};
var FromUnknown4 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return {};
  }
};
var FromVoid4 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return;
  }
};
var FromKind3 = function(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new Error("User defined types must specify a default value");
  }
};
var Visit7 = function(schema, references) {
  const references_ = IsString(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return FromAny4(schema_, references_);
    case "Array":
      return FromArray6(schema_, references_);
    case "AsyncIterator":
      return FromAsyncIterator4(schema_, references_);
    case "BigInt":
      return FromBigInt4(schema_, references_);
    case "Boolean":
      return FromBoolean4(schema_, references_);
    case "Constructor":
      return FromConstructor4(schema_, references_);
    case "Date":
      return FromDate4(schema_, references_);
    case "Function":
      return FromFunction4(schema_, references_);
    case "Integer":
      return FromInteger4(schema_, references_);
    case "Intersect":
      return FromIntersect6(schema_, references_);
    case "Iterator":
      return FromIterator4(schema_, references_);
    case "Literal":
      return FromLiteral5(schema_, references_);
    case "Never":
      return FromNever4(schema_, references_);
    case "Not":
      return FromNot4(schema_, references_);
    case "Null":
      return FromNull4(schema_, references_);
    case "Number":
      return FromNumber4(schema_, references_);
    case "Object":
      return FromObject4(schema_, references_);
    case "Promise":
      return FromPromise4(schema_, references_);
    case "Record":
      return FromRecord4(schema_, references_);
    case "Ref":
      return FromRef3(schema_, references_);
    case "RegExp":
      return FromRegExp4(schema_, references_);
    case "String":
      return FromString4(schema_, references_);
    case "Symbol":
      return FromSymbol4(schema_, references_);
    case "TemplateLiteral":
      return FromTemplateLiteral5(schema_, references_);
    case "This":
      return FromThis3(schema_, references_);
    case "Tuple":
      return FromTuple6(schema_, references_);
    case "Undefined":
      return FromUndefined4(schema_, references_);
    case "Union":
      return FromUnion8(schema_, references_);
    case "Uint8Array":
      return FromUint8Array4(schema_, references_);
    case "Unknown":
      return FromUnknown4(schema_, references_);
    case "Void":
      return FromVoid4(schema_, references_);
    default:
      if (!exports_type.Has(schema_[Kind]))
        throw new ValueCreateError(schema_, "Unknown type");
      return FromKind3(schema_, references_);
  }
};
function Create2(...args) {
  recursiveDepth = 0;
  return args.length === 2 ? Visit7(args[0], args[1]) : Visit7(args[0], []);
}

class ValueCreateError extends TypeBoxError {
  schema;
  constructor(schema, message) {
    super(message);
    this.schema = schema;
  }
}
var recursiveMaxDepth = 512;
var recursiveDepth = 0;
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/value/cast/cast.mjs
var ScoreUnion = function(schema, references, value3) {
  if (schema[Kind] === "Object" && typeof value3 === "object" && !IsNull(value3)) {
    const object3 = schema;
    const keys = Object.getOwnPropertyNames(value3);
    const entries = Object.entries(object3.properties);
    const [point, max] = [1 / entries.length, entries.length];
    return entries.reduce((acc, [key, schema2]) => {
      const literal7 = schema2[Kind] === "Literal" && schema2.const === value3[key] ? max : 0;
      const checks = Check(schema2, references, value3[key]) ? point : 0;
      const exists = keys.includes(key) ? point : 0;
      return acc + (literal7 + checks + exists);
    }, 0);
  } else {
    return Check(schema, references, value3) ? 1 : 0;
  }
};
var SelectUnion = function(union9, references, value3) {
  let [select, best] = [union9.anyOf[0], 0];
  for (const schema of union9.anyOf) {
    const score = ScoreUnion(schema, references, value3);
    if (score > best) {
      select = schema;
      best = score;
    }
  }
  return select;
};
var CastUnion = function(union9, references, value3) {
  if ("default" in union9) {
    return typeof value3 === "function" ? union9.default : Clone2(union9.default);
  } else {
    const schema = SelectUnion(union9, references, value3);
    return Cast(schema, references, value3);
  }
};
var DefaultClone = function(schema, references, value3) {
  return Check(schema, references, value3) ? Clone2(value3) : Create2(schema, references);
};
var Default = function(schema, references, value3) {
  return Check(schema, references, value3) ? value3 : Create2(schema, references);
};
var FromArray7 = function(schema, references, value3) {
  if (Check(schema, references, value3))
    return Clone2(value3);
  const created = IsArray(value3) ? Clone2(value3) : Create2(schema, references);
  const minimum = IsNumber(schema.minItems) && created.length < schema.minItems ? [...created, ...Array.from({ length: schema.minItems - created.length }, () => null)] : created;
  const maximum = IsNumber(schema.maxItems) && minimum.length > schema.maxItems ? minimum.slice(0, schema.maxItems) : minimum;
  const casted = maximum.map((value4) => Visit8(schema.items, references, value4));
  if (schema.uniqueItems !== true)
    return casted;
  const unique = [...new Set(casted)];
  if (!Check(schema, references, unique))
    throw new ValueCastError(schema, "Array cast produced invalid data due to uniqueItems constraint");
  return unique;
};
var FromConstructor5 = function(schema, references, value3) {
  if (Check(schema, references, value3))
    return Create2(schema, references);
  const required = new Set(schema.returns.required || []);
  const result = function() {
  };
  for (const [key, property] of Object.entries(schema.returns.properties)) {
    if (!required.has(key) && value3.prototype[key] === undefined)
      continue;
    result.prototype[key] = Visit8(property, references, value3.prototype[key]);
  }
  return result;
};
var FromIntersect7 = function(schema, references, value3) {
  const created = Create2(schema, references);
  const mapped9 = IsPlainObject(created) && IsPlainObject(value3) ? { ...created, ...value3 } : value3;
  return Check(schema, references, mapped9) ? mapped9 : Create2(schema, references);
};
var FromNever5 = function(schema, references, value3) {
  throw new ValueCastError(schema, "Never types cannot be cast");
};
var FromObject5 = function(schema, references, value3) {
  if (Check(schema, references, value3))
    return value3;
  if (value3 === null || typeof value3 !== "object")
    return Create2(schema, references);
  const required = new Set(schema.required || []);
  const result = {};
  for (const [key, property] of Object.entries(schema.properties)) {
    if (!required.has(key) && value3[key] === undefined)
      continue;
    result[key] = Visit8(property, references, value3[key]);
  }
  if (typeof schema.additionalProperties === "object") {
    const propertyNames = Object.getOwnPropertyNames(schema.properties);
    for (const propertyName of Object.getOwnPropertyNames(value3)) {
      if (propertyNames.includes(propertyName))
        continue;
      result[propertyName] = Visit8(schema.additionalProperties, references, value3[propertyName]);
    }
  }
  return result;
};
var FromRecord5 = function(schema, references, value3) {
  if (Check(schema, references, value3))
    return Clone2(value3);
  if (value3 === null || typeof value3 !== "object" || Array.isArray(value3) || value3 instanceof Date)
    return Create2(schema, references);
  const subschemaPropertyName = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const subschema = schema.patternProperties[subschemaPropertyName];
  const result = {};
  for (const [propKey, propValue] of Object.entries(value3)) {
    result[propKey] = Visit8(subschema, references, propValue);
  }
  return result;
};
var FromRef4 = function(schema, references, value3) {
  return Visit8(Deref(schema, references), references, value3);
};
var FromThis4 = function(schema, references, value3) {
  return Visit8(Deref(schema, references), references, value3);
};
var FromTuple7 = function(schema, references, value3) {
  if (Check(schema, references, value3))
    return Clone2(value3);
  if (!IsArray(value3))
    return Create2(schema, references);
  if (schema.items === undefined)
    return [];
  return schema.items.map((schema2, index) => Visit8(schema2, references, value3[index]));
};
var FromUnion9 = function(schema, references, value3) {
  return Check(schema, references, value3) ? Clone2(value3) : CastUnion(schema, references, value3);
};
var Visit8 = function(schema, references, value3) {
  const references_ = IsString(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray7(schema_, references_, value3);
    case "Constructor":
      return FromConstructor5(schema_, references_, value3);
    case "Intersect":
      return FromIntersect7(schema_, references_, value3);
    case "Never":
      return FromNever5(schema_, references_, value3);
    case "Object":
      return FromObject5(schema_, references_, value3);
    case "Record":
      return FromRecord5(schema_, references_, value3);
    case "Ref":
      return FromRef4(schema_, references_, value3);
    case "This":
      return FromThis4(schema_, references_, value3);
    case "Tuple":
      return FromTuple7(schema_, references_, value3);
    case "Union":
      return FromUnion9(schema_, references_, value3);
    case "Date":
    case "Symbol":
    case "Uint8Array":
      return DefaultClone(schema, references, value3);
    default:
      return Default(schema_, references_, value3);
  }
};
function Cast(...args) {
  return args.length === 3 ? Visit8(args[0], args[1], args[2]) : Visit8(args[0], [], args[1]);
}

class ValueCastError extends TypeBoxError {
  schema;
  constructor(schema, message) {
    super(message);
    this.schema = schema;
  }
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/value/clean/clean.mjs
var IsCheckable = function(schema) {
  return IsSchema(schema) && schema[Kind] !== "Unsafe";
};
var FromArray8 = function(schema, references, value3) {
  if (!IsArray(value3))
    return value3;
  return value3.map((value4) => Visit9(schema.items, references, value4));
};
var FromIntersect8 = function(schema, references, value3) {
  const unevaluatedProperties = schema.unevaluatedProperties;
  const intersections = schema.allOf.map((schema2) => Visit9(schema2, references, Clone2(value3)));
  const composite = intersections.reduce((acc, value4) => IsObject(value4) ? { ...acc, ...value4 } : value4, {});
  if (!IsObject(value3) || !IsObject(composite) || !IsSchema(unevaluatedProperties))
    return composite;
  const knownkeys = KeyOfPropertyKeys(schema);
  for (const key of Object.getOwnPropertyNames(value3)) {
    if (knownkeys.includes(key))
      continue;
    if (Check(unevaluatedProperties, references, value3[key])) {
      composite[key] = Visit9(unevaluatedProperties, references, value3[key]);
    }
  }
  return composite;
};
var FromObject6 = function(schema, references, value3) {
  if (!IsObject(value3) || IsArray(value3))
    return value3;
  const additionalProperties = schema.additionalProperties;
  for (const key of Object.getOwnPropertyNames(value3)) {
    if (key in schema.properties) {
      value3[key] = Visit9(schema.properties[key], references, value3[key]);
      continue;
    }
    if (IsSchema(additionalProperties) && Check(additionalProperties, references, value3[key])) {
      value3[key] = Visit9(additionalProperties, references, value3[key]);
      continue;
    }
    delete value3[key];
  }
  return value3;
};
var FromRecord6 = function(schema, references, value3) {
  if (!IsObject(value3))
    return value3;
  const additionalProperties = schema.additionalProperties;
  const propertyKeys = Object.keys(value3);
  const [propertyKey, propertySchema] = Object.entries(schema.patternProperties)[0];
  const propertyKeyTest = new RegExp(propertyKey);
  for (const key of propertyKeys) {
    if (propertyKeyTest.test(key)) {
      value3[key] = Visit9(propertySchema, references, value3[key]);
      continue;
    }
    if (IsSchema(additionalProperties) && Check(additionalProperties, references, value3[key])) {
      value3[key] = Visit9(additionalProperties, references, value3[key]);
      continue;
    }
    delete value3[key];
  }
  return value3;
};
var FromRef5 = function(schema, references, value3) {
  return Visit9(Deref(schema, references), references, value3);
};
var FromThis5 = function(schema, references, value3) {
  return Visit9(Deref(schema, references), references, value3);
};
var FromTuple8 = function(schema, references, value3) {
  if (!IsArray(value3))
    return value3;
  if (IsUndefined(schema.items))
    return [];
  const length = Math.min(value3.length, schema.items.length);
  for (let i = 0;i < length; i++) {
    value3[i] = Visit9(schema.items[i], references, value3[i]);
  }
  return value3.length > length ? value3.slice(0, length) : value3;
};
var FromUnion10 = function(schema, references, value3) {
  for (const inner of schema.anyOf) {
    if (IsCheckable(inner) && Check(inner, value3)) {
      return Visit9(inner, references, value3);
    }
  }
  return value3;
};
var Visit9 = function(schema, references, value3) {
  const references_ = IsString(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Array":
      return FromArray8(schema_, references_, value3);
    case "Intersect":
      return FromIntersect8(schema_, references_, value3);
    case "Object":
      return FromObject6(schema_, references_, value3);
    case "Record":
      return FromRecord6(schema_, references_, value3);
    case "Ref":
      return FromRef5(schema_, references_, value3);
    case "This":
      return FromThis5(schema_, references_, value3);
    case "Tuple":
      return FromTuple8(schema_, references_, value3);
    case "Union":
      return FromUnion10(schema_, references_, value3);
    default:
      return value3;
  }
};
function Clean(...args) {
  return args.length === 3 ? Visit9(args[0], args[1], args[2]) : Visit9(args[0], [], args[1]);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/composite/composite.mjs
var CompositeKeys = function(T) {
  return T.reduce((Acc, L) => {
    return SetDistinct([...Acc, ...KeyOfPropertyKeys(L)]);
  }, []);
};
var FilterNever = function(T) {
  return T.filter((L) => !IsNever(L));
};
var CompositeProperty = function(T, K) {
  return T.reduce((Acc, L) => {
    return FilterNever([...Acc, ...IndexFromPropertyKeys(L, [K])]);
  }, []);
};
var CompositeProperties = function(T, K) {
  return K.reduce((Acc, L) => {
    return { ...Acc, [L]: IntersectEvaluated(CompositeProperty(T, L)) };
  }, {});
};
function Composite(T, options = {}) {
  const K = CompositeKeys(T);
  const P = CompositeProperties(T, K);
  const R = Object2(P, options);
  return R;
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/value/convert/convert.mjs
var IsStringNumeric = function(value3) {
  return IsString(value3) && !isNaN(value3) && !isNaN(parseFloat(value3));
};
var IsValueToString = function(value3) {
  return IsBigInt(value3) || IsBoolean(value3) || IsNumber(value3);
};
var IsValueTrue = function(value3) {
  return value3 === true || IsNumber(value3) && value3 === 1 || IsBigInt(value3) && value3 === BigInt("1") || IsString(value3) && (value3.toLowerCase() === "true" || value3 === "1");
};
var IsValueFalse = function(value3) {
  return value3 === false || IsNumber(value3) && (value3 === 0 || Object.is(value3, -0)) || IsBigInt(value3) && value3 === BigInt("0") || IsString(value3) && (value3.toLowerCase() === "false" || value3 === "0" || value3 === "-0");
};
var IsTimeStringWithTimeZone = function(value3) {
  return IsString(value3) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value3);
};
var IsTimeStringWithoutTimeZone = function(value3) {
  return IsString(value3) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value3);
};
var IsDateTimeStringWithTimeZone = function(value3) {
  return IsString(value3) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value3);
};
var IsDateTimeStringWithoutTimeZone = function(value3) {
  return IsString(value3) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value3);
};
var IsDateString = function(value3) {
  return IsString(value3) && /^\d\d\d\d-[0-1]\d-[0-3]\d$/i.test(value3);
};
var TryConvertLiteralString = function(value3, target) {
  const conversion = TryConvertString(value3);
  return conversion === target ? conversion : value3;
};
var TryConvertLiteralNumber = function(value3, target) {
  const conversion = TryConvertNumber(value3);
  return conversion === target ? conversion : value3;
};
var TryConvertLiteralBoolean = function(value3, target) {
  const conversion = TryConvertBoolean(value3);
  return conversion === target ? conversion : value3;
};
var TryConvertLiteral = function(schema, value3) {
  return IsString(schema.const) ? TryConvertLiteralString(value3, schema.const) : IsNumber(schema.const) ? TryConvertLiteralNumber(value3, schema.const) : IsBoolean(schema.const) ? TryConvertLiteralBoolean(value3, schema.const) : Clone2(value3);
};
var TryConvertBoolean = function(value3) {
  return IsValueTrue(value3) ? true : IsValueFalse(value3) ? false : value3;
};
var TryConvertBigInt = function(value3) {
  return IsStringNumeric(value3) ? BigInt(parseInt(value3)) : IsNumber(value3) ? BigInt(value3 | 0) : IsValueFalse(value3) ? BigInt(0) : IsValueTrue(value3) ? BigInt(1) : value3;
};
var TryConvertString = function(value3) {
  return IsValueToString(value3) ? value3.toString() : IsSymbol(value3) && value3.description !== undefined ? value3.description.toString() : value3;
};
var TryConvertNumber = function(value3) {
  return IsStringNumeric(value3) ? parseFloat(value3) : IsValueTrue(value3) ? 1 : IsValueFalse(value3) ? 0 : value3;
};
var TryConvertInteger = function(value3) {
  return IsStringNumeric(value3) ? parseInt(value3) : IsNumber(value3) ? value3 | 0 : IsValueTrue(value3) ? 1 : IsValueFalse(value3) ? 0 : value3;
};
var TryConvertNull = function(value3) {
  return IsString(value3) && value3.toLowerCase() === "null" ? null : value3;
};
var TryConvertUndefined = function(value3) {
  return IsString(value3) && value3 === "undefined" ? undefined : value3;
};
var TryConvertDate = function(value3) {
  return IsDate(value3) ? value3 : IsNumber(value3) ? new Date(value3) : IsValueTrue(value3) ? new Date(1) : IsValueFalse(value3) ? new Date(0) : IsStringNumeric(value3) ? new Date(parseInt(value3)) : IsTimeStringWithoutTimeZone(value3) ? new Date(`1970-01-01T${value3}.000Z`) : IsTimeStringWithTimeZone(value3) ? new Date(`1970-01-01T${value3}`) : IsDateTimeStringWithoutTimeZone(value3) ? new Date(`${value3}.000Z`) : IsDateTimeStringWithTimeZone(value3) ? new Date(value3) : IsDateString(value3) ? new Date(`${value3}T00:00:00.000Z`) : value3;
};
var Default2 = function(value3) {
  return value3;
};
var FromArray9 = function(schema, references, value3) {
  if (IsArray(value3)) {
    return value3.map((value4) => Visit10(schema.items, references, value4));
  }
  return value3;
};
var FromBigInt5 = function(schema, references, value3) {
  return TryConvertBigInt(value3);
};
var FromBoolean5 = function(schema, references, value3) {
  return TryConvertBoolean(value3);
};
var FromDate5 = function(schema, references, value3) {
  return TryConvertDate(value3);
};
var FromInteger5 = function(schema, references, value3) {
  return TryConvertInteger(value3);
};
var FromIntersect9 = function(schema, references, value3) {
  const allObjects = schema.allOf.every((schema2) => IsObject3(schema2));
  if (allObjects)
    return Visit10(Composite(schema.allOf), references, value3);
  return Visit10(schema.allOf[0], references, value3);
};
var FromLiteral6 = function(schema, references, value3) {
  return TryConvertLiteral(schema, value3);
};
var FromNull5 = function(schema, references, value3) {
  return TryConvertNull(value3);
};
var FromNumber5 = function(schema, references, value3) {
  return TryConvertNumber(value3);
};
var FromObject7 = function(schema, references, value3) {
  const isConvertable = IsObject(value3);
  if (!isConvertable)
    return value3;
  return Object.getOwnPropertyNames(schema.properties).reduce((value4, key) => {
    return !IsUndefined(value4[key]) ? { ...value4, [key]: Visit10(schema.properties[key], references, value4[key]) } : { ...value4 };
  }, value3);
};
var FromRecord7 = function(schema, references, value3) {
  const propertyKey = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const property = schema.patternProperties[propertyKey];
  const result = {};
  for (const [propKey, propValue] of Object.entries(value3)) {
    result[propKey] = Visit10(property, references, propValue);
  }
  return result;
};
var FromRef6 = function(schema, references, value3) {
  return Visit10(Deref(schema, references), references, value3);
};
var FromString5 = function(schema, references, value3) {
  return TryConvertString(value3);
};
var FromSymbol5 = function(schema, references, value3) {
  return IsString(value3) || IsNumber(value3) ? Symbol(value3) : value3;
};
var FromThis6 = function(schema, references, value3) {
  return Visit10(Deref(schema, references), references, value3);
};
var FromTuple9 = function(schema, references, value3) {
  const isConvertable = IsArray(value3) && !IsUndefined(schema.items);
  if (!isConvertable)
    return value3;
  return value3.map((value4, index) => {
    return index < schema.items.length ? Visit10(schema.items[index], references, value4) : value4;
  });
};
var FromUndefined5 = function(schema, references, value3) {
  return TryConvertUndefined(value3);
};
var FromUnion11 = function(schema, references, value3) {
  for (const subschema of schema.anyOf) {
    const converted = Visit10(subschema, references, value3);
    if (Check(subschema, references, converted)) {
      return converted;
    }
  }
  return value3;
};
var Visit10 = function(schema, references, value3) {
  const references_ = IsString(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray9(schema_, references_, value3);
    case "BigInt":
      return FromBigInt5(schema_, references_, value3);
    case "Boolean":
      return FromBoolean5(schema_, references_, value3);
    case "Date":
      return FromDate5(schema_, references_, value3);
    case "Integer":
      return FromInteger5(schema_, references_, value3);
    case "Intersect":
      return FromIntersect9(schema_, references_, value3);
    case "Literal":
      return FromLiteral6(schema_, references_, value3);
    case "Null":
      return FromNull5(schema_, references_, value3);
    case "Number":
      return FromNumber5(schema_, references_, value3);
    case "Object":
      return FromObject7(schema_, references_, value3);
    case "Record":
      return FromRecord7(schema_, references_, value3);
    case "Ref":
      return FromRef6(schema_, references_, value3);
    case "String":
      return FromString5(schema_, references_, value3);
    case "Symbol":
      return FromSymbol5(schema_, references_, value3);
    case "This":
      return FromThis6(schema_, references_, value3);
    case "Tuple":
      return FromTuple9(schema_, references_, value3);
    case "Undefined":
      return FromUndefined5(schema_, references_, value3);
    case "Union":
      return FromUnion11(schema_, references_, value3);
    default:
      return Default2(value3);
  }
};
function Convert(...args) {
  return args.length === 3 ? Visit10(args[0], args[1], args[2]) : Visit10(args[0], [], args[1]);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/value/default/default.mjs
var ValueOrDefault = function(schema, value3) {
  return value3 === undefined && "default" in schema ? Clone2(schema.default) : value3;
};
var IsCheckable2 = function(schema) {
  return IsSchema(schema) && schema[Kind] !== "Unsafe";
};
var IsDefaultSchema = function(value3) {
  return IsSchema(value3) && "default" in value3;
};
var FromArray10 = function(schema, references, value3) {
  const defaulted = ValueOrDefault(schema, value3);
  if (!IsArray(defaulted))
    return defaulted;
  for (let i = 0;i < defaulted.length; i++) {
    defaulted[i] = Visit11(schema.items, references, defaulted[i]);
  }
  return defaulted;
};
var FromIntersect10 = function(schema, references, value3) {
  const defaulted = ValueOrDefault(schema, value3);
  return schema.allOf.reduce((acc, schema2) => {
    const next = Visit11(schema2, references, defaulted);
    return IsObject(next) ? { ...acc, ...next } : next;
  }, {});
};
var FromObject8 = function(schema, references, value3) {
  const defaulted = ValueOrDefault(schema, value3);
  if (!IsObject(defaulted))
    return defaulted;
  const additionalPropertiesSchema = schema.additionalProperties;
  const knownPropertyKeys = Object.getOwnPropertyNames(schema.properties);
  for (const key of knownPropertyKeys) {
    if (!IsDefaultSchema(schema.properties[key]))
      continue;
    defaulted[key] = Visit11(schema.properties[key], references, defaulted[key]);
  }
  if (!IsDefaultSchema(additionalPropertiesSchema))
    return defaulted;
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (knownPropertyKeys.includes(key))
      continue;
    defaulted[key] = Visit11(additionalPropertiesSchema, references, defaulted[key]);
  }
  return defaulted;
};
var FromRecord8 = function(schema, references, value3) {
  const defaulted = ValueOrDefault(schema, value3);
  if (!IsObject(defaulted))
    return defaulted;
  const additionalPropertiesSchema = schema.additionalProperties;
  const [propertyKeyPattern, propertySchema] = Object.entries(schema.patternProperties)[0];
  const knownPropertyKey = new RegExp(propertyKeyPattern);
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (!(knownPropertyKey.test(key) && IsDefaultSchema(propertySchema)))
      continue;
    defaulted[key] = Visit11(propertySchema, references, defaulted[key]);
  }
  if (!IsDefaultSchema(additionalPropertiesSchema))
    return defaulted;
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (knownPropertyKey.test(key))
      continue;
    defaulted[key] = Visit11(additionalPropertiesSchema, references, defaulted[key]);
  }
  return defaulted;
};
var FromRef7 = function(schema, references, value3) {
  return Visit11(Deref(schema, references), references, ValueOrDefault(schema, value3));
};
var FromThis7 = function(schema, references, value3) {
  return Visit11(Deref(schema, references), references, value3);
};
var FromTuple10 = function(schema, references, value3) {
  const defaulted = ValueOrDefault(schema, value3);
  if (!IsArray(defaulted) || IsUndefined(schema.items))
    return defaulted;
  const [items, max] = [schema.items, Math.max(schema.items.length, defaulted.length)];
  for (let i = 0;i < max; i++) {
    if (i < items.length)
      defaulted[i] = Visit11(items[i], references, defaulted[i]);
  }
  return defaulted;
};
var FromUnion12 = function(schema, references, value3) {
  const defaulted = ValueOrDefault(schema, value3);
  for (const inner of schema.anyOf) {
    const result = Visit11(inner, references, defaulted);
    if (IsCheckable2(inner) && Check(inner, result)) {
      return result;
    }
  }
  return defaulted;
};
var Visit11 = function(schema, references, value3) {
  const references_ = IsString(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Array":
      return FromArray10(schema_, references_, value3);
    case "Intersect":
      return FromIntersect10(schema_, references_, value3);
    case "Object":
      return FromObject8(schema_, references_, value3);
    case "Record":
      return FromRecord8(schema_, references_, value3);
    case "Ref":
      return FromRef7(schema_, references_, value3);
    case "This":
      return FromThis7(schema_, references_, value3);
    case "Tuple":
      return FromTuple10(schema_, references_, value3);
    case "Union":
      return FromUnion12(schema_, references_, value3);
    default:
      return ValueOrDefault(schema_, value3);
  }
};
function Default3(...args) {
  return args.length === 3 ? Visit11(args[0], args[1], args[2]) : Visit11(args[0], [], args[1]);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/value/pointer/pointer.mjs
var exports_pointer = {};
__export(exports_pointer, {
  ValuePointerRootSetError: () => {
    {
      return ValuePointerRootSetError;
    }
  },
  ValuePointerRootDeleteError: () => {
    {
      return ValuePointerRootDeleteError;
    }
  },
  Set: () => {
    {
      return Set4;
    }
  },
  Has: () => {
    {
      return Has3;
    }
  },
  Get: () => {
    {
      return Get3;
    }
  },
  Format: () => {
    {
      return Format;
    }
  },
  Delete: () => {
    {
      return Delete3;
    }
  }
});
var Escape2 = function(component) {
  return component.indexOf("~") === -1 ? component : component.replace(/~1/g, "/").replace(/~0/g, "~");
};
function* Format(pointer) {
  if (pointer === "")
    return;
  let [start, end] = [0, 0];
  for (let i = 0;i < pointer.length; i++) {
    const char = pointer.charAt(i);
    if (char === "/") {
      if (i === 0) {
        start = i + 1;
      } else {
        end = i;
        yield Escape2(pointer.slice(start, end));
        start = i + 1;
      }
    } else {
      end = i;
    }
  }
  yield Escape2(pointer.slice(start));
}
function Set4(value3, pointer, update) {
  if (pointer === "")
    throw new ValuePointerRootSetError(value3, pointer, update);
  let [owner, next, key] = [null, value3, ""];
  for (const component of Format(pointer)) {
    if (next[component] === undefined)
      next[component] = {};
    owner = next;
    next = next[component];
    key = component;
  }
  owner[key] = update;
}
function Delete3(value3, pointer) {
  if (pointer === "")
    throw new ValuePointerRootDeleteError(value3, pointer);
  let [owner, next, key] = [null, value3, ""];
  for (const component of Format(pointer)) {
    if (next[component] === undefined || next[component] === null)
      return;
    owner = next;
    next = next[component];
    key = component;
  }
  if (Array.isArray(owner)) {
    const index = parseInt(key);
    owner.splice(index, 1);
  } else {
    delete owner[key];
  }
}
function Has3(value3, pointer) {
  if (pointer === "")
    return true;
  let [owner, next, key] = [null, value3, ""];
  for (const component of Format(pointer)) {
    if (next[component] === undefined)
      return false;
    owner = next;
    next = next[component];
    key = component;
  }
  return Object.getOwnPropertyNames(owner).includes(key);
}
function Get3(value3, pointer) {
  if (pointer === "")
    return value3;
  let current = value3;
  for (const component of Format(pointer)) {
    if (current[component] === undefined)
      return;
    current = current[component];
  }
  return current;
}

class ValuePointerRootSetError extends TypeBoxError {
  value;
  path;
  update;
  constructor(value3, path, update) {
    super("Cannot set root value");
    this.value = value3;
    this.path = path;
    this.update = update;
  }
}

class ValuePointerRootDeleteError extends TypeBoxError {
  value;
  path;
  constructor(value3, path) {
    super("Cannot delete root value");
    this.value = value3;
    this.path = path;
  }
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/value/delta/delta.mjs
var CreateUpdate = function(path, value3) {
  return { type: "update", path, value: value3 };
};
var CreateInsert = function(path, value3) {
  return { type: "insert", path, value: value3 };
};
var CreateDelete = function(path) {
  return { type: "delete", path };
};
function* ObjectType4(path, current, next) {
  if (!IsPlainObject(next))
    return yield CreateUpdate(path, next);
  const currentKeys = [...globalThis.Object.keys(current), ...globalThis.Object.getOwnPropertySymbols(current)];
  const nextKeys = [...globalThis.Object.keys(next), ...globalThis.Object.getOwnPropertySymbols(next)];
  for (const key of currentKeys) {
    if (IsSymbol(key))
      throw new ValueDeltaSymbolError(key);
    if (IsUndefined(next[key]) && nextKeys.includes(key))
      yield CreateUpdate(`${path}/${globalThis.String(key)}`, undefined);
  }
  for (const key of nextKeys) {
    if (IsUndefined(current[key]) || IsUndefined(next[key]))
      continue;
    if (IsSymbol(key))
      throw new ValueDeltaSymbolError(key);
    yield* Visit12(`${path}/${globalThis.String(key)}`, current[key], next[key]);
  }
  for (const key of nextKeys) {
    if (IsSymbol(key))
      throw new ValueDeltaSymbolError(key);
    if (IsUndefined(current[key]))
      yield CreateInsert(`${path}/${globalThis.String(key)}`, next[key]);
  }
  for (const key of currentKeys.reverse()) {
    if (IsSymbol(key))
      throw new ValueDeltaSymbolError(key);
    if (IsUndefined(next[key]) && !nextKeys.includes(key))
      yield CreateDelete(`${path}/${globalThis.String(key)}`);
  }
}
function* ArrayType4(path, current, next) {
  if (!IsArray(next))
    return yield CreateUpdate(path, next);
  for (let i = 0;i < Math.min(current.length, next.length); i++) {
    yield* Visit12(`${path}/${i}`, current[i], next[i]);
  }
  for (let i = 0;i < next.length; i++) {
    if (i < current.length)
      continue;
    yield CreateInsert(`${path}/${i}`, next[i]);
  }
  for (let i = current.length - 1;i >= 0; i--) {
    if (i < next.length)
      continue;
    yield CreateDelete(`${path}/${i}`);
  }
}
function* TypedArrayType2(path, current, next) {
  if (!IsTypedArray(next) || current.length !== next.length || globalThis.Object.getPrototypeOf(current).constructor.name !== globalThis.Object.getPrototypeOf(next).constructor.name)
    return yield CreateUpdate(path, next);
  for (let i = 0;i < Math.min(current.length, next.length); i++) {
    yield* Visit12(`${path}/${i}`, current[i], next[i]);
  }
}
function* ValueType2(path, current, next) {
  if (current === next)
    return;
  yield CreateUpdate(path, next);
}
function* Visit12(path, current, next) {
  if (IsPlainObject(current))
    return yield* ObjectType4(path, current, next);
  if (IsArray(current))
    return yield* ArrayType4(path, current, next);
  if (IsTypedArray(current))
    return yield* TypedArrayType2(path, current, next);
  if (IsValueType(current))
    return yield* ValueType2(path, current, next);
  throw new ValueDeltaError(current, "Unable to create diff edits for unknown value");
}
function Diff(current, next) {
  return [...Visit12("", current, next)];
}
var IsRootUpdate = function(edits) {
  return edits.length > 0 && edits[0].path === "" && edits[0].type === "update";
};
var IsIdentity = function(edits) {
  return edits.length === 0;
};
function Patch(current, edits) {
  if (IsRootUpdate(edits)) {
    return Clone2(edits[0].value);
  }
  if (IsIdentity(edits)) {
    return Clone2(current);
  }
  const clone8 = Clone2(current);
  for (const edit of edits) {
    switch (edit.type) {
      case "insert": {
        exports_pointer.Set(clone8, edit.path, edit.value);
        break;
      }
      case "update": {
        exports_pointer.Set(clone8, edit.path, edit.value);
        break;
      }
      case "delete": {
        exports_pointer.Delete(clone8, edit.path);
        break;
      }
    }
  }
  return clone8;
}
var Insert = Object2({
  type: Literal("insert"),
  path: String2(),
  value: Unknown()
});
var Update = Object2({
  type: Literal("update"),
  path: String2(),
  value: Unknown()
});
var Delete4 = Object2({
  type: Literal("delete"),
  path: String2()
});
var Edit = Union([Insert, Update, Delete4]);

class ValueDeltaError extends TypeBoxError {
  value;
  constructor(value3, message) {
    super(message);
    this.value = value3;
  }
}

class ValueDeltaSymbolError extends ValueDeltaError {
  value;
  constructor(value3) {
    super(value3, "Cannot diff objects with symbol keys");
    this.value = value3;
  }
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/value/equal/equal.mjs
var ObjectType5 = function(left, right) {
  if (!IsPlainObject(right))
    return false;
  const leftKeys = [...Object.keys(left), ...Object.getOwnPropertySymbols(left)];
  const rightKeys = [...Object.keys(right), ...Object.getOwnPropertySymbols(right)];
  if (leftKeys.length !== rightKeys.length)
    return false;
  return leftKeys.every((key) => Equal(left[key], right[key]));
};
var DateType4 = function(left, right) {
  return IsDate(right) && left.getTime() === right.getTime();
};
var ArrayType5 = function(left, right) {
  if (!IsArray(right) || left.length !== right.length)
    return false;
  return left.every((value3, index) => Equal(value3, right[index]));
};
var TypedArrayType3 = function(left, right) {
  if (!IsTypedArray(right) || left.length !== right.length || Object.getPrototypeOf(left).constructor.name !== Object.getPrototypeOf(right).constructor.name)
    return false;
  return left.every((value3, index) => Equal(value3, right[index]));
};
var ValueType3 = function(left, right) {
  return left === right;
};
function Equal(left, right) {
  if (IsPlainObject(left))
    return ObjectType5(left, right);
  if (IsDate(left))
    return DateType4(left, right);
  if (IsTypedArray(left))
    return TypedArrayType3(left, right);
  if (IsArray(left))
    return ArrayType5(left, right);
  if (IsValueType(left))
    return ValueType3(left, right);
  throw new Error("ValueEquals: Unable to compare value");
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/value/mutate/mutate.mjs
var ObjectType6 = function(root, path, current, next) {
  if (!IsPlainObject(current)) {
    exports_pointer.Set(root, path, Clone2(next));
  } else {
    const currentKeys = Object.keys(current);
    const nextKeys = Object.keys(next);
    for (const currentKey of currentKeys) {
      if (!nextKeys.includes(currentKey)) {
        delete current[currentKey];
      }
    }
    for (const nextKey of nextKeys) {
      if (!currentKeys.includes(nextKey)) {
        current[nextKey] = null;
      }
    }
    for (const nextKey of nextKeys) {
      Visit13(root, `${path}/${nextKey}`, current[nextKey], next[nextKey]);
    }
  }
};
var ArrayType6 = function(root, path, current, next) {
  if (!IsArray(current)) {
    exports_pointer.Set(root, path, Clone2(next));
  } else {
    for (let index = 0;index < next.length; index++) {
      Visit13(root, `${path}/${index}`, current[index], next[index]);
    }
    current.splice(next.length);
  }
};
var TypedArrayType4 = function(root, path, current, next) {
  if (IsTypedArray(current) && current.length === next.length) {
    for (let i = 0;i < current.length; i++) {
      current[i] = next[i];
    }
  } else {
    exports_pointer.Set(root, path, Clone2(next));
  }
};
var ValueType4 = function(root, path, current, next) {
  if (current === next)
    return;
  exports_pointer.Set(root, path, next);
};
var Visit13 = function(root, path, current, next) {
  if (IsArray(next))
    return ArrayType6(root, path, current, next);
  if (IsTypedArray(next))
    return TypedArrayType4(root, path, current, next);
  if (IsPlainObject(next))
    return ObjectType6(root, path, current, next);
  if (IsValueType(next))
    return ValueType4(root, path, current, next);
};
var IsNonMutableValue = function(value3) {
  return IsTypedArray(value3) || IsValueType(value3);
};
var IsMismatchedValue = function(current, next) {
  return IsPlainObject(current) && IsArray(next) || IsArray(current) && IsPlainObject(next);
};
function Mutate(current, next) {
  if (IsNonMutableValue(current) || IsNonMutableValue(next))
    throw new ValueMutateError("Only object and array types can be mutated at the root level");
  if (IsMismatchedValue(current, next))
    throw new ValueMutateError("Cannot assign due type mismatch of assignable values");
  Visit13(current, "", current, next);
}

class ValueMutateError extends TypeBoxError {
  constructor(message) {
    super(message);
  }
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/value/transform/decode.mjs
var Default4 = function(schema, value3) {
  try {
    return IsTransform(schema) ? schema[TransformKind].Decode(value3) : value3;
  } catch (error19) {
    throw new TransformDecodeError(schema, value3, error19);
  }
};
var FromArray11 = function(schema, references, value3) {
  return IsArray(value3) ? Default4(schema, value3.map((value4) => Visit14(schema.items, references, value4))) : Default4(schema, value3);
};
var FromIntersect11 = function(schema, references, value3) {
  if (!IsPlainObject(value3) || IsValueType(value3))
    return Default4(schema, value3);
  const knownKeys = KeyOfPropertyKeys(schema);
  const knownProperties = knownKeys.reduce((value4, key) => {
    return key in value4 ? { ...value4, [key]: Visit14(Index(schema, [key]), references, value4[key]) } : value4;
  }, value3);
  if (!IsTransform(schema.unevaluatedProperties)) {
    return Default4(schema, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const unevaluatedProperties = schema.unevaluatedProperties;
  const unknownProperties = unknownKeys.reduce((value4, key) => {
    return !knownKeys.includes(key) ? { ...value4, [key]: Default4(unevaluatedProperties, value4[key]) } : value4;
  }, knownProperties);
  return Default4(schema, unknownProperties);
};
var FromNot5 = function(schema, references, value3) {
  return Default4(schema, Visit14(schema.not, references, value3));
};
var FromObject9 = function(schema, references, value3) {
  if (!IsPlainObject(value3))
    return Default4(schema, value3);
  const knownKeys = KeyOfPropertyKeys(schema);
  const knownProperties = knownKeys.reduce((value4, key) => {
    return key in value4 ? { ...value4, [key]: Visit14(schema.properties[key], references, value4[key]) } : value4;
  }, value3);
  if (!IsSchema(schema.additionalProperties)) {
    return Default4(schema, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const unknownProperties = unknownKeys.reduce((value4, key) => {
    return !knownKeys.includes(key) ? { ...value4, [key]: Default4(additionalProperties, value4[key]) } : value4;
  }, knownProperties);
  return Default4(schema, unknownProperties);
};
var FromRecord9 = function(schema, references, value3) {
  if (!IsPlainObject(value3))
    return Default4(schema, value3);
  const pattern3 = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const knownKeys = new RegExp(pattern3);
  const knownProperties = Object.getOwnPropertyNames(value3).reduce((value4, key) => {
    return knownKeys.test(key) ? { ...value4, [key]: Visit14(schema.patternProperties[pattern3], references, value4[key]) } : value4;
  }, value3);
  if (!IsSchema(schema.additionalProperties)) {
    return Default4(schema, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const unknownProperties = unknownKeys.reduce((value4, key) => {
    return !knownKeys.test(key) ? { ...value4, [key]: Default4(additionalProperties, value4[key]) } : value4;
  }, knownProperties);
  return Default4(schema, unknownProperties);
};
var FromRef8 = function(schema, references, value3) {
  const target = Deref(schema, references);
  return Default4(schema, Visit14(target, references, value3));
};
var FromThis8 = function(schema, references, value3) {
  const target = Deref(schema, references);
  return Default4(schema, Visit14(target, references, value3));
};
var FromTuple11 = function(schema, references, value3) {
  return IsArray(value3) && IsArray(schema.items) ? Default4(schema, schema.items.map((schema2, index) => Visit14(schema2, references, value3[index]))) : Default4(schema, value3);
};
var FromUnion13 = function(schema, references, value3) {
  for (const subschema of schema.anyOf) {
    if (!Check(subschema, references, value3))
      continue;
    const decoded = Visit14(subschema, references, value3);
    return Default4(schema, decoded);
  }
  return Default4(schema, value3);
};
var Visit14 = function(schema, references, value3) {
  const references_ = typeof schema.$id === "string" ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray11(schema_, references_, value3);
    case "Intersect":
      return FromIntersect11(schema_, references_, value3);
    case "Not":
      return FromNot5(schema_, references_, value3);
    case "Object":
      return FromObject9(schema_, references_, value3);
    case "Record":
      return FromRecord9(schema_, references_, value3);
    case "Ref":
      return FromRef8(schema_, references_, value3);
    case "Symbol":
      return Default4(schema_, value3);
    case "This":
      return FromThis8(schema_, references_, value3);
    case "Tuple":
      return FromTuple11(schema_, references_, value3);
    case "Union":
      return FromUnion13(schema_, references_, value3);
    default:
      return Default4(schema_, value3);
  }
};
function TransformDecode(schema, references, value3) {
  return Visit14(schema, references, value3);
}

class TransformDecodeCheckError extends TypeBoxError {
  schema;
  value;
  error;
  constructor(schema, value3, error19) {
    super(`Unable to decode due to invalid value`);
    this.schema = schema;
    this.value = value3;
    this.error = error19;
  }
}

class TransformDecodeError extends TypeBoxError {
  schema;
  value;
  constructor(schema, value3, error19) {
    super(`${error19 instanceof Error ? error19.message : "Unknown error"}`);
    this.schema = schema;
    this.value = value3;
  }
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/value/transform/encode.mjs
var Default5 = function(schema, value3) {
  try {
    return IsTransform(schema) ? schema[TransformKind].Encode(value3) : value3;
  } catch (error20) {
    throw new TransformEncodeError(schema, value3, error20);
  }
};
var FromArray12 = function(schema, references, value3) {
  const defaulted = Default5(schema, value3);
  return IsArray(defaulted) ? defaulted.map((value4) => Visit15(schema.items, references, value4)) : defaulted;
};
var FromIntersect12 = function(schema, references, value3) {
  const defaulted = Default5(schema, value3);
  if (!IsPlainObject(value3) || IsValueType(value3))
    return defaulted;
  const knownKeys = KeyOfPropertyKeys(schema);
  const knownProperties = knownKeys.reduce((value4, key) => {
    return key in defaulted ? { ...value4, [key]: Visit15(Index(schema, [key]), references, value4[key]) } : value4;
  }, defaulted);
  if (!IsTransform(schema.unevaluatedProperties)) {
    return Default5(schema, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const unevaluatedProperties = schema.unevaluatedProperties;
  return unknownKeys.reduce((value4, key) => {
    return !knownKeys.includes(key) ? { ...value4, [key]: Default5(unevaluatedProperties, value4[key]) } : value4;
  }, knownProperties);
};
var FromNot6 = function(schema, references, value3) {
  return Default5(schema.not, Default5(schema, value3));
};
var FromObject10 = function(schema, references, value3) {
  const defaulted = Default5(schema, value3);
  if (!IsPlainObject(value3))
    return defaulted;
  const knownKeys = KeyOfPropertyKeys(schema);
  const knownProperties = knownKeys.reduce((value4, key) => {
    return key in value4 ? { ...value4, [key]: Visit15(schema.properties[key], references, value4[key]) } : value4;
  }, defaulted);
  if (!IsSchema(schema.additionalProperties)) {
    return knownProperties;
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  return unknownKeys.reduce((value4, key) => {
    return !knownKeys.includes(key) ? { ...value4, [key]: Default5(additionalProperties, value4[key]) } : value4;
  }, knownProperties);
};
var FromRecord10 = function(schema, references, value3) {
  const defaulted = Default5(schema, value3);
  if (!IsPlainObject(value3))
    return defaulted;
  const pattern3 = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const knownKeys = new RegExp(pattern3);
  const knownProperties = Object.getOwnPropertyNames(value3).reduce((value4, key) => {
    return knownKeys.test(key) ? { ...value4, [key]: Visit15(schema.patternProperties[pattern3], references, value4[key]) } : value4;
  }, defaulted);
  if (!IsSchema(schema.additionalProperties)) {
    return Default5(schema, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  return unknownKeys.reduce((value4, key) => {
    return !knownKeys.test(key) ? { ...value4, [key]: Default5(additionalProperties, value4[key]) } : value4;
  }, knownProperties);
};
var FromRef9 = function(schema, references, value3) {
  const target = Deref(schema, references);
  const resolved = Visit15(target, references, value3);
  return Default5(schema, resolved);
};
var FromThis9 = function(schema, references, value3) {
  const target = Deref(schema, references);
  const resolved = Visit15(target, references, value3);
  return Default5(schema, resolved);
};
var FromTuple12 = function(schema, references, value3) {
  const value1 = Default5(schema, value3);
  return IsArray(schema.items) ? schema.items.map((schema2, index) => Visit15(schema2, references, value1[index])) : [];
};
var FromUnion14 = function(schema, references, value3) {
  for (const subschema of schema.anyOf) {
    if (!Check(subschema, references, value3))
      continue;
    const value1 = Visit15(subschema, references, value3);
    return Default5(schema, value1);
  }
  for (const subschema of schema.anyOf) {
    const value1 = Visit15(subschema, references, value3);
    if (!Check(schema, references, value1))
      continue;
    return Default5(schema, value1);
  }
  return Default5(schema, value3);
};
var Visit15 = function(schema, references, value3) {
  const references_ = typeof schema.$id === "string" ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray12(schema_, references_, value3);
    case "Intersect":
      return FromIntersect12(schema_, references_, value3);
    case "Not":
      return FromNot6(schema_, references_, value3);
    case "Object":
      return FromObject10(schema_, references_, value3);
    case "Record":
      return FromRecord10(schema_, references_, value3);
    case "Ref":
      return FromRef9(schema_, references_, value3);
    case "This":
      return FromThis9(schema_, references_, value3);
    case "Tuple":
      return FromTuple12(schema_, references_, value3);
    case "Union":
      return FromUnion14(schema_, references_, value3);
    default:
      return Default5(schema_, value3);
  }
};
function TransformEncode(schema, references, value3) {
  return Visit15(schema, references, value3);
}

class TransformEncodeCheckError extends TypeBoxError {
  schema;
  value;
  error;
  constructor(schema, value3, error20) {
    super(`Unable to encode due to invalid value`);
    this.schema = schema;
    this.value = value3;
    this.error = error20;
  }
}

class TransformEncodeError extends TypeBoxError {
  schema;
  value;
  constructor(schema, value3, error20) {
    super(`${error20 instanceof Error ? error20.message : "Unknown error"}`);
    this.schema = schema;
    this.value = value3;
  }
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/value/transform/has.mjs
var FromArray13 = function(schema, references) {
  return IsTransform(schema) || Visit16(schema.items, references);
};
var FromAsyncIterator5 = function(schema, references) {
  return IsTransform(schema) || Visit16(schema.items, references);
};
var FromConstructor6 = function(schema, references) {
  return IsTransform(schema) || Visit16(schema.returns, references) || schema.parameters.some((schema2) => Visit16(schema2, references));
};
var FromFunction5 = function(schema, references) {
  return IsTransform(schema) || Visit16(schema.returns, references) || schema.parameters.some((schema2) => Visit16(schema2, references));
};
var FromIntersect13 = function(schema, references) {
  return IsTransform(schema) || IsTransform(schema.unevaluatedProperties) || schema.allOf.some((schema2) => Visit16(schema2, references));
};
var FromIterator5 = function(schema, references) {
  return IsTransform(schema) || Visit16(schema.items, references);
};
var FromNot7 = function(schema, references) {
  return IsTransform(schema) || Visit16(schema.not, references);
};
var FromObject11 = function(schema, references) {
  return IsTransform(schema) || Object.values(schema.properties).some((schema2) => Visit16(schema2, references)) || IsSchema(schema.additionalProperties) && Visit16(schema.additionalProperties, references);
};
var FromPromise5 = function(schema, references) {
  return IsTransform(schema) || Visit16(schema.item, references);
};
var FromRecord11 = function(schema, references) {
  const pattern3 = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const property = schema.patternProperties[pattern3];
  return IsTransform(schema) || Visit16(property, references) || IsSchema(schema.additionalProperties) && IsTransform(schema.additionalProperties);
};
var FromRef10 = function(schema, references) {
  if (IsTransform(schema))
    return true;
  return Visit16(Deref(schema, references), references);
};
var FromThis10 = function(schema, references) {
  if (IsTransform(schema))
    return true;
  return Visit16(Deref(schema, references), references);
};
var FromTuple13 = function(schema, references) {
  return IsTransform(schema) || !IsUndefined(schema.items) && schema.items.some((schema2) => Visit16(schema2, references));
};
var FromUnion15 = function(schema, references) {
  return IsTransform(schema) || schema.anyOf.some((schema2) => Visit16(schema2, references));
};
var Visit16 = function(schema, references) {
  const references_ = IsString(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  if (schema.$id && visited.has(schema.$id))
    return false;
  if (schema.$id)
    visited.add(schema.$id);
  switch (schema[Kind]) {
    case "Array":
      return FromArray13(schema_, references_);
    case "AsyncIterator":
      return FromAsyncIterator5(schema_, references_);
    case "Constructor":
      return FromConstructor6(schema_, references_);
    case "Function":
      return FromFunction5(schema_, references_);
    case "Intersect":
      return FromIntersect13(schema_, references_);
    case "Iterator":
      return FromIterator5(schema_, references_);
    case "Not":
      return FromNot7(schema_, references_);
    case "Object":
      return FromObject11(schema_, references_);
    case "Promise":
      return FromPromise5(schema_, references_);
    case "Record":
      return FromRecord11(schema_, references_);
    case "Ref":
      return FromRef10(schema_, references_);
    case "This":
      return FromThis10(schema_, references_);
    case "Tuple":
      return FromTuple13(schema_, references_);
    case "Union":
      return FromUnion15(schema_, references_);
    default:
      return IsTransform(schema);
  }
};
function HasTransform(schema, references) {
  visited.clear();
  return Visit16(schema, references);
}
var visited = new Set;
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/value/value/value.mjs
var exports_value2 = {};
__export(exports_value2, {
  Patch: () => {
    {
      return Patch2;
    }
  },
  Mutate: () => {
    {
      return Mutate2;
    }
  },
  Hash: () => {
    {
      return Hash2;
    }
  },
  Errors: () => {
    {
      return Errors2;
    }
  },
  Equal: () => {
    {
      return Equal2;
    }
  },
  Encode: () => {
    {
      return Encode;
    }
  },
  Diff: () => {
    {
      return Diff2;
    }
  },
  Default: () => {
    {
      return Default6;
    }
  },
  Decode: () => {
    {
      return Decode;
    }
  },
  Create: () => {
    {
      return Create3;
    }
  },
  Convert: () => {
    {
      return Convert2;
    }
  },
  Clone: () => {
    {
      return Clone3;
    }
  },
  Clean: () => {
    {
      return Clean2;
    }
  },
  Check: () => {
    {
      return Check2;
    }
  },
  Cast: () => {
    {
      return Cast2;
    }
  }
});
function Cast2(...args) {
  return Cast.apply(Cast, args);
}
function Create3(...args) {
  return Create2.apply(Create2, args);
}
function Check2(...args) {
  return Check.apply(Check, args);
}
function Clean2(...args) {
  return Clean.apply(Clean, args);
}
function Convert2(...args) {
  return Convert.apply(Convert, args);
}
function Clone3(value3) {
  return Clone2(value3);
}
function Decode(...args) {
  const [schema, references, value3] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
  if (!Check2(schema, references, value3))
    throw new TransformDecodeCheckError(schema, value3, Errors2(schema, references, value3).First());
  return TransformDecode(schema, references, value3);
}
function Default6(...args) {
  return Default3.apply(Default3, args);
}
function Encode(...args) {
  const [schema, references, value3] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
  const encoded = TransformEncode(schema, references, value3);
  if (!Check2(schema, references, encoded))
    throw new TransformEncodeCheckError(schema, value3, Errors2(schema, references, value3).First());
  return encoded;
}
function Errors2(...args) {
  return Errors.apply(Errors, args);
}
function Equal2(left, right) {
  return Equal(left, right);
}
function Diff2(current, next) {
  return Diff(current, next);
}
function Hash2(value3) {
  return Hash(value3);
}
function Patch2(current, edits) {
  return Patch(current, edits);
}
function Mutate2(current, next) {
  Mutate(current, next);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/awaited/awaited.mjs
var FromRest4 = function(T) {
  return T.map((L) => AwaitedResolve(L));
};
var FromIntersect14 = function(T) {
  return Intersect(FromRest4(T));
};
var FromUnion16 = function(T) {
  return Union(FromRest4(T));
};
var FromPromise6 = function(T) {
  return AwaitedResolve(T);
};
var AwaitedResolve = function(T) {
  return IsIntersect(T) ? FromIntersect14(T.allOf) : IsUnion(T) ? FromUnion16(T.anyOf) : IsPromise2(T) ? FromPromise6(T.item) : T;
};
function Awaited(T, options = {}) {
  return CloneType(AwaitedResolve(T), options);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/date/date.mjs
function Date2(options = {}) {
  return {
    ...options,
    [Kind]: "Date",
    type: "Date"
  };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/null/null.mjs
function Null(options = {}) {
  return {
    ...options,
    [Kind]: "Null",
    type: "null"
  };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/symbol/symbol.mjs
function Symbol2(options) {
  return { ...options, [Kind]: "Symbol", type: "symbol" };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/undefined/undefined.mjs
function Undefined(options = {}) {
  return { ...options, [Kind]: "Undefined", type: "undefined" };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/uint8array/uint8array.mjs
function Uint8Array2(options = {}) {
  return { ...options, [Kind]: "Uint8Array", type: "Uint8Array" };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/const/const.mjs
var FromArray14 = function(T) {
  return T.map((L) => FromValue(L, false));
};
var FromProperties8 = function(value5) {
  return globalThis.Object.getOwnPropertyNames(value5).reduce((acc, key) => {
    return { ...acc, [key]: Readonly(FromValue(value5[key], false)) };
  }, {});
};
var ConditionalReadonly = function(T, root) {
  return root === true ? T : Readonly(T);
};
var FromValue = function(value5, root) {
  return IsAsyncIterator2(value5) ? ConditionalReadonly(Any(), root) : IsIterator2(value5) ? ConditionalReadonly(Any(), root) : IsArray2(value5) ? Readonly(Tuple(FromArray14(value5))) : IsUint8Array2(value5) ? Uint8Array2() : IsDate2(value5) ? Date2() : IsObject2(value5) ? ConditionalReadonly(Object2(FromProperties8(value5)), root) : IsFunction2(value5) ? ConditionalReadonly(Function2([], Unknown()), root) : IsUndefined2(value5) ? Undefined() : IsNull2(value5) ? Null() : IsSymbol2(value5) ? Symbol2() : IsBigInt2(value5) ? BigInt2() : IsNumber2(value5) ? Literal(value5) : IsBoolean2(value5) ? Literal(value5) : IsString2(value5) ? Literal(value5) : Object2({});
};
function Const(T, options = {}) {
  return CloneType(FromValue(T, true), options);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/constructor-parameters/constructor-parameters.mjs
function ConstructorParameters(schema, options = {}) {
  return Tuple(CloneRest(schema.parameters), { ...options });
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/deref/deref.mjs
var FromRest5 = function(schema, references) {
  return schema.map((schema2) => Deref2(schema2, references));
};
var FromProperties9 = function(properties, references) {
  return globalThis.Object.getOwnPropertyNames(properties).reduce((acc, key) => {
    return { ...acc, [key]: Deref2(properties[key], references) };
  }, {});
};
var FromConstructor7 = function(schema, references) {
  schema.parameters = FromRest5(schema.parameters, references);
  schema.returns = Deref2(schema.returns, references);
  return schema;
};
var FromFunction6 = function(schema, references) {
  schema.parameters = FromRest5(schema.parameters, references);
  schema.returns = Deref2(schema.returns, references);
  return schema;
};
var FromIntersect15 = function(schema, references) {
  schema.allOf = FromRest5(schema.allOf, references);
  return schema;
};
var FromUnion17 = function(schema, references) {
  schema.anyOf = FromRest5(schema.anyOf, references);
  return schema;
};
var FromTuple14 = function(schema, references) {
  if (IsUndefined2(schema.items))
    return schema;
  schema.items = FromRest5(schema.items, references);
  return schema;
};
var FromArray15 = function(schema, references) {
  schema.items = Deref2(schema.items, references);
  return schema;
};
var FromObject12 = function(schema, references) {
  schema.properties = FromProperties9(schema.properties, references);
  return schema;
};
var FromPromise7 = function(schema, references) {
  schema.item = Deref2(schema.item, references);
  return schema;
};
var FromAsyncIterator6 = function(schema, references) {
  schema.items = Deref2(schema.items, references);
  return schema;
};
var FromIterator6 = function(schema, references) {
  schema.items = Deref2(schema.items, references);
  return schema;
};
var FromRef11 = function(schema, references) {
  const target = references.find((remote) => remote.$id === schema.$ref);
  if (target === undefined)
    throw Error(`Unable to dereference schema with \$id ${schema.$ref}`);
  const discard8 = Discard(target, ["$id"]);
  return Deref2(discard8, references);
};
var DerefResolve = function(schema, references) {
  return IsConstructor(schema) ? FromConstructor7(schema, references) : IsFunction3(schema) ? FromFunction6(schema, references) : IsIntersect(schema) ? FromIntersect15(schema, references) : IsUnion(schema) ? FromUnion17(schema, references) : IsTuple(schema) ? FromTuple14(schema, references) : IsArray3(schema) ? FromArray15(schema, references) : IsObject3(schema) ? FromObject12(schema, references) : IsPromise2(schema) ? FromPromise7(schema, references) : IsAsyncIterator3(schema) ? FromAsyncIterator6(schema, references) : IsIterator3(schema) ? FromIterator6(schema, references) : IsRef(schema) ? FromRef11(schema, references) : schema;
};
function Deref2(schema, references) {
  return DerefResolve(CloneType(schema), CloneRest(references));
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/enum/enum.mjs
function Enum(item, options = {}) {
  if (IsUndefined2(item))
    throw new Error("Enum undefined or empty");
  const values1 = globalThis.Object.getOwnPropertyNames(item).filter((key) => isNaN(key)).map((key) => item[key]);
  const values2 = [...new Set(values1)];
  const anyOf = values2.map((value7) => Literal(value7));
  return Union(anyOf, { ...options, [Hint]: "Enum" });
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/exclude/exclude-from-template-literal.mjs
function ExcludeFromTemplateLiteral(L, R) {
  return Exclude(TemplateLiteralToUnion(L), R);
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/exclude/exclude.mjs
var ExcludeRest = function(L, R) {
  const excluded = L.filter((inner) => ExtendsCheck(inner, R) === ExtendsResult.False);
  return excluded.length === 1 ? excluded[0] : Union(excluded);
};
function Exclude(L, R, options = {}) {
  if (IsTemplateLiteral(L))
    return CloneType(ExcludeFromTemplateLiteral(L, R), options);
  if (IsMappedResult(L))
    return CloneType(ExcludeFromMappedResult(L, R), options);
  return CloneType(IsUnion(L) ? ExcludeRest(L.anyOf, R) : ExtendsCheck(L, R) !== ExtendsResult.False ? Never() : L, options);
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/exclude/exclude-from-mapped-result.mjs
var FromProperties10 = function(P, U) {
  return globalThis.Object.getOwnPropertyNames(P).reduce((Acc, K2) => {
    return { ...Acc, [K2]: Exclude(P[K2], U) };
  }, {});
};
var FromMappedResult7 = function(R, T) {
  return FromProperties10(R.properties, T);
};
function ExcludeFromMappedResult(R, T) {
  const P = FromMappedResult7(R, T);
  return MappedResult(P);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/extract/extract-from-template-literal.mjs
function ExtractFromTemplateLiteral(L, R) {
  return Extract(TemplateLiteralToUnion(L), R);
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/extract/extract.mjs
var ExtractRest = function(L, R) {
  const extracted = L.filter((inner) => ExtendsCheck(inner, R) !== ExtendsResult.False);
  return extracted.length === 1 ? extracted[0] : Union(extracted);
};
function Extract(L, R, options = {}) {
  if (IsTemplateLiteral(L))
    return CloneType(ExtractFromTemplateLiteral(L, R), options);
  if (IsMappedResult(L))
    return CloneType(ExtractFromMappedResult(L, R), options);
  return CloneType(IsUnion(L) ? ExtractRest(L.anyOf, R) : ExtendsCheck(L, R) !== ExtendsResult.False ? L : Never(), options);
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/extract/extract-from-mapped-result.mjs
var FromProperties11 = function(P, T) {
  return globalThis.Object.getOwnPropertyNames(P).reduce((Acc, K2) => {
    return { ...Acc, [K2]: Extract(P[K2], T) };
  }, {});
};
var FromMappedResult8 = function(R, T) {
  return FromProperties11(R.properties, T);
};
function ExtractFromMappedResult(R, T) {
  const P = FromMappedResult8(R, T);
  return MappedResult(P);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/instance-type/instance-type.mjs
function InstanceType(schema, options = {}) {
  return CloneType(schema.returns, options);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/integer/integer.mjs
function Integer(options = {}) {
  return {
    ...options,
    [Kind]: "Integer",
    type: "integer"
  };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/intrinsic/intrinsic-from-mapped-key.mjs
var MappedIntrinsicPropertyKey = function(K, M, options) {
  return {
    [K]: Intrinsic(Literal(K), M, options)
  };
};
var MappedIntrinsicPropertyKeys = function(K, M, options) {
  return K.reduce((Acc, L) => {
    return { ...Acc, ...MappedIntrinsicPropertyKey(L, M, options) };
  }, {});
};
var MappedIntrinsicProperties = function(T, M, options) {
  return MappedIntrinsicPropertyKeys(T["keys"], M, options);
};
function IntrinsicFromMappedKey(T, M, options) {
  const P = MappedIntrinsicProperties(T, M, options);
  return MappedResult(P);
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/intrinsic/intrinsic.mjs
var ApplyUncapitalize = function(value7) {
  const [first, rest] = [value7.slice(0, 1), value7.slice(1)];
  return [first.toLowerCase(), rest].join("");
};
var ApplyCapitalize = function(value7) {
  const [first, rest] = [value7.slice(0, 1), value7.slice(1)];
  return [first.toUpperCase(), rest].join("");
};
var ApplyUppercase = function(value7) {
  return value7.toUpperCase();
};
var ApplyLowercase = function(value7) {
  return value7.toLowerCase();
};
var FromTemplateLiteral6 = function(schema, mode, options) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  const finite3 = IsTemplateLiteralExpressionFinite(expression);
  if (!finite3)
    return { ...schema, pattern: FromLiteralValue(schema.pattern, mode) };
  const strings = [...TemplateLiteralExpressionGenerate(expression)];
  const literals = strings.map((value7) => Literal(value7));
  const mapped12 = FromRest6(literals, mode);
  const union15 = Union(mapped12);
  return TemplateLiteral([union15], options);
};
var FromLiteralValue = function(value7, mode) {
  return typeof value7 === "string" ? mode === "Uncapitalize" ? ApplyUncapitalize(value7) : mode === "Capitalize" ? ApplyCapitalize(value7) : mode === "Uppercase" ? ApplyUppercase(value7) : mode === "Lowercase" ? ApplyLowercase(value7) : value7 : value7.toString();
};
var FromRest6 = function(T, M) {
  return T.map((L) => Intrinsic(L, M));
};
function Intrinsic(schema, mode, options = {}) {
  return IsMappedKey(schema) ? IntrinsicFromMappedKey(schema, mode, options) : IsTemplateLiteral(schema) ? FromTemplateLiteral6(schema, mode, schema) : IsUnion(schema) ? Union(FromRest6(schema.anyOf, mode), options) : IsLiteral(schema) ? Literal(FromLiteralValue(schema.const, mode), options) : schema;
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/intrinsic/capitalize.mjs
function Capitalize(T, options = {}) {
  return Intrinsic(T, "Capitalize", options);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/intrinsic/lowercase.mjs
function Lowercase(T, options = {}) {
  return Intrinsic(T, "Lowercase", options);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/intrinsic/uncapitalize.mjs
function Uncapitalize(T, options = {}) {
  return Intrinsic(T, "Uncapitalize", options);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/intrinsic/uppercase.mjs
function Uppercase(T, options = {}) {
  return Intrinsic(T, "Uppercase", options);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/not/not.mjs
function Not2(schema, options) {
  return {
    ...options,
    [Kind]: "Not",
    not: CloneType(schema)
  };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/omit/omit-from-mapped-result.mjs
var FromProperties12 = function(P, K, options) {
  return globalThis.Object.getOwnPropertyNames(P).reduce((Acc, K2) => {
    return { ...Acc, [K2]: Omit(P[K2], K, options) };
  }, {});
};
var FromMappedResult9 = function(R, K, options) {
  return FromProperties12(R.properties, K, options);
};
function OmitFromMappedResult(R, K, options) {
  const P = FromMappedResult9(R, K, options);
  return MappedResult(P);
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/omit/omit.mjs
var FromIntersect16 = function(T, K) {
  return T.map((T2) => OmitResolve(T2, K));
};
var FromUnion18 = function(T, K) {
  return T.map((T2) => OmitResolve(T2, K));
};
var FromProperty2 = function(T, K) {
  const { [K]: _, ...R } = T;
  return R;
};
var FromProperties13 = function(T, K) {
  return K.reduce((T2, K2) => {
    return FromProperty2(T2, K2);
  }, T);
};
var OmitResolve = function(T, K) {
  return IsIntersect(T) ? Intersect(FromIntersect16(T.allOf, K)) : IsUnion(T) ? Union(FromUnion18(T.anyOf, K)) : IsObject3(T) ? Object2(FromProperties13(T.properties, K)) : Object2({});
};
function Omit(T, K, options = {}) {
  if (IsMappedKey(K))
    return OmitFromMappedKey(T, K, options);
  if (IsMappedResult(T))
    return OmitFromMappedResult(T, K, options);
  const I = IsSchema(K) ? IndexPropertyKeys(K) : K;
  const D = Discard(T, [TransformKind, "$id", "required"]);
  const R = CloneType(OmitResolve(T, I), options);
  return { ...D, ...R };
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/omit/omit-from-mapped-key.mjs
var FromPropertyKey2 = function(T, K, options) {
  return {
    [K]: Omit(T, [K], options)
  };
};
var FromPropertyKeys2 = function(T, K, options) {
  return K.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey2(T, LK, options) };
  }, {});
};
var FromMappedKey3 = function(T, K, options) {
  return FromPropertyKeys2(T, K.keys, options);
};
function OmitFromMappedKey(T, K, options) {
  const P = FromMappedKey3(T, K, options);
  return MappedResult(P);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/parameters/parameters.mjs
function Parameters(schema, options = {}) {
  return Tuple(CloneRest(schema.parameters), { ...options });
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/partial/partial.mjs
var FromRest7 = function(T) {
  return T.map((L) => PartialResolve(L));
};
var FromProperties14 = function(T) {
  return globalThis.Object.getOwnPropertyNames(T).reduce((Acc, K) => {
    return { ...Acc, [K]: Optional(T[K]) };
  }, {});
};
var PartialResolve = function(T) {
  return IsIntersect(T) ? Intersect(FromRest7(T.allOf)) : IsUnion(T) ? Union(FromRest7(T.anyOf)) : IsObject3(T) ? Object2(FromProperties14(T.properties)) : Object2({});
};
function Partial(T, options = {}) {
  if (IsMappedResult(T))
    return PartialFromMappedResult(T, options);
  const D = Discard(T, [TransformKind, "$id", "required"]);
  const R = CloneType(PartialResolve(T), options);
  return { ...D, ...R };
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/partial/partial-from-mapped-result.mjs
var FromProperties15 = function(K, options) {
  return globalThis.Object.getOwnPropertyNames(K).reduce((Acc, K2) => {
    return { ...Acc, [K2]: Partial(K[K2], options) };
  }, {});
};
var FromMappedResult10 = function(R, options) {
  return FromProperties15(R.properties, options);
};
function PartialFromMappedResult(R, options) {
  const P = FromMappedResult10(R, options);
  return MappedResult(P);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/pick/pick-from-mapped-result.mjs
var FromProperties16 = function(P, K, options) {
  return globalThis.Object.getOwnPropertyNames(P).reduce((Acc, K2) => {
    return { ...Acc, [K2]: Pick(P[K2], K, options) };
  }, {});
};
var FromMappedResult11 = function(R, K, options) {
  return FromProperties16(R.properties, K, options);
};
function PickFromMappedResult(R, K, options) {
  const P = FromMappedResult11(R, K, options);
  return MappedResult(P);
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/pick/pick.mjs
var FromIntersect17 = function(T, K) {
  return T.map((T2) => PickResolve(T2, K));
};
var FromUnion19 = function(T, K) {
  return T.map((T2) => PickResolve(T2, K));
};
var FromProperties17 = function(T, K) {
  return K.reduce((Acc, K2) => {
    return K2 in T ? { ...Acc, [K2]: T[K2] } : Acc;
  }, {});
};
var PickResolve = function(T, K) {
  return IsIntersect(T) ? Intersect(FromIntersect17(T.allOf, K)) : IsUnion(T) ? Union(FromUnion19(T.anyOf, K)) : IsObject3(T) ? Object2(FromProperties17(T.properties, K)) : Object2({});
};
function Pick(T, K, options = {}) {
  if (IsMappedKey(K))
    return PickFromMappedKey(T, K, options);
  if (IsMappedResult(T))
    return PickFromMappedResult(T, K, options);
  const I = IsSchema(K) ? IndexPropertyKeys(K) : K;
  const D = Discard(T, [TransformKind, "$id", "required"]);
  const R = CloneType(PickResolve(T, I), options);
  return { ...D, ...R };
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/pick/pick-from-mapped-key.mjs
var FromPropertyKey3 = function(T, K, options) {
  return {
    [K]: Pick(T, [K], options)
  };
};
var FromPropertyKeys3 = function(T, K, options) {
  return K.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey3(T, LK, options) };
  }, {});
};
var FromMappedKey4 = function(T, K, options) {
  return FromPropertyKeys3(T, K.keys, options);
};
function PickFromMappedKey(T, K, options) {
  const P = FromMappedKey4(T, K, options);
  return MappedResult(P);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/readonly-optional/readonly-optional.mjs
function ReadonlyOptional(schema) {
  return Readonly(Optional(schema));
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/record/record.mjs
var RecordCreateFromPattern = function(pattern3, T, options) {
  return {
    ...options,
    [Kind]: "Record",
    type: "object",
    patternProperties: { [pattern3]: CloneType(T) }
  };
};
var RecordCreateFromKeys = function(K, T, options) {
  const P = K.reduce((Acc, K2) => ({ ...Acc, [K2]: CloneType(T) }), {});
  return Object2(P, { ...options, [Hint]: "Record" });
};
var FromTemplateLiteralKey = function(K, T, options) {
  return IsTemplateLiteralFinite(K) ? RecordCreateFromKeys(IndexPropertyKeys(K), T, options) : RecordCreateFromPattern(K.pattern, T, options);
};
var FromUnionKey = function(K, T, options) {
  return RecordCreateFromKeys(IndexPropertyKeys(Union(K)), T, options);
};
var FromLiteralKey = function(K, T, options) {
  return RecordCreateFromKeys([K.toString()], T, options);
};
var FromRegExpKey = function(K, T, options) {
  return RecordCreateFromPattern(K.source, T, options);
};
var FromStringKey = function(K, T, options) {
  const pattern3 = IsUndefined2(K.pattern) ? PatternStringExact : K.pattern;
  return RecordCreateFromPattern(pattern3, T, options);
};
var FromIntegerKey = function(_, T, options) {
  return RecordCreateFromPattern(PatternNumberExact, T, options);
};
var FromNumberKey = function(_, T, options) {
  return RecordCreateFromPattern(PatternNumberExact, T, options);
};
function Record(K, T, options = {}) {
  return IsUnion(K) ? FromUnionKey(K.anyOf, T, options) : IsTemplateLiteral(K) ? FromTemplateLiteralKey(K, T, options) : IsLiteral(K) ? FromLiteralKey(K.const, T, options) : IsInteger2(K) ? FromIntegerKey(K, T, options) : IsNumber3(K) ? FromNumberKey(K, T, options) : IsRegExp2(K) ? FromRegExpKey(K, T, options) : IsString3(K) ? FromStringKey(K, T, options) : Never(options);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/recursive/recursive.mjs
function Recursive(callback, options = {}) {
  if (IsUndefined2(options.$id))
    options.$id = `T${Ordinal++}`;
  const thisType = callback({ [Kind]: "This", $ref: `${options.$id}` });
  thisType.$id = options.$id;
  return CloneType({ ...options, [Hint]: "Recursive", ...thisType });
}
var Ordinal = 0;
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/ref/ref.mjs
function Ref(unresolved, options = {}) {
  if (IsString2(unresolved))
    return { ...options, [Kind]: "Ref", $ref: unresolved };
  if (IsUndefined2(unresolved.$id))
    throw new Error("Reference target type must specify an $id");
  return {
    ...options,
    [Kind]: "Ref",
    $ref: unresolved.$id
  };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/regexp/regexp.mjs
function RegExp2(unresolved, options = {}) {
  const expr = IsString2(unresolved) ? new globalThis.RegExp(unresolved) : unresolved;
  return { ...options, [Kind]: "RegExp", type: "RegExp", source: expr.source, flags: expr.flags };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/required/required.mjs
var FromRest8 = function(T) {
  return T.map((L) => RequiredResolve(L));
};
var FromProperties18 = function(T) {
  return globalThis.Object.getOwnPropertyNames(T).reduce((Acc, K) => {
    return { ...Acc, [K]: Discard(T[K], [OptionalKind]) };
  }, {});
};
var RequiredResolve = function(T) {
  return IsIntersect(T) ? Intersect(FromRest8(T.allOf)) : IsUnion(T) ? Union(FromRest8(T.anyOf)) : IsObject3(T) ? Object2(FromProperties18(T.properties)) : Object2({});
};
function Required(T, options = {}) {
  if (IsMappedResult(T)) {
    return RequiredFromMappedResult(T, options);
  } else {
    const D = Discard(T, [TransformKind, "$id", "required"]);
    const R = CloneType(RequiredResolve(T), options);
    return { ...D, ...R };
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/required/required-from-mapped-result.mjs
var FromProperties19 = function(P, options) {
  return globalThis.Object.getOwnPropertyNames(P).reduce((Acc, K2) => {
    return { ...Acc, [K2]: Required(P[K2], options) };
  }, {});
};
var FromMappedResult12 = function(R, options) {
  return FromProperties19(R.properties, options);
};
function RequiredFromMappedResult(R, options) {
  const P = FromMappedResult12(R, options);
  return MappedResult(P);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/rest/rest.mjs
var RestResolve = function(T) {
  return IsIntersect(T) ? [...T.allOf] : IsUnion(T) ? [...T.anyOf] : IsTuple(T) ? [...T.items ?? []] : [];
};
function Rest(T) {
  return CloneRest(RestResolve(T));
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/return-type/return-type.mjs
function ReturnType(schema, options = {}) {
  return CloneType(schema.returns, options);
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/strict/strict.mjs
function Strict(schema2) {
  return JSON.parse(JSON.stringify(schema2));
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/transform/transform.mjs
function Transform(schema2) {
  return new TransformDecodeBuilder(schema2);
}

class TransformDecodeBuilder {
  schema;
  constructor(schema2) {
    this.schema = schema2;
  }
  Decode(decode2) {
    return new TransformEncodeBuilder(this.schema, decode2);
  }
}

class TransformEncodeBuilder {
  schema;
  decode;
  constructor(schema2, decode2) {
    this.schema = schema2;
    this.decode = decode2;
  }
  EncodeTransform(encode2, schema2) {
    const Encode2 = (value11) => schema2[TransformKind].Encode(encode2(value11));
    const Decode2 = (value11) => this.decode(schema2[TransformKind].Decode(value11));
    const Codec = { Encode: Encode2, Decode: Decode2 };
    return { ...schema2, [TransformKind]: Codec };
  }
  EncodeSchema(encode2, schema2) {
    const Codec = { Decode: this.decode, Encode: encode2 };
    return { ...schema2, [TransformKind]: Codec };
  }
  Encode(encode2) {
    const schema2 = CloneType(this.schema);
    return IsTransform(schema2) ? this.EncodeTransform(encode2, schema2) : this.EncodeSchema(encode2, schema2);
  }
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/void/void.mjs
function Void(options = {}) {
  return {
    ...options,
    [Kind]: "Void",
    type: "void"
  };
}
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/type/type.mjs
var exports_type3 = {};
__export(exports_type3, {
  Void: () => {
    {
      return Void;
    }
  },
  Uppercase: () => {
    {
      return Uppercase;
    }
  },
  Unsafe: () => {
    {
      return Unsafe;
    }
  },
  Unknown: () => {
    {
      return Unknown;
    }
  },
  Union: () => {
    {
      return Union;
    }
  },
  Undefined: () => {
    {
      return Undefined;
    }
  },
  Uncapitalize: () => {
    {
      return Uncapitalize;
    }
  },
  Uint8Array: () => {
    {
      return Uint8Array2;
    }
  },
  Tuple: () => {
    {
      return Tuple;
    }
  },
  Transform: () => {
    {
      return Transform;
    }
  },
  TemplateLiteral: () => {
    {
      return TemplateLiteral;
    }
  },
  Symbol: () => {
    {
      return Symbol2;
    }
  },
  String: () => {
    {
      return String2;
    }
  },
  Strict: () => {
    {
      return Strict;
    }
  },
  ReturnType: () => {
    {
      return ReturnType;
    }
  },
  Rest: () => {
    {
      return Rest;
    }
  },
  Required: () => {
    {
      return Required;
    }
  },
  RegExp: () => {
    {
      return RegExp2;
    }
  },
  Ref: () => {
    {
      return Ref;
    }
  },
  Recursive: () => {
    {
      return Recursive;
    }
  },
  Record: () => {
    {
      return Record;
    }
  },
  ReadonlyOptional: () => {
    {
      return ReadonlyOptional;
    }
  },
  Readonly: () => {
    {
      return Readonly;
    }
  },
  Promise: () => {
    {
      return Promise2;
    }
  },
  Pick: () => {
    {
      return Pick;
    }
  },
  Partial: () => {
    {
      return Partial;
    }
  },
  Parameters: () => {
    {
      return Parameters;
    }
  },
  Optional: () => {
    {
      return Optional;
    }
  },
  Omit: () => {
    {
      return Omit;
    }
  },
  Object: () => {
    {
      return Object2;
    }
  },
  Number: () => {
    {
      return Number2;
    }
  },
  Null: () => {
    {
      return Null;
    }
  },
  Not: () => {
    {
      return Not2;
    }
  },
  Never: () => {
    {
      return Never;
    }
  },
  Mapped: () => {
    {
      return Mapped;
    }
  },
  Lowercase: () => {
    {
      return Lowercase;
    }
  },
  Literal: () => {
    {
      return Literal;
    }
  },
  KeyOf: () => {
    {
      return KeyOf;
    }
  },
  Iterator: () => {
    {
      return Iterator;
    }
  },
  Intersect: () => {
    {
      return Intersect;
    }
  },
  Integer: () => {
    {
      return Integer;
    }
  },
  InstanceType: () => {
    {
      return InstanceType;
    }
  },
  Index: () => {
    {
      return Index;
    }
  },
  Function: () => {
    {
      return Function2;
    }
  },
  Extract: () => {
    {
      return Extract;
    }
  },
  Extends: () => {
    {
      return Extends;
    }
  },
  Exclude: () => {
    {
      return Exclude;
    }
  },
  Enum: () => {
    {
      return Enum;
    }
  },
  Deref: () => {
    {
      return Deref2;
    }
  },
  Date: () => {
    {
      return Date2;
    }
  },
  ConstructorParameters: () => {
    {
      return ConstructorParameters;
    }
  },
  Constructor: () => {
    {
      return Constructor;
    }
  },
  Const: () => {
    {
      return Const;
    }
  },
  Composite: () => {
    {
      return Composite;
    }
  },
  Capitalize: () => {
    {
      return Capitalize;
    }
  },
  Boolean: () => {
    {
      return Boolean2;
    }
  },
  BigInt: () => {
    {
      return BigInt2;
    }
  },
  Awaited: () => {
    {
      return Awaited;
    }
  },
  AsyncIterator: () => {
    {
      return AsyncIterator;
    }
  },
  Array: () => {
    {
      return Array2;
    }
  },
  Any: () => {
    {
      return Any;
    }
  }
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/type/type/index.mjs
var Type = exports_type3;
// /home/ellie/github/student_scheduler/node_modules/.pnpm/@sinclair+typebox@0.32.14/node_modules/@sinclair/typebox/build/import/compiler/compiler.mjs
class TypeCheck {
  schema;
  references;
  checkFunc;
  code;
  hasTransform;
  constructor(schema3, references, checkFunc, code) {
    this.schema = schema3;
    this.references = references;
    this.checkFunc = checkFunc;
    this.code = code;
    this.hasTransform = HasTransform(schema3, references);
  }
  Code() {
    return this.code;
  }
  Errors(value11) {
    return Errors(this.schema, this.references, value11);
  }
  Check(value11) {
    return this.checkFunc(value11);
  }
  Decode(value11) {
    if (!this.checkFunc(value11))
      throw new TransformDecodeCheckError(this.schema, value11, this.Errors(value11).First());
    return this.hasTransform ? TransformDecode(this.schema, this.references, value11) : value11;
  }
  Encode(value11) {
    const encoded = this.hasTransform ? TransformEncode(this.schema, this.references, value11) : value11;
    if (!this.checkFunc(encoded))
      throw new TransformEncodeCheckError(this.schema, value11, this.Errors(value11).First());
    return encoded;
  }
}
var Character;
(function(Character2) {
  function DollarSign(code) {
    return code === 36;
  }
  Character2.DollarSign = DollarSign;
  function IsUnderscore(code) {
    return code === 95;
  }
  Character2.IsUnderscore = IsUnderscore;
  function IsAlpha(code) {
    return code >= 65 && code <= 90 || code >= 97 && code <= 122;
  }
  Character2.IsAlpha = IsAlpha;
  function IsNumeric(code) {
    return code >= 48 && code <= 57;
  }
  Character2.IsNumeric = IsNumeric;
})(Character || (Character = {}));
var MemberExpression;
(function(MemberExpression2) {
  function IsFirstCharacterNumeric(value11) {
    if (value11.length === 0)
      return false;
    return Character.IsNumeric(value11.charCodeAt(0));
  }
  function IsAccessor(value11) {
    if (IsFirstCharacterNumeric(value11))
      return false;
    for (let i = 0;i < value11.length; i++) {
      const code = value11.charCodeAt(i);
      const check10 = Character.IsAlpha(code) || Character.IsNumeric(code) || Character.DollarSign(code) || Character.IsUnderscore(code);
      if (!check10)
        return false;
    }
    return true;
  }
  function EscapeHyphen(key) {
    return key.replace(/'/g, "\\'");
  }
  function Encode2(object13, key) {
    return IsAccessor(key) ? `${object13}.${key}` : `${object13}['${EscapeHyphen(key)}']`;
  }
  MemberExpression2.Encode = Encode2;
})(MemberExpression || (MemberExpression = {}));
var Identifier;
(function(Identifier2) {
  function Encode2($id) {
    const buffer = [];
    for (let i = 0;i < $id.length; i++) {
      const code = $id.charCodeAt(i);
      if (Character.IsNumeric(code) || Character.IsAlpha(code)) {
        buffer.push($id.charAt(i));
      } else {
        buffer.push(`_${code}_`);
      }
    }
    return buffer.join("").replace(/__/g, "_");
  }
  Identifier2.Encode = Encode2;
})(Identifier || (Identifier = {}));
var LiteralString;
(function(LiteralString2) {
  function Escape3(content) {
    return content.replace(/'/g, "\\'");
  }
  LiteralString2.Escape = Escape3;
})(LiteralString || (LiteralString = {}));

class TypeCompilerUnknownTypeError extends TypeBoxError {
  schema;
  constructor(schema3) {
    super("Unknown type");
    this.schema = schema3;
  }
}

class TypeCompilerTypeGuardError extends TypeBoxError {
  schema;
  constructor(schema3) {
    super("Preflight validation check failed to guard for the given schema");
    this.schema = schema3;
  }
}
var Policy;
(function(Policy2) {
  function IsExactOptionalProperty(value11, key, expression) {
    return TypeSystemPolicy.ExactOptionalPropertyTypes ? `('${key}' in ${value11} ? ${expression} : true)` : `(${MemberExpression.Encode(value11, key)} !== undefined ? ${expression} : true)`;
  }
  Policy2.IsExactOptionalProperty = IsExactOptionalProperty;
  function IsObjectLike(value11) {
    return !TypeSystemPolicy.AllowArrayObject ? `(typeof ${value11} === 'object' && ${value11} !== null && !Array.isArray(${value11}))` : `(typeof ${value11} === 'object' && ${value11} !== null)`;
  }
  Policy2.IsObjectLike = IsObjectLike;
  function IsRecordLike(value11) {
    return !TypeSystemPolicy.AllowArrayObject ? `(typeof ${value11} === 'object' && ${value11} !== null && !Array.isArray(${value11}) && !(${value11} instanceof Date) && !(${value11} instanceof Uint8Array))` : `(typeof ${value11} === 'object' && ${value11} !== null && !(${value11} instanceof Date) && !(${value11} instanceof Uint8Array))`;
  }
  Policy2.IsRecordLike = IsRecordLike;
  function IsNumberLike(value11) {
    return !TypeSystemPolicy.AllowNaN ? `(typeof ${value11} === 'number' && Number.isFinite(${value11}))` : `typeof ${value11} === 'number'`;
  }
  Policy2.IsNumberLike = IsNumberLike;
  function IsVoidLike(value11) {
    return TypeSystemPolicy.AllowNullVoid ? `(${value11} === undefined || ${value11} === null)` : `${value11} === undefined`;
  }
  Policy2.IsVoidLike = IsVoidLike;
})(Policy || (Policy = {}));
var TypeCompiler;
(function(TypeCompiler2) {
  function IsAnyOrUnknown2(schema3) {
    return schema3[Kind] === "Any" || schema3[Kind] === "Unknown";
  }
  function* FromAny5(schema3, references, value11) {
    yield "true";
  }
  function* FromArray16(schema3, references, value11) {
    yield `Array.isArray(${value11})`;
    const [parameter, accumulator] = [CreateParameter("value", "any"), CreateParameter("acc", "number")];
    if (IsNumber(schema3.maxItems))
      yield `${value11}.length <= ${schema3.maxItems}`;
    if (IsNumber(schema3.minItems))
      yield `${value11}.length >= ${schema3.minItems}`;
    const elementExpression = CreateExpression(schema3.items, references, "value");
    yield `${value11}.every((${parameter}) => ${elementExpression})`;
    if (IsSchema(schema3.contains) || IsNumber(schema3.minContains) || IsNumber(schema3.maxContains)) {
      const containsSchema = IsSchema(schema3.contains) ? schema3.contains : Never();
      const checkExpression = CreateExpression(containsSchema, references, "value");
      const checkMinContains = IsNumber(schema3.minContains) ? [`(count >= ${schema3.minContains})`] : [];
      const checkMaxContains = IsNumber(schema3.maxContains) ? [`(count <= ${schema3.maxContains})`] : [];
      const checkCount = `const count = value.reduce((${accumulator}, ${parameter}) => ${checkExpression} ? acc + 1 : acc, 0)`;
      const check10 = [`(count > 0)`, ...checkMinContains, ...checkMaxContains].join(" && ");
      yield `((${parameter}) => { ${checkCount}; return ${check10}})(${value11})`;
    }
    if (schema3.uniqueItems === true) {
      const check10 = `const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true`;
      const block = `const set = new Set(); for(const element of value) { ${check10} }`;
      yield `((${parameter}) => { ${block} )(${value11})`;
    }
  }
  function* FromAsyncIterator7(schema3, references, value11) {
    yield `(typeof value === 'object' && Symbol.asyncIterator in ${value11})`;
  }
  function* FromBigInt6(schema3, references, value11) {
    yield `(typeof ${value11} === 'bigint')`;
    if (IsBigInt(schema3.exclusiveMaximum))
      yield `${value11} < BigInt(${schema3.exclusiveMaximum})`;
    if (IsBigInt(schema3.exclusiveMinimum))
      yield `${value11} > BigInt(${schema3.exclusiveMinimum})`;
    if (IsBigInt(schema3.maximum))
      yield `${value11} <= BigInt(${schema3.maximum})`;
    if (IsBigInt(schema3.minimum))
      yield `${value11} >= BigInt(${schema3.minimum})`;
    if (IsBigInt(schema3.multipleOf))
      yield `(${value11} % BigInt(${schema3.multipleOf})) === 0`;
  }
  function* FromBoolean6(schema3, references, value11) {
    yield `(typeof ${value11} === 'boolean')`;
  }
  function* FromConstructor8(schema3, references, value11) {
    yield* Visit17(schema3.returns, references, `${value11}.prototype`);
  }
  function* FromDate6(schema3, references, value11) {
    yield `(${value11} instanceof Date) && Number.isFinite(${value11}.getTime())`;
    if (IsNumber(schema3.exclusiveMaximumTimestamp))
      yield `${value11}.getTime() < ${schema3.exclusiveMaximumTimestamp}`;
    if (IsNumber(schema3.exclusiveMinimumTimestamp))
      yield `${value11}.getTime() > ${schema3.exclusiveMinimumTimestamp}`;
    if (IsNumber(schema3.maximumTimestamp))
      yield `${value11}.getTime() <= ${schema3.maximumTimestamp}`;
    if (IsNumber(schema3.minimumTimestamp))
      yield `${value11}.getTime() >= ${schema3.minimumTimestamp}`;
    if (IsNumber(schema3.multipleOfTimestamp))
      yield `(${value11}.getTime() % ${schema3.multipleOfTimestamp}) === 0`;
  }
  function* FromFunction7(schema3, references, value11) {
    yield `(typeof ${value11} === 'function')`;
  }
  function* FromInteger6(schema3, references, value11) {
    yield `(typeof ${value11} === 'number' && Number.isInteger(${value11}))`;
    if (IsNumber(schema3.exclusiveMaximum))
      yield `${value11} < ${schema3.exclusiveMaximum}`;
    if (IsNumber(schema3.exclusiveMinimum))
      yield `${value11} > ${schema3.exclusiveMinimum}`;
    if (IsNumber(schema3.maximum))
      yield `${value11} <= ${schema3.maximum}`;
    if (IsNumber(schema3.minimum))
      yield `${value11} >= ${schema3.minimum}`;
    if (IsNumber(schema3.multipleOf))
      yield `(${value11} % ${schema3.multipleOf}) === 0`;
  }
  function* FromIntersect18(schema3, references, value11) {
    const check1 = schema3.allOf.map((schema4) => CreateExpression(schema4, references, value11)).join(" && ");
    if (schema3.unevaluatedProperties === false) {
      const keyCheck = CreateVariable(`${new RegExp(KeyOfPattern(schema3))};`);
      const check22 = `Object.getOwnPropertyNames(${value11}).every(key => ${keyCheck}.test(key))`;
      yield `(${check1} && ${check22})`;
    } else if (IsSchema(schema3.unevaluatedProperties)) {
      const keyCheck = CreateVariable(`${new RegExp(KeyOfPattern(schema3))};`);
      const check22 = `Object.getOwnPropertyNames(${value11}).every(key => ${keyCheck}.test(key) || ${CreateExpression(schema3.unevaluatedProperties, references, `${value11}[key]`)})`;
      yield `(${check1} && ${check22})`;
    } else {
      yield `(${check1})`;
    }
  }
  function* FromIterator7(schema3, references, value11) {
    yield `(typeof value === 'object' && Symbol.iterator in ${value11})`;
  }
  function* FromLiteral7(schema3, references, value11) {
    if (typeof schema3.const === "number" || typeof schema3.const === "boolean") {
      yield `(${value11} === ${schema3.const})`;
    } else {
      yield `(${value11} === '${LiteralString.Escape(schema3.const)}')`;
    }
  }
  function* FromNever6(schema3, references, value11) {
    yield `false`;
  }
  function* FromNot8(schema3, references, value11) {
    const expression = CreateExpression(schema3.not, references, value11);
    yield `(!${expression})`;
  }
  function* FromNull6(schema3, references, value11) {
    yield `(${value11} === null)`;
  }
  function* FromNumber6(schema3, references, value11) {
    yield Policy.IsNumberLike(value11);
    if (IsNumber(schema3.exclusiveMaximum))
      yield `${value11} < ${schema3.exclusiveMaximum}`;
    if (IsNumber(schema3.exclusiveMinimum))
      yield `${value11} > ${schema3.exclusiveMinimum}`;
    if (IsNumber(schema3.maximum))
      yield `${value11} <= ${schema3.maximum}`;
    if (IsNumber(schema3.minimum))
      yield `${value11} >= ${schema3.minimum}`;
    if (IsNumber(schema3.multipleOf))
      yield `(${value11} % ${schema3.multipleOf}) === 0`;
  }
  function* FromObject13(schema3, references, value11) {
    yield Policy.IsObjectLike(value11);
    if (IsNumber(schema3.minProperties))
      yield `Object.getOwnPropertyNames(${value11}).length >= ${schema3.minProperties}`;
    if (IsNumber(schema3.maxProperties))
      yield `Object.getOwnPropertyNames(${value11}).length <= ${schema3.maxProperties}`;
    const knownKeys = Object.getOwnPropertyNames(schema3.properties);
    for (const knownKey of knownKeys) {
      const memberExpression = MemberExpression.Encode(value11, knownKey);
      const property = schema3.properties[knownKey];
      if (schema3.required && schema3.required.includes(knownKey)) {
        yield* Visit17(property, references, memberExpression);
        if (ExtendsUndefinedCheck(property) || IsAnyOrUnknown2(property))
          yield `('${knownKey}' in ${value11})`;
      } else {
        const expression = CreateExpression(property, references, memberExpression);
        yield Policy.IsExactOptionalProperty(value11, knownKey, expression);
      }
    }
    if (schema3.additionalProperties === false) {
      if (schema3.required && schema3.required.length === knownKeys.length) {
        yield `Object.getOwnPropertyNames(${value11}).length === ${knownKeys.length}`;
      } else {
        const keys = `[${knownKeys.map((key) => `'${key}'`).join(", ")}]`;
        yield `Object.getOwnPropertyNames(${value11}).every(key => ${keys}.includes(key))`;
      }
    }
    if (typeof schema3.additionalProperties === "object") {
      const expression = CreateExpression(schema3.additionalProperties, references, `${value11}[key]`);
      const keys = `[${knownKeys.map((key) => `'${key}'`).join(", ")}]`;
      yield `(Object.getOwnPropertyNames(${value11}).every(key => ${keys}.includes(key) || ${expression}))`;
    }
  }
  function* FromPromise8(schema3, references, value11) {
    yield `(typeof value === 'object' && typeof ${value11}.then === 'function')`;
  }
  function* FromRecord12(schema3, references, value11) {
    yield Policy.IsRecordLike(value11);
    if (IsNumber(schema3.minProperties))
      yield `Object.getOwnPropertyNames(${value11}).length >= ${schema3.minProperties}`;
    if (IsNumber(schema3.maxProperties))
      yield `Object.getOwnPropertyNames(${value11}).length <= ${schema3.maxProperties}`;
    const [patternKey, patternSchema] = Object.entries(schema3.patternProperties)[0];
    const variable = CreateVariable(`${new RegExp(patternKey)}`);
    const check1 = CreateExpression(patternSchema, references, "value");
    const check22 = IsSchema(schema3.additionalProperties) ? CreateExpression(schema3.additionalProperties, references, value11) : schema3.additionalProperties === false ? "false" : "true";
    const expression = `(${variable}.test(key) ? ${check1} : ${check22})`;
    yield `(Object.entries(${value11}).every(([key, value]) => ${expression}))`;
  }
  function* FromRef12(schema3, references, value11) {
    const target = Deref(schema3, references);
    if (state.functions.has(schema3.$ref))
      return yield `${CreateFunctionName(schema3.$ref)}(${value11})`;
    yield* Visit17(target, references, value11);
  }
  function* FromRegExp5(schema3, references, value11) {
    const variable = CreateVariable(`${new RegExp(schema3.source, schema3.flags)};`);
    yield `(typeof ${value11} === 'string')`;
    if (IsNumber(schema3.maxLength))
      yield `${value11}.length <= ${schema3.maxLength}`;
    if (IsNumber(schema3.minLength))
      yield `${value11}.length >= ${schema3.minLength}`;
    yield `${variable}.test(${value11})`;
  }
  function* FromString6(schema3, references, value11) {
    yield `(typeof ${value11} === 'string')`;
    if (IsNumber(schema3.maxLength))
      yield `${value11}.length <= ${schema3.maxLength}`;
    if (IsNumber(schema3.minLength))
      yield `${value11}.length >= ${schema3.minLength}`;
    if (schema3.pattern !== undefined) {
      const variable = CreateVariable(`${new RegExp(schema3.pattern)};`);
      yield `${variable}.test(${value11})`;
    }
    if (schema3.format !== undefined) {
      yield `format('${schema3.format}', ${value11})`;
    }
  }
  function* FromSymbol6(schema3, references, value11) {
    yield `(typeof ${value11} === 'symbol')`;
  }
  function* FromTemplateLiteral7(schema3, references, value11) {
    yield `(typeof ${value11} === 'string')`;
    const variable = CreateVariable(`${new RegExp(schema3.pattern)};`);
    yield `${variable}.test(${value11})`;
  }
  function* FromThis11(schema3, references, value11) {
    yield `${CreateFunctionName(schema3.$ref)}(${value11})`;
  }
  function* FromTuple15(schema3, references, value11) {
    yield `Array.isArray(${value11})`;
    if (schema3.items === undefined)
      return yield `${value11}.length === 0`;
    yield `(${value11}.length === ${schema3.maxItems})`;
    for (let i = 0;i < schema3.items.length; i++) {
      const expression = CreateExpression(schema3.items[i], references, `${value11}[${i}]`);
      yield `${expression}`;
    }
  }
  function* FromUndefined6(schema3, references, value11) {
    yield `${value11} === undefined`;
  }
  function* FromUnion20(schema3, references, value11) {
    const expressions = schema3.anyOf.map((schema4) => CreateExpression(schema4, references, value11));
    yield `(${expressions.join(" || ")})`;
  }
  function* FromUint8Array5(schema3, references, value11) {
    yield `${value11} instanceof Uint8Array`;
    if (IsNumber(schema3.maxByteLength))
      yield `(${value11}.length <= ${schema3.maxByteLength})`;
    if (IsNumber(schema3.minByteLength))
      yield `(${value11}.length >= ${schema3.minByteLength})`;
  }
  function* FromUnknown5(schema3, references, value11) {
    yield "true";
  }
  function* FromVoid5(schema3, references, value11) {
    yield Policy.IsVoidLike(value11);
  }
  function* FromKind4(schema3, references, value11) {
    const instance = state.instances.size;
    state.instances.set(instance, schema3);
    yield `kind('${schema3[Kind]}', ${instance}, ${value11})`;
  }
  function* Visit17(schema3, references, value11, useHoisting = true) {
    const references_ = IsString(schema3.$id) ? [...references, schema3] : references;
    const schema_ = schema3;
    if (useHoisting && IsString(schema3.$id)) {
      const functionName = CreateFunctionName(schema3.$id);
      if (state.functions.has(functionName)) {
        return yield `${functionName}(${value11})`;
      } else {
        const functionCode = CreateFunction(functionName, schema3, references, "value", false);
        state.functions.set(functionName, functionCode);
        return yield `${functionName}(${value11})`;
      }
    }
    switch (schema_[Kind]) {
      case "Any":
        return yield* FromAny5(schema_, references_, value11);
      case "Array":
        return yield* FromArray16(schema_, references_, value11);
      case "AsyncIterator":
        return yield* FromAsyncIterator7(schema_, references_, value11);
      case "BigInt":
        return yield* FromBigInt6(schema_, references_, value11);
      case "Boolean":
        return yield* FromBoolean6(schema_, references_, value11);
      case "Constructor":
        return yield* FromConstructor8(schema_, references_, value11);
      case "Date":
        return yield* FromDate6(schema_, references_, value11);
      case "Function":
        return yield* FromFunction7(schema_, references_, value11);
      case "Integer":
        return yield* FromInteger6(schema_, references_, value11);
      case "Intersect":
        return yield* FromIntersect18(schema_, references_, value11);
      case "Iterator":
        return yield* FromIterator7(schema_, references_, value11);
      case "Literal":
        return yield* FromLiteral7(schema_, references_, value11);
      case "Never":
        return yield* FromNever6(schema_, references_, value11);
      case "Not":
        return yield* FromNot8(schema_, references_, value11);
      case "Null":
        return yield* FromNull6(schema_, references_, value11);
      case "Number":
        return yield* FromNumber6(schema_, references_, value11);
      case "Object":
        return yield* FromObject13(schema_, references_, value11);
      case "Promise":
        return yield* FromPromise8(schema_, references_, value11);
      case "Record":
        return yield* FromRecord12(schema_, references_, value11);
      case "Ref":
        return yield* FromRef12(schema_, references_, value11);
      case "RegExp":
        return yield* FromRegExp5(schema_, references_, value11);
      case "String":
        return yield* FromString6(schema_, references_, value11);
      case "Symbol":
        return yield* FromSymbol6(schema_, references_, value11);
      case "TemplateLiteral":
        return yield* FromTemplateLiteral7(schema_, references_, value11);
      case "This":
        return yield* FromThis11(schema_, references_, value11);
      case "Tuple":
        return yield* FromTuple15(schema_, references_, value11);
      case "Undefined":
        return yield* FromUndefined6(schema_, references_, value11);
      case "Union":
        return yield* FromUnion20(schema_, references_, value11);
      case "Uint8Array":
        return yield* FromUint8Array5(schema_, references_, value11);
      case "Unknown":
        return yield* FromUnknown5(schema_, references_, value11);
      case "Void":
        return yield* FromVoid5(schema_, references_, value11);
      default:
        if (!exports_type.Has(schema_[Kind]))
          throw new TypeCompilerUnknownTypeError(schema3);
        return yield* FromKind4(schema_, references_, value11);
    }
  }
  const state = {
    language: "javascript",
    functions: new Map,
    variables: new Map,
    instances: new Map
  };
  function CreateExpression(schema3, references, value11, useHoisting = true) {
    return `(${[...Visit17(schema3, references, value11, useHoisting)].join(" && ")})`;
  }
  function CreateFunctionName($id) {
    return `check_${Identifier.Encode($id)}`;
  }
  function CreateVariable(expression) {
    const variableName = `local_${state.variables.size}`;
    state.variables.set(variableName, `const ${variableName} = ${expression}`);
    return variableName;
  }
  function CreateFunction(name, schema3, references, value11, useHoisting = true) {
    const [newline, pad] = ["\n", (length) => "".padStart(length, " ")];
    const parameter = CreateParameter("value", "any");
    const returns = CreateReturns("boolean");
    const expression = [...Visit17(schema3, references, value11, useHoisting)].map((expression2) => `${pad(4)}${expression2}`).join(` &&${newline}`);
    return `function ${name}(${parameter})${returns} {${newline}${pad(2)}return (${newline}${expression}${newline}${pad(2)})\n}`;
  }
  function CreateParameter(name, type75) {
    const annotation = state.language === "typescript" ? `: ${type75}` : "";
    return `${name}${annotation}`;
  }
  function CreateReturns(type75) {
    return state.language === "typescript" ? `: ${type75}` : "";
  }
  function Build(schema3, references, options) {
    const functionCode = CreateFunction("check", schema3, references, "value");
    const parameter = CreateParameter("value", "any");
    const returns = CreateReturns("boolean");
    const functions = [...state.functions.values()];
    const variables = [...state.variables.values()];
    const checkFunction = IsString(schema3.$id) ? `return function check(${parameter})${returns} {\n  return ${CreateFunctionName(schema3.$id)}(value)\n}` : `return ${functionCode}`;
    return [...variables, ...functions, checkFunction].join("\n");
  }
  function Code(...args) {
    const defaults = { language: "javascript" };
    const [schema3, references, options] = args.length === 2 && IsArray(args[1]) ? [args[0], args[1], defaults] : args.length === 2 && !IsArray(args[1]) ? [args[0], [], args[1]] : args.length === 3 ? [args[0], args[1], args[2]] : args.length === 1 ? [args[0], [], defaults] : [null, [], defaults];
    state.language = options.language;
    state.variables.clear();
    state.functions.clear();
    state.instances.clear();
    if (!IsSchema(schema3))
      throw new TypeCompilerTypeGuardError(schema3);
    for (const schema4 of references)
      if (!IsSchema(schema4))
        throw new TypeCompilerTypeGuardError(schema4);
    return Build(schema3, references, options);
  }
  TypeCompiler2.Code = Code;
  function Compile(schema3, references = []) {
    const generatedCode = Code(schema3, references, { language: "javascript" });
    const compiledFunction = globalThis.Function("kind", "format", "hash", generatedCode);
    const instances = new Map(state.instances);
    function typeRegistryFunction(kind, instance, value11) {
      if (!exports_type.Has(kind) || !instances.has(instance))
        return false;
      const checkFunc = exports_type.Get(kind);
      const schema4 = instances.get(instance);
      return checkFunc(schema4, value11);
    }
    function formatRegistryFunction(format, value11) {
      if (!exports_format.Has(format))
        return false;
      const checkFunc = exports_format.Get(format);
      return checkFunc(value11);
    }
    function hashFunction(value11) {
      return Hash(value11);
    }
    const checkFunction = compiledFunction(typeRegistryFunction, formatRegistryFunction, hashFunction);
    return new TypeCheck(schema3, references, checkFunction, generatedCode);
  }
  TypeCompiler2.Compile = Compile;
})(TypeCompiler || (TypeCompiler = {}));
// /home/ellie/github/student_scheduler/apps/server/node_modules/elysia/dist/bun/index.js
var X$ = Object.create;
var { defineProperty: z1, getPrototypeOf: W$, getOwnPropertyNames: J$ } = Object;
var Q$ = Object.prototype.hasOwnProperty;
var T0 = ($, Z, X) => {
  X = $ != null ? X$(W$($)) : {};
  const W = Z || !$ || !$.__esModule ? z1(X, "default", { value: $, enumerable: true }) : X;
  for (let J of J$($))
    if (!Q$.call(W, J))
      z1(W, J, { get: () => $[J], enumerable: true });
  return W;
};
var J0 = ($, Z) => () => (Z || $((Z = { exports: {} }).exports, Z), Z.exports);
var I1 = J0((k$, i0) => {
  var z0 = function() {
  }, B$ = function($, Z, X) {
    this.fn = $, this.context = Z, this.once = X || false;
  }, O1 = function($, Z, X, W, J) {
    if (typeof X !== "function")
      throw new TypeError("The listener must be a function");
    var Y = new B$(X, W || $, J), Q = f ? f + Z : Z;
    if (!$._events[Q])
      $._events[Q] = Y, $._eventsCount++;
    else if (!$._events[Q].fn)
      $._events[Q].push(Y);
    else
      $._events[Q] = [$._events[Q], Y];
    return $;
  }, E0 = function($, Z) {
    if (--$._eventsCount === 0)
      $._events = new z0;
    else
      delete $._events[Z];
  }, g = function() {
    this._events = new z0, this._eventsCount = 0;
  }, Y$ = Object.prototype.hasOwnProperty, f = "~";
  if (Object.create) {
    if (z0.prototype = Object.create(null), !new z0().__proto__)
      f = false;
  }
  g.prototype.eventNames = function $() {
    var Z = [], X, W;
    if (this._eventsCount === 0)
      return Z;
    for (W in X = this._events)
      if (Y$.call(X, W))
        Z.push(f ? W.slice(1) : W);
    if (Object.getOwnPropertySymbols)
      return Z.concat(Object.getOwnPropertySymbols(X));
    return Z;
  };
  g.prototype.listeners = function $(Z) {
    var X = f ? f + Z : Z, W = this._events[X];
    if (!W)
      return [];
    if (W.fn)
      return [W.fn];
    for (var J = 0, Y = W.length, Q = new Array(Y);J < Y; J++)
      Q[J] = W[J].fn;
    return Q;
  };
  g.prototype.listenerCount = function $(Z) {
    var X = f ? f + Z : Z, W = this._events[X];
    if (!W)
      return 0;
    if (W.fn)
      return 1;
    return W.length;
  };
  g.prototype.emit = function $(Z, X, W, J, Y, Q) {
    var _ = f ? f + Z : Z;
    if (!this._events[_])
      return false;
    var B = this._events[_], K = arguments.length, G, M;
    if (B.fn) {
      if (B.once)
        this.removeListener(Z, B.fn, undefined, true);
      switch (K) {
        case 1:
          return B.fn.call(B.context), true;
        case 2:
          return B.fn.call(B.context, X), true;
        case 3:
          return B.fn.call(B.context, X, W), true;
        case 4:
          return B.fn.call(B.context, X, W, J), true;
        case 5:
          return B.fn.call(B.context, X, W, J, Y), true;
        case 6:
          return B.fn.call(B.context, X, W, J, Y, Q), true;
      }
      for (M = 1, G = new Array(K - 1);M < K; M++)
        G[M - 1] = arguments[M];
      B.fn.apply(B.context, G);
    } else {
      var V = B.length, P;
      for (M = 0;M < V; M++) {
        if (B[M].once)
          this.removeListener(Z, B[M].fn, undefined, true);
        switch (K) {
          case 1:
            B[M].fn.call(B[M].context);
            break;
          case 2:
            B[M].fn.call(B[M].context, X);
            break;
          case 3:
            B[M].fn.call(B[M].context, X, W);
            break;
          case 4:
            B[M].fn.call(B[M].context, X, W, J);
            break;
          default:
            if (!G)
              for (P = 1, G = new Array(K - 1);P < K; P++)
                G[P - 1] = arguments[P];
            B[M].fn.apply(B[M].context, G);
        }
      }
    }
    return true;
  };
  g.prototype.on = function $(Z, X, W) {
    return O1(this, Z, X, W, false);
  };
  g.prototype.once = function $(Z, X, W) {
    return O1(this, Z, X, W, true);
  };
  g.prototype.removeListener = function $(Z, X, W, J) {
    var Y = f ? f + Z : Z;
    if (!this._events[Y])
      return this;
    if (!X)
      return E0(this, Y), this;
    var Q = this._events[Y];
    if (Q.fn) {
      if (Q.fn === X && (!J || Q.once) && (!W || Q.context === W))
        E0(this, Y);
    } else {
      for (var _ = 0, B = [], K = Q.length;_ < K; _++)
        if (Q[_].fn !== X || J && !Q[_].once || W && Q[_].context !== W)
          B.push(Q[_]);
      if (B.length)
        this._events[Y] = B.length === 1 ? B[0] : B;
      else
        E0(this, Y);
    }
    return this;
  };
  g.prototype.removeAllListeners = function $(Z) {
    var X;
    if (Z) {
      if (X = f ? f + Z : Z, this._events[X])
        E0(this, X);
    } else
      this._events = new z0, this._eventsCount = 0;
    return this;
  };
  g.prototype.off = g.prototype.removeListener;
  g.prototype.addListener = g.prototype.on;
  g.prefixed = f;
  g.EventEmitter = g;
  if (typeof i0 !== "undefined")
    i0.exports = g;
});
var X1 = J0((D6, H1) => {
  var A$ = function($) {
    var Z = $.indexOf("%");
    if (Z === -1)
      return $;
    var X = $.length, W = "", J = 0, Y = 0, Q = Z, _ = T1;
    while (Z > -1 && Z < X) {
      var B = E1($[Z + 1], 4), K = E1($[Z + 2], 0), G = B | K, M = Z1[G];
      if (_ = Z1[256 + _ + M], Y = Y << 6 | G & Z1[364 + M], _ === T1)
        W += $.slice(J, Q), W += Y <= 65535 ? String.fromCharCode(Y) : String.fromCharCode(55232 + (Y >> 10), 56320 + (Y & 1023)), Y = 0, J = Z + 3, Z = Q = $.indexOf("%", J);
      else if (_ === P$)
        return null;
      else {
        if (Z += 3, Z < X && $.charCodeAt(Z) === 37)
          continue;
        return null;
      }
    }
    return W + $.slice(J);
  }, E1 = function($, Z) {
    var X = V$[$];
    return X === undefined ? 255 : X << Z;
  }, T1 = 12, P$ = 0, Z1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 7, 10, 9, 9, 9, 11, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 24, 36, 48, 60, 72, 84, 96, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 63, 63, 63, 0, 31, 15, 15, 15, 7, 7, 7], V$ = { "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
  H1.exports = A$;
});
var f1 = J0((G6, g1) => {
  var w$ = function($) {
    const Z = new x1;
    if (typeof $ !== "string")
      return Z;
    let X = $.length, W = "", J = "", Y = -1, Q = -1, _ = false, B = false, K = false, G = false, M = false, V = 0;
    for (let P = 0;P < X + 1; P++)
      if (V = P !== X ? $.charCodeAt(P) : 38, V === 38) {
        if (M = Q > Y, !M)
          Q = P;
        if (W = $.slice(Y + 1, Q), M || W.length > 0) {
          if (K)
            W = W.replace(L1, " ");
          if (_)
            W = b1(W) || W;
          if (M) {
            if (J = $.slice(Q + 1, P), G)
              J = J.replace(L1, " ");
            if (B)
              J = b1(J) || J;
          }
          const z = Z[W];
          if (z === undefined)
            Z[W] = J;
          else if (z.pop)
            z.push(J);
          else
            Z[W] = [z, J];
        }
        J = "", Y = P, Q = P, _ = false, B = false, K = false, G = false;
      } else if (V === 61)
        if (Q <= Y)
          Q = P;
        else
          B = true;
      else if (V === 43)
        if (Q > Y)
          G = true;
        else
          K = true;
      else if (V === 37)
        if (Q > Y)
          B = true;
        else
          _ = true;
    return Z;
  }, b1 = X1(), L1 = /\+/g, x1 = function() {
  };
  x1.prototype = Object.create(null);
  g1.exports = w$;
});
var v1 = J0((K6, y1) => {
  var R$ = function($) {
    const Z = $.length;
    if (Z === 0)
      return "";
    let X = "", W = 0, J = 0;
    $:
      for (;J < Z; J++) {
        let Y = $.charCodeAt(J);
        while (Y < 128) {
          if (C$[Y] !== 1) {
            if (W < J)
              X += $.slice(W, J);
            W = J + 1, X += i[Y];
          }
          if (++J === Z)
            break $;
          Y = $.charCodeAt(J);
        }
        if (W < J)
          X += $.slice(W, J);
        if (Y < 2048) {
          W = J + 1, X += i[192 | Y >> 6] + i[128 | Y & 63];
          continue;
        }
        if (Y < 55296 || Y >= 57344) {
          W = J + 1, X += i[224 | Y >> 12] + i[128 | Y >> 6 & 63] + i[128 | Y & 63];
          continue;
        }
        if (++J, J >= Z)
          throw new Error("URI malformed");
        const Q = $.charCodeAt(J) & 1023;
        W = J + 1, Y = 65536 + ((Y & 1023) << 10 | Q), X += i[240 | Y >> 18] + i[128 | Y >> 12 & 63] + i[128 | Y >> 6 & 63] + i[128 | Y & 63];
      }
    if (W === 0)
      return $;
    if (W < Z)
      return X + $.slice(W);
    return X;
  }, i = Array.from({ length: 256 }, ($, Z) => "%" + ((Z < 16 ? "0" : "") + Z.toString(16)).toUpperCase()), C$ = new Int8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0]);
  y1.exports = { encodeString: R$ };
});
var u1 = J0((z6, m1) => {
  var k1 = function($) {
    const Z = typeof $;
    if (Z === "string")
      return W1($);
    else if (Z === "bigint")
      return $.toString();
    else if (Z === "boolean")
      return $ ? "true" : "false";
    else if (Z === "number" && Number.isFinite($))
      return $ < 1000000000000000000000 ? "" + $ : W1("" + $);
    return "";
  }, S$ = function($) {
    let Z = "";
    if ($ === null || typeof $ !== "object")
      return Z;
    const X = "&", W = Object.keys($), J = W.length;
    let Y = 0;
    for (let Q = 0;Q < J; Q++) {
      const _ = W[Q], B = $[_], K = W1(_) + "=";
      if (Q)
        Z += X;
      if (Array.isArray(B)) {
        Y = B.length;
        for (let G = 0;G < Y; G++) {
          if (G)
            Z += X;
          Z += K, Z += k1(B[G]);
        }
      } else
        Z += K, Z += k1(B);
    }
    return Z;
  }, { encodeString: W1 } = v1();
  m1.exports = S$;
});
var J1 = J0((M6, F0) => {
  var h1 = f1(), c1 = u1(), d1 = { parse: h1, stringify: c1 };
  F0.exports = d1;
  F0.exports.default = d1;
  F0.exports.parse = h1;
  F0.exports.stringify = c1;
});
var Q0 = ($, Z) => ({ part: $, store: null, inert: Z !== undefined ? new Map(Z.map((X) => [X.part.charCodeAt(0), X])) : null, params: null, wildcardStore: null });
var M1 = ($, Z) => ({ ...$, part: Z });
var U1 = ($) => ({ paramName: $, store: null, inert: null });

class o {
  root = {};
  history = [];
  static regex = { static: /:.+?(?=\/|$)/, params: /:.+?(?=\/|$)/g };
  add($, Z, X) {
    if (typeof Z !== "string")
      throw new TypeError("Route path must be a string");
    if (Z === "")
      Z = "/";
    else if (Z[0] !== "/")
      Z = `/${Z}`;
    this.history.push([$, Z, X]);
    const W = Z[Z.length - 1] === "*";
    if (W)
      Z = Z.slice(0, -1);
    const J = Z.split(o.regex.static), Y = Z.match(o.regex.params) || [];
    if (J[J.length - 1] === "")
      J.pop();
    let Q;
    if (!this.root[$])
      Q = this.root[$] = Q0("/");
    else
      Q = this.root[$];
    let _ = 0;
    for (let B = 0;B < J.length; ++B) {
      let K = J[B];
      if (B > 0) {
        const G = Y[_++].slice(1);
        if (Q.params === null)
          Q.params = U1(G);
        else if (Q.params.paramName !== G)
          throw new Error(`Cannot create route "${Z}" with parameter "${G}" ` + "because a route already exists with a different parameter name " + `("${Q.params.paramName}") in the same location`);
        const M = Q.params;
        if (M.inert === null) {
          Q = M.inert = Q0(K);
          continue;
        }
        Q = M.inert;
      }
      for (let G = 0;; ) {
        if (G === K.length) {
          if (G < Q.part.length) {
            const M = M1(Q, Q.part.slice(G));
            Object.assign(Q, Q0(K, [M]));
          }
          break;
        }
        if (G === Q.part.length) {
          if (Q.inert === null)
            Q.inert = new Map;
          else if (Q.inert.has(K.charCodeAt(G))) {
            Q = Q.inert.get(K.charCodeAt(G)), K = K.slice(G), G = 0;
            continue;
          }
          const M = Q0(K.slice(G));
          Q.inert.set(K.charCodeAt(G), M), Q = M;
          break;
        }
        if (K[G] !== Q.part[G]) {
          const M = M1(Q, Q.part.slice(G)), V = Q0(K.slice(G));
          Object.assign(Q, Q0(Q.part.slice(0, G), [M, V])), Q = V;
          break;
        }
        ++G;
      }
    }
    if (_ < Y.length) {
      const B = Y[_].slice(1);
      if (Q.params === null)
        Q.params = U1(B);
      else if (Q.params.paramName !== B)
        throw new Error(`Cannot create route "${Z}" with parameter "${B}" ` + "because a route already exists with a different parameter name " + `("${Q.params.paramName}") in the same location`);
      if (Q.params.store === null)
        Q.params.store = X;
      return Q.params.store;
    }
    if (W) {
      if (Q.wildcardStore === null)
        Q.wildcardStore = X;
      return Q.wildcardStore;
    }
    if (Q.store === null)
      Q.store = X;
    return Q.store;
  }
  find($, Z) {
    const X = this.root[$];
    if (!X)
      return null;
    return p0(Z, Z.length, X, 0);
  }
}
var p0 = ($, Z, X, W) => {
  const J = X?.part, Y = W + J.length;
  if (J.length > 1) {
    if (Y > Z)
      return null;
    if (J.length < 15) {
      for (let Q = 1, _ = W + 1;Q < J.length; ++Q, ++_)
        if (J.charCodeAt(Q) !== $.charCodeAt(_))
          return null;
    } else if ($.substring(W, Y) !== J)
      return null;
  }
  if (Y === Z) {
    if (X.store !== null)
      return { store: X.store, params: {} };
    if (X.wildcardStore !== null)
      return { store: X.wildcardStore, params: { "*": "" } };
    return null;
  }
  if (X.inert !== null) {
    const Q = X.inert.get($.charCodeAt(Y));
    if (Q !== undefined) {
      const _ = p0($, Z, Q, Y);
      if (_ !== null)
        return _;
    }
  }
  if (X.params !== null) {
    const Q = X.params, _ = $.indexOf("/", Y);
    if (_ !== Y) {
      if (_ === -1 || _ >= Z) {
        if (Q.store !== null) {
          const B = {};
          return B[Q.paramName] = $.substring(Y, Z), { store: Q.store, params: B };
        }
      } else if (Q.inert !== null) {
        const B = p0($, Z, Q.inert, _);
        if (B !== null)
          return B.params[Q.paramName] = $.substring(Y, _), B;
      }
    }
  }
  if (X.wildcardStore !== null)
    return { store: X.wildcardStore, params: { "*": $.substring(Y, Z) } };
  return null;
};
var j1 = T0(I1(), 1);
var N1 = j1.default;
var H0 = () => {
  let $;
  return [new Promise((X) => {
    $ = X;
  }), $];
};
var s = () => {
  const [$, Z] = H0(), [X, W] = H0(), J = [], Y = [];
  return { signal: $, consume: (Q) => {
    switch (Q.type) {
      case "begin":
        if (Q.unit && J.length === 0)
          for (let _ = 0;_ < Q.unit; _++) {
            const [B, K] = H0(), [G, M] = H0();
            J.push(B), Y.push([(V) => {
              K({ children: [], end: G, name: V.name ?? "", skip: false, time: V.time });
            }, (V) => {
              M(V);
            }]);
          }
        Z({ children: J, end: X, name: Q.name ?? "", skip: false, time: Q.time });
        break;
      case "end":
        W(Q.time);
        break;
    }
  }, consumeChild(Q) {
    switch (Q.type) {
      case "begin":
        if (!Y[0])
          return;
        const [_] = Y[0];
        _({ children: [], end: X, name: Q.name ?? "", skip: false, time: Q.time });
        break;
      case "end":
        const B = Y.shift();
        if (!B)
          return;
        B[1](Q.time);
    }
  }, resolve() {
    Z({ children: [], end: new Promise((Q) => Q(0)), name: "", skip: true, time: 0 });
    for (let [Q, _] of Y)
      Q({ children: [], end: new Promise((B) => B(0)), name: "", skip: true, time: 0 }), _(0);
    W(0);
  } };
};
var F1 = ($, Z, X) => {
  return async function W(W) {
    if (W.event !== "request" || W.type !== "begin")
      return;
    const J = W.id, Y = $(), Q = s(), _ = s(), B = s(), K = s(), G = s(), M = s(), V = s(), P = s();
    Q.consume(W);
    const z = (A) => {
      if (A.id === J)
        switch (A.event) {
          case "request":
            Q.consume(A);
            break;
          case "request.unit":
            Q.consumeChild(A);
            break;
          case "parse":
            _.consume(A);
            break;
          case "parse.unit":
            _.consumeChild(A);
            break;
          case "transform":
            B.consume(A);
            break;
          case "transform.unit":
            B.consumeChild(A);
            break;
          case "beforeHandle":
            K.consume(A);
            break;
          case "beforeHandle.unit":
            K.consumeChild(A);
            break;
          case "handle":
            G.consume(A);
            break;
          case "afterHandle":
            M.consume(A);
            break;
          case "afterHandle.unit":
            M.consumeChild(A);
            break;
          case "error":
            V.consume(A);
            break;
          case "error.unit":
            V.consumeChild(A);
            break;
          case "response":
            if (A.type === "begin")
              Q.resolve(), _.resolve(), B.resolve(), K.resolve(), G.resolve(), M.resolve(), V.resolve();
            else
              Y.off("event", z);
            P.consume(A);
            break;
          case "response.unit":
            P.consumeChild(A);
            break;
          case "exit":
            Q.resolve(), _.resolve(), B.resolve(), K.resolve(), G.resolve(), M.resolve(), V.resolve();
            break;
        }
    };
    Y.on("event", z), await X({ id: J, context: W.ctx, set: W.ctx?.set, store: W.ctx?.store, time: W.time, request: Q.signal, parse: _.signal, transform: B.signal, beforeHandle: K.signal, handle: G.signal, afterHandle: M.signal, error: V.signal, response: P.signal }), Y.emit(`res${J}.${Z}`, undefined);
  };
};
var D$ = function($, Z) {
  if (typeof $ !== "string")
    throw new TypeError("argument str must be a string");
  var X = {}, W = Z || {}, J = W.decode || K$, Y = 0;
  while (Y < $.length) {
    var Q = $.indexOf("=", Y);
    if (Q === -1)
      break;
    var _ = $.indexOf(";", Y);
    if (_ === -1)
      _ = $.length;
    else if (_ < Q) {
      Y = $.lastIndexOf(";", Q - 1) + 1;
      continue;
    }
    var B = $.slice(Y, Q).trim();
    if (X[B] === undefined) {
      var K = $.slice(Q + 1, _).trim();
      if (K.charCodeAt(0) === 34)
        K = K.slice(1, -1);
      X[B] = U$(K, J);
    }
    Y = _ + 1;
  }
  return X;
};
var G$ = function($, Z, X) {
  var W = X || {}, J = W.encode || z$;
  if (typeof J !== "function")
    throw new TypeError("option encode is invalid");
  if (!b0.test($))
    throw new TypeError("argument name is invalid");
  var Y = J(Z);
  if (Y && !b0.test(Y))
    throw new TypeError("argument val is invalid");
  var Q = $ + "=" + Y;
  if (W.maxAge != null) {
    var _ = W.maxAge - 0;
    if (isNaN(_) || !isFinite(_))
      throw new TypeError("option maxAge is invalid");
    Q += "; Max-Age=" + Math.floor(_);
  }
  if (W.domain) {
    if (!b0.test(W.domain))
      throw new TypeError("option domain is invalid");
    Q += "; Domain=" + W.domain;
  }
  if (W.path) {
    if (!b0.test(W.path))
      throw new TypeError("option path is invalid");
    Q += "; Path=" + W.path;
  }
  if (W.expires) {
    var B = W.expires;
    if (!M$(B) || isNaN(B.valueOf()))
      throw new TypeError("option expires is invalid");
    Q += "; Expires=" + B.toUTCString();
  }
  if (W.httpOnly)
    Q += "; HttpOnly";
  if (W.secure)
    Q += "; Secure";
  if (W.partitioned)
    Q += "; Partitioned";
  if (W.priority) {
    var K = typeof W.priority === "string" ? W.priority.toLowerCase() : W.priority;
    switch (K) {
      case "low":
        Q += "; Priority=Low";
        break;
      case "medium":
        Q += "; Priority=Medium";
        break;
      case "high":
        Q += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (W.sameSite) {
    var G = typeof W.sameSite === "string" ? W.sameSite.toLowerCase() : W.sameSite;
    switch (G) {
      case true:
        Q += "; SameSite=Strict";
        break;
      case "lax":
        Q += "; SameSite=Lax";
        break;
      case "strict":
        Q += "; SameSite=Strict";
        break;
      case "none":
        Q += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return Q;
};
var K$ = function($) {
  return $.indexOf("%") !== -1 ? decodeURIComponent($) : $;
};
var z$ = function($) {
  return encodeURIComponent($);
};
var M$ = function($) {
  return _$.call($) === "[object Date]" || $ instanceof Date;
};
var U$ = function($, Z) {
  try {
    return Z($);
  } catch (X) {
    return $;
  }
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var L0 = D$;
var x0 = G$;
var _$ = Object.prototype.toString;
var b0 = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

class m {
  $;
  Z;
  name;
  setter;
  constructor($, Z = {}) {
    this._value = $;
    this.property = Z;
  }
  get() {
    return this._value;
  }
  get value() {
    return this._value;
  }
  set value($) {
    if (typeof $ === "object") {
      if (JSON.stringify(this.value) === JSON.stringify($))
        return;
    } else if (this.value === $)
      return;
    this._value = $, this.sync();
  }
  add($) {
    const Z = Object.assign(this.property, typeof $ === "function" ? $(Object.assign(this.property, this.value)) : $);
    if ("value" in Z)
      this._value = Z.value, delete Z.value;
    return this.property = Z, this.sync();
  }
  set($) {
    const Z = typeof $ === "function" ? $(Object.assign(this.property, this.value)) : $;
    if ("value" in Z)
      this._value = Z.value, delete Z.value;
    return this.property = Z, this.sync();
  }
  remove($) {
    if (this.value === undefined)
      return;
    this.set({ domain: $?.domain, expires: new Date(0), maxAge: 0, path: $?.path, sameSite: $?.sameSite, secure: $?.secure, value: "" });
  }
  get domain() {
    return this.property.domain;
  }
  set domain($) {
    if (this.property.domain === $)
      return;
    this.property.domain = $, this.sync();
  }
  get expires() {
    return this.property.expires;
  }
  set expires($) {
    if (this.property.expires?.getTime() === $?.getTime())
      return;
    this.property.expires = $, this.sync();
  }
  get httpOnly() {
    return this.property.httpOnly;
  }
  set httpOnly($) {
    if (this.property.domain === $)
      return;
    this.property.httpOnly = $, this.sync();
  }
  get maxAge() {
    return this.property.maxAge;
  }
  set maxAge($) {
    if (this.property.maxAge === $)
      return;
    this.property.maxAge = $, this.sync();
  }
  get path() {
    return this.property.path;
  }
  set path($) {
    if (this.property.path === $)
      return;
    this.property.path = $, this.sync();
  }
  get priority() {
    return this.property.priority;
  }
  set priority($) {
    if (this.property.priority === $)
      return;
    this.property.priority = $, this.sync();
  }
  get sameSite() {
    return this.property.sameSite;
  }
  set sameSite($) {
    if (this.property.sameSite === $)
      return;
    this.property.sameSite = $, this.sync();
  }
  get secure() {
    return this.property.secure;
  }
  set secure($) {
    if (this.property.secure === $)
      return;
    this.property.secure = $, this.sync();
  }
  toString() {
    return typeof this.value === "object" ? JSON.stringify(this.value) : this.value?.toString() ?? "";
  }
  sync() {
    if (!this.name || !this.setter)
      return this;
    if (!this.setter.cookie)
      this.setter.cookie = { [this.name]: Object.assign(this.property, { value: this.toString() }) };
    else
      this.setter.cookie[this.name] = Object.assign(this.property, { value: this.toString() });
    return this;
  }
}
var P1 = ($, Z, X) => new Proxy($, { get(W, J) {
  if (J in W)
    return W[J];
  const Y = new m(undefined, X ? { ...X } : undefined);
  return Y.setter = Z, Y.name = J, Y;
}, set(W, J, Y) {
  if (!(Y instanceof m))
    return false;
  if (!Z.cookie)
    Z.cookie = {};
  return Y.setter = Z, Y.name = J, Y.sync(), W[J] = Y, true;
} });
var g0 = async ($, Z, { secret: X, sign: W, ...J } = {}) => {
  if (!Z)
    return P1({}, $, J);
  const Y = {}, Q = typeof X === "string";
  if (W && W !== true && !Array.isArray(W))
    W = [W];
  const _ = Object.keys(L0(Z));
  for (let B = 0;B < _.length; B++) {
    const K = _[B];
    let G = L0(Z)[K];
    if (W === true || W?.includes(K)) {
      if (!X)
        throw new Error("No secret is provided to cookie plugin");
      if (Q) {
        if (G = await l0(G, X), G === false)
          throw new M0(K);
      } else {
        let P = true;
        for (let z = 0;z < X.length; z++) {
          const A = await l0(G, X[z]);
          if (A !== false) {
            G = A, P = false;
            break;
          }
        }
        if (P)
          throw new M0(K);
      }
    }
    if (G === undefined)
      continue;
    const M = G.charCodeAt(0);
    if (M === 123 || M === 91)
      try {
        const P = new m(JSON.parse(G));
        P.setter = $, P.name = K, Y[K] = P;
        continue;
      } catch {
      }
    if (f0(G))
      G = +G;
    else if (G === "true")
      G = true;
    else if (G === "false")
      G = false;
    const V = new m(G, J);
    V.setter = $, V.name = K, Y[K] = V;
  }
  return P1(Y, $);
};
var U0 = "toJSON" in new Headers;
var u = ($) => {
  for (let Z in $)
    return true;
  return false;
};
var O0 = ($, Z) => {
  const X = $.size;
  if (X && Z && Z.status !== 206 && Z.status !== 304 && Z.status !== 412 && Z.status !== 416 || !Z && X) {
    if (Z) {
      if (Z.headers instanceof Headers) {
        if (U0)
          Z.headers = Z.headers.toJSON();
        else
          for (let [W, J] of Z.headers.entries())
            if (W in Z.headers)
              Z.headers[W] = J;
      }
      return new Response($, { status: Z.status, headers: Object.assign({ "accept-ranges": "bytes", "content-range": `bytes 0-${X - 1}/${X}` }, Z.headers) });
    }
    return new Response($, { headers: { "accept-ranges": "bytes", "content-range": `bytes 0-${X - 1}/${X}` } });
  }
  return new Response($);
};
var A1 = ($, Z) => {
  if (!$ || !Array.isArray(Z))
    return $;
  $.delete("Set-Cookie");
  for (let X = 0;X < Z.length; X++) {
    const W = Z[X].indexOf("=");
    $.append("Set-Cookie", `${Z[X].slice(0, W)}=${Z[X].slice(W + 1)}`);
  }
  return $;
};
var V1 = ($) => {
  if (!$ || typeof $ !== "object" || !u($))
    return;
  const Z = [];
  for (let [X, W] of Object.entries($)) {
    if (!X || !W)
      continue;
    if (Array.isArray(W.value))
      for (let J = 0;J < W.value.length; J++) {
        let Y = W.value[J];
        if (Y === undefined || Y === null)
          continue;
        if (typeof Y === "object")
          Y = JSON.stringify(Y);
        Z.push(x0(X, Y, W));
      }
    else {
      let J = W.value;
      if (J === undefined || J === null)
        continue;
      if (typeof J === "object")
        J = JSON.stringify(J);
      Z.push(x0(X, W.value, W));
    }
  }
  if (Z.length === 0)
    return;
  if (Z.length === 1)
    return Z[0];
  return Z;
};
var v = ($, Z) => {
  if ($?.[$.$passthrough])
    $ = $[$.$passthrough];
  if ($?.[c])
    Z.status = $[c], $ = $.response;
  if (u(Z.headers) || Z.status !== 200 || Z.redirect || Z.cookie) {
    if (typeof Z.status === "string")
      Z.status = I0[Z.status];
    if (Z.redirect) {
      if (Z.headers.Location = Z.redirect, !Z.status || Z.status < 300 || Z.status >= 400)
        Z.status = 302;
    }
    if (Z.cookie && u(Z.cookie))
      Z.headers["Set-Cookie"] = V1(Z.cookie);
    if (Z.headers["Set-Cookie"] && Array.isArray(Z.headers["Set-Cookie"]))
      Z.headers = A1(new Headers(Z.headers), Z.headers["Set-Cookie"]);
    switch ($?.constructor?.name) {
      case "String":
        return new Response($, Z);
      case "Blob":
        return O0($, Z);
      case "Object":
      case "Array":
        return Response.json($, Z);
      case "ReadableStream":
        if (!Z.headers["content-type"]?.startsWith("text/event-stream"))
          Z.headers["content-type"] = "text/event-stream; charset=utf-8";
        return new Response($, Z);
      case undefined:
        if (!$)
          return new Response("", Z);
        return Response.json($, Z);
      case "Response":
        const X = { ...Z.headers };
        if (U0)
          Z.headers = $.headers.toJSON();
        else
          for (let [J, Y] of $.headers.entries())
            if (J in Z.headers)
              Z.headers[J] = Y;
        for (let J in X)
          $.headers.append(J, X[J]);
        return $;
      case "Error":
        return h($, Z);
      case "Promise":
        return $.then((J) => v(J, Z));
      case "Function":
        return v($(), Z);
      case "Number":
      case "Boolean":
        return new Response($.toString(), Z);
      case "Cookie":
        if ($ instanceof m)
          return new Response($.value, Z);
        return new Response($?.toString(), Z);
      default:
        if ($ instanceof Response) {
          const J = { ...Z.headers };
          if (U0)
            Z.headers = $.headers.toJSON();
          else
            for (let [Y, Q] of $.headers.entries())
              if (Y in Z.headers)
                Z.headers[Y] = Q;
          for (let Y in J)
            $.headers.append(Y, J[Y]);
          return $;
        }
        if ($ instanceof Promise)
          return $.then((J) => v(J, Z));
        if ($ instanceof Error)
          return h($, Z);
        const W = JSON.stringify($);
        if (W.charCodeAt(0) === 123) {
          if (!Z.headers["Content-Type"])
            Z.headers["Content-Type"] = "application/json";
          return new Response(JSON.stringify($), Z);
        }
        return new Response(W, Z);
    }
  } else
    switch ($?.constructor?.name) {
      case "String":
        return new Response($);
      case "Blob":
        return O0($, Z);
      case "Object":
      case "Array":
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case "ReadableStream":
        return new Response($, { headers: { "Content-Type": "text/event-stream; charset=utf-8" } });
      case undefined:
        if (!$)
          return new Response("");
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case "Response":
        return $;
      case "Error":
        return h($, Z);
      case "Promise":
        return $.then((W) => {
          const J = l(W);
          if (J !== undefined)
            return J;
          return new Response("");
        });
      case "Function":
        return l($());
      case "Number":
      case "Boolean":
        return new Response($.toString());
      case "Cookie":
        if ($ instanceof m)
          return new Response($.value, Z);
        return new Response($?.toString(), Z);
      default:
        if ($ instanceof Response)
          return new Response($.body, { headers: { "Content-Type": "application/json" } });
        if ($ instanceof Promise)
          return $.then((W) => v(W, Z));
        if ($ instanceof Error)
          return h($, Z);
        const X = JSON.stringify($);
        if (X.charCodeAt(0) === 123)
          return new Response(JSON.stringify($), { headers: { "Content-Type": "application/json" } });
        return new Response(X);
    }
};
var y = ($, Z) => {
  if ($ === undefined || $ === null)
    return;
  if ($?.$passthrough)
    $ = $[$.$passthrough];
  if ($?.[c])
    Z.status = $[c], $ = $.response;
  if (u(Z.headers) || Z.status !== 200 || Z.redirect || Z.cookie) {
    if (typeof Z.status === "string")
      Z.status = I0[Z.status];
    if (Z.redirect) {
      if (Z.headers.Location = Z.redirect, !Z.status || Z.status < 300 || Z.status >= 400)
        Z.status = 302;
    }
    if (Z.cookie && u(Z.cookie))
      Z.headers["Set-Cookie"] = V1(Z.cookie);
    if (Z.headers["Set-Cookie"] && Array.isArray(Z.headers["Set-Cookie"]))
      Z.headers = A1(new Headers(Z.headers), Z.headers["Set-Cookie"]);
    switch ($?.constructor?.name) {
      case "String":
        return new Response($, Z);
      case "Blob":
        return O0($, Z);
      case "Object":
      case "Array":
        return Response.json($, Z);
      case "ReadableStream":
        if (!Z.headers["content-type"]?.startsWith("text/event-stream"))
          Z.headers["content-type"] = "text/event-stream; charset=utf-8";
        return new Response($, Z);
      case undefined:
        if (!$)
          return;
        return Response.json($, Z);
      case "Response":
        const X = Object.assign({}, Z.headers);
        if (U0)
          Z.headers = $.headers.toJSON();
        else
          for (let [J, Y] of $.headers.entries())
            if (!(J in Z.headers))
              Z.headers[J] = Y;
        for (let J in X)
          $.headers.append(J, X[J]);
        if ($.status !== Z.status)
          Z.status = $.status;
        return $;
      case "Promise":
        return $.then((J) => {
          const Y = y(J, Z);
          if (Y !== undefined)
            return Y;
          return;
        });
      case "Error":
        return h($, Z);
      case "Function":
        return y($(), Z);
      case "Number":
      case "Boolean":
        return new Response($.toString(), Z);
      case "Cookie":
        if ($ instanceof m)
          return new Response($.value, Z);
        return new Response($?.toString(), Z);
      default:
        if ($ instanceof Response) {
          const J = { ...Z.headers };
          if (U0)
            Z.headers = $.headers.toJSON();
          else
            for (let [Y, Q] of $.headers.entries())
              if (Y in Z.headers)
                Z.headers[Y] = Q;
          for (let Y in J)
            $.headers.append(Y, J[Y]);
          return $;
        }
        if ($ instanceof Promise)
          return $.then((J) => y(J, Z));
        if ($ instanceof Error)
          return h($, Z);
        const W = JSON.stringify($);
        if (W.charCodeAt(0) === 123) {
          if (!Z.headers["Content-Type"])
            Z.headers["Content-Type"] = "application/json";
          return new Response(JSON.stringify($), Z);
        }
        return new Response(W, Z);
    }
  } else
    switch ($?.constructor?.name) {
      case "String":
        return new Response($);
      case "Blob":
        return O0($, Z);
      case "Object":
      case "Array":
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case "ReadableStream":
        return new Response($, { headers: { "Content-Type": "text/event-stream; charset=utf-8" } });
      case undefined:
        if (!$)
          return new Response("");
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case "Response":
        return $;
      case "Promise":
        return $.then((W) => {
          const J = y(W, Z);
          if (J !== undefined)
            return J;
          return;
        });
      case "Error":
        return h($, Z);
      case "Function":
        return l($());
      case "Number":
      case "Boolean":
        return new Response($.toString());
      case "Cookie":
        if ($ instanceof m)
          return new Response($.value, Z);
        return new Response($?.toString(), Z);
      default:
        if ($ instanceof Response)
          return new Response($.body, { headers: { "Content-Type": "application/json" } });
        if ($ instanceof Promise)
          return $.then((W) => y(W, Z));
        if ($ instanceof Error)
          return h($, Z);
        const X = JSON.stringify($);
        if (X.charCodeAt(0) === 123)
          return new Response(JSON.stringify($), { headers: { "Content-Type": "application/json" } });
        return new Response(X);
    }
};
var l = ($) => {
  if ($?.$passthrough)
    $ = $[$.$passthrough];
  if ($?.[c])
    return v($.response, { status: $[c], headers: {} });
  switch ($?.constructor?.name) {
    case "String":
      return new Response($);
    case "Blob":
      return O0($);
    case "Object":
    case "Array":
      return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
    case "ReadableStream":
      return new Response($, { headers: { "Content-Type": "text/event-stream; charset=utf-8" } });
    case undefined:
      if (!$)
        return new Response("");
      return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
    case "Response":
      return $;
    case "Error":
      return h($);
    case "Promise":
      return $.then(l);
    case "Function":
      return l($());
    case "Number":
    case "Boolean":
      return new Response($.toString());
    default:
      if ($ instanceof Response)
        return new Response($.body, { headers: { "Content-Type": "application/json" } });
      if ($ instanceof Promise)
        return $.then(l);
      if ($ instanceof Error)
        return h($);
      const Z = JSON.stringify($);
      if (Z.charCodeAt(0) === 123)
        return new Response(JSON.stringify($), { headers: { "Content-Type": "application/json" } });
      return new Response(Z);
  }
};
var h = ($, Z) => new Response(JSON.stringify({ name: $?.name, message: $?.message, cause: $?.cause }), { status: Z?.status !== 200 ? Z?.status ?? 500 : 500, headers: Z?.headers });
var r0 = ($) => $ && typeof $ === "object" && !Array.isArray($);
var t0 = ($, Z) => {
  const X = new URL($);
  return X.pathname = Z, X.toString();
};
var O$ = ($) => typeof $ === "function" && /^\s*class\s+/.test($.toString()) || $.toString().startsWith("[object ") || u(Object.getPrototypeOf($));
var d = ($, Z, { skipKeys: X } = {}) => {
  if (r0($) && r0(Z))
    for (let [W, J] of Object.entries(Z)) {
      if (X?.includes(W))
        continue;
      if (!r0(J)) {
        $[W] = J;
        continue;
      }
      if (!(W in $)) {
        $[W] = J;
        continue;
      }
      if (O$(J)) {
        $[W] = J;
        continue;
      }
      $[W] = d($[W], J);
    }
  return $;
};
var C1 = ($, Z) => d($, Z, { skipKeys: ["properties"] });
var H = ($, Z) => {
  if (!$)
    return [];
  const X = [...Array.isArray($) ? $ : [$]], W = [];
  for (let J of X)
    if (J.$elysiaChecksum)
      W.push(J.$elysiaChecksum);
  for (let J of Array.isArray(Z) ? Z : [Z])
    if (!W.includes(J?.$elysiaChecksum))
      X.push(J);
  return X;
};
var I$ = ["start", "request", "parse", "transform", "resolve", "beforeHandle", "afterHandle", "onResponse", "mapResponse", "trace", "error", "stop", "body", "headers", "params", "query", "response", "type", "detail"];
var n = ($, Z) => {
  return { ...$, ...Z, body: Z?.body ?? $?.body, headers: Z?.headers ?? $?.headers, params: Z?.params ?? $?.params, query: Z?.query ?? $?.query, response: Z?.response ?? $?.response, type: $?.type || Z?.type, detail: d(Z?.detail ?? {}, $?.detail ?? {}), parse: H($?.parse ?? [], Z?.parse ?? []), transform: H($?.transform ?? [], Z?.transform ?? []), beforeHandle: H($?.beforeHandle ?? [], Z?.beforeHandle ?? []), afterHandle: H($?.afterHandle ?? [], Z?.afterHandle ?? []), onResponse: H($?.onResponse ?? [], Z?.onResponse ?? []), mapResponse: H($?.mapResponse ?? [], Z?.mapResponse ?? []), trace: H($?.trace ?? [], Z?.trace ?? []), error: H($?.error ?? [], Z?.error ?? []) };
};
var p = ($, { models: Z = {}, additionalProperties: X = false, dynamic: W = false }) => {
  if (!$)
    return;
  if (typeof $ === "string" && !($ in Z))
    return;
  const J = typeof $ === "string" ? Z[$] : $;
  if (J.type === "object" && "additionalProperties" in J === false)
    J.additionalProperties = X;
  if (W)
    return { schema: J, references: "", checkFunc: () => {
    }, code: "", Check: (Y) => exports_value2.Check(J, Y), Errors: (Y) => exports_value2.Errors(J, Y), Code: () => "" };
  return TypeCompiler.Compile(J, Object.values(Z));
};
var s0 = ($, { models: Z = {}, additionalProperties: X = false, dynamic: W = false }) => {
  if (!$)
    return;
  if (typeof $ === "string" && !($ in Z))
    return;
  const J = typeof $ === "string" ? Z[$] : $, Y = (_, B) => {
    if (W)
      return { schema: _, references: "", checkFunc: () => {
      }, code: "", Check: (K) => exports_value2.Check(_, K), Errors: (K) => exports_value2.Errors(_, K), Code: () => "" };
    return TypeCompiler.Compile(_, B);
  };
  if (Kind in J) {
    if ("additionalProperties" in J === false)
      J.additionalProperties = X;
    return { 200: Y(J, Object.values(Z)) };
  }
  const Q = {};
  return Object.keys(J).forEach((_) => {
    const B = J[+_];
    if (typeof B === "string") {
      if (B in Z) {
        const K = Z[B];
        K.type === "object" && "additionalProperties" in K, Q[+_] = Kind in K ? Y(K, Object.values(Z)) : K;
      }
      return;
    }
    if (B.type === "object" && "additionalProperties" in B === false)
      B.additionalProperties = X;
    Q[+_] = Kind in B ? Y(B, Object.values(Z)) : B;
  }), Q;
};
var j$ = typeof Bun !== "undefined";
var N$ = j$ && typeof Bun.hash === "function";
var j0 = ($) => {
  if (N$)
    return Bun.hash($);
  let Z = 9;
  for (let X = 0;X < $.length; )
    Z = Math.imul(Z ^ $.charCodeAt(X++), 387420489);
  return Z = Z ^ Z >>> 9;
};
var v0 = ($, Z, X) => {
  const W = (J) => {
    if (X && !J.$elysiaChecksum)
      J.$elysiaChecksum = X;
    return J;
  };
  return { ...$, ...Z, start: H($.start, ("start" in Z ? Z.start ?? [] : []).map(W)), request: H($.request, ("request" in Z ? Z.request ?? [] : []).map(W)), parse: H($.parse, "parse" in Z ? Z?.parse ?? [] : []).map(W), transform: H($.transform, (Z?.transform ?? []).map(W)), beforeHandle: H($.beforeHandle, (Z?.beforeHandle ?? []).map(W)), afterHandle: H($.afterHandle, (Z?.afterHandle ?? []).map(W)), mapResponse: H($.mapResponse, (Z?.mapResponse ?? []).map(W)), onResponse: H($.onResponse, (Z?.onResponse ?? []).map(W)), trace: $.trace, error: H($.error, (Z?.error ?? []).map(W)), stop: H($.stop, ("stop" in Z ? Z.stop ?? [] : []).map(W)) };
};
var R1 = ($, Z = true) => {
  if (!$)
    return $;
  if (typeof $ === "function") {
    if (Z)
      $.$elysiaHookType = "global";
    else
      $.$elysiaHookType = undefined;
    return $;
  }
  return $.map((X) => {
    if (Z)
      X.$elysiaHookType = "global";
    else
      X.$elysiaHookType = undefined;
    return X;
  });
};
var Y0 = ($) => {
  if (!$)
    return $;
  if (typeof $ === "function")
    return $.$elysiaHookType === "global" ? $ : undefined;
  return $.filter((Z) => Z.$elysiaHookType === "global");
};
var a0 = ($) => {
  return { ...$, type: $?.type, detail: $?.detail, parse: Y0($?.parse), transform: Y0($?.transform), beforeHandle: Y0($?.beforeHandle), afterHandle: Y0($?.afterHandle), onResponse: Y0($?.onResponse), error: Y0($?.error) };
};
var I0 = { Continue: 100, "Switching Protocols": 101, Processing: 102, "Early Hints": 103, OK: 200, Created: 201, Accepted: 202, "Non-Authoritative Information": 203, "No Content": 204, "Reset Content": 205, "Partial Content": 206, "Multi-Status": 207, "Already Reported": 208, "Multiple Choices": 300, "Moved Permanently": 301, Found: 302, "See Other": 303, "Not Modified": 304, "Temporary Redirect": 307, "Permanent Redirect": 308, "Bad Request": 400, Unauthorized: 401, "Payment Required": 402, Forbidden: 403, "Not Found": 404, "Method Not Allowed": 405, "Not Acceptable": 406, "Proxy Authentication Required": 407, "Request Timeout": 408, Conflict: 409, Gone: 410, "Length Required": 411, "Precondition Failed": 412, "Payload Too Large": 413, "URI Too Long": 414, "Unsupported Media Type": 415, "Range Not Satisfiable": 416, "Expectation Failed": 417, "I'm a teapot": 418, "Misdirected Request": 421, "Unprocessable Content": 422, Locked: 423, "Failed Dependency": 424, "Too Early": 425, "Upgrade Required": 426, "Precondition Required": 428, "Too Many Requests": 429, "Request Header Fields Too Large": 431, "Unavailable For Legal Reasons": 451, "Internal Server Error": 500, "Not Implemented": 501, "Bad Gateway": 502, "Service Unavailable": 503, "Gateway Timeout": 504, "HTTP Version Not Supported": 505, "Variant Also Negotiates": 506, "Insufficient Storage": 507, "Loop Detected": 508, "Not Extended": 510, "Network Authentication Required": 511 };
var B0 = async ($, Z) => {
  if (typeof $ !== "string")
    throw new TypeError("Cookie value must be provided as a string.");
  if (Z === null)
    throw new TypeError("Secret key must be provided.");
  const X = new TextEncoder, W = await crypto.subtle.importKey("raw", X.encode(Z), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]), J = await crypto.subtle.sign("HMAC", W, X.encode($)), Y = Array.from(new Uint8Array(J)), Q = btoa(String.fromCharCode(...Y));
  return `${$}.${Q.replace(/=+$/, "")}`;
};
var l0 = async ($, Z) => {
  if (typeof $ !== "string")
    throw new TypeError("Signed cookie string must be provided.");
  if (Z === null)
    throw new TypeError("Secret key must be provided.");
  const X = $.slice(0, $.lastIndexOf("."));
  return await B0(X, Z) === $ ? X : false;
};
var o0 = ($, Z, X = Z) => {
  for (let [W, J] of Object.entries(Z ?? {})) {
    if (I$.includes(W) || !(W in $))
      continue;
    if (typeof $[W] === "function")
      $[W](J);
    else if (typeof $[W] === "object")
      o0($[W], J, X);
  }
};
var f0 = ($) => {
  if ($.length < 16)
    return $.trim().length !== 0 && !Number.isNaN(Number($));
  if ($.length === 16) {
    const Z = Number($);
    if (Z.toString() === $)
      return $.trim().length !== 0 && !Number.isNaN(Z);
  }
  return false;
};
var S1 = typeof Bun !== "undefined" ? Bun.env : typeof process !== "undefined" ? process?.env : undefined;
var _0 = Symbol("ElysiaErrorCode");
var c = Symbol("ElysiaResponse");
var N0 = (S1?.NODE_ENV ?? S1?.ENV) === "production";
class k0 extends Error {
  code = "INTERNAL_SERVER_ERROR";
  status = 500;
  constructor($) {
    super($ ?? "INTERNAL_SERVER_ERROR");
  }
}

class e extends Error {
  code = "NOT_FOUND";
  status = 404;
  constructor($) {
    super($ ?? "NOT_FOUND");
  }
}
class M0 extends Error {
  $;
  code = "INVALID_COOKIE_SIGNATURE";
  status = 400;
  constructor($, Z) {
    super(Z ?? `"${$}" has invalid cookie signature`);
    this.key = $;
  }
}

class q extends Error {
  $;
  Z;
  X;
  code = "VALIDATION";
  status = 400;
  constructor($, Z, X) {
    const W = N0 ? undefined : ("Errors" in Z) ? Z.Errors(X).First() : exports_value2.Errors(Z, X).First(), J = W?.schema.error ? typeof W.schema.error === "function" ? W.schema.error($, Z, X) : W.schema.error : undefined, Y = W?.path?.slice(1) || "root";
    let Q = "";
    if (J)
      Q = typeof J === "object" ? JSON.stringify(J) : J + "";
    else if (N0)
      Q = JSON.stringify({ type: $, message: W?.message });
    else
      Q = JSON.stringify({ type: $, at: Y, message: W?.message, expected: exports_value2.Create(Z.schema), found: X, errors: [...Z.Errors(X)] }, null, 2);
    super(Q);
    this.type = $;
    this.validator = Z;
    this.value = X;
    Object.setPrototypeOf(this, q.prototype);
  }
  get all() {
    return [...this.validator.Errors(this.value)];
  }
  static simplifyModel($) {
    const Z = "schema" in $ ? $.schema : $;
    try {
      return exports_value2.Create(Z);
    } catch {
      return Z;
    }
  }
  get model() {
    return q.simplifyModel(this.validator);
  }
  toResponse($) {
    return new Response(this.message, { status: 400, headers: $ });
  }
}
var $1 = { open($) {
  $.data.open?.($);
}, message($, Z) {
  $.data.message?.($, Z);
}, drain($) {
  $.data.drain?.($);
}, close($, Z, X) {
  $.data.close?.($, Z, X);
} };

class D0 {
  $;
  Z;
  validator;
  constructor($, Z) {
    this.raw = $;
    this.data = Z;
    if (this.validator = $.data.validator, $.data.id)
      this.id = $.data.id;
    else {
      const X = new Uint32Array(1);
      crypto.getRandomValues(X), this.id = X[0].toString();
    }
  }
  get id() {
    return this.raw.data.id;
  }
  set id($) {
    this.raw.data.id = $;
  }
  get publish() {
    return ($, Z = undefined, X) => {
      if (this.validator?.Check(Z) === false)
        throw new q("message", this.validator, Z);
      if (typeof Z === "object")
        Z = JSON.stringify(Z);
      return this.raw.publish($, Z, X), this;
    };
  }
  get send() {
    return ($) => {
      if (this.validator?.Check($) === false)
        throw new q("message", this.validator, $);
      if (Buffer.isBuffer($))
        return this.raw.send($), this;
      if (typeof $ === "object")
        $ = JSON.stringify($);
      return this.raw.send($), this;
    };
  }
  get subscribe() {
    return ($) => {
      return this.raw.subscribe($), this;
    };
  }
  get unsubscribe() {
    return ($) => {
      return this.raw.unsubscribe($), this;
    };
  }
  get cork() {
    return ($) => {
      return this.raw.cork($), this;
    };
  }
  get close() {
    return () => {
      return this.raw.close(), this;
    };
  }
  get terminate() {
    return this.raw.terminate.bind(this.raw);
  }
  get isSubscribed() {
    return this.raw.isSubscribed.bind(this.raw);
  }
  get remoteAddress() {
    return this.raw.remoteAddress;
  }
}
var p1 = T0(J1(), 1);
var i1 = T0(X1(), 1);
var q$ = new Headers().toJSON;
var l1 = new RegExp(" (\\w+) = context", "g");
var n1 = { value: 0 };
var r1 = ({ hasTrace: $, hasTraceSet: Z = false, addFn: X, condition: W = {} }) => {
  if ($)
    return X("\nconst reporter = getReporter()\n"), (J, { name: Y, attribute: Q = "", unit: _ = 0 } = {}) => {
      const B = J.indexOf("."), K = B === -1;
      if (J !== "request" && J !== "response" && !W[K ? J : J.slice(0, B)])
        return () => {
          if (Z && J === "afterHandle")
            X("\nawait traceDone\n");
        };
      if (K)
        Y ||= J;
      else
        Y ||= "anonymous";
      X("\n" + `reporter.emit('event', {
					id,
					event: '${J}',
					type: 'begin',
					name: '${Y}',
					time: performance.now(),
					${K ? `unit: ${_},` : ""}
					${Q}
				})`.replace(/(\t| |\n)/g, "") + "\n");
      let G = false;
      return () => {
        if (G)
          return;
        if (G = true, X("\n" + `reporter.emit('event', {
							id,
							event: '${J}',
							type: 'end',
							time: performance.now()
						})`.replace(/(\t| |\n)/g, "") + "\n"), Z && J === "afterHandle")
          X("\nawait traceDone\n");
      };
    };
  else
    return () => () => {
    };
};
var A0 = ($) => {
  const Z = $.indexOf(")");
  if ($.charCodeAt(Z + 2) === 61 && $.charCodeAt(Z + 5) !== 123)
    return true;
  return $.includes("return");
};
var T$ = ($, { injectResponse: Z = "" } = {}) => ({ composeValidation: (X, W = `c.${X}`) => $ ? `c.set.status = 400; throw new ValidationError(
'${X}',
${X},
${W}
)` : `c.set.status = 400; return new ValidationError(
	'${X}',
	${X},
	${W}
).toResponse(c.set.headers)`, composeResponseValidation: (X = "r") => {
  const W = $ ? `throw new ValidationError(
'response',
response[c.set.status],
${X}
)` : `return new ValidationError(
'response',
response[c.set.status],
${X}
).toResponse(c.set.headers)`;
  return `\n${Z}
		if(!(${X} instanceof Response) && response[c.set.status]?.Check(${X}) === false) {
	if(!(response instanceof Error))
		${W}
}\n`;
} });
var b = ($, Z) => {
  if (Z.startsWith("[object "))
    return false;
  if (Z = Z.trimStart(), Z = Z.replaceAll(/^async /g, ""), /^(\w+)\(/g.test(Z))
    Z = Z.slice(Z.indexOf("("));
  const X = Z.charCodeAt(0) === 40 || Z.startsWith("function") ? Z.slice(Z.indexOf("(") + 1, Z.indexOf(")")) : Z.slice(0, Z.indexOf("=") - 1);
  if (X === "")
    return false;
  const W = X.charCodeAt(0) === 123 ? X.indexOf("...") : -1;
  if (X.charCodeAt(0) === 123) {
    if (X.includes($))
      return true;
    if (W === -1)
      return false;
  }
  if (Z.match(new RegExp(`${X}(.${$}|\\["${$}"\\])`)))
    return true;
  const J = W !== -1 ? X.slice(W + 3, X.indexOf(" ", W + 3)) : undefined;
  if (Z.match(new RegExp(`${J}(.${$}|\\["${$}"\\])`)))
    return true;
  const Y = [X];
  if (J)
    Y.push(J);
  for (let _ of Z.matchAll(l1))
    Y.push(_[1]);
  const Q = new RegExp(`{.*?} = (${Y.join("|")})`, "g");
  for (let [_] of Z.matchAll(Q))
    if (_.includes(`{ ${$}`) || _.includes(`, ${$}`))
      return true;
  return false;
};
var V0 = ($) => {
  if ($ = $.trimStart(), $.startsWith("[object"))
    return false;
  if ($ = $.replaceAll(/^async /g, ""), /^(\w+)\(/g.test($))
    $ = $.slice($.indexOf("("));
  const Z = $.charCodeAt(0) === 40 || $.startsWith("function") ? $.slice($.indexOf("(") + 1, $.indexOf(")")) : $.slice(0, $.indexOf("=") - 1);
  if (Z === "")
    return false;
  const X = Z.charCodeAt(0) === 123 ? Z.indexOf("...") : -1, W = X !== -1 ? Z.slice(X + 3, Z.indexOf(" ", X + 3)) : undefined, J = [Z];
  if (W)
    J.push(W);
  for (let Q of $.matchAll(l1))
    J.push(Q[1]);
  for (let Q of J)
    if (new RegExp(`\\b\\w+\\([^)]*\\b${Q}\\b[^)]*\\)`).test($))
      return true;
  const Y = new RegExp(`{.*?} = (${J.join("|")})`, "g");
  for (let [Q] of $.matchAll(Y))
    if (new RegExp(`\\b\\w+\\([^)]*\\b${Q}\\b[^)]*\\)`).test($))
      return true;
  return false;
};
var G0 = Symbol.for("TypeBox.Kind");
var m0 = ($, Z) => {
  if (!Z)
    return;
  if (G0 in Z && Z[G0] === $)
    return true;
  if (Z.type === "object") {
    const X = Z.properties;
    for (let W of Object.keys(X)) {
      const J = X[W];
      if (J.type === "object") {
        if (m0($, J))
          return true;
      } else if (J.anyOf) {
        for (let Y = 0;Y < J.anyOf.length; Y++)
          if (m0($, J.anyOf[Y]))
            return true;
      }
      if (G0 in J && J[G0] === $)
        return true;
    }
    return false;
  }
  return Z.properties && G0 in Z.properties && Z.properties[G0] === $;
};
var $0 = ($, Z) => {
  if (!Z)
    return;
  if (Z.type === "object") {
    const X = Z.properties;
    if (!X)
      return false;
    for (let W of Object.keys(X)) {
      const J = X[W];
      if ($ in J)
        return true;
      if (J.type === "object") {
        if ($0($, J))
          return true;
      } else if (J.anyOf) {
        for (let Y = 0;Y < J.anyOf.length; Y++)
          if ($0($, J.anyOf[Y]))
            return true;
      }
    }
    return false;
  }
  return $ in Z;
};
var Q1 = Symbol.for("TypeBox.Transform");
var Z0 = ($) => {
  if (!$)
    return;
  if ($.type === "object" && $.properties) {
    const Z = $.properties;
    for (let X of Object.keys(Z)) {
      const W = Z[X];
      if (W.type === "object") {
        if (Z0(W))
          return true;
      } else if (W.anyOf) {
        for (let Y = 0;Y < W.anyOf.length; Y++)
          if (Z0(W.anyOf[Y]))
            return true;
      }
      if (Q1 in W)
        return true;
    }
    return false;
  }
  return Q1 in $ || $.properties && Q1 in $.properties;
};
var E$ = ($) => {
  if (!$)
    return;
  const Z = $?.schema;
  if (Z && "anyOf" in Z) {
    let X = false;
    const W = Z.anyOf[0].type;
    for (let J of Z.anyOf)
      if (J.type !== W) {
        X = true;
        break;
      }
    if (!X)
      return W;
  }
  return $.schema?.type;
};
var H$ = /(?:return|=>) \S+\(/g;
var L = ($) => {
  if ($.constructor.name === "AsyncFunction")
    return true;
  const Z = $.toString();
  if (Z.includes("=> response.clone("))
    return false;
  return !!Z.match(H$);
};
var b$ = ($) => {
  if (!$.includes("query: {") || $.includes("query,") || $.includes("query }"))
    return false;
  const Z = $.indexOf("query: {");
  return $ = $.slice(Z + 9), $ = $.slice(0, $.indexOf("}")), $.split(",").map((X) => {
    const W = X.indexOf(":");
    if (W === -1)
      return X.trim();
    return X.slice(0, W).trim();
  });
};
var t1 = ({ path: $, method: Z, hooks: X, validator: W, handler: J, handleError: Y, definitions: Q, schema: _, onRequest: B, config: K, getReporter: G, setHeader: M }) => {
  const V = K.forceErrorEncapsulation || X.error.length > 0 || typeof Bun === "undefined" || X.onResponse.length > 0 || !!X.trace.length, P = typeof J === "function", z = P ? "handler(c)" : "handler", A = X.onResponse.length ? `\n;(async () => {${X.onResponse.map((O, I) => `await res${I}(c)`).join(";")}})();\n` : "", U = X.trace.map((O) => O.toString());
  let j = false;
  if (P && V0(J.toString()))
    j = true;
  if (!j)
    for (let [O, I] of Object.entries(X)) {
      if (!Array.isArray(I) || !I.length || !["parse", "transform", "beforeHandle", "afterHandle", "onResponse"].includes(O))
        continue;
      for (let F of I) {
        if (typeof F !== "function")
          continue;
        if (V0(F.toString())) {
          j = true;
          break;
        }
      }
      if (j)
        break;
    }
  const N = { parse: U.some((O) => b("parse", O)), transform: U.some((O) => b("transform", O)), handle: U.some((O) => b("handle", O)), beforeHandle: U.some((O) => b("beforeHandle", O)), afterHandle: U.some((O) => b("afterHandle", O)), error: V || U.some((O) => b("error", O)) }, w = X.trace.length > 0;
  let D = "";
  const k = W || Z !== "GET" && Z !== "HEAD" ? [J, ...X.transform, ...X.beforeHandle, ...X.afterHandle, ...X.mapResponse].map((O) => typeof O === "function" ? O.toString() : `${O}`) : [], w0 = Z !== "GET" && Z !== "HEAD" && (j || X.type !== "none" && (!!W.body || !!X.type || k.some((O) => b("body", O)))), h0 = j || W.headers || k.some((O) => b("headers", O)) || M && Object.keys(M).length, C0 = j || !!W.cookie || k.some((O) => b("cookie", O)), x = W?.cookie?.schema;
  let t = "";
  if (x?.sign) {
    if (!x.secrets)
      throw new Error(`t.Cookie required secret which is not set in (${Z}) ${$}.`);
    const O = !x.secrets ? undefined : typeof x.secrets === "string" ? x.secrets : x.secrets[0];
    if (t += `const _setCookie = c.set.cookie
		if(_setCookie) {`, x.sign === true)
      t += `for(const [key, cookie] of Object.entries(_setCookie)) {
				c.set.cookie[key].value = await signCookie(cookie.value, '${O}')
			}`;
    else
      for (let I of x.sign)
        t += `if(_setCookie['${I}']?.value) { c.set.cookie['${I}'].value = await signCookie(_setCookie['${I}'].value, '${O}') }\n`;
    t += "}\n";
  }
  const { composeValidation: X0, composeResponseValidation: R0 } = T$(V);
  if (h0)
    D += q$ ? "c.headers = c.request.headers.toJSON()\n" : `c.headers = {}
                for (const [key, value] of c.request.headers.entries())
					c.headers[key] = value
				`;
  if (C0) {
    const O = (F, R) => {
      const S = x?.[F] ?? R;
      if (!S)
        return typeof R === "string" ? `${F}: "${R}",` : `${F}: ${R},`;
      if (typeof S === "string")
        return `${F}: '${S}',`;
      if (S instanceof Date)
        return `${F}: new Date(${S.getTime()}),`;
      return `${F}: ${S},`;
    }, I = x ? `{
			secret: ${x.secrets !== undefined ? typeof x.secrets === "string" ? `'${x.secrets}'` : "[" + x.secrets.reduce((F, R) => F + `'${R}',`, "") + "]" : "undefined"},
			sign: ${x.sign === true ? true : x.sign !== undefined ? "[" + x.sign.reduce((F, R) => F + `'${R}',`, "") + "]" : "undefined"},
			${O("domain")}
			${O("expires")}
			${O("httpOnly")}
			${O("maxAge")}
			${O("path", "/")}
			${O("priority")}
			${O("sameSite")}
			${O("secure")}
		}` : "undefined";
    if (h0)
      D += `\nc.cookie = await parseCookie(c.set, c.headers.cookie, ${I})\n`;
    else
      D += `\nc.cookie = await parseCookie(c.set, c.request.headers.get('cookie'), ${I})\n`;
  }
  if (j || W.query || k.some((O) => b("query", O))) {
    let O = [], I = false;
    if (W.query && W.query.schema.type === "object")
      O = Object.keys(W.query.schema.properties);
    else
      for (let F of k) {
        const R = b$(F);
        if (!R) {
          I = true;
          continue;
        }
        for (let S of R)
          if (O.indexOf(S) === -1)
            O.push(S);
      }
    if (!I && O.length)
      D += `
			let requestUrl = c.request.url.slice(c.qi + 1)
			if(requestUrl.includes('+')) requestUrl = requestUrl.replaceAll('+', ' ')

			if(c.qi !== -1) {	
				const url = decodeURIComponent(requestUrl)
				let memory = 0

				${O.map((F, R) => `
						memory = url.indexOf('${F}=')

						const a${R} = memory === -1 ? undefined : url.slice(memory = memory + ${F.length + 1}, (memory = url.indexOf('&', memory)) === -1 ? undefined : memory)`).join("\n")}

				c.query = {
					${O.map((F, R) => `'${F}': a${R}`).join(", ")}
				}
			} else {
				c.query = {}
			}`;
    else
      D += "c.query = c.qi !== -1 ? parseQuery(decodeURIComponent(c.request.url.slice(c.qi + 1))) : {}";
  }
  const S0 = X.trace.map((O) => O.toString()).some((O) => b("set", O) || V0(O));
  j || X.trace.some((O) => b("set", O.toString()));
  const q0 = M && Object.keys(M).length || S0 || C0 || k.some((O) => b("set", O)) || B.some((O) => b("set", O.toString()));
  if (w)
    D += "\nconst id = c.$$requestId\n";
  const E = r1({ hasTrace: w, hasTraceSet: S0, condition: N, addFn: (O) => {
    D += O;
  } });
  if (D += V ? "\n try {\n" : "", S0) {
    D += "\nconst traceDone = Promise.all([";
    for (let O = 0;O < X.trace.length; O++)
      D += `new Promise(r => { reporter.once(\`res\${id}.${O}\`, r) }),`;
    D += "])\n";
  }
  const W0 = typeof J === "function" && L(J), c0 = C0 || w0 || S0 || W0 || !!X.mapResponse.length || X.parse.length > 0 || X.afterHandle.some(L) || X.beforeHandle.some(L) || X.transform.some(L), e1 = E("parse", { unit: X.parse.length });
  if (w0) {
    const O = E$(W?.body);
    if (X.type && !Array.isArray(X.type)) {
      if (X.type)
        switch (X.type) {
          case "json":
          case "application/json":
            D += "c.body = await c.request.json()\n";
            break;
          case "text":
          case "text/plain":
            D += "c.body = await c.request.text()\n";
            break;
          case "urlencoded":
          case "application/x-www-form-urlencoded":
            D += "c.body = parseQuery(await c.request.text())\n";
            break;
          case "arrayBuffer":
          case "application/octet-stream":
            D += "c.body = await c.request.arrayBuffer()\n";
            break;
          case "formdata":
          case "multipart/form-data":
            D += `c.body = {}

						const form = await c.request.formData()
						for (const key of form.keys()) {
							if (c.body[key])
								continue

							const value = form.getAll(key)
							if (value.length === 1)
								c.body[key] = value[0]
							else c.body[key] = value
						}\n`;
            break;
        }
      if (X.parse.length)
        D += "}}";
    } else {
      const F = (() => {
        if (X.parse.length && O && !Array.isArray(X.type)) {
          const R = W?.body?.schema;
          switch (O) {
            case "object":
              if (m0("File", R) || m0("Files", R))
                return `c.body = {}

								const form = await c.request.formData()
								for (const key of form.keys()) {
									if (c.body[key])
										continue

									const value = form.getAll(key)
									if (value.length === 1)
										c.body[key] = value[0]
									else c.body[key] = value
								}`;
              break;
            default:
              break;
          }
        }
      })();
      if (F)
        D += F;
      else {
        if (D += "\n", D += h0 ? "let contentType = c.headers['content-type']" : "let contentType = c.request.headers.get('content-type')", D += `
				if (contentType) {
					const index = contentType.indexOf(';')
					if (index !== -1) contentType = contentType.substring(0, index)\n`, X.parse.length) {
          D += "let used = false\n";
          const R = E("parse", { unit: X.parse.length });
          for (let S = 0;S < X.parse.length; S++) {
            const d0 = E("parse.unit", { name: X.parse[S].name }), T = `bo${S}`;
            if (S !== 0)
              D += "if(!used) {\n";
            if (D += `let ${T} = parse[${S}](c, contentType)\n`, D += `if(${T} instanceof Promise) ${T} = await ${T}\n`, D += `if(${T} !== undefined) { c.body = ${T}; used = true }\n`, d0(), S !== 0)
              D += "}";
          }
          R();
        }
        if (X.parse.length)
          D += "if (!used)";
        D += `
				switch (contentType) {
					case 'application/json':
						c.body = await c.request.json()
						break

					case 'text/plain':
						c.body = await c.request.text()
						break

					case 'application/x-www-form-urlencoded':
						c.body = parseQuery(await c.request.text())
						break

					case 'application/octet-stream':
						c.body = await c.request.arrayBuffer();
						break

					case 'multipart/form-data':
						c.body = {}

						const form = await c.request.formData()
						for (const key of form.keys()) {
							if (c.body[key])
								continue

							const value = form.getAll(key)
							if (value.length === 1)
								c.body[key] = value[0]
							else c.body[key] = value
						}

						break
					}\n`, D += "}\n";
      }
    }
    D += "\n";
  }
  if (e1(), X?.transform) {
    const O = E("transform", { unit: X.transform.length });
    for (let I = 0;I < X.transform.length; I++) {
      const F = X.transform[I], R = E("transform.unit", { name: F.name });
      if (F.$elysia === "derive")
        D += L(F) ? `Object.assign(c, await transform[${I}](c));` : `Object.assign(c, transform[${I}](c));`;
      else
        D += L(F) ? `await transform[${I}](c);` : `transform[${I}](c);`;
      R();
    }
    O();
  }
  if (W) {
    if (D += "\n", W.headers) {
      if ($0("default", W.headers.params))
        for (let [O, I] of Object.entries(exports_value2.Default(W.headers.schema, {}))) {
          const F = typeof I === "object" ? JSON.stringify(I) : `'${I}'`;
          if (F)
            D += `c.headers['${O}'] ??= ${F}\n`;
        }
      if (D += `if(headers.Check(c.headers) === false) {
				${X0("headers")}
			}`, Z0(W.headers.schema))
        D += "\nc.headers = headers.Decode(c.headers)\n";
    }
    if (W.params) {
      if ($0("default", W.params.schema))
        for (let [O, I] of Object.entries(exports_value2.Default(W.params.schema, {}))) {
          const F = typeof I === "object" ? JSON.stringify(I) : `'${I}'`;
          if (F)
            D += `c.params['${O}'] ??= ${F}\n`;
        }
      if (D += `if(params.Check(c.params) === false) {
				${X0("params")}
			}`, Z0(W.params.schema))
        D += "\nc.params = params.Decode(c.params)\n";
    }
    if (W.query) {
      if ($0("default", W.query.schema))
        for (let [O, I] of Object.entries(exports_value2.Default(W.query.schema, {}))) {
          const F = typeof I === "object" ? JSON.stringify(I) : `'${I}'`;
          if (F)
            D += `c.query['${O}'] ??= ${F}\n`;
        }
      if (D += `if(query.Check(c.query) === false) {
				${X0("query")}
			}`, Z0(W.query.schema))
        D += "\nc.query = query.Decode(Object.assign({}, c.query))\n";
    }
    if (W.body) {
      if ($0("default", W.body.schema))
        D += `if(body.Check(c.body) === false) {
    				c.body = Object.assign(${JSON.stringify(exports_value2.Default(W.body.schema, null) ?? {})}, c.body)

    				if(body.Check(c.query) === false) {
        				${X0("body")}
     			}
            }`;
      else
        D += `if(body.Check(c.body) === false) {
			${X0("body")}
		}`;
      if (Z0(W.body.schema))
        D += "\nc.body = body.Decode(c.body)\n";
    }
    if (u(W.cookie?.schema.properties ?? {})) {
      if (D += `const cookieValue = {}
    			for(const [key, value] of Object.entries(c.cookie))
    				cookieValue[key] = value.value\n`, $0("default", W.cookie.schema))
        for (let [O, I] of Object.entries(exports_value2.Default(W.cookie.schema, {})))
          D += `cookieValue['${O}'] = ${typeof I === "object" ? JSON.stringify(I) : I}\n`;
      if (D += `if(cookie.Check(cookieValue) === false) {
				${X0("cookie", "cookieValue")}
			}`, Z0(W.cookie.schema))
        D += "\nc.cookie = params.Decode(c.cookie)\n";
    }
  }
  if (X?.beforeHandle) {
    const O = E("beforeHandle", { unit: X.beforeHandle.length });
    for (let I = 0;I < X.beforeHandle.length; I++) {
      const F = X.beforeHandle[I], R = E("beforeHandle.unit", { name: F.name }), S = A0(F.toString());
      if (F.$elysia === "resolve")
        D += L(F) ? `Object.assign(c, await beforeHandle[${I}](c));` : `Object.assign(c, beforeHandle[${I}](c));`;
      else if (!S)
        D += L(F) ? `await beforeHandle[${I}](c);\n` : `beforeHandle[${I}](c);\n`, R();
      else {
        D += L(F) ? `be = await beforeHandle[${I}](c);\n` : `be = beforeHandle[${I}](c);\n`, R(), D += "if(be !== undefined) {\n";
        const d0 = E("afterHandle", { unit: X.transform.length });
        if (X.afterHandle) {
          E("handle", { name: P ? J.name : undefined })();
          for (let T = 0;T < X.afterHandle.length; T++) {
            const $$ = A0(X.afterHandle[T].toString()), Z$ = E("afterHandle.unit", { name: X.afterHandle[T].name });
            if (D += "c.response = be\n", !$$)
              D += L(X.afterHandle[T]) ? `await afterHandle[${T}](c, be)\n` : `afterHandle[${T}](c, be)\n`;
            else
              D += L(X.afterHandle[T]) ? `af = await afterHandle[${T}](c)\n` : `af = afterHandle[${T}](c)\n`, D += "if(af !== undefined) { c.response = be = af }\n";
            Z$();
          }
        }
        if (d0(), W.response)
          D += R0("be");
        if (X.mapResponse.length) {
          D += "c.response = be";
          for (let T = 0;T < X.mapResponse.length; T++)
            D += `\nif(mr === undefined) {
							mr = onMapResponse[${T}](c)
							if(mr instanceof Promise) mr = await mr
							if(mr !== undefined) c.response = mr
						}\n`;
        }
        D += t, D += "return mapEarlyResponse(be, c.set)}\n";
      }
    }
    O();
  }
  if (X?.afterHandle.length) {
    const O = E("handle", { name: P ? J.name : undefined });
    if (X.afterHandle.length)
      D += W0 ? `let r = c.response = await ${z};\n` : `let r = c.response = ${z};\n`;
    else
      D += W0 ? `let r = await ${z};\n` : `let r = ${z};\n`;
    O();
    const I = E("afterHandle", { unit: X.afterHandle.length });
    for (let F = 0;F < X.afterHandle.length; F++) {
      const R = A0(X.afterHandle[F].toString()), S = E("afterHandle.unit", { name: X.afterHandle[F].name });
      if (!R)
        D += L(X.afterHandle[F]) ? `await afterHandle[${F}](c)\n` : `afterHandle[${F}](c)\n`, S();
      else if (D += L(X.afterHandle[F]) ? `af = await afterHandle[${F}](c)\n` : `af = afterHandle[${F}](c)\n`, S(), W.response)
        D += "if(af !== undefined) {", I(), D += R0("af"), D += "c.response = af }";
      else
        D += "if(af !== undefined) {", I(), D += "c.response = af}\n";
    }
    if (I(), D += "r = c.response\n", W.response)
      D += R0();
    if (D += t, X.mapResponse.length)
      for (let F = 0;F < X.mapResponse.length; F++)
        D += `\nmr = onMapResponse[${F}](c)
				if(mr instanceof Promise) mr = await mr
				if(mr !== undefined) c.response = mr\n`;
    if (q0)
      D += "return mapResponse(r, c.set)\n";
    else
      D += "return mapCompactResponse(r)\n";
  } else {
    const O = E("handle", { name: P ? J.name : undefined });
    if (W.response || X.mapResponse.length) {
      if (D += W0 ? `let r = await ${z};\n` : `let r = ${z};\n`, O(), W.response)
        D += R0();
      if (E("afterHandle")(), X.mapResponse.length) {
        D += "c.response = r";
        for (let I = 0;I < X.mapResponse.length; I++)
          D += `\nif(mr === undefined) { 
						mr = onMapResponse[${I}](c)
						if(mr instanceof Promise) mr = await mr
    					if(mr !== undefined) r = c.response = mr
					}\n`;
      }
      if (D += t, J instanceof Response)
        D += `return ${z}.clone()\n`;
      else if (q0)
        D += "return mapResponse(r, c.set)\n";
      else
        D += "return mapCompactResponse(r)\n";
    } else if (N.handle || C0) {
      if (D += W0 ? `let r = await ${z};\n` : `let r = ${z};\n`, O(), E("afterHandle")(), X.mapResponse.length) {
        D += "c.response = r";
        for (let I = 0;I < X.mapResponse.length; I++)
          D += `\nif(mr === undefined) {
							mr = onMapResponse[${I}](c)
							if(mr instanceof Promise) mr = await mr
    						if(mr !== undefined) r = c.response = mr
						}\n`;
      }
      if (D += t, q0)
        D += "return mapResponse(r, c.set)\n";
      else
        D += "return mapCompactResponse(r)\n";
    } else {
      O();
      const I = W0 ? `await ${z}` : z;
      if (E("afterHandle")(), J instanceof Response)
        D += `return ${z}.clone()\n`;
      else if (q0)
        D += `return mapResponse(${I}, c.set)\n`;
      else
        D += `return mapCompactResponse(${I})\n`;
    }
  }
  if (V || A) {
    if (D += `
} catch(error) {`, !c0)
      D += "return (async () => {";
    D += `const set = c.set

		if (!set.status || set.status < 300) set.status = error?.status || 500
	`;
    const O = E("error", { unit: X.error.length });
    if (X.error.length) {
      D += `
				c.error = error
				c.code = error.code ?? error[ERROR_CODE] ?? "UNKNOWN"
			`;
      for (let I = 0;I < X.error.length; I++) {
        const F = `er${I}`, R = E("error.unit", { name: X.error[I].name });
        if (D += `\nlet ${F} = handleErrors[${I}](c)\n`, L(X.error[I]))
          D += `if (${F} instanceof Promise) ${F} = await ${F}\n`;
        R(), D += `${F} = mapEarlyResponse(${F}, set)\n`, D += `if (${F}) {`, D += `return ${F} }\n`;
      }
    }
    if (O(), D += "return handleError(c, error)\n\n", !c0)
      D += "})()";
    if (D += "}", A || w) {
      D += " finally { ";
      const I = E("response", { unit: X.onResponse.length });
      D += A, I(), D += "}";
    }
  }
  return D = `const {
		handler,
		handleError,
		hooks: {
			transform,
			resolve,
			beforeHandle,
			afterHandle,
			mapResponse: onMapResponse,
			parse,
			error: handleErrors,
			onResponse
		},
		validator: {
			body,
			headers,
			params,
			query,
			response,
			cookie
		},
		utils: {
			mapResponse,
			mapCompactResponse,
			mapEarlyResponse,
			parseQuery
		},
		error: {
			NotFoundError,
			ValidationError,
			InternalServerError
		},
		schema,
		definitions,
		ERROR_CODE,
		getReporter,
		requestId,
		parseCookie,
		signCookie,
		decodeURIComponent
	} = hooks

	${X.onResponse.length ? `const ${X.onResponse.map((O, I) => `res${I} = onResponse[${I}]`).join(",")}` : ""}

	return ${c0 ? "async" : ""} function handle(c) {
		${X.beforeHandle.length ? "let be" : ""}
		${X.afterHandle.length ? "let af" : ""}
		${X.mapResponse.length ? "let mr" : ""}

		${_ && Q ? "c.schema = schema; c.defs = definitions;" : ""}
		${D}
	}`, Function("hooks", D)({ handler: J, hooks: X, validator: W, handleError: Y, utils: { mapResponse: v, mapCompactResponse: l, mapEarlyResponse: y, parseQuery: p1.parse }, error: { NotFoundError: e, ValidationError: q, InternalServerError: k0 }, schema: _, definitions: Q, ERROR_CODE: _0, getReporter: G, requestId: n1, parseCookie: g0, signCookie: B0, decodeURIComponent: i1.default });
};
var Y1 = ($) => {
  let Z = "", X = "";
  for (let z of Object.keys($.decorators))
    Z += `,${z}: app.decorators.${z}`;
  const { router: W, staticRouter: J } = $, Y = $.event.trace.length > 0, Q = `
	const route = router.find(request.method, path) ${W.root.ALL ? '?? router.find("ALL", path)' : ""}
	if (route === null)
		return ${$.event.error.length ? "app.handleError(ctx, notFound)" : $.event.request.length ? `new Response(error404Message, {
					status: ctx.set.status === 200 ? 404 : ctx.set.status,
					headers: ctx.set.headers
				})` : "error404.clone()"}

	ctx.params = route.params

	return route.store(ctx)`;
  let _ = "";
  for (let [z, { code: A, all: U }] of Object.entries(J.map))
    _ += `case '${z}':\nswitch(request.method) {\n${A}\n${U ?? "default: break map"}}\n\n`;
  const B = $.event.request.some(L);
  if (X += `const {
		app,
		app: { store, router, staticRouter, wsRouter },
		mapEarlyResponse,
		NotFoundError,
		requestId,
		getReporter,
		handleError
	} = data

	const notFound = new NotFoundError()

	${$.event.request.length ? "const onRequest = app.event.request" : ""}
	${J.variables}
	${$.event.error.length ? "" : `
	const error404Message = notFound.message.toString()
	const error404 = new Response(error404Message, { status: 404 });
	`}

	return ${B ? "async" : ""} function map(request) {\n`, $.event.request.length)
    X += "let re";
  const K = $.event.trace.map((z) => z.toString()), G = r1({ hasTrace: Y, hasTraceSet: $.event.trace.some((z) => {
    const A = z.toString();
    return b("set", A) || V0(A);
  }), condition: { request: K.some((z) => b("request", z) || V0(z)) }, addFn: (z) => {
    X += z;
  } });
  if ($.event.request.length) {
    X += `
			${Y ? "const id = +requestId.value++" : ""}

			const ctx = {
				request,
				store,
				set: {
					headers: ${Object.keys($.setHeaders ?? {}).length ? "Object.assign({}, app.setHeaders)" : "{}"},
					status: 200
				}
				${Y ? ",$$requestId: +id" : ""}
				${Z}
			}
		`;
    const z = G("request", { attribute: "ctx", unit: $.event.request.length });
    X += "\n try {\n";
    for (let A = 0;A < $.event.request.length; A++) {
      const U = $.event.request[A], j = A0(U.toString()), N = L(U), w = G("request.unit", { name: $.event.request[A].name });
      if (j) {
        if (X += `re = mapEarlyResponse(
					${N ? "await" : ""} onRequest[${A}](ctx),
					ctx.set
				)\n`, w(), j)
          X += "if(re !== undefined) return re\n";
      } else
        X += `${N ? "await" : ""} onRequest[${A}](ctx)\n`, w();
    }
    X += `} catch (error) {
			return app.handleError(ctx, error)
		}`, z(), X += `
		const url = request.url
		const s = url.indexOf('/', 11)
		const qi = ctx.qi = url.indexOf('?', s + 1)
		const path = ctx.path = url.substring(s, qi === -1 ? undefined : qi)`;
  } else
    X += `
		const url = request.url
		const s = url.indexOf('/', 11)
		const qi = url.indexOf('?', s + 1)
		const path = url.substring(s, qi === -1 ? undefined : qi)
		${Y ? "const id = +requestId.value++" : ""}
		const ctx = {
			request,
			store,
			qi,
			path,
			set: {
				headers: ${Object.keys($.setHeaders ?? {}).length ? "Object.assign({}, app.setHeaders)" : "{}"},
				status: 200
			}
			${Y ? ",$$requestId: id" : ""}
			${Z}
		}`, G("request", { unit: $.event.request.length, attribute: K.some((z) => b("context", z)) || K.some((z) => b("store", z)) || K.some((z) => b("set", z)) ? "ctx" : "" })();
  const { wsPaths: M, wsRouter: V } = $;
  if (Object.keys(M).length || V.history.length) {
    X += `
			if(request.method === 'GET') {
				switch(path) {`;
    for (let [z, A] of Object.entries(M))
      X += `
					case '${z}':
						if(request.headers.get('upgrade') === 'websocket')
							return st${A}(ctx)

						break`;
    X += `
				default:
					if(request.headers.get('upgrade') === 'websocket') {
						const route = wsRouter.find('ws', path)

						if(route) {
							ctx.params = route.params

							return route.store(ctx)
						}
					}

					break
			}
		}\n`;
  }
  X += `
		map: switch(path) {
			${_}

			default:
				break
		}

		${Q}
	}`;
  const P = B1($);
  return $.handleError = P, Function("data", X)({ app: $, mapEarlyResponse: y, NotFoundError: e, getReporter: () => $.reporter, requestId: n1, handleError: P });
};
var B1 = ($) => {
  let Z = `const {
		app: { event: { error: onError, onResponse: res } },
		mapResponse,
		ERROR_CODE,
		ELYSIA_RESPONSE
	} = inject

	return ${$.event.error.find(L) ? "async" : ""} function(context, error) {
		let r

		const { set } = context

		context.code = error.code
		context.error = error

		if(error[ELYSIA_RESPONSE]) {
			error.status = error[ELYSIA_RESPONSE]
			error.message = error.response
		}
`;
  for (let X = 0;X < $.event.error.length; X++) {
    const W = $.event.error[X], J = `${L(W) ? "await " : ""}onError[${X}](context)`;
    if (A0(W.toString()))
      Z += `r = ${J}; if(r !== undefined) {
				if(r instanceof Response) return r

				if(r[ELYSIA_RESPONSE]) {
					error.status = error[ELYSIA_RESPONSE]
					error.message = error.response
				}
		
				if(set.status === 200) set.status = error.status
				return mapResponse(r, set)
			}\n`;
    else
      Z += J + "\n";
  }
  return Z += `if(error.constructor.name === "ValidationError" || error.constructor.name === "TransformDecodeError") {
		set.status = error.status ?? 400
		return new Response(
			error.message,
			{ headers: set.headers, status: set.status }
		)
	} else {
		if(error.code && typeof error.status === "number")
			return new Response(
				error.message,
				{ headers: set.headers, status: error.status }
			)

		return mapResponse(error, set)
	}
}`, Function("inject", Z)({ app: $, mapResponse: v, ERROR_CODE: _0, ELYSIA_RESPONSE: c });
};
var u0 = T0(J1(), 1);
var _1 = ($) => async (Z) => {
  const X = { cookie: {}, status: 200, headers: {} };
  let W;
  if ($.decorators)
    W = $.decorators, W.request = Z, W.set = X, W.store = $.store;
  else
    W = { set: X, store: $.store, request: Z };
  const J = Z.url, Y = J.indexOf("/", 11), Q = J.indexOf("?", Y + 1), _ = Q === -1 ? J.substring(Y) : J.substring(Y, Q);
  try {
    for (let U = 0;U < $.event.request.length; U++) {
      const j = $.event.request[U];
      let N = j(W);
      if (N instanceof Promise)
        N = await N;
      if (N = y(N, X), N)
        return N;
    }
    const B = $.dynamicRouter.find(Z.method, _) ?? $.dynamicRouter.find("ALL", _);
    if (!B)
      throw new e;
    const { handle: K, hooks: G, validator: M, content: V } = B.store;
    let P;
    if (Z.method !== "GET" && Z.method !== "HEAD")
      if (V)
        switch (V) {
          case "application/json":
            P = await Z.json();
            break;
          case "text/plain":
            P = await Z.text();
            break;
          case "application/x-www-form-urlencoded":
            P = u0.parse(await Z.text());
            break;
          case "application/octet-stream":
            P = await Z.arrayBuffer();
            break;
          case "multipart/form-data":
            P = {};
            const U = await Z.formData();
            for (let j of U.keys()) {
              if (P[j])
                continue;
              const N = U.getAll(j);
              if (N.length === 1)
                P[j] = N[0];
              else
                P[j] = N;
            }
            break;
        }
      else {
        let U = Z.headers.get("content-type");
        if (U) {
          const j = U.indexOf(";");
          if (j !== -1)
            U = U.slice(0, j);
          for (let N = 0;N < G.parse.length; N++) {
            let w = G.parse[N](W, U);
            if (w instanceof Promise)
              w = await w;
            if (w) {
              P = w;
              break;
            }
          }
          if (P === undefined)
            switch (U) {
              case "application/json":
                P = await Z.json();
                break;
              case "text/plain":
                P = await Z.text();
                break;
              case "application/x-www-form-urlencoded":
                P = u0.parse(await Z.text());
                break;
              case "application/octet-stream":
                P = await Z.arrayBuffer();
                break;
              case "multipart/form-data":
                P = {};
                const N = await Z.formData();
                for (let w of N.keys()) {
                  if (P[w])
                    continue;
                  const D = N.getAll(w);
                  if (D.length === 1)
                    P[w] = D[0];
                  else
                    P[w] = D;
                }
                break;
            }
        }
      }
    W.body = P, W.params = B?.params || undefined, W.query = Q === -1 ? {} : u0.parse(J.substring(Q + 1)), W.headers = {};
    for (let [U, j] of Z.headers.entries())
      W.headers[U] = j;
    const z = M?.cookie?.schema;
    W.cookie = await g0(W.set, W.headers.cookie, z ? { secret: z.secrets !== undefined ? typeof z.secrets === "string" ? z.secrets : z.secrets.join(",") : undefined, sign: z.sign === true ? true : z.sign !== undefined ? typeof z.sign === "string" ? z.sign : z.sign.join(",") : undefined } : undefined);
    for (let U = 0;U < G.transform.length; U++) {
      const j = G.transform[U](W);
      if (G.transform[U].$elysia === "derive")
        if (j instanceof Promise)
          Object.assign(W, await j);
        else
          Object.assign(W, j);
      else if (j instanceof Promise)
        await j;
    }
    if (M) {
      if (M.headers) {
        const U = {};
        for (let j in Z.headers)
          U[j] = Z.headers.get(j);
        if (M.headers.Check(U) === false)
          throw new q("header", M.headers, U);
      }
      if (M.params?.Check(W.params) === false)
        throw new q("params", M.params, W.params);
      if (M.query?.Check(W.query) === false)
        throw new q("query", M.query, W.query);
      if (M.cookie) {
        const U = {};
        for (let [j, N] of Object.entries(W.cookie))
          U[j] = N.value;
        if (M.cookie?.Check(U) === false)
          throw new q("cookie", M.cookie, U);
      }
      if (M.body?.Check(P) === false)
        throw new q("body", M.body, P);
    }
    for (let U = 0;U < G.beforeHandle.length; U++) {
      let j = G.beforeHandle[U](W);
      if (j instanceof Promise)
        j = await j;
      if (j !== undefined) {
        W.response = j;
        for (let w = 0;w < G.afterHandle.length; w++) {
          let D = G.afterHandle[w](W);
          if (D instanceof Promise)
            D = await D;
          if (D)
            j = D;
        }
        const N = y(j, W.set);
        if (N)
          return N;
      }
    }
    let A = K(W);
    if (A instanceof Promise)
      A = await A;
    if (!G.afterHandle.length) {
      const U = M?.response?.[A.status];
      if (U?.Check(A) === false)
        throw new q("response", U, A);
    } else {
      W.response = A;
      for (let U = 0;U < G.afterHandle.length; U++) {
        let j = G.afterHandle[U](W);
        if (j instanceof Promise)
          j = await j;
        const N = y(j, W.set);
        if (N !== undefined) {
          const w = M?.response?.[A.status];
          if (w?.Check(N) === false)
            throw new q("response", w, N);
          return N;
        }
      }
    }
    if (W.set.cookie && z?.sign) {
      const U = !z.secrets ? undefined : typeof z.secrets === "string" ? z.secrets : z.secrets[0];
      if (z.sign === true)
        for (let [j, N] of Object.entries(W.set.cookie))
          W.set.cookie[j].value = await B0(N.value, "${secret}");
      else
        for (let j of z.sign) {
          if (!(j in z.properties))
            continue;
          if (W.set.cookie[j]?.value)
            W.set.cookie[j].value = await B0(W.set.cookie[j].value, U);
        }
    }
    return v(A, W.set);
  } catch (B) {
    if (B.status)
      X.status = B.status;
    return $.handleError(W, B);
  } finally {
    for (let B of $.event.onResponse)
      await B(W);
  }
};
var s1 = ($) => async (Z, X) => {
  const W = Object.assign(Z, { error: X, code: X.code });
  W.set = Z.set;
  for (let J = 0;J < $.event.error.length; J++) {
    let Y = $.event.error[J](W);
    if (Y instanceof Promise)
      Y = await Y;
    if (Y !== undefined && Y !== null)
      return v(Y, Z.set);
  }
  return new Response(typeof X.cause === "string" ? X.cause : X.message, { headers: Z.set.headers, status: X.status ?? 500 });
};
var C = Object.assign({}, Type);
try {
  TypeSystem.Format("email", ($) => /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test($)), TypeSystem.Format("uuid", ($) => /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test($)), TypeSystem.Format("date", ($) => !Number.isNaN(new Date($).getTime())), TypeSystem.Format("date-time", ($) => !Number.isNaN(new Date($).getTime()));
} catch {
}
var o1 = ($) => {
  if (typeof $ === "string")
    switch ($.slice(-1)) {
      case "k":
        return +$.slice(0, $.length - 1) * 1024;
      case "m":
        return +$.slice(0, $.length - 1) * 1048576;
      default:
        return +$;
    }
  return $;
};
var G1 = ($, Z) => {
  if (!(Z instanceof Blob))
    return false;
  if ($.minSize && Z.size < o1($.minSize))
    return false;
  if ($.maxSize && Z.size > o1($.maxSize))
    return false;
  if ($.extension)
    if (typeof $.extension === "string") {
      if (!Z.type.startsWith($.extension))
        return false;
    } else {
      for (let X = 0;X < $.extension.length; X++)
        if (Z.type.startsWith($.extension[X]))
          return true;
      return false;
    }
  return true;
};
var L$ = TypeSystem.Type("Files", ($, Z) => {
  if (!Array.isArray(Z))
    return G1($, Z);
  if ($.minItems && Z.length < $.minItems)
    return false;
  if ($.maxItems && Z.length > $.maxItems)
    return false;
  for (let X = 0;X < Z.length; X++)
    if (!G1($, Z[X]))
      return false;
  return true;
});
exports_format.Set("numeric", ($) => !!$ && !isNaN(+$));
exports_format.Set("boolean", ($) => $ === "true" || $ === "false");
exports_format.Set("ObjectString", ($) => {
  let Z = $.charCodeAt(0);
  if (Z === 9 || Z === 10 || Z === 32)
    Z = $.trimStart().charCodeAt(0);
  if (Z !== 123 && Z !== 91)
    return false;
  try {
    return JSON.parse($), true;
  } catch {
    return false;
  }
});
var a = { Numeric: ($) => {
  const Z = Type.Number($);
  return C.Transform(C.Union([C.String({ format: "numeric", default: 0 }), C.Number($)], $)).Decode((X) => {
    const W = +X;
    if (isNaN(W))
      return X;
    if ($ && !exports_value2.Check(Z, W))
      throw new q("property", Z, W);
    return W;
  }).Encode((X) => X);
}, BooleanString: ($) => {
  const Z = Type.Boolean($);
  return C.Transform(C.Union([C.String({ format: "boolean", default: false }), C.Boolean($)], $)).Decode((X) => {
    if (typeof X === "string")
      return X === "true";
    if ($ && !exports_value2.Check(Z, X))
      throw new q("property", Z, X);
    return X;
  }).Encode((X) => X);
}, ObjectString: ($, Z) => C.Transform(C.Union([C.String({ format: "ObjectString", default: "" }), C.Object($, Z)], Z)).Decode((X) => {
  if (typeof X === "string")
    try {
      return JSON.parse(X);
    } catch {
      return X;
    }
  return X;
}).Encode((X) => JSON.stringify(X)), File: TypeSystem.Type("File", G1), Files: ($ = {}) => C.Transform(C.Union([L$($)])).Decode((Z) => {
  if (Array.isArray(Z))
    return Z;
  return [Z];
}).Encode((Z) => Z), Nullable: ($) => C.Union([C.Null(), $]), MaybeEmpty: ($) => C.Union([C.Null(), C.Undefined(), $]), Cookie: ($, Z) => C.Object($, Z) };
C.BooleanString = a.BooleanString;
C.ObjectString = a.ObjectString;
C.Numeric = a.Numeric;
C.File = ($ = {}) => a.File({ default: "File", ...$, extension: $?.type, type: "string", format: "binary" });
C.Files = ($ = {}) => a.Files({ ...$, elysiaMeta: "Files", default: "Files", extension: $?.type, type: "array", items: { ...$, default: "Files", type: "string", format: "binary" } });
C.Nullable = ($) => a.Nullable($);
C.MaybeEmpty = a.MaybeEmpty;
C.Cookie = a.Cookie;

class r {
  config;
  dependencies = {};
  store = {};
  decorators = {};
  definitions = { type: {}, error: {} };
  schema = {};
  macros = [];
  event = { start: [], request: [], parse: [], transform: [], beforeHandle: [], afterHandle: [], mapResponse: [], onResponse: [], trace: [], error: [], stop: [] };
  reporter = new N1;
  server = null;
  getServer() {
    return this.server;
  }
  validator = null;
  router = new o;
  wsRouter = new o;
  routes = [];
  staticRouter = { handlers: [], variables: "", map: {}, all: "" };
  wsPaths = {};
  dynamicRouter = new o;
  lazyLoadModules = [];
  path = "";
  stack = undefined;
  constructor($) {
    if (this.config = { forceErrorEncapsulation: true, prefix: "", aot: true, strictPath: false, scoped: false, cookie: {}, analytic: false, ...$ || {}, seed: $?.seed === undefined ? "" : $?.seed }, $?.analytic && ($?.name || $?.seed !== undefined))
      this.stack = new Error().stack;
  }
  add($, Z, X, W, { allowMeta: J = false, skipPrefix: Y = false } = { allowMeta: false, skipPrefix: false }) {
    if (typeof Z === "string")
      Z = [Z];
    for (let Q of Z) {
      if (Q = Q === "" ? Q : Q.charCodeAt(0) === 47 ? Q : `/${Q}`, this.config.prefix && !Y && !this.config.scoped)
        Q = this.config.prefix + Q;
      if (W?.type)
        switch (W.type) {
          case "text":
            W.type = "text/plain";
            break;
          case "json":
            W.type = "application/json";
            break;
          case "formdata":
            W.type = "multipart/form-data";
            break;
          case "urlencoded":
            W.type = "application/x-www-form-urlencoded";
            break;
          case "arrayBuffer":
            W.type = "application/octet-stream";
            break;
          default:
            break;
        }
      const _ = this.definitions.type;
      let B = p(W?.cookie ?? this.validator?.cookie, { dynamic: !this.config.aot, models: _, additionalProperties: true });
      if (u(this.config.cookie ?? {}))
        if (B)
          B.schema = C1(B.schema, this.config.cookie ?? {});
        else
          B = p(C.Cookie({}, this.config.cookie), { dynamic: !this.config.aot, models: _, additionalProperties: true });
      const K = { body: p(W?.body ?? this.validator?.body, { dynamic: !this.config.aot, models: _ }), headers: p(W?.headers ?? this.validator?.headers, { dynamic: !this.config.aot, models: _, additionalProperties: true }), params: p(W?.params ?? this.validator?.params, { dynamic: !this.config.aot, models: _ }), query: p(W?.query ?? this.validator?.query, { dynamic: !this.config.aot, models: _ }), cookie: B, response: s0(W?.response ?? this.validator?.response, { dynamic: !this.config.aot, models: _ }) }, G = this.event, M = Q.endsWith("/") ? Q.slice(0, Q.length - 1) : Q + "/";
      if (this.macros.length) {
        const U = (N) => (w, D) => {
          if (typeof w === "function" || Array.isArray(w)) {
            if (!W[N])
              W[N] = [];
            if (typeof W[N] === "function")
              W[N] = [W[N]];
            if (Array.isArray(w))
              W[N] = W[N].concat(w);
            else
              W[N].push(w);
            return;
          }
          const { insert: k = "after", stack: w0 = "local" } = w;
          if (w0 === "global") {
            if (!Array.isArray(D))
              if (k === "before")
                G[N].unshift(D);
              else
                G[N].push(D);
            else if (k === "before")
              G[N] = D.concat(G[N]);
            else
              G[N] = G[N].concat(D);
            return;
          } else {
            if (!W[N])
              W[N] = [];
            if (typeof W[N] === "function")
              W[N] = [W[N]];
            if (!Array.isArray(D))
              if (k === "before")
                W[N].unshift(D);
              else
                W[N].push(D);
            else if (k === "before")
              W[N] = D.concat(W[N]);
            else
              W[N] = W[N].concat(D);
            return;
          }
        }, j = { events: { global: G, local: W }, onParse: U("parse"), onTransform: U("transform"), onBeforeHandle: U("beforeHandle"), onAfterHandle: U("afterHandle"), onResponse: U("onResponse"), onError: U("error") };
        for (let N of this.macros)
          o0(N(j), W);
      }
      const V = n(G, W), P = typeof X === "function";
      if (this.config.aot === false) {
        if (this.dynamicRouter.add($, Q, { validator: K, hooks: V, content: W?.type, handle: X }), this.config.strictPath === false)
          this.dynamicRouter.add($, M, { validator: K, hooks: V, content: W?.type, handle: X });
        this.routes.push({ method: $, path: Q, composed: null, handler: X, hooks: V });
        return;
      }
      const z = t1({ path: Q, method: $, hooks: V, validator: K, handler: X, handleError: this.handleError, onRequest: this.event.request, config: this.config, definitions: J ? this.definitions.type : undefined, schema: J ? this.schema : undefined, getReporter: () => this.reporter, setHeader: this.setHeaders });
      if (!P) {
        const U = Object.assign({ headers: {}, query: {}, params: {}, body: undefined, request: new Request(`http://localhost${Q}`), store: this.store, path: Q, set: { headers: this.setHeaders ?? {}, status: 200 } }, this.decorators);
        let j;
        for (let N of Object.values(V.request))
          try {
            const w = y(N(U), U.set);
            if (w !== undefined) {
              j = w;
              break;
            }
          } catch (w) {
            j = this.handleError(U, w);
            break;
          }
        if (j)
          z.response = j;
        else
          try {
            z.response = z(U);
          } catch (N) {
            z.response = this.handleError(U, N);
          }
      }
      const A = this.routes.findIndex((U) => U.path === Q && U.method === $);
      if (A !== -1)
        this.routes.splice(A, 1);
      if (this.routes.push({ method: $, path: Q, composed: z, handler: X, hooks: V }), $ === "$INTERNALWS") {
        const U = this.config.strictPath ? undefined : Q.endsWith("/") ? Q.slice(0, Q.length - 1) : Q + "/";
        if (Q.indexOf(":") === -1 && Q.indexOf("*") === -1) {
          const j = this.staticRouter.handlers.length;
          if (this.staticRouter.handlers.push(z), z.response instanceof Response)
            this.staticRouter.variables += `const st${j} = staticRouter.handlers[${j}].response\n`;
          else
            this.staticRouter.variables += `const st${j} = staticRouter.handlers[${j}]\n`;
          if (this.wsPaths[Q] = j, U)
            this.wsPaths[U] = j;
        } else if (this.wsRouter.add("ws", Q, z), U)
          this.wsRouter.add("ws", U, z);
        return;
      }
      if (Q.indexOf(":") === -1 && Q.indexOf("*") === -1) {
        const U = this.staticRouter.handlers.length;
        if (this.staticRouter.handlers.push(z), z.response instanceof Response)
          this.staticRouter.variables += `const st${U} = staticRouter.handlers[${U}].response\n`;
        else
          this.staticRouter.variables += `const st${U} = staticRouter.handlers[${U}]\n`;
        if (!this.staticRouter.map[Q])
          this.staticRouter.map[Q] = { code: "" };
        if ($ === "ALL")
          this.staticRouter.map[Q].all = `default: return st${U}(ctx)\n`;
        else if (z.response instanceof Response)
          this.staticRouter.map[Q].code = `case '${$}': return st${U}.clone()\n${this.staticRouter.map[Q].code}`;
        else
          this.staticRouter.map[Q].code = `case '${$}': return st${U}(ctx)\n${this.staticRouter.map[Q].code}`;
        if (!this.config.strictPath) {
          if (!this.staticRouter.map[M])
            this.staticRouter.map[M] = { code: "" };
          if ($ === "ALL")
            this.staticRouter.map[M].all = `default: return st${U}(ctx)\n`;
          else if (z.response instanceof Response)
            this.staticRouter.map[M].code = `case '${$}': return st${U}.clone()\n${this.staticRouter.map[M].code}`;
          else
            this.staticRouter.map[M].code = `case '${$}': return st${U}(ctx)\n${this.staticRouter.map[M].code}`;
        }
      } else if (this.router.add($, Q, z), !this.config.strictPath)
        this.router.add($, Q.endsWith("/") ? Q.slice(0, Q.length - 1) : Q + "/", z);
    }
  }
  setHeaders;
  headers($) {
    if (!$)
      return this;
    if (!this.setHeaders)
      this.setHeaders = {};
    return this.setHeaders = d(this.setHeaders, $), this;
  }
  onStart($) {
    return this.on("start", $), this;
  }
  onRequest($) {
    return this.on("request", $), this;
  }
  onParse($) {
    return this.on("parse", $), this;
  }
  onTransform($) {
    return this.on("transform", $), this;
  }
  resolve($) {
    return $.$elysia = "resolve", this.onBeforeHandle($);
  }
  onBeforeHandle($) {
    return this.on("beforeHandle", $), this;
  }
  onAfterHandle($) {
    return this.on("afterHandle", $), this;
  }
  mapResponse($) {
    return this.on("mapResponse", $), this;
  }
  onResponse($) {
    return this.on("response", $), this;
  }
  trace($) {
    return this.reporter.on("event", F1(() => this.reporter, this.event.trace.length, $)), this.on("trace", $), this;
  }
  error($, Z) {
    switch (typeof $) {
      case "string":
        return Z.prototype[_0] = $, this.definitions.error[$] = Z, this;
      case "function":
        return this.definitions.error = $(this.definitions.error), this;
    }
    for (let [X, W] of Object.entries($))
      W.prototype[_0] = X, this.definitions.error[X] = W;
    return this;
  }
  onError($) {
    return this.on("error", $), this;
  }
  onStop($) {
    return this.on("stop", $), this;
  }
  on($, Z) {
    for (let X of Array.isArray(Z) ? Z : [Z])
      switch (X = R1(X), $) {
        case "start":
          this.event.start.push(X);
          break;
        case "request":
          this.event.request.push(X);
          break;
        case "parse":
          this.event.parse.splice(this.event.parse.length - 1, 0, X);
          break;
        case "transform":
          this.event.transform.push(X);
          break;
        case "beforeHandle":
          this.event.beforeHandle.push(X);
          break;
        case "afterHandle":
          this.event.afterHandle.push(X);
          break;
        case "mapResponse":
          this.event.mapResponse.push(X);
          break;
        case "response":
          this.event.onResponse.push(X);
          break;
        case "trace":
          this.event.trace.push(X);
          break;
        case "error":
          this.event.error.push(X);
          break;
        case "stop":
          this.event.stop.push(X);
          break;
      }
    return this;
  }
  group($, Z, X) {
    const W = new r({ ...this.config || {}, prefix: "" });
    W.store = this.store, W.definitions = this.definitions, W.getServer = () => this.server;
    const J = typeof Z === "object", Y = (J ? X : Z)(W);
    if (this.decorators = d(this.decorators, W.decorators), Y.event.request.length)
      this.event.request = [...this.event.request || [], ...Y.event.request || []];
    if (Y.event.onResponse.length)
      this.event.onResponse = [...this.event.onResponse || [], ...Y.event.onResponse || []];
    return this.model(Y.definitions.type), Object.values(W.routes).forEach(({ method: Q, path: _, handler: B, hooks: K }) => {
      if (_ = (J ? "" : this.config.prefix) + $ + _, J) {
        const G = Z, M = K;
        this.add(Q, _, B, n(G, { ...M || {}, error: !M.error ? Y.event.error : Array.isArray(M.error) ? [...M.error || {}, ...Y.event.error || {}] : [M.error, ...Y.event.error || {}] }));
      } else
        this.add(Q, _, B, n(K, { error: Y.event.error }), { skipPrefix: true });
    }), this;
  }
  guard($, Z) {
    if (!Z)
      return this.event = v0(this.event, $), this.validator = { body: $.body, headers: $.headers, params: $.params, query: $.query, response: $.response }, this;
    const X = new r({ ...this.config || {}, prefix: "" });
    X.store = this.store, X.definitions = this.definitions;
    const W = Z(X);
    if (this.decorators = d(this.decorators, X.decorators), W.event.request.length)
      this.event.request = [...this.event.request || [], ...W.event.request || []];
    if (W.event.onResponse.length)
      this.event.onResponse = [...this.event.onResponse || [], ...W.event.onResponse || []];
    return this.model(W.definitions.type), Object.values(X.routes).forEach(({ method: J, path: Y, handler: Q, hooks: _ }) => {
      this.add(J, Y, Q, n($, { ..._ || {}, error: !_.error ? W.event.error : Array.isArray(_.error) ? [..._.error || {}, ...W.event.error || []] : [_.error, ...W.event.error || []] }));
    }), this;
  }
  use($) {
    if ($ instanceof Promise)
      return this.lazyLoadModules.push($.then((Z) => {
        if (typeof Z === "function")
          return Z(this);
        if (typeof Z.default === "function")
          return Z.default(this);
        return this._use(Z);
      }).then((Z) => Z.compile())), this;
    else
      return this._use($);
    return this;
  }
  _use($) {
    if (typeof $ === "function") {
      const J = $(this);
      if (J instanceof Promise)
        return this.lazyLoadModules.push(J.then((Y) => {
          if (Y instanceof r) {
            this.compile();
            for (let { method: Q, path: _, handler: B, hooks: K } of Object.values(Y.routes))
              this.add(Q, _, B, n(K, { error: Y.event.error }));
            return Y;
          }
          if (typeof Y === "function")
            return Y(this);
          if (typeof Y.default === "function")
            return Y.default(this);
          return this._use(Y);
        }).then((Y) => Y.compile())), this;
      return J;
    }
    const { name: Z, seed: X } = $.config;
    $.getServer = () => this.getServer(), this.headers($.setHeaders);
    const W = $.config.scoped;
    if (W) {
      if (Z) {
        if (!(Z in this.dependencies))
          this.dependencies[Z] = [];
        const Y = X !== undefined ? j0(Z + JSON.stringify(X)) : 0;
        if (this.dependencies[Z].some(({ checksum: Q }) => Y === Q))
          return this;
        this.dependencies[Z].push(!this.config?.analytic ? { name: $.config.name, seed: $.config.seed, checksum: Y, dependencies: $.dependencies } : { name: $.config.name, seed: $.config.seed, checksum: Y, dependencies: $.dependencies, stack: $.stack, routes: $.routes, decorators: $.decorators, store: $.store, type: $.definitions.type, error: $.definitions.error, derive: $.event.transform.filter((Q) => Q.$elysia === "derive").map((Q) => ({ fn: Q.toString(), stack: new Error().stack ?? "" })), resolve: $.event.transform.filter((Q) => Q.$elysia === "derive").map((Q) => ({ fn: Q.toString(), stack: new Error().stack ?? "" })) });
      }
      if ($.model(this.definitions.type), $.error(this.definitions.error), $.macros = [...this.macros || [], ...$.macros || []], $.onRequest((Y) => {
        Object.assign(Y, this.decorators), Object.assign(Y.store, this.store);
      }), $.event.trace.length)
        $.event.trace.push(...$.event.trace);
      if (W && !$.config.prefix)
        console.warn("When using scoped plugins it is recommended to use a prefix, else routing may not work correctly for the second scoped instance");
      if ($.event.error.length)
        $.event.error.push(...this.event.error);
      if ($.config.aot)
        $.compile();
      let J;
      if (W && $.config.prefix) {
        J = this.mount($.config.prefix + "/", $.fetch);
        for (let Y of $.routes)
          this.routes.push({ ...Y, path: `${$.config.prefix}${Y.path}`, hooks: n(Y.hooks, { error: this.event.error }) });
      } else if (J = this.mount($.fetch), J.routes.length)
        this.routes.push(...J.routes);
      return this;
    } else {
      $.reporter = this.reporter;
      for (let J of $.event.trace)
        this.trace(J);
      if (Z) {
        if (!(Z in this.dependencies))
          this.dependencies[Z] = [];
        const J = X !== undefined ? j0(Z + JSON.stringify(X)) : 0;
        if (!this.dependencies[Z].some(({ checksum: Q }) => J === Q))
          this.macros.push(...$.macros || []);
        const Y = [];
        for (let Q = 0;Q < this.macros.length; Q++) {
          const _ = this.macros[Q];
          if (Y.includes(_.$elysiaChecksum))
            this.macros.splice(Q, 1), Q--;
          Y.push(_.$elysiaChecksum);
        }
      }
    }
    this.decorate($.decorators), this.state($.store), this.model($.definitions.type), this.error($.definitions.error);
    for (let { method: J, path: Y, handler: Q, hooks: _ } of Object.values($.routes))
      this.add(J, Y, Q, n(_, { error: $.event.error }));
    if (!W)
      if (Z) {
        if (!(Z in this.dependencies))
          this.dependencies[Z] = [];
        const J = X !== undefined ? j0(Z + JSON.stringify(X)) : 0;
        if (this.dependencies[Z].some(({ checksum: Y }) => J === Y))
          return this;
        this.dependencies[Z].push(!this.config?.analytic ? { name: $.config.name, seed: $.config.seed, checksum: J, dependencies: $.dependencies } : { name: $.config.name, seed: $.config.seed, checksum: J, dependencies: $.dependencies, stack: $.stack, routes: $.routes, decorators: $.decorators, store: $.store, type: $.definitions.type, error: $.definitions.error, derive: $.event.transform.filter((Y) => Y?.$elysia === "derive").map((Y) => ({ fn: Y.toString(), stack: new Error().stack ?? "" })), resolve: $.event.transform.filter((Y) => Y?.$elysia === "resolve").map((Y) => ({ fn: Y.toString(), stack: new Error().stack ?? "" })) }), this.event = v0(this.event, a0($.event), J);
      } else
        this.event = v0(this.event, a0($.event));
    return this;
  }
  macro($) {
    return $.$elysiaChecksum = j0(JSON.stringify({ name: this.config.name, seed: this.config.seed, content: $.toString() })), this.macros.push($), this;
  }
  mount($, Z) {
    if ($ instanceof r || typeof $ === "function" || $.length === 0 || $ === "/") {
      const J = typeof $ === "function" ? $ : $ instanceof r ? $.compile().fetch : Z instanceof r ? Z.compile().fetch : Z, Y = async ({ request: Q, path: _ }) => J(new Request(t0(Q.url, _ || "/"), Q));
      return this.all("/", Y, { type: "none" }), this.all("/*", Y, { type: "none" }), this;
    }
    const X = $.length;
    if (Z instanceof r)
      Z = Z.compile().fetch;
    const W = async ({ request: J, path: Y }) => Z(new Request(t0(J.url, Y.slice(X) || "/"), J));
    return this.all($, W, { type: "none" }), this.all($ + ($.endsWith("/") ? "*" : "/*"), W, { type: "none" }), this;
  }
  get($, Z, X) {
    return this.add("GET", $, Z, X), this;
  }
  post($, Z, X) {
    return this.add("POST", $, Z, X), this;
  }
  put($, Z, X) {
    return this.add("PUT", $, Z, X), this;
  }
  patch($, Z, X) {
    return this.add("PATCH", $, Z, X), this;
  }
  delete($, Z, X) {
    return this.add("DELETE", $, Z, X), this;
  }
  options($, Z, X) {
    return this.add("OPTIONS", $, Z, X), this;
  }
  all($, Z, X) {
    return this.add("ALL", $, Z, X), this;
  }
  head($, Z, X) {
    return this.add("HEAD", $, Z, X), this;
  }
  connect($, Z, X) {
    return this.add("CONNECT", $, Z, X), this;
  }
  ws($, Z) {
    const X = Z.transformMessage ? Array.isArray(Z.transformMessage) ? Z.transformMessage : [Z.transformMessage] : undefined;
    let W = null;
    const J = p(Z?.body, { models: this.definitions.type }), Y = p(Z?.response, { models: this.definitions.type }), Q = (_) => {
      if (typeof _ === "string") {
        const B = _?.charCodeAt(0);
        if (B === 47 || B === 123)
          try {
            _ = JSON.parse(_);
          } catch {
          }
        else if (f0(_))
          _ = +_;
      }
      if (X?.length)
        for (let B = 0;B < X.length; B++) {
          const K = X[B](_);
          if (K !== undefined)
            _ = K;
        }
      return _;
    };
    return this.route("$INTERNALWS", $, (_) => {
      const { set: B, path: K, qi: G, headers: M, query: V, params: P } = _;
      if (W === null)
        W = this.getServer();
      if (W?.upgrade(_.request, { headers: typeof Z.upgrade === "function" ? Z.upgrade(_) : Z.upgrade, data: { validator: Y, open(z) {
        Z.open?.(new D0(z, _));
      }, message: (z, A) => {
        const U = Q(A);
        if (J?.Check(U) === false)
          return void z.send(new q("message", J, U).message);
        Z.message?.(new D0(z, _), U);
      }, drain(z) {
        Z.drain?.(new D0(z, _));
      }, close(z, A, U) {
        Z.close?.(new D0(z, _), A, U);
      } } }))
        return;
      return B.status = 400, "Expected a websocket connection";
    }, { beforeHandle: Z.beforeHandle, transform: Z.transform, headers: Z.headers, params: Z.params, query: Z.query }), this;
  }
  route($, Z, X, { config: W, ...J } = { config: { allowMeta: false } }) {
    return this.add($, Z, X, J, W), this;
  }
  state($, Z) {
    switch (typeof $) {
      case "object":
        return this.store = d(this.store, $), this;
      case "function":
        return this.store = $(this.store), this;
    }
    if (!($ in this.store))
      this.store[$] = Z;
    return this;
  }
  decorate($, Z) {
    switch (typeof $) {
      case "object":
        return this.decorators = d(this.decorators, $), this;
      case "function":
        return this.decorators = $(this.decorators), this;
    }
    if (!($ in this.decorators))
      this.decorators[$] = Z;
    return this;
  }
  derive($) {
    return $.$elysia = "derive", this.onTransform($);
  }
  model($, Z) {
    switch (typeof $) {
      case "object":
        return Object.entries($).forEach(([X, W]) => {
          if (!(X in this.definitions.type))
            this.definitions.type[X] = W;
        }), this;
      case "function":
        return this.definitions.type = $(this.definitions.type), this;
    }
    return this.definitions.type[$] = Z, this;
  }
  mapDerive($) {
    return $.$elysia = "derive", this.onTransform($);
  }
  affix($, Z, X) {
    if (X === "")
      return this;
    const W = ["_", "-", " "], J = (B) => B[0].toUpperCase() + B.slice(1), Y = $ === "prefix" ? (B, K) => W.includes(B.at(-1) ?? "") ? B + K : B + J(K) : W.includes(X.at(-1) ?? "") ? (B, K) => K + B : (B, K) => K + J(B), Q = (B) => {
      const K = {};
      switch (B) {
        case "decorator":
          for (let G in this.decorators)
            K[Y(X, G)] = this.decorators[G];
          this.decorators = K;
          break;
        case "state":
          for (let G in this.store)
            K[Y(X, G)] = this.store[G];
          this.store = K;
          break;
        case "model":
          for (let G in this.definitions.type)
            K[Y(X, G)] = this.definitions.type[G];
          this.definitions.type = K;
          break;
        case "error":
          for (let G in this.definitions.error)
            K[Y(X, G)] = this.definitions.error[G];
          this.definitions.error = K;
          break;
      }
    }, _ = Array.isArray(Z) ? Z : [Z];
    for (let B of _.some((K) => K === "all") ? ["decorator", "state", "model", "error"] : _)
      Q(B);
    return this;
  }
  prefix($, Z) {
    return this.affix("prefix", $, Z);
  }
  suffix($, Z) {
    return this.affix("suffix", $, Z);
  }
  compile() {
    if (this.fetch = this.config.aot ? Y1(this) : _1(this), typeof this.server?.reload === "function")
      this.server.reload({ ...this.server || {}, fetch: this.fetch });
    return this;
  }
  handle = async ($) => this.fetch($);
  fetch = ($) => {
    return (this.fetch = this.config.aot ? Y1(this) : _1(this))($);
  };
  handleError = async ($, Z) => (this.handleError = this.config.aot ? B1(this) : s1(this))($, Z);
  outerErrorHandler = ($) => new Response($.message || $.name || "Error", { status: $?.status ?? 500 });
  listen = ($, Z) => {
    if (typeof Bun === "undefined")
      throw new Error(".listen() is designed to run on Bun only. If you are running Elysia in other environment please use a dedicated plugin or export the handler via Elysia.fetch");
    if (this.compile(), typeof $ === "string") {
      if ($ = +$.trim(), Number.isNaN($))
        throw new Error("Port must be a numeric value");
    }
    const X = this.fetch, W = typeof $ === "object" ? { development: !N0, reusePort: true, ...this.config.serve || {}, ...$ || {}, websocket: { ...this.config.websocket || {}, ...$1 || {} }, fetch: X, error: this.outerErrorHandler } : { development: !N0, reusePort: true, ...this.config.serve || {}, websocket: { ...this.config.websocket || {}, ...$1 || {} }, port: $, fetch: X, error: this.outerErrorHandler };
    if (this.server = Bun?.serve(W), this.event.start.length)
      for (let J = 0;J < this.event.start.length; J++)
        this.event.start[J](this);
    if (Z)
      Z(this.server);
    return process.on("beforeExit", () => {
      for (let J = 0;J < this.event.stop.length; J++)
        this.event.stop[J](this);
    }), Promise.all(this.lazyLoadModules).then(() => {
      Bun?.gc(false);
    }), this;
  };
  stop = async () => {
    if (!this.server)
      throw new Error("Elysia isn't running. Call `app.listen` to start the server.");
    if (this.server.stop(), this.event.stop.length)
      for (let $ = 0;$ < this.event.stop.length; $++)
        this.event.stop[$](this);
  };
  get modules() {
    return Promise.all(this.lazyLoadModules);
  }
}

// /home/ellie/github/student_scheduler/apps/server/node_modules/@elysiajs/cors/dist/index.js
var cors = (config = {
  origin: true,
  methods: true,
  allowedHeaders: "*",
  exposedHeaders: "*",
  credentials: true,
  maxAge: 5,
  preflight: true
}) => {
  const { origin = true, methods = true, allowedHeaders = "*", exposedHeaders = "*", credentials = true, maxAge = 5, preflight = true } = config;
  const app = new r({
    name: "@elysiajs/cors",
    seed: config
  });
  const origins = typeof origin === "boolean" ? undefined : Array.isArray(origin) ? origin : [origin];
  const processOrigin = (origin2, request, from) => {
    switch (typeof origin2) {
      case "string":
        const protocolStart = from.indexOf("://");
        if (protocolStart !== -1)
          from = from.slice(protocolStart + 3);
        const trailingSlash = from.indexOf("/", 0);
        if (trailingSlash !== -1)
          from = from.slice(trailingSlash);
        return origin2 === from;
      case "function":
        return origin2(request);
      case "object":
        return origin2.test(from);
    }
  };
  const handleOrigin = (set2, request) => {
    if (origin === true) {
      set2.headers["Vary"] = "*";
      set2.headers["Access-Control-Allow-Origin"] = request.headers.get("Origin") || "*";
      return;
    }
    if (!origins?.length)
      return;
    const headers = [];
    if (origins.length) {
      const from = request.headers.get("Origin") ?? "";
      for (let i = 0;i < origins.length; i++) {
        const value15 = processOrigin(origins[i], request, from);
        if (value15 === true) {
          set2.headers["Vary"] = origin ? "Origin" : "*";
          set2.headers["Access-Control-Allow-Origin"] = request.headers.get("Origin") || "*";
          return;
        }
        if (value15)
          headers.push(value15);
      }
    }
    set2.headers["Vary"] = "Origin";
    set2.headers["Access-Control-Allow-Origin"] = headers.join(", ");
  };
  const handleMethod = (set2, method) => {
    if (methods === true)
      return set2.headers["Access-Control-Allow-Methods"] = method ?? "*";
    if (methods === false || !methods?.length)
      return;
    if (methods === "*")
      return set2.headers["Access-Control-Allow-Methods"] = "*";
    if (!Array.isArray(methods))
      return set2.headers["Access-Control-Allow-Methods"] = methods;
    set2.headers["Access-Control-Allow-Methods"] = methods.join(", ");
  };
  if (preflight)
    app.options("/", ({ set: set2, request }) => {
      handleOrigin(set2, request);
      handleMethod(set2, request.method);
      if (exposedHeaders.length)
        set2.headers["Access-Control-Allow-Headers"] = typeof allowedHeaders === "string" ? allowedHeaders : allowedHeaders.join(", ");
      if (maxAge)
        set2.headers["Access-Control-Max-Age"] = maxAge.toString();
      return new Response("", {
        status: 204
      });
    }).options("/*", ({ set: set2, request }) => {
      handleOrigin(set2, request);
      handleMethod(set2, request.method);
      if (exposedHeaders.length)
        set2.headers["Access-Control-Allow-Headers"] = typeof allowedHeaders === "string" ? allowedHeaders : allowedHeaders.join(", ");
      if (maxAge)
        set2.headers["Access-Control-Max-Age"] = maxAge.toString();
      return new Response("", {
        status: 204
      });
    });
  const defaultHeaders = {
    "Access-Control-Allow-Headers": typeof allowedHeaders === "string" ? allowedHeaders : allowedHeaders.join(", "),
    "Access-Control-Exposed-Headers": typeof exposedHeaders === "string" ? exposedHeaders : exposedHeaders.join(", ")
  };
  if (credentials === true)
    defaultHeaders["Access-Control-Allow-Credentials"] = "true";
  return app.headers(defaultHeaders).onRequest(({ set: set2, request }) => {
    handleOrigin(set2, request);
    handleMethod(set2, request.method);
  });
};

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/entity.js
var is = function(value15, type75) {
  if (!value15 || typeof value15 !== "object") {
    return false;
  }
  if (value15 instanceof type75) {
    return true;
  }
  if (!Object.prototype.hasOwnProperty.call(type75, entityKind)) {
    throw new Error(`Class "${type75.name ?? "<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`);
  }
  let cls = value15.constructor;
  if (cls) {
    while (cls) {
      if (entityKind in cls && cls[entityKind] === type75[entityKind]) {
        return true;
      }
      cls = Object.getPrototypeOf(cls);
    }
  }
  return false;
};
var entityKind = Symbol.for("drizzle:entityKind");
var hasOwnEntityKind = Symbol.for("drizzle:hasOwnEntityKind");

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/logger.js
class ConsoleLogWriter {
  static [entityKind] = "ConsoleLogWriter";
  write(message) {
    console.log(message);
  }
}

class DefaultLogger {
  static [entityKind] = "DefaultLogger";
  writer;
  constructor(config) {
    this.writer = config?.writer ?? new ConsoleLogWriter;
  }
  logQuery(query, params) {
    const stringifiedParams = params.map((p2) => {
      try {
        return JSON.stringify(p2);
      } catch {
        return String(p2);
      }
    });
    const paramsStr = stringifiedParams.length ? ` -- params: [${stringifiedParams.join(", ")}]` : "";
    this.writer.write(`Query: ${query}${paramsStr}`);
  }
}

class NoopLogger {
  static [entityKind] = "NoopLogger";
  logQuery() {
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/query-promise.js
class QueryPromise {
  static [entityKind] = "QueryPromise";
  [Symbol.toStringTag] = "QueryPromise";
  catch(onRejected) {
    return this.then(undefined, onRejected);
  }
  finally(onFinally) {
    return this.then((value15) => {
      onFinally?.();
      return value15;
    }, (reason) => {
      onFinally?.();
      throw reason;
    });
  }
  then(onFulfilled, onRejected) {
    return this.execute().then(onFulfilled, onRejected);
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/table.js
var isTable = function(table) {
  return typeof table === "object" && table !== null && IsDrizzleTable in table;
};
var getTableName = function(table) {
  return table[TableName];
};
var TableName = Symbol.for("drizzle:Name");
var Schema = Symbol.for("drizzle:Schema");
var Columns = Symbol.for("drizzle:Columns");
var OriginalName = Symbol.for("drizzle:OriginalName");
var BaseName = Symbol.for("drizzle:BaseName");
var IsAlias = Symbol.for("drizzle:IsAlias");
var ExtraConfigBuilder = Symbol.for("drizzle:ExtraConfigBuilder");
var IsDrizzleTable = Symbol.for("drizzle:IsDrizzleTable");

class Table {
  static [entityKind] = "Table";
  static Symbol = {
    Name: TableName,
    Schema,
    OriginalName,
    Columns,
    BaseName,
    IsAlias,
    ExtraConfigBuilder
  };
  [TableName];
  [OriginalName];
  [Schema];
  [Columns];
  [BaseName];
  [IsAlias] = false;
  [ExtraConfigBuilder] = undefined;
  [IsDrizzleTable] = true;
  constructor(name, schema3, baseName) {
    this[TableName] = this[OriginalName] = name;
    this[Schema] = schema3;
    this[BaseName] = baseName;
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/tracing-utils.js
var iife = function(fn, ...args) {
  return fn(...args);
};

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/version.js
var version = "0.29.3";

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/tracing.js
var otel;
var rawTracer;
var tracer = {
  startActiveSpan(name, fn) {
    if (!otel) {
      return fn();
    }
    if (!rawTracer) {
      rawTracer = otel.trace.getTracer("drizzle-orm", version);
    }
    return iife((otel2, rawTracer2) => rawTracer2.startActiveSpan(name, (span) => {
      try {
        return fn(span);
      } catch (e2) {
        span.setStatus({
          code: otel2.SpanStatusCode.ERROR,
          message: e2 instanceof Error ? e2.message : "Unknown error"
        });
        throw e2;
      } finally {
        span.end();
      }
    }), otel, rawTracer);
  }
};

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/column.js
class Column {
  constructor(table, config) {
    this.table = table;
    this.config = config;
    this.name = config.name;
    this.notNull = config.notNull;
    this.default = config.default;
    this.defaultFn = config.defaultFn;
    this.hasDefault = config.hasDefault;
    this.primary = config.primaryKey;
    this.isUnique = config.isUnique;
    this.uniqueName = config.uniqueName;
    this.uniqueType = config.uniqueType;
    this.dataType = config.dataType;
    this.columnType = config.columnType;
  }
  static [entityKind] = "Column";
  name;
  primary;
  notNull;
  default;
  defaultFn;
  hasDefault;
  isUnique;
  uniqueName;
  uniqueType;
  dataType;
  columnType;
  enumValues = undefined;
  config;
  mapFromDriverValue(value15) {
    return value15;
  }
  mapToDriverValue(value15) {
    return value15;
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/table.js
var pgTableWithSchema = function(name, columns, extraConfig, schema3, baseName = name) {
  const rawTable = new PgTable(name, schema3, baseName);
  const builtColumns = Object.fromEntries(Object.entries(columns).map(([name2, colBuilderBase]) => {
    const colBuilder = colBuilderBase;
    const column = colBuilder.build(rawTable);
    rawTable[InlineForeignKeys].push(...colBuilder.buildForeignKeys(column, rawTable));
    return [name2, column];
  }));
  const table2 = Object.assign(rawTable, builtColumns);
  table2[Table.Symbol.Columns] = builtColumns;
  if (extraConfig) {
    table2[PgTable.Symbol.ExtraConfigBuilder] = extraConfig;
  }
  return table2;
};
var InlineForeignKeys = Symbol.for("drizzle:PgInlineForeignKeys");

class PgTable extends Table {
  static [entityKind] = "PgTable";
  static Symbol = Object.assign({}, Table.Symbol, {
    InlineForeignKeys
  });
  [InlineForeignKeys] = [];
  [Table.Symbol.ExtraConfigBuilder] = undefined;
}
var pgTable = (name, columns, extraConfig) => {
  return pgTableWithSchema(name, columns, extraConfig, undefined);
};

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/primary-keys.js
var primaryKey = function(...config) {
  if (config[0].columns) {
    return new PrimaryKeyBuilder(config[0].columns, config[0].name);
  }
  return new PrimaryKeyBuilder(config);
};

class PrimaryKeyBuilder {
  static [entityKind] = "PgPrimaryKeyBuilder";
  columns;
  name;
  constructor(columns, name) {
    this.columns = columns;
    this.name = name;
  }
  build(table3) {
    return new PrimaryKey(table3, this.columns, this.name);
  }
}

class PrimaryKey {
  constructor(table3, columns, name) {
    this.table = table3;
    this.columns = columns;
    this.name = name;
  }
  static [entityKind] = "PgPrimaryKey";
  columns;
  name;
  getName() {
    return this.name ?? `${this.table[PgTable.Symbol.Name]}_${this.columns.map((column) => column.name).join("_")}_pk`;
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/sql/expressions/conditions.js
var bindIfParam = function(value15, column2) {
  if (isDriverValueEncoder(column2) && !isSQLWrapper(value15) && !is(value15, Param) && !is(value15, Placeholder) && !is(value15, Column) && !is(value15, Table) && !is(value15, View)) {
    return new Param(value15, column2);
  }
  return value15;
};
var and = function(...unfilteredConditions) {
  const conditions = unfilteredConditions.filter((c2) => c2 !== undefined);
  if (conditions.length === 0) {
    return;
  }
  if (conditions.length === 1) {
    return new SQL(conditions);
  }
  return new SQL([
    new StringChunk("("),
    sql2.join(conditions, new StringChunk(" and ")),
    new StringChunk(")")
  ]);
};
var or = function(...unfilteredConditions) {
  const conditions = unfilteredConditions.filter((c2) => c2 !== undefined);
  if (conditions.length === 0) {
    return;
  }
  if (conditions.length === 1) {
    return new SQL(conditions);
  }
  return new SQL([
    new StringChunk("("),
    sql2.join(conditions, new StringChunk(" or ")),
    new StringChunk(")")
  ]);
};
var not4 = function(condition) {
  return sql2`not ${condition}`;
};
var inArray = function(column2, values) {
  if (Array.isArray(values)) {
    if (values.length === 0) {
      throw new Error("inArray requires at least one value");
    }
    return sql2`${column2} in ${values.map((v2) => bindIfParam(v2, column2))}`;
  }
  return sql2`${column2} in ${bindIfParam(values, column2)}`;
};
var notInArray = function(column2, values) {
  if (Array.isArray(values)) {
    if (values.length === 0) {
      throw new Error("notInArray requires at least one value");
    }
    return sql2`${column2} not in ${values.map((v2) => bindIfParam(v2, column2))}`;
  }
  return sql2`${column2} not in ${bindIfParam(values, column2)}`;
};
var isNull = function(value15) {
  return sql2`${value15} is null`;
};
var isNotNull = function(value15) {
  return sql2`${value15} is not null`;
};
var exists = function(subquery) {
  return sql2`exists ${subquery}`;
};
var notExists = function(subquery) {
  return sql2`not exists ${subquery}`;
};
var between = function(column2, min, max) {
  return sql2`${column2} between ${bindIfParam(min, column2)} and ${bindIfParam(max, column2)}`;
};
var notBetween = function(column2, min, max) {
  return sql2`${column2} not between ${bindIfParam(min, column2)} and ${bindIfParam(max, column2)}`;
};
var like = function(column2, value15) {
  return sql2`${column2} like ${value15}`;
};
var notLike = function(column2, value15) {
  return sql2`${column2} not like ${value15}`;
};
var ilike = function(column2, value15) {
  return sql2`${column2} ilike ${value15}`;
};
var notIlike = function(column2, value15) {
  return sql2`${column2} not ilike ${value15}`;
};
var eq = (left, right) => {
  return sql2`${left} = ${bindIfParam(right, left)}`;
};
var ne = (left, right) => {
  return sql2`${left} <> ${bindIfParam(right, left)}`;
};
var gt = (left, right) => {
  return sql2`${left} > ${bindIfParam(right, left)}`;
};
var gte = (left, right) => {
  return sql2`${left} >= ${bindIfParam(right, left)}`;
};
var lt = (left, right) => {
  return sql2`${left} < ${bindIfParam(right, left)}`;
};
var lte = (left, right) => {
  return sql2`${left} <= ${bindIfParam(right, left)}`;
};

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/sql/expressions/select.js
var asc = function(column2) {
  return sql2`${column2} asc`;
};
var desc = function(column2) {
  return sql2`${column2} desc`;
};

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/relations.js
var getOperators = function() {
  return {
    and,
    between,
    eq,
    exists,
    gt,
    gte,
    ilike,
    inArray,
    isNull,
    isNotNull,
    like,
    lt,
    lte,
    ne,
    not: not4,
    notBetween,
    notExists,
    notLike,
    notIlike,
    notInArray,
    or,
    sql: sql2
  };
};
var getOrderByOperators = function() {
  return {
    sql: sql2,
    asc,
    desc
  };
};
var extractTablesRelationalConfig = function(schema3, configHelpers) {
  if (Object.keys(schema3).length === 1 && "default" in schema3 && !is(schema3["default"], Table)) {
    schema3 = schema3["default"];
  }
  const tableNamesMap = {};
  const relationsBuffer = {};
  const tablesConfig = {};
  for (const [key, value15] of Object.entries(schema3)) {
    if (isTable(value15)) {
      const dbName = value15[Table.Symbol.Name];
      const bufferedRelations = relationsBuffer[dbName];
      tableNamesMap[dbName] = key;
      tablesConfig[key] = {
        tsName: key,
        dbName: value15[Table.Symbol.Name],
        schema: value15[Table.Symbol.Schema],
        columns: value15[Table.Symbol.Columns],
        relations: bufferedRelations?.relations ?? {},
        primaryKey: bufferedRelations?.primaryKey ?? []
      };
      for (const column3 of Object.values(value15[Table.Symbol.Columns])) {
        if (column3.primary) {
          tablesConfig[key].primaryKey.push(column3);
        }
      }
      const extraConfig = value15[Table.Symbol.ExtraConfigBuilder]?.(value15);
      if (extraConfig) {
        for (const configEntry of Object.values(extraConfig)) {
          if (is(configEntry, PrimaryKeyBuilder)) {
            tablesConfig[key].primaryKey.push(...configEntry.columns);
          }
        }
      }
    } else if (is(value15, Relations)) {
      const dbName = value15.table[Table.Symbol.Name];
      const tableName = tableNamesMap[dbName];
      const relations2 = value15.config(configHelpers(value15.table));
      let primaryKey2;
      for (const [relationName, relation] of Object.entries(relations2)) {
        if (tableName) {
          const tableConfig = tablesConfig[tableName];
          tableConfig.relations[relationName] = relation;
          if (primaryKey2) {
            tableConfig.primaryKey.push(...primaryKey2);
          }
        } else {
          if (!(dbName in relationsBuffer)) {
            relationsBuffer[dbName] = {
              relations: {},
              primaryKey: primaryKey2
            };
          }
          relationsBuffer[dbName].relations[relationName] = relation;
        }
      }
    }
  }
  return { tables: tablesConfig, tableNamesMap };
};
var relations = function(table5, relations2) {
  return new Relations(table5, (helpers3) => Object.fromEntries(Object.entries(relations2(helpers3)).map(([key, value15]) => [
    key,
    value15.withFieldName(key)
  ])));
};
var createOne = function(sourceTable) {
  return function one(table5, config) {
    return new One(sourceTable, table5, config, config?.fields.reduce((res, f) => res && f.notNull, true) ?? false);
  };
};
var createMany = function(sourceTable) {
  return function many(referencedTable, config) {
    return new Many(sourceTable, referencedTable, config);
  };
};
var normalizeRelation = function(schema3, tableNamesMap, relation) {
  if (is(relation, One) && relation.config) {
    return {
      fields: relation.config.fields,
      references: relation.config.references
    };
  }
  const referencedTableTsName = tableNamesMap[relation.referencedTable[Table.Symbol.Name]];
  if (!referencedTableTsName) {
    throw new Error(`Table "${relation.referencedTable[Table.Symbol.Name]}" not found in schema`);
  }
  const referencedTableConfig = schema3[referencedTableTsName];
  if (!referencedTableConfig) {
    throw new Error(`Table "${referencedTableTsName}" not found in schema`);
  }
  const sourceTable = relation.sourceTable;
  const sourceTableTsName = tableNamesMap[sourceTable[Table.Symbol.Name]];
  if (!sourceTableTsName) {
    throw new Error(`Table "${sourceTable[Table.Symbol.Name]}" not found in schema`);
  }
  const reverseRelations = [];
  for (const referencedTableRelation of Object.values(referencedTableConfig.relations)) {
    if (relation.relationName && relation !== referencedTableRelation && referencedTableRelation.relationName === relation.relationName || !relation.relationName && referencedTableRelation.referencedTable === relation.sourceTable) {
      reverseRelations.push(referencedTableRelation);
    }
  }
  if (reverseRelations.length > 1) {
    throw relation.relationName ? new Error(`There are multiple relations with name "${relation.relationName}" in table "${referencedTableTsName}"`) : new Error(`There are multiple relations between "${referencedTableTsName}" and "${relation.sourceTable[Table.Symbol.Name]}". Please specify relation name`);
  }
  if (reverseRelations[0] && is(reverseRelations[0], One) && reverseRelations[0].config) {
    return {
      fields: reverseRelations[0].config.references,
      references: reverseRelations[0].config.fields
    };
  }
  throw new Error(`There is not enough information to infer relation "${sourceTableTsName}.${relation.fieldName}"`);
};
var createTableRelationsHelpers = function(sourceTable) {
  return {
    one: createOne(sourceTable),
    many: createMany(sourceTable)
  };
};
var mapRelationalRow = function(tablesConfig, tableConfig, row, buildQueryResultSelection, mapColumnValue = (value15) => value15) {
  const result = {};
  for (const [
    selectionItemIndex,
    selectionItem
  ] of buildQueryResultSelection.entries()) {
    if (selectionItem.isJson) {
      const relation = tableConfig.relations[selectionItem.tsKey];
      const rawSubRows = row[selectionItemIndex];
      const subRows = typeof rawSubRows === "string" ? JSON.parse(rawSubRows) : rawSubRows;
      result[selectionItem.tsKey] = is(relation, One) ? subRows && mapRelationalRow(tablesConfig, tablesConfig[selectionItem.relationTableTsKey], subRows, selectionItem.selection, mapColumnValue) : subRows.map((subRow) => mapRelationalRow(tablesConfig, tablesConfig[selectionItem.relationTableTsKey], subRow, selectionItem.selection, mapColumnValue));
    } else {
      const value15 = mapColumnValue(row[selectionItemIndex]);
      const field = selectionItem.field;
      let decoder;
      if (is(field, Column)) {
        decoder = field;
      } else if (is(field, SQL)) {
        decoder = field.decoder;
      } else {
        decoder = field.sql.decoder;
      }
      result[selectionItem.tsKey] = value15 === null ? null : decoder.mapFromDriverValue(value15);
    }
  }
  return result;
};

class Relation {
  constructor(sourceTable, referencedTable, relationName) {
    this.sourceTable = sourceTable;
    this.referencedTable = referencedTable;
    this.relationName = relationName;
    this.referencedTableName = referencedTable[Table.Symbol.Name];
  }
  static [entityKind] = "Relation";
  referencedTableName;
  fieldName;
}

class Relations {
  constructor(table5, config) {
    this.table = table5;
    this.config = config;
  }
  static [entityKind] = "Relations";
}

class One extends Relation {
  constructor(sourceTable, referencedTable, config, isNullable) {
    super(sourceTable, referencedTable, config?.relationName);
    this.config = config;
    this.isNullable = isNullable;
  }
  static [entityKind] = "One";
  withFieldName(fieldName) {
    const relation = new One(this.sourceTable, this.referencedTable, this.config, this.isNullable);
    relation.fieldName = fieldName;
    return relation;
  }
}

class Many extends Relation {
  constructor(sourceTable, referencedTable, config) {
    super(sourceTable, referencedTable, config?.relationName);
    this.config = config;
  }
  static [entityKind] = "Many";
  withFieldName(fieldName) {
    const relation = new Many(this.sourceTable, this.referencedTable, this.config);
    relation.fieldName = fieldName;
    return relation;
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/subquery.js
var SubqueryConfig = Symbol.for("drizzle:SubqueryConfig");

class Subquery {
  static [entityKind] = "Subquery";
  [SubqueryConfig];
  constructor(sql5, selection, alias, isWith = false) {
    this[SubqueryConfig] = {
      sql: sql5,
      selection,
      alias,
      isWith
    };
  }
}

class WithSubquery extends Subquery {
  static [entityKind] = "WithSubquery";
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/view-common.js
var ViewBaseConfig = Symbol.for("drizzle:ViewBaseConfig");

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/sql/sql.js
var isSQLWrapper = function(value15) {
  return typeof value15 === "object" && value15 !== null && "getSQL" in value15 && typeof value15.getSQL === "function";
};
var mergeQueries = function(queries) {
  const result = { sql: "", params: [] };
  for (const query of queries) {
    result.sql += query.sql;
    result.params.push(...query.params);
    if (query.typings?.length) {
      if (!result.typings) {
        result.typings = [];
      }
      result.typings.push(...query.typings);
    }
  }
  return result;
};
var isDriverValueEncoder = function(value15) {
  return typeof value15 === "object" && value15 !== null && "mapToDriverValue" in value15 && typeof value15.mapToDriverValue === "function";
};
var sql2 = function(strings, ...params) {
  const queryChunks = [];
  if (params.length > 0 || strings.length > 0 && strings[0] !== "") {
    queryChunks.push(new StringChunk(strings[0]));
  }
  for (const [paramIndex, param2] of params.entries()) {
    queryChunks.push(param2, new StringChunk(strings[paramIndex + 1]));
  }
  return new SQL(queryChunks);
};
var fillPlaceholders = function(params, values) {
  return params.map((p2) => {
    if (is(p2, Placeholder)) {
      if (!(p2.name in values)) {
        throw new Error(`No value for placeholder "${p2.name}" was provided`);
      }
      return values[p2.name];
    }
    return p2;
  });
};
class StringChunk {
  static [entityKind] = "StringChunk";
  value;
  constructor(value15) {
    this.value = Array.isArray(value15) ? value15 : [value15];
  }
  getSQL() {
    return new SQL([this]);
  }
}

class SQL {
  constructor(queryChunks) {
    this.queryChunks = queryChunks;
  }
  static [entityKind] = "SQL";
  decoder = noopDecoder;
  shouldInlineParams = false;
  append(query) {
    this.queryChunks.push(...query.queryChunks);
    return this;
  }
  toQuery(config) {
    return tracer.startActiveSpan("drizzle.buildSQL", (span) => {
      const query = this.buildQueryFromSourceParams(this.queryChunks, config);
      span?.setAttributes({
        "drizzle.query.text": query.sql,
        "drizzle.query.params": JSON.stringify(query.params)
      });
      return query;
    });
  }
  buildQueryFromSourceParams(chunks, _config) {
    const config = Object.assign({}, _config, {
      inlineParams: _config.inlineParams || this.shouldInlineParams,
      paramStartIndex: _config.paramStartIndex || { value: 0 }
    });
    const {
      escapeName,
      escapeParam,
      prepareTyping,
      inlineParams,
      paramStartIndex
    } = config;
    return mergeQueries(chunks.map((chunk) => {
      if (is(chunk, StringChunk)) {
        return { sql: chunk.value.join(""), params: [] };
      }
      if (is(chunk, Name)) {
        return { sql: escapeName(chunk.value), params: [] };
      }
      if (chunk === undefined) {
        return { sql: "", params: [] };
      }
      if (Array.isArray(chunk)) {
        const result = [new StringChunk("(")];
        for (const [i, p2] of chunk.entries()) {
          result.push(p2);
          if (i < chunk.length - 1) {
            result.push(new StringChunk(", "));
          }
        }
        result.push(new StringChunk(")"));
        return this.buildQueryFromSourceParams(result, config);
      }
      if (is(chunk, SQL)) {
        return this.buildQueryFromSourceParams(chunk.queryChunks, {
          ...config,
          inlineParams: inlineParams || chunk.shouldInlineParams
        });
      }
      if (is(chunk, Table)) {
        const schemaName = chunk[Table.Symbol.Schema];
        const tableName = chunk[Table.Symbol.Name];
        return {
          sql: schemaName === undefined ? escapeName(tableName) : escapeName(schemaName) + "." + escapeName(tableName),
          params: []
        };
      }
      if (is(chunk, Column)) {
        return { sql: escapeName(chunk.table[Table.Symbol.Name]) + "." + escapeName(chunk.name), params: [] };
      }
      if (is(chunk, View)) {
        const schemaName = chunk[ViewBaseConfig].schema;
        const viewName = chunk[ViewBaseConfig].name;
        return {
          sql: schemaName === undefined ? escapeName(viewName) : escapeName(schemaName) + "." + escapeName(viewName),
          params: []
        };
      }
      if (is(chunk, Param)) {
        const mappedValue = chunk.value === null ? null : chunk.encoder.mapToDriverValue(chunk.value);
        if (is(mappedValue, SQL)) {
          return this.buildQueryFromSourceParams([mappedValue], config);
        }
        if (inlineParams) {
          return { sql: this.mapInlineParam(mappedValue, config), params: [] };
        }
        let typings;
        if (prepareTyping !== undefined) {
          typings = [prepareTyping(chunk.encoder)];
        }
        return { sql: escapeParam(paramStartIndex.value++, mappedValue), params: [mappedValue], typings };
      }
      if (is(chunk, Placeholder)) {
        return { sql: escapeParam(paramStartIndex.value++, chunk), params: [chunk] };
      }
      if (is(chunk, SQL.Aliased) && chunk.fieldAlias !== undefined) {
        return { sql: escapeName(chunk.fieldAlias), params: [] };
      }
      if (is(chunk, Subquery)) {
        if (chunk[SubqueryConfig].isWith) {
          return { sql: escapeName(chunk[SubqueryConfig].alias), params: [] };
        }
        return this.buildQueryFromSourceParams([
          new StringChunk("("),
          chunk[SubqueryConfig].sql,
          new StringChunk(") "),
          new Name(chunk[SubqueryConfig].alias)
        ], config);
      }
      if (isSQLWrapper(chunk)) {
        return this.buildQueryFromSourceParams([
          new StringChunk("("),
          chunk.getSQL(),
          new StringChunk(")")
        ], config);
      }
      if (is(chunk, Relation)) {
        return this.buildQueryFromSourceParams([
          chunk.sourceTable,
          new StringChunk("."),
          sql2.identifier(chunk.fieldName)
        ], config);
      }
      if (inlineParams) {
        return { sql: this.mapInlineParam(chunk, config), params: [] };
      }
      return { sql: escapeParam(paramStartIndex.value++, chunk), params: [chunk] };
    }));
  }
  mapInlineParam(chunk, { escapeString }) {
    if (chunk === null) {
      return "null";
    }
    if (typeof chunk === "number" || typeof chunk === "boolean") {
      return chunk.toString();
    }
    if (typeof chunk === "string") {
      return escapeString(chunk);
    }
    if (typeof chunk === "object") {
      const mappedValueAsString = chunk.toString();
      if (mappedValueAsString === "[object Object]") {
        return escapeString(JSON.stringify(chunk));
      }
      return escapeString(mappedValueAsString);
    }
    throw new Error("Unexpected param value: " + chunk);
  }
  getSQL() {
    return this;
  }
  as(alias) {
    if (alias === undefined) {
      return this;
    }
    return new SQL.Aliased(this, alias);
  }
  mapWith(decoder) {
    this.decoder = typeof decoder === "function" ? { mapFromDriverValue: decoder } : decoder;
    return this;
  }
  inlineParams() {
    this.shouldInlineParams = true;
    return this;
  }
}

class Name {
  constructor(value15) {
    this.value = value15;
  }
  static [entityKind] = "Name";
  brand;
  getSQL() {
    return new SQL([this]);
  }
}
var noopDecoder = {
  mapFromDriverValue: (value15) => value15
};
var noopEncoder = {
  mapToDriverValue: (value15) => value15
};
var noopMapper = {
  ...noopDecoder,
  ...noopEncoder
};

class Param {
  constructor(value15, encoder = noopEncoder) {
    this.value = value15;
    this.encoder = encoder;
  }
  static [entityKind] = "Param";
  brand;
  getSQL() {
    return new SQL([this]);
  }
}
((sql22) => {
  function empty() {
    return new SQL([]);
  }
  sql22.empty = empty;
  function fromList(list) {
    return new SQL(list);
  }
  sql22.fromList = fromList;
  function raw(str) {
    return new SQL([new StringChunk(str)]);
  }
  sql22.raw = raw;
  function join(chunks, separator) {
    const result = [];
    for (const [i, chunk] of chunks.entries()) {
      if (i > 0 && separator !== undefined) {
        result.push(separator);
      }
      result.push(chunk);
    }
    return new SQL(result);
  }
  sql22.join = join;
  function identifier(value15) {
    return new Name(value15);
  }
  sql22.identifier = identifier;
  function placeholder2(name2) {
    return new Placeholder(name2);
  }
  sql22.placeholder = placeholder2;
  function param2(value15, encoder) {
    return new Param(value15, encoder);
  }
  sql22.param = param2;
})(sql2 || (sql2 = {}));
((SQL2) => {

  class Aliased {
    constructor(sql22, fieldAlias) {
      this.sql = sql22;
      this.fieldAlias = fieldAlias;
    }
    static [entityKind] = "SQL.Aliased";
    isSelectionField = false;
    getSQL() {
      return this.sql;
    }
    clone() {
      return new Aliased(this.sql, this.fieldAlias);
    }
  }
  SQL2.Aliased = Aliased;
})(SQL || (SQL = {}));

class Placeholder {
  constructor(name2) {
    this.name = name2;
  }
  static [entityKind] = "Placeholder";
  getSQL() {
    return new SQL([this]);
  }
}

class View {
  static [entityKind] = "View";
  [ViewBaseConfig];
  constructor({ name: name2, schema: schema3, selectedFields, query }) {
    this[ViewBaseConfig] = {
      name: name2,
      originalName: name2,
      schema: schema3,
      selectedFields,
      query,
      isExisting: !query,
      isAlias: false
    };
  }
  getSQL() {
    return new SQL([this]);
  }
}
Column.prototype.getSQL = function() {
  return new SQL([this]);
};
Table.prototype.getSQL = function() {
  return new SQL([this]);
};
Subquery.prototype.getSQL = function() {
  return new SQL([this]);
};

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/utils.js
var mapResultRow = function(columns, row, joinsNotNullableMap) {
  const nullifyMap = {};
  const result = columns.reduce((result2, { path, field }, columnIndex) => {
    let decoder;
    if (is(field, Column)) {
      decoder = field;
    } else if (is(field, SQL)) {
      decoder = field.decoder;
    } else {
      decoder = field.sql.decoder;
    }
    let node = result2;
    for (const [pathChunkIndex, pathChunk] of path.entries()) {
      if (pathChunkIndex < path.length - 1) {
        if (!(pathChunk in node)) {
          node[pathChunk] = {};
        }
        node = node[pathChunk];
      } else {
        const rawValue = row[columnIndex];
        const value15 = node[pathChunk] = rawValue === null ? null : decoder.mapFromDriverValue(rawValue);
        if (joinsNotNullableMap && is(field, Column) && path.length === 2) {
          const objectName = path[0];
          if (!(objectName in nullifyMap)) {
            nullifyMap[objectName] = value15 === null ? getTableName(field.table) : false;
          } else if (typeof nullifyMap[objectName] === "string" && nullifyMap[objectName] !== getTableName(field.table)) {
            nullifyMap[objectName] = false;
          }
        }
      }
    }
    return result2;
  }, {});
  if (joinsNotNullableMap && Object.keys(nullifyMap).length > 0) {
    for (const [objectName, tableName] of Object.entries(nullifyMap)) {
      if (typeof tableName === "string" && !joinsNotNullableMap[tableName]) {
        result[objectName] = null;
      }
    }
  }
  return result;
};
var orderSelectedFields = function(fields, pathPrefix) {
  return Object.entries(fields).reduce((result, [name, field]) => {
    if (typeof name !== "string") {
      return result;
    }
    const newPath = pathPrefix ? [...pathPrefix, name] : [name];
    if (is(field, Column) || is(field, SQL) || is(field, SQL.Aliased)) {
      result.push({ path: newPath, field });
    } else if (is(field, Table)) {
      result.push(...orderSelectedFields(field[Table.Symbol.Columns], newPath));
    } else {
      result.push(...orderSelectedFields(field, newPath));
    }
    return result;
  }, []);
};
var haveSameKeys = function(left, right) {
  const leftKeys = Object.keys(left);
  const rightKeys = Object.keys(right);
  if (leftKeys.length !== rightKeys.length) {
    return false;
  }
  for (const [index, key] of leftKeys.entries()) {
    if (key !== rightKeys[index]) {
      return false;
    }
  }
  return true;
};
var mapUpdateSet = function(table7, values) {
  const entries = Object.entries(values).filter(([, value15]) => value15 !== undefined).map(([key, value15]) => {
    if (is(value15, SQL)) {
      return [key, value15];
    } else {
      return [key, new Param(value15, table7[Table.Symbol.Columns][key])];
    }
  });
  if (entries.length === 0) {
    throw new Error("No values to set");
  }
  return Object.fromEntries(entries);
};
var applyMixins = function(baseClass, extendedClasses) {
  for (const extendedClass of extendedClasses) {
    for (const name of Object.getOwnPropertyNames(extendedClass.prototype)) {
      if (name === "constructor")
        continue;
      Object.defineProperty(baseClass.prototype, name, Object.getOwnPropertyDescriptor(extendedClass.prototype, name) || Object.create(null));
    }
  }
};
var getTableColumns = function(table7) {
  return table7[Table.Symbol.Columns];
};
var getTableLikeName = function(table7) {
  return is(table7, Subquery) ? table7[SubqueryConfig].alias : is(table7, View) ? table7[ViewBaseConfig].name : is(table7, SQL) ? undefined : table7[Table.Symbol.IsAlias] ? table7[Table.Symbol.Name] : table7[Table.Symbol.BaseName];
};

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/query-builders/delete.js
class PgDeleteBase extends QueryPromise {
  constructor(table8, session, dialect) {
    super();
    this.session = session;
    this.dialect = dialect;
    this.config = { table: table8 };
  }
  static [entityKind] = "PgDelete";
  config;
  where(where) {
    this.config.where = where;
    return this;
  }
  returning(fields = this.config.table[Table.Symbol.Columns]) {
    this.config.returning = orderSelectedFields(fields);
    return this;
  }
  getSQL() {
    return this.dialect.buildDeleteQuery(this.config);
  }
  toSQL() {
    const { typings: _typings, ...rest4 } = this.dialect.sqlToQuery(this.getSQL());
    return rest4;
  }
  _prepare(name) {
    return tracer.startActiveSpan("drizzle.prepareQuery", () => {
      return this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), this.config.returning, name);
    });
  }
  prepare(name) {
    return this._prepare(name);
  }
  execute = (placeholderValues) => {
    return tracer.startActiveSpan("drizzle.operation", () => {
      return this._prepare().execute(placeholderValues);
    });
  };
  $dynamic() {
    return this;
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/query-builders/insert.js
class PgInsertBuilder {
  constructor(table9, session, dialect) {
    this.table = table9;
    this.session = session;
    this.dialect = dialect;
  }
  static [entityKind] = "PgInsertBuilder";
  values(values) {
    values = Array.isArray(values) ? values : [values];
    if (values.length === 0) {
      throw new Error("values() must be called with at least one value");
    }
    const mappedValues = values.map((entry) => {
      const result = {};
      const cols = this.table[Table.Symbol.Columns];
      for (const colKey of Object.keys(entry)) {
        const colValue = entry[colKey];
        result[colKey] = is(colValue, SQL) ? colValue : new Param(colValue, cols[colKey]);
      }
      return result;
    });
    return new PgInsertBase(this.table, mappedValues, this.session, this.dialect);
  }
}

class PgInsertBase extends QueryPromise {
  constructor(table9, values, session, dialect) {
    super();
    this.session = session;
    this.dialect = dialect;
    this.config = { table: table9, values };
  }
  static [entityKind] = "PgInsert";
  config;
  returning(fields = this.config.table[Table.Symbol.Columns]) {
    this.config.returning = orderSelectedFields(fields);
    return this;
  }
  onConflictDoNothing(config = {}) {
    if (config.target === undefined) {
      this.config.onConflict = sql2`do nothing`;
    } else {
      let targetColumn = "";
      targetColumn = Array.isArray(config.target) ? config.target.map((it) => this.dialect.escapeName(it.name)).join(",") : this.dialect.escapeName(config.target.name);
      const whereSql = config.where ? sql2` where ${config.where}` : undefined;
      this.config.onConflict = sql2`(${sql2.raw(targetColumn)}) do nothing${whereSql}`;
    }
    return this;
  }
  onConflictDoUpdate(config) {
    const whereSql = config.where ? sql2` where ${config.where}` : undefined;
    const setSql = this.dialect.buildUpdateSet(this.config.table, mapUpdateSet(this.config.table, config.set));
    let targetColumn = "";
    targetColumn = Array.isArray(config.target) ? config.target.map((it) => this.dialect.escapeName(it.name)).join(",") : this.dialect.escapeName(config.target.name);
    this.config.onConflict = sql2`(${sql2.raw(targetColumn)}) do update set ${setSql}${whereSql}`;
    return this;
  }
  getSQL() {
    return this.dialect.buildInsertQuery(this.config);
  }
  toSQL() {
    const { typings: _typings, ...rest4 } = this.dialect.sqlToQuery(this.getSQL());
    return rest4;
  }
  _prepare(name) {
    return tracer.startActiveSpan("drizzle.prepareQuery", () => {
      return this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), this.config.returning, name);
    });
  }
  prepare(name) {
    return this._prepare(name);
  }
  execute = (placeholderValues) => {
    return tracer.startActiveSpan("drizzle.operation", () => {
      return this._prepare().execute(placeholderValues);
    });
  };
  $dynamic() {
    return this;
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/alias.js
var aliasedTable = function(table10, tableAlias) {
  return new Proxy(table10, new TableAliasProxyHandler(tableAlias, false));
};
var aliasedTableColumn = function(column6, tableAlias) {
  return new Proxy(column6, new ColumnAliasProxyHandler(new Proxy(column6.table, new TableAliasProxyHandler(tableAlias, false))));
};
var mapColumnsInAliasedSQLToAlias = function(query, alias) {
  return new SQL.Aliased(mapColumnsInSQLToAlias(query.sql, alias), query.fieldAlias);
};
var mapColumnsInSQLToAlias = function(query, alias) {
  return sql2.join(query.queryChunks.map((c2) => {
    if (is(c2, Column)) {
      return aliasedTableColumn(c2, alias);
    }
    if (is(c2, SQL)) {
      return mapColumnsInSQLToAlias(c2, alias);
    }
    if (is(c2, SQL.Aliased)) {
      return mapColumnsInAliasedSQLToAlias(c2, alias);
    }
    return c2;
  }));
};

class ColumnAliasProxyHandler {
  constructor(table10) {
    this.table = table10;
  }
  static [entityKind] = "ColumnAliasProxyHandler";
  get(columnObj, prop) {
    if (prop === "table") {
      return this.table;
    }
    return columnObj[prop];
  }
}

class TableAliasProxyHandler {
  constructor(alias, replaceOriginalName) {
    this.alias = alias;
    this.replaceOriginalName = replaceOriginalName;
  }
  static [entityKind] = "TableAliasProxyHandler";
  get(target, prop) {
    if (prop === Table.Symbol.IsAlias) {
      return true;
    }
    if (prop === Table.Symbol.Name) {
      return this.alias;
    }
    if (this.replaceOriginalName && prop === Table.Symbol.OriginalName) {
      return this.alias;
    }
    if (prop === ViewBaseConfig) {
      return {
        ...target[ViewBaseConfig],
        name: this.alias,
        isAlias: true
      };
    }
    if (prop === Table.Symbol.Columns) {
      const columns = target[Table.Symbol.Columns];
      if (!columns) {
        return columns;
      }
      const proxiedColumns = {};
      Object.keys(columns).map((key) => {
        proxiedColumns[key] = new Proxy(columns[key], new ColumnAliasProxyHandler(new Proxy(target, this)));
      });
      return proxiedColumns;
    }
    const value15 = target[prop];
    if (is(value15, Column)) {
      return new Proxy(value15, new ColumnAliasProxyHandler(new Proxy(target, this)));
    }
    return value15;
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/errors.js
class DrizzleError extends Error {
  static [entityKind] = "DrizzleError";
  constructor({ message, cause }) {
    super(message);
    this.name = "DrizzleError";
    this.cause = cause;
  }
}

class TransactionRollbackError extends DrizzleError {
  static [entityKind] = "TransactionRollbackError";
  constructor() {
    super({ message: "Rollback" });
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/column-builder.js
class ColumnBuilder {
  static [entityKind] = "ColumnBuilder";
  config;
  constructor(name, dataType, columnType) {
    this.config = {
      name,
      notNull: false,
      default: undefined,
      hasDefault: false,
      primaryKey: false,
      isUnique: false,
      uniqueName: undefined,
      uniqueType: undefined,
      dataType,
      columnType
    };
  }
  $type() {
    return this;
  }
  notNull() {
    this.config.notNull = true;
    return this;
  }
  default(value15) {
    this.config.default = value15;
    this.config.hasDefault = true;
    return this;
  }
  $defaultFn(fn) {
    this.config.defaultFn = fn;
    this.config.hasDefault = true;
    return this;
  }
  $default = this.$defaultFn;
  primaryKey() {
    this.config.primaryKey = true;
    this.config.notNull = true;
    return this;
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/foreign-keys.js
class ForeignKeyBuilder {
  static [entityKind] = "PgForeignKeyBuilder";
  reference;
  _onUpdate = "no action";
  _onDelete = "no action";
  constructor(config, actions) {
    this.reference = () => {
      const { name, columns, foreignColumns } = config();
      return { name, columns, foreignTable: foreignColumns[0].table, foreignColumns };
    };
    if (actions) {
      this._onUpdate = actions.onUpdate;
      this._onDelete = actions.onDelete;
    }
  }
  onUpdate(action) {
    this._onUpdate = action === undefined ? "no action" : action;
    return this;
  }
  onDelete(action) {
    this._onDelete = action === undefined ? "no action" : action;
    return this;
  }
  build(table11) {
    return new ForeignKey(table11, this);
  }
}

class ForeignKey {
  constructor(table11, builder) {
    this.table = table11;
    this.reference = builder.reference;
    this.onUpdate = builder._onUpdate;
    this.onDelete = builder._onDelete;
  }
  static [entityKind] = "PgForeignKey";
  reference;
  onUpdate;
  onDelete;
  getName() {
    const { name, columns, foreignColumns } = this.reference();
    const columnNames = columns.map((column6) => column6.name);
    const foreignColumnNames = foreignColumns.map((column6) => column6.name);
    const chunks = [
      this.table[PgTable.Symbol.Name],
      ...columnNames,
      foreignColumns[0].table[PgTable.Symbol.Name],
      ...foreignColumnNames
    ];
    return name ?? `${chunks.join("_")}_fk`;
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/unique-constraint.js
var uniqueKeyName = function(table12, columns) {
  return `${table12[PgTable.Symbol.Name]}_${columns.join("_")}_unique`;
};

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/utils/array.js
var parsePgArrayValue = function(arrayString, startFrom, inQuotes) {
  for (let i = startFrom;i < arrayString.length; i++) {
    const char = arrayString[i];
    if (char === "\\") {
      i++;
      continue;
    }
    if (char === '"') {
      return [arrayString.slice(startFrom, i).replace(/\\/g, ""), i + 1];
    }
    if (inQuotes) {
      continue;
    }
    if (char === "," || char === "}") {
      return [arrayString.slice(startFrom, i).replace(/\\/g, ""), i];
    }
  }
  return [arrayString.slice(startFrom).replace(/\\/g, ""), arrayString.length];
};
var parsePgNestedArray = function(arrayString, startFrom = 0) {
  const result = [];
  let i = startFrom;
  let lastCharIsComma = false;
  while (i < arrayString.length) {
    const char = arrayString[i];
    if (char === ",") {
      if (lastCharIsComma || i === startFrom) {
        result.push("");
      }
      lastCharIsComma = true;
      i++;
      continue;
    }
    lastCharIsComma = false;
    if (char === "\\") {
      i += 2;
      continue;
    }
    if (char === '"') {
      const [value22, startFrom2] = parsePgArrayValue(arrayString, i + 1, true);
      result.push(value22);
      i = startFrom2;
      continue;
    }
    if (char === "}") {
      return [result, i + 1];
    }
    if (char === "{") {
      const [value22, startFrom2] = parsePgNestedArray(arrayString, i + 1);
      result.push(value22);
      i = startFrom2;
      continue;
    }
    const [value15, newStartFrom] = parsePgArrayValue(arrayString, i, false);
    result.push(value15);
    i = newStartFrom;
  }
  return [result, i];
};
var parsePgArray = function(arrayString) {
  const [result] = parsePgNestedArray(arrayString, 1);
  return result;
};
var makePgArray = function(array5) {
  return `{${array5.map((item) => {
    if (Array.isArray(item)) {
      return makePgArray(item);
    }
    if (typeof item === "string") {
      return `"${item.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
    }
    return `${item}`;
  }).join(",")}}`;
};

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/columns/common.js
class PgColumnBuilder extends ColumnBuilder {
  foreignKeyConfigs = [];
  static [entityKind] = "PgColumnBuilder";
  array(size) {
    return new PgArrayBuilder(this.config.name, this, size);
  }
  references(ref4, actions = {}) {
    this.foreignKeyConfigs.push({ ref: ref4, actions });
    return this;
  }
  unique(name, config) {
    this.config.isUnique = true;
    this.config.uniqueName = name;
    this.config.uniqueType = config?.nulls;
    return this;
  }
  buildForeignKeys(column7, table12) {
    return this.foreignKeyConfigs.map(({ ref: ref4, actions }) => {
      return iife((ref22, actions2) => {
        const builder = new ForeignKeyBuilder(() => {
          const foreignColumn = ref22();
          return { columns: [column7], foreignColumns: [foreignColumn] };
        });
        if (actions2.onUpdate) {
          builder.onUpdate(actions2.onUpdate);
        }
        if (actions2.onDelete) {
          builder.onDelete(actions2.onDelete);
        }
        return builder.build(table12);
      }, ref4, actions);
    });
  }
}

class PgColumn extends Column {
  constructor(table12, config) {
    if (!config.uniqueName) {
      config.uniqueName = uniqueKeyName(table12, [config.name]);
    }
    super(table12, config);
    this.table = table12;
  }
  static [entityKind] = "PgColumn";
}

class PgArrayBuilder extends PgColumnBuilder {
  static [entityKind] = "PgArrayBuilder";
  constructor(name, baseBuilder, size) {
    super(name, "array", "PgArray");
    this.config.baseBuilder = baseBuilder;
    this.config.size = size;
  }
  build(table12) {
    const baseColumn = this.config.baseBuilder.build(table12);
    return new PgArray(table12, this.config, baseColumn);
  }
}

class PgArray extends PgColumn {
  constructor(table12, config, baseColumn, range) {
    super(table12, config);
    this.baseColumn = baseColumn;
    this.range = range;
    this.size = config.size;
  }
  size;
  static [entityKind] = "PgArray";
  getSQLType() {
    return `${this.baseColumn.getSQLType()}[${typeof this.size === "number" ? this.size : ""}]`;
  }
  mapFromDriverValue(value15) {
    if (typeof value15 === "string") {
      value15 = parsePgArray(value15);
    }
    return value15.map((v2) => this.baseColumn.mapFromDriverValue(v2));
  }
  mapToDriverValue(value15, isNestedArray = false) {
    const a2 = value15.map((v2) => v2 === null ? null : is(this.baseColumn, PgArray) ? this.baseColumn.mapToDriverValue(v2, true) : this.baseColumn.mapToDriverValue(v2));
    if (isNestedArray)
      return a2;
    return makePgArray(a2);
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/columns/boolean.js
var boolean5 = function(name) {
  return new PgBooleanBuilder(name);
};

class PgBooleanBuilder extends PgColumnBuilder {
  static [entityKind] = "PgBooleanBuilder";
  constructor(name) {
    super(name, "boolean", "PgBoolean");
  }
  build(table12) {
    return new PgBoolean(table12, this.config);
  }
}

class PgBoolean extends PgColumn {
  static [entityKind] = "PgBoolean";
  getSQLType() {
    return "boolean";
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/columns/date.common.js
class PgDateColumnBaseBuilder extends PgColumnBuilder {
  static [entityKind] = "PgDateColumnBaseBuilder";
  defaultNow() {
    return this.default(sql2`now()`);
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/columns/date.js
class PgDate extends PgColumn {
  static [entityKind] = "PgDate";
  getSQLType() {
    return "date";
  }
  mapFromDriverValue(value15) {
    return new Date(value15);
  }
  mapToDriverValue(value15) {
    return value15.toISOString();
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/columns/enum.js
var pgEnum = function(enumName, values) {
  const enumInstance = Object.assign((name) => new PgEnumColumnBuilder(name, enumInstance), {
    enumName,
    enumValues: values,
    [isPgEnumSym]: true
  });
  return enumInstance;
};
var isPgEnumSym = Symbol.for("drizzle:isPgEnum");

class PgEnumColumnBuilder extends PgColumnBuilder {
  static [entityKind] = "PgEnumColumnBuilder";
  constructor(name, enumInstance) {
    super(name, "string", "PgEnumColumn");
    this.config.enum = enumInstance;
  }
  build(table12) {
    return new PgEnumColumn(table12, this.config);
  }
}

class PgEnumColumn extends PgColumn {
  static [entityKind] = "PgEnumColumn";
  enum = this.config.enum;
  enumValues = this.config.enum.enumValues;
  constructor(table12, config) {
    super(table12, config);
    this.enum = config.enum;
  }
  getSQLType() {
    return this.enum.enumName;
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/columns/integer.js
var integer4 = function(name) {
  return new PgIntegerBuilder(name);
};

class PgIntegerBuilder extends PgColumnBuilder {
  static [entityKind] = "PgIntegerBuilder";
  constructor(name) {
    super(name, "number", "PgInteger");
  }
  build(table12) {
    return new PgInteger(table12, this.config);
  }
}

class PgInteger extends PgColumn {
  static [entityKind] = "PgInteger";
  getSQLType() {
    return "integer";
  }
  mapFromDriverValue(value15) {
    if (typeof value15 === "string") {
      return Number.parseInt(value15);
    }
    return value15;
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/columns/json.js
class PgJson extends PgColumn {
  static [entityKind] = "PgJson";
  constructor(table12, config) {
    super(table12, config);
  }
  getSQLType() {
    return "json";
  }
  mapToDriverValue(value15) {
    return JSON.stringify(value15);
  }
  mapFromDriverValue(value15) {
    if (typeof value15 === "string") {
      try {
        return JSON.parse(value15);
      } catch {
        return value15;
      }
    }
    return value15;
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/columns/jsonb.js
class PgJsonb extends PgColumn {
  static [entityKind] = "PgJsonb";
  constructor(table12, config) {
    super(table12, config);
  }
  getSQLType() {
    return "jsonb";
  }
  mapToDriverValue(value15) {
    return JSON.stringify(value15);
  }
  mapFromDriverValue(value15) {
    if (typeof value15 === "string") {
      try {
        return JSON.parse(value15);
      } catch {
        return value15;
      }
    }
    return value15;
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/columns/numeric.js
class PgNumeric extends PgColumn {
  static [entityKind] = "PgNumeric";
  precision;
  scale;
  constructor(table12, config) {
    super(table12, config);
    this.precision = config.precision;
    this.scale = config.scale;
  }
  getSQLType() {
    if (this.precision !== undefined && this.scale !== undefined) {
      return `numeric(${this.precision}, ${this.scale})`;
    } else if (this.precision === undefined) {
      return "numeric";
    } else {
      return `numeric(${this.precision})`;
    }
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/columns/serial.js
var serial = function(name) {
  return new PgSerialBuilder(name);
};

class PgSerialBuilder extends PgColumnBuilder {
  static [entityKind] = "PgSerialBuilder";
  constructor(name) {
    super(name, "number", "PgSerial");
    this.config.hasDefault = true;
    this.config.notNull = true;
  }
  build(table12) {
    return new PgSerial(table12, this.config);
  }
}

class PgSerial extends PgColumn {
  static [entityKind] = "PgSerial";
  getSQLType() {
    return "serial";
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/columns/text.js
var text = function(name, config = {}) {
  return new PgTextBuilder(name, config);
};

class PgTextBuilder extends PgColumnBuilder {
  static [entityKind] = "PgTextBuilder";
  constructor(name, config) {
    super(name, "string", "PgText");
    this.config.enumValues = config.enum;
  }
  build(table12) {
    return new PgText(table12, this.config);
  }
}

class PgText extends PgColumn {
  static [entityKind] = "PgText";
  enumValues = this.config.enumValues;
  getSQLType() {
    return "text";
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/columns/time.js
class PgTime extends PgColumn {
  static [entityKind] = "PgTime";
  withTimezone;
  precision;
  constructor(table12, config) {
    super(table12, config);
    this.withTimezone = config.withTimezone;
    this.precision = config.precision;
  }
  getSQLType() {
    const precision = this.precision === undefined ? "" : `(${this.precision})`;
    return `time${precision}${this.withTimezone ? " with time zone" : ""}`;
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/columns/timestamp.js
var timestamp = function(name, config = {}) {
  if (config.mode === "string") {
    return new PgTimestampStringBuilder(name, config.withTimezone ?? false, config.precision);
  }
  return new PgTimestampBuilder(name, config.withTimezone ?? false, config.precision);
};

class PgTimestampBuilder extends PgDateColumnBaseBuilder {
  static [entityKind] = "PgTimestampBuilder";
  constructor(name, withTimezone, precision) {
    super(name, "date", "PgTimestamp");
    this.config.withTimezone = withTimezone;
    this.config.precision = precision;
  }
  build(table12) {
    return new PgTimestamp(table12, this.config);
  }
}

class PgTimestamp extends PgColumn {
  static [entityKind] = "PgTimestamp";
  withTimezone;
  precision;
  constructor(table12, config) {
    super(table12, config);
    this.withTimezone = config.withTimezone;
    this.precision = config.precision;
  }
  getSQLType() {
    const precision = this.precision === undefined ? "" : ` (${this.precision})`;
    return `timestamp${precision}${this.withTimezone ? " with time zone" : ""}`;
  }
  mapFromDriverValue = (value15) => {
    return new Date(this.withTimezone ? value15 : value15 + "+0000");
  };
  mapToDriverValue = (value15) => {
    return this.withTimezone ? value15.toUTCString() : value15.toISOString();
  };
}

class PgTimestampStringBuilder extends PgDateColumnBaseBuilder {
  static [entityKind] = "PgTimestampStringBuilder";
  constructor(name, withTimezone, precision) {
    super(name, "string", "PgTimestampString");
    this.config.withTimezone = withTimezone;
    this.config.precision = precision;
  }
  build(table12) {
    return new PgTimestampString(table12, this.config);
  }
}

class PgTimestampString extends PgColumn {
  static [entityKind] = "PgTimestampString";
  withTimezone;
  precision;
  constructor(table12, config) {
    super(table12, config);
    this.withTimezone = config.withTimezone;
    this.precision = config.precision;
  }
  getSQLType() {
    const precision = this.precision === undefined ? "" : `(${this.precision})`;
    return `timestamp${precision}${this.withTimezone ? " with time zone" : ""}`;
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/columns/uuid.js
class PgUUID extends PgColumn {
  static [entityKind] = "PgUUID";
  getSQLType() {
    return "uuid";
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/columns/varchar.js
var varchar = function(name, config = {}) {
  return new PgVarcharBuilder(name, config);
};

class PgVarcharBuilder extends PgColumnBuilder {
  static [entityKind] = "PgVarcharBuilder";
  constructor(name, config) {
    super(name, "string", "PgVarchar");
    this.config.length = config.length;
    this.config.enumValues = config.enum;
  }
  build(table12) {
    return new PgVarchar(table12, this.config);
  }
}

class PgVarchar extends PgColumn {
  static [entityKind] = "PgVarchar";
  length = this.config.length;
  enumValues = this.config.enumValues;
  getSQLType() {
    return this.length === undefined ? `varchar` : `varchar(${this.length})`;
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/view-base.js
class PgViewBase extends View {
  static [entityKind] = "PgViewBase";
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/dialect.js
class PgDialect {
  static [entityKind] = "PgDialect";
  async migrate(migrations, session) {
    const migrationTableCreate = sql2`
			CREATE TABLE IF NOT EXISTS "drizzle"."__drizzle_migrations" (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at bigint
			)
		`;
    await session.execute(sql2`CREATE SCHEMA IF NOT EXISTS "drizzle"`);
    await session.execute(migrationTableCreate);
    const dbMigrations = await session.all(sql2`select id, hash, created_at from "drizzle"."__drizzle_migrations" order by created_at desc limit 1`);
    const lastDbMigration = dbMigrations[0];
    await session.transaction(async (tx) => {
      for await (const migration of migrations) {
        if (!lastDbMigration || Number(lastDbMigration.created_at) < migration.folderMillis) {
          for (const stmt of migration.sql) {
            await tx.execute(sql2.raw(stmt));
          }
          await tx.execute(sql2`insert into "drizzle"."__drizzle_migrations" ("hash", "created_at") values(${migration.hash}, ${migration.folderMillis})`);
        }
      }
    });
  }
  escapeName(name) {
    return `"${name}"`;
  }
  escapeParam(num) {
    return `\$${num + 1}`;
  }
  escapeString(str) {
    return `'${str.replace(/'/g, "''")}'`;
  }
  buildDeleteQuery({ table: table14, where, returning }) {
    const returningSql = returning ? sql2` returning ${this.buildSelection(returning, { isSingleTable: true })}` : undefined;
    const whereSql = where ? sql2` where ${where}` : undefined;
    return sql2`delete from ${table14}${whereSql}${returningSql}`;
  }
  buildUpdateSet(table14, set2) {
    const setEntries = Object.entries(set2);
    const setSize = setEntries.length;
    return sql2.join(setEntries.flatMap(([colName, value15], i) => {
      const col = table14[Table.Symbol.Columns][colName];
      const res = sql2`${sql2.identifier(col.name)} = ${value15}`;
      if (i < setSize - 1) {
        return [res, sql2.raw(", ")];
      }
      return [res];
    }));
  }
  buildUpdateQuery({ table: table14, set: set2, where, returning }) {
    const setSql = this.buildUpdateSet(table14, set2);
    const returningSql = returning ? sql2` returning ${this.buildSelection(returning, { isSingleTable: true })}` : undefined;
    const whereSql = where ? sql2` where ${where}` : undefined;
    return sql2`update ${table14} set ${setSql}${whereSql}${returningSql}`;
  }
  buildSelection(fields, { isSingleTable = false } = {}) {
    const columnsLen = fields.length;
    const chunks = fields.flatMap(({ field }, i) => {
      const chunk = [];
      if (is(field, SQL.Aliased) && field.isSelectionField) {
        chunk.push(sql2.identifier(field.fieldAlias));
      } else if (is(field, SQL.Aliased) || is(field, SQL)) {
        const query = is(field, SQL.Aliased) ? field.sql : field;
        if (isSingleTable) {
          chunk.push(new SQL(query.queryChunks.map((c2) => {
            if (is(c2, PgColumn)) {
              return sql2.identifier(c2.name);
            }
            return c2;
          })));
        } else {
          chunk.push(query);
        }
        if (is(field, SQL.Aliased)) {
          chunk.push(sql2` as ${sql2.identifier(field.fieldAlias)}`);
        }
      } else if (is(field, Column)) {
        if (isSingleTable) {
          chunk.push(sql2.identifier(field.name));
        } else {
          chunk.push(field);
        }
      }
      if (i < columnsLen - 1) {
        chunk.push(sql2`, `);
      }
      return chunk;
    });
    return sql2.join(chunks);
  }
  buildSelectQuery({
    withList,
    fields,
    fieldsFlat,
    where,
    having,
    table: table14,
    joins,
    orderBy,
    groupBy,
    limit,
    offset,
    lockingClause,
    distinct,
    setOperators
  }) {
    const fieldsList = fieldsFlat ?? orderSelectedFields(fields);
    for (const f of fieldsList) {
      if (is(f.field, Column) && getTableName(f.field.table) !== (is(table14, Subquery) ? table14[SubqueryConfig].alias : is(table14, PgViewBase) ? table14[ViewBaseConfig].name : is(table14, SQL) ? undefined : getTableName(table14)) && !((table22) => joins?.some(({ alias: alias2 }) => alias2 === (table22[Table.Symbol.IsAlias] ? getTableName(table22) : table22[Table.Symbol.BaseName])))(f.field.table)) {
        const tableName = getTableName(f.field.table);
        throw new Error(`Your "${f.path.join("->")}" field references a column "${tableName}"."${f.field.name}", but the table "${tableName}" is not part of the query! Did you forget to join it?`);
      }
    }
    const isSingleTable = !joins || joins.length === 0;
    let withSql;
    if (withList?.length) {
      const withSqlChunks = [sql2`with `];
      for (const [i, w] of withList.entries()) {
        withSqlChunks.push(sql2`${sql2.identifier(w[SubqueryConfig].alias)} as (${w[SubqueryConfig].sql})`);
        if (i < withList.length - 1) {
          withSqlChunks.push(sql2`, `);
        }
      }
      withSqlChunks.push(sql2` `);
      withSql = sql2.join(withSqlChunks);
    }
    let distinctSql;
    if (distinct) {
      distinctSql = distinct === true ? sql2` distinct` : sql2` distinct on (${sql2.join(distinct.on, sql2`, `)})`;
    }
    const selection = this.buildSelection(fieldsList, { isSingleTable });
    const tableSql = (() => {
      if (is(table14, Table) && table14[Table.Symbol.OriginalName] !== table14[Table.Symbol.Name]) {
        let fullName = sql2`${sql2.identifier(table14[Table.Symbol.OriginalName])}`;
        if (table14[Table.Symbol.Schema]) {
          fullName = sql2`${sql2.identifier(table14[Table.Symbol.Schema])}.${fullName}`;
        }
        return sql2`${fullName} ${sql2.identifier(table14[Table.Symbol.Name])}`;
      }
      return table14;
    })();
    const joinsArray = [];
    if (joins) {
      for (const [index, joinMeta] of joins.entries()) {
        if (index === 0) {
          joinsArray.push(sql2` `);
        }
        const table22 = joinMeta.table;
        const lateralSql = joinMeta.lateral ? sql2` lateral` : undefined;
        if (is(table22, PgTable)) {
          const tableName = table22[PgTable.Symbol.Name];
          const tableSchema = table22[PgTable.Symbol.Schema];
          const origTableName = table22[PgTable.Symbol.OriginalName];
          const alias2 = tableName === origTableName ? undefined : joinMeta.alias;
          joinsArray.push(sql2`${sql2.raw(joinMeta.joinType)} join${lateralSql} ${tableSchema ? sql2`${sql2.identifier(tableSchema)}.` : undefined}${sql2.identifier(origTableName)}${alias2 && sql2` ${sql2.identifier(alias2)}`} on ${joinMeta.on}`);
        } else if (is(table22, View)) {
          const viewName = table22[ViewBaseConfig].name;
          const viewSchema = table22[ViewBaseConfig].schema;
          const origViewName = table22[ViewBaseConfig].originalName;
          const alias2 = viewName === origViewName ? undefined : joinMeta.alias;
          joinsArray.push(sql2`${sql2.raw(joinMeta.joinType)} join${lateralSql} ${viewSchema ? sql2`${sql2.identifier(viewSchema)}.` : undefined}${sql2.identifier(origViewName)}${alias2 && sql2` ${sql2.identifier(alias2)}`} on ${joinMeta.on}`);
        } else {
          joinsArray.push(sql2`${sql2.raw(joinMeta.joinType)} join${lateralSql} ${table22} on ${joinMeta.on}`);
        }
        if (index < joins.length - 1) {
          joinsArray.push(sql2` `);
        }
      }
    }
    const joinsSql = sql2.join(joinsArray);
    const whereSql = where ? sql2` where ${where}` : undefined;
    const havingSql = having ? sql2` having ${having}` : undefined;
    let orderBySql;
    if (orderBy && orderBy.length > 0) {
      orderBySql = sql2` order by ${sql2.join(orderBy, sql2`, `)}`;
    }
    let groupBySql;
    if (groupBy && groupBy.length > 0) {
      groupBySql = sql2` group by ${sql2.join(groupBy, sql2`, `)}`;
    }
    const limitSql = limit ? sql2` limit ${limit}` : undefined;
    const offsetSql = offset ? sql2` offset ${offset}` : undefined;
    const lockingClauseSql = sql2.empty();
    if (lockingClause) {
      const clauseSql = sql2` for ${sql2.raw(lockingClause.strength)}`;
      if (lockingClause.config.of) {
        clauseSql.append(sql2` of ${sql2.join(Array.isArray(lockingClause.config.of) ? lockingClause.config.of : [lockingClause.config.of], sql2`, `)}`);
      }
      if (lockingClause.config.noWait) {
        clauseSql.append(sql2` no wait`);
      } else if (lockingClause.config.skipLocked) {
        clauseSql.append(sql2` skip locked`);
      }
      lockingClauseSql.append(clauseSql);
    }
    const finalQuery = sql2`${withSql}select${distinctSql} ${selection} from ${tableSql}${joinsSql}${whereSql}${groupBySql}${havingSql}${orderBySql}${limitSql}${offsetSql}${lockingClauseSql}`;
    if (setOperators.length > 0) {
      return this.buildSetOperations(finalQuery, setOperators);
    }
    return finalQuery;
  }
  buildSetOperations(leftSelect, setOperators) {
    const [setOperator, ...rest4] = setOperators;
    if (!setOperator) {
      throw new Error("Cannot pass undefined values to any set operator");
    }
    if (rest4.length === 0) {
      return this.buildSetOperationQuery({ leftSelect, setOperator });
    }
    return this.buildSetOperations(this.buildSetOperationQuery({ leftSelect, setOperator }), rest4);
  }
  buildSetOperationQuery({
    leftSelect,
    setOperator: { type: type75, isAll, rightSelect, limit, orderBy, offset }
  }) {
    const leftChunk = sql2`(${leftSelect.getSQL()}) `;
    const rightChunk = sql2`(${rightSelect.getSQL()})`;
    let orderBySql;
    if (orderBy && orderBy.length > 0) {
      const orderByValues = [];
      for (const singleOrderBy of orderBy) {
        if (is(singleOrderBy, PgColumn)) {
          orderByValues.push(sql2.identifier(singleOrderBy.name));
        } else if (is(singleOrderBy, SQL)) {
          for (let i = 0;i < singleOrderBy.queryChunks.length; i++) {
            const chunk = singleOrderBy.queryChunks[i];
            if (is(chunk, PgColumn)) {
              singleOrderBy.queryChunks[i] = sql2.identifier(chunk.name);
            }
          }
          orderByValues.push(sql2`${singleOrderBy}`);
        } else {
          orderByValues.push(sql2`${singleOrderBy}`);
        }
      }
      orderBySql = sql2` order by ${sql2.join(orderByValues, sql2`, `)} `;
    }
    const limitSql = limit ? sql2` limit ${limit}` : undefined;
    const operatorChunk = sql2.raw(`${type75} ${isAll ? "all " : ""}`);
    const offsetSql = offset ? sql2` offset ${offset}` : undefined;
    return sql2`${leftChunk}${operatorChunk}${rightChunk}${orderBySql}${limitSql}${offsetSql}`;
  }
  buildInsertQuery({ table: table14, values, onConflict, returning }) {
    const valuesSqlList = [];
    const columns2 = table14[Table.Symbol.Columns];
    const colEntries = Object.entries(columns2);
    const insertOrder = colEntries.map(([, column8]) => sql2.identifier(column8.name));
    for (const [valueIndex, value15] of values.entries()) {
      const valueList = [];
      for (const [fieldName, col] of colEntries) {
        const colValue = value15[fieldName];
        if (colValue === undefined || is(colValue, Param) && colValue.value === undefined) {
          if (col.defaultFn !== undefined) {
            const defaultFnResult = col.defaultFn();
            const defaultValue = is(defaultFnResult, SQL) ? defaultFnResult : sql2.param(defaultFnResult, col);
            valueList.push(defaultValue);
          } else {
            valueList.push(sql2`default`);
          }
        } else {
          valueList.push(colValue);
        }
      }
      valuesSqlList.push(valueList);
      if (valueIndex < values.length - 1) {
        valuesSqlList.push(sql2`, `);
      }
    }
    const valuesSql = sql2.join(valuesSqlList);
    const returningSql = returning ? sql2` returning ${this.buildSelection(returning, { isSingleTable: true })}` : undefined;
    const onConflictSql = onConflict ? sql2` on conflict ${onConflict}` : undefined;
    return sql2`insert into ${table14} ${insertOrder} values ${valuesSql}${onConflictSql}${returningSql}`;
  }
  buildRefreshMaterializedViewQuery({ view, concurrently, withNoData }) {
    const concurrentlySql = concurrently ? sql2` concurrently` : undefined;
    const withNoDataSql = withNoData ? sql2` with no data` : undefined;
    return sql2`refresh materialized view${concurrentlySql} ${view}${withNoDataSql}`;
  }
  prepareTyping(encoder) {
    if (is(encoder, PgJsonb) || is(encoder, PgJson)) {
      return "json";
    } else if (is(encoder, PgNumeric)) {
      return "decimal";
    } else if (is(encoder, PgTime)) {
      return "time";
    } else if (is(encoder, PgTimestamp)) {
      return "timestamp";
    } else if (is(encoder, PgDate)) {
      return "date";
    } else if (is(encoder, PgUUID)) {
      return "uuid";
    } else {
      return "none";
    }
  }
  sqlToQuery(sql22) {
    return sql22.toQuery({
      escapeName: this.escapeName,
      escapeParam: this.escapeParam,
      escapeString: this.escapeString,
      prepareTyping: this.prepareTyping
    });
  }
  buildRelationalQueryWithoutPK({
    fullSchema,
    schema: schema3,
    tableNamesMap,
    table: table14,
    tableConfig,
    queryConfig: config,
    tableAlias,
    nestedQueryRelation,
    joinOn
  }) {
    let selection = [];
    let limit, offset, orderBy = [], where;
    const joins = [];
    if (config === true) {
      const selectionEntries = Object.entries(tableConfig.columns);
      selection = selectionEntries.map(([key, value15]) => ({
        dbKey: value15.name,
        tsKey: key,
        field: aliasedTableColumn(value15, tableAlias),
        relationTableTsKey: undefined,
        isJson: false,
        selection: []
      }));
    } else {
      const aliasedColumns = Object.fromEntries(Object.entries(tableConfig.columns).map(([key, value15]) => [key, aliasedTableColumn(value15, tableAlias)]));
      if (config.where) {
        const whereSql = typeof config.where === "function" ? config.where(aliasedColumns, getOperators()) : config.where;
        where = whereSql && mapColumnsInSQLToAlias(whereSql, tableAlias);
      }
      const fieldsSelection = [];
      let selectedColumns = [];
      if (config.columns) {
        let isIncludeMode = false;
        for (const [field, value15] of Object.entries(config.columns)) {
          if (value15 === undefined) {
            continue;
          }
          if (field in tableConfig.columns) {
            if (!isIncludeMode && value15 === true) {
              isIncludeMode = true;
            }
            selectedColumns.push(field);
          }
        }
        if (selectedColumns.length > 0) {
          selectedColumns = isIncludeMode ? selectedColumns.filter((c2) => config.columns?.[c2] === true) : Object.keys(tableConfig.columns).filter((key) => !selectedColumns.includes(key));
        }
      } else {
        selectedColumns = Object.keys(tableConfig.columns);
      }
      for (const field of selectedColumns) {
        const column8 = tableConfig.columns[field];
        fieldsSelection.push({ tsKey: field, value: column8 });
      }
      let selectedRelations = [];
      if (config.with) {
        selectedRelations = Object.entries(config.with).filter((entry) => !!entry[1]).map(([tsKey, queryConfig]) => ({ tsKey, queryConfig, relation: tableConfig.relations[tsKey] }));
      }
      let extras;
      if (config.extras) {
        extras = typeof config.extras === "function" ? config.extras(aliasedColumns, { sql: sql2 }) : config.extras;
        for (const [tsKey, value15] of Object.entries(extras)) {
          fieldsSelection.push({
            tsKey,
            value: mapColumnsInAliasedSQLToAlias(value15, tableAlias)
          });
        }
      }
      for (const { tsKey, value: value15 } of fieldsSelection) {
        selection.push({
          dbKey: is(value15, SQL.Aliased) ? value15.fieldAlias : tableConfig.columns[tsKey].name,
          tsKey,
          field: is(value15, Column) ? aliasedTableColumn(value15, tableAlias) : value15,
          relationTableTsKey: undefined,
          isJson: false,
          selection: []
        });
      }
      let orderByOrig = typeof config.orderBy === "function" ? config.orderBy(aliasedColumns, getOrderByOperators()) : config.orderBy ?? [];
      if (!Array.isArray(orderByOrig)) {
        orderByOrig = [orderByOrig];
      }
      orderBy = orderByOrig.map((orderByValue) => {
        if (is(orderByValue, Column)) {
          return aliasedTableColumn(orderByValue, tableAlias);
        }
        return mapColumnsInSQLToAlias(orderByValue, tableAlias);
      });
      limit = config.limit;
      offset = config.offset;
      for (const {
        tsKey: selectedRelationTsKey,
        queryConfig: selectedRelationConfigValue,
        relation
      } of selectedRelations) {
        const normalizedRelation = normalizeRelation(schema3, tableNamesMap, relation);
        const relationTableName = relation.referencedTable[Table.Symbol.Name];
        const relationTableTsName = tableNamesMap[relationTableName];
        const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
        const joinOn2 = and(...normalizedRelation.fields.map((field2, i) => eq(aliasedTableColumn(normalizedRelation.references[i], relationTableAlias), aliasedTableColumn(field2, tableAlias))));
        const builtRelation = this.buildRelationalQueryWithoutPK({
          fullSchema,
          schema: schema3,
          tableNamesMap,
          table: fullSchema[relationTableTsName],
          tableConfig: schema3[relationTableTsName],
          queryConfig: is(relation, One) ? selectedRelationConfigValue === true ? { limit: 1 } : { ...selectedRelationConfigValue, limit: 1 } : selectedRelationConfigValue,
          tableAlias: relationTableAlias,
          joinOn: joinOn2,
          nestedQueryRelation: relation
        });
        const field = sql2`${sql2.identifier(relationTableAlias)}.${sql2.identifier("data")}`.as(selectedRelationTsKey);
        joins.push({
          on: sql2`true`,
          table: new Subquery(builtRelation.sql, {}, relationTableAlias),
          alias: relationTableAlias,
          joinType: "left",
          lateral: true
        });
        selection.push({
          dbKey: selectedRelationTsKey,
          tsKey: selectedRelationTsKey,
          field,
          relationTableTsKey: relationTableTsName,
          isJson: true,
          selection: builtRelation.selection
        });
      }
    }
    if (selection.length === 0) {
      throw new DrizzleError({ message: `No fields selected for table "${tableConfig.tsName}" ("${tableAlias}")` });
    }
    let result;
    where = and(joinOn, where);
    if (nestedQueryRelation) {
      let field = sql2`json_build_array(${sql2.join(selection.map(({ field: field2, tsKey, isJson }) => isJson ? sql2`${sql2.identifier(`${tableAlias}_${tsKey}`)}.${sql2.identifier("data")}` : is(field2, SQL.Aliased) ? field2.sql : field2), sql2`, `)})`;
      if (is(nestedQueryRelation, Many)) {
        field = sql2`coalesce(json_agg(${field}${orderBy.length > 0 ? sql2` order by ${sql2.join(orderBy, sql2`, `)}` : undefined}), '[]'::json)`;
      }
      const nestedSelection = [{
        dbKey: "data",
        tsKey: "data",
        field: field.as("data"),
        isJson: true,
        relationTableTsKey: tableConfig.tsName,
        selection
      }];
      const needsSubquery = limit !== undefined || offset !== undefined || orderBy.length > 0;
      if (needsSubquery) {
        result = this.buildSelectQuery({
          table: aliasedTable(table14, tableAlias),
          fields: {},
          fieldsFlat: [{
            path: [],
            field: sql2.raw("*")
          }],
          where,
          limit,
          offset,
          orderBy,
          setOperators: []
        });
        where = undefined;
        limit = undefined;
        offset = undefined;
        orderBy = [];
      } else {
        result = aliasedTable(table14, tableAlias);
      }
      result = this.buildSelectQuery({
        table: is(result, PgTable) ? result : new Subquery(result, {}, tableAlias),
        fields: {},
        fieldsFlat: nestedSelection.map(({ field: field2 }) => ({
          path: [],
          field: is(field2, Column) ? aliasedTableColumn(field2, tableAlias) : field2
        })),
        joins,
        where,
        limit,
        offset,
        orderBy,
        setOperators: []
      });
    } else {
      result = this.buildSelectQuery({
        table: aliasedTable(table14, tableAlias),
        fields: {},
        fieldsFlat: selection.map(({ field }) => ({
          path: [],
          field: is(field, Column) ? aliasedTableColumn(field, tableAlias) : field
        })),
        joins,
        where,
        limit,
        offset,
        orderBy,
        setOperators: []
      });
    }
    return {
      tableTsKey: tableConfig.tsName,
      sql: result,
      selection
    };
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/query-builders/query-builder.js
class TypedQueryBuilder {
  static [entityKind] = "TypedQueryBuilder";
  getSelectedFields() {
    return this._.selectedFields;
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/selection-proxy.js
class SelectionProxyHandler {
  static [entityKind] = "SelectionProxyHandler";
  config;
  constructor(config) {
    this.config = { ...config };
  }
  get(subquery5, prop) {
    if (prop === SubqueryConfig) {
      return {
        ...subquery5[SubqueryConfig],
        selection: new Proxy(subquery5[SubqueryConfig].selection, this)
      };
    }
    if (prop === ViewBaseConfig) {
      return {
        ...subquery5[ViewBaseConfig],
        selectedFields: new Proxy(subquery5[ViewBaseConfig].selectedFields, this)
      };
    }
    if (typeof prop === "symbol") {
      return subquery5[prop];
    }
    const columns2 = is(subquery5, Subquery) ? subquery5[SubqueryConfig].selection : is(subquery5, View) ? subquery5[ViewBaseConfig].selectedFields : subquery5;
    const value15 = columns2[prop];
    if (is(value15, SQL.Aliased)) {
      if (this.config.sqlAliasedBehavior === "sql" && !value15.isSelectionField) {
        return value15.sql;
      }
      const newValue = value15.clone();
      newValue.isSelectionField = true;
      return newValue;
    }
    if (is(value15, SQL)) {
      if (this.config.sqlBehavior === "sql") {
        return value15;
      }
      throw new Error(`You tried to reference "${prop}" field from a subquery, which is a raw SQL field, but it doesn't have an alias declared. Please add an alias to the field using ".as('alias')" method.`);
    }
    if (is(value15, Column)) {
      if (this.config.alias) {
        return new Proxy(value15, new ColumnAliasProxyHandler(new Proxy(value15.table, new TableAliasProxyHandler(this.config.alias, this.config.replaceOriginalName ?? false))));
      }
      return value15;
    }
    if (typeof value15 !== "object" || value15 === null) {
      return value15;
    }
    return new Proxy(value15, new SelectionProxyHandler(this.config));
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/query-builders/select.js
var createSetOperator = function(type75, isAll) {
  return (leftSelect, rightSelect, ...restSelects) => {
    const setOperators = [rightSelect, ...restSelects].map((select) => ({
      type: type75,
      isAll,
      rightSelect: select
    }));
    for (const setOperator of setOperators) {
      if (!haveSameKeys(leftSelect.getSelectedFields(), setOperator.rightSelect.getSelectedFields())) {
        throw new Error("Set operator error (union / intersect / except): selected fields are not the same or are in a different order");
      }
    }
    return leftSelect.addSetOperators(setOperators);
  };
};

class PgSelectBuilder {
  static [entityKind] = "PgSelectBuilder";
  fields;
  session;
  dialect;
  withList = [];
  distinct;
  constructor(config) {
    this.fields = config.fields;
    this.session = config.session;
    this.dialect = config.dialect;
    if (config.withList) {
      this.withList = config.withList;
    }
    this.distinct = config.distinct;
  }
  from(source) {
    const isPartialSelect = !!this.fields;
    let fields;
    if (this.fields) {
      fields = this.fields;
    } else if (is(source, Subquery)) {
      fields = Object.fromEntries(Object.keys(source[SubqueryConfig].selection).map((key) => [key, source[key]]));
    } else if (is(source, PgViewBase)) {
      fields = source[ViewBaseConfig].selectedFields;
    } else if (is(source, SQL)) {
      fields = {};
    } else {
      fields = getTableColumns(source);
    }
    return new PgSelectBase({
      table: source,
      fields,
      isPartialSelect,
      session: this.session,
      dialect: this.dialect,
      withList: this.withList,
      distinct: this.distinct
    });
  }
}

class PgSelectQueryBuilderBase extends TypedQueryBuilder {
  static [entityKind] = "PgSelectQueryBuilder";
  _;
  config;
  joinsNotNullableMap;
  tableName;
  isPartialSelect;
  session;
  dialect;
  constructor({ table: table15, fields, isPartialSelect, session, dialect, withList, distinct }) {
    super();
    this.config = {
      withList,
      table: table15,
      fields: { ...fields },
      distinct,
      setOperators: []
    };
    this.isPartialSelect = isPartialSelect;
    this.session = session;
    this.dialect = dialect;
    this._ = {
      selectedFields: fields
    };
    this.tableName = getTableLikeName(table15);
    this.joinsNotNullableMap = typeof this.tableName === "string" ? { [this.tableName]: true } : {};
  }
  createJoin(joinType) {
    return (table15, on) => {
      const baseTableName = this.tableName;
      const tableName = getTableLikeName(table15);
      if (typeof tableName === "string" && this.config.joins?.some((join) => join.alias === tableName)) {
        throw new Error(`Alias "${tableName}" is already used in this query`);
      }
      if (!this.isPartialSelect) {
        if (Object.keys(this.joinsNotNullableMap).length === 1 && typeof baseTableName === "string") {
          this.config.fields = {
            [baseTableName]: this.config.fields
          };
        }
        if (typeof tableName === "string" && !is(table15, SQL)) {
          const selection = is(table15, Subquery) ? table15[SubqueryConfig].selection : is(table15, View) ? table15[ViewBaseConfig].selectedFields : table15[Table.Symbol.Columns];
          this.config.fields[tableName] = selection;
        }
      }
      if (typeof on === "function") {
        on = on(new Proxy(this.config.fields, new SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })));
      }
      if (!this.config.joins) {
        this.config.joins = [];
      }
      this.config.joins.push({ on, table: table15, joinType, alias: tableName });
      if (typeof tableName === "string") {
        switch (joinType) {
          case "left": {
            this.joinsNotNullableMap[tableName] = false;
            break;
          }
          case "right": {
            this.joinsNotNullableMap = Object.fromEntries(Object.entries(this.joinsNotNullableMap).map(([key]) => [key, false]));
            this.joinsNotNullableMap[tableName] = true;
            break;
          }
          case "inner": {
            this.joinsNotNullableMap[tableName] = true;
            break;
          }
          case "full": {
            this.joinsNotNullableMap = Object.fromEntries(Object.entries(this.joinsNotNullableMap).map(([key]) => [key, false]));
            this.joinsNotNullableMap[tableName] = false;
            break;
          }
        }
      }
      return this;
    };
  }
  leftJoin = this.createJoin("left");
  rightJoin = this.createJoin("right");
  innerJoin = this.createJoin("inner");
  fullJoin = this.createJoin("full");
  createSetOperator(type75, isAll) {
    return (rightSelection) => {
      const rightSelect = typeof rightSelection === "function" ? rightSelection(getPgSetOperators()) : rightSelection;
      if (!haveSameKeys(this.getSelectedFields(), rightSelect.getSelectedFields())) {
        throw new Error("Set operator error (union / intersect / except): selected fields are not the same or are in a different order");
      }
      this.config.setOperators.push({ type: type75, isAll, rightSelect });
      return this;
    };
  }
  union = this.createSetOperator("union", false);
  unionAll = this.createSetOperator("union", true);
  intersect = this.createSetOperator("intersect", false);
  intersectAll = this.createSetOperator("intersect", true);
  except = this.createSetOperator("except", false);
  exceptAll = this.createSetOperator("except", true);
  addSetOperators(setOperators) {
    this.config.setOperators.push(...setOperators);
    return this;
  }
  where(where) {
    if (typeof where === "function") {
      where = where(new Proxy(this.config.fields, new SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })));
    }
    this.config.where = where;
    return this;
  }
  having(having) {
    if (typeof having === "function") {
      having = having(new Proxy(this.config.fields, new SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })));
    }
    this.config.having = having;
    return this;
  }
  groupBy(...columns2) {
    if (typeof columns2[0] === "function") {
      const groupBy = columns2[0](new Proxy(this.config.fields, new SelectionProxyHandler({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })));
      this.config.groupBy = Array.isArray(groupBy) ? groupBy : [groupBy];
    } else {
      this.config.groupBy = columns2;
    }
    return this;
  }
  orderBy(...columns2) {
    if (typeof columns2[0] === "function") {
      const orderBy = columns2[0](new Proxy(this.config.fields, new SelectionProxyHandler({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })));
      const orderByArray = Array.isArray(orderBy) ? orderBy : [orderBy];
      if (this.config.setOperators.length > 0) {
        this.config.setOperators.at(-1).orderBy = orderByArray;
      } else {
        this.config.orderBy = orderByArray;
      }
    } else {
      const orderByArray = columns2;
      if (this.config.setOperators.length > 0) {
        this.config.setOperators.at(-1).orderBy = orderByArray;
      } else {
        this.config.orderBy = orderByArray;
      }
    }
    return this;
  }
  limit(limit) {
    if (this.config.setOperators.length > 0) {
      this.config.setOperators.at(-1).limit = limit;
    } else {
      this.config.limit = limit;
    }
    return this;
  }
  offset(offset) {
    if (this.config.setOperators.length > 0) {
      this.config.setOperators.at(-1).offset = offset;
    } else {
      this.config.offset = offset;
    }
    return this;
  }
  for(strength, config = {}) {
    this.config.lockingClause = { strength, config };
    return this;
  }
  getSQL() {
    return this.dialect.buildSelectQuery(this.config);
  }
  toSQL() {
    const { typings: _typings, ...rest4 } = this.dialect.sqlToQuery(this.getSQL());
    return rest4;
  }
  as(alias3) {
    return new Proxy(new Subquery(this.getSQL(), this.config.fields, alias3), new SelectionProxyHandler({ alias: alias3, sqlAliasedBehavior: "alias", sqlBehavior: "error" }));
  }
  getSelectedFields() {
    return new Proxy(this.config.fields, new SelectionProxyHandler({ alias: this.tableName, sqlAliasedBehavior: "alias", sqlBehavior: "error" }));
  }
  $dynamic() {
    return this;
  }
}

class PgSelectBase extends PgSelectQueryBuilderBase {
  static [entityKind] = "PgSelect";
  _prepare(name) {
    const { session, config, dialect, joinsNotNullableMap } = this;
    if (!session) {
      throw new Error("Cannot execute a query on a query builder. Please use a database instance instead.");
    }
    return tracer.startActiveSpan("drizzle.prepareQuery", () => {
      const fieldsList = orderSelectedFields(config.fields);
      const query = session.prepareQuery(dialect.sqlToQuery(this.getSQL()), fieldsList, name);
      query.joinsNotNullableMap = joinsNotNullableMap;
      return query;
    });
  }
  prepare(name) {
    return this._prepare(name);
  }
  execute = (placeholderValues) => {
    return tracer.startActiveSpan("drizzle.operation", () => {
      return this._prepare().execute(placeholderValues);
    });
  };
}
applyMixins(PgSelectBase, [QueryPromise]);
var getPgSetOperators = () => ({
  union: union22,
  unionAll,
  intersect: intersect12,
  intersectAll,
  except,
  exceptAll
});
var union22 = createSetOperator("union", false);
var unionAll = createSetOperator("union", true);
var intersect12 = createSetOperator("intersect", false);
var intersectAll = createSetOperator("intersect", true);
var except = createSetOperator("except", false);
var exceptAll = createSetOperator("except", true);

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/query-builders/query-builder.js
class QueryBuilder {
  static [entityKind] = "PgQueryBuilder";
  dialect;
  $with(alias3) {
    const queryBuilder = this;
    return {
      as(qb) {
        if (typeof qb === "function") {
          qb = qb(queryBuilder);
        }
        return new Proxy(new WithSubquery(qb.getSQL(), qb.getSelectedFields(), alias3, true), new SelectionProxyHandler({ alias: alias3, sqlAliasedBehavior: "alias", sqlBehavior: "error" }));
      }
    };
  }
  with(...queries) {
    const self2 = this;
    function select2(fields) {
      return new PgSelectBuilder({
        fields: fields ?? undefined,
        session: undefined,
        dialect: self2.getDialect(),
        withList: queries
      });
    }
    function selectDistinct(fields) {
      return new PgSelectBuilder({
        fields: fields ?? undefined,
        session: undefined,
        dialect: self2.getDialect(),
        distinct: true
      });
    }
    function selectDistinctOn(on, fields) {
      return new PgSelectBuilder({
        fields: fields ?? undefined,
        session: undefined,
        dialect: self2.getDialect(),
        distinct: { on }
      });
    }
    return { select: select2, selectDistinct, selectDistinctOn };
  }
  select(fields) {
    return new PgSelectBuilder({
      fields: fields ?? undefined,
      session: undefined,
      dialect: this.getDialect()
    });
  }
  selectDistinct(fields) {
    return new PgSelectBuilder({
      fields: fields ?? undefined,
      session: undefined,
      dialect: this.getDialect(),
      distinct: true
    });
  }
  selectDistinctOn(on, fields) {
    return new PgSelectBuilder({
      fields: fields ?? undefined,
      session: undefined,
      dialect: this.getDialect(),
      distinct: { on }
    });
  }
  getDialect() {
    if (!this.dialect) {
      this.dialect = new PgDialect;
    }
    return this.dialect;
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/query-builders/refresh-materialized-view.js
class PgRefreshMaterializedView extends QueryPromise {
  constructor(view, session, dialect2) {
    super();
    this.session = session;
    this.dialect = dialect2;
    this.config = { view };
  }
  static [entityKind] = "PgRefreshMaterializedView";
  config;
  concurrently() {
    if (this.config.withNoData !== undefined) {
      throw new Error("Cannot use concurrently and withNoData together");
    }
    this.config.concurrently = true;
    return this;
  }
  withNoData() {
    if (this.config.concurrently !== undefined) {
      throw new Error("Cannot use concurrently and withNoData together");
    }
    this.config.withNoData = true;
    return this;
  }
  getSQL() {
    return this.dialect.buildRefreshMaterializedViewQuery(this.config);
  }
  toSQL() {
    const { typings: _typings, ...rest4 } = this.dialect.sqlToQuery(this.getSQL());
    return rest4;
  }
  _prepare(name) {
    return tracer.startActiveSpan("drizzle.prepareQuery", () => {
      return this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), undefined, name);
    });
  }
  prepare(name) {
    return this._prepare(name);
  }
  execute = (placeholderValues) => {
    return tracer.startActiveSpan("drizzle.operation", () => {
      return this._prepare().execute(placeholderValues);
    });
  };
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/query-builders/update.js
class PgUpdateBuilder {
  constructor(table16, session, dialect2) {
    this.table = table16;
    this.session = session;
    this.dialect = dialect2;
  }
  static [entityKind] = "PgUpdateBuilder";
  set(values) {
    return new PgUpdateBase(this.table, mapUpdateSet(this.table, values), this.session, this.dialect);
  }
}

class PgUpdateBase extends QueryPromise {
  constructor(table16, set2, session, dialect2) {
    super();
    this.session = session;
    this.dialect = dialect2;
    this.config = { set: set2, table: table16 };
  }
  static [entityKind] = "PgUpdate";
  config;
  where(where) {
    this.config.where = where;
    return this;
  }
  returning(fields = this.config.table[Table.Symbol.Columns]) {
    this.config.returning = orderSelectedFields(fields);
    return this;
  }
  getSQL() {
    return this.dialect.buildUpdateQuery(this.config);
  }
  toSQL() {
    const { typings: _typings, ...rest4 } = this.dialect.sqlToQuery(this.getSQL());
    return rest4;
  }
  _prepare(name) {
    return this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), this.config.returning, name);
  }
  prepare(name) {
    return this._prepare(name);
  }
  execute = (placeholderValues) => {
    return this._prepare().execute(placeholderValues);
  };
  $dynamic() {
    return this;
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/query-builders/query.js
class RelationalQueryBuilder {
  constructor(fullSchema, schema3, tableNamesMap, table16, tableConfig, dialect2, session) {
    this.fullSchema = fullSchema;
    this.schema = schema3;
    this.tableNamesMap = tableNamesMap;
    this.table = table16;
    this.tableConfig = tableConfig;
    this.dialect = dialect2;
    this.session = session;
  }
  static [entityKind] = "PgRelationalQueryBuilder";
  findMany(config) {
    return new PgRelationalQuery(this.fullSchema, this.schema, this.tableNamesMap, this.table, this.tableConfig, this.dialect, this.session, config ? config : {}, "many");
  }
  findFirst(config) {
    return new PgRelationalQuery(this.fullSchema, this.schema, this.tableNamesMap, this.table, this.tableConfig, this.dialect, this.session, config ? { ...config, limit: 1 } : { limit: 1 }, "first");
  }
}

class PgRelationalQuery extends QueryPromise {
  constructor(fullSchema, schema3, tableNamesMap, table16, tableConfig, dialect2, session, config, mode) {
    super();
    this.fullSchema = fullSchema;
    this.schema = schema3;
    this.tableNamesMap = tableNamesMap;
    this.table = table16;
    this.tableConfig = tableConfig;
    this.dialect = dialect2;
    this.session = session;
    this.config = config;
    this.mode = mode;
  }
  static [entityKind] = "PgRelationalQuery";
  _prepare(name) {
    return tracer.startActiveSpan("drizzle.prepareQuery", () => {
      const { query, builtQuery } = this._toSQL();
      return this.session.prepareQuery(builtQuery, undefined, name, (rawRows, mapColumnValue) => {
        const rows = rawRows.map((row) => mapRelationalRow(this.schema, this.tableConfig, row, query.selection, mapColumnValue));
        if (this.mode === "first") {
          return rows[0];
        }
        return rows;
      });
    });
  }
  prepare(name) {
    return this._prepare(name);
  }
  _getQuery() {
    return this.dialect.buildRelationalQueryWithoutPK({
      fullSchema: this.fullSchema,
      schema: this.schema,
      tableNamesMap: this.tableNamesMap,
      table: this.table,
      tableConfig: this.tableConfig,
      queryConfig: this.config,
      tableAlias: this.tableConfig.tsName
    });
  }
  getSQL() {
    return this._getQuery().sql;
  }
  _toSQL() {
    const query = this._getQuery();
    const builtQuery = this.dialect.sqlToQuery(query.sql);
    return { query, builtQuery };
  }
  toSQL() {
    return this._toSQL().builtQuery;
  }
  execute() {
    return tracer.startActiveSpan("drizzle.operation", () => {
      return this._prepare().execute();
    });
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/db.js
class PgDatabase {
  constructor(dialect2, session, schema3) {
    this.dialect = dialect2;
    this.session = session;
    this._ = schema3 ? { schema: schema3.schema, tableNamesMap: schema3.tableNamesMap } : { schema: undefined, tableNamesMap: {} };
    this.query = {};
    if (this._.schema) {
      for (const [tableName, columns2] of Object.entries(this._.schema)) {
        this.query[tableName] = new RelationalQueryBuilder(schema3.fullSchema, this._.schema, this._.tableNamesMap, schema3.fullSchema[tableName], columns2, dialect2, session);
      }
    }
  }
  static [entityKind] = "PgDatabase";
  query;
  $with(alias3) {
    return {
      as(qb) {
        if (typeof qb === "function") {
          qb = qb(new QueryBuilder);
        }
        return new Proxy(new WithSubquery(qb.getSQL(), qb.getSelectedFields(), alias3, true), new SelectionProxyHandler({ alias: alias3, sqlAliasedBehavior: "alias", sqlBehavior: "error" }));
      }
    };
  }
  with(...queries) {
    const self2 = this;
    function select2(fields) {
      return new PgSelectBuilder({
        fields: fields ?? undefined,
        session: self2.session,
        dialect: self2.dialect,
        withList: queries
      });
    }
    return { select: select2 };
  }
  select(fields) {
    return new PgSelectBuilder({
      fields: fields ?? undefined,
      session: this.session,
      dialect: this.dialect
    });
  }
  selectDistinct(fields) {
    return new PgSelectBuilder({
      fields: fields ?? undefined,
      session: this.session,
      dialect: this.dialect,
      distinct: true
    });
  }
  selectDistinctOn(on, fields) {
    return new PgSelectBuilder({
      fields: fields ?? undefined,
      session: this.session,
      dialect: this.dialect,
      distinct: { on }
    });
  }
  update(table16) {
    return new PgUpdateBuilder(table16, this.session, this.dialect);
  }
  insert(table16) {
    return new PgInsertBuilder(table16, this.session, this.dialect);
  }
  delete(table16) {
    return new PgDeleteBase(table16, this.session, this.dialect);
  }
  refreshMaterializedView(view) {
    return new PgRefreshMaterializedView(view, this.session, this.dialect);
  }
  execute(query2) {
    return this.session.execute(query2.getSQL());
  }
  transaction(transaction, config) {
    return this.session.transaction(transaction, config);
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/pg-core/session.js
class PreparedQuery {
  static [entityKind] = "PgPreparedQuery";
  joinsNotNullableMap;
}

class PgSession {
  constructor(dialect2) {
    this.dialect = dialect2;
  }
  static [entityKind] = "PgSession";
  execute(query2) {
    return tracer.startActiveSpan("drizzle.operation", () => {
      const prepared = tracer.startActiveSpan("drizzle.prepareQuery", () => {
        return this.prepareQuery(this.dialect.sqlToQuery(query2), undefined, undefined);
      });
      return prepared.execute();
    });
  }
  all(query2) {
    return this.prepareQuery(this.dialect.sqlToQuery(query2), undefined, undefined).all();
  }
}

class PgTransaction extends PgDatabase {
  constructor(dialect2, session, schema3, nestedIndex = 0) {
    super(dialect2, session, schema3);
    this.schema = schema3;
    this.nestedIndex = nestedIndex;
  }
  static [entityKind] = "PgTransaction";
  rollback() {
    throw new TransactionRollbackError;
  }
  getTransactionConfigSQL(config) {
    const chunks = [];
    if (config.isolationLevel) {
      chunks.push(`isolation level ${config.isolationLevel}`);
    }
    if (config.accessMode) {
      chunks.push(config.accessMode);
    }
    if (typeof config.deferrable === "boolean") {
      chunks.push(config.deferrable ? "deferrable" : "not deferrable");
    }
    return sql2.raw(chunks.join(" "));
  }
  setTransaction(config) {
    return this.session.execute(sql2`set transaction ${this.getTransactionConfigSQL(config)}`);
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/postgres-js/session.js
class PostgresJsPreparedQuery extends PreparedQuery {
  constructor(client, query2, params, logger2, fields, customResultMapper) {
    super();
    this.client = client;
    this.query = query2;
    this.params = params;
    this.logger = logger2;
    this.fields = fields;
    this.customResultMapper = customResultMapper;
  }
  static [entityKind] = "PostgresJsPreparedQuery";
  async execute(placeholderValues = {}) {
    return tracer.startActiveSpan("drizzle.execute", async (span) => {
      const params = fillPlaceholders(this.params, placeholderValues);
      span?.setAttributes({
        "drizzle.query.text": this.query,
        "drizzle.query.params": JSON.stringify(params)
      });
      this.logger.logQuery(this.query, params);
      const { fields, query: query2, client, joinsNotNullableMap, customResultMapper } = this;
      if (!fields && !customResultMapper) {
        return tracer.startActiveSpan("drizzle.driver.execute", () => {
          return client.unsafe(query2, params);
        });
      }
      const rows = await tracer.startActiveSpan("drizzle.driver.execute", () => {
        span?.setAttributes({
          "drizzle.query.text": query2,
          "drizzle.query.params": JSON.stringify(params)
        });
        return client.unsafe(query2, params).values();
      });
      return tracer.startActiveSpan("drizzle.mapResponse", () => {
        return customResultMapper ? customResultMapper(rows) : rows.map((row) => mapResultRow(fields, row, joinsNotNullableMap));
      });
    });
  }
  all(placeholderValues = {}) {
    return tracer.startActiveSpan("drizzle.execute", async (span) => {
      const params = fillPlaceholders(this.params, placeholderValues);
      span?.setAttributes({
        "drizzle.query.text": this.query,
        "drizzle.query.params": JSON.stringify(params)
      });
      this.logger.logQuery(this.query, params);
      return tracer.startActiveSpan("drizzle.driver.execute", () => {
        span?.setAttributes({
          "drizzle.query.text": this.query,
          "drizzle.query.params": JSON.stringify(params)
        });
        return this.client.unsafe(this.query, params);
      });
    });
  }
}

class PostgresJsSession extends PgSession {
  constructor(client, dialect2, schema3, options = {}) {
    super(dialect2);
    this.client = client;
    this.schema = schema3;
    this.options = options;
    this.logger = options.logger ?? new NoopLogger;
  }
  static [entityKind] = "PostgresJsSession";
  logger;
  prepareQuery(query2, fields, name, customResultMapper) {
    return new PostgresJsPreparedQuery(this.client, query2.sql, query2.params, this.logger, fields, customResultMapper);
  }
  query(query2, params) {
    this.logger.logQuery(query2, params);
    return this.client.unsafe(query2, params).values();
  }
  queryObjects(query2, params) {
    return this.client.unsafe(query2, params);
  }
  transaction(transaction, config) {
    return this.client.begin(async (client) => {
      const session2 = new PostgresJsSession(client, this.dialect, this.schema, this.options);
      const tx = new PostgresJsTransaction(this.dialect, session2, this.schema);
      if (config) {
        await tx.setTransaction(config);
      }
      return transaction(tx);
    });
  }
}

class PostgresJsTransaction extends PgTransaction {
  constructor(dialect2, session2, schema3, nestedIndex = 0) {
    super(dialect2, session2, schema3, nestedIndex);
    this.session = session2;
  }
  static [entityKind] = "PostgresJsTransaction";
  transaction(transaction) {
    return this.session.client.savepoint((client) => {
      const session2 = new PostgresJsSession(client, this.dialect, this.schema, this.session.options);
      const tx = new PostgresJsTransaction(this.dialect, session2, this.schema);
      return transaction(tx);
    });
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/drizzle-orm@0.29.3_pg@8.11.3_postgres@3.4.3/node_modules/drizzle-orm/postgres-js/driver.js
var drizzle = function(client, config = {}) {
  const dialect3 = new PgDialect;
  let logger3;
  if (config.logger === true) {
    logger3 = new DefaultLogger;
  } else if (config.logger !== false) {
    logger3 = config.logger;
  }
  let schema3;
  if (config.schema) {
    const tablesConfig = extractTablesRelationalConfig(config.schema, createTableRelationsHelpers);
    schema3 = {
      fullSchema: config.schema,
      schema: tablesConfig.tables,
      tableNamesMap: tablesConfig.tableNamesMap
    };
  }
  const session3 = new PostgresJsSession(client, dialect3, schema3, { logger: logger3 });
  return new PgDatabase(dialect3, session3, schema3);
};

// /home/ellie/github/student_scheduler/packages/db/node_modules/postgres/src/index.js
import os from "os";
import fs from "fs";

// /home/ellie/github/student_scheduler/node_modules/.pnpm/postgres@3.4.3/node_modules/postgres/src/query.js
var cachedError = function(xs) {
  if (originCache.has(xs))
    return originCache.get(xs);
  const x = Error.stackTraceLimit;
  Error.stackTraceLimit = 4;
  originCache.set(xs, new Error);
  Error.stackTraceLimit = x;
  return originCache.get(xs);
};
var originCache = new Map;
var originStackCache = new Map;
var originError = Symbol("OriginError");
var CLOSE = {};

class Query extends Promise {
  constructor(strings, args, handler, canceller, options = {}) {
    let resolve, reject;
    super((a2, b2) => {
      resolve = a2;
      reject = b2;
    });
    this.tagged = Array.isArray(strings.raw);
    this.strings = strings;
    this.args = args;
    this.handler = handler;
    this.canceller = canceller;
    this.options = options;
    this.state = null;
    this.statement = null;
    this.resolve = (x) => (this.active = false, resolve(x));
    this.reject = (x) => (this.active = false, reject(x));
    this.active = false;
    this.cancelled = null;
    this.executed = false;
    this.signature = "";
    this[originError] = this.handler.debug ? new Error : this.tagged && cachedError(this.strings);
  }
  get origin() {
    return (this.handler.debug ? this[originError].stack : this.tagged && originStackCache.has(this.strings) ? originStackCache.get(this.strings) : originStackCache.set(this.strings, this[originError].stack).get(this.strings)) || "";
  }
  static get [Symbol.species]() {
    return Promise;
  }
  cancel() {
    return this.canceller && (this.canceller(this), this.canceller = null);
  }
  simple() {
    this.options.simple = true;
    this.options.prepare = false;
    return this;
  }
  async readable() {
    this.simple();
    this.streaming = true;
    return this;
  }
  async writable() {
    this.simple();
    this.streaming = true;
    return this;
  }
  cursor(rows = 1, fn) {
    this.options.simple = false;
    if (typeof rows === "function") {
      fn = rows;
      rows = 1;
    }
    this.cursorRows = rows;
    if (typeof fn === "function")
      return this.cursorFn = fn, this;
    let prev;
    return {
      [Symbol.asyncIterator]: () => ({
        next: () => {
          if (this.executed && !this.active)
            return { done: true };
          prev && prev();
          const promise5 = new Promise((resolve, reject) => {
            this.cursorFn = (value15) => {
              resolve({ value: value15, done: false });
              return new Promise((r2) => prev = r2);
            };
            this.resolve = () => (this.active = false, resolve({ done: true }));
            this.reject = (x) => (this.active = false, reject(x));
          });
          this.execute();
          return promise5;
        },
        return() {
          prev && prev(CLOSE);
          return { done: true };
        }
      })
    };
  }
  describe() {
    this.options.simple = false;
    this.onlyDescribe = this.options.prepare = true;
    return this;
  }
  stream() {
    throw new Error(".stream has been renamed to .forEach");
  }
  forEach(fn) {
    this.forEachFn = fn;
    this.handle();
    return this;
  }
  raw() {
    this.isRaw = true;
    return this;
  }
  values() {
    this.isRaw = "values";
    return this;
  }
  async handle() {
    !this.executed && (this.executed = true) && await 1 && this.handler(this);
  }
  execute() {
    this.handle();
    return this;
  }
  then() {
    this.handle();
    return super.then.apply(this, arguments);
  }
  catch() {
    this.handle();
    return super.catch.apply(this, arguments);
  }
  finally() {
    this.handle();
    return super.finally.apply(this, arguments);
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/postgres@3.4.3/node_modules/postgres/src/errors.js
var connection = function(x, options, socket) {
  const { host, port } = socket || options;
  const error22 = Object.assign(new Error("write " + x + " " + (options.path || host + ":" + port)), {
    code: x,
    errno: x,
    address: options.path || host
  }, options.path ? {} : { port });
  Error.captureStackTrace(error22, connection);
  return error22;
};
var postgres = function(x) {
  const error22 = new PostgresError(x);
  Error.captureStackTrace(error22, postgres);
  return error22;
};
var generic = function(code, message) {
  const error22 = Object.assign(new Error(code + ": " + message), { code });
  Error.captureStackTrace(error22, generic);
  return error22;
};
var notSupported = function(x) {
  const error22 = Object.assign(new Error(x + " (B) is not supported"), {
    code: "MESSAGE_NOT_SUPPORTED",
    name: x
  });
  Error.captureStackTrace(error22, notSupported);
  return error22;
};

class PostgresError extends Error {
  constructor(x) {
    super(x.message);
    this.name = this.constructor.name;
    Object.assign(this, x);
  }
}
var Errors3 = {
  connection,
  postgres,
  generic,
  notSupported
};

// /home/ellie/github/student_scheduler/node_modules/.pnpm/postgres@3.4.3/node_modules/postgres/src/types.js
function handleValue(x, parameters4, types, options) {
  let value15 = x instanceof Parameter ? x.value : x;
  if (value15 === undefined) {
    x instanceof Parameter ? x.value = options.transform.undefined : value15 = x = options.transform.undefined;
    if (value15 === undefined)
      throw Errors3.generic("UNDEFINED_VALUE", "Undefined values are not allowed");
  }
  return "$" + types.push(x instanceof Parameter ? (parameters4.push(x.value), x.array ? x.array[x.type || inferType(x.value)] || x.type || firstIsString(x.value) : x.type) : (parameters4.push(x), inferType(x)));
}
function stringify(q2, string7, value15, parameters4, types, options) {
  for (let i = 1;i < q2.strings.length; i++) {
    string7 += stringifyValue(string7, value15, parameters4, types, options) + q2.strings[i];
    value15 = q2.args[i];
  }
  return string7;
}
var stringifyValue = function(string7, value15, parameters4, types, o2) {
  return value15 instanceof Builder ? value15.build(string7, parameters4, types, o2) : value15 instanceof Query ? fragment(value15, parameters4, types, o2) : value15 instanceof Identifier2 ? value15.value : value15 && value15[0] instanceof Query ? value15.reduce((acc, x) => acc + " " + fragment(x, parameters4, types, o2), "") : handleValue(value15, parameters4, types, o2);
};
var fragment = function(q2, parameters4, types, options) {
  q2.fragment = true;
  return stringify(q2, q2.strings[0], q2.args[0], parameters4, types, options);
};
var valuesBuilder = function(first, parameters4, types, columns2, options) {
  return first.map((row) => "(" + columns2.map((column9) => stringifyValue("values", row[column9], parameters4, types, options)).join(",") + ")").join(",");
};
var values = function(first, rest4, parameters4, types, options) {
  const multi = Array.isArray(first[0]);
  const columns2 = rest4.length ? rest4.flat() : Object.keys(multi ? first[0] : first);
  return valuesBuilder(multi ? first : [first], parameters4, types, columns2, options);
};
var select2 = function(first, rest4, parameters4, types, options) {
  typeof first === "string" && (first = [first].concat(rest4));
  if (Array.isArray(first))
    return escapeIdentifiers(first, options);
  let value15;
  const columns2 = rest4.length ? rest4.flat() : Object.keys(first);
  return columns2.map((x) => {
    value15 = first[x];
    return (value15 instanceof Query ? fragment(value15, parameters4, types, options) : value15 instanceof Identifier2 ? value15.value : handleValue(value15, parameters4, types, options)) + " as " + escapeIdentifier(options.transform.column.to ? options.transform.column.to(x) : x);
  }).join(",");
};
var notTagged = function() {
  throw Errors3.generic("NOT_TAGGED_CALL", "Query not called as a tagged template literal");
};
var firstIsString = function(x) {
  if (Array.isArray(x))
    return firstIsString(x[0]);
  return typeof x === "string" ? 1009 : 0;
};
var typeHandlers = function(types) {
  return Object.keys(types).reduce((acc, k) => {
    types[k].from && [].concat(types[k].from).forEach((x) => acc.parsers[x] = types[k].parse);
    if (types[k].serialize) {
      acc.serializers[types[k].to] = types[k].serialize;
      types[k].from && [].concat(types[k].from).forEach((x) => acc.serializers[x] = types[k].serialize);
    }
    return acc;
  }, { parsers: {}, serializers: {} });
};
var escapeIdentifiers = function(xs, { transform: { column: column9 } }) {
  return xs.map((x) => escapeIdentifier(column9.to ? column9.to(x) : x)).join(",");
};
var arrayEscape = function(x) {
  return x.replace(escapeBackslash, "\\\\").replace(escapeQuote, '\\"');
};
var arrayParserLoop = function(s2, x, parser, typarray) {
  const xs = [];
  const delimiter = typarray === 1020 ? ";" : ",";
  for (;s2.i < x.length; s2.i++) {
    s2.char = x[s2.i];
    if (s2.quoted) {
      if (s2.char === "\\") {
        s2.str += x[++s2.i];
      } else if (s2.char === '"') {
        xs.push(parser ? parser(s2.str) : s2.str);
        s2.str = "";
        s2.quoted = x[s2.i + 1] === '"';
        s2.last = s2.i + 2;
      } else {
        s2.str += s2.char;
      }
    } else if (s2.char === '"') {
      s2.quoted = true;
    } else if (s2.char === "{") {
      s2.last = ++s2.i;
      xs.push(arrayParserLoop(s2, x, parser, typarray));
    } else if (s2.char === "}") {
      s2.quoted = false;
      s2.last < s2.i && xs.push(parser ? parser(x.slice(s2.last, s2.i)) : x.slice(s2.last, s2.i));
      s2.last = s2.i + 1;
      break;
    } else if (s2.char === delimiter && s2.p !== "}" && s2.p !== '"') {
      xs.push(parser ? parser(x.slice(s2.last, s2.i)) : x.slice(s2.last, s2.i));
      s2.last = s2.i + 1;
    }
    s2.p = s2.char;
  }
  s2.last < s2.i && xs.push(parser ? parser(x.slice(s2.last, s2.i + 1)) : x.slice(s2.last, s2.i + 1));
  return xs;
};
var createJsonTransform = function(fn) {
  return function jsonTransform(x, column9) {
    return typeof x === "object" && x !== null && (column9.type === 114 || column9.type === 3802) ? Array.isArray(x) ? x.map((x2) => jsonTransform(x2, column9)) : Object.entries(x).reduce((acc, [k, v2]) => Object.assign(acc, { [fn(k)]: jsonTransform(v2, column9) }), {}) : x;
  };
};
var types = {
  string: {
    to: 25,
    from: null,
    serialize: (x) => "" + x
  },
  number: {
    to: 0,
    from: [21, 23, 26, 700, 701],
    serialize: (x) => "" + x,
    parse: (x) => +x
  },
  json: {
    to: 114,
    from: [114, 3802],
    serialize: (x) => JSON.stringify(x),
    parse: (x) => JSON.parse(x)
  },
  boolean: {
    to: 16,
    from: 16,
    serialize: (x) => x === true ? "t" : "f",
    parse: (x) => x === "t"
  },
  date: {
    to: 1184,
    from: [1082, 1114, 1184],
    serialize: (x) => (x instanceof Date ? x : new Date(x)).toISOString(),
    parse: (x) => new Date(x)
  },
  bytea: {
    to: 17,
    from: 17,
    serialize: (x) => "\\x" + Buffer.from(x).toString("hex"),
    parse: (x) => Buffer.from(x.slice(2), "hex")
  }
};

class NotTagged {
  then() {
    notTagged();
  }
  catch() {
    notTagged();
  }
  finally() {
    notTagged();
  }
}

class Identifier2 extends NotTagged {
  constructor(value15) {
    super();
    this.value = escapeIdentifier(value15);
  }
}

class Parameter extends NotTagged {
  constructor(value15, type75, array6) {
    super();
    this.value = value15;
    this.type = type75;
    this.array = array6;
  }
}

class Builder extends NotTagged {
  constructor(first, rest4) {
    super();
    this.first = first;
    this.rest = rest4;
  }
  build(before, parameters4, types2, options) {
    const keyword = builders.map(([x, fn]) => ({ fn, i: before.search(x) })).sort((a2, b2) => a2.i - b2.i).pop();
    return keyword.i === -1 ? escapeIdentifiers(this.first, options) : keyword.fn(this.first, this.rest, parameters4, types2, options);
  }
}
var defaultHandlers = typeHandlers(types);
var builders = Object.entries({
  values,
  in: (...xs) => {
    const x = values(...xs);
    return x === "()" ? "(null)" : x;
  },
  select: select2,
  as: select2,
  returning: select2,
  "\\(": select2,
  update(first, rest4, parameters4, types2, options) {
    return (rest4.length ? rest4.flat() : Object.keys(first)).map((x) => escapeIdentifier(options.transform.column.to ? options.transform.column.to(x) : x) + "=" + stringifyValue("values", first[x], parameters4, types2, options));
  },
  insert(first, rest4, parameters4, types2, options) {
    const columns2 = rest4.length ? rest4.flat() : Object.keys(Array.isArray(first) ? first[0] : first);
    return "(" + escapeIdentifiers(columns2, options) + ")values" + valuesBuilder(Array.isArray(first) ? first : [first], parameters4, types2, columns2, options);
  }
}).map(([x, fn]) => [new RegExp("((?:^|[\\s(])" + x + "(?:$|[\\s(]))(?![\\s\\S]*\\1)", "i"), fn]);
var serializers = defaultHandlers.serializers;
var parsers = defaultHandlers.parsers;
var mergeUserTypes = function(types2) {
  const user = typeHandlers(types2 || {});
  return {
    serializers: Object.assign({}, serializers, user.serializers),
    parsers: Object.assign({}, parsers, user.parsers)
  };
};
var escapeIdentifier = function escape(str) {
  return '"' + str.replace(/"/g, '""').replace(/\./g, '"."') + '"';
};
var inferType = function inferType2(x) {
  return x instanceof Parameter ? x.type : x instanceof Date ? 1184 : x instanceof Uint8Array ? 17 : x === true || x === false ? 16 : typeof x === "bigint" ? 20 : Array.isArray(x) ? inferType2(x[0]) : 0;
};
var escapeBackslash = /\\/g;
var escapeQuote = /"/g;
var arraySerializer = function arraySerializer2(xs, serializer, options, typarray) {
  if (Array.isArray(xs) === false)
    return xs;
  if (!xs.length)
    return "{}";
  const first = xs[0];
  const delimiter = typarray === 1020 ? ";" : ",";
  if (Array.isArray(first) && !first.type)
    return "{" + xs.map((x) => arraySerializer2(x, serializer, options, typarray)).join(delimiter) + "}";
  return "{" + xs.map((x) => {
    if (x === undefined) {
      x = options.transform.undefined;
      if (x === undefined)
        throw Errors3.generic("UNDEFINED_VALUE", "Undefined values are not allowed");
    }
    return x === null ? "null" : '"' + arrayEscape(serializer ? serializer(x.type ? x.value : x) : "" + x) + '"';
  }).join(delimiter) + "}";
};
var arrayParserState = {
  i: 0,
  char: null,
  str: "",
  quoted: false,
  last: 0
};
var arrayParser = function arrayParser2(x, parser, typarray) {
  arrayParserState.i = arrayParserState.last = 0;
  return arrayParserLoop(arrayParserState, x, parser, typarray);
};
var toCamel = (x) => {
  let str = x[0];
  for (let i = 1;i < x.length; i++)
    str += x[i] === "_" ? x[++i].toUpperCase() : x[i];
  return str;
};
var toPascal = (x) => {
  let str = x[0].toUpperCase();
  for (let i = 1;i < x.length; i++)
    str += x[i] === "_" ? x[++i].toUpperCase() : x[i];
  return str;
};
var toKebab = (x) => x.replace(/_/g, "-");
var fromCamel = (x) => x.replace(/([A-Z])/g, "_$1").toLowerCase();
var fromPascal = (x) => (x.slice(0, 1) + x.slice(1).replace(/([A-Z])/g, "_$1")).toLowerCase();
var fromKebab = (x) => x.replace(/-/g, "_");
toCamel.column = { from: toCamel };
toCamel.value = { from: createJsonTransform(toCamel) };
fromCamel.column = { to: fromCamel };
var camel = { ...toCamel };
camel.column.to = fromCamel;
toPascal.column = { from: toPascal };
toPascal.value = { from: createJsonTransform(toPascal) };
fromPascal.column = { to: fromPascal };
var pascal = { ...toPascal };
pascal.column.to = fromPascal;
toKebab.column = { from: toKebab };
toKebab.value = { from: createJsonTransform(toKebab) };
fromKebab.column = { to: fromKebab };
var kebab = { ...toKebab };
kebab.column.to = fromKebab;

// /home/ellie/github/student_scheduler/node_modules/.pnpm/postgres@3.4.3/node_modules/postgres/src/connection.js
import net from "net";
import tls from "tls";
import crypto2 from "crypto";
import Stream from "stream";
import {performance} from "perf_hooks";

// /home/ellie/github/student_scheduler/node_modules/.pnpm/postgres@3.4.3/node_modules/postgres/src/result.js
class Result extends Array {
  constructor() {
    super();
    Object.defineProperties(this, {
      count: { value: null, writable: true },
      state: { value: null, writable: true },
      command: { value: null, writable: true },
      columns: { value: null, writable: true },
      statement: { value: null, writable: true }
    });
  }
  static get [Symbol.species]() {
    return Array;
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/postgres@3.4.3/node_modules/postgres/src/queue.js
var Queue = function(initial = []) {
  let xs = initial.slice();
  let index = 0;
  return {
    get length() {
      return xs.length - index;
    },
    remove: (x) => {
      const index2 = xs.indexOf(x);
      return index2 === -1 ? null : (xs.splice(index2, 1), x);
    },
    push: (x) => (xs.push(x), x),
    shift: () => {
      const out = xs[index++];
      if (index === xs.length) {
        index = 0;
        xs = [];
      } else {
        xs[index - 1] = undefined;
      }
      return out;
    }
  };
};
var queue_default = Queue;

// /home/ellie/github/student_scheduler/node_modules/.pnpm/postgres@3.4.3/node_modules/postgres/src/bytes.js
var fit = function(x) {
  if (buffer.length - b2.i < x) {
    const prev = buffer, length = prev.length;
    buffer = Buffer.allocUnsafe(length + (length >> 1) + x);
    prev.copy(buffer);
  }
};
var reset = function() {
  b2.i = 0;
  return b2;
};
var size = 256;
var buffer = Buffer.allocUnsafe(size);
var messages = "BCcDdEFfHPpQSX".split("").reduce((acc, x) => {
  const v2 = x.charCodeAt(0);
  acc[x] = () => {
    buffer[0] = v2;
    b2.i = 5;
    return b2;
  };
  return acc;
}, {});
var b2 = Object.assign(reset, messages, {
  N: String.fromCharCode(0),
  i: 0,
  inc(x) {
    b2.i += x;
    return b2;
  },
  str(x) {
    const length = Buffer.byteLength(x);
    fit(length);
    b2.i += buffer.write(x, b2.i, length, "utf8");
    return b2;
  },
  i16(x) {
    fit(2);
    buffer.writeUInt16BE(x, b2.i);
    b2.i += 2;
    return b2;
  },
  i32(x, i) {
    if (i || i === 0) {
      buffer.writeUInt32BE(x, i);
      return b2;
    }
    fit(4);
    buffer.writeUInt32BE(x, b2.i);
    b2.i += 4;
    return b2;
  },
  z(x) {
    fit(x);
    buffer.fill(0, b2.i, b2.i + x);
    b2.i += x;
    return b2;
  },
  raw(x) {
    buffer = Buffer.concat([buffer.subarray(0, b2.i), x]);
    b2.i = buffer.length;
    return b2;
  },
  end(at = 1) {
    buffer.writeUInt32BE(b2.i - at, at);
    const out = buffer.subarray(0, b2.i);
    b2.i = 0;
    buffer = Buffer.allocUnsafe(size);
    return out;
  }
});
var bytes_default = b2;

// /home/ellie/github/student_scheduler/node_modules/.pnpm/postgres@3.4.3/node_modules/postgres/src/connection.js
var Connection = function(options, queues = {}, { onopen = noop, onend = noop, onclose = noop } = {}) {
  const {
    ssl,
    max,
    user,
    host,
    port,
    database,
    parsers: parsers2,
    transform: transform6,
    onnotice,
    onnotify,
    onparameter,
    max_pipeline,
    keep_alive,
    backoff,
    target_session_attrs
  } = options;
  const sent = queue_default(), id = uid++, backend = { pid: null, secret: null }, idleTimer = timer(end, options.idle_timeout), lifeTimer = timer(end, options.max_lifetime), connectTimer = timer(connectTimedOut, options.connect_timeout);
  let socket = null, cancelMessage, result2 = new Result, incoming = Buffer.alloc(0), needsTypes = options.fetch_types, backendParameters = {}, statements = {}, statementId = Math.random().toString(36).slice(2), statementCount = 1, closedDate = 0, remaining = 0, hostIndex = 0, retries = 0, length = 0, delay = 0, rows = 0, serverSignature = null, nextWriteTimer = null, terminated = false, incomings = null, results = null, initial = null, ending = null, stream = null, chunk = null, ended = null, nonce = null, query4 = null, final = null;
  const connection2 = {
    queue: queues.closed,
    idleTimer,
    connect(query5) {
      initial = query5 || true;
      reconnect();
    },
    terminate,
    execute,
    cancel,
    end,
    count: 0,
    id
  };
  queues.closed && queues.closed.push(connection2);
  return connection2;
  async function createSocket() {
    let x;
    try {
      x = options.socket ? await Promise.resolve(options.socket(options)) : new net.Socket;
    } catch (e2) {
      error22(e2);
      return;
    }
    x.on("error", error22);
    x.on("close", closed);
    x.on("drain", drain);
    return x;
  }
  async function cancel({ pid, secret }, resolve, reject) {
    try {
      cancelMessage = bytes_default().i32(16).i32(80877102).i32(pid).i32(secret).end(16);
      await connect();
      socket.once("error", reject);
      socket.once("close", resolve);
    } catch (error23) {
      reject(error23);
    }
  }
  function execute(q2) {
    if (terminated)
      return queryError(q2, Errors3.connection("CONNECTION_DESTROYED", options));
    if (q2.cancelled)
      return;
    try {
      q2.state = backend;
      query4 ? sent.push(q2) : (query4 = q2, query4.active = true);
      build(q2);
      return write(toBuffer(q2)) && !q2.describeFirst && !q2.cursorFn && sent.length < max_pipeline && (!q2.options.onexecute || q2.options.onexecute(connection2));
    } catch (error23) {
      sent.length === 0 && write(Sync);
      errored(error23);
      return true;
    }
  }
  function toBuffer(q2) {
    if (q2.parameters.length >= 65534)
      throw Errors3.generic("MAX_PARAMETERS_EXCEEDED", "Max number of parameters (65534) exceeded");
    return q2.options.simple ? bytes_default().Q().str(q2.statement.string + bytes_default.N).end() : q2.describeFirst ? Buffer.concat([describe(q2), Flush]) : q2.prepare ? q2.prepared ? prepared(q2) : Buffer.concat([describe(q2), prepared(q2)]) : unnamed(q2);
  }
  function describe(q2) {
    return Buffer.concat([
      Parse(q2.statement.string, q2.parameters, q2.statement.types, q2.statement.name),
      Describe("S", q2.statement.name)
    ]);
  }
  function prepared(q2) {
    return Buffer.concat([
      Bind(q2.parameters, q2.statement.types, q2.statement.name, q2.cursorName),
      q2.cursorFn ? Execute("", q2.cursorRows) : ExecuteUnnamed
    ]);
  }
  function unnamed(q2) {
    return Buffer.concat([
      Parse(q2.statement.string, q2.parameters, q2.statement.types),
      DescribeUnnamed,
      prepared(q2)
    ]);
  }
  function build(q2) {
    const parameters4 = [], types3 = [];
    const string7 = stringify(q2, q2.strings[0], q2.args[0], parameters4, types3, options);
    !q2.tagged && q2.args.forEach((x) => handleValue(x, parameters4, types3, options));
    q2.prepare = options.prepare && ("prepare" in q2.options ? q2.options.prepare : true);
    q2.string = string7;
    q2.signature = q2.prepare && types3 + string7;
    q2.onlyDescribe && delete statements[q2.signature];
    q2.parameters = q2.parameters || parameters4;
    q2.prepared = q2.prepare && q2.signature in statements;
    q2.describeFirst = q2.onlyDescribe || parameters4.length && !q2.prepared;
    q2.statement = q2.prepared ? statements[q2.signature] : { string: string7, types: types3, name: q2.prepare ? statementId + statementCount++ : "" };
    typeof options.debug === "function" && options.debug(id, string7, parameters4, types3);
  }
  function write(x, fn) {
    chunk = chunk ? Buffer.concat([chunk, x]) : Buffer.from(x);
    if (fn || chunk.length >= 1024)
      return nextWrite(fn);
    nextWriteTimer === null && (nextWriteTimer = setImmediate(nextWrite));
    return true;
  }
  function nextWrite(fn) {
    const x = socket.write(chunk, fn);
    nextWriteTimer !== null && clearImmediate(nextWriteTimer);
    chunk = nextWriteTimer = null;
    return x;
  }
  function connectTimedOut() {
    errored(Errors3.connection("CONNECT_TIMEOUT", options, socket));
    socket.destroy();
  }
  async function secure() {
    write(SSLRequest);
    const canSSL = await new Promise((r2) => socket.once("data", (x) => r2(x[0] === 83)));
    if (!canSSL && ssl === "prefer")
      return connected();
    socket.removeAllListeners();
    socket = tls.connect({
      socket,
      servername: net.isIP(socket.host) ? undefined : socket.host,
      ...ssl === "require" || ssl === "allow" || ssl === "prefer" ? { rejectUnauthorized: false } : ssl === "verify-full" ? {} : typeof ssl === "object" ? ssl : {}
    });
    socket.on("secureConnect", connected);
    socket.on("error", error22);
    socket.on("close", closed);
    socket.on("drain", drain);
  }
  function drain() {
    !query4 && onopen(connection2);
  }
  function data(x) {
    if (incomings) {
      incomings.push(x);
      remaining -= x.length;
      if (remaining >= 0)
        return;
    }
    incoming = incomings ? Buffer.concat(incomings, length - remaining) : incoming.length === 0 ? x : Buffer.concat([incoming, x], incoming.length + x.length);
    while (incoming.length > 4) {
      length = incoming.readUInt32BE(1);
      if (length >= incoming.length) {
        remaining = length - incoming.length;
        incomings = [incoming];
        break;
      }
      try {
        handle(incoming.subarray(0, length + 1));
      } catch (e2) {
        query4 && (query4.cursorFn || query4.describeFirst) && write(Sync);
        errored(e2);
      }
      incoming = incoming.subarray(length + 1);
      remaining = 0;
      incomings = null;
    }
  }
  async function connect() {
    terminated = false;
    backendParameters = {};
    socket || (socket = await createSocket());
    if (!socket)
      return;
    connectTimer.start();
    if (options.socket)
      return ssl ? secure() : connected();
    socket.on("connect", ssl ? secure : connected);
    if (options.path)
      return socket.connect(options.path);
    socket.ssl = ssl;
    socket.connect(port[hostIndex], host[hostIndex]);
    socket.host = host[hostIndex];
    socket.port = port[hostIndex];
    hostIndex = (hostIndex + 1) % port.length;
  }
  function reconnect() {
    setTimeout(connect, closedDate ? closedDate + delay - performance.now() : 0);
  }
  function connected() {
    try {
      statements = {};
      needsTypes = options.fetch_types;
      statementId = Math.random().toString(36).slice(2);
      statementCount = 1;
      lifeTimer.start();
      socket.on("data", data);
      keep_alive && socket.setKeepAlive && socket.setKeepAlive(true, 1000 * keep_alive);
      const s2 = StartupMessage();
      write(s2);
    } catch (err) {
      error22(err);
    }
  }
  function error22(err) {
    if (connection2.queue === queues.connecting && options.host[retries + 1])
      return;
    errored(err);
    while (sent.length)
      queryError(sent.shift(), err);
  }
  function errored(err) {
    stream && (stream.destroy(err), stream = null);
    query4 && queryError(query4, err);
    initial && (queryError(initial, err), initial = null);
  }
  function queryError(query5, err) {
    Object.defineProperties(err, {
      stack: { value: err.stack + query5.origin.replace(/.*\n/, "\n"), enumerable: options.debug },
      query: { value: query5.string, enumerable: options.debug },
      parameters: { value: query5.parameters, enumerable: options.debug },
      args: { value: query5.args, enumerable: options.debug },
      types: { value: query5.statement && query5.statement.types, enumerable: options.debug }
    });
    query5.reject(err);
  }
  function end() {
    return ending || (!connection2.reserved && onend(connection2), !connection2.reserved && !initial && !query4 && sent.length === 0 ? (terminate(), new Promise((r2) => socket && socket.readyState !== "closed" ? socket.once("close", r2) : r2())) : ending = new Promise((r2) => ended = r2));
  }
  function terminate() {
    terminated = true;
    if (stream || query4 || initial || sent.length)
      error22(Errors3.connection("CONNECTION_DESTROYED", options));
    clearImmediate(nextWriteTimer);
    if (socket) {
      socket.removeListener("data", data);
      socket.removeListener("connect", connected);
      socket.readyState === "open" && socket.end(bytes_default().X().end());
    }
    ended && (ended(), ending = ended = null);
  }
  async function closed(hadError) {
    incoming = Buffer.alloc(0);
    remaining = 0;
    incomings = null;
    clearImmediate(nextWriteTimer);
    socket.removeListener("data", data);
    socket.removeListener("connect", connected);
    idleTimer.cancel();
    lifeTimer.cancel();
    connectTimer.cancel();
    if (socket.encrypted) {
      socket.removeAllListeners();
      socket = null;
    }
    if (initial)
      return reconnect();
    !hadError && (query4 || sent.length) && error22(Errors3.connection("CONNECTION_CLOSED", options, socket));
    closedDate = performance.now();
    hadError && options.shared.retries++;
    delay = (typeof backoff === "function" ? backoff(options.shared.retries) : backoff) * 1000;
    onclose(connection2, Errors3.connection("CONNECTION_CLOSED", options, socket));
  }
  function handle(xs, x = xs[0]) {
    (x === 68 ? DataRow : x === 100 ? CopyData : x === 65 ? NotificationResponse : x === 83 ? ParameterStatus : x === 90 ? ReadyForQuery : x === 67 ? CommandComplete : x === 50 ? BindComplete : x === 49 ? ParseComplete : x === 116 ? ParameterDescription : x === 84 ? RowDescription : x === 82 ? Authentication : x === 110 ? NoData : x === 75 ? BackendKeyData : x === 69 ? ErrorResponse : x === 115 ? PortalSuspended : x === 51 ? CloseComplete : x === 71 ? CopyInResponse : x === 78 ? NoticeResponse : x === 72 ? CopyOutResponse : x === 99 ? CopyDone : x === 73 ? EmptyQueryResponse : x === 86 ? FunctionCallResponse : x === 118 ? NegotiateProtocolVersion : x === 87 ? CopyBothResponse : UnknownMessage)(xs);
  }
  function DataRow(x) {
    let index = 7;
    let length2;
    let column9;
    let value15;
    const row = query4.isRaw ? new Array(query4.statement.columns.length) : {};
    for (let i = 0;i < query4.statement.columns.length; i++) {
      column9 = query4.statement.columns[i];
      length2 = x.readInt32BE(index);
      index += 4;
      value15 = length2 === -1 ? null : query4.isRaw === true ? x.subarray(index, index += length2) : column9.parser === undefined ? x.toString("utf8", index, index += length2) : column9.parser.array === true ? column9.parser(x.toString("utf8", index + 1, index += length2)) : column9.parser(x.toString("utf8", index, index += length2));
      query4.isRaw ? row[i] = query4.isRaw === true ? value15 : transform6.value.from ? transform6.value.from(value15, column9) : value15 : row[column9.name] = transform6.value.from ? transform6.value.from(value15, column9) : value15;
    }
    query4.forEachFn ? query4.forEachFn(transform6.row.from ? transform6.row.from(row) : row, result2) : result2[rows++] = transform6.row.from ? transform6.row.from(row) : row;
  }
  function ParameterStatus(x) {
    const [k, v2] = x.toString("utf8", 5, x.length - 1).split(bytes_default.N);
    backendParameters[k] = v2;
    if (options.parameters[k] !== v2) {
      options.parameters[k] = v2;
      onparameter && onparameter(k, v2);
    }
  }
  function ReadyForQuery(x) {
    query4 && query4.options.simple && query4.resolve(results || result2);
    query4 = results = null;
    result2 = new Result;
    connectTimer.cancel();
    if (initial) {
      if (target_session_attrs) {
        if (!backendParameters.in_hot_standby || !backendParameters.default_transaction_read_only)
          return fetchState();
        else if (tryNext(target_session_attrs, backendParameters))
          return terminate();
      }
      if (needsTypes) {
        initial === true && (initial = null);
        return fetchArrayTypes();
      }
      initial !== true && execute(initial);
      options.shared.retries = retries = 0;
      initial = null;
      return;
    }
    while (sent.length && (query4 = sent.shift()) && (query4.active = true, query4.cancelled))
      Connection(options).cancel(query4.state, query4.cancelled.resolve, query4.cancelled.reject);
    if (query4)
      return;
    connection2.reserved ? !connection2.reserved.release && x[5] === 73 ? ending ? terminate() : (connection2.reserved = null, onopen(connection2)) : connection2.reserved() : ending ? terminate() : onopen(connection2);
  }
  function CommandComplete(x) {
    rows = 0;
    for (let i = x.length - 1;i > 0; i--) {
      if (x[i] === 32 && x[i + 1] < 58 && result2.count === null)
        result2.count = +x.toString("utf8", i + 1, x.length - 1);
      if (x[i - 1] >= 65) {
        result2.command = x.toString("utf8", 5, i);
        result2.state = backend;
        break;
      }
    }
    final && (final(), final = null);
    if (result2.command === "BEGIN" && max !== 1 && !connection2.reserved)
      return errored(Errors3.generic("UNSAFE_TRANSACTION", "Only use sql.begin, sql.reserved or max: 1"));
    if (query4.options.simple)
      return BindComplete();
    if (query4.cursorFn) {
      result2.count && query4.cursorFn(result2);
      write(Sync);
    }
    query4.resolve(result2);
  }
  function ParseComplete() {
    query4.parsing = false;
  }
  function BindComplete() {
    !result2.statement && (result2.statement = query4.statement);
    result2.columns = query4.statement.columns;
  }
  function ParameterDescription(x) {
    const length2 = x.readUInt16BE(5);
    for (let i = 0;i < length2; ++i)
      !query4.statement.types[i] && (query4.statement.types[i] = x.readUInt32BE(7 + i * 4));
    query4.prepare && (statements[query4.signature] = query4.statement);
    query4.describeFirst && !query4.onlyDescribe && (write(prepared(query4)), query4.describeFirst = false);
  }
  function RowDescription(x) {
    if (result2.command) {
      results = results || [result2];
      results.push(result2 = new Result);
      result2.count = null;
      query4.statement.columns = null;
    }
    const length2 = x.readUInt16BE(5);
    let index = 7;
    let start;
    query4.statement.columns = Array(length2);
    for (let i = 0;i < length2; ++i) {
      start = index;
      while (x[index++] !== 0)
        ;
      const table16 = x.readUInt32BE(index);
      const number7 = x.readUInt16BE(index + 4);
      const type75 = x.readUInt32BE(index + 6);
      query4.statement.columns[i] = {
        name: transform6.column.from ? transform6.column.from(x.toString("utf8", start, index - 1)) : x.toString("utf8", start, index - 1),
        parser: parsers2[type75],
        table: table16,
        number: number7,
        type: type75
      };
      index += 18;
    }
    result2.statement = query4.statement;
    if (query4.onlyDescribe)
      return query4.resolve(query4.statement), write(Sync);
  }
  async function Authentication(x, type75 = x.readUInt32BE(5)) {
    (type75 === 3 ? AuthenticationCleartextPassword : type75 === 5 ? AuthenticationMD5Password : type75 === 10 ? SASL : type75 === 11 ? SASLContinue : type75 === 12 ? SASLFinal : type75 !== 0 ? UnknownAuth : noop)(x, type75);
  }
  async function AuthenticationCleartextPassword() {
    const payload = await Pass();
    write(bytes_default().p().str(payload).z(1).end());
  }
  async function AuthenticationMD5Password(x) {
    const payload = "md5" + await md5(Buffer.concat([
      Buffer.from(await md5(await Pass() + user)),
      x.subarray(9)
    ]));
    write(bytes_default().p().str(payload).z(1).end());
  }
  async function SASL() {
    nonce = (await crypto2.randomBytes(18)).toString("base64");
    bytes_default().p().str("SCRAM-SHA-256" + bytes_default.N);
    const i = bytes_default.i;
    write(bytes_default.inc(4).str("n,,n=*,r=" + nonce).i32(bytes_default.i - i - 4, i).end());
  }
  async function SASLContinue(x) {
    const res = x.toString("utf8", 9).split(",").reduce((acc, x2) => (acc[x2[0]] = x2.slice(2), acc), {});
    const saltedPassword = await crypto2.pbkdf2Sync(await Pass(), Buffer.from(res.s, "base64"), parseInt(res.i), 32, "sha256");
    const clientKey = await hmac(saltedPassword, "Client Key");
    const auth = "n=*,r=" + nonce + ",r=" + res.r + ",s=" + res.s + ",i=" + res.i + ",c=biws,r=" + res.r;
    serverSignature = (await hmac(await hmac(saltedPassword, "Server Key"), auth)).toString("base64");
    const payload = "c=biws,r=" + res.r + ",p=" + xor(clientKey, Buffer.from(await hmac(await sha256(clientKey), auth))).toString("base64");
    write(bytes_default().p().str(payload).end());
  }
  function SASLFinal(x) {
    if (x.toString("utf8", 9).split(bytes_default.N, 1)[0].slice(2) === serverSignature)
      return;
    errored(Errors3.generic("SASL_SIGNATURE_MISMATCH", "The server did not return the correct signature"));
    socket.destroy();
  }
  function Pass() {
    return Promise.resolve(typeof options.pass === "function" ? options.pass() : options.pass);
  }
  function NoData() {
    result2.statement = query4.statement;
    result2.statement.columns = [];
    if (query4.onlyDescribe)
      return query4.resolve(query4.statement), write(Sync);
  }
  function BackendKeyData(x) {
    backend.pid = x.readUInt32BE(5);
    backend.secret = x.readUInt32BE(9);
  }
  async function fetchArrayTypes() {
    needsTypes = false;
    const types3 = await new Query([`
      select b.oid, b.typarray
      from pg_catalog.pg_type a
      left join pg_catalog.pg_type b on b.oid = a.typelem
      where a.typcategory = 'A'
      group by b.oid, b.typarray
      order by b.oid
    `], [], execute);
    types3.forEach(({ oid, typarray }) => addArrayType(oid, typarray));
  }
  function addArrayType(oid, typarray) {
    if (!!options.parsers[typarray] && !!options.serializers[typarray])
      return;
    const parser = options.parsers[oid];
    options.shared.typeArrayMap[oid] = typarray;
    options.parsers[typarray] = (xs) => arrayParser(xs, parser, typarray);
    options.parsers[typarray].array = true;
    options.serializers[typarray] = (xs) => arraySerializer(xs, options.serializers[oid], options, typarray);
  }
  function tryNext(x, xs) {
    return x === "read-write" && xs.default_transaction_read_only === "on" || x === "read-only" && xs.default_transaction_read_only === "off" || x === "primary" && xs.in_hot_standby === "on" || x === "standby" && xs.in_hot_standby === "off" || x === "prefer-standby" && xs.in_hot_standby === "off" && options.host[retries];
  }
  function fetchState() {
    const query5 = new Query([`
      show transaction_read_only;
      select pg_catalog.pg_is_in_recovery()
    `], [], execute, null, { simple: true });
    query5.resolve = ([[a2], [b3]]) => {
      backendParameters.default_transaction_read_only = a2.transaction_read_only;
      backendParameters.in_hot_standby = b3.pg_is_in_recovery ? "on" : "off";
    };
    query5.execute();
  }
  function ErrorResponse(x) {
    query4 && (query4.cursorFn || query4.describeFirst) && write(Sync);
    const error23 = Errors3.postgres(parseError(x));
    query4 && query4.retried ? errored(query4.retried) : query4 && retryRoutines.has(error23.routine) ? retry(query4, error23) : errored(error23);
  }
  function retry(q2, error23) {
    delete statements[q2.signature];
    q2.retried = error23;
    execute(q2);
  }
  function NotificationResponse(x) {
    if (!onnotify)
      return;
    let index = 9;
    while (x[index++] !== 0)
      ;
    onnotify(x.toString("utf8", 9, index - 1), x.toString("utf8", index, x.length - 1));
  }
  async function PortalSuspended() {
    try {
      const x = await Promise.resolve(query4.cursorFn(result2));
      rows = 0;
      x === CLOSE ? write(Close(query4.portal)) : (result2 = new Result, write(Execute("", query4.cursorRows)));
    } catch (err) {
      write(Sync);
      query4.reject(err);
    }
  }
  function CloseComplete() {
    result2.count && query4.cursorFn(result2);
    query4.resolve(result2);
  }
  function CopyInResponse() {
    stream = new Stream.Writable({
      autoDestroy: true,
      write(chunk2, encoding, callback) {
        socket.write(bytes_default().d().raw(chunk2).end(), callback);
      },
      destroy(error23, callback) {
        callback(error23);
        socket.write(bytes_default().f().str(error23 + bytes_default.N).end());
        stream = null;
      },
      final(callback) {
        socket.write(bytes_default().c().end());
        final = callback;
      }
    });
    query4.resolve(stream);
  }
  function CopyOutResponse() {
    stream = new Stream.Readable({
      read() {
        socket.resume();
      }
    });
    query4.resolve(stream);
  }
  function CopyBothResponse() {
    stream = new Stream.Duplex({
      autoDestroy: true,
      read() {
        socket.resume();
      },
      write(chunk2, encoding, callback) {
        socket.write(bytes_default().d().raw(chunk2).end(), callback);
      },
      destroy(error23, callback) {
        callback(error23);
        socket.write(bytes_default().f().str(error23 + bytes_default.N).end());
        stream = null;
      },
      final(callback) {
        socket.write(bytes_default().c().end());
        final = callback;
      }
    });
    query4.resolve(stream);
  }
  function CopyData(x) {
    stream && (stream.push(x.subarray(5)) || socket.pause());
  }
  function CopyDone() {
    stream && stream.push(null);
    stream = null;
  }
  function NoticeResponse(x) {
    onnotice ? onnotice(parseError(x)) : console.log(parseError(x));
  }
  function EmptyQueryResponse() {
  }
  function FunctionCallResponse() {
    errored(Errors3.notSupported("FunctionCallResponse"));
  }
  function NegotiateProtocolVersion() {
    errored(Errors3.notSupported("NegotiateProtocolVersion"));
  }
  function UnknownMessage(x) {
    console.error("Postgres.js : Unknown Message:", x[0]);
  }
  function UnknownAuth(x, type75) {
    console.error("Postgres.js : Unknown Auth:", type75);
  }
  function Bind(parameters4, types3, statement = "", portal = "") {
    let prev, type75;
    bytes_default().B().str(portal + bytes_default.N).str(statement + bytes_default.N).i16(0).i16(parameters4.length);
    parameters4.forEach((x, i) => {
      if (x === null)
        return bytes_default.i32(4294967295);
      type75 = types3[i];
      parameters4[i] = x = type75 in options.serializers ? options.serializers[type75](x) : "" + x;
      prev = bytes_default.i;
      bytes_default.inc(4).str(x).i32(bytes_default.i - prev - 4, prev);
    });
    bytes_default.i16(0);
    return bytes_default.end();
  }
  function Parse(str, parameters4, types3, name = "") {
    bytes_default().P().str(name + bytes_default.N).str(str + bytes_default.N).i16(parameters4.length);
    parameters4.forEach((x, i) => bytes_default.i32(types3[i] || 0));
    return bytes_default.end();
  }
  function Describe(x, name = "") {
    return bytes_default().D().str(x).str(name + bytes_default.N).end();
  }
  function Execute(portal = "", rows2 = 0) {
    return Buffer.concat([
      bytes_default().E().str(portal + bytes_default.N).i32(rows2).end(),
      Flush
    ]);
  }
  function Close(portal = "") {
    return Buffer.concat([
      bytes_default().C().str("P").str(portal + bytes_default.N).end(),
      bytes_default().S().end()
    ]);
  }
  function StartupMessage() {
    return cancelMessage || bytes_default().inc(4).i16(3).z(2).str(Object.entries(Object.assign({
      user,
      database,
      client_encoding: "UTF8"
    }, options.connection)).filter(([, v2]) => v2).map(([k, v2]) => k + bytes_default.N + v2).join(bytes_default.N)).z(2).end(0);
  }
};
var parseError = function(x) {
  const error22 = {};
  let start = 5;
  for (let i = 5;i < x.length - 1; i++) {
    if (x[i] === 0) {
      error22[errorFields[x[start]]] = x.toString("utf8", start + 1, i);
      start = i + 1;
    }
  }
  return error22;
};
var md5 = function(x) {
  return crypto2.createHash("md5").update(x).digest("hex");
};
var hmac = function(key, x) {
  return crypto2.createHmac("sha256", key).update(x).digest();
};
var sha256 = function(x) {
  return crypto2.createHash("sha256").update(x).digest();
};
var xor = function(a2, b3) {
  const length = Math.max(a2.length, b3.length);
  const buffer2 = Buffer.allocUnsafe(length);
  for (let i = 0;i < length; i++)
    buffer2[i] = a2[i] ^ b3[i];
  return buffer2;
};
var timer = function(fn, seconds) {
  seconds = typeof seconds === "function" ? seconds() : seconds;
  if (!seconds)
    return { cancel: noop, start: noop };
  let timer2;
  return {
    cancel() {
      timer2 && (clearTimeout(timer2), timer2 = null);
    },
    start() {
      timer2 && clearTimeout(timer2);
      timer2 = setTimeout(done, seconds * 1000, arguments);
    }
  };
  function done(args) {
    fn.apply(null, args);
    timer2 = null;
  }
};
var connection_default = Connection;
var uid = 1;
var Sync = bytes_default().S().end();
var Flush = bytes_default().H().end();
var SSLRequest = bytes_default().i32(8).i32(80877103).end(8);
var ExecuteUnnamed = Buffer.concat([bytes_default().E().str(bytes_default.N).i32(0).end(), Sync]);
var DescribeUnnamed = bytes_default().D().str("S").str(bytes_default.N).end();
var noop = () => {
};
var retryRoutines = new Set([
  "FetchPreparedStatement",
  "RevalidateCachedQuery",
  "transformAssignedExpr"
]);
var errorFields = {
  83: "severity_local",
  86: "severity",
  67: "code",
  77: "message",
  68: "detail",
  72: "hint",
  80: "position",
  112: "internal_position",
  113: "internal_query",
  87: "where",
  115: "schema_name",
  116: "table_name",
  99: "column_name",
  100: "data type_name",
  110: "constraint_name",
  70: "file",
  76: "line",
  82: "routine"
};

// /home/ellie/github/student_scheduler/node_modules/.pnpm/postgres@3.4.3/node_modules/postgres/src/subscribe.js
var Time = function(x) {
  return new Date(Date.UTC(2000, 0, 1) + Number(x / BigInt(1000)));
};
var parse4 = function(x, state, parsers2, handle, transform6) {
  const char = (acc, [k, v2]) => (acc[k.charCodeAt(0)] = v2, acc);
  Object.entries({
    R: (x2) => {
      let i = 1;
      const r2 = state[x2.readUInt32BE(i)] = {
        schema: x2.toString("utf8", i += 4, i = x2.indexOf(0, i)) || "pg_catalog",
        table: x2.toString("utf8", i + 1, i = x2.indexOf(0, i + 1)),
        columns: Array(x2.readUInt16BE(i += 2)),
        keys: []
      };
      i += 2;
      let columnIndex = 0, column9;
      while (i < x2.length) {
        column9 = r2.columns[columnIndex++] = {
          key: x2[i++],
          name: transform6.column.from ? transform6.column.from(x2.toString("utf8", i, i = x2.indexOf(0, i))) : x2.toString("utf8", i, i = x2.indexOf(0, i)),
          type: x2.readUInt32BE(i += 1),
          parser: parsers2[x2.readUInt32BE(i)],
          atttypmod: x2.readUInt32BE(i += 4)
        };
        column9.key && r2.keys.push(column9);
        i += 4;
      }
    },
    Y: () => {
    },
    O: () => {
    },
    B: (x2) => {
      state.date = Time(x2.readBigInt64BE(9));
      state.lsn = x2.subarray(1, 9);
    },
    I: (x2) => {
      let i = 1;
      const relation = state[x2.readUInt32BE(i)];
      const { row } = tuples(x2, relation.columns, i += 7, transform6);
      handle(row, {
        command: "insert",
        relation
      });
    },
    D: (x2) => {
      let i = 1;
      const relation = state[x2.readUInt32BE(i)];
      i += 4;
      const key = x2[i] === 75;
      handle(key || x2[i] === 79 ? tuples(x2, relation.columns, i += 3, transform6).row : null, {
        command: "delete",
        relation,
        key
      });
    },
    U: (x2) => {
      let i = 1;
      const relation = state[x2.readUInt32BE(i)];
      i += 4;
      const key = x2[i] === 75;
      const xs = key || x2[i] === 79 ? tuples(x2, relation.columns, i += 3, transform6) : null;
      xs && (i = xs.i);
      const { row } = tuples(x2, relation.columns, i + 3, transform6);
      handle(row, {
        command: "update",
        relation,
        key,
        old: xs && xs.row
      });
    },
    T: () => {
    },
    C: () => {
    }
  }).reduce(char, {})[x[0]](x);
};
var tuples = function(x, columns2, xi, transform6) {
  let type75, column9, value15;
  const row = transform6.raw ? new Array(columns2.length) : {};
  for (let i = 0;i < columns2.length; i++) {
    type75 = x[xi++];
    column9 = columns2[i];
    value15 = type75 === 110 ? null : type75 === 117 ? undefined : column9.parser === undefined ? x.toString("utf8", xi + 4, xi += 4 + x.readUInt32BE(xi)) : column9.parser.array === true ? column9.parser(x.toString("utf8", xi + 5, xi += 4 + x.readUInt32BE(xi))) : column9.parser(x.toString("utf8", xi + 4, xi += 4 + x.readUInt32BE(xi)));
    transform6.raw ? row[i] = transform6.raw === true ? value15 : transform6.value.from ? transform6.value.from(value15, column9) : value15 : row[column9.name] = transform6.value.from ? transform6.value.from(value15, column9) : value15;
  }
  return { i: xi, row: transform6.row.from ? transform6.row.from(row) : row };
};
var parseEvent = function(x) {
  const xs = x.match(/^(\*|insert|update|delete)?:?([^.]+?\.?[^=]+)?=?(.+)?/i) || [];
  if (!xs)
    throw new Error("Malformed subscribe pattern: " + x);
  const [, command, path, key] = xs;
  return (command || "*") + (path ? ":" + (path.indexOf(".") === -1 ? "public." + path : path) : "") + (key ? "=" + key : "");
};
var noop2 = () => {
};
function Subscribe(postgres2, options) {
  const subscribers = new Map, slot = "postgresjs_" + Math.random().toString(36).slice(2), state = {};
  let connection2, stream, ended = false;
  const sql16 = subscribe.sql = postgres2({
    ...options,
    transform: { column: {}, value: {}, row: {} },
    max: 1,
    fetch_types: false,
    idle_timeout: null,
    max_lifetime: null,
    connection: {
      ...options.connection,
      replication: "database"
    },
    onclose: async function() {
      if (ended)
        return;
      stream = null;
      state.pid = state.secret = undefined;
      connected(await init(sql16, slot, options.publications));
      subscribers.forEach((event) => event.forEach(({ onsubscribe }) => onsubscribe()));
    },
    no_subscribe: true
  });
  const { end, close } = sql16;
  sql16.end = async () => {
    ended = true;
    stream && await new Promise((r2) => (stream.once("close", r2), stream.end()));
    return end();
  };
  sql16.close = async () => {
    stream && await new Promise((r2) => (stream.once("close", r2), stream.end()));
    return close();
  };
  return subscribe;
  async function subscribe(event, fn, onsubscribe = noop2) {
    event = parseEvent(event);
    if (!connection2)
      connection2 = init(sql16, slot, options.publications);
    const subscriber = { fn, onsubscribe };
    const fns = subscribers.has(event) ? subscribers.get(event).add(subscriber) : subscribers.set(event, new Set([subscriber])).get(event);
    const unsubscribe = () => {
      fns.delete(subscriber);
      fns.size === 0 && subscribers.delete(event);
    };
    return connection2.then((x) => {
      connected(x);
      onsubscribe();
      return { unsubscribe, state, sql: sql16 };
    });
  }
  function connected(x) {
    stream = x.stream;
    state.pid = x.state.pid;
    state.secret = x.state.secret;
  }
  async function init(sql17, slot2, publications) {
    if (!publications)
      throw new Error("Missing publication names");
    const xs = await sql17.unsafe(`CREATE_REPLICATION_SLOT ${slot2} TEMPORARY LOGICAL pgoutput NOEXPORT_SNAPSHOT`);
    const [x] = xs;
    const stream2 = await sql17.unsafe(`START_REPLICATION SLOT ${slot2} LOGICAL ${x.consistent_point} (proto_version '1', publication_names '${publications}')`).writable();
    const state2 = {
      lsn: Buffer.concat(x.consistent_point.split("/").map((x2) => Buffer.from(("00000000" + x2).slice(-8), "hex")))
    };
    stream2.on("data", data);
    stream2.on("error", error22);
    stream2.on("close", sql17.close);
    return { stream: stream2, state: xs.state };
    function error22(e2) {
      console.error("Unexpected error during logical streaming - reconnecting", e2);
    }
    function data(x2) {
      if (x2[0] === 119)
        parse4(x2.subarray(25), state2, sql17.options.parsers, handle, options.transform);
      else if (x2[0] === 107 && x2[17])
        pong();
    }
    function handle(a2, b3) {
      const path = b3.relation.schema + "." + b3.relation.table;
      call("*", a2, b3);
      call("*:" + path, a2, b3);
      b3.relation.keys.length && call("*:" + path + "=" + b3.relation.keys.map((x2) => a2[x2.name]), a2, b3);
      call(b3.command, a2, b3);
      call(b3.command + ":" + path, a2, b3);
      b3.relation.keys.length && call(b3.command + ":" + path + "=" + b3.relation.keys.map((x2) => a2[x2.name]), a2, b3);
    }
    function pong() {
      const x2 = Buffer.alloc(34);
      x2[0] = "r".charCodeAt(0);
      x2.fill(state2.lsn, 1);
      x2.writeBigInt64BE(BigInt(Date.now() - Date.UTC(2000, 0, 1)) * BigInt(1000), 25);
      stream2.write(x2);
    }
  }
  function call(x, a2, b3) {
    subscribers.has(x) && subscribers.get(x).forEach(({ fn }) => fn(a2, b3, x));
  }
}

// /home/ellie/github/student_scheduler/node_modules/.pnpm/postgres@3.4.3/node_modules/postgres/src/large.js
import Stream2 from "stream";
function largeObject(sql16, oid, mode = 131072 | 262144) {
  return new Promise(async (resolve, reject) => {
    await sql16.begin(async (sql17) => {
      let finish;
      !oid && ([{ oid }] = await sql17`select lo_creat(-1) as oid`);
      const [{ fd }] = await sql17`select lo_open(${oid}, ${mode}) as fd`;
      const lo = {
        writable,
        readable,
        close: () => sql17`select lo_close(${fd})`.then(finish),
        tell: () => sql17`select lo_tell64(${fd})`,
        read: (x) => sql17`select loread(${fd}, ${x}) as data`,
        write: (x) => sql17`select lowrite(${fd}, ${x})`,
        truncate: (x) => sql17`select lo_truncate64(${fd}, ${x})`,
        seek: (x, whence = 0) => sql17`select lo_lseek64(${fd}, ${x}, ${whence})`,
        size: () => sql17`
          select
            lo_lseek64(${fd}, location, 0) as position,
            seek.size
          from (
            select
              lo_lseek64($1, 0, 2) as size,
              tell.location
            from (select lo_tell64($1) as location) tell
          ) seek
        `
      };
      resolve(lo);
      return new Promise(async (r2) => finish = r2);
      async function readable({
        highWaterMark = 2048 * 8,
        start = 0,
        end = Infinity
      } = {}) {
        let max = end - start;
        start && await lo.seek(start);
        return new Stream2.Readable({
          highWaterMark,
          async read(size2) {
            const l2 = size2 > max ? size2 - max : size2;
            max -= size2;
            const [{ data }] = await lo.read(l2);
            this.push(data);
            if (data.length < size2)
              this.push(null);
          }
        });
      }
      async function writable({
        highWaterMark = 2048 * 8,
        start = 0
      } = {}) {
        start && await lo.seek(start);
        return new Stream2.Writable({
          highWaterMark,
          write(chunk, encoding, callback) {
            lo.write(chunk).then(() => callback(), callback);
          }
        });
      }
    }).catch(reject);
  });
}

// /home/ellie/github/student_scheduler/packages/db/node_modules/postgres/src/index.js
var Postgres = function(a2, b3) {
  const options = parseOptions(a2, b3), subscribe2 = options.no_subscribe || Subscribe(Postgres, { ...options });
  let ending = false;
  const queries = queue_default(), connecting = queue_default(), reserved = queue_default(), closed = queue_default(), ended = queue_default(), open = queue_default(), busy = queue_default(), full = queue_default(), queues = { connecting, reserved, closed, ended, open, busy, full };
  const connections = [...Array(options.max)].map(() => connection_default(options, queues, { onopen, onend, onclose }));
  const sql16 = Sql(handler);
  Object.assign(sql16, {
    get parameters() {
      return options.parameters;
    },
    largeObject: largeObject.bind(null, sql16),
    subscribe: subscribe2,
    CLOSE,
    END: CLOSE,
    PostgresError,
    options,
    reserve,
    listen,
    begin,
    close,
    end
  });
  return sql16;
  function Sql(handler2) {
    handler2.debug = options.debug;
    Object.entries(options.types).reduce((acc, [name, type75]) => {
      acc[name] = (x) => new Parameter(x, type75.to);
      return acc;
    }, typed);
    Object.assign(sql17, {
      types: typed,
      typed,
      unsafe: unsafe5,
      notify,
      array: array6,
      json: json2,
      file
    });
    return sql17;
    function typed(value15, type75) {
      return new Parameter(value15, type75);
    }
    function sql17(strings, ...args) {
      const query5 = strings && Array.isArray(strings.raw) ? new Query(strings, args, handler2, cancel) : typeof strings === "string" && !args.length ? new Identifier2(options.transform.column.to ? options.transform.column.to(strings) : strings) : new Builder(strings, args);
      return query5;
    }
    function unsafe5(string7, args = [], options2 = {}) {
      arguments.length === 2 && !Array.isArray(args) && (options2 = args, args = []);
      const query5 = new Query([string7], args, handler2, cancel, {
        prepare: false,
        ...options2,
        simple: "simple" in options2 ? options2.simple : args.length === 0
      });
      return query5;
    }
    function file(path, args = [], options2 = {}) {
      arguments.length === 2 && !Array.isArray(args) && (options2 = args, args = []);
      const query5 = new Query([], args, (query6) => {
        fs.readFile(path, "utf8", (err, string7) => {
          if (err)
            return query6.reject(err);
          query6.strings = [string7];
          handler2(query6);
        });
      }, cancel, {
        ...options2,
        simple: "simple" in options2 ? options2.simple : args.length === 0
      });
      return query5;
    }
  }
  async function listen(name, fn, onlisten) {
    const listener = { fn, onlisten };
    const sql17 = listen.sql || (listen.sql = Postgres({
      ...options,
      max: 1,
      idle_timeout: null,
      max_lifetime: null,
      fetch_types: false,
      onclose() {
        Object.entries(listen.channels).forEach(([name2, { listeners }]) => {
          delete listen.channels[name2];
          Promise.all(listeners.map((l2) => listen(name2, l2.fn, l2.onlisten).catch(() => {
          })));
        });
      },
      onnotify(c2, x) {
        c2 in listen.channels && listen.channels[c2].listeners.forEach((l2) => l2.fn(x));
      }
    }));
    const channels = listen.channels || (listen.channels = {}), exists2 = name in channels;
    if (exists2) {
      channels[name].listeners.push(listener);
      const result3 = await channels[name].result;
      listener.onlisten && listener.onlisten();
      return { state: result3.state, unlisten };
    }
    channels[name] = { result: sql17`listen ${sql17.unsafe('"' + name.replace(/"/g, '""') + '"')}`, listeners: [listener] };
    const result2 = await channels[name].result;
    listener.onlisten && listener.onlisten();
    return { state: result2.state, unlisten };
    async function unlisten() {
      if (name in channels === false)
        return;
      channels[name].listeners = channels[name].listeners.filter((x) => x !== listener);
      if (channels[name].listeners.length)
        return;
      delete channels[name];
      return sql17`unlisten ${sql17.unsafe('"' + name.replace(/"/g, '""') + '"')}`;
    }
  }
  async function notify(channel, payload) {
    return await sql16`select pg_notify(${channel}, ${"" + payload})`;
  }
  async function reserve() {
    const queue3 = queue_default();
    const c2 = open.length ? open.shift() : await new Promise((r2) => {
      queries.push({ reserve: r2 });
      closed.length && connect(closed.shift());
    });
    move(c2, reserved);
    c2.reserved = () => queue3.length ? c2.execute(queue3.shift()) : move(c2, reserved);
    c2.reserved.release = true;
    const sql17 = Sql(handler2);
    sql17.release = () => {
      c2.reserved = null;
      onopen(c2);
    };
    return sql17;
    function handler2(q2) {
      c2.queue === full ? queue3.push(q2) : c2.execute(q2) || move(c2, full);
    }
  }
  async function begin(options2, fn) {
    !fn && (fn = options2, options2 = "");
    const queries2 = queue_default();
    let savepoints = 0, connection3, prepare = null;
    try {
      await sql16.unsafe("begin " + options2.replace(/[^a-z ]/ig, ""), [], { onexecute }).execute();
      return await Promise.race([
        scope(connection3, fn),
        new Promise((_, reject) => connection3.onclose = reject)
      ]);
    } catch (error22) {
      throw error22;
    }
    async function scope(c2, fn2, name) {
      const sql17 = Sql(handler2);
      sql17.savepoint = savepoint;
      sql17.prepare = (x) => prepare = x.replace(/[^a-z0-9$-_. ]/gi);
      let uncaughtError, result2;
      name && await sql17`savepoint ${sql17(name)}`;
      try {
        result2 = await new Promise((resolve, reject) => {
          const x = fn2(sql17);
          Promise.resolve(Array.isArray(x) ? Promise.all(x) : x).then(resolve, reject);
        });
        if (uncaughtError)
          throw uncaughtError;
      } catch (e2) {
        await (name ? sql17`rollback to ${sql17(name)}` : sql17`rollback`);
        throw e2 instanceof PostgresError && e2.code === "25P02" && uncaughtError || e2;
      }
      if (!name) {
        prepare ? await sql17`prepare transaction '${sql17.unsafe(prepare)}'` : await sql17`commit`;
      }
      return result2;
      function savepoint(name2, fn3) {
        if (name2 && Array.isArray(name2.raw))
          return savepoint((sql18) => sql18.apply(sql18, arguments));
        arguments.length === 1 && (fn3 = name2, name2 = null);
        return scope(c2, fn3, "s" + savepoints++ + (name2 ? "_" + name2 : ""));
      }
      function handler2(q2) {
        q2.catch((e2) => uncaughtError || (uncaughtError = e2));
        c2.queue === full ? queries2.push(q2) : c2.execute(q2) || move(c2, full);
      }
    }
    function onexecute(c2) {
      connection3 = c2;
      move(c2, reserved);
      c2.reserved = () => queries2.length ? c2.execute(queries2.shift()) : move(c2, reserved);
    }
  }
  function move(c2, queue3) {
    c2.queue.remove(c2);
    queue3.push(c2);
    c2.queue = queue3;
    queue3 === open ? c2.idleTimer.start() : c2.idleTimer.cancel();
    return c2;
  }
  function json2(x) {
    return new Parameter(x, 3802);
  }
  function array6(x, type75) {
    if (!Array.isArray(x))
      return array6(Array.from(arguments));
    return new Parameter(x, type75 || (x.length ? inferType(x) || 25 : 0), options.shared.typeArrayMap);
  }
  function handler(query5) {
    if (ending)
      return query5.reject(Errors3.connection("CONNECTION_ENDED", options, options));
    if (open.length)
      return go(open.shift(), query5);
    if (closed.length)
      return connect(closed.shift(), query5);
    busy.length ? go(busy.shift(), query5) : queries.push(query5);
  }
  function go(c2, query5) {
    return c2.execute(query5) ? move(c2, busy) : move(c2, full);
  }
  function cancel(query5) {
    return new Promise((resolve, reject) => {
      query5.state ? query5.active ? connection_default(options).cancel(query5.state, resolve, reject) : query5.cancelled = { resolve, reject } : (queries.remove(query5), query5.cancelled = true, query5.reject(Errors3.generic("57014", "canceling statement due to user request")), resolve());
    });
  }
  async function end({ timeout = null } = {}) {
    if (ending)
      return ending;
    await 1;
    let timer2;
    return ending = Promise.race([
      new Promise((r2) => timeout !== null && (timer2 = setTimeout(destroy, timeout * 1000, r2))),
      Promise.all(connections.map((c2) => c2.end()).concat(listen.sql ? listen.sql.end({ timeout: 0 }) : [], subscribe2.sql ? subscribe2.sql.end({ timeout: 0 }) : []))
    ]).then(() => clearTimeout(timer2));
  }
  async function close() {
    await Promise.all(connections.map((c2) => c2.end()));
  }
  async function destroy(resolve) {
    await Promise.all(connections.map((c2) => c2.terminate()));
    while (queries.length)
      queries.shift().reject(Errors3.connection("CONNECTION_DESTROYED", options));
    resolve();
  }
  function connect(c2, query5) {
    move(c2, connecting);
    c2.connect(query5);
    return c2;
  }
  function onend(c2) {
    move(c2, ended);
  }
  function onopen(c2) {
    if (queries.length === 0)
      return move(c2, open);
    let max = Math.ceil(queries.length / (connecting.length + 1)), ready = true;
    while (ready && queries.length && max-- > 0) {
      const query5 = queries.shift();
      if (query5.reserve)
        return query5.reserve(c2);
      ready = c2.execute(query5);
    }
    ready ? move(c2, busy) : move(c2, full);
  }
  function onclose(c2, e2) {
    move(c2, closed);
    c2.reserved = null;
    c2.onclose && (c2.onclose(e2), c2.onclose = null);
    options.onclose && options.onclose(c2.id);
    queries.length && connect(c2, queries.shift());
  }
};
var parseOptions = function(a2, b3) {
  if (a2 && a2.shared)
    return a2;
  const env = process.env, o2 = (!a2 || typeof a2 === "string" ? b3 : a2) || {}, { url, multihost } = parseUrl(a2), query5 = [...url.searchParams].reduce((a3, [b4, c2]) => (a3[b4] = c2, a3), {}), host = o2.hostname || o2.host || multihost || url.hostname || env.PGHOST || "localhost", port = o2.port || url.port || env.PGPORT || 5432, user = o2.user || o2.username || url.username || env.PGUSERNAME || env.PGUSER || osUsername();
  o2.no_prepare && (o2.prepare = false);
  query5.sslmode && (query5.ssl = query5.sslmode, delete query5.sslmode);
  "timeout" in o2 && (console.log("The timeout option is deprecated, use idle_timeout instead"), o2.idle_timeout = o2.timeout);
  query5.sslrootcert === "system" && (query5.ssl = "verify-full");
  const ints = ["idle_timeout", "connect_timeout", "max_lifetime", "max_pipeline", "backoff", "keep_alive"];
  const defaults = {
    max: 10,
    ssl: false,
    idle_timeout: null,
    connect_timeout: 30,
    max_lifetime,
    max_pipeline: 100,
    backoff,
    keep_alive: 60,
    prepare: true,
    debug: false,
    fetch_types: true,
    publications: "alltables",
    target_session_attrs: null
  };
  return {
    host: Array.isArray(host) ? host : host.split(",").map((x) => x.split(":")[0]),
    port: Array.isArray(port) ? port : host.split(",").map((x) => parseInt(x.split(":")[1] || port)),
    path: o2.path || host.indexOf("/") > -1 && host + "/.s.PGSQL." + port,
    database: o2.database || o2.db || (url.pathname || "").slice(1) || env.PGDATABASE || user,
    user,
    pass: o2.pass || o2.password || url.password || env.PGPASSWORD || "",
    ...Object.entries(defaults).reduce((acc, [k, d2]) => {
      const value15 = k in o2 ? o2[k] : (k in query5) ? query5[k] === "disable" || query5[k] === "false" ? false : query5[k] : env["PG" + k.toUpperCase()] || d2;
      acc[k] = typeof value15 === "string" && ints.includes(k) ? +value15 : value15;
      return acc;
    }, {}),
    connection: {
      application_name: "postgres.js",
      ...o2.connection,
      ...Object.entries(query5).reduce((acc, [k, v2]) => ((k in defaults) || (acc[k] = v2), acc), {})
    },
    types: o2.types || {},
    target_session_attrs: tsa(o2, url, env),
    onnotice: o2.onnotice,
    onnotify: o2.onnotify,
    onclose: o2.onclose,
    onparameter: o2.onparameter,
    socket: o2.socket,
    transform: parseTransform(o2.transform || { undefined: undefined }),
    parameters: {},
    shared: { retries: 0, typeArrayMap: {} },
    ...mergeUserTypes(o2.types)
  };
};
var tsa = function(o2, url, env) {
  const x = o2.target_session_attrs || url.searchParams.get("target_session_attrs") || env.PGTARGETSESSIONATTRS;
  if (!x || ["read-write", "read-only", "primary", "standby", "prefer-standby"].includes(x))
    return x;
  throw new Error("target_session_attrs " + x + " is not supported");
};
var backoff = function(retries) {
  return (0.5 + Math.random() / 2) * Math.min(3 ** retries / 100, 20);
};
var max_lifetime = function() {
  return 60 * (30 + Math.random() * 30);
};
var parseTransform = function(x) {
  return {
    undefined: x.undefined,
    column: {
      from: typeof x.column === "function" ? x.column : x.column && x.column.from,
      to: x.column && x.column.to
    },
    value: {
      from: typeof x.value === "function" ? x.value : x.value && x.value.from,
      to: x.value && x.value.to
    },
    row: {
      from: typeof x.row === "function" ? x.row : x.row && x.row.from,
      to: x.row && x.row.to
    }
  };
};
var parseUrl = function(url) {
  if (!url || typeof url !== "string")
    return { url: { searchParams: new Map } };
  let host = url;
  host = host.slice(host.indexOf("://") + 3).split(/[?/]/)[0];
  host = decodeURIComponent(host.slice(host.indexOf("@") + 1));
  const urlObj = new URL(url.replace(host, host.split(",")[0]));
  return {
    url: {
      username: decodeURIComponent(urlObj.username),
      password: decodeURIComponent(urlObj.password),
      host: urlObj.host,
      hostname: urlObj.hostname,
      port: urlObj.port,
      pathname: urlObj.pathname,
      searchParams: urlObj.searchParams
    },
    multihost: host.indexOf(",") > -1 && host
  };
};
var osUsername = function() {
  try {
    return os.userInfo().username;
  } catch (_) {
    return process.env.USERNAME || "ellie";
  }
};
Object.assign(Postgres, {
  PostgresError,
  toPascal,
  pascal,
  toCamel,
  camel,
  toKebab,
  kebab,
  fromPascal,
  fromCamel,
  fromKebab,
  BigInt: {
    to: 20,
    from: [20],
    parse: (x) => BigInt(x),
    serialize: (x) => x.toString()
  }
});
var src_default = Postgres;

// /home/ellie/github/student_scheduler/packages/db/src/schema/schema.ts
var exports_schema = {};
__export(exports_schema, {
  verificationTokens: () => {
    {
      return verificationTokens;
    }
  },
  users: () => {
    {
      return users;
    }
  },
  transferLogs: () => {
    {
      return transferLogs;
    }
  },
  sessions: () => {
    {
      return sessions;
    }
  },
  rosterRelations: () => {
    {
      return rosterRelations;
    }
  },
  role: () => {
    {
      return role;
    }
  },
  prismaMigrations: () => {
    {
      return prismaMigrations;
    }
  },
  classrooms: () => {
    {
      return classrooms;
    }
  },
  classroomRelations: () => {
    {
      return classroomRelations;
    }
  },
  classRosters: () => {
    {
      return classRosters;
    }
  },
  accounts: () => {
    {
      return accounts;
    }
  }
});
var role = pgEnum("Role", [
  "secretary",
  "teacher",
  "student",
  "admin"
]);
var classRosters = pgTable("classRosters", {
  studentEmail: text("studentEmail").notNull(),
  classroomId: text("classroomId").notNull().references(() => classrooms.id, {
    onDelete: "cascade",
    onUpdate: "cascade"
  }),
  id: serial("id").primaryKey().notNull()
});
var rosterRelations = relations(classRosters, ({ one }) => ({
  classroom: one(classrooms, {
    fields: [classRosters.classroomId],
    references: [classrooms.id]
  })
}));
var transferLogs = pgTable("transferLogs", {
  id: serial("id").primaryKey().notNull(),
  studentEmail: text("studentEmail").notNull(),
  createdAt: timestamp("createdAt", { precision: 3, mode: "string" }).defaultNow().notNull(),
  roomNumber: text("roomNumber").notNull(),
  teacherName: text("teacherName").notNull()
});
var prismaMigrations = pgTable("_prisma_migrations", {
  id: varchar("id", { length: 36 }).primaryKey().notNull(),
  checksum: varchar("checksum", { length: 64 }).notNull(),
  finishedAt: timestamp("finished_at", { withTimezone: true, mode: "string" }),
  migrationName: varchar("migration_name", { length: 255 }).notNull(),
  logs: text("logs"),
  rolledBackAt: timestamp("rolled_back_at", {
    withTimezone: true,
    mode: "string"
  }),
  startedAt: timestamp("started_at", { withTimezone: true, mode: "string" }).defaultNow().notNull(),
  appliedStepsCount: integer4("applied_steps_count").default(0).notNull()
});
var classrooms = pgTable("classrooms", {
  id: text("id").primaryKey().notNull(),
  roomNumber: text("roomNumber").notNull(),
  teacherName: text("teacherName").notNull(),
  available: boolean5("available").default(true).notNull()
});
var classroomRelations = relations(classrooms, ({ many }) => ({
  classRosters: many(classRosters)
}));
var users = pgTable("user", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  role: text("role").$type().default("student").notNull()
});
var accounts = pgTable("account", {
  userId: text("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
  type: varchar("type", { length: 255 }).$type().notNull(),
  provider: text("provider").notNull(),
  providerAccountId: text("providerAccountId").notNull(),
  refresh_token: text("refresh_token"),
  access_token: text("access_token"),
  expires_at: integer4("expires_at"),
  token_type: text("token_type"),
  scope: text("scope"),
  id_token: text("id_token"),
  session_state: text("session_state")
}, (account) => ({
  compoundKey: primaryKey({
    columns: [account.provider, account.providerAccountId]
  })
}));
var sessions = pgTable("session", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull()
});
var verificationTokens = pgTable("verificationToken", {
  identifier: text("identifier").notNull(),
  token: text("token").notNull(),
  expires: timestamp("expires", { mode: "date" }).notNull()
}, (vt) => ({
  compoundKey: primaryKey({ columns: [vt.identifier, vt.token] })
}));
// /home/ellie/github/student_scheduler/apps/server/node_modules/@local/db/src/index.ts
var connectionString = "postgresql://postgres:postgres@10.50.99.84:5432/postgres?search_path=public";
var postgresSqlClient;
if (true) {
  if (!global.postgresSqlClient) {
    global.postgresSqlClient = src_default(connectionString);
  }
  postgresSqlClient = global.postgresSqlClient;
} else {
}
var schema3 = { ...exports_schema };
var db3 = drizzle(postgresSqlClient, { schema: schema3 });

// src/routes/classes/handlers.ts
async function getClasses() {
  console.log("hi");
  try {
    return await db3.query.classrooms.findMany({});
  } catch (e2) {
    console.log(e2);
    throw new e("No classes found");
  }
}
async function getClassById(id) {
  try {
    return await db3.query.classrooms.findMany({
      where: eq(schema3.classrooms.id, id)
    });
  } catch (e2) {
    throw new e("No class found with that ID");
  }
}

// src/routes/classes/index.ts
var classRoutes = new r({ prefix: "/classes" }).get("/", () => getClasses()).get("/:id", ({ params: { id } }) => getClassById(id), {
  params: C.Object({
    id: C.String()
  })
});
// src/lib/utils/redis.ts
var import_ioredis = __toESM(require_built3(), 1);
function createClient() {
  try {
    const redis = new import_ioredis.default({
      host: "10.50.99.84",
      port: "6379",
      showFriendlyErrorStack: true,
      enableAutoPipelining: true,
      maxRetriesPerRequest: 0,
      retryStrategy: (times) => {
        if (times > 3) {
          throw new Error(`[Redis] Failed to connect after ${times} attempts.`);
        }
        return Math.min(times * 200, 1000);
      }
    });
    redis.on("error", (error22) => {
      console.warn("[Redis] Error", error22);
    });
    return redis;
  } catch (e2) {
    throw new Error(`[Redis] Failed to connect`);
  }
}
// src/lib/utils/classRoomKV.ts
async function setClassRoomKV(key, value15, expires) {
  const client = createClient();
  const result2 = await client.set(`studentEmail:${key}`, value15, "EX", expires);
  return result2;
}
async function getClassRoomKV(key) {
  const client = createClient();
  const result2 = await client.get(`studentEmail:${key}`);
  return result2;
}
async function setRequestKV(key) {
  const client = createClient();
  const value15 = JSON.stringify({
    status: "pending",
    time: new Date().toISOString()
  });
  const result2 = await client.set(`request:${key}`, value15, "EX", 43200);
  return result2;
}
async function getRequestKV(key) {
  const client = createClient();
  const result2 = await client.get(`request:${key}`);
  return result2;
}
// src/routes/rosters/handlers.ts
async function getRosters() {
  try {
    return await db3.query.classRosters.findMany({});
  } catch (e2) {
    throw new e("No rosters found");
  }
}
async function getRostersById(id) {
  try {
    return await db3.query.classRosters.findMany({
      where: eq(schema3.classRosters.classroomId, id),
      with: {
        classroom: true
      }
    });
  } catch (e2) {
    throw new e("No roster found with that ID");
  }
}
async function getStudentRoster(email) {
  try {
    const classroom = await getClassRoomKV(email);
    console.log("classroom", classroom);
    if (classroom) {
      return classroom;
    } else {
      const roster = await db3.query.classRosters.findFirst({
        where: eq(schema3.classRosters.studentEmail, email),
        with: {
          classroom: true
        }
      });
      if (roster) {
        await setClassRoomKV(email, `Room ${roster.classroom.roomNumber} with ${roster.classroom.teacherName}`, 86400);
        return `Room ${roster.classroom.roomNumber} with ${roster.classroom.teacherName}`;
      } else {
        throw new e("No roster found with that email");
      }
    }
  } catch (e2) {
    throw new e("No roster found with that email");
  }
}
async function setStudentRoster(email, roomNumber, teacherName) {
  try {
    console.log("step one");
    const previousRequest = await getRequestKV(email);
    console.log("previousRequest", previousRequest);
    if (previousRequest) {
      console.log("You have already requested a transfer today");
      return new Response("You have already requested a transfer today", {
        status: 301
      });
    }
    await setClassRoomKV(email, `Room ${roomNumber} with ${teacherName}`, 86400);
    await setRequestKV(email);
    await db3.insert(schema3.transferLogs).values({
      studentEmail: email,
      roomNumber,
      teacherName
    });
    return new Response("OK", { status: 200 });
  } catch (e2) {
    throw new e("No roster found with that email");
  }
}
async function getTeacherRoster(email) {
  const [firstName, lastName] = (email.split("@")[0] ?? "").split("_").map((name) => name.charAt(0).toUpperCase() + name.slice(1));
  const formattedName = `${lastName}, ${firstName}`;
  console.log("formattedName", formattedName);
  try {
    return await db3.query.classRosters.findMany({
      where: eq(schema3.classrooms.teacherName, formattedName),
      with: {
        classroom: true
      }
    });
  } catch (e2) {
    throw new e("No roster found with that email");
  }
}
var today = new Date;

// src/routes/rosters/index.ts
var rosterRoutes = new r({ prefix: "/rosters" }).get("/", () => getRosters()).get("/:id", ({ params: { id } }) => getRostersById(id), {
  params: C.Object({
    id: C.String()
  })
}).get("/student/:email", ({ params: { email } }) => getStudentRoster(email), {
  params: C.Object({
    email: C.String()
  })
}).get("/teacher/roster/:email", ({ params: { email } }) => getTeacherRoster(email), {
  params: C.Object({
    email: C.String()
  })
}).post("/student/:email", ({ params: { email }, body: { roomNumber, teacherName } }) => setStudentRoster(email, roomNumber, teacherName), {
  params: C.Object({
    email: C.String()
  }),
  body: C.Object({
    roomNumber: C.String(),
    teacherName: C.String()
  })
});

// src/routes/sockets/index.ts
var socketRoutes = new r({
  prefix: "/sockets",
  websocket: {}
}).ws("/request", {
  headers: C.Object({
    to: C.String(),
    from: C.String()
  }),
  open(ws) {
    console.log("Connected to request socket");
    ws.subscribe(ws.data.headers.to);
  },
  async message(ws, message) {
    const id = ws.id;
    await db3.insert(schema3.transferLogs).values({
      studentEmail: message,
      roomNumber: message,
      teacherName: message
    });
    ws.publish(ws.data.headers.to, message);
    console.log("Received message: " + message);
  },
  close(ws) {
    ws.unsubscribe(ws.data.headers.to);
    console.log("Closed socket");
  }
}).ws("/chat", {
  message(ws, message) {
    ws.send(message);
  },
  body: C.String(),
  response: C.String()
});

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@elysiajs+swagger@0.8.5_elysia@0.8.17/node_modules/@elysiajs/swagger/dist/swagger/index.js
var SwaggerUIRender = (info, version3, theme, stringifiedSwaggerOptions, autoDarkMode) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${info.title}</title>
    <meta
        name="description"
        content="${info.description}"
    />
    <meta
        name="og:description"
        content="${info.description}"
    />
    ${autoDarkMode && typeof theme === "string" ? `
    <style>
        @media (prefers-color-scheme: dark) {
            body {
                background-color: #222;
                color: #faf9a;
            }
            .swagger-ui {
                filter: invert(92%) hue-rotate(180deg);
            }

            .swagger-ui .microlight {
                filter: invert(100%) hue-rotate(180deg);
            }
        }
    </style>` : ""}
    ${typeof theme === "string" ? `<link rel="stylesheet" href="${theme}" />` : `<link rel="stylesheet" media="(prefers-color-scheme: light)" href="${theme.light}" />
<link rel="stylesheet" media="(prefers-color-scheme: dark)" href="${theme.dark}" />`}
</head>
<body>
    <div id="swagger-ui"></div>
    <script src="https://unpkg.com/swagger-ui-dist@${version3}/swagger-ui-bundle.js" crossorigin></script>
    <script>
        window.onload = () => {
            window.ui = SwaggerUIBundle(${stringifiedSwaggerOptions});
        };
    </script>
</body>
</html>`;

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@elysiajs+swagger@0.8.5_elysia@0.8.17/node_modules/@elysiajs/swagger/dist/scalar/theme.js
var theme_default = `
/* basic theme */
.light-mode {
  --theme-color-1: #2a2f45;
  --theme-color-2: #757575;
  --theme-color-3: #8e8e8e;
  --theme-color-accent: #f06292;

  --theme-background-1: #fff;
  --theme-background-2: #f6f6f6;
  --theme-background-3: #e7e7e7;
  --theme-background-accent: #f062921f;

  --theme-border-color: rgba(0, 0, 0, 0.1);
}
.dark-mode {
  --theme-color-1: rgba(255, 255, 255, 0.9);
  --theme-color-2: rgba(156, 163, 175, 1);
  --theme-color-3: rgba(255, 255, 255, 0.44);
  --theme-color-accent: #f06292;

  --theme-background-1: #111728;
  --theme-background-2: #1e293b;
  --theme-background-3: #334155;
  --theme-background-accent: #f062921f;

  --theme-border-color: rgba(255, 255, 255, 0.1);
}
/* Document Sidebar */
.light-mode .sidebar,
.dark-mode .sidebar {
  --sidebar-background-1: var(--theme-background-1);
  --sidebar-item-hover-color: currentColor;
  --sidebar-item-hover-background: var(--theme-background-2);
  --sidebar-item-active-background: var(--theme-background-accent);
  --sidebar-border-color: transparent;
  --sidebar-color-1: var(--theme-color-1);
  --sidebar-color-2: var(--theme-color-2);
  --sidebar-color-active: var(--theme-color-accent);
  --sidebar-search-background: transparent;
  --sidebar-search-border-color: var(--theme-border-color);
  --sidebar-search--color: var(--theme-color-3);
}
/* Document header only shows on mobile*/
.dark-mode .t-doc__header,
.light-mode .t-doc__header {
  --header-background-1: rgba(255, 255, 255, 0.85);
  --header-border-color: transparent;
  --header-color-1: var(--theme-color-1);
  --header-color-2: var(--theme-color-2);
  --header-background-toggle: var(--theme-color-3);
  --header-call-to-action-color: var(--theme-color-accent);
}

.dark-mode .t-doc__header {
  --header-background-1: rgba(17, 23, 40, 0.75);
}

/* advanced */
.light-mode {
  --theme-button-1: rgb(49 53 56);
  --theme-button-1-color: #fff;
  --theme-button-1-hover: rgb(28 31 33);

  --theme-color-green: #069061;
  --theme-color-red: #ef0006;
  --theme-color-yellow: #edbe20;
  --theme-color-blue: #0082d0;
  --theme-color-orange: #fb892c;
  --theme-color-purple: #5203d1;

  --theme-scrollbar-color: rgba(0, 0, 0, 0.18);
  --theme-scrollbar-color-active: rgba(0, 0, 0, 0.36);
}
.dark-mode {
  --theme-button-1: #f6f6f6;
  --theme-button-1-color: #000;
  --theme-button-1-hover: #e7e7e7;

  --theme-color-green: #a3ffa9;
  --theme-color-red: #ffa3a3;
  --theme-color-yellow: #fffca3;
  --theme-color-blue: #a5d6ff;
  --theme-color-orange: #e2ae83;
  --theme-color-purple: #d2a8ff;

  --theme-scrollbar-color: rgba(255, 255, 255, 0.24);
  --theme-scrollbar-color-active: rgba(255, 255, 255, 0.48);
}
/* Elysia Specific */
.scalar-api-client__send-request-button,
.show-api-client-button {
  background: #3c82f6 !important;
}
.show-api-client-button:before {
  display: none;
}

.sidebar-search:hover {
  transition: all 0.15s ease-in-out;
  --sidebar-search-border-color: var(--theme-color-accent) !important;
  color: var(--sidebar-color-1) !important;
}
.scalar-api-client__container .sidebar {
  --sidebar-border-color: var(--theme-border-color);
}
@media (min-width: 1150px) {
  .section-container:has( ~ .footer):before,
  .tag-section-container:before {
    content: "";
    position: absolute;
    top: -5px;
    left: 0;
    width: 100%;
    height: 10px;
    background: linear-gradient(90deg, var(--theme-background-1) 3%,transparent 10%);
  }
}
.section-flare {
  position: absolute;
  width: 100vw;
  height: 300px;
  --stripes: repeating-linear-gradient(
    100deg,
    #fff 0%,
    #fff 7%,
    transparent 10%,
    transparent 12%,
    #fff 16%
  );
  --stripesDark: repeating-linear-gradient(
    100deg,
    #000 0%,
    #000 7%,
    transparent 10%,
    transparent 12%,
    #000 16%
  );
  --rainbow: repeating-linear-gradient(
    100deg,
    #60a5fa 10%,
    #e879f9 16%,
    #5eead4 22%,
    #60a5fa 30%
  );
  background-image: var(--stripes), var(--rainbow);
  background-size: 300%, 200%;
  background-position: 50% 50%, 50% 50%;
  filter: invert(100%);
  -webkit-mask-image: radial-gradient(
    ellipse at 100% 0%,
    black 40%,
    transparent 70%
  );
  mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);
  pointer-events: none;
  opacity: 0.15;
}
.dark-mode .section-flare {
  background-image: var(--stripesDark), var(--rainbow);
  filter: opacity(50%) saturate(200%);
  opacity: 0.25;
}
.section-flare:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: var(--stripes), var(--rainbow);
  background-size: 200%, 100%;
  background-attachment: fixed;
  mix-blend-mode: difference;
}
.dark-mode .section-flare:after {
  background-image: var(--stripesDark), var(--rainbow);
}
@keyframes headerbackground {
  from {
    background: transparent;
    backdrop-filter: none;
  }
  to {
    background: var(--header-background-1);
    backdrop-filter: blur(12px);
  }
}
.light-mode .t-doc__header,
.dark-mode .t-doc__header {
  animation: headerbackground forwards;
  animation-timeline: scroll();
  animation-range: 0px 200px;
  --header-border-color: transparent;
}
`;

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@elysiajs+swagger@0.8.5_elysia@0.8.17/node_modules/@elysiajs/swagger/dist/scalar/index.js
var ScalarRender = (version3, config, cdn) => `<!doctype html>
<html>
  <head>
    <title>API Reference</title>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1" />
    <style>
      body {
        margin: 0;
      }
    </style>
    <style>
      ${config.customCss ?? theme_default}
    </style>
  </head>
  <body>
    <script
      id="api-reference"
      data-url="${config.spec?.url}"
      data-configuration='${JSON.stringify(config)}'
    >
    </script>
    <script src="${cdn ? cdn : `https://cdn.jsdelivr.net/npm/@scalar/api-reference@${version3}/dist/browser/standalone.min.js`}"></script>
  </body>
</html>`;

// /home/ellie/github/student_scheduler/node_modules/.pnpm/@elysiajs+swagger@0.8.5_elysia@0.8.17/node_modules/@elysiajs/swagger/dist/utils.js
var import_lodash = __toESM(require_lodash4(), 1);
var toOpenAPIPath = (path) => path.split("/").map((x) => x.startsWith(":") ? `{${x.slice(1, x.length)}}` : x).join("/");
var mapProperties = (name, schema4, models) => {
  if (schema4 === undefined)
    return [];
  if (typeof schema4 === "string")
    if (schema4 in models)
      schema4 = models[schema4];
    else
      throw new Error(`Can't find model ${schema4}`);
  return Object.entries(schema4?.properties ?? []).map(([key, value15]) => {
    const { type: valueType = undefined, ...rest4 } = value15;
    return {
      ...rest4,
      schema: { type: valueType },
      in: name,
      name: key,
      required: schema4.required?.includes(key) ?? false
    };
  });
};
var mapTypesResponse = (types4, schema4) => {
  if (typeof schema4 === "object" && ["void", "undefined", "null"].includes(schema4.type))
    return;
  const responses = {};
  for (const type75 of types4)
    responses[type75] = {
      schema: typeof schema4 === "string" ? {
        $ref: `#/components/schemas/${schema4}`
      } : { ...schema4 }
    };
  return responses;
};
var capitalize2 = (word) => word.charAt(0).toUpperCase() + word.slice(1);
var generateOperationId = (method, paths) => {
  let operationId = method.toLowerCase();
  if (paths === "/")
    return operationId + "Index";
  for (const path of paths.split("/")) {
    if (path.charCodeAt(0) === 123) {
      operationId += "By" + capitalize2(path.slice(1, -1));
    } else {
      operationId += capitalize2(path);
    }
  }
  return operationId;
};
var registerSchemaPath = ({ schema: schema4, path, method, hook, models }) => {
  if (hook)
    hook = import_lodash.default(hook);
  const contentType = hook?.type ?? [
    "application/json",
    "multipart/form-data",
    "text/plain"
  ];
  path = toOpenAPIPath(path);
  const contentTypes = typeof contentType === "string" ? [contentType] : contentType ?? ["application/json"];
  const bodySchema = hook?.body;
  const paramsSchema = hook?.params;
  const headerSchema = hook?.headers;
  const querySchema = hook?.query;
  let responseSchema = hook?.response;
  if (typeof responseSchema === "object") {
    if (Kind in responseSchema) {
      const { type: type75, properties, required: required5, additionalProperties, ...rest4 } = responseSchema;
      responseSchema = {
        "200": {
          ...rest4,
          description: rest4.description,
          content: mapTypesResponse(contentTypes, type75 === "object" || type75 === "array" ? {
            type: type75,
            properties,
            items: responseSchema.items,
            required: required5
          } : responseSchema)
        }
      };
    } else {
      Object.entries(responseSchema).forEach(([key, value15]) => {
        if (typeof value15 === "string") {
          if (!models[value15])
            return;
          const { type: type75, properties, required: required5, additionalProperties: _, ...rest4 } = models[value15];
          responseSchema[key] = {
            ...rest4,
            description: rest4.description,
            content: mapTypesResponse(contentTypes, value15)
          };
        } else {
          const { type: type75, properties, required: required5, additionalProperties, ...rest4 } = value15;
          responseSchema[key] = {
            ...rest4,
            description: rest4.description,
            content: mapTypesResponse(contentTypes, rest4.type === "object" || rest4.type === "array" ? {
              type: rest4.type,
              properties,
              items: value15.items,
              required: required5
            } : value15)
          };
        }
      });
    }
  } else if (typeof responseSchema === "string") {
    if (!(responseSchema in models))
      return;
    const { type: type75, properties, required: required5, additionalProperties: _, ...rest4 } = models[responseSchema];
    responseSchema = {
      "200": {
        ...rest4,
        content: mapTypesResponse(contentTypes, responseSchema)
      }
    };
  }
  const parameters4 = [
    ...mapProperties("header", headerSchema, models),
    ...mapProperties("path", paramsSchema, models),
    ...mapProperties("query", querySchema, models)
  ];
  schema4[path] = {
    ...schema4[path] ? schema4[path] : {},
    [method.toLowerCase()]: {
      ...headerSchema || paramsSchema || querySchema || bodySchema ? { parameters: parameters4 } : {},
      ...responseSchema ? {
        responses: responseSchema
      } : {},
      operationId: hook?.detail?.operationId ?? generateOperationId(method, path),
      ...hook?.detail,
      ...bodySchema ? {
        requestBody: {
          content: mapTypesResponse(contentTypes, typeof bodySchema === "string" ? {
            $ref: `#/components/schemas/${bodySchema}`
          } : bodySchema)
        }
      } : null
    }
  };
};
var filterPaths = (paths, { excludeStaticFile = true, exclude: exclude6 = [] }) => {
  const newPaths = {};
  for (const [key, value15] of Object.entries(paths))
    if (!exclude6.some((x) => {
      if (typeof x === "string")
        return key === x;
      return x.test(key);
    }) && !key.includes("/swagger") && !key.includes("*") && (excludeStaticFile ? !key.includes(".") : true)) {
      Object.keys(value15).forEach((method) => {
        const schema4 = value15[method];
        if (key.includes("{")) {
          if (!schema4.parameters)
            schema4.parameters = [];
          schema4.parameters = [
            ...key.split("/").filter((x) => x.startsWith("{") && !schema4.parameters.find((params) => params.in === "path" && params.name === x.slice(1, x.length - 1))).map((x) => ({
              schema: { type: "string" },
              in: "path",
              name: x.slice(1, x.length - 1),
              required: true
            })),
            ...schema4.parameters
          ];
        }
        if (!schema4.responses)
          schema4.responses = {
            200: {}
          };
      });
      newPaths[key] = value15;
    }
  return newPaths;
};

// /home/ellie/github/student_scheduler/apps/server/node_modules/@elysiajs/swagger/dist/index.js
var swagger2 = ({ provider = "scalar", scalarVersion = "latest", scalarCDN = "", scalarConfig = {}, documentation = {}, version: version3 = "5.9.0", excludeStaticFile = true, path = "/swagger", exclude: exclude6 = [], swaggerOptions = {}, theme: theme2 = `https://unpkg.com/swagger-ui-dist@${version3}/swagger-ui.css`, autoDarkMode = true, excludeMethods = ["OPTIONS"] } = {
  provider: "scalar",
  scalarVersion: "latest",
  scalarCDN: "",
  scalarConfig: {},
  documentation: {},
  version: "5.9.0",
  excludeStaticFile: true,
  path: "/swagger",
  exclude: [],
  swaggerOptions: {},
  autoDarkMode: true,
  excludeMethods: ["OPTIONS"]
}) => (app) => {
  const schema4 = {};
  let totalRoutes = 0;
  if (!version3)
    version3 = `https://unpkg.com/swagger-ui-dist@${version3}/swagger-ui.css`;
  const info = {
    title: "Elysia Documentation",
    description: "Development documentation",
    version: "0.0.0",
    ...documentation.info
  };
  const relativePath = path.startsWith("/") ? path.slice(1) : path;
  app.get(path, (() => {
    const combinedSwaggerOptions = {
      url: `${relativePath}/json`,
      dom_id: "#swagger-ui",
      ...swaggerOptions
    };
    const stringifiedSwaggerOptions = JSON.stringify(combinedSwaggerOptions, (key, value15) => {
      if (typeof value15 == "function")
        return;
      return value15;
    });
    const scalarConfiguration = {
      spec: {
        ...scalarConfig.spec,
        url: `${relativePath}/json`
      },
      ...scalarConfig
    };
    return new Response(provider === "swagger-ui" ? SwaggerUIRender(info, version3, theme2, stringifiedSwaggerOptions, autoDarkMode) : ScalarRender(scalarVersion, scalarConfiguration, scalarCDN), {
      headers: {
        "content-type": "text/html; charset=utf8"
      }
    });
  })()).get(`${path}/json`, () => {
    const routes = app.routes;
    if (routes.length !== totalRoutes) {
      totalRoutes = routes.length;
      routes.forEach((route) => {
        if (excludeMethods.includes(route.method))
          return;
        registerSchemaPath({
          schema: schema4,
          hook: route.hooks,
          method: route.method,
          path: route.path,
          models: app.definitions?.type,
          contentType: route.hooks.type
        });
      });
    }
    return {
      openapi: "3.0.3",
      ...{
        ...documentation,
        info: {
          title: "Elysia Documentation",
          description: "Development documentation",
          version: "0.0.0",
          ...documentation.info
        }
      },
      paths: filterPaths(schema4, {
        excludeStaticFile,
        exclude: Array.isArray(exclude6) ? exclude6 : [exclude6]
      }),
      components: {
        ...documentation.components,
        schemas: {
          ...app.definitions?.type,
          ...documentation.components?.schemas
        }
      }
    };
  });
  return app;
};
var dist_default = swagger2;

// src/app.ts
var app = new r().use(dist_default()).use(cors({
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
})).state("version", 1).get("/", ({ store: { version: version3 } }) => version3).group("/api", (app2) => app2.use(classRoutes).use(rosterRoutes).use(socketRoutes));
var app_default = app;

// /home/ellie/github/student_scheduler/apps/server/node_modules/zod/lib/index.mjs
var getErrorMap = function() {
  return overrideErrorMap;
};
var addIssueToContext = function(ctx, issueData) {
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      getErrorMap(),
      errorMap
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
};
var processCreateParams = function(params) {
  if (!params)
    return {};
  const { errorMap, invalid_type_error, required_error, description } = params;
  if (errorMap && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap)
    return { errorMap, description };
  const customMap = (iss, ctx) => {
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    if (typeof ctx.data === "undefined") {
      return { message: required_error !== null && required_error !== undefined ? required_error : ctx.defaultError };
    }
    return { message: invalid_type_error !== null && invalid_type_error !== undefined ? invalid_type_error : ctx.defaultError };
  };
  return { errorMap: customMap, description };
};
var isValidIP = function(ip, version3) {
  if ((version3 === "v4" || !version3) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version3 === "v6" || !version3) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
};
var floatSafeRemainder = function(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
};
var deepPartialify = function(schema4) {
  if (schema4 instanceof ZodObject) {
    const newShape = {};
    for (const key in schema4.shape) {
      const fieldSchema = schema4.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema4._def,
      shape: () => newShape
    });
  } else if (schema4 instanceof ZodArray) {
    return new ZodArray({
      ...schema4._def,
      type: deepPartialify(schema4.element)
    });
  } else if (schema4 instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema4.unwrap()));
  } else if (schema4 instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema4.unwrap()));
  } else if (schema4 instanceof ZodTuple) {
    return ZodTuple.create(schema4.items.map((item) => deepPartialify(item)));
  } else {
    return schema4;
  }
};
var mergeValues = function(a2, b3) {
  const aType = getParsedType(a2);
  const bType = getParsedType(b3);
  if (a2 === b3) {
    return { valid: true, data: a2 };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b3);
    const sharedKeys = util.objectKeys(a2).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a2, ...b3 };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a2[key], b3[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a2.length !== b3.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0;index < a2.length; index++) {
      const itemA = a2[index];
      const itemB = b3[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a2 === +b3) {
    return { valid: true, data: a2 };
  } else {
    return { valid: false };
  }
};
var createZodEnum = function(values2, params) {
  return new ZodEnum({
    values: values2,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
};
var util;
(function(util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error;
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e2) {
      return obj[e2];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object13) => {
    const keys = [];
    for (const key in object13) {
      if (Object.prototype.hasOwnProperty.call(object13, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array6, separator = " | ") {
    return array6.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value15) => {
    if (typeof value15 === "bigint") {
      return value15.toString();
    }
    return value15;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
class ZodError extends Error {
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  get errors() {
    return this.issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error22) => {
      for (const issue of error22.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
}
ZodError.create = (issues) => {
  const error22 = new ZodError(issues);
  return error22;
};
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var overrideErrorMap = errorMap;
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  let errorMessage = "";
  const maps = errorMaps.filter((m2) => !!m2).slice().reverse();
  for (const map3 of maps) {
    errorMessage = map3(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: issueData.message || errorMessage
  };
};
class ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s2 of results) {
      if (s2.status === "aborted")
        return INVALID;
      if (s2.status === "dirty")
        status.dirty();
      arrayValue.push(s2.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      syncPairs.push({
        key: await pair.key,
        value: await pair.value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value: value15 } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value15.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value15.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value15.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value15.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
}
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value15) => ({ status: "dirty", value: value15 });
var OK = (value15) => ({ status: "valid", value: value15 });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === undefined ? undefined : message.message;
})(errorUtil || (errorUtil = {}));

class ParseInputLazyPath {
  constructor(parent, value15, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value15;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
}
var handleResult = (ctx, result2) => {
  if (isValid(result2)) {
    return { success: true, data: result2.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error22 = new ZodError(ctx.common.issues);
        this._error = error22;
        return this._error;
      }
    };
  }
};

class ZodType {
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus,
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result2 = this._parse(input);
    if (isAsync(result2)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result2;
  }
  _parseAsync(input) {
    const result2 = this._parse(input);
    return Promise.resolve(result2);
  }
  parse(data, params) {
    const result2 = this.safeParse(data, params);
    if (result2.success)
      return result2.data;
    throw result2.error;
  }
  safeParse(data, params) {
    var _a;
    const ctx = {
      common: {
        issues: [],
        async: (_a = params === null || params === undefined ? undefined : params.async) !== null && _a !== undefined ? _a : false,
        contextualErrorMap: params === null || params === undefined ? undefined : params.errorMap
      },
      path: (params === null || params === undefined ? undefined : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result2 = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result2);
  }
  async parseAsync(data, params) {
    const result2 = await this.safeParseAsync(data, params);
    if (result2.success)
      return result2.data;
    throw result2.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params === null || params === undefined ? undefined : params.errorMap,
        async: true
      },
      path: (params === null || params === undefined ? undefined : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result2 = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result2);
  }
  refine(check10, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result2 = check10(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result2 instanceof Promise) {
        return result2.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result2) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check10, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check10(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this, this._def);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform6) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform: transform6 }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(undefined).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[a-z][a-z0-9]*$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+\$`;
var emojiRegex;
var ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
var ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
var datetimeRegex = (args) => {
  if (args.precision) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)\$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z\$`);
    }
  } else if (args.precision === 0) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)\$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z\$`);
    }
  } else {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)\$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z\$`);
    }
  }
};

class ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus;
    let ctx = undefined;
    for (const check10 of this._def.checks) {
      if (check10.kind === "min") {
        if (input.data.length < check10.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check10.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check10.message
          });
          status.dirty();
        }
      } else if (check10.kind === "max") {
        if (input.data.length > check10.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check10.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check10.message
          });
          status.dirty();
        }
      } else if (check10.kind === "length") {
        const tooBig = input.data.length > check10.value;
        const tooSmall = input.data.length < check10.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check10.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check10.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check10.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check10.message
            });
          }
          status.dirty();
        }
      } else if (check10.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check10.message
          });
          status.dirty();
        }
      } else if (check10.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check10.message
          });
          status.dirty();
        }
      } else if (check10.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check10.message
          });
          status.dirty();
        }
      } else if (check10.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check10.message
          });
          status.dirty();
        }
      } else if (check10.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check10.message
          });
          status.dirty();
        }
      } else if (check10.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check10.message
          });
          status.dirty();
        }
      } else if (check10.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check10.message
          });
          status.dirty();
        }
      } else if (check10.kind === "regex") {
        check10.regex.lastIndex = 0;
        const testResult = check10.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check10.message
          });
          status.dirty();
        }
      } else if (check10.kind === "trim") {
        input.data = input.data.trim();
      } else if (check10.kind === "includes") {
        if (!input.data.includes(check10.value, check10.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check10.value, position: check10.position },
            message: check10.message
          });
          status.dirty();
        }
      } else if (check10.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check10.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check10.kind === "startsWith") {
        if (!input.data.startsWith(check10.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check10.value },
            message: check10.message
          });
          status.dirty();
        }
      } else if (check10.kind === "endsWith") {
        if (!input.data.endsWith(check10.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check10.value },
            message: check10.message
          });
          status.dirty();
        }
      } else if (check10.kind === "datetime") {
        const regex = datetimeRegex(check10);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check10.message
          });
          status.dirty();
        }
      } else if (check10.kind === "ip") {
        if (!isValidIP(input.data, check10.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check10.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check10);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check10) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check10]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    var _a;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options === null || options === undefined ? undefined : options.precision) === "undefined" ? null : options === null || options === undefined ? undefined : options.precision,
      offset: (_a = options === null || options === undefined ? undefined : options.offset) !== null && _a !== undefined ? _a : false,
      ...errorUtil.errToObj(options === null || options === undefined ? undefined : options.message)
    });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value15, options) {
    return this._addCheck({
      kind: "includes",
      value: value15,
      position: options === null || options === undefined ? undefined : options.position,
      ...errorUtil.errToObj(options === null || options === undefined ? undefined : options.message)
    });
  }
  startsWith(value15, message) {
    return this._addCheck({
      kind: "startsWith",
      value: value15,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value15, message) {
    return this._addCheck({
      kind: "endsWith",
      value: value15,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodString.create = (params) => {
  var _a;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a = params === null || params === undefined ? undefined : params.coerce) !== null && _a !== undefined ? _a : false,
    ...processCreateParams(params)
  });
};

class ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = undefined;
    const status = new ParseStatus;
    for (const check10 of this._def.checks) {
      if (check10.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check10.message
          });
          status.dirty();
        }
      } else if (check10.kind === "min") {
        const tooSmall = check10.inclusive ? input.data < check10.value : input.data <= check10.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check10.value,
            type: "number",
            inclusive: check10.inclusive,
            exact: false,
            message: check10.message
          });
          status.dirty();
        }
      } else if (check10.kind === "max") {
        const tooBig = check10.inclusive ? input.data > check10.value : input.data >= check10.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check10.value,
            type: "number",
            inclusive: check10.inclusive,
            exact: false,
            message: check10.message
          });
          status.dirty();
        }
      } else if (check10.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check10.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check10.value,
            message: check10.message
          });
          status.dirty();
        }
      } else if (check10.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check10.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check10);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value15, message) {
    return this.setLimit("min", value15, true, errorUtil.toString(message));
  }
  gt(value15, message) {
    return this.setLimit("min", value15, false, errorUtil.toString(message));
  }
  lte(value15, message) {
    return this.setLimit("max", value15, true, errorUtil.toString(message));
  }
  lt(value15, message) {
    return this.setLimit("max", value15, false, errorUtil.toString(message));
  }
  setLimit(kind, value15, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value: value15,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check10) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check10]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value15, message) {
    return this._addCheck({
      kind: "multipleOf",
      value: value15,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
}
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params === null || params === undefined ? undefined : params.coerce) || false,
    ...processCreateParams(params)
  });
};

class ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = BigInt(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = undefined;
    const status = new ParseStatus;
    for (const check10 of this._def.checks) {
      if (check10.kind === "min") {
        const tooSmall = check10.inclusive ? input.data < check10.value : input.data <= check10.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check10.value,
            inclusive: check10.inclusive,
            message: check10.message
          });
          status.dirty();
        }
      } else if (check10.kind === "max") {
        const tooBig = check10.inclusive ? input.data > check10.value : input.data >= check10.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check10.value,
            inclusive: check10.inclusive,
            message: check10.message
          });
          status.dirty();
        }
      } else if (check10.kind === "multipleOf") {
        if (input.data % check10.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check10.value,
            message: check10.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check10);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value15, message) {
    return this.setLimit("min", value15, true, errorUtil.toString(message));
  }
  gt(value15, message) {
    return this.setLimit("min", value15, false, errorUtil.toString(message));
  }
  lte(value15, message) {
    return this.setLimit("max", value15, true, errorUtil.toString(message));
  }
  lt(value15, message) {
    return this.setLimit("max", value15, false, errorUtil.toString(message));
  }
  setLimit(kind, value15, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value: value15,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check10) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check10]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value15, message) {
    return this._addCheck({
      kind: "multipleOf",
      value: value15,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodBigInt.create = (params) => {
  var _a;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a = params === null || params === undefined ? undefined : params.coerce) !== null && _a !== undefined ? _a : false,
    ...processCreateParams(params)
  });
};

class ZodBoolean extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params === null || params === undefined ? undefined : params.coerce) || false,
    ...processCreateParams(params)
  });
};

class ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus;
    let ctx = undefined;
    for (const check10 of this._def.checks) {
      if (check10.kind === "min") {
        if (input.data.getTime() < check10.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check10.message,
            inclusive: true,
            exact: false,
            minimum: check10.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check10.kind === "max") {
        if (input.data.getTime() > check10.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check10.message,
            inclusive: true,
            exact: false,
            maximum: check10.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check10);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check10) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check10]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
}
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: (params === null || params === undefined ? undefined : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};

class ZodSymbol extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};

class ZodUndefined extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};

class ZodNull extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};

class ZodAny extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};

class ZodUnknown extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};

class ZodNever extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
}
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};

class ZodVoid extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};

class ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : undefined,
          maximum: tooBig ? def.exactLength.value : undefined,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result3) => {
        return ParseStatus.mergeArray(status, result3);
      });
    }
    const result2 = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result2);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodArray.create = (schema4, params) => {
  return new ZodArray({
    type: schema4,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};

class ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    return this._cached = { shape, keys };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value15 = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value15, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip")
        ;
      else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value15 = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(new ParseInputLazyPath(ctx, value15, ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          syncPairs.push({
            key,
            value: await pair.value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== undefined ? {
        errorMap: (issue, ctx) => {
          var _a, _b, _c, _d;
          const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === undefined ? undefined : _b.call(_a, issue, ctx).message) !== null && _c !== undefined ? _c : ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: (_d = errorUtil.errToObj(message).message) !== null && _d !== undefined ? _d : defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  setKey(key, schema4) {
    return this.augment({ [key]: schema4 });
  }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach((key) => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
}
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};

class ZodUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result2 of results) {
        if (result2.result.status === "valid") {
          return result2.result;
        }
      }
      for (const result2 of results) {
        if (result2.result.status === "dirty") {
          ctx.common.issues.push(...result2.ctx.common.issues);
          return result2.result;
        }
      }
      const unionErrors = results.map((result2) => new ZodError(result2.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = undefined;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result2 = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result2.status === "valid") {
          return result2;
        } else if (result2.status === "dirty" && !dirty) {
          dirty = { result: result2, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
}
ZodUnion.create = (types4, params) => {
  return new ZodUnion({
    options: types4,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type75) => {
  if (type75 instanceof ZodLazy) {
    return getDiscriminator(type75.schema);
  } else if (type75 instanceof ZodEffects) {
    return getDiscriminator(type75.innerType());
  } else if (type75 instanceof ZodLiteral) {
    return [type75.value];
  } else if (type75 instanceof ZodEnum) {
    return type75.options;
  } else if (type75 instanceof ZodNativeEnum) {
    return Object.keys(type75.enum);
  } else if (type75 instanceof ZodDefault) {
    return getDiscriminator(type75._def.innerType);
  } else if (type75 instanceof ZodUndefined) {
    return [undefined];
  } else if (type75 instanceof ZodNull) {
    return [null];
  } else {
    return null;
  }
};

class ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(discriminator, options, params) {
    const optionsMap = new Map;
    for (const type75 of options) {
      const discriminatorValues = getDiscriminator(type75.shape[discriminator]);
      if (!discriminatorValues) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value15 of discriminatorValues) {
        if (optionsMap.has(value15)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value15)}`);
        }
        optionsMap.set(value15, type75);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
}

class ZodIntersection extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
}
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};

class ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest4 = this._def.rest;
    if (!rest4 && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema4 = this._def.items[itemIndex] || this._def.rest;
      if (!schema4)
        return null;
      return schema4._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest4) {
    return new ZodTuple({
      ...this._def,
      rest: rest4
    });
  }
}
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};

class ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
}

class ZodMap extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value15], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value15, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = new Map;
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value15 = await pair.value;
          if (key.status === "aborted" || value15.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value15.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value15.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = new Map;
      for (const pair of pairs) {
        const key = pair.key;
        const value15 = pair.value;
        if (key.status === "aborted" || value15.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value15.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value15.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
}
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};

class ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = new Set;
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size2, message) {
    return this.min(size2, message).max(size2, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};

class ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error22) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error22
        }
      });
    }
    function makeReturnsIssue(returns, error22) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error22
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error22 = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e2) => {
          error22.addIssue(makeArgsIssue(args, e2));
          throw error22;
        });
        const result2 = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result2, params).catch((e2) => {
          error22.addIssue(makeReturnsIssue(result2, e2));
          throw error22;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result2 = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result2, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result2, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
}

class ZodLazy extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
}
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};

class ZodLiteral extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
}
ZodLiteral.create = (value15, params) => {
  return new ZodLiteral({
    value: value15,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};

class ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (this._def.values.indexOf(input.data) === -1) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values2) {
    return ZodEnum.create(values2);
  }
  exclude(values2) {
    return ZodEnum.create(this.options.filter((opt) => !values2.includes(opt)));
  }
}
ZodEnum.create = createZodEnum;

class ZodNativeEnum extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (nativeEnumValues.indexOf(input.data) === -1) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
}
ZodNativeEnum.create = (values2, params) => {
  return new ZodNativeEnum({
    values: values2,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};

class ZodPromise extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
}
ZodPromise.create = (schema4, params) => {
  return new ZodPromise({
    type: schema4,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};

class ZodEffects extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.issues.length) {
        return {
          status: "dirty",
          value: ctx.data
        };
      }
      if (ctx.common.async) {
        return Promise.resolve(processed).then((processed2) => {
          return this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
        });
      } else {
        return this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result2 = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result2);
        }
        if (result2 instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        const result2 = effect.transform(base.value, checkCtx);
        if (result2 instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result2 };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result2) => ({ status: status.value, value: result2 }));
        });
      }
    }
    util.assertNever(effect);
  }
}
ZodEffects.create = (schema4, effect, params) => {
  return new ZodEffects({
    schema: schema4,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema4, params) => {
  return new ZodEffects({
    schema: schema4,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};

class ZodOptional extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(undefined);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodOptional.create = (type75, params) => {
  return new ZodOptional({
    innerType: type75,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};

class ZodNullable extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodNullable.create = (type75, params) => {
  return new ZodNullable({
    innerType: type75,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};

class ZodDefault extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ZodDefault.create = (type75, params) => {
  return new ZodDefault({
    innerType: type75,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};

class ZodCatch extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result2 = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result2)) {
      return result2.then((result3) => {
        return {
          status: "valid",
          value: result3.status === "valid" ? result3.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result2.status === "valid" ? result2.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ZodCatch.create = (type75, params) => {
  return new ZodCatch({
    innerType: type75,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};

class ZodNaN extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
}
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");

class ZodBranded extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
}

class ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a2, b3) {
    return new ZodPipeline({
      in: a2,
      out: b3,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
}

class ZodReadonly extends ZodType {
  _parse(input) {
    const result2 = this._def.innerType._parse(input);
    if (isValid(result2)) {
      result2.value = Object.freeze(result2.value);
    }
    return result2;
  }
}
ZodReadonly.create = (type75, params) => {
  return new ZodReadonly({
    innerType: type75,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};

// src/env.ts
var EnvSchema = objectType({
  PORT: coerce.number().default(3030),
  HOST: stringType().default("localhost"),
  CLIENT_HOST: stringType().default("http://localhost:5173"),
  DATABASE_URL: stringType(),
  WORKING_DIR: stringType().default("")
});
var env = EnvSchema.parse(process.env);

// src/index.ts
app_default.listen(env.PORT, () => {
  console.log(`\uD83D\uDCA9 STEAMing pile of shit being served at ${app_default.server?.hostname}:${app_default.server?.port}`);
});
