(function(){
	var oTabs = document.getElementById("tabs");
	var aA = oTabs.children[0].children;
	var oTab_list = document.getElementById("tab_list");
	var aDiv = oTab_list.children;

	for(var i=0; i<aA.length; i++){

		(function(index){

			aA[i].onmouseover = function(){
				for(var i = 0; i<aA.length; i++){
					aA[i].className = "";
					aDiv[i].className = "ping-div";
				}

				this.className = "active";
				aDiv[index].className = "active";
			};

		})(i);
	}
})();