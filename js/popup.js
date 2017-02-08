var storage = chrome.storage.local;

document.addEventListener('DOMContentLoaded', function() {

  var text = document.getElementById('text');
  var urlListDiv = document.getElementById('urlList');
  var urlsHidden = true;

  // Get selected tab and use tab.url
  chrome.tabs.getSelected(null, function(tab) {
    var url = sliceUrl(tab.url);
    getNotes(url, text);

    // Create listener to save notes on input
    text.addEventListener('input', function(){
      saveNotes(url, text);
    });
  });

  document.getElementById('clear').addEventListener('click', function(){
    storage.clear();
    text.value = "";
    urlsHidden = true;
    showUrls(urlsHidden, urlList);
  });

  document.getElementById('show').addEventListener('click', function(){
    urlsHidden = !urlsHidden;
    showUrls(urlsHidden, urlList);
  });

});

function getNotes(url, text){
  storage.get(url, function(data){
    if(data[url]){
      text.value = data[url];
    }
  });

}

function saveNotes(url, text){
  storage.set({ [url]: text.value });
}

function sliceUrl(url){
  endIndex = url.indexOf("?");
  return (endIndex==-1? url : url.slice(0,endIndex));
}

function showUrls(hide, urlListDiv){
  if(hide){
    urlListDiv.innerHTML = "";
  } else{
    storage.get(function(data){
      var list = ''
      Object.keys(data).forEach(function(key){
        list += "<a href=\""+key+"\">" + key + "</a><br>"
      });
      urlListDiv.innerHTML = list;
    })
  }
}
