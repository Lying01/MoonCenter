/**
 * Created by Administrator on 2018/04/10.
 */
var page = 1;  //定义是第几页
var pageSize = 3; //定义一页几条数据
var userId = '523C4656-83F7-4AEE-91AB-775F6CE94CE3'; //用户Id

function getList(parameter) {
    $.ajax({
        type: "post",
        data: {
            "procedureName": 'usp_fangjiansyqk',
            "parameter": parameter
        },
        url: "http://120.78.174.170:86/WebService/BaseInfo.asmx/WebExecProcedure",   //后台url
        success: function (data) {
            var roomInfo = eval(eval(data));//所有房间信息
            var str = "";
            var state = "";
            var showInfo = "none"; //是否显示房间信息
            var showFree = "none"; //是否显示空闲中
            for (var k in roomInfo.ds1) {
                //根据使用状态显示背景图以及是否显示房间信息
                switch (roomInfo.ds1[k].usezt) {
                    case 1:
                        console.log("free空闲中...");
                        state = "free.png";
                        showInfo = "none";
                        showFree = "inline-block";
                        str
                        break;
                    case 2:
                        console.log("reservation已预约...");
                        state = "reservation.png";
                        showInfo = "inline-block";
                        showFree = "none";
                        break;
                    case 3:
                        console.log("using使用中...");
                        state = "using.png";
                        showInfo = "inline-block";
                        showFree = "none";
                        break;
                    case 4:
                        console.log("renew已续费...");
                        state = "renew.png";
                        showInfo = "inline-block";
                        showFree = "none";
                        break;
                }
                str += "<div class=" + "room" + ">"
                    + "<a href=" + "'http://120.78.174.170:85'" + "><img src=" + "../img/" + state + "></a>"
                    + "<a class=" + "roomNum" + ">" + roomInfo.ds1[k].name + "</a>"
                    + "<div class=" + "detailTitle" + " style='display:" + showInfo + "'>"
                    + "<a>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名:</a>"
                    + "<p>入住人数:</p>"
                    + "<p>使用状态:</p>"
                    + "<p>剩余天数:</p>"
                    + "</div>"
                    + "<div class=" + "detailContent" + " style='display:" + showInfo + "'>"
                    + "<a>" + roomInfo.ds1[k].name + "</a>"
                    + "<p>" + roomInfo.ds1[k].ruzhurs + "</p>"
                    + "<p>" + roomInfo.ds1[k].usezt + "</p>"
                    + "<p>" + roomInfo.ds1[k].shiyongts + "</p>"
                    + "</div>"
                    + "<div class=" + "isFree" + " style='display: " + showFree + "'>空闲中...</div>"
                    + "</div>";

            }
            $("#content").html(str);

        }
    })

};

function showPagination() {
    $.ajax({
        type: "post",
        data: {
            "procedureName": 'usp_fangjiansyqk',
            "parameter": parameter
        },
        url: "http://120.78.174.170:86/WebService/BaseInfo.asmx/WebExecProcedure",   //后台url
        success: function (data) {
            var roomInfo = eval(eval(data));//所有房间信息
            var totalPage = roomInfo.ds2[0].pageNum;//总页数
            $.jqPaginator('#pagination', {
                totalPages: totalPage,
                visiblePages: 10,//显示分页条数
                currentPage: 1
            });
        }
    })
}


var parameter = "'" + userId + "','" + pageSize + "','" + page + "'";
getList(parameter);
showPagination();