	var request = new XMLHttpRequest();

	request.open('GET', 'https://airoco.chuden.co.jp/data-api/latest?id=TM4QZcsW&subscription-key=6a27cdf2656940e7bdb9a70bef64b5a7', true);
//request.open('GET', 'https://airoco.chuden.co.jp/data-api/latest?id=bSbDX8L2&subscription-key=e59d4264e28d400d911e21ad1fd95b43', true);

	request.responseType = 'json';
	request.send(null);


	let userAgent = window.navigator.userAgent.toUpperCase();
	if (userAgent.indexOf('MSIE') === -1 && userAgent.indexOf('TRIDENT') === -1) {

	    request.onload = function () {
	        var jsonData = this.response;
	        var data = JSON.stringify(jsonData,null,'    ');
	        jsons = JSON.parse(data);

	        var sn1 = 0;
	        var sn2 = 0;
	        var sn3 = 0;
	        var sn4 = 0;
	        
	        var sNumber1 = "440103226797818";  // 対象センサ1の番号を入力する
	        var sNumber2 = "440103227533695";  // 対象センサ2の番号を入力する
	        var sNumber3 = "440103244344306";  // 対象センサ3の番号を入力する
	        var sNumber4 = "440103244344306";  // 対象センサ4の番号を入力する ダミー


	        //var sNumber1 = "001CC24F532F";  // 対象センサ1の番号を入力する
	        //var sNumber2 = "001CC24F52CD";  // 対象センサ2の番号を入力する
	        //var sNumber3 = "001CC24F5405";  // 対象センサ3の番号を入力する
	        //var sNumber4 = "001CC24F52A2";  // 対象センサ4の番号を入力する



	        jsons = JSON.parse(data);
	        for (var i = 0; i < jsons.length; i++) {
	            if (jsons[i].sensorNumber === sNumber1){
	                sn1 = i;
	            }
	            if (jsons[i].sensorNumber === sNumber2){
	                sn2 = i;
	            }
	            if (jsons[i].sensorNumber === sNumber3){
	                sn3 = i;
	            }
	            if (jsons[i].sensorNumber === sNumber4){
	                sn4 = i;
	            }

	        }
	        var cmnt = "---";

	//          jsons[sn1].co2 = 1234;     //テスト用


	        if  (jsons[sn1].co2 === null){
	           cmnt = "調整中";
	           co21.innerHTML = cmnt ;
	        }else{
	           co21.innerHTML = jsons[sn1].co2 + "ppm";
	        }
	        if  (jsons[sn2].co2 === null){
	           cmnt = "調整中";
	           co22.innerHTML = cmnt ;
	        }else{
	           co22.innerHTML = jsons[sn2].co2 + "ppm";
	        }
	        if  (jsons[sn3].co2 === null){
	           cmnt = "調整中";
	           co23.innerHTML = cmnt ;
	        }else{
	           co23.innerHTML = jsons[sn3].co2 + "ppm";
	        }
	        if  (jsons[sn4].co2 === null){
	           cmnt = "調整中";
	           co24.innerHTML = cmnt ;
	        }else{
	           co24.innerHTML = jsons[sn4].co2 + "ppm";
	        }

		}

	} else {

		request.addEventListener('load', function() {
			if (request.readyState === 4 && request.status === 200) {
				var data = request.response;
				if (JSON && navigator.userAgent.indexOf('Trident') !== -1) {

			        var sn1 = 0;
			        var sn2 = 0;
			        var sn3 = 0;
			        var sn4 = 0;
			        
			        var sNumber1 = "440103226797818";  // 対象センサ1の番号を入力する
			        var sNumber2 = "440103227533695";  // 対象センサ2の番号を入力する
			        var sNumber3 = "440103244344306";  // 対象センサ3の番号を入力する
			        var sNumber4 = "440103244344306";  // 対象センサ4の番号を入力する ダミー

			        //var sNumber1 = "001CC24F532F";  // 対象センサ1の番号を入力する
			        //var sNumber2 = "001CC24F52CD";  // 対象センサ2の番号を入力する
			        //var sNumber3 = "001CC24F5405";  // 対象センサ3の番号を入力する
			        //var sNumber4 = "001CC24F52A2";  // 対象センサ4の番号を入力する


					jsons = JSON.parse(data);

			        for (var i = 0; i < jsons.length; i++) {
			            if (jsons[i].sensorNumber === sNumber1){
			                sn1 = i;
			            }
			            if (jsons[i].sensorNumber === sNumber2){
			                sn2 = i;
			            }
			            if (jsons[i].sensorNumber === sNumber3){
			                sn3 = i;
			            }
			            if (jsons[i].sensorNumber === sNumber4){
			                sn4 = i;
			            }

			        }
		            var cmnt = "---";

			        if  (jsons[sn1].co2 === null){
			           cmnt = "調整中";
			           co21.innerHTML = cmnt ;
			        }else{
			           co21.innerHTML = jsons[sn1].co2 + "ppm";
			        }
			        if  (jsons[sn2].co2 === null){
			           cmnt = "調整中";
			           co22.innerHTML = cmnt ;
			        }else{
			           co22.innerHTML = jsons[sn2].co2 + "ppm";
			        }
			        if  (jsons[sn3].co2 === null){
			           cmnt = "調整中";
			           co23.innerHTML = cmnt ;
			        }else{
			           co23.innerHTML = jsons[sn3].co2 + "ppm";
			        }
			        if  (jsons[sn4].co2 === null){
			           cmnt = "調整中";
			           co24.innerHTML = cmnt ;
			        }else{
			           co24.innerHTML = jsons[sn4].co2 + "ppm";
			        }

				}
			}
		}, false);
	}

