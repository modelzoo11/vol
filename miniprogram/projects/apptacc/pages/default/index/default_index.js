const pageHelper = require('../../../../../helper/page_helper.js');
const cloudHelper = require('../../../../../helper/cloud_helper.js');
const ProjectBiz = require('../../../biz/project_biz.js');
const projectSetting = require('../../../public/project_setting.js');
const cacheHelper = require('../../../../../helper/cache_helper.js');

Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		isLoad: false,
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: async function (options) {
		ProjectBiz.initPage(this);

		this.setData({
			cateList: projectSetting.MEET_CATE
		});


		let unit = cacheHelper.get('unit');
		let cb = () => {
			wx.reLaunch({
				url: '../../unit/select/unit_select?method=index',
			});
		}
		 
		if (!unit) return pageHelper.showModal('请先选择医院', '温馨提示', cb);

		this.setData({ unit, isLoad: true });

		this._loadList();
	},

	_loadList: async function () {
		let opts = {
			title: 'bar'
		}
		await cloudHelper.callCloudSumbit('home/list', { unit: this.data.unit }, opts).then(res => {
			this.setData({
				...res.data
			});
		})
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () { },

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: async function () {

	},

	onPullDownRefresh: async function () {
		await this._loadList();
		wx.stopPullDownRefresh();
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	url: async function (e) {
		pageHelper.url(e, this);
	},


	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	},
})