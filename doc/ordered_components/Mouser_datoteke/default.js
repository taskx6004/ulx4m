var prefCookie=getPreferencesCookie();var cSubdomain=prefCookie.ps;var lang=prefCookie.pl;var currency=prefCookie["pc_"+cSubdomain];var visualAttributeBatchCount=10;if(!Array.prototype.indexOf){Array.prototype.indexOf=function(b){var a=this.length>>>0;var c=Number(arguments[1])||0;c=(c<0)?Math.ceil(c):Math.floor(c);if(c<0){c+=a}for(;c<a;c++){if(c in this&&this[c]===b){return c}}return -1}}if(typeof String.prototype.trim!=="function"){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}}if(!String.prototype.format){String.prototype.format=function(){var a=arguments;
return this.replace(/{(\d+)}/g,function(b,c){return typeof a[c]!="undefined"?a[c]:b})}}(function(a){a.fn.toggleDisabled=function(){return this.each(function(){this.disabled=!this.disabled})}})(jQuery);$(document).ready(function(){var a=ReadCookie("preferDigitalCatalog");$("a.toggle-trigger, a.toggle-default").click(function(){var f=$(this);$("a.toggle-trigger, a.toggle-default").not(f).removeClass("active").next().slideUp("fast");$(this).toggleClass("active").next().slideToggle("fast")});$("a.toggle-showall").click(function(){$("a.toggle-trigger, a.toggle-default").each(function(){$(this).addClass("active").next().slideDown("fast")
})});$("a.toggle-default").addClass("active").next().slideDown("fast");if(jQuery().banManZone){$(".banmanzone").banManZone({DG1:prefCookie.pl,DG2:subdomain,DG3:currency})}$("a.skype").click(function(){if(!CantDetect){DownloadSkype()}});var c=undefined;$("a[href^='http://']:not([href$=pdf]):not([id$='lnkDataSheet'])").click(function(){if($(this).attr("target")=="_blank"){c="/outgoing/"+jQuery.url.segment(0)+"/"+$(this).attr("href").replace("http://","");if(c!=undefined){trackLinks(c)}}});$("a[href^='http://'][href$=pdf]:not([id$='lnkDataSheet'])").click(function(){if($(this).attr("target")=="_blank"){c="/outgoing/pdf/"+$(this).attr("href").replace("http://","").replace("../","");
if(c!=undefined){trackLinks(c)}}});$("a[href$=pdf]:not([href^='http://']):not([id$='lnkDataSheet'])").click(function(){if($(this).attr("target")=="_blank"){c="/download/pdf/"+$(this).attr("href").replace("http://","").replace("../","");if(c!=undefined){trackLinks(c)}}});$("a[id$='lnkDataSheet']").click(function(){if($(this).attr("target")=="_blank"){c="/outgoing/datasheets/"+$(this).parents("tr").find("a[id$='lnkMouserPartNumber']").html()}else{c="/download/datasheets/"+$(this).parents("tr").find("a[id$='lnkMouserPartNumber']").html()
}if(c!=undefined){trackLinks(c)}});$(".quickview").quickview();$(".tooltip").tooltip({track:true,delay:0,showURL:false,showBody:" - ",fade:250});$("div[id^='popup'] a").click(function(){c="/popup/"+$(this).parents("tr").find("a[id$='lnkMouserPartNumber']").html();if(c!=undefined){trackLinks(c)}});if($("div[id*='FindSimilarPnl']").length>0){findsimilar("init");if($("input[id*='btnfindsimilar']").length>0){if($("input[id*='btnfindsimilar']").val()=="Find Similar"){$("input[id*='btnfindsimilar']").attr("value","Show Similar")
}}}$("td[class^='find-similar'] input").click(findsimilar);if($("span[id$='ContentMain_lblNoResults']").text()=="NO RESULTS FOUND."){$("span[id$='ContentMain_lblNoResults']").html("An unexpected error has occurred.<br/>We are sorry for the inconvenience.")}$("a[href*='-%E2%80%93-']").each(function(){$(this).attr("href",$("a[href*='-%E2%80%93-']").attr("href").replace("-%E2%80%93-","-"))});var d=window.location.toString();if(d.indexOf("-%e2%80%93-")>0||d.indexOf("-%E2%80%93-")>0){window.location=d.replace("-%e2%80%93-","-").replace("-%E2%80%93-","-")
}var b=location.href;if((subdomain=="ca")&&(b.toLowerCase().indexOf("catalog")!=-1)&&($("select#ctl00_NavHeader_ddlCurrencies").val()=="CAD")){$('div#pdf_details ul li a[href*="../catalogindex_usd/"]').attr("href","../catalogindex_cad/")}if(location.pathname.indexOf("contact")>0){LoadElektra()}if(b.indexOf("/ProjectManager/ProjectDetail")!=-1){$("#ctl00_ContentMain_btnRequestQuote").hide()}$("div.navbar ul li:not(ul.subnav li)").hover(function(){$(this).find("ul").show();$(this).addClass("mm_white_nav");$(this).find("a:first").addClass("mm_white_nav_a");
$("#search-block").addClass("z-fix");$("#account").addClass("z-fix")},function(){$(this).find("ul").hide();$(this).removeClass("mm_white_nav");$(this).find("a:first").removeClass("mm_white_nav_a");$("#search-block").removeClass("z-fix");$("#account").removeClass("z-fix")});if(getInternetExplorerVersion()==6||getInternetExplorerVersion()==7){var d=$('ul.topnav li a[href*="catalogviewer"]').attr("href");var e="/mobilecatalog.aspx"+(d.indexOf("?")>0?d.substring(d.indexOf("?")):"");$('ul.topnav li a[href*="catalogviewer"]').attr("href",e);
if(window.location.pathname.indexOf("servicesandtools")>0){var d=$('div.st_head a[href*="catalogviewer"]').attr("href");var e="/mobilecatalog.aspx";$('div.st_head a[href*="catalogviewer"]').attr("href",e)}}if(subdomain=="th"&&b.toLowerCase().indexOf("catalog")!=-1&&lang=="th-TH"){$("#cat_content").css("font-size","12px");$("#cat_content").css("height","1050px");$(".cat_launch_btn").css("font-size","16px");$(".cat_launch_btn").css("font-weight","normal");$(".cat_jump").css("font-size","12px")}else{if(subdomain=="cn2"&&b.toLowerCase().indexOf("catalog")!=-1&&lang=="zh-CN"){$("#cat_content").css("font-size","12px");
$(".cat_launch_btn").css("font-size","16px");$(".cat_launch_btn").css("font-weight","normal");$(".cat_jump").css("font-size","12px");$(".cat_jump").css("width","170px");$('#pdf_details ul li a[href*="catalogindex_usd"]').attr("href","../catalogindex")}}$("#slp_keyword").keydown(function(f){if(f.keyCode==13){slp_SubmitSearch();return false}});$("#slp_keyword").focus(function(){$("#search-block input[type=text]").val("")});$("#slp_Search, #slp_btnSearch").click(function(){slp_SubmitSearch()});if($(".btn-notify").length>0||$(".btn-notify").length>0){$(".btn-notify").notifyme()
}$("a[id$=lnkShowCategory]").click(function(){$("table[id$=tblSplitCategories]").show();$("div[id$=showCategoryDiv]").hide();$("div[id$=hideCatgoryDiv]").show();eraseCookie("HideCat")});$("a[id$=lnkHideCateogry]").click(function(){hideCategories();createCookie("HideCat","yes",1)});$("img[id$=expandImg]").click(function(){$("table[id$=tblSplitCategories]").show();$("div[id$=showCategoryDiv]").hide();$("div[id$=hideCatgoryDiv]").show();eraseCookie("HideCat")});$("img[id$=collapseImg]").click(function(){hideCategories();
createCookie("HideCat","yes",1)});if($("div[id=divManufacturerPartNum]").length){ADIDiscountedPart($("div[id=divManufacturerPartNum]").text().trim())}$("#contact").find("select[id$=ddlLanguage]").change(function(){ChangeLanguageImpl($("option:selected",this).val())});InitializeToolTipPlugin();InitializeHoverPopOverPlugin();AddAffixPlugin();if($.colorbox){$("div.loading-overlay form:first").submit(function(){if($(this).valid()){ShowLoadingDiv($(this))}});$(".inline").colorbox({inline:true,width:"25%",overlayClose:false,closeButton:false,className:"processing-main",opacity:0.6,transition:"none",returnFocus:false})
}AddDropdownEffect()});function ChangeCurrencyToUSD2(){ChangeSubdomain(usdSubdomain);ChangeCurrency(usdSubdomain,"zzz")}function ChangeCurrencyToUSD(){ChangeCurrencyToUSD2()}function ChangeLanguageImpl(a){$.ajax({type:"POST",url:"/api/Preferences/SetLanguage?languageCode="+a,timeout:3000,success:function(){window.location=window.location.href.split("#")[0]}})}function ChangeSubdomain(a){$.ajax({async:false,type:"POST",url:"/api/Preferences/SetSubdomain?subdomainName="+a,timeout:3000})}function ChangeCurrency(b,a){$.ajax({async:false,type:"POST",url:"/api/Preferences/SetCurrency?subdomainName="+b+"&currencyCode="+a,timeout:3000})
}function HasActiveElement(){try{return $(document.activeElement).is(":input")}catch(a){return undefined}}function HideNewCustomerMessaging(a){$.ajax({type:"POST",url:"/api/Preferences/HideNewCustomerMessaging?ncm="+a,timeout:3000})}function ShowPartnerMessage(e,c,a){var b=$('<div style="width: auto;height: 230px;"></div>').html('<iframe style="border: 0px; " src="'+a+'" width="100%" height="100%"></iframe>').dialog({title:e,resizable:false,modal:true,width:440,height:250,maxHeight:550});b.dialog("open")}function AddDropdownEffect(){$("div.action-bar div.dropdown").hover(function(){$(this).find(".dropdown-menu").stop(true,true).delay(200).fadeIn(500)
},function(){$(this).find(".dropdown-menu").stop(true,true).delay(200).fadeOut(500)})}function IsModelValid(c){var a=$("div#"+c+" [name], ."+c+" [name]").not(":hidden");var b=true;a.each(function(){if(!$(this).valid()){b=false}});return b}function InitializeToolTipPlugin(){if(!IsBootstrapJsLoaded()){return}$('[data-toggle="tooltip"]').tooltip()}function GetPopOverOptions(){try{return{placement:function(){return($(window).width()<700?"bottom":"right")}}}catch(a){return null}}function InitializeHoverPopOverPlugin(){var a=$('[data-toggle="popover"]');
if(a.length==0||!IsBootstrapJsLoaded()){return}a.popover(GetPopOverOptions())}function IsBootstrapJsLoaded(){return(typeof $().emulateTransitionEnd=="function")}function InitializePopOverPlugin(){var a=$('[data-toggle="popover"]');if(a.length==0||!IsBootstrapJsLoaded()){return}a.focus(function(){$(this).popover(GetPopOverOptions()).blur(function(){$(this).popover("destroy")})})}function RebindJQueryValidation(){$("form").removeData("validator");$("form").removeData("unobtrusiveValidation");$.validator.unobtrusive.parse("form");
InitializeToolTipPlugin();InitializeHoverPopOverPlugin();AddAffixPlugin()}function AddAffixPlugin(){var a=$("div#order-summary");if(a.length>0&&$("div#form-horizontal").children().first().height()>a.height()){a.affix({offset:{top:function(){return($("div#banman-banner").length>0?250:135)},bottom:function(){return(this.bottom=$("div#footer").outerHeight(true))}}})}}function ScheduleOrdersClick(k,l,c,f,j,i,a,h,e,m){if(k=="False"){if(c=="Cart"){GaEvent("Schedule Order","Scheduler Opened",l,f);GaEvent("Schedule Order","Scheduled Order Button","No Pop-up Modal",0)
}return true}else{if(c=="Cart"||c=="Project"){if(c=="Cart"){GaEvent("Schedule Order","Scheduled Order Button","Pop-up Modal",0)}var b=j;var g=$('<div id="schOnline" class="confirmLicenseDialog"><p>'+b+"</p></div>");g.dialog({title:i,resizable:false,draggable:false,modal:true,width:560,height:301,maxHeight:550,close:function(){$(this).dialog("destroy")},buttons:[{id:"btnConfirm",text:a,click:function(){$(this).dialog("destroy")}},{id:"btnConfirm",text:h,"class":m=="True"?"":"hidden-for-js-inline",click:function(){$(this).dialog("destroy");
window.location=e}}]})}}return false}function OpenEstShippingDialog(e,a){var b=a.indexOf("helppage")>-1?875:575;var c=$('<div id="dialog"></div>').html('<iframe id="estShipIframe" src="'+a+'"></iframe>');c.dialog({modal:true,resizable:false,draggable:false,title:e,width:b,height:$(window).height()-50,dialogClass:"est-shipping",close:function(){$(this).dialog("destroy")}});return false}function GetResponsiveModalWidth(a){return(((!window.innerWidth)||window.innerWidth>767)?a:$(window).width()-50)}function GetResponsiveModalHeight(a){return(((!window.innerWidth)||window.innerWidth>767)?a:$(window).height()-50)
}function IsMobileView(){return $("body").is(".force-responsive, .responsive")}function OpenSoftwareDialog(c,a){var b=$('<div class="confirmLicenseDialog"><p>'+a+"</p></div>");b.dialog({modal:true,title:c,draggable:false,width:GetResponsiveModalWidth(500),height:GetResponsiveModalHeight(200),close:function(){$(this).dialog("destroy")}});return false}function hideCategories(){$("table[id$=tblSplitCategories]").hide();$("div[id$=showCategoryDiv]").show();$("div[id$=hideCatgoryDiv]").hide()}function getPreferencesCookie(){var a=$.ooCookie("preferences");
a.getCookie();return a}function slp_SubmitSearch(){if(($("#search-block input[type=text]").val()==""||$("#search-block input[type=text]").val()==undefined)&&($("#slp_keyword").val()!="")){location.href="../search/refine.aspx?N="+$("input[name=N]").val()+"&Keyword="+$("#slp_keyword").val()}}function trackLinks(b){try{pageTracker._trackPageview(b)}catch(a){}}function ShowLoadingDivIfValid(){var a=$("div.loading-overlay form:first");if(a.valid()){ShowLoadingDiv(a)}}function ShowLoadingDiv(a){a.find(".continue,.button").prop("class","disabled");
$("div#submit-order a.continue").prop("class","disabled");setTimeout(function(){$("a#lnkloader").click()},1500)}function findsimilar(a){var b="";var c=0;$("td[class^='find-similar'] input").each(function(){if($(this).is(":checked")){var d=$(this).attr("id").split("_");b=b+d[d.length-1]+"+";c++}else{if(a=="init"){if(c==2){$(this).prop("checked",true);var d=$(this).attr("id").split("_");b=b+d[d.length-1]+"+"}a="ready"}}});if(b==""){$("#lblfindsimilarcount").remove();$("div[id*='divfindsimilarhelp']").remove();
$("input[id*='btnfindsimilar']").after("<div id='divfindsimilarhelp'  style='text-align:left'><img border='0' id = 'imghelp' src='/Images/help-icon.png' ></img>&nbsp;To show similar products, select at least one checkbox and click the show similar button.</div>");return}else{if($("div[id$='divselectiontxt']").text()==""){$("div[id*='divfindsimilarhelp']").html("<div id='divselectiontxt' style='float:right;text-align:right;padding-top:5px;'>Per above selection(s)</div><img border='0' id = 'imghelp' src='/Images/help-icon.png' ></img>&nbsp;Show stocked product(s), check and uncheck the boxes above.")
}}b=b+"1323038+1323043";if($("#divfindsimilarhelp").length==0){$("input[id*='btnfindsimilar']").after("<div id='divfindsimilarhelp'  style='text-align:left'><div id='divselectiontxt' style='float:right;text-align:right;padding-top:5px;'>Per above selection(s)</div><img border='0' id = 'imghelp' src='/Images/help-icon.png' ></img>&nbsp;Show stocked product(s), check and uncheck the boxes above.</div>")}$("input[id*='btnfindsimilar']").before("<img border='0' style='vertical-align:middle' id = 'imgspinner' src='/Images/spinner.gif' />");
$.ajax({url:"/ajax/parametricoutput.ashx",type:"POST",data:"N="+b,success:function(d){$("#lblfindsimilarcount").remove();d=d.split(" ")[0];if(d!="0"){d=d-1}if(d=="0"&&a=="ready"){if($("td[class^='find-similar'] input:first").is(":checked")){$("td[class^='find-similar'] input:first").prop("checked",false);findsimilar("ready")}else{if($("td[class^='find-similar'] input:eq(2)").is(":checked")){$("td[class^='find-similar'] input:eq(2)").prop("checked",false);findsimilar("ready")}}}if(d=="0"){$("div[id$='divselectiontxt']").text("Refine above selection(s)")
}else{$("div[id$='divselectiontxt']").text("Per above selection(s)")}$("input[id*='btnfindsimilar']").after("<div id='lblfindsimilarcount' style='text-align:left'><div style='float:right;text-align:right;padding-top:0px;'><span class='red' style='text-align:right'>Found: "+d+"</span></div><div class='red' style=''>Show Stocked Products With Similar Attributes.</div></div>");$("span[id$='lblhiddenfindsimilarcount']").val(d);$("#imgspinner").remove()},error:function(d){$("#imgspinner").remove()}})}function IsValidGuid(b){var a=new RegExp("^[{]?[0-9a-fA-F]{8}[-]?([0-9a-fA-F]{4}[-]?){3}[0-9a-fA-F]{12}[}]?$");
return a.test(b)}function GaEvent(a,c,b,f){try{ga("send","event",a,c,b,f)}catch(d){}}function AddPmGoogleAnalyticsEvents(b,a,d){try{_gaq.push(["_trackEvent","Project Manager",b,a,d])}catch(c){}}function AddProjectCheckEvent(){$("input[id$=btn6]").click(function(){var a=ConfirmProjectModal($(this));return a})}function DisplayProjectModal(b,a,c,e,g,h){var f=$('<div id="saveChangesModal" class="confirmLicenseDialog"><p>'+a+"</p></div>");f.dialog({title:c,resizable:false,modal:true,width:GetResponsiveModalWidth(440),height:GetResponsiveModalHeight(200),buttons:[{id:"btnCancel",text:e,click:function(){$(this).dialog("destroy");
if(h){$('input[name="PartNumber"],#CustPartNumber,#Qty').val("");b.data("count",0)}}},{id:"btnConfirm",text:g,"class":"ui-button",click:function(){$(this).dialog("destroy");if(typeof h==="undefined"){b.unbind("click")}b.click()}}]})}function ShowArchiveProjectModal(a,l,c,e,f,j,b,n,m,g,i){AddPmGoogleAnalyticsEvents((c?"Archive Open":"Activate Open"),e);var h=(c?f:j);var k=$('<div id="saveChangesModal" class="confirmLicenseDialog"><p>'+h+"</p></div>");k.dialog({title:b,resizable:false,modal:true,width:440,height:200,maxHeight:550,buttons:[{id:"btnCancel",text:n,click:function(){$(this).dialog("destroy")
}},{id:"btnConfirm",text:(c?m:g),"class":"ui-button",click:function(){AddPmGoogleAnalyticsEvents((c?"Archive Confirm":"Activate Confirm"),e);ArchiveProject(a,$(this),l,c,e,f,j,b,n,m,g,i)}}]});if(!a){return false}return true}function ArchiveProject(a,k,i,c,d,e,h,b,l,j,f,g){$.ajax({url:"/api/OrderHistory/ArchiveProject?projectGuid="+encodeURIComponent(i)+"&archive="+c,cache:false,type:"POST",timeout:15000,contentType:"application/json",success:function(){k.dialog("destroy");if(a){a.fnDraw(false)}else{$("input[id$=btnArchiveProject]").unbind("click");
$("input[id$=btnArchiveProject]").val((!c?j:f));$("input[id$=btnArchiveProject]").attr("onclick","");$("input[id$=btnArchiveProject]").click(function(){ShowArchiveProjectModal(null,i,!c,d,e,h,b,l,j,f,g);return false})}},error:function(){$("div#saveChangesModal p").html(g)}})}function clickButton(c,b){var a=document.getElementById(b);if(typeof a=="object"){if(navigator.appName.indexOf("Netscape")>(-1)){if(c.keyCode==13){a.click();return false}}if(navigator.appName.indexOf("Microsoft Internet Explorer")>(-1)){if(event.keyCode==13){a.click();
return false}}}}function writeCookie(b,c,a){createCookie(b,c,a)}function setCookie(b,c,a){createCookie(b,c,a)}function createCookie(c,d,e){if(e){var b=new Date();b.setTime(b.getTime()+(e*24*60*60*1000));var a="; expires="+b.toGMTString()}else{var a=""}document.cookie=c+"="+d+a+"; path=/"}function ReadCookie(d){var b=""+document.cookie;var c=b.indexOf(d);if(c==-1||d==""){return""}var a=b.indexOf(";",c);if(a==-1){a=b.length}return unescape(b.substring(c+d.length+1,a))}function readCookie(b){var e=b+"=";var a=document.cookie.split(";");
for(var d=0;d<a.length;d++){var f=a[d];while(f.charAt(0)==" "){f=f.substring(1,f.length)}if(f.indexOf(e)==0){return f.substring(e.length,f.length)}}return null}function DeleteCookie(a){document.cookie=a+"=;path=/; expires=Thu, 01-Jan-70 00:00:01 GMT;"}function eraseCookie(a){createCookie(a,"",-1)}function SelectAllCheckboxes(a){$("a#lnkSelectAll").unbind("click");$("a#lnkSelectAll").click(function(){UnselectAllCheckboxes(a)});$("table#"+a+" tbody [type=checkbox]").each(function(){var b=$(this).is(":disabled");
if(!b){$(this).prop("checked",true)}});return false}function UnselectAllCheckboxes(a){$("a#lnkSelectAll").unbind("click");$("a#lnkSelectAll").click(function(){SelectAllCheckboxes(a)});$("table#"+a+" tbody [type=checkbox]").each(function(){$(this).prop("checked",false)});return false}function OpenCatalogViewer(){var b="http://"+document.location.host+"/catalogviewer.aspx?utm_source=homepageTile&utm_medium=Enhanced+Catalog&tm_campaign=Home+Page+Enhanced+Catalog";var a=document.createElement("a");if(typeof(a.click)=="undefined"){location.href=b
}else{a.href=b;document.body.appendChild(a);a.click()}writeCookie("preferDigitalCatalog",1,365)}function LoadElektra(){var a=lang=="en-US"?"MM-190x190.jpg":"MM-190x190_"+lang+".jpg";$(".quickInfo:last").after('<div class="quickInfo-banner"><a href="../mousermobile?cm_sp=contactus-_-contactus-_-mousermobile-_-na"><img src="../images/'+a+'" title=""/></a></div>')}function OpenFooterAd(){$("a.footerSlideButton").trigger("click")}function loadjscssfile(a,b){if(b=="js"){var c=document.createElement("script");c.setAttribute("type","text/javascript");
c.setAttribute("src",a)}else{if(b=="css"){var c=document.createElement("link");c.setAttribute("rel","stylesheet");c.setAttribute("type","text/css");c.setAttribute("href",a)}}if(typeof c!="undefined"){document.getElementsByTagName("head")[0].appendChild(c)}}function LoadCN2FooterBanner(){var a=readCookie("seenCN2FooterAd")=="1"?true:false;$("form#aspnetForm").append('<div id="footerSlideContainer" data-show="no" style="border-color:#cccccc"><div id="footerSlideContent" style="background:#E2E2E2;"><img class="img-expand" src="/images/RMBvbanner_expand.png"/><img class="img-contract" src="/images/RMBvbanner_collapse.png"/></div></div>');
$("#footerSlideContainer").on("click",function(b){b.preventDefault();if($(this).data("show")=="no"){$(".img-expand").show();$(".img-contract").hide();$("#footerSlideContent").animate({height:"200px"});$(this).data("show","yes")}else{$(".img-expand").hide();$(".img-contract").fadeIn("fast");$("#footerSlideContent").animate({height:"25px"});writeCookie("seenCN2FooterAd",1,365);$(this).data("show","no")}});if(!a){$("#footerSlideContainer").trigger("click")}}function InsertBanManCode(b,a){if(typeof b==="undefined"){return
}a=typeof a==="undefined"?"":a;document.write('<div id="zone'+b+'-banner" class="banmanzone" data-zone-id="'+b+'" data-kw="'+a+'"></div>')}function GetBanManKeywords(){var a="";if(prefCookie.NCM!="1"){a=a+"newVisitor "}return a}function ShowAlternate(b,c,a){_gaq.push(["_trackEvent","Alternate Product Click",c,a]);tb_remove();window.location=b;return true}function getInternetExplorerVersion(){var c=-1;if(navigator.appName=="Microsoft Internet Explorer"){var a=navigator.userAgent;var b=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
if(b.exec(a)!=null){c=parseFloat(RegExp.$1)}}return c}function ADIDiscountedPart(b){if(!$("div[id$=BoxPricing] div[id$=Div2] h5").length||!$("div[id$=BoxPricing] div[id$=Div2] .PriceBreakQuantity").length||$("div[id=ADIDiv]").length){return}var a="http://"+document.location.host+"/flash/js/data/DiscountedParts.js";$.getJSON(a,function(c){$.each(c.partNumbers,function(d,e){if(b===e){$("div[id$=BoxPricing] div[id$=Div2] h5").after('<div class="red" id="ADIDiv" style="padding:10px">Price shown reflects 25% discount</div>')
}})})}function QuickSignUp(){var b=$("[id$=txtQuickSubsEmail]").val();if(b.length>1){quickSignUpUrl+="?e="+b}var a=$("<div></div>").html('<iframe style="border: 0px; " src="'+quickSignUpUrl+'" width="99%" height="99%" id ="ifrmQuickSignUp" scrolling="no" style="overflow:hidden;"></iframe>').dialog({autoOpen:false,modal:true,height:680,width:520});a.dialog("open");return false}function SaveSubscriptionURL(){var c="en-US";var b=window.location.hostname;if($("[id$=ddlLanguage]").length>0){c=$("[id$=ddlLanguage]").val()
}else{if(b.toLowerCase().indexOf("co.uk")>=0){c="en-GB"}}var a="/api/Preferences/SubscriptionURL?surl="+b+"|"+c;$.ajax({type:"POST",async:false,url:a,timeout:3000});return true}function isValidEmailAddress(b){var a=/^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
return a.test(b)}function ShowStatementOfAccount(a,d){var e=$("[id$=lblOnlineStatement]").val();var b="/OrderHistory/RequestOnlineStatement.aspx";var c=$("<div></div>").html('<iframe style="border: 0px; " src="'+b+'" width="99%" height="99%" id ="ifrmOnlineSTMNT" scrolling="no" style="overflow:hidden;"></iframe>').dialog({autoOpen:false,resizable:false,title:e,modal:true,draggable:false,height:560,width:600,close:function(){$(this).dialog("destroy")},buttons:[{id:"btnConfirm",text:a,"class":"ui-button",click:function(){SendStatementOfAccount()
}},{id:"btnCancel",text:d,"class":"button",click:function(){$(this).dialog("destroy")}}]});c.dialog("open");return false}function SelectMontly(){$("#ifrmOnlineSTMNT").contents().find("[id$=divMonthly]").show();$("#ifrmOnlineSTMNT").contents().find("[id$=divWeekly]").hide()}function SelectWeekly(){$("#ifrmOnlineSTMNT").contents().find("[id$=divWeekly]").show();$("#ifrmOnlineSTMNT").contents().find("[id$=divMonthly]").hide()}function SelectOneTimeRadiioOnly(){$("#ifrmOnlineSTMNT").contents().find("[id$=divMonthly]").hide();
$("#ifrmOnlineSTMNT").contents().find("[id$=divWeekly]").hide()}function SendStatementOfAccount(){var e;var c=false;if($("#ifrmOnlineSTMNT").contents().find("[id$=OnStmtxtEmailAddress]").val().trim().length==0&&$("#ifrmOnlineSTMNT").contents().find("[id$=OnStmtxtEmailAddress1]").val().trim().length==0&&$("#ifrmOnlineSTMNT").contents().find("[id$=OnStmtxtEmailAddress2]").val().trim().length==0){$("#ifrmOnlineSTMNT").contents().find("[id$=invalidEmail1]").show();$("#ifrmOnlineSTMNT").contents().find("[id$=invalidEmail2]").show();
$("#ifrmOnlineSTMNT").contents().find("[id$=invalidEmail3]").show();return false}if($("#ifrmOnlineSTMNT").contents().find("[id$=OnStmtxtEmailAddress]").val().trim().length>0&&!isValidEmailAddress($("#ifrmOnlineSTMNT").contents().find("[id$=OnStmtxtEmailAddress]").val().trim())){$("#ifrmOnlineSTMNT").contents().find("[id$=invalidEmail1]").show();c=true}if($("#ifrmOnlineSTMNT").contents().find("[id$=OnStmtxtEmailAddress1]").val().trim().length>0&&!isValidEmailAddress($("#ifrmOnlineSTMNT").contents().find("[id$=OnStmtxtEmailAddress1]").val().trim())){$("#ifrmOnlineSTMNT").contents().find("[id$=invalidEmail2]").show();
c=true}if($("#ifrmOnlineSTMNT").contents().find("[id$=OnStmtxtEmailAddress2]").val().trim().length>0&&!isValidEmailAddress($("#ifrmOnlineSTMNT").contents().find("[id$=OnStmtxtEmailAddress2]").val().trim())){$("#ifrmOnlineSTMNT").contents().find("[id$=invalidEmail3]").show();c=true}if(c){return false}else{e=($("#ifrmOnlineSTMNT").contents().find("[id$=OnStmtxtEmailAddress]").val().trim().length>0?$("#ifrmOnlineSTMNT").contents().find("[id$=OnStmtxtEmailAddress]").val():"")+($("#ifrmOnlineSTMNT").contents().find("[id$=OnStmtxtEmailAddress1]").val().trim().length>0?("|"+$("#ifrmOnlineSTMNT").contents().find("[id$=OnStmtxtEmailAddress1]").val()):"")+($("#ifrmOnlineSTMNT").contents().find("[id$=OnStmtxtEmailAddress2]").val().trim().length>0?("|"+$("#ifrmOnlineSTMNT").contents().find("[id$=OnStmtxtEmailAddress2]").val()):"")
}var d=$("#ifrmOnlineSTMNT").contents().find("[id$=ckInvoice]").prop("checked")?"SI":"S";var f="N";if($("#ifrmOnlineSTMNT").contents().find("[id$=rdSendOnetime]").is(":checked")){f=$("#ifrmOnlineSTMNT").contents().find("[id$=rdSendOnetime]").val()}else{if($("#ifrmOnlineSTMNT").contents().find("[id$=rdSendWeekly]").is(":checked")){f=$("#ifrmOnlineSTMNT").contents().find("[id$=rdSendWeekly]").val()}else{f=$("#ifrmOnlineSTMNT").contents().find("[id$=RdSendMonthly]").val()}}var a=$("#ifrmOnlineSTMNT").contents().find("[id$=rdTransaction_Type]").find(":checked").val();
var b=false;if(($("#ifrmOnlineSTMNT").contents().find("[id$=rdSendWeekly]").is(":checked")&&$("#ifrmOnlineSTMNT").contents().find("[id$=chkWeekly]").is(":checked"))||(($("#ifrmOnlineSTMNT").contents().find("[id$=RdSendMonthly]").is(":checked"))&&$("#ifrmOnlineSTMNT").contents().find("[id$=chkMonthly]").is(":checked"))){b=true}$.ajax({url:"/api/OrderHistory/SendStatementOfAccount?emailAddress="+e+"&statementType="+d+"&transaction_Type="+a+"&frequency="+f+"&sendOneTime="+b,cache:false,async:false,timeout:10000,contentType:"application/json",type:"POST",success:function(g){OnlineSatentSent(g)
},failure:function(g){$("#ifrmOnlineSTMNT").contents().find("[id$=pnlStatementRequest]").hide();$("#ifrmOnlineSTMNT").contents().find("[id$=dbError]").show();$("[id$=btnConfirm]").hide()}});return false}function OnlineSatentSent(a){if(a==true){$("#ifrmOnlineSTMNT").contents().find("[id$=pnlThanks]").show();$("#ifrmOnlineSTMNT").contents().find("[id$=pnlStatementRequest]").hide()}else{$("#ifrmOnlineSTMNT").contents().find("[id$=pnlStatementRequest]").hide();$("#ifrmOnlineSTMNT").contents().find("[id$=dbError]").show();
$("[id$=btnConfirm]").hide()}$("[id$=btnConfirm]").hide()};