<template>
	<view>

		<view v-for="(item,index) in refuseProblemList" :key="index" v-show="index==currentIndex && showAnswerStatus == false">
			<text style="margin: 20upx 0 50upx 30upx;display: block;">{{index+1}}.<text style="color:red;font-size: 58upx;margin: 0 20upx 0 15upx;">{{item.name}}</text>属于那个垃圾分类?</text>
			<view class="answer-box">
				<view v-bind:class="{ active: isActive1 }" class="content-box" @click="selectAnswer(1,item,index)">
					<image src="/static/icon1.jpg" />
					<view>湿垃圾</view>
				</view>
				<view v-bind:class="{ active: isActive2 }" class="content-box" @click="selectAnswer(2,item,index)">
					<image src="/static/icon2.jpg" />
					<view>干垃圾</view>
				</view>
				<view v-bind:class="{ active: isActive3 }" class="content-box" @click="selectAnswer(3,item,index)">
					<image src="/static/icon3.jpg" />
					<view>可回收物</view>
				</view>
				<view v-bind:class="{ active: isActive4 }" class="content-box" @click="selectAnswer(4,item,index)">
					<image src="/static/icon4.jpg" />
					<view>有害垃圾</view>
				</view>
			</view>
			<text class="current-info">{{currentIndex+1}} / {{refuseProblemTotal}}</text>
		</view>
		<view v-if="showAnswerStatus == true">

			<view class="gradeContent">
				<view class="line"></view>
				<view v-for="(item,key) in gradeList" :class="{'item':true, 'item-checked': key==nowGrade, 'item-close': item.isActive}"
				 :key="key">
					<view class="circle"></view>
					<view class="week">{{item.name}}</view>
				</view>
			</view>

			<text style="margin: 30upx auto;display: block;text-align: center;font-size: 38upx;color: #FFFFFF; border: 1upx #EC706B solid;background-color: #EC706B;width: 100%;border-radius: 15upx;padding: 10upx;">您选对了{{trueNum}}件垃圾</text>

			<scroll-view class='items_table' scroll-y="true">
				<view class='list-tr' v-for="(item,index) in refuseProblemList" :key="index">
					<view class="list-td table-name">
						<image class="resultIcon" :src="item.selectPicurl" />{{item.name}}
					</view>
					<text class="list-td table-1">属于</text>
					<text class="list-td table-2">{{item.refuseCityInfo.type_name}}</text>
				</view>
			</scroll-view>
			<text style="margin: 30upx auto;display: block;text-align: center;font-size: 38upx;color: #FFFFFF; border: 1upx #EC706B solid;background-color: #EC706B;width: 50%;border-radius: 15upx;padding: 10upx;"
			 @click="jumpAnswer()">再测一次</text>
		</view>
	</view>


</template>

