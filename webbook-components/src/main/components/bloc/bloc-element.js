if(!xtag.tags['w-bloc']) {

    xtag.register('w-bloc', {
        accessors: {
            title: {
                attribute: {}
            },
            level: {
                attribute: {}
            }
        },
        lifecycle: {
            inserted: function() {
                var uid = org.weidza.webBook.services.generateId("bloc");

                var options = {
                    title : this.title,
                    level : this.level,
                    xtag : $(this)
                };

                window[uid]= Object.create(org.weidza.webBook.components.Bloc);
                window[uid].init(options);
            }
        }
    });
}