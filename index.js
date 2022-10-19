import {footer} from "./landingPage/Components/footer.js"

document.getElementById("home-footer").innerHTML=footer();




let x = 0;
function sliderLeft(sliderId, data) {
  console.log(sliderId);
  let k = data.length - 1;
  console.log(k);
  x++;
  if (x > 0) {
    x = -k;
  }
  document.getElementById(`${sliderId}`).style.transform = `translateX(${
    x * 100
  }%)`;
}

function sliderRight(sliderId, data) {
  console.log(sliderId);
  let k = data.length - 1;
  console.log(k);
  x--;
  if (x < -k) {
    x = 0;
  }
  document.getElementById(`${sliderId}`).style.transform = `translateX(${
    x * 100
  }%)`;
}

function carousel(data, location, slideBox) {
  let carousel = document.createElement("div");
  carousel.className = "carousel";

  let leftButtondiv = document.createElement("div");
  leftButtondiv.className = "move";
  // let leftbutton = document.createElement("button");
  // leftbutton.innerHTML = "prev";
  leftButtondiv.innerHTML = `<i class="fa-solid fa-circle-arrow-left"></i>`;
  //   leftButtondiv.click(goprev)
  leftButtondiv.addEventListener("click", function () {
    sliderLeft(slideBox, data);
  });
  let outerSlidesBox = document.createElement("div");

  let slides = document.createElement("div");
  slides.id = slideBox;
  slides.className = "slide_outer_img";
  // slides.style.display = "flex"

  outerSlidesBox.className = "slides";

  data.forEach((el) => {
    let img = document.createElement("img");
    img.className = "slide";
    img.src = el;
    slides.append(img);
  });

  let rightbuttondiv = document.createElement("div");
  rightbuttondiv.className = "move";
  let rightbutton = document.createElement("button");
  rightbutton.innerText = "next";
  rightbuttondiv.innerHTML = `<i class="fa-solid fa-circle-arrow-right"></i>`;
  //   rightbuttondiv.click(gonext)
  rightbuttondiv.addEventListener("click", function () {
    sliderRight(slideBox, data);
  });

  outerSlidesBox.append(slides);
  carousel.append(leftButtondiv, outerSlidesBox, rightbuttondiv);
  location.append(carousel);
  //   return carousel;
}

// setTimeout(()=>{

// },2000)

let house_exclusive_coll = [
  "https://sslimages.shoppersstop.com/sys-master/root/h64/h44/28397940703262/web-Smart%20Basics_4-WIDGET_web-3102022.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/ha5/h40/28397940834334/web-marvel_4-WIDGET_web-3102022.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hf7/h3f/28397940899870/web-i-fit-4-WIDGET_web-3102022.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/he6/h3c/28397940965406/app-Smart%20Pants-4-WIDGET-3102022.jpg",
];

let honest_brand_data = [
  "https://sslimages.shoppersstop.com/sys-master/root/h7a/hda/28356842815518/Global-Desi-web20220928_sp.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h3c/hdb/28356842881054/Indya-Web20220928_w-w.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hf4/h65/28356844257310/AND-web20220929_oas.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h4c/hd0/28356843208734/Kraus-web220220928_sso.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h9c/h64/28439758438430/Varanga-web20220111_wo.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h2f/hb8/28356843929630/Myshka-WEb2022929_wows.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h6d/hb7/28356843995166/Rare-Web20220929_wwk.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hb3/h69/28356844126238/Sera-WEb20220929_os.jpg",
  // "https://sslimages.shoppersstop.com/sys-master/root/he1/hc0/28439767187486/LEvis-web_bbznnn_yyyajffgs.jpg",
  // "https://sslimages.shoppersstop.com/sys-master/root/hf2/hc3/28439767253022/Celio-web_bnnzhaa_88829.jpg",
  // "https://sslimages.shoppersstop.com/sys-master/root/hf0/hc6/28439767318558/Pepe-Jeans-web_vbbbz_888ahhj.jpg",
  // "https://sslimages.shoppersstop.com/sys-master/root/hb1/hc7/28439767384094/Spykar-web_bbnzz_9922hsssa.jpg",
  // "https://sslimages.shoppersstop.com/sys-master/root/hb5/h03/28356845240350/TH-Web20220929_sos.jpg",
  // "https://sslimages.shoppersstop.com/sys-master/root/h75/h07/28356845371422/Fossil--eoeWeb2022029.jpg",
  // "https://sslimages.shoppersstop.com/sys-master/root/h32/h0e/28356845568030/Puma-WEb20220929_w0wx.jpg",
  // "https://sslimages.shoppersstop.com/sys-master/root/h02/h15/28356845764638/Lavie-Web20220928_dd.jpg",
];
let honest_brand = document.getElementById("honest_brands");
housedesigngrid(honest_brand_data, honest_brand);

