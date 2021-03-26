"use strict";var bodyEl=document.getElementsByTagName('body')[0];var searchFormEl=document.getElementById('search-form');var searchInputEl=document.getElementById('search-input');var searchSubmitEl=document.getElementById('search-submit');var mobileToggleEl=document.getElementById('mobile');var invertColorsLabelEl=document.getElementById('invert-colors-label');var invertColorsIconEl=document.getElementById('invert-colors-icon');var disqusThread=document.getElementById('disqus_thread');var toggleNav=function toggleNav(){bodyEl.classList.toggle('expand-nav');};var showSearch=function showSearch(){searchFormEl.classList.add('show');searchInputEl.focus();};searchInputEl.addEventListener('blur',function(e){return closeSearch(e);});searchSubmitEl.addEventListener('blur',function(e){return closeSearch(e);});var closeSearch=function closeSearch(e){if(e.relatedTarget&&(e.relatedTarget.classList.contains('search-button')||e.relatedTarget.classList.contains('search-input')))return;searchFormEl.classList.remove('show');};var setCookie=function setCookie(name,val){if(navigator.cookieEnabled){var cookieName=encodeURIComponent(name);var cookieVal=encodeURIComponent(val);var data=new Date();data.setTime(data.getTime()+365*24*60*60*1000);var cookieText="".concat(cookieName,"=").concat(cookieVal,"; expires=").concat(data.toGMTString(),"; path=/");document.cookie=cookieText;}else{alert('Aby korzystać z wszystkich funkcji strony, należy włączyć obsługę ciasteczek.');}};var invertColors=function invertColors(){var toTheme=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var fromTheme=null;if(toTheme){fromTheme=toTheme==='light'?'dark':'light';}var theme=fromTheme||(bodyEl.classList.contains('light')?'light':'dark');if(theme==='light'){bodyEl.classList.remove('light');bodyEl.classList.add('dark');invertColorsLabelEl.innerText='Tryb jasny';invertColorsIconEl.classList.remove('icofont-night');invertColorsIconEl.classList.add('icofont-sun');setCookie('theme','dark');}else{bodyEl.classList.remove('dark');bodyEl.classList.add('light');invertColorsLabelEl.innerText='Tryb ciemny';invertColorsIconEl.classList.remove('icofont-sun');invertColorsIconEl.classList.add('icofont-night');setCookie('theme','light');}if(disqusThread){DISQUS.reset({reload:true});}};var images=document.getElementsByTagName('img');for(var i=0;i<images.length;i++){var img=images[i];var isLoaded=img.complete&&img.naturalHeight!==0;if(!isLoaded){img.addEventListener('load',function(){this.classList.add('show');});}else{img.classList.add('instant');img.classList.add('show');}}
//# sourceMappingURL=main.js.map
