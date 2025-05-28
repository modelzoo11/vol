/**
 * Notes: 单元模块后台管理-控制器
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
 * Date: 2025-07-23 07:48:00 
 */

const BaseProjectAdminController = require('./base_project_admin_controller.js');
const AdminUnitService = require('../../service/admin/admin_unit_service.js');
const timeUtil = require('../../../../framework/utils/time_util.js');
const UnitModel = require('../../model/unit_model.js');

class AdminUnitController extends BaseProjectAdminController {


	async sortUnit() {
		await this.isAdmin();

		let rules = {
			id: 'must|id',
			sort: 'must|int',
		};

		// 取得数据
		let input = this.validateData(rules);

		let service = new AdminUnitService();
		await service.sortUnit(input.id, input.sort);
	}

	async statusUnit() {
		await this.isAdmin();

		// 数据校验
		let rules = {
			id: 'must|id',
			status: 'must|int',
		};

		// 取得数据
		let input = this.validateData(rules);

		let service = new AdminUnitService();
		await service.statusUnit(input.id, input.status);

	}


	async delUnit() {
		await this.isAdmin();

		// 数据校验
		let rules = {
			id: 'must|id',
		};

		// 取得数据
		let input = this.validateData(rules);

		let title = await UnitModel.getOneField(input.id, 'UNIT_TITLE');

		let service = new AdminUnitService();
		await service.delUnit(input.id);

		if (title)
			this.logOther('删除了产品分类《' + title + '》');

	}

	async getAdminUnitList() {
		await this.isAdmin();

		// 数据校验
		let rules = {
			search: 'string|min:1|max:30|name=搜索条件',
			sortType: 'string|name=搜索类型',
			sortVal: 'name=搜索类型值',
			orderBy: 'object|name=排序',
			whereEx: 'object|name=附加查询条件',
			page: 'must|int|default=1',
			size: 'int',
			isTotal: 'bool',
			oldTotal: 'int',
		};

		// 取得数据
		let input = this.validateData(rules);

		let service = new AdminUnitService();
		let result = await service.getAdminUnitList(input);

		// 数据格式化
		let list = result.list;
		for (let k in list) {

			list[k].UNIT_ADD_TIME = timeUtil.timestamp2Time(list[k].UNIT_ADD_TIME);

		}
		result.list = list;

		return result;
	}

	async insertUnit() {
		await this.isAdmin();

		// 数据校验
		let rules = {

		};

		// 取得数据
		let input = this.validateData(rules);

		let service = new AdminUnitService();
		let result = await service.insertUnit(input);

		this.logOther('添加了产品分类《' + input.title + '》');

		return result;
	}

	async editUnit() {
		await this.isAdmin();

		// 数据校验
		let rules = {

		};

		// 取得数据
		let input = this.validateData(rules);

		let service = new AdminUnitService();
		let result = await service.editUnit(input);

		this.logOther('修改了产品分类《' + input.title + '》');

		return result;
	}

	async getUnitDetail() {
		await this.isAdmin();

		// 数据校验
		let rules = {
			id: 'must|id',
		};

		// 取得数据
		let input = this.validateData(rules);

		let service = new AdminUnitService();
		return await service.getUnitDetail(input.id);

	}

	async updateUnitForms() {
		await this.isAdmin();

		// 数据校验
		let rules = {
			id: 'must|id',
			hasImageForms: 'array'
		};

		// 取得数据
		let input = this.validateData(rules);

		let service = new AdminUnitService();
		return await service.updateUnitForms(input);
	}

}

module.exports = AdminUnitController;