let festive_decor_data = [
  "https://sslimages.shoppersstop.com/sys-master/root/hc7/h4a/28370176802846/app-Kitchen%20_%20Dining%20web_29092022-home.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h5a/h46/28370176999454/app-Appliances%20web_29092022-home.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h73/h07/28370177130526/app-Cushions%20web_29092022-home.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h21/h08/28370177196062/app-Decor%20web_29092022-home.jpg",
];
let festive_decor = document.getElementById("festive_decor");
housedesigngrid(festive_decor_data, festive_decor);

let beauty_staples_data = [
  "https://sslimages.shoppersstop.com/sys-master/root/h2d/h5a/28429751582750/Skinn-web_baaaksbbxmeee.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hb4/hcd/28356864016414/Arcelia-web--2022092829244cosm.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h6f/hce/28429744767006/Yves-Rocher-web_ggabbx_99992ys.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h0c/h67/28429751910430/Colorbar-web_gaaanxbbsooow_77729.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/ha1/he7/28356863950878/BHPC-web--20220928-hp-pages.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hf3/hcc/28356864081950/Mamaearth-web--20220928-2hp-page.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hf5/hc9/28356864147486/Maybelline-web--20220928-php-pag.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h2e/hd2/28429744898078/Loreal-web_ttabbx_882_999bb.jpg",
];
let beauty_staples = document.getElementById("beauty_staples");
housedesigngrid(beauty_staples_data, beauty_staples);

let festive_look_data = [
  "https://sslimages.shoppersstop.com/sys-master/root/h28/h1c/28370177753118/caprese_hidesign_3x3-Widgets29029022_ee.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h8f/h8c/28370178932766/Allen-solly_van-heusen_3x3-Widgets20220929_ldd.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h3d/h8d/28370178998302/emporio-armani_swarosvki_3x3-Widgets20220920_oe.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hf8/hda/28370179129374/tommy-hilfiger_bulchee_3x3-Widgets20220902jw.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hb9/hdb/28370179194910/rayban_opium_3x3-Widgets20220929ddd.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h02/hae/28397952368670/TRESMODE_LEMON-%26-PEPER_3x3-Widgets_bbzmmnxx_8882ggajjsbbs.jpg",
];
let festive_look = document.getElementById("3grid_festive_look1");
design3_grid(festive_look_data, festive_look);

// let color_palette_data = [
//   "https://sslimages.shoppersstop.com/sys-master/root/hea/h0e/28429755973662/Elegant-green20220108_Sowjh.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h94/h59/28429756039198/Royal-Blue20220910_wiiie.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h4b/h6b/28429756596254/Sunshine-yellow20220108_oess.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h19/h75/28429756858398/Refreshing-orange20220107_so.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/hd8/h78/28429756989470/Candy-pink20220107_osis.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/ha6/hc6/28429757120542/Fearless-red20220109_0w.jpg",
// ];
// let color_palette = document.getElementById("3grid_festive_look2");
// design3_grid(color_palette_data, color_palette);

let sweat_data = [
  "https://sslimages.shoppersstop.com/sys-master/root/hf4/hf6/28250969440286/web_PUMA_ADDIDAS_3x3-Widgets_12092022replace.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hb3/hfa/28250969571358/web_alt-life-alcis_3x3Widgets_12092022replace.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h65/h9a/28250976944158/SKECHERS_3x3-Widgets--webs-size-hp--202209-13-dont-miss-textx.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h3d/hff/28250969702430/web_timex_amazefit__3x3-Widgets_12092022replace.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h2a/h85/28250984415262/ivy-wonderchef_3x3-Widgets20220sd913.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h19/h82/28250984349726/fern-maspar_3x3-Widgets20220913_low.jpg",
];
let sweat = document.getElementById("3grid_festive_look3");
design3_grid(sweat_data, sweat);

let for_men_6data = [
  "https://sslimages.shoppersstop.com/sys-master/root/h73/h74/28356846452766/SPYKAR_6-Widgets20220929_ssl.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h1c/h52/28356849303582/PEPE-JEANS_6-Widgets20220929_0.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h8c/h47/28356849631262/ALLEN-SOLLY_6-Widgets2029929sudukw.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hcd/h43/28356849762334/CAMPUS-SUTRA_6-2022092ks.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h67/h3d/28356849926174/CRIUMSOUNE-CLUB_6-Widgets2020292Soo.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/ha6/h3c/28356849991710/celio_6-Widgets20220929_od.jpg",
];
let for_men_6 = document.getElementById("6grid_for_men");

