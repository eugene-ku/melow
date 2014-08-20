// var mockjax = require('mockjax');

$.mockjax({
  type: 'GET',
  url: '/api/playlists',
  status: '200',
  dataType: 'json',
  responseText: {
    playlists: [
      {
        id: 1,
        title: "red"
      },
      {
        id: 2,
        title: "green"
      },
      {
        id: 3,
        title: "blue"
      }
     ]
  }
});
// export default {};
