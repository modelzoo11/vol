module.exports = { //apptacc
	PROJECT_COLOR: '#ff2e6d',
	NAV_COLOR: '#ffffff',
	NAV_BG: '#ff2e6d',

	// setup
	SETUP_CONTENT_ITEMS: [
		{ title: '关于我们', key: 'SETUP_CONTENT_ABOUT' },
	],

	// 用户
	USER_REG_CHECK: false,
	USER_FIELDS: [
	],

	UNIT_NAME: '医院',
	UNIT_CATE: [
		{ id: 1, title: '医院', style: 'leftpic' },
	],
	UNIT_FIELDS: [
		{ mark: 'cover', title: '封面图片', type: 'image', min: 1, max: 1, must: true },
		{ mark: 'desc', title: '简介', type: 'textarea', must: true },
	],

	NEWS_NAME: '资讯',
	NEWS_CATE: [
		{ id: 1, title: '通知公告', style: 'leftpic' }, 
	],
	NEWS_FIELDS: [

	],

	MEET_NAME: '预约',
	MEET_CATE: [
		{ id: 1, title: '急诊陪诊', style: 'leftbig1' },
		{ id: 2, title: '普通陪诊', style: 'leftbig1' },
		{ id: 3, title: 'VIP陪诊', style: 'leftbig1' },
		{ id: 4, title: '代问诊', style: 'leftbig1' },
		{ id: 5, title: '代开药', style: 'leftbig1' },
		{ id: 6, title: '取结果', style: 'leftbig1' },
	],
	MEET_CAN_NULL_TIME: false, // 是否允许有无时段的日期保存和展示
	MEET_FIELDS: [
		{ mark: 'cover', title: '封面图片', type: 'image', min: 1, max: 1, must: true },
		{ mark: 'content', title: '详情', type: 'content', must: true }, 
	],

	MEET_JOIN_FIELDS: [
		{ mark: 'name', type: 'text', title: '姓名', must: true, min: 2, max: 30, edit: false },
		{ mark: 'phone', type: 'text', len: 11, title: '手机号', must: true, edit: false },
		{ mark: 'keshi', type: 'text', title: '科室', must: true, min: 2, max: 100, edit: true },
	],

	// 时间默认设置
	MEET_NEW_NODE:
	{
		mark: 'mark-no', start: '09:00', end: '12:00', limit: 30, isLimit: true, status: 1,
		stat: { succCnt: 0, cancelCnt: 0, adminCancelCnt: 0, }
	},
	MEET_NEW_NODE_DAY: [
		{
			mark: 'mark-am', start: '09:00', end: '12:00', limit: 30, isLimit: true, status: 1,
			stat: { succCnt: 0, cancelCnt: 0, adminCancelCnt: 0, }
		},
		{
			mark: 'mark-pm', start: '14:00', end: '17:30', limit: 30, isLimit: true, status: 1,
			stat: { succCnt: 0, cancelCnt: 0, adminCancelCnt: 0, }
		}
	],


}