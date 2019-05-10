var item_list2 = document.getElementById('item_list')
var shoplist={};
shoplist.name="MyBuylist 購物清單";
shoplist.time="2018/02/05";
shoplist.list=[
  {name: "斷掉的劍",price: 300},
  {name: "HP藥水(大)",price: 9000},
  {name: "技能卷軸(超級宇宙無敵雷射霹靂火焰機械閃電拳)",price: 54555},
  {name: "萌萌的東西",price: 32000},
  {name: "看起來有用但其實沒用的神祕物品",price: 5000},
];

var item_html="<li id={{id}} class='buy_item'>{{num}}. {{item}}<div class='price'>{{price}}</div><div id={{del_id}} data-del-id='{{delid}}' class='del_btn'>X</div></li>";

var total_html="<li class='buy_item total'>總價<div class='price'>{{price}}</div></li>";

function showlist(){
  $("#item_list").html("");
  // 定義總和價格計算方式
  var total_price=0;
  // 令i等於陣列項目數，初始等於0，直到陣列長度(項目數)為止，每次i+1。  
    // 令item等於shoplist.list陣列中的第i項。
  for(var i=0;i<shoplist.list.length;i++){
    var item=shoplist.list[i];
    var item_id="buyitem_"+i;
    var del_item_id="del_buyitem_"+i;
    
    total_price+=parseInt(item.price);
    
    var current_item_html=
        item_html.replace("{{num}}",i+1)
                 .replace("{{item}}",item.name)
                 .replace("{{id}}",item_id)
                 .replace("{{del_id}}",del_item_id)
                 .replace("{{price}}",item.price)
                 .replace("{{delid}}",i)
    ;
    console.log(item_list2)
    // 增加到選單中
    $("#item_list").append(current_item_html);
    $("#"+del_item_id).click(
      function(){
        remove_item(parseInt($(this).attr("data-del-id")));
      }
    );
  }
  var current_total_html=
      total_html.replace("{{price}}",total_price);
  $("#item_list").append(current_total_html);
};


showlist();

$(".addbtn").click(
  function(){
    shoplist.list.push(
    {
      name:$("#input_name").val(),
      price:$("#input_price").val()
    }
  );
  $("#input_name").val("");
  $("#input_price").val("");
  showlist();
});

function remove_item(id){
  shoplist.list.splice(id,1);
  showlist();
};