<script>
	//var api = require('@/common/js/api.js');
	export default {
		data() {
			return {
				refuseProblemList: [],
				currentIndex: 0,
				refuseProblemTotal: 10,
				trueNum: 0,
				showAnswerStatus: false,
				isActive1: false,
				isActive2: false,
				isActive3: false,
				isActive4: false,
				selectFlag: false,
				gradeList: [{
						name: '初出茅庐',
						isActive: false,
					},
					{
						name: '崭露头角',
						isActive: false,
					},
					{
						name: '村头一霸',
						isActive: false,
					},
					{
						name: '江湖传说',
						isActive: false,
					},
					{
						name: '最强王者',
						isActive: false,
					},
				],
				nowGrade: 4,
				score: 0,
			}
		},
		onReady() {
			// #ifdef MP-WEIXIN
			uni.showShareMenu({
				title: '垃圾分类最强攻略',
				content: '垃圾分类查询助手',
			});
			// #endif
		},
		onLoad() {
			this.getData();
		},
		methods: {
			jumpIndex() {
				uni.switchTab({
					url: '/pages/index/index'
				});
				/* uni.redirectTo({
					url: '/pages/index/index'
				}); */

				//关闭所有页面，打开到应用内的某个页面。
				/* uni.reLaunch({
					url: '/pages/index/index'
				}); */
			},
			jumpAnswer() {
				this.getData();
				this.score = this.trueNum = this.currentIndex = 0;
				this.isActive1 = this.isActive2 = this.isActive3 = this.isActive4 = false;
				this.showAnswerStatus = false;
			},
			getData() {
				/* api.post({
					url: 'refuse-classification/refuse-classification-exam-ajax',
					data: {
						city_name:this.currentCity,
						_page: 1,
						_page_size: 10,
					},
					success: data => {
						let result = data.result;
						this.refuseProblemList = result.data;
						this.refuseTypeInfo = result.refuseTypeInfo;
						this.refuseProblemTotal = this.refuseProblemList.length;
					}
				}); */
				this.refuseProblemList = [{
						id: 1,
						name: '狗屎1',
						refuseCityInfo: {
							type: '1',
							type_name: '',
						},
						selectPicurl: '/static/dacha.png',
						userSelect: 0
					},
					{
						id: 2,
						name: '狗屎2',
						refuseCityInfo: {
							type: '1',
							type_name: '',
						},
						selectPicurl: '/static/dacha.png',
						userSelect: 0
					},
					{
						id: 3,
						name: '狗屎3',
						refuseCityInfo: {
							type: '1',
							type_name: '',
						},
						selectPicurl: '/static/dacha.png',
						userSelect: 0
					},
				];
				this.refuseProblemTotal = this.refuseProblemList.length;
			},
			selectAnswer(userSelect, refuseInfo, index) {
				if (this.selectFlag == false) {
					this.selectFlag = true;
					if (userSelect == 1) {
						this.isActive1 = true;
					} else if (userSelect == 2) {
						this.isActive2 = true;
					} else if (userSelect == 3) {
						this.isActive3 = true;
					} else if (userSelect == 4) {
						this.isActive4 = true;
					}

					setTimeout(() => {
						if (refuseInfo.refuseCityInfo.type == 1) {
							var type_name = '湿垃圾';
						} else if (refuseInfo.refuseCityInfo.type == 2) {
							var type_name = '干垃圾';
						} else if (refuseInfo.refuseCityInfo.type == 3) {
							var type_name = '可回收物';
						} else if (refuseInfo.refuseCityInfo.type == 4) {
							var type_name = '有害垃圾';
						}
						if (userSelect != refuseInfo.refuseCityInfo.type) {

							/* uni.showModal({
								title: '',
								showCancel: false,
								content: refuseInfo.name + ' 属于 ' + type_name + '哦~',
								success: (res) => {
									this.currentIndex++;
									this.isActive1 = this.isActive2 = this.isActive3 = this.isActive4 = false;
								}
								
							}); */
							/* uni.showToast({
								title: refuseInfo.name + ' 属于 ' + type_name ,
								icon: 'none',
								duration: 800,
								success: (res) => {
									this.isActive1 = this.isActive2 = this.isActive3 = this.isActive4 = false;
									this.currentIndex++;
								}
							}); */
							this.isActive1 = this.isActive2 = this.isActive3 = this.isActive4 = false;
							this.currentIndex++;

						} else {
							this.trueNum++;
							this.isActive1 = this.isActive2 = this.isActive3 = this.isActive4 = false;
							this.currentIndex++;
							this.score += 10;
						}

						for (var j = 0, len = this.refuseProblemList.length; j < len; j++) {
							if (!this.refuseProblemList[j].selectPicurl) {
								this.refuseProblemList[j].selectPicurl = '/static/dacha.png';
							}
							if (!this.refuseProblemList[j].userSelect) {
								this.refuseProblemList[j].userSelect = 0;
							}
							/* if(!this.refuseProblemList[j].refuseCityInfo.type_name){
								this.refuseProblemList[j].refuseCityInfo.type_name = type_name;
							} */

							if (this.refuseProblemList[j].id == refuseInfo.id) {
								this.refuseProblemList[j].userSelect = userSelect;
							}

							if (userSelect == refuseInfo.refuseCityInfo.type && index == j) {
								this.refuseProblemList[j].selectPicurl = '/static/dagou.png';
								break;
							}
						}
						if (this.refuseProblemTotal == (index + 1)) {
							this.showAnswerStatus = true;
						}
						var scoreRefuseProblemTotal = this.refuseProblemTotal * 10;
						if (this.score <= scoreRefuseProblemTotal * 0.2) {
							this.nowGrade = 0;
						} else if (this.score > scoreRefuseProblemTotal * 0.2 && this.score <= scoreRefuseProblemTotal * 0.4) {
							this.nowGrade = 1;
						} else if (this.score > scoreRefuseProblemTotal * 0.4 && this.score <= scoreRefuseProblemTotal * 0.6) {
							this.nowGrade = 2;
						} else if (this.score > scoreRefuseProblemTotal * 0.6 && this.score <= scoreRefuseProblemTotal * 0.8) {
							this.nowGrade = 3;
						} else if (this.score > scoreRefuseProblemTotal * 0.8 && this.score <= scoreRefuseProblemTotal) {
							this.nowGrade = 4;
						}

						this.selectFlag = false;
					}, 300);
				}

			}
		}
	}
