
const ProjectBiz = require('../../../biz/project_biz.js');
const NewsBiz = require('../../../biz/news_biz.js');
const pageHelper = require('../../../../../helper/page_helper.js');
const cacheHelper = require('../../../../../helper/cache_helper.js');

Page({

	data: {
		isLoad: false,
		_params: null,

		sortMenus: [],
		sortItems: []
	},

	onLoad: function (options) {
		ProjectBiz.initPage(this);
		this._setCate(NewsBiz.getCateList(), options, null);

		let unit = cacheHelper.get('unit');
		let cb = () => {
			wx.reLaunch({
				url: '../../unit/select/unit_select?method=news',
			});
		}
		if (!unit) return pageHelper.showModal('请先选择医院', '温馨提示', cb);

		this.setData({ unit });


		this.setData({
			isLoad: true,
			_params: {
				unit, 
			}
		}); 

		this._getSearchMenu();


	},

	url: async function (e) {
		pageHelper.url(e, this);
	},

	bindCommListCmpt: function (e) {
		pageHelper.commListListener(this, e);
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	},

	_setCate(cateList, options, cateId = null) {
		if (cateId) {
			if (options) options.id = cateId;

		}

		if (options && options.id) {
			this.setData({
				isLoad: true,
				_params: {
					cateId: options.id,
				}
			});
			BaseBiz.setCateTitle(cateList, cateId);
		} else {
			this._getSearchMenu(cateList);
			this.setData({
				isLoad: true
			});
		}

	},

	_getSearchMenu: function (cateList) {

		let sortItem1 = [{
			label: '全部',
			type: 'cateId',
			value: ''
		}];

		sortItem1 = sortItem1.concat(cateList);
		if (sortItem1.length <= 2) return;


		let sortItems = [];
		let sortMenus = sortItem1;
		this.setData({
			sortItems,
			sortMenus
		})

	}


})