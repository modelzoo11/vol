/**
 * Notes: 单元后台管理
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
 * Date: 2025-07-23 07:48:00 
 */

const BaseProjectAdminService = require('./base_project_admin_service.js');
const util = require('../../../../framework/utils/util.js');
const dataUtil = require('../../../../framework/utils/data_util.js');
const UnitModel = require('../../model/unit_model.js');

class AdminCateService extends BaseProjectAdminService {

	async sortUnit(id, sort) {
		this.AppError('[医院陪诊]该功能暂不开放，如有需要请加作者微信：cclinux0730');
	}

	async statusUnit(id, status) {
		this.AppError('[医院陪诊]该功能暂不开放，如有需要请加作者微信：cclinux0730');

	}

	async getAdminUnitList({
		search, // 搜索条件
		sortType, // 搜索菜单
		sortVal, // 搜索菜单
		orderBy, // 排序
		whereEx, //附加查询条件
		page,
		size,
		isTotal = true,
		oldTotal
	}) {

		orderBy = orderBy || {
			'UNIT_ORDER': 'asc',
			'UNIT_ADD_TIME': 'desc'
		};
		let fields = '*';

		let where = {};
		where.and = {
			_pid: this.getProjectId() //复杂的查询在此处标注PID
		};

		if (util.isDefined(search) && search) {
			where.or = [{
				UNIT_TITLE: ['like', search]
			},];

		} else if (sortType && util.isDefined(sortVal)) {
			// 搜索菜单
			switch (sortType) {
				case 'status':
					// 按类型
					where.and.UNIT_STATUS = Number(sortVal);
					break;
			}
		}

		return await UnitModel.getList(where, fields, orderBy, page, size, isTotal, oldTotal);
	}

	async delUnit(id) {
		this.AppError('[医院陪诊]该功能暂不开放，如有需要请加作者微信：cclinux0730');
	}

	async insertUnit({
		title,
		order,
		forms
	}) {
		this.AppError('[医院陪诊]该功能暂不开放，如有需要请加作者微信：cclinux0730');

	}

	async getUnitDetail(id) {
		let fields = '*';

		let unit = await UnitModel.getOne(id, fields);
		if (!unit) return null;

		return unit;
	}

	async editUnit({
		id,
		title,
		order,
		forms }) {

		this.AppError('[医院陪诊]该功能暂不开放，如有需要请加作者微信：cclinux0730');
	}

	async updateUnitForms({
		id,
		hasImageForms
	}) {
		this.AppError('[医院陪诊]该功能暂不开放，如有需要请加作者微信：cclinux0730');

	}


}

module.exports = AdminCateService;