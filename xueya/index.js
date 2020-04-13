
// 存储血压列表数据
// if(location.hash='student-echarts'){
//     location.hash='student-list' 
// }
    

// $('#jest').click(function(){
//     var startTime = $('#starttime').val()
//     var endTime = $('#endtime').val()
//     transferData("/blood/pressure/screen",{
//         startTime:startTime,
//         endTime:endTime,
//         type:1
//     },function(){
//         location.hash='student-echarts'
//     })
// })
var huise=['#bdbebd','#808080','#787878','#707070','#686868']
var colorarray=[]
 startTime = $('#starttime').val()
     endTime = $('#endtime').val()
     mynum = 1
     $('#test').click(function (){

        startTime = $('#starttime1').val()
        // endTime = $('#endtime1').val()
        // //console.log(startTime)
        // // //console.log(endTime)
    transferData('/blood/pressure/list', {
        page: current-1,
        size:100 ,
        startTime:startTime,
        // endTime:endTime
       
    }, function (data) {
        // 保存表格数据
        // tableData = data.searchList;
        // total = Math.ceil(data.cont / pageSize);
        // renderTable(data.searchList);
        tableData = data.data;
        //(tableData)
        //console.log(data)
        total = Math.ceil(tableData.length/ 100);
        getTableData(startTime,current)
        renderTable(data);
    })
     })
     $('#test8').click(function () {
       
          startTime = $('#starttime17').val()
        //  endTime = $('#endtime17').val()
        //  var  startTimestr= startTime.split('-')
        //  var startTimearray=startTimestr[2]
        //  var  endTimestr= endTime.split('-')
        //  var endTimearray=endTimestr[2]
        //  // //console.log(startTimearray,endTimearray)
        // var timenum = endTimearray-startTimearray
       
        //  if(timenum>0){
          
        //     getbaifenbiTableData(startTime,endTime)
            
        //        }else{
        //         getbaifenbiTableDatashijian(startTime,endTime)
        //        }
               getbaifenbiTableDatashijian(startTime)
        
      })
      $('#test20').click(function () {
       
        startTime = $('#starttime20').val()
    //    endTime = $('#endtime20').val()
    //    var  startTimestr= startTime.split('-')
    //    var startTimearray=startTimestr[2]
    //    var  endTimestr= endTime.split('-')
    //    var endTimearray=endTimestr[2]
    //    // //console.log(startTimearray,endTimearray)
    //   var timenum = endTimearray-startTimearray
     
    //    if(timenum>0){
        
    //     getgaodiya1TableData(startTime,endTime)
          
    //          }else{
    //             getgaodiyashijianTableData(startTime,endTime)
    //          }
    
    getgaodiyashijianTableData(startTime)
    // getgaodiya1TableData(startTime,endTime)
      
    })
     $('#test6').click(function () {
        //('111')
        //($('#starttime').val())
        //($('#endtime').val())
          startTime = $('#starttimezhuzhuangtu').val()
         endTime = $('#endtimezhuzhuangtu').val()
  
       
    
        //  gaodiyazhuzhuangtu(startTime,endTime)
       
        xinzenggaodiyazhuzhuangtu(startTime,endTime)
        
      })
      $('#huizong').click(function () {
        //('111')
        //($('#starttime').val())
        //($('#endtime').val())
          startTime = $('#starttimezhuzhuangtuhuizong').val()
         endTime = $('#endtimezhuzhuangtuhuizong').val()
  
       
    
        //  gaodiyazhuzhuangtu(startTime,endTime)
       
        // xinzenggaodiyazhuzhuangtu(startTime,endTime)
        console.log(startTime,endTime)
        
      })
         $('.xinzengbtn').click(function (){
          console.log('hhh')
          $('#oldmap').css("display","none")
          $('#xinzeng').css("display","block")
          startTime = $('#starttimezhuzhuangtu').val()
          endTime = $('#endtimezhuzhuangtu').val()
          xinzenggaodiyazhuzhuangtu(startTime,endTime)
      })
      function xinzenggaodiyazhuzhuangtu (startTime='',endTime=''){
        $.ajax({
            url: `http://47.92.102.105:10006/api/v1/blood/pressure/proportion/total/result`,
            type:'post',
            data:{
                startTime:startTime,
                endTime:endTime,
                // type:type
            },
            success: function (data) {
         //(data)
        
            //(data.data)
        //   `high140: 1
        //   high145: 1
        //   high150: 1
        //   high160: 0
        //   low90: 63
        //   low93: 63
        //   low95:`
            var keylist=[]
            high130list =[]
            high135list=[]
            high140list =[]
            high145list=[]
            high150list=[]
            high160list=[]
            low80list=[]
            low85list=[]
            low90list=[]
            low93list=[]
            low95list=[]
            mytime=[]
            //console.log(data)
            for (const key in data.data) {
                keylist.push(key)
            }
            
            //console.log(keylist)
            for(let i=0;i<keylist.length;i++){
              //( data.data[keylist[i]])
              mytime.push(data.data[keylist[i]].day)
              var high130=data.data[keylist[i]].section.high130
             if(!high130){
                high130=0
             }
             high130list.push(high130)
             var high135=data.data[keylist[i]].section.high135
             if(!high135){
                high135=0
            }
            high135list.push(high135)
             var high140=data.data[keylist[i]].section.high140
             if(!high140){
                high140=0
             }
             high140list.push(high140)
             var high145=data.data[keylist[i]].section.high145
             if(!high145){
                high145=0
            }
            high145list.push(high145)
            var high150=data.data[keylist[i]].section.high150
            if(!high150){
                high150=0
            }
            high150list.push(high150)
            var high160=data.data[keylist[i]].section.high160
            if(!high160){
                high160=0
           }
           high160list.push(high160)
           var low80=data.data[keylist[i]].section.low80
           if(!low80){
            low80=0
           }
           low80list.push(low80)
           var low85=data.data[keylist[i]].section.low85
           if(!low85){
            low85=0
          }
          low85list.push(low85)
           var low90=data.data[keylist[i]].section.low90
           if(!low90){
            low90=0
           }
           low90list.push(low90)
           var low93=data.data[keylist[i]].section.low93
           if(!low93){
            low93=0
          }
          low93list.push(low93)
          var low95=data.data[keylist[i]].section.low95
          if(!low95){
            low95=0
         }
         low95list.push(low95)
        }
     
            var mylistda=[]
            var temp=[]
            var mylist=[]
    var mylistdaa=[]
    var mylistxiao=[]
    var mylist=[]
  for(let k =0;k<high160list.length;k++){
 if(high150list[k]>0 &&high160list[k]==0){mylistdaa=[high135list,high140list,high145list,high150list,]}else if(high160list[k]>0){
  mylistda=[high140list,high145list,high150list,high160list]
  }else{
mylistxiao=[high130list,high135list,high140list,high145list]
  }

  }
  
  if(mylistda.length>0){
    xinzengdemo(mylistda,mytime,'diyayichangzhu')
  }else if (mylistdaa.length>0){
        demo(mylistdaa,mytime,'diyayichangzhu')
  
  }else{
    xiaodemo(mylistxiao,mytime,'diyayichangzhu')
  }
  
        // demo(high130list,high135list,high140list,high145list,high150list,high160list,mytime,'diyayichangzhu')
        xinzengtest(low80list,low85list,low90list,low93list,low95list,mytime,'gaoyazhu1')
        // zhuzhuangtu(high140list,high145list,high150list,high160list,keylist,'diyayichangzhu')
       
    
            }
        })
    }
     $('#test5').click(function () {
        //('111')
        //($('#starttime').val())
        //($('#endtime').val())
          startTime = $('#starttimechaochuyichang').val()
         endTime = $('#endtimechaochuyichang').val()
        var  startTimestr= startTime.split('-')
        var startTimearray=startTimestr[2]
        var  endTimestr= endTime.split('-')
        var endTimearray=endTimestr[2]
        // //console.log(startTimearray,endTimearray)
       var timenum = endTimearray-startTimearray
       // //console.log(timenum)
       if(timenum>0){
    $('.gaoya1').css("display","none")
    $('.gaoya2').css("display","none")
    $('.gaoya3').css("display","none")
    $('.gaoya4').css("display","none")
    $('.diya1').css("display","none")
    $('.diya2').css("display","none")
    $('.diya3').css("display","none")
    $('.gaoyayichang').css("display","none")
    $('.diyayichang').css("display","none")
    $('.yincang3').css("display","none")
    $('.riqigaoya1').css("display","block")
    $('.riqigaoya2').css("display","block")
    $('.riqigaoya3').css("display","block")
    $('.riqigaoya4').css("display","block")
    $('.riqidiya1').css("display","block")
    $('.riqidiya2').css("display","block")
    $('.riqidiya3').css("display","block")
    $('.riqigaoyayichang').css("display","block")
    $('.riqidiyayichang').css("display","block")
    $('.yincang4').css("display","block")
    
    
       }else{
        $('.gaoya1').css("display","block")
        $('.gaoya2').css("display","block")
        $('.gaoya3').css("display","block")
        $('.gaoya4').css("display","block")
        $('.diya1').css("display","block")
        $('.diya2').css("display","block")
        $('.diya3').css("display","block")
        $('.gaoyayichang').css("display","block")
        $('.diyayichang').css("display","block")
        $('.yincang3').css("display","block")
        $('.riqigaoya1').css("display","none")
        $('.riqigaoya2').css("display","none")
        $('.riqigaoya3').css("display","none")
        $('.riqigaoya4').css("display","none")
        $('.riqidiya1').css("display","none")
        $('.riqidiya2').css("display","none")
        $('.riqidiya3').css("display","none")
        $('.riqigaoyayichang').css("display","none")
        $('.riqidiyayichang').css("display","none")
        $('.yincang4').css("display","none")
       }
        //  post(startTime,endTime)
        // // postData(startTime,endTime)
        //  wanpost(startTime,endTime)
        timepost(startTime,endTime)
         baifenbipost(startTime,endTime)
       
        //  danxiangpost(startTime,endTime)
        // // zhuzhuangtupost(startTime,endTime)
        // // gaodiyazhuzhuangtu(startTime,endTime)
        // // var startTime = $('#starttime').val()
        // // var endTime = $('#endtime').val()
        // danxiangturiqitime(startTime,endTime)
      
        
      })
   
     $('#test4').click(function () {
        //('111')
        //($('#starttime').val())
        //($('#endtime').val())
          startTime = $('#starttimezaowantu').val()
         endTime = $('#endtimezaowantu').val()
    //     var  startTimestr= startTime.split('-')
    //     var startTimearray=startTimestr[2]
    //     var  endTimestr= endTime.split('-')
    //     var endTimearray=endTimestr[2]
    //     // //console.log(startTimearray,endTimearray)
    //    var timenum = endTimearray-startTimearray
    //    // //console.log(timenum)
    //    if(timenum>0){
    // $('.area').css("display","none")
    // $('.gaoyadi').css("display","none")
    // $('.pingjungao').css("display","none")
    // $('.zuidadi').css("display","none")
    // $('.zuixiaodi').css("display","none")
    // $('.pingjundi').css("display","none")
    // $('.xinlvgao').css("display","none")
    // $('.xinlvdi').css("display","none")
    // $('.xinlvpingjun').css("display","none")
    // $('.yincang').css("display","none")
    // $('.danxiangtugaoyazuida').css("display","block")
    // $('.danxiangtugaoyazuixiao').css("display","block")
    // $('.danxiangtugaoyazhongjian').css("display","block")
    // $('.danxiangtudiyazuida').css("display","block")
    // $('.danxiangtudiyazuixiao').css("display","block")
    // $('.danxiangtudiyazhongjian').css("display","block")
    // $('.danxiangtuxinlvzuida').css("display","block")
    // $('.danxiangtuxinlvzuixiao').css("display","block")
    // $('.danxiangtuxinlvzhongjian').css("display","block")
    // $('.yincang1').css("display","block")
    
    
    //    }else{
    // $('.danxiangtugaoyazuida').css("display","none")
    // $('.danxiangtugaoyazuixiao').css("display","none")
    // $('.danxiangtugaoyazhongjian').css("display","none")
    // $('.danxiangtudiyazuida').css("display","none")
    // $('.danxiangtudiyazuixiao').css("display","none")
    // $('.danxiangtudiyazhongjian').css("display","none")
    // $('.danxiangtuxinlvzuida').css("display","none")
    // $('.danxiangtuxinlvzuixiao').css("display","none")
    // $('.danxiangtuxinlvzhongjian').css("display","none")
    // $('.yincang1').css("display","none")
    // $('.area').css("display","block")
    // $('.gaoyadi').css("display","block")
    // $('.pingjungao').css("display","block")
    // $('.zuidadi').css("display","block")
    // $('.zuixiaodi').css("display","block")
    // $('.pingjundi').css("display","block")
    // $('.xinlvgao').css("display","block")
    // $('.xinlvdi').css("display","block")
    // $('.xinlvpingjun').css("display","block")
    // $('.yincang').css("display","block")
    //    }
         post(startTime,endTime)
        // postData(startTime,endTime)
        //  wanpost(startTime,endTime)
        // // timepost(startTime,endTime)
        // // baifenbipost(startTime,endTime)
       
        //  danxiangpost(startTime,endTime)
        // // zhuzhuangtupost(startTime,endTime)
        // // gaodiyazhuzhuangtu(startTime,endTime)
        // // var startTime = $('#starttime').val()
        // // var endTime = $('#endtime').val()
        // danxiangturiqitime(startTime,endTime)
      
        
      })
      $('#test7').click(function () {
        //('111')
        //($('#starttime').val())
        //($('#endtime').val())
          startTime = $('#starttimezaowantu').val()
         endTime = $('#endtimezaowantu').val()
    //     var  startTimestr= startTime.split('-')
    //     var startTimearray=startTimestr[2]
    //     var  endTimestr= endTime.split('-')
    //     var endTimearray=endTimestr[2]
    //     // //console.log(startTimearray,endTimearray)
    //    var timenum = endTimearray-startTimearray
    //    // //console.log(timenum)
    //    if(timenum>0){
    // $('.area').css("display","none")
    // $('.gaoyadi').css("display","none")
    // $('.pingjungao').css("display","none")
    // $('.zuidadi').css("display","none")
    // $('.zuixiaodi').css("display","none")
    // $('.pingjundi').css("display","none")
    // $('.xinlvgao').css("display","none")
    // $('.xinlvdi').css("display","none")
    // $('.xinlvpingjun').css("display","none")
    // $('.yincang').css("display","none")
    // $('.danxiangtugaoyazuida').css("display","block")
    // $('.danxiangtugaoyazuixiao').css("display","block")
    // $('.danxiangtugaoyazhongjian').css("display","block")
    // $('.danxiangtudiyazuida').css("display","block")
    // $('.danxiangtudiyazuixiao').css("display","block")
    // $('.danxiangtudiyazhongjian').css("display","block")
    // $('.danxiangtuxinlvzuida').css("display","block")
    // $('.danxiangtuxinlvzuixiao').css("display","block")
    // $('.danxiangtuxinlvzhongjian').css("display","block")
    // $('.yincang1').css("display","block")
    
    
    //    }else{
    // $('.danxiangtugaoyazuida').css("display","none")
    // $('.danxiangtugaoyazuixiao').css("display","none")
    // $('.danxiangtugaoyazhongjian').css("display","none")
    // $('.danxiangtudiyazuida').css("display","none")
    // $('.danxiangtudiyazuixiao').css("display","none")
    // $('.danxiangtudiyazhongjian').css("display","none")
    // $('.danxiangtuxinlvzuida').css("display","none")
    // $('.danxiangtuxinlvzuixiao').css("display","none")
    // $('.danxiangtuxinlvzhongjian').css("display","none")
    // $('.yincang1').css("display","none")
    // $('.area').css("display","block")
    // $('.gaoyadi').css("display","block")
    // $('.pingjungao').css("display","block")
    // $('.zuidadi').css("display","block")
    // $('.zuixiaodi').css("display","block")
    // $('.pingjundi').css("display","block")
    // $('.xinlvgao').css("display","block")
    // $('.xinlvdi').css("display","block")
    // $('.xinlvpingjun').css("display","block")
    // $('.yincang').css("display","block")
    //    }
        //  post(startTime,endTime)
        // postData(startTime,endTime)
         wanpost(startTime,endTime)
        // // timepost(startTime,endTime)
        // // baifenbipost(startTime,endTime)
       
        //  danxiangpost(startTime,endTime)
        // // zhuzhuangtupost(startTime,endTime)
        // // gaodiyazhuzhuangtu(startTime,endTime)
        // // var startTime = $('#starttime').val()
        // // var endTime = $('#endtime').val()
        // danxiangturiqitime(startTime,endTime)
      
        
      })
