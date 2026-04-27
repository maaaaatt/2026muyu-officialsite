export function startLoading (elem, cb){
	var imgLoad  = imagesLoaded( elem );
	var _total   = imgLoad.images.length;
	var _current = 0;
	imgLoad.on( 'progress', function( instance, image ) {
		_current++;
		var _percentage = Math.floor((_current/_total)*100);
		// $loading.find('.percent').text(Math.floor(_percentage)+'%');
	});
	imgLoad.on( 'always', function( instance, image ) {
		if (typeof cb === 'function')cb();
	});
}

export function dateFormatter(d){
	return `${d.getFullYear()}.${d.getMonth()+1}.${d.getDate()}`
}

export function randomNum(max,min) {
    return Math.random()*(max-min)+min;
}

export function stripHtmlTag(html) {
    return html.replace( /(<([^>]+)>)/ig, '');
}

export const getImgUrl = (path) => {
  // 這裡路徑必須使用字面常數，不能完全動態，Vite 才能預先掃描
  const images = import.meta.glob('@/assets/images/**/*', { 
    eager: true, 
    import: 'default' 
  })
  
  const fullPath = `/assets/images/${path}`
  return images[fullPath] || '' // 若找不到則回傳空字串
}

export function foo (){
	return 'bar';
}