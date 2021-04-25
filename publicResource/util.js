var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  
  var $Util = {
    stringify: Qs.stringify,
    getQueryString: function (name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return decodeURI(r[2]);
      return null;
    },
    toggleAttr: function (arr, index, attrName = 'active') {
      arr.forEach(element => {
          element[attrName] = false;
      });
      if (index instanceof Function) {
        index = arr.findIndex(index);
      }
      arr[index] && (arr[index][attrName] = true);
    },
    getRandomRgbColor: function () {
      return new Array(3).fill(255).map((o) => {
        return o * Math.random();
      });
    },
    uuid: function () {
     return S4() + S4() + S4();
    },
    filterUtil: (list, name, type = 'type') => {
      return list.filter((o) => o[type] == name);
    },
    getFmtDate: (date, fmt = 'yyyy-MM-dd') => {
      if (!date) { return ''; }
      var o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds()
      };
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
      }
      for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
      }
      return fmt;
    }
  };
  