design6_grid(for_men_6data, for_men_6);

let for_women_6data = [
  "https://sslimages.shoppersstop.com/sys-master/root/h2b/he8/28397943226398/LATIN-QUARTER_6-Widgets--web-wom-hp-page-6-banner-20220210.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hea/heb/28397943357470/FOREVER-NEW_6-Widgets-web-wom-hp-page-6-banner-20220210.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hec/he8/28397943291934/ALLEN-SOLLY_6-Widgets%20%281%29-web-wom-hp-page-6-banner-20220210.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hfb/hee/28397943423006/VAN-HEUSEN_6-Widgets-web-wom-hp-page-6-banner-20220210.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/ha9/hef/28397943488542/VERO-MODA_6-Widgets--web-wom-hp-page-6-banner-20220210.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hbb/hf2/28397943554078/PEPE-JEANS_6-Widgets-web-wom-hp-page-6-banner-20220210.jpg",
];
let for_women_6 = document.getElementById("6grid_for_women");

design6_grid(for_women_6data, for_women_6);

let for_Watches_6data = [
  "https://sslimages.shoppersstop.com/sys-master/root/h3b/hee/28369201397790/ARMANI-EXCHANGE_6-Widgets_hhsmmwlkkkiioe_882337.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h2c/he8/28369201528862/DANIEL-WELLINGTON_6-Widgets_ggannmwoiur.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h6d/he4/28369201659934/MICHAEL-KORS_6-Widgets_ggsnnwiirybbc_9977554.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h9c/hdd/28369201856542/JUST-CAVALI_6-Widgets_663vvsjj.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hdd/hd9/28369201987614/TIMEX_6-Widgets_hhhggbnnwir_766348.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hba/h88/28369202216990/GUESS_6-Widgets_gggbbweuiroins%2977.jpg",
];
let for_Watches_6 = document.getElementById("6grid_for_watches");

design6_grid(for_Watches_6data, for_Watches_6);

let for_Home_6data = [
  "https://sslimages.shoppersstop.com/sys-master/root/hf6/h70/28356852023326/spaces_6-Widgets_ggskkwwo_99nbbx.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h39/h6a/28356852219934/SPREAD_6-Widgets_hhhsnnwoophhdgd_656732.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/ha9/h5f/28356852547614/maspar_6-Widgets_bbshhjjwu_9.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h98/h5c/28356852613150/SWAYAM_6-Widgets_hhanw.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hd9/h58/28356852744222/vedas_6-Widgets_gaansjjw_883672.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h19/h55/28356852875294/ELEMENTARY_6-Widgets_hhkkwuubbd_8873.jpg",
];
let for_Home_6 = document.getElementById("6grid_for_home");

design6_grid(for_Home_6data, for_Home_6);

// let for_Footwear_6data = [
//   "https://sslimages.shoppersstop.com/sys-master/root/hb8/hf5/28397943619614/LOUIS-PHILLIPE_6-Widgets---web-foot-neww-20220210-oct-hp.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h7a/hf6/28397943685150/NEW-BALANCE_6-Widgets----web-foot-neww-20220210-oct-hp.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h8b/hf9/28397943750686/LEE-COOPER-6-Widgets---web-foot-neww-20220210-oct-hp.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h89/hfc/28397943816222/ESTATOS_6-Widgets---web-foot-neww-20220210-oct-hp.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h4a/hfd/28397943881758/MODARE_6-Widgets---web-foot-neww-20220210-oct-hp.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/hb7/hff/28397943947294/CERIZ_6-Widgets----web-foot-neww-20220210-oct-hp.jpg",
// ];
// let for_Footwear_6 = document.getElementById("6grid_for_footwear");

// design6_grid(for_Footwear_6data, for_Footwear_6);

// let for_Accessories_6data = [
//   "https://sslimages.shoppersstop.com/sys-master/root/hcc/hb8/28369200873502/IDEE_6-Widgets20220929_e.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/hb7/hf8/28369201070110/SCOTT_6-Widgets20220929_eoee.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h2a/heb/28369201463326/GIO-COLLECTION_6-Widgets20220929_ows.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h6a/he7/28369201594398/SHAYA_6-Widgets2022092029_oe.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h9a/he0/28369201791006/LOUIS-PHILLIPE-6-Widgets20220929_ww.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/hb8/h8b/28369202151454/TITAN_6-Widgets202220929-ww2.jpg",
// ];
// let for_Accessories_6 = document.getElementById("6grid_for_accessories");

