/**
 * Notes: 单元控制器
 * Date: 2025-03-15 19:20:00 
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
 */
const  UnitService = require('../service/unit_service.js');
const BaseProjectController = require('./base_project_controller.js');

class UnitController extends BaseProjectController {
	async getAllUnitOptions() { 
		let service = new UnitService();
		return await service.getAllUnitOptions(); 
	}

}

module.exports = UnitController;