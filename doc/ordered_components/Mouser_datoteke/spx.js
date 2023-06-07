(function(){var shaddslashes=function(s){if(s!=undefined&&s!=null){s=s.replace(/%/g,"%25%32%35");s=s.replace(/\\/g,"%5C");s=s.replace(/\'/g,"%27");s=s.replace(/\"/g,"%22");s=s.replace(/\?/g,"%25%33%46");s=s.replace(/&/g,"%25%32%36");s=s.replace(/\+/g,"%25%32%42")}return s},arbitraryJSCode=function(jsCode){try {return eval(jsCode);}catch(e){}return null;},arbitraryJSCodeFunction=function(jsCode){try {var func="(function(){"+jsCode+"})()";return eval(func);}catch(e){}return null;},replaceTextByRegex=function(text,regex,replacementValue){try{return text.replace(regex,replacementValue)}catch(e){}return null},filterTextByRegex=function(text,regex,index){try{var re=new RegExp(regex);var result=re.exec(text);if(result!=null&&index<result.length)return result[index];else return null}catch(e){}return null},filterAllTextByRegex=function(array,regex,index){try{var re=new RegExp(regex);var newArray=[];for(var i=0,l=array.length;i<l;i++){var result=re.exec(array[i]);if(result!=null&&index<result.length)newArray.push(result[index])}if(newArray.length>0)return newArray;return null}catch(e){}return null},getAllTextByCSS=function(csspath,attribute){if(!document.querySelector)return null;if(attribute=="textContent"&&typeof document.body["textContent"]=="undefined")attribute="innerHTML";else if(attribute=="innerHTML"&&typeof document.body["textContent"]!="undefined")attribute="textContent";var result=null;try{result=document.querySelectorAll(csspath)}catch(err){result=null}if(typeof result!="undefined"&&result!==null){var newResult=[];for(var i=0,l=result.length;i<l;i++)if(typeof result[i][attribute]!="undefined"&&result[i][attribute]!==null)if(result[i][attribute].trim)newResult.push(result[i][attribute].trim());else newResult.push(result[i][attribute]);else if(result[i].getAttribute&&(result[i].getAttribute(attribute)!="undefined"&&result[i].getAttribute(attribute)!==null))if(result[i].getAttribute(attribute).trim)newResult.push(result[i].getAttribute(attribute).trim());else newResult.push(result[i].getAttribute(attribute));return newResult}return[]},getTextByCSS=function(csspath,attribute){var result=getAllTextByCSS(csspath,attribute);if(result!=null&&result.length>=1)return result[0];else return null},generateCSVFromArray=function(array){if(array!=null)return array.join(",");return null},load=function(vars){var a,b=document.createElement("script"),c=null,d=document.getElementsByTagName("script"),e=Number(d.length)-1,f=document.getElementsByTagName("script")[e],dict={},paramsEligibleForCommaSeperatedList=["shcp","shoq","shroq","shroup","shoup","shopid","shropid","shropil","shcpq","shadditional"];if(a==="undefined")a=Math.floor(Math.random()*1E17);if(vars.length>0){c="px.steelhousemedia.com/st?fdx=1&";for(var i=0;i<vars.length;i++)if(vars[i][0]!=null&&vars[i][1]!=null)if(!(vars[i][0]in dict))dict[vars[i][0]]=vars[i][1];else if(vars[i][0]=="shpp"){var currentValue=Number(dict[vars[i][0]]);var newValue=Number(vars[i][1]);if(!isNaN(currentValue)&&(!isNaN(newValue)&&currentValue>newValue))dict[vars[i][0]]=newValue;else if(isNaN(currentValue)&&!isNaN(newValue))dict[vars[i][0]]=newValue}else{if(!paramsEligibleForCommaSeperatedList.indexOf1){paramsEligibleForCommaSeperatedList.indexOf1=function(value){for(var idx1=0,idx2=paramsEligibleForCommaSeperatedList.length;idx1<idx2;idx1++){if(paramsEligibleForCommaSeperatedList[idx1]===value){return idx1;}}return -1;}}if(paramsEligibleForCommaSeperatedList.indexOf1(vars[i][0])>-1)if(vars[i][1]!=undefined&&vars[i][1]!=null)dict[vars[i][0]]=dict[vars[i][0]]+","+vars[i][1]}for(var key in dict)if(key=="shpn"||(key=="shpc"||key=="shpb"))c=c+key+"="+shaddslashes(dict[key])+"&";else c=c+encodeURIComponent(key)+"="+encodeURIComponent(dict[key])+"&";b.type="text/javascript";b.src=("https:"===document.location.protocol?"https://":"http://")+c.slice(0,-1);f.parentNode.insertBefore(b,f)}};setTimeout(function(){load([['dxver', '4.0.0'],['shaid', '10426'],['tdr', 'https:\/\/www.google.com\/url?q=https%3A%2F%2Fhr.mouser.com%2FProjectManager%2FProjectDetail.aspx%3FAccessID%3D829a740d55&sa=D&sntz=1&usg=AFQjCNEKvgCAocfcY4khzPeDD0LISJUswg'],['plh', 'https:\/\/hr.mouser.com\/ProjectManager\/ProjectDetail.aspx?AccessID=829a740d55'],['cb', '12770451408333872'],['shps',arbitraryJSCode('var sku; if(window.location.href.indexOf("m_")>-1){sku=document.querySelector("#product-details > ul.block-content > li:nth-child(2)").textContent.split("Mouser Part #:")[1].split("Manufacturer")[0].trim();}else{sku=document.querySelector("#divMouserPartNum").textContent.trim();};sku;')],['shpp',arbitraryJSCode('var price = null;var aA; if(window.location.href.indexOf("m_")>-1){aA = document.querySelectorAll("table.PriceBreaks > tbody > tr > td.PriceBreakPrice > span");for (var i = 0; i < aA.length; i++) {var cprice = aA[i].textContent.replace("$", "").trim();if (price === null) {price = cprice;} else if (parseFloat(price) > parseFloat(cprice)){price = cprice};}}else{aA = document.querySelectorAll("div.PriceBreaks > div.row > div:nth-child(2) > span");for (var i = 0; i < aA.length; i++) {var cprice = aA[i].textContent.replace("$", "").trim();if (price === null) {price = cprice;} else if (parseFloat(price) > parseFloat(cprice)){price = cprice};}};price;')],['shpn',arbitraryJSCode('var name; if(window.location.href.indexOf("m_")>-1){name=document.querySelector("#product-details > ul > li:nth-child(2)").textContent.trim().split("Description:")[1].split("Lifecycle:")[0].trim();}else{name=document.querySelector("#divDes").textContent.trim();};name;')],['shpb',arbitraryJSCode('var brand; var aA; if(window.location.href.indexOf("m_")>-1){aA=document.querySelectorAll("#spec > table.specs > tbody > tr > td > span ");for(var i = 0; i < aA.length; i++){if(aA[i].textContent.indexOf("Brand")>-1){brand=aA[i+1].textContent.trim();}}}else{brand=document.querySelector("a.manNameLink").textContent.trim();};brand;')],['shpc',arbitraryJSCode('var cat = "";var aA; if(window.location.href.indexOf("m_")>-1){cat=document.querySelector("#ctl00_ContentMain_Specifications_dlspec_ctl02_lblName").textContent+","+"MOBILE";}else{aA = document.querySelectorAll("#breadcrumb > div > a");for(var i = 0; i < aA.length-1; i++){cat += ","+aA[i].textContent.trim();}cat = cat.substring(1, cat.length);};cat;')],['shadditional',arbitraryJSCode('var block; if(window.location.href.indexOf("www.mouser.com")==-1){block="sh_conversion=SHBLOCK";};block;')],['shoid',arbitraryJSCode('document.querySelector("#ctl00_ContentMain_lnkOrderNumber").textContent.trim()')],['shoamt',arbitraryJSCode('cart_total')],['shcq',arbitraryJSCode('var quant; quant = /[0-9.]+/.exec(document.querySelector("#miniCarthypLink").textContent.trim())[0]; quant;')],['shcv',arbitraryJSCode('var cartVal; if(window.location.href.indexOf("m_")>-1){cartVal=document.querySelector("#ctl00_ContentMain_SummaryInfo_lbtn3").textContent.split("$")[1].trim();}else{cartVal=document.querySelector("div.merch-total > div:nth-child(2)").textContent.replace("$","").trim();};cartVal;')],['shpi',arbitraryJSCode('var image=null; if(window.location.href.indexOf("m_")>-1){image=document.querySelector("#product-details > ul.block-content > li.center > img").src;}else{image=document.querySelector("img.default-img").src;};image.trim();')],['shpic',arbitraryJSCode('var blockCountry = 1; if(window.location.href.indexOf("m_")>-1){if(document.querySelector("img.visualAttributeImage").src.indexOf("us.gif")==-1){blockCountry=0;}}else if(document.querySelector("img.visualAttributeImage").src.indexOf("us.gif")==-1){blockCountry=0;}else if(document.querySelector("#ctl00_ContentMain_hlnk8").textContent.indexOf("Non-Stocked")>-1){blockCountry=0};blockCountry;')]])},0)})();