// design6_grid(for_Accessories_6data, for_Accessories_6);

// let for_Beauty_6data = [
//   "https://sslimages.shoppersstop.com/sys-master/root/hbe/hd0/28356851302430/faces_nbbbajjw_99.png",
//   "https://sslimages.shoppersstop.com/sys-master/root/h10/hd0/28356851367966/Ajmal_naahsdkkw_88633.png",
//   "https://sslimages.shoppersstop.com/sys-master/root/h51/hcc/28356851499038/Plum_haabs_7782.png",
//   "https://sslimages.shoppersstop.com/sys-master/root/h40/hc9/28356851564574/Revlon_bskkwuu_oopqq.png",
//   "https://sslimages.shoppersstop.com/sys-master/root/h81/hc5/28356851695646/Embark_basjwuue.png",
//   "https://sslimages.shoppersstop.com/sys-master/root/h72/hbf/28356851826718/Votre_gggsjjwyy_888.png",
// ];
// let for_Beauty_6 = document.getElementById("6grid_for_beauty");

// design6_grid(for_Beauty_6data, for_Beauty_6);

// let for_Kids_6data = [
//   "https://sslimages.shoppersstop.com/sys-master/root/hfc/ha9/28369188683806/tiny-girl_6-Widgets_hysskkwooyr.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/hfe/ha6/28369188749342/AND-GIRLS_6-Widgets_ggsslllwuuue_773.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h71/h55/28369189011486/pepermint-6-Widgets_dhbxbyywes_hhwaa.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/hed/ha3/28369188814878/jack-_-jones_6-Widgets-%282%29.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h2e/ha0/28369188945950/ALLEN-SOLLY_6-Widgets_zbzbsjjwu_63_6633388.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h97/h7a/28372139868190/_pepe-jeans-6-Widgets_dgsguytwwbbxhgganmnsk_6638.jpg",
// ];
// let for_Kids_6 = document.getElementById("6grid_for_kids");

// design6_grid(for_Kids_6data, for_Kids_6);

// let for_Handbag_6data = [
//   "https://sslimages.shoppersstop.com/sys-master/root/h95/h39/28369189863454/steve-madden_6-Widgets-%282%29_hhsnuue663.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h97/h36/28369189928990/ceriz_6-Widgets_nssbbwiiyr.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/hd6/h35/28369189994526/fastrack_6-Widgets_ggayuuwttr_nbvbx.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h6b/hc6/28369190191134/tommy-hilfiger_6-Widgets_aggsuuuyhcsvchjwfwfg.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h69/hc9/28369190256670/kompanero_6-Widgets_saggwiir%20_66288.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h39/hd0/28369190453278/diwaah_6-Widgets_hhannwyyte_iibb76355278.jpg",
// ];
// let for_Handbag_6 = document.getElementById("6grid_for_handbag");

// design6_grid(for_Handbag_6data, for_Handbag_6);

let for_men_4data = [
  "https://sslimages.shoppersstop.com/sys-master/root/h10/h66/28369192189982/T-shirts%20and%20Polos20220928_wow2d.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h96/h5f/28369192353822/Denim%20web20220929_ww.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h98/h5c/28369192419358/Shirts%20web202209282j.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hd7/h5b/28369192484894/Trousers%20web20220928_eoee.jpg",
];
let for_men_4 = document.getElementById("for_men");

housedesigngrid(for_men_4data, for_men_4);

let for_women_4data = [
  "https://sslimages.shoppersstop.com/sys-master/root/h6b/haa/28404492533790/Sarees%20web.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hff/h09/28369193336862/Tops%20web22020929_w0wd.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hbf/h0d/28369193467934/Suit%20Sets%20web20220929_wowhh.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/ha1/h4e/28369192845342/Denims%20web202209292_dodee.jpg",
];
let for_women_4 = document.getElementById("for_women");

housedesigngrid(for_women_4data, for_women_4);

let for_watches_4data = [
  "https://sslimages.shoppersstop.com/sys-master/root/h26/hf6/28370179915806/Espirit-web20220929_wos.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/he7/hf6/28370179981342/Casio-web20220929_ow.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/ha9/h10/28370180046878/Earnshaw-web20220929_eee.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h97/h0d/28370180112414/Fastrack-web20220929-ww1.jpg",
];
let for_watches_4 = document.getElementById("for_watches");

housedesigngrid(for_watches_4data, for_watches_4);

