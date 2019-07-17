const tabList = [{
	name: '湿垃圾',
	type: '1',
}, {
	name: '干垃圾',
	type: '2'
}, {
	name: '可回收物',
	type: '3'
}, {
	name: '有害垃圾',
	type: '4'
}/* , {
	name: '装修垃圾',
	type: '5'
}, {
	name: '大件垃圾',
	type: '6'
} */];

//http://finance.sina.com.cn/roll/2019-06-13/doc-ihvhiews8613837.shtml     
//https://baijiahao.baidu.com/s?id=1610123548545998368&wfr=spider&for=pc    
 
//投放要求
const deliveryRequirementsList = [
	{
		type:'1',
		name:'湿垃圾',
		info:'是指易腐化的生物质废弃物。包括剩饭剩菜、食材废料、瓜皮果核、过期食品、花卉绿植、肉类碎骨、餐厨垃圾、中药药渣等',
		pic_url:'/static/icon-1.jpg',
		requirement:[
			'• 纯流质的食物垃圾，如牛奶等，应直接倒进下水道',
			'• 有包装物的湿垃圾应将包装物取出后分类投放，包装物请投放到对应的课回收物容器或干垃圾容器'
		]
	},
	{
		type:'2',
		name:'干垃圾',
		info:'是指其它垃圾，指除可回收物、有害垃圾、湿垃圾（厨余垃圾）以外的其它生活废弃物',
		pic_url:'/static/icon-2.jpg',
		requirement:[
			'• 尽量沥干水分',
			'• 难以辨识类别的生活垃圾投放干垃圾容器内'
		]
	},
	{
		type:'3',
		name:'可回收物',
		info:'是指本身或材质可再利用的废纸、玻璃、塑料、金属、布料五大类适宜回收、可循环利用的生活废弃物',
		pic_url:'/static/icon-3.jpg',
		requirement:[
			'• 轻投轻放，避免污染，废纸尽量平整投放',
			'• 立体包装物请清空内容物，清洁后压扁投放',
			'• 有尖锐边角的物品应包裹后投放'
		]
	},
	{
		type:'4',
		name:'有害垃圾',
		info:'是指废电池、废灯管、废药品、废油漆及其容器等对人体健康或自然环境造成直接或者潜在危害的生活废弃物。有害有毒垃圾需特殊正确方法安全处理',
		pic_url:'/static/icon-4.jpg',
		requirement:[
			'• 有机溶剂包装物（如有残留请密闭后投放）',
			'• 废药品（连带包装一并投放）',
			'• 含汞废弃物（易破损请连带包装或包裹后轻放）',
			'• 废电池（投放时请注意轻放）'
		]
	}/* ,
	{
		type:'5',
		name:'装修垃圾',
		info:'是指废电池、废灯管、废药品、废油漆及其容器等对人体健康或自然环境造成直接或者潜在危害的生活废弃物。有害有毒垃圾需特殊正确方法安全处理',
		pic_url:'/static/icon-4.jpg',
		requirement:[
			'• 有机溶剂包装物（如有残留请密闭后投放）',
			'• 废药品（连带包装一并投放）',
			'• 含汞废弃物（易破损请连带包装或包裹后轻放）',
			'• 废电池（投放时请注意轻放）'
		]
	},
	{
		type:'6',
		name:'大件垃圾',
		info:'是指废电池、废灯管、废药品、废油漆及其容器等对人体健康或自然环境造成直接或者潜在危害的生活废弃物。有害有毒垃圾需特殊正确方法安全处理',
		pic_url:'/static/icon-4.jpg',
		requirement:[
			'• 有机溶剂包装物（如有残留请密闭后投放）',
			'• 废药品（连带包装一并投放）',
			'• 含汞废弃物（易破损请连带包装或包裹后轻放）',
			'• 废电池（投放时请注意轻放）'
		]
	} */
];



export default {
	tabList,
	deliveryRequirementsList
}
