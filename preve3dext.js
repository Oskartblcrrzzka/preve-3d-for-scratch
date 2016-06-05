(function(ext) {
    var myObjects = [];
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: "Można rysować objekty"};
    };
    ext.add3dobj = function() {
        return "{}";
    };
    ext.settexture = function(obj, tex) {
        var anobj = JSON.parse(obj);
        anobj['tex'] = tex;
        return anobj;
    };
    ext.setshape = function(pro, shp) {
        var anobj = JSON.parse(obj);
        anobj['model'] = shp;
        return anobj;
    };
    ext.doRend = function(obj) {
        reset(new DisplyObject(), new DisplyObject());
        setStage(obj, new DisplayObject());
        makeBufferData();
        packBitmaps(obj['tex']);
        SpriteStamp(obj['wid'], obj['hei'], obj)
        setRenderView();
    };
    ext.npos= function(x, y, z){
        
    var descriptor = {
        blocks: [
          ["r", "new object", "add3dobj"],
          ["r", "set %s 's texture to %s", "settexture", null, null],
          ["r", " set %s 's 3d model to %s", "setshape", null, null],
          [" ", " draw %s", "doRend", null],
          ["", " camera to xyz %n %n %n", "npos", 0, 0, 0]
        ],
        url: "http://Iwotastic.github.io/Scratch-Boost/index.html#objects"
    };
    ScratchExtensions.register("Preve3D", descriptor, ext);
})({});
