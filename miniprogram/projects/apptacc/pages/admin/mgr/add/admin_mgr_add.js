const AdminBiz = require('../../../../../../comm/biz/admin_biz.js');
const PublicBiz = require('../../../../../../comm/biz/public_biz.js');
const pageHelper = require('../../../../../../helper/page_helper.js');
const cloudHelper = require('../../../../../../helper/cloud_helper.js');
const validate = require('../../../../../../helper/validate.js');
const UnitBiz = require('../../../../biz/unit_biz.js');

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		isLoad: false,

		formName: '',
		formUnitId: '',
		formDesc: '',
		formPhone: '',
		formPassword: '',
		formType: 0,
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: async function (options) {
		if (!AdminBiz.isAdmin(this, true)) return;

		let unitIdOptions = await UnitBiz.getAllUnitOptions();

		this.setData({
			unitIdOptions,
			isLoad: true
		});
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	url: function (e) {
		pageHelper.url(e, this);
	},


	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

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



	/** 
	 * 数据提交
	 */
	bindFormSubmit: async function () {
		if (!AdminBiz.isAdmin(this, true)) return;

		let data = this.data;

		// 数据校验 
		const CHECK_FORM_MGR_ADD = {
			type: 'formType|must|int|default=0|name=类型',
			unitId: 'formUnitId|id|name=医院',
			name: 'formName|must|string|min:5|max:30|name=账号',
			desc: 'formDesc|must|string|max:30|name=姓名',
			phone: 'formPhone|string|len:11|name=手机',
			password: 'formPassword|must|string|min:6|max:30|name=密码',
		};

		data = validate.check(data, CHECK_FORM_MGR_ADD, this);
		if (!data) return;
		data.unitName = UnitBiz.getUnitName(this.data.unitIdOptions, data.unitId);

		try {
			let adminId = this.data.id;
			data.id = adminId;

			await cloudHelper.callCloudSumbit('admin/mgr_insert', data).then(res => {

				let callback = async function () {
					PublicBiz.removeCacheList('admin-mgr');
					wx.navigateBack();

				}
				pageHelper.showSuccToast('添加成功', 1500, callback);
			});


		} catch (err) {
			console.log(err);
		}

	},
})