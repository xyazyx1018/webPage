var utils = {

  ver: 20150107,

  stopBubble: function(e) {
    //阻止默认行为
    e.preventDefault();
    //因此它支持W3C的stopPropagation()方法
    e.stopPropagation();
    return false;
  },

  getQuery: function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r !== null) return decodeURIComponent(r[2]);
    return null;
  },

  getQueryArr: function() {
    return location.search.replace("?", "").split("&");
  },

  HTMLEnCode: function(str) {
    if (str.length === 0 || str.length === undefined) return str;
    var s = "";
    s = str.replace(/&/g, "&amp;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/\'/g, "'");
    s = s.replace(/\"/g, "&quot;");
    s = s.replace(/\n/g, "<br>");
    return s;
  },

  HTMLDeCode: function(str) {
    if (str.length === 0 || str.length === undefined) return str;
    var s = "";
    s = str.replace(/&amp;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/'/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    s = s.replace(/<br>/g, "\n");
    return s;
  },

  isMobile: (function() {
    var system = {
      win: false,
      mac: false,
      xll: false
    };
    var p = navigator.platform;
    system.win = p.indexOf("Win") === 0;
    system.mac = p.indexOf("Mac") === 0;
    system.x11 = (p === "X11") || (p.indexOf("Linux") === 0);
    if (system.win || system.mac || system.xll) {
      return false;
    } else {
      return true;
    }
  })(),

  click: function() {
    if (this.isMobile) {
      return 'touchend';
    } else {
      return 'click';
    }
  }(),

  checkEmail: function(value) {
    var flag = false;
    if (!value) return false;
    if (typeof value == "string") {
      value = value.replace(/(^\s*)|(\s*$)/g, "").split(";");
    }
    if (value[value.length - 1] === "") {
      value.pop();
    }
    var regularExpression =
      /^[0-9a-z_-][_.0-9a-z-]{0,31}@([0-9a-z][0-9a-z-]{0,30}\.){1,4}[a-z]{2,4}$/i;
    for (var i = 0, len = value.length; i < len; i++) {
      if (regularExpression.test(value[i])) {
        flag = true;
      } else flag = false;
    }
    return flag;
  },

  incloud: function(file) {
    if (file.match(/\.css/i)) {
      file += "?ver=" + this.ver;
      file = '<link title="default" href="' + file +
        '" type="text/css" rel="stylesheet">';
    } else {
      file += "?ver=" + this.ver;
      file = '<script type="text/javascript" src="' + file + '"></script>';
    }
    document.write(file);
  }

};
