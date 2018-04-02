import {
	getUser,
	getAddressList
} from '../service/getData'   //调用API
import {
	GET_USERINFO,
	SAVE_ADDRESS
} from './mutation-types.js'    //组件状态提交事件

export default {

	async getUserInfo({
		commit,
		state
	}) {
		let res = await getUser();
		commit(GET_USERINFO, res);   //获取用户信息存入vuex
	},
	async saveAddress({
		commit,
		state
	}) {

		if(state.removeAddress.length > 0) return;

		let addres = await getAddressList(state.userInfo.user_id);
		commit(SAVE_ADDRESS, addres);	
	},
}