$('#test3').click(function () {
    //('111')
    //($('#starttime').val())
    //($('#endtime').val())
      startTime = $('#starttimedanxiangtu').val()
     endTime = $('#endtimedanxiangtu').val()
//     var  startTimestr= startTime.split('-')
//     var startTimearray=startTimestr[2]
//     var  endTimestr= endTime.split('-')
//     var endTimearray=endTimestr[2]
//     // //console.log(startTimearray,endTimearray)
//    var timenum = endTimearray-startTimearray
//    // //console.log(timenum)
//    if(timenum>0){
// $('.area').css("display","none")
// $('.gaoyadi').css("display","none")
// $('.pingjungao').css("display","none")
// $('.zuidadi').css("display","none")
// $('.zuixiaodi').css("display","none")
// $('.pingjundi').css("display","none")
// $('.xinlvgao').css("display","none")
// $('.xinlvdi').css("display","none")
// $('.xinlvpingjun').css("display","none")
// $('.yincang').css("display","none")
// $('.danxiangtugaoyazuida').css("display","block")
// $('.danxiangtugaoyazuixiao').css("display","block")
// $('.danxiangtugaoyazhongjian').css("display","block")
// $('.danxiangtudiyazuida').css("display","block")
// $('.danxiangtudiyazuixiao').css("display","block")
// $('.danxiangtudiyazhongjian').css("display","block")
// $('.danxiangtuxinlvzuida').css("display","block")
// $('.danxiangtuxinlvzuixiao').css("display","block")
// $('.danxiangtuxinlvzhongjian').css("display","block")
// $('.yincang1').css("display","block")


//    }else{
// $('.danxiangtugaoyazuida').css("display","none")
// $('.danxiangtugaoyazuixiao').css("display","none")
// $('.danxiangtugaoyazhongjian').css("display","none")
// $('.danxiangtudiyazuida').css("display","none")
// $('.danxiangtudiyazuixiao').css("display","none")
// $('.danxiangtudiyazhongjian').css("display","none")
// $('.danxiangtuxinlvzuida').css("display","none")
// $('.danxiangtuxinlvzuixiao').css("display","none")
// $('.danxiangtuxinlvzhongjian').css("display","none")
// $('.yincang1').css("display","none")
// $('.area').css("display","block")
// $('.gaoyadi').css("display","block")
// $('.pingjungao').css("display","block")
// $('.zuidadi').css("display","block")
// $('.zuixiaodi').css("display","block")
// $('.pingjundi').css("display","block")
// $('.xinlvgao').css("display","block")
// $('.xinlvdi').css("display","block")
// $('.xinlvpingjun').css("display","block")
// $('.yincang').css("display","block")
//    }
    // // post(startTime,endTime)
    // postData(startTime,endTime)
    // // wanpost(startTime,endTime)
    // // timepost(startTime,endTime)
    // // baifenbipost(startTime,endTime)
   
     danxiangpost(startTime,endTime)
    // // zhuzhuangtupost(startTime,endTime)
    // // gaodiyazhuzhuangtu(startTime,endTime)
    // // var startTime = $('#starttime').val()
    // // var endTime = $('#endtime').val()
    // danxiangturiqitime(startTime,endTime)
  
    
  })
  $('#test2').click(function () {
    //('111')
    //($('#starttime').val())
    //($('#endtime').val())
      startTime = $('#starttime100').val()
     endTime = $('#endtime100').val()
//     var  startTimestr= startTime.split('-')
//     var startTimearray=startTimestr[2]
//     var  endTimestr= endTime.split('-')
//     var endTimearray=endTimestr[2]
//     // //console.log(startTimearray,endTimearray)
//    var timenum = endTimearray-startTimearray
//    // //console.log(timenum)
//    if(timenum>0){
// $('.area').css("display","none")
// $('.gaoyadi').css("display","none")
// $('.pingjungao').css("display","none")
// $('.zuidadi').css("display","none")
// $('.zuixiaodi').css("display","none")
// $('.pingjundi').css("display","none")
// $('.xinlvgao').css("display","none")
// $('.xinlvdi').css("display","none")
// $('.xinlvpingjun').css("display","none")
// $('.yincang').css("display","none")
// $('.danxiangtugaoyazuida').css("display","block")
// $('.danxiangtugaoyazuixiao').css("display","block")
// $('.danxiangtugaoyazhongjian').css("display","block")
// $('.danxiangtudiyazuida').css("display","block")
// $('.danxiangtudiyazuixiao').css("display","block")
// $('.danxiangtudiyazhongjian').css("display","block")
// $('.danxiangtuxinlvzuida').css("display","block")
// $('.danxiangtuxinlvzuixiao').css("display","block")
// $('.danxiangtuxinlvzhongjian').css("display","block")
// $('.yincang1').css("display","block")


//    }else{
// $('.danxiangtugaoyazuida').css("display","none")
// $('.danxiangtugaoyazuixiao').css("display","none")
// $('.danxiangtugaoyazhongjian').css("display","none")
// $('.danxiangtudiyazuida').css("display","none")
// $('.danxiangtudiyazuixiao').css("display","none")
// $('.danxiangtudiyazhongjian').css("display","none")
// $('.danxiangtuxinlvzuida').css("display","none")
// $('.danxiangtuxinlvzuixiao').css("display","none")
// $('.danxiangtuxinlvzhongjian').css("display","none")
// $('.yincang1').css("display","none")
// $('.area').css("display","block")
// $('.gaoyadi').css("display","block")
// $('.pingjungao').css("display","block")
// $('.zuidadi').css("display","block")
// $('.zuixiaodi').css("display","block")
// $('.pingjundi').css("display","block")
// $('.xinlvgao').css("display","block")
// $('.xinlvdi').css("display","block")
// $('.xinlvpingjun').css("display","block")
// $('.yincang').css("display","block")
//    }
    // post(startTime,endTime)
    postData(startTime,endTime)
    // wanpost(startTime,endTime)
    // timepost(startTime,endTime)
    // baifenbipost(startTime,endTime)
   
    // danxiangpost(startTime,endTime)
    // zhuzhuangtupost(startTime,endTime)
    // gaodiyazhuzhuangtu(startTime,endTime)
    // var startTime = $('#starttime').val()
    // var endTime = $('#endtime').val()
    // danxiangturiqitime(startTime,endTime)
  
    
  })
// $(document).ready(function () {
//     jeDate({
//         dateCell: ".datepicker",
//         format: "YYYY-MM-DD hh:mm",
//         isinitVal: false, //显示时间
//         isTime: true,
//         festival: true,//显示节日
//         okfun: function (val) {
//             $(this.dateCell).trigger('change');
//         },
//         choosefun: function (val) {
//             $(this.dateCell).trigger('change');
//         }
//     });

//     jeDate({
//         dateCell: ".datepickerTwo",
//         format: "YYYY-MM-DD",
//         isinitVal: false, //显示时间
//         isTime: false,
//         festival: true,//显示节日
//         okfun: function (val) {
//             $(this.dateCell).trigger('change');
//         },
//         choosefun: function (val) {
//             $(this.dateCell).trigger('change');
//         }
//     });
    
// });





var tableData = [];
// 当前页
var current = 1;
// 每页展示条数
var pageSize = 10;
// 总页数
var total = 1;
var detail = null
// 绑定事件函数
function init() {
    location.hash = 'student-add';
    $(window).trigger('hashchange');
    bindEvent();
}
init();

function bindEvent() {
    // 哈希值改变触发页面变化事件
    $(window).on('hashchange', function () {
        var hash = location.hash;
        $('.show-list').removeClass('show-list');
        $(hash).addClass('show-list');
        $('.list-item.active').removeClass('active');
        $('.' + hash.slice(1)).addClass('active');
        var id = hash.slice(1);
        if (id == 'student-list') {
            current = 1;
            getTableData(startTime,current);
        }
    });
    // $('#zaotu-echarts').on('click', function () {
    //     // $('.list-item ').removeClass('active');
    //     document.getElementById("myDIV").classList.add('active')
    // });
    // 点击左侧菜单栏进行切换
    $('.list-item').on('click', function () {
        $('.drop-list').slideUp();
        var id = $(this).attr('data-id');
        location.hash = id;

        return false;
    });

    // 点击下拉菜单
    var list = $('header .drop-list');
    $('header .btn').on('click', function () {
        list.slideToggle();
    });
    $(window).resize(function () {
        if ($(window).innerWidth() >= 768) {
            list.css('display', 'none');
        }
    });
    
    $('#reset').click(function () {
        $('#modal').hide();
    })
//     $(`.kuozhan${mynum}`).click(function () {
       
//        mynum+=1
//    const myform=$(` <form  class="add-student-form${mynum}" ></form>`)
//    $(`#myformbox`).append(myform);
//        const mydom=$(`
//        <div> 
//        <div class="item">
//        <label for="highPressure${mynum}"></label>
//        <input name="highPressure${mynum}" type="number" class="text highPressure${mynum}">
//    </div>
 
//    <div class="item">
//        <label for="lowPressure${mynum}"></label>
//        <input name="lowPressure${mynum}" class="text lowPressure${mynum}" type="number">
//    </div>
//    <div class="item">
//        <label for="heartRate${mynum}"></label>
//        <input name="heartRate${mynum}" class="text heartRate${mynum}" type="number">
//    </div>
 
       
//        </div>
  
//   `)
// //    $(`.add-student-form`).append(mydom);
// $(`.add-student-form${mynum}`).append(mydom);

//     })
  
//     function  aa (list,list2,list3,list4,list5,list6,list7,list8,list9,list10) {
//         const datas=[{"highPressure": list[0],
//         "lowPressure": list[1],
//         "heartRate": list[2],
//         "createTime": list[3]
//         },{
//             "highPressure":list2[0],
//             "lowPressure": list2[1],
//             "heartRate": list2[2],
            
//         }]
//         $.ajax({
//             url: 'http://47.92.102.105:10006/api/v1/blood/pressure/save',
//             type: 'post',
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded"
//             },
//             data: {
//                 jsonStr: JSON.stringify(datas)
//             },
            
//             dataType: 'json',
//             success: function (res) {
//                 // // //console.log(res);
//                      alert('提交成功');
//                      location.hash = 'student-list';
//                 getTableData()
//             }
//         })
        
//     }
// $('#add1').click(function() {
//     var strhighPressureHtml = '<input type="text" name="highPressure">';
//     var lowPressureHtml = '<input type="number" name="lowPressure">';
//     var heartRateHtml = '<input type="text" name="heartRate">';
//     $('.highPressure').append(strhighPressureHtml);
//     $('.lowPressure').append(lowPressureHtml);
//     $('.heartRate').append(heartRateHtml);
// })
// $('#sub-btn').click(function() {
//     var resultArr = [];
//     var postData = {};
//     $('input[name="highPressure"]').each(function(i, el) {
//         var tempObj = {};
//         tempObj.highPressure = parseInt($(el).val()) || 0;
//         tempObj.lowPressure = parseInt($('input[name="lowPressure"]').eq(i).val()) || 0;
//         tempObj.heartRate = parseInt($('input[name="heartRate"]').eq(i).val()) || 0;
//         tempObj.createTime =$('.createTime').val();
//         resultArr.push(tempObj)
//     })
//     postData.jsonStr = JSON.stringify(resultArr);
//     // //console.log(postData)
//     // // //console.log(typeof JSON.stringify(resultArr))
//     $.ajax({
//         url: 'http://47.92.102.105:10006/api/v1/blood/pressure/save',
//         type: 'post',
//         async: true,
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         },
//         data: postData,
        
//         dataType: 'json',
//         success: function (res) {
//                    alert('提交成功');
          
//                 location.hash = 'student-list';
//                 getTableData()

//         }
//     })
// })
 myaaa1=[]
 myaaa2=[]
 myaaa3=[]
var myshu=0
$('#add1').click(function() {
    myshu+=1
    var strhighPressureHtml = `<input type="text" name="highPressure" class='aa${myshu}'>`;
    var lowPressureHtml = `<input type="number" name="lowPressure" class='aa${myshu}'>`;
    var heartRateHtml = `<input type="text" name="heartRate" class='aa${myshu}'>`;
  var aaa1 =  $('.highPressure').append(strhighPressureHtml);
  var aaa2 =  $('.lowPressure').append(lowPressureHtml);
  var aaa3 =  $('.heartRate').append(heartRateHtml);
//   myaaa1.push(aaa1)
//   myaaa2.push(aaa2)
//   myaaa3.push(aaa3)
//   //console.log(myaaa1)
//console.log(myshu)
})
//console.log(myshu)
// //console.log(myaaa1.length)
$('#shanjian').click(function(){
    // myaaa1.pop()
    // myaaa2.pop()
    // myaaa3.pop() 
   
    if(myshu<1){
        myshu=1
    }
    $(`.aa${myshu}`).remove();
    myshu-=1
    //console.log(myshu)
    // for(let i =0;i<myshu;i++){
    //     $(`.aa${myshu}`).remove();
    // }
    // $(`.aa${myshu}`).remove();
    // $(`.aa${myshu}`).remove();
    // $(".highPressure").remove(`${myshu}`);
    // $(".lowPressure").remove(`${myshu}`);
    // $(".heartRate").remove(`${myshu}`);
    // // //console.log(myshu)
    // //console.log(myaaa1)
    // $(`${myshu}`).remove()
    // myaaa1[myshu-1].empty()
    // myaaa2[myshu-1].empty()
    // myaaa3[myshu-1].empty()
    // var strhighPressureHtml = '<input type="text" name="highPressure">';
    // var lowPressureHtml = '<input type="number" name="lowPressure">';
    // var heartRateHtml = '<input type="text" name="heartRate">';
    // var aaa1 =  $('.highPressure').append(strhighPressureHtml);
    // var aaa2 =  $('.lowPressure').append(lowPressureHtml);
    // var aaa3 =  $('.heartRate').append(heartRateHtml);
    // var resultArr = [];
    // var postData = {};
    // $('input[name="highPressure"]').each(function(i, el) {
    //     var tempObj = {};
    //     tempObj.highPressure = parseInt($(el).val()) || 0;
    //     tempObj.lowPressure = parseInt($('input[name="lowPressure"]').eq(i).val()) || 0;
    //     tempObj.heartRate = parseInt($('input[name="heartRate"]').eq(i).val()) || 0;
    //     tempObj.createTime = $.trim($('#createTime').val());
    //     resultArr.pop(tempObj)
    //     //console.log(resultArr)
    // })
    // $('.highPressure').empty(strhighPressureHtml)
    // $('.lowPressure').empty(lowPressureHtml)
    // $('.heartRate').empty(heartRateHtml)
    
})
$('#sub-btn').click(function() {
    var resultArr = [];
    var postData = {};
    $('input[name="highPressure"]').each(function(i, el) {
        var tempObj = {};
        tempObj.highPressure = parseInt($(el).val()) || 0;
        tempObj.lowPressure = parseInt($('input[name="lowPressure"]').eq(i).val()) || 0;
        tempObj.heartRate = parseInt($('input[name="heartRate"]').eq(i).val()) || 0;
        tempObj.createTime = $.trim($('#createTime').val());
        resultArr.push(tempObj)
        //console.log(resultArr)
    })
    // //console.log(resultArr)
    postData.jsonStr = JSON.stringify(resultArr);
    // // //console.log(typeof JSON.stringify(resultArr))
    // //console.log(postData)
    $.ajax({
        url: 'http://47.92.102.105:10006/api/v1/blood/pressure/save',
        type: 'post',
        async: true,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data: postData,
      
        dataType: 'json',
        success: function (res) {
            alert('提交成功');
          
                            location.hash = 'student-list';
                            getTableData()
                            
                            document.forms["test"].reset()

        }
    })
})

    // 新增血压事件
    // $('.add-student-btn').click(function (e) {
    //     // 阻止表单提交默认刷新功能
    //     e.preventDefault();
    //     // 获取表单数据
    //     var data = $(`.add-student-form`).serializeArray();
    //     var data2 = $(`.add-student-form2`).serializeArray();
    // //     var data3 = $(`.add-student-form3`).serializeArray();
    // //     var data4 = $(`.add-student-form4`).serializeArray();
    // //     var data5 = $(`.add-student-form5`).serializeArray();
    // //     var data6 = $(`.add-student-form6`).serializeArray();
    // //     var data7 = $(`.add-student-form7`).serializeArray();
    // //     var data8 = $(`.add-student-form8`).serializeArray();
    // //     var data9 = $(`.add-student-form9`).serializeArray();
    // //     var data10 = $(`.add-student-form10`).serializeArray();
    // //    // //console.log(data)
    //    data = formatData(data);
    //    data2 = formatData(data2);
    // //    data3 = formatData(data3);
    // //    data4 = formatData(data4);
    // //    data5 = formatData(data5);
    // //    data6 = formatData(data6);
    // //    data7 = formatData(data7);
    // //    data8 = formatData(data8);
    // //    data9 = formatData(data9);
    // //    data10 = formatData(data10);
    // var highPressure = parseInt($('.highPressure').val());
    // var lowPressure =parseInt( $('.lowPressure').val());
    // var heartRate = parseInt($('.heartRate').val());
    // var createTime = parseInt($('.createTime').val());
    // var highPressure2 =parseInt( $('.highPressure2').val());
    // var lowPressure2 = parseInt($('.lowPressure2').val());
    // var heartRate2 = parseInt($('.heartRate2').val());

   
    //   var myobjlist=[highPressure,lowPressure,heartRate,createTime]
      
    //   var mylistary=[highPressure2, lowPressure2,heartRate2]
    // //   myobjlist.push(obj)
    // // //   myobjlist.push(data2)
    // //   myobj.jsonStr=JSON.stringify(myobjlist)
    // //   // //console.log(myobjlist)
   
    // //    // //console.log(obj.jsonStr)
    // // //console.log(data)
    // // //console.log(data2)
    //     if (!true) {
    //         alert('请将信息填写完全后提交');
    //     } else {
    //         // 提交新增的血压信息
    //         // transferData('/blood/pressure/save', myobj, function (res) {
    //         //     // 提交成功跳转到列表页
    //         //     alert('提交成功');
          
    //         //     location.hash = 'student-list';
    //         //     getTableData()

    //         // })
    //     }
    //     return false;
    // });
    // 编辑按钮点击事件
    $('#table-body').on('click', '.edit', function (e) {
        // 编辑弹框显示
        
        $('#modal').slideDown();
        // 回填编辑弹框内表单数据
        var index = $(this).parents('tr').index();
        //(index)
        //console.log(index)
        renderEditForm(tableData[index]);
        //(tableData[index])
//         transferData('/blood/pressure/detail',{
// detailId:
//         })
detail = tableData[index].detailId
//console.log(detail)
//(detail)
        // //(tableData)
    //  hjp=   sessionStorage.setItem('index',index)
        // 删除按钮点击事件
    }).on('click', '.del', function (e) {
        // 删除的索引
        var index = $(this).parents('tr').index();
        //(index)
        // 确认删除弹框
        //console.log(index)
        var isDel = confirm('确认删除ID为' + tableData[index].detailId );
        if (isDel) {
            // 删除信息
            //console.log(tableData )
            transferData('/blood/pressure/delete', {
                // detailId: data.detailId
                detailId: tableData[index].detailId 
            }, function (res) {
                alert('删除成功');
                // // 获取最新数据
                // $('#menu-list > dd[data-id=student-list]').click();
                //console.log(111)
                getTableData();
                // renderEditForm(tableData[index])
            })
        }
    });
    // 点击遮罩层编辑弹框消失
    $('#mask').click(function () {
        $('#modal').slideUp();
    });
    // 编辑表单提交
    $('#submit').click(function (e) {
        e.preventDefault();
        var data = $('#edit-form').serializeArray();
        data = formatData(data);
        var index = $(e.target).index();
        //(data)
        //(e)
        // //(index)
        // const index = hjp
        //console.log(data)
        // renderEditForm(tableData[index]);
        // var index = $(this).parents('tr').index();
        // //console.log(index)
        // renderEditForm(tableData[index])
        // renderEditForm(tableData[index]);
        // //(tableData[index])
        data1 = tableData[index]
         data =Object.assign(data,data1)
        //console.log(data)
        if (!data) {
            alert('请将信息填写完全后提交');
        } else {
            transferData('/blood/pressure/update',  {
                // detailId: data.detailId,
                detailId: detail ,
                createTime:data.createTime,
                highPressure: data.highPressure2,
                lowPressure: data.lowPressure2,
                heartRate: data.heartRate2
    
    
    
            }, function (res) {
                alert('提交成功');
                $('#modal').slideUp();
                // $('#menu-list > dd[data-id=student-list]').click();
                getTableData();
            });
        }
    });
    // 点击搜索按钮  过滤表格数据
    // $('#search-btn').click(function () {
    //     var val = $('#search-inp').val();
    //     // 将当前页置为1 获取表格数据
    //     current = 1;
    //     getTableData(val);
    // })
}

