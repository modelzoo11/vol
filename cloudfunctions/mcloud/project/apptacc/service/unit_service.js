/**
 * Notes: 单元管理
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
 * Date: 2023-11-20 07:48:00 
 */

const BaseProjectService = require('./base_project_service.js');
const UnitModel = require('../model/unit_model.js');

class UnitService extends BaseProjectService {

	async getAllUnitOptions(status = 1) {
		let unitList = await UnitModel.getAll({ UNIT_STATUS: status }, '*', { 'UNIT_ORDER': 'asc', 'UNIT_ADD_TIME': 'desc' });

		let arr = [];
		for (let k in unitList) {
			let unitId = unitList[k]._id;

			let unitNode = {
				obj: unitList[k].UNIT_OBJ,
				label: unitList[k].UNIT_TITLE,
				val: unitId,
				value: unitId
			}

			arr.push(unitNode);
		}

		return arr;
	}
}

module.exports = UnitService;