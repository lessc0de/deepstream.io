exports.MESSAGE_SEPERATOR = String.fromCharCode( 30 ); // ASCII Record Seperator 1E
exports.MESSAGE_PART_SEPERATOR = String.fromCharCode( 31 ); // ASCII Unit Separator 1F

exports.SOURCE_MESSAGE_CONNECTOR = 'SOURCE_MESSAGE_CONNECTOR';

exports.LOG_LEVEL = {};
exports.LOG_LEVEL.DEBUG = 0;
exports.LOG_LEVEL.INFO = 1;
exports.LOG_LEVEL.WARN = 2;
exports.LOG_LEVEL.ERROR = 3;
exports.LOG_LEVEL.OFF = 4;

exports.EVENT = {};
exports.EVENT.TRIGGER_EVENT = 'TRIGGER_EVENT';
exports.EVENT.INFO = 'INFO';
exports.EVENT.SUBSCRIBE = 'SUBSCRIBE';
exports.EVENT.UNSUBSCRIBE = 'UNSUBSCRIBE';
exports.EVENT.INVALID_AUTH_MSG = 'INVALID_AUTH_MSG';
exports.EVENT.INVALID_AUTH_DATA = 'INVALID_AUTH_DATA';
exports.EVENT.AUTH_ATTEMPT = 'AUTH_ATTEMPT';
exports.EVENT.TOO_MANY_AUTH_ATTEMPTS = 'TOO_MANY_AUTH_ATTEMPTS';
exports.EVENT.AUTH_SUCCESSFUL = 'AUTH_SUCCESSFUL';
exports.EVENT.MESSAGE_PERMISSION_ERROR = 'MESSAGE_PERMISSION_ERROR';
exports.EVENT.MESSAGE_PARSE_ERROR = 'MESSAGE_PARSE_ERROR';
exports.EVENT.MESSAGE_DENIED = 'MESSAGE_DENIED';
exports.EVENT.INVALID_MESSAGE_DATA = 'INVALID_MESSAGE_DATA';
exports.EVENT.UNKNOWN_TOPIC = 'UNKNOWN_TOPIC';
exports.EVENT.UNKNOWN_ACTION = 'UNKNOWN_ACTION';
exports.EVENT.MULTIPLE_SUBSCRIPTIONS = 'MULTIPLE_SUBSCRIPTIONS';
exports.EVENT.NOT_SUBSCRIBED = 'NOT_SUBSCRIBED';
exports.EVENT.ACK_TIMEOUT = 'ACK_TIMEOUT';
exports.EVENT.RESPONSE_TIMEOUT = 'RESPONSE_TIMEOUT';
exports.EVENT.MULTIPLE_ACK = 'MULTIPLE_ACK';
exports.EVENT.MULTIPLE_RESPONSE = 'MULTIPLE_RESPONSE';
exports.EVENT.NO_RPC_PROVIDER = 'NO_RPC_PROVIDER';
exports.EVENT.RECORD_LOAD_ERROR = 'RECORD_LOAD_ERROR';
exports.EVENT.RECORD_CREATE_ERROR = 'RECORD_CREATE_ERROR';
exports.EVENT.CACHE_RETRIEVAL_TIMEOUT = 'CACHE_RETRIEVAL_TIMEOUT';
exports.EVENT.STORAGE_RETRIEVAL_TIMEOUT = 'STORAGE_RETRIEVAL_TIMEOUT';
exports.EVENT.CLOSED_SOCKET_INTERACTION = 'CLOSED_SOCKET_INTERACTION';
exports.EVENT.CLIENT_DISCONNECTED = 'CLIENT_DISCONNECTED';
exports.EVENT.INVALID_MESSAGE = 'INVALID_MESSAGE';

exports.TOPIC = {};
exports.TOPIC.AUTH = 'AUTH';
exports.TOPIC.ERROR = 'ERROR';
exports.TOPIC.EVENT = 'EVENT';
exports.TOPIC.RECORD = 'RECORD';
exports.TOPIC.RPC = 'RPC';
exports.TOPIC.PRIVATE = 'PRIVATE/';

exports.ACTIONS = {};
exports.ACTIONS.ACK = 'A';
exports.ACTIONS.READ = 'R';
exports.ACTIONS.CREATE = 'C';
exports.ACTIONS.UPDATE = 'U';
exports.ACTIONS.DELETE = 'D';
exports.ACTIONS.SUBSCRIBE = 'S';
exports.ACTIONS.UNSUBSCRIBE = 'US';
exports.ACTIONS.INVOKE = 'I';
exports.ACTIONS.LISTEN = 'L';
exports.ACTIONS.PROVIDER_UPDATE = 'PU';
exports.ACTIONS.QUERY = 'Q';
exports.ACTIONS.CREATEORREAD = 'CR';
exports.ACTIONS.RPC = 'RPC';
exports.ACTIONS.EVENT = 'EVT';
exports.ACTIONS.ERROR = 'E';
exports.ACTIONS.REQUEST = 'REQ';
exports.ACTIONS.RESPONSE = 'RES';