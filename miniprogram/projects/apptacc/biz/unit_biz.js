/**
 * Notes: 分类后台管理模块业务逻辑
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
 * Date: 2023-11-14 07:48:00 
 */

const BaseBiz = require('../../../comm/biz/base_biz.js');
const cloudHelper = require('../../../helper/cloud_helper.js');

class UnitBiz extends BaseBiz {

	//  取得所有分类 
	static async getAllUnitOptions(title = 'bar') {
		return await cloudHelper.callCloudData('unit/all_options', {}, { title });
	}

	// 根据分类ID获取文字描述 
	static getUnitName(allUnitOptions, unitId) {
		for (let k = 0; k < allUnitOptions.length; k++) {
			if (allUnitOptions[k].val == unitId) return allUnitOptions[k].label;
		}
		return '';
	}

	static async getAllUnitSelect() {
		let list = await UnitBiz.getAllUnitOptions();
		let sortItem = [{ label: '医院', type: '', value: 0 }];
		for (let k = 0; k < list.length; k++) {
			sortItem.push({ label: list[k].label, type: 'unitId', value: list[k].val });
		}
		return sortItem;
	}
}

module.exports = UnitBiz;