let for_home_4data = [
  "https://sslimages.shoppersstop.com/sys-master/root/h8e/h66/28370181423134/Lamp%20_%20Lighting%20web20220929_wow2.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h3c/h67/28370181488670/Dinings%20web20220929-wlw.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h4d/h6a/28370181554206/Home%20Fragrances%20web20220929-psww.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h0c/h6e/28370181685278/Air%20Tight%20Container%20web202209292_eld.jpg",
];
let for_home_4 = document.getElementById("for_home");

housedesigngrid(for_home_4data, for_home_4);

// let for_footwear_4data = [
//   "https://sslimages.shoppersstop.com/sys-master/root/h92/h5f/28369204838430/Footwear-4-Widgets-More-Brands-Ethnic-Styles-Web20220929_wow2.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h08/h47/28370176933918/Footwear-4-Widgets-More-Brands-Mojaris-Web20220920_w-so.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h64/hae/28369205067806/Footwear-4-Widgets-More-Brands-Sneakers-Web202209220-ee.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/ha2/h62/28369204903966/Footwear-4-Widgets-More-Brands-Formals-Web202209209-eoee.jpg",
// ];
// let for_footwear_4 = document.getElementById("for_footwear");

// housedesigngrid(for_footwear_4data, for_footwear_4);

// let for_accessories_4data = [
//   "https://sslimages.shoppersstop.com/sys-master/root/h45/h06/28369203986462/Accessories-4-Widgets-More-Brands-Bracelets-_-Bangles-Web20220929_eoee.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h75/h47/28369204117534/Accessories-4-Widgets-More-Brands-Chains-_-Necklaces-Web20209209_wowd.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h04/h52/28369204445214/Accessories-4-Widgets-More-Brands-Rings-Web20220929_wowd.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h34/h4b/28369204248606/Accessories-4-Widgets-More-Brands-Earrings-Web20220929-e0e.jpg",
// ];
// let for_accessories_4 = document.getElementById("for_accessories");

// housedesigngrid(for_accessories_4data, for_accessories_4);

// let for_beauty_4data = [
//   "https://sslimages.shoppersstop.com/sys-master/root/h2b/h7e/28369202544670/MAKEUP_WEB-4-WIDGET20220929_w0w2.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h51/h1b/28369203331102/FRAGRANCES-web_4-widget20220929_0w2.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/ha3/h1a/28369203396638/SKINCARE-4-WIDGET20220929_wo22.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h94/h14/28369203527710/GROOMING_APP_4-WIDGET20220928_woek.jpg",
// ];
// let for_beauty_4 = document.getElementById("for_beauty");

// housedesigngrid(for_beauty_4data, for_beauty_4);

// let for_kids_4data = [
//   "https://sslimages.shoppersstop.com/sys-master/root/h47/he9/28370179588126/Globaldesi-Girl-web20220929_jdjd.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h58/hec/28370179653662/Biba-web20220929_ww.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h56/hef/28370179719198/Angel-_-Rocket-web20220928_sos.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h17/hf0/28370179784734/One-Friday-web20220929_pss.jpg",
// ];
// let for_kids_4 = document.getElementById("for_kids");

// housedesigngrid(for_kids_4data, for_kids_4);

// let for_handbag_4data = [
//   "https://sslimages.shoppersstop.com/sys-master/root/h4c/h6d/28274020712478/Tote_4-Widgets-web---2022-09-16-hp-page.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h8d/h69/28274020843550/Sling-Bags_4-Widgets-web------2022-09-16-hp-page.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h8f/h66/28274020909086/clutches_4-Widgets-web----2022-09-16-hp-page.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/hce/h65/28274020974622/Satchels_4-Widgets-web-----2022-09-16-hp-page.jpg",
// ];
// let for_handbag_4 = document.getElementById("for_handbag");

// housedesigngrid(for_handbag_4data, for_handbag_4);

let home_exclusivecoll = document.getElementById("home-exclusivecoll");

housedesigngrid(house_exclusive_coll, home_exclusivecoll);

function housedesigngrid(data, location) {
  let housedesigndiv = document.createElement("div");
  housedesigndiv.className = "housedesign";
  data.forEach((el) => {
    let img = document.createElement("img");
    img.src = el;
    housedesigndiv.append(img);
  });
  location.append(housedesigndiv);
}

function design3_grid(data, location) {
  let design3griddiv = document.createElement("div");
  design3griddiv.className = "design3grid";
  data.forEach((el) => {
    let img = document.createElement("img");
    img.src = el;
    design3griddiv.append(img);
  });
  location.append(design3griddiv);
}

function design6_grid(data, location) {
  let design6griddiv = document.createElement("div");
  design6griddiv.className = "design6grid";
  data.forEach((el) => {
    let img = document.createElement("img");
    img.src = el;
    design6griddiv.append(img);
  });
  location.append(design6griddiv);
}