// 将表单数据转换成对象
function formatData(data) {
    var obj = {};
    // for循环的数据可以是数组  也可以是对象（类数组）
    // forEach循环只能是数组
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        if (!item.value) {
            // 如果是数组的forEach  或者map  filter  方法中return的话  代表的是方法的返回值  
            // 否则是最近一层函数的返回值
            return false;
        }
        obj[item.name] = item.value;
    }
    return obj;
}
// 获取血压列表数据
hhhh =1
var myhjp={}
function getTableData(startTime='',current=1) {
    // 过滤表格数据
    hhh=hhhh++
    //console.log(hhh)
   if(current<1){
    current=1
   }
        transferData('/blood/pressure/list', {
            page: current-1,
            size: 100,
            startTime:startTime,
            // endTime:endTime
        }, function (data) {
            // 保存表格数据
            // tableData = data.findByPage;
            // total = Math.ceil(data.cont / pageSize);
            // renderTable(data.findByPage);
            tableData = data.data;
            // myhjp.hjp=data.total
            // //console.log(data)
            
            total = Math.ceil(tableData.length/ 100);
            // //console.log(total)
            renderTable(data);
            $('#page').turnpage({
                current: current,
                // total: total,
                total:data.total,
                
                callback: function (page) {
                    current = page;
                    
                    getTableData(startTime,current)
            //         //console.log(current)
            // //console.log(myhjp)
                }
            })
       
        });
   

}


function renderTable(data) {
    var str = '';
    data.data.forEach(function (item, index) {
        str += `<tr>
        <td> ${item.createTime}</td>
        <td>${item.highPressure}</td>
        <td>${item.lowPressure}</td>
        <td>${item.heartRate}</td>
        
        <td>
            <button class="btn edit">编辑</button>
            <button class="btn del">删除</button>
        </td>
    </tr> `
    });
    $('#table-body').html(str);
  
}

// 回填表单数据
function renderEditForm(data) {
    var form = $('#edit-form')[0];
    for (var prop in data) {
        form[prop] ? form[prop].value = data[prop] : '';
        //console.log(data)
    }
    //console.log(data)
}


function transferData(path, data, cb) {
    $.ajax({
        url: 'http://47.92.102.105:10006/api/v1/' + path,
        type: 'post',
        data: $.extend({
            
        }, data),
        // json 
        // jsonp  ---> 解决跨域问题   和ajax是两个东西
        // cors
        dataType: 'json',
        success: function (res) {
            if (res.code == 10000) {
                cb(res);
            } else {
                alert(res.message);
            }
            //(res)
        }
    })
};
var datalist = []
var list = []
var pingjungaolist= []
var gaoyadilist=[]
var lowSmalllist=[]
var zuidadilist=[]
var pingjundilist=[]
var xinlvgaolist=[]
var xinlvdilist=[]
var xinlvpingjunlist=[]
function postData(startTime='',endTime=''){
    var self = this;
            $.ajax({
                url: 'http://47.92.102.105:10006/api/v1/blood/pressure/week/data',
                type:'post',
                data:{
                    startTime:startTime,
                    endTime:endTime,
                    
                },
                success: function (data) {
             
                const dataArray=['04:00-04:30','04:30-05:00','05:00-05:30','05:30-06:00','06:00-06:30','06:30-07:00','07:00-07:30','07:30-08:00','08:00-08:30','08:30-09:00','09:00-09:30','09:30-10:00','10:00-10:30','10:30-11:00','11:00-11:30','11:30-12:00','12:00-12:30','12:30-13:00','13:00-13:30','13:30-14:00','14:00-14:30','14:30-15:00','15:00-15:30','15:30-16:00','16:00-16:30','16:30-17:00','17:00-17:30','17:30-18:00','18:00-18:30','18:30-19:00','19:00-19:30','19:30-20:00','20:00-20:30','20:30-21:00','21:00-21:30','21:30-22:00','22:00-22:30','22:30-23:00','23:00-23:30','23:30-24:00','00:00-00:30','00:30-01:00','01:00-01:30','01:30-02:00',]
                //(data.data)
                //(dataArray)
                // //console.log(data)
                var datalist = []
var list = []
var temp=[]

    //  for (const key of data.data) {
    //      // //console.log(key)
    //  }
    for (const key in data.data) {
    list.push(key)
    }
    for(let i=0;i<list.length;i++){
        // //console.log(data.data[list[i]])
       
        datalist.push(data.data[list[i]])
       
    }
    // for (const s in data.data[list[i]]) {
    //     temp.push(data.data[list[i]][s])
    //   }
    // //console.log(datalist)
    for(let j=0;j<datalist.length;j++){
        // // //console.log(datalist[j])
        for(let k=0;k<dataArray.length;k++){
      temp.push(datalist[j][dataArray[k]])   
        }
        
    }
    var result = [];
for(var l=0,len=temp.length;l<len;l+=44){
   result.push(temp.slice(l,l+44));
}
    // //console.log(temp)
    // //console.log(result)
   highMax=[]
    highSmall=[]
    highIntermediate=[]
    lowMax=[]
    lowSmall=[]
    lowIntermediate=[]
    heartRateMax=[]
    heartRateSmall=[]
    heartRateIntermediate=[]
 for(let m=0;m<result.length;m++){
for(let n=0;n<44;n++){
    if(!result[m][n].highMax){
        result[m][n].highMax=null
    }
    if(!result[m][n].highSmall){
        result[m][n].highSmall=null
    }
    if(!result[m][n].highIntermediate){
        result[m][n].highIntermediate=null
    }
    if(!result[m][n].lowMax){
        result[m][n].lowMax=null
    }
    if(!result[m][n].lowSmall){
        result[m][n].lowSmall=null
    }
    if(!result[m][n].lowIntermediate){
        result[m][n].lowIntermediate=null
    }
    if(!result[m][n].heartRateMax){
        result[m][n].heartRateMax=null
    }
    if(!result[m][n].heartRateSmall){
        result[m][n].heartRateSmall=null
    }
    if(!result[m][n].heartRateIntermediate){
        result[m][n].heartRateIntermediate=null
    }
    highMax.push(result[m][n].highMax)
    highSmall.push(result[m][n].highSmall)
    highIntermediate.push(result[m][n].highIntermediate)
    lowMax.push(result[m][n].lowMax)
    lowSmall.push(result[m][n].lowSmall)
    lowIntermediate.push(result[m][n].lowIntermediate)
    heartRateMax.push( result[m][n].heartRateMax)
    heartRateSmall.push( result[m][n].heartRateSmall)
    heartRateIntermediate.push(result[m][n].heartRateIntermediate)
}
 }


 var pingjungaolist= []
var gaoyadilist=[]
var lowSmalllist=[]
var zuidadilist=[]
var pingjundilist=[]
var xinlvgaolist=[]
var xinlvdilist=[]
var xinlvpingjunlist=[]
var zuihoulist=[]
 for(var l=0,len=highMax.length;l<len;l+=44){
    pingjungaolist.push(highMax.slice(l,l+44));
 }
 for(var l=0,len=highSmall.length;l<len;l+=44){
    gaoyadilist.push(highSmall.slice(l,l+44));
 }
 for(var l=0,len=highIntermediate.length;l<len;l+=44){
    lowSmalllist.push(highIntermediate.slice(l,l+44));
 }
 for(var l=0,len=lowMax.length;l<len;l+=44){
    zuidadilist.push(lowMax.slice(l,l+44));
 }
 for(var l=0,len=lowSmall.length;l<len;l+=44){
    pingjundilist.push(lowSmall.slice(l,l+44));
 }
 for(var l=0,len=lowIntermediate.length;l<len;l+=44){
    xinlvgaolist.push(lowIntermediate.slice(l,l+44));
 }
 for(var l=0,len=heartRateMax.length;l<len;l+=44){
    xinlvdilist.push(heartRateMax.slice(l,l+44));
 }
 for(var l=0,len=heartRateSmall.length;l<len;l+=44){
    xinlvpingjunlist.push(heartRateSmall.slice(l,l+44));
 }
 for(var l=0,len=heartRateIntermediate.length;l<len;l+=44){
    zuihoulist.push(heartRateIntermediate.slice(l,l+44));
 }
 // //console.log(pingjungaolist)
 // //console.log(gaoyadilist)
 // //console.log(lowSmalllist)
 // //console.log(zuidadilist)
 // //console.log(pingjundilist)
 // //console.log(xinlvgaolist)
 // //console.log(xinlvdilist)
 // //console.log(xinlvpingjunlist)
 // //console.log(zuihoulist)
               quxian(pingjungaolist)
               pingjungao(lowSmalllist )
               gaoyadi(gaoyadilist)
               zuixiaodi( pingjundilist)
               zuidadi(zuidadilist)
               pingjundi( xinlvgaolist)
               xinlvgao(xinlvdilist)
               xinlvdi(xinlvpingjunlist)
               xinlvpingjun(zuihoulist)
                }
            })
          
            // //(timelist)
            // //(list)


}
// postData()
for(let i =0;i<100;i++){
    getRandomColor()
}

