const pageHelper = require('../../../../../helper/page_helper.js');
const cacheHelper = require('../../../../../helper/cache_helper.js');
const ProjectBiz = require('../../../biz/project_biz.js');
const UnitBiz = require('../../../biz/unit_biz.js');

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		isLoad: false
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	async onLoad(options) {
		ProjectBiz.initPage(this);
		
		let list = await UnitBiz.getAllUnitOptions();

		let unit = cacheHelper.get('unit');

		let method = options.method;

		let url = '../../default/index/default_index';
		if (method == 'index') url = '../../default/index/default_index';
		else if (method == 'news') url = '../../news/index/news_index';
		else if (method == 'calendar') url = '../../meet/calendar/meet_calendar';
		else if (method == 'meet') url = '../../meet/index/meet_index?id=' + options.id;

		this.setData({ list, url, unit, isLoad: true });
	},

	bindUnitTap: function (e) {
		let unit = pageHelper.dataset(e, 'unit');
		this.setData({ unit });
		cacheHelper.set('unit', unit, 86400 * 365);

		let cb = () => {
			wx.reLaunch({
				url: this.data.url,
			})
		}

		pageHelper.showNoneToast('正在切换到' + unit + '...', 1500, cb);
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage() {

	},

	url: async function (e) {
		pageHelper.url(e, this);
	},
})