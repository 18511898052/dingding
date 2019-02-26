var initialData = {
  name: 'alibaba'
};

Page({
  data: initialData,
  changeName(e) {
    // sent data change to view
    this.setData({
      name: 'dingtalk'
    })
  }
});
