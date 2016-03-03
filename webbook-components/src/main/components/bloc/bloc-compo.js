// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// org.weidza.webBook.components.Include
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
org.weidza.webBook.components.Bloc =  function(options) {
    this.options = {
        id: "",
        title: "",
        level: "",
        images: {
            info: "data:image/png;base64,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",
            help: "data:image/png;base64,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",
            warn: "data:image/png;base64,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",
            error: "data:image/png;base64,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",
            debug: "data:image/png;base64,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"
        },
        xtag: null

    };

    this._init(options);
    this._render();
};

org.weidza.webBook.components.Bloc.prototype._init = function(options) {

        org.weidza.asserts.notNull(options, "bloc option mustn't be null!");
        org.weidza.asserts.notNull(options.xtag, "XTag node mustn't be null!");
        org.weidza.asserts.notNull(options.id, "ID mustn't be null!");

        this.options.id     = options.id;
        this.options.title  = org.weidza.services.defaultValueEmpty(options.title);
        this.options.level  = org.weidza.services.defaultValueEmpty(options.level);
        this.options.images = org.weidza.services.defaultValue(options.images,this.options.images);
        this.options.xtag   = options.xtag;
        this._checkLevel();

};

org.weidza.webBook.components.Bloc.prototype._checkLevel = function(){
        var levelImgKey=null;
        var keys =Object.keys(this.options.images);
        for(var i =keys.length-1;i>=0;i--){
            if(this.options.level===keys[i]){
                levelImgKey = keys[i];
                break;
            }
        }

        if(org.weidza.check.isNull(levelImgKey)){
            this.options.level= "info" ;
        }else{
            this.options.level= levelImgKey ;
        }
};

org.weidza.webBook.components.Bloc.prototype._grabIcon =function(){
        return this.options.images[this.options.level];
};

org.weidza.webBook.components.Bloc.prototype._render = function (){
        var children = org.weidza.rendering.extractXtagChildren(this.options.xtag);

        var titleClass = org.weidza.rendering.styleIfNotNull(this.options.title, "title");

        var compo = org.weidza.rendering.createNode('div',
                                                    ['webbook-bloc', this.options.level, titleClass].join(" "),
                                                    this.options.id);


        // icon ....................................
        var iconGrp= org.weidza.rendering.createNode('div','webbook-bloc-icon-grp');

        var iconImage = this._grabIcon();
        var icon= org.weidza.rendering.createNode('img');
            icon.attr("src",iconImage);

        iconGrp.append(icon);
        compo.append(iconGrp);

        // content .................................
        var contentGrp= org.weidza.rendering.createNode('div','webbook-bloc-content');


        if(org.weidza.check.notEmpty(this.options.title)){
            var title= org.weidza.rendering.createNode('div','webbook-bloc-content-title');
                title.html(this.options.title);

            contentGrp.append(title);
        }

        var childrenContent= org.weidza.rendering.createNode('div','webbook-bloc-content-children');
            childrenContent.text(children);
        contentGrp.append(childrenContent);

        compo.append(contentGrp);
        compo.append(org.weidza.rendering.clearDiv());
        // append to root ...........................
        this.options.xtag.append(compo);
};
