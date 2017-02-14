function getData(){
	alert("hi");
	var myURL="https://itunes.apple.com/search?term=jack+johnson";
	$.ajax({
	url:myURL,
	method:"GET",
	dataType="jsonp",
		success:function(data){
			var length=data.results.length;
			for(var i=0;i<length;i++)
			{
			
				$('#result').append("<option value= " i " >" + data.results[i].collectionName + "</option>");
			}
			$('#result').on('change',function(){
				$('#final').html("");
				var no = $(this).val();
				for(key in data.results[number])
				{
					$('#final').append("<option>" +data.results[number][key]+ "</option>");
				}
				
				
			})
		},
		failure:function(){
			console.log("it is an error");
		}
	});
}