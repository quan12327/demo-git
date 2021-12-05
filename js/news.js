function mDropdown() {
    let x = document.getElementById("m-nav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function clickDropNew(){
      let x = document.getElementsByClassName("active");
      if(x[0].style.display ==="block" )
          x[0].style.display ="none";
      else
          x[0].style.display ="block"
  }

  function clickDropInfo(){
      let x = document.getElementsByClassName("active");
      if(x[1].style.display ==="block" )
          x[1].style.display ="none";
      else
          x[1].style.display ="block"
  }

  const swiper = new Swiper('.swiper', {
      watchSlidesProgress: true,
      slidesPerView: 2.5,
          scrollbar: {
              el: '.swiper-scrollbar',
          },
      });

      const infoArray = [
        {
            aLink:"#",
            srcImg:"Debonair_Brand_Prestige_Final_avatar",
            category:"Tin Game",
            tilte:"Thay đổi Cơ chế tính Điểm Nhiệm Vụ trong các Sự Kiện Liên Minh",
            desc:"Hệ thống tính điểm trong các nhiệm vụ sẽ thay đổi. Hãy tìm hiểu để biết cách nhận được nhiều điểm nhất nhé!",
            time:"01:00 04/12/2021",
        },
    
        {
            aLink:"#",
            srcImg:"10-202112-TiecBanhMlemMlem-880x582",
            category:"Sự Kiện",
            tilte:"Sở hữu sớm các trang phục siêu ngọt ngào này nào!",
            desc:"Hệ thống tính điểm trong các nhiệm vụ sẽ thay đổi. Hãy tìm hiểu để biết cách nhận được nhiều điểm nhất nhé!",
            time:"10:00 03/12/2021",
        },
        
        {
            aLink:"#",
            srcImg:"139-202111-Cafecuties-Congbo-880x582",
            category:"Mở Bán",
            tilte:"Ra mắt các trang phục Tiệc Trà Ngọt Ngào cùng biểu tượng, biểu cảm, đa sắc từ 03/12",
            desc:"Ngọt ngào quá đi.",
            time:"10:00 03/12/2021",
        },
    
        {
            aLink:"#",
            srcImg:"202112-011-SieuThiLienMinh-880x582",
            category:"Sự Kiện",
            tilte:"Tham gia 'Siêu Thị Liên Minh' - Mua 3 món, giảm ngay 50% từ 03/12 đến 09/12",
            desc:"Cơ hội sở hữu rất nhiều vật phẩm, trang phục đẹp với ưu đãi 50%.",
            time:"10:00 03/12/2021",
        },
    
        {
            aLink:"#",
            srcImg:"009-202112-Quydoidatmoc-880x582",
            category:"Tin Game",
            tilte:"Quy đổi RP - Nhận MIỄN PHÍ báu vật Chiến Binh Rồng 2021 cực kỳ giá trị từ 00:30 03/12 đến 23:59 09/12",
            desc:"Còn chờ gì nữa mà không quy đổi để nhận ngay các báu vật Rồng!",
            time:"00:30 03/12/2021",
        },
    
        {
            aLink:"#",
            srcImg:"Silco-avatar",
            category:"Tin Game",
            tilte:"Cập nhật Thông tin ĐTCL Giữa Mùa: Silco sẽ tham gia vào trận chiến!",
            desc:"Silco, phản diện nhận được nhiều sự quan tâm trong series Arcane sẽ có mặt trong ĐTCL.",
            time:"23:00 01/12/2021",
        },
    ];
    
    function initList(infoArray) {
        let lengthOfA = infoArray.length;
        let list = document.getElementById("info");
        
        for (let i = 0; i < lengthOfA; i++) {
          let div = document.createElement("div");
          div.className = "info-box";
    
          let a = document.createElement("a");
          a.href ="#";
          a.className = "link";
    
          let svg = document.createElement("svg");
          svg.viewBox ="0 0 320 240";
    
          let path = document.createElement("path");
          path.d ="M299.57,1l19.42,19.39V239h-318V1H299.57";
          path.appendChild(svg);
    
          let img = document.createElement("img");
          img.src = "img/info/" + infoArray[i].srcImg + ".jpg"

          let textBox = document.createElement("div");
          textBox.className="text-box";

          let category = document.createElement("p");
          category.innerHTML = infoArray[i].category;
          category.className="category";
    
          let h2 = document.createElement("h2");
          h2.innerHTML = infoArray[i].tilte;
    
          let desc = document.createElement("p");
          desc.innerHTML = infoArray[i].desc;
          desc.className ="text";
    
          let time = document.createElement("p");
          time.innerHTML = infoArray[i].time;
          time.className = "time";

          textBox.appendChild(category);
          textBox.appendChild(h2);
          textBox.appendChild(desc);
          textBox.appendChild(time);

          div.appendChild(a);
          div.appendChild(svg);
          div.appendChild(img);
          div.appendChild(textBox);
    
          list.appendChild(div);
        }
      }
      
    initList(infoArray);

    function clearList() {
        let nodes = document.getElementById("info").children;
        while (nodes.length > 0) {
          nodes[0].remove();
        }
      }
      
      const search = () =>{
        let keyword;
        let lowKeyword;
        let lowTilte;
        let result = [];
        let input = document.querySelector('input');
        let lengthOfA = infoArray.length;
      
        input.addEventListener('keydown',(e)=>{
          if(e.key === 'Enter'){
            result = [];
            keyword = e.target.value;
                  if(keyword === "");
            lowKeyword = keyword.toLocaleLowerCase();
            for(let i = 0; i < lengthOfA ; i++){
                lowTilte = infoArray[i].tilte.toLocaleLowerCase();
              if(lowTilte.includes(lowKeyword)) result.push(infoArray[i])
            }
      
            clearList();
            initList(result);
            }
        })
          
      }
      