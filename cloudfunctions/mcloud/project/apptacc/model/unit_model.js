/**
 * Notes: 一级分类
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
 * Date: 2023-11-04 19:20:00 
 */


const BaseProjectModel = require('./base_project_model.js');

class UnitModel extends BaseProjectModel {

}

// 集合名
UnitModel.CL = BaseProjectModel.C('unit');

UnitModel.DB_STRUCTURE = {
	_pid: 'string|true',
	UNIT_ID: 'string|true',

	UNIT_ORDER: 'int|true|default=9999',

	UNIT_TITLE: 'string|false|comment=标题',
	UNIT_STATUS: 'int|true|default=1|comment=状态 0/1', 
 

	UNIT_FORMS: 'array|true|default=[]',
	UNIT_OBJ: 'object|true|default={}',

	UNIT_ADD_TIME: 'int|true',
	UNIT_EDIT_TIME: 'int|true',
	UNIT_ADD_IP: 'string|false',
	UNIT_EDIT_IP: 'string|false',
};

// 字段前缀
UnitModel.FIELD_PREFIX = "UNIT_";


module.exports = UnitModel;