let carousel1 = [
  "https://sslimages.shoppersstop.com/sys-master/root/h4b/h60/28356865130526/festive-banner_Top-Banner-web--20220828-both-add.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hac/hd0/28356842553374/private-brands_Top-Banner-web20220928_sows.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hfd/h8d/28439751000094/bedding%29Top-Banner-web20220101_oe.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h79/h3a/28397946863646/web-womenswear_Top-Banner-web03102022.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hf5/h88/28397947060254/web-menswear_Top-Banner-web03102022.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h8b/h46/28455063486494/makeup_Top-Banner-web2022013_d0d.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hde/hc6/28356842291230/footwear_Top-Banner-web20220929_0.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h6b/hf0/28372167327774/watches_Top-Banner-web_ggabbsuuwk_6627.jpg",
];
let carousel2 = [
  "https://sslimages.shoppersstop.com/sys-master/root/h5a/h50/28372165918750/Diwali-Festive-Coupon-Web_bbsmmdhhw_7729993ggs.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/ha8/h7d/28343555489822/ICICI-Strip-web_vvxnz_772ggakkd.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hcd/h35/28343559979038/CITI-BANK_1840X250_web_strip_hhdnn_aabsgg_66299883.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/ha8/hf2/28369201201182/web_SS-First-Strip-Creative-Web_29092022-hOMEpAGE.jpg",
];
let carousel3 = [
  "https://sslimages.shoppersstop.com/sys-master/root/he8/hd9/28429761445918/Lakme-Web---sponsored0-brands-2022-07---10-hp-pagg--45-gnm.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/he9/hac/28455067090974/Titan-Web----sponsored-brands-2022-10-12-33232.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hd0/h92/28372147273758/web-w_Static-Web-300912022.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h4e/h23/28439752081438/web_size_hp-2022-10-06-zink-lonodns_sponsored-brnds_220220110_wow1.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hef/hda/28439739170846/juniper2022010101k.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h55/h23/28114859032606/fastrack_1840-500_web--hp-pages-sponsored-brands-2022-0819-men-wa-wom.jpg",
];
// let carousel4 = [
//   "https://sslimages.shoppersstop.com/sys-master/root/h51/h71/28417303904286/web-Entry-Banner-Web-06102022.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h4c/h55/28455071121438/Top-Banner-web20220112_-w.jpg",
// ];
// let carousel5 = [
//   "https://sslimages.shoppersstop.com/sys-master/root/h13/h29/28417312096286/Festive-Web---hp-pg-what-ttending-2022--06--10.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h47/h2a/28309921497118/Top-Banner-Web-1840x50020220923_sksjs.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/ha6/h57/28370176475166/Maternity-2-Web----new-revsied-changes-20220929-hppag.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h24/hc6/28417306787870/web-levis%20web-replace-06102022.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/hc3/h16/28221185490974/Gate%20banner-Web_hahah_6263_nndh.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h29/h0c/28455043072030/clinique-web202201112_sos.jpg",
// ];
// let carousel6 = [
//   "https://sslimages.shoppersstop.com/sys-master/root/h3f/h6a/28429769146398/gift-for-bahu_Top-Banner-web20202909eue.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/hfe/h6d/28429769277470/gift-for-grandma_Top-Banner-web20220108_kd.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h0d/h74/28429769408542/gift-for-husband_Top-Banner-web20220108_ii.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/hdd/h7a/28429769605150/gift-for-mother_Top-Banner-web202209202.jpg",
// ];
let carousel7 = [
  "https://sslimages.shoppersstop.com/sys-master/root/h51/h6b/28439766761502/buckaroo_Exclusive-Collection-Static-Web20220111_ow.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h11/h4d/28455047036958/New-Arrivals-Static-Woakers-Web20220102.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h0b/h99/28404492009502/New-Arrivals-Static-Maybeline-Web%20%281%29--hp-pages-10-oct-22.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h83/hfa/28397927563294/Black-Honey-web--clinique-lipsticks_banner-hp-20220110-.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h5d/h8c/28397950795806/New-Arrivals-Static-Memoir-Web_88822hhnnssbbc_7772991.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h6e/h8f/28397950861342/New-Arrivals-Static-Feather-Lite-Web_bmmmmuewgggsjja.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hbc/h85/28455060733982/New-Arrival-Static-XL-Love-Janasya-Web2020212_w0w.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hba/hb4/28356856676382/New-Arrivals-Static-scakhi-Web20220929_sos.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h8f/h52/28369197203486/New-Arrivals-Static-Glam-Story-Web2022092e02j.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hec/haa/28356856938526/New-Arrivals-Static-Loreal-Web20220929wiow.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hab/hae/28356856807454/New-Arrivals-Static-Abhishti-Web20220929_sos.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hff/h47/28369197531166/New-Arrivals-Static-Not-So-Pink-Web20220929_wos.jpg",
];
let carousel8 = [
  "https://sslimages.shoppersstop.com/sys-master/root/ha2/hbc/28439762501662/Exclusive-Collection-Static-Timex-Fit-03-Web20220111_wow.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h45/h28/28296872558622/Pokemon-Web_jsjs_hwyyqbbakkquwt_77291.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h62/he4/28417296564254/web-Exclusive-Collection-Static-W-Web06102022.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h9e/h4a/28356849565726/Exclusive-Collection-Static-Allen-Solly-Web_baalwuu_99733.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h03/h78/28370186469406/Exclusive-Collection-Static-Faballey-Web20220929_ele.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h62/hc0/28439762632734/Exclusive-Collection-Static-Guess-Web202201111_ww.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h62/hc0/28439762632734/Exclusive-Collection-Static-Guess-Web202201111_ww.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h21/hc4/28439762763806/Exclusive-Collection-Static-Vero-Moda-Web20220111_e.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h93/h14/28397941227550/Exclusive-Collection-Static-Kids-Only-Web20220101_wpw.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/he0/h61/28439764926494/Allen-Solly_Exclusive-Collection-Static-Web20220111_ll.jpg",
];
// let carousel9 = [
//   "https://sslimages.shoppersstop.com/sys-master/root/h23/h49/28455042678814/addidas_Bargain-of-the-day-Static_Web2022012_wo2.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h7c/h98/28455046905886/JACK-%26-JONES_Bargain-of-the-day-Static_Web202200202.jpg",
// ];
let carousel10 = [
  "https://sslimages.shoppersstop.com/sys-master/root/hc3/h54/28369189077022/Shoppers-Stop-Selects-Static-STOP-Web20220928_wowj.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hb4/h4e/28369189208094/Shoppers-Stop-Selects-Static-LIFE-Web2-22oeo.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hf5/h4a/28369189339166/Shoppers-Stop-Selects-Static-FRATINI-Web20220928_wowsd.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h22/h47/28369189470238/Shoppers-Stop-Selects-Static-INFUSE-Web20220929_wow2.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h13/h41/28369189601310/Shoppers-Stop-Selects-Static-Homestop-Web20220928_woz.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h54/h3d/28369189732382/Shoppers-Stop-Selects-Static-Kids-Web2-22dijd.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h7a/hcc/28369190322206/Shoppers-Stop-Selects-Static-Haute-Curry-Web20220929_w0wq.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hac/hc2/28369190060062/Shoppers-Stop-Selects-Static-Handbags-Web20220929_wow3.jpg",
];
// let carousel11 = [
//   "https://sslimages.shoppersstop.com/sys-master/root/h10/hc7/28429760790558/web-asestee-lauder-web-500-07102022.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/hd2/h13/28369203593246/web-burberry_Static-Web_29092022hp.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h15/h55/28369204510750/web-jefree-star_Static-Web_29092022hp.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/hd2/h5b/28369204707358/web-kama-ayurveda_Static-Web_29092022hp.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/hca/h05/28429755351070/web-clarins_Static-Web-07102022.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/h29/h78/28429756923934/web-elizabeth-arden_Static-Web-07102022vv.jpg",
//   "https://sslimages.shoppersstop.com/sys-master/root/hbc/hca/28429757284382/web-shiseido_Static-Web-07102022.jpg",
// ];
let carousel12 = [
  "https://sslimages.shoppersstop.com/sys-master/root/h3c/h27/28439760076830/Festive-Look-Book-for-Her-Static-Dhanteras-Web20220_wow.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h2d/h21/28439760207902/Festive-Look-Book-for-Her-Static-Diwali-We2220111_b.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h5d/h1a/28439760404510/Festive-Look-Book-for-Her-Static-Bhai-Dooj-Web20220111_wow2.jpg",
];
let carousel13 = [
  "https://sslimages.shoppersstop.com/sys-master/root/had/h72/28429746143262/web-Festive-Look-Book-for-Him-Static-Dhanteras-Web-07102022.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hee/h6e/28429746274334/web-Festive-Look-Book-for-Him-Static-Diwali-Web-07102022.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h6c/h76/28429746012190/web-Festive-Look-Book-for-Him-Static-Bhai-Dooj-Web-07102022.jpg",
];
let carousel14 = [
  "https://sslimages.shoppersstop.com/sys-master/root/hdd/h71/28439748247582/dhanteras-Festive-Look-Book-for-KIDS-Static-Web20220101_sos.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h1e/h6e/28439748378654/diwali_Festive-Look-Book-for-KIDS-Static-Web20220110_Wo.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h4e/h67/28439748575262/bhai-dooj_Festive-Look-Book-for-KIDS-Static-Web20220101_sos1.jpg",
];
let carousel15 = [
  "https://sslimages.shoppersstop.com/sys-master/root/h10/hc7/28429760790558/web-asestee-lauder-web-500-07102022.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h4a/ha2/28455046643742/bobbi-brown-web-022022012_e0e.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hac/h92/28356859953182/kora_Static-Web--2220928-hp-pgae%3Dicon.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hba/h70/28356860182558/caudalie_Static-Web--20202928-h-pagess-icons.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hab/h6a/28356860313630/ferragamo_Static-Web-----2220928-hp-pgae%3Dicon.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hec/h66/28356860444702/chopard_Static-Web--202209282-hp-icons.jpg",
];
let carousel16 = [
  "https://sslimages.shoppersstop.com/sys-master/root/h18/hc9/28356856086558/Shoetopia-Web20220928_ous.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h47/hc2/28356856283166/Janasya-Web20220929_dod.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hb5/h17/28356858445854/Vastramay-Web--oline-only-202209282-hp.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h83/h21/28356858707998/Layers-Web--online-onlye202209282.jpg",
];
let carousel17 = [
  "https://sslimages.shoppersstop.com/sys-master/root/h24/hc3/28356864344094/Inner-Wear-Static-Bras-Web----2022-09-28-hp-page-innerware.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h65/hbf/28356864475166/Inner-Wear-Static-Women-briefs--Web---2022-09-28-hp-ph.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h56/hb9/28356864606238/Inner-Wear-Static-Shape-wear-Web--20220928-hp-pagr.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h97/hb5/28356864737310/Inner-Wear-Static-Loungewear-Web--20220982920hp-page.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/hd8/hb1/28356864868382/Inner-Wear-Static-Breifs-For-Men-Web---2022-09-28-hp-pg.jpg",
  "https://sslimages.shoppersstop.com/sys-master/root/h18/hae/28356864999454/Inner-Wear-Static-Vests-Web----202209829-gh-po.jpg",
];

