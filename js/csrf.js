function clarifyRequest(){
	var f = document.createElement('form');
  f.style.display = 'none';
	var nsfw = document.getElementById('nsfw');
  nsfw.appendChild(f);
  f.method = 'POST';
  f.action = 'http://choretracker327.herokuapp.com/tasks/';

  var tname = document.createElement('input');
  tname.type = 'hidden';
	tname.name = 'task[name]';
	tname.value = 'Feed the chickens';
	f.appendChild(tname);

	var tpoints = document.createElement('input');
	tpoints.type = 'hidden';
	tpoints.name = 'task[points]';
	tpoints.value = '1';
	f.appendChild(tpoints);

  f.submit();
  return false;
}