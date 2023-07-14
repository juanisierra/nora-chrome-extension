// // Search the bookmarks when entering the search keyword.
// $('#api-key').change(function () {
//     $('#api-key').empty();
    
//   });


$( "#api-key-form" ).on( "submit", function( event ) {
    event.preventDefault();
    setAPIKey($('#api-key').val());
    setKeyInSpan($('#api-key').val());
    loadAPIKey();
  });
  
  function setAPIKey(newKey) {
    chrome.storage.local.set({ apiKey: newKey });
  }

  function setKeyInSpan(newKey) {
    $( "#currentKey" ).text(newKey);
  }
  
   function  loadAPIKey() {
    chrome.storage.local.get('apiKey', ({ apiKey }) => setKeyInSpan(apiKey));
  }

  document.addEventListener('DOMContentLoaded', function () {
    loadAPIKey();
  });