let carousel_location1 = document.getElementById("home-carousel1");
carousel(carousel1, carousel_location1, "slide_Box1");

let carousel_location2 = document.getElementById("home-carousel2");
carousel(carousel2, carousel_location2, "slide_Box2");

let carousel_location3 = document.getElementById("home-carousel3");
carousel(carousel3, carousel_location3, "slide_Box3");

// let carousel_location4 = document.getElementById("home-carousel4");
// carousel(carousel4, carousel_location4, "slide_Box4");

// let carousel_location5 = document.getElementById("home-carousel5");
// carousel(carousel5, carousel_location5, "slide_Box5");

// let carousel_location6 = document.getElementById("home-carousel6");
// carousel(carousel6, carousel_location6, "slide_Box6");

let carousel_location7 = document.getElementById("home-carousel7");
carousel(carousel7, carousel_location7, "slide_Box7");

let carousel_location8 = document.getElementById("home-carousel8");
carousel(carousel8, carousel_location8, "slide_Box8");

// let carousel_location9 = document.getElementById("home-carousel9");
// carousel(carousel9, carousel_location9, "slide_Box9");

let carousel_location10 = document.getElementById("home-carousel10");
carousel(carousel10, carousel_location10, "slide_Box10");

// let carousel_location11 = document.getElementById("home-carousel11");
// carousel(carousel11, carousel_location11, "slide_Box11");

let carousel_location12 = document.getElementById("home-carousel12");
carousel(carousel12, carousel_location12, "slide_Box12");

let carousel_location13 = document.getElementById("home-carousel13");
carousel(carousel13, carousel_location13, "slide_Box13");

let carousel_location14 = document.getElementById("home-carousel14");
carousel(carousel14, carousel_location14, "slide_Box14");

let carousel_location15 = document.getElementById("home-carousel15");
carousel(carousel15, carousel_location15, "slide_Box15");

let carousel_location16 = document.getElementById("home-carousel16");
carousel(carousel16, carousel_location16, "slide_Box16");

// let carousel_location17 = document.getElementById("home-carousel17");
// carousel(carousel17, carousel_location17, "slide_Box17");

// let locat = document.getElementById("home-carousel2");

// carousel(house_exclusive_coll, locat, "slide_Box1");
