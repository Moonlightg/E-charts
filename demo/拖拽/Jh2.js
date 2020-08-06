/* 
Jquery - portal.js 
Jquery Portal layout可拖拽布局Copyright(C) Jh 2020.08.06
*/

var Jh = {   
    Config:{
        // CLASS样式配置
        tableCls: "form-list",
        tdCls: "form-text",
        tdCls2: "single",
        ulCls: "tag-list",
        layCls: "layout-list",
        _groupItemHead: "itemHeader",
        _groupWrapperClass: "groupWrapper",
        _groupItemClass: "groupItem"
    }
};
Jh.Layout = function(me) {
    var _left = "portal_l",
    _right = "portal_r";
    return me = {
        location: { //三列容器
            left: _left,
            right: _right
        },
        locationId: {
            left: "#" + _left,
            right: "#" + _right
        },
        layoutCss: {
            0 : "1:2",
            1 : "2:1",
        },
        layoutText: {
            0 : "w250:w500",
            1 : "w500:w250",
        }
    }
} ();
 
Jh.Util = { //工具类
    format: function(str, model) { //格式化指定键值的模板
        for (var k in model) {
            var re = new RegExp("{" + k + "}", "g");
            str = str.replace(re, model[k])
        }
        return str
    },
    refresh: function() { //刷新2个布局
        $("#" + Jh.Layout.left, "#" + Jh.Layout.right).sortable('refresh');
    },
    toBody: function(o) { //往jh-main添加对象
        $(".jh-main").append(o);
    }
};
Jh.fn = function(me) { //功能区
    return me = {
        init: function(data) { //初始化
            me._ele = {};
            me._create();
            me._createWrap(data);
            me._bindEvent();
        },
 
        _create: function() { //创建自己
            var _box = $("<div id='header'/>");
            me.box = _box;
            Jh.Util.toBody(_box); //往Body里添加自己
        },
 
        _createWrap: function(d) { //创建外层容器
            var _table = me._createTable(Jh.Config.tableCls);
            me._ele.table = _table; 
            me._createModuleList(d);
            me._createActionButton();
            me._addPanel(_table);
        },
 
        _createTable: function(clsName) { //创建表格     
            var _t = $("<table/>").addClass(clsName);
            $("<tbody/>").append(me._createLayoutTr()).append(me._createBaseTr()).append(me._createActionTr()).appendTo(_t);
            return _t;
        },
 
        _createBaseTr: function() { //创建功能模块tr
            var _td = me._createTd(Jh.Config.tdCls2),
            _tr = $("<tr>").append(me._createTd(Jh.Config.tdCls, "功能模块设置：")).append(_td);
            me._ele.mtd = _td;
            return _tr;
        },
 
        _createActionTr: function() { //创建按钮tr
            var _td = me._createTd(Jh.Config.tdCls2),
            _tr = $("<tr>").append(me._createTd(Jh.Config.tdCls)).append(_td);
            me._ele.atd = _td;
            return _tr;
        },
 
        _createLayoutTr: function() { //创建布局
            var _td = me._createTd(Jh.Config.tdCls2),
            _div = $("<div/>").addClass(Jh.Config.layCls).append(me._createA("1:2")).append("<a href='javascript:void(0);' class='active' rel='2:1'>默认</a>").appendTo(_td),
            _tr = $("<tr>").append(me._createTd(Jh.Config.tdCls, "布局设置：")).append(_td);
 
            me._ele.layoutTd = _td;
            return _tr;
        },
 
        _createModuleList: function(data) { //创建模块list
            var _ul = $("<ul/>").addClass(Jh.Config.ulCls);
            me._createLis(data.appL, _ul);
            me._createLis(data.appR, _ul);
            me._ele.ul = _ul;
            _ul.appendTo(me._ele.mtd);
        },
 
        _createActionButton: function() { //创建功能按钮
            var _save = $("<a class='button b' href='#' >保存配置</a>");
            me._ele.atd.append(_save);
            me._bindSave(_save);
        },
 
        _createLis: function(obj, _ul) { //创建li列表
            $.each(obj,
            function(key, name) {
                _ul.append(me._createLi(key, name));
            });
        },
 
        _createA: function(text) { //创建A
            return $("<a href='javascript:void(0);' rel='" + text + "'>" + text + "</a>");
        },
 
        _createLi: function(key, name) { //创建li
            return $("<li/>").append("<a href='#' rel='" + key + "'>" + name + "</a>").append("<span class='ok'></span>");
        },
 
        _createTd: function(clsName, text) { //创建td
            var t = $("<td>").addClass(clsName);
            if (text != undefined) {
                t.text(text);
            }
            return t;
        },
        _addPanel: function(o) {
            me.box.append(o);
        },

        _bindSave: function(obj) { //保存模块配置
            obj.click(function() {
                var _l = $("#" + Jh.Layout.location.left).sortable('toArray'),
                _r = $("#" + Jh.Layout.location.right).sortable('toArray'),
                _a = $("." + Jh.Config.layCls + " a"),
                _layout = "";
                _a.each(function() {
                    if ($(this).hasClass("active")) {
                        _layout = $(this).attr("rel");
                    }
                });
 
                if (_layout == "2:1") {
                    _layout = "默认";
                }
                var baseConfig = "left:[" + _l + "];right[" + _r + "];当前布局:" + _layout;
                // 当前设置布局
                console.log(baseConfig);
 
            });
 
        },
 
        _bindEvent: function() { //事件绑定
            me._moduleLiClick();
            me._layoutAClick();
        },
 
        _moduleLiClick: function() { //绑定模块LI单击事件
            $("." + Jh.Config.ulCls + " li").live("click",
            function() {
                var _this = $(this),
                _mName = _this.find("a").attr("rel"),
                //获取模块名
                _m = $("#" + _mName),
                //模块div 
                _d = _this.find(".ok"); //对号
                if (_d.is(":visible")) { //判断是否显示
                    _d.hide(); //隐藏对号
                    _m.hide(); //隐藏模块  
                } else {
                    _d.show(); //显示对号
                    _m.show(); //显示模块
                }
                Jh.Util.refresh();
 
            });
        },
 
        _layoutAClick: function() { //绑定布局列表A 单击事件
            $("." + Jh.Config.layCls + " a").click(function() {
                var _this = $(this);
                var _v = _this.attr("rel");
                me._ToLayout(_v);
                _this.addClass("active").siblings().removeClass("active");
            });
        },
 
        _ToLayout: function(v) { //刷新布局
            console.log(v);
            var CssMode = Jh.Layout.layoutCss,
            //布局模式  
            CssText = Jh.Layout.layoutText,
            //css 
            ModulesId = Jh.Layout.locationId,
            //模块id
            CssTextId = 0,
            //默认css数组编号
            ModuleItems = ""; //模块数组
            $.each(CssMode,
            function(i, val) {
                if (v == val) CssTextId = i; //css 赋值
            });
 
            $.each(ModulesId,
            function(s, sn) {
                console.log("sn:"+sn);
                var currentModule = $(sn),
                cssName = CssText[CssTextId],
                ary = cssName.split(":"); //得到当前布局css数组
                console.log(currentModule);
                console.log("cssName:"+cssName);
                console.log("当前布局css数组:"+ary);
                switch (s) {
                case "left":
                    s = 0;
                    break;
                case "right":
                    s = 1;
                }
                console.log("----"+ary[s]);
                currentModule.removeClass("w250 w500").addClass(ary[s]); //增加css
            });
 
        }
 
    }
 
} ();
Jh.Portal = function(me) { //Portal对象
    var _box = "<div id='portal'></div>",
    _template = { //模板
        l: "<div id='" + Jh.Layout.location.left + "' class='" + Jh.Config._groupWrapperClass + " w500'/>",
        r: "<div id='" + Jh.Layout.location.right + "' class='" + Jh.Config._groupWrapperClass + " w250'/>",
        portalWrap: "<div id='{key}' class='" + Jh.Config._groupItemClass + "'/>",
        itemHeader: "<div class='" + Jh.Config._groupItemHead + "'><h3>{name}</h3></div>",
    };
    return me = {
        init: function(op) { //初始化           
            me._create();
            me._bindData(op);
            me._bindEvent();
        },
 
        _create: function() { //创建
            me.box = $(_box);
            me._elements = {};
            me._createModulesWrap();
            Jh.Util.toBody(me.box);
        },
 
        _bindData: function(op) { //绑定数据
            $.each(op,
            function(key, item) {
                me._createPortal(key, item);
            });
        },
 
        _createModulesWrap: function() { //创建模块外层容器
            me._elements.m_l = $(_template.l);
            me._elements.m_r = $(_template.r);
            me._addPanel(me._elements.m_l);
            me._addPanel(me._elements.m_r);
        },
 
        _addPanel: function(o) { //往容器里添加
            me.box.append(o);
        },
 
        _createPortal: function(key, item) { //创建portal
            var mWrap;
            switch (key) {
            case "appL":
                mWrap = me._elements.m_l;
                break;
            case "appR":
                mWrap = me._elements.m_r;
                break;
            }
 
            $.each(item,
            function(k, o) {
                mWrap.append(me._createPortalOne(k, o));
            });
 
        },
 
        _createPortalOne: function(key, name) { //创建单个portal item
            var itemHeader = me._createItemHeader(name),
            //header
            portalWrap = $(Jh.Util.format(_template.portalWrap, {
                "key": key
            })).append(itemHeader);
 
            return portalWrap;
        },
 
        _createItemHeader: function(name) { //创建Head
            var _itemHeader = $(Jh.Util.format(_template.itemHeader, {
                "name": name
            }));
            return _itemHeader;
        },
 
        _eventSortable: function() { //绑定排序
            $("." + Jh.Config._groupWrapperClass).sortable({
                connectWith: "." + Jh.Config._groupWrapperClass,
                opacity: "0.6",
                dropOnEmpty: true
            }).disableSelection();
        },
 
        _bindEvent: function() { //绑定面板所有事件      
            me._eventSortable();
        }
 
    };
} ();