function getQueryStringRegExp(name){
    var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
    if (reg.test(location.href)) {
        return unescape(RegExp.$2.replace(/\+/g, " "));
    }
    return "";
}