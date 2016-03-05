// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ASSERTS API
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
org.weidza.asserts= {
    _LOGGER :org.weidza.logger.factory("org.weidza.asserts"),

    notNull: function (value, message) {
        if (value === undefined || value === null) {
            this._LOGGER.error(message);
            throw  message;
        }
    },
    isFalse : function (condition, message){
        if(condition){
            this._LOGGER.error(message);
            throw  message;
        }
    },
    isTrue : function (condition, message){
        if(!condition){
            this._LOGGER.error(message);
            throw  message;
        }
    },
    type:{
        isString : function (value){
            org.weidza.asserts.notNull(value,"can't verify object type with null object!");

            var isString = ((typeof value) === 'string') || (value instanceof String);
            this._validate(isString,value,"String");

        },
        isArray : function (value){
            org.weidza.asserts.notNull(value,"can't verify object type with null object!");
            var isArray = ((typeof value) === 'array') || (value instanceof Array);
            this._validate(isArray,value,"Array");

        },
        _validate : function(condition, value, type){
            if(!condition){
                var message = ["value isn't ",type," value (",(typeof value),")"].join("");
                this._LOGGER.error(message);
                throw  message;
            }
        }
    }

};