</script>

<style lang="scss">
	.answer-box {}

	.content-box {
		border: #eee 1upx solid;
		border-radius: 18upx;
		width: 30%;
		margin: 0 0 8% 12.5%;
		float: left;
		text-align: center;
		padding: 30upx 0;
		font-size: 32upx;
		background: #FFFFFF;
	}

	.resultIcon {
		width: 40upx;
		height: 40upx;
		vertical-align: middle;
		margin: 0 20upx;
	}

	.active {
		background: #eee;
		border-color: #ccc;
	}

	.trueActive {
		background: green;
		border-color: green;
	}

	.falseActive {
		background: red;
		border-color: red;
	}

	.content-box view {
		margin: 20upx 0 0 0;
	}

	.content-box image {
		border-radius: 18upx;
		width: 100upx;
		height: 100upx;
	}

	.current-info {
		text-align: center;
		width: 100%;
		display: block;
		clear: both;
		color: #606266;
	}

	/* 垃圾列表 */
	.refuseList {
		margin: 50upx 0 0 0;
	}

	.refuse:nth-child(1n+0) {
		background: #eeeeee;
	}

	.refuse:nth-child(2n+0) {
		background: #ffffff;
	}

	.refuse {
		width: 100%;
		line-height: 80upx;
		padding: 0 30upx;
	}

	.items_table {
		border-collapse: collapse;
		width: 100%;
		min-height: 100upx;
		max-height: 700upx;
		// padding-top: 20upx;
	}

	.items_table .list-td {
		float: left;
		text-align: center;
		height: 70upx;
		line-height: 70upx;
	}


	.items_table .list-tr:nth-child(2n) .list-td {
		background: #f3f3f3;
	}

	.items_table .table-name {
		text-align: left;
		width: 60%;
		display: block;
	}

	.items_table .table-1 {
		width: 10%;
		display: block;
	}

	.items_table .table-2 {
		width: 30%;
		display: block;
	}

	/* 进度条 */
	.gradeContent {
		background: #ffffff;
		display: flex;
		flex-direction: row;
		padding: 18upx 6upx 4upx 6upx;

		.item {
			z-index: 9;
			color: #999;
			flex: 1;
			text-align: center;
			padding-bottom: 12upx;

			&-checked {
				color: #3FC0A2;
				font-weight: bolder;

				.circle {
					background-color: #3FC0A2 !important;
				}
			}

			&-close {
				color: #999;
			}

			.week {
				margin-top: 4upx;
				font-size: 28upx;
			}

			.circle {
				width: 20upx;
				height: 20upx;
				border-radius: 50%;
				border: 1px solid #ebedf0;
				margin: 20upx auto;
				background-color: #ffffff;
			}
		}

		.line {
			position: absolute;
			top: 45upx;
			width: 94%;
			left: 3%;
			height: 4upx;
			background-color: #ebedf0;
		}
	}
</style>