function quxian(list,list2,list3,list4,list5,list6,list7){
var myChart = echarts.init($('.area')[0]);
var dataAxis = ["4","|","5","|","6","|","7","|","8","|","9","|","10","|","11","|","12","|","13","|","14","|","15","|","16","|","17","|","18","|","19","|","20","|","21","|","22","|","23","|","24","|","1","|","2",];
// option = {
//     title: {
//         left: 'center',
//         text: '高压最大图',
//     },
//     xAxis: {
//         type: 'category',
//         data: [...dataAxis]
//     },
//     yAxis: {
//         type: 'value'
//     },
//     toolbox: {
//         feature: {
//            dataView: {readOnly: false
//             // show: true,
//             // title: '数据视图',
//             // //readOnly: true, //设置只读，会隐藏刷新按钮。
//             // lang: ['数据视图', '关闭', '导出Excel'],
//             // contentToOption: function (opts) {
//             //     $("#tableExcel_Day").table2excel({
//             //         exclude: ".noExl", //过滤位置的 css 类名
//             //         filename: productSelectName + '血压' + ".xls", //文件名称
//             //         name: "Excel Document Name.xls",
//             //         exclude_img: true,
//             //         exclude_links: true,
//             //         exclude_inputs: true
//             //     });
//         },
//             saveAsImage: {}
//         }
//     },
//     series: [{
//         data: [...list],
//         type: 'line',
//         label: {
//             normal: {
//                 show: true,
//                 position: 'top'
//             }
//         },
//     }]
// };

var temp=[]
var bba=[]
var colorlist1=[]
var colorlist22=[]
var colorlist11=[]
var colorlist33=[]
var lista=[]
var listb=[]
var listc=[]
var listd=[]
for(let i =0 ;i<list.length;i++){
    
    for(let j =0;j<list[i].length;j++){
// console.log(list[i][j])
temp.push(list[i][j])

    }
}
var aaa =temp.some(function ( item, index, array){
    return item > 130
})
if(aaa){
    for(let k=0;k<temp.length;k++){
            if(temp[k]<130 &&temp[k]>=120){
        colorlist1.push(temp[k])
        // aaaa.push('white')
    }
    if(temp[k]<120 &&temp[k]>=110){
        colorlist22.push(temp[k])
        // aaaa.push('white')
    }
    if(temp[k]<110 &&temp[k]>=100){
        colorlist11.push(temp[k])
        // aaaa.push('white')
    }
    if(temp[k]<100 &&temp[k]>=90){
        colorlist33.push(temp[k])
        // aaaa.push('white')
    }
    // bba=[...aaaa,...huise]
    }
    if(colorlist1.length>0){
        lista.push('white')
        }
        if(colorlist22.length>0){
            listb.push('white')
            }
        if(colorlist11.length>0){
                listc.push('white')
                }
                if(colorlist33.length>0){
                    listd.push('white')
                    }
                    bba=[...lista,...listb,...listc,...listd,...huise]
}else{
bba=['white']
}
option = {
    title: {
        text: '高压最大值图'
    },
    color: ['#ff0000', '#FF6100', '#ffff00', '#00ff00', '#008c8c', '#0000ff', '#8d4bbb'],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['周一', '周二', '周三', '周四', '周五','周六', '周日']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
       
        data: [...dataAxis]
    },
    yAxis: {
        type: 'value',
        min:'dataMin',
        max:'dataMax',
        // min:110,
        // max:160,
        splitArea:{
            show:true,
            areaStyle:{
                color:[...bba]
            }
        }
    },
    series: [
        {
            name: '周一',
            type: 'line',
            
            data: [...list[0]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周二',
            type: 'line',
           
            data: [...list[1]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
            
        },
        {
            name: '周三',
            type: 'line',
           
            data: [...list[2]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周四',
            type: 'line',
          
            data: [...list[3]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周五',
            type: 'line',
          
            data: [...list[4]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周六',
            type: 'line',
            
            data: [...list[5]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周日',
            type: 'line',
          
            data: [...list[6]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        }
    ]
};
myChart.setOption(option)
}
function pingjungao (list,list2,list3,list4,list5,list6,list7){
var myChart = echarts.init($('.pingjungao')[0]);
var dataAxis = ["4","|","5","|","6","|","7","|","8","|","9","|","10","|","11","|","12","|","13","|","14","|","15","|","16","|","17","|","18","|","19","|","20","|","21","|","22","|","23","|","24","|","1","|","2",];
// option = {
//     title: {
//         left: 'center',
//         text: '高压中间值图',
//     },
//     xAxis: {
//         type: 'category',
//         data: [...dataAxis]
//     },
//     yAxis: {
//         type: 'value'
//     },
//     toolbox: {
//         feature: {
//            dataView: {readOnly: false},
//             saveAsImage: {}
//         }
//     },
//     series: [{
//         data: [...list],
//         type: 'line',
//         label: {
//             normal: {
//                 show: true,
//                 position: 'top'
//             }
//         },
//     }]
// };
var temp=[]
var bba=[]
var colorlist1=[]
var colorlist22=[]
var colorlist11=[]
var colorlist33=[]
var lista=[]
var listb=[]
var listc=[]
var listd=[]
for(let i =0 ;i<list.length;i++){
    
    for(let j =0;j<list[i].length;j++){
// console.log(list[i][j])
temp.push(list[i][j])

    }
}
var aaa =temp.some(function ( item, index, array){
    return item > 130
})
if(aaa){
    for(let k=0;k<temp.length;k++){
            if(temp[k]<130 &&temp[k]>=120){
        colorlist1.push(temp[k])
        // aaaa.push('white')
    }
    if(temp[k]<120 &&temp[k]>=110){
        colorlist22.push(temp[k])
        // aaaa.push('white')
    }
    if(temp[k]<110 &&temp[k]>=100){
        colorlist11.push(temp[k])
        // aaaa.push('white')
    }
    if(temp[k]<100 &&temp[k]>=90){
        colorlist33.push(temp[k])
        // aaaa.push('white')
    }
    // bba=[...aaaa,...huise]
    }
    if(colorlist1.length>0){
        lista.push('white')
        }
        if(colorlist22.length>0){
            listb.push('white')
            }
        if(colorlist11.length>0){
                listc.push('white')
                }
                if(colorlist33.length>0){
                    listd.push('white')
                    }
                    bba=[...lista,...listb,...listc,...listd,...huise]
}else{
bba=['white']
}
option = {
    title: {
        text: '高压中间值图'
    },
    color: ['#ff0000', '#FF6100', '#ffff00', '#00ff00', '#008c8c', '#0000ff', '#8d4bbb'],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['周一', '周二', '周三', '周四', '周五','周六', '周日']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
       
        data: [...dataAxis]
    },
    yAxis: {
        type: 'value',
        min:'dataMin',
        max:'dataMax',
        // min:110,
        // max:160,
        splitArea:{
            show:true,
            areaStyle:{
                color:[...bba]
            }
        }
    },
    series: [
        {
            name: '周一',
            type: 'line',
            
            data: [...list[0]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周二',
            type: 'line',
           
            data: [...list[1]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周三',
            type: 'line',
           
            data: [...list[2]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周四',
            type: 'line',
          
            data: [...list[3]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周五',
            type: 'line',
          
            data: [...list[4]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周六',
            type: 'line',
            
            data: [...list[5]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周日',
            type: 'line',
          
            data: [...list[6]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        }
    ]
};
myChart.setOption(option)

}
function gaoyadi(list,list2,list3,list4,list5,list6,list7){
var myChart = echarts.init($('.gaoyadi')[0]);
var dataAxis = ["4","|","5","|","6","|","7","|","8","|","9","|","10","|","11","|","12","|","13","|","14","|","15","|","16","|","17","|","18","|","19","|","20","|","21","|","22","|","23","|","24","|","1","|","2",];

var temp=[]
var bba=[]
var colorlist1=[]
var colorlist22=[]
var colorlist11=[]
var colorlist33=[]
var lista=[]
var listb=[]
var listc=[]
var listd=[]
for(let i =0 ;i<list.length;i++){
    
    for(let j =0;j<list[i].length;j++){
// console.log(list[i][j])
temp.push(list[i][j])

    }
}
var aaa =temp.some(function ( item, index, array){
    return item > 130
})
if(aaa){
    for(let k=0;k<temp.length;k++){
            if(temp[k]<130 &&temp[k]>=120){
        colorlist1.push(temp[k])
        // aaaa.push('white')
    }
    if(temp[k]<120 &&temp[k]>=110){
        colorlist22.push(temp[k])
        // aaaa.push('white')
    }
    if(temp[k]<110 &&temp[k]>=100){
        colorlist11.push(temp[k])
        // aaaa.push('white')
    }
    if(temp[k]<100 &&temp[k]>=90){
        colorlist33.push(temp[k])
        // aaaa.push('white')
    }
    // bba=[...aaaa,...huise]
    }
    if(colorlist1.length>0){
        lista.push('white')
        }
        if(colorlist22.length>0){
            listb.push('white')
            }
        if(colorlist11.length>0){
                listc.push('white')
                }
                if(colorlist33.length>0){
                    listd.push('white')
                    }
                    bba=[...lista,...listb,...listc,...listd,...huise]
}else{
bba=['white']
}

option = {
    title: {
        text: '高压最小值图'
    },
    color: ['#ff0000', '#FF6100', '#ffff00', '#00ff00', '#008c8c', '#0000ff', '#8d4bbb'],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['周一', '周二', '周三', '周四', '周五','周六', '周日']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
       
        data: [...dataAxis]
    },
    yAxis: {
        type: 'value',
        min:'dataMin',
        max:'dataMax',
        // min:110,
        // max:160,
        splitArea:{
            show:true,
            areaStyle:{
                color:[...bba]
            }
        }
    },
    series: [
        {
            name: '周一',
            type: 'line',
            
            data: [...list[0]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周二',
            type: 'line',
           
            data: [...list[1]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周三',
            type: 'line',
           
            data: [...list[2]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周四',
            type: 'line',
          
            data: [...list[3]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周五',
            type: 'line',
          
            data: [...list[4]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周六',
            type: 'line',
            
            data: [...list[5]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周日',
            type: 'line',
          
            data: [...list[6]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        }
    ]
};
myChart.setOption(option)


}
function zuixiaodi(list,list2,list3,list4,list5,list6,list7){

var myChart = echarts.init($('.zuixiaodi')[0]);
var dataAxis = ["4","|","5","|","6","|","7","|","8","|","9","|","10","|","11","|","12","|","13","|","14","|","15","|","16","|","17","|","18","|","19","|","20","|","21","|","22","|","23","|","24","|","1","|","2",];
// option = {
//     title: {
//         left: 'center',
//         text: '低压最小值图',
//     },
//     xAxis: {
//         type: 'category',
//         data: [...dataAxis]
//     },
//     yAxis: {
//         type: 'value'
//     },
//     toolbox: {
//         feature: {
//            dataView: {readOnly: false},
//             saveAsImage: {}
//         }
//     },
//     series: [{
//         data: [...list],
//         type: 'line',  label: {
//             normal: {
//                 show: true,
//                 position: 'top'
//             }
//         },
//     }]
// };
var temp=[]
var bba=[]
var colorlist1=[]
var colorlist22=[]
var colorlist11=[]
var colorlist33=[]
var lista=[]
var listb=[]
var listc=[]
var listd=[]
for(let i =0 ;i<list.length;i++){
    
    for(let j =0;j<list[i].length;j++){
// console.log(list[i][j])
temp.push(list[i][j])

    }
}
var aaa =temp.some(function ( item, index, array){
    return item > 80
})
if(aaa){
    for(let k=0;k<temp.length;k++){
            if(temp[k]<80 &&temp[k]>=75){
        colorlist1.push(temp[k])
        // aaaa.push('white')
    }
    if(temp[k]<75 &&temp[k]>=70){
        colorlist22.push(temp[k])
        // aaaa.push('white')
    }
    if(temp[k]<70 &&temp[k]>=65){
        colorlist11.push(temp[k])
        // aaaa.push('white')
    }
    if(temp[k]<65 &&temp[k]>=60){
        colorlist33.push(temp[k])
        // aaaa.push('white')
    }
    // bba=[...aaaa,...huise]
    }
    if(colorlist1.length>0){
        lista.push('white')
        }
        if(colorlist22.length>0){
            listb.push('white')
            }
        if(colorlist11.length>0){
                listc.push('white')
                }
                if(colorlist33.length>0){
                    listd.push('white')
                    }
                    bba=[...lista,...listb,...listc,...listd,...huise]
}else{
bba=['white']
}
option = {
    title: {
        text: '低压最小值图'
    },
    color: ['#ff0000', '#FF6100', '#ffff00', '#00ff00', '#008c8c', '#0000ff', '#8d4bbb'],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['周一', '周二', '周三', '周四', '周五','周六', '周日']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
       
        data: [...dataAxis]
    },
    yAxis: {
        type: 'value',
        min:'dataMin',
        max:'dataMax',
        splitArea:{
            show:true,
            areaStyle:{
                color:[...bba]
            }
        }
    },
    series: [
        {
            name: '周一',
            type: 'line',
            
            data: [...list[0]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周二',
            type: 'line',
           
            data: [...list[1]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周三',
            type: 'line',
           
            data: [...list[2]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周四',
            type: 'line',
          
            data: [...list[3]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周五',
            type: 'line',
          
            data: [...list[4]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周六',
            type: 'line',
            
            data: [...list[5]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周日',
            type: 'line',
          
            data: [...list[6]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        }
    ]
};
myChart.setOption(option)
}
function zuidadi(list,list2,list3,list4,list5,list6,list7){
var myChart = echarts.init($('.zuidadi')[0]);
var dataAxis = ["4","|","5","|","6","|","7","|","8","|","9","|","10","|","11","|","12","|","13","|","14","|","15","|","16","|","17","|","18","|","19","|","20","|","21","|","22","|","23","|","24","|","1","|","2",];
// option = {
//     title: {
//         left: 'center',
//         text: '低压最大值图',
//     },
//     xAxis: {
//         type: 'category',
//         data: [...dataAxis]
//     },
//     yAxis: {
//         type: 'value'
//     },
//     series: [{
//         data: [...list],
//         type: 'line',
//         label: {
//             normal: {
//                 show: true,
//                 position: 'top'
//             }
//         },
//     }]
// };
var temp=[]
var bba=[]
var colorlist1=[]
var colorlist22=[]
var colorlist11=[]
var colorlist33=[]
var lista=[]
var listb=[]
var listc=[]
var listd=[]
for(let i =0 ;i<list.length;i++){
    
    for(let j =0;j<list[i].length;j++){
// console.log(list[i][j])
temp.push(list[i][j])

    }
}
var aaa =temp.some(function ( item, index, array){
    return item > 80
})
if(aaa){
    for(let k=0;k<temp.length;k++){
            if(temp[k]<80 &&temp[k]>=75){
        colorlist1.push(temp[k])
        // aaaa.push('white')
    }
    if(temp[k]<75 &&temp[k]>=70){
        colorlist22.push(temp[k])
        // aaaa.push('white')
    }
    if(temp[k]<70 &&temp[k]>=65){
        colorlist11.push(temp[k])
        // aaaa.push('white')
    }
    if(temp[k]<65 &&temp[k]>=60){
        colorlist33.push(temp[k])
        // aaaa.push('white')
    }
    // bba=[...aaaa,...huise]
    }
    if(colorlist1.length>0){
        lista.push('white')
        }
        if(colorlist22.length>0){
            listb.push('white')
            }
        if(colorlist11.length>0){
                listc.push('white')
                }
                if(colorlist33.length>0){
                    listd.push('white')
                    }
                    bba=[...lista,...listb,...listc,...listd,...huise]
}else{
bba=['white']
}

console.log(bba)
option = {
    title: {
        text: '低压最大值图'
    },
    color: ['#ff0000', '#FF6100', '#ffff00', '#00ff00', '#008c8c', '#0000ff', '#8d4bbb'],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['周一', '周二', '周三', '周四', '周五','周六', '周日']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
       
        data: [...dataAxis]
    },
    yAxis: {
        type: 'value',
        min:'dataMin',
        max:'dataMax',
        splitArea:{
            show:true,
            areaStyle:{
                color:[...bba]
            }
        }
    },
    series: [
        {
            name: '周一',
            type: 'line',
            
            data: [...list[0]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周二',
            type: 'line',
           
            data: [...list[1]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周三',
            type: 'line',
           
            data: [...list[2]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周四',
            type: 'line',
          
            data: [...list[3]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周五',
            type: 'line',
          
            data: [...list[4]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周六',
            type: 'line',
            
            data: [...list[5]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周日',
            type: 'line',
          
            data: [...list[6]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        }
    ]
};
myChart.setOption(option)
}
function pingjundi(list,list2,list3,list4,list5,list6,list7){
var myChart = echarts.init($('.pingjundi')[0]);
var dataAxis = ["4","|","5","|","6","|","7","|","8","|","9","|","10","|","11","|","12","|","13","|","14","|","15","|","16","|","17","|","18","|","19","|","20","|","21","|","22","|","23","|","24","|","1","|","2",];
// option = {
//     title: {
//         left: 'center',
//         text: '低压平均值图',
//     },
//     xAxis: {
//         type: 'category',
//         data: [...dataAxis]
//     },
//     yAxis: {
//         type: 'value'
//     },
//     toolbox: {
//         feature: {
//            dataView: {readOnly: false},
//             saveAsImage: {}
//         }
//     },
//     series: [{
//         data: [...list],
//         type: 'line',
//         label: {
//             normal: {
//                 show: true,
//                 position: 'top'
//             }
//         },
//     }]
// };
var temp=[]
var bba=[]
var colorlist1=[]
var colorlist22=[]
var colorlist11=[]
var colorlist33=[]
var lista=[]
var listb=[]
var listc=[]
var listd=[]
for(let i =0 ;i<list.length;i++){
    
    for(let j =0;j<list[i].length;j++){
// console.log(list[i][j])
temp.push(list[i][j])

    }
}
var aaa =temp.some(function ( item, index, array){
    return item > 80
})
if(aaa){
    for(let k=0;k<temp.length;k++){
            if(temp[k]<80 &&temp[k]>=75){
        colorlist1.push(temp[k])
        // aaaa.push('white')
    }
    if(temp[k]<75 &&temp[k]>=70){
        colorlist22.push(temp[k])
        // aaaa.push('white')
    }
    if(temp[k]<70 &&temp[k]>=65){
        colorlist11.push(temp[k])
        // aaaa.push('white')
    }
    if(temp[k]<65 &&temp[k]>=60){
        colorlist33.push(temp[k])
        // aaaa.push('white')
    }
    // bba=[...aaaa,...huise]
    }
    if(colorlist1.length>0){
        lista.push('white')
        }
        if(colorlist22.length>0){
            listb.push('white')
            }
        if(colorlist11.length>0){
                listc.push('white')
                }
                if(colorlist33.length>0){
                    listd.push('white')
                    }
                    bba=[...lista,...listb,...listc,...listd,...huise]
}else{
bba=['white']
}



option = {
    title: {
        text: '低压中间值图'
    },
    color: ['#ff0000', '#FF6100', '#ffff00', '#00ff00', '#008c8c', '#0000ff', '#8d4bbb'],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['周一', '周二', '周三', '周四', '周五','周六', '周日']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
       
        data: [...dataAxis]
    },
    yAxis: {
        type: 'value',
        min:'dataMin',
        max:'dataMax',
        splitArea:{
            show:true,
            areaStyle:{
                color:[...bba]
            }
        }
    },
    series: [
        {
            name: '周一',
            type: 'line',
            
            data: [...list[0]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周二',
            type: 'line',
           
            data: [...list[1]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周三',
            type: 'line',
           
            data: [...list[2]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周四',
            type: 'line',
          
            data: [...list[3]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周五',
            type: 'line',
          
            data: [...list[4]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周六',
            type: 'line',
            
            data: [...list[5]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        },
        {
            name: '周日',
            type: 'line',
          
            data: [...list[6]],
            connectNulls: true,
            symbol: "circle",
            symbolSize: 10,
        }
    ]
};
myChart.setOption(option)
}
function xinlvgao (list,list2,list3,list4,list5,list6,list7){
    // var myChart = echarts.init($('.xinlvgao')[0]);
    var myChart = echarts.init($('.xinlvgao')[0]);
    var dataAxis = ["4","|","5","|","6","|","7","|","8","|","9","|","10","|","11","|","12","|","13","|","14","|","15","|","16","|","17","|","18","|","19","|","20","|","21","|","22","|","23","|","24","|","1","|","2",];
    var temp=[]
    var bba=[]
    var colorlist1=[]
    var colorlist22=[]
    var colorlist11=[]
    var colorlist33=[]
    var colorlist44=[]
    var colorlist55=[]
    var lista=[]
    var listb=[]
    var listc=[]
    var listd=[]
    var liste=[]
    var listf=[]
    for(let i =0 ;i<list.length;i++){
        
        for(let j =0;j<list[i].length;j++){
    // console.log(list[i][j])
    temp.push(list[i][j])
    
        }
    }
    var aaa =temp.some(function ( item, index, array){
        return item > 90
    })
    if(aaa){
        for(let k=0;k<temp.length;k++){
                if(temp[k]<90 &&temp[k]>=85){
            colorlist1.push(temp[k])
            // aaaa.push('white')
        }
        if(temp[k]<85 &&temp[k]>=80){
            colorlist22.push(temp[k])
            // aaaa.push('white')
        }
        if(temp[k]<80 &&temp[k]>=75){
            colorlist11.push(temp[k])
            // aaaa.push('white')
        }
        if(temp[k]<75 &&temp[k]>=70){
            colorlist33.push(temp[k])
            // aaaa.push('white')
        }
        if(temp[k]<70 &&temp[k]>=65){
            colorlist44.push(temp[k])
            // aaaa.push('white')
        }
        if(temp[k]<65 &&temp[k]>=60){
            colorlist55.push(temp[k])
            // aaaa.push('white')
        }
        
        }
        if(colorlist1.length>0){
            lista.push('white')
            }
            if(colorlist22.length>0){
                listb.push('white')
                }
            if(colorlist11.length>0){
                    listc.push('white')
                    }
                    if(colorlist33.length>0){
                        listd.push('white')
                        }
                        if(colorlist44.length>0){
                            liste.push('white')
                            }
                            if(colorlist55.length>0){
                                listf.push('white')
                                }
                        bba=[...lista,...listb,...listc,...listd,...liste,...listf,...huise]
    }else{
    bba=['white']
    }
    option = {
        title: {
            text: '心率最大值图'
        },
        color: ['#ff0000', '#FF6100', '#ffff00', '#00ff00', '#008c8c', '#0000ff', '#8d4bbb'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['周一', '周二', '周三', '周四', '周五','周六', '周日']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
           
            data: [...dataAxis]
        },
        yAxis: {
            type: 'value',
            min:'dataMin',
        max:'dataMax',
        splitArea:{
            show:true,
            areaStyle:{
                color:[...bba]
            }
        }
        },
        series: [
            {
                name: '周一',
                type: 'line',
                
                data: [...list[0]],
                connectNulls: true,
                symbol: "circle",
            symbolSize: 10,
            },
            {
                name: '周二',
                type: 'line',
               
                data: [...list[1]],
                connectNulls: true,
                symbol: "circle",
            symbolSize: 10,
            },
            {
                name: '周三',
                type: 'line',
               
                data: [...list[2]],
                connectNulls: true,
                symbol: "circle",
            symbolSize: 10,
            },
            {
                name: '周四',
                type: 'line',
              
                data: [...list[3]],
                connectNulls: true,
                symbol: "circle",
            symbolSize: 10,
            },
            {
                name: '周五',
                type: 'line',
              
                data: [...list[4]],
                connectNulls: true,
                symbol: "circle",
            symbolSize: 10,
            },
            {
                name: '周六',
                type: 'line',
                
                data: [...list[5]],
                connectNulls: true,
                symbol: "circle",
            symbolSize: 10,
            },
            {
                name: '周日',
                type: 'line',
              
                data: [...list[6]],
                connectNulls: true,
                symbol: "circle",
            symbolSize: 10,
            }
        ]
    };
    myChart.setOption(option)

}

function xinlvdi (list,list2,list3,list4,list5,list6,list7){
    var myChart = echarts.init($('.xinlvdi')[0]);
    var dataAxis = ["4","|","5","|","6","|","7","|","8","|","9","|","10","|","11","|","12","|","13","|","14","|","15","|","16","|","17","|","18","|","19","|","20","|","21","|","22","|","23","|","24","|","1","|","2",];
    var temp=[]
    var bba=[]
    var colorlist1=[]
    var colorlist22=[]
    var colorlist11=[]
    var colorlist33=[]
    var colorlist44=[]
    var colorlist55=[]
    var lista=[]
    var listb=[]
    var listc=[]
    var listd=[]
    var liste=[]
    var listf=[]
    for(let i =0 ;i<list.length;i++){
        
        for(let j =0;j<list[i].length;j++){
    // console.log(list[i][j])
    temp.push(list[i][j])
    
        }
    }
    var aaa =temp.some(function ( item, index, array){
        return item > 90
    })
    if(aaa){
        for(let k=0;k<temp.length;k++){
                if(temp[k]<90 &&temp[k]>=85){
            colorlist1.push(temp[k])
            // aaaa.push('white')
        }
        if(temp[k]<85 &&temp[k]>=80){
            colorlist22.push(temp[k])
            // aaaa.push('white')
        }
        if(temp[k]<80 &&temp[k]>=75){
            colorlist11.push(temp[k])
            // aaaa.push('white')
        }
        if(temp[k]<75 &&temp[k]>=70){
            colorlist33.push(temp[k])
            // aaaa.push('white')
        }
        if(temp[k]<70 &&temp[k]>=65){
            colorlist44.push(temp[k])
            // aaaa.push('white')
        }
        if(temp[k]<65 &&temp[k]>=60){
            colorlist55.push(temp[k])
            // aaaa.push('white')
        }
        
        }
        if(colorlist1.length>0){
            lista.push('white')
            }
            if(colorlist22.length>0){
                listb.push('white')
                }
            if(colorlist11.length>0){
                    listc.push('white')
                    }
                    if(colorlist33.length>0){
                        listd.push('white')
                        }
                        if(colorlist44.length>0){
                            liste.push('white')
                            }
                            if(colorlist55.length>0){
                                listf.push('white')
                                }
                        bba=[...lista,...listb,...listc,...listd,...liste,...listf,...huise]
    }else{
    bba=['white']
    }
    option = {
        title: {
            text: '心率最小值图'
        },
        color: ['#ff0000', '#FF6100', '#ffff00', '#00ff00', '#008c8c', '#0000ff', '#8d4bbb'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['周一', '周二', '周三', '周四', '周五','周六', '周日']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
           
            data: [...dataAxis]
        },
        yAxis: {
            type: 'value',
            min:'dataMin',
            max:'dataMax',
            splitArea:{
                show:true,
                areaStyle:{
                    color:[...bba]
                }
            }
        },
        series: [
            {
                name: '周一',
                type: 'line',
                
                data: [...list[0]],
                connectNulls: true,
                symbol: "circle",
            symbolSize: 10,
            },
            {
                name: '周二',
                type: 'line',
               
                data: [...list[1]],
                connectNulls: true,
                symbol: "circle",
            symbolSize: 10,
            },
            {
                name: '周三',
                type: 'line',
               
                data: [...list[2]],
                connectNulls: true,
                symbol: "circle",
            symbolSize: 10,
            },
            {
                name: '周四',
                type: 'line',
              
                data: [...list[3]],
                connectNulls: true,
                symbol: "circle",
            symbolSize: 10,
            },
            {
                name: '周五',
                type: 'line',
              
                data: [...list[4]],
                connectNulls: true,
                symbol: "circle",
            symbolSize: 10,
            },
            {
                name: '周六',
                type: 'line',
                
                data: [...list[5]],
                connectNulls: true,
                symbol: "circle",
            symbolSize: 10,
            },
            {
                name: '周日',
                type: 'line',
              
                data: [...list[6]],
                connectNulls: true,
                symbol: "circle",
            symbolSize: 10,
            }
        ]
    };
    myChart.setOption(option)

}
function xinlvpingjun (list,list2,list3,list4,list5,list6,list7){
    var myChart = echarts.init($('.xinlvpingjun')[0]);
    var dataAxis = ["4","|","5","|","6","|","7","|","8","|","9","|","10","|","11","|","12","|","13","|","14","|","15","|","16","|","17","|","18","|","19","|","20","|","21","|","22","|","23","|","24","|","1","|","2",];
    var temp=[]
    var bba=[]
    var colorlist1=[]
    var colorlist22=[]
    var colorlist11=[]
    var colorlist33=[]
    var colorlist44=[]
    var colorlist55=[]
    var lista=[]
    var listb=[]
    var listc=[]
    var listd=[]
    var liste=[]
    var listf=[]
    for(let i =0 ;i<list.length;i++){
        
        for(let j =0;j<list[i].length;j++){
    // console.log(list[i][j])
    temp.push(list[i][j])
    
        }
    }
    var aaa =temp.some(function ( item, index, array){
        return item > 90
    })
    if(aaa){
        for(let k=0;k<temp.length;k++){
                if(temp[k]<90 &&temp[k]>=85){
            colorlist1.push(temp[k])
            // aaaa.push('white')
        }
        if(temp[k]<85 &&temp[k]>=80){
            colorlist22.push(temp[k])
            // aaaa.push('white')
        }
        if(temp[k]<80 &&temp[k]>=75){
            colorlist11.push(temp[k])
            // aaaa.push('white')
        }
        if(temp[k]<75 &&temp[k]>=70){
            colorlist33.push(temp[k])
            // aaaa.push('white')
        }
        if(temp[k]<70 &&temp[k]>=65){
            colorlist44.push(temp[k])
            // aaaa.push('white')
        }
        if(temp[k]<65 &&temp[k]>=60){
            colorlist55.push(temp[k])
            // aaaa.push('white')
        }
        
        }
        if(colorlist1.length>0){
            lista.push('white')
            }
            if(colorlist22.length>0){
                listb.push('white')
                }
            if(colorlist11.length>0){
                    listc.push('white')
                    }
                    if(colorlist33.length>0){
                        listd.push('white')
                        }
                        if(colorlist44.length>0){
                            liste.push('white')
                            }
                            if(colorlist55.length>0){
                                listf.push('white')
                                }
                        bba=[...lista,...listb,...listc,...listd,...liste,...listf,...huise]
    }else{
    bba=['white']
    }
    option = {
        title: {
            text: '心率中间值图'
        },
        color: ['#ff0000', '#FF6100', '#ffff00', '#00ff00', '#008c8c', '#0000ff', '#8d4bbb'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['周一', '周二', '周三', '周四', '周五','周六', '周日']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
           
            data: [...dataAxis]
        },
        yAxis: {
            type: 'value',
            min:'dataMin',
        max:'dataMax',
        splitArea:{
            show:true,
            areaStyle:{
                color:[...bba]
            }
        }
        },
        series: [
            {
                name: '周一',
                type: 'line',
                
                data: [...list[0]],
                connectNulls: true,
                symbol: "circle",
            symbolSize: 10,
            },
            {
                name: '周二',
                type: 'line',
               
                data: [...list[1]],
                connectNulls: true,
                symbol: "circle",
            symbolSize: 10,
            },
            {
                name: '周三',
                type: 'line',
               
                data: [...list[2]],
                connectNulls: true,
                symbol: "circle",
            symbolSize: 10,
            },
            {
                name: '周四',
                type: 'line',
              
                data: [...list[3]],
                connectNulls: true,
                symbol: "circle",
            symbolSize: 10,
            },
            {
                name: '周五',
                type: 'line',
              
                data: [...list[4]],
                connectNulls: true,
                symbol: "circle",
            symbolSize: 10,
            },
            {
                name: '周六',
                type: 'line',
                
                data: [...list[5]],
                connectNulls: true,
                symbol: "circle",
            symbolSize: 10,
            },
            {
                name: '周日',
                type: 'line',
              
                data: [...list[6]],
                connectNulls: true,
                symbol: "circle",
            symbolSize: 10,
            }
        ]
    };
    myChart.setOption(option)

}
function post(startTime='',endTime=''){
    var self = this;
            $.ajax({
                url: 'http://47.92.102.105:10006/api/v1/blood/pressure/morning/evening/map',
                type:'post',
                data:{
                    startTime:startTime,
                    endTime:endTime,
                    type:1
                },
                success: function (data) {
             //(data)
                // const dataArray=['04:00-04:30','04:30-05:00','05:00-05:30','05:30-06:00','06:00-06:30','06:30-07:00','07:00-07:30','07:30-08:00','08:00-08:30','08:30-09:00','09:00-09:30','09:30-10:00','10:00-10:30','10:30-11:00','11:00-11:30','11:30-12:00','12:00-12:30','12:30-13:00','13:00-13:30','13:30-14:00','14:00-14:30','14:30-15:00','15:00-15:30','15:30-16:00','16:00-16:30','16:30-17:00','17:00-17:30','17:30-18:00','18:00-18:30','18:30-19:00','19:00-19:30','19:30-20:00','20:00-20:30','20:30-21:00','21:00-21:30','21:30-22:00','22:00-22:30','22:30-23:00','23:00-23:30','23:30-24:00','00:00-00:30','00:30-01:00','01:00-01:30','01:30-02:00',]
                //(data.data)
                // //console.log(data)
                // `highMax: 0
                // highSmall: 0
                // highIntermediate: null
                // lowMax: 0
                // lowSmall: 0
                // lowIntermediate: null
                // heartRateMax: 0
                // heartRateSmall: 0
                // heartRateIntermediate: null`
                var keylist=[]
                highMaxlist=[]
                highSmalllist=[]
                highIntermediatelist=[]
                lowMaxlist=[]
                lowSmalllist=[]
                lowIntermediatelist=[]
                heartRateMaxlist=[]
                heartRateSmalllist=[]
                heartRateIntermediatelist=[]
          for (const key in data.data) {
              keylist.push(key)
          }
          //(keylist)
          for(let i=0;i<keylist.length;i++){
             //( data.data[keylist[i]])
             var highMax=data.data[keylist[i]].highMax
             if(!highMax){
                highMax=null
             }
             highMaxlist.push(highMax)
             var highSmall=data.data[keylist[i]].highSmall
             if(!highSmall){
                highSmall=null
             }
             highSmalllist.push(highSmall)
             var highIntermediate=data.data[keylist[i]].highIntermediate
             if(!highIntermediate){
                highIntermediate=null
             }
             highIntermediatelist.push(highIntermediate)
             var lowMax=data.data[keylist[i]].lowMax
             if(!lowMax){
                lowMax=null
             }
             lowMaxlist.push(lowMax)
             var lowSmall=data.data[keylist[i]].lowSmall
             if(!lowSmall){
                lowSmall=null
             }
             lowSmalllist.push(lowSmall)
             var lowIntermediate=data.data[keylist[i]].lowIntermediate
             if(!lowIntermediate){
                lowIntermediate=null
             }
             lowIntermediatelist.push(lowIntermediate)
             var heartRateMax=data.data[keylist[i]].heartRateMax
             if(!heartRateMax){
                heartRateMax=null
             }
             heartRateMaxlist.push(heartRateMax)
             var heartRateSmall=data.data[keylist[i]].heartRateSmall
             if(!heartRateSmall){
                heartRateSmall=null
             }
             heartRateSmalllist.push(heartRateSmall)
             var heartRateIntermediate=data.data[keylist[i]].heartRateIntermediate
             if(!heartRateIntermediate){
                heartRateIntermediate=null
             }
             heartRateIntermediatelist.push(heartRateIntermediate)
           
          }
           //(data)

           zaowantime(highMaxlist,keylist,'zaowantugaoyazuida','早高压最大值',110,150)
           zaowantime(highSmalllist,keylist,'zaowantugaoyazuixiao','早高压最小值',110,150)
           zaowantime(highIntermediatelist,keylist,'zaowantugaoyazhongjian','早高压中间值',110,150)
           zaowantime(lowMaxlist,keylist,'zaowantudiyazuida','早低压最大值',70,100)
           zaowantime(lowSmalllist,keylist,'zaowantudiyazuixiao','早低压最小值',70,100)
           zaowantime(lowIntermediatelist,keylist,'zaowantudiyazhongjian','早低压中间值',70,100)
           zaowantime(heartRateMaxlist,keylist,'zaowantuxinlvzuida','早心率最大值',65,95)
           zaowantime(heartRateSmalllist,keylist,'zaowantuxinlvzuixiao','早心率最小值',65,95)
           zaowantime(heartRateIntermediatelist,keylist,'zaowantuxinlvzhongjian','早心率中间值',65,95)
       
           
                }
            })
          


}
// post()
function zaowantime(list,time,name,name1,min,max){
var myChart = echarts.init($(`.${name}`)[0]);
var dataAxis = time
option = {
    title: {
        left: 'center',
        text: `${name1}`,
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        data: [...dataAxis]
    },
    yAxis: {
        type: 'value',
        min:'dataMin',
        max:'dataMax',
    },
    toolbox: {
        feature: {
        //    dataView: {readOnly: false},
            saveAsImage: {}
        }
    },
    series: [{
        data: [...list],
        type: 'line',
        
            connectNulls: true,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
    }]
};
myChart.setOption(option)


}
function wanpost(startTime='',endTime=''){
$.ajax({
    url: `http://47.92.102.105:10006/api/v1/blood/pressure/morning/evening/map`,
    type:'post',
    data:{
        startTime:startTime,
        endTime:endTime,
        type:2
    },
    success: function (data) {
 //(data)

    //(data.data)
    // //console.log(data)
    var keylist=[]
                highMaxlist=[]
                highSmalllist=[]
                highIntermediatelist=[]
                lowMaxlist=[]
                lowSmalllist=[]
                lowIntermediatelist=[]
                heartRateMaxlist=[]
                heartRateSmalllist=[]
                heartRateIntermediatelist=[]
          for (const key in data.data) {
              keylist.push(key)
          }
          //(keylist)
          for(let i=0;i<keylist.length;i++){
             //( data.data[keylist[i]])
             var highMax=data.data[keylist[i]].highMax
             if(!highMax){
                highMax=null
             }
             highMaxlist.push(highMax)
             var highSmall=data.data[keylist[i]].highSmall
             if(!highSmall){
                highSmall=null
             }
             highSmalllist.push(highSmall)
             var highIntermediate=data.data[keylist[i]].highIntermediate
             if(!highIntermediate){
                highIntermediate=null
             }
             highIntermediatelist.push(highIntermediate)
             var lowMax=data.data[keylist[i]].lowMax
             if(!lowMax){
                lowMax=null
             }
             lowMaxlist.push(lowMax)
             var lowSmall=data.data[keylist[i]].lowSmall
             if(!lowSmall){
                lowSmall=null
             }
             lowSmalllist.push(lowSmall)
             var lowIntermediate=data.data[keylist[i]].lowIntermediate
             if(!lowIntermediate){
                lowIntermediate=null
             }
             lowIntermediatelist.push(lowIntermediate)
             var heartRateMax=data.data[keylist[i]].heartRateMax
             if(!heartRateMax){
                heartRateMax=null
             }
             heartRateMaxlist.push(heartRateMax)
             var heartRateSmall=data.data[keylist[i]].heartRateSmall
             if(!heartRateSmall){
                heartRateSmall=null
             }
             heartRateSmalllist.push(heartRateSmall)
             var heartRateIntermediate=data.data[keylist[i]].heartRateIntermediate
             if(!heartRateIntermediate){
                heartRateIntermediate=null
             }
             heartRateIntermediatelist.push(heartRateIntermediate)
           
          }
           //(data)

           zaowantime(highMaxlist,keylist,'zaowantugaoyazuidariqi','晚高压最大值',110,150)
           zaowantime(highSmalllist,keylist,'zaowantugaoyazuixiaoriqi','晚高压最小值',110,150)
           zaowantime(highIntermediatelist,keylist,'zaowantugaoyazhongjianriqi','晚高压中间值',110,150)
           zaowantime(lowMaxlist,keylist,'zaowantudiyazuidariqi','晚低压最大值',70,100)
           zaowantime(lowSmalllist,keylist,'zaowantudiyazuixiaoriqi','晚低压最小值',70,100)
           zaowantime(lowIntermediatelist,keylist,'zaowantudiyazhongjianriqi','晚低压中间值',70,100)
           zaowantime(heartRateMaxlist,keylist,'zaowantuxinlvzuidariqi','晚心率最大值',65,95)
           zaowantime(heartRateSmalllist,keylist,'zaowantuxinlvzuixiaoriqi','晚心率最小值',65,95)
           zaowantime(heartRateIntermediatelist,keylist,'zaowantuxinlvzhongjianriqi','晚心率中间值',65,95)
       

    }
})

}
// wanpost()
//   wanpost('/percentage',1)
// function baifenbipost (startTime='',endTime=''){
// $.ajax({
//     url: `http://47.92.102.105:10006/api/v1/blood/pressure/percentage`,
//     type:'post',
//     data:{
//         startTime:startTime,
//         endTime:endTime,
//         type:1
//     },
//     success: function (data) {
//  //(data)
// // //console.log(data)
//     //(data.data)
    
//     var keylist=[]
//     highOnelist=[]
//     highTwolist=[]
//     highThreelist=[]
//     highFourlist=[]
//     lowOnelist=[]
//     lowTwolist=[]
//     lowThreelist=[]
//     highTotallist=[]
//     lowTotallist=[]


// // `highOne
// // highTwo
// // highThree
// // highFour
// // lowOne
// // lowTwo
// // lowThree
// // highTotal
// // lowTotal`

// for (const key in data.data) {
//   keylist.push(key)
// }
// for(let i=0;i<keylist.length;i++){
// //( data.data[keylist[i]])
// var highOne=data.data[keylist[i]].highOne
//  if(!highOne){
//     highOne=0
//  }
// highOnelist.push(highOne)
// var highTwo=data.data[keylist[i]].highTwo
// if(!highTwo){
// highTwo=0
// }
// highTwolist.push(highTwo)
// var highThree=data.data[keylist[i]].highThree
// if(!highThree){
// highThree=0
// }
// highThreelist.push(highThree)
// var  highFour=data.data[keylist[i]].highFour
// if(! highFour){
// highFour=0
// }
// highFourlist.push( highFour)
// var lowOne=data.data[keylist[i]].lowOne
// if(!lowOne){
// lowOne=0
// }
// lowOnelist.push( lowOne)
// var  lowTwo=data.data[keylist[i]].lowTwo
// if(! lowTwo){
// lowTwo=0
// }
// lowTwolist.push( lowTwo)
// var  lowThree=data.data[keylist[i]].lowThree
// if(! lowThree){
// lowThree=0
// }
// lowThreelist.push( lowThree)
// var  highTotal=data.data[keylist[i]].highTotal
// if(! highTotal){
// highTotal=0
// }
// highTotallist.push( highTotal)
// var  lowTotal=data.data[keylist[i]].lowTotal
// if(! lowTotal){
// lowTotal=0
// }
// lowTotallist.push( lowTotal)

// }

// baifenbitu(highOnelist,'gaoya1')
// baifenbitu(highTwolist,'gaoya2')
// baifenbitu(highThreelist,'gaoya3')
// baifenbitu( highFourlist,'gaoya4')
// baifenbitu(lowOnelist,'diya1')
// baifenbitu(lowTwolist,'diya2')
// baifenbitu(lowThreelist,'diya3')
// baifenbitu( highTotallist,'gaoyayichang')
// baifenbitu( lowTotallist,'diyayichang')

//     }
// })
// }
// baifenbipost()
//  baifenbipost('/percentage',2)
// function baifenbitu(list,name){
// var myChart = echarts.init($(`.${name}`)[0]);
// var dataAxis = ["4","|","5","|","6","|","7","|","8","|","9","|","10","|","11","|","12","|","13","|","14","|","15","|","16","|","17","|","18","|","19","|","20","|","21","|","22","|","23","|","24","|","1","|","2",]
// option = {
//     xAxis: {
//         type: 'category',
//         data: [...dataAxis]
//     },
//     yAxis: {
//         type: 'value'
//     },
//     series: [{
//         data: [...list],
//         type: 'line',
//         label: {
//             normal: {
//                 show: true,
//                 position: 'top'
//             }
//         },
//     }]
// };
// myChart.setOption(option)


// }
// function timepost(startTime='',endTime=''){
// $.ajax({
//     url: `http://47.92.102.105:10006/api/v1/blood/pressure/percentage`,
//     type:'post',
//     data:{
//         startTime:startTime,
//         endTime:endTime,
//         type:2
//     },
//     success: function (data) {
//  //(data)
// // //console.log(data)
//     //(data.data)
    
//     var keylist=[]
//     highOnelist=[]
//     highTwolist=[]
//     highThreelist=[]
//     highFourlist=[]
//     lowOnelist=[]
//     lowTwolist=[]
//     lowThreelist=[]
//     highTotallist=[]
//     lowTotallist=[]


// // `highOne
// // highTwo
// // highThree
// // highFour
// // lowOne
// // lowTwo
// // lowThree
// // highTotal
// // lowTotal`

// for (const key in data.data) {
//   keylist.push(key)
// }
// for(let i=0;i<keylist.length;i++){
// //( data.data[keylist[i]])
// var highOne=data.data[keylist[i]].highOne
//  if(!highOne){
//     highOne=0
//  }
// highOnelist.push(highOne)
// var highTwo=data.data[keylist[i]].highTwo
// if(!highTwo){
// highTwo=0
// }
// highTwolist.push(highTwo)
// var highThree=data.data[keylist[i]].highThree
// if(!highThree){
// highThree=0
// }
// highThreelist.push(highThree)
// var  highFour=data.data[keylist[i]].highFour
// if(! highFour){
// highFour=0
// }
// highFourlist.push( highFour)
// var lowOne=data.data[keylist[i]].lowOne
// if(!lowOne){
// lowOne=0
// }
// lowOnelist.push( lowOne)
// var  lowTwo=data.data[keylist[i]].lowTwo
// if(! lowTwo){
// lowTwo=0
// }
// lowTwolist.push( lowTwo)
// var  lowThree=data.data[keylist[i]].lowThree
// if(! lowThree){
// lowThree=0
// }
// lowThreelist.push( lowThree)
// var  highTotal=data.data[keylist[i]].highTotal
// if(! highTotal){
// highTotal=0
// }
// highTotallist.push( highTotal)
// var  lowTotal=data.data[keylist[i]].lowTotal
// if(! lowTotal){
// lowTotal=0
// }
// lowTotallist.push( lowTotal)

// }
// riqibaifenbitu(highOnelist,keylist,'riqigaoya1')
// riqibaifenbitu(highTwolist,keylist,'riqigaoya2')
// riqibaifenbitu(highThreelist,keylist,'riqigaoya3')
// riqibaifenbitu( highFourlist,keylist,'riqigaoya4')
// riqibaifenbitu(lowOnelist,keylist,'riqidiya1')
// riqibaifenbitu(lowTwolist,keylist,'riqidiya2')
// riqibaifenbitu(lowThreelist,keylist,'riqidiya3')
// riqibaifenbitu( highTotallist,keylist,'riqigaoyayichang')
// riqibaifenbitu( lowTotallist,keylist,'riqidiyayichang')
 


//     }
// })

// }
// timepost()
// function riqibaifenbitu(list,time,name){
// var myChart = echarts.init($(`.${name}`)[0]);
// var dataAxis =time
// option = {
//     xAxis: {
//         type: 'category',
//         data: [...dataAxis]
//     },
//     yAxis: {
//         type: 'value'
//     },
//     series: [{
//         data: [...list],
//         type: 'line',
//         label: {
//             normal: {
//                 show: true,
//                 position: 'top'
//             }
//         },
//     }]
// };
// myChart.setOption(option)


// }

function danxiangpost(startTime='',endTime=''){
$.ajax({
    url: `http://47.92.102.105:10006/api/v1/blood/pressure/single/plot/custom`,
    type:'post',
    data:{
        startTime:startTime,
        endTime:endTime,
        type:1
    },
    success: function (data) {
 //(data)
// //console.log(data)
    //(data.data)
    
    var keylist=[]
    highintermediateValuelist=[]
    highminValuelist=[]
    highbigValuelist=[]
    lowintermediateValuelist=[]
    lowminValuelist=[]
    lowbigValuelist=[]
    heartRateintermediateValuelist=[]
    heartRateminValuelist=[]
    heartRatebigValuelist=[]


//     `intermediateValue: null
// minValue: null
// bigValue: null`

for (const key in data.data) {
  keylist.push(key)
}
for(let i=0;i<keylist.length;i++){
//( data.data[keylist[i]].high)
//( data.data[keylist[i]].low)
//( data.data[keylist[i]].heartRate)
var highbigValue=data.data[keylist[i]].high.bigValue
// if(!highbigValue){
//     highbigValue=0
// }
highbigValuelist.push(highbigValue)
var highminValue=data.data[keylist[i]].high.minValue
// if(!highminValue){
//     highminValue=0
// }
highminValuelist.push(highminValue)
var highintermediateValue=data.data[keylist[i]].high.intermediateValue
// if(!highintermediateValue){
//     highintermediateValue=0
// }
highintermediateValuelist.push(highintermediateValue)
var lowbigValue=data.data[keylist[i]].low.bigValue
// if(!lowbigValue){
//     lowbigValue=0
// }
lowbigValuelist.push(lowbigValue)
var lowminValue=data.data[keylist[i]].low.minValue
// if(!lowminValue){
//     lowminValue=0
// }
lowminValuelist.push(lowminValue)
var lowintermediateValue=data.data[keylist[i]].low.intermediateValue
// if(!lowintermediateValue){
//     lowintermediateValue=0
// }
lowintermediateValuelist.push(lowintermediateValue)
var heartRatebigValue=data.data[keylist[i]].heartRate.bigValue
// if(!heartRatebigValue){
//     heartRatebigValue=0
// }
heartRatebigValuelist.push(heartRatebigValue)
var heartRateminValue=data.data[keylist[i]].heartRate.minValue
// if(!heartRateminValue){
//     heartRateminValue=0
// }
heartRateminValuelist.push(heartRateminValue)
var heartRateintermediateValue=data.data[keylist[i]].heartRate.intermediateValue
// if(!heartRateintermediateValue){
//     heartRateintermediateValue=0
// }
heartRateintermediateValuelist.push(heartRateintermediateValue)



}

danxiangtu( highbigValuelist,keylist,'gaoyazuida','高压最大值',110,150)
danxiangtu( highminValuelist,keylist,'gaoyazuixiao','高压最小值',110,150)
danxiangtu( highintermediateValuelist,keylist,'gaoyazhongjian','高压中间值',110,150)
danxiangtu( lowbigValuelist,keylist,'diyazuida','低压最大值',70,100)
danxiangtu( lowminValuelist,keylist,'diyazuixiao','低压最小值',70,100)
danxiangtu( lowintermediateValuelist,keylist,'diyazhongjian','低压中间值',70,100)
danxiangtu( heartRatebigValuelist,keylist,'xinlvzuida','心率最大值',65,95)
danxiangtu( heartRateminValuelist,keylist,'xinlvzuixiao','心率最小值',65,95)
danxiangtu( heartRateintermediateValuelist,keylist,'xinlvzhongjian','心率中间值',65,95)



    }
})
}
// danxiangpost()
function danxiangtu (list,time,name,name1,min,max){

var myChart = echarts.init($(`.${name}`)[0]);
var dataAxis =time
option = {
    title: {
        left: 'center',
        text: `${name1}`,
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        data: [...dataAxis]
    },
    yAxis: {
        type: 'value',
        min:'dataMin',
        max:'dataMax',
    },
    toolbox: {
        feature: {
        //    dataView: {readOnly: false},
            saveAsImage: {}
        }
    },
    series: [{
        data: [...list],
        type: 'line',
        connectNulls: true,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
    }]
};
myChart.setOption(option)
}
function zhuzhuangtupost(startTime='',endTime=''){
    $.ajax({
        url: `http://47.92.102.105:10006/api/v1/blood/pressure/histogram`,
        type:'post',
        data:{
            startTime:startTime,
            endTime:endTime,
            // type:type
        },
        success: function (data) {
     //(data)
    
        //(data.data)
        // `highRangeValue: 0
        // lowRangeValue: 0`
        var keylist=[]
        highRangeValuelist=[]
        lowRangeValuelist= []
        for (const key in data.data) {
            keylist.push(key)
        }
        for(let i=0;i<keylist.length;i++){
          //( data.data[keylist[i]])
         var highRangeValue=data.data[keylist[i]].highRangeValue
        //  if(!highRangeValue){
        //     highRangeValue=0
        //  }
         highRangeValuelist.push(highRangeValue)
         var lowRangeValue=data.data[keylist[i]].lowRangeValue
        //  if(!lowRangeValue){
        //     lowRangeValue=0
        // }
        lowRangeValuelist.push(lowRangeValue)
    }
    //(lowRangeValuelist,highRangeValuelist)
  
    // zhuzhuangtu(highRangeValuelist,lowRangeValuelist,keylist,'gaoyayichangzhu')
   

        }
    })



}
// zhuzhuangtupost()
function zhuzhuangtu (list1,list2,list3,list4,time,name){
    var myChart = echarts.init($(`.${name}`)[0]);
    option = {
        title: {
            left: 'center',
            text: '大数据量面积图',
        },
        color: ['#003366', '#006699', '#4cabce', '#e5323e'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
            //    dataView: {readOnly: false},
                saveAsImage: {}
            }
        },
        xAxis: [
            {
                type: 'category',
                data: [...time],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '高压≥140',
                type: 'bar',
               
                data: [...list1]
            },
              {
                name: '高压≥145',
                type: 'bar',
                // barWidth: '20%',
                data: [...list[1]]
            },
            {
                name: '高压≥150',
                type: 'bar',
                // barWidth: '20%',
                data: [...list[2]]
            },
            {
                name: '高压≥160',
                type: 'bar',
                // barWidth: '20%',
                data: [...list[3]]
            }
        ]
    };
    
    
    
    myChart.setOption(option)
}
function gaodiyazhuzhuangtu (startTime='',endTime=''){
    $.ajax({
        url: `http://47.92.102.105:10006/api/v1/blood/pressure/proportion/total/result`,
        type:'post',
        data:{
            startTime:startTime,
            endTime:endTime,
            // type:type
        },
        success: function (data) {
     //(data)
    
        //(data.data)
    //   `high140: 1
    //   high145: 1
    //   high150: 1
    //   high160: 0
    //   low90: 63
    //   low93: 63
    //   low95:`
        var keylist=[]
        high140list =[]
        high145list=[]
        high150list=[]
        high160list=[]
        low90list=[]
        low93list=[]
        low95list=[]
        mytime=[]
        //console.log(data)
        for (const key in data.data) {
            keylist.push(key)
        }
        
        //console.log(keylist)
        for(let i=0;i<keylist.length;i++){
          //( data.data[keylist[i]])
          mytime.push(data.data[keylist[i]].day)
         var high140=data.data[keylist[i]].section.high140
         if(!high140){
            high140=0
         }
         high140list.push(high140)
         var high145=data.data[keylist[i]].section.high145
         if(!high145){
            high145=0
        }
        high145list.push(high145)
        var high150=data.data[keylist[i]].section.high150
        if(!high150){
            high150=0
        }
        high150list.push(high150)
        var high160=data.data[keylist[i]].section.high160
        if(!high160){
            high160=0
       }
       high160list.push(high160)
       var low90=data.data[keylist[i]].section.low90
       if(!low90){
        low90=0
       }
       low90list.push(low90)
       var low93=data.data[keylist[i]].section.low93
       if(!low93){
        low93=0
      }
      low93list.push(low93)
      var low95=data.data[keylist[i]].section.low95
      if(!low95){
        low95=0
     }
     low95list.push(low95)
    }
    demo(high140list,high145list,high150list,high160list,mytime,'diyayichangzhu')
    test(low90list,low93list,low95list,mytime,'gaoyazhu1')
    // zhuzhuangtu(high140list,high145list,high150list,high160list,keylist,'diyayichangzhu')
   

        }
    })
}
// gaodiyazhuzhuangtu()
function demo (list,time,name){
    var myChart = echarts.init($(`.${name}`)[0]);
    temp=['#008c8c', '#00ff00','#ffff00','#FF6100']
    
    option = {
        title: {
            left: 'center',
            text: '高压柱状图',
        },
        // color: temp,
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' 丨 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
            //    dataView: {readOnly: false},
                saveAsImage: {}
            }
        },
        xAxis: [
            {
                type: 'category',
                data: [...time],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
       
    
            {
              name: '高压≥135',
              type: 'bar',
              // barWidth: '0%',
              color:'#008c8c',
              data: [...list[0]]
          },
          {
              name: '高压≥140',
              type: 'bar',
              // barWidth: '0%',
              color:'#00ff00',
              data: [...list[1]]
          },
          {
              name: '高压≥145',
              type: 'bar',
              // barWidth: '0%',
              color:'#ffff00',
              data: [...list[2]]
          },
          {
              name: '高压≥150',
              type: 'bar',
              // barWidth: '0%',
              // barGap: 0,
              color:'#FF6100',
              data: [...list[3]]
          },
      ]
    };
    
   
    myChart.setOption(option,{
        notMerge: true,
        lazyUpdate: false,
        silent: false
    })
    
    
}
function xiaodemo (list,time,name){
    var myChart = echarts.init($(`.${name}`)[0]);
    temp=['#0000ff','#008c8c', '#00ff00','#ffff00',]
    
    option = {
        title: {
            left: 'center',
            text: '高压柱状图',
        },
        // color: temp,
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' 丨 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
            //    dataView: {readOnly: false},
                saveAsImage: {}
            }
        },
        xAxis: [
            {
                type: 'category',
                data: [...time],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series:  [
       
            {
                name: '高压≥130',
                type: 'bar',
                // barWidth: '0%',
                // barGap: 0,
                color:'#0000ff',
                data: [...list[0]]
            },
              {
                name: '高压≥135',
                type: 'bar',
                // barWidth: '0%',
                color:'#008c8c',
                data: [...list[1]]
            },
            {
                name: '高压≥140',
                type: 'bar',
                // barWidth: '0%',
                color:'#00ff00',
                data: [...list[2]]
            },
            {
                name: '高压≥145',
                type: 'bar',
                // barWidth: '0%',
                color:'#ffff00',
                data: [...list[3]]
            }
        ]
    };
    
   
    myChart.setOption(option,{
        notMerge: true,
        lazyUpdate: false,
        silent: false
    })
}
function test(list1,list2,list3,time,name){
    var myChart = echarts.init($(`.${name}`)[0]);
    option = {
        title: {
            left: 'center',
            text: '低压柱状图',
        },
        color: [ '#006699', '#4cabce', '#e5323e'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' 丨 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
            //    dataView: {readOnly: false},
                saveAsImage: {}
            }
        },
        xAxis: [
            {
                type: 'category',
                data: [...time],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name: '低压≥90',
                type: 'bar',
                // barWidth: '20%',
                barGap: 0,
                data: [...list1]
            },
              {
                name: '低压≥93',
                type: 'bar',
                // barWidth: '20%',
                data: [...list2]
            },
            {
                name: '低压≥95',
                type: 'bar',
                // barWidth: '20%',
                data: [...list3]
            },
        
        ]
    };
    myChart.setOption(option,{
        notMerge: true,
        lazyUpdate: false,
        silent: false
    })
}
function xinzengdemo (list,time,name){
    var myChart = echarts.init($(`.${name}`)[0]);
    
        temp=['#00ff00', '#ffff00','#FF6100','#ff0000',]
    
    
 
    option = {
        title: {
            left: 'center',
            text: '高压柱状图',
        },
        // color: temp,
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' 丨 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
            //    dataView: {readOnly: false},
                saveAsImage: {}
            }
        },
        xAxis: [
            {
                type: 'category',
                data: [...time],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series:  [
         
            {
                name: '高压≥140',
                type: 'bar',
                // barWidth: '0%',
                // barGap: 0,
                color:'#00ff00',
                data: [...list[0]]
            },
              {
                name: '高压≥145',
                type: 'bar',
                // barWidth: '0%',
                color:'#ffff00',
                data: [...list[1]]
            },
            {
                name: '高压≥150',
                type: 'bar',
                // barWidth: '0%',
                color:'#FF6100',
                data: [...list[2]]
            },
            {
                name: '高压≥160',
                type: 'bar',
                // barWidth: '0%',
                color:'#ff0000',
                data: [...list[3]]
            }
        ]
    };
    
   
    myChart.setOption(option,{
        notMerge: true,
        lazyUpdate: false,
        silent: false
    })
    
}
zhuzhuangtuhuizong()
zhuzhuangjidutuhuizong()
function zhuzhuangtuhuizong (){
    $.ajax({
        url: `http://47.92.102.105:10006/api/v1/blood/pressure/year/proportion/total`,
        type:'post',
      
        success: function (data) {
    //  console.log(data.data)
        var keylist=[]
        high130list =[]
        high135list=[]
        high140list =[]
        high145list=[]
        high150list=[]
        high160list=[]
        low80list=[]
        low85list=[]
        low90list=[]
        low93list=[]
        low95list=[]
       
        
        for (const key in data.data) {
            keylist.push(key)
        }
        
        
        for(let i=0;i<keylist.length;i++){
            var high130=data.data[keylist[i]].section.high130
         if(!high130){
            high130=0
         }
         high130list.push(high130)
         var high135=data.data[keylist[i]].section.high135
         if(!high135){
            high135=0
        }
        high135list.push(high135)
         
         var high140=data.data[keylist[i]].section.high140
         if(!high140){
            high140=0
         }
         high140list.push(high140)
         var high145=data.data[keylist[i]].section.high145
         if(!high145){
            high145=0
        }
        high145list.push(high145)
        var high150=data.data[keylist[i]].section.high150
        if(!high150){
            high150=0
        }
        high150list.push(high150)
        var high160=data.data[keylist[i]].section.high160
        if(!high160){
            high160=0
       }
       high160list.push(high160)
       var low80=data.data[keylist[i]].section.low80
       if(!low80){
        low80=0
       }
       low80list.push(low80)
       var low85=data.data[keylist[i]].section.low85
       if(!low85){
        low85=0
      }
      low85list.push(low85)
       var low90=data.data[keylist[i]].section.low90
       if(!low90){
        low90=0
       }
       low90list.push(low90)
       var low93=data.data[keylist[i]].section.low93
       if(!low93){
        low93=0
      }
      low93list.push(low93)
      var low95=data.data[keylist[i]].section.low95
      if(!low95){
        low95=0
     }
     low95list.push(low95)
    }
    
    jiduniandugaoya(high130list,high135list,high140list,high145list,high150list,high160list,'niandugaoya','年度汇总高压图')
    jiduniandudiya(low80list,low85list,low90list,low93list,low95list,'niandudiya','年度汇总低压图')

        }
    })
}
function zhuzhuangjidutuhuizong (){
    $.ajax({
        url: `http://47.92.102.105:10006/api/v1/blood/pressure/quarter/proportion/total`,
        type:'post',
      
        success: function (data) {
     console.log(data.data)
        var keylist=[]
        high130list =[]
        high135list=[]
        high140list =[]
        high145list=[]
        high150list=[]
        high160list=[]
        low80list=[]
        low85list=[]
        low90list=[]
        low93list=[]
        low95list=[]
       mytime=[]
        
        for (const key in data.data) {
            keylist.push(key)
        }
        
        
        for(let i=0;i<keylist.length;i++){
            mytime.push(data.data[keylist[i]].week)
            var high130=data.data[keylist[i]].section.high130
         if(!high130){
            high130=0
         }
         high130list.push(high130)
         var high135=data.data[keylist[i]].section.high135
         if(!high135){
            high135=0
        }
        high135list.push(high135)
         
         var high140=data.data[keylist[i]].section.high140
         if(!high140){
            high140=0
         }
         high140list.push(high140)
         var high145=data.data[keylist[i]].section.high145
         if(!high145){
            high145=0
        }
        high145list.push(high145)
        var high150=data.data[keylist[i]].section.high150
        if(!high150){
            high150=0
        }
        high150list.push(high150)
        var high160=data.data[keylist[i]].section.high160
        if(!high160){
            high160=0
       }
       high160list.push(high160)
       var low80=data.data[keylist[i]].section.low80
       if(!low80){
        low80=0
       }
       low80list.push(low80)
       var low85=data.data[keylist[i]].section.low85
       if(!low85){
        low85=0
      }
      low85list.push(low85)
       var low90=data.data[keylist[i]].section.low90
       if(!low90){
        low90=0
       }
       low90list.push(low90)
       var low93=data.data[keylist[i]].section.low93
       if(!low93){
        low93=0
      }
      low93list.push(low93)
      var low95=data.data[keylist[i]].section.low95
      if(!low95){
        low95=0
     }
     low95list.push(low95)
    }
    console.log(mytime)
    jidugaoya(high130list,high135list,high140list,high145list,high150list,high160list,'jidugaoya','季度汇总高压图',mytime)
    jidudiya(low80list,low85list,low90list,low93list,low95list,'jidudiya','季度汇总低压图',mytime)

        }
    })
}
function jidudiya (low80list,low85list,low90list,low93list,low95list,name,zhuzhuangtu,time){
    var myChart = echarts.init($(`.${name}`)[0]);
    
        
    // var time=[1,2,3,4,5,6,7,8,9,10,11,12]
        var temp  =[]
var mylistda=[]
var mylistzhong=[]
var gaoyadalist=[]
var gaoyazhonglist=[]
var gaoyaxiaolist=[]
var linshi=[]
var shuju=[]
temp=[]
    for(let i =0;i<low95list.length;i++){
 if(low95list[i]>0){
mylistda=[low90list,low93list,low95list]
 } else if (low93list[i]>0 &&low95list[i] ==0){
    mylistzhong=[low85list,low90list,low93list]
 }else{
    mylistxiao=[low80list,low85list,low90list]
 }
    }
    for(let k =0;k<high160list.length;k++){
        if(high150list[k]>0 &&high160list[k]==0){gaoyazhonglist=[high135list,high140list,high145list,high150list,]}else if(high160list[k]>0){
            gaoyadalist=[high140list,high145list,high150list,high160list]
         }else{
            gaoyaxiaolist=[high130list,high135list,high140list,high145list]
         }
       
         }
         if(gaoyadalist.length>0){
           linshi= [
                
            {
                name: '高压≥140',
                type: 'bar',
                // barWidth: '0%',
                // barGap: 0,
                color:'#00ff00',
                data: [...high140list]
            },
              {
                name: '高压≥145',
                type: 'bar',
                // barWidth: '0%',
                color:'#ffff00',
                data: [...high145list]
            },
            {
                name: '高压≥150',
                type: 'bar',
                // barWidth: '0%',
                color:'#FF6100',
                data: [...high150list]
            },
            {
                name: '高压≥160',
                type: 'bar',
                // barWidth: '0%',
                color:'#ff0000',
                data: [...high160list]
            }
          
            
            ]
        } else if (gaoyazhonglist.length>0){
            linshi= [
               
                {
                    name: '高压≥135',
                    type: 'bar',
                    // barWidth: '0%',
                    color:'#008c8c',
                    data: [...high135list]
                },
                {
                    name: '高压≥140',
                    type: 'bar',
                    // barWidth: '0%',
                    color:'#00ff00',
                    data: [...high140list]
                },
                {
                    name: '高压≥145',
                    type: 'bar',
                    // barWidth: '0%',
                    color:'#ffff00',
                    data: [...high145list]
                },
                {
                    name: '高压≥150',
                    type: 'bar',
                    // barWidth: '0%',
                    // barGap: 0,
                    color:'#FF6100',
                    data: [...high150list]
                }
            
            ]
        }else{
            linshi= [
                {
                    name: '高压≥130',
                    type: 'bar',
                    // barWidth: '0%',
                    // barGap: 0,
                    color:'#0000ff',
                    data: [...high130list]
                },
                  {
                    name: '高压≥135',
                    type: 'bar',
                    // barWidth: '0%',
                    color:'#008c8c',
                    data: [...high135list]
                },
                {
                    name: '高压≥140',
                    type: 'bar',
                    // barWidth: '0%',
                    color:'#00ff00',
                    data:[...high140list]
                },
                {
                    name: '高压≥145',
                    type: 'bar',
                    // barWidth: '0%',
                    color:'#ffff00',
                    data: [...high145list]
                }
            
            ]
        }
    if(mylistda.length>0){
        temp= [
            
         
            {
                name: '低压≥90',
                type: 'bar',
                // barWidth: '20%',
                color:'#ffff00',
                barGap: 0,
                data: [...low90list]
            },
              {
                name: '低压≥93',
                type: 'bar',
                // barWidth: '20%',
                color:'#FF6100',
                data: [...low93list]
            },
            {
                name: '低压≥95',
                type: 'bar',
                // barWidth: '20%',
                color:'#ff0000',
                data: [...low95list]
            }
        
        ]
    } else if (mylistzhong.length>0){
        temp= [
           
              {
                name: '低压≥85',
                type: 'bar',
                // barWidth: '20%',
                color:'#00ff00',
                data: [...low85list]
            },
            {
                name: '低压≥90',
                type: 'bar',
                // barWidth: '20%',
                color:'#ffff00',
                barGap: 0,
                data: [...low90list]
            },
            {
              name: '低压≥93',
              type: 'bar',
              // barWidth: '20%',
              color:'#FF6100',
              data: [...low93list]
          }
        
        ]
    }else{
        temp= [
            {
                name: '低压≥80',
                type: 'bar',
                // barWidth: '20%',
                color:'#008c8c',
                barGap: 0,
                data: [...low80list]
            },
              {
                name: '低压≥85',
                type: 'bar',
                // barWidth: '20%',
                color:'#00ff00',
                data: [...low85list]
            },
            {
                name: '低压≥90',
                type: 'bar',
                // barWidth: '20%',
                color:'#ffff00',
                barGap: 0,
                data: [...low90list]
            }
        
        ]
    }

    option = {
        title: {
            left: 'center',
            text: zhuzhuangtu,
        },
        // color: temp,
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' 丨 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
            //    dataView: {readOnly: false},
                saveAsImage: {}
            }
        },
        xAxis: [
            {
                type: 'category',
                data: [...time],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series:  [
         
         ...temp
        ]
    };
    
   
    myChart.setOption(option,{
        notMerge: true,
        lazyUpdate: false,
        silent: false
    })
    
}
function jidugaoya (high130list,high135list,high140list,high145list,high150list,high160list,name,zhuzhuangtu,time){
    var myChart = echarts.init($(`.${name}`)[0]);
    
        
    // var time=[1,2,3,4,5,6,7,8,9,10,11,12]
        var temp  =[]
var mylistda=[]
var mylistzhong=[]
var mylistxiao=[]
var gaoyadalist=[]
var gaoyazhonglist=[]
var gaoyaxiaolist=[]
var linshi=[]
var shuju=[]
temp=[]
    for(let i =0;i<low95list.length;i++){
 if(low95list[i]>0){
mylistda=[low90list,low93list,low95list]
 } else if (low93list[i]>0 &&low95list[i] ==0){
    mylistzhong=[low85list,low90list,low93list]
 }else{
    mylistxiao=[low80list,low85list,low90list]
 }
    }
    for(let k =0;k<high160list.length;k++){
        if(high150list[k]>0 &&high160list[k]==0){gaoyazhonglist=[high135list,high140list,high145list,high150list,]}else if(high160list[k]>0){
            gaoyadalist=[high140list,high145list,high150list,high160list]
         }else{
            gaoyaxiaolist=[high130list,high135list,high140list,high145list]
         }
       
         }
         if(gaoyadalist.length>0){
           linshi= [
                
            {
                name: '高压≥140',
                type: 'bar',
                // barWidth: '0%',
                // barGap: 0,
                color:'#00ff00',
                data: [...high140list]
            },
              {
                name: '高压≥145',
                type: 'bar',
                // barWidth: '0%',
                color:'#ffff00',
                data: [...high145list]
            },
            {
                name: '高压≥150',
                type: 'bar',
                // barWidth: '0%',
                color:'#FF6100',
                data: [...high150list]
            },
            {
                name: '高压≥160',
                type: 'bar',
                // barWidth: '0%',
                color:'#ff0000',
                data: [...high160list]
            }
          
            
            ]
        } else if (gaoyazhonglist.length>0){
            linshi= [
               
                {
                    name: '高压≥135',
                    type: 'bar',
                    // barWidth: '0%',
                    color:'#008c8c',
                    data: [...high135list]
                },
                {
                    name: '高压≥140',
                    type: 'bar',
                    // barWidth: '0%',
                    color:'#00ff00',
                    data: [...high140list]
                },
                {
                    name: '高压≥145',
                    type: 'bar',
                    // barWidth: '0%',
                    color:'#ffff00',
                    data: [...high145list]
                },
                {
                    name: '高压≥150',
                    type: 'bar',
                    // barWidth: '0%',
                    // barGap: 0,
                    color:'#FF6100',
                    data: [...high150list]
                }
            
            ]
        }else{
            linshi= [
                {
                    name: '高压≥130',
                    type: 'bar',
                    // barWidth: '0%',
                    // barGap: 0,
                    color:'#0000ff',
                    data: [...high130list]
                },
                  {
                    name: '高压≥135',
                    type: 'bar',
                    // barWidth: '0%',
                    color:'#008c8c',
                    data: [...high135list]
                },
                {
                    name: '高压≥140',
                    type: 'bar',
                    // barWidth: '0%',
                    color:'#00ff00',
                    data:[...high140list]
                },
                {
                    name: '高压≥145',
                    type: 'bar',
                    // barWidth: '0%',
                    color:'#ffff00',
                    data: [...high145list]
                }
            
            ]
        }
    if(mylistxiao.length>0){
     
            temp= [
            {
                name: '低压≥80',
                type: 'bar',
                // barWidth: '20%',
                color:'#008c8c',
                barGap: 0,
                data: [...low80list]
            },
              {
                name: '低压≥85',
                type: 'bar',
                // barWidth: '20%',
                color:'#00ff00',
                data: [...low85list]
            },
            {
                name: '低压≥90',
                type: 'bar',
                // barWidth: '20%',
                color:'#ffff00',
                barGap: 0,
                data: [...low90list]
            }
        
        ]
    } else if (mylistzhong.length>0){
        temp= [
           
              {
                name: '低压≥85',
                type: 'bar',
                // barWidth: '20%',
                color:'#00ff00',
                data: [...low85list]
            },
            {
                name: '低压≥90',
                type: 'bar',
                // barWidth: '20%',
                color:'#ffff00',
                barGap: 0,
                data: [...low90list]
            },
            {
              name: '低压≥93',
              type: 'bar',
              // barWidth: '20%',
              color:'#FF6100',
              data: [...low93list]
          }
        
        ]
    }else{
       temp= [
            
         
            {
                name: '低压≥90',
                type: 'bar',
                // barWidth: '20%',
                color:'#ffff00',
                barGap: 0,
                data: [...low90list]
            },
              {
                name: '低压≥93',
                type: 'bar',
                // barWidth: '20%',
                color:'#FF6100',
                data: [...low93list]
            },
            {
                name: '低压≥95',
                type: 'bar',
                // barWidth: '20%',
                color:'#ff0000',
                data: [...low95list]
            }
        
        ]
    }

    option = {
        title: {
            left: 'center',
            text: zhuzhuangtu,
        },
        // color: temp,
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' 丨 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
            //    dataView: {readOnly: false},
                saveAsImage: {}
            }
        },
        xAxis: [
            {
                type: 'category',
                data: [...time],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series:  [
         
         ...linshi
        ]
    };
    
   
    myChart.setOption(option,{
        notMerge: true,
        lazyUpdate: false,
        silent: false
    })
    
}
function jiduniandudiya (low80list,low85list,low90list,low93list,low95list,name,zhuzhuangtu){
    var myChart = echarts.init($(`.${name}`)[0]);
    
        
    var time=[1,2,3,4,5,6,7,8,9,10,11,12]
        var temp  =[]
var mylistda=[]
var mylistzhong=[]
var gaoyadalist=[]
var gaoyazhonglist=[]
var gaoyaxiaolist=[]
var linshi=[]
var shuju=[]
temp=[]
    for(let i =0;i<low95list.length;i++){
 if(low95list[i]>0){
mylistda=[low90list,low93list,low95list]
 } else if (low93list[i]>0 &&low95list[i] ==0){
    mylistzhong=[low85list,low90list,low93list]
 }else{
    mylistxiao=[low80list,low85list,low90list]
 }
    }
    for(let k =0;k<high160list.length;k++){
        if(high150list[k]>0 &&high160list[k]==0){gaoyazhonglist=[high135list,high140list,high145list,high150list,]}else if(high160list[k]>0){
            gaoyadalist=[high140list,high145list,high150list,high160list]
         }else{
            gaoyaxiaolist=[high130list,high135list,high140list,high145list]
         }
       
         }
         if(gaoyadalist.length>0){
           linshi= [
                
            {
                name: '高压≥140',
                type: 'bar',
                // barWidth: '0%',
                // barGap: 0,
                color:'#00ff00',
                data: [...high140list]
            },
              {
                name: '高压≥145',
                type: 'bar',
                // barWidth: '0%',
                color:'#ffff00',
                data: [...high145list]
            },
            {
                name: '高压≥150',
                type: 'bar',
                // barWidth: '0%',
                color:'#FF6100',
                data: [...high150list]
            },
            {
                name: '高压≥160',
                type: 'bar',
                // barWidth: '0%',
                color:'#ff0000',
                data: [...high160list]
            }
          
            
            ]
        } else if (gaoyazhonglist.length>0){
            linshi= [
               
                {
                    name: '高压≥135',
                    type: 'bar',
                    // barWidth: '0%',
                    color:'#008c8c',
                    data: [...high135list]
                },
                {
                    name: '高压≥140',
                    type: 'bar',
                    // barWidth: '0%',
                    color:'#00ff00',
                    data: [...high140list]
                },
                {
                    name: '高压≥145',
                    type: 'bar',
                    // barWidth: '0%',
                    color:'#ffff00',
                    data: [...high145list]
                },
                {
                    name: '高压≥150',
                    type: 'bar',
                    // barWidth: '0%',
                    // barGap: 0,
                    color:'#FF6100',
                    data: [...high150list]
                }
            
            ]
        }else{
            linshi= [
                {
                    name: '高压≥130',
                    type: 'bar',
                    // barWidth: '0%',
                    // barGap: 0,
                    color:'#0000ff',
                    data: [...high130list]
                },
                  {
                    name: '高压≥135',
                    type: 'bar',
                    // barWidth: '0%',
                    color:'#008c8c',
                    data: [...high135list]
                },
                {
                    name: '高压≥140',
                    type: 'bar',
                    // barWidth: '0%',
                    color:'#00ff00',
                    data:[...high140list]
                },
                {
                    name: '高压≥145',
                    type: 'bar',
                    // barWidth: '0%',
                    color:'#ffff00',
                    data: [...high145list]
                }
            
            ]
        }
    if(mylistda.length>0){
        temp= [
            
         
            {
                name: '低压≥90',
                type: 'bar',
                // barWidth: '20%',
                color:'#ffff00',
                barGap: 0,
                data: [...low90list]
            },
              {
                name: '低压≥93',
                type: 'bar',
                // barWidth: '20%',
                color:'#FF6100',
                data: [...low93list]
            },
            {
                name: '低压≥95',
                type: 'bar',
                // barWidth: '20%',
                color:'#ff0000',
                data: [...low95list]
            }
        
        ]
    } else if (mylistzhong.length>0){
        temp= [
           
              {
                name: '低压≥85',
                type: 'bar',
                // barWidth: '20%',
                color:'#00ff00',
                data: [...low85list]
            },
            {
                name: '低压≥90',
                type: 'bar',
                // barWidth: '20%',
                color:'#ffff00',
                barGap: 0,
                data: [...low90list]
            },
            {
              name: '低压≥93',
              type: 'bar',
              // barWidth: '20%',
              color:'#FF6100',
              data: [...low93list]
          }
        
        ]
    }else{
        temp= [
            {
                name: '低压≥80',
                type: 'bar',
                // barWidth: '20%',
                color:'#008c8c',
                barGap: 0,
                data: [...low80list]
            },
              {
                name: '低压≥85',
                type: 'bar',
                // barWidth: '20%',
                color:'#00ff00',
                data: [...low85list]
            },
            {
                name: '低压≥90',
                type: 'bar',
                // barWidth: '20%',
                color:'#ffff00',
                barGap: 0,
                data: [...low90list]
            }
        
        ]
    }

    option = {
        title: {
            left: 'center',
            text: zhuzhuangtu,
        },
        // color: temp,
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' 丨 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
            //    dataView: {readOnly: false},
                saveAsImage: {}
            }
        },
        xAxis: [
            {
                type: 'category',
                data: [...time],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series:  [
         
         ...temp
        ]
    };
    
   
    myChart.setOption(option,{
        notMerge: true,
        lazyUpdate: false,
        silent: false
    })
    
}
function jiduniandugaoya (high130list,high135list,high140list,high145list,high150list,high160list,name,zhuzhuangtu){
    var myChart = echarts.init($(`.${name}`)[0]);
    
        
    var time=[1,2,3,4,5,6,7,8,9,10,11,12]
        var temp  =[]
var mylistda=[]
var mylistzhong=[]
var mylistxiao=[]
var gaoyadalist=[]
var gaoyazhonglist=[]
var gaoyaxiaolist=[]
var linshi=[]
var shuju=[]
temp=[]
    for(let i =0;i<low95list.length;i++){
 if(low95list[i]>0){
mylistda=[low90list,low93list,low95list]
 } else if (low93list[i]>0 &&low95list[i] ==0){
    mylistzhong=[low85list,low90list,low93list]
 }else{
    mylistxiao=[low80list,low85list,low90list]
 }
    }
    for(let k =0;k<high160list.length;k++){
        if(high150list[k]>0 &&high160list[k]==0){gaoyazhonglist=[high135list,high140list,high145list,high150list,]}else if(high160list[k]>0){
            gaoyadalist=[high140list,high145list,high150list,high160list]
         }else{
            gaoyaxiaolist=[high130list,high135list,high140list,high145list]
         }
       
         }
         if(gaoyadalist.length>0){
           linshi= [
                
            {
                name: '高压≥140',
                type: 'bar',
                // barWidth: '0%',
                // barGap: 0,
                color:'#00ff00',
                data: [...high140list]
            },
              {
                name: '高压≥145',
                type: 'bar',
                // barWidth: '0%',
                color:'#ffff00',
                data: [...high145list]
            },
            {
                name: '高压≥150',
                type: 'bar',
                // barWidth: '0%',
                color:'#FF6100',
                data: [...high150list]
            },
            {
                name: '高压≥160',
                type: 'bar',
                // barWidth: '0%',
                color:'#ff0000',
                data: [...high160list]
            }
          
            
            ]
        } else if (gaoyazhonglist.length>0){
            linshi= [
               
                {
                    name: '高压≥135',
                    type: 'bar',
                    // barWidth: '0%',
                    color:'#008c8c',
                    data: [...high135list]
                },
                {
                    name: '高压≥140',
                    type: 'bar',
                    // barWidth: '0%',
                    color:'#00ff00',
                    data: [...high140list]
                },
                {
                    name: '高压≥145',
                    type: 'bar',
                    // barWidth: '0%',
                    color:'#ffff00',
                    data: [...high145list]
                },
                {
                    name: '高压≥150',
                    type: 'bar',
                    // barWidth: '0%',
                    // barGap: 0,
                    color:'#FF6100',
                    data: [...high150list]
                }
            
            ]
        }else{
            linshi= [
                {
                    name: '高压≥130',
                    type: 'bar',
                    // barWidth: '0%',
                    // barGap: 0,
                    color:'#0000ff',
                    data: [...high130list]
                },
                  {
                    name: '高压≥135',
                    type: 'bar',
                    // barWidth: '0%',
                    color:'#008c8c',
                    data: [...high135list]
                },
                {
                    name: '高压≥140',
                    type: 'bar',
                    // barWidth: '0%',
                    color:'#00ff00',
                    data:[...high140list]
                },
                {
                    name: '高压≥145',
                    type: 'bar',
                    // barWidth: '0%',
                    color:'#ffff00',
                    data: [...high145list]
                }
            
            ]
        }
    if(mylistxiao.length>0){
     
            temp= [
            {
                name: '低压≥80',
                type: 'bar',
                // barWidth: '20%',
                color:'#008c8c',
                barGap: 0,
                data: [...low80list]
            },
              {
                name: '低压≥85',
                type: 'bar',
                // barWidth: '20%',
                color:'#00ff00',
                data: [...low85list]
            },
            {
                name: '低压≥90',
                type: 'bar',
                // barWidth: '20%',
                color:'#ffff00',
                barGap: 0,
                data: [...low90list]
            }
        
        ]
    } else if (mylistzhong.length>0){
        temp= [
           
              {
                name: '低压≥85',
                type: 'bar',
                // barWidth: '20%',
                color:'#00ff00',
                data: [...low85list]
            },
            {
                name: '低压≥90',
                type: 'bar',
                // barWidth: '20%',
                color:'#ffff00',
                barGap: 0,
                data: [...low90list]
            },
            {
              name: '低压≥93',
              type: 'bar',
              // barWidth: '20%',
              color:'#FF6100',
              data: [...low93list]
          }
        
        ]
    }else{
       temp= [
            
         
            {
                name: '低压≥90',
                type: 'bar',
                // barWidth: '20%',
                color:'#ffff00',
                barGap: 0,
                data: [...low90list]
            },
              {
                name: '低压≥93',
                type: 'bar',
                // barWidth: '20%',
                color:'#FF6100',
                data: [...low93list]
            },
            {
                name: '低压≥95',
                type: 'bar',
                // barWidth: '20%',
                color:'#ff0000',
                data: [...low95list]
            }
        
        ]
    }

    option = {
        title: {
            left: 'center',
            text: zhuzhuangtu,
        },
        // color: temp,
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' 丨 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
            //    dataView: {readOnly: false},
                saveAsImage: {}
            }
        },
        xAxis: [
            {
                type: 'category',
                data: [...time],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series:  [
         
         ...linshi
        ]
    };
    
   
    myChart.setOption(option,{
        notMerge: true,
        lazyUpdate: false,
        silent: false
    })
    
}
function xinzengtest(list1,list2,list3,list4,list5,time,name){
    var myChart = echarts.init($(`.${name}`)[0]);
    console.log(list1)
    console.log(list2)
    console.log(list3)
    console.log(list4)
    console.log(list5)

var temp  =[]
var mylistda=[]
var mylistzhong=[]
var mylistxiao=[]
temp=[]
    for(let i =0;i<list1.length;i++){
 if(list5[i]>0){
mylistda=[list3,list4,list5]
 } else if (list4[i]>0 &&list5[i] ==0){
    mylistzhong=[list2,list3,list4]
 }else{
    mylistxiao=[list1,list2,list3]
 }
    }
    if(mylistda.length>0){
        temp= [
            
         
            {
                name: '低压≥90',
                type: 'bar',
                // barWidth: '20%',
                color:'#ffff00',
                barGap: 0,
                data: [...list3]
            },
              {
                name: '低压≥93',
                type: 'bar',
                // barWidth: '20%',
                color:'#FF6100',
                data: [...list4]
            },
            {
                name: '低压≥95',
                type: 'bar',
                // barWidth: '20%',
                color:'#ff0000',
                data: [...list5]
            }
        
        ]
    } else if (mylistzhong.length>0){
        temp= [
           
              {
                name: '低压≥85',
                type: 'bar',
                // barWidth: '20%',
                color:'#00ff00',
                data: [...list2]
            },
            {
                name: '低压≥90',
                type: 'bar',
                // barWidth: '20%',
                color:'#ffff00',
                barGap: 0,
                data: [...list3]
            },
            {
              name: '低压≥93',
              type: 'bar',
              // barWidth: '20%',
              color:'#FF6100',
              data: [...list4]
          }
        
        ]
    }else{
        temp= [
            {
                name: '低压≥80',
                type: 'bar',
                // barWidth: '20%',
                color:'#008c8c',
                barGap: 0,
                data: [...list1]
            },
              {
                name: '低压≥85',
                type: 'bar',
                // barWidth: '20%',
                color:'#00ff00',
                data: [...list2]
            },
            {
                name: '低压≥90',
                type: 'bar',
                // barWidth: '20%',
                color:'#ffff00',
                barGap: 0,
                data: [...list3]
            }
        
        ]
    }
    option = {
        title: {
            left: 'center',
            text: '低压柱状图',
        },
        // color: temp,
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' 丨 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
            //    dataView: {readOnly: false},
                saveAsImage: {}
            }
        },
        xAxis: [
            {
                type: 'category',
                data: [...time],
                // data: [1,2,3,4,5],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series:temp
        
    };
    myChart.setOption(option,{
        notMerge: true,
        lazyUpdate: false,
        silent: false
    })
}
 function renderbaifenbiTable(data) {
                 var keylist=[]
    
    listitem=[]
            // //console.log(data)
        for(const key in data) {
  keylist.push(key)
  
 // //console.log(key)
}
// //console.log(keylist)
for(let i=0;i<keylist.length;i++){
    // //console.log( data[keylist[i]])
    listitem.push(data[keylist[i]])
    // renderbaifenbiTable(listitem);
   
 
    }
    var str = '';
    listitem.map(function (item, index) {
if(parseInt(item.highOne)>0){
    item.highOne+='%'
}
if(parseInt(item.highTwo)>0){
    item.highTwo+='%'
}
if(parseInt(item.highThree)>0){
    item.highThree+='%'
}
if(parseInt(item.highFour)>0){
    item.highFour+='%'
}
if(parseInt(item.lowOne)>0){
    item.lowOne+='%'
}
if(parseInt(item.lowTwoe)>0){
    item.lowTwo+='%'
}
if(parseInt(item.lowThree)>0){
    item.lowThree+='%'
}
if(parseInt(item.highTotal)>0){
    item.highTotal+='%'
}
if(parseInt(item.lowTotal)>0){
    item.lowTotal+='%'
}
        str += `<tr>
        <td>${item.time}</td>
        <td class="td">${item.highOne}</td>
        <td class="td">${item.highTwo}</td>
        <td class="td">${item.highThree}</td>
        <td class="td">${item.highFour}</td>
        <td class="td">${item.lowOne}</td>
        <td class="td">${item.lowTwo}</td>
        <td class="td">${item.lowThree}</td>
        <td class="td">${item.highTotal}</td>
        <td class="td">${item.lowTotal}</td>
      
    </tr> `
    
    
    });
    $('#table-body17').html(str);

var mytd =document.querySelectorAll(".td")
//console.log(mytd)
for(let i=0;i<mytd.length;i++){
   
    if(parseInt(mytd[i].innerText)>0){
        mytd[i].classList.add("mystyle")
        mytd[i].innerText + "%"
       }
        }
    
   
    // $('#page').turnpage({
    //     current: current,
    //     total: total,
    //     callback: function (page) {
    //         current = page;
    //         getTableData(startTime)

    //     }
    // })
}
// function getbaifenbiTableData(startTime='',endTime='') {
//     // 过滤表格数据
   
//         transferData('/blood/pressure/percentage', {
            
//             startTime:startTime,
//             endTime:endTime,
//             type:2
//         }, function (data) {
//             // 保存表格数据
//             // tableData = data.findByPage;
//             // total = Math.ceil(data.cont / pageSize);
//             // renderTable(data.findByPage);
//             // tableData = data;
        
//             // total = Math.ceil(data.length/ pageSize);
// //             var keylist=[]
// //             highOnelist=[]
// //     highTwolist=[]
// //     highThreelist=[]
// //     highFourlist=[]
// //     lowOnelist=[]
// //     lowTwolist=[]
// //     lowThreelist=[]
// //     highTotallist=[]
// //     lowTotallist=[]
// //     listitem=[]
// //             // //console.log(data)
// //         for(const key in data) {
// //   keylist.push(key)
  
// //  // //console.log(key)
// // }
// // // //console.log(keylist)
// // for(let i=0;i<keylist.length;i++){
// //     // //console.log( data[keylist[i]])
// //     listitem.push(data[keylist[i]])
// //     // //console.log(listitem)
// //     
    
// //     }
// renderbaifenbiTable(data);
  
//         });
   

// }
// getbaifenbiTableData()
// `highOne: 0.2
// highTwo: 0.2
// highThree: 0.2
// highFour: 0.2
// lowOne: 0.6
// lowTwo: 0.2
// lowThree: 0.2
// highTotal: 0.8
// lowTotal: 1`
// /blood/pressure/screen
// function getgaodiya1TableData(startTime='') {
//     // 过滤表格数据
   
//         transferData('/blood/pressure/screen', {
            
//             startTime:startTime,
//             // endTime:endTime,
//             type:1
//         }, function (data) {
//             // 保存表格数据
//             // tableData = data.findByPage;
//             // total = Math.ceil(data.cont / pageSize);
//             // renderTable(data.findByPage);
//             // tableData = data;
        
//             // total = Math.ceil(data.length/ pageSize);
// //             var keylist=[]
    
// //     listitem=[]
// //             // //console.log(data)
// //         for(const key in data) {
// //   keylist.push(key)
  
// //  // //console.log(key)
// // }
// // // //console.log(keylist)
// // for(let i=0;i<keylist.length;i++){
// //     // //console.log( data[keylist[i]])
// //     listitem.push(data[keylist[i]])
// //     // renderbaifenbiTable(listitem);
// //     rendergaodiyaTable(listitem)
 
// //     }
//     // // //console.log(listitem)
//     rendergaodiyaTable(data)
//         });
   

// }
// getgaodiya1TableData()
//    `highMax: 0
    //    highSmall: 0
    //    highIntermediate: null
    //    lowMax: 0
    //    lowSmall: 0
    //    lowIntermediate: null
    //    heartRateMax: 0
    //    heartRateSmall: 0
    //    heartRateIntermediate`
function rendergaodiyaTable(data) {
                var keylist=[]
    
    listitem=[]
            // // //console.log( typeof data)
            // const map =new Map(Object.keys(data),Object.values(data))
            // // //console.log(map)
            // for (const iterator of data) {
            //     // //console.log(iterator)
            // }
//             for(let i=0;i<data.length;i++){
// // //console.log(i)
//             }
            // // //console.log(Object.values(data))
        for(const key in data) {
  keylist.push(key)
  
 // //console.log(key)
}
// //console.log(keylist)
for(let i=0;i<keylist.length;i++){
    // //console.log( data[keylist[i]])
    listitem.push(data[keylist[i]])
    
   
 
    }
   const ary =[...keylist,...listitem]
   // //console.log(ary)
    
    var str = '';
  
    ary.forEach(function (item, index,array) {
        // //console.log(array)
        if(Object.prototype.toString.call(item)==='[object Object]'){
            if(!item.highMax){
                item.highMax=0
            }
            if(!item.highSmall){
                item.highSmall=0
            }  if(!item.highIntermediate){
                item.highIntermediate=0
            }  if(!item.lowMax){
                item.lowMax=0
            }  if(!item.lowSmall){
                item.lowSmall=0
            }  if(!item.lowIntermediate){
                item.lowIntermediate=0
            }  if(!item.heartRateMax){
                item.heartRateMax=0
            }  if(!item.heartRateSmall){
                item.heartRateSmall=0
            }  if(!item.heartRateIntermediate){
                item.heartRateIntermediate=0
            }
            str += `<tr>
            <td>${item.time}</td>
            <td class="td">${item.highMax}</td>
            <td class="td">${item.highSmall}</td>
            <td class="td">${item.highIntermediate}</td>
            <td class="td">${item.lowMax}</td>
            <td class="td">${item.lowSmall}</td>
            <td class="td">${item.lowIntermediate}</td>
            <td class="td">${item.heartRateMax}</td>
            <td class="td">${item.heartRateSmall}</td>
            <td class="td">${item.heartRateIntermediate}</td>
          
        </tr> `
        }
       
    });
   
    $('#table-body20').html(str);
    var mytd =document.querySelectorAll(".td")
    //console.log(mytd)
    for(let i=0;i<mytd.length;i++){
        //console.log(mytd[i].innerText)
        // mytd[i].innerText + "%"
        if(parseInt(mytd[i].innerText)>0){
            mytd[i].classList.add("mystyle")
            // $('.mystyle').text()+'%'
            
           }
            }
           
    // $('#page').turnpage({
    //     current: current,
    //     total: total,
    //     callback: function (page) {
    //         current = page;
    //         getTableData(startTime)

    //     }
    // })
}
function getbaifenbiTableDatashijian(startTime='') {
    // 过滤表格数据
   
        transferData('/blood/pressure/percentage', {
            
            startTime:startTime,
            // endTime:endTime,
            type:1
        }, function (data) {
            // 保存表格数据
            // tableData = data.findByPage;
            // total = Math.ceil(data.cont / pageSize);
            // renderTable(data.findByPage);
            // tableData = data;
        
            // total = Math.ceil(data.length/ pageSize);
//             var keylist=[]
//             highOnelist=[]
//     highTwolist=[]
//     highThreelist=[]
//     highFourlist=[]
//     lowOnelist=[]
//     lowTwolist=[]
//     lowThreelist=[]
//     highTotallist=[]
//     lowTotallist=[]
//     listitem=[]
//             // //console.log(data)
//         for(const key in data) {
//   keylist.push(key)
  
//  // //console.log(key)
// }
// // //console.log(keylist)
// for(let i=0;i<keylist.length;i++){
//     // //console.log( data[keylist[i]])
//     listitem.push(data[keylist[i]])
//     // //console.log(listitem)
   
   
//     }
 renderbaifenbiTable(data.data);
  
        });
   

}
// getbaifenbiTableDatashijian()
function getgaodiyashijianTableData(startTime='') {
    // 过滤表格数据
   
        transferData('/blood/pressure/screen', {
            
            startTime:startTime,
            // endTime:endTime,
            type:1
        }, function (data) {
            // 保存表格数据
            // tableData = data.findByPage;
            // total = Math.ceil(data.cont / pageSize);
            // renderTable(data.findByPage);
            // tableData = data;
        
            // total = Math.ceil(data.length/ pageSize);
//             var keylist=[]
    
//     listitem=[]
//             // //console.log(data)
//         for(const key in data) {
//   keylist.push(key)
  
//  // //console.log(key)
// }
// // //console.log(keylist)
// for(let i=0;i<keylist.length;i++){
//     // //console.log( data[keylist[i]])
//     listitem.push(data[keylist[i]])
//     
//    
 
//     }
//     // //console.log(listitem)
rendergaodiyaTable(data.data)
        });
   

}
// getgaodiyashijianTableData()
// $('#table-body').on('click', '.edit', function (e) {
//     // 编辑弹框显示
    
//     $('#modal').slideDown();
//     // 回填编辑弹框内表单数据
//     var index = $(this).parents('tr').index();
//     //(index)
//     renderEditForm(tableData[index]);
//     //(tableData[index])
// //         transferData('/blood/pressure/detail',{
// // detailId:
// //         })
// detail = tableData[index].detailId
// //(detail)
//     // //(tableData)
// //  hjp=   sessionStorage.setItem('index',index)
//     // 删除按钮点击事件
// }).on('click', '.del', function (e) {
//     // 删除的索引
//     var index = $(this).parents('tr').index();
//     //(index)
//     // 确认删除弹框
//     var isDel = confirm('确认删除ID为' + tableData[index].detailId );
//     if (true) {
//         // 删除信息
//         transferData('/blood/pressure/delete', {
//             // detailId: data.detailId
//             detailId: tableData[index].detailId 
//         }, function (res) {
//             alert('删除成功');
//             // // 获取最新数据
//             // $('#menu-list > dd[data-id=student-list]').click();
//             getTableData();
//             // renderEditForm(tableData[index])
//         })
//     }
// });
// // 点击遮罩层编辑弹框消失
// $('#mask').click(function () {
//     $('#modal').slideUp();
// });
// // 编辑表单提交
// $('#submit').click(function (e) {
//     e.preventDefault();
//     var data = $('#edit-form').serializeArray();
//     data = formatData(data);
//     // var index = $(this).parents('tr').index();
//     //(data)
//     //(e)
//     // //(index)
//     // const index = hjp
 
    
//     // renderEditForm(tableData[index]);
//     // //(tableData[index])
//     if (!data) {
//         alert('请将信息填写完全后提交');
//     } else {
//         transferData('/blood/pressure/update',  {
//             // detailId: data.detailId,
//             detailId: detail ,
//             highPressure: data.highPressure,
//             lowPressure: data.lowPressure,
//             heartRate: data.heartRate



//         }, function (res) {
//             alert('提交成功');
//             $('#modal').slideUp();
//             // $('#menu-list > dd[data-id=student-list]').click();
//             getTableData();
//         });
//     }
// });
function getRandomColor(){
                var colorArr = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
                var color = "";
                for(var i = 0; i < 6; i++){
                    color += colorArr[Math.floor(Math.random()*15)];
                }
                colorarray.push("#"+color);
